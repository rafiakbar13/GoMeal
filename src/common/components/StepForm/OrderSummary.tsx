"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { convertCurrency } from "@/common/lib/convertCurrency";
import {
  decrementQty,
  incrementQty,
  removeToCart,
} from "@/redux/slices/cartSlice";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { UpdateCheckoutData } from "@/redux/slices/checkoutSlice";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
type Props = {};

const OrderSummary = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);
  const checkoutData = useSelector((state: any) => state.checkout.checkoutData);
  const cartItem = useSelector((state: any) => state.cart.cartItems);
  console.log(checkoutData);

  const handleIncreaseQty = (item: any) => {
    if (item.qty >= 1) {
      // update qty
      dispatch(incrementQty({ id: item.id }));
    }
  };

  const handleDecreaseQty = (item: any) => {
    if (item.qty > 1) {
      // update qty
      dispatch(decrementQty({ id: item.id }));
    }
  };

  const handleDeleteItem = (id: number) => {
    dispatch(removeToCart({ id }));
  };

  const shippingCost = parseInt(checkoutData.shippingCost);

  const subtotal = cartItems.reduce((acc: number, item: any) => {
    return acc + item.price * item.qty + shippingCost;
  }, 0);

  const checkoutDataWithSubtotal = {
    ...checkoutData,
    total: subtotal,
  };

  const onSubmit = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    dispatch(UpdateCheckoutData(cartItem));
    const combinedData = {
      orderItems: cartItems,
      checkoutData: checkoutDataWithSubtotal,
    };
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await axios.post(`${baseUrl}/api/orders`, combinedData);
      if (response.status === 201) {
        toast.success(`Orders created successfully`);
        router.push(`/order-confirmation/${response.data.id}`);
      } else {
        setLoading(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="divide-y space-y-5">
      <div className="flex flex-col ">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item: any) => (
              <div className="flex justify-between items-center" key={item.id}>
                <Image
                  src={item.image ?? ""}
                  alt={item.name}
                  className="w-16 h-16"
                  width={249}
                  height={249}
                />
                <div className="flex flex-col">
                  <p className="text-zinc-800 font-semibold font-['Poppins']">
                    {item.name}
                  </p>
                  <div className="flex items-center">
                    <button
                      className="text-orange-500 font-bold px-2"
                      onClick={() => handleDecreaseQty(item)}
                    >
                      <MinusCircle size={14} />
                    </button>
                    <p className="text-zinc-400 text-sm font-normal font-['Poppins']">
                      qty : {item.qty}
                    </p>
                    <button
                      className="text-orange-500 font-bold px-2"
                      onClick={() => handleIncreaseQty(item)}
                    >
                      <PlusCircle size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-800 text-lg font-semibold font-['Poppins']">
                    {convertCurrency(item.total)}
                  </span>
                  <button
                    className="text-red-500 font-bold rounded-full w-4 h-4"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Trash2 className="w-full h-full" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center">
            Your cart is empty
          </p>
        )}
      </div>

      <div className="pt-4 flex flex-col gap-y-3">
        <div className="flex justify-between items-center">
          <p className="text-zinc-800 text-lg font-medium font-['Poppins']">
            Shipping Cost
          </p>
          <span className="text-zinc-800 text-2xl font-medium font-['Poppins']">
            {convertCurrency(shippingCost)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-zinc-800 text-lg font-medium font-['Poppins']">
            SubTotal
          </p>
          <span className="text-zinc-800 text-2xl font-medium font-['Poppins']">
            {convertCurrency(subtotal)}
          </span>
        </div>
      </div>
      {loading ? (
        <Button disabled>Processing Please Wait...</Button>
      ) : (
        <Button onClick={onSubmit} type="submit" className="mt-5">
          Proceed to payment
        </Button>
      )}
    </div>
  );
};

export default OrderSummary;
