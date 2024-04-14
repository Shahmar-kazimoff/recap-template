import { useDispatch, useSelector } from "react-redux"
import {removeWishlist,removeWishlistAll } from "../../../Slice/BasketSlice"
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.basket.initialWishlist)
    const total = useSelector(state => state.basket.total)
    return (
        <div className="text-center flex flex-col p-14 justify-around">
            {wishlist && wishlist.map(product => (
                <div className="flex flex-col md:flex-row justify-between items-center border gap-1 my-2" key={product.id}>
                    <img className="w-full md:w-40" src={product.image} />
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm text-green-700 font-bold">${product.price}</p>
                    <div className="flex justify-center items-center gap-1 font-bold">
                        <MdDelete className="text-red-500 text-2xl cursor-pointer" onClick={() => { dispatch(removeWishlist(product.id)) }} />
                    </div>
                </div>
            ))}
            <div className="my-3">
                <button className="bg-red-500 px-2 py-1 rounded text-white font-semibold hover:bg-red-600" onClick={() => dispatch(removeWishlistAll())}>Remove All</button>
            </div>
        </div>
    )
}

export default Wishlist