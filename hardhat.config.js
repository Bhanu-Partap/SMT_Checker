require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
     modelChecker: {
      contracts: {
        "contracts/test.sol": ["Monotonic"]        
      },    
      divModNoSlacks: true,      
      engine: "all",      
      invariants: ["contract", "reentrancy"],
      showUnproved: true,      
      solvers: ["smtlib2"],
      targets: ["assert","underflow", "overflow"],      
      timeout: 20000
      } 
    }
  }}
