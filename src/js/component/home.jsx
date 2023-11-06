import React from "react";
import { NavBar } from "./navbar";
import { Junbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";


const Home = () => {
	return (
		<>
		<NavBar />
		<Junbotron />
		<div className=" row gx-3">
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
		
		</div>
		<Footer />
		</>
	);
};

export default Home;
