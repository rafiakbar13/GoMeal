"use client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Button } from "../../ui/button";

export default function DeleteBtn({ endpoint, title }: any) {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  async function handleDelete() {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const res = await fetch(`${baseUrl}/api/${endpoint}`, {
          method: "DELETE",
        });
        console.log(res);
        if (res.ok) {
          router.refresh();
          setLoading(false);
          toast.success("Deleted Successfully");
        }
      } else {
        setLoading(false);
      }
    });
  }
  return (
    <>
      {loading ? (
        <Button disabled type="button" variant="destructive" className="w-full">
          <Trash2 className="h-4 w-4" />
          Deleting Please wait...
        </Button>
      ) : (
        <Button
          onClick={handleDelete}
          variant={"destructive"}
          className="space-x-2"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete {title}</span>
        </Button>
      )}
    </>
  );
}
