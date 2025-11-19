
import img1 from "../images/img1.jpeg"
import BackendUrl from '../Utils/BackendURL';
import axios from "axios";
const Home=()=>{
  const handleSubmit=async()=>{
        
        let api=`${BackendUrl}/home`;
        const response=await axios.get(api);
        console.log(response);
      
    }
    const handleSubmit2=async()=>{
        
        let api=`${BackendUrl}/about`;
        const response=await axios.get(api);
        console.log(response);
      
    }
    return(
        <>
    <h3 className='h33'>Our page!!</h3>
          <div class="container">
    
    <div className="text">
      <h1>Welcome to Our Website</h1>
      <p>
        We provide creative digital solutions to grow your business online.
        Let’s build something amazing together. Check out our services and portfolio to learn more.
      </p>
      <button>Get Started</button>
    </div>

    
    <div class="image">
      <img src={img1} alt="Home page illustration"/>
    </div>
  </div>
 <button onClick={handleSubmit}>Get Started</button>
  <button onClick={handleSubmit2}>Get Started</button>


  
    </>
    )
}
export default Home