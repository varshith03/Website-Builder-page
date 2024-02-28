import { useEffect } from "react";
import InnerFrame from "../components/InnerFrame";
import FrameComponent1 from "../components/FrameComponent1";
import LinkFrame from "../components/LinkFrame";
import Rectangle from "../components/Rectangle";
import FrameImage from "../components/FrameImage";
import WebsiteBuildersFrame from "../components/WebsiteBuildersFrame";
import SignUpButtonFrame from "../components/SignUpButtonFrame";
import "./TopFrame.css";

const TopFrame = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="top-frame">
      <div className="rectangle" />
      <div className="rectangle1" />
      <div className="rectangle2" />
      <div className="rectangle3" />
      <div className="image" />
      <div className="rectangle4" />
      <div className="rectangle5" />
      <div className="rectangle6" />
      <div className="rectangle7" />
      <div className="rectangle8" />
      <div className="rectangle9" />
      <div className="rectangle10" />
      <div className="rectangle11" />
      <div className="rectangle12" />
      <div className="rectangle13" />
      <div className="rectangle14" />
      <div className="rectangle15" />
      <div className="rectangle16" />
      <div className="rectangle17" />
      <div className="rectangle18" />
      <div className="rectangle19" />
      <div className="rectangle20" />
      <div className="rectangle21" />
      <div className="image1" />
      <div className="rectangle22" />
      <div className="rectangle23" />
      <div className="rectangle24" />
      <div className="rectangle25" />
      <div className="rectangle26" />
      <div className="rectangle27" />
      <div className="rectangle28" />
      <div className="rectangle29" />
      <div className="rectangle30" />
      <div className="rectangle31" />
      <div className="view-deal">View Deal</div>
      <div className="rectangle32" />
      <div className="image2" />
      <div className="rectangle33" />
      <div className="image3" />
      <div className="rectangle34" />
      <div className="rectangle35" />
      <div className="rectangle36" />
      <div className="rectangle37" />
      <div className="rectangle38" />
      <div className="image4" />
      <div className="rectangle39" />
      <div className="rectangle40" />
      <div className="rectangle41" />
      <div className="rectangle42" />
      <div className="rectangle43" />
      <div className="rectangle44" />
      <div className="rectangle45" />
      <div className="rectangle46" />
      <div className="rectangle47" />
      <div className="rectangle48" />
      <div className="rectangle49" />
      <div className="rectangle50" />
      <div className="rectangle51" />
      <div className="rectangle52" />
      <div className="rectangle53" />
      <div className="rectangle54" />
      <div className="rectangle55" />
      <div className="rectangle56" />
      <div className="rectangle57" />
      <div className="rectangle58" />
      <div className="rectangle59" />
      <div className="rectangle60" />
      <div className="image5" />
      <div className="rectangle61" />
      <div className="rectangle62" />
      <div className="rectangle63" />
      <div className="rectangle64" />
      <div className="rectangle65" />
      <div className="rectangle66" />
      <div className="rectangle67" />
      <div className="rectangle68" />
      <div className="rectangle69" />
      <div className="rectangle70" />
      <div className="rectangle71" />
      <div className="rectangle72" />
      <div className="rectangle73" />
      <div className="rectangle74" />
      <div className="rectangle75" />
      <div className="rectangle76" />
      <div className="rectangle77" />
      <div className="rectangle78" />
      <div className="rectangle79" />
      <div className="rectangle80" />
      <div className="rectangle81" />
      <div className="rectangle82" />
      <div className="rectangle83" />
      <div className="rectangle84" />
      <div className="image6" />
      <div className="rectangle85" />
      <div className="rectangle86" />
      <div className="rectangle87" />
      <div className="rectangle88" />
      <div className="rectangle89" />
      <div className="rectangle90" />
      <div className="rectangle91" />
      <div className="rectangle92" />
      <div className="rectangle93" />
      <div className="rectangle94" />
      <div className="rectangle95" />
      <div className="rectangle96" />
      <div className="rectangle97" />
      <div className="rectangle98" />
      <div className="rectangle99" />
      <div className="rectangle100" />
      <div className="image7" />
      <div className="image8" />
      <div className="image9" />
      <div className="rectangle101" />
      <div className="image10" />
      <div className="rectangle102" />
      <div className="rectangle103" />
      <div className="rectangle104" />
      <div className="image-wrapper">
        <main className="image11">
          <section className="rectangle105">
            <form className="text">
              <div className="rectangle106" />
              <header className="rectangle-text">
                <div className="paragraph-textpolicy-content">
                  <div className="rectanglepolicy-bg" />
                  <div className="line-parent">
                    {/* <div className="line" /> */}
                    <h1 className="best-website-builders">
                      Best Website builders in the US
                    </h1>
                  </div>
                  <div className="input">
                    <div className="rectangle107" />
                    <div className="frame-header-parent">
                      <InnerFrame />
                      <div className="frame-c">
                        <div className="rectangle-d">
                          <div className="frame-e" />
                          <div className="frame-e1" />
                        </div>
                        <button className="top-relevant-button">
                          <div className="top-relevant">Top Relevant</div>
                          <img
                            className="image-icon"
                            alt=""
                            src="/image-3.svg"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="rectangle108" />
                    <div className="rectangle109" />
                  </div>
                </div>
              </header>
              <div className="website-builders-frame">
                <div className="about-parent">
                  <div className="about">
                    <div className="footer-elements" />
                    <div className="footer-elements1" />
                  </div>

                  <button className="rectangle-container">
                    <div className="rectangle110" />
                    <div className="start-build">Tools</div>
                    <div className="rectangle110" />
                  </button>
                  <button className="rectangle-container">
                    <div className="rectangle111" />
                    <div className="start-build">AWS Builder</div>
                    <div className="rectangle111" />
                  </button>
                  <button className="rectangle-container">
                    <div className="rectangle112" />
                    <div className="start-build">Start Build</div>
                    <div className="rectangle113" />
                  </button>
                  <button className="frame-button">
                    <div className="rectangle114" />
                    <div className="frame-div">
                      <div className="rectangle115" />
                      <div className="build-supplies">Build Supplies</div>
                    </div>
                  </button>
                  <button className="frame-button">
                    <div className="rectangle116" />
                    <div className="frame-div">
                      <div className="rectangle117" />
                      <div className="build-supplies">Tooling</div>
                    </div>
                  </button>
                  <button className="frame-button">
                    <div className="rectangle118" />
                    <div className="frame-div">
                      <div className="rectangle119" />
                      <div className="build-supplies">Blue Hosting</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="frame-rectangle-frame">
                <div className="contact-categories-about">
                  <div className="frame-parent-parent">
                    <div className="frame-parent" />
                    <div className="link-frame-parent">
                      <div className="link-frame">
                        <div className="rectangle122" />
                        <div className="text-label-parent">
                          <div className="text-label" />
                          <div className="home">Home</div>
                        </div>
                        <img
                          className="background-rectangle-icon"
                          alt=""
                          src="/background-rectangle.svg"
                        />
                      </div>
                      <div className="webbuilder-frame">
                        <div className="sign-up-call-to-action-parent">
                          <div className="sign-up-call-to-action" />
                          <div className="categories-container">
                            <div className="robotic-automation-box" />
                            <div className="hosting-for-all">
                              Hosting for all
                            </div>
                          </div>
                          <img
                            className="contact-form-icon"
                            alt=""
                            src="/background-rectangle.svg"
                          />
                        </div>
                        <div className="hosting1">Hosting</div>
                      </div>
                    </div>
                    <img
                      className="privacy-policy-link"
                      alt=""
                      src="/background-rectangle.svg"
                    />
                    <div className="privacy-policy">
                      <div className="hosting6">Hosting6</div>
                    </div>
                    <div className="footer-image">
                      <img
                        className="content-block-icon"
                        alt=""
                        src="/background-rectangle.svg"
                      />
                      <div className="hosting5">Hosting5</div>
                    </div>
                    <div className="text-frame">
                      <div className="image-frame" />
                      <div className="image-frame1" />
                    </div>
                  </div>
                  <div className="website-builders-todaysdeals-f">
                    <button className="rectangle-parent4">
                      <div className="rectangle120" data-animate-on-scroll />
                      <img className="image-icon1" alt="" src="/image-9.svg" />
                      <div className="best-choice">Best Choice</div>
                    </button>
                    <div className="rectangle-parent6">
                      <div className="rectangle123" />
                      <div className="rectangle-container-wrapper">
                        <div className="rectangle-container1">
                          <div className="frame-j">
                            <div className="rectangle124" />
                            <div className="div">1</div>
                          </div>
                          <div className="view-deal1">
                            <div className="computer-modern-classic-wix-su">
                              <img
                                className="download-1-icon"
                                loading="lazy"
                                alt=""
                                src="/download-2@2x.png"
                              />
                              <div className="column-frame-parent">
                                <div className="column-frame" />
                                <div className="parent-frame-parent">
                                  <div className="parent-frame" />
                                  <div className="builder-1">Builder 1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-container-parent">
                        <div className="frame-container">
                          <div className="wixpro-72-inch-responsive-webs-parent text-capsule">
                            <div className="wixpro-72-inch-responsive-container">
                              <b className="wixpro-72-inch-responsive">
                                WixPro 72-Inch Responsive Website Builder
                              </b>
                              <span className="comprehensive-digital-platform">
                                - Comprehensive Digital Platform Creation Tool,
                                Streamlined Design Interface for Professional
                                Websites and Online Stores (Black/Blue)
                              </span>
                            </div>
                            <b className="main-highlights">Main highlights</b>
                          </div>
                          <div className="line-with-image">
                            <div className="rectangle-parent7">
                              <div className="rectangle125" />
                              <div className="view-deal-text">
                                <div className="image-parent">
                                  <img
                                    className="image-icon3"
                                    alt=""
                                    src="/image-11.svg"
                                  />
                                  <div className="div1">9.8</div>
                                </div>
                              </div>
                              <div className="data-center-robotic-automation-parent">
                                <div className="data-center-robotic-automation1" />
                                <div className="contact-frame-parent">
                                  <div className="contact-frame" />
                                  <div className="exceptional">Exceptional</div>
                                </div>
                                <img
                                  className="image-icon4"
                                  alt=""
                                  src="/image-12.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-group">
                          <FrameComponent1 whatYouGetReceiveTheWixPr="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." />
                          <div className="frame-wrapper">
                            <button className="rectangle-parent8">
                              <div className="rectangle126" />
                              <div className="view">View</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rectangle-parent5">
                      <div className="rectangle121" data-animate-on-scroll />
                      <img className="image-icon2" alt="" src="/image-16.svg" />
                      <div className="best-value">Best Value</div>
                    </button>
                    <div className="frame-grid">
                      <div className="rectangle127" />
                      <div className="frame-grid-inner">
                        <div className="frame-parent1">
                          <div className="frame-wrapper1">
                            <div className="frame-j-parent">
                              <div className="frame-j1">
                                <div className="rectangle128" />
                                <div className="div2">2</div>
                              </div>
                              <div className="download-button">
                                <img
                                  className="download-7-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/download-2@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="i-m-a-g-e">
                            <div className="frame" />
                            <div className="biulder">Biulder</div>
                            <div className="text-frame-wrapper">
                              <div className="text-frame1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent9">
                        <div className="rectangle129">
                          <div className="rectangle130">
                            <div className="rectangle131">
                              <div className="contact-section-frame">
                                <div className="footer-frame-parent">
                                  <div className="footer-frame" />
                                  <div className="rectangle-parent10">
                                    <div className="rectangle132" />
                                    <div className="rectangle133" />
                                  </div>
                                </div>
                                <div className="sitecraft-68-inch-ultimate-container text-capsule">
                                  <b className="sitecraft-68-inch-ultimate ">
                                    SiteCraft 68-Inch Ultimate Web Design
                                    Studio-
                                  </b>
                                  <span className="advanced-site-creation">
                                    {" "}
                                    Advanced Site Creation Toolkit, Intuitive
                                    Drag-and-Drop Editor for Dynamic Websites
                                    and E-commerce Platforms (Green/White)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <b className="main-highlights1">Main highlights</b>
                          </div>
                          <div className="rectangle-inner">
                            <div className="rectangle-parent11">
                              <div className="rectangle134" />
                              <div className="frame-wrapper2">
                                <div className="image-group">
                                  <img
                                    className="image-icon5"
                                    alt=""
                                    src="/image-11.svg"
                                  />
                                  <div className="div3">9.5</div>
                                </div>
                              </div>
                              <LinkFrame />
                            </div>
                          </div>
                        </div>
                        <div className="frame-wrapper3">
                          <div className="frame-parent2">
                            <div className="frame-wrapper4">
                              <FrameComponent1
                                whatYouGetReceiveTheWixPr="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
                                propFlex="unset"
                                propGap="15px 0px"
                                propAlignSelf="stretch"
                                propPadding="0px 0px 0px 15px"
                                propWidth="475px"
                              />
                            </div>
                            <div className="frame-wrapper">
                              <button className="rectangle-parent8">
                                <div className="rectangle126" />
                                <div className="view">View</div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-icon6">
                    <div className="rectangle136" />
                    <div className="rectangle-background">
                      <div className="rectangle-categories">
                        <div className="frame-j2">
                          <div className="rectangle137" />
                          <div className="frame-k">3</div>
                        </div>
                        <div className="frame-image-contact-icon">
                          <img
                            className="download-6-icon"
                            loading="lazy"
                            alt=""
                            src="/download-2@2x.png"
                          />
                        </div>
                        <div className="frame-todays-deals">
                          <div className="rectangle-parent13">
                            <div className="rectangle138" />
                            <div className="frame-parent3">
                              <div className="frame1" />
                              <div
                                className="builder-11"
                                data-animate-on-scroll
                              >
                                Builder 1
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent4">
                      <div className="frame-parent5">
                        <div className="wixpro-72-inch-responsive-webs-group text-capsule">
                          <div className="wixpro-72-inch-responsive-container1 ">
                            <b className="wixpro-72-inch-responsive1">
                              WixPro 72-Inch Responsive Website Builder
                            </b>
                            <span className="comprehensive-digital-platform1">
                              - Comprehensive Digital Platform Creation Tool,
                              Streamlined Design Interface for Professional
                              Websites and Online Stores (Black/Blue)
                            </span>
                          </div>
                          <b className="main-highlights2">Main highlights</b>
                        </div>
                        <div className="frame-wrapper5">
                          <div className="rectangle-parent14">
                            <div className="rectangle139" />
                            <div className="div4">9.3</div>
                            <div className="rectangle-parent15">
                              <div className="rectangle140" />
                              <div className="exceptional1">Exceptional</div>
                            </div>
                            <img
                              className="frame-group-icon"
                              loading="lazy"
                              alt=""
                              src="/image-12.svg"
                            />
                            <div className="image12" />
                          </div>
                        </div>
                      </div>
                      <div className="name-collector">
                        <div className="picture-holder">
                          <div className="text-capsule">
                            <div className="what-you-get">
                              [What You Get]: Receive the WixPro website builder
                              suite, access to premium design templates, an
                              extensive library of widgets and apps, and
                              detailed step-by-step guides.
                            </div>
                          </div>
                          <div className="show-more">Show more</div>
                        </div>
                        <div className="name-collector-inner">
                          <button className="rectangle-parent16">
                            <div className="rectangle141" />
                            <div className="view3">View</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="privacy-policy-link1">
                    <div className="united-states-icon">
                      <div className="rectangle142" />
                      <div className="frame-parent6">
                        <div className="text-wrapper">
                          <div className="text1">
                            <div className="frame-j3">
                              <div className="rectangle143" />
                              <div className="div5">4</div>
                            </div>
                            <div className="download-2-wrapper">
                              <img
                                className="download-2-icon"
                                loading="lazy"
                                alt=""
                                src="/download-2@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="image-logo">
                          <div className="text-title">
                            <div className="cdk-resposive-builder-container">
                              <b className="cdk-resposive-builder">
                                CDK Resposive Builder:
                              </b>
                              <span className="an-extensive-library">
                                {" "}
                                An extensive library of widgets and apps, and
                                detailed step-by-step guides
                              </span>
                            </div>
                            <LinkFrame
                              propWidth="unset"
                              propPadding="0px 0px 0px var(--padding-9xs)"
                            />
                          </div>
                        </div>
                        <div className="rectangle-parent17">
                          <div className="rectangle144" />
                          <div className="input-field">
                            <div className="label-frame">9.1</div>
                          </div>
                          <div className="rectangle-parent18">
                            <div className="rectangle145" />
                            <div className="privacy-policy-frame-parent">
                              <div className="privacy-policy-frame" />
                              <div className="very-good">Very Good</div>
                            </div>
                            <img
                              className="image-icon7"
                              alt=""
                              src="/image-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="united-states-icon-inner">
                        <div className="frame-parent7">
                          <div className="cdk-wrapper">
                            <div className="cdk">CDK</div>
                          </div>
                          <div className="rectangle-parent19">
                            <div className="rectangle146" />
                            <div className="frame-parent8">
                              <div className="rectangle-parent20">
                                <div className="rectangle147" />
                                <div className="rectangle-parent21">
                                  <div className="rectangle148" />
                                  <div className="why-we-love">
                                    Why we love it
                                  </div>
                                </div>
                                <div className="frame-parent9">
                                  <div className="frame-wrapper6">
                                    <div className="image-container">
                                      <img
                                        className="image-icon8"
                                        alt=""
                                        src="/image-5.svg"
                                      />
                                      <div className="documentation">
                                        Documentation
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rectangle-parent22">
                                    <div className="rectangle149" />
                                    <img
                                      className="image-icon9"
                                      alt=""
                                      src="/image-5.svg"
                                    />
                                    <div className="easy-use">Easy Use</div>
                                  </div>
                                  <div className="rectangle-parent23">
                                    <div className="rectangle150" />
                                    <img
                                      className="image-icon10"
                                      alt=""
                                      src="/image-5.svg"
                                    />
                                    <div className="out-of-box">Out of box</div>
                                  </div>
                                </div>
                              </div>
                              <div className="show-more1">Show more</div>
                            </div>
                            <div className="view-deal-wrapper">
                              <div className="view-deal2">
                                <img
                                  className="image-icon11"
                                  alt=""
                                  src="/image-8.svg"
                                />
                                <button className="rectangle-parent24">
                                  <div className="rectangle151" />
                                  <div className="view4">View</div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-with-rectangle">
                  <div className="rectangle-rectangle">
                    <div className="off-limited-time-parent">
                      <div className="off-limited-time">
                        <h1 className="related-deals-you">
                          Related deals you might like for
                        </h1>
                      </div>
                      <img
                        className="image-icon12"
                        alt=""
                        src="/image-11.svg"
                      />
                    </div>
                    <div className="wix-support-text">
                      <div className="off-rectangle">
                        <div className="computing-classic-text">
                          <div className="frame-frame">
                            <div className="rectangle152" />
                            <div className="time-sensitive-frame">
                              <div className="text-tagline" />
                              <img
                                className="download-3-icon"
                                loading="lazy"
                                alt=""
                                src="/download-2@2x.png"
                              />
                              <div className="join-prompt-text">
                                <div className="rectangle-background1" />
                                <div className="image13" />
                              </div>
                            </div>
                            <div className="main-frame-parent">
                              <div className="main-frame">
                                <button className="tag-collection">
                                  <div className="rectangle153" />
                                  <div className="off">20% Off</div>
                                </button>
                                <button className="tag-collection1">
                                  <div className="rectangle154" />
                                  <div className="limited-time">{`Limited time `}</div>
                                </button>
                              </div>
                              <div className="i-t-automation-segment">
                                <b className="webbuilder-1">Webbuilder 1</b>
                              </div>
                              <div className="group-elements-parent">
                                <div className="group-elements">
                                  <div className="computer-modern-clasic">
                                    Computer Modern clasic with wix support
                                  </div>
                                  <div className="categories">
                                    <div className="frame-frame-todays-deals-text">
                                      <div className="data-center-robotic-automation2" />
                                      <div className="text-element">
                                        <div className="privacy-policy1" />
                                        <div className="terms-of-service">
                                          $39.96
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-with-rectangles">
                                      <div className="subtitle-text" />
                                      <div className="text-frame-parent">
                                        <div className="text-frame2" />
                                        <div className="link-frame1">
                                          $49.96
                                        </div>
                                      </div>
                                      <div className="rectangle-parent25">
                                        <div className="rectangle155" />
                                        <div className="off1">(20% Off)</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button className="search-input">
                                  <div className="rectangle156" />
                                  <div className="view-deal3">View Deal</div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image-logo1">
                          <div className="frame-contact">
                            <div className="rectangle157" />
                            <div className="privacy-rectangle">
                              <div className="time-sensitive-frame1">
                                <div className="frame2" />
                                <img
                                  className="download-4-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/download-2@2x.png"
                                />
                                <div className="join-prompt-text1">
                                  <div className="divider" />
                                  <div className="image14" />
                                </div>
                              </div>
                            </div>
                            <div className="rectangle-elements">
                              <div className="main-frame1">
                                <button className="tag-collection2">
                                  <div className="rectangle158" />
                                  <div className="off2">20% Off</div>
                                </button>
                                <button className="tag-collection3">
                                  <div className="rectangle159" />
                                  <div className="limited-time1">{`Limited time `}</div>
                                </button>
                              </div>
                              <div className="i-t-automation-segment1">
                                <b className="webbuilder-11">Webbuilder 1</b>
                              </div>
                              <div className="categories-rectangle">
                                <div className="aboutand-privacy">
                                  <div className="computer-modern-clasic1">
                                    Computer Modern clasic with wix support
                                  </div>
                                  <div className="multi-frame">
                                    <div className="rectangle160" />
                                    <div className="frame-frame-todays-deals-text1">
                                      <div className="text-frame-contact-details" />
                                      <div className="text-element1">
                                        <div className="united-states-flag-image-frame" />
                                        <div className="contact-frame-categories">
                                          $39.96
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-with-rectangles1">
                                      <div className="frame-rectangle-rectangle-rect" />
                                      <div className="rectangle-parent26">
                                        <div className="rectangle161" />
                                        <div className="div6">$49.96</div>
                                      </div>
                                      <div className="rectangle-parent27">
                                        <div className="rectangle162" />
                                        <div className="off3">(20% Off)</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="privacy-policy-info">
                                  <button className="search-input1">
                                    <div className="rectangle163" />
                                    <div className="view-deal4">View Deal</div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Rectangle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
          <div className="image-parent1">
            <img className="image-icon13" alt="" src="/image-11.svg" />
            <SignUpButtonFrame />
          </div>
          <FrameImage />
        </main>
      </div>
      <div className="rectangle164" />
      <div className="rectangle165" />
      <div className="rectangle166" />
      <div className="rectangle167" />
      <div className="rectangle168" />
      <div className="rectangle169" />
      <div className="rectangle170" />
      <div className="rectangle171" />
      <div className="rectangle172" />
      <div className="rectangle173" />
      <div className="rectangle174" />
      <div className="rectangle175" />
      <div className="rectangle176" />
      <div className="rectangle177" />
      <div className="rectangle178" />
      <div className="rectangle179" />
      <div className="rectangle180" />
      <div className="rectangle181" />
      <div className="rectangle182" />
      <div className="rectangle183" />
      <div className="rectangle184" />
      <div className="rectangle185" />
      <div className="rectangle186" />
      <div className="rectangle187" />
      <div className="rectangle188" />
      <div className="image15" />
      <div className="rectangle189" />
      <div className="rectangle190" />
      <div className="rectangle191" />
      <div className="rectangle192" />
      <WebsiteBuildersFrame />
      <div className="rectangle193" />
      <div className="rectangle194" />
      <div className="rectangle195" />
      <div className="image16" />
      <div className="rectangle196" />
      <div className="rectangle197" />
      <div className="rectangle198" />
      <div className="rectangle199" />
      <div className="rectangle200" />
      <div className="rectangle201" />
      <div className="rectangle202" />
      <div className="rectangle203" />
      <div className="rectangle204" />
      <div className="rectangle205" />
      <div className="rectangle206" />
      <div className="rectangle207" />
      <div className="rectangle208" />
      <div className="rectangle209" />
      <div className="rectangle210" />
      <div className="rectangle211" />
      <div className="rectangle212" />
      <div className="rectangle213" />
      <div className="rectangle214" />
      <div className="rectangle215" />
      <div className="rectangle216" />
      <div className="rectangle217" />
      <div className="rectangle218" />
      <div className="rectangle219" />
      <div className="rectangle220" />
      <div className="image17" />
      <div className="rectangle221" />
      <div className="rectangle222" />
      <div className="rectangle223" />
      <div className="rectangle224" />
      <div className="rectangle225" />
      <div className="rectangle226" />
      <div className="rectangle227" />
      <div className="rectangle228" />
      <div className="rectangle229" />
      <div className="rectangle230">
        <div className="contact-frame1">
          <img className="image-icon14" alt="" src="/image-11.svg" />
          <div className="image18" />
        </div>
      </div>
      <div className="rectangle231" />
      <div className="rectangle232" />
      <div className="rectangle233" />
      <div className="image19" />
      <div className="rectangle234" />
      <div className="rectangle235" />
      <div className="rectangle236" />
      <div className="rectangle237" />
      <div className="rectangle238" />
      <div className="rectangle239" />
      <div className="rectangle240" />
      <div className="rectangle241" />
      <div className="rectangle242" />
      <div className="rectangle243" />
      <div className="rectangle244" />
      <div className="rectangle245" />
    </div>
  );
};

export default TopFrame;
