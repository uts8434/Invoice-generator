import React, { useContext } from "react";
import { Context_data } from "./calculatecontext";

function Itemdetails() {
  const{items, handleInputChange,handleAddRow,handleDeleteRow}= useContext(Context_data);

  return (
    <div className="w-full border-b-2 mb-4">
      <table className="w-full border-b-2">
        <thead>
          <tr className="text-left">
            <th>Item Name</th>
            <th>QTY</th>
            <th>Price/Rate</th>
            <th>Discount</th>
            <th>Evaluated Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="mb-5">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="pr-3">
                <input
                  className="p-2 rounded-md w-full"
                  type="text"
                  name="name"
                  value={item.name}
                  placeholder="Item Name"
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td className="pr-3">
                <input
                  className="p-2 rounded-md w-16"
                  type="number"
                  name="qty"
                  value={item.qty}
                  placeholder="Quantity"
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td className="pr-3">
                <input
                  className="p-2 rounded-md w-28"
                  type="number"
                  name="price"
                  value={item.price}
                  placeholder="Price/Rate"
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td className="pr-3">
                <input
                  className="p-2 rounded-md w-16"
                  type="number"
                  name="discount"
                  min={0}
                  max={100}
                  value={item.discount}
                  placeholder="0.0 %"
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td className="pr-3">
                <input
                  className="p-2 rounded-md w-20"
                  type="number"
                  name="evaluated_price"
                  value={item.evaluated_price}
                  placeholder="0.0"
                  readOnly
                />
              </td>
              <td className="text-center pr-3">
                <button
                  className="text-red-300 bg-red-700 px-2 py-2 rounded-md"
                  onClick={() => handleDeleteRow(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-blue-600 px-2 py-1 mx-2 my-3 rounded-md text-white"
        onClick={handleAddRow}
      >
        Add new
      </button>
    </div>
  );
}

export default Itemdetails;
