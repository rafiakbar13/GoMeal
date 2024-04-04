"use client";
import { Trash2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Button } from "../../ui/button";
import axios from "axios";
export default function RejectButton({ endpoint, title, status }: any) {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const handleAccept = async () => {
    try {
      const response = await axios.put(`${baseUrl}/api/${endpoint}`, {
        status: "REJECTED",
      });
      if (response.status === 200) {
        toast.success("Rejected Successfully, Order has been rejected.");
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
        disabled={status === "REJECTED"}
        onClick={handleAccept}
        variant={"ghost"}
        className="space-x-2"
      >
        <XCircle className="w-4 h-4 text-red-500" />
        <span>Reject</span>
      </Button>
    </>
  );
}
