"use client"
import React from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [client] = React.useState(() => new QueryClient())
    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration >
                {children}
            </ReactQueryStreamedHydration>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}   