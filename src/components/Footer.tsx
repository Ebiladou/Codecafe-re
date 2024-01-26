import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3>let’s brew something great</h3>

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
            <Link to="privacy">
              <li>Privacy Policy</li>
            </Link>
            <Link to="terms">
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
