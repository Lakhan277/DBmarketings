import React from "react";

const Home = () => {
  return (
    <div style={styles.home}>
      <h1 style={{ color: "" }}>Welcome to Our Website</h1>
    </div>
  );
};

const styles = {
  home: {
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
};

export default Home;
