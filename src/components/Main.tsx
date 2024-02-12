import Slide from "./Slide";
import "../Main.scss";

function Main() {
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

      <div className="service-contain">
        <div className="service-cardOne">
          <Slide>
            <button className="btn-one">Product Design</button>
          </Slide>
          <div className="card-desOne">
            <p>
              With a client-centric approach, our team of experts is ready to
              deliver pixel-perfect designs for your use cases.
            </p>
          </div>
        </div>

        <div className="service-cardTwo">
          <Slide delay={0.3}>
            <button className="btn-two">Technical Writing</button>
          </Slide>

          <div className="card-desTwo">
            <p>
              Work with our team of technical writing experts to attend to your
              technical writing needs; planning, content strategy, and
              improvement of existing technical documents.
            </p>
          </div>
        </div>

        <div className="service-cardThree">
          <Slide delay={0.5}>
            <button className="btn-three">Websites/Landing Pages</button>
          </Slide>

          <div className="card-desThree">
            <p>
              Upgrade your brand by working with our expert-led team to build
              your websites and landing pages.
            </p>
          </div>
        </div>

        <div className="service-cardFour">
          <Slide delay={0.4}>
            <button className="btn-four">E-commerce Stores</button>
          </Slide>

          <div className="card-desFour">
            <p>
              Upgrade your brand by working with our expert-led team to build
              your websites and landing pages.
            </p>
          </div>
        </div>

        <div className="service-cardFive">
          <Slide delay={0.5}>
            <button className="btn-five">Software consultancy</button>
          </Slide>

          <div className="card-desFive">
            <p>
              Engage our team of experts to discuss general software needs not
              limited to software evaluation and assessment, technical content
              auditing, and general software contracts.
            </p>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card-desOne">
          <h3>Product design</h3>
          <p>
            With a client-centric approach, our team of experts is ready to
            deliver pixel-perfect designs for your use cases.
          </p>
        </div>

        <div className="card-desTwo">
          <h3>Technical Writing</h3>
            <p>
              Work with our team of technical writing experts to attend to your
              technical writing needs; planning, content strategy, and
              improvement of existing technical documents.
            </p>
          </div>

          <div className="card-desThree">
            <h3>Websites/Landing Pages</h3>
            <p>
              Upgrade your brand by working with our expert-led team to build
              your websites and landing pages.
            </p>
          </div>

          <div className="card-desFour">
            <h3>E-commerce Stores</h3>
            <p>
              Upgrade your brand by working with our expert-led team to build
              your websites and landing pages.
            </p>
          </div>

          <div className="card-desFive">
            <h3>Software Consultancy</h3>
            <p>
              Engage our team of experts to discuss general software needs not
              limited to software evaluation and assessment, technical content
              auditing, and general software contracts.
            </p>
          </div>
      </div>
    </div>
  );
}

export default Main;