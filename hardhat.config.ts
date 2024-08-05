import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      // {
      //   version: "0.8.24",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 200,
      //     },
      //   }
      // },

    ],
    overrides:{
      "contracts/Lock.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/UniXBank.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/test/AllocateErc20.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/library/SafeMath.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/library/WadRayMath.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IAaveV3Pool.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IUniswapV2Pair.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IERC20.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/library/DataTypes.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IWrappedTokenGatewayV3.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IWETH.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IAaveV3RewardController.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      "contracts/unix/interface/IAToken.sol":{
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      }
    }
  },
};

export default config;
