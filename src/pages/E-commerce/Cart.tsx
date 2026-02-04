import OneCart from './OneCart'
import SecondCart from './SecondCart'

const Cart = () => {
    return (
        <div className="bg-[rgb(2,6,23)] min-h-screen flex flex-col items-center gap-6 px-6 py-10">
            {/* Stack cards vertically, 90% width, Material UI style */}
            <div className="w-[90%]">
                <OneCart />
            </div>

             <div className="w-[90%]">
                <SecondCart />
            </div>

        </div>
    )
}

export default Cart
