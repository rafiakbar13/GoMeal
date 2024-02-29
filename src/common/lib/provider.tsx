"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/src/redux/store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <Toaster theme="light" position="top-right" richColors />
        <SessionProvider>
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
