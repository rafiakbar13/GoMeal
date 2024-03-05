import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/common/components/ui/card";
type Props = {};

const Income = (props: Props) => {
  return (
    <Card>
      <CardContent className="p-5">
        <span className="text-3xl font-bold">Rp. 1.000.000</span>
      </CardContent>
    </Card>
  );
};

export default Income;
