import React from "react";
import Link from "next/link";

const FooterBook = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div
        className="footer-bottom-area border-top"
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          color: "#000",
          textAlign: "center",
          padding: "20px 0px",
          backgroundColor:'#fff',
          zIndex:'999999'
        }}
      >
        <div className="container">
          <div className="copy-right">
            <p style={{color:'#000'}}>
              Copyright &copy; {currentYear} Lorem
              <a href="https://envyTheme.com/" target="blank"></a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterBook;
