import React, { Component } from "react";
import Persons from "./Component/Person/Persons";

class App extends Component {
    state = {
        persons: [
            { id:0, firstname: "یونس", lastname: "قربانی" },
            { id:1, firstname: "ایمان", lastname: "مدائنی" },
            { id:2, firstname: "سجاد", lastname: "باقرزاده" }
        ],
        showPersons: false,
        apptitle:"UserManagment",
    };

    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons });
        // console.log(this.state.showPersons);
    };
    
    deletePerson = id =>{
        const ePersons = [...this.state.persons]
        const fP = ePersons.filter(p => p.id !== id)
        this.setState({persons :fP})
    }

    render() {
        const { persons, showPersons } = this.state;
        // InlineStyle text-align
        // <div style={{ textAlign: "center" }}>
        const styles = {
            textAlign: "center"
        };

        const bottonStyle = {
            padding: "1em",
            fontFamily: "BYekan",
            backgroundColor: "green"
        };

        let person = null;

        if (showPersons) {
            person = <Persons persons={persons} deleteP={this.deletePerson}/>;
        }

        return (
            <div style={styles}>
                <h2>مدیریت کننده اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>

                {person}

                <button onClick={this.handleShowPerson} style={bottonStyle}>
                    نمایش اشخاص
                </button>
            </div>
        );
    }
}

export default App;
