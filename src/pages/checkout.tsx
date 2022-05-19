
export default function Cart() {
  let isEmpty;
  let totalUniqueItems;
  let totalItems;
  let cartTotal = 20;
  let updateItemQuantity;
  let removeItem;
  let emptyCart;


  if (isEmpty) return <h1> Your cart isEmpty </h1>;
  return (
    <section>
      <div>
        <div>
          <h5>Cart ({totalUniqueItems}) total Item :({totalItems})
          </h5>
          <table>
            <tbody>
              {items.map((item) => {
                return (
                  <tr>
                    <td>
                      <img src={item.img} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                        {" "}-{" "}
                      </button>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        {" "}+{" "}
                      </button>
                      <button onClick={() => removeItem(item.id)}>RemoveItem</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <h2> total price: {cartTotal} EGP</h2>
          </div>
        </div>
        <div>
          <button onClick={() => emptyCart}>
            Clear Cart
          </button>
          <button onClick={() => alert("Summary of what you're buying: ")}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};
