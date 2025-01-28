"use client"
import { TableCell, TableRow } from "./ui/table"
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

interface OfferRowProps {
  offer: Offer
}

export function OfferRow({ offer }: OfferRowProps) {
    const formatNumber = (number: number) => {
        return number.toLocaleString()  // This will format the number with commas
    }
  return (
    <TableRow key={offer.id} className="border-b border-gray-800 text-white">
        <TableCell className="font-medium">
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-transparent" >
                    <img 
                        src={`https://picsum.photos/100?random=${offer.id}`}
                        alt="search"
                        className="rounded-[10px]"
                        width={48}
                        height={48}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm">{offer.account.substring(0, 16)}...</span>
                    <div className="flex gap-1 pt-1">
                        {offer.tags.map((tag) => {
                        let bgColor = "bg-transparent"; // Default color
                        let bdColor = "bg-gray-500"; // Default color
                        let textColor = "bg-gray-500";

                        switch (tag.name) {
                            case "Node Runner":
                                textColor = "text-green-600";
                                bdColor = "border-green-600 border border-[1spx]"
                                break;
                            case "Fastest":
                                textColor = "text-pink-400";
                                bdColor = "border-pink-400 border border-[1px]";
                                break;
                            case "Operator":
                                textColor = "text-yellow-400";
                                bdColor = "border-yellow-500 border border-[1px]";
                                break;
                            case "Fast":
                                textColor = "text-blue-500";
                                bdColor = "border-blue-500 border border-[1px]";
                                break;
                            case "Builder":
                                textColor = "text-white-500";
                                bdColor = "border-white-500 border border-[1px]";
                                break;
                            default:
                                case "Builder":
                                textColor = "text-white-500";
                                bdColor = "border-white-500 border border-[1px]";
                                break;
                        }

                        return (
                            <div
                            key={tag.name}
                            className={`px-2 py-0.5 rounded-full text-xs ${bgColor} ${textColor} ${bdColor}`}
                            >
                            {tag.name}
                            </div>
                        );
                        })}
                    </div>
                    <span className="text-xs text-gray-400 pt-1">139 ch / 12.81BTC cap</span>
                </div>
            </div>
        </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <span><span className="text-gray-400">{Math.round(offer.seller_score * 1 || 0)}</span> / 100</span>
          {/* <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Number(offer.seller_score) / 20
                    ? "fill-purple-500 text-purple-500"
                    : "fill-gray-700 text-gray-700"
                }`}
              />
            ))}
          </div> */}
        </div>
      </TableCell>
      <TableCell>{formatNumber(offer.base_fee)}</TableCell>
      <TableCell>{formatNumber(offer.fee_rate)}</TableCell>
      <TableCell>~{Math.round(offer.min_block_length / 144)}d</TableCell>
      <TableCell>{formatNumber(Number(offer.min_size) / 1000)}</TableCell>
      <TableCell>{(Number(offer.fee_rate) / 10000).toFixed(2)}%</TableCell>
      <TableCell>{((Number(offer.fee_rate) * 1.5) / 10000).toFixed(2)}%</TableCell>
      <TableCell>{Number(offer.min_size) / 1000000}</TableCell>
      <TableCell>{Number(offer.max_size) / 1000000}</TableCell>
      <TableCell>
        <div className="flex flex-col">
          <span>
            {((Number(offer.total_size) - Number(offer.orders.locked_size)) / 100000000).toFixed(3)} BTC
          </span>
          <span className="text-xs text-gray-400">
            Total: {(Number(offer.total_size) / 100000000).toFixed(3)} BTC
          </span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-col">
          <span>61 orders</span>
          <span className="text-xs text-gray-400">3.697 BTC capacity</span>
        </div>
      </TableCell>
    </TableRow>
  )
}
