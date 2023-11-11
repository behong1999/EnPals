import CouponCard from "./Offer"

const OfferList = () => {
  return (
    <div className="bg-gray-50 rounded-md p-5 h-full">
      <h1 className="font-bold text-base text-primary-900">Coupons</h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <CouponCard validUntil="03 March 2022" discount={25} title="Sale" />
        </div>
        <div>
          <CouponCard
            validUntil="31 December 2023"
            discount={30}
            title="Christmas Sale"
          />
        </div>
        <div>
          <CouponCard
            validUntil="25 November 2023"
            discount={40}
            title="Black Friday Sale"
          />
        </div>
      </div>
    </div>
  )
}

export default OfferList
