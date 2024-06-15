'use client'
import React from 'react'

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

export function DropdownMenuRadioGroupDemo({ actioName, actionList }) {
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
                    {actionList.map((item, index) => {
                        return (
                            <div key={index}>
                                <DropdownMenuRadioItem value={item.value}>{item.option}</DropdownMenuRadioItem>
                            </div>
                        )
                    })}
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

const page = () => {

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


    return (
        <div className='container mx-auto'>
            <div className="mt-10 border rounded-xl p-2 shadow-xl">
                <h1 className="ml-2 mb-5">Library Card</h1>
                <div className="ml-2  mb-2 flex justify-between gap-80">
                    <div></div>
                    {/* <ButtonGhost name={"Add User Account"} ></ButtonGhost> */}
                    <div className="flex gap-5">
                        <DropdownMenuRadioGroupDemo actioName="Advance Search Options" actionList={actionListForUserSearch}></DropdownMenuRadioGroupDemo>
                        <Input type="email" placeholder="Search user by Id" />
                        <ButtonGhost name={"Search"} ></ButtonGhost>
                    </div>
                </div>
                <h1 className='ml-3'>Account: Aditya Patil</h1>
                <span className='ml-3 border p-1 bg-green-500 rounded-xl text-white'>Active</span>
                <Table>
                    <TableCaption>Library Card</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">S.NO.</TableHead>
                            <TableHead>Title of Book</TableHead>
                            <TableHead className="w-[100px]">No of Books</TableHead>
                            <TableHead className="w-[100px]">Issued Date</TableHead>
                            <TableHead className="w-[100px]">Date of Return</TableHead>
                            <TableHead className="w-[100px]">Fine</TableHead>
                            <TableHead className="w-[100px]">Issued By</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>Janta Raja</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>30-06-12</TableCell>
                            <TableCell>-</TableCell>
                            <TableCell>0 Rs.</TableCell>
                            <TableCell className="text-right">A. S. Kulkarni</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default page