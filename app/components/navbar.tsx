import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <div className="h-[100px] bg-[#FBEBB5] flex">
            <div className= "h-[24px] w-[430] mt-[38px] ml-[505px] flex gap-10">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="flex gap-14 w-[247px] h-[28px] mt-[37px] ml-[80px]">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-black"/>
            <FontAwesomeIcon icon={faSearch} className="h-6 w-6 text-black"/>
            <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-black"/>
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-black"/>
            </div>
        </div>
    )
}

export default Navbar