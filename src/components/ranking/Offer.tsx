import React from "react"

interface CouponCardProps {
  title: string
  validUntil: string
  discount: number
}

const CouponCard: React.FC<CouponCardProps> = ({
  title,
  validUntil,
  discount,
}) => {
  return (
    <div className="bg-white rounded-lg w-full flex mb-3 border border-gray-200">
      <div className="flex-1 m-auto p-3">
        <p className="text-red-600 text-xl font-bold text-center">{title}</p>
      </div>
      <div className="flex-1 border-l-2 border-gray-300 border-dashed	p-3">
        <p className="font-bold text-xl mb-4">{discount}% OFF</p>
        <p className="text-gray-600 text-[10px]">Valid until {validUntil}</p>
      </div>
    </div>
  )
}

export default CouponCard
