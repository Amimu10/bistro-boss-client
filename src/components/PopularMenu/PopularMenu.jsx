
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "./MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
 const [menu] = useMenu(); 
 const popular = menu.filter(item => item.category === 'popular');
 
    return (
        <section className="container mx-auto lg:px-6 px-4">
            <SectionTitle
              subHeading="Check it out"
              heading="Popular Menu"
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    popular.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;