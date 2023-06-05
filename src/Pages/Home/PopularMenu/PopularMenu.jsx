import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading='From Our Products'
                subHeading='Popular items'

            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
          
           <div className="flex flex-col justify-center items-center mt-10">
           <Link to='/order'>
                <button className="btn btn-outline border-0 border-b-4 mt-4 btn-neutral text-black">View Full Menu</button>
           </Link>
           </div> 
        </section>
    );
};

export default PopularMenu;