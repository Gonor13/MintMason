# MintMason — Base Mini App (Mainnet-ready)

**MintMason** — minimal Base mini app template (Next.js + OnchainKit) with an example NFT contract and Hardhat deploy scripts.

> ⚠️ You asked for **Base Mainnet** configuration. Be careful: deploying to mainnet requires real ETH on Base for gas. Test thoroughly on Sepolia before deploying to mainnet.

## What is included
- Frontend: Next.js + OnchainKit example (pages/index.tsx)
- Smart contract: `contracts/BaseNFT.sol` (simple ERC-721 mint)
- Hardhat config & deploy script configured for **Base mainnet** and Sepolia testnet
- Manifest: `public/.well-known/farcaster.json` (for Base Mini App association)
- `minikit.config.ts` sample
- README with steps

## Quick local steps

1. Install dependencies
```bash
npm install
```

2. Compile smart contracts
```bash
npx hardhat compile
```

3. Setup `.env` (create file `.env` in repo root)
```env
PRIVATE_KEY=0xyour_private_key_here
```
**Never** commit your private key. Keep it secret.

4. (Optional) Deploy to Sepolia testnet first
```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

5. Deploy to Base mainnet (ONLY when ready)
```bash
npx hardhat run scripts/deploy.js --network base
```

6. After deploy, copy the contract address and paste into `pages/index.tsx` for the TransactionButton.

## Deploy frontend
1. Push repo to GitHub
2. Connect repo to Vercel (https://vercel.com/new) and deploy
3. Ensure `https://your-vercel-domain/.well-known/farcaster.json` is reachable

## Notes & links
- Base docs: https://www.base.org/build
- OnchainKit: https://github.com/coinbase/onchainkit
- Use Sepolia first to test.