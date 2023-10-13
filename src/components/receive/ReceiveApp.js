import React from "react";
import './ReceiveApp.css'

const App = [
    {id:1 , src:"./image/1.png"},
    {id:1 , src:"./image/2.png"},
    {id:1 , src:"./image/3.png"},
    {id:1 , src:"./image/4.png"},
    {id:1 , src:"./image/4.png"},

]

const ReceiveApp = () => {
  return (
    <div className="container" style={{margin:"2rem auto"}}>
      <div className="row" style={{justifyContent:"center"}}>
     {App.map((item,index) => (
            <div key={index} className="col-sm-2" style={{textAlign:"center"}}>
                <img className="st-img" src={require(`${item.src}`)}/>
            
            </div>
     ))}
      </div>
    </div>
  );
};

export default ReceiveApp;
