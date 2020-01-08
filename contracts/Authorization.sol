pragma solidity 0.5.8;

import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Authorization is Ownable {
  mapping (address => uint) subscribers;

  event Subscribed(address indexed account);
  event Withdraw(bool hasWithdrawn);

  function subscribe()
    public
    payable
  {
    subscribers[msg.sender] = msg.value;
    emit Subscribed(msg.sender);
  }

  function widthdraw()
    public
    onlyOwner
  {
    msg.sender.transfer(address(this).balance);
    emit Withdraw(true);
  }
}