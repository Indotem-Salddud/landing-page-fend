import React from "react";
import "./SampleStyle.css";
import PrimaryButton from "../components/Buttons/Primary/Button.Primary";
import SecondaryButton from "../components/Buttons/Secondary/Button.Secondary";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

/**
 * ! Sample view project
 * * ricardodsb, stefaranzazu - 2022/02/11
 */
const SampleView: React.FC = () => {
  return (
    <>
      
      <Navbar 
      text1="¿Cómo funciona?"
      text2="Nuestra App"
      text3="Sobre nosotros">
      </Navbar>
      

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
      <div className="mt-3">
        <h1>Secondary Button </h1>
        <div>
        <SecondaryButton title="Comment" handleClick={()=>
            console.log("He clicado en el botton Contacto")
        }>
        </SecondaryButton>
        </div>
      </div>
      <div className="mt-3">
            <Footer 
                policy="Política de privacidad"
                copyright="Copyright 2020">
            </Footer>
      </div>
      
    </>
  );
};

// * Export the view
export default SampleView;
