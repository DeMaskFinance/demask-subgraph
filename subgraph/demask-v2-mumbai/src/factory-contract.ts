import {
  DmlTokenCreated as DmlTokenCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/FactoryContract/FactoryContract"
import { DmlTokenCreated, OwnershipTransferred } from "../generated/schema"

export function handleDmlTokenCreated(event: DmlTokenCreatedEvent): void {
  let entity = new DmlTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.erc = event.params.erc
  entity.nft = event.params.nft
  entity.FactoryContract_id = event.params.id
  entity.dmlToken = event.params.dmlToken
  entity.length = event.params.length

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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
