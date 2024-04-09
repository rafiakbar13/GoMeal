import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/common/components/ui/card";
import { convertCurrency } from "@/common/lib/convertCurrency";
interface RevenueProps {
  revenue: number;
}

const Income = ({ revenue }: RevenueProps) => {
  return (
    <Card>
      <CardContent className="p-5">
        <span className="text-3xl font-bold">{convertCurrency(revenue)}</span>
      </CardContent>
    </Card>
  );
};

export default Income;
