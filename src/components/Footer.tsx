import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3>let’s brew something great</h3>

      <svg xmlns="http://www.w3.org/2000/svg" width="1208" height="148" viewBox="0 0 1208 148" fill="none"><path d="M1 1L603.323 146.715C604.097 146.902 604.903 146.902 605.677 146.715L1207 1" stroke="url(#paint0_linear_401_142)" stroke-width="2"></path><defs><linearGradient id="paint0_linear_401_142" x1="1" y1="1" x2="1207" y2="0.999999" gradientUnits="userSpaceOnUse"><stop offset="0.015625" stop-color="#B9B9B9"></stop><stop offset="0.536458" stop-color="#111111"></stop><stop offset="1" stop-color="#B9B9B9"></stop></linearGradient></defs></svg>

      <div className="footer-flex">
        <div className="mail">
          <h1>SAY HELLO:</h1>
          <h1>
            <a href="mailto:hello@thecodecafe.co">HELLO@THECODECAFé.CO</a>
          </h1>
        </div>

        <div className="links">
          <ul>
            <li>Home</li>
            <Link to="/privacy" style={{ textDecoration: 'none', color: 'black'}}>
              <li>Privacy Policy</li>
            </Link>
            <Link to="/terms" style={{ textDecoration: 'none', color: 'black'}}>
            <li>Terms & conditions</li>
            </Link>
          </ul>
        </div>
      </div>

      <p>© 2024, Codecafé LLC. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
