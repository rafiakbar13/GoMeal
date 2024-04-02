"use client";
import { CheckCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Button } from "../../ui/button";
import axios from "axios";
export default function AcceptButton({ endpoint, title }: any) {
  console.log("endpoint", endpoint, "title", title);

  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleAccept = async () => {
    const response = await axios.put(`${baseUrl}/api/${endpoint}`, {
      status: "ACCEPTED",
    });
    if (response.status === 200) {
      toast.success("Accepted Successfully, Order has been accepted.");
    }
  };

  return (
    <>
      <Button onClick={handleAccept} variant={"ghost"} className="space-x-2">
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span>Accept</span>
      </Button>
    </>
  );
}
