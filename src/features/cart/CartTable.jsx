import { RiDeleteBin6Line } from 'react-icons/ri';

function CartTable({ cart, deleteCartItem }) {
  return (
    <div className="md:mx-auto ">
      <table>
        <thead className="text-xs md:text-base">
          <tr className="w-full border-b-2">
            <th className="w-[25%] text-transparent">image</th>
            <th className="w-[25%] pb-2">Course Name</th>
            <th className="w-[15%]">Unit Price</th>
            <th className="w-[10%]">Count</th>
            <th className="w-[20%]">Total</th>
            <th className="w-[5%] text-transparent">actions</th>
          </tr>
        </thead>
        <tbody className=" gap-4">
          {cart.map((item) => (
            <tr
              key={item.id}
              className="mb-2 border-b-2 pt-2 text-center text-xs md:text-base"
            >
              <td className="my-2 mr-2 inline-block">
                <img
                  className="shadow-md md:w-[200px] md:rounded-md"
                  src={item.image}
                  alt={item.title}
                />
              </td>
              <td className="">
                <span>{item.title}</span>
              </td>
              <td>
                <span>{item.price}</span>
                <span>$</span>
              </td>
              <td>
                <span>{item.quantity}</span>
              </td>
              <td>
                <span>
                  {item.price * item.quantity}
                  <span>$</span>
                </span>
              </td>
              <td className=" pt-2 text-center text-red-500">
                <button onClick={(e) => deleteCartItem(item.id)}>
                  <RiDeleteBin6Line className=" mx-auto" size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
