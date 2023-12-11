import React from "react";
import contextApi from "./SimpleContext";

const Person = () => {
    return (
        <contextApi.Consumer>
            {context =>{
                <div  style={{cursor:'pointer'}}>
                    <p>{`${context.state.firstname} ${context.state.lastname}`}</p>
                    <button onClick={context.deletePerson(context.state.person.id)}>delete</button>
                </div>
            }
            }
        </contextApi.Consumer>
        
    );
};

export default Person;
