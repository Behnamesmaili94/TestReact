import React,{ useContext } from "react";

import SimpleContext from "./SimpleContext";

const Header = () => {
    const context = useContext(SimpleContext)

    return (
        <div>
            <h2>{context.state.apptitle}</h2>

            <p>تعداد اشخاص{" "} {context.state.persons.length}نفر می باشد</p>

        </div>

    );
};

export default Header;
