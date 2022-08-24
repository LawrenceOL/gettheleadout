import React, {useState} from "react";

const PageChangeButtons = (props) => {

    return (
      <div className="dotbuttonscontainer">
        <div
          style={{
            backgroundColor: props.firstOverlay ? "#005EA2" : "#F2F4F7",
          }}
          className="changeoverlaybutton"
          onClick={props.showFirstOverlay}
        ></div>
        <div
          style={{
            backgroundColor: props.secondOverlay ? "#005EA2" : "#F2F4F7",
          }}
          className="changeoverlaybutton"
          onClick={props.showSecondOverlay}
        ></div>
        <div
          style={{
            backgroundColor: props.thirdOverlay ? "#005EA2" : "#F2F4F7",
          }}
          className="changeoverlaybutton"
          onClick={props.showThirdOverlay}
        ></div>
      </div>
    );
}

export default PageChangeButtons