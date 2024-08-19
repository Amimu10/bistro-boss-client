

const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div className="flex items-center gap-6 mb-14">
            <img style={{borderRadius: "0 200px 200px 200px" }} className="w-[115px]" src={image} alt="" />
            <div className="text-primary">
                <h5>{name} -------</h5>
                 <p>{recipe}</p>
            </div>
            <div className="text-secondary text-[20px] font-semibold">
          <p>  {"$" + price}</p>
            </div>
        </div>
    );
};

export default MenuItem;