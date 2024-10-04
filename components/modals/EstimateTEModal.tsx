import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

const EstimateTEModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Estimate TE</Button>
      </DialogTrigger>
      <DialogContent className="p-0  flex flex-col justify-between overflow-hidden">
        <div className="px-4 py-6">
          <DialogTitle>Technical Efficiency (EIV / EEDI)</DialogTitle>
          <div className="pt-6">
            <h4 className="text-base font-medium">Result:</h4>
          </div>
          <div></div>
        </div>
        <div className="bg-[#F58682]  p-4">
          <p className="text-sm lg:text-base text-justify text-[#58595B]">
            Disclaimer: The values provided are estimates. While we strive to
            achieve the highest level of accuracy, they may not reflect the
            exact figures. Please verify any critical information independently.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateTEModal;
