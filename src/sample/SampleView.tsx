import React from "react";
import "./SampleStyle.css";
import TertiaryButton from "../components/Buttons/Tertiary/TertiaryButton";


/** texto de prueba */
/**
 * ! Sample view project
 * * whitehatdevv - 2022/02/09
 */
const SampleView: React.FC = () => {
  return (
    <>
      <div className="mt-3">
        <h1>Buttons component</h1>
        <div className="mt-3">
          <TertiaryButton
            title="Contact"
            handleClick={() => {

            }}
          />
        </div>
      </div>
    </>
  );
};

// * Export the view
export default SampleView;
