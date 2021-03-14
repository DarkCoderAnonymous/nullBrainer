import React from 'react';
import video from '../../assets/video/homepage.mp4';
const VideoComponent = () => {
    return(
        <>
            <video src={video} autoplay="true" loop muted className="myVideo"/>
            <div className="text-container">
                <div className="homepageText"> Impartial, Remote, 3rd-Party, <br />
                    Estimating Engine  
                </div>
            </div>
        </>     
    )
}
export default VideoComponent;