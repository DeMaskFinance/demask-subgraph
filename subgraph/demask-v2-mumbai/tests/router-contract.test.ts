import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { MakeLiquidity } from "../generated/schema"
import { MakeLiquidity as MakeLiquidityEvent } from "../generated/RouterContract/RouterContract"
import { handleMakeLiquidity } from "../src/router-contract"
import { createMakeLiquidityEvent } from "./router-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let action = "Example string value"
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let dml = Address.fromString("0x0000000000000000000000000000000000000001")
    let amounttoken = BigInt.fromI32(234)
    let amountnft = BigInt.fromI32(234)
    let fee = BigInt.fromI32(234)
    let liquidity = BigInt.fromI32(234)
    let reserveToken = BigInt.fromI32(234)
    let reserveNFT = BigInt.fromI32(234)
    let blockTime = BigInt.fromI32(234)
    let newMakeLiquidityEvent = createMakeLiquidityEvent(
      action,
      to,
      sender,
      dml,
      amounttoken,
      amountnft,
      fee,
      liquidity,
      reserveToken,
      reserveNFT,
      blockTime
    )
    handleMakeLiquidity(newMakeLiquidityEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MakeLiquidity created and stored", () => {
    assert.entityCount("MakeLiquidity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "action",
      "Example string value"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dml",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amounttoken",
      "234"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountnft",
      "234"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fee",
      "234"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "liquidity",
      "234"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reserveToken",
      "234"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reserveNFT",
      "234"
    )
    assert.fieldEquals(
      "MakeLiquidity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "blockTime",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
