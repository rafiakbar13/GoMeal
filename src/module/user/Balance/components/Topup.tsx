import { Button } from "@/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/common/components/ui/dialog";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import Image from "next/image";
import Income from "@images/icon/Income.svg";
import FormTopup from "./FormTopup";
const Topup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-center flex flex-col gap-y-3 items-center justify-center cursor-pointer">
          <div className="bg-white p-3 rounded-xl w-12">
            <Image src={Income} alt="Profit" />
          </div>
          <p className="text-sm whitespace-nowrap text-white font-['Poppins']">
            Top Up
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[678px]">
        <FormTopup />
      </DialogContent>
    </Dialog>
  );
};

export default Topup;
