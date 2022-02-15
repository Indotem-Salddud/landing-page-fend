import React from "react";
import  "./SampleStyle.css"
import SecondaryButton from "../components/Buttons/Secondary/Button.Secondary";

/**
 *  ! Sample view project
 *  * gabriel, ricardodsb, stefaranzazu -2022/2/15
 */
const SampleView:React.FC=()=>{
    return <>
    <div className="mt-3">
        <h1>Secondary Button </h1>
        <div>
        <SecondaryButton title="Comment" handleClick={()=>
            console.log("He clicado en el botton Contacto")
        }>
        </SecondaryButton>
        </div>
    </div>
    </>

}
export default SampleView