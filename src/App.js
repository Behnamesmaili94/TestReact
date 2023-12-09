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
    ],
    showPersons:false,
  }
  
  deletPerson=()=>{
    this.setState({showPersons:true})
  }

  render() {
    const {person ,id} = this.state
    const personShow = this.state.showPersons

    
    return (
      <div>

        {<Home key={id} data={person}/>}
        <div>
          <button onClick={this.deletPerson}>delet persons</button>
        </div>
      </div>
      
    )
  }
}
    

export default App;
