import React from "react";
import QuaternaryButton from "../components/Buttons/Quaternary/ButtonQuaternary";
import QuinaryButton from "../components/Buttons/Quinary/ButtonQuinary";
import SenaryButton from "../components/Buttons/Senary/ButtonSenary";
import SeptenaryButton from "../components/Buttons/Septenary/ButtonSeptenary";
import TertiaryButton from "../components/Buttons/Tertiary/ButtonTertiary";
import "./SampleStyle.css";



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
        <div className="mt-3">
          <QuaternaryButton
            title="Contact"
            handleClick={() => {

            }}
          />
        </div>
        <div className="mt-3">
          <QuinaryButton
            title="Contact"
            handleClick={() => {

            }}
          />
        </div>
        <div className="mt-3">
          <SenaryButton
            title="Contact"
            handleClick={() => {

            }}
          />
        </div>
        <div className="mt-3">
          <SeptenaryButton
            title=""
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
