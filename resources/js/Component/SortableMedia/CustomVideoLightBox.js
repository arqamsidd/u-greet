import React, { useContext } from "react";
import actionTypes from "../../State/actions/actionTypes";
// cloudinary.config({
//     cloud_name: "dp29or1vx",
//     api_key: "665452937744634",
//     api_secret: "fCsyUXPswgM4l-9aE0OhEfXzrYs",
// });

const DEFAULT_ZOOM_STEP = 0.3;
const DEFAULT_LARGE_ZOOM = 4;
function getXY(e) {
    let x = 0;
    let y = 0;
    if (e.touches && e.touches.length) {
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    } else {
        x = e.pageX;
        y = e.pageY;
    }
    return { x, y };
}
function Cond(props) {
    if (!props.condition) return null;
    return <React.Fragment>{props.children}</React.Fragment>;
}
export default class CustomVideoLightBox extends React.Component {
    initX = 0;
    initY = 0;
    lastX = 0;
    lastY = 0;
    _cont = React.createRef();
    state = {
        x: 0,
        y: 0,
        zoom: 1,
        rotate: 0,
        loading: true,
        moving: false,
        current: this.props?.startIndex ?? 0,
        multi: this.props?.images?.length ? true : false,
    };
    createTransform = (x, y, zoom, rotate) =>
        `translate3d(${x}px,${y}px,0px) scale(${zoom}) rotate(${rotate}deg)`;
    stopSideEffect = (e) => e.stopPropagation();
    getCurrentImage = (s, p) => {
        if (!s.multi) return p.image ?? "";
        return p.images[s.current]?.url ?? p.images?.[s.current] ?? "";
    };
    getCurrentTitle = (s, p) => {
        if (!s.multi) return p.title ?? "";
        return p.images?.[s.current]?.title ?? "";
    };
    resetZoom = () => this.setState({ x: 0, y: 0, zoom: 1 });
    shockZoom = (e) => {
        let {
            zoomStep = DEFAULT_ZOOM_STEP,
            allowZoom = true,
            doubleClickZoom = DEFAULT_LARGE_ZOOM,
        } = this.props;
        if (!allowZoom || !doubleClickZoom) return false;
        this.stopSideEffect(e);
        if (this.state.zoom > 1) return this.resetZoom();
        const _z =
            (zoomStep < 1 ? Math.ceil(doubleClickZoom / zoomStep) : zoomStep) *
            zoomStep;
        const _xy = getXY(e);
        const _cbr = this._cont.current?.getBoundingClientRect?.();
        const _ccx = _cbr.x + _cbr.width / 2;
        const _ccy = _cbr.y + _cbr.height / 2;
        const x = (_xy.x - _ccx) * -1 * _z;
        const y = (_xy.y - _ccy) * -1 * _z;
        this.setState({ x, y, zoom: _z });
    };
    navigateImage = (direction, e) => {
        this.stopSideEffect(e);
        let current = 0;
        switch (direction) {
            case "next":
                current = this.state.current + 1;
                break;
            case "prev":
                current = this.state.current - 1;
                break;
        }
        if (current >= this.props.images.length) current = 0;
        else if (current < 0) current = this.props.images.length - 1;
        this.setState({
            current,
            x: 0,
            y: 0,
            zoom: 1,
            rotate: 0,
            loading: true,
        });
        if (typeof this.props.onNavigateImage === "function") {
            this.props.onNavigateImage(current);
        }
    };
    startMove = (e) => {
        if (this.state.zoom <= 1) return false;
        this.setState({ moving: true });
        let xy = getXY(e);
        this.initX = xy.x - this.lastX;
        this.initY = xy.y - this.lastY;
    };
    duringMove = (e) => {
        if (!this.state.moving) return false;
        let xy = getXY(e);
        this.lastX = xy.x - this.initX;
        this.lastY = xy.y - this.initY;
        this.setState({
            x: xy.x - this.initX,
            y: xy.y - this.initY,
        });
    };
    endMove = (e) => this.setState({ moving: false });
    applyZoom = (type) => {
        let { zoomStep = DEFAULT_ZOOM_STEP } = this.props;
        switch (type) {
            case "in":
                this.setState({ zoom: this.state.zoom + zoomStep });
                break;
            case "out":
                let newZoom = this.state.zoom - zoomStep;
                if (newZoom < 1) break;
                else if (newZoom === 1) this.setState({ x: 0, y: 0, zoom: 1 });
                else this.setState({ zoom: newZoom });
                break;
            case "reset":
                this.resetZoom();
                break;
        }
    };
    applyRotate = (type) => {
        switch (type) {
            case "cw":
                this.setState({ rotate: this.state.rotate + 90 });
                break;
            case "acw":
                this.setState({ rotate: this.state.rotate - 90 });
                break;
        }
    };
    reset = (e) => {
        this.stopSideEffect(e);
        this.setState({ x: 0, y: 0, zoom: 1, rotate: 0 });
    };
    // dhruvin adding following function to save rotation

