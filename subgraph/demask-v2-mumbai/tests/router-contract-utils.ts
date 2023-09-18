import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  MakeLiquidity,
  MakeTransaction,
  OwnershipTransferred
} from "../generated/RouterContract/RouterContract"

export function createMakeLiquidityEvent(
  action: string,
  to: Address,
  sender: Address,
  dml: Address,
  amounttoken: BigInt,
  amountnft: BigInt,
  fee: BigInt,
  liquidity: BigInt,
  reserveToken: BigInt,
  reserveNFT: BigInt,
  blockTime: BigInt
): MakeLiquidity {
  let makeLiquidityEvent = changetype<MakeLiquidity>(newMockEvent())

  makeLiquidityEvent.parameters = new Array()

  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromString(action))
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam("dml", ethereum.Value.fromAddress(dml))
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amounttoken",
      ethereum.Value.fromUnsignedBigInt(amounttoken)
    )
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "amountnft",
      ethereum.Value.fromUnsignedBigInt(amountnft)
    )
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "reserveToken",
      ethereum.Value.fromUnsignedBigInt(reserveToken)
    )
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "reserveNFT",
      ethereum.Value.fromUnsignedBigInt(reserveNFT)
    )
  )
  makeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )

  return makeLiquidityEvent
}

export function createMakeTransactionEvent(
  action: string,
  to: Address,
  sender: Address,
  dml: Address,
  amounttoken: BigInt,
  amountnft: BigInt,
  reserveToken: BigInt,
  reserveNFT: BigInt,
  blockTime: BigInt
): MakeTransaction {
  let makeTransactionEvent = changetype<MakeTransaction>(newMockEvent())

  makeTransactionEvent.parameters = new Array()

  makeTransactionEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromString(action))
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam("dml", ethereum.Value.fromAddress(dml))
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "amounttoken",
      ethereum.Value.fromUnsignedBigInt(amounttoken)
    )
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "amountnft",
      ethereum.Value.fromUnsignedBigInt(amountnft)
    )
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveToken",
      ethereum.Value.fromUnsignedBigInt(reserveToken)
    )
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveNFT",
      ethereum.Value.fromUnsignedBigInt(reserveNFT)
    )
  )
  makeTransactionEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )

  return makeTransactionEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
