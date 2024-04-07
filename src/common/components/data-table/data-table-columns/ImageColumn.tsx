import React from "react";
import Image from "next/image";
type Props = {};

const ImageColumn = ({ row, accessorKey }: any) => {
  const imageUrl = row.getValue(`${accessorKey}`);

  return (
    <div className="line-clamp-1">
      <Image
        src={imageUrl as string}
        alt={""}
        width={500}
        height={500}
        className="w-10 h-10 object-cover"
      />
    </div>
  );
};

export default ImageColumn;
