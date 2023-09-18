import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  ChangeUriWithVote,
  Launchpad,
  LaunchpadSubmit,
  MintWithVote,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI,
  UserVote,
  VoteMintSubmit,
  VoteUriSubmit
} from "../generated/CreatorContract/CreatorContract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createChangeUriWithVoteEvent(
  from: Address,
  uri: string,
  timeStamp: BigInt
): ChangeUriWithVote {
  let changeUriWithVoteEvent = changetype<ChangeUriWithVote>(newMockEvent())

  changeUriWithVoteEvent.parameters = new Array()

  changeUriWithVoteEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  changeUriWithVoteEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  changeUriWithVoteEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return changeUriWithVoteEvent
}

export function createLaunchpadEvent(
  to: Address,
  token: Address,
  id: BigInt,
  bill: BigInt,
  amount: BigInt,
  timeStamp: BigInt
): Launchpad {
  let launchpadEvent = changetype<Launchpad>(newMockEvent())

  launchpadEvent.parameters = new Array()

  launchpadEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  launchpadEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  launchpadEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  launchpadEvent.parameters.push(
    new ethereum.EventParam("bill", ethereum.Value.fromUnsignedBigInt(bill))
  )
  launchpadEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  launchpadEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return launchpadEvent
}

export function createLaunchpadSubmitEvent(
  creator: Address,
  id: BigInt,
  initial: BigInt,
  totalSell: BigInt,
  percentLock: BigInt,
  price: BigInt,
  priceListing: BigInt,
  tokenPayment: Address,
  startTime: BigInt,
  endTime: BigInt,
  durationLock: BigInt,
  maxbuy: BigInt,
  refundType: boolean,
  whiteList: boolean,
  url: string,
  data: Bytes,
  timeStamp: BigInt
): LaunchpadSubmit {
  let launchpadSubmitEvent = changetype<LaunchpadSubmit>(newMockEvent())

  launchpadSubmitEvent.parameters = new Array()

  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "initial",
      ethereum.Value.fromUnsignedBigInt(initial)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "totalSell",
      ethereum.Value.fromUnsignedBigInt(totalSell)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "percentLock",
      ethereum.Value.fromUnsignedBigInt(percentLock)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "priceListing",
      ethereum.Value.fromUnsignedBigInt(priceListing)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "tokenPayment",
      ethereum.Value.fromAddress(tokenPayment)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "durationLock",
      ethereum.Value.fromUnsignedBigInt(durationLock)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("maxbuy", ethereum.Value.fromUnsignedBigInt(maxbuy))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "refundType",
      ethereum.Value.fromBoolean(refundType)
    )
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("whiteList", ethereum.Value.fromBoolean(whiteList))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  launchpadSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return launchpadSubmitEvent
}

export function createMintWithVoteEvent(
  from: Address,
  receiver: Address,
  totalMint: BigInt,
  timeStamp: BigInt
): MintWithVote {
  let mintWithVoteEvent = changetype<MintWithVote>(newMockEvent())

  mintWithVoteEvent.parameters = new Array()

  mintWithVoteEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  mintWithVoteEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  mintWithVoteEvent.parameters.push(
    new ethereum.EventParam(
      "totalMint",
      ethereum.Value.fromUnsignedBigInt(totalMint)
    )
  )
  mintWithVoteEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return mintWithVoteEvent
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

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createUserVoteEvent(
  voter: Address,
  option: BigInt,
  id: BigInt,
  count: BigInt,
  amount: BigInt,
  status: boolean,
  timeStamp: BigInt
): UserVote {
  let userVoteEvent = changetype<UserVote>(newMockEvent())

  userVoteEvent.parameters = new Array()

  userVoteEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  userVoteEvent.parameters.push(
    new ethereum.EventParam("option", ethereum.Value.fromUnsignedBigInt(option))
  )
  userVoteEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userVoteEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  userVoteEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  userVoteEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  userVoteEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return userVoteEvent
}

export function createVoteMintSubmitEvent(
  creator: Address,
  id: BigInt,
  startTime: BigInt,
  endTime: BigInt,
  totalMint: BigInt,
  currentSupply: BigInt,
  count: BigInt,
  timeStamp: BigInt
): VoteMintSubmit {
  let voteMintSubmitEvent = changetype<VoteMintSubmit>(newMockEvent())

  voteMintSubmitEvent.parameters = new Array()

  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "totalMint",
      ethereum.Value.fromUnsignedBigInt(totalMint)
    )
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "currentSupply",
      ethereum.Value.fromUnsignedBigInt(currentSupply)
    )
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  voteMintSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return voteMintSubmitEvent
}

export function createVoteUriSubmitEvent(
  creator: Address,
  id: BigInt,
  uri: string,
  startTime: BigInt,
  endTime: BigInt,
  currentSupply: BigInt,
  count: BigInt,
  timeStamp: BigInt
): VoteUriSubmit {
  let voteUriSubmitEvent = changetype<VoteUriSubmit>(newMockEvent())

  voteUriSubmitEvent.parameters = new Array()

  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "currentSupply",
      ethereum.Value.fromUnsignedBigInt(currentSupply)
    )
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  voteUriSubmitEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return voteUriSubmitEvent
}
