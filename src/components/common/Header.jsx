import React, { useContext } from "react";
import { Alert, Badge } from "react-bootstrap";
import SimpleContext from "./../../context/SimpleContext";

const Header = () => {
    const context = useContext(SimpleContext);

    const { persons, appTitle } = context.state;

    let badgeStyle = "";

    if (persons.length >= 3) badgeStyle = "success";
    if (persons.length <= 2) badgeStyle = "warning";
    if (persons.length <= 1) badgeStyle = "danger";

    return (
        // <SimpleContext.Consumer>
        // {context => (
        <div>
            <Alert variant="info">
                <h2>{appTitle}</h2>
            </Alert>
            <Alert variant="light">
                تعداد اشخاص{" "}
                <Badge pill variant={badgeStyle}>
                    {persons.length}
                </Badge>{" "}
                نفر می باشد
            </Alert>
        </div>
        // )}
        // </SimpleContext.Consumer>
    );
};

export default Header;
