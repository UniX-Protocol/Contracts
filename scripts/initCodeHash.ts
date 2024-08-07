

import { keccak256 } from "ethers"
import {bytecode} from "../artifacts/contracts/v2-core/UniswapV2Pair.sol/UniswapV2Pair.json"

let hash = keccak256(bytecode)
console.log("hash",hash)
