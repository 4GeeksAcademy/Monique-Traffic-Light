import React, { useState } from "react";


const Home = () => {

	
	const [color, setColor]= useState(null);
	const changeColor = () => {
		if (color === "red") {
		  setColor("green");
		} else if (color === "green") {
		  setColor("yellow");
		} else {
		  setColor("red"); 
		}
	  };
	  
	function stop(){
			setColor("red");
		}
	
	function attention(){
			setColor("yellow")
		}
	
	function play(){
			setColor("green")
		
	}


	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", }}>
			<div className="traffic-light-container" style={{  display: "flex", flexDirection: "column", alignItems: "center",}}>
				<div className="palo" style={{ width: "20px", height:"100px", backgroundColor: "black", marginBottom: "-10px", }}></div>
				<div  style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "black", width: "120px", padding: "20px", borderRadius: "10px",}}>
					<div onClick={stop} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "red", boxShadow: color === "red" ? "0 0 20px 10px red" : "none", margin: "10px", cursor: "pointer",}}></div>
					<div onClick={attention} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "yellow", boxShadow: color === "yellow" ? "0 0 20px 10px yellow" : "none", margin: "10px", cursor: "pointer",}}></div>
					<div onClick={play} style={{ width: "60px",  height: "60px", borderRadius: "50%", backgroundColor: "green", boxShadow: color === "green" ? "0 0 20px 10px green" : "none", margin: "10px", cursor: "pointer",}}></div>
				</div>
				<button  onClick={changeColor} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "20px", borderRadius:"10px", backgroundColor:"blue", color:"white", cursor: "pointer", }}>Alternar Color</button>
			</div>
		</div>
	);
};

export default Home;