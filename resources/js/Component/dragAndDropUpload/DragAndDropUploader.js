import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import dnd from "../../../../public/images/drag-and-drop.5ed4ffa9.svg";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";
import heic2any from "heic2any";
import EXIF from 'exif-js'

const DragAndDropUploader = ({ greetData }) => {
    const { state } = useContext(AuthContext);
    // const { greetData } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    function getOrientation(file) {
      return new Promise((resolve) => {
        EXIF.getData(file, function () {
          resolve(EXIF.getTag(this, 'Orientation'));
        
        // resolve(EXIF.getAllTags(this));
        });
      });
    }


    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
            accept: {
                "video/mp4": [".mp4"],
                "video/mov": [".mov"],
                "image/jpg": [],
                "image/jpeg": [],
                "image/png": [],
                "image/heic": [".heic"],
            },
            getFilesFromEvent: async (event) => {
                let files = [];
                if (typeof FileSystemFileHandle !== "undefined") {
                    console.log(
                        "d event of beg file",
                        event,
                        event[0] instanceof FileSystemFileHandle
                    );
                    if (event[0] instanceof FileSystemFileHandle) {
                        for (const eve of event) {
                            console.log("dhruvin eve getfile", eve);
                            const file = await eve.getFile();
                            //   console.log("d event inside if", files)
                            files.push(file);
                            console.log(
                                "d event of beg file 2222 if",
                                event,
                                files
                            );
                        }
                    } else {
                        files =
                            event.dataTransfer?.files ||
                            event.target?.files ||
                            [];
                        console.log(
                            "d event of beg file 2222 else",
                            event,
                            files
                        );
                    }
                } else {
                    files =
                        event.dataTransfer?.files || event.target?.files || [];
                    console.log("d event of beg file 2222 else", event, files);
                }
                console.log(acceptedFiles);
                const promises = [];
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const regImage = /image/;
                    if (
                        (file.type != "image/heif" &&
                            file.type != "image/heic" &&
                            file.type != "") ||
                        file.name.includes(".mov")
                    ) {
                        console.log("dhruvin is not heif");
                        if (regImage.test(file.type)) {
                            const promise = new Promise((resolve, reject) => {
                                const image = new Image();
                                let url;
                                image.onload = function () {
                                    
                                    // file.width = image.width;
                                    // file.height = image.height;
                                    // resolve(file);
                                    const orientation = getOrientation(file);
                                    console.log("dhruvin orientation ==>", orientation)
                                    const canvas = document.createElement('canvas');
                                    const ctx = canvas.getContext('2d');
                            
                                    if (orientation > 1) {
                                      // Swap width and height for sideways orientations
                                      canvas.width = image.height;
                                      canvas.height = image.width;
                                    } else {
                                      canvas.width = image.width;
                                      canvas.height = image.height;
                                    }
                            
                                    // Apply rotation for sideways orientations
                                    if (orientation === 6) {
                                      ctx.rotate(Math.PI / 2);
                                      ctx.drawImage(image, 0, -image.height, image.width, image.height);
                                    } else if (orientation === 8) {
                                      ctx.rotate(-Math.PI / 2);
                                      ctx.drawImage(image, -image.width, 0, image.width, image.height);
                                    } else if (orientation === 3) {
                                      ctx.rotate(Math.PI);
                                      ctx.drawImage(image, -image.width, -image.height, image.width, image.height);
                                    } else {
                                      ctx.drawImage(image, 0, 0, image.width, image.height);
                                    }
                                    // Convert canvas to a Blob representing the rotated image
                                    canvas.toBlob(function (blob) {
                                        const rotatedFile = new File([blob], file.name, { type: file.type });
                                        // Here, you can use the `rotatedFile` as needed.
                                        // For example, you could upload it via XMLHttpRequest or fetch API.
                                        //   console.log(rotatedFile);
                                        resolve(rotatedFile);
                                    }, file.type);
                                };
                                url = URL.createObjectURL(file);
                                image.src = url;
                            });
                            promises.push(promise);
                        } else {
                            if (
                                file.type != "video/mp4" &&
                                file.type != "video/mov"
                            ) {
                                const promise = new Promise(
                                    (resolve, reject) => {
                                        resolve(file);
                                    }
                                );
                                promises.push(promise);
                            } else {
                                const promise = new Promise(
                                    (resolve, reject) => {
                                        const video =
                                            document.createElement("video");
                                        let url;
                                        video.onloadedmetadata = function () {
                                            file["width"] = video.videoWidth;
                                            file["height"] = video.videoHeight;
                                            resolve(file);
                                        };
                                        console.log("d event in video", video);
                                        url = URL.createObjectURL(file);
                                        video.src = url;
                                    }
                                );
                                promises.push(promise);
                            }
                        }
                    } else {
                        console.log("dhruvin is heif");
                        const promise = new Promise((resolve, reject) => {
                            heic2any({
                                blob: file,
                                toType: "image/jpeg", // Convert to JPEG format
                                quality: 1, // Set quality value as per your requirements
                            }).then((convertedBlob) => {
                                const image2 = new Image();
                                let url;
                                image2.onload = function () {
                                    convertedBlob["width"] = image2.width;
                                    convertedBlob["height"] = image2.height;
                                    convertedBlob["name"] =
                                        image2.height + image2.size + ".jpeg";
                                    resolve(convertedBlob);
                                };
                                url = URL.createObjectURL(convertedBlob);
                                image2.src = url;
                            });
                        });
                        promises.push(promise);
                    }
                }

                return await Promise.all(promises);
            },
            validator: (file) => {
                console.log({file})
                if (
                    file.type != "video/mp4" &&
                    file.type != "video/mov" &&
                    file.type != "image/jpg" &&
                    file.type != "image/jpeg" &&
                    file.type != "image/png" &&
                    file.type != "image/heic" &&
                    file.type != "video/quicktime" &&
                    file.type != ""
                ) {
                    console.log('if')
                    return {
                        code: "small-width",
                        message: `Image width must be greater than 800`,
                    };
                } else if (file?.width < 500 || file?.height < 500) {
                    console.log('else if', file?.width)
                    console.log('else if', file?.height)
                    return {
                        code: "small-width",
                        message: `Image width must be greater than 800`,
                    };
                }
                console.log('Final')
                return null;
            },
        });

    // console.log("acceptedFiles", acceptedFiles);
    // console.log("fileRejections", fileRejections);

    // const acceptedFileItems = acceptedFiles.map((file) => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //         <ul>
    //             {errors.map((e) => (
    //                 <li key={e.code}>{e.message}</li>
    //             ))}
    //         </ul>
    //     </li>
    // ));

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            //     acceptedFiles.map((file) => uploadAcceptedFile(file));
            uploadAcceptedFile(acceptedFiles);
        }
    }, [acceptedFiles]);
    const uploadAcceptedFile = (acceptedFiles) => {
        console.log("dhruvin upload =====>", acceptedFiles )
       
        if (greetData?.id) {
            dispatch({
                type: actionTypes.POST_FILE,
                payload: {
                    file: acceptedFiles,
                    uId: state?.user?.id,
                    greet_id: greetData?.id,
                    // media_thumb: media_thumb,
                },
            });
        }
    };

    return (
        // <section className="container">
        <div
            style={{
                border: fileRejections.length > 0 ? "2px solid red" : "",
            }}
        >
            <div className="card text-center align-items-center">
                <div {...getRootProps({ className: "dropzone" })}>
                    <div style={{ marginBottom: "10px" }}>
                        <input {...getInputProps()} />
                        <img src={dnd} alt="drag and drop" width={200} />
                        <p>Drag n’ Drop or Select Files</p>
                        <span>Edit and arrange pictures and videos to your liking and customize with music and background.</span>
                        {/* <span
                            style={{
                                color: fileRejections.length > 0 ? "red" : "",
                            }}
                        >
                            [File Requirements: Video must be .MP4 or .MOV &
                            Image must be .JPG, .JPEG or .PNG format. Both
                            require dimensions above 500px]
                            {/* <em>
                                (Only image & video file of dimensions
                                <br />
                                above 500px will be accepted)
                            </em>
                            <br />
                            <em>
                                (image must be in ".jpg" or ".jpeg" or ".png" or
                                ".heic" formate)
                            </em>
                            <br />
                            <em>(video must be in ".mp4" or ".mov" formate)</em> }
                        </span> */}
                    </div>
                    {/* <aside>
                            <h4>Accepted files</h4>
                            <ul>{acceptedFileItems}</ul>
                            <h4>Rejected files</h4>
                            <ul>{fileRejectionItems}</ul>
                        </aside> */}
                    <button
                        // {...getRootProps({ className: "dropzone" })}
                        // onClick={openDialog}
                        style={{ width: "fit-content" }}
                        className="bg-10 bold color-white disableOnSubmit"
                    >
                        <div>Select Files</div>
                    </button>
                </div>
            </div>
        </div>
        // </section>
    );
};

export default DragAndDropUploader;
