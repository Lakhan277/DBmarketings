import React from "react";

const Contact = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.c}>Contact</span> Us
      </h2>
      <p style={styles.text}></p>
      <p style={styles.text}>MEDICAL SQUIRE, NAGPUR 440001</p>
      <p style={styles.text}>+91 9423575904</p>

      <p style={styles.text}>CONTACT@DBGLOBALMARKETING.COM</p>
      <p style={styles.text}>DBGLOBALMARKETING.COM</p>

      <form>
        <div className="Name">
          <label style={styles.nameLabel}>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            style={styles.nameInput}
          />
        </div>
        <div className="Email">
          <label style={styles.nameLabel}>Email</label>
          <input type="email" placeholder="Enter Email" style={styles.input} />
        </div>
        <div className="Requirements">
          <label style={styles.nameLabel}>Your requirements</label>
          <input type="text" style={styles.input} />
        </div>
      </form>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px",
    backgroundColor: "black",
    color: "white",
  },
  heading: {
    color: "",
  },

  c: {
    color: "yellow",
  },
  text: {
    marginBottom: "10px",
  },
  input: {
    padding: "10px",
    width: "50%",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#444",
    color: "white",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "yellow",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  nameLabel: {
    fontWeight: "bold",
    marginBottom: "5px", // Space between label and input
    display: "block", // Label on top of input
  },
  nameInput: {
    padding: "10px",
    width: "50%",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#444",
    color: "white",
  },
};

export default Contact;
