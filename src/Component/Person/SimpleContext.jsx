import React,{createContext} from 'react';

const contextApi= createContext({
    state:{},
    handleShowPerson : () => {},
    deletePerson: () => {},
    apptitle:""

})

export default contextApi;