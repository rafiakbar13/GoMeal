"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/common/components/ui/card";
import {
  AlertCircle,
  CheckCheck,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

interface OrderReportProps {
  orderCounts: {
    pending: number;
    delivered: number;
    completed: number;
    cancelled: number;
  };
  popularFoods: {
    name: string;
    count: number;
  }[];
}

const OrderReport = ({ orderCounts, popularFoods }: OrderReportProps) => {
  const data = {
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    labels: popularFoods.map(
      (food: { name: string; count: number }) => food.name
    ),
    datasets: [
      {
        label: "Populer Food",
        data: popularFoods.map(
          (food: { name: string; count: number }) => food.count
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 3,
      },
    },
    cutout: 150,
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
      {/* Order Detail */}
      <Card>
        <CardContent className="grid gap-3 p-5">
          {/* Total Order complete */}
          <div className=" flex items-center space-x-4 rounded-md p-4">
            <i className=" rounded-xl border-2 p-1">
              <CheckCheck className="text-primary" />
            </i>
            <div className="flex-1 space-y-1">
              <p className="text-sm text-muted-foreground leading-none">
                Total Order Pending
              </p>
              <p className="text-xl font-semibold">{orderCounts.pending}</p>
            </div>
          </div>
          {/* Total Order Delivered */}
          <div className=" flex items-center space-x-4 rounded-md p-4">
            <i className=" rounded-xl border-2 p-1">
              <CheckCircle2 className="text-primary" />
            </i>
            <div className="flex-1 space-y-1">
              <p className="text-sm text-muted-foreground leading-none">
                Total Order Delivered
              </p>
              <p className="text-xl font-semibold">{orderCounts.delivered}</p>
            </div>
          </div>
          {/* Total Order cancelled */}
          <div className=" flex items-center space-x-4 rounded-md p-4">
            <i className=" rounded-xl border-2 p-1">
              <AlertCircle className="text-primary" />
            </i>
            <div className="flex-1 space-y-1">
              <p className="text-sm text-muted-foreground leading-none">
                Total Order Cancelled
              </p>
              <p className="text-xl font-semibold">{orderCounts.cancelled}</p>
            </div>
          </div>
          {/* Order Pending */}
          <div className=" flex items-center space-x-4 rounded-md p-4">
            <i className=" rounded-xl border-2 p-1">
              <HelpCircle className="text-primary" />
            </i>
            <div className="flex-1 space-y-1">
              <p className="text-sm text-muted-foreground leading-none">
                Total Order Complete
              </p>
              <p className="text-xl font-semibold">{orderCounts.completed}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Popular Order */}
      <Card className="p-5">
        <CardHeader>
          <CardTitle className="text-xl">Populer Food</CardTitle>
        </CardHeader>
        <Doughnut data={data} width={50} height={50} options={options} />
        <CardContent className="pt-3 flex flex-col gap-y-4">
          {popularFoods.map((food: any, index: number) => (
            <div key={index} className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                {/* You can use icons or colored circles for visualization */}
                <div
                  className="w-8 h-8 bg-yellow-500 rounded-md"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <span>{food.name}</span>
              </div>
              <span>{food.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default OrderReport;
