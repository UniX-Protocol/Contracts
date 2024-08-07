pragma solidity ^0.8.24;
import './interface/IERC20.sol';

interface IUniXBank{
	function claimInterest(address user,address token ) external;
}
contract UniXHelper {
	constructor(){}

	function getUserInterest(address user,address token, IUniXBank unixBank) external returns(uint interest){
		uint balanceBefore = IERC20(token).balanceOf(user);
		unixBank.claimInterest(user, token);
		uint balanceAfter = IERC20(token).balanceOf(user);
		interest = balanceAfter - balanceBefore;
	}

}