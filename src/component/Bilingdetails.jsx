import React from 'react';
import Billcard from './Billcard';

function BillingDetails() {
  return (
    <div className='flex flex-row gap-10'>
      <Billcard
        placeholder="Who is this invoice from?"
        nameField="fromName"
        emailField="fromEmail"
        addressField="fromAddress"
        type="sender" // Pass the sender type
      />
      <Billcard
        placeholder="Who is this invoice to?"
        nameField="toName"
        emailField="toEmail"
        addressField="toAddress"
        type="receiver" // Pass the receiver type
      />
    </div>
  );
}

export default BillingDetails;
