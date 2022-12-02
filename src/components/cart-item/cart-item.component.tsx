import { CartItem as TcartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItemProps = {
  cartItem: TcartItem;
};

const CartItem = ({
  cartItem: { name, imageUrl, price, quantity },
}: CartItemProps) => (
  <CartItemContainer>
    <img src={imageUrl} alt={`${name}`} />
    <ItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
