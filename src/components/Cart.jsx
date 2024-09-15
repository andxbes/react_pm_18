import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formating";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart(params) {
    const carCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = carCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);


    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {carCtx.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart}>Go to Checkout</Button>
            </p>
        </Modal>
    );
};
