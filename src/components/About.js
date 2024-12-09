import React from "react";

const About = () => {
  return (
    <div className="about">
      <section style={styles.section}>
        <h2 style={styles.heading}>
          {" "}
          About <span style={styles.u}>Us</span>
        </h2>

        <p style={styles.text}>
          Established in 2021, DB GLOBAL MARKETING is a New IT Solutions and
          Digital Marketing company. At the core of our operations lies a team
          of professionals, each possessing experience exceeding 3 years.
          Committed to propelling the growth and success of our clients, our
          dedicated professionals bring a profound understanding of industry
          dynamics and a passion for innovative problem-solving. Our approach is
          rooted in the belief that strategic, out-of-the-box thinking is
          paramount to ensuring that your organization not only survives but
          thrives in today's highly competitive landscape. We collaborate with
          our clients to craft tailor-made solutions that resonate with their
          unique objectives and aspirations.
        </p>
      </section>
    </div>
  );
};

const styles = {
  section: {
    padding: "50px",
  },
  heading: {
    color: "white",
    fontSize: "80px",
    paddingLeft: "70%",
    margin: "10px",
  },
  u: {
    color: "yellow",
    paddingTop: "100px",
  },
  text: {
    color: "white",
    marginTop: "",
    display: "flex",
    fontSize: "20px",
  },
};

export default About;
