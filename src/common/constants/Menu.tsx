import { MenuProps } from "../types/Menu";
import Restaurant from "../../../public/icon/Restaurant Location.svg";
import Scooter from "../../../public/icon/Delivery Scooter.svg";
import Favorite from "../../../public/icon/Review.svg";
import FoodDelivery from "../../../public/icon/24 Hour Food Delivery.svg";
import Bill from "../../../public/icon/Bill.svg";
import Setting from "../../../public/icon/Setting.svg";
import Image from "next/image";
export const MENU: MenuProps[] = [
  {
    name: "Dashboard",
    icon: <Image src={Restaurant} alt="bakery" />,
    path: "/dashboard",
  },
  {
    name: "Food Order",
    icon: <Image src={Scooter} alt="bakery" />,
    path: "/delivery",
  },
  {
    name: "Favorite",
    icon: <Image src={Favorite} alt="bakery" />,
    path: "/favorite",
  },
  {
    name: "Order History",
    icon: <Image src={FoodDelivery} alt="bakery" />,
    path: "/history",
  },
  {
    name: "Bills",
    icon: <Image src={Bill} alt="bakery" />,
    path: "/bills",
  },
  {
    name: "Settings",
    icon: <Image src={Setting} alt="bakery" />,
    path: "/settings",
  },
];

export const MENU_ADMIN: MenuProps[] = [
  {
    name: "Dashboard",
    icon: <Image src={Restaurant} alt="bakery" />,
    path: "/dashboard",
  },
  {
    name: "Menu",
    icon: <Image src={Bill} alt="bakery" />,
    path: "/dashboard/menu",
  },
  {
    name: "Categories",
    icon: <Image src={Bill} alt="bakery" />,
    path: "/dashboard/categories",
  },
  {
    name: "Food Order",
    icon: <Image src={FoodDelivery} alt="bakery" />,
    path: "/dashboard/history",
  },
  {
    name: "Settings",
    icon: <Image src={Setting} alt="bakery" />,
    path: "/dashboard/settings",
  },
];