    rotateImage = (imageUrl, outputFormat, fileName) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const degrees = this.state.rotate % 360; // Get the rotation within 0-360 range

                const radians = (degrees * Math.PI) / 180;
                const cos = Math.abs(Math.cos(radians));
                const sin = Math.abs(Math.sin(radians));

                const originalWidth = image.width;
                const originalHeight = image.height;

                const rotatedWidth = originalWidth * cos + originalHeight * sin;
                const rotatedHeight =
                    originalHeight * cos + originalWidth * sin;

                canvas.width = rotatedWidth;
                canvas.height = rotatedHeight;

                ctx.translate(rotatedWidth / 2, rotatedHeight / 2); // Set the translation to the center of the canvas
                ctx.rotate(radians);
                ctx.drawImage(
                    image,
                    -originalWidth / 2,
                    -originalHeight / 2,
                    originalWidth,
                    originalHeight
                ); // Draw the image centered on the canvas

                canvas.toBlob((blob) => {
                    const rotatedImageBlob = new File([blob], fileName, {
                        type: outputFormat,
                    });
                    resolve(rotatedImageBlob);
                }, outputFormat);
            };

            image.onerror = (error) => {
                reject(error);
            };

            image.src = imageUrl;
        });
    };

    onSaveRotationClick = async (e) => {
        this.stopSideEffect(e);
        console.log("dhruvin in click", this.props.image, this.state.rotate);
        var validDegrees = ((this.state.rotate % 360) + 360) % 360; // Ensure positive degrees between 0 and 359
        var rotations = Math.floor(validDegrees / 90); // Number of 90-degree rotations

        var finalRotationDegree = 0;
        switch (rotations) {
            case 1:
                console.log("Rotate 270 degrees");
                finalRotationDegree = 270;
                break;
            case 2:
                console.log("Rotate 180 degrees");
                // Perform rotation logic for 180 degrees
                finalRotationDegree = 180;
                break;
            case 3:
                console.log("Rotate 90 degrees");
                finalRotationDegree = 90;
                // Perform rotation logic for 270 degrees
                break;
            default:
                console.log("No rotation");
                finalRotationDegree = 0;
                // Perform logic for no rotation
                break;
        }
        console.log("dhruvin finalRotationDegree", finalRotationDegree);
        if (this.props.greetId) {
            this.props.dispatch({
                type: actionTypes.UPDATE_VIDEO,
                payload: {
                    file: this.props.image,
                    rotation: finalRotationDegree,
                    uId: this.props.userId,
                    greet_id: this.props.greetId,
                    onClose: this.props.onClose,
                },
            });
        }

        // const { state } = useContext(AuthContext);
        // const { greetData } = useSelector((state) => state);
        // const dispatch = useDispatch();

        // cloudinary.v2.uploader
        //     .upload(this.props.image, {
        //         eager: [
        //             {
        //                 fetch_format: "webm",
        //                 video_codec: "vp9",
        //                 format: "",
        //                 angle: 90,
        //             },
        //             {
        //                 fetch_format: "mp4",
        //                 video_codec: "h265",
        //                 format: "",
        //                 angle: 90,
        //             },
        //             {
        //                 fetch_format: "mp4",
        //                 video_codec: "h264",
        //                 format: "",
        //                 angle: 90,
        //             },
        //         ],
        //     })
        //     .then((result) => {
        //         console.log(result);
        //     });

        // const fileName = this.props.image.split("/").pop(); // Specify the desired file name here

        // this.rotateImage(this.props.image, "image/jpeg", fileName)
        //     .then((rotatedImageBlob) => {
        //         console.log("dhruvin in click2", rotatedImageBlob);
        //         // Rest of the code for handling the rotated image file
        //         console.log(
        //             "dhruvin in this.props.greetId",
        //             this.props.greetId,
        //             this.props.userId
        //         );
        //         if (this.props.greetId) {
        //             this.props.dispatch({
        //                 type: actionTypes.UPDATE_IMAGE,
        //                 payload: {
        //                     file: rotatedImageBlob,
        //                     uId: this.props.userId,
        //                     greet_id: this.props.greetId,
        //                     // media_thumb: media_thumb,
        //                 },
        //             });
        //         }
        //     })
        //     .catch((error) => {
        //         console.error("dhruvin in click2 Error rotating image:", error);
        //     });
    };

    exit = (e) => {
        if (typeof this.props.onClose === "function")
            return this.props.onClose(e);
        console.error(
            "No Exit function passed on prop: onClose. Clicking the close button will do nothing"
        );
    };
    shouldShowReset = () =>
        this.state.x ||
        this.state.y ||
        this.state.zoom !== 1 ||
        this.state.rotate !== 0;
    canvasClick = (e) => {
        let { clickOutsideToExit = true } = this.props;
        if (clickOutsideToExit && this.state.zoom <= 1) return this.exit(e);
    };
    keyboardNavigation = (e) => {
        let { allowZoom = true, allowReset = true } = this.props;
        let { multi, x, y, zoom } = this.state;
        switch (e.key) {
            case "ArrowLeft":
                if (multi && zoom === 1) this.navigateImage("prev", e);
                else if (zoom > 1) this.setState({ x: x - 20 });
                break;
            case "ArrowRight":
                if (multi && zoom === 1) this.navigateImage("next", e);
                else if (zoom > 1) this.setState({ x: x + 20 });
                break;
            case "ArrowUp":
                if (zoom > 1) this.setState({ y: y + 20 });
                break;
            case "ArrowDown":
                if (zoom > 1) this.setState({ y: y - 20 });
                break;
            case "+":
                if (allowZoom) this.applyZoom("in");
                break;
            case "-":
                if (allowZoom) this.applyZoom("out");
                break;
            case "Escape":
                if (allowReset && this.shouldShowReset()) this.reset(e);
                else this.exit(e);
                break;
        }
    };
    componentDidMount() {
        document.body.classList.add("lb-open-lightbox");
        let { keyboardInteraction = true } = this.props;
        if (keyboardInteraction)
            document.addEventListener("keyup", this.keyboardNavigation);
    }
    componentWillUnmount() {
        document.body.classList.remove("lb-open-lightbox");
        let { keyboardInteraction = true } = this.props;
        if (keyboardInteraction)
            document.removeEventListener("keyup", this.keyboardNavigation);
    }
    render() {
        let image = this.getCurrentImage(this.state, this.props);
        let title = this.getCurrentTitle(this.state, this.props);
        if (!image) {
            console.warn(
                "Not showing lightbox because no image(s) was supplied"
            );
            return null;
        }
        let {
            allowZoom = true,
            allowRotate = true,
            buttonAlign = "flex-end",
            showTitle = true,
            allowReset = true,
        } = this.props;
        let { x, y, zoom, rotate, multi, loading, moving } = this.state;
        let _reset = allowReset && this.shouldShowReset();
        return (
            <div className="lb-container">
                <div
                    className="lb-header"
                    style={{ justifyContent: buttonAlign }}
                >
                    <Cond condition={showTitle && title}>
                        <div
                            className="lb-title"
                            style={{
                                display:
                                    buttonAlign === "center" ? "none" : "flex",
                                order:
                                    buttonAlign === "flex-start"
                                        ? "2"
                                        : "unset",
                            }}
                        >
                            <span
                                title={title}
                                style={{
                                    textAlign:
                                        buttonAlign === "flex-start"
                                            ? "right"
                                            : "left",
                                }}
                            >
                                {title}
                            </span>
                        </div>
                    </Cond>
                    {/* // folowing cond is for reset button which is changed to save rotation */}
                    <Cond condition={buttonAlign === "center" || _reset}>
                        <div
                            title="Reset"
                            style={{
                                order:
                                    buttonAlign === "flex-start"
                                        ? "1"
                                        : "unset",
                                color: "white",
                            }}
                            className={`lb-button reload ${
                                _reset ? "" : "lb-disabled"
                            }`}
                            onClick={this.onSaveRotationClick}
                        >
                            Save Rotation
                        </div>
                    </Cond>
                    {/* <Cond condition={buttonAlign === "center" || _reset}>
                        <div
                            title="Reset"
                            style={{
                                order:
                                    buttonAlign === "flex-start"
                                        ? "1"
                                        : "unset",
                            }}
                            className={`lb-button lb-icon-reset lb-hide-mobile reload ${
                                _reset ? "" : "lb-disabled"
                            }`}
                            onClick={this.reset}
                        ></div>
                    </Cond> */}
                    <Cond condition={multi}>
                        <div
                            title="Previous"
                            className="lb-button lb-icon-arrow prev lb-hide-mobile"
                            onClick={(e) => this.navigateImage("prev", e)}
                        ></div>
                        <div
                            title="Next"
                            className="lb-button lb-icon-arrow next lb-hide-mobile"
                            onClick={(e) => this.navigateImage("next", e)}
                        ></div>
                    </Cond>
                    <Cond condition={allowZoom}>
                        <div
                            title="Zoom In"
                            className="lb-button lb-icon-zoomin zoomin"
                            onClick={() => this.applyZoom("in")}
                        ></div>
                        <div
                            title="Zoom Out"
                            className={`lb-button lb-icon-zoomout zoomout ${
                                zoom <= 1 ? "lb-disabled" : ""
                            }`}
                            onClick={() => this.applyZoom("out")}
                        ></div>
                    </Cond>
                    <Cond condition={allowRotate}>
                        <div
                            title="Rotate left"
                            className="lb-button lb-icon-rotate rotatel"
                            onClick={() => this.applyRotate("acw")}
                        ></div>
                        <div
                            title="Rotate right"
                            className="lb-button lb-icon-rotate rotater"
                            onClick={() => this.applyRotate("cw")}
                        ></div>
                    </Cond>
                    <div
                        title="Close"
                        className="lb-button lb-icon-close close"
                        style={{
                            order:
                                buttonAlign === "flex-start" ? "-1" : "unset",
                        }}
                        onClick={(e) => this.exit(e)}
                    ></div>
                </div>
                <div
                    className={`lb-canvas${loading ? " lb-loading" : ""}`}
                    ref={this._cont}
                    // onClick={(e) => this.canvasClick(e)}
                >
                    {/* <img
                        draggable="false"
                        style={{
                            transform: this.createTransform(x, y, zoom, rotate),
                            cursor: zoom > 1 ? "grab" : "unset",
                            transition: moving ? "none" : "all 0.1s",
                        }}
                        onMouseDown={(e) => this.startMove(e)}
                        onTouchStart={(e) => this.startMove(e)}
                        onMouseMove={(e) => this.duringMove(e)}
                        onTouchMove={(e) => this.duringMove(e)}
                        onMouseUp={(e) => this.endMove(e)}
                        onMouseLeave={(e) => this.endMove(e)}
                        onTouchEnd={(e) => this.endMove(e)}
                        onClick={(e) => this.stopSideEffect(e)}
                        onDoubleClick={(e) => this.shockZoom(e)}
                        onLoad={(e) => this.setState({ loading: false })}
                        className={`lb-img${loading ? " lb-loading" : ""}`}
                        title={title}
                        src={image}
                        alt={title}
                    /> */}
                    {console.log("dhruvvideo image", image)}
                    <video
                        draggable="false"
                        style={{
                            transform: this.createTransform(x, y, zoom, rotate),
                            cursor: zoom > 1 ? "grab" : "unset",
                            transition: moving ? "none" : "all 0.1s",
                        }}
                        // onMouseDown={(e) => this.startMove(e)}
                        // onTouchStart={(e) => this.startMove(e)}
                        // onMouseMove={(e) => this.duringMove(e)}
                        // onTouchMove={(e) => this.duringMove(e)}
                        // onMouseUp={(e) => this.endMove(e)}
                        // onMouseLeave={(e) => this.endMove(e)}
                        // onTouchEnd={(e) => this.endMove(e)}
                        // onClick={(e) => this.stopSideEffect(e)}
                        // onDoubleClick={(e) => this.shockZoom(e)}
                        onLoadedData={(e) => this.setState({ loading: false })}
                        className={`lb-img${loading ? " lb-loading" : ""}`}
                        // title={title}
                        controls // Add this attribute to show video controls
                        autoPlay
                        src={image}
                    />
                    {/* <div className="mobile-controls lb-show-mobile">
                        {multi ? (
                            <div
                                title="Previous"
                                className="lb-button lb-icon-arrow prev"
                                onClick={(e) => this.navigateImage("prev", e)}
                            ></div>
                        ) : null}
                        {_reset ? (
                            <div
                                title="Reset"
                                className="lb-button lb-icon-reset reload"
                                onClick={this.reset}
                            ></div>
                        ) : null}
                        {multi ? (
                            <div
                                title="Next"
                                className="lb-button lb-icon-arrow next"
                                onClick={(e) => this.navigateImage("next", e)}
                            ></div>
                        ) : null}
                    </div> */}
                </div>
            </div>
        );
    }
}
