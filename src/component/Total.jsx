import React, { useContext } from 'react';
import { Context_data } from './calculatecontext';

function Total() {
  const { currencytype, subtotal, taxRate, discountRate, total } = useContext(Context_data);

  
  return (
    <div className="flex justify-end align-middle mb-10">
      <table className="w-80 text-left">
        <thead className="w-80">
          <tr className="border-b-2">
            <th>Subtotal</th>
            <td>{subtotal()}</td>
          </tr>
          <tr className="border-b-2">
            <th>Extra discount</th>
            <td>{discountRate}%</td>
          </tr>
          <tr className="border-b-2">
            <th>Tax rate</th>
            <td>{taxRate}%</td>
          </tr>
          <tr>
            <th>Total &nbsp; {currencytype.toUpperCase()}</th>
            <td>{ total()}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Total;
