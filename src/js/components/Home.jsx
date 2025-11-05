import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

// Importar imágenes

import card from "../../img/big-project-image.png"



//Render first component

const Home = () => {
	const cards = [
		{
			title: "Card title",
			imageUrl: card,	
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      		buttonLabel: "Find Out More!",
      		buttonUrl: "#"
		},
		{
			title: "Card title",
			imageUrl: card,
      		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      		buttonLabel: "Find Out More!",
      		buttonUrl: "#"
		},
		{
			title: "Card title",
			imageUrl: card,
      		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      		buttonLabel: "Find Out More!",
      		buttonUrl: "#"
		},
		{
			title: "Card title",
			imageUrl: card,	
      		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      		buttonLabel: "Find Out More!",
      		buttonUrl: "#"
		}
	];

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron/>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-3">
					{cards.map((card, index) => (
						<Card key={index} {...card} />
					))}
				</div>
			</div>
			<Footer/>		
		</div>	
		
	);
};

export default Home;