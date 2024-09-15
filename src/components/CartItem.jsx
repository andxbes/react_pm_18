import { currencyFormatter } from "../utils/formating";

export default function CartItem({ name, quantity, price, onDecrease, onIncrease }) {

    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>QTY</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    );
};
