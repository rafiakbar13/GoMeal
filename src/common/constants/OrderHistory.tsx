import type { OrderHistory } from "../types/OrderHistory";
import Burger from "@/public/images/Burger/Beef-burger.png";
import Image from "next/image";
export const HistoryData: OrderHistory[] = [
    {
        image: <Image src={Burger} alt="Burger" width={70} />,
        menu: "Beef Burger",
        quantity: 2,
        status: "cancelled",
        date: "12/12/2021",
        address: "123, Lorem Ipsum, Dolor Sit, Amet",
        total: 100,
    },
] 