import React from "react";
import "./SampleStyle.css";
import {AlterPrimaryButton, AlterSecondaryButton, AlterTertiaryButton, TertiaryButton, SeptenaryButton} from "../components/Buttons/Tertiary/Buttons";


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
          <AlterPrimaryButton
            title="Contact"
            handleClick={() => {

            }}
          />
        </div>
        <div className="mt-3">
          <AlterSecondaryButton
            title="Contact"
            handleClick={() => {

            }}
          />
        </div>
        <div className="mt-3">
          <AlterTertiaryButton
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
