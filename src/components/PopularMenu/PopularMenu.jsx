import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "./MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]); 

   useEffect(() =>{
    fetch("menu.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const popularMenu = data.filter(item => item.category === "popular");
        setMenu(popularMenu);
    })
}, [])


    return (
        <section className="container mx-auto lg:px-6 px-4">
            <SectionTitle
              subHeading="Check it out"
              heading="Popular Menu"
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    menu.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;