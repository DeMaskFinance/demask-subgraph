import {
  ApprovalForAll as ApprovalForAllEvent,
  ChangeUriWithVote as ChangeUriWithVoteEvent,
  Launchpad as LaunchpadEvent,
  LaunchpadSubmit as LaunchpadSubmitEvent,
  MintWithVote as MintWithVoteEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  UserVote as UserVoteEvent,
  VoteMintSubmit as VoteMintSubmitEvent,
  VoteUriSubmit as VoteUriSubmitEvent
} from "../generated/CreatorContract/CreatorContract"
import {
  ApprovalForAll, //
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
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeUriWithVote(event: ChangeUriWithVoteEvent): void {
  let entity = new ChangeUriWithVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.uri = event.params.uri
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLaunchpad(event: LaunchpadEvent): void {
  let entity = new Launchpad(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.token = event.params.token
  entity.CreatorContract_id = event.params.id
  entity.bill = event.params.bill
  entity.amount = event.params.amount
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLaunchpadSubmit(event: LaunchpadSubmitEvent): void {
  let entity = new LaunchpadSubmit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.CreatorContract_id = event.params.id
  entity.initial = event.params.initial
  entity.totalSell = event.params.totalSell
  entity.percentLock = event.params.percentLock
  entity.price = event.params.price
  entity.priceListing = event.params.priceListing
  entity.tokenPayment = event.params.tokenPayment
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.durationLock = event.params.durationLock
  entity.maxbuy = event.params.maxbuy
  entity.refundType = event.params.refundType
  entity.whiteList = event.params.whiteList
  entity.url = event.params.url
  entity.data = event.params.data
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintWithVote(event: MintWithVoteEvent): void {
  let entity = new MintWithVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.receiver = event.params.receiver
  entity.totalMint = event.params.totalMint
  entity.timeStamp = event.params.timeStamp

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

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.CreatorContract_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.CreatorContract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserVote(event: UserVoteEvent): void {
  let entity = new UserVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.option = event.params.option
  entity.CreatorContract_id = event.params.id
  entity.count = event.params.count
  entity.amount = event.params.amount
  entity.status = event.params.status
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteMintSubmit(event: VoteMintSubmitEvent): void {
  let entity = new VoteMintSubmit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.CreatorContract_id = event.params.id
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.totalMint = event.params.totalMint
  entity.currentSupply = event.params.currentSupply
  entity.count = event.params.count
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteUriSubmit(event: VoteUriSubmitEvent): void {
  let entity = new VoteUriSubmit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.CreatorContract_id = event.params.id
  entity.uri = event.params.uri
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.currentSupply = event.params.currentSupply
  entity.count = event.params.count
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
