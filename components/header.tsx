"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import logo from "./images/logo.svg"
import image from "./images/image.png"
import search from "./images/search.svg"
export function Header() {
  return (
    <header className="bg-black py-4 pr-8 pl-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
            <Image
                src={logo}
                alt="Amboss Logo"
                width={136}
                height={100}
            />
        </Link>
        <nav className="w-[50%]">
            <ul className="flex space-x-6">
                <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                    Products
                </Link>
                </li>
                <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white">
                    Marketplace
                </Link>
                </li>
                <li>
                <Link href="/stats" className="text-gray-400 hover:text-white">
                    Stats
                </Link>
                </li>
                <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white">
                    Pricing
                </Link>
                </li>
                <li>
                <Link href="/communities" className="text-gray-400 hover:text-white">
                    Communities
                </Link>
                </li>
            </ul>
        </nav>
        <div className="flex items-center space-x-4 w-[30%]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-4 px-3 py-1 bg-gray-800 border border-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent"
                />
                <Image 
                    src={search}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    alt="search"
                    width={16}
                    height={16}
                />
            </div>
          <Button variant="ghost" className="text-white border border-gray-800">Dashboard</Button>
          <div className="w-8 h-8 bg-gray-700 rounded-full min-w-8 min-h-8">
            <Image
                src={image}
                className="rounded-full"
                alt={'avatar'}
                width={240}
                height={240}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

