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

export default function Logs() {
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
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
