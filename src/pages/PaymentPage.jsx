import React from 'react';
import EmptyCartComp from '../component/EmptyCart.Comp';
import { FiShoppingBag } from 'react-icons/fi';

const PaymentPage = () => {
  const text = 'Add some items to your cart before proceeding to payment.'

  return (
    <>
      <EmptyCartComp text={text}  />
    </>
  );
}

export default PaymentPage;
