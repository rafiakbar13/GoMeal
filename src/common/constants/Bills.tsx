export type Bills = {
    menu: string
    status: "pending" | "processing" | "completed",
    date: string,
    address: string,
    total: number,
    payment: string,
}

export const bills: Bills[] = [
    {
        menu: "Order #1",
        status: "completed",
        date: "12/12/2021",
        address: "123 Main St",
        total: 100,
        payment: "Cash",
    }
]    