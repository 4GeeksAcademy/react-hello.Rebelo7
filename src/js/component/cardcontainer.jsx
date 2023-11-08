import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";



function CardContainer () {
    return (
        <div className="d-flex flex-column flex-sm-row my-5" >
        <Card
      imageSrc={rigoImage}
      imageAlt="Image 1"
      title="Card tittle"
      text="Lorem ipsum dolor sit amet. Et porro voluptas hic debitis itaque et vitae dolorum id error illo qui cumque dolores non explicabo temporibus. Est architecto omnis et asperiores animi et deleniti enim et facere nihil qui incidunt porro est dolores voluptatem? Eum tempore internos eos consequatur suscipit quo facere veritatis et unde natus ea dolore temporibus. Ut quis cumque ut voluptatem velit et eligendi velit et quidem aspernatur!"
      buttonLink="/link1"
      buttonText="Find Out More"
    />
     <Card
      imageSrc={rigoImage}
      imageAlt="Image 2"
      title="Card tittle"
      text="Lorem ipsum dolor sit amet. Et porro voluptas hic debitis itaque et vitae dolorum id error illo qui cumque dolores non explicabo temporibus. Est architecto omnis et asperiores animi et deleniti enim et facere nihil qui incidunt porro est dolores voluptatem? Eum tempore internos eos consequatur suscipit quo facere veritatis et unde natus ea dolore temporibus. Ut quis cumque ut voluptatem velit et eligendi velit et quidem aspernatur!"
      buttonLink="/link2"
      buttonText="Find Out More"
    />
     <Card
      imageSrc={rigoImage}
      imageAlt="Image 3"
      title="Card tittle"
      text="Lorem ipsum dolor sit amet. Et porro voluptas hic debitis itaque et vitae dolorum id error illo qui cumque dolores non explicabo temporibus. Est architecto omnis et asperiores animi et deleniti enim et facere nihil qui incidunt porro est dolores voluptatem? Eum tempore internos eos consequatur suscipit quo facere veritatis et unde natus ea dolore temporibus. Ut quis cumque ut voluptatem velit et eligendi velit et quidem aspernatur!"
      buttonLink="/link3"
      buttonText="Find Out More"
    />
     <Card
      imageSrc={rigoImage}
      imageAlt="Image 4"
      title="Card tittle"
      text="Lorem ipsum dolor sit amet. Et porro voluptas hic debitis itaque et vitae dolorum id error illo qui cumque dolores non explicabo temporibus. Est architecto omnis et asperiores animi et deleniti enim et facere nihil qui incidunt porro est dolores voluptatem? Eum tempore internos eos consequatur suscipit quo facere veritatis et unde natus ea dolore temporibus. Ut quis cumque ut voluptatem velit et eligendi velit et quidem aspernatur!"
      buttonLink="/link4"
      buttonText="Find Out More"
    />
    </div>
    )
}  

export { CardContainer };





