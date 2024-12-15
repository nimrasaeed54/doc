
import React from "react";
import "./ProgressBar.css";

function ProgressBar({ steps = [], currentStep = 0 }) {
  if (!steps || steps.length === 0) {
    console.error("Steps array is required for ProgressBar to render.");
    return null;
  }

  const stepPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-wrapper">
        {/* Progress Line */}
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${stepPercentage}%` }}
          ></div>
        </div>

        {/* Steps */}
        <div className="progress-steps">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`step ${
                index < currentStep
                  ? "completed"
                  : index === currentStep
                  ? "active"
                  : ""
              }`}
            >
              <div className="step-circle">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
