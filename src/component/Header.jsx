import React, { useContext, useEffect } from "react";
import { Context_data } from "./calculatecontext";

function Header() {
  const { currentDate, setCurrentDate, invoiceNumber, setInvoiceNumber, duedate, setduedate } = useContext(Context_data);

  // Update due date on change
  const handleDueDateChange = (e) => {
    setduedate(e.target.value);
    console.log("Due date:", e.target.value);
  };

  // Set random invoice number on load
  useEffect(() => {
    // Generate a random invoice number and convert it to a string
    const invoice_number = Math.floor(Math.random() * 10000 + 1).toString().padStart(5, '0');
    setInvoiceNumber(invoice_number);
  }, [setInvoiceNumber]);
  

  // Set current date on load
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;
    setCurrentDate(formattedDate);
  }, [setCurrentDate]);

  return (
    <div className="flex justify-between border-b-2 pb-6">
      <div className="leftheader">
        <b className="font-semibold pr-3">Current Date: </b><span>{currentDate}</span>
        <div className="flex gap-4 pt-3">
          <p className="font-semibold">Due Date:</p>
          <input
            type="date"
            className="px-3 rounded-sm"
            value={duedate} // bind the state to the input
            onChange={handleDueDateChange} // handle date change
          />
        </div>
      </div>
      <div className="rightheader">
        <div className="flex gap-4 rounded-sm">
          <p className="font-semibold">Invoice number:</p>
          <input
            readOnly
            type="number"
            className="w-20 rounded-sm px-2 outline-none"
            value={invoiceNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
