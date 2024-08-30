import { useDispatch } from "react-redux";
import Button from "../../ui/Button"
import { decreaseItemQuntity, increaseItemQuntity } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch()

    return (
        <div className="flex gap-1 items-center md:gap-3">
         <Button type="round" onClick={() => dispatch(decreaseItemQuntity(pizzaId))}>-</Button> 
            <span className="text-sm font-medium">{currentQuantity}</span>
         <Button type="round" onClick={() => dispatch(increaseItemQuntity(pizzaId))}>+</Button>    
        </div>
    )
}

export default UpdateItemQuantity