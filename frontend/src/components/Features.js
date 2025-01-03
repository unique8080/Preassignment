import React from "react";
import "./Features.css";
import gemini from "../assests/images/gemini.svg"
import insights from "../assests/images/insights.svg"
import pattern from "../assests/images/pattern.svg"
import learning from "../assests/images/learning.svg"
const Features = () => {
  return (
    <div className="feature-container">
      <h1>Features</h1>
      <div className="features">
        <div className="feature">
          <img src={gemini} alt="feature-1" />
          <h2>Gemini</h2>
          <p>
            Unlock powerful insights and predictions with AstraInsight's Gemini
            integration, driving data-driven decisions with precision.
          </p>
        </div>
        <div className="feature">
          <img src={insights} alt="feature-1" />
          <h2>Real Time Insights</h2>
          <p>
            Access up-to-the-minute data and insights, ensuring you stay ahead
            of trends and challenges as they unfold.
          </p>
        </div>
        <div className="feature">
          <img src={pattern} alt="feature-1" />
          <h2>Pattern Recognition</h2>
          <p>
            AI uncovers hidden patterns in your data, revealing trends and
            anomalies that can lead to new opportunities and efficiencies.
          </p>
        </div>
        <div className="feature">
          <img src={learning} alt="feature-1" />
          <h2>Continuous Learning</h2>
          <p>
            AI adapts and improves over time, providing increasingly accurate
            insights as it learns from new data and evolving trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
