"use client"

import Image from "next/image"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table"
import { useState } from "react"
import { OfferRow } from "./offers-row"
import info from "./images/info.svg"
interface Offer {
    id: string
    account: string
    seller_score: number
    base_fee: number
    fee_rate: number
    min_block_length: number
    min_size: string
    max_size: string
    total_size: string
    orders: { locked_size: string }
    tags: Array<{ name: string }>
}

interface OffersTableProps {
  offers: Offer[]
}

export function OffersTable({ offers }: OffersTableProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
  
    // Pagination logic
    const indexOfLastOffer = currentPage * itemsPerPage
    const indexOfFirstOffer = indexOfLastOffer - itemsPerPage
    const currentOffers = offers.slice(indexOfFirstOffer, indexOfLastOffer)
  
    const totalPages = Math.ceil(offers.length / itemsPerPage)
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }
  
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
  
    return (
      <div className="border rounded-lg border-gray-800 bg-black">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-800 hover:bg-transparent">
                <TableHead className="text-gray-300"></TableHead>
                <TableHead className="text-gray-300 text-center" colSpan={3}>Cost</TableHead>
                <TableHead className="text-gray-300 text-left" colSpan={2}>Promises</TableHead>
                <TableHead className="text-gray-300 text-left" colSpan={2}>APR</TableHead>
                <TableHead className="text-gray-300 text-left" colSpan={4}>Size Limits</TableHead>
            </TableRow>
            <TableRow className="border-b border-gray-800 hover:bg-transparent">
              <TableHead className="text-gray-400">Seller</TableHead>
              <TableHead className="text-gray-400">
                <div className="flex">
                    <span>Seller Score</span>
                    <Image
                        src={info}
                        width={16}
                        className="pl-1"
                        alt="info"
                        height={16}
                    />
                </div>
              </TableHead>
              <TableHead className="text-gray-400">Fixed (sats)</TableHead>
              <TableHead className="text-gray-400">Max Fee Rate <br></br>(ppm)</TableHead>
              <TableHead className="text-gray-400">Min Channel <br></br>Age</TableHead>
              <TableHead className="text-gray-400">Variable (ppm)</TableHead>
              <TableHead className="text-gray-400">Min</TableHead>
              <TableHead className="text-gray-400">Max</TableHead>
              <TableHead className="text-gray-400">Min</TableHead>
              <TableHead className="text-gray-400">Max</TableHead>
              <TableHead className="text-gray-400">Available <br></br>Liquidity</TableHead>
              <TableHead className="text-gray-400">History</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentOffers.map((offer) => (
              <OfferRow key={offer.id} offer={offer} />
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end py-2 px-4 items-center">
        <div className="flex items-center justify-between py-2 px-4">
            <span className="text-white text-sm pr-4">
                {currentPage} of {totalPages}
            </span>
            <div className="flex items-center gap-2">
                <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-2 py-1 text-xs bg-gray-700 text-white rounded disabled:bg-gray-600"
                >
                {'<'}
                </button>
                <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-2 py-1 text-xs bg-gray-700 text-white rounded disabled:bg-gray-600"
                >
                {'>'}
                </button>
            </div>
        </div>

        </div>
      </div>
    )
}

