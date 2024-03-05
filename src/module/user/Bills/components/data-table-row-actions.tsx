"use client";
import { Row } from "@tanstack/react-table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/common/components/ui/accordion";
interface DataTableRowActionsProps<TData> {
  row?: Row<TData>;
  children?: React.ReactNode;
}

export const DataTableRowActions = <TData extends {}>({
  children,
  row,
}: DataTableRowActionsProps<TData>) => {
  return (
    <section>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger></AccordionTrigger>
          <AccordionContent className="">{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
