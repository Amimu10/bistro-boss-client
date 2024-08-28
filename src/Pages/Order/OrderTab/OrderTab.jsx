import FoodCard from "../FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-6 px-4">
                {
                    items.map(item => <FoodCard key={item._id} 
                    item={item} 
                    ></FoodCard>) 
                }
            </div>
        </div>
    );
};

export default OrderTab;