import React, { useContext } from "react";
import { Context_data } from "./calculatecontext";

function Billcard({ placeholder, nameField, emailField, addressField, type }) {
  const {
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
  } = useContext(Context_data);

  // Dynamically handle the input change based on type (sender/receiver)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (type === "sender") {
      if (name === "fromName") setsendername(value);
      else if (name === "fromEmail") setsenderemail(value);
      else if (name === "fromAddress") setsenderaddress(value);
    } else if (type === "receiver") {
      if (name === "toName") setrecname(value);
      else if (name === "toEmail") setrecemail(value);
      else if (name === "toAddress") setrecaddress(value);
    }
  };

  return (
    <div className="w-1/2 px-1">
      <h3 className="font-semibold">{placeholder}</h3>
      <input
        className="px-3 py-2 rounded-md w-full"
        type="text"
        placeholder="Full Name"
        name={nameField}
        value={type === "sender" ? sendername : recname}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        className="px-3 py-2 rounded-md w-full"
        type="email"
        placeholder="Email address"
        name={emailField}
        value={type === "sender" ? senderemail : recemail}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="text"
        className="px-3 py-2 rounded-md w-full"
        placeholder="Billing address"
        name={addressField}
        value={type === "sender" ? senderaddress : recaddress}
        onChange={handleChange}
      />
      <br />
      <br />
    </div>
  );
}

export default Billcard;
