const About = () => (
  <section id="about" className="about-section">
    <h2 className="section-heading">About Myself</h2>
    <div className="about-grid">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
          alt="Profile"
        />
      </div>
      <div className="about-content">
        <p className="about-intro">
          I am a passionate Full Stack Developer with expertise in building robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I strive to create seamless user experiences through clean and efficient code.
        </p>
        <p className="about-intro">
          My journey in software engineering has equipped me with a diverse skill set, allowing me to tackle complex challenges and deliver innovative solutions. I am committed to continuous learning and staying updated with the latest industry trends.
        </p>
        <div className="about-details">
          <div>
            <p><strong>Name:</strong> Md Meraz Raza Khan</p>
            <p><strong>Location:</strong> Kolkata , West Bengal</p>
          </div>
          <div>
            <p><strong>Degree:</strong> Master's in Computer Science</p>
            <p><strong>Email:</strong> merazraza.khan@example.com</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
