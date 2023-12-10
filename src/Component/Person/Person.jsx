import React from "react";

const Person = ({ firstname, lastname }) => {
    return (
        <div>
            <p>{`${firstname} ${lastname}`}</p>
        </div>
    );
};

export default Person;
