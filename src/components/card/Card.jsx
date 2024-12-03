import { memo } from "react";
import {Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./card.css"


const CardComp = ({image,heading,text,navigate}) => {
  return (
    <Card id="cardContainer" style={{ width: '18rem', textAlign:"center" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{heading}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Link to={navigate} style={{cursor:"pointer" ,fontSize:"large", textDecoration:"none", color:"#0071cdd !important", fontWeight:"600"}}>Read More</Link>
      </Card.Body>
    </Card>
  )
}

export default memo(CardComp)