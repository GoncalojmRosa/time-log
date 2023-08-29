"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { DatePicker } from "./DatePicker";
import { useLogStore } from "@/store";
import { ToastAction } from "@radix-ui/react-toast";
import { toast } from "./ui/use-toast";

export function NewLog() {
  const log = useLogStore((state) => state.log);
  const setLog = useLogStore((state) => state.setLog);

  const validateLog = () => {
    //@ts-ignore
    if (!log.date || !log.hour || log.date === 0) {
      throw "Date or hour cannot be empty";
    } else if (log.hour >= 24) {
      throw "Please enter a valid hour";
    }
  };

  const submitLog = () => {
    try {
      validateLog();
    } catch (e) {
      console.log(e);
      toast({
        variant: "destructive",
        title: "Failed to create log",
        description: e as string,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full sm:w-72 border-dashed border py-3 flex items-center justify-center rounded-md cursor-pointer hover:border-solid">
          <PlusIcon />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            Remember, time is your most valuable asset - Invest it wisely with
            our Time Log App.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input
              id="hour"
              className="col-span-3"
              type="number"
              value={log.hour}
              onChange={(e) =>
                setLog({ ...log, hour: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              className="col-span-3"
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              submitLog();
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
