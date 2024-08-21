import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"; 

import "./Featured.css";

const Featured = () => {
    return (
        <section className="featured-item bg-fixed hero-overlay bg-opacity-100 text-white px-12 py-16">
            <SectionTitle className="text-white"
            subHeading="from our menu"
            heading="FROM OUR MENU"
            >
         
            </SectionTitle>
            <div className="grid items-center md:grid-cols-2 grid-cols-1 gap-12 px-16 ">
                <div>
                    <img src={featuredImg} alt=""/>
                </div>
                <div>
                <p> March 20, 2023</p>
                <h4> WHERE CAN I GET SOME?</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                 </p>
                 <button className="uppercase text-white border-0 border-b-4 rounded-md my-4 px-3 py-2">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;