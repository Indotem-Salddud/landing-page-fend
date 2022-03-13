import React from "react";
import "./SampleStyle.css";
import Press from "../components/Press/Press";

/**
 * ! Sample view project
 * * Carlos y Javi - 2022/03/13
 */
const SampleView: React.FC = () => {
  return (
    <>
      <div className="mt-3">
        <h1>Buttons component</h1>
        <div className="mt-3">
          <Press />
        </div>
      </div>
    </>
  );
};

// * Export the view
export default SampleView;
