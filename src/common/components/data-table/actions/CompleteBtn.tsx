"use client";
import { PackageCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "../../ui/button";
import axios from "axios";

export default function CompletedButton({ endpoint, title, status }: any) {
  console.log("endpoint", endpoint, "title", title, "status", status);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleAccept = async () => {
    try {
      const response = await axios.put(`${baseUrl}/api/${endpoint}`, {
        status: "COMPLETED",
      });
      if (response.status === 200) {
        toast.success("Order has completed");
      }
      router.refresh();
    } catch (error) {
      toast.error("Error Rejecting Order");
      console.log(error);
    }
  };

  return (
    <>
      <Button
        disabled={
          status === "REJECTED" || status === "ACCEPTED" || status == "PENDING"
        }
        onClick={handleAccept}
        variant={"ghost"}
        className="space-x-2"
      >
        <PackageCheck className="w-4 h-4 text-green-600-500" />
        <span>Completed</span>
      </Button>
    </>
  );
}
