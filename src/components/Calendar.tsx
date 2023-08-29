import React from "react";
import dayjs from "dayjs";
import console from "console";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { cn } from "@/lib/utils";

export default function Calendar() {
  function getDateInMonth(month = dayjs().month(), year = dayjs().year()) {
    const startDate = dayjs().year(year).month(month).date(1);
    const endDate = startDate.endOf("month");

    const datesArray = [];
    for (let i = startDate.date(); i <= endDate.date(); i++)
      datesArray.push(startDate.date(i).format("YYYY-MM-DD"));

    return datesArray;
  }
  const getColor = (value: number) => {
    if (value === 0) {
      return "bg-gray-100";
    } else if (value < 5) {
      return "bg-green-100";
    } else if (value < 10) {
      return "bg-green-300";
    } else {
      return "bg-green-500";
    }
  };

  const hour = 0;
  return (
    <div className="border border-dashed flex flex-wrap gap-2 p-5 justify-center rounded-md">
      {getDateInMonth().map((value, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger>
            <div
              className={cn("h-5 w-5 bg-gray-100 rounded-sm", getColor(hour))}
            ></div>
          </HoverCardTrigger>
          <HoverCardContent>
            {hour} hours on {value}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
