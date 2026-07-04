const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-profile">
        <p className="footer-title">Md Meraz Raza Khan</p>
          <p className="footer-subtitle">Software Engineer & Aspiring AI Enthusiat</p>
      </div>
      {/* connect section removed; social links moved to Contact section */}
    </div>
    <div className="footer-divider" />
    <div className="footer-bottom">
      <p className="footer-copyright">© 2026 Md Meraz Raza Khan. All rights reserved.</p>
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    {/* floating social links removed */}
  </footer>
);

export default Footer;
