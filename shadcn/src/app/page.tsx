"use client";
import Navbar from "@/components/Navbar";
import { SheetDemo } from "@/components/SheetDemo";
import TableDemo from "@/components/TableDemo";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import React from "react";
export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-center bg-black text-white">
      <div className="w-full h-full bg-black flex items-center justify-center">
        <Navbar />
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border "
      />
      <div className="w-full h-full flex items-center justify-center">
        <SheetDemo />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <TableDemo/>
      </div>
    </div>
  );
}
