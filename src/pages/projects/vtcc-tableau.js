import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function VTCCProject(props) {
  const theme = props.theme;

  return (
    <div>
      <Header theme={theme} />

      <div style={{ maxWidth: "1000px", margin: "auto", padding: "60px 20px" }}>
        <h1 style={{ color: theme.text }}>
          VT Super Sixes Cricket Dashboard
        </h1>

        <p style={{ color: theme.secondaryText }}>
          I built a Tableau dashboard analyzing batting and bowling
          performance from our Fall 2025 VT club cricket tournament.
        </p>

        <h2 style={{ color: theme.text, marginTop: "40px" }}>
          Key Insights
        </h2>

        <ul style={{ color: theme.secondaryText }}>
          <li>Top run scorers vs strike rate efficiency</li>
          <li>Best all-rounders by composite score</li>
          <li>Wicket economy impact in short formats</li>
        </ul>

        <h2 style={{ color: theme.text, marginTop: "40px" }}>
          Dashboard
        </h2>

        <div style={{ marginTop: "20px" }}>
          <iframe
            src="https://public.tableau.com/views/SuperSixesMVP/Dashboard1?:embed=y&:display_count=yes&:toolbar=yes"
            width="100%"
            height="700"
            frameBorder="0"
            title="VT Super Sixes Dashboard"
        />
        </div>
      </div>

      <Footer theme={theme} />
    </div>
  );
}

export default VTCCProject;