import React from "react";
import Person from "./Person";

const Persons = ({ persons , deleteP}) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    firstname={person.firstname}
                    lastname={person.lastname}
                    deleted={()=>{deleteP(person.id)}}
                />
            ))}
        </div>
    );
};

export default Persons;
