import React from "react";

const Junbotron = (props) => {
    return (
<div className=" mx-5 mt-5 bg-light rounded-3 d-flex flex-column flex-sm-row">
      <div className="container-fluid py-5">
        <h1 className="display fw-bold">A Warm Welcome</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet. Et voluptate voluptate est voluptatem molestias eum animi totam ut earum assumenda sit veritatis galisum qui quia dolores? Est aspernatur iure et dolorum laborum vel corporis molestias qui exercitationem mollitia ea dolore nihil qui atque distinctio hic officia amet.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!{props.button}</button>
      </div>
    </div>

)
}  
export { Junbotron };