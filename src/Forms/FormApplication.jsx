import React, { lazy } from "react";
import { Ratio } from "react-bootstrap";

function FormApplication() {
  return (
    // <Container className="fullwidth" style={styles.fullwidth} fluid>
    //   <iframe className="responsiveIframe" style={styles.responsiveIframe} src="https://aviarfs.my1003app.com"></iframe>
    // </Container>

    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <div style={{ width: "auto", height: "auto" }}>
          {/* <div class="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://aviarfs.my1003app.com/"
              id="myForm"
              loading="lazy"
              height="700px"
              width="100%"
            ></iframe>
          </div> */}
          <Ratio aspectRatio="16x9">
            <embed src="https://aviarfs.my1003app.com/" />
          </Ratio>
        </div>
      </div>
    </div>
  );
}

export default FormApplication;

{
  /* <iframe
            loading="eager"
            className="responsiveIframe"
            style={styles.responsiveIframe}
            src="https://aviarfs.my1003app.com/"
            scrolling="no"
          ></iframe> */
}

// const styles = {
//   fullwidth: {
//     position: "relative",
//     width: "100%",
//     overflow: "hidden",
//     height: "100%",
//     // paddingTop: "100%" /* 1:1 Aspect Ratio */,
//   },
//   responsiveIframe: {
//     postion: "absolute",
//     top: "0",
//     left: "0",
//     bottom: "0",
//     right: "0",
//     width: "100%",
//     height: "100%",
//     border: "none",
//   },
// };
