import React, { useContext } from "react";
import { Context_data } from "./calculatecontext";
import "../App.css"; // Ensure you add any additional styles in App.css
import Footer from "./Footer";

function Diplsypreview() {
  const {
    items,
    sendername,
    senderemail,
    senderaddress,
    recname,
    recaddress,
    recemail,
    subtotal,
    total,
    taxRate,
    discountRate,
    currencytype,
    displaypreview,
    setdisplaypreview,
    duedate,
    currentDate,
    invoiceNumber,
  } = useContext(Context_data);

  const handleClose = () => {
    setdisplaypreview("false"); // Close the preview
  };

  const handlePrint = () => {
    window.print(); // Trigger the print dialog
  };

  return (
    <div
    className={`fixed inset-0 bg-black bg-opacity-50 ${
      displaypreview === "true" ? "flex" : "hidden"
    } justify-center items-center`}
  >
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl print:max-w-full printable-area">
      <div className="bg-blue-500 text-white py-1 flex justify-between items-center rounded-t-lg">
        <h6 className="text-xl w-11/12 text-center">Invoice Preview</h6>
        <button
          className="text-2xl font-bold hover:text-red-400 no-print float-right pr-4" 
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
  
      <div className="flex flex-col p-4 print:p-0">
        <div className="mb-1 flex justify-between ">
          <div>
            <p><strong>Current Date:</strong> {currentDate}</p>
            <p><strong>Due Date:</strong> {duedate}</p>
          </div>
          <p><strong>Invoice Number:</strong> {invoiceNumber}</p>
        </div>
  
        <div className="flex justify-between">
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Sender Details</h3>
            <p><strong>Name:</strong> {sendername}</p>
            <p><strong>Email:</strong> {senderemail}</p>
            <p><strong>Address:</strong> {senderaddress}</p>
          </div>
          <div className="mb-6 w-96">
            <h3 className="font-semibold text-lg">Receiver Details</h3>
            <p><strong>Name:</strong> {recname}</p>
            <p><strong>Email:</strong> {recemail}</p>
            <p><strong>Address:</strong> {recaddress}</p>
          </div>
        </div>
  
        <div className="mb-1">
          <h3 className="font-semibold text-lg">Item Details</h3>
          <table className="w-full border-collapse border border-gray-200 mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Item Name</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Discount (%)</th>
                <th className="border p-2">Evaluated Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.qty}</td>
                  <td className="border p-2">{item.price}</td>
                  <td className="border p-2">{item.discount}</td>
                  <td className="border p-2">{item.evaluated_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="mb-2 w-full">
          <table className="w-full border">
            <caption className="font-bold text-2xl bg-blue-300 w-full">Summary</caption>
            <thead className="border bg-gray-200">
              <tr>
                <th className="text-left p-2">Subtotal</th>
                <th className="text-left p-2">Discount Rate</th>
                <th className="text-left p-2">Tax Rate</th>
                <th className="text-left p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="border-r p-2 text-center">{subtotal()} {currencytype}</td>
                <td className="border-r p-2 text-center">{discountRate}%</td>
                <td className="border-r p-2 text-center">{taxRate}%</td>
                <td className="p-2 text-center">{total()} {currencytype}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-end space-x-4 px-6 no-print">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Print
          </button>
        </div>
      </div>
  
      <Footer />
    </div>
  </div>
  
  );
}

export default Diplsypreview;
