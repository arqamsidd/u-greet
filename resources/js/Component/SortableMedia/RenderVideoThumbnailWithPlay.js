import React, { useEffect, useRef } from "react";
import { useState } from "react";

const RenderVideoThumbnailWithPlay = ({ url, ifThumbPresent }) => {
    const videoUrl = url;
    const videoRef = useRef(null);
    const [thumbnailUrl, setThumbnailUrl] = useState("");

    useEffect(() => {
        // Load the video when the component mounts
        console.log("dhruvin thumbdatatatatat videoRef", videoRef.current);
        if (videoRef.current) {
            console.log(
                "dhruvin thumbdatatatatat 222222222222",
                videoRef.current
            );
            videoRef.current.src = videoUrl;
            videoRef.current.load();

            // Capture a frame when the video metadata is loaded
            videoRef.current.addEventListener("loadedmetadata", captureFrame);

            return () => {
                // Clean up event listener when the component unmounts
                videoRef.current.removeEventListener(
                    "loadedmetadata",
                    captureFrame
                );
            };
        }
    }, [videoUrl]);

    const captureFrame = () => {
        // Create a <canvas> element to draw the video frame
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        // Draw the current video frame on the canvas
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to a data URL and set it as the thumbnail URL
        setThumbnailUrl(canvas.toDataURL());
    };
    // console.log("dhruvin thumbdatatatatat", ifThumbPresent);

    return (
        <div>
            <div>
                {ifThumbPresent ? (
                    <img
                        src={ifThumbPresent}
                        alt={ifThumbPresent}
                        className="overrideStyleForImage"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <video
                        className="videoinstedofthumb"
                        ref={videoRef}
                        controls={false}
                        muted
                        playsInline
                    />
                )}
                {/* {thumbnailUrl && (
                    <img src={thumbnailUrl} alt="Video Thumbnail" />
                )} */}
            </div>
        </div>
    );
};

export default RenderVideoThumbnailWithPlay;
