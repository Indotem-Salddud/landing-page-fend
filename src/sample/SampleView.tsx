import React from "react";
import  "./SampleStyles.css"
import SecondaryButton from "../component/Buttons/Secondary/Button.Secondary";

/**
 *  ! Sample view project
 *  * gabriel -2022/2/12
 */
const SampleView:React.FC=()=>{
    return <>
    <div className="mt-3">
        <h1>Button Components</h1>
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