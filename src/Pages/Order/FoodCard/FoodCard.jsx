

const FoodCard = ({item}) => {
    const {image, price, name, recipe} = item;

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
      <button className="btn text-secondary uppercase bg-[#E8E8E8] hover:bg-[#111827] 
      border-secondary border-b-4 mt-3">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;