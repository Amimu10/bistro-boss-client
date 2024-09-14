import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from 'sweetalert2'
import axios from 'axios';
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const FoodCard = ({item}) => {
    const {_id, image, price, name, recipe} = item;
    const {user} = useAuth(); 
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const axiosSecure = useAxiosSecure();

const handleAddToCart = (food) => {
if(user && user?.email){
  // TODO: cartItem send to the database
  const cartItem = {
    menuId : _id,
    email: user.email,
    name, 
    image,
    price 
  }

  axiosSecure.post("/carts", cartItem)
  .then(res => {
    console.log(res.data);
    if(res.data.insertedId){
      toast.success(`${name} added to the cart` , { duration: 3000 }); 

    }
  })
} 
else{
  Swal.fire({
    title: "You are not loggedin",
    text: "Please login to add to the cart !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, login!"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/login", {state: {form: location}}); 

    } 
  }); 
}     
}     
 
    return (
        <div className=" bg-[#E8E8E8] shadow-xl">
  <figure>
    <img className="w-full mx-auto"
      src={image}
      alt="image" />
  </figure>
  <p className="bg-[#111827] px-4 py-2 absolute right-8 mt-5 text-white rounded-md">{price}</p>
  <div className="card-body">
    <h2 className="card-title text-primary lg:text-[20px] md:text-[16px] font-semibold">{name}</h2>
    <p className="text-black">{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={() => handleAddToCart(item)}  className="btn text-secondary uppercase bg-[#E8E8E8] hover:bg-[#111827] 
      border-secondary border-b-4 mt-3">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;