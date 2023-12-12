import React from "react";

const Person = ({lastname,firstname,deleted}) => {
    return (
        <div style={{ cursor: 'pointer' }}>
            <p>{`${firstname} ${lastname}`}</p>
            <button onClick={deleted}>delete</button>
        </div>

    );
};

export default Person;
