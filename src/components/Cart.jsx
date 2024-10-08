import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formating";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart(params) {
    const carCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = carCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);


    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    function handleGoTOCheckout() {
        userProgressCtx.showCheckout();
    }
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
            <h2>Your Cart</h2>
            <ul>
                {carCtx.items.map(item => (
                    <CartItem key={item.id} {...item}
                        onDecrease={() => carCtx.removeItem(item.id)}
                        onIncrease={() => carCtx.addItem(item)}

                    />
                )
                )}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart}>Close</Button>
                {carCtx.items.length > 0 && <Button onClick={handleGoTOCheckout}>Go to Checkout</Button>}

            </p>
        </Modal>
    );
};
