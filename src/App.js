import {Component} from 'react';
import Home from "./Home";
import Blogs from "./Blog";
import Contact from "./Contact";
import NoPage from "./NoPage";

class App extends Component {

   constructor(props) {
     super(props)
    
   }
   state={
    id:0
   }
  
  render() {
    return (
      <div>
        {<Home key={this.state.id} route="Home in App"/>}
      </div>
    )
  }
}
    

export default App;
