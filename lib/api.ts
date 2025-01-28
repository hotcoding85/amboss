import { gql } from "@apollo/client"

export const GET_OFFERS = gql`
  query GetOffers {
    getOffers {
      list {
        account
        amboss_fee_rate
        base_fee
        base_fee_cap
        conditions {
          condition
          operator
          value
        }
        fee_rate
        fee_rate_cap
        id
        max_size
        min_block_length
        min_size
        offer_type
        onchain_multiplier
        onchain_priority
        orders {
          locked_size
        }
        seller_score
        side
        status
        tags {
          name
        }
        total_size
      }
    }
  }
`

