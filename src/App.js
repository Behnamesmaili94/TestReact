import React, { Component } from "react";
import Persons from "./Component/Person/Persons";

class App extends Component {
    state = {
        persons: [
            { firstname: "یونس", lastname: "قربانی" },
            { firstname: "ایمان", lastname: "مدائنی" },
            { firstname: "سجاد", lastname: "باقرزاده" }
        ],
        showPersons: false
    };

    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons });
        // console.log(this.state.showPersons);
    };

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
            backgroundColor: "pink"
        };

        let person = null;

        if (showPersons) {
            person = <Persons persons={persons} />;
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
