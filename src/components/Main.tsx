import Slide from "./Slide";
import "../Main.scss";
import { useState } from "react";
//import useMediaQuery

function Main() {
  const [showText, setShowText] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);

  //define the media query: const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  //const [activeStack, setActiveStack] = useState<number | null>(null);
  // const moveStackUp = (index: number) => {
  //  setActiveStack(prevIndex => (prevIndex === index ? null : index));
  //};

  const toggleText = (index: number) => {
    setShowText((prevState) => {
      const updatedShowText = prevState.map((_, idx) => idx === index);
      return updatedShowText;
    });
  };

  //add different state for card stack: <button onClick={isSmallScreen ? toggleText : moveStackUp}>

  return (
    <div className="main-container">
      <div className="text-area">
        <h1>craft your digital beauty</h1>
        <p className="mobile-text">
          With a client-centric approach, innovation, and reliable support, we
          are dedicated to empowering digital dreams with expertise and
          creativity.
        </p>
        <p className="desktop-text">
          Focused on you, fueled by creativity. Transforming digital dreams into
          vivid relaities with our expertise and innovation.
        </p>
      </div>

      <div className="flex-contain">
        <div className="service-contain">
          <div className="service-cardOne">
            <Slide>
              <button
                className="service-btn btn-one"
                onClick={() => toggleText(0)}
              >
                Product Design
              </button>
            </Slide>
            {showText[0] && (
              <div className="card-des" style={{ display: "block" }}>
                <p>
                  With a client-centric approach, our team of experts is ready
                  to deliver pixel-perfect designs for your use cases.
                </p>
              </div>
            )}
          </div>

          <div className="service-cardTwo">
            <Slide delay={0.3}>
              <button
                className="service-btn btn-two"
                onClick={() => toggleText(1)}
              >
                Technical Writing
              </button>
            </Slide>

            {showText[1] && (
              <div className="card-des" style={{ display: "block" }}>
                <p>
                  Work with our team of technical writing experts to attend to
                  your technical writing needs; planning, content strategy, and
                  improvement of existing technical documents.
                </p>
              </div>
            )}
          </div>

          <div className="service-cardThree">
            <Slide delay={0.5}>
              <button
                className="service-btn btn-three"
                onClick={() => toggleText(2)}
              >
                Websites/Landing Pages
              </button>
            </Slide>

            {showText[2] && (
              <div className="card-des" style={{ display: "block" }}>
                <p>
                  Upgrade your brand by working with our expert-led team to
                  build your websites and landing pages.
                </p>
              </div>
            )}
          </div>

          <div className="service-cardFour">
            <Slide delay={0.4}>
              <button
                className="service-btn btn-four"
                onClick={() => toggleText(3)}
              >
                E-commerce Stores
              </button>
            </Slide>

            {showText[3] && (
              <div className="card-des" style={{ display: "block" }}>
                <p>
                  Upgrade your brand by working with our expert-led team to
                  build your websites and landing pages.
                </p>
              </div>
            )}
          </div>

          <div className="service-cardFive">
            <Slide delay={0.5}>
              <button
                className="service-btn btn-five"
                onClick={() => toggleText(4)}
              >
                Software consultancy
              </button>
            </Slide>

            {showText[4] && (
              <div className="card-des" style={{ display: "block" }}>
                <p>
                  Engage our team of experts to discuss general software needs
                  not limited to software evaluation and assessment, technical
                  content auditing, and general software contracts.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {showText[0] && (
            <div className="cards-style card-desOne" style={{ zIndex: "2" }}>
              <h3 className="heading">Product design</h3>
              <p className="text">
                With a client-centric approach, our team of experts is ready to
                deliver pixel-perfect designs for your use cases.
              </p>
            </div>
          )}

          {showText[1] && (
            <div className="cards-style card-desTwo" style={{ zIndex: "2" }}>
              <h3 className="heading">Technical Writing</h3>
              <p className="text">
                Work with our team of technical writing experts to attend to
                your technical writing needs; planning, content strategy, and
                improvement of existing technical documents.
              </p>
            </div>
          )}

          {showText[2] && (
            <div className="cards-style card-desThree" style={{ zIndex: "2" }}>
              <h3 className="heading">Websites/Landing Pages</h3>
              <p className="text">
                Upgrade your brand by working with our expert-led team to build
                your websites and landing pages.
              </p>
            </div>
          )}

          {showText[3] && (
            <div className="cards-style card-desFour" style={{ zIndex: "2" }}>
              <h3 className="heading">E-commerce Stores</h3>
              <p className="text">
                Upgrade your brand by working with our expert-led team to build
                your websites and landing pages.
              </p>
            </div>
          )}

          {showText[4] && (
            <div className="cards-style card-desFive" style={{ zIndex: "2" }}>
              <h3 className="heading">Software Consultancy</h3>
              <p className="text">
                Engage our team of experts to discuss general software needs not
                limited to software evaluation and assessment, technical content
                auditing, and general software contracts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;