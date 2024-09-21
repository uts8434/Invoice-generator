import React, { createContext, useState } from "react";

export const Context_data = createContext();

function Calculatecontext({ children }) {
  const [taxRate, setTaxRate] = useState(10);
  const [discountRate, setDiscountRate] = useState(0.0);
  const [currencytype, setcurrencytype] = useState("USD");
  const [displaypreview, setdisplaypreview] = useState("false");
  const [duedate, setduedate] = useState("");


  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [currentDate, setCurrentDate] = useState("");
  const [sendername, setsendername] = useState("");
  const [senderemail, setsenderemail] = useState("");
  const [senderaddress, setsenderaddress] = useState("");
  const [recname, setrecname] = useState("");
  const [recemail, setrecemail] = useState("");
  const [recaddress, setrecaddress] = useState("");

  const [items, setItems] = useState([
    { name: "", qty: 1, price: 0, discount: 0, evaluated_price: 0 },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...items];

    if (name === "qty") {
      values[index].qty = parseInt(value, 10) >= 1 ? parseInt(value, 10) : 1;
    } else if (name === "price") {
      values[index].price = parseFloat(value) >= 0 ? parseFloat(value) : 0;
    } else {
      values[index][name] = value;
    }

    const qty = parseInt(values[index].qty, 10) || 0;
    const price = parseFloat(values[index].price) || 0;
    const discount = parseFloat(values[index].discount) || 0;
    const evaluatedPrice = qty * price * (1 - discount / 100);
    values[index].evaluated_price = evaluatedPrice.toFixed(2);

    setItems(values);
  };

  const handleAddRow = () => {
    setItems([
      ...items,
      { name: "", qty: 1, price: 1, discount: 0, evaluated_price: 1 },
    ]);
  };

  const handleDeleteRow = (index) => {
    const values = [...items];
    values.splice(index, 1);
    setItems(values);
  };

  const subtotal = () => {
    return items
      .reduce((acc, item) => acc + parseFloat(item.evaluated_price || 0), 0)
      .toFixed(2);
  };

  const total = () => {
    const subtotalValue = parseFloat(subtotal());
    const discountAmount = (discountRate / 100) * subtotalValue;
    const taxAmount = (taxRate / 100) * (subtotalValue - discountAmount);
    return (subtotalValue - discountAmount + taxAmount).toFixed(2);
  };

  //   console.log("Context State:", { taxRate, discountRate });
  // console.log("curre",currencytype)

  return (
    <Context_data.Provider
      value={{
        subtotal,
        total,
        taxRate,
        setTaxRate,
        discountRate,
        setDiscountRate,
        currencytype,
        setcurrencytype,
        displaypreview,
        setdisplaypreview,
        items,
        handleInputChange,
        handleAddRow,
        handleDeleteRow,
        invoiceNumber,
        setInvoiceNumber,
        currentDate,
        setCurrentDate,
        duedate,
        setduedate,
        sendername,
        setsendername,
        senderemail,
        setsenderemail,
        senderaddress,
        setsenderaddress,
        recname,
        setrecname,
        recemail,
        setrecemail,
        recaddress,
        setrecaddress,
      }}
    >
      {children}
    </Context_data.Provider>
  );
}

export default Calculatecontext;
