import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import SimpleContext from "./context/SimpleContext";
import NewPerson from "./components/Person/NewPerson";

class App extends Component {
    state = {
        persons: [],
        person: "",
        showPersons: true,
        appTitle: "مدیریت کننده اشخاص"
    };

    static contextType = SimpleContext;
    //this.context

    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id); //! = =
        this.setState({ persons: filteredPersons });

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];

        toast.error(`${person.fullname} با موفقیت حذف شد`, {
            position: "top-right",
            closeOnClick: true
        });
    };

    handleNameChange = (event, id) => {
        const { persons: allPersons } = this.state;

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;
        console.log(event);

        const persons = [...allPersons];

        persons[personIndex] = person;
        this.setState({ persons });
    };

    handleNewPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: this.state.person
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            this.setState({ persons, person: "" });

            toast.success("شخصی با موفقیت اضافه شد.", {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            });
        }
    };

    setPerson = event => {
        this.setState({ person: event.target.value });
    };

    render() {
        const { persons, showPersons } = this.state;

        let person = null;

        if (showPersons) {
            person = (
                <Persons
                // persons={persons}
                // personDelete={this.handleDeletePerson}
                // personChange={this.handleNameChange}
                />
            );
        }

        return (
            <SimpleContext.Provider
                value={{
                    state: this.state,
                    handleDeletePerson: this.handleDeletePerson,
                    handleNameChange: this.handleNameChange,
                    handleNewPerson: this.handleNewPerson,
                    setPerson: this.setPerson
                }}
            >
                <div className="rtl text-center">
                    <Header />

                    <NewPerson />

                    <Button
                        onClick={this.handleShowPerson}
                        variant={showPersons ? "info" : "danger"}
                    >
                        نمایش اشخاص
                    </Button>

                    {person}
                    <ToastContainer />
                </div>
            </SimpleContext.Provider>
        );
    }
}

export default App;
