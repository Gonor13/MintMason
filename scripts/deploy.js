const hre = require("hardhat");

async function main() {
  const BaseNFT = await hre.ethers.getContractFactory("BaseNFT");
  const nft = await BaseNFT.deploy();
  await nft.waitForDeployment?.() || (await nft.deployed());
  console.log("✅ Contract deployed to:", nft.address || (await nft.getAddress?.()));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});