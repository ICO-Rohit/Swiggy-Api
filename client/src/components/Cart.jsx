import React from 'react'
import { useSelector } from 'react-redux';
import store from './utils/CreateStore';
import CartCard from './CartCard';
import { useDispatch } from 'react-redux';
import { clearAllItem } from './utils/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);
    return (
        <>
            <div className='p-5 w-full flex justify-between'>
                <div>
                    <button className="text-2xl bg-red-600 p-2 mb-3 rounded-lg" onClick={() => dispatch(clearAllItem())}>clear All</button>
                    <div>
                        Cart Items - {cartItems.length}
                        {cartItems.map((item) => <CartCard key={item.id} {...item} />)}
                    </div>
                </div>
                <h1 className='text-2xl p-2 mb-3'>Totol - {cartItems.reduce((acc,item)=> acc+ item.price/100,0)}</h1>
            </div>
        </>
    )
}

export default Cart
