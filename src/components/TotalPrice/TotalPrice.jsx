import React from 'react'

const TotalPrice = ({price, percentDiscount, quantity}) => {
    const discountPrice =
    percentDiscount > 0 ? (percentDiscount / 100) * price : price;
    const totalPrice =  quantity > 0 ? discountPrice * quantity : discountPrice
  return (
    <span className='text-darkblue text-xl font-extrabold'>
      ${totalPrice.toFixed(2)}
    </span>
  )
}

export default TotalPrice
