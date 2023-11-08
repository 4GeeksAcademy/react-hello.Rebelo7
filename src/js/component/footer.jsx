import React from "react";

const Footer = (props) => {
    return (
<div className="footer">
  <footer className="bg-dark">
    <p className="text-center text-muted pt-4">Copright © Your Website {props.website} 2023</p>
  </footer>
</div>
)
}  
export { Footer };