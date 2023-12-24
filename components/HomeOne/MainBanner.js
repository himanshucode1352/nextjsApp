import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import ModalVideo from "react-modal-video";

const MainBanner = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div className="main-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="">
              <video
                className="depicter-bg-video"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
              >
                <source src="/img/about/bttc_2021.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </React.Fragment>
  );
};

export default MainBanner;
