import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Referee,
  UpdateCharity,
  UpdateFee
} from "../generated/ReferralContract/ReferralContract"

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

export function createRefereeEvent(
  sponsor: Address,
  user: Address,
  blockTime: BigInt
): Referee {
  let refereeEvent = changetype<Referee>(newMockEvent())

  refereeEvent.parameters = new Array()

  refereeEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  refereeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  refereeEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )

  return refereeEvent
}

export function createUpdateCharityEvent(
  charity: Address,
  blockTime: BigInt
): UpdateCharity {
  let updateCharityEvent = changetype<UpdateCharity>(newMockEvent())

  updateCharityEvent.parameters = new Array()

  updateCharityEvent.parameters.push(
    new ethereum.EventParam("charity", ethereum.Value.fromAddress(charity))
  )
  updateCharityEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )

  return updateCharityEvent
}

export function createUpdateFeeEvent(
  fee: BigInt,
  blockTime: BigInt
): UpdateFee {
  let updateFeeEvent = changetype<UpdateFee>(newMockEvent())

  updateFeeEvent.parameters = new Array()

  updateFeeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  updateFeeEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )

  return updateFeeEvent
}
