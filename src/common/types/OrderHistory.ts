export type OrderHistory = {
    image: JSX.Element,
    menu: string
    quantity: number,
    status: "pending" | "delivering" | "completed" | "cancelled",
    date: string,
    address: string,
    total: number,
}
