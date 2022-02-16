import React from "react";
import "./SampleStyle.css";
import EmployeeCard from "../components/Cards/Employee_card/EmployeeCard";

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
          <EmployeeCard 
          name="Jaime López"
          position="CEO Indotem" 
          text='"Indotem nace como un proyecto para ayudar a las personas que más quieres, a tu familia"'      
          />
        </div>
      </div>
    </>
  );
};

// * Export the view
export default SampleView;
