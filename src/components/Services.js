import React from "react";

const Services = () => {
  const services = [
    "SEO",
    "DIGITAL MARKETING",
    "WEB DEVELOPMENT",
    "EMAIL MARKETING",
    "B2B MARKETING",
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.o}>Our</span> Services
      </h2>
      <ul style={styles.list}>
        {services.map((service, index) => (
          <li key={index} style={styles.item}>
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px",
    color: "white",
    backgroundColor: "black",
  },
  heading: {},
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    color: "white",
    marginBottom: "10px",
  },
  o: {
    color: "yellow",
  },
};

export default Services;
