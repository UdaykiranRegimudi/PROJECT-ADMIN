import { useState } from "react";
import Graphs from "./Graphs";

import './index.css'



const Dashboard = () => {
  const [status,setStaus] = useState(true)
  const changeMonth =() =>{
      setStaus(true)
  }
  const changeYear =() =>{
    setStaus(false)
  }
  return (
    <div className="m-2 p-3" style={{backgroundColor:'#36454F',backgroundSize:'cover'}}>
        <h4 style={{fontSize:'40px',color:'white',fontStyle:'italic'}} className="pl-5 pt-3">Dashboard</h4>
        <div style={{display:'flex',justifyContent:'spcae-around',padding:'30px'}}>
            <div className="ml-5 mr-5" style={{width:'22%',marginLeft:'5vh',marginRight:'10vh'}}>
              <div style={{backgroundColor:'green',textAlign:'center',borderRadius:'15px'}} className="p-4">
                <h3 style={{color:'white',fontWeight:'bold'}}>NUMBER OF STUDENTS</h3>
                <img style={{marginLeft:'80px'}} className="mt-5 mb-5" src="https://pixner.net/healthease-dashboard/healthease-dashboard/assets/img/icon/doctor.png"/>
                <div style={{display:'flex'}}>
                  <img style={{height:'30px',width:'30px'}} src="https://pixlok.com/wp-content/uploads/2021/10/Trade_Icon_03jmws-300x300.png" alt="increse"/>
                  <p className="mt-0" style={{color:'white',fontWeight:'bold'}}><a style={{color:'#f9fb04'}}>+1050</a> Projects are added</p>
                </div>
              </div>
            </div>
            <div className="ml-5 mr-5" style={{width:'23%',marginRight:'10vh'}}>
              <div style={{backgroundColor:'red',textAlign:'center',borderRadius:'15px',height:'35.5vh'}} className="p-4">
                <h3 style={{color:'white',fontWeight:'bold'}}>NUMBER OF DEPARTMENTS</h3>
                <img style={{marginLeft:'80px'}} className="mt-5 mb-5" src="https://pixner.net/healthease-dashboard/healthease-dashboard/assets/img/icon/setting.png" />
                <div style={{display:'flex'}}>
                  <img style={{height:'30px',width:'30px'}} src="https://pixlok.com/wp-content/uploads/2021/10/Trade_Icon_03jmws-300x300.png" alt="increse"/>
                  <p className="mt-0" style={{color:'white',fontWeight:'bold'}}><a style={{color:'#f9fb04'}}>+10</a> Projects are added</p>
                </div>
              </div>
            </div>
            <div className="ml-5 mr-5" style={{width:'22%',marginRight:'10vh'}}>
              <div style={{backgroundColor:'blue',textAlign:'center',borderRadius:'15px',height:'35.5vh'}} className="p-4">
                <h3 style={{color:'white',fontWeight:'bold'}}>COLLEGE RANKING</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/747/747274.png" style={{height:'7vh',marginLeft:'80px'}} className="mt-5 mb-5" />
                <div style={{display:'flex'}}>
                  <img style={{height:'30px',width:'30px'}} src="https://pixlok.com/wp-content/uploads/2021/10/Trade_Icon_03jmws-300x300.png" alt="increse"/>
                  <p className="mt-0" style={{color:'white',fontWeight:'bold'}}><a style={{color:'#f9fb04'}}>+1</a> Projects are added</p>
                </div>
              </div>
            </div>
            <div className="ml-5 mr-5" style={{width:'22%'}}>
              <div style={{backgroundColor:'orange',textAlign:'center',borderRadius:'15px'}} className="p-4">
                <h3 style={{color:'white',fontWeight:'bold'}}>STUDENTS REQUESTS</h3>
                <img src="https://pixner.net/healthease-dashboard/healthease-dashboard/assets/img/icon/paper.png" style={{marginLeft:'80px'}} className="mt-5 mb-5"/>
                <div style={{display:'flex'}}>
                  <img style={{height:'30px',width:'30px'}} src="https://pixlok.com/wp-content/uploads/2021/10/Trade_Icon_03jmws-300x300.png" alt="increse"/>
                  <p className="mt-0" style={{color:'white',fontWeight:'bold'}}><a style={{color:'#f9fb04'}}>+30</a> Projects are added</p>
                </div>
              </div>
            </div>
        </div>
        <div style={{display:'flex'}}>
          <Graphs/>
          <div style={{backgroundColor:'white',width:'33%',height:'55vh',borderRadius:'12px',marginLeft:'8vh'}} className="mt-5">
            <h1 style={{textAlign:'center',fontSize:'28px',fontWeight:'bold'}} className="mt-4">TOP PROGRAMERS</h1>
            <div style={{textAlign:'center'}}>
              <button className="btn btn-primary mr-2 mt-4" onClick={changeMonth}>Monthly</button>
              <button className="btn btn-primary mt-4" onClick={changeYear}>Yearly</button>
            </div>
            {status?<div>
                <img src="https://www.nicepng.com/png/detail/266-2666972_software-developer.png" alt="icon" style={{height:'30vh',marginLeft:'18vh'}} className="mt-2"/>
                <h1 style={{textAlign:'center',fontWeight:'bold'}} className="ml-4 mt-4">REGIMUDI UDAY KIRAN</h1>
            </div>:<div>
                <img src="https://clipart-library.com/2023/182-1822816_developer-clipart-hd-png-download.png" alt="icon" style={{height:'30vh',marginLeft:'18vh'}} className="mt-2"/>
                <h1 style={{textAlign:'center',fontWeight:'bold'}} className="ml-4 mt-4">ROHIT</h1>
            </div>}
          </div>
        </div>
        
    </div>
  );
};

export default Dashboard;
