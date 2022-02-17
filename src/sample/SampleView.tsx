import React from "react";
import EmployeeCard from "../components/Cards/Employee_card/EmployeeCard";
import { data } from "../components/Cards/Employee_card/EmployeeCardsData";
import "./SampleStyle.css";




/**
 * ! Sample view project
 * * whitehatdevv - 2022/02/09
 */
const SampleView: React.FC = () => {
  return (
    <>
      <div className="mt-3">
        <h1>Cards component</h1>
        <div className="mt-3">
          
          {data.map((person:any) => {
          return <div className="mt-2"><EmployeeCard {...person} /></div>;
          })} 
         
        </div>
      </div>
    </>
  );
};

// * Export the view
export default SampleView;
