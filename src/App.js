import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import SimpleContext from "./context/SimpleContext";
import NewPerson from "./components/Person/NewPerson";

const App = () => {

    const [getPersons, setPersons] = useState([])
    const [getSinglePerson, setSingelPerson] = useState("")
    const [getShowPerson, setShowPerson] = useState(true)

    useEffect(()=>{
        const time =()=>{
            setTimeout(() => {
                console.log("time out on")
            }, 1000);
        }
        return ()=>{clearTimeout(time)}
    },[getPersons])

    useEffect(() => {
        console.log(getSinglePerson)
    },[getSinglePerson])

    const handleShowPerson = () => {
        setShowPerson(!getShowPerson);

    };

    const handleDeletePerson = id => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id); //! = =
        setPersons(filteredPersons);

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];

        toast.error(`${person.fullname} با موفقیت حذف شد`, {
            position: "top-right",
            closeOnClick: true
        });
    };

    const handleNameChange = (event, id) => {
        const allPersons = getPersons

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        setPersons(persons);
    };

    const handleNewPerson = () => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: getSinglePerson
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            setPersons(persons);
            setSingelPerson("")
            toast.success("شخصی با موفقیت اضافه شد.", {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            });
        }
    };

    const setPerson = event => {
        setSingelPerson(event.target.value);
    }

    let person = null;

    if (getShowPerson) {
        person = (
            <Persons />
        );
    }

    return (
        <SimpleContext.Provider
            value={{
                persons: getPersons,
                person: getSinglePerson,
                handleDeletePerson: handleDeletePerson,
                handleNameChange: handleNameChange,
                handleNewPerson: handleNewPerson,
                setPerson: setPerson
            }}
        >
            <div className="rtl text-center">
                <Header appTitle="مدیریت کاربران" />

                <NewPerson />

                <Button
                    onClick={handleShowPerson}
                    variant={getShowPerson ? "info" : "danger"}
                >
                    نمایش اشخاص
                </Button>

                {person}
                <ToastContainer />
            </div>
        </SimpleContext.Provider>
    )
}

export default App;
