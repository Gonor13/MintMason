DEPLOY STEPS (summary)
1) npm install
2) create .env with PRIVATE_KEY=0x...
3) npx hardhat compile
4) npx hardhat run scripts/deploy.js --network baseSepolia   (testnet)
5) after testing: npx hardhat run scripts/deploy.js --network base   (mainnet)