import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Referee as RefereeEvent,
  UpdateCharity as UpdateCharityEvent,
  UpdateFee as UpdateFeeEvent
} from "../generated/ReferralContract/ReferralContract"
import {
  OwnershipTransferred,
  Referee,
  UpdateCharity,
  UpdateFee
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReferee(event: RefereeEvent): void {
  let entity = new Referee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.user = event.params.user
  entity.blockTime = event.params.blockTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateCharity(event: UpdateCharityEvent): void {
  let entity = new UpdateCharity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.charity = event.params.charity
  entity.blockTime = event.params.blockTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateFee(event: UpdateFeeEvent): void {
  let entity = new UpdateFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fee = event.params.fee
  entity.blockTime = event.params.blockTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
