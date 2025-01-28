"use client"
import { useQuery } from "@apollo/client"
import { GET_OFFERS } from "@/lib/api"
import { OffersTable } from "@/components/offers-table"
import { Button } from "../components/ui/button"
import { Header } from "@/components/header"

export default function OffersPage() {
  const { loading, error, data } = useQuery(GET_OFFERS)
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto py-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Explore Offers({data?.getOffers?.list ? data.getOffers.list.length : ''})</h1>
          <div className="space-x-4">
            <Button variant='ghost' className="text-white bg-transparent border border-gray-800">Sell Channels</Button>
            <Button variant="secondary">Buy Channels</Button>
          </div>
        </div>
        <div 
          className="absolute w-[877px] h-[819px] left-[calc(50%-438.5px)] top-[-950px] bg-gradient-to-r from-[#7928CA] to-[#FF0080] opacity-14 blur-[120px]">
        </div>

        {loading && <p className="text-white">Loading offers...</p>}
        {error && <p className="text-red-500">Error loading offers: {error.message}</p>}
        {data && data.getOffers && data.getOffers.list && <OffersTable offers={data.getOffers.list} />}
      </main>
    </div>
  )
}

