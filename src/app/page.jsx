'use client'
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

export default function Home() {


  const [defaultThisWeek, setDefaultThisWeek] = useState("this week")

  const listOfAccountManagamentTab = [
    {
      id: 1,
      title: "Total Visitors",
      count: "1253",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, totam.",
      buttonName: "Create Account",
      icon: <FaUsers className="text-2xl"/>
    },


    {
      id: 2,
      title: "Borrowed Books",
      count: "1253",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, totam.",
      buttonName: "Create Account",
      icon: <ImBooks className="text-2xl"/>
    },
  ]

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-5">
        {listOfAccountManagamentTab.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="container border p-5 hover:bg-indigo-300 rounded-lg shadow-2xl transition-all duration-500 ease-in-out">
                <div className="flex items-center justify-between">

                  <div className="flex items-center">
                    {item?.icon}
                    <div className="ml-3 text-2xl">{item.title}</div>

                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>{defaultThisWeek}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                      {/* <DropdownMenuSeparator /> */}
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>


                </div>
                <span className="text-5xl font-bold">{item.count}</span>
                <div>{item.description}</div>
              </div>
            </div>
          )
        })}


      </div>
    </div>
  );
}
