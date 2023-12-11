import React from "react";

import SimpleContext from "./SimpleContext";

const Header = () => {
 
    return (
        <SimpleContext.Consumer>
            {context => (
                <div>                
                    <h2>{context.state.apptitle}</h2>
                        
                    <p>تعداد اشخاص{" "} {context.state.persons.length}نفر می باشد</p>
                        
                  
                </div>
            )}
        </SimpleContext.Consumer>
    );
};

export default Header;
