export type Bills = {
    menu: string
    status: "pending" | "processing" | "completed",
    date: string,
    address: string,
    total: number,
    payment: string,
}
