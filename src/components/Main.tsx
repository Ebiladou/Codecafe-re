import Slide from "./Slide";
import "../Main.scss";
import { useState } from "react";

function Main() {
  const [cards, setCards] = useState([
    {
      title: "Technical Writing",
      color: "#cb744e",
      active: true,
      description:
        "Work with our team of technical writing experts to attend to your technical writing needs; planning, content strategy, and improvement of existing technical documents.",
    },
    {
      title: "Product design",
      color: "#99ffc2",
      active: false,
      description:
        "With a client-centric approach, our team of experts is ready to deliver pixel-perfect designs for your use cases.",
    },
    {
      title: "Website/Landing Pages",
      color: "#8a9ee4",
      active: false,
      description:
        "Upgrade your brand by working with our expert-led team to build your websites and landing pages.",
    },

    {
      title: "E-commerce Stores",
      color: "#8ad4e4",
      active: false,
      description:
        "Upgrade your brand by working with our expert-led team to build your websites and landing pages.",
    },

    {
      title: "Software Consultancy",
      color: "#e38ae4",
      active: false,
      description:
        "Engage our team of experts to discuss general software needs not limited to software evaluation and assessment, technical content auditing, and general software contracts.",
    },
  ]);

  const buttonColors = ["#cb744e", "#99ffc2", "#8a9ee4", "#8ad4e4", "#e38ae4"];
  const cardRotate = [
    "-3.42deg",
    "-4.42deg",
    "-5.42deg",
    "-6.42deg",
    "-7.42deg",
  ];
  const headingRotate = ["3.0deg", "3.8deg", "4.2deg", "4.9deg", "5.5deg"];
  const textRotate = ["2.4deg", "3.1deg", "3.9deg", "4.4deg", "4.9deg"];

  const toggleActive = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => ({
        ...card,
        active: i === index ? !card.active : false,
      }))
    );
  };

  const [activeStack, setActiveStack] = useState<number | null>(null);
  const moveStackUp = (index: number) => {
    setActiveStack((prevIndex) => (prevIndex === index ? null : index));
  };

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
          {cards.map((service, index) => (
            <div
              className={`service-card${index + 1}`}
              key={index}
              // style={{ backgroundColor: service.color }}
            >
              <Slide delay={index * 0.2}>
                <button
                  className={`service-btn btn-${index + 1}`}
                  onClick={() => { toggleActive(index), setActiveStack(index);}}
                  style={{
                    backgroundColor: buttonColors[index % buttonColors.length],
                  }}
                >
                  {service.title}
                </button>
              </Slide>
              {service.active && (
                <div className="card-des" style={{ display: "block" }}>
                  <p>{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cards">
          {cards.map((item, index) => (
            <div
              key={index}
              className="cards-style"
              style={{
                backgroundColor: item.color,
                zIndex: activeStack === index ? cards.length + 1 : index + 1,
                transform: `rotate(${cardRotate[index]})`,
              }}
            >
              <h2
                className="heading"
                style={{ transform: `rotate(${headingRotate[index]})` }}
              >
                {item.title}
              </h2>
              <p
                className="text"
                style={{ transform: `rotate(${textRotate[index]})` }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;