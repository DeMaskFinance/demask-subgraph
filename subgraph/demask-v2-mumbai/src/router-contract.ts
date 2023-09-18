import {
  MakeLiquidity as MakeLiquidityEvent,
  MakeTransaction as MakeTransactionEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/RouterContract/RouterContract"
import {
  MakeLiquidity,
  MakeTransaction,
  OwnershipTransferred
} from "../generated/schema"

export function handleMakeLiquidity(event: MakeLiquidityEvent): void {
  let entity = new MakeLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action = event.params.action
  entity.to = event.params.to
  entity.sender = event.params.sender
  entity.dml = event.params.dml
  entity.amounttoken = event.params.amounttoken
  entity.amountnft = event.params.amountnft
  entity.fee = event.params.fee
  entity.liquidity = event.params.liquidity
  entity.reserveToken = event.params.reserveToken
  entity.reserveNFT = event.params.reserveNFT
  entity.blockTime = event.params.blockTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMakeTransaction(event: MakeTransactionEvent): void {
  let entity = new MakeTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action = event.params.action
  entity.to = event.params.to
  entity.sender = event.params.sender
  entity.dml = event.params.dml
  entity.amounttoken = event.params.amounttoken
  entity.amountnft = event.params.amountnft
  entity.reserveToken = event.params.reserveToken
  entity.reserveNFT = event.params.reserveNFT
  entity.blockTime = event.params.blockTime

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
