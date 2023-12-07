import {Component} from 'react';
import Home from "./Component/Home";

class App extends Component {

   constructor(props) {
     super(props)
    
   }

   state={
    
    person:[
        {id:0,name:"behnam",family:"esmaili",age:25},
        {id:1,name:"behzad",family:"esmaili",age:23},
        {id:2,name:"moslem",family:"sarhady",age:25},
    ]
  }
  
 
  render() {
    const listPerson = ()=>{
      return this.state.person
    }
    return (
      <div>
        
        {<Home key={this.state.id} data={this.listPerson}/>}
      </div>
    )
  }
}
    

export default App;
