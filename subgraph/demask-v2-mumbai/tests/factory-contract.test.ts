import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DmlTokenCreated } from "../generated/schema"
import { DmlTokenCreated as DmlTokenCreatedEvent } from "../generated/FactoryContract/FactoryContract"
import { handleDmlTokenCreated } from "../src/factory-contract"
import { createDmlTokenCreatedEvent } from "./factory-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let erc = Address.fromString("0x0000000000000000000000000000000000000001")
    let nft = Address.fromString("0x0000000000000000000000000000000000000001")
    let id = BigInt.fromI32(234)
    let dmlToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let length = BigInt.fromI32(234)
    let newDmlTokenCreatedEvent = createDmlTokenCreatedEvent(
      creator,
      erc,
      nft,
      id,
      dmlToken,
      length
    )
    handleDmlTokenCreated(newDmlTokenCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DmlTokenCreated created and stored", () => {
    assert.entityCount("DmlTokenCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DmlTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DmlTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "erc",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DmlTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nft",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DmlTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dmlToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DmlTokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "length",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
