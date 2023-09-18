import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DmlTokenCreated,
  OwnershipTransferred
} from "../generated/FactoryContract/FactoryContract"

export function createDmlTokenCreatedEvent(
  creator: Address,
  erc: Address,
  nft: Address,
  id: BigInt,
  dmlToken: Address,
  length: BigInt
): DmlTokenCreated {
  let dmlTokenCreatedEvent = changetype<DmlTokenCreated>(newMockEvent())

  dmlTokenCreatedEvent.parameters = new Array()

  dmlTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  dmlTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("erc", ethereum.Value.fromAddress(erc))
  )
  dmlTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  dmlTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  dmlTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("dmlToken", ethereum.Value.fromAddress(dmlToken))
  )
  dmlTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("length", ethereum.Value.fromUnsignedBigInt(length))
  )

  return dmlTokenCreatedEvent
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
