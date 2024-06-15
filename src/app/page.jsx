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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ButtonGhost({ name }) {
  return <Button>{name}</Button>
}

import { Input } from "@/components/ui/input"

export function DropdownMenuRadioGroupDemo({actioName, actionList}) {
  const [position, setPosition] = useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{actioName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Available Search Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {actionList.map((item, index)=>{
            return(
              <div key={index}>
                  <DropdownMenuRadioItem value={item.value}>{item.option}</DropdownMenuRadioItem>
              </div>
            )
          })}
          {/* <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem> */}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl md:max-w-3xl"
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default function Home() {


  const [defaultThisWeek, setDefaultThisWeek] = useState("this week")

  const actionListForUserSearch = [
     { 
      id: 1,
      option: "Search By User Id",
      value: "id"
     },
     { 
      id: 2,
      option: "Search By User Name",
      value: "userNmae" 
     }
  ]

  const actionListForBookSearch = [
    { 
     id: 1,
     option: "Search By Book Id",
     value: "id"
    },
    { 
     id: 2,
     option: "Search By Book Title",
     value: "title" 
    },
    { 
      id: 3,
      option: "Search By Book Author",
      value: "author" 
     }
 ]

  const listOfAccountManagamentTab = [
    {
      id: 1,
      title: "Total Visitors",
      count: "1253",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, totam.",
      buttonName: "Create Account",
      icon: <FaUsers className="text-2xl" />
    },

    {
      id: 2,
      title: "Borrowed Books",
      count: "1253",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, totam.",
      buttonName: "Create Account",
      icon: <ImBooks className="text-2xl" />
    },
  ]

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-5">
        {listOfAccountManagamentTab.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="container border p-5 rounded-lg shadow-2xl transition-all duration-500 ease-in-out">
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


      <div className="border rounded-xl mt-10 p-5">
        <h1 className="font-bold">Top Choices</h1>

        <div className="flex justify-center items-center">
          <CarouselSize></CarouselSize>
        </div>
      </div>





      <div className="mt-10 border rounded-xl p-2 shadow-xl">

        <h1 className="ml-2 mb-5">Manage User</h1>
        <div className="ml-2  mb-2 flex justify-between gap-80">



          <ButtonGhost name={"Add User Account"} ></ButtonGhost>
          <div className="flex gap-5">
            <DropdownMenuRadioGroupDemo actioName="Advance Search Options" actionList={actionListForUserSearch}></DropdownMenuRadioGroupDemo>
            <Input type="email" placeholder="Search user by Id" />
            <ButtonGhost name={"Search"} ></ButtonGhost>
          </div>
        </div>

        <Table>
          <TableCaption>List of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>


      <div className="mt-10 border rounded-xl p-2 shadow-xl">
        <h1 className="ml-2 mb-5">Manage Books</h1>
        <div className="ml-2  mb-2 flex justify-between gap-80">
          <ButtonGhost name={"Add Book"} ></ButtonGhost>
          <div className="flex gap-5">
          <DropdownMenuRadioGroupDemo actioName="Advance Search Options" actionList={actionListForBookSearch}></DropdownMenuRadioGroupDemo>
            <Input type="email" placeholder="Search book by title" />
            <ButtonGhost name={"Search"} ></ButtonGhost>
          </div>
        </div>


        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Book ID</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Availble</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>



    </div>
  );
}
