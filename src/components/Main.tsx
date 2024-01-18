function Main() {
  return (
    <div className="main-container">
      <div className="text-area">
        <h1>craft your digital beauty</h1>
        <p>
          With a client-centric approach, innovation, and reliable support, we
          are dedicated to empowering digital dreams with expertise and
          creativity.
        </p>
      </div>

      <div className="flex-contain">
        <div className="btns">
            <button className="btn-one">Product Design</button>
            <button className="btn-two">Technical Writing</button>
            <button className="btn-three">Websites/Landing Pages</button>
            <button className="btn-four">E-commerce Stores</button>
            <button className="btn-five">Software consultancy</button>
        </div>

        <div className="cards">
            <div className="card-one">
                <h1>Product Design</h1>
                <p>With a client-centric approach, our team of experts is ready to deliver pixel-perfect designs for your use cases.</p>
            </div>
            <div className="card-two">
                <h1>Technical Writing</h1>
                <p>Work with our team of technical writing experts to attend to your technical writing needs; planning, content strategy, and improvement of existing technical documents.</p>
            </div>
            <div className="card-three">
                <h1>Websites/Landing Pages</h1>
                <p>Upgrade your brand by working with our expert-led team to build your websites and landing pages.</p>
            </div>
            <div className="card-four">
                <h1>E-commerce Stores</h1>
                <p>Upgrade your brand by working with our expert-led team to build your websites and landing pages.</p>
            </div>
            <div className="card-five">
                <h1>Software Consultancy</h1>
                <p>Engage our team of experts to discuss general software needs not limited to software evaluation and assessment, technical content auditing, and general software contracts.</p>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
