export type Bills = {
    bills: string
    image: JSX.Element
    menu: string
    quantity: number,
    status: "pending" | "delivering" | "completed",
    date: string,
    address: string,
    total: number,
    payment: string,
}
