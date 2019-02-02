import React from "react"
import "./Card.css"

const CardContainer = props => (
    <div className="cardContainer">{props.children}</div>
);
export default CardContainer;