import React from 'react';
import "./Card.css";

const Card= (props) => {
	return (
		<div className="card-box tc bg-light-green dib br3 pa3 ma2 grow">
			<img alt="robots" src={`https://robohash.org/${props.id}?200x200`}></img>
			
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
};

export default Card; 