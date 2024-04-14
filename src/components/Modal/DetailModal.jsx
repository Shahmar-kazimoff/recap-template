import Modal from 'react-bootstrap/Modal';
import { increaseItemModal, decreaseItemModal, addBasket } from "../../Slice/BasketSlice";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LiaSearchSolid } from "react-icons/lia";

const DetailModal = ({ product }) => {

    const [modalShow, setModalShow] = useState(false);
    const [quickViewItem, setquickViewItem] = useState({})

    const addToCart = (product) => {
        dispatch(addBasket(product))
    };
    const increase = (product) => {
        dispatch(increaseItemModal(product))
    };

    const decrease = (product) => {
        dispatch(decreaseItemModal(product))
    };

    const openQuickView = (product) => {
        setModalShow(true)
        setquickViewItem(product)
    }
    const dispatch = useDispatch()

    const getProductCountFromBasket = useSelector((state) => {
        if (!quickViewItem) {
            return 0
        }

        const product = state.basket.initialBasket.find(p => p.id === quickViewItem.id)
        if (product) {
            return product.count || 0
        }

        return 0
    })

    return (
        <div>
            <button onClick={() => openQuickView(product)} className='mx-4  rounded-3xl p-2 hover:bg-green-500 hover:text-white duration-150'><LiaSearchSolid /></button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                restoreFocus={false}
                backdropClassName="bg-transparent backdrop-blur-[1px]"
            >
                <div className='flex'>
                    <img src={quickViewItem.image} alt={quickViewItem.name} className="modal-product-image w-40 lg:w-52 " />
                    <div>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <div className='text-md lg:text-lg'>{quickViewItem.name}</div>
                                <div className='text-sm lg:text-md'>${quickViewItem.price} USD</div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4 className='text-sm md:text-md'>Centered Modal</h4>
                            <p className='text-xs md:text-md'>
                                Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...
                            </p>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <div className='px-2 border text-md font-bold py-[4px]'>{getProductCountFromBasket}</div>
                                    <div className='flex flex-col'>
                                        <button className="text-xs border px-2" onClick={() => increase(quickViewItem)}>▲</button>
                                        <button className="text-xs border px-2" onClick={() => decrease(quickViewItem)}>▼</button>
                                    </div>
                                </div>
                                <button className='py-[3px] px-[1px] bg-green-600  hover:bg-gray-950 text-[7px] lg:text-xs w-14 lg:w-24 font-bold spacing-let text-white duration-150' onClick={() => addToCart(quickViewItem)}>ADD TO CART</button>
                            </div>
                        </Modal.Body>
                    </div>
                </div>
                <Modal.Footer>
                    <button onClick={() => setModalShow(false)}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default DetailModal


