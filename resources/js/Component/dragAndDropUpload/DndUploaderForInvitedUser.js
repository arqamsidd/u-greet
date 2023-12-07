import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import dnd from "../../../../public/images/drag-and-drop.5ed4ffa9.svg";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";

const DndUploaderForInvitedUser = ({ greetData }) => {
    const { state } = useContext(AuthContext);
    // const { greetData } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
            accept: {
                "video/mp4": [],
                "video/*": [],
            },
        });
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
            acceptedFiles.map((file) => uploadAcceptedFile(file));
        }
    }, [acceptedFiles]);
    const uploadAcceptedFile = (file) => {
        if (greetData?.id) {
            dispatch({
                type: actionTypes.POST_FILE,
                payload: {
                    file: file,
                    uId: state.user.id,
                    greet_id: greetData?.id,
                },
                // {
                //     greet_id: 1,
                //     // greet_id: id,
                //     user_id: state.user.id,
                //     media: file,
                // },
            });
        }
    };

    return (
        // <section className="container">
        <div
            style={{
                border: fileRejections.length > 0 ? "2px solid red" : "",
                height: "100%",
            }}
        >
            <div
                className="card text-center align-items-center"
                style={{ height: "100%" }}
            >
                <div {...getRootProps({ className: "dropzone" })}>
                    <div>
                        <input {...getInputProps()} />
                        <img src={dnd} alt="drag and drop" width={200} />
                        <p>
                            Drag 'n' drop some files here, or click to select
                            files
                        </p>
                        <em>(Only video file will be accepted)</em>
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

export default DndUploaderForInvitedUser;
