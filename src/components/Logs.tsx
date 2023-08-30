"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLogStore } from "@/store";

export default function Logs() {
  const logs = useLogStore((state) => state.logs);
  return (
    <Table>
      <TableCaption>List of logs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Date</TableHead>
          <TableHead className="w-1/3">Hour</TableHead>
          <TableHead className="w-1/3">Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(logs).map((key) => {
          const date = logs[key].date as Date;

          return (
            <TableRow key={key}>
              <TableCell>{date.toLocaleString()}</TableCell>
              <TableCell>{logs[key].hour}</TableCell>
              <TableCell>{logs[key].note}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
