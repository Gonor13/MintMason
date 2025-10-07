// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseNFT is ERC721, Ownable {
    uint256 public tokenIdCounter;

    constructor() ERC721("MintMasonNFT", "MM") {}

    function mint() external {
        tokenIdCounter++;
        _safeMint(msg.sender, tokenIdCounter);
    }
}