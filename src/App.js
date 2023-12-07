import {Component} from 'react';
import Home from "./Home";
import Blogs from "./Blog";
import Contact from "./Contact";
import NoPage from "./NoPage";

class App extends Component {

  // constructor(props) {
  //   super(props)
    
  // }
  
  render() {
    return (
      <div>
        {<Home/>}
      </div>
    )
  }
}
    

export default App;
