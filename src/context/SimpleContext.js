import { createContext } from "react";

const SimpleContext = createContext({
    state: {},
    handleDeletePerson: () => {},
    handleNameChange: () => {},
    handleNewPerson: () => {},
    setPerson: () => {}
});

export default SimpleContext;
