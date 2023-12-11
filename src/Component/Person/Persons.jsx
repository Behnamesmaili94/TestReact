import React from "react";
import Person from "./Person";
import contextApi from "./SimpleContext";

const Persons = () => {
    return (
        <contextApi.Consumer>
            {context=>(
               <div>
               {context.state.persons.map(person => (
                   <Person/>
               ))}
           </div>
            
            )}    
        </contextApi.Consumer>
        
    );
};

export default Persons;
