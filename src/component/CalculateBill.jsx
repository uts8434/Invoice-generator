import React, { useContext } from "react";
import { Context_data } from "./calculatecontext";

function CalculateBill() {
  const currencies = ["usd", "inr", "pkr", "dirham", "riyal"];
  
  const { taxRate, setTaxRate, discountRate, setDiscountRate, currencytype, setcurrencytype,displaypreview,setdisplaypreview } = useContext(Context_data);

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === "taxRate") {
      setTaxRate(parseFloat(value) >= 0 ? parseFloat(value) : 0);
    } 

    if (name === "discountRate") {
      setDiscountRate(parseFloat(value) >= 0 ? parseFloat(value) : 0);
    }

    if (name === "currency") {
      
      setcurrencytype(value); // Fixed the assignment operator
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisplaypreview("true"); // Show the preview when the form is submitted
  };
  

  return (
    <div>
      <form  onSubmit={handleSubmit} >
        <h3 className="font-semibold">Currency:</h3>
        <br />
        <select
          className="w-full px-9 py-1 rounded-md hover:bg-gray-200"
          name="currency" // Moved the name attribute here
          onChange={handleInput} // Moved the onChange handler to the select element
        >
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
        <br />
        <br />

        <h3 className="font-semibold">Tax rate:</h3>
        <div className="flex rounded-3xl bg-red-800">
          <input
            type="number"
            step={0.01}
            placeholder="0.0"
            name="taxRate"
            className="w-full px-5 py-1"
            value={taxRate}
            onChange={handleInput}
          />
          <p className="bg-gray-200 px-2 flex justify-center align-middle font-semibold">%</p>
        </div>

        <br />
        <h3 className="font-semibold">Discount rate:</h3>
        <div className="flex rounded-3xl bg-red-800">
          <input
            type="number"
            step={0.01}
            placeholder="0.0"
            name="discountRate"
            className="w-full px-5 py-1"
            value={discountRate}
            onChange={handleInput}
          />
          <p className="bg-gray-200 px-2 text-center font-semibold">%</p>
        </div>
        <br />
        <hr className="bg-gray-600" />
        <br />
        <button className="bg-blue-600 w-full rounded-md py-2 text-white hover:bg-blue-700"  type="submit">
          Review invoice
        </button>
      </form>
    </div>
  );
}

export default CalculateBill;
