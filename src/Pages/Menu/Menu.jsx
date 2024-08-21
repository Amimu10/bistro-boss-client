import { Helmet } from "react-helmet-async";
import SectionCover from "../Shared/SectionCover/SectionCover";
// import SectionTitle from "../../components/SectionTitle/SectionTitle";
import menuImg from "../../assets/menu/banner3.jpg"; 
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg"; 
import saladImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu(); 
const offered = menu.filter(item =>item.category === "offered");
const dessert = menu.filter(item =>item.category === "dessert");
const pizza = menu.filter(item =>item.category === "pizza");
const salad = menu.filter(item =>item.category === "salad");
const soup = menu.filter(item =>item.category === "soup");


    return (
        <div >
        <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
        <SectionCover title="our menu"  img={menuImg}></SectionCover>
        <SectionTitle
        subHeading="don't miss"
        heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory items={dessert} title={"DESSERTS"} img={dessertImg}></MenuCategory>
        <MenuCategory items={pizza} title={"PIZZA"} img={pizzaImg}></MenuCategory>
        <MenuCategory items={salad} title={"SALAD"} img={saladImg}></MenuCategory>
        <MenuCategory items={soup} title={"SOUPS"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;