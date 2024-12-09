import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>About Us</li>
        <li style={styles.navItem}>Services</li>
        <li style={styles.navItem}>Contact Us</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  logo: {
    width: "50px",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
  },
  navItem: {
    color: "white",
    margin: "0 15px",
    cursor: "pointer",
  },
};

export default Navbar;
