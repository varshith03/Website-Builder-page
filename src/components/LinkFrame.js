import { useMemo } from "react";
import "./LinkFrame.css";

const LinkFrame = ({ propWidth, propPadding, propHeight, propFlex }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div className="frame-wrapper7" style={frameDiv1Style}>
      <div className="rectangle-parent28">
        <div className="rectangle246" />
        <div className="rectangle-parent29">
          <div className="rectangle247" />
          <div className="excellent">Excellent</div>
        </div>
        <img className="image-icon18" alt="" src="/image-14.svg" />
      </div>
    </div>
  );
};

export default LinkFrame;
