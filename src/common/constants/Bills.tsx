import type { Bills } from "../types/Bills"
import Image from "next/image"
import Burger from "@/public/images/Burger/Beef-burger.png"
export const bills: Bills[] = [
    {
        bills: "Order #1",
        image: <Image src={Burger} alt="Burger" width={70} />,
        menu: "Beef Burger",
        quantity: 2,
        status: "completed",
        date: "12/12/2021",
        address: "123 Main St",
        total: 100,
        payment: "Cash",
    }
]    