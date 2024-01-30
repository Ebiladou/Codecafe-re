import Slide from "./Slide";

function Section() {
  return (
    <div className="section">
      <Slide>
         <h1>codecafé </h1>
      </Slide>
     
     <Slide delay={0.3}>
       <p className="desktop">
        With a client-centric approach, innovation, and reliable support, we are
        dedicated to empowering digital dreams with expertise and creativity.
      </p>
      <p className="mobile">Your canvas for colorful ideas and creative flair. Brewing each project into a unique masterpiece, just for you.</p>
     </Slide>
    </div>
  );
}

export default Section;
