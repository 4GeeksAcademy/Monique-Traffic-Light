import React, { useState } from "react";

const Home = () => {

	const [color, setColor]= useState(null);
	const [colorPurple, setColorPurple] = useState(false);

	const changeColor = () => {
		if (color === "red") {
		  setColor("green");
		} else if (color === "green") {
		  setColor("yellow");
		} else if (color === "yellow" && colorPurple) {
			setColor("purple");
		} else {
			setColor("red");
		}
	};
	const togglePurple = () => {
		setColorPurple(!colorPurple); // Alternar usando el valor actual
		if (color === "purple") {
			setColor(null); // Reinicia el color si está en púrpura
		}
	};
	   
	
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<div className="traffic-light-container" style={{  display: "flex", flexDirection: "column", alignItems: "center"}}>
				<div className="palo" style={{ width: "20px", height:"100px", backgroundColor: "black", marginBottom: "-10px" }}></div>
				<div  style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "black", width: "120px", padding: "20px", borderRadius: "10px"}}>
					<div onClick={()=>setColor("red")} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "red", boxShadow: color === "red" ? "0 0 20px 10px red" : "none", margin: "1px", cursor: "pointer"}}></div>
					<div onClick={()=>setColor("yellow")} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "yellow", boxShadow: color === "yellow" ? "0 0 20px 10px yellow" : "none", margin: "10px", cursor: "pointer"}}></div>
					<div onClick={()=>setColor("green")} style={{ width: "60px",  height: "60px", borderRadius: "50%", backgroundColor: "green", boxShadow: color === "green" ? "0 0 20px 10px green" : "none", margin: "10px", cursor: "pointer"}}></div>
					{colorPurple && (			
					<div onClick={() =>setColor("purple")} style={{	width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "purple", boxShadow: color === "purple" ? "0 0 20px 10px purple" : "none",	margin: "10px", cursor: "pointer",}}></div>	
					)}
				</div>	
				
				<button  onClick={changeColor} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "20px", borderRadius:"10px", backgroundColor:"blue", color:"white", cursor: "pointer" }}>Change Color</button>
				<button  onClick={togglePurple} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "20px", borderRadius: "10px", backgroundColor: "blue", color: "white", cursor: "pointer" }}>{colorPurple ? "Remove purple" : "add purple"}</button>
			</div>
		</div>
	);
};

export default Home;