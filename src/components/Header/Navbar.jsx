import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import navbar from "./Navbar.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline, IoCloseOutline } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { removeBasket } from "../../Slice/BasketSlice";
import { useDispatch, useSelector } from 'react-redux';
import { RiMenu2Line } from "react-icons/ri";
// import Chechkout from "../../../pages/Checkout/Chechkout";
import { FaRegHeart, FaHeart } from "react-icons/fa";



const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket.initialBasket)
    const wishlist = useSelector(state => state.basket.initialWishlist)
    const total = useSelector(state => state.basket.total)
    return (
        <div className={`fixed z-10 right-0 left-0 flex justify-between items-center py-6 ${scrollY > 100 ? 'bg-white duration-300 ' : ''}`}>
            <div className={`container mx-auto max-w-[1440px] fixed right-0 left-0 flex justify-between items-center py-3`}>
                <div>
                    <NavLink className="text-[15px] font-bold" to="/"><img className="w-20 lg:w-40" src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" /></NavLink>
                </div>
                <div className="lg:hidden relative z-1 -order-last">
                    <button onClick={toggleMobileMenu} className="text-3xl focus:outline-none ">
                        <RiMenu2Line />
                    </button>
                </div>

                <nav className="hidden lg:flex">
                    <ul className={navbar.navbarStyle}>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/"
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/shop"
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/featured"
                            >
                                Featured
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/pages"
                            >
                                Pages
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={`lg:hidden fixed top-0 py-20 px-3 left-0 w-80 h-[100%] bg-white ${isMobileMenuOpen ? 'block' : 'hidden'} transition-opacity`}>
                    <ul className="text-left flex flex-col font-medium text-md gap-4 text-black">
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/"
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/shop"
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/featured"
                            >
                                Featured
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/pages"
                            >
                                Pages
                            </NavLink>
                        </li>
                        <li className="hover:text-green-800 text-xs font-semibold underline-offset-4">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "green" : "",
                                textDecoration: isActive ? "underline 1px " : "none",
                            })}
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Outlet />
                <div className="lg:right-0 lg:relative">
                    <div className="flex gap-2 text-2xl">
                        <IoIosSearch className="cursor-pointer" />
                        <IoPersonOutline className="cursor-pointer" />
                        <div className="relative">
                            <NavLink to="/wishlist">
                                {wishlist.length > 0 ? (
                                    <FaHeart className="text-xl text-red-500" />
                                ) : (
                                    <FaRegHeart className="text-xl" />
                                )}
                            </NavLink>
                            <span className="absolute -top-1 left-4 px-[5px] text-white font-semibold bg-green-500 rounded-full text-xs">{wishlist.length}</span>
                        </div>
                        <div>
                            <div className="relative">
                                <IoCartOutline className="cursor-pointer" onClick={openSidebar} />
                                <span className="absolute -top-1 left-4 px-[5px] text-white font-semibold bg-green-500 rounded-full text-xs">{basket.length}</span>
                            </div>
                            {isOpen && (
                                <div className="fixed top-0 right-0 h-full w-80  bg-white shadow z-1">
                                    <IoCloseOutline className="cursor-pointer absolute top-3 right-7 text-3xl" onClick={closeSidebar} />
                                    <div className="mt-14 px-3 text-center flex flex-col gap-3">
                                        {basket && basket.map(product => (
                                            <div className="flex justify-between items-center gap-2" key={product.id}>
                                                <img className="w-14" src={product.image} />
                                                <p className="text-sm font-semibold">{product.name}</p>
                                                <p className="text-lg text-green-700">  {product.count}x ${product.price}</p>
                                                <MdDelete className="text-red-500 text-2xl cursor-pointer" onClick={() => { dispatch(removeBasket(product.id)) }} />
                                            </div>
                                        ))}
                                        <p className="font-semibold text-xl">Total Price : ${total}</p>
                                        <NavLink className="bg-gray-950 duration-300 hover:bg-green-600 text-sm px-3 py-1  text-white font-bold spacing-let" to="/checkout">CHECK OUT</NavLink>
                                    </div>

                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
