function Header() {
    const headerContent = (
        <div className="flex-container">
          <div>
            <img src="" alt="" />
          </div>
          <h1>SAYHELLO</h1>
          <h1><a href="mailto:hello@thecodecafe.co">HELLO@THECODECAFE.CO</a></h1>
        </div>
      );

  return (
    <div className="container">
      {[...Array(4)].map((_, index) => (
        <div key={index}>{headerContent}</div>
      ))}
    </div>
  )
}

export default Header

//an entire component for css custom images to be imported here. 