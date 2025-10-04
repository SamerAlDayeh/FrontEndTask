import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        {/* ⬅️ الصف العلوي: معلومات الاتصال والروابط */}
        <div className="footer-top-row">
          {/* 1. العنوان (OUR ADDRESS) */}
          <div className="footer-column address-col">
            <h4 className="column-title">OUR ADDRESS</h4>
            <p>2200 Clarendon Blvd, Suite 1400A</p>
            <p>Arlington, VA 22201, USA</p>
          </div>

          {/* 2. الروابط الاجتماعية (SOCIALS) */}
          <div className="footer-column socials-col">
            <h4 className="column-title">SOCIALS</h4>
            <p>
              <a href="#">Facebook</a>
            </p>
            <p>
              <a href="#">Instagram</a>
            </p>
            <p>
              <a href="#">YouTube</a>
            </p>
          </div>

          {/* 3. الهاتف (PHONE) */}
          <div className="footer-column phone-col">
            <h4 className="column-title">PHONE</h4>
            <p>1-300-123-1234</p>
          </div>

          {/* 4. البريد الإلكتروني (EMAIL) */}
          <div className="footer-column email-col">
            <h4 className="column-title">EMAIL</h4>
            <p>
              <a href="mailto:info@atclink.org">info@atclink.org</a>
            </p>
          </div>
        </div>

        {/* ⬅️ الخط الفاصل والشعار */}
        <div className="footer-divider-section">
          <div className="divider-line left-line"></div>
          <div className="logo-placeholder">
            <span role="img" aria-label="logo">
              📷
            </span>{" "}
            your logo
          </div>
          <div className="divider-line right-line"></div>
        </div>

        {/* ⬅️ صف حقوق النشر */}
        <div className="footer-copyright">
          <p>© 2024 ATC systematic. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
