function Header() {
    const headerContent = (
        <div className="flex-container">
          <div>
            <img src="" alt="" />
          </div>
          <h1>SAYHELLO</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none"><path d="M14.0967 0L17.3883 8.79311L27.4115 8.98278L19.4227 14.6069L22.3257 23.5172L14.0967 18.2L5.86775 23.5172L8.77082 14.6069L0.781949 8.98278L10.8051 8.79311L14.0967 0Z" fill="#99FFC2"></path></svg>
          <h1><a href="mailto:hello@thecodecafe.co">HELLO@THECODECAFE.CO</a></h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none"><path d="M14.0967 0L17.3883 8.79311L27.4115 8.98278L19.4227 14.6069L22.3257 23.5172L14.0967 18.2L5.86775 23.5172L8.77082 14.6069L0.781949 8.98278L10.8051 8.79311L14.0967 0Z" fill="#99FFC2"></path></svg>
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