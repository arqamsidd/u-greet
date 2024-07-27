import React, { useEffect, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dashboard, useUppyState } from '@uppy/react';
import ProgressBar from '@uppy/progress-bar';
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import AuthContext from '../../context/authContext'; // Ensure this path is correct
import actionTypes from '../../State/actions/actionTypes';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/file-input/dist/style.css';
import '@uppy/progress-bar/dist/style.css';

const createUppy = (csrfToken) => {
  return new Uppy({
    restrictions: {
      allowedFileTypes: ['video/*', 'image/*']
    },
    autoProceed: false,
    showProgressDetails: true,
  }).use(XHRUpload, {
    endpoint: '/api/create-greet-media',
    headers: {
      'X-CSRF-TOKEN': csrfToken,
    },
    formData: true,
    fieldName: 'media[]',
    bundle: true,
  });
};

const DragAndDropUploader = ({ greetData }) => {
  const { state } = useContext(AuthContext);
  const dispatch = useDispatch();
  const csrfToken = document.querySelector('meta[name="csrf_token"]').getAttribute('content');

  const [uppy] = useState(() => createUppy(csrfToken));

  // useEffect(()=>{
  //   return () => {
  //     uppy.destroy(); // Properly destroy the Uppy instance
  //   };
  // },[])

  useEffect(() => {
    const currentUppy = uppy;
    currentUppy.setMeta({
      greet_id: greetData?.id,
      user_id: state?.user?.id,
    });

    currentUppy.on('complete', (result) => {
      //console.log("After Upload: ", result);
      
      dispatch({
        type: actionTypes.GET_ALL_UPLOADED_MEDIA,
        payload: {
          greet_id: greetData?.id,
        },
      });

    });

    // Clean up Uppy instance on component unmount  
    // return () => {
    //   currentUppy.destroy(); // Properly destroy the Uppy instance
    // };
  }, [dispatch, greetData?.id, state?.user?.id, uppy]);

  // const fileCount = useUppyState(uppy, (state) => Object.keys(state.files).length);
  // const totalProgress = useUppyState(uppy, (state) => state.totalProgress);

  return (
    <div>
      <div className="card text-center align-items-center">        
        
       
        <Dashboard uppy={uppy} proudlyDisplayPoweredByUppy={false} showProgressDetails={true} />
      </div>
    </div>
  );
};

export default DragAndDropUploader;
