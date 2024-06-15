import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {


    const headerTabList = [
        {
            id : 1,
            name: "Accounts",
            path: "/accounts"
        },
        {
            id : 3,
            name: "Library Card",
            path: "/librarycard"
        },
        {
            id : 2,
            name: "Books",
            path: "/books"
        }
    ]

    return (
        <div className='container mx-auto flex justify-between p-5 items-center'>
            <Link href={"/"}><div className='text-3xl'><Image src={'/logo.svg'} height={150} width={150} alt='logo'></Image></div></Link>
            

            <div className='flex items-center gap-5'>
                <div className='flex gap-5 items-center'>



            {headerTabList.map((item, index)=>{
                return(
                    <div key={index}>
                        <Link href={item.path} className='hover:font-bold'>{item.name}</Link>
                    </div>
                )
            })}

                    {/* <Link href={"/"} className='hover:font-bold'>Account</Link>
                    <Link href={"#"} className='hover:font-bold'>Books</Link>
                    <Link href={"#"} className='hover:font-bold'>Ticket</Link>
                    <Link href={"#"} className='hover:font-bold'>Contact</Link>
                    <Link href={"#"} className='hover:font-bold'>Support</Link> */}
                </div>
                <UserButton></UserButton>
            </div>

        </div>
    )
}

export default Header