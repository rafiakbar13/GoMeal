import { convertCurrency } from "@/common/lib/convertCurrency";
import { getData } from "@/common/lib/getData";
import { Item } from "@radix-ui/react-dropdown-menu";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default async function page({ params: { id } }: any) {
  const order = await getData(`orders/${id}`);

  const { fooditems } = order;
  console.log(fooditems);
  const subTotal = fooditems
    .reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <section className="py-12 dark:bg-slate-950 bg-slate-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-2xl mx-auto">
          <div className="relative mt-6 overflow-hidden bg-white dark:bg-slate-700 rounded-lg shadow md:mt-10">
            <div className="absolute top-4 right-4">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-gray-900 transition-all duration-200 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-200"
              >
                View invoice
              </button>
            </div>

            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="-my-8 divide-y divide-gray-200">
                <div className="pt-16 pb-8 text-center sm:py-8">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-lime-500" />

                  <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-lime-50">
                    We received your order!
                  </h1>
                  <p className="mt-2 text-sm font-normal text-gray-600 dark:text-slate-300">
                    Your order #{order.orderNumber} is completed and ready to
                    ship
                  </p>
                </div>

                <div className="py-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-20">
                    <div>
                      <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                        Shipping Address
                      </h2>
                      <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {order.firstName} {order.lastName}
                      </p>
                      <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {order.streetAddress} {order.city}, {order.district},{" "}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                        Payment Info
                      </h2>
                      <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {order.paymentMethod}
                      </p>
                      {/* <p className="mt-1 text-sm font-medium text-gray-600">
                        VISA
                        <br />
                        **** 4660
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="py-8">
                  <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                    Order Items
                  </h2>

                  <div className="flow-root mt-8">
                    <ul className="divide-y divide-gray-200 -my-7">
                      {fooditems.length > 0 &&
                        fooditems.map((item: any, i: any) => {
                          return (
                            <li
                              key={i}
                              className="flex items-start justify-between space-x-5 py-7 md:items-stretch"
                            >
                              <div className="flex items-stretch">
                                <div className="flex-shrink-0">
                                  <Image
                                    width={200}
                                    height={200}
                                    className="object-cover w-20 h-20 rounded-lg"
                                    src={item.image}
                                    alt={item.name}
                                  />
                                </div>

                                <div className="flex flex-col justify-between ml-5 w-44">
                                  <p className="flex-1 text-sm font-bold text-gray-900 dark:text-gray-300">
                                    {item.name}
                                  </p>
                                </div>
                              </div>

                              <div className="ml-auto">
                                <p className="text-sm font-bold text-right text-gray-900 dark:text-gray-300">
                                  {convertCurrency(item.price)}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <div className="py-8">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Sub total
                      </p>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {convertCurrency(subTotal)}
                      </p>
                    </li>

                    <li className="flex items-center justify-between">
                      <p className="text-base font-medium text-gray-900 dark:text-white">
                        Total
                      </p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        {/* ${subTotal} */}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
