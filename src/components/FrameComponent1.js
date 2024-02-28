import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  whatYouGetReceiveTheWixPr,
  propFlex,
  propGap,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propGap, propAlignSelf]);

  const textCapsuleStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const whatYouGetStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="text-capsule-parent" style={frameDivStyle}>
      <div className="text-capsule1" style={textCapsuleStyle}>
        <div className="what-you-get1" style={whatYouGetStyle}>
          {whatYouGetReceiveTheWixPr}
        </div>
      </div>
      <div className="show-more-parent">
        <div className="show-more2">Show more</div>
        <div className="image-wrapper1">
          <img className="image-icon17" alt="" src="/image-10.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
