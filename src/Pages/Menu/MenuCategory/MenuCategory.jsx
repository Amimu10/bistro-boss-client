import MenuItem from "../../../components/PopularMenu/MenuItem/MenuItem";
import SectionCover from "../../Shared/SectionCover/SectionCover";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="container mx-auto lg:px-6 px-4">
            { title ? <SectionCover title={title} img={img}></SectionCover> :""}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    items.map(item => <MenuItem key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;