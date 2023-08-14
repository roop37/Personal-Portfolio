import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            &lt;./&gt;
          </a>
          <div className="itemContainer"></div>
        </div>
        <div className="right">
          <div className="listings">
            <ul>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="#work">
                <li>Certificates</li>
              </a>

              <a href="#testimonials">
                <li>Testimonials</li>
              </a>
              <a href="#contact">
                <li>Contact Me</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
