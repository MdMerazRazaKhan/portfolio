import profileImage from "../assets/images/profile.jpg";

const About = () => (
  <section id="about" className="about-section">
    <h2 className="section-heading">About <span>Myself</span></h2>
    <div className="about-grid">
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="about-content">
        <h3 className="about-title">Software Developer Engineer & Aspiring AI Enthusiast</h3>
        <p className="about-intro">
          I am a passionate Software Developer Engineer & Aspiring AI Enthusiast and a Computer Science undergraduate specializing in Cyber Security. I have a strong interest in Full-Stack Development, Data Structures & Algorithms, and AI-driven applications. I enjoy building scalable, user-friendly web applications and solving real-world problems through clean, efficient, and maintainable code.
        </p>
        <p className="about-intro">
          My journey in software engineering has equipped me with a diverse skill set, allowing me to tackle complex challenges and deliver innovative solutions. I am committed to continuous learning and staying updated with the latest industry trends.
        </p>
        <div className="about-details">
          <div>
            <p><strong>Name:</strong> Md Meraz Raza Khan</p>
            <p><strong>Experience:</strong> Fresher</p>
            <p><strong>Location:</strong> Kolkata, West Bengal</p>
          </div>
          <div>
            <p><strong>Degree:</strong> Bachelors in Technology</p>
            <p><strong>Department:</strong> Computer Science and Engineering in Cyber Security</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
