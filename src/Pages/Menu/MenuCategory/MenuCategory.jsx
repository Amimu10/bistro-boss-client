import MenuItem from "../../../components/PopularMenu/MenuItem/MenuItem";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from 'react-router-dom';


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
          <div className="text-center mb-5">
         <Link to={`/order/${title}`}>
         <button className="uppercase  text-primary border-primary font-cinzel font-semibold border-0 border-b-4 rounded-md my-4 px-3 py-2">ORDER YOUR FAVOURITE FOOD</button>
         </Link>
          </div>
        </div>
    );
};

export default MenuCategory;