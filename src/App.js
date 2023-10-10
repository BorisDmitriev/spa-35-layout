import React from 'react'//Main React.js library

const data = {
	image: "https://media1.faz.net/ppmedia/aktuell/2142338188/1.7354887/default-retina/bob-dylan-januar-1965-in-den.jpg",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};

const App = () => {
	return (
		<div>
			<div className="card m-5">
				<img className="card-img-top" src={data.image} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{data.cardTitle}</h5>
					<p className="card-text">{data.cardDescription}</p>
					<a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
				</div>
			</div>
		</div>
	)
}

export default App;