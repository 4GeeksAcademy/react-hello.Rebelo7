import React from "react";
import { NavBar } from "./navbar";
import { Junbotron } from "./jumbotron";
import { Footer } from "./footer";
import { CardContainer } from "./cardcontainer";


const Home = () => {
	return (
		<>		
		<NavBar />
		<Junbotron />
		<CardContainer />
		<Footer />
		</>
	);
};

export default Home;
