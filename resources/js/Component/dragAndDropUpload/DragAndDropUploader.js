import React, { useState, useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Upload } from 'tus-js-client'; // Import the Upload class from tus-js-client
import AuthContext from '../../context/authContext'; // Ensure this path is correct
import actionTypes from '../../State/actions/actionTypes';

const DragAndDropUploader = ({ greetData }) => {
  const { state } = useContext(AuthContext);
  const dispatch = useDispatch();
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const [uploadProgress, setUploadProgress] = useState(0); // For tracking upload progress
  const [fileQueue, setFileQueue] = useState([]); // Queue of files to be uploaded
  const [dragging, setDragging] = useState(false); // For tracking drag-and-drop state
  const [uploading, setUploading] = useState(false); // To disable Browse and Drag&Drop while uploading
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [currentFileIndex, setCurrentFileIndex] = useState(0); // Track the current file being uploaded

  const fileInputRef = useRef(null); // Ref for the file input element

  // Supported file types
  const validFileTypes = ['video/mp4', 'video/mov', 'video/mkv', 'image/jpeg', 'image/png', 'image/gif', 'video/quicktime', 'image/heic'];

  // Automatically resume uploads if they were interrupted
  useEffect(() => {
    if (fileQueue.length > 0 && (!uploading || currentFileIndex > 0) && currentFileIndex < fileQueue.length) {
      uploadNextFile(); // Start uploading the next file when fileQueue changes
    } else {
      setUploading(false);
    }
  }, [fileQueue, currentFileIndex]);

  // Function to start uploading the next file in the queue
  const uploadNextFile = () => {
    if (currentFileIndex >= fileQueue.length) {
      console.log('All files uploaded. Stopping.');
      setUploading(false); // Re-enable interactions when all files are processed
      return;
    }
    const file = fileQueue[currentFileIndex];
    if (file) {
      console.log('Uploading file:', file.name);
      setUploading(true); // Set uploading state to true when we start
      handleFileUpload(file); // Upload the current file
    }
  };

  // Function to handle file upload using tus-js-client with resumable uploads
  const handleFileUpload = (file, storedUploadUrl = null) => {
    if (!file || !validFileTypes.includes(file.type)) {
      setErrorMessage('Invalid file type. Only image and video files are allowed.');
      console.log('Invalid file type:', file.type);
      setUploading(false);
      return;
    }

    if (file.size < 500 * 1024) {
      setErrorMessage('File size must be greater than 500KB.');
      console.log('File too small:', file.size);
      setUploading(false);
      return;
    }

    setErrorMessage('');

    // Create a new tus upload
    const tusUpload = new Upload(file, {
      endpoint: '/api/tus', // The Tus server endpoint
      headers: {
        'X-CSRF-TOKEN': csrfToken, // Add CSRF token for Laravel
      },
      metadata: {
        greet_id: greetData?.id,  // Base64 encode the greet_id
        user_id: state?.user?.id, // Base64 encode the user_id
        filename: file.name,
        filetype: file.type,
      },
      uploadSize: file.size, // The size of the file
      chunkSize: 52428800, // Set chunk size to 50MB

      // Retry logic in case of errors
      retryDelays: [0, 1000, 3000, 5000],

      onError: (error) => {
        console.error('Upload failed for file:', file.name, error);
        setErrorMessage(`Upload failed for file: ${file.name}. Please try again.`);
        setUploadProgress(0);
        setUploading(false);
        // Move to the next file in the queue even if an error occurs
        setCurrentFileIndex((prevIndex) => prevIndex + 1);
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = (bytesUploaded / bytesTotal) * 100;
        setUploadProgress(percentage); // Update the progress state
        console.log(`Uploading ${file.name}: ${bytesUploaded} of ${bytesTotal} bytes (${percentage.toFixed(2)}%)`);
      },
      onSuccess: () => {
        console.log('Upload succeeded for file:', file.name);
        setUploadProgress(0); // Reset progress bar for the next file
        setErrorMessage(''); // Clear any error messages

        // Dispatch action to retrieve uploaded media after successful upload
        dispatch({
          type: actionTypes.GET_ALL_UPLOADED_MEDIA,
          payload: {
            greet_id: greetData?.id,
          },
        });

        // Move to the next file in the queue after successful upload
        setCurrentFileIndex((prevIndex) => prevIndex + 1);
      },
      onAfterResponse: (req, res) => {
        if (tusUpload.url) {
          // Store the upload URL for resumable uploads
          console.log('Upload URL for file:', file.name, tusUpload.url);
          localStorage.setItem(`tus-upload-url-${file.name}`, tusUpload.url);
        }
      },
    });

    // Start the upload
    console.log('Starting upload for file:', file.name);
    tusUpload.start();
  };

  // Handle file input change event (multiple files)
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileQueue(files); // Queue the selected files
    setCurrentFileIndex(0); // Reset index when new files are added
  };

  // Trigger the hidden file input when the button is clicked
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Drag-and-Drop handlers
  const handleDragOver = (event) => {
    event.preventDefault();
    if (!uploading) {
      setDragging(true);
    }
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    if (!uploading) {
      const files = Array.from(event.dataTransfer.files);
      setFileQueue(files); // Queue the dropped files
      setCurrentFileIndex(0); // Reset index when new files are added
    }
  };

  return (
    <div className="card text-center align-items-center">
      {/* Drag-and-drop area */}
      <div
        className={`drag-drop-area ${dragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          width: '100%',
          padding: '20px',
          border: '2px dashed #ccc',
          borderRadius: '10px',
          marginBottom: '20px',
          textAlign: 'center',
          backgroundColor: dragging ? '#e9ecef' : 'transparent',
          pointerEvents: uploading ? 'none' : 'auto', // Disable interaction during upload
        }}
      >
        {dragging ? (
          <p>Drop the file here...</p>
        ) : (
          <p>{uploading ? 'Uploading...' : 'Drag and drop files here, or click the button below to select'}</p>
        )}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          multiple
          style={{ display: 'none' }}
          disabled={uploading}
        />
        <button
          className={uploading ? 'bg-10 bold color-white' : 'bg-3 bold'}
          onClick={handleBrowseClick}
          style={{ cursor: uploading ? 'not-allowed' : 'pointer' }}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Browse Files'}
        </button>
      </div>

      {/* Display error message */}
      {errorMessage && (
        <div style={{ color: '#ce2f2b' }}>
          {errorMessage}
        </div>
      )}

      {/* Display upload progress */}
      {uploadProgress > 0 && (
        <div className="progress-bar" style={{ width: '100%', marginTop: '10px' }}>
          <div
            className="progress"
            style={{
              width: `${uploadProgress}%`,
              backgroundColor: '#1bc5bd',
              height: '20px',
              transition: 'width 0.5s ease-in-out',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DragAndDropUploader;
