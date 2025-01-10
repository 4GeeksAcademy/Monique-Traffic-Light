import React, { useState } from "react";


const Home = () => {

	const [selected, setSelected]= useState(null);
	const changeColor = () => {
		if (selected === "red") {
		  setSelected("green");
		} else if (selected === "green") {
		  setSelected("yellow");
		} else {
		  setSelected("red"); 
		}
	  };
	  
	function stop(){
			setSelected("red");
		}
	
	function attention(){
			setSelected("yellow")
		}
	
	function play(){
			setSelected("green")
		
	}


	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", }}>
			<div className="traffic-light-container" style={{  display: "flex", flexDirection: "column", alignItems: "center",}}>
				<div className="palo" style={{ width: "20px", height:"100px", backgroundColor: "black", marginBottom: "-10px", }}></div>
				<div  style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "black", width: "120px", padding: "20px", borderRadius: "10px",}}>
					<div onClick={stop} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "red", boxShadow: selected === "red" ? "0 0 20px 10px red" : "none", margin: "10px", cursor: "pointer",}}></div>
					<div onClick={attention} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "yellow", boxShadow: selected === "yellow" ? "0 0 20px 10px yellow" : "none", margin: "10px", cursor: "pointer",}}></div>
					<div onClick={play} style={{ width: "60px",  height: "60px", borderRadius: "50%", backgroundColor: "green", boxShadow: selected === "green" ? "0 0 20px 10px green" : "none", margin: "10px", cursor: "pointer",}}></div>
				</div>
				<button  onClick={changeColor} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "20px", borderRadius:"10px", backgroundColor:"blue", color:"white", cursor: "pointer", }}>Alternar Color</button>
			</div>
		</div>
	);
};

export default Home;