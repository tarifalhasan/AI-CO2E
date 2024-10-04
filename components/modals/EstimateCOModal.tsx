import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const EstimateCOModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Estimate CO</Button>
      </DialogTrigger>
      <DialogContent className="p-0  flex flex-col justify-between overflow-hidden">
        <div className="px-4 space-y-6 py-6">
          <DialogTitle>Carbon Emission</DialogTitle>
          <div className="space-y-3">
            <p className="text-lg font-medium">Time at Sea</p>
            <div className="flex w-full items-center space-x-2">
              <Input type="text" placeholder="Email" />
              <Button variant={"destructive"} type="submit">
                Submit
              </Button>
            </div>
          </div>
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

export default EstimateCOModal;
