import {Component} from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {logedTime: 3}
    }
    
    indead =()=>{
        let id =[]

        for (let index = 0; index <4; index++) {
            id.push(index)
            
        }
        return(id.map((event)=><p>{event}</p>))
    }

    render(){
        return(
        <div className="container m-auto grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-5 md:grid-rows-3 lg:grid-cols-12 lg:grid-rows-4 gap-4">
            <div className='col-start-5 row-start-1'>
                <h1 className="text-3xl">Home</h1>
            </div>
               
            <div className='col-start-1 row-start-2'>
                <p>{this.props.name}</p>
                <hr/>
                <h3>{this.state.logedTime}</h3>
            
            </div>

            <div className='col-start-2 row-start-3'>
                {this.indead()}
                <button className='bg-[#1da1f2] text-white ...' onClick={()=>{this.setState({logedTime:"changed"})}}>click for update time</button>
                
            </div>
            
        </div>
        
        )
    }
}
  
  
export default Home;