import React from "react";
import "./SampleStyle.css";
import PrimaryButton from "../components/Buttons/Primary/Button.Primary";

/**
 * ! Sample view project
 * * ricardodsb, stefaranzazu - 2022/02/11
 */
const SampleView: React.FC = () => {
  return (
    <>
      <div className="mt-3">
        <h1>Primary Button</h1>
        <div className="mt-3">
          <PrimaryButton
            title="Aceptar todas las cookies"
            handleClick={() => {
              console.log("He clickado en el botón Contacto");
            }}
          />
        </div>
      </div>
    </>
  );
};

// * Export the view
export default SampleView;
