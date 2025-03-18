import React from "react";
import * as data from "../data/data.json";

export const Details: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Characteristics</h2>
      <ul style={styles.list}>
        {data?.characteristics.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>

      <h2 style={styles.title}>Color</h2>
      <p style={styles.text}>{data?.color}</p>

      <h2 style={styles.title}>Operating Temperature</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Operating: {data?.temperature?.operating}
        </li>
        <li style={styles.listItem}>
          Installation: {data?.temperature?.installation}
        </li>
      </ul>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    width: "60%",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  list: {
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "5px",
  },
  text: {
    marginLeft: "20px",
  },
};
