import React from "react";
import data from "../data/data.json";

export const TableComponent = () => {
  return (
    <div style={styles.container}>
      {/* Technical Data Table */}
      <h2 style={styles.title}>Technical Data</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Property</th>
            <th style={styles.th}>Typical</th>
            <th style={styles.th}>Standard</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data.technical_data).map(([key, value]) => (
            <tr key={key}>
              <td style={styles.td}>{key.replace(/_/g, " ")}</td>
              <td style={styles.td}>{value.typical}</td>
              <td style={styles.td}>{value.standard}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sizes Table */}
      <h2 style={styles.title}>Sizes</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Size</th>
            <th style={styles.th}>Min (mm)</th>
            <th style={styles.th}>Max (mm)</th>
            <th style={styles.th}>Length (mm)</th>
          </tr>
        </thead>
        <tbody>
          {data.sizes.map((size, index) => (
            <tr key={index}>
              <td style={styles.td}>{size.size}</td>
              <td style={styles.td}>{size.min_mm}</td>
              <td style={styles.td}>{size.max_mm}</td>
              <td style={styles.td}>{size.length_mm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "80%",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
};
