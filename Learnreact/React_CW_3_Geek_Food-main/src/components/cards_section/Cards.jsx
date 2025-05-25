import React from "react";
import MrsLiriImg from "../../assets/card-head-of-seo.avif";
import styles from "./cards.module.css";

function Cards() {
  return (
   <>
    <div className={styles.container}>
        {<ReviewCard 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
        image={MrsLiriImg}
        designation={["Gorge Liri", "Head of SEO"]}
        />}
        {<ReviewCard 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
        image={MrsLiriImg}
        designation={["Gorge Liri", "Head of SEO"]}
        />}
        {<ReviewCard 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."
        image={MrsLiriImg}
        designation={["Gorge Liri", "Head of SEO"]}
        />}
        {<ReviewCard 
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
        image={MrsLiriImg}
        designation={["Gorge Liri", "Head of SEO"]}
        />}
        {<ReviewCard 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"
        image={MrsLiriImg}
        designation={["Gorge Liri", "Head of SEO"]}
        />}
        {<ReviewCard 
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
        image={MrsLiriImg}
        designation={["Gorge Liri", "Head of SEO"]}
        />}
    </div>
   </>
  );
}

function ReviewCard({ text, image, designation }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.text}>
                    {text}
                </div>

                <div className={styles.reviewer}>
                    <div className={styles["reviewer-image-div"]}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles["reviewer-detail-div"]}>
                        <h4>{designation[0]}</h4>
                        <p>{[designation[1]]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
