"use client";
import { CheckCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Button } from "../../ui/button";
import axios from "axios";
export default function AcceptButton({ endpoint, title, status }: any) {
  console.log("endpoint", endpoint, "title", title, "status", status);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleAccept = async () => {
    try {
      const response = await axios.put(`${baseUrl}/api/${endpoint}`, {
        status: "ACCEPTED",
      });
      if (response.status === 200) {
        toast.success("Accepted Successfully, Order has been accepted.");
      }
      router.refresh();
    } catch (error) {}
  };

  return (
    <>
      <Button
        disabled={status === "ACCEPTED" || status === "REJECTED"}
        onClick={handleAccept}
        variant={"ghost"}
        className="space-x-2"
      >
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span>Accept</span>
      </Button>
    </>
  );
}
