import { createContext } from "react";

const SimpleContext = createContext({
    persons: [],
    person: "",
    handleDeletePerson: () => {},
    handleNameChange: () => {},
    handleNewPerson: () => {},
    setPerson: () => {}
});

export default SimpleContext;
