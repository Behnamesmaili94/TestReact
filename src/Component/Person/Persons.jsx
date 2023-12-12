import React, { useContext } from "react";
import Person from "./Person";
import contextApi from "./SimpleContext";

const Persons = () => {
    const context = useContext(contextApi)
    return (        
             <div>
               {context.state.persons.map(person => (
                   <Person key={person.id} lastname={person.lastname} firstname={person.firstname} deleted={()=>context.deletePerson(person.id)}/>
               ))}
           </div>    
            
    );
};

export default Persons;
