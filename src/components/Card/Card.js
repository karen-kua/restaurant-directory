import React from "react";
import "./Card.css"
const Card = props => (

  props.isExtended ? (
    <div className="card">
      <div className="row">

        <div className="col-md-3">
          <img src={props.pic} alt={props.name}/>
        </div>

    <div className="col-md-7">
          <a href={props.reserveURL} target="blank_">{props.name}</a>
          
          <div className="detailsClass">
            <p>
              <span className="subHeaders">Price: </span> 
              ${props.price.toFixed(2)}
            </p>
            <p>
              <span className="subHeaders">Address: </span>
              {props.address}
            </p>
            <p>
              <span className="subHeaders">City: </span>
              {props.city}
            </p>
            <p>
              <span className="subHeaders">Postal Code: </span>
              {props.postalCode}
            </p>
          </div> 
          </div>

          <div className="col-md-2">
          <i 
          className="fas fa-minus extendSymbol"  
          onClick={(event) => props.handleClosure(props.index, event)}>
          </i>
          </div>

      </div>
    </div>
  ): 
  <div className="card">
      <div className="row">

        <div className="col-md-7" id="headerDiv">
          <header className="headerClass">{props.name}</header>
        </div>

        <div className="col-md-2">
          <i 
          id="iID"
          className="fa fa-plus extendSymbol"  
          onClick={(event) => props.handleExtend(props.index, event)}>
          </i>
          </div>
          
      </div>
    </div>
);
export default Card;
