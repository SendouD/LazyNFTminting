// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;
contract counterDAPP {
    uint public counter;
    constructor(uint initialvalue) {
        counter=initialvalue;



    }
    event counterUpdated(uint counter);
    modifier checkincrement(uint value) {
          require(counter+value<type(uint).max,"Max reached");_;
          emit counterUpdated(counter);
    }
     modifier checkdecrement(uint value) {
          require(counter-value>type(uint).min,"Min reached");_;
          emit counterUpdated(counter);
    }
    function getCountervalue() external view returns(uint) {
       
        return counter;
        
    }
    function increament() checkincrement(1) public{
       

        counter++;
    

    }
    function decrement() checkdecrement(1) public {
       
        counter--;
      

    }
    function increamentby(uint value) checkincrement(value) public {
        counter=counter+value;
    }
    function decrementby(uint value) checkdecrement(value) public{
        counter=counter-value;
    }
    function reset() public{
        counter=0;
        emit counterUpdated(counter);

    }





}