import {ethers as hethers} from "hardhat"
import fs from "fs"


(async ()=>{
	const [owner] = await hethers.getSigners()
	console.log(`========================owner: ${owner.address} ==========================`)

	const contractAddress = {
		USDC:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
		WBTC:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
		RewardController:"0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb",
		AaveV3Pool:"0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
		AaveEthGateway:"0x893411580e590D62dDBca8a703d61Cc4A8c7b2b9"
	}

	const WETH9Factory = await hethers.getContractFactory("WETH9")
	const WETH9FactoryDeploy = await WETH9Factory.deploy()
	const weth9 = await WETH9FactoryDeploy.waitForDeployment()
	const WETH = await weth9.getAddress()
	

	const UniXBankFactory = await hethers.getContractFactory("UniXBank")
	const UniXBankFactoryDeploy = await UniXBankFactory.deploy(contractAddress.AaveV3Pool,WETH,contractAddress.AaveEthGateway,contractAddress.RewardController,[WETH,"0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8","0x29f2D40B0605204364af54EC677bD022dA425d03"])
	const unixBank = await UniXBankFactoryDeploy.waitForDeployment()
	const UnixBank = await unixBank.getAddress()

	const feeToSetter = owner.address
	const UniswapV2FactoryFactory = await hethers.getContractFactory("UniswapV2Factory")
	const UniswapV2FactoryDeploy = await UniswapV2FactoryFactory.deploy(feeToSetter,UnixBank)
	const uniswapV2Factory = await UniswapV2FactoryDeploy.waitForDeployment()
	const UniswapV2Factory = await uniswapV2Factory.getAddress()


	const UniswapV2RouterFactory = await hethers.getContractFactory("UniswapV2Router02")
	const UniswapV2RouterDeploy = await UniswapV2RouterFactory.deploy(UniswapV2Factory,WETH)
	const uniswapV2Router = await UniswapV2RouterDeploy.waitForDeployment()
	const UniswapV2Router = await uniswapV2Router.getAddress()


	type ContractAddressRecord = {
		[key:string]:string
	}

	const result:ContractAddressRecord = {
		...contractAddress,
		Multicall: "0xb7Ff97662D9D71520a1d7adaBa1b182EC16BfB49",
        UNIX:"0xaab7780AD68e2dcFF7665b07c229e6Bd69cb09dD",
		WETH,
		UnixBank,
		UniswapV2Factory,
		UniswapV2Router
	}
	
	fs.writeFileSync("contract_address.json",JSON.stringify(result,null,4),{flag: 'w'})


})()