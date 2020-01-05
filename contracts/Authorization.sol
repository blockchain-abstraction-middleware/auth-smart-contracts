pragma solidity >=0.4.21 <0.6.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Authorization is Ownable {
  mapping (address => uint) subscribers;

  event Subscribed(address indexed account);

  function subscribe()
    public
    payable
  {
    subscribers[msg.sender] = msg.value;
    emit Subscribed(msg.sender);
  }
}