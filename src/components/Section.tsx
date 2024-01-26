import Slide from "./Slide";

function Section() {
  return (
    <div className="section">
      <Slide>
         <h1>codecafé </h1>
      </Slide>
     
     <Slide delay={0.3}>
       <p>
        With a client-centric approach, innovation, and reliable support, we are
        dedicated to empowering digital dreams with expertise and creativity.
      </p>
     </Slide>
    </div>
  );
}

export default Section;
