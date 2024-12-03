import React from "react";
import "./flipCard.css"

const FlipCard = ({ image, title, text }) => {
	return (
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img
                        // className="servicesImageCont"
						src={image}
						alt="image"
						style={{ width: "inherit", height: "inherit", objectFit:"cover", borderRadius:"1rem" }}
					/>
					<div style={{position:"absolute", zIndex:3, top:"50%", background:"rgba(255, 254, 254, 0.836)", width:"100%", height:"50%", borderBottomLeftRadius:"1rem", borderBottomRightRadius:"1rem",padding:"2px"}}>
						<h5 style={{color:"#2980b9"}}>{title}</h5>
						<p style={{fontWeight:"600"}} className="two-line-ellipsis">{text}</p>
					</div>
				</div>
				<div id="flip-card-back" className="flip-card-back">
					<h5>{title}</h5>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
