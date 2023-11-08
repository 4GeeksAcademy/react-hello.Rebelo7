import React from "react";


function Card (props) {
    return (
        <div className="card mx-5" >
        <img src={props.imageSrc} className="card-img-top" alt={props.imageAlt} />
        <div className="card-body">
          <h4 className="card-title text-center">{props.title}</h4>
          <p className="card-text">{props.text}</p>
          <div className="buttonLayout text-center">
          <a href={props.buttonLink} className="btn btn-primary ">{props.buttonText}</a>
          </div>
        </div>
      </div>
     );
}  

export { Card };