"use client";
import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { UploadDropzone } from "../lib/uploadthing";
import { Pencil } from "lucide-react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { Button } from "./ui/button";

type ImageInputProps = {
  label: string;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  className?: string;
  endpoint: keyof OurFileRouter;
};

const ImageInput = ({
  label,
  imageUrl,
  setImageUrl,
  className,
  endpoint,
}: ImageInputProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <Button
            onClick={() => setImageUrl("")}
            type="button"
            size={"sm"}
            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50  py-1 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </Button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res: any) => {
            setImageUrl(res[0].url);
            toast.success("Upload Completed");
            console.log("Files: ", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error: any) => {
            toast.error("Upload Failed");
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
};

export default ImageInput;
