

const MenuItem = ({ item }) => {
    const { name, image, price, description } = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '200px 200px 0 0'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3>{description}</h3>
                <p className="text-green-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;