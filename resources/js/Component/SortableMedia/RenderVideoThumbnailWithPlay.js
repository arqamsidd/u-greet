import React, { useEffect, useRef, useState } from "react";

const RenderVideoThumbnailWithPlay = ({ url, ifThumbPresent }) => {
    const videoRef = useRef(null);
    const [thumbnailUrl, setThumbnailUrl] = useState("");

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = url;
            videoRef.current.load();

            const captureFrame = () => {
                const canvas = document.createElement("canvas");
                canvas.width = videoRef.current.videoWidth;
                canvas.height = videoRef.current.videoHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                setThumbnailUrl(canvas.toDataURL());
            };

            videoRef.current.addEventListener("loadedmetadata", captureFrame);

            return () => {
                videoRef.current?.removeEventListener("loadedmetadata", captureFrame);
            };
        }
    }, [url]);

    return (
        <div>
            {ifThumbPresent ? (
                <img
                    src={ifThumbPresent}
                    alt="Thumbnail"
                    className="overrideStyleForImage"
                    style={{ objectFit: "cover" }}
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
        </div>
    );
};

export default RenderVideoThumbnailWithPlay;
