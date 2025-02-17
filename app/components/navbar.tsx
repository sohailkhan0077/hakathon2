import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="h-[100px] bg-[#FBEBB5] flex">
            <div className= "h-[24px] w-[430] mt-[38px] ml-[505px] flex gap-10">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
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