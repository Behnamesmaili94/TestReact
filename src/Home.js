import {Component} from 'react';

class Home extends Component{

    constructor(props){
        super(props);
    }
    

    render(){
        return(
        <div className="container m-auto grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-5 md:grid-rows-3 lg:grid-cols-12 lg:grid-rows-4 gap-4">
            <div className='col-start-5 row-start-1'>
                <h1 className="text-3xl">Home</h1>
            </div>
               
            <div className='col-start-3 row-start-4'>
                {this.props.route}
            </div>

            
        </div>
        
        )
    }
}
  
  
export default Home;