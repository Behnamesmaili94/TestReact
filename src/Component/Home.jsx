import {Component} from 'react';


const Home = ({data})=>{
    return(
        <div>        
            <h2>Home</h2>
            <p>{data.map(p=>{return <p>{p.id} {p.name},{p.family},{p.age}</p>})}</p>
        </div>

    )
}
export default Home;