import React, { useState, useEffect } from "react";

import "../../styles/home.css";

function Home() {
	const [lightPus, listChange] = useState([
		"redLigth",
		"yellowLigth",
		"greenLigth",
	]);

	useEffect(() => {
		console.log("EN EL USE EFFECT");
	}, []);

	function redLightPower() {
		listChange(["redLigthFlash", "yellowLigth", "greenLigth"]);
	}
	function yellowLightPower() {
		listChange(["redLigth", "yellowLigthFlash", "greenLigth"]);
	}
	function greenLightPower() {
		listChange(["redLigth", "yellowLigth", "greenLigthFlash"]);
	}
	console.log(lightPus);

	return (
		<>
			<div id="trafficTop"></div>
			<div id="container">
				<div className={lightPus[0]} onClick={redLightPower}></div>
				<div className={lightPus[1]} onClick={yellowLightPower}></div>
				<div className={lightPus[2]} onClick={greenLightPower}></div>
			</div>
		</>
	);
}

export default Home;
