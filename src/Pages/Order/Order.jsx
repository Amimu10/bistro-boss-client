import { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg"; 
import SectionCover from "../Shared/SectionCover/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
const [tabIndex, setTabIndex] = useState(initialIndex);
const [menu] = useMenu(); 

console.log(category);
const drinks = menu.filter(item =>item.category === "drinks");
const dessert = menu.filter(item =>item.category === "dessert");
const pizza = menu.filter(item =>item.category === "pizza");
const salad = menu.filter(item =>item.category === "salad");
const soup = menu.filter(item =>item.category === "soup");

    return (
        <div className="  mb-14">
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
            <SectionCover img={orderImg} title="OUR SHOP"></SectionCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
           <TabList className="text-center text-primary text-[20px] font-semibold mb-8 lg:px-6 px-4">
           <Tab>Salad</Tab>
           <Tab>Pizza</Tab>
           <Tab>Soups</Tab>
           <Tab>Desserts</Tab>
           <Tab>Drinks</Tab>
           </TabList>
           <TabPanel>
            <OrderTab items={salad}></OrderTab>
           </TabPanel>
           <TabPanel>
           <OrderTab items={pizza}></OrderTab>
           </TabPanel>
           <TabPanel>
           <OrderTab items={soup}></OrderTab>
           </TabPanel>
           <TabPanel>
           <OrderTab items={dessert}></OrderTab>
           </TabPanel>
           <TabPanel>
           <OrderTab items={drinks}></OrderTab>
           </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;