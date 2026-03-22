  * [](/)
  * Deployed contracts

On this page

# 🌐 Mainnet

📘 **Lido V3 Technical Paper**

Learn about the next evolution of Lido staking with **stVaults** — user-
defined validator setups with optional stETH liquidity. Read the complete
[**Lido V3 Technical Paper**](/lido-v3-whitepaper) for architecture details,
mechanisms, and implementation specifics.

**Production Lido Protocol Deployment**

This page lists production contract addresses on mainnets, including Ethereum
and other networks where the protocol and its components are deployed.

**Deployment Information:**

  * ⚓ Lido protocol version: [**`v3.0.1`**](https://github.com/lidofinance/core/releases/tag/v3.0.1)
  * 🌐 Network: Ethereum Mainnet (Chain ID: `1`)
  * ✅ Status: Active and maintained

**Key Resources on Lido V3:**

  * 🔌 [stVaults Documentation Center](/run-on-lido/stvaults/)

## 🏛️ Core Protocol​

  * Lido Locator: [`0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb`](https://etherscan.io/address/0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb) (proxy)
    * Lido Locator: [`0x2f8779042EFaEd4c53db2Ce293eB6B3f7096C72d`](https://etherscan.io/address/0x2f8779042EFaEd4c53db2Ce293eB6B3f7096C72d) (impl)
  * Lido and stETH token: [`0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84`](https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84) (proxy)
    * Lido: [`0x6ca84080381E43938476814be61B779A8bB6a600`](https://etherscan.io/address/0x6ca84080381E43938476814be61B779A8bB6a600) (impl)
  * Accounting: [`0x23ED611be0e1a820978875C0122F92260804cdDf`](https://etherscan.io/address/0x23ED611be0e1a820978875C0122F92260804cdDf) (proxy)
    * Accounting: [`0xd43a3E984071F40d5d840f60708Af0e9526785df`](https://etherscan.io/address/0xd43a3E984071F40d5d840f60708Af0e9526785df) (impl)
  * wstETH token: [`0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0`](https://etherscan.io/address/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0)
  * wstETH referral staker: [`0xa88f0329C2c4ce51ba3fc619BBf44efE7120Dd0d`](https://etherscan.io/address/0xa88f0329C2c4ce51ba3fc619BBf44efE7120Dd0d)
  * EIP-712 helper for stETH: [`0x8F73e4C2A6D852bb4ab2A45E6a9CF5715b3228B7`](https://etherscan.io/address/0x8F73e4C2A6D852bb4ab2A45E6a9CF5715b3228B7)
  * Staking Router: [`0xFdDf38947aFB03C621C71b06C9C70bce73f12999`](https://etherscan.io/address/0xFdDf38947aFB03C621C71b06C9C70bce73f12999) (proxy)
    * Staking Router: [`0x226f9265CBC37231882b7409658C18bB7738173A`](https://etherscan.io/address/0x226f9265CBC37231882b7409658C18bB7738173A) (impl)
  * Deposit Security Module: [`0xffa96d84def2ea035c7ab153d8b991128e3d72fd`](https://etherscan.io/address/0xffa96d84def2ea035c7ab153d8b991128e3d72fd)
  * Execution Layer Rewards Vault: [`0x388C818CA8B9251b393131C08a736A67ccB19297`](https://etherscan.io/address/0x388C818CA8B9251b393131C08a736A67ccB19297)
  * Withdrawal Queue ERC721: [`0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1`](https://etherscan.io/address/0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1) (proxy)
  * Withdrawal Vault: [`0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f`](https://etherscan.io/address/0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f) (proxy)
    * Withdrawal Vault: [`0x7D2BAa6094E1C4B60Da4cbAF4A77C3f4694fD53D`](https://etherscan.io/address/0x7D2BAa6094E1C4B60Da4cbAF4A77C3f4694fD53D) (impl)
  * Burner: [`0xE76c52750019b80B43E36DF30bf4060EB73F573a`](https://etherscan.io/address/0xE76c52750019b80B43E36DF30bf4060EB73F573a) (proxy)
    * Burner: [`0xEe1E3B4f047122650086985f794f0dB5f10Ae49D`](https://etherscan.io/address/0xEe1E3B4f047122650086985f794f0dB5f10Ae49D) (impl)
  * MEV Boost Relay Allowed List: [`0xF95f069F9AD107938F6ba802a3da87892298610E`](https://etherscan.io/address/0xf95f069f9ad107938f6ba802a3da87892298610e)
  * Min First Allocation Strategy: [`0x7e70De6D1877B3711b2bEDa7BA00013C7142d993`](https://etherscan.io/address/0x7e70De6D1877B3711b2bEDa7BA00013C7142d993) (external lib)
  * Triggerable Withdrawals Gateway: [`0xDC00116a0D3E064427dA2600449cfD2566B3037B`](https://etherscan.io/address/0xDC00116a0D3E064427dA2600449cfD2566B3037B)
  * Validator Exit Delay Verifier: [`0xbDb567672c867DB533119C2dcD4FB9d8b44EC82f`](https://etherscan.io/address/0xbDb567672c867DB533119C2dcD4FB9d8b44EC82f)
  * Vault Hub: [`0x1d201BE093d847f6446530Efb0E8Fb426d176709`](https://etherscan.io/address/0x1d201BE093d847f6446530Efb0E8Fb426d176709) (proxy)
    * Vault Hub: [`0x7c7d957D0752AB732E73400624C4a1eb1cb6CF50`](https://etherscan.io/address/0x7c7d957D0752AB732E73400624C4a1eb1cb6CF50) (impl)
  * Predeposit Guarantee: [`0xF4bF42c6D6A0E38825785048124DBAD6c9eaaac3`](https://etherscan.io/address/0xF4bF42c6D6A0E38825785048124DBAD6c9eaaac3) (proxy)
    * Predeposit Guarantee: [`0xE78717192C45736DF0E4be55c0219Ee7f9aDdd0D`](https://etherscan.io/address/0xE78717192C45736DF0E4be55c0219Ee7f9aDdd0D) (impl)
  * Operator Grid: [`0xC69685E89Cefc327b43B7234AC646451B27c544d`](https://etherscan.io/address/0xC69685E89Cefc327b43B7234AC646451B27c544d) (proxy)
    * Operator Grid: [`0xA612E30D71d7D54aEaf4e5A21023F3F270932C2C`](https://etherscan.io/address/0xA612E30D71d7D54aEaf4e5A21023F3F270932C2C) (impl)

### 🔨 stVaults Factory Stack​

  * Staking Vault Factory: [`0x02Ca7772FF14a9F6c1a08aF385aA96bb1b34175A`](https://etherscan.io/address/0x02Ca7772FF14a9F6c1a08aF385aA96bb1b34175A)
  * Staking Vault Beacon: [`0x5FbE8cEf9CCc56ad245736D3C5bAf82ad54Ca789`](https://etherscan.io/address/0x5FbE8cEf9CCc56ad245736D3C5bAf82ad54Ca789)
  * Staking Vault Implementation: [`0x06A56487494aa080deC7Bf69128EdA9225784553`](https://etherscan.io/address/0x06A56487494aa080deC7Bf69128EdA9225784553)
  * Dashboard Implementation: [`0x294825c2764c7D412dc32d87E2242c4f1D989AF3`](https://etherscan.io/address/0x294825c2764c7D412dc32d87E2242c4f1D989AF3)
  * Validator Consolidation Requests: [`0xaC4Aae7123248684C405A4b0038C1560EC7fE018`](https://etherscan.io/address/0xaC4Aae7123248684C405A4b0038C1560EC7fE018)

## 🔮 Oracle Contracts​

  * Accounting Oracle:
    * AccountingOracle: [`0x852deD011285fe67063a08005c71a85690503Cee`](https://etherscan.io/address/0x852deD011285fe67063a08005c71a85690503Cee) (proxy)
    * HashConsensus: [`0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288`](https://etherscan.io/address/0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288)
  * Validators Exit Bus Oracle:
    * ValidatorsExitBusOracle: [`0x0De4Ea0184c2ad0BacA7183356Aea5B8d5Bf5c6e`](https://etherscan.io/address/0x0De4Ea0184c2ad0BacA7183356Aea5B8d5Bf5c6e) (proxy)
    * HashConsensus: [`0x7FaDB6358950c5fAA66Cb5EB8eE5147De3df355a`](https://etherscan.io/address/0x7FaDB6358950c5fAA66Cb5EB8eE5147De3df355a)
  * OracleReportSanityChecker: [`0xf1647c86E6D7959f638DD9CE1d90e2F3C9503129`](https://etherscan.io/address/0xf1647c86E6D7959f638DD9CE1d90e2F3C9503129)
  * OracleDaemonConfig: [`0xbf05A929c3D7885a6aeAd833a992dA6E5ac23b09`](https://etherscan.io/address/0xbf05A929c3D7885a6aeAd833a992dA6E5ac23b09)
  * Lazy Oracle: [`0x5DB427080200c235F2Ae8Cd17A7be87921f7AD6c`](https://etherscan.io/address/0x5DB427080200c235F2Ae8Cd17A7be87921f7AD6c) (proxy)
    * Lazy Oracle: [`0x47f3a6b1E70F7Ec7dBC3CB510B1fdB948C863a5B`](https://etherscan.io/address/0x47f3a6b1E70F7Ec7dBC3CB510B1fdB948C863a5B) (impl)

## 🗳️ DAO Contracts​

  * Lido DAO (Kernel): [`0xb8FFC3Cd6e7Cf5a098A1c92F48009765B24088Dc`](https://etherscan.io/address/0xb8FFC3Cd6e7Cf5a098A1c92F48009765B24088Dc) (proxy)
  * LDO token: [`0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32`](https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32)
  * Aragon Voting: [`0x2e59A20f205bB85a89C53f1936454680651E618e`](https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e) (proxy)
  * Aragon Token Manager: [`0xf73a1260d222f447210581DDf212D915c09a3249`](https://etherscan.io/address/0xf73a1260d222f447210581DDf212D915c09a3249) (proxy)
  * Aragon Finance: [`0xB9E5CBB9CA5b0d659238807E84D0176930753d86`](https://etherscan.io/address/0xB9E5CBB9CA5b0d659238807E84D0176930753d86) (proxy)
  * Aragon Agent: [`0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c`](https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c) (proxy)
  * Aragon ACL: [`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb) (proxy)
  * EVMScriptRegistry: [`0x853cc0D5917f49B57B8e9F89e491F5E18919093A`](https://etherscan.io/address/0x853cc0D5917f49B57B8e9F89e491F5E18919093A) (proxy)
  * Aragon PM: [`0x0cb113890b04b49455dfe06554e2d784598a29c9`](https://etherscan.io/address/0x0cb113890b04b49455dfe06554e2d784598a29c9) (proxy)
  * Voting Repo: [`0x4ee3118e3858e8d7164a634825bfe0f73d99c792`](https://etherscan.io/address/0x4ee3118e3858e8d7164a634825bfe0f73d99c792) (proxy)
  * Lido App Repo: [`0xF5Dc67E54FC96F993CD06073f71ca732C1E654B1`](https://etherscan.io/address/0xF5Dc67E54FC96F993CD06073f71ca732C1E654B1) (proxy)
  * Node Operators Registry Repo: [`0x0D97E876ad14DB2b183CFeEB8aa1A5C788eB1831`](https://etherscan.io/address/0x0D97E876ad14DB2b183CFeEB8aa1A5C788eB1831) (proxy)
  * Simple DVT Repo: [`0x2325b0a607808dE42D918DB07F925FFcCfBb2968`](https://etherscan.io/address/0x2325b0a607808dE42D918DB07F925FFcCfBb2968) (proxy)
  * Insurance Fund: [`0x8B3f33234ABD88493c0Cd28De33D583B70beDe35`](https://etherscan.io/address/0x8B3f33234ABD88493c0Cd28De33D583B70beDe35)
  * GateSeals:
    * Blueprint: [`0xEe06EA501f7d9DC6F4200385A8D910182D155d3e`](https://etherscan.io/address/0xEe06EA501f7d9DC6F4200385A8D910182D155d3e)
    * Factory: [`0x6c82877cac5a7a739f16ca0a89c0a328b8764a24`](https://etherscan.io/address/0x6c82877cac5a7a739f16ca0a89c0a328b8764a24)
    * GateSeal (VEB and TWG): [`0xA6BC802fAa064414AA62117B4a53D27fFfF741F1`](https://etherscan.io/address/0xA6BC802fAa064414AA62117B4a53D27fFfF741F1)
    * GateSeal (Withdrawal Queue): [`0x8A854C4E750CDf24f138f34A9061b2f556066912`](https://etherscan.io/address/0x8A854C4E750CDf24f138f34A9061b2f556066912)
    * GateSeal (VaultHub and PredepositGuarantee): [`0x881dAd714679A6FeaA636446A0499101375A365c`](https://etherscan.io/address/0x881dAd714679A6FeaA636446A0499101375A365c)

### 🧬 Dual Governance​

  * Emergency Protected Timelock: [`0xCE0425301C85c5Ea2A0873A2dEe44d78E02D2316`](https://etherscan.io/address/0xCE0425301C85c5Ea2A0873A2dEe44d78E02D2316)
    * Emergency activation committee: [`0x8B7854488Fde088d686Ea672B6ba1A5242515f45`](https://etherscan.io/address/0x8B7854488Fde088d686Ea672B6ba1A5242515f45)
    * Emergency execution committee: [`0xC7792b3F2B399bB0EdF53fECDceCeB97FBEB18AF`](https://etherscan.io/address/0xC7792b3F2B399bB0EdF53fECDceCeB97FBEB18AF)
  * Admin Executor: [`0x23E0B465633FF5178808F4A75186E2F2F9537021`](https://etherscan.io/address/0x23E0B465633FF5178808F4A75186E2F2F9537021)
  * Dual Governance: [`0xC1db28B3301331277e307FDCfF8DE28242A4486E`](https://etherscan.io/address/0xC1db28B3301331277e307FDCfF8DE28242A4486E)
  * Dual Governance Config Provider: [`0xa1692Af6FDfdD1030E4E9c4Bc429986FA64CB5EF`](https://etherscan.io/address/0xa1692Af6FDfdD1030E4E9c4Bc429986FA64CB5EF)
  * Emergency Governance: [`0x553337946F2FAb8911774b20025fa776B76a7CcE`](https://etherscan.io/address/0x553337946F2FAb8911774b20025fa776B76a7CcE)
  * Veto Signaling Escrow: [`0x165813A31446a98c84E20Dda8C101BB3C8228e1c`](https://etherscan.io/address/0x165813A31446a98c84E20Dda8C101BB3C8228e1c) (proxy)
  * Veto Signaling Escrow: [`0xd6A67636c05BeB5B4a5c90D408b03A63c4e39426`](https://etherscan.io/address/0xd6A67636c05BeB5B4a5c90D408b03A63c4e39426) (impl)
  * Reseal Manager: [`0x7914b5a1539b97Bd0bbd155757F25FD79A522d24`](https://etherscan.io/address/0x7914b5a1539b97Bd0bbd155757F25FD79A522d24)
    * Reseal committee: [`0xFFe21561251c49AdccFad065C94Fb4931dF49081`](https://etherscan.io/address/0xFFe21561251c49AdccFad065C94Fb4931dF49081)
  * Tiebreaker Core Committee: [`0xf65614d73952Be91ce0aE7Dd9cFf25Ba15bEE2f5`](https://etherscan.io/address/0xf65614d73952Be91ce0aE7Dd9cFf25Ba15bEE2f5)
  * Tiebreaker Sub Committees:
    * Builders Sub Committee [`0x3D3ba54D54bbFF40F2Dfa2A8e27bD4dE3dab2951`](https://etherscan.io/address/0x3D3ba54D54bbFF40F2Dfa2A8e27bD4dE3dab2951)
    * Node Operators Sub Committee [`0xDBfa0B8A15a503f25224fcA5F84a3853230A715C`](https://etherscan.io/address/0xDBfa0B8A15a503f25224fcA5F84a3853230A715C)
    * Ethereum Ecosystem Sub Committee [`0xBF048f2111497B6Df5E062811f5fC422804D4baE`](https://etherscan.io/address/0xBF048f2111497B6Df5E062811f5fC422804D4baE)
  * Time Constraints: [`0x2a30F5aC03187674553024296bed35Aa49749DDa`](https://etherscan.io/address/0x2a30F5aC03187674553024296bed35Aa49749DDa)

## 📊 Data Bus​

  * DataBus on Gnosis Chain: [`0x37De961D6bb5865867aDd416be07189D2Dd960e6`](https://gnosis.blockscout.com/address/0x37De961D6bb5865867aDd416be07189D2Dd960e6)
  * DataBus on Base: [`0x37De961D6bb5865867aDd416be07189D2Dd960e6`](https://basescan.org/address/0x37De961D6bb5865867aDd416be07189D2Dd960e6)
  * DataBus on Optimism: [`0x37De961D6bb5865867aDd416be07189D2Dd960e6`](https://optimistic.etherscan.io/address/0x37De961D6bb5865867aDd416be07189D2Dd960e6)
  * DataBus on Polygon PoS: [`0x37De961D6bb5865867aDd416be07189D2Dd960e6`](https://polygonscan.com/address/0x37De961D6bb5865867aDd416be07189D2Dd960e6)

## 🔄 Post Token Rebase Receiver​

  * Token Rate Notifier: [`0x25e35855783bec3E49355a29e110f02Ed8b05ba9`](https://etherscan.io/address/0x25e35855783bec3E49355a29e110f02Ed8b05ba9)

## 🧩 Staking Modules​

### 🔒 Curated Module​

  * Node Operators Registry: [`0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5`](https://etherscan.io/address/0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5) (proxy)
  * Node Operators Registry: [`0x6828b023e737f96B168aCd0b5c6351971a4F81aE`](https://etherscan.io/address/0x6828b023e737f96B168aCd0b5c6351971a4F81aE) (impl)

### ☀️ Simple DVT Module​

  * Node Operators Registry: [`0xaE7B191A31f627b4eB1d4DaC64eaB9976995b433`](https://etherscan.io/address/0xaE7B191A31f627b4eB1d4DaC64eaB9976995b433) (proxy)
  * Node Operators Registry: [`0x6828b023e737f96B168aCd0b5c6351971a4F81aE`](https://etherscan.io/address/0x6828b023e737f96B168aCd0b5c6351971a4F81aE) (impl)

### 🕶️ Community Staking Module​

  * Entry Gates:
    * PermissionlessGate: [`0xcF33a38111d0B1246A3F38a838fb41D626B454f0`](https://etherscan.io/address/0xcF33a38111d0B1246A3F38a838fb41D626B454f0)
    * VettedGate (IdentifiedCommunityStakersGate): [`0xB314D4A76C457c93150d308787939063F4Cc67E0`](https://etherscan.io/address/0xB314D4A76C457c93150d308787939063F4Cc67E0) (proxy)
    * VettedGate (IdentifiedCommunityStakersGate): [`0x65D4D92Cd0EabAa05cD5A46269C24b71C21cfdc4`](https://etherscan.io/address/0x65D4D92Cd0EabAa05cD5A46269C24b71C21cfdc4) (impl)
  * CSModule: [`0xdA7dE2ECdDfccC6c3AF10108Db212ACBBf9EA83F`](https://etherscan.io/address/0xdA7dE2ECdDfccC6c3AF10108Db212ACBBf9EA83F) (proxy)
  * CSModule: [`0x1eB6d4da13ca9566c17F526aE0715325d7a07665`](https://etherscan.io/address/0x1eB6d4da13ca9566c17F526aE0715325d7a07665) (impl)
  * CSAccounting: [`0x4d72BFF1BeaC69925F8Bd12526a39BAAb069e5Da`](https://etherscan.io/address/0x4d72BFF1BeaC69925F8Bd12526a39BAAb069e5Da) (proxy)
  * CSAccounting: [`0x6f09d2426c7405C5546413e6059F884D2D03f449`](https://etherscan.io/address/0x6f09d2426c7405C5546413e6059F884D2D03f449) (impl)
  * CSParametersRegistry: [`0x9D28ad303C90DF524BA960d7a2DAC56DcC31e428`](https://etherscan.io/address/0x9D28ad303C90DF524BA960d7a2DAC56DcC31e428) (proxy)
  * CSParametersRegistry: [`0x25fdC3BE9977CD4da679dF72A64C8B6Bd5216A78`](https://etherscan.io/address/0x25fdC3BE9977CD4da679dF72A64C8B6Bd5216A78) (impl)
  * CSFeeDistributor: [`0xD99CC66fEC647E68294C6477B40fC7E0F6F618D0`](https://etherscan.io/address/0xD99CC66fEC647E68294C6477B40fC7E0F6F618D0) (proxy)
  * CSFeeDistributor: [`0x5DCF7cF7c6645E9E822a379dF046a8b0390251A1`](https://etherscan.io/address/0x5DCF7cF7c6645E9E822a379dF046a8b0390251A1) (impl)
  * CSVerifier: [`0xdC5FE1782B6943f318E05230d688713a560063DC`](https://etherscan.io/address/0xdC5FE1782B6943f318E05230d688713a560063DC)
  * CS GateSeal: [`0xE1686C2E90eb41a48356c1cC7FaA17629af3ADB3`](https://etherscan.io/address/0xE1686C2E90eb41a48356c1cC7FaA17629af3ADB3)
  * CSFeeOracle:
    * CSFeeOracle: [`0x4D4074628678Bd302921c20573EEa1ed38DdF7FB`](https://etherscan.io/address/0x4D4074628678Bd302921c20573EEa1ed38DdF7FB) (proxy)
    * CSFeeOracle: [`0xe0B234f99E413E27D9Bc31aBba9A49A3e570Da97`](https://etherscan.io/address/0xe0B234f99E413E27D9Bc31aBba9A49A3e570Da97) (impl)
    * HashConsensus: [`0x71093efF8D8599b5fA340D665Ad60fA7C80688e4`](https://etherscan.io/address/0x71093efF8D8599b5fA340D665Ad60fA7C80688e4)
  * CSStrikes: [`0xaa328816027F2D32B9F56d190BC9Fa4A5C07637f`](https://etherscan.io/address/0xaa328816027F2D32B9F56d190BC9Fa4A5C07637f) (proxy)
  * CSStrikes: [`0x3E5021424c9e13FC853e523Cd68ebBec848956a0`](https://etherscan.io/address/0x3E5021424c9e13FC853e523Cd68ebBec848956a0) (impl)
  * CSEjector: [`0xc72b58aa02E0e98cF8A4a0E9Dce75e763800802C`](https://etherscan.io/address/0xc72b58aa02E0e98cF8A4a0E9Dce75e763800802C)
  * CSExitPenalties: [`0x06cd61045f958A209a0f8D746e103eCc625f4193`](https://etherscan.io/address/0x06cd61045f958A209a0f8D746e103eCc625f4193) (proxy)
  * CSExitPenalties: [`0xDa22fA1CEa40d05Fe4CD536967afdD839586D546`](https://etherscan.io/address/0xDa22fA1CEa40d05Fe4CD536967afdD839586D546) (impl)
  * Factories:
    * VettedGateFactory: [`0xFdab48c4D627e500207e9AF29c98579d90Ea0ad4`](https://etherscan.io/address/0xFdab48c4D627e500207e9AF29c98579d90Ea0ad4)
  * External libraries:
    * AssetRecovererLib: [`0xa74528edc289b1a597Faf83fCfF7eFf871Cc01D9`](https://etherscan.io/address/0xa74528edc289b1a597Faf83fCfF7eFf871Cc01D9)
    * NOAddresses: [`0xe4d5a7be8d7c3db15755061053f5a49b6a67fffc`](https://etherscan.io/address/0xe4d5a7be8d7c3db15755061053f5a49b6a67fffc)
    * QueueLib: [`0x6eff460627b6798c2907409ea2fdfb287eaa2e55`](https://etherscan.io/address/0x6eff460627b6798c2907409ea2fdfb287eaa2e55)

## 💧 Liquidity Pools​

  * Curve [stETH/ETH](https://curve.fi/steth) pool: [`0xDC24316b9AE028F1497c275EB9192a3Ea0f67022`](https://etherscan.io/address/0xDC24316b9AE028F1497c275EB9192a3Ea0f67022)
  * Curve concentrated [stETH/wETH](https://curve.fi/factory/117) pool:
    * Pool contract: [`0x828b154032950C8ff7CF8085D841723Db2696056`](https://etherscan.io/address/0x828b154032950C8ff7CF8085D841723Db2696056)
    * Gauge contract: [`0xF668E6D326945d499e5B35E7CD2E82aCFbcFE6f0`](https://etherscan.io/address/0xF668E6D326945d499e5B35E7CD2E82aCFbcFE6f0)
  * Balancer wstETH/WETH pool: [`0x32296969Ef14EB0c6d29669C550D4a0449130230`](https://etherscan.io/address/0x32296969Ef14EB0c6d29669C550D4a0449130230)
    * Pool id: `0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080`
  * 1inch stETH/DAI pool: [`0xC1A900Ae76dB21dC5aa8E418Ac0F4E888A4C7431`](https://etherscan.io/address/0xC1A900Ae76dB21dC5aa8E418Ac0F4E888A4C7431)
  * Sushi wstETH/DAI pool: [`0xc5578194D457dcce3f272538D1ad52c68d1CE849`](https://etherscan.io/address/0xc5578194D457dcce3f272538D1ad52c68d1CE849)

## 📈 Price Feeds​

note

See [integration guide](/guides/lido-tokens-integration-guide#integration-
utilities-rate-and-price-feeds) for the rate and price feeds recommended
approaches.

  * Mainnet price feeds
    * Chainlink wstETH/USD Price Feed: [`0x8b6851156023f4f5a66f68bea80851c3d905ac93`](https://etherscan.io/address/0x8b6851156023f4f5a66f68bea80851c3d905ac93)
  * Multichain wstETH/stETH rate feeds
    * Chainlink wstETH/stETH exchange rate on Base: [`0xB88BAc61a4Ca37C43a3725912B1f472c9A5bc061`](https://basescan.org/address/0xB88BAc61a4Ca37C43a3725912B1f472c9A5bc061) (proxy)
    * Chainlink wstETH/stETH exchange rate on Arbitrum: [`0xB1552C5e96B312d0Bf8b554186F846C40614a540`](https://arbiscan.io/address/0xb1552c5e96b312d0bf8b554186f846c40614a540) (proxy)
    * Chainlink wstETH/stETH exchange rate on Optimism: [`0xe59EBa0D492cA53C6f46015EEa00517F2707dc77`](https://optimistic.etherscan.io/address/0xe59eba0d492ca53c6f46015eea00517f2707dc77) (proxy)
    * Chainlink wstETH/stETH exchange rate on Scroll: [`0xE61Da4C909F7d86797a0D06Db63c34f76c9bCBDC`](https://scrollscan.com/address/0xE61Da4C909F7d86797a0D06Db63c34f76c9bCBDC) (proxy)
    * Chainlink wstETH/stETH exchange rate on zkSync: [`0x24a0C9404101A8d7497676BE12F10aEa356bAC28`](https://explorer.zksync.io/address/0x24a0C9404101A8d7497676BE12F10aEa356bAC28) (proxy)
    * Chainlink wstETH/stETH exchange rate on Linea: [`0x3C8A95F2264bB3b52156c766b738357008d87cB7`](https://lineascan.build/address/0x3C8A95F2264bB3b52156c766b738357008d87cB7) (proxy)
    * Chainlink wstETH/stETH exchange rate on BNB: [`0x4c75d01cfa4D998770b399246400a6dc40FB9645`](https://bscscan.com/address/0x4c75d01cfa4D998770b399246400a6dc40FB9645) (proxy)

## 🎁 Reward Programs​

  * Early Stakers Airdrop: [`0x4b3EDb22952Fb4A70140E39FB1adD05A6B49622B`](https://etherscan.io/address/0x4b3EDb22952Fb4A70140E39FB1adD05A6B49622B)
  * Curve Liquidity Farming:
    * Manager Contract: [`0x753D5167C31fBEB5b49624314d74A957Eb271709`](https://etherscan.io/address/0x753D5167C31fBEB5b49624314d74A957Eb271709)
    * Reward Contract: [`0x99ac10631f69c753ddb595d074422a0922d9056b`](https://etherscan.io/address/0x99ac10631f69c753ddb595d074422a0922d9056b)
    * Pool Contract: [`0xDC24316b9AE028F1497c275EB9192a3Ea0f67022`](https://etherscan.io/address/0xDC24316b9AE028F1497c275EB9192a3Ea0f67022)
  * Balancer LP rewards v3:
    * Manager Contract: [`0x86F6c353A0965eB069cD7f4f91C1aFEf8C725551`](https://etherscan.io/address/0x86F6c353A0965eB069cD7f4f91C1aFEf8C725551)
  * Arbitrum Curve rewards manager:
    * Manager Contract: [`0xC20129f1dd4DFeD023a6d6A8de9d54A7b61af5CC`](https://arbiscan.io/address/0xC20129f1dd4DFeD023a6d6A8de9d54A7b61af5CC)
  * Optimism Curve rewards manager:
    * Manager Contract: [`0xD420d6C8aA81c087829A64Ce59936b7C1176A81a`](https://optimistic.etherscan.io/address/0xD420d6C8aA81c087829A64Ce59936b7C1176A81a)

## 🔗 AAVE V2 Integration​

  * AStETH: [`0x1982b2F5814301d4e9a8b0201555376e62F82428`](https://etherscan.io/address/0x1982b2F5814301d4e9a8b0201555376e62F82428) (proxy)
  * AStETH: [`0xbd233D4ffdAA9B7d1d3E6b18CCcb8D091142893a`](https://etherscan.io/address/0xbd233D4ffdAA9B7d1d3E6b18CCcb8D091142893a) (impl)
  * StableDebtStETH: [`0x66457616dd8489df5d0afd8678f4a260088aaf55`](https://etherscan.io/address/0x66457616dd8489df5d0afd8678f4a260088aaf55) (proxy)
  * StableDebtStETH: [`0x8180949ac41EF18e844ff8dafE604a195d86Aea9`](https://etherscan.io/address/0x8180949ac41ef18e844ff8dafe604a195d86aea9) (impl)
  * VariableDebtStETH: [`0xa9deac9f00dc4310c35603fcd9d34d1a750f81db`](https://etherscan.io/address/0xa9deac9f00dc4310c35603fcd9d34d1a750f81db) (proxy)
  * VariableDebtStETH: [`0xDe2c414b671d2DB93617D1592f0490c13674de24`](https://etherscan.io/address/0xde2c414b671d2db93617d1592f0490c13674de24) (impl)
  * DefaultReserveInterestRateStrategy: [`0xff04ed5f7a6C3a0F1e5Ea20617F8C6f513D5A77c`](https://etherscan.io/address/0xff04ed5f7a6C3a0F1e5Ea20617F8C6f513D5A77c)

## ⚙️ DAO Ops Contracts & Addresses​

  * Tokens recoverer for Manager contracts (Reward Programs): [`0x1bdfFe0EBef3FEAdF2723D3330727D73f538959C`](https://etherscan.io/address/0x1bdfFe0EBef3FEAdF2723D3330727D73f538959C).
  * Token Reward Program (TRP) VestingEscrowFactory: [`0xDA1DF6442aFD2EC36aBEa91029794B9b2156ADD0`](https://etherscan.io/address/0xDA1DF6442aFD2EC36aBEa91029794B9b2156ADD0)

## 🤖 Bots​

  * Depositor bot: [`0xF82aC5937A20dC862F9bc0668779031E06000f17`](https://etherscan.io/address/0xF82aC5937A20dC862F9bc0668779031E06000f17)

## 🪨 Lido Stonks Contracts​

  * STETH→DAI [`0x3e2D251275A92a8169A3B17A2C49016e2de492a7`](https://etherscan.io/address/0x3e2D251275A92a8169A3B17A2C49016e2de492a7)
  * STETH→USDC [`0xf4F6A03E3dbf0aA22083be80fDD340943d275Ea5`](https://etherscan.io/address/0xf4F6A03E3dbf0aA22083be80fDD340943d275Ea5)
  * STETH→USDT [`0x7C2a1E25cA6D778eCaEBC8549371062487846aAF`](https://etherscan.io/address/0x7C2a1E25cA6D778eCaEBC8549371062487846aAF)
  * DAI→USDC [`0x79f5E20996abE9f6a48AF6f9b13f1E55AED6f06D`](https://etherscan.io/address/0x79f5E20996abE9f6a48AF6f9b13f1E55AED6f06D)
  * DAI→USDT [`0x8Ba6D367D15Ebc52f3eBBdb4a8710948C0918d42`](https://etherscan.io/address/0x8Ba6D367D15Ebc52f3eBBdb4a8710948C0918d42)
  * USDT→USDC [`0x281e6BB6F26A94250aCEb24396a8E4190726C97e`](https://etherscan.io/address/0x281e6BB6F26A94250aCEb24396a8E4190726C97e)
  * USDT→DAI [`0x64B6aF9A108dCdF470E48e4c0147127F26221A7C`](https://etherscan.io/address/0x64B6aF9A108dCdF470E48e4c0147127F26221A7C)
  * USDC→USDT [`0x278f7B6CBB3Cc37374e6a40bDFEBfff08f65A5C7`](https://etherscan.io/address/0x278f7B6CBB3Cc37374e6a40bDFEBfff08f65A5C7)
  * USDC→DAI [`0x2B5a3944A654439379B206DE999639508bA2e850`](https://etherscan.io/address/0x2B5a3944A654439379B206DE999639508bA2e850)

## ⚡ Easy Track​

  * EasyTrack: [`0xF0211b7660680B49De1A7E9f25C65660F0a13Fea`](https://etherscan.io/address/0xF0211b7660680B49De1A7E9f25C65660F0a13Fea)
  * EVMScriptExecutor: [`0xFE5986E06210aC1eCC1aDCafc0cc7f8D63B3F977`](https://etherscan.io/address/0xFE5986E06210aC1eCC1aDCafc0cc7f8D63B3F977)

### 🧩 Easy Track Factories for Staking Modules​

  * **Curated Node Operators staking module** (registry: [`0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5`](https://etherscan.io/address/0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5))
    * IncreaseNodeOperatorStakingLimit: [`0xFeBd8FAC16De88206d4b18764e826AF38546AfE0`](https://etherscan.io/address/0xFeBd8FAC16De88206d4b18764e826AF38546AfE0)
    * CuratedSubmitExitRequestHashes: [`0x8aa34dAaF0fC263203A15Bcfa0Ed926D466e59F3`](https://etherscan.io/address/0x8aa34dAaF0fC263203A15Bcfa0Ed926D466e59F3)
  * **Simple DVT staking module** (registry: [`0xaE7B191A31f627b4eB1d4DaC64eaB9976995b433`](https://etherscan.io/address/0xaE7B191A31f627b4eB1d4DaC64eaB9976995b433), committee ms [`0x08637515E85A4633E23dfc7861e2A9f53af640f7`](https://app.safe.global/settings/setup?safe=eth:0x08637515E85A4633E23dfc7861e2A9f53af640f7))
    * AddNodeOperators: [`0xcAa3AF7460E83E665EEFeC73a7a542E5005C9639`](https://etherscan.io/address/0xcAa3AF7460E83E665EEFeC73a7a542E5005C9639)
    * ActivateNodeOperators: [`0xCBb418F6f9BFd3525CE6aADe8F74ECFEfe2DB5C8`](https://etherscan.io/address/0xCBb418F6f9BFd3525CE6aADe8F74ECFEfe2DB5C8)
    * DeactivateNodeOperators: [`0x8B82C1546D47330335a48406cc3a50Da732672E7`](https://etherscan.io/address/0x8B82C1546D47330335a48406cc3a50Da732672E7)
    * SetVettedValidatorsLimits: [`0xD75778b855886Fc5e1eA7D6bFADA9EB68b35C19D`](https://etherscan.io/address/0xD75778b855886Fc5e1eA7D6bFADA9EB68b35C19D)
    * SetNodeOperatorNames: [`0x7d509BFF310d9460b1F613e4e40d342201a83Ae4`](https://etherscan.io/address/0x7d509BFF310d9460b1F613e4e40d342201a83Ae4)
    * SetNodeOperatorRewardAddresses: [`0x589e298964b9181D9938B84bB034C3BB9024E2C0`](https://etherscan.io/address/0x589e298964b9181D9938B84bB034C3BB9024E2C0)
    * UpdateTargetValidatorLimits: [`0x161a4552a625844c822954c5acbac928ee0f399b`](https://etherscan.io/address/0x161a4552a625844c822954c5acbac928ee0f399b)
    * ChangeNodeOperatorManager: [`0xE31A0599A6772BCf9b2bFc9e25cf941e793c9a7D`](https://etherscan.io/address/0xE31A0599A6772BCf9b2bFc9e25cf941e793c9a7D)
    * SDVTSubmitExitRequestHashes: [`0xB7668B5485d0f826B86a75b0115e088bB9ee03eE`](https://etherscan.io/address/0xB7668B5485d0f826B86a75b0115e088bB9ee03eE)
  * **Community Staking Module** (module: [`0xdA7dE2ECdDfccC6c3AF10108Db212ACBBf9EA83F`](https://etherscan.io/address/0xdA7dE2ECdDfccC6c3AF10108Db212ACBBf9EA83F), committee ms [`0xC52fC3081123073078698F1EAc2f1Dc7Bd71880f`](https://app.safe.global/settings/setup?safe=eth:0xC52fC3081123073078698F1EAc2f1Dc7Bd71880f))
    * CSMSettleElStealingPenalty: [`0xF6B6E7997338C48Ea3a8BCfa4BB64a315fDa76f4`](https://etherscan.io/address/0xF6B6E7997338C48Ea3a8BCfa4BB64a315fDa76f4)
    * CSMSetVettedGateTree: [`0xBc5642bDD6F2a54b01A75605aAe9143525D97308`](https://etherscan.io/address/0xBc5642bDD6F2a54b01A75605aAe9143525D97308)

### 💰 Easy Track Factories for Token Transfers​

  * **LOL (ex.reWARDS) stETH** (committee ms [`0x87D93d9B2C672bf9c9642d853a8682546a5012B5`](https://app.safe.global/settings/setup?safe=eth:0x87D93d9B2C672bf9c9642d853a8682546a5012B5))
    * AllowedRecipientsRegistry: [`0x48c4929630099b217136b64089E8543dB0E5163a`](https://etherscan.io/address/0x48c4929630099b217136b64089E8543dB0E5163a)
    * AddAllowedRecipient: [`0x935cb3366Faf2cFC415B2099d1F974Fd27202b77`](https://etherscan.io/address/0x935cb3366Faf2cFC415B2099d1F974Fd27202b77)
    * RemoveAllowedRecipient: [`0x22010d1747CaFc370b1f1FBBa61022A313c5693b`](https://etherscan.io/address/0x22010d1747CaFc370b1f1FBBa61022A313c5693b)
    * TopUpAllowedRecipients: [`0x1F2b79FE297B7098875930bBA6dd17068103897E`](https://etherscan.io/address/0x1F2b79FE297B7098875930bBA6dd17068103897E)
  * **Rewards Share stETH** (committee ms [`0xe2A682A9722354D825d1BbDF372cC86B2ea82c8C`](https://app.safe.global/settings/setup?safe=eth:0xe2A682A9722354D825d1BbDF372cC86B2ea82c8C))
    * AllowedRecipientsRegistry: [`0xdc7300622948a7AdaF339783F6991F9cdDD79776`](https://etherscan.io/address/0xdc7300622948a7AdaF339783F6991F9cdDD79776)
    * AddAllowedRecipient: [`0x1F809D2cb72a5Ab13778811742050eDa876129b6`](https://etherscan.io/address/0x1F809D2cb72a5Ab13778811742050eDa876129b6)
    * RemoveAllowedRecipient: [`0xd30Dc38EdEfc21875257e8A3123503075226E14B`](https://etherscan.io/address/0xd30Dc38EdEfc21875257e8A3123503075226E14B)
    * TopUpAllowedRecipients: [`0xbD08f9D6BF1D25Cc7407E4855dF1d46C2043B3Ea`](https://etherscan.io/address/0xbD08f9D6BF1D25Cc7407E4855dF1d46C2043B3Ea)
  * **LEGO LDO** (committee ms [`0x12a43b049A7D330cB8aEAB5113032D18AE9a9030`](https://app.safe.global/settings/setup?safe=eth:0x12a43b049A7D330cB8aEAB5113032D18AE9a9030))
    * AllowedRecipientsRegistry: [`0x97615f72c3428A393d65A84A3ea6BBD9ad6C0D74`](https://etherscan.io/address/0x97615f72c3428A393d65A84A3ea6BBD9ad6C0D74)
    * TopUpAllowedRecipients: [`0x00caAeF11EC545B192f16313F53912E453c91458`](https://etherscan.io/address/0x00caAeF11EC545B192f16313F53912E453c91458)
  * **LEGO stablecoins** (committee ms [`0x12a43b049A7D330cB8aEAB5113032D18AE9a9030`](https://app.safe.global/settings/setup?safe=eth:0x12a43b049A7D330cB8aEAB5113032D18AE9a9030))
    * AllowedRecipientsRegistry: [`0xb0FE4D300334461523D9d61AaD90D0494e1Abb43`](https://etherscan.io/address/0xb0FE4D300334461523D9d61AaD90D0494e1Abb43)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0x6AB39a8Be67D9305799c3F8FdFc95Caf3150d17c`](https://etherscan.io/address/0x6AB39a8Be67D9305799c3F8FdFc95Caf3150d17c)
  * **TRP LDO** (committee ms [`0x834560F580764Bc2e0B16925F8bF229bb00cB759`](https://app.safe.global/settings/setup?safe=eth:0x834560F580764Bc2e0B16925F8bF229bb00cB759))
    * AllowedRecipientsRegistry: [`0x231Ac69A1A37649C6B06a71Ab32DdD92158C80b8`](https://etherscan.io/address/0x231Ac69A1A37649C6B06a71Ab32DdD92158C80b8)
    * TopUpAllowedRecipients: [`0xBd2b6dC189EefD51B273F5cb2d99BA1ce565fb8C`](https://etherscan.io/address/0xBd2b6dC189EefD51B273F5cb2d99BA1ce565fb8C)
  * **Gas Supply stETH** (committee ms [`0x5181d5D56Af4f823b96FE05f062D7a09761a5a53`](https://app.safe.global/settings/setup?safe=eth:0x5181d5D56Af4f823b96FE05f062D7a09761a5a53))
    * AllowedRecipientsRegistry: [`0x49d1363016aA899bba09ae972a1BF200dDf8C55F`](https://etherscan.io/address/0x49d1363016aA899bba09ae972a1BF200dDf8C55F)
    * AddAllowedRecipient: [`0x48c135Ff690C2Aa7F5B11C539104B5855A4f9252`](https://etherscan.io/address/0x48c135Ff690C2Aa7F5B11C539104B5855A4f9252)
    * RemoveAllowedRecipient: [`0x7E8eFfAb3083fB26aCE6832bFcA4C377905F97d7`](https://etherscan.io/address/0x7E8eFfAb3083fB26aCE6832bFcA4C377905F97d7)
    * TopUpAllowedRecipients: [`0x200dA0b6a9905A377CF8D469664C65dB267009d1`](https://etherscan.io/address/0x200dA0b6a9905A377CF8D469664C65dB267009d1)
  * **Alliance Ops stablecoins** (committee ms [`0x606f77BF3dd6Ed9790D9771C7003f269a385D942`](https://app.safe.global/settings/setup?safe=eth:0x606f77BF3dd6Ed9790D9771C7003f269a385D942))
    * AllowedRecipientsRegistry: [`0x3B525F4c059F246Ca4aa995D21087204F30c9E2F`](https://etherscan.io/address/0x3B525F4c059F246Ca4aa995D21087204F30c9E2F)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0xe5656eEe7eeD02bdE009d77C88247BC8271e26Eb`](https://etherscan.io/address/0xe5656eEe7eeD02bdE009d77C88247BC8271e26Eb)
  * **Stonks stETH** (committee ms [`0xa02FC823cCE0D016bD7e17ac684c9abAb2d6D647`](https://app.safe.global/settings/setup?safe=eth:0xa02FC823cCE0D016bD7e17ac684c9abAb2d6D647))
    * AllowedRecipientsRegistry: [`0x1a7cFA9EFB4D5BfFDE87B0FaEb1fC65d653868C0`](https://etherscan.io/address/0x1a7cFA9EFB4D5BfFDE87B0FaEb1fC65d653868C0)
    * TopUpAllowedRecipients: [`0x6e04aED774B7c89BB43721AcDD7D03C872a51B69`](https://etherscan.io/address/0x6e04aED774B7c89BB43721AcDD7D03C872a51B69)
  * **Stonks stablecoins** (committee ms [`0xa02FC823cCE0D016bD7e17ac684c9abAb2d6D647`](https://app.safe.global/settings/setup?safe=eth:0xa02FC823cCE0D016bD7e17ac684c9abAb2d6D647))
    * AllowedRecipientsRegistry: [`0x3f0534CCcFb952470775C516DC2eff8396B8A368`](https://etherscan.io/address/0x3f0534CCcFb952470775C516DC2eff8396B8A368)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0x0d2aefA542aFa8d9D1Ec35376068B88042FEF5f6`](https://etherscan.io/address/0x0d2aefA542aFa8d9D1Ec35376068B88042FEF5f6)
  * **Ecosystem BORG Foundation operational funds stablecoins** (committee ms [`0x55897893c19e4B0c52731a3b7C689eC417005Ad6`](https://app.safe.global/settings/setup?safe=eth:0x55897893c19e4B0c52731a3b7C689eC417005Ad6))
    * AllowedRecipientsRegistry: [`0xDAdC4C36cD8F468A398C25d0D8aaf6A928B47Ab4`](https://etherscan.io/address/0xDAdC4C36cD8F468A398C25d0D8aaf6A928B47Ab4)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0xf2476f967C826722F5505eDfc4b2561A34033477`](https://etherscan.io/address/0xf2476f967C826722F5505eDfc4b2561A34033477)
  * **Labs BORG Foundation operational funds stablecoins** (committee ms [`0x95B521B4F55a447DB89f6a27f951713fC2035f3F`](https://app.safe.global/settings/setup?safe=eth:0x95B521B4F55a447DB89f6a27f951713fC2035f3F))
    * AllowedRecipientsRegistry: [`0x68267f3D310E9f0FF53a37c141c90B738E1133c2`](https://etherscan.io/address/0x68267f3D310E9f0FF53a37c141c90B738E1133c2)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0xE1f6BaBb445F809B97e3505Ea91749461050F780`](https://etherscan.io/address/0xE1f6BaBb445F809B97e3505Ea91749461050F780)
  * **Tooling contracts:**
    * AllowedRecipientsBuilder (single token): [`0x958e0D946D014F377421a53AB5f9180d4485e63B`](https://etherscan.io/address/0x958e0D946D014F377421a53AB5f9180d4485e63B)
    * AllowedRecipientsFactory (single token): [`0x83E976758B7AB1bb676A4fEA073Fa0E2A807642B`](https://etherscan.io/address/0x83E976758B7AB1bb676A4fEA073Fa0E2A807642B)
    * AllowedRecipientsBuilder (multi token): [`0x334D6eDc13F63728b39e6A6D04A7Bbd5D6A9B9FF`](https://etherscan.io/address/0x334D6eDc13F63728b39e6A6D04A7Bbd5D6A9B9FF)
    * AllowedRecipientsFactory (multi token): [`0xEe60C6ebC91237d334230b12263E26EE3b480ec4`](https://etherscan.io/address/0xEe60C6ebC91237d334230b12263E26EE3b480ec4)
    * BokkyPooBah's DateTime Library: [`0x75100bd564415731b5936a4a94d0dc29dde5db3c`](https://etherscan.io/address/0x75100bd564415731b5936a4a94d0dc29dde5db3c)

### 🤖 Easy Track Factories for MEV-Boost Relay Allowed List management​

  * **MEV-Boost Relay Allowed List** (committee ms [`0x98be4a407Bff0c125e25fBE9Eb1165504349c37d`](https://app.safe.global/settings/setup?safe=eth:0x98be4a407Bff0c125e25fBE9Eb1165504349c37d))
    * AddMEVBoostRelays: [`0x00A3D6260f70b1660c8646Ef25D0820EFFd7bE60`](https://etherscan.io/address/0x00A3D6260f70b1660c8646Ef25D0820EFFd7bE60)
    * RemoveMEVBoostRelays: [`0x9721c0f77E3Ea40eD592B9DCf3032DaF269c0306`](https://etherscan.io/address/0x9721c0f77E3Ea40eD592B9DCf3032DaF269c0306)
    * EditMEVBoostRelay: [`0x6b7863f2c7dEE99D3b744fDAEDbEB1aeCC025535`](https://etherscan.io/address/0x6b7863f2c7dEE99D3b744fDAEDbEB1aeCC025535)

### 🔨 Easy Track Factories for stVaults Management​

  * **Operator Grid:** (trusted caller is stVaults Committee ms [`0x18A1065c81b0Cc356F1b1C843ddd5E14e4AefffF`](https://app.safe.global/settings/setup?safe=eth:0x18A1065c81b0Cc356F1b1C843ddd5E14e4AefffF))
    * Register Groups: [`0xE73842AEbEC99Dacf2aAEec61409fD01A033f478`](https://etherscan.io/address/0xE73842AEbEC99Dacf2aAEec61409fD01A033f478)
    * Update Groups Share Limit: [`0xf23559De8ab37fF7a154384B0822dA867Cfa7Eac`](https://etherscan.io/address/0xf23559De8ab37fF7a154384B0822dA867Cfa7Eac)
    * Register Tiers: [`0x5292A1284e4695B95C0840CF8ea25A818751C17F`](https://etherscan.io/address/0x5292A1284e4695B95C0840CF8ea25A818751C17F)
    * Alter Tiers: [`0x73f80240ad9363d5d3C5C3626953C351cA36Bfe9`](https://etherscan.io/address/0x73f80240ad9363d5d3C5C3626953C351cA36Bfe9)
    * Set Jail Status: [`0x6a4f33F05E7412A11100353724Bb6a152Cf0D305`](https://etherscan.io/address/0x6a4f33F05E7412A11100353724Bb6a152Cf0D305)
    * Update Vaults Fees: [`0xDfA0bc38113B6d53c2881573FD764CEEFf468610`](https://etherscan.io/address/0xDfA0bc38113B6d53c2881573FD764CEEFf468610)
  * **Vault Hub:** (trusted caller is stVaults Committee ms [`0x18A1065c81b0Cc356F1b1C843ddd5E14e4AefffF`](https://app.safe.global/settings/setup?safe=eth:0x18A1065c81b0Cc356F1b1C843ddd5E14e4AefffF))
    * Force Validator Exits: [`0x6F5c0A5a824773E8f8285bC5aA59ea0Aab2A6400`](https://etherscan.io/address/0x6F5c0A5a824773E8f8285bC5aA59ea0Aab2A6400)
    * Socialize Bad Debt: [`0xaf35A63a4114B7481589fDD9FDB3e35Fd65fAed7`](https://etherscan.io/address/0xaf35A63a4114B7481589fDD9FDB3e35Fd65fAed7)
  * VaultsAdapter: [`0x28F9Ac198C4E0FA6A9Ad2c2f97CB38F1A3120f27`](https://etherscan.io/address/0x28F9Ac198C4E0FA6A9Ad2c2f97CB38F1A3120f27)

## 🔐 Lido DAO Multisigs​

### 🧑‍🤝‍🧑 Committees​

  * LEGO Committee: [`0x12a43b049A7D330cB8aEAB5113032D18AE9a9030`](https://app.safe.global/settings/setup?safe=eth:0x12a43b049A7D330cB8aEAB5113032D18AE9a9030)
  * Rewards Share Committee: [`0xe2A682A9722354D825d1BbDF372cC86B2ea82c8C`](https://app.safe.global/settings/setup?safe=eth:0xe2A682A9722354D825d1BbDF372cC86B2ea82c8C)
  * Relay Maintenance Committee: [`0x98be4a407Bff0c125e25fBE9Eb1165504349c37d`](https://app.safe.global/settings/setup?safe=eth:0x98be4a407Bff0c125e25fBE9Eb1165504349c37d)
  * Token Reward Program (TRP) Committee: [`0x834560F580764Bc2e0B16925F8bF229bb00cB759`](https://app.safe.global/settings/setup?safe=eth:0x834560F580764Bc2e0B16925F8bF229bb00cB759)
  * Treasury Management Committee: [`0xa02FC823cCE0D016bD7e17ac684c9abAb2d6D647`](https://app.safe.global/settings/setup?safe=eth:0xa02FC823cCE0D016bD7e17ac684c9abAb2d6D647)
  * Delegate Oversight Committee: [`0x13600b9AEE86f8254969918B1E9ae6ea091b8727`](https://app.safe.global/settings/setup?safe=eth:0x13600b9AEE86f8254969918B1E9ae6ea091b8727)
  * Simple DVT Module Committee: [`0x08637515E85A4633E23dfc7861e2A9f53af640f7`](https://app.safe.global/settings/setup?safe=eth:0x08637515E85A4633E23dfc7861e2A9f53af640f7)
  * Community Staking Module Committee: [`0xC52fC3081123073078698F1EAc2f1Dc7Bd71880f`](https://app.safe.global/settings/setup?safe=eth:0xC52fC3081123073078698F1EAc2f1Dc7Bd71880f)
  * Bug Bounty Reserve Multisig: [`0x9Eb81629245C5248A8f4FfCDf11A73E0D0C74071`](https://app.safe.global/settings/setup?safe=eth:0x9Eb81629245C5248A8f4FfCDf11A73E0D0C74071)

### 🤝 Alliance​

  * Lido Alliance BORG Foundation Operational: [`0x606f77BF3dd6Ed9790D9771C7003f269a385D942`](https://app.safe.global/settings/setup?safe=eth:0x606f77BF3dd6Ed9790D9771C7003f269a385D942)
  * Lido Alliance BORG Allies/Partners: [`0x92ABC000698374B44206148596AcD8a934687E66`](https://app.safe.global/settings/setup?safe=eth:0x92ABC000698374B44206148596AcD8a934687E66)
  * Lido Alliance BORG Drop: [`neutron1fdjng7sdfrn22xlyl923v5fngyvzhllvjkrewv2e932qf54fs79srz0jfr`](https://daodao.zone/dao/neutron1fdjng7sdfrn22xlyl923v5fngyvzhllvjkrewv2e932qf54fs79srz0jfr)

### 🛠️ Dev Team Multisigs​

  * Gas Supply Committee: [`0x5181d5D56Af4f823b96FE05f062D7a09761a5a53`](https://etherscan.io/address/0x5181d5D56Af4f823b96FE05f062D7a09761a5a53)
  * Lido Subgraph NFT owner: [`0x14CeF290c79fc84FDDfDf4129Ba335972aAc7F41`](https://etherscan.io/address/0x14CeF290c79fc84FDDfDf4129Ba335972aAc7F41)

### 🛑 Emergency Brakes Multisigs​

  * GateSeal Committee: [`0x8772E3a2D86B9347A2688f9bc1808A6d8917760C`](https://app.safe.global/settings/setup?safe=eth:0x8772E3a2D86B9347A2688f9bc1808A6d8917760C)
  * Ethereum: [`0x73b047fe6337183A454c5217241D780a932777bD`](https://app.safe.global/settings/setup?safe=eth:0x73b047fe6337183A454c5217241D780a932777bD)
  * Optimism: [`0x4Cf8fE0A4c2539F7EFDD2047d8A5D46F14613088`](https://app.safe.global/settings/setup?safe=oeth:0x4Cf8fE0A4c2539F7EFDD2047d8A5D46F14613088)
  * Arbitrum: [`0xfDCf209A213a0b3C403d543F87E74FCbcA11de34`](https://app.safe.global/settings/setup?safe=arb1:0xfDCf209A213a0b3C403d543F87E74FCbcA11de34)
  * Base: [`0x0F9A0e7071B7B21bc7a8514DA2cd251bc1FF0725`](https://app.safe.global/settings/setup?safe=base:0x0F9A0e7071B7B21bc7a8514DA2cd251bc1FF0725)
  * ZKSync: [`0x0D7F0A811978B3B62CbfF4EF6149B5909EAcfE94`](https://app.safe.global/settings/setup?safe=zksync:0x0D7F0A811978B3B62CbfF4EF6149B5909EAcfE94)
  * Mantle: [`0xa8579D42E34398267dE16e6eeeCdb7ED0EFF953C`](https://multisig.mantle.xyz/settings/setup?safe=mantle:0xa8579D42E34398267dE16e6eeeCdb7ED0EFF953C)
  * Scroll: [`0xF580753E334687C0d6b88EF563a258f048384Ee6`](https://app.safe.global/settings/setup?safe=scr:0xF580753E334687C0d6b88EF563a258f048384Ee6)
  * Mode: [`0x244912352A639001ceCFa208cDaa7CB474c9eadE`](https://safe.optimism.io/settings/setup?safe=mode:0x244912352A639001ceCFa208cDaa7CB474c9eadE)
  * Binance Smart Chain (BSC): [`0xC2b778fCc3FF311Cf1abBF4E53880277bfD14C8f`](https://app.safe.global/settings/setup?safe=bnb:0xC2b778fCc3FF311Cf1abBF4E53880277bfD14C8f)
  * Zircuit: [`0x9Bff79BF7226cB5C16d0Cca9c1dc60450feE560d`](https://safe.zircuit.com/settings/setup?safe=zircuit-mainnet:0x9Bff79BF7226cB5C16d0Cca9c1dc60450feE560d)
  * Soneium: [`0x993F92e031B86b229D639463325f9d6a51609b43`](https://safe.optimism.io/settings/setup?safe=soneium:0x993F92e031B86b229D639463325f9d6a51609b43)
  * Unichain: [`0xac8bc65814Dd0501674f6940aff1a4Ea78Fc20eF`](https://app.safe.global/settings/setup?safe=unichain:0xac8bc65814Dd0501674f6940aff1a4Ea78Fc20eF)
  * Lisk: [`0x1356C0b19c2531bBf0Dd23E585b7C7f7096EeC39`](https://safe.optimism.io/settings/setup?safe=lisk:0x1356C0b19c2531bBf0Dd23E585b7C7f7096EeC39)
  * Swellchain: [`0xC2b778fCc3FF311Cf1abBF4E53880277bfD14C8f`](https://safe.optimism.io/settings/setup?safe=swell-l2:0xC2b778fCc3FF311Cf1abBF4E53880277bfD14C8f)

### 🔬 Liquidity Observation Lab Multisigs​

  * Liquidity Observation Lab: [`0x87D93d9B2C672bf9c9642d853a8682546a5012B5`](https://app.safe.global/settings/setup?safe=eth:0x87D93d9B2C672bf9c9642d853a8682546a5012B5) (Ethereum)
  * Liquidity Observation Lab: [`0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61`](https://app.safe.global/settings/setup?safe=oeth:0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61) (Optimism)
  * Liquidity Observation Lab OP Token Multisig: [`0x91cE2F083d59B832f95f90aA0997168ae051a98A`](https://app.safe.global/settings/setup?safe=oeth:0x91cE2F083d59B832f95f90aA0997168ae051a98A) (Optimism)
  * Liquidity Observation Lab: [`0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61`](https://app.safe.global/settings/setup?safe=arb1:0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61) (Arbitrum)
  * Liquidity Observation Lab ARB Token Multisig: [`0x1840c4D81d2C50B603da5391b6A24c1cD62D0B56`](https://app.safe.global/settings/setup?safe=arb1:0x1840c4D81d2C50B603da5391b6A24c1cD62D0B56) (Arbitrum)
  * Liquidity Observation Lab Arbitrum LTIPP Grant Token Multisig: [`0xD97221065E826167A2cFE3307972c0D42200fDB4`](https://app.safe.global/settings/setup?safe=arb1:0xD97221065E826167A2cFE3307972c0D42200fDB4) (Arbitrum)
  * Liquidity Observation Lab: [`0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61`](https://app.safe.global/settings/setup?safe=base:0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61) (Base)
  * Liquidity Observation Lab: [`0x65B05f4fCa066316383b0FE196C76C873a4dFD02`](https://app.safe.global/settings/setup?safe=zksync:0x65B05f4fCa066316383b0FE196C76C873a4dFD02) (zkSync Era)
  * Liquidity Observation Lab ZK Token Multisig: [`0xf7169E14CDEF99403BE9114c9303887f760B1913`](https://app.safe.global/settings/setup?safe=zksync:0xf7169E14CDEF99403BE9114c9303887f760B1913) (zkSync Era)
  * Liquidity Observation Lab: [`0x87D93d9B2C672bf9c9642d853a8682546a5012B5`](https://app.safe.global/settings/setup?safe=matic:0x87D93d9B2C672bf9c9642d853a8682546a5012B5) (Polygon)
  * Liquidity Observation Lab: [`0xDAFc1dcB93dA415604aC6187638F88a8Ff8d77A4`](https://multisig.moonbeam.network/settings/setup?safe=mriver:0xDAFc1dcB93dA415604aC6187638F88a8Ff8d77A4) (Moonriver)
  * Liquidity Observation Lab: [`0x007132343cA619C5449297507B26c3f85e80D1b1`](https://multisig.moonbeam.network/settings/setup?safe=mbeam:0x007132343cA619C5449297507B26c3f85e80D1b1) (Moonbeam)
  * Liquidity Observation Lab: [`0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61`](https://app.safe.global/settings/setup?safe=bnb:0x5A9d695c518e95CD6Ea101f2f25fC2AE18486A61) (BNB)
  * Liquidity Observation Lab: [`0xA8ef4Db842D95DE72433a8b5b8FF40CB7C74C1b6`](https://safe.linea.build/settings/setup?safe=linea:0xA8ef4Db842D95DE72433a8b5b8FF40CB7C74C1b6) (Linea)
  * Liquidity Observation Lab: [`0x6Ef6cd595b775B9752df83C8b1700235b21FE2f6`](https://multisig.mantle.xyz/settings/setup?safe=mantle:0x6Ef6cd595b775B9752df83C8b1700235b21FE2f6) (Mantle)
  * Liquidity Observation Lab: [`0x7bA516FB4512877C016907D6e70FAE96fbbdf8cD`](https://app.safe.global/settings/setup?safe=scr:0x7bA516FB4512877C016907D6e70FAE96fbbdf8cD) (Scroll)
  * Liquidity Observation Lab AAVE rewards: `0xC18F11735C6a1941431cCC5BcF13AF0a052A5022` ([Ethereum](https://app.safe.global/settings/setup?safe=eth:0xC18F11735C6a1941431cCC5BcF13AF0a052A5022), [Arbitrum](https://app.safe.global/settings/setup?safe=arb1:0xC18F11735C6a1941431cCC5BcF13AF0a052A5022), [BNB](https://app.safe.global/settings/setup?safe=bnb:0xC18F11735C6a1941431cCC5BcF13AF0a052A5022), [Polygon](https://app.safe.global/settings/setup?safe=matic:0xC18F11735C6a1941431cCC5BcF13AF0a052A5022), [Scroll](https://app.safe.global/settings/setup?safe=scr:0xC18F11735C6a1941431cCC5BcF13AF0a052A5022))
  * Liquidity Observation Lab AAVE rewards: `0x4f793e5d1d71dbbcEE34E39A5aD3c6bA5b11e935` ([Base](https://app.safe.global/settings/setup?safe=base:0x4f793e5d1d71dbbcEE34E39A5aD3c6bA5b11e935))
  * Liquidity Observation Lab AAVE rewards: `0x75483CE83100890c6bf1718c26052cE44e0F2839` ([Optimism](https://app.safe.global/settings/setup?safe=oeth:0x75483CE83100890c6bf1718c26052cE44e0F2839))
  * Liquidity Observation Lab AAVE rewards: `0xADB90Cfb3d5ebbaB8eeE7DA10B4DB215A7d50BeE` ([zksync](https://app.safe.global/settings/setup?safe=zksync:0xADB90Cfb3d5ebbaB8eeE7DA10B4DB215A7d50BeE))

### 📣 Lido on X​

  * Lido on Polygon: [`0xd65Fa54F8DF43064dfd8dDF223A446fc638800A9`](https://app.safe.global/settings/setup?safe=0xd65Fa54F8DF43064dfd8dDF223A446fc638800A9)

### 🗂️ Other​

  * Community Lifeguards Multisig: [`0x6faCCcE132d5C397068807Ca73883d3df198dFF4`](https://app.safe.global/settings/setup?safe=eth:0x6faCCcE132d5C397068807Ca73883d3df198dFF4)

## 🌐 Lido Multichain​

### 🌀 Arbitrum​

##### 🧱 Ethereum part​

  * L1ERC20TokenGateway: [`0x0F25c1DC2a9922304f2eac71DCa9B07E310e8E5a`](https://etherscan.io/address/0x0F25c1DC2a9922304f2eac71DCa9B07E310e8E5a) (proxy)
  * L1ERC20TokenGateway: [`0xc4E3ff0b5B106f88Fc64c43031BE8b076ee9F21C`](https://etherscan.io/address/0xc4E3ff0b5B106f88Fc64c43031BE8b076ee9F21C) (impl)

##### 🌀 Arbitrum part​

  * WstETH ERC20Bridged: [`0x5979D7b546E38E414F7E9822514be443A4800529`](https://arbiscan.io/address/0x5979D7b546E38E414F7E9822514be443A4800529) (proxy)
  * WstETH ERC20Bridged: [`0x0fBcbaEA96Ce0cF7Ee00A8c19c3ab6f5Dc8E1921`](https://arbiscan.io/address/0x0fBcbaEA96Ce0cF7Ee00A8c19c3ab6f5Dc8E1921) (impl)
  * L2ERC20TokenGateway: [`0x07D4692291B9E30E326fd31706f686f83f331B82`](https://arbiscan.io/address/0x07D4692291B9E30E326fd31706f686f83f331B82) (proxy)
  * L2ERC20TokenGateway: [`0xe75886DE20dF66827e321EfdB88726e6Baa4b0A7`](https://arbiscan.io/address/0xe75886DE20dF66827e321EfdB88726e6Baa4b0A7) (impl)
  * Arbitrum Governance Bridge Executor: [`0x1dcA41859Cd23b526CBe74dA8F48aC96e14B1A29`](https://arbiscan.io/address/0x1dca41859cd23b526cbe74da8f48ac96e14b1a29)
  * LDO token: [`0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60`](https://arbiscan.io/address/0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60) (proxy)

### 🌞 Optimism​

#### 🧱 Ethereum part​

  * TokenRateNotifier: [`0x25e35855783bec3E49355a29e110f02Ed8b05ba9`](https://etherscan.io/address/0x25e35855783bec3E49355a29e110f02Ed8b05ba9)
  * OpStackTokenRatePusher: [`0xd54c1c6413caac3477AC14b2a80D5398E3c32FfE`](https://etherscan.io/address/0xd54c1c6413caac3477AC14b2a80D5398E3c32FfE)
  * L1LidoTokensBridge: [`0x76943C0D61395d8F2edF9060e1533529cAe05dE6`](https://etherscan.io/address/0x76943C0D61395d8F2edF9060e1533529cAe05dE6) (proxy)
  * L1LidoTokensBridge: [`0x168Cfea1Ad879d7032B3936eF3b0E90790b6B6D4`](https://etherscan.io/address/0x168Cfea1Ad879d7032B3936eF3b0E90790b6B6D4) (impl)

#### 🌞 Optimism part​

  * WstETH ERC20BridgedPermit: [`0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb`](https://optimistic.etherscan.io/address/0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb) (proxy)
  * WstETH ERC20BridgedPermit: [`0xFe57042De76c8D6B1DF0E9E2047329fd3e2B7334`](https://optimistic.etherscan.io/address/0xFe57042De76c8D6B1DF0E9E2047329fd3e2B7334) (impl)
  * StETH ERC20RebasableBridgedPermit: [`0x76A50b8c7349cCDDb7578c6627e79b5d99D24138`](https://optimistic.etherscan.io/address/0x76A50b8c7349cCDDb7578c6627e79b5d99D24138) (proxy)
  * StETH ERC20RebasableBridgedPermit: [`0xe9b65dA5DcBe92f1b397991C464FF568Dc98D761`](https://optimistic.etherscan.io/address/0xe9b65dA5DcBe92f1b397991C464FF568Dc98D761) (impl)
  * TokenRateOracle: [`0x294ED1f214F4e0ecAE31C3Eae4F04EBB3b36C9d0`](https://optimistic.etherscan.io/address/0x294ED1f214F4e0ecAE31C3Eae4F04EBB3b36C9d0) (proxy)
  * TokenRateOracle: [`0x4bF0d419793d8722b8391efaD4c9cE78F460CEd3`](https://optimistic.etherscan.io/address/0x4bF0d419793d8722b8391efaD4c9cE78F460CEd3) (impl)
  * L2ERC20ExtendedTokensBridge: [`0x8E01013243a96601a86eb3153F0d9Fa4fbFb6957`](https://optimistic.etherscan.io/address/0x8E01013243a96601a86eb3153F0d9Fa4fbFb6957) (proxy)
  * L2ERC20ExtendedTokensBridge: [`0x2734602C0CEbbA68662552CacD5553370B283E2E`](https://optimistic.etherscan.io/address/0x2734602C0CEbbA68662552CacD5553370B283E2E) (impl)
  * Optimism Governance Bridge Executor: [`0xefa0db536d2c8089685630fafe88cf7805966fc3`](https://optimistic.etherscan.io/address/0xefa0db536d2c8089685630fafe88cf7805966fc3)
  * LDO token: [`0xFdb794692724153d1488CcdBE0C56c252596735F`](https://optimistic.etherscan.io/address/0xFdb794692724153d1488CcdBE0C56c252596735F)

### 🔺 Polygon PoS​

#### 🧱 Ethereum part​

  * ERC20Predicate: [`0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf`](https://etherscan.io/address/0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf) (proxy)
  * ERC20Predicate: [`0xB1fd4ae726c64A793588001EB465c46BD1BdF1cB`](https://etherscan.io/address/0xB1fd4ae726c64A793588001EB465c46BD1BdF1cB) (impl)

#### 🔺 Polygon PoS part​

  * WstETH UChildERC20: [`0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD`](https://polygonscan.com/address/0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd) (proxy)
  * WstETH UChildERC20: [`0x60991ccaE8f1420B43bf14937a2c9F69162BE21A`](https://polygonscan.com/address/0x60991ccaE8f1420B43bf14937a2c9F69162BE21A) (impl)

### 🟦 Base​

#### 🧱 Ethereum part​

  * L1ERC20TokenBridge: [`0x9de443AdC5A411E83F1878Ef24C3F52C61571e72`](https://etherscan.io/address/0x9de443AdC5A411E83F1878Ef24C3F52C61571e72) (proxy)
  * L1ERC20TokenBridge: [`0x313819736457910ac1dd21a712a37f3d7595645a`](https://etherscan.io/address/0x313819736457910ac1dd21a712a37f3d7595645a) (impl)

#### 🟦 Base part​

  * WstETH ERC20Bridged: [`0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452`](https://basescan.org/address/0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452) (proxy)
  * WstETH ERC20Bridged: [`0x69ce2505ce515c0203160450157366f927243309`](https://basescan.org/address/0x69ce2505ce515c0203160450157366f927243309) (impl)
  * L2ERC20TokenBridge: [`0xac9D11cD4D7eF6e54F14643a393F68Ca014287AB`](https://basescan.org/address/0xac9D11cD4D7eF6e54F14643a393F68Ca014287AB) (proxy)
  * L2ERC20TokenBridge: [`0x7063ef4f2887586e96096d3e94c9b6961c50a9a2`](https://basescan.org/address/0x7063ef4f2887586e96096d3e94c9b6961c50a9a2) (impl)
  * Base Governance Bridge Executor (`OptimismBridgeExecutor` contract is used): [`0x0E37599436974a25dDeEdF795C848d30Af46eaCF`](https://basescan.org/address/0x0E37599436974a25dDeEdF795C848d30Af46eaCF)

### 🧵 ZKSync​

#### 🧱 Ethereum part​

  * L1Executor: [`0xFf7F4d05e3247374e86A3f7231A2Ed1CA63647F2`](https://etherscan.io/address/0xFf7F4d05e3247374e86A3f7231A2Ed1CA63647F2) (proxy)
  * L1Executor: [`0x06185d60eD72a91D1367Eb0733B9d20AE7336D3B`](https://etherscan.io/address/0x06185d60eD72a91D1367Eb0733B9d20AE7336D3B) (impl)
  * L1ERC20Bridge: [`0x41527B2d03844dB6b0945f25702cB958b6d55989`](https://etherscan.io/address/0x41527B2d03844dB6b0945f25702cB958b6d55989) (proxy)
  * L1ERC20Bridge: [`0x9a810469F4a451Ebb7ef53672142053b4971587c`](https://etherscan.io/address/0x9a810469F4a451Ebb7ef53672142053b4971587c) (impl)

#### 🧵 ZKSync part​

  * ZkSync Governance Bridge Executor: [`0x139EE25DCad405d2a038E7A67f9ffdbf0f573f3c`](https://explorer.zksync.io/address/0x139EE25DCad405d2a038E7A67f9ffdbf0f573f3c) (proxy)
  * ZkSync Governance Bridge Executor: [`0x13f46b59067f064c634fb17e207ed203916dccc8`](https://explorer.zksync.io/address/0x13f46b59067f064c634fb17e207ed203916dccc8) (impl)
  * L2ERC20Bridge: [`0xE1D6A50E7101c8f8db77352897Ee3f1AC53f782B`](https://explorer.zksync.io/address/0xE1D6A50E7101c8f8db77352897Ee3f1AC53f782B) (proxy)
  * L2ERC20Bridge: [`0x64Ee90B086c99fD3439354f382Fef25229A01F02`](https://explorer.zksync.io/address/0x64Ee90B086c99fD3439354f382Fef25229A01F02) (impl)
  * ERC20BridgedUpgradeable: [`0x703b52F2b28fEbcB60E1372858AF5b18849FE867`](https://explorer.zksync.io/address/0x703b52F2b28fEbcB60E1372858AF5b18849FE867) (proxy)
  * ERC20BridgedUpgradeable: [`0xc7a0daa1b8fea68532b6425d0e156088b0d2ab2c`](https://explorer.zksync.io/address/0xc7a0daa1b8fea68532b6425d0e156088b0d2ab2c) (impl)
  * ProxyAdmin: [`0xbd80e505ecc49bae2cc86094a78fa0e2db28b52a`](https://explorer.zksync.io/address/0xbd80e505ecc49bae2cc86094a78fa0e2db28b52a) for
    * ZkSyncBridgeExecutor
    * ERC20BridgedUpgradeable

### 🧥 Mantle​

#### 🧱 Ethereum part​

  * L1ERC20TokenBridge: [`0x2D001d79E5aF5F65a939781FE228B267a8Ed468B`](https://etherscan.io/address/0x2D001d79E5aF5F65a939781FE228B267a8Ed468B) (proxy)
  * L1ERC20TokenBridge: [`0x6fBBe1Af52D22557D7F161Dc5952E306F4742e23`](https://etherscan.io/address/0x6fBBe1Af52D22557D7F161Dc5952E306F4742e23) (impl)

#### 🧥 Mantle part​

  * WstETH ERC20BridgedPermit: [`0x458ed78EB972a369799fb278c0243b25e5242A83`](https://explorer.mantle.xyz/address/0x458ed78EB972a369799fb278c0243b25e5242A83) (proxy)
  * WstETH ERC20BridgedPermit: [`0x1FaBaAec88198291A4efCc85Cabb33a3785165ba`](https://explorer.mantle.xyz/address/0x1FaBaAec88198291A4efCc85Cabb33a3785165ba) (impl)
  * L2ERC20TokenBridge: [`0x9c46560D6209743968cC24150893631A39AfDe4d`](https://explorer.mantle.xyz/address/0x9c46560D6209743968cC24150893631A39AfDe4d) (proxy)
  * L2ERC20TokenBridge: [`0xf10A7ffC613a9b23Abc36167925A375bf5986181`](https://explorer.mantle.xyz/address/0xf10A7ffC613a9b23Abc36167925A375bf5986181) (impl)
  * Mantle Governance Bridge Executor (`OptimismBridgeExecutor` contract is used): [`0x3a7b055bf88cdc59d20d0245809c6e6b3c5819dd`](https://explorer.mantle.xyz/address/0x3a7b055bf88cdc59d20d0245809c6e6b3c5819dd)

### 📏 Linea​

#### 🧱 Ethereum part​

  * L1 TokenBridge (Canonical Bridge): [`0x051f1d88f0af5763fb888ec4378b4d8b29ea3319`](https://etherscan.io/address/0x051f1d88f0af5763fb888ec4378b4d8b29ea3319) (proxy)
  * L1 TokenBridge (Canonical Bridge): [`0x2B6A2F8880220a66DfB9059FCB76F7dB54104a34`](https://etherscan.io/address/0x2B6A2F8880220a66DfB9059FCB76F7dB54104a34) (impl)
  * ProxyAdmin for L1 TokenBridge: [`0xF5058616517C068C7b8c7EbC69FF636Ade9066d6`](https://etherscan.io/address/0xF5058616517C068C7b8c7EbC69FF636Ade9066d6)

#### 📏 Linea part​

  * wstETH CustomBridgedToken: [`0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F`](https://lineascan.build/address/0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F) (proxy)
  * wstETH CustomBridgedToken: [`0xc0583e2F5930EDE5Fab9D57bAC4169878730B010`](https://lineascan.build/address/0xc0583e2f5930ede5fab9d57bac4169878730b010) (impl)
  * ProxyAdmin for wstETH CustomBridgedToken: [`0xF951d7592e03eDB0Bab3D533935e678Ce64Eb927`](https://lineascan.build/address/0xF951d7592e03eDB0Bab3D533935e678Ce64Eb927)
  * L2 TokenBridge (Canonical Bridge): [`0x353012dc4a9a6cf55c941badc267f82004a8ceb9`](https://lineascan.build/address/0x353012dc4a9a6cf55c941badc267f82004a8ceb9) (proxy)
  * L2 TokenBridge (Canonical Bridge): [`0xd90ed3d4f9d11262d3d346a4369058d5b3777137`](https://lineascan.build/address/0xd90ed3d4f9d11262d3d346a4369058d5b3777137) (impl)
  * ProxyAdmin for L2 TokenBridge: [`0x1e1f6f22f97b4a7522d8b62e983953639239774e`](https://lineascan.build/address/0x1e1f6f22f97b4a7522d8b62e983953639239774e)
  * Linea Governance Bridge Executor: [`0x74Be82F00CC867614803ffd7f36A2a4aF0405670`](https://lineascan.build/address/0x74Be82F00CC867614803ffd7f36A2a4aF0405670)

### 📜 Scroll​

##### 🧱 Ethereum part​

  * L1LidoGateway: [`0x6625c6332c9f91f2d27c304e729b86db87a3f504`](https://etherscan.io/address/0x6625c6332c9f91f2d27c304e729b86db87a3f504) (proxy)
  * L1LidoGateway: [`0xF4f2066EE72D62e3caF9678459149BA7FCf2262F`](https://etherscan.io/address/0xF4f2066EE72D62e3caF9678459149BA7FCf2262F) (impl)
  * ProxyAdmin: [`0xCC2C53556Bc75217cf698721b29071d6f12628A9`](https://etherscan.io/address/0xCC2C53556Bc75217cf698721b29071d6f12628A9) for L1LidoGateway

##### 📜 Scroll part​

  * Scroll Governance Bridge Executor: [`0x0c67D8D067E349669dfEAB132A7c03A90594eE09`](https://scrollscan.com/address/0x0c67D8D067E349669dfEAB132A7c03A90594eE09)
  * L2LidoGateway: [`0x8aE8f22226B9d789A36AC81474e633f8bE2856c9`](https://scrollscan.com/address/0x8aE8f22226B9d789A36AC81474e633f8bE2856c9) (proxy)
  * L2LidoGateway: [`0x2B9beB2890DBeFC7cA25Af3164100d139B623C24`](https://scrollscan.com/address/0x2B9beB2890DBeFC7cA25Af3164100d139B623C24) (impl)
  * L2WstETHToken: [`0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32`](https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32) (proxy)
  * L2WstETHToken: [`0x38224D52ecC979aEdfEb31b1EEa0cfCEbd55247e`](https://scrollscan.com/address/0x38224D52ecC979aEdfEb31b1EEa0cfCEbd55247e) (impl)
  * ProxyAdmin: [`0x8e34D07Eb348716a1f0a48A507A9de8a3A6DcE45`](https://scrollscan.com/address/0x8e34D07Eb348716a1f0a48A507A9de8a3A6DcE45) for:
    * L2LidoGateway
    * L2WstETHToken

### 🎛️ Mode​

##### 🧱 Ethereum part​

  * L1ERC20TokenBridge: [`0xD0DeA0a3bd8E4D55170943129c025d3fe0493F2A`](https://etherscan.io/address/0xD0DeA0a3bd8E4D55170943129c025d3fe0493F2A) (proxy)
  * L1ERC20TokenBridge: [`0xE6A4ED59Ec73eD78aE3A10294c99F0EE18A6bF76`](https://etherscan.io/address/0xE6A4ED59Ec73eD78aE3A10294c99F0EE18A6bF76) (impl)

##### 🎛️ Mode part​

  * WstETH ERC20Bridged: [`0x98f96A4B34D03a2E6f225B28b8f8Cb1279562d81`](https://explorer.mode.network/address/0x98f96A4B34D03a2E6f225B28b8f8Cb1279562d81) (proxy)
  * WstETH ERC20Bridged: [`0xF27b1B121e55A13047d66dC4AAA8c17BA72c762A`](https://explorer.mode.network/address/0xF27b1B121e55A13047d66dC4AAA8c17BA72c762A) (impl)
  * L2ERC20TokenBridge: [`0xb8161F28a5a38cE58f155D9A96bDAc0104985FAc`](https://explorer.mode.network/address/0xb8161F28a5a38cE58f155D9A96bDAc0104985FAc) (proxy)
  * L2ERC20TokenBridge: [`0x488cDB57E9a1006ab77730fC8b19e1BB76e1cB97`](https://explorer.mode.network/address/0x488cDB57E9a1006ab77730fC8b19e1BB76e1cB97) (impl)
  * Mode Governance Bridge Executor: [`0x2aCeC6D8ABA90685927b61968D84CfFf6192B32C`](https://explorer.mode.network/address/0x2aCeC6D8ABA90685927b61968D84CfFf6192B32C)

### 🟡 Binance Smart Chain (BSC)​

##### 🧱 Ethereum part​

###### 📡 a.DI governance forwarding​

  * CrossChainController: [`0x93559892D3C7F66DE4570132d68b69BD3c369A7C`](https://etherscan.io/address/0x93559892D3C7F66DE4570132d68b69BD3c369A7C) (proxy)
  * CrossChainController: [`0x5f456f29238F8d63b3ae69bCEF9e9d4E953f2c63`](https://etherscan.io/address/0x5f456f29238F8d63b3ae69bCEF9e9d4E953f2c63) (impl)
  * ProxyAdmin [`0xADD673dC6A655AFD6f38fB88301028fA31A6fDeE`](https://etherscan.io/address/0xADD673dC6A655AFD6f38fB88301028fA31A6fDeE) for CrossChainController
  * CCIPAdapter: [`0x29D4fA5FCC282ba2788A281860770c166F597d5d`](https://etherscan.io/address/0x29D4fA5FCC282ba2788A281860770c166F597d5d)
  * HyperLaneAdapter: [`0x8d374DF3de08b971777Aa091fA68BCE109b3a7F3`](https://etherscan.io/address/0x8d374DF3de08b971777Aa091fA68BCE109b3a7F3)
  * LayerZeroAdapter: [`0x742650E0441Be8503682965d601AD0Ba1fB54411`](https://etherscan.io/address/0x742650E0441Be8503682965d601AD0Ba1fB54411)
  * WormholeAdapter: [`0xEDc0D2cb2289BBa1587424dd42bDD1ca7eAbDF17`](https://etherscan.io/address/0xEDc0D2cb2289BBa1587424dd42bDD1ca7eAbDF17)

###### 🔌 wstETH on BSC endpoints​

  * NTT Manager: [`0xb948a93827d68a82F6513Ad178964Da487fe2BD9`](https://etherscan.io/address/0xb948a93827d68a82F6513Ad178964Da487fe2BD9) (proxy)
  * NTT Manager: [`0xc6c1f091450b54af3280cfed790047431bc99bb1`](https://etherscan.io/address/0xc6c1f091450b54af3280cfed790047431bc99bb1) (impl)
  * Wormhole Transceiver: [`0xA1ACC1e6edaB281Febd91E3515093F1DE81F25c0`](https://etherscan.io/address/0xA1ACC1e6edaB281Febd91E3515093F1DE81F25c0)
  * Axelar Transceiver: [`0x723AEAD29acee7E9281C32D11eA4ed0070c41B13`](https://etherscan.io/address/0x723AEAD29acee7E9281C32D11eA4ed0070c41B13)
  * Transceiver Structs (used by NTT Manager and Wormhole Transceiver): [`0xf0396a8077eda579f657B5E6F3c3F5e8EE81972b`](https://etherscan.io/address/0xf0396a8077eda579f657B5E6F3c3F5e8EE81972b)
  * Transceiver Structs (used by Axelar Transceiver): [`0xa12bc993d8144404a8c8c812816048275a066ced`](https://etherscan.io/address/0xa12bc993d8144404a8c8c812816048275a066ced)

##### 🟡 BSC part​

###### 📡 a.DI governance forwarding​

  * CrossChainController: [`0x40C4464fCa8caCd550C33B39d674fC257966022F`](https://bscscan.com/address/0x40C4464fCa8caCd550C33B39d674fC257966022F) (proxy)
  * CrossChainController: [`0xB7Ba81dd07885ae7BFD18452B36D3404d7EDD8Ee`](https://bscscan.com/address/0xB7Ba81dd07885ae7BFD18452B36D3404d7EDD8Ee) (impl)
  * ProxyAdmin [`0x29E6817db339795766244B96aEf5Dc534a98518d`](https://bscscan.com/address/0x29E6817db339795766244B96aEf5Dc534a98518d) for CrossChainController
  * CrossChainExecutor: [`0x8E5175D17f74d1D512de59b2f5d5A5d8177A123d`](https://bscscan.com/address/0x8E5175D17f74d1D512de59b2f5d5A5d8177A123d)
  * CCIPAdapter: [`0x15AD245133568c2498c7dA0cf2204A03b0e9b98A`](https://bscscan.com/address/0x15AD245133568c2498c7dA0cf2204A03b0e9b98A)
  * HyperLaneAdapter: [`0xCd867B440c726461e5fAbe8d3a050b2f8701C230`](https://bscscan.com/address/0xCd867B440c726461e5fAbe8d3a050b2f8701C230)
  * LayerZeroAdapter: [`0xc934433f4c433Cf80DE6fB65fd70C7a650D8a408`](https://bscscan.com/address/0xc934433f4c433Cf80DE6fB65fd70C7a650D8a408)
  * WormholeAdapter: [`0xBb1E43408BbF2C767Ff3Bd5bBC34E183CC1Ef119`](https://bscscan.com/address/0xBb1E43408BbF2C767Ff3Bd5bBC34E183CC1Ef119)

###### 🔌 wstETH on BSC endpoints​

  * WstEthL2Token: [`0x26c5e01524d2E6280A48F2c50fF6De7e52E9611C`](https://bscscan.com/address/0x26c5e01524d2E6280A48F2c50fF6De7e52E9611C) (proxy)
  * WstEthL2Token: [`0x451d447776778870bdfe76d031689703aba73ee5`](https://bscscan.com/address/0x451d447776778870bdfe76d031689703aba73ee5) (impl)
  * NTT Manager: [`0x6981F5621691CBfE3DdD524dE71076b79F0A0278`](https://bscscan.com/address/0x6981F5621691CBfE3DdD524dE71076b79F0A0278) (proxy)
  * NTT Manager: [`0xe82c2a5846cfb6d8683d6b636719e7aa61486838`](https://bscscan.com/address/0xe82c2a5846cfb6d8683d6b636719e7aa61486838) (impl)
  * Wormhole Transceiver: [`0xbe3F7e06872E0dF6CD7FF35B7aa4Bb1446DC9986`](https://bscscan.com/address/0xbe3F7e06872E0dF6CD7FF35B7aa4Bb1446DC9986)
  * Axelar Transceiver: [`0x723AEAD29acee7E9281C32D11eA4ed0070c41B13`](https://bscscan.com/address/0x723AEAD29acee7E9281C32D11eA4ed0070c41B13)
  * Transceiver Structs (used by NTT Manager and Wormhole Transceiver): [`0xf0396a8077eda579f657B5E6F3c3F5e8EE81972b`](https://bscscan.com/address/0xf0396a8077eda579f657B5E6F3c3F5e8EE81972b)
  * Transceiver Structs (used by Axelar Transceiver): [`0x27a3daf3b243104e9b0afae6b56026a416b852c9`](https://bscscan.com/address/0x27a3daf3b243104e9b0afae6b56026a416b852c9)

### ⚗️ Zircuit​

##### 🧱 Ethereum part​

  * L1ERC20TokenBridge: [`0x912C7271a6A3622dfb8B218eb46a6122aB046C79`](https://etherscan.io/address/0x912C7271a6A3622dfb8B218eb46a6122aB046C79) (proxy)
  * L1ERC20TokenBridge: [`0x6bc726C993103197C41d787dd72eCd4D2e1614E8`](https://etherscan.io/address/0x6bc726C993103197C41d787dd72eCd4D2e1614E8) (impl)

##### ⚗️ Zircuit part​

  * WstETH ERC20Bridged: [`0xf0e673Bc224A8Ca3ff67a61605814666b1234833`](https://explorer.zircuit.com/address/0xf0e673Bc224A8Ca3ff67a61605814666b1234833) (proxy)
  * WstETH ERC20Bridged: [`0x929569e10d9166f31c8284fE3FE5db1C1E56D6b4`](https://explorer.zircuit.com/address/0x929569e10d9166f31c8284fE3FE5db1C1E56D6b4) (impl)
  * L2ERC20TokenBridge: [`0xF4DC271cA48446a5d2b97Ff41D39918DF8A4Eb0e`](https://explorer.zircuit.com/address/0xF4DC271cA48446a5d2b97Ff41D39918DF8A4Eb0e) (proxy)
  * L2ERC20TokenBridge: [`0x224F00AEDD7A9F10e571898662ad19CD5abd9F2c`](https://explorer.zircuit.com/address/0x224F00AEDD7A9F10e571898662ad19CD5abd9F2c) (impl)
  * Zircuit Governance Bridge Executor: [`0x6Bf2cac3ed2481da30aD36Cd3D64325c31065Cc5`](https://explorer.zircuit.com/address/0x6Bf2cac3ed2481da30aD36Cd3D64325c31065Cc5)

### 🎧 Soneium​

##### 🧱 Ethereum part​

  * OpStackTokenRatePusher: [`0x927C99fC46226bd5131420B16aF0b0371165C3FC`](https://etherscan.io/address/0x927C99fC46226bd5131420B16aF0b0371165C3FC)
  * L1LidoTokensBridge: [`0x2F543A7C9cc80Cc2427c892B96263098d23ee55a`](https://etherscan.io/address/0x2F543A7C9cc80Cc2427c892B96263098d23ee55a) (proxy)
  * L1LidoTokensBridge: [`0xf034dE8BD85A434d9Dc68F03382B589f86791425`](https://etherscan.io/address/0xf034dE8BD85A434d9Dc68F03382B589f86791425) (impl)

##### 🎧 Soneium part​

  * WstETH ERC20BridgedPermit: [`0xaA9BD8c957D803466FA92504BDd728cC140f8941`](https://soneium.blockscout.com/address/0xaA9BD8c957D803466FA92504BDd728cC140f8941) (proxy)
  * WstETH ERC20BridgedPermit: [`0x7591f6BD2301f7EE9267738039054047b5B395B0`](https://soneium.blockscout.com/address/0x7591f6BD2301f7EE9267738039054047b5B395B0) (impl)
  * StETH ERC20RebasableBridgedPermit: [`0x0Ce031AEd457C870D74914eCAA7971dd3176cDAF`](https://soneium.blockscout.com/address/0x0Ce031AEd457C870D74914eCAA7971dd3176cDAF) (proxy)
  * StETH ERC20RebasableBridgedPermit: [`0x3BC5d0551F48902bDcC036d59F5D23987F581c28`](https://soneium.blockscout.com/address/0x3BC5d0551F48902bDcC036d59F5D23987F581c28) (impl)
  * TokenRateOracle: [`0xDff6f372e8c16b2b9e95c55bDfe74C0bA3F90265`](https://soneium.blockscout.com/address/0xDff6f372e8c16b2b9e95c55bDfe74C0bA3F90265) (proxy)
  * TokenRateOracle: [`0xA2f12f7C109c0b9aa5FFAe71612a68B6b8B2eFC4`](https://soneium.blockscout.com/address/0xA2f12f7C109c0b9aa5FFAe71612a68B6b8B2eFC4) (impl)
  * L2ERC20ExtendedTokensBridge: [`0xb4a0Cc7bE277DC9F9CBB6fbE8574B6f5221018D8`](https://soneium.blockscout.com/address/0xb4a0Cc7bE277DC9F9CBB6fbE8574B6f5221018D8) (proxy)
  * L2ERC20ExtendedTokensBridge: [`0x3e2DcBe31617577d9CF934A9fb97DdC8FD844fa0`](https://soneium.blockscout.com/address/0x3e2DcBe31617577d9CF934A9fb97DdC8FD844fa0) (impl)
  * Soneium Governance Bridge Executor: [`0xB0F7894b3740F68eAca6e3792B14d2C2c25eF5D4`](https://soneium.blockscout.com/address/0xB0F7894b3740F68eAca6e3792B14d2C2c25eF5D4)

### 🔗 Unichain​

##### 🧱 Ethereum part​

  * OpStackTokenRatePusher: [`0x3F9600439Ad97fC6f55C2AC7C118f8Fd0595eB74`](https://etherscan.io/address/0x3F9600439Ad97fC6f55C2AC7C118f8Fd0595eB74)
  * L1LidoTokensBridge: [`0x755610f5Be536Ad7afBAa7c10F3E938Ea3aa1877`](https://etherscan.io/address/0x755610f5Be536Ad7afBAa7c10F3E938Ea3aa1877) (proxy)
  * L1LidoTokensBridge: [`0x6078232C54d956c901620fa4590e0F7E37c2B82f`](https://etherscan.io/address/0x6078232C54d956c901620fa4590e0F7E37c2B82f) (impl)

##### 🔗 Unichain part​

  * WstETH ERC20BridgedPermit: [`0xc02fE7317D4eb8753a02c35fe019786854A92001`](https://uniscan.xyz/address/0xc02fE7317D4eb8753a02c35fe019786854A92001) (proxy)
  * WstETH ERC20BridgedPermit: [`0xB5CF096A406C1D5297D2493073168F44EB4a1A1d`](https://uniscan.xyz/address/0xB5CF096A406C1D5297D2493073168F44EB4a1A1d) (impl)
  * StETH ERC20RebasableBridgedPermit: [`0x81f2508AAC59757EF7425DDc9717AB5c2AA0A84F`](https://uniscan.xyz/address/0x81f2508AAC59757EF7425DDc9717AB5c2AA0A84F) (proxy)
  * StETH ERC20RebasableBridgedPermit: [`0x5A007D6E37633FB297b82c074b94Bb29546BEbc3`](https://uniscan.xyz/address/0x5A007D6E37633FB297b82c074b94Bb29546BEbc3) (impl)
  * TokenRateOracle: [`0xD835fAC9080396CCE95bDf9EcC7cc27Bab12c9f8`](https://uniscan.xyz/address/0xD835fAC9080396CCE95bDf9EcC7cc27Bab12c9f8) (proxy)
  * TokenRateOracle: [`0x537A7F9D551da3C2800cB11ca17f2946D21029AF`](https://uniscan.xyz/address/0x537A7F9D551da3C2800cB11ca17f2946D21029AF) (impl)
  * L2ERC20ExtendedTokensBridge: [`0x1A513e9B6434a12C7bB5B9AF3B21963308DEE372`](https://uniscan.xyz/address/0x1A513e9B6434a12C7bB5B9AF3B21963308DEE372) (proxy)
  * L2ERC20ExtendedTokensBridge: [`0x332CA368dd09AD309c51dC6350730e0Bca85CffE`](https://uniscan.xyz/address/0x332CA368dd09AD309c51dC6350730e0Bca85CffE) (impl)
  * Unichain Governance Bridge Executor: [`0x3b00f262e39372DF2756f809DD5DC36aeEdFC4A0`](https://uniscan.xyz/address/0x3b00f262e39372DF2756f809DD5DC36aeEdFC4A0)

### 🔹 Lisk​

##### 🧱 Ethereum part​

  * L1ERC20TokenBridge: [`0x9348AF23B01F2B517AFE8f29B3183d2Bb7d69Fcf`](https://etherscan.io/address/0x9348AF23B01F2B517AFE8f29B3183d2Bb7d69Fcf) (proxy)
  * L1ERC20TokenBridge: [`0xC7315f4FaaB2F700fc6b4704BB801c46ff6327AC`](https://etherscan.io/address/0xC7315f4FaaB2F700fc6b4704BB801c46ff6327AC) (impl)

##### 🔹 Lisk part​

  * WstETH ERC20Bridged: [`0x76D8de471F54aAA87784119c60Df1bbFc852C415`](https://blockscout.lisk.com/address/0x76D8de471F54aAA87784119c60Df1bbFc852C415) (proxy)
  * WstETH ERC20Bridged: [`0x16B8006b49db9022BF5457BD2de0144a7d0F970b`](https://blockscout.lisk.com/address/0x16B8006b49db9022BF5457BD2de0144a7d0F970b) (impl)
  * L2ERC20TokenBridge: [`0xca498Ee83eD3546321d4DC25e2789B0624F15f68`](https://blockscout.lisk.com/address/0xca498Ee83eD3546321d4DC25e2789B0624F15f68) (proxy)
  * L2ERC20TokenBridge: [`0xE766BE7B76E3F4d06551CB169Dd69B10a58ba91D`](https://blockscout.lisk.com/address/0xE766BE7B76E3F4d06551CB169Dd69B10a58ba91D) (impl)
  * Lisk Governance Bridge Executor: [`0xfD050cDa025f6378e54ab5fd5Da377D242Ed74d3`](https://blockscout.lisk.com/address/0xfD050cDa025f6378e54ab5fd5Da377D242Ed74d3)

### 🌊 Swellchain​

##### 🧱 Ethereum part​

  * L1ERC20TokenBridge: [`0xecf3376512EDAcA4FBB63d2c67d12a0397d24121`](https://etherscan.io/address/0xecf3376512EDAcA4FBB63d2c67d12a0397d24121) (proxy)
  * L1ERC20TokenBridge: [`0x7e97935FbDF2a27EA35c4fdDdaCf5ACd685e65A2`](https://etherscan.io/address/0x7e97935FbDF2a27EA35c4fdDdaCf5ACd685e65A2) (impl)

##### 🌊 Swellchain part​

  * WstETH ERC20Bridged: [`0x7c98E0779EB5924b3ba8cE3B17648539ed5b0Ecc`](https://explorer.swellnetwork.io/address/0x7c98E0779EB5924b3ba8cE3B17648539ed5b0Ecc) (proxy)
  * WstETH ERC20Bridged: [`0xa1A3257813eD45d91e9c45E03C66FcDD54B4e7c1`](https://explorer.swellnetwork.io/address/0xa1A3257813eD45d91e9c45E03C66FcDD54B4e7c1) (impl)
  * L2ERC20TokenBridge: [`0x8311496799B8C2C7f13bC32c123ac4Eea068e6F0`](https://explorer.swellnetwork.io/address/0x8311496799B8C2C7f13bC32c123ac4Eea068e6F0) (proxy)
  * L2ERC20TokenBridge: [`0x66ca84bC3C2dB33b6bd7B8994C033444C72b8ADE`](https://explorer.swellnetwork.io/address/0x66ca84bC3C2dB33b6bd7B8994C033444C72b8ADE) (impl)
  * Governance BridgeExecutor: [`0xFF22ea467301010F1364fc154c13e0c86Fcfb077`](https://explorer.swellnetwork.io/address/0xFF22ea467301010F1364fc154c13e0c86Fcfb077)

### 🏊 Lido Multichain Liquidity pools​

Balancer

  * [wstETH/WETH](https://arbitrum.balancer.fi/#/pool/0xfb5e6d0c1dfed2ba000fbc040ab8df3615ac329c000000000000000000000159) on Arbitrum: [`0xFB5e6d0c1DfeD2BA000fBC040Ab8DF3615AC329c`](https://arbiscan.io/address/0xfb5e6d0c1dfed2ba000fbc040ab8df3615ac329c)
  * [wstETH/USDC](https://arbitrum.balancer.fi/#/pool/0x178e029173417b1f9c8bc16dcec6f697bc323746000200000000000000000158) on Arbitrum: [`0x178E029173417b1F9C8bC16DCeC6f697bC323746`](https://arbiscan.io/address/0x178e029173417b1f9c8bc16dcec6f697bc323746)

Beethoven

  * [wstETH/bb-rf-aWETH](https://op.beets.fi/pool/0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f) on Optimism: [`0xde45f101250f2ca1c0f8adfc172576d10c12072d`](https://optimistic.etherscan.io/address/0xde45f101250f2ca1c0f8adfc172576d10c12072d)
  * [wstETH/bb-rf-aUSD/bb-rf-aWBTC](https://op.beets.fi/pool/0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b) on Optimism: [`0x981Fb05B738e981aC532a99e77170ECb4Bc27AEF`](https://optimistic.etherscan.io/address/0x981fb05b738e981ac532a99e77170ecb4bc27aef)

Kyber Network

  * [wstETH/ETH](https://kyberswap.com/elastic/add/0x5979d7b546e38e414f7e9822514be443a4800529/ETH/40) on Arbitrum: [`0x2149a5f5d7ca96eb98a2ee6e5b0ba1a5593a1a0a`](https://arbiscan.io/address/0x2149a5f5d7ca96eb98a2ee6e5b0ba1a5593a1a0a)
  * [wstETH/USDC](https://kyberswap.com/elastic/add/0x5979d7b546e38e414f7e9822514be443a4800529/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8/40) on Arbitrum: [`0x7acbea3b8ab7cdf4a595c6ed81e7d3e26038d494`](https://arbiscan.io/address/0x7acbea3b8ab7cdf4a595c6ed81e7d3e26038d494)
  * [wstETH/ETH](https://kyberswap.com/elastic/add/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb/ETH/10) on Optimism: [`0xda74db17023750d02b83be2559a4eaa013b65c54`](https://optimistic.etherscan.io/address/0xda74db17023750d02b83be2559a4eaa013b65c54)
  * [wstETH/USDC](https://kyberswap.com/elastic/add/0x5979D7b546E38E414F7E9822514be443A4800529/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/40) on Optimism: [`0x5fc53f707c7aacd460a1cd564c06e0f07610fcb7`](https://optimistic.etherscan.io/address/0x5fc53f707c7aacd460a1cd564c06e0f07610fcb7)

## 🔒 LRT Vaults on Mellow Protocol​

There's a joint bug bounty for the vaults deployed at addresses listed in [the
deployment verification audit record](https://github.com/mellow-
finance/mellow-
lrt/blob/85370ae372f95d057dc9806ec98fde24e5ed4d29/audits/202406_Statemind/Mellow%20LRT%20report%20with%20deployment.pdf).
Any findings regarding the code deployed on those addresses can be reported to
[the Lido Immunefi Bug bounty](https://immunefi.com/bug-bounty/lido/) with
thresholds of up to $500k on critical finding.

## 📜 Legacy Contracts​

> **These contracts were previously used and are currently active, but they
> are no longer being supported by contributors from Lido DAO and don't fall
> under Lido bug bounty scope and terms anymore**

  * Finance Ops: [`0x48F300bD3C52c7dA6aAbDE4B683dEB27d38B9ABb`](https://etherscan.io/address/0x48F300bD3C52c7dA6aAbDE4B683dEB27d38B9ABb)
  * Cover Ops: [`0xD089cc83f5B803993E266ACEB929e52A993Ca2C8`](https://etherscan.io/address/0xD089cc83f5B803993E266ACEB929e52A993Ca2C8)
  * 1inch Liquidity Farming: [`0xdB46C277dA1599390eAb394327602889E9546296`](https://etherscan.io/address/0xdB46C277dA1599390eAb394327602889E9546296)
  * AnchorVault: [`0xA2F987A546D4CD1c607Ee8141276876C26b72Bdf`](https://etherscan.io/address/0xA2F987A546D4CD1c607Ee8141276876C26b72Bdf)
    * AnchorVault Implementation: [`0x9530708033E7262bD7c005d0e0D47D8A9184277d`](https://etherscan.io/address/0x9530708033E7262bD7c005d0e0D47D8A9184277d)
    * bETH Token: [`0x707f9118e33a9b8998bea41dd0d46f38bb963fc8`](https://etherscan.io/address/0x707f9118e33a9b8998bea41dd0d46f38bb963fc8)
  * ARCx:
    * Manager Contract: [`0x6140182B2536AE7B6Cfcfb2d2bAB0f6Fe0D7b58E`](https://etherscan.io/address/0x6140182B2536AE7B6Cfcfb2d2bAB0f6Fe0D7b58E)
    * Reward Contract: [`0x8F1155447Ee97b5Ae147a01a5c420B0FDDF0370D`](https://etherscan.io/address/0x8F1155447Ee97b5Ae147a01a5c420B0FDDF0370D)
  * SushiSwap LP rewards:
    * Manager Contract: [`0xE5576eB1dD4aA524D67Cf9a32C8742540252b6F4`](https://etherscan.io/address/0xe5576eb1dd4aa524d67cf9a32c8742540252b6f4)
    * Reward Contract: [`0x75ff3dd673Ef9fC459A52E1054db5dF2A1101212`](https://etherscan.io/address/0x75ff3dd673ef9fc459a52e1054db5df2a1101212)
  * Balancer LP rewards v1:
    * Manager Contract: [`0x1dD909cDdF3dbe61aC08112dC0Fdf2Ab949f79D8`](https://etherscan.io/address/0x1dD909cDdF3dbe61aC08112dC0Fdf2Ab949f79D8)
  * 1inch LP rewards manager:
    * Manager Contract: [`0xf5436129cf9d8fa2a1cb6e591347155276550635`](https://etherscan.io/address/0xf5436129cf9d8fa2a1cb6e591347155276550635)
  * Balancer LP rewards v2:
    * Manager Contract: [`0x1220ccCDc9BBA5CF626a84586C74D6f940932342`](https://etherscan.io/address/0x1220ccCDc9BBA5CF626a84586C74D6f940932342)
    * Reward Contract: [`0x55c8De1Ac17C1A937293416C9BCe5789CbBf61d1`](https://etherscan.io/address/0x55c8De1Ac17C1A937293416C9BCe5789CbBf61d1)
  * Treasury Diversification: [2021 May round](https://research.lido.fi/t/proposal-ldo-treasury-diversification/458) [`0x489F04EEff0ba8441D42736549A1f1d6ccA74775`](https://etherscan.io/address/0x489F04EEff0ba8441D42736549A1f1d6ccA74775) & [2021 October run](https://research.lido.fi/t/lido-treasury-diversification-part-3/1059/1) [`0x689E03565e36B034EcCf12d182c3DC38b2Bb7D33`](https://etherscan.io/address/0x689E03565e36B034EcCf12d182c3DC38b2Bb7D33).
  * Treasury Diversification Part 2: [2022 Aug round](https://research.lido.fi/t/treasury-diversification-2-part-2/2657) [`0xA9b2F5ce3aAE7374a62313473a74C98baa7fa70E`](https://etherscan.io/address/0xA9b2F5ce3aAE7374a62313473a74C98baa7fa70E).
  * [Lido Contributors Group Multisigs](/multisigs/lido-contributors-group)
    * Pool Maintenance Labs Ltd. (PML): [`0x17F6b2C738a63a8D3A113a228cfd0b373244633D`](https://app.safe.global/settings/setup?safe=eth:0x17F6b2C738a63a8D3A113a228cfd0b373244633D)
    * Argo Technology Consulting Ltd. (ATC): [`0x9B1cebF7616f2BC73b47D226f90b01a7c9F86956`](https://app.safe.global/settings/setup?safe=eth:0x9B1cebF7616f2BC73b47D226f90b01a7c9F86956)
    * Resourcing and Compensation Committee (RCC): [`0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437`](https://app.safe.global/settings/setup?safe=eth:0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437)
  * Easy Track factory for token transfers: RCC stablecoins (committee ms [`0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437`](https://app.safe.global/settings/setup?safe=eth:0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437))
    * AllowedRecipientsRegistry: [`0xDc1A0C7849150f466F07d48b38eAA6cE99079f80`](https://etherscan.io/address/0xDc1A0C7849150f466F07d48b38eAA6cE99079f80)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0x75bDecbb6453a901EBBB945215416561547dfDD4`](https://etherscan.io/address/0x75bDecbb6453a901EBBB945215416561547dfDD4)
  * Easy Track factory for token transfers: RCC stETH (committee ms [`0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437`](https://app.safe.global/settings/setup?safe=eth:0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437))
    * AllowedRecipientsRegistry: [`0xAAC4FcE2c5d55D1152512fe5FAA94DB267EE4863`](https://etherscan.io/address/0xAAC4FcE2c5d55D1152512fe5FAA94DB267EE4863)
    * TopUpAllowedRecipients: [`0xcD42Eb8a5db5a80Dc8f643745528DD77cf4C7D35`](https://etherscan.io/address/0xcD42Eb8a5db5a80Dc8f643745528DD77cf4C7D35)
  * Easy Track factory for token transfers: PML stablecoins (committee ms [`0x17F6b2C738a63a8D3A113a228cfd0b373244633D`](https://app.safe.global/settings/setup?safe=eth:0x17F6b2C738a63a8D3A113a228cfd0b373244633D))
    * AllowedRecipientsRegistry: [`0xDFfCD3BF14796a62a804c1B16F877Cf7120379dB`](https://etherscan.io/address/0xDFfCD3BF14796a62a804c1B16F877Cf7120379dB)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0x92a27C4e5e35cFEa112ACaB53851Ec70e2D99a8D`](https://etherscan.io/address/0x92a27C4e5e35cFEa112ACaB53851Ec70e2D99a8D)
  * Easy Track factory for token transfers: PML stETH (committee ms [`0x17F6b2C738a63a8D3A113a228cfd0b373244633D`](https://app.safe.global/settings/setup?safe=eth:0x17F6b2C738a63a8D3A113a228cfd0b373244633D))
    * AllowedRecipientsRegistry: [`0x7b9B8d00f807663d46Fb07F87d61B79884BC335B`](https://etherscan.io/address/0x7b9B8d00f807663d46Fb07F87d61B79884BC335B)
    * TopUpAllowedRecipients: [`0xc5527396DDC353BD05bBA578aDAa1f5b6c721136`](https://etherscan.io/address/0xc5527396DDC353BD05bBA578aDAa1f5b6c721136)
  * Easy Track factory for token transfers: ATC stablecoins (committee ms [`0x9B1cebF7616f2BC73b47D226f90b01a7c9F86956`](https://app.safe.global/settings/setup?safe=eth:0x9B1cebF7616f2BC73b47D226f90b01a7c9F86956))
    * AllowedRecipientsRegistry: [`0xe07305F43B11F230EaA951002F6a55a16419B707`](https://etherscan.io/address/0xe07305F43B11F230EaA951002F6a55a16419B707)
    * AllowedTokensRegistry: [`0x4AC40c34f8992bb1e5E856A448792158022551ca`](https://etherscan.io/address/0x4AC40c34f8992bb1e5E856A448792158022551ca)
    * TopUpAllowedRecipients: [`0x1843Bc35d1fD15AbE1913b9f72852a79457C42Ab`](https://etherscan.io/address/0x1843Bc35d1fD15AbE1913b9f72852a79457C42Ab)
  * Easy Track factory for token transfers: ATC stETH (committee ms [`0x9B1cebF7616f2BC73b47D226f90b01a7c9F86956`](https://app.safe.global/settings/setup?safe=eth:0x9B1cebF7616f2BC73b47D226f90b01a7c9F86956))
    * AllowedRecipientsRegistry: [`0xd3950eB3d7A9B0aBf8515922c0d35D13e85a2c91`](https://etherscan.io/address/0xd3950eB3d7A9B0aBf8515922c0d35D13e85a2c91)
    * TopUpAllowedRecipients: [`0x87b02dF27cd6ec128532Add7C8BC19f62E6f1fB9`](https://etherscan.io/address/0x87b02dF27cd6ec128532Add7C8BC19f62E6f1fB9)
  * Dual Governance upgrade contracts
    * Dual Governance Upgrade State Verifier: [`0x487b764a2085ffd595D9141BAec0A766B7904786`](https://etherscan.io/address/0x487b764a2085ffd595D9141BAec0A766B7904786)
    * Dual Governance Upgrade Omnibus Provider: [`0x67988077f29FbA661911d9567E05cc52C51ca1B0`](https://etherscan.io/address/0x67988077f29FbA661911d9567E05cc52C51ca1B0)
    * Dual Governance Config Provider for disconnected DualGovernance contract: [`0xc934E90E76449F09f2369BB85DCEa056567A327a`](https://etherscan.io/address/0xc934E90E76449F09f2369BB85DCEa056567A327a)
  * Lido V3 upgrade contracts:
    * V3 Temporary Admin: [`0xf738A2C7d69694B618dbB547C1c5A152D7958f06`](https://etherscan.io/address/0xf738A2C7d69694B618dbB547C1c5A152D7958f06)
    * V3 Template: [`0x34E01ecFebd403370b0879C628f8A5319dDb8507`](https://etherscan.io/address/0x34E01ecFebd403370b0879C628f8A5319dDb8507)
    * V3 Vote Script: [`0xE1F4c16908fCE6935b5Ad38C6e3d58830fe86442`](https://etherscan.io/address/0xE1F4c16908fCE6935b5Ad38C6e3d58830fe86442)

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/deployed-
contracts/index.md)

[PreviousSafe Harbor](/security/safeharbor)[NextHoodi](/deployed-
contracts/hoodi)

  * 🏛️ Core Protocol
    * 🔨 stVaults Factory Stack
  * 🔮 Oracle Contracts
  * 🗳️ DAO Contracts
    * 🧬 Dual Governance
  * 📊 Data Bus
  * 🔄 Post Token Rebase Receiver
  * 🧩 Staking Modules
    * 🔒 Curated Module
    * ☀️ Simple DVT Module
    * 🕶️ Community Staking Module
  * 💧 Liquidity Pools
  * 📈 Price Feeds
  * 🎁 Reward Programs
  * 🔗 AAVE V2 Integration
  * ⚙️ DAO Ops Contracts & Addresses
  * 🤖 Bots
  * 🪨 Lido Stonks Contracts
  * ⚡ Easy Track
    * 🧩 Easy Track Factories for Staking Modules
    * 💰 Easy Track Factories for Token Transfers
    * 🤖 Easy Track Factories for MEV-Boost Relay Allowed List management
    * 🔨 Easy Track Factories for stVaults Management
  * 🔐 Lido DAO Multisigs
    * 🧑‍🤝‍🧑 Committees
    * 🤝 Alliance
    * 🛠️ Dev Team Multisigs
    * 🛑 Emergency Brakes Multisigs
    * 🔬 Liquidity Observation Lab Multisigs
    * 📣 Lido on X
    * 🗂️ Other
  * 🌐 Lido Multichain
    * 🌀 Arbitrum
    * 🌞 Optimism
    * 🔺 Polygon PoS
    * 🟦 Base
    * 🧵 ZKSync
    * 🧥 Mantle
    * 📏 Linea
    * 📜 Scroll
    * 🎛️ Mode
    * 🟡 Binance Smart Chain (BSC)
    * ⚗️ Zircuit
    * 🎧 Soneium
    * 🔗 Unichain
    * 🔹 Lisk
    * 🌊 Swellchain
    * 🏊 Lido Multichain Liquidity pools
  * 🔒 LRT Vaults on Mellow Protocol
  * 📜 Legacy Contracts



  * [](/)
  * Public Risk Disclosure (PRD)

On this page

# Public Risk Disclosure (PRD)

**Last updated:** 20 February 2026

This Public Risk Disclosure (“PRD”) is published and maintained to provide
users, integrators, and stakeholders with a consolidated overview of key risks
associated with the Lido protocol and liquid staking tokens. Where this PRD
refers to actions or outcomes (e.g., “Lido protocol uses…”, “assets may be…”),
such statements describe how the protocol is programmed to function and what
may occur when users and other participants interact with it. The Lido
protocol is decentralized infrastructure and does not have independent agency.

This document is intended to support transparency and informed decision-
making. It does **not** constitute investment advice, financial advice, legal
advice, or tax advice.

## 1\. Regulatory and Legal Risks​

### 1.1 Regulatory Variability & Uncertainty​

The legal and regulatory treatment of digital assets, staking, liquid staking,
and derivative or representative tokens varies significantly by jurisdiction
and is evolving. Activities involving Lido protocol may be restricted, require
licensing, or be subject to regulatory enforcement in certain jurisdictions.

Users and integrators are solely responsible for determining whether their use
of the Lido protocol and related tools complies with applicable laws,
regulations, and regulatory guidance.

### 1.2 No Regulatory Approval​

The Lido protocol and related liquid staking tokens (including stETH and
wstETH) do not benefit from any general, protocol-level regulatory approval,
authorization, or endorsement by governmental or regulatory authorities.
Regulatory treatment of protocols, tokens, and activities involving liquid
staking varies by jurisdiction and use case, and may change over time.

Users should not assume that the Lido protocol or related liquid staking
tokens are approved, licensed, or supervised for any particular purpose in any
jurisdiction, and are responsible for assessing applicable legal and
regulatory requirements.

## 2\. No Investment, Legal, or Tax Advice​

All information provided by the Lido Foundation (referred later as
Foundation), including documentation, interfaces, and this PRD, is for
informational purposes only. Nothing herein constitutes:

  * investment or financial advice;
  * legal advice;
  * tax or accounting advice; or
  * a recommendation to buy, sell, or hold any digital asset.

Users should seek independent professional advice before engaging in staking
or liquid staking activities.

## 3\. Rewards, APR, and APY Risks​

### 3.1 Indicative and Variable Returns​

Any displayed APR or APY figures are estimates based on historical data,
current network conditions, and prevailing market factors. They are **not
guaranteed** and may fluctuate due to factors including validator performance,
network or market conditions, protocol changes, slashing events, fees, and
vault-specific dynamics.

### 3.2 No Guarantee of Rewards; Risk of Loss​

Staking rewards are variable and may be lower than expected or zero. In
addition, users may experience losses, including loss of staked assets or loss
of value of liquid staking tokens under extreme network slashing or other
penalty conditions on the Ethereum network involving validators participating
in Lido.

## 4\. Protocol and Smart Contract Risks​

### 4.1 Smart Contract Vulnerabilities​

The Lido protocol is implemented through smart contracts deployed on the
Ethereum blockchain together with certain off-chain components that support
protocol operations and integrations, operated in a decentralized manner by
independent participants. Smart contracts may contain bugs, vulnerabilities,
or design limitations that could result in loss of funds or unexpected
behavior. While parallel independent audits, formal verification, extensive
testing and security reviews are conducted, no smart contract system is
entirely risk-free.

### 4.2 Dependency Risk​

The Lido protocol is deployed on Ethereum and therefore depends on the
security, liveness, and correct operation of the Ethereum network (including
consensus, execution, network propagation, and client implementations).  
If Ethereum experiences congestion, reorgs, forks, client bugs, consensus
failures, or other adverse events, users may experience degraded
functionality, delays, or loss.

### 4.3 Governance and Upgrade Risk​

Protocol upgrades, parameter changes, or governance decisions may alter
protocol behavior, reward mechanics, or token functionality. Such changes may
occur with limited notice but are always a subject of the DAO on-chain vote,
having duration of 9 days from the vote start until it’s executed with
exceptions for non-severe parameter changes as a part of shortened vote (5
days) or Easy Track system (3 days).

## 5\. Validator, Slashing, and Network Risks​

### 5.1 Validator Performance and Slashing​

Assets staked through the Lido protocol are programmatically delegated to
independent node operators running validators on Ethereum. Node operators who
utilize the Lido protocol to run validators may access the protocol in a
permissioned or permissionless manner, depending on the design and
configuration of the corresponding Lido protocol staking module and the
mechanisms afforded by the underlying blockchain network. Validator
performance is subject to operational, technical, and human risks. Validators
may incur penalties, including slashing or inactivity penalties, due to causes
such as misconfiguration, software bugs, hardware failure, network outages,
power loss, operator error, or malicious behavior.

Slashing events may result in a reduction of the total staked assets and/or
accrued rewards. In severe cases, slashing penalties may exceed earned
rewards, resulting in a net loss of staked assets. While the Lido DAO utilizes
node operator selection processes, monitoring systems, and risk mitigation
mechanisms (the scope and design of which vary across staking modules)
including operator diversification, Distributed Validator Technology, and
bonding mechanisms where applicable, these measures do not eliminate the risk
of slashing or underperformance.

The Lido protocol may operate multiple staking modules, each with distinct
operator admission criteria, bonding requirements, and risk mitigation
designs. The risk profile of stake allocated across modules may vary - for
example, modules relying on economic bonding mechanisms provide direct
financial accountability for operator performance, while modules relying
solely on permissioned selection processes depend on reputational and
governance-based safeguards. Users should be aware that risk characteristics,
including the nature and magnitude of potential losses, may differ across
modules.

Slashing or sustained validator downtime may negatively affect the aggregate
staking rewards (or penalties) accruing to liquid staking token holders and
may lead to deviations between expected and realized rewards.

### 5.2 Correlated Validator Risks​

Although Lido distributes stake across multiple independent node operators,
certain risks may be correlated across validators. These include shared client
software vulnerabilities, common infrastructure location or providers, shared
jurisdictional exposure, coordinated network attacks, or systemic bugs
affecting a large portion of validators simultaneously.

Correlated failures may lead to multiple validators being penalized or slashed
within a short period of time, amplifying losses beyond what would be expected
from isolated incidents.

### 5.3 Client, Software, and Upgrade Risk​

All Ethereum validators rely on consensus-layer and execution-layer client
software, which may contain undiscovered bugs, vulnerabilities, or
implementation inconsistencies. Client upgrades, hard forks, or emergency
patches may introduce unforeseen behavior, require rapid operator action, or
result in validator downtime if not executed correctly or promptly.

In some cases, divergent client behavior or faulty upgrades may lead to chain
splits, consensus instability, validator downtime, or slashing events. The
timing and coordination of upgrades across the network are outside the control
of the Lido protocol.

Certain validators may operate using Distributed Validator Technology, wherein
validator signing keys are split across either multiple independent
participants or a single participant’s nodes. While DVT is intended to improve
resilience and reduce single points of failure, it introduces additional risks
including coordination latency, key-share management complexity and dependency
on DVT middleware (such as Obol or SSV network infrastructure). Failures in
DVT coordination or middleware may result in missed attestations, missed
proposals, or in certain edge cases, slashing.

Validators participating in the Lido protocol may utilize MEV-Boost or similar
middleware to source blocks from external block builders via relay
infrastructure. This introduces additional dependencies on third-party relays
and builders, which may fail, deliver invalid blocks, censor transactions, or
expose validators to regulatory risk. Relay outages or misbehavior may result
in missed proposals or reduced rewards.

### 5.4 Network Events​

Certain slashing or penalty events may arise from network-wide conditions
rather than individual validator misconduct. These include consensus failures,
chain reorganizations, mass client failures, or protocol-level bugs. Such
events may impact large numbers of validators simultaneously and may result in
unexpected losses or prolonged disruptions to staking operations.

The Lido protocol does not control the underlying blockchain’s consensus
rules, slashing conditions, or recovery processes. Changes to these rules may
be implemented through network governance or protocol upgrades.

## 6\. Liquidity, Market, and Token Risks​

### 6.1 Liquidity Risk​

Users typically have two main pathways to obtain ETH when holding liquid
staking tokens (stETH and wstETH): (i) protocol-level withdrawals (where
supported) and (ii) secondary-market transactions (e.g., trading via third-
party venues), which occur outside the Lido protocol’s infrastructure. The
first is the so-called primary redemption mechanism, wherein stETH or wstETH
can be redeemed for ETH through the Lido smart contracts; this flow ultimately
depends on Ethereum’s validator withdrawal and exit mechanisms, and may be
subject to protocol-defined queues, limits, and timing conditions at the
upstream Ethereum layer. The other is secondary trading, wherein stETH or
wstETH are swapped - outside of the Lido smart contracts - directly for ETH or
any other asset on either a centralized or decentralized trading venue.

Risk profile differs by pathway:

  * **Protocol-level withdrawal flow** : Users may face timing risks, including queues, limits, and delays at the Ethereum layer. The amount of ETH ultimately received is based on the protocol’s accounting of underlying staked ETH and may be affected in adverse scenarios (e.g., slashing events), but otherwise does not depend on secondary-market liquidity.
  * **Secondary-market trading** : Users may face price and liquidity risks, including price deviations from ETH, slippage, widening spreads, liquidity fragmentation, and adverse execution during periods of market stress or large swaps. In stressed conditions, secondary markets may trade at a discount (or premium) relative to ETH, and users may receive materially less ETH than expected when exchanging stETH/wstETH via third-party venues.

Users, or agents acting on behalf of users, seeking to redeem ETH through the
Lido smart contracts may face periods of illiquidity, for instance, when the
overall Ethereum validator queue is long. Specifically, when many staking
users (independently of the Lido protocol) are looking to unstake (and receive
ETH), the time it takes to execute the withdrawal increases because the
network’s allowed throughput of unstaking acts as a bottleneck. This can
create temporary periods of illiquidity which may have repercussions depending
on a user’s liquidity preference and may impact the secondary trading price
for both the liquid staking token and its underlying asset.

Users, or agents acting on behalf of users, seeking to swap or trade liquid
staking tokens for ETH or other assets on secondary trading venues are subject
to the prevailing market conditions on the venue they select and are
responsible for seeking best execution. Trading conditions are affected, not
just by order book depth in the liquid staking token itself, but also by
trading conditions in the underlying asset as well as the liquidity situation
of the primary redemption window. If the primary redemption window is
‘congested’, or faces long delays for redemption, market participants may be
unable to arbitrage price dislocations in times of market stress and users
seeking to trade through secondary trading venues may face price quotes for
their liquid staking tokens at meaningful deviations from par.

### 6.2 Market Volatility​

Digital asset markets are inherently volatile, with token prices susceptible
to significant and rapid fluctuation, often independent of the protocol's
underlying fundamentals or operational performance. Market volatility is
influenced by a range of external and internal factors, including but not
limited to, macroeconomic shifts, global regulatory news, general sentiment
toward the crypto market, activity of large holders, and speculative trading.

Rapid price movements can lead to unexpected losses for users. For those using
liquid staking tokens (like stETH and wstETH) as collateral in decentralized
finance protocols, sudden drops in the token's value can trigger cascading
liquidations, further exacerbating price pressure and market stress.

While stETH and wstETH are designed to track the value of the underlying ETH,
extreme market volatility can cause the liquid staking token's price to
deviate significantly from par on secondary markets. This deviation can
persist until arbitrage opportunities can be executed, which may be
constrained by withdrawal queue times.

### 6.3 Accounting and Oracle Risk​

Token balances, exchange rates, and accounting assumptions may rely on
protocol-defined calculations or oracle data. Incorrect, delayed, or
manipulated data may result in inaccurate representations of value.

Certain functions of the Lido protocol use decentralized oracle subsystems to
relay important data (including Consensus Layer state) to the Lido smart
contracts. These oracle subsystems are operated by multiple independent
participants and require a quorum of matching reports to be accepted on-chain
(currently, a 5-of-9 threshold, subject on the future oracle subsystem
evolution and configuration). As a result, it is not sufficient for a single
oracle operator or a single instance of oracle software to be compromised,
offline, or faulty for incorrect data to be accepted by the protocol. The
relevant risks are more likely to materialize in the highly unlikely event
where a quorum of oracle operators is compromised, colludes, is unavailable,
or if a shared software defect affects a quorum such that identical incorrect
reports are produced.

If incorrect or stale data is accepted by quorum, it may lead to inaccurate
accounting updates (including reward accrual and exchange-rate calculations),
delays in accounting finality, or other unintended protocol behavior. Protocol
safeguards exist which apply on-chain validity and sanity checks designed to
constrain the magnitude and/or rate of certain accounting changes, which may
mitigate—but do not eliminate—the risk of adverse outcomes.

Token accounting, particularly the tracking of rewards and the resulting
exchange rates for liquid staking tokens, is based on complex, protocol-
defined formulas. While open source, transparent and based on extensively
audited smart contracts, these formulas may yet contain implementation bugs or
design flaws (including those newly arised as a result of the Ethereum network
specification upgrade implemented as a network “hardfork”) that lead to
incorrect balances or value representation over time.

Any failure in these systems means the representation of token balances or
exchange rates may be inaccurate.

## 7\. Wrapping, Withdrawal, and Bridging Risks​

### 7.1 Wrapping and Unwrapping​

Wrapping (e.g., stETH to wstETH) and unwrapping transactions depend on smart
contracts and on-chain mechanisms. Errors or failures may result in loss of
funds.

### 7.2 Withdrawal Queues and Delays​

Withdrawals from staking may be subject to Ethereum staking protocol-defined
queues, limits, delays and other conditions. Users may not be able to exit
positions immediately.

### 7.3 Bridging and Cross-Chain Risk​

Bridging assets across blockchains introduces additional risks, including
bridge smart contract vulnerabilities, off-chain tooling failures, reliance on
third-party operators, chain-specific failures, and inconsistent regulatory
treatment across jurisdictions.

### 7.4 Bridging Withdrawal Queues and Delays​

Bridging assets across blockchains introduces additional risks beyond
Ethereum. Movements of assets between Ethereum and L2s or other networks may
be subject to (i) the relevant network’s protocol rules and conditions
(including finality requirements, challenge periods, rate limits, queues, or
other withdrawal conditions), and (ii) additional limits, delays, fees,
operational constraints, or failure modes imposed by the particular cross-
chain bridge or messaging system used.

Bridges and related infrastructure are typically operated by independent third
parties; neither the Lido protocol nor the Foundation operates or controls
such bridges. Bridge-related incidents (including smart-contract
vulnerabilities, compromised validators/relayers, oracle issues, governance
attacks, or chain reorgs) may result in delayed transfers, incorrect
transfers, or loss of funds.

Users and integrators should review bridge-specific documentation and risk
disclosures, and apply best practices appropriate to the selected bridge and
destination network.

## 8\. Integration and Developer Risks​

### 8.1 Integration Errors​

Integrators interacting directly with Lido smart contracts, SDKs, or APIs
assume responsibility for correct implementation. Incorrect integrations,
misconfigured parameters, or misuse of token standards may result in
irreversible loss of funds.

### 8.2 Irreversibility of On-Chain Actions​

Blockchain transactions are generally irreversible. Errors cannot be undone
once confirmed on-chain.

### 8.3 Composability and DeFi Risk​

Use of Lido tokens within DeFi protocols introduces additional layers of risk,
including liquidation risk, cascading failures, and reliance on third-party
protocol security and governance.

## 9\. Institutional and Custodial Considerations​

### 9.1 No Custody, AML/KYC or Fiduciary Role​

The Foundation does not act as a custodian, broker, or fiduciary.
Institutional users retain responsibility for custody, accounting, reporting,
and regulatory compliance.

### 9.2 Operational and Compliance Risk​

Operational, custody, cybersecurity, and compliance risks related to holding,
reconciling, and reporting Lido-related positions are managed at the level of
the institution and its chosen custodians or service providers, not by the
Lido protocol. Institutional users must independently assess these operational
and compliance risks, and ensure that their custodians, brokers, and other
vendors have appropriate controls, incident-response processes, and regulatory
compliance frameworks in place for any use of Lido-related products.

## 10\. User Responsibility and Acknowledgement​

By accessing or using the Lido protocol, tokens, interfaces, or documentation,
users and integrators acknowledge that they:

  * understand and accept the risks described in this PRD;
  * assume full responsibility for regulatory compliance and risk management;
  * use the protocol at their own risk.

## 11\. Updates and Maintenance​

This PRD may be updated from time to time to reflect protocol changes,
regulatory developments, or evolving risk factors.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/prd.md)

[PreviousLido tokens integration guide](/guides/lido-tokens-integration-
guide)[NextGeneral Overview](/guides/curated-module/general-overview)

  * 1\. Regulatory and Legal Risks
    * 1.1 Regulatory Variability & Uncertainty
    * 1.2 No Regulatory Approval
  * 2\. No Investment, Legal, or Tax Advice
  * 3\. Rewards, APR, and APY Risks
    * 3.1 Indicative and Variable Returns
    * 3.2 No Guarantee of Rewards; Risk of Loss
  * 4\. Protocol and Smart Contract Risks
    * 4.1 Smart Contract Vulnerabilities
    * 4.2 Dependency Risk
    * 4.3 Governance and Upgrade Risk
  * 5\. Validator, Slashing, and Network Risks
    * 5.1 Validator Performance and Slashing
    * 5.2 Correlated Validator Risks
    * 5.3 Client, Software, and Upgrade Risk
    * 5.4 Network Events
  * 6\. Liquidity, Market, and Token Risks
    * 6.1 Liquidity Risk
    * 6.2 Market Volatility
    * 6.3 Accounting and Oracle Risk
  * 7\. Wrapping, Withdrawal, and Bridging Risks
    * 7.1 Wrapping and Unwrapping
    * 7.2 Withdrawal Queues and Delays
    * 7.3 Bridging and Cross-Chain Risk
    * 7.4 Bridging Withdrawal Queues and Delays
  * 8\. Integration and Developer Risks
    * 8.1 Integration Errors
    * 8.2 Irreversibility of On-Chain Actions
    * 8.3 Composability and DeFi Risk
  * 9\. Institutional and Custodial Considerations
    * 9.1 No Custody, AML/KYC or Fiduciary Role
    * 9.2 Operational and Compliance Risk
  * 10\. User Responsibility and Acknowledgement
  * 11\. Updates and Maintenance



  * [](/)
  * Lido DAO

On this page

# Lido DAO

The Lido DAO is a Decentralised Autonomous Organisation that manages the
liquid staking protocols by deciding on key parameters (e.g., setting fees,
assigning node operators and oracles, etc.) through the voting power of
governance token (`LDO`) holders. Also, the DAO will accumulate service fees
and spend them on research, development, liquidity mining incentives and
protocol upgrades.

## Why DAO?​

The DAO is the logical compromise between full centralization and
decentralisation, which allows the deployment of competitive products without
full centralization and custody on the exchanges. We do not believe that it is
possible to make a liquid staking protocol that is completely trustless in the
foreseeable future. A DAO is an optimal structure for launching Lido as:

  * DAO is essentially a decentralised entity, which is enabling a focus on community and might offer a more socially-conscious structure and consequent decision-making;
  * DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury.
  * And other management activities as well if there is a technical ability

The DAO will accumulate service fees from Lido, which is funnelled into the
insurance and development funds, distributed by the DAO.

## Functions​

Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its
efficiency and stability. The Lido DAO should do the following:

  * Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO’s goals
  * Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules
  * Approve LEGO grants to support different research and so initiatives protocol guilds
  * Payments to full-time contributors and other operational duties
  * Bug bounty program, respond to emergency
  * Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.

## Governance​

The `LDO` token governs all Lido DAO governance and network decisions to
ensure its prolonged stability and decentralised decision-making to facilitate
the growth of fair, and transparent liquid staking. The `LDO` contract address
-
[`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32).

> 📝 For more detailed information about governance, please, check out the
> [Governance](https://lido.fi/governance) page.

To have a vote in the Lido DAO, and to contribute to the determination of any
of the topics outlined above, one must hold the `LDO` governance token.
Holding `LDO` gives DAO members a vote in the future of Lido, allowing each
DAO member to have a personal say in the community. `LDO` voting weight is
proportional to the amount of `LDO` a voter holds. The more LDO on a user’s
address, the greater the decision-making power the voter gets. The exact
mechanism of `LDO` voting can be upgraded just like the other DAO
applications.

> 📝 If you have any initiatives you think will benefit the Lido protocol,
> share your thoughts in our [governance forum](https://research.lido.fi).

## Software​

The Lido DAO is an [Aragon](https://aragon.org/dao) organization. Since Aragon
provides a full end-to-end framework to build DAOs, we use its standard tools.

> 📝 The governance process only takes place within the Ethereum network. For
> other networks, this process is implemented through committee and multisig
> (we need a multisig list).

While the Aragon application is a powerful tool for DAO governance due to the
fact that it is both transparent and reliable, it is ill-suited to manage
routine operations that either have strong token-holder support and/or are
only relevant to a subsection of the DAO (e.g. the financial operations team).
For that reason, [Easy Track](https://easytrack.lido.fi/) is developed as an
efficient mechanism to assist with routine and uncontentious governance
proposals for the Lido DAO. Importantly, flexibility, and scalability is all
paramount concerns throughout the development of Easy Track, with extensive
measures taken to ensure that safety has not been compromised for convenience.

The novel Easy Track motions is not only reducing voter fatigue and on-chain
gas costs for token-holders, but is also facilitating the growth of the DAO by
providing greater autonomy to the sub-committees and node operators within the
organisation.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lido-
dao.md)

[Previous📘 Lido V3 Technical Paper](/lido-v3-whitepaper)[NextLido Improvement
Proposals](/lips)

  * Why DAO?
  * Functions
  * Governance
  * Software



  * [](/)
  * IPFS
  * About IPFS

On this page

# About IPFS

IPFS (InterPlanetary File System) is a suite of protocols for publishing data
(files, directories, websites, etc.) in a decentralized fashion. For more
info, see [What is IPFS](https://docs.ipfs.tech/concepts/what-is-ipfs/).

There is an option to use some Lido interfaces via IPFS, for example [Lido
Ethereum Staking Widget](https://github.com/lidofinance/ethereum-staking-
widget).

#### IPFS is used for Lido apps because:​

  * IPFS has no single point of failure. The failure of a single or even multiple nodes in the network does not affect the functioning of the entire network.
  * IPFS is decentralized, which makes IPFS more resilient than traditional systems.
  * IPFS uses cryptographic hashes to verify the authenticity and integrity of files, making it difficult for malicious actors to affect files.

## Address​

### What is a CID​

A content identifier, or CID, is a label used to point to material in IPFS.
CIDs are based on the content’s cryptographic hash. Any difference in the
content will produce a different CID. Note that CIDs won't match file hashes
(checksums), because CID contains additional information that the hash does
not (i.e., the codec of the data).

### IPFS HTTP Gateways​

An IPFS gateway is a web-based service that gets content from an IPFS network,
and makes it available via HTTP protocol that all web browsers understand. A
gateway address can look like this: `https://{CID}.ipfs.cf-ipfs.com`. You can
use available gateway of [your choice](/ipfs/security#possible-localstorage-
leak). Check gateway availability [here](https://ipfs.github.io/public-
gateway-checker/)

### Where to get CID and gateway address​

info

Each new set of changes to a Lido app will produce a new CID, therefore each
release will be available at its specific address. This means that for a Lido
app, **there won't be a gateway address that always points to the most recent
release**. The gateway you are currently using may point to the most updated
version, but it will remain so until a new release to IPFS occurs. After
opening a Lido app, it will automatically check if the app's version is the
latest one. If not, the user will be notified and asked to use the latest
version.

#### Releases page on GitHub​

The latest release information is available on GitHub under the Releases page
of the app repository. For Ethereum Staking Widget it is
[here](https://github.com/lidofinance/ethereum-staking-widget/releases).  
Using the page, one can find the information about the latest release,
including the IPFS pinning artifacts.

info

Note, that not every release is pinned to IPFS, see Release frequency

#### Action page on GitHub​

You can take this information from the latest GitHub action in which IPFS
pinning happened:

  1. Open the app's repo, follow the "Actions" tab.
  2. On the left side, in the navigation bar, find the workflow for IPFS releases; for the Ethereum Staking Widget it is called "[IPFS Release](https://github.com/lidofinance/ethereum-staking-widget/actions/workflows/ci-ipfs.yml)".
  3. Open the latest successful workflow and look for the "ipfs-pinning" title. There you will find a root CID and a link to an IPFS HTTP gateway.

#### IPFS.json​

There is a convention to store the latest CID for an app in the `IPFS.json`
file in the project's root.

info

This solution might be not the final one, serves for development purposes, and
is a subject to change in the future. The future plans are to replace the
latest CID registry with the one living on-chain and be updated via the Lido
DAO governance.

### Release frequency​

Not every new release of Lido applications will be deployed to IPFS; only
major releases or critical fixes will be deployed. So the deployment cadence
shouldn't be too frequent.  
This approach is preferred due to the numerous actions required to make an
IPFS release, and also the fact that each new release of a Lido app will
produce a new CID and will be available at the new address, which is
inconvenient for users willing to always use the latest version of an
application.

## Further reading​

  * [Release Flow](/ipfs/release-flow)
  * [Security](/ipfs/security)
  * [Hash Verification](/ipfs/hash-verification)
  * [IPFS applications list](/ipfs/apps-list)

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/ipfs/about.md)

[PreviousOther](/multisigs/other)[NextRelease Flow](/ipfs/release-flow)

  * Address
    * What is a CID
    * IPFS HTTP Gateways
    * Where to get CID and gateway address
    * Release frequency
  * Further reading



  * [](/)
  * Lido DAO

On this page

# Lido DAO

The Lido DAO is a Decentralised Autonomous Organisation that manages the
liquid staking protocols by deciding on key parameters (e.g., setting fees,
assigning node operators and oracles, etc.) through the voting power of
governance token (`LDO`) holders. Also, the DAO will accumulate service fees
and spend them on research, development, liquidity mining incentives and
protocol upgrades.

## Why DAO?​

The DAO is the logical compromise between full centralization and
decentralisation, which allows the deployment of competitive products without
full centralization and custody on the exchanges. We do not believe that it is
possible to make a liquid staking protocol that is completely trustless in the
foreseeable future. A DAO is an optimal structure for launching Lido as:

  * DAO is essentially a decentralised entity, which is enabling a focus on community and might offer a more socially-conscious structure and consequent decision-making;
  * DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury.
  * And other management activities as well if there is a technical ability

The DAO will accumulate service fees from Lido, which is funnelled into the
insurance and development funds, distributed by the DAO.

## Functions​

Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its
efficiency and stability. The Lido DAO should do the following:

  * Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO’s goals
  * Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules
  * Approve LEGO grants to support different research and so initiatives protocol guilds
  * Payments to full-time contributors and other operational duties
  * Bug bounty program, respond to emergency
  * Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.

## Governance​

The `LDO` token governs all Lido DAO governance and network decisions to
ensure its prolonged stability and decentralised decision-making to facilitate
the growth of fair, and transparent liquid staking. The `LDO` contract address
-
[`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32).

> 📝 For more detailed information about governance, please, check out the
> [Governance](https://lido.fi/governance) page.

To have a vote in the Lido DAO, and to contribute to the determination of any
of the topics outlined above, one must hold the `LDO` governance token.
Holding `LDO` gives DAO members a vote in the future of Lido, allowing each
DAO member to have a personal say in the community. `LDO` voting weight is
proportional to the amount of `LDO` a voter holds. The more LDO on a user’s
address, the greater the decision-making power the voter gets. The exact
mechanism of `LDO` voting can be upgraded just like the other DAO
applications.

> 📝 If you have any initiatives you think will benefit the Lido protocol,
> share your thoughts in our [governance forum](https://research.lido.fi).

## Software​

The Lido DAO is an [Aragon](https://aragon.org/dao) organization. Since Aragon
provides a full end-to-end framework to build DAOs, we use its standard tools.

> 📝 The governance process only takes place within the Ethereum network. For
> other networks, this process is implemented through committee and multisig
> (we need a multisig list).

While the Aragon application is a powerful tool for DAO governance due to the
fact that it is both transparent and reliable, it is ill-suited to manage
routine operations that either have strong token-holder support and/or are
only relevant to a subsection of the DAO (e.g. the financial operations team).
For that reason, [Easy Track](https://easytrack.lido.fi/) is developed as an
efficient mechanism to assist with routine and uncontentious governance
proposals for the Lido DAO. Importantly, flexibility, and scalability is all
paramount concerns throughout the development of Easy Track, with extensive
measures taken to ensure that safety has not been compromised for convenience.

The novel Easy Track motions is not only reducing voter fatigue and on-chain
gas costs for token-holders, but is also facilitating the growth of the DAO by
providing greater autonomy to the sub-committees and node operators within the
organisation.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lido-
dao.md)

[Previous📘 Lido V3 Technical Paper](/lido-v3-whitepaper)[NextLido Improvement
Proposals](/lips)

  * Why DAO?
  * Functions
  * Governance
  * Software



  * [](/)
  * 📘 Lido V3 Technical Paper

On this page

✨December 2025 Release

# Lido V3 Technical Paper

Introducing stVaults — a new primitive that enables staking through user-
defined validator setups, with optional stETH liquidity on top. The evolution
of liquid staking.

📄

**Authors:** Eugene Pshenichnyy, Eugene Mamin, Max Merkulov, Alexey Potapkin

📅

**Published:** December 2025

## Executive Summary​

**Lido V3** resolves the fundamental **control-versus-liquidity dilemma** in
Ethereum staking through **stVaults** — isolated staking positions that give
users control over validator choice, fee terms, and infrastructure, while
retaining access to stETH liquidity.

Key Innovation

stVaults are non-custodial smart contracts that delegate ETH to chosen Node
Operators while maintaining withdrawal credentials control. Stakers define key
parameters: fees, MEV, sidecars, custody, insurance, and more.

## Key Concepts​

🏛️

### stVaults

Isolated staking positions enabling user-defined validator setups with
optional stETH minting. Modular, sovereign building blocks for the staking
economy.

💧

### stETH Liquidity Layer

Two ways to mint stETH: Core Pool (1:1 ratio) and stVaults
(overcollateralized). Maintains fungibility while enabling diverse staking
setups.

🔒

### Overcollateralization

Part of the stake is held back to mitigate slashing risk and preserve stETH
fungibility. Health Factor and Reserve Ratio ensure protocol stability.

⚡

### Sovereignty

Stakers retain a full exit path — similar in spirit to Dual Governance — and
can freely disconnect and, if necessary, ossify their stVault to opt out of
upgrades.

## Supported Use Cases​

The stVault architecture enables a wide range of staking strategies:

Use Case| Description  
---|---  
**Delegation Liquid Staking**|  Node Operators attract stake directly and
launch their own stVaults with stETH liquidity  
**Custom Staking Strategies & LRTs**| Build custom portfolios, integrate
restaking (Symbiotic), wrap stVaults (Mellow)  
**Leverage Staking**|  Mint stETH, borrow more ETH, stake again — capital-
efficient loops  
**Institutional Staking**|  ETFs, ETPs, custodians maintain validator control
without idle liquidity buffers  
  
## Quick Links​

[📚 stVaults Doc Center](/run-on-lido/stvaults/)[📋 Deployed
Contracts](/deployed-contracts/)[💬 Research
Forum](https://research.lido.fi/t/lido-v3-design-implementation-
proposal/10665)[🔧 Building Guide](/run-on-lido/stvaults/building-guides/basic-
stvault)

* * *

## Full Technical Paper​

The complete Lido V3 Technical Paper covers architecture, mechanisms, risks,
and implementation details.

### Lido V3 Technical Paper

Complete technical specification including stVaults architecture, fee
mechanisms, risk framework, and user flows

[Download PDF](/Lido_V3_Whitepaper.pdf)

Loading document...

[Open in new tab ↗](/Lido_V3_Whitepaper.pdf)

## Document Contents​

The technical paper includes the following sections:

  1. **Introduction** — The control vs. liquidity dilemma in Ethereum staking
  2. **stETH as the Liquidity Layer** — How Core Pool and stVaults link up
  3. **stVaults** — Architecture, anatomy, shared layers, minting mechanics, fees, and sovereignty
  4. **Core Pool** — Current state, anchoring role, and strengthening measures
  5. **Known Risks** — Smart contract complexity, governance, slashing, liquidity, and oracle risks
  6. **Appendix A** — User flows for opening positions, closing positions, and rebalancing
  7. **Appendix B** — Risk Assessment Framework for evaluating validator risks

* * *

## Related Documentation​

For implementation guides and technical details, see:

  * [stVaults Doc Center](/run-on-lido/stvaults/) — Building guides and knowledge base
  * [stVaults Integration Overview](/run-on-lido/stvaults/tech-documentation/integration-overview) — Technical integration details
  * [stVaults Contracts Reference](/contracts/vault-hub) — Per-contract APIs and addresses
  * [Deployed Contracts](/deployed-contracts/) — Production and testnet contract addresses
  * [Predeposit Guarantee (PDG)](/run-on-lido/stvaults/tech-documentation/pdg) — Validator deposit security mechanism

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/lido-v3-whitepaper.mdx)

[PreviousIntroduction](/)[NextLido DAO](/lido-dao)

  * Executive Summary
  * Key Concepts
  * Supported Use Cases
  * Quick Links
  * Full Technical Paper
  * Document Contents
  * Related Documentation



  * [](/)
  * Multisigs
  * Emergency Brakes

On this page

# Emergency Brakes

## 1.1 GateSeal Committee​

**Address:**
[`0x8772E3a2D86B9347A2688f9bc1808A6d8917760C`](https://app.safe.global/settings/setup?safe=eth:0x8772E3a2D86B9347A2688f9bc1808A6d8917760C)

**Purpose of the multisig:** The GateSeal Committee is authorized to trigger
designated GateSeal contracts to pause selected core protocol sealable smart
contracts for a limited period. The pause right is single-use and
automatically expires on the respective GateSeal expiration date. The full
list of GateSeal contracts is provided [here](/contracts/gate-seal).

**Quorum:** 3/6

**Forum topic:**  
[Lido V2 GateSeal Committee](https://research.lido.fi/t/lido-v2-gateseal-
committee/4561)

**Snapshots:**  
[Voting for approval of new withdrawals mechanism and new modular architecture
for Node Operators set](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x629b547c688dea536a4a5c5b42274894ac068df0b0278d173b4d7a68c8c4281d)  
[Voting for renewal GateSeal for the Withdrawal Queue and Validator Exit Bus
Oracle](https://snapshot.org/#/lido-
snapshot.eth/proposal/0xa8ae592b09200c70629f3c5f4363d06dae9d8afb00c8910272319fc7fdb4e10a)  
[Extend On-Chain Voting Duration + GateSeal renewal and duration
extension](https://snapshot.box/#/s:lido-
snapshot.eth/proposal/0xa58da73cc4257837ae981d8ad861252f4cbbda7a173a577702f8f93561f57825)

**Aragon:**  
[Vote #156](https://vote.lido.fi/vote/156)  
[Vote #174](https://vote.lido.fi/vote/174)

**Contracts and Roles:**

###### GateSeal (ValidatorExitBus and TriggerableWithdrawalsGateway)
[`0xA6BC802fAa064414AA62117B4a53D27fFfF741F1`](https://etherscan.io/address/0xA6BC802fAa064414AA62117B4a53D27fFfF741F1),
GateSeal (WithdrawalQueue)
[`0x8A854C4E750CDf24f138f34A9061b2f556066912`](https://etherscan.io/address/0x8A854C4E750CDf24f138f34A9061b2f556066912)
and GateSeal (VaultHub and PredepositGuarantee (PDG))
[`0x881dAd714679A6FeaA636446A0499101375A365c`](https://etherscan.io/address/0x881dAd714679A6FeaA636446A0499101375A365c)​

  * Sealing Committee

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
ajbeal| 0x5a409567bCa7459b3aC7e6E5a3F1a3C278071b71| Sig Hash:
0x848f5174e88b653e9353f5a46c8dec871b2395a06be8b0b29c221c1ab4f43a8b5fc913c091d0389382879c49ff96750a86efd5806f7223797c31ca01868ec23c01|
<https://twitter.com/ajbeal/status/1655876306771365888?s=20>  
eboadom| 0xA39a62304d8d43B35114ad7bd1258B0E50e139b3|
<https://etherscan.io/verifySig/17877>|
<https://twitter.com/eboadom/status/1656002911854292993>  
michwill| 0xFe45baf0F18c207152A807c1b05926583CFE2e4b| Sig Hash:
0x44fc2bce69486ea826e1aaeb40878f9a8b038d5f0c8bd0ea9038fee7fca553005adfcd9d64172cacd2e7f1c11dc7e9b36c0f18916ed731e56ffa89feb95c8ae500|
<https://twitter.com/newmichwill/status/1656597340780625920?s=20>  
thedzhon| 0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/40382>|
<https://twitter.com/e330acid/status/1778451429172080726>  
George| 0x912e21CdA3D7012146da4Df33309d860a9eb0bEb|
<https://etherscan.io/verifySig/17866>|
<https://twitter.com/george_avs/status/1655919930749976578>  
kadmil| 0x9A3f38AF97b791C85c043D46a64f56f87E0283D4|
<https://etherscan.io/verifySig/17851>|
<https://twitter.com/kadmil_eth/status/1655865828544266242>  
  
## 1.2 Emergency Brakes: Ethereum​

**Address:**
[`0x73b047fe6337183A454c5217241D780a932777bD`](https://app.safe.global/settings/setup?safe=eth:0x73b047fe6337183A454c5217241D780a932777bD)

**Purpose of the multisig:** The multisig is used to disable deposits &
withdrawals for wstETH bridging to other chains (Arbitrum, Optimism, Base,
Scroll, Mantle, ZKSync, Binance Smart Chain, Mode) in case of an emergency on
Ethereum mainnet or the counterpart chain, and can pause Easy Track pipeline.

**Quorum:** 3/5

**Forum topics:**  
[Emergency Brakes MS for Easy Tracks](https://research.lido.fi/t/lip-3-easy-
track-release/1406)  
[Emergency Brakes MS for L2 (Upgrade)](https://research.lido.fi/t/emergency-
brakes-multi-sig-upgrade/2608)

**Snapshots:**  
[Release Easy Track](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x6f3b01ce0573545987665eaafe9b3410402d7d0be03ad7bf8ccc926307ae578b)  
[Emergency Brakes multisig upgrade](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x2b368b535b2024394daff218d222e260dbc4543b6d4e49aa4700cc0a9233e86a)

**Contracts and Roles** :

###### Easy Track
[`0xF0211b7660680B49De1A7E9f25C65660F0a13Fea`](https://etherscan.io/address/0xF0211b7660680B49De1A7E9f25C65660F0a13Fea)​

  * PAUSE_ROLE

###### Arbitrum L1 ERC20 Token Gateway
[`0x0F25c1DC2a9922304f2eac71DCa9B07E310e8E5a`](https://etherscan.io/address/0x0F25c1DC2a9922304f2eac71DCa9B07E310e8E5a)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### Optimism L1 ERC20 Token Bridge
[`0x76943C0D61395d8F2edF9060e1533529cAe05dE6`](https://etherscan.io/address/0x76943C0D61395d8F2edF9060e1533529cAe05dE6)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### Base L1 ERC20 Token Bridge
[`0x9de443AdC5A411E83F1878Ef24C3F52C61571e72`](https://etherscan.io/address/0x9de443AdC5A411E83F1878Ef24C3F52C61571e72)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### Mantle L1 ERC20 TokenBridge
[`0x2D001d79E5aF5F65a939781FE228B267a8Ed468B`](https://etherscan.io/address/0x2D001d79E5aF5F65a939781FE228B267a8Ed468B)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### ZKSync L1 ERC20 TokenBridge
[`0x41527B2d03844dB6b0945f25702cB958b6d55989`](https://etherscan.io/address/0x41527B2d03844dB6b0945f25702cB958b6d55989)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### Scroll L1 ERC20 TokenBridge
[`0x6625c6332c9f91f2d27c304e729b86db87a3f504`](https://etherscan.io/address/0x6625c6332c9f91f2d27c304e729b86db87a3f504)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### Mode L1 ERC20 Token Bridge
[`0xD0DeA0a3bd8E4D55170943129c025d3fe0493F2A`](https://etherscan.io/address/0xD0DeA0a3bd8E4D55170943129c025d3fe0493F2A)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

###### BSC L1 Token Bridge:​

###### NTTManager
[`0xb948a93827d68a82F6513Ad178964Da487fe2BD9`](https://etherscan.io/address/0xb948a93827d68a82F6513Ad178964Da487fe2BD9)​

  * pause capability

###### Wormhole Transceiver
[`0xA1ACC1e6edaB281Febd91E3515093F1DE81F25c0`](https://etherscan.io/address/0xA1ACC1e6edaB281Febd91E3515093F1DE81F25c0)​

  * pause capability

###### Axelar Transceiver
[`0x723AEAD29acee7E9281C32D11eA4ed0070c41B13`](https://etherscan.io/address/0x723AEAD29acee7E9281C32D11eA4ed0070c41B13)​

  * pause capability

###### Zircuit Token Bridge:
[`0x912C7271a6A3622dfb8B218eb46a6122aB046C79`](https://etherscan.io/address/0x912C7271a6A3622dfb8B218eb46a6122aB046C79)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.3 Emergency Brakes: Optimism​

**Address:**
oeth:[`0x4Cf8fE0A4c2539F7EFDD2047d8A5D46F14613088`](https://app.safe.global/settings/setup?safe=oeth:0x4Cf8fE0A4c2539F7EFDD2047d8A5D46F14613088)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on
Optimism side in case of emergency.

**Quorum:** 3/5

**Forum topics:**  
[Emergency Brakes MS for L2 (Upgrade)](https://research.lido.fi/t/emergency-
brakes-multi-sig-upgrade/2608)  
[First launches of Lido on L2](https://research.lido.fi/t/lido-on-l2-first-
launches/2786)

**Snapshot:**  
[Emergency Brakes multi-sig upgrade](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x2b368b535b2024394daff218d222e260dbc4543b6d4e49aa4700cc0a9233e86a)

**Contracts and Roles:**

###### L2 ERC20 Token Bridge
oeth:[`0x8E01013243a96601a86eb3153F0d9Fa4fbFb6957`](https://optimistic.etherscan.io/address/0x8E01013243a96601a86eb3153F0d9Fa4fbFb6957)​

  * WITHDRAWALS_DISABLE_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.4 Emergency Brakes: Arbitrum​

**Address:** arb1:
[`0xfDCf209A213a0b3C403d543F87E74FCbcA11de34`](https://app.safe.global/settings/setup?safe=arb1:0xfDCf209A213a0b3C403d543F87E74FCbcA11de34)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on
Arbitrum side in case of an emergency.

**Quorum:** 3/5

**Forum topic:** [First launches of Lido on
L2](https://research.lido.fi/t/lido-on-l2-first-launches/2786)

**Snapshot:** [Emergency Brakes multisig upgrade](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x2b368b535b2024394daff218d222e260dbc4543b6d4e49aa4700cc0a9233e86a)

**Contracts and Roles:**

###### L2 ERC20 Token Gateway arb1:
[`0x07D4692291B9E30E326fd31706f686f83f331B82`](https://arbiscan.io/address/0x07D4692291B9E30E326fd31706f686f83f331B82)​

  * WITHDRAWALS_DISABLE_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.5 Emergency Brakes: Base​

**Address:** base:
[`0x0F9A0e7071B7B21bc7a8514DA2cd251bc1FF0725`](https://app.safe.global/settings/setup?safe=base:0x0F9A0e7071B7B21bc7a8514DA2cd251bc1FF0725)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on Base
side in case of emergency.

**Quorum:** 3/5

**Forum topic:** [wstETH Deployment to Base and Ownership Acceptance by Lido
DAO](https://research.lido.fi/t/wsteth-deployment-to-base-and-ownership-
acceptance-by-lido-dao/5668)

**Snapshot:** [wstETH Deployment to Base and Ownership Acceptance by Lido
DAO](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x8b35f64fffe67f67d4aeb2de2f3351404c54cd75a08277c035fa77065b6792f4)

**Contracts and Roles:**

###### L2ERC20TokenBridge:
base:[`0xac9D11cD4D7eF6e54F14643a393F68Ca014287AB`](https://basescan.org/address/0xac9D11cD4D7eF6e54F14643a393F68Ca014287AB)​

  * WITHDRAWALS_DISABLE_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.6 Emergency Brakes: Mantle​

**Address:** mantle:
[`0xa8579D42E34398267dE16e6eeeCdb7ED0EFF953C`](https://multisig.mantle.xyz/home?safe=mantle:0xa8579D42E34398267dE16e6eeeCdb7ED0EFF953C)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on Mantle
side in case of emergency.

**Quorum:** 3/5

**Forum topic:** [wstETH Deployment on
Mantle](https://research.lido.fi/t/wsteth-deployment-on-mantle/5991)

**Snapshot:** [wstETH Deployment on Mantle](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x349fa7409a99683405e71ddebaf5068f3dee7d4e6c9e4375198c4dc10c899bb9)

**Contracts and Roles:**

###### L2ERC20TokenBridge:
mantle:[`0x9c46560D6209743968cC24150893631A39AfDe4d`](https://explorer.mantle.xyz/address/0x9c46560D6209743968cC24150893631A39AfDe4d)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.7 Emergency Brakes: ZKSync​

**Address:** zksync:
[`0x0D7F0A811978B3B62CbfF4EF6149B5909EAcfE94`](https://app.safe.global/settings/setup?safe=zksync:0x0D7F0A811978B3B62CbfF4EF6149B5909EAcfE94)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on zkSync
side in case of emergency.

**Quorum:** 3/5

**Forum topic:** [wstETH Deployment on
zkSync](https://research.lido.fi/t/wsteth-deployment-on-zksync/5701)

**Snapshot:** [wstETH Deployment on zkSync](https://snapshot.org/#/lido-
snapshot.eth/proposal/0xd6c4a71c36bef27c4b5997223bd8612fe19177b46b238e78802a4a27fd5cdc9e)

**Contracts and Roles:**

###### L2ERC20TokenBridge:
zksync:[`0xE1D6A50E7101c8f8db77352897Ee3f1AC53f782B`](https://explorer.zksync.io/address/0xE1D6A50E7101c8f8db77352897Ee3f1AC53f782B)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.8 Emergency Brakes: Scroll​

**Address:** Scroll:
[`0xF580753E334687C0d6b88EF563a258f048384Ee6`](https://safe.scroll.xyz/home?safe=scr:0xF580753E334687C0d6b88EF563a258f048384Ee6)

**Purpose of the multisig:** The multisig is used to disable deposits and/or
withdrawals for wstETH token bridge on Scroll side in case of an emergency.

**Quorum:** 3/5

**Forum topic:** [wstETH Deployment on
Scroll](https://research.lido.fi/t/wsteth-deployment-on-scroll/6603)

**Snapshot:** [Should the Lido DAO recognize the wstETH Bridge Endpoints on
Scroll as canonical?](https://snapshot.org/#/lido-
snapshot.eth/proposal/0xcdb7d84ea80d914a4abffd689ecf9bdc4bb05d47f1fdbdda8793d555381a0493)

**Contracts and Roles:**

###### L2 Lido Gateway:
Scroll:[`0x8aE8f22226B9d789A36AC81474e633f8bE2856c9`](https://scrollscan.com/address/0x8aE8f22226B9d789A36AC81474e633f8bE2856c9)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.9 Emergency Brakes: Mode​

**Address:** Mode:
[`0x244912352A639001ceCFa208cDaa7CB474c9eadE`](https://safe.optimism.io/home?safe=mode:0x244912352A639001ceCFa208cDaa7CB474c9eadE)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on Mode
side in case of emergency.

**Quorum:** 3/5

**Forum topic:** [wstETH Deployment on
Mode](https://research.lido.fi/t/wsteth-deployment-on-mode/7365)

**Snapshot:** [Should the Lido DAO recognize the wstETH Bridge Endpoints on
Mode as canonical?](https://snapshot.org/#/lido-
snapshot.eth/proposal/0x6bc51c2b07a9345a03a0bc0acb72ccc9f63879c981f3a6954164d110c5d330b2)

**Contracts and Roles:**

###### L2ERC20TokenBridge:
Mode:[`0xb8161F28a5a38cE58f155D9A96bDAc0104985FAc`](https://explorer.mode.network/address/0xb8161F28a5a38cE58f155D9A96bDAc0104985FAc)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.10 Emergency Brakes: Binance Smart Chain (BSC)​

**Address:** BSC:
[`0xC2b778fCc3FF311Cf1abBF4E53880277bfD14C8f`](https://app.safe.global/settings/setup?safe=bnb:0xC2b778fCc3FF311Cf1abBF4E53880277bfD14C8f)

**Purpose of the multisig:** The multisig is used to pause deposits and
withdrawals for wstETH token bridge on BSC side in case of emergency.

**Quorum:** 3/5

**Forum topic:** [Wormhole x Axelar | Lido Bridge: Implementation for wstETH on Binance Smart Chain](https://research.lido.fi/t/wormhole-x-axelar-lido-bridge-implementation-for-wsteth-on-bnb-chain/6012)

**Snapshot:** [Should the Lido DAO recognize the wstETH Bridge Endpoints on
Binance Smart Chain as canonical?](https://snapshot.org/#/lido-
snapshot.eth/proposal/0xcc52cdc83273b42a056cfc632889355595821a2cc9a59ba8adff66b30e9718f9)

**Contracts and Roles:**

###### NTTManager:
BSC:[`0x6981F5621691CBfE3DdD524dE71076b79F0A0278`](https://bscscan.com/address/0x6981F5621691CBfE3DdD524dE71076b79F0A0278)​

  * pause capability

###### Wormhole Transceiver:
BSC:[`0xbe3F7e06872E0dF6CD7FF35B7aa4Bb1446DC9986`](https://bscscan.com/address/0xbe3F7e06872E0dF6CD7FF35B7aa4Bb1446DC9986)​

  * pause capability

###### Axelar Transceiver:
BSC:[`0x723AEAD29acee7E9281C32D11eA4ed0070c41B13`](https://bscscan.com/address/0x723AEAD29acee7E9281C32D11eA4ed0070c41B13)​

  * pause capability

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
## 1.11 Emergency Brakes: Zircuit​

**Address:** Zircuit:
[`0x9Bff79BF7226cB5C16d0Cca9c1dc60450feE560d`](https://safe.zircuit.com/settings/setup?safe=zircuit-
mainnet:0x9Bff79BF7226cB5C16d0Cca9c1dc60450feE560d)

**Purpose of the multisig:** The multisig is used to disable deposits or
withdrawals or both deposits and withdrawals for wstETH token bridge on
Zircuit side in case of emergency.

**Quorum:** 3/5

**Forum topic:** [wstETH Deployment on
Zircuit](https://research.lido.fi/t/wsteth-deployment-to-zircuit-and-
ownership-acceptance-by-lido-dao/8602)

**Snapshot:** [Should the Lido DAO recognize the wstETH bridge endpoints on
Zircuit as canonical?](https://snapshot.org/#/lido-
snapshot.eth/proposal/0xac55c2cd8610c3b72cb769cec6b97891b5880f2f1f458eda2eb17218332cef6f)

**Contracts and Roles:**

###### L2ERC20TokenBridge:
Zircuit:[`0xF4DC271cA48446a5d2b97Ff41D39918DF8A4Eb0e`](https://explorer.zircuit.com/address/0xF4DC271cA48446a5d2b97Ff41D39918DF8A4Eb0e)​

  * WITHDRAWALS_DISABLER_ROLE
  * DEPOSITS_DISABLER_ROLE

**List of signers:**

Name| Address| Verification| Public verification  
---|---|---|---  
[psirex](https://research.lido.fi/u/psirex)|
0x2a61d3ba5030Ef471C74f612962c7367ECa3a62d| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[TheDZhon](https://research.lido.fi/u/thedzhon/)|
0x59f8d74fe49d5ebeac069e3baf07eb4b614bd5a7|
<https://etherscan.io/verifySig/23795>| <https://research.lido.fi/t/emergency-
brakes-signer-rotation/5286/2>  
[kadmil](https://research.lido.fi/u/kadmil)|
0x6f5c9B92DC47C89155930E708fBc305b55A5519A| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[ujenjt](https://research.lido.fi/u/ujenjt)|
0xdd19274b614b5ecAcf493Bc43C380ef6B8dfB56c| -|
<https://research.lido.fi/t/emergency-brakes-multi-sig-upgrade/2608>  
[folkyatina](https://research.lido.fi/u/folkyatina)|
0xCFfE0F3B089e46D8212408Ba061c425776E64322| -|
[https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw](https://twitter.com/folkyatina/status/1550112058003169284?s=20&t=9RHqr47D6r_5Vin6SrU5Qw)  
  
[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/multisigs/emergency-
brakes.md)

[PreviousHolešky](/deployed-
contracts/holesky)[NextCommittees](/multisigs/committees)

  * 1.1 GateSeal Committee
  * 1.2 Emergency Brakes: Ethereum
  * 1.3 Emergency Brakes: Optimism
  * 1.4 Emergency Brakes: Arbitrum
  * 1.5 Emergency Brakes: Base
  * 1.6 Emergency Brakes: Mantle
  * 1.7 Emergency Brakes: ZKSync
  * 1.8 Emergency Brakes: Scroll
  * 1.9 Emergency Brakes: Mode
  * 1.10 Emergency Brakes: Binance Smart Chain (BSC)
  * 1.11 Emergency Brakes: Zircuit



  * [](/)
  * Security
  * Lido Protocol Audits

On this page

# Lido Protocol Audits

## Lido on Ethereum (93 reports)​

### 03-2026 Composable Security Lido Oracle v7.1 Security Audit​

  * Total Issues: 1 (1 Fixed)
  * Info Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20Oracle%20V7_1%20Audit%20Report.pdf)
for more details.

### 03-2026 MixBytes Lido DeFi Wrapper MellowStrategyAdapter Security Audit
Report 03-2026​

  * Total Issues: 9 (7 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 2 (2 Fixed)
  * Low Issues: 7 (5 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20DeFi%20Wrapper%20MellowStrategyAdapter%20Security%20Audit%20Report%2003-2026.pdf)
for more details.

### 01-2026 Sigma Prime Lido BLS Library Security Audit​

  * Total Issues: 6 (6 Fixed)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 1 (1 Fixed)
  * Info Issues: 5 (5 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Sigma%20Prime%20-%20Lido%20BLS%20Library%20Security%20Assessment%20Report%20v2.0%20-%2001-2026.pdf)
for more details.

### 01-2026 MixBytes CSM Performance Oracle Security Audit​

  * Total Issues: 1 (1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 1 (1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20CSM%20Performance%20Oracle%20Security%20Audit%20Report%2001-26.pdf)
for more details.

### 01-2026 MixBytes Lido DeFi Wrapper Security Audit Report​

  * Total Issues: 24 (14 Fixed, 10 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 2 (1 Fixed, 1 Acknowledged)
  * Low Issues: 22 (13 Fixed, 9 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20DeFi%20Wrapper%20Security%20Audit%20Report%2001-2026.pdf)
for more details.

### 01-2026 Ackee Blockchain Vault Wrapper Report​

  * Total Issues: 14 (13 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 2 (2 Fixed)
  * Warnings: 3 (3 Fixed)
  * Info Issues: 9 (8 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Vault%20Wrapper%20Report%2001-2026.pdf)
for more details.

### 12-2025 Certora Lido V3 Security Audit​

  * Total Issues: 84 (70 Fixed, 14 Acknowledged)
  * Critical Issues: 7 (7 Fixed)
  * High Issues: 14 (14 Fixed)
  * Medium Issues: 29 (25 Fixed, 4 Acknowledged)
  * Low Issues: 21 (13 Fixed, 8 Acknowledged)
  * Info Issues: 13 (11 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Certora%20Lido%20V3%20Audit%20Report%20-%2012-2025.pdf)
for more details. The report has been updated on 01-2026 with the latest
commit taking into account the changes made to the BLS library.

### 12-2025 Certora Lido V3 Formal Verification​

  * Total Issues: 10 (6 Fixed, 4 Acknowledged)
  * Critical Issues: 1 (1 Fixed)
  * High Issues: 0
  * Medium Issues: 3 (2 Fixed, 1 Acknowledged)
  * Low Issues: 5 (3 Fixed, 2 Acknowledged)
  * Info Issues: 1 (1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Certora%20Lido%20V3%20Formal%20Verification%20Report%20-%2012-2025.pdf)
for more details.

### 12-2025 Certora Lido V3 Oracle Off-chain Security Assessment​

  * Total Issues: 16 (7 Fixed, 9 Acknowledged)
  * Critical Issues: 0
  * High Issues: 2 (2 Fixed)
  * Medium Issues: 2 (2 Fixed)
  * Low Issues: 7 (2 Fixed, 5 Acknowledged)
  * Info Issues: 5 (1 Fixed, 4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Certora%20Lido%20V3%20Oracle%20V7%20Audit%20Report%20-%2012-2025.pdf)
for more details.

### 12-2025 MixBytes Lido V3 Security Audit​

  * Total Issues: 19 (8 Fixed, 11 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Acknowledged)
  * Medium Issues: 5 (1 Fixed, 4 Acknowledged)
  * Low Issues: 13 (7 Fixed, 6 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20V3%20Security%20Audit%20Report%20-%2012-2025.pdf)
for more details. The report has been updated on 01-2026 with the latest
commit taking into account the changes made to the BLS library.

### 12-2025 MixBytes Lido V3 Easy Track Security Audit​

  * Total Issues: 4 (2 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 4 (2 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20V3%20Easy%20Track%20Security%20Audit%20Report%20-%2012-2025.pdf)
for more details. The report was updated in 01-2026 to include the latest
changes from phase 2 of the Lido V3 release, specifically for the Easy Track
stVaults-related factories.

### 12-2025 Consensys Diligence Lido V3 Security Audit​

  * Total Issues: 43 (32 Fixed, 11 Acknowledged)
  * Critical Issues: 2 (2 Fixed)
  * Major Issues: 5 (5 Fixed)
  * Medium Issues: 13 (12 Fixed, 1 Acknowledged)
  * Minor Issues: 9 (5 Fixed, 4 Acknowledged)
  * Info Issues: 14 (8 Fixed, 6 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Consensys%20Diligence%20Lido%20V3%20Security%20Audit%20-%2011-2025.pdf)
for more details. The report has been updated on 01-2026 with the latest
commit taking into account the changes made to the BLS library.

### 12-2025 Composable Security Lido V3 Oracle v7 Security Audit​

  * Total Issues: 6 (4 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Fixed)
  * Medium Issues: 2 (2 Fixed)
  * Low Issues: 0
  * Info Issues: 3 (1 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20V3%20Oracle%20V7%20Audit%20Report%20-%2012-2025.pdf)
for more details.

### 12-2025 Ackee Blockchain Stonks 2.0 Audit​

  * Total Issues: 17 (17 Fixed)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 2 (2 Fixed)
  * Warnings: 5 (5 Fixed)
  * Info Issues: 9 (9 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Stonks%202%20Audit%20Report%2012-25.pdf)
for more details.

### 12-2025 MixBytes Lido LDO Revesting Security Audit Report​

  * Total Issues: 1 (1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 1 (1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Lido%20LDO%20Revesting%20Security%20Audit%20Report%20-%2012-2025.pdf)
for more details.

### 09-2025 MixBytes Lido Triggerable Withdrawals Easy Track Security Audit​

  * Total Issues: 3
  * Low Issues: 3 (3 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20Easy%20Track%20Security%20Audit%20Report%2009-25.pdf)
for more details.

### 09-2025 MixBytes WstETH Staker Security Audit​

  * Total Issues: 0

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20WstETH%20Staker%20Security%20Audit%20Report%2009-2025.pdf)
for more details.

### 09-2025 Ackee Blockchain Lido Triggerable Withdrawals Security Audit​

  * Total Issues: 11 (9 Fixed, 1 Partially fixed, 1 Acknowledged)
  * Low Issues: 2 (2 Fixed)
  * Warning Issues: 4 (3 Fixed, 1 Acknowledged)
  * Info Issues: 5 (4 Fixed, 1 Partially fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Triggerable%20Withdrawals%20Audit%20Report%2009-25.pdf)
for more details.

### 09-2025 Composable Security Lido Oracle v6 Security Audit​

  * Total Issues: 4 (2 Fixed, 2 Acknowledged)
  * Low Issues: 2 (2 Acknowledged)
  * Info Issues: 2 (2 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20Oracle%20V6%20Audit%20Report.pdf)
for more details.

**Note:** An additional report for version **6.0.2** is ready, covering the
hotfix review.

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20Oracle%20V6_0_2%20Audit%20Report.pdf)
for more details

### 09-2025 MixBytes Easy Track CSM v2 Security Audit​

  * Total Issues: 0

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Easy%20Track%20CSM%20v2%20Security%20Audit%20Report%2009-2025.pdf)
for more details.

### 09-2025 Ackee Blockchain CSM v2 Security Audit​

  * Total Issues: 20 (10 Fixed, 10 Acknowledged)
  * High Issues: 2 (2 Fixed)
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 3 (3 Fixed)
  * Warning Issues: 10 (2 Fixed, 8 Acknowledged)
  * Info Issues: 4 (2 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Community%20Staking%20Module%20v2%20Audit%20Report%2009-2025.pdf)
for more details.

### 09-2025 Statemind Triggerable Withdrawals and CSM v2 Audit​

  * Total Issues: 26 (17 Fixed, 9 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 5 (2 Fixed, 3 Acknowledged)
  * Info Issues: 21 (15 Fixed, 6 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Triggerable%20Withdrawals%20and%20CSM%20v2%20Audit%20Report%2009-2025.pdf)
for more details.

### 08-2025 Certora Dual Governance v.1.0.1 Hotfix Review​

Lido has engaged Certora to review and verify the correctness and safety of
the Dual Governance v.1.0.1 hotfix. See full
[report](https://github.com/lidofinance/audits/blob/main/Certora%20Dual%20Governance%20v1.0.1%20Hotfix%20Review%20Report%2008-2025.pdf)
for more details.

### 08-2025 Statemind Dual Governance Escrow Fix Review and Deployment
Validation​

See
[note](https://github.com/lidofinance/audits/blob/main/Statemind%20Dual%20Governance%20Escrow%20Fix%20Review%20Report%2008-2025.pdf)
contents for more details.

### 08-2025 Composable Security Off-chain Audit of Lido Oracle v5.4.1​

A security audit for a hotfix to the Lido Oracle V5. Previous report for V5.

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20Oracle%20V5_4_1%2008-25.pdf)
for more details.

### 08-2025 Code4rena Audit of Lido Community Staking Module​

  * Total Issues: 2 (2 Acknowledged)
  * Low Issues: 2 (2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Code4rena%20CSM%20V2%20Audit%20Report%2008-2025.pdf)
for more details.

### 07-2025 MixBytes On-chain Audit of Community Staking Module (LIP-23,
LIP-25, LIP-26, LIP-27)​

An updated report for the previously audited Lido Community Staking Module
features a re-audit of the revised CS Verifier contract and deployment
verification for the redeployed contract. This contract was updated to reflect
changes introduced in LIP-27.

No additional issues were found.

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20CSM%20Security%20Audit%20Report%2007-2025.pdf)
for more details.

### 07-2025 Nethermind Lido Accounting Zk Oracle Security Review​

  * Total Issues: 9 (8 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Fixed)
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 1 (1 Fixed)
  * Info Issues: 5 (4 Fixed, 1 Acknowledged)
  * Best Practices Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/zk/Nethermind_LIDO_ACCOUNTING_ZK_ORACLE_FINAL.pdf)
for more details.

### 06-2025 Statemind Dual Governance Deployment and Voting Script Review​

See
[note](https://github.com/lidofinance/audits/blob/main/Statemind%20Dual%20Governance%20Deployment%20and%20Voting%20Script%20Review%20Report%2006-2025.pdf)
contents for more details.

### 06-2025 Composable Security Lido Oracle v5.2 Security Consultation​

After conducting a consultation, the security assessment did not identify any
vulnerabilities introduced by the introduced version that could directly
compromise the security or operational integrity of the Oracle system.

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20Oracle%20V5_2%2006-25.pdf)
for more details.

### 05-2025 MixBytes Lido RMC EasyTrack Security Audit​

  * Total Issues: 0

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20RMC%20EasyTrack%20Security%20Audit%20Report%2005-2025.pdf)
for more details.

### 04-2025 MixBytes Off-chain Audit of Lido Oracle v5​

  * Total Issues: 6 (5 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 5 (4 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20Oracle%20v5%2004-25.pdf)
for more details.

### 04-2025 Composable Security Off-chain Audit of Lido Oracle v5​

  * Total Issues: 6 (4 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 2 (2 Fixed)
  * Low Issues: 3 (1 Fixed, 2 Acknowledged)
  * Info Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Composable%20Security%20Lido%20Oracle%20v5%2004-25.pdf)
for more details.

### 04-2025 Ackee Blockchain Audit of Community Staking Module (LIP-26,
LIP-27)​

An updated report for the previously audited Lido Community Staking Module
features a re-audit of the revised CS Verifier contract and deployment
verification for the redeployed contract. This contract was updated to reflect
changes introduced in LIP-27.

No addition issues were found.

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Community%20Staking%20Module%20Report%2004-25.pdf)
for more details.

### 03-2025 Statemind GateSeal Deployment Validation Note​

See
[note](https://github.com/lidofinance/audits/blob/main/Statemind%20GateSeal%20Deployment%20Validation%2003-2025.pdf)
contents for more details.

### 02-2025 Certora Dual Governance Audit​

  * Total Issues: 6 (4 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 4 (3 Fixed, 1 Acknowledged)
  * Low Issues: 2 (1 Fixed, 1 Acknowledged)

See full
[report](https://github.com/lidofinance/audits/blob/main/Certora%20Dual%20Governance%20Audit%20Report%2002-2025.pdf)
for more details.

### 02-2025 OpenZeppelin Dual Governance Re-Audit​

  * Total Issues: 9 (4 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 3 (1 Fixed)
  * Info Issues: 6 (3 Fixed, 2 Acknowledged)

See full
[report](https://github.com/lidofinance/audits/blob/main/OpenZeppelin%20Dual%20Governance%20Re-
Audit%20Report%2002-2025.pdf) for more details.

### 02-2025 Runtime Verification Dual Governance Formal Verification​

Lido has engaged Runtime Verification to formally verify the correctness and
safety properties of the smart contracts that comprise the Lido Dual
Governance mechanism.

See full
[report](https://github.com/lidofinance/audits/blob/main/Runtime%20Verification%20Dual%20Governance%20Formal%20Verification%20Report%2002-2025.pdf)
for more details.

### 11-2024 OpenZeppelin Dual Governance Audit​

  * Total Issues: 26 (18 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 9 (5 Fixed, 1 Acknowledged)
  * Info Issues: 16 (12 Fixed, 1 Acknowledged)

See full
[report](https://github.com/lidofinance/audits/blob/main/OpenZeppelin%20Dual%20Governance%20Audit%20Report%2011-2024.pdf)
for more details.

### 10-2024 Ackee Blockchain Audit of Staking Router v2 (LIP-25)​

  * Total Issues: 7 (5 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 3 (3 Fixed)
  * Warning Issues: 2 (2 Acknowledged)
  * Info Issues: 2 (2 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Staking%20Router%20v2%20Report%2010-24.pdf)
for more details.

### 10-2024 Ackee Blockchain Audit of Community Staking Module (LIP-26)​

  * Total Issues: 39 (25 Fixed, 2 Partially fixed, 12 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 8 (5 Fixed, 3 Acknowledged)
  * Warning Issues: 16 (10 Fixed, 1 Partially fixed, 5 Acknowledged)
  * Info Issues: 14 (9 Fixed, 1 Partially fixed, 4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Community%20Staking%20Module%20Report%2010-24.pdf)
for more details.

### 10-2024 MixBytes On-chain Audit of Community Staking Module (LIP-23,
LIP-25, LIP-26)​

  * Total Issues: 41 (18 Fixed, 23 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 10 (4 Fixed, 6 Acknowledged)
  * Low Issues: 31 (14 Fixed, 17 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20CSM%20Security%20Audit%20Report%2010-24.pdf)
for more details.

### 10-2024 MixBytes Off-chain Audit of Lido Oracle v4​

  * Total Issues: 3 (2 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 3 (2 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20Oracle%20Security%20Audit%20Report%2010-24.pdf)
for more details.

### 10-2024 Statemind Dual Governance Audit​

  * Total Issues: 46 (32 Fixed, 14 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 4 (3 Fixed, 1 Acknowledged)
  * Info Issues: 42 (29 Fixed, 13 Acknowledged)

See full
[report](https://github.com/lidofinance/audits/blob/main/Statemind%20Dual%20Governance%20Audit%20Report%2010-2024.pdf)
for more details.

### 09-2024 Certora Dual Governance Draft Audit​

  * Total Issues: 23 (22 Fixed, 1 Acknowledged)
  * Critical Issues: 2 (2 Fixed)
  * High Issues: 6 (6 Fixed)
  * Medium Issues: 11 (10 Fixed, 1 Acknowledged)
  * Low Issues: 4 (4 Fixed)

See full
[report](https://github.com/lidofinance/audits/blob/main/Certora%20Dual%20Governance%20Draft%20Audit%20Report%2009-2024.pdf)
for more details.

### 07-2024 Ackee Blockchain Audit of the Simple Delegation​

  * Total Issues: 14 (6 Fixed, 8 Acknowledged)
  * High Issues: 0
  * Medium Issues: 0
  * Warning Issues: 10 (3 Fixed, 7 Acknowledged)
  * Info Issues: 4 (3 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Simple%20Delegation%20audit%20report%2007-24.pdf)
for more details.

### 07-2024 Statemind Audit of the Simple Delegation​

  * Total Issues: 6 (2 Fixed, 4 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Info Issues: 6 (2 Fixed, 4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20Simple%20Delegation%20audit%20report%2007-24.pdf)
for more details.

### 07-2024 MixBytes Sanity Checker Security Audit (LIP-23)​

  * Total Issues: 8 (4 Fixed, 4 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 8 (4 Fixed, 4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Lido%20Sanity%20Checker%20Security%20Audit%20Report.pdf)
for more details.

### 06-2024 ChainSecurity Code Assessment of the LIP-23: Rebase Check Smart
Contracts​

  * Total Issues: 3 (3 Fixed)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 2 (2 Fixed)
  * Info Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/ChainSecurity%20Code%20Assessment%20of%20LIP-23%20Negative%20Rebase%20Checks%20Smart%20Contracts%2006-24.pdf)
for more details.

### 04-2024 Statemind GateSeal Deployment Validation Note​

See
[note](https://github.com/lidofinance/audits/blob/main/Statemind%20GateSeal%20Deployment%20Validation%2004-2024.pdf)
contents for more details.

### 03-2024 Ackee Blockchain Lido Stonks Audit​

  * Total Issues: 9 (7 Fixed, 2 Acknowledged)
  * Critical: 0
  * High: 0
  * Medium: 1 (1 Fixed)
  * Warning 4 (2 Fixed, 2 Acknowledged)
  * Informational: 4 (4 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Stonks%20Audit%20Report%2003-24.pdf)
for more details.

### 01-2024 Statemind Lido Simple DVT Easy Track Factories Audit​

  * Total Issues: 10 (7 Fixed, 3 Acknowledged)
  * Critical: 0
  * High: 0
  * Medium: 0
  * Informational: 10 (7 Fixed, 3 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20Simple%20DVT%20Easy%20Track%20Factories%20Audit%20Report%2001-24.pdf)
for more details.

### 12-2023 Pessimistic Lido Stonks Audit​

This audit report covers the code up to commit
[`ad6a9e83c095f5052e404bc13585ad2c752f242f`](https://github.com/lidofinance/stonks/tree/ad6a9e83c095f5052e404bc13585ad2c752f242f).
For release version audit please go to 03-2024 Ackee Blockchain Lido Stonks
Audit.

  * Total Issues: 8 (4 Fixed, 4 Acknowledged)
  * Critical: 0
  * Medium: 2 (1 Fixed, 1 Acknowledged)
  * Low: 3 (3 Fixed)
  * Notes: 3 (3 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Pessimistic%20Lido%20Stonks%20Audit%20Report%2012-23.pdf)
for more details.

### 10-2023 Statemind Lido roles analysis​

Impact severity \ Attack feasibility| Low| Medium| High  
---|---|---|---  
Critical| 56| 5| 0  
High| 71| 1| 1  
Medium| 33| 12| 0  
Low| 0| 6| 0  
No impact| 2| 0| 0  
  
See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20roles%20analysis%2010-2023.pdf)
for more details.

### 10-2023 Oxorio Lido Easy Track Smart Contracts Security Audit (Easy Track
Factories for Stablecoins)​

  * Total Issues: 9 (5 Fixed, 4 Acknowledged)
  * Critical: 0
  * Major: 0
  * Warning: 2 (1 Fixed, 1 Acknowledged)
  * Info: 7 (4 Fixed, 3 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Oxorio%20Lido%20Easy%20Track%20Smart%20Contracts%20Security%20Audit%20Report%2010-2023.pdf)
for more details.

### 05-2023 Statemind Lido V2 Upgrade Template Audit​

  * Total Issues: 14 (7 Fixed, 7 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Informational Issues: 14 (7 Fixed, 7 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20V2%20Upgrade%20Template%20Audit%20Report%2005-2023.pdf)
for more details.

### 05-2023 Statemind Lido V2 Deployment Validation Note​

See
[note](https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20V2%20Deployment%20Validation%2005-2023.pdf)
contents for more details.

### 05-2023 Hexens Lido V2 Oracle Security Review​

  * Total Issues: 2 (2 Fixed)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 1 (1 Fixed)
  * Informational Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Hexens%20Lido%20V2%20Oracle%20Security%20Review%20Report%2005-23.pdf)
for more details.

### 05-2023 Oxorio Lido V2 On-chain Audit​

  * Total Issues: 43 (4 Fixed, 37 Acknowledged, 2 No Issue)
  * Critical: 0
  * Major: 7 (7 Acknowledged)
  * Warning: 17 (16 Acknowledged, 1 No Issue)
  * Info: 19 (4 Fixed, 14 Acknowledged, 1 No Issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/Oxorio%20Lido%20V2%20On-
chain%20Audit%20Report%2006-23.pdf) for more details.

### 05-2023 Oxorio Lido V2 Off-chain Audit​

  * Total Issues: 11 (1 Fixed, 10 Acknowledged)
  * Critical: 0
  * Major: 5 (5 Acknowledged)
  * Warning: 2 (1 Fixed, 1 Acknowledged)
  * Info: 4 (4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Oxorio%20Lido%20V2%20Off-
chain%20Audit%20Report%2006-23.pdf) for more details.

### 04-2023 Hexens Lido V2 Smart Contract Audit​

  * Total Issues: 25 (16 Fixed, 9 Acknowledged)
  * Critical Issues: 1 (1 Fixed)
  * High Issues: 3 (3 Fixed)
  * Medium Issues: 5 (4 Fixed, 1 Acknowledged)
  * Low Issues: 11 (6 Fixed, 5 Acknowledged)
  * Informational Issues: 5 (2 Fixed, 3 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Hexens%20Lido%20V2%20Smart%20Contract%20Audit%20Report%2004-23.pdf)
for more details.

### 04-2023 MixBytes Camp Lido V2 Contest​

  * Total Issues: 17 (8 Fixed, 9 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Acknowledged)
  * Medium Issues: 3 (1 Fixed, 2 Acknowledged)
  * Low Issues: 13 (7 Fixed, 6 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Camp%20Lido%20V2%20Contest%20Report%2004-23.pdf)
for more details.

### 04-2023 Statemind GateSeals Audit​

  * Total Issues: 4 (3 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Fixed)
  * Medium Issues: 0
  * Low Issues: 0
  * Informational Issues: 3 (2 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20GateSeals%20Audit%20Report%2004-2023.pdf)
for more details.

### 04-2023 Certora Lido V2 Audit​

  * Total Issues: 23 (14 Fixed, 9 Acknowledged)
  * Critical Issues: 2 (2 Fixed)
  * High Issues: 5 (1 Fixed, 4 Acknowledged)
  * Medium Issues: 10 (7 Fixed, 3 Acknowledged)
  * Low Issues: 5 (3 Fixed, 2 Acknowledged)
  * Informational Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Certora%20Lido%20V2%20Audit%20Report%2004-23.pdf)
for more details.

### 04-2023 Statemind Lido V2 Audit​

  * Total Issues: 120 (75 Fixed, 45 Acknowledged)
  * Critical Issues: 2 (1 Fixed, 1 Acknowledged)
  * High Issues: 8 (6 Fixed, 2 Acknowledged)
  * Medium Issues: 17 (9 Fixed, 8 Acknowledged)
  * Informational Issues: 93 (59 Fixed, 34 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20V2%20Audit%20Report%2004-23.pdf)
for more details.

### 03-2023 Sigma Prime dc4bc Security Audit​

  * Total Issues: 8 (8 Fixed)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 3 (3 Fixed)
  * Low Issues: 2 (2 Fixed)
  * Informational Issues: 3 (3 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/Sigma%20Prime%20-%20Lido%20-%20dc4bc%20Security%20Assessment%20Report%20-%20v2.2%2003-2023.pdf)
for more details. The report had been updated on 14 March 2023 with the build
hashes of 4.1.0 release.

### 02-2023 ChainSecurity Lido Staking Router Audit Report​

  * Total Issues: 13 (10 Fixed, 3 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Fixed)
  * Medium Issues: 2 (2 Fixed)
  * Informational Issues: 10 (7 Fixed, 3 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/ChainSecurity%20Lido%20Staking%20Router%20audit%20report%2002-23.pdf)
for more details.

### 01-2023 Statemind TRP Vesting Escrow Audit Report​

  * Total Issues: 5 (4 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Informational Issues: (4 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20TRP%20Vesting%20Escrow%20Audit%20Report%2001-2023.pdf)
for more details.

### 09-2022 Statemind MEV-Boost relay allowlist Security Audit Report​

  * Total Issues: 7 (5 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Informational Issues: 7 (5 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20MEV-
Boost%20relay%20allowlist%20Security%20Audit%20Report%2009-2022.pdf) for more
details.

### 09-2022 Statemind Insurance Fund Audit Report​

  * Total Issues: 4 (1 Fixed, 3 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Informational Issues: 4 (1 Fixed, 3 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Insurance%20Fund%20Audit%20Report%2009-2022.pdf)
for more details.

### 09-2022 Statemind Easy Track Payment Processor with limits​

  * Total Issues: 9 (9 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Acknowledged)
  * Medium Issues: 0
  * Informational Issues: 8 (8 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Statemind%20Easy%20Track%20Payment%20Processor%20with%20limits%2009-2022.pdf)
for more details.

### 08-2022 ChainSecurity Code Assessment of the Lido Smart Contracts Audit
Report​

  * Total Issues: 9 (4 Risk accepted, 5 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 9 (4 Risk accepted, 5 Acknowledged)
  * Notes: 2 (Highlights)

See [full
report](https://github.com/lidofinance/audits/blob/main/ChainSecurity%20Code%20Assessment%20of%20the%20Lido%20Smart%20Contracts%20Report%2008-22.pdf)
for more details.

### 08-2022 MixBytes Lido Protocol Security Auditor's Note On The Deployed
Code Compliance​

See
[note](https://github.com/lidofinance/audits/blob/main/MixBytes%20Note%20on%20Deployed%20Code%20Compliance%2008-22.pdf)
contents for more details.

### 06-2022 MixBytes Lido Two-Phase Voting Security Audit Report​

  * Total Issues: 10 (7 Fixed, 3 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 1 (1 Acknowledged)
  * Low Issues: 9 (7 Fixed, 2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20Two-
Phase%20Voting%20Security%20Audit%20Report%2006-2022.pdf) for more details.

### 05-2022 Oxorio Jumpgate Smart Contracts Security Audit Report​

  * Total Issues: 12 (11 Fixed, 1 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 1 (1 Fixed)
  * Warning Issues: 2 (2 Fixed)
  * Comment Risk Issues: 9 (8 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/Oxorio%20Jumpgate%20Smart%20Contracts%20Security%20Audit%20Report%2005-2022.pdf)
for more details.

### 05-2022 MixBytes Lido Protocol Security Audit Report​

  * Total Issues: 15 (13 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Fixed)
  * Medium Issues: 7 (6 Fixed, 1 Acknowledged)
  * Low Issues: 7 (6 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido_Protocol_Security_Audit_Report%2005-2022.pdf)
for more details.

### 02-2022 MixBytes AAVE stETH integration Security Audit Report​

  * Total Issues: 11 (3 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 1 (1 Fixed)
  * Warning Issues: 5 (2 Acknowledged, 3 Fixed)
  * Comment Risk Issues: 5 (1 Acknowledged, 4 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20AAVE%20stETH%20integration%20Security%20Audit%20Report%2002-22.pdf)
for more details.

### 02-2022 MixBytes In-protocol Coverage Security Audit Report​

  * Total Issues: 3 (3 Fixed)
  * Critical Issues: 1 (1 Fixed)
  * Major Issues: 0
  * Warning Issues: 1 (1 Fixed)
  * Comment Risk Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20In-
protocol%20Coverage%20Security%20Audit%20Report%2002-2022.pdf) for more
details.

### 02-2022 MixBytes Deposit Security Module Security Audit Report​

  * Total Issues: 22 (17 Fixed, 5 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 2 (2 Fixed)
  * Warning Issues: 13 (5 Acknowledged, 8 Fixed)
  * Comment Risk Issues: 7 (7 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Deposit%20Security%20Module%20Security%20Audit%20Report%2002-2022.pdf)
for more details.

### 01-2022 MixBytes bETH Vault Security Audit Report​

bETH Vault was re-audited by MixBytes to incorporate the changes made for the
vault to work with Wormhole bridge instead of the Shuttle bridge.

  * Total Issues: 5 (3 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 1 (1 Acknowledged)
  * Warning Issues: 4 (4 Acknowledged)
  * Comment Risk Issues: 2 (2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20bETH%20Vault%20Security%20Audit%20Report%2001-2022.pdf)
for more details.

### 10-2021 MixBytes Aragon Voting Security Audit​

The version of the [Aragon Voting smart
contract](https://github.com/lidofinance/aragon-
apps/blob/8c46da8704d0011c42ece2896dbf4aeee069b84a/apps/voting/contracts/Voting.sol)
with support of the voting time change.

  * Total Issues: 9 (9 Acknowledged)
  * Critical Issues: 0 (0 Fixed)
  * Major Issues: 1 (1 Acknowledged)
  * Warning Issues: 4 (4 Acknowledged)
  * Comment Risk Issues: 4 (4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Aragon%20Voting%20Security%20Audit%20Report%2010-2021.pdf)
for more details.

### 10-2021 Sigma Prime Easy Track Smart Contract Security Review​

The testing team identified a total of nine (9) issues during this assessment,
of which:

  * One (1) is classified as high risk (1 resolved),
  * Three (3) are classified as low risk (3 resolved),
  * Five (5) are classified as informational (3 resolved, 2 closed).

See [full
report](https://github.com/lidofinance/audits/blob/main/Sigma%20Prime%20-%20Lido%20Easy%20Track%20Smart%20Contract%20Security%20Review%20Report%20v2.0%2010-2021.pdf)
for more details.

### 09-2021 MixBytes wstETH Security Audit​

  * Total Issues: 5 (3 Acknowledged, 2 No Issue)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 5 (3 Acknowledged, 2 No Issue)
  * Comment Risk Issues: 0

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20wstETH%20Security%20Audit%20Report%2009-2021.pdf)
for more details.

### 09-2021 MixBytes Easy Track Security Audit​

  * Total Issues: 3 (2 Fixed, 1 No Issue)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 2 (2 Fixed)
  * Comment Risk Issues: 1 (1 No Issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Easy%20Track%20Security%20Audit%20Report%2009-2021.pdf)
for more details.

### 09-2021 MixBytes 1inch Rewards Manager Security Audit​

  * Total Issues: 4 (4 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 2 (2 Acknowledged)
  * Comment Risk Issues: 2 (2 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%201inch%20Rewards%20Manager%20Security%20Audit%20Report%2009-21.pdf)
for more details.

### 08-2021 MixBytes bETH Vault Security Audit​

bETH Vault was re-audited by MixBytes to incorporate the changes made since
the previous audit.

  * Total Issues: 0
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 0
  * Comment Risk Issues: 0

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20bETH%20Vault%20Security%20Audit%20Report%2008-2021.pdf)
for more details.

### 07-2021 MixBytes bETH Vault Security Audit​

  * Total Issues: 5 (3 Fixed, 2 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 1 (1 Acknowledged)
  * Comment Risk Issues: 4 (3 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20bETH%20Vault%20Security%20Audit%20Report%2007-2021.pdf)
for more details.

### 06-2021 MixBytes stETH Price Feed Security Audit​

  * Total Issues: 10 (3 Fixed, 6 No issue, 1 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 4 (1 Fixed, 2 No issue, 1 Acknowledged)
  * Comment Risk Issues: 6 (2 Fixed, 4 No issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20stETH%20Price%20Feed%20Security%20Audit%20Report%2006-2021.pdf)
for more details.

### 05-2021 MixBytes Audit: stETH price oracle​

  * Total Issues: 7 (4 Fixed, 1 No issue, 2 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 2 (1 Fixed, 1 Acknowledged)
  * Comment Risk Issues: 5 (3 Fixed, 1 No issue, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20stETH%20price%20oracle%20Security%20Audit%20Report%2005-2021.pdf)
for more details.

### 05-2021 MixBytes Audit: Withdrawals Manager Proxy and Stub​

  * Total Issues: 1 (1 Fixed)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 0
  * Comment Risk Issues: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20Withdrawals%20Manager%20Stub%20Security%20Audit%20Report%2005-2021.pdf)
for more details.

### 04-2021 MixBytes Audit: ETH2 Oracle​

  * Total Issues: 7 (1 Fixed, 6 No issue)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 4 (4 No issue)
  * Comment Risk Issues: 3 (1 Fixed, 2 No issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/MixBytes%20ETH2%20Oracle%20Security%20Audit%20Report%2004-2021.pdf)
for more details.

### 12-2020 Sigma Prime Security Assessment​

The testing team identified a total of eighteen (18) issues during this
assessment, of which:

  * Five (5) are classified as medium risk (4 resolved, 1 closed),
  * Eight (8) are classified as low risk (4 resolved, 3 closed, 1 open),
  * Five (5) are classified as informational (2 resolved, 3 closed).

See [full
report](https://github.com/lidofinance/audits/blob/main/Sigma%20Prime%20-%20Lido%20Finance%20Security%20Assessment%20Report%20v2.1.pdf)
for more details.

### 12-2020 Quantstamp Audit​

  * Total Issues: 14 (7 Resolved)
  * High Risk Issues: 0 (0 Resolved)
  * Medium Risk Issues: 1 (0 Resolved)
  * Low Risk Issues: 4 (3 Resolved)
  * Informational Risk Issues: 2 (2 Resolved)
  * Undetermined Risk Issues: 7 (2 Resolved)

See [full
report](https://github.com/lidofinance/audits/blob/main/QSP%20Lido%20Report%2012-2020.pdf)
for more details.

## Lido Multichain audit reports (18 reports)​

### 04-2025 MixBytes wstETH on Lisk Verification​

The deployed contracts are verified in accordance to the
[proposal](https://research.lido.fi/t/temperature-check-wsteth-deployment-to-
lisk-and-ownership-acceptance-by-lido-nec/6669/5)

See [full report](https://github.com/lidofinance/audits/blob/main/L2/wstETH-
on-Lisk-2025-04-MixBytes-deployment-verification.pdf) for more details.

### 02-2025 MixBytes stETH on Unichain Verification​

The deployed contracts are verified against the [stETH on
Optimism](https://docs.lido.fi/deployed-contracts/#optimism) deployment.

See [full report](https://github.com/lidofinance/audits/blob/main/L2/stETH-on-
Unichain-2025-02-MixBytes-deployment-verification.pdf) for more details.

### 01-2025 MixBytes stETH on Soneium Verification​

The deployed contracts are verified against the [stETH on
Optimism](https://docs.lido.fi/deployed-contracts/#optimism) deployment.

See [full report](https://github.com/lidofinance/audits/blob/main/L2/stETH-on-
Soneium-2025-01-MixBytes-deployment-verification.pdf) for more details.

### 11-2024 Nethermind Security wstETH on Starknet Deployment Verification​

The deployed contracts are verified in accordance to the
[proposal](https://research.lido.fi/t/wsteth-deployment-on-starknet/6335/9)

See the [full
report](https://github.com/lidofinance/audits/blob/main/L2/Starknet-2024-11-14-deployment-
verification.pdf) for more details.

### 10-2024 Quantstamp wstETH on Zircuit Verification​

The deployed contracts are verified against the [wstETH on
Optimism](https://github.com/lidofinance/lido-l2) and [Governance crosschain
bridges](https://github.com/lidofinance/governance-crosschain-bridges)
references together with the [proposed setup](https://docs.lido.fi/token-
guides/wsteth-bridging-guide#the-proposed-configuration) initialization.

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Zircuit_2024-10-02-Quantstamp-
wstETH-deployment-verification.pdf) for more details.

### 08-2024 Oxorio wstETH on BNB Verification​

The deployed contracts are verified in accordance to the
[proposal](https://research.lido.fi/t/wormhole-x-axelar-lido-bridge-
implementation-for-wsteth-on-bnb-chain/6012)

See full [initial](https://github.com/lidofinance/audits/blob/main/bsc/Lido-
wstETH-on-BNB-Deployment-Verification-Report.pdf) and
[remediated](https://github.com/lidofinance/audits/blob/main/bsc/Lido-wstETH-
on-BNB-Deployment-Verification-Report-remediated.pdf) reports for more
details.

### 07-2024 Cantina wstETH on Mode Verification​

The deployed contracts are verified against the [wstETH on
Base](https://docs.lido.fi/deployed-contracts/#base) deployment.

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Mode-2024-07-18-Cantina-
wstETH-deployment-verification.pdf) for more details.

### 07-2024 MixBytes Lido a.DI Audit​

  * Total Issues: 13 (13 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 2 (2 Acknowledged)
  * Low Issues: 11 (11 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/bsc/MixBytes%20Lido%20a.DI%20Security%20Audit%20Report%2007-2024.pdf)
for more details.

### 06-2024 Ackee Blockchain stETH on Optimism Audit​

  * Total Issues: 15 (10 Fixed, 5 Acknowledged)
  * Critical Issues: 0
  * High Issues: 0
  * Medium Issues: 0
  * Low Issues: 2 (2 Fixed)
  * Warning Issues: 8 (4 Fixed, 4 Acknowledged)
  * Info Issues: 5 (4 Fixed, 1 Acknowledged)

See [full report](https://github.com/lidofinance/audits/blob/main/L2/stETH-on-
Optimism-2024-06-Ackee-Blockchain-Audit-report.pdf) for more details.

### 06-2024 MixBytes stETH on Optimism Audit​

  * Total Issues: 20 (15 Fixed, 5 Acknowledged)
  * Critical Issues: 0
  * High Issues: 1 (1 Fixed)
  * Medium Issues: 1 (1 Fixed)
  * Low Issues: 18 (13 Fixed, 5 Acknowledged)

See [full report](https://github.com/lidofinance/audits/blob/main/L2/stETH-on-
Optimism-2024-06-MixBytes-Audit-Report.pdf) for more details.

### 01-2024 Zellic Scroll Lido Gateway Audit​

  * Total Issues: 1 (1 No Issue)
  * Info Issues: 1 (1 No Issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Scroll-2024-01-Lido-
Gateway-Zellic-Audit-Report.pdf) for more details.

### 12-2023 Diligence Linea Custom Bridged Token Audit​

  * Total Issues: 0

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Lidea-2023-12-Diligence-
Custom-Bridged-Token-Audit-Report.pdf) for more details.

### 12-2023 OpenZeppelin Linea Bridge Audit​

> NB: the most of the contracts and issues are related not to wstETH bridge
> but to the entire Linea L2 system.

  * Total Issues: 33 (20 Fixed, 3 Partially fixed)
  * Critical Issues: 1 (1 Fixed)
  * High Issues: 3 (1 Fixed, 2 Acknowledged)
  * Medium Issues: 1 (1 Resolved)
  * Low Issues: 9 (4 Fixed, 1 Partially fixed, 4 Acknowledged)
  * Info Issues: 19 (13 Fixed, 2 Partially fixed, 4 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Linea-2023-12-OpenZeppelin-
Bridge-Audit-Report.pdf) for more details.

### 10-2023 Cantina zkSync Lido Bridge Audit​

  * Total Issues: 22 (15 Fixed, 3 Acknowledged, 4 No issue)
  * Critical Issues: 1 (1 Fixed)
  * High Issues: 0
  * Medium Issues: 5 (3 Fixed, 2 No Issue)
  * Low Issues: 8 (4 Fixed, 2 No Issue, 2 Acknowledged)
  * Info Issues: 8 (7 Fixed, 1 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/zkSync-2023-10-Cantina-
Audit-Report.pdf) for more details.

### 10-2023 Diligence Linea Cross‐Chain Governance Executor Audit​

  * Total Issues: 1 (1 Fixed)
  * Informational: 1 (1 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Linea-2023-10-Diligence-
Cross-Chain-Governance-Executor-Audit-Report.pdf) for more details.

### 09-2023 Verilog Mantle L2 ERC20 Token Bridge Audit​

  * Total Issues: 5 (3 Fixed, 2 Acknowledged)
  * High: 0
  * Medium: 0
  * Low: 2 (2 Acknowledged)
  * Informational: 3 (3 Fixed)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Mantle-2023-09-Verilog-L2-ERC20-Token-
Bridge-Audit-Report.pdf) for more details.

### 08-2022 Oxorio Governance Crosschain Bridges Smart Contracts Security
Audit​

  * Total Issues: 8 (8 Acknowledged)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 2 (2 Acknowledged)
  * Info Issues: 6 (6 Acknowledged)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Governance-
Crosschain-Bridges-2022-08-Oxorio-Audit%20Report.pdf) for more details.

### 07-2022 Oxorio Lido L2 Smart Contracts Security Audit​

  * Total Issues: 9 (6 Fixed, 2 Acknowledged, 1 No Issue)
  * Critical Issues: 1 (1 Acknowledged)
  * Major Issues: 1 (1 Fixed)
  * Warning Issues: 1 (1 Fixed)
  * Info Issues: 6 (4 Fixed, 1 Acknowledged, 1 No Issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/L2/Lido-L2-2022-07-Oxorio-
Smart-Contracts-Security-Audit-Report.pdf) for more details.

## Lido on Polygon PoS (2 reports)​

### 08-2022 Oxorio Lido on Polygon V2​

  * Total Issues: 107 (61 Fixed, 11 Acknowledged, 35 No Issue)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 14 (12 Fixed, 2 No Issue)
  * Info Issues: 93 (49 Fixed, 11 Acknowledged, 33 No Issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/polygon/Oxorio%20Lido%20on%20Polygon%20V2%2008-2022.pdf)
for more details.

### 04-2022 Lido On Polygon Smart Contracts Security Audit for PR#69​

  * Total Issues: 9 (4 Fixed, 1 Acknowledged, 1 No Issue)
  * Critical Issues: 0
  * Major Issues: 0
  * Warning Issues: 0
  * Info Issues: 9 (4 Fixed, 1 Acknowledged, 1 No Issue)

See [full
report](https://github.com/lidofinance/audits/blob/main/polygon/Oxorio%20Lido%20on%20Polygon%20pr69%20report%2004-2022.pdf)
for more details.

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/security/audits.md)

[PreviousBug Bounties with Immunefi](/security/bugbounty)[NextSafe
Harbor](/security/safeharbor)

  * Lido on Ethereum (93 reports)
    * 03-2026 Composable Security Lido Oracle v7.1 Security Audit
    * 03-2026 MixBytes Lido DeFi Wrapper MellowStrategyAdapter Security Audit Report 03-2026
    * 01-2026 Sigma Prime Lido BLS Library Security Audit
    * 01-2026 MixBytes CSM Performance Oracle Security Audit
    * 01-2026 MixBytes Lido DeFi Wrapper Security Audit Report
    * 01-2026 Ackee Blockchain Vault Wrapper Report
    * 12-2025 Certora Lido V3 Security Audit
    * 12-2025 Certora Lido V3 Formal Verification
    * 12-2025 Certora Lido V3 Oracle Off-chain Security Assessment
    * 12-2025 MixBytes Lido V3 Security Audit
    * 12-2025 MixBytes Lido V3 Easy Track Security Audit
    * 12-2025 Consensys Diligence Lido V3 Security Audit
    * 12-2025 Composable Security Lido V3 Oracle v7 Security Audit
    * 12-2025 Ackee Blockchain Stonks 2.0 Audit
    * 12-2025 MixBytes Lido LDO Revesting Security Audit Report
    * 09-2025 MixBytes Lido Triggerable Withdrawals Easy Track Security Audit
    * 09-2025 MixBytes WstETH Staker Security Audit
    * 09-2025 Ackee Blockchain Lido Triggerable Withdrawals Security Audit
    * 09-2025 Composable Security Lido Oracle v6 Security Audit
    * 09-2025 MixBytes Easy Track CSM v2 Security Audit
    * 09-2025 Ackee Blockchain CSM v2 Security Audit
    * 09-2025 Statemind Triggerable Withdrawals and CSM v2 Audit
    * 08-2025 Certora Dual Governance v.1.0.1 Hotfix Review
    * 08-2025 Statemind Dual Governance Escrow Fix Review and Deployment Validation
    * 08-2025 Composable Security Off-chain Audit of Lido Oracle v5.4.1
    * 08-2025 Code4rena Audit of Lido Community Staking Module
    * 07-2025 MixBytes On-chain Audit of Community Staking Module (LIP-23, LIP-25, LIP-26, LIP-27)
    * 07-2025 Nethermind Lido Accounting Zk Oracle Security Review
    * 06-2025 Statemind Dual Governance Deployment and Voting Script Review
    * 06-2025 Composable Security Lido Oracle v5.2 Security Consultation
    * 05-2025 MixBytes Lido RMC EasyTrack Security Audit
    * 04-2025 MixBytes Off-chain Audit of Lido Oracle v5
    * 04-2025 Composable Security Off-chain Audit of Lido Oracle v5
    * 04-2025 Ackee Blockchain Audit of Community Staking Module (LIP-26, LIP-27)
    * 03-2025 Statemind GateSeal Deployment Validation Note
    * 02-2025 Certora Dual Governance Audit
    * 02-2025 OpenZeppelin Dual Governance Re-Audit
    * 02-2025 Runtime Verification Dual Governance Formal Verification
    * 11-2024 OpenZeppelin Dual Governance Audit
    * 10-2024 Ackee Blockchain Audit of Staking Router v2 (LIP-25)
    * 10-2024 Ackee Blockchain Audit of Community Staking Module (LIP-26)
    * 10-2024 MixBytes On-chain Audit of Community Staking Module (LIP-23, LIP-25, LIP-26)
    * 10-2024 MixBytes Off-chain Audit of Lido Oracle v4
    * 10-2024 Statemind Dual Governance Audit
    * 09-2024 Certora Dual Governance Draft Audit
    * 07-2024 Ackee Blockchain Audit of the Simple Delegation
    * 07-2024 Statemind Audit of the Simple Delegation
    * 07-2024 MixBytes Sanity Checker Security Audit (LIP-23)
    * 06-2024 ChainSecurity Code Assessment of the LIP-23: Rebase Check Smart Contracts
    * 04-2024 Statemind GateSeal Deployment Validation Note
    * 03-2024 Ackee Blockchain Lido Stonks Audit
    * 01-2024 Statemind Lido Simple DVT Easy Track Factories Audit
    * 12-2023 Pessimistic Lido Stonks Audit
    * 10-2023 Statemind Lido roles analysis
    * 10-2023 Oxorio Lido Easy Track Smart Contracts Security Audit (Easy Track Factories for Stablecoins)
    * 05-2023 Statemind Lido V2 Upgrade Template Audit
    * 05-2023 Statemind Lido V2 Deployment Validation Note
    * 05-2023 Hexens Lido V2 Oracle Security Review
    * 05-2023 Oxorio Lido V2 On-chain Audit
    * 05-2023 Oxorio Lido V2 Off-chain Audit
    * 04-2023 Hexens Lido V2 Smart Contract Audit
    * 04-2023 MixBytes Camp Lido V2 Contest
    * 04-2023 Statemind GateSeals Audit
    * 04-2023 Certora Lido V2 Audit
    * 04-2023 Statemind Lido V2 Audit
    * 03-2023 Sigma Prime dc4bc Security Audit
    * 02-2023 ChainSecurity Lido Staking Router Audit Report
    * 01-2023 Statemind TRP Vesting Escrow Audit Report
    * 09-2022 Statemind MEV-Boost relay allowlist Security Audit Report
    * 09-2022 Statemind Insurance Fund Audit Report
    * 09-2022 Statemind Easy Track Payment Processor with limits
    * 08-2022 ChainSecurity Code Assessment of the Lido Smart Contracts Audit Report
    * 08-2022 MixBytes Lido Protocol Security Auditor's Note On The Deployed Code Compliance
    * 06-2022 MixBytes Lido Two-Phase Voting Security Audit Report
    * 05-2022 Oxorio Jumpgate Smart Contracts Security Audit Report
    * 05-2022 MixBytes Lido Protocol Security Audit Report
    * 02-2022 MixBytes AAVE stETH integration Security Audit Report
    * 02-2022 MixBytes In-protocol Coverage Security Audit Report
    * 02-2022 MixBytes Deposit Security Module Security Audit Report
    * 01-2022 MixBytes bETH Vault Security Audit Report
    * 10-2021 MixBytes Aragon Voting Security Audit
    * 10-2021 Sigma Prime Easy Track Smart Contract Security Review
    * 09-2021 MixBytes wstETH Security Audit
    * 09-2021 MixBytes Easy Track Security Audit
    * 09-2021 MixBytes 1inch Rewards Manager Security Audit
    * 08-2021 MixBytes bETH Vault Security Audit
    * 07-2021 MixBytes bETH Vault Security Audit
    * 06-2021 MixBytes stETH Price Feed Security Audit
    * 05-2021 MixBytes Audit: stETH price oracle
    * 05-2021 MixBytes Audit: Withdrawals Manager Proxy and Stub
    * 04-2021 MixBytes Audit: ETH2 Oracle
    * 12-2020 Sigma Prime Security Assessment
    * 12-2020 Quantstamp Audit
  * Lido Multichain audit reports (18 reports)
    * 04-2025 MixBytes wstETH on Lisk Verification
    * 02-2025 MixBytes stETH on Unichain Verification
    * 01-2025 MixBytes stETH on Soneium Verification
    * 11-2024 Nethermind Security wstETH on Starknet Deployment Verification
    * 10-2024 Quantstamp wstETH on Zircuit Verification
    * 08-2024 Oxorio wstETH on BNB Verification
    * 07-2024 Cantina wstETH on Mode Verification
    * 07-2024 MixBytes Lido a.DI Audit
    * 06-2024 Ackee Blockchain stETH on Optimism Audit
    * 06-2024 MixBytes stETH on Optimism Audit
    * 01-2024 Zellic Scroll Lido Gateway Audit
    * 12-2023 Diligence Linea Custom Bridged Token Audit
    * 12-2023 OpenZeppelin Linea Bridge Audit
    * 10-2023 Cantina zkSync Lido Bridge Audit
    * 10-2023 Diligence Linea Cross‐Chain Governance Executor Audit
    * 09-2023 Verilog Mantle L2 ERC20 Token Bridge Audit
    * 08-2022 Oxorio Governance Crosschain Bridges Smart Contracts Security Audit
    * 07-2022 Oxorio Lido L2 Smart Contracts Security Audit
  * Lido on Polygon PoS (2 reports)
    * 08-2022 Oxorio Lido on Polygon V2
    * 04-2022 Lido On Polygon Smart Contracts Security Audit for PR#69



  * [](/)
  * Lido DAO

On this page

# Lido DAO

The Lido DAO is a Decentralised Autonomous Organisation that manages the
liquid staking protocols by deciding on key parameters (e.g., setting fees,
assigning node operators and oracles, etc.) through the voting power of
governance token (`LDO`) holders. Also, the DAO will accumulate service fees
and spend them on research, development, liquidity mining incentives and
protocol upgrades.

## Why DAO?​

The DAO is the logical compromise between full centralization and
decentralisation, which allows the deployment of competitive products without
full centralization and custody on the exchanges. We do not believe that it is
possible to make a liquid staking protocol that is completely trustless in the
foreseeable future. A DAO is an optimal structure for launching Lido as:

  * DAO is essentially a decentralised entity, which is enabling a focus on community and might offer a more socially-conscious structure and consequent decision-making;
  * DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury.
  * And other management activities as well if there is a technical ability

The DAO will accumulate service fees from Lido, which is funnelled into the
insurance and development funds, distributed by the DAO.

## Functions​

Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its
efficiency and stability. The Lido DAO should do the following:

  * Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO’s goals
  * Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules
  * Approve LEGO grants to support different research and so initiatives protocol guilds
  * Payments to full-time contributors and other operational duties
  * Bug bounty program, respond to emergency
  * Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.

## Governance​

The `LDO` token governs all Lido DAO governance and network decisions to
ensure its prolonged stability and decentralised decision-making to facilitate
the growth of fair, and transparent liquid staking. The `LDO` contract address
-
[`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32).

> 📝 For more detailed information about governance, please, check out the
> [Governance](https://lido.fi/governance) page.

To have a vote in the Lido DAO, and to contribute to the determination of any
of the topics outlined above, one must hold the `LDO` governance token.
Holding `LDO` gives DAO members a vote in the future of Lido, allowing each
DAO member to have a personal say in the community. `LDO` voting weight is
proportional to the amount of `LDO` a voter holds. The more LDO on a user’s
address, the greater the decision-making power the voter gets. The exact
mechanism of `LDO` voting can be upgraded just like the other DAO
applications.

> 📝 If you have any initiatives you think will benefit the Lido protocol,
> share your thoughts in our [governance forum](https://research.lido.fi).

## Software​

The Lido DAO is an [Aragon](https://aragon.org/dao) organization. Since Aragon
provides a full end-to-end framework to build DAOs, we use its standard tools.

> 📝 The governance process only takes place within the Ethereum network. For
> other networks, this process is implemented through committee and multisig
> (we need a multisig list).

While the Aragon application is a powerful tool for DAO governance due to the
fact that it is both transparent and reliable, it is ill-suited to manage
routine operations that either have strong token-holder support and/or are
only relevant to a subsection of the DAO (e.g. the financial operations team).
For that reason, [Easy Track](https://easytrack.lido.fi/) is developed as an
efficient mechanism to assist with routine and uncontentious governance
proposals for the Lido DAO. Importantly, flexibility, and scalability is all
paramount concerns throughout the development of Easy Track, with extensive
measures taken to ensure that safety has not been compromised for convenience.

The novel Easy Track motions is not only reducing voter fatigue and on-chain
gas costs for token-holders, but is also facilitating the growth of the DAO by
providing greater autonomy to the sub-committees and node operators within the
organisation.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lido-
dao.md)

[Previous📘 Lido V3 Technical Paper](/lido-v3-whitepaper)[NextLido Improvement
Proposals](/lips)

  * Why DAO?
  * Functions
  * Governance
  * Software



  * [](/)
  * Lido Improvement Proposals

On this page

# Lido Improvement Proposals

Lido Improvement Proposals (LIPs) describe standards for the Lido platform,
including core protocol specifications, client APIs, and contract standards.

More details on the contribution process and LIPs statuses can be found
[here](https://github.com/lidofinance/lido-improvement-proposals).

## WIP​

LIP #| Title| Author| Discussions‑to  
---|---|---|---  
[0](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-0.md)| LIP Purpose and Guidelines| Lidos
Community| [Link](https://research.lido.fi/t/lido-improvement-proposal-
process/16)  
  
## Implemented​

LIP #| Title| Author| Discussions‑to  
---|---|---|---  
[32](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-32.md)| Sanity Checks for stVaults| Alexandr
Drygin, Greg Shestakov, Victor Petrenko|
[Link](https://research.lido.fi/t/lido-v3-design-implementation-
proposal/10665)  
[31](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-31.md)| Expanding stETH liquidity layer with
over-collateralized minting| Alexei Potapkin, Eugene Mamin, Eugene
Pshenichnyy, Max Merkulov| [Link](https://research.lido.fi/t/lido-v3-design-
implementation-proposal/10665)  
[30](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-30.md)| Triggerable Withdrawals Framework|
Raman Siamionau, Evgeniy Pirogov|
[Link](https://research.lido.fi/t/triggerable-withdrawals-framework-in-the-
lido-protocol/10299)  
[29](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-29.md)| Community Staking Module v2| Dmitry
Gusakov, Sergey Khomutinin, Dmitry Chernukhin, Vladimir Gorkavenko|
[Link](https://research.lido.fi/t/community-staking-module/5917)  
[28](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-28.md)| Dual Governance| Sam Kozin, Eugene
Pshenichnyy, Victor Suzdalev, Sacha Saint-Leger, Bogdan Kovtun, Hasu, Isidoros
Passadis, Vasiliy Shapovalov| [Link](https://research.lido.fi/t/lip-28-dual-
governance/10032)  
[27](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-27.md)| Ensuring Compatibility with Ethereum’s
Pectra Upgrade| George Avsetsin|
[Link](https://research.lido.fi/t/lip-27-ensuring-compatibility-with-ethereum-
s-pectra-upgrade/9444)  
[26](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-26.md)| Community Staking Module| Dmitry
Gusakov, Sergey Khomutinin, Dmitry Chernukhin, Vladimir Gorkovenko|
[Link](https://research.lido.fi/t/community-staking-module/5917)  
[25](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-25.md)| Staking Router 2.0| Kirill Minenko,
Alexander Lukin| [Link](https://research.lido.fi/t/lip-25-staking-
router-v2-0/7773)  
[24](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-24.md)| Governance decision forwarding to
non-L2 networks using AAVE Delivery Infrastructure| Yuri Tkachenko, Eugene
Mamin| [Link](https://research.lido.fi/t/network-expansion-workgroup-
initiative-governance-decision-forwarding-to-non-l2-networks-lip-24/7446)  
[23](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-23.md)| Negative rebase sanity check with
second opinion| Alexey Potapkin, Greg Shestakov, Eugene Pshenichnyi, Victor
Petrenko| [Link](https://research.lido.fi/t/lip-23-negative-rebase-sanity-
check-with-second-opinion/7543)  
[22](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-22.md)| stETH on L2| Anton Kovalchuk, Artyom
Veremeenko, Eugene Mamin| [Link](https://research.lido.fi/t/lip-22-steth-
on-l2/6855)  
[21](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-21.md)| Simple On-chain Delegation| Eugene
Pshenichnyy, Ekaterina Zueva, Victor Suzdalev, Alexander Belokon|
[Link](https://research.lido.fi/t/lip-21-simple-on-chain-delegation/6840)  
[20](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-20.md)| LIP-20. Staking Router| Nikita
Logachev, Eugene Pshenichnyy, Mihail Semenkin, Azat Serikov|
[Link](https://research.lido.fi/t/lip-20-staking-router/)  
[19](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-19.md)| Easy Track. Limits for committees|
Ekaterina Zueva, Victor Suzdalev, Eugene Mamin|
[Link](https://research.lido.fi/t/lip-19-easy-track-limits-for-
committees/3237)  
[18](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-18.md)| Vault Contract for Self-Cover
Purposes| Azat Serikov| [Link](https://research.lido.fi/t/lip-18-vault-
contract-for-potential-self-cover-purposes/2992)  
[17](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-17.md)| MEV-Boost allowed relays list for
Lido| George Avsetsyn, Artem Veremeenko, Eugene Mamin, Isidoros Passadis|
[Link](https://research.lido.fi/t/lip-17-mev-boost-relays-allowed-list-for-
lido/2885)  
[16](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-16.md)| Protocol safeguards. Two-phase voting|
Alexey Potapkin, Sam Kozin| [Link](https://research.lido.fi/t/proposal-last-
minute-vote-mitigation/2162/14)  
[15](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-15.md)| Protocol safeguards. Resume role|
Eugene Mamin, Alexey Potapkin| [Link](https://research.lido.fi/t/announcement-
merge-ready-protocol-service-pack/2184)  
[14](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-14.md)| Protocol safeguards. Staking rate
limiting| Eugene Mamin, Sam Kozin, Eugene Pshenichnyy, Aleksei Potapkin|
[Link](https://research.lido.fi/t/announcement-merge-ready-protocol-service-
pack/2184)  
[13](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-13.md)| Easy Track payments limit| Alexey
Potapkin, Eugene Pshenichnyy, Victor Suzdalev, Eugene Mamin|
[Link](https://research.lido.fi/t/lip-13-easy-track-payments-limit/1670)  
[12](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-12.md)| On-chain part of the rewards
distribution after the Merge| Eugene Pshenichnyy, Eugene Mamin, Artyom
Veremeenko| [Link](https://research.lido.fi/t/lip-12-on-chain-part-of-the-
rewards-distribution-after-the-merge/1625)  
[11](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-11.md)| Add a transfer shares function for
stETH| Eugene Mamin, Sam Kozin, Artyom Veremeenko|
[Link](https://research.lido.fi/t/lip-11-add-a-transfer-shares-function-for-
steth/1622)  
[9](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-9.md)| Add an explicit log for the stETH burn
events| Eugene Mamin, Artyom Veremeenko|
[Link](https://research.lido.fi/t/lip-9-add-an-explicit-log-for-the-steth-
burn-events/1609)  
[8](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-8.md)| Increase keysOpIndex in
assignNextSigningKeys| George Avsetsin, Artyom Veremeenko|
[Link](https://research.lido.fi/t/lip-8-increase-keysopindex-in-
assignnextsigningkeys/1608)  
[7](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-7.md)| Introduce a composite oracle beacon
report receiver| Eugene Mamin, Sam Kozin, Eugene Pshenichnyy|
[Link](https://research.lido.fi/t/lip-6-in-protocol-coverage-proposal/1468/10)  
[6](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-6.md)| In-protocol coverage application
mechanism| Sam Kozin, Eugene Mamin, Eugene Pshenichnyy|
[Link](https://research.lido.fi/t/lip-6-in-protocol-coverage-proposal/1468)  
[5](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-5.md)| Mitigations for deposit front-running
vulnerability| Eugene Pshenichnyy, Sam Kozin, Victor Suzdalev, Vasiliy
Shapovalov| [Link](https://research.lido.fi/t/mitigations-for-deposit-front-
running-vulnerability/1239)  
[4](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-4.md)| Protocol safeguards. 72h Aragon Votes|
Victor Suzdalev, Sam Kozin, Eugene Mamin| [Link
1](https://research.lido.fi/t/increase-the-dao-voting-duration/1048), [Link
2](https://research.lido.fi/t/increase-aragon-voting-duration-to-72-hours-
operation-plan/1915)  
[3](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-3.md)| Easy Track Motions for DAO routine
operations| Bogdan Kovtun (psirex), Gregory Stepanov (grstepanov)|
[Link](https://research.lido.fi/t/lip-3-easy-track-motions-v2/794)  
[2](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-2.md)| Oracle contract upgrade to v2| Denis
Glotov| None  
[1](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-1.md)| Oracle interface and reward algorithm
specification| Kirill Varlamov| None  
  
## Moribund​

LIP #| Title| Author| Discussions‑to  
---|---|---|---  
[10](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-10.md)| Proxy initializations and LidoOracle
upgrade| Artyom Veremeenko, Sam Kozin, Mihail Semenkin, Eugene Pshenichnyy,
Eugene Mamin| [Link](https://research.lido.fi/t/lip-10-proxy-initializations-
and-lidooracle-upgrade/1616)  
  
[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lips.md)

[PreviousLido DAO](/lido-dao)[NextLido tokens integration guide](/guides/lido-
tokens-integration-guide)

  * WIP
  * Implemented
  * Moribund



  * [](/)
  * Lido tokens integration guide

On this page

# Lido tokens integration guide

This document is intended for developers looking to integrate Lido's stETH or
wstETH tokens into their dApps or services, with a focus on money markets,
DEXes and blockchain bridges.

info

The integration might be implemented on the level of smart contracts (on-
chain) or [Lido on Ethereum SDK](/integrations/sdk#lido-ethereum-sdk) (off-
chain).

## Lido​

Lido is a family of liquid staking protocols across multiple blockchains, with
headquarters on Ethereum. Liquid refers to the ability of a user’s stake to
become liquid. Upon the user's deposit Lido issues stToken, which represents
the deposited tokens along with all the rewards & penalties accrued through
the deposit's staking. Unlike the staked funds, this stToken is liquid — it
can be freely transferred between parties, making it usable across different
DeFi applications while still receiving daily staked rewards. It is paramount
to preserve this property when integrating stTokens into any DeFi protocol.

This guide refers to Lido on Ethereum (hereinafter referred to as Lido).

## Lido tokens​

### stTokens: stETH and wstETH​

Staking ether with Lido gives an equivalent amount of stETH. The user's stETH
balance represents the amount of ether withdrawable directly from the Lido
protocol.

For easier DeFi integrations, `stETH` has a non-rebasable, value-accruing
counterpart called 'wrapped stETH' (or just `wstETH`).

stETH (and therefore wstETH) can be obtained not only via direct staking in
Lido Core and wrapping, but also via **Lido V3 stVaults (Staking Vaults)** :
vault owners can mint `stETH` or `wstETH` backed by an stVault. **stETH minted
via stVaults is the same canonical stETH token** as stETH minted via Lido
Core. See [/run-on-lido/stvaults/](/run-on-lido/stvaults/) (especially the
[integration overview](/run-on-lido/stvaults/tech-documentation/integration-
overview)).

Lido's ERC-20 compatible stTokens are widely adopted across the Ethereum
ecosystem:

  * The most important on-chain [liquidity venues](https://dune.com/lido/wsteth-liquidity) include:
    * [stETH/ETH liquidity pool on Curve](https://curve.fi/#/ethereum/pools/steth)
    * [wstETH/ETH pool on Uniswap V3](https://app.uniswap.org/explore/pools/ethereum/0x109830a1AAaD605BbF02a9dFA7B0B92EC2FB7dAa)
    * [wstETH/ETH Composable stable pool on Balancer v2](https://app.balancer.fi/#/ethereum/pool/0x93d199263632a4ef4bb438f1feb99e57b4b5f0bd0000000000000000000005c2)
  * wstETH is listed as a collateral token on the following AAVE v3 markets:
    * [Ethereum mainnet](https://app.aave.com/reserve-overview/?underlyingAsset=0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0&marketName=proto_mainnet_v3)
    * [Arbitrum](https://app.aave.com/reserve-overview/?underlyingAsset=0x5979d7b546e38e414f7e9822514be443a4800529&marketName=proto_arbitrum_v3)
    * [Scroll](https://app.aave.com/reserve-overview/?underlyingAsset=0xf610a9dfb7c89644979b4a0f27063e9e7d7cda32&marketName=proto_scroll_v3)
    * [Base](https://app.aave.com/reserve-overview/?underlyingAsset=0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452&marketName=proto_base_v3)
    * [Optimism](https://app.aave.com/reserve-overview/?underlyingAsset=0x1f32b1c2345538c0c6f582fcb022739c4a194ebb&marketName=proto_optimism_v3)
    * [Polygon PoS](https://app.aave.com/reserve-overview/?underlyingAsset=0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd&marketName=proto_polygon_v3)
  * wstETH is [listed as a collateral token on Maker](https://daistats.com/#/collateral)
  * there are various [Mellow LRT](https://app.mellow.finance/restake) projects built on top of the (w)stETH
  * stETH is listed as a collateral token on the AAVE v2 [Ethereum mainnet](https://app.aave.com/reserve-overview/?underlyingAsset=0xae7ab96520de3a18e5e111b5eaab095312d7fe84&marketName=proto_mainnet) market
  * steCRV (the Curve stETH/ETH LP token) is [listed as a collateral token on Maker](https://daistats.com/#/collateral)
  * Blast L2 integrated [stETH](https://docs.blastfutures.com/get-started/introduction/what-is-blast#how-blast-works) as a rebasable ether (being staked implicitly as a part of the L1->L2 ether bridging flow)
  * there are multiple liquidity strategies built on top of Lido's stTokens, including [Yearn](https://yearn.fi/vaults/1/0xdCD90C7f6324cfa40d7169ef80b12031770B4325) and [Harvest Finance](https://harvest.finance/)

#### Integration utilities: Rate and price feeds​

The current sentiment for the money markets and DeFi integrations in general
is to consider Liquid Staked Tokens being backed by their native exchange
rates against ETH. This approach implies 1 stETH = 1 ETH pricing invariant to
be used.

Real world applications include [AAVE v3](https://github.com/bgd-labs/aave-
proposals/blob/main/src/AaveV2-V3PriceFeedsUpdate_20230613/PRICE-FEEDS-
UPDATE-20230613.md#motivation) markets and [Mellow
LRT](https://etherscan.io/address/0x1Dc89c28e59d142688D65Bd7b22C4Fd40C2cC06d)
pricing approaches.

More in depth analysis is available [here](https://www.comp.xyz/t/franklin-
dao-request-for-comment-on-market-pricing-vs-exchange-rate-pricing-for-lsts-
and-potential-oracle-implementations/5130).

There are following `wstETH/stETH` rate feeds available to use in conjunction
with (w)stETH:

For an up-to-date list of networks and feed addresses, see [/deployed-
contracts/#price-feeds](/deployed-contracts/#price-feeds).

  * [Ethereum Mainnet](https://etherscan.io/address/0x94336dF517036f2Bf5c620a1BC75a73A37b7bb16#readContract)
  * [Arbitrum](https://data.chain.link/feeds/arbitrum/mainnet/wsteth-steth%20exchangerate)
  * [Optimism](https://data.chain.link/feeds/optimism/mainnet/wsteth-steth%20exchangerate)
  * [Scroll](https://data.chain.link/feeds/scroll/mainnet/wsteth-steth%20exchangerate)
  * [Base](https://data.chain.link/feeds/base/base/wsteth-steth%20exchangerate)
  * [Linea](https://lineascan.build/address/0x3C8A95F2264bB3b52156c766b738357008d87cB7)
  * [BNB Chain](https://bscscan.com/address/0x4c75d01cfa4D998770b399246400a6dc40FB9645)
  * [Polygon PoS](https://data.chain.link/feeds/polygon/mainnet/wsteth-steth)
  * [zkSync Era](https://data.chain.link/feeds/zksync/zksync/wsteth-steth%20exchangerate)

note

The Ethereum Mainnet Chainlink-compatible feed is deployed and used by the
Mellow LRT vaults, being a wrapper for `wstETH.getStETHByWstETH(10 **
decimals)`

These feeds might be used to compose a target feed, e.g., for the `wstETH/USD`
pair, see the following examples of AAVE v3 markets:

  * [Ethereum Mainnet `WstETHSynchronicityPriceAdapter`](https://etherscan.io/address/0x8b6851156023f4f5a66f68bea80851c3d905ac93#code)
  * [Optimism `CLSynchronicityPriceAdapterPegToBase`](https://optimistic.etherscan.io/address/0x80f2c02224a2e548fc67c0bf705ebfa825dd5439)
  * [Arbitrum `CLSynchronicityPriceAdapterPegToBase`](https://arbiscan.io/address/0x945fd405773973d286de54e44649cc0d9e264f78)

### LDO​

LDO is a Lido governance ERC-20 compliant token derived from the [MiniMe
Token](https://github.com/Giveth/minime). Thus, LDO holder balances are
queryable for an arbitrary block number, an essential security feature for the
Lido voting mechanics.

### unstETH​

A non-fungible token (NFT) is used to represent a withdrawal request position
[in the protocol-level withdrawals queue](/contracts/withdrawal-queue-erc721)
when a stToken holder decides to redeem it for ether via the protocol.

note

Unlike the other Lido's tokens (`stETH`, `wstETH`, and `LDO`), unstETH is non-
fungible, and implements the ERC-721 token standard instead of ERC-20.

## stETH vs. wstETH​

There are two versions of Lido's stTokens, namely stETH and wstETH. Both are
fungible tokens but they reflect the accrued staking rewards differently.
stETH implements rebasing mechanics which means the stETH balance updates
regularly. On the contrary, the wstETH balance does not change on its own but
rather increases in value against stETH.

info

At any moment, any amount of stETH can be converted to wstETH via a trustless
wrapper and vice versa, thus tokens effectively share liquidity.

For instance, undercollateralized wstETH positions on Maker can be liquidated
by unwrapping wstETH and swapping it for ether on Curve.

## stETH​

### What is stETH​

stETH is a rebasable ERC-20 token that represents ether staked with Lido.
Unlike staked ether, it is liquid and can be transferred, traded, or used in
DeFi applications. The total supply of stETH reflects the amount of ether
deposited into protocol combined with staking rewards, minus potential
validator penalties. stETH tokens are minted upon ether deposit at 1:1 ratio.
Since withdrawals from the Consensus Layer have been introduced, it is also
possible to redeem ether by burning stETH at the same 1:1 ratio (in rare cases
it won't preserve 1:1 ratio though).

Please note, Lido has implemented staking rate limits aimed at reducing the
post-Merge staking surge's impact on the staking queue & Lido’s socialized
rewards distribution model. Read more about it here.

stETH is a rebasable ERC-20 token. Normally, the stETH token balances get
recalculated daily when the Lido oracle reports the Consensus Layer ether
balance update. The stETH balance update happens automatically on all the
addresses holding stETH at the moment of rebase. The rebase mechanics have
been implemented via shares (see shares).

### Note on ERC-20 compliance​

stETH does not strictly comply with ERC-20. The only exception is that it does
not emit `Transfer()` on rebase as
[ERC-20](https://eips.ethereum.org/EIPS/eip-20#events) standard requires.

### Accounting oracle​

Normally, stETH rebases happen daily when the Lido oracle reports the
Consensus Layer ether balance update. The rebase can be positive or negative,
depending on the validators' performance. In case Lido's validators get
slashed or penalized, the stETH balances can decrease according to penalty
sizes. However, daily rebases have never been negative by the time of writing.

The accounting oracle has sanity checks on both max APR reported (the APR
cannot exceed 27%, which means a daily rebase is limited to `(27/365)%`) and
total staked amount drop (staked ether decrease reported cannot exceed 5%).

Currently, Oracle network includes 9 independent oracles, oracle daemons
hosted by established node operators selected by the DAO. As soon as five out
of nine oracle daemons report the same data, reaching the consensus, the
report goes to the Lido smart contract, and the rebase occurs.

#### Oracle corner cases​

  * In case oracle daemons do not report Consensus Layer balance update or do not reach quorum, the oracle does not submit the daily report, and the daily rebase doesn't occur until the quorum is reached.
  * Oracle report might be delayed, but it will include values actual for the reporting refSlot. So, even if reported 2 hours late, it will include only rebase values for the original period.
  * In case the quorum hasn't been reached, the oracle can skip the daily report. The report will happen as soon as the quorum for one of the next periods will be reached, and it will include the incremental balance update for all periods since the last successful oracle report.
  * Oracle daemons only report the finalized epochs. In case of no finality on the Consensus Layer, the daemons won't submit their reports, and the daily rebase won't occur.
  * In case sanity checks on max APR or total staked amount drop fail, the oracle report cannot be finalized, and the rebase cannot happen.

### stETH internals: share mechanics​

Daily rebases result in stETH token balances changing. This mechanism is
implemented via shares. The `share` is a basic unit representing the stETH
holder's share in the total amount of ether controlled by the protocol. When a
new deposit happens, the new shares get minted to reflect what share of the
protocol-controlled ether has been added to the pool. When the Consensus Layer
oracle report comes in, the price of 1 share in stETH is being recalculated.
Shares aren't normalized, so the contract also stores the sum of all shares to
calculate each account's token balance. Shares balance by stETH balance can be
calculated by this formula:

    
    
    shares[account] = balanceOf(account) * totalShares / totalPooledEther  
    

#### 1-2 wei corner case​

stETH balance calculation includes integer division, and there is a common
case when the whole stETH balance can't be transferred from the account while
leaving the last 1-2 wei on the sender's account. The same thing can actually
happen at any transfer or deposit transaction. In the future, when the
stETH/share rate will be greater, the error can become a bit bigger. To avoid
it, one can use `transferShares` to be precise.

Example:

  1. User A transfers 1 stETH to User B.
  2. Under the hood, stETH balance gets converted to shares, integer division happens and rounding down applies.
  3. The corresponding amount of shares gets transferred from User A to User B.
  4. Shares balance gets converted to stETH balance for User B.
  5. In many cases, the actually transferred amount is 1-2 wei less than expected.

The issue is documented here: [lido-
dao/issues/442](https://github.com/lidofinance/lido-dao/issues/442)

### Bookkeeping shares​

Although user-friendly, stETH rebases add a whole level of complexity to
integrating stETH into other dApps and protocols. When integrating stETH as a
token into any dApp, it's highly recommended to store and operate shares
rather than stETH public balances directly, because stETH balances change both
upon transfers, mints/burns, and rebases, while shares balances can only
change upon transfers and mints/burns.

To figure out the shares balance, `getSharesByPooledEth(uint256)` function can
be used. It returns the value not affected by future rebases and it can be
converted back into stETH by calling `getPooledEthByShares` function.

> See all available stETH methods
> [here](https://github.com/lidofinance/docs/blob/main/docs/contracts/lido.md#view-
> methods).

Any operation on stETH can be performed on shares directly, with no difference
between share and stETH.

The preferred way of operating stETH should be:

  1. get stETH token balance;
  2. convert stETH balance into shares balance and use it as a primary balance unit in your dApp;
  3. when any operation on the balance should be done, do it on the shares balance;
  4. when users interact with stETH, convert the shares balance back to stETH token balance.

Please note that 10% APR on shares balance and 10% APR on stETH token balance
will ultimately result in different output values over time, because shares
balance is stable, while stETH token balance changes eventually.

There are two convenience methods to work with shares available for the stETH
token:

  * `transferShares` (when `msg.sender` spends their own balance)
  * `transferSharesFrom` (when `msg.sender` spends the approved allowance)

If using the rebasable stETH token is not an option for your integration, it
is recommended to use wstETH instead of stETH. See how it works here.

### Transfer shares function for stETH​

The [LIP-11](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-11.md) introduced the `transferShares`
function which allows to transfer stETH in a "rebase-agnostic" manner:
transfer in terms of shares amount.

Normally, one transfers stETH using ERC-20 `transfer` and `transferFrom`
functions which accept as an input the amount of stETH, not the amount of the
underlying shares. Sometimes it's better operate with shares directly to avoid
possible rounding issues. Rounding issues usually could appear after a token
rebase. This feature is aimed to provide an additional level of precision when
operating with stETH. Read more about the function in the
[LIP-11](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-11.md).

Also, V2 upgrade introduced a `transferSharesFrom` to completely match ERC-20
set of transfer methods.

### Fees​

Lido collects a percentage of the staking rewards as a protocol fee. The exact
fee size is defined by the DAO and can be changed in the future via DAO
voting. To collect the fee, the protocol mints new stETH token shares and
assigns them to the fee recipients. Currently, the fee collected by Lido
protocol is 10% of staking rewards with half of it going to the node operators
and the other half going to the protocol treasury.

Since the total amount of Lido pooled ether tends to increase, the combined
value of all holders' shares denominated in stETH increases respectively.
Thus, the rewards effectively spread between each token holder proportionally
to their share in the protocol TVL. So Lido mints new shares to the fee
recipient so that the total cost of the newly-minted shares exactly
corresponds to the fee taken (calculated in basis points):

    
    
    shares2mint * newShareCost = (_totalRewards * feeBasis) / 10000  
    newShareCost = newTotalPooledEther / (prevTotalShares + shares2mint)  
    

which follows:

    
    
                            _totalRewards * feeBasis * prevTotalShares  
    shares2mint = --------------------------------------------------------------  
                    (newTotalPooledEther * 10000) - (feeBasis * _totalRewards)  
    

### How to get APR?​

Please refer to [this page](https://docs.lido.fi/integrations/api/#last-lido-
apr-for-steth) for the correct Lido V2 APR calculation.

It is worth noting that with withdrawals enabled, the APR calculation method
for Lido has changed significantly. When Lido V2 protocol finalizes withdrawal
requests, the Lido contract excludes funds from TVL and assigns to burn
underlying locked requests’ stETH shares in return. In other words, withdrawal
finalization decreases both TVL and total shares. The old V1 formula isn’t
suitable anymore because it catches TVL changes, but skips total shares
changes.

### Do stETH rewards compound?​

Yes, stETH rewards do compound.

All rewards that are withdrawn from the Consensus Layer or received as MEV or
EL priority fees (that aren't used to fulfill withdrawal requests) are finally
restaked to set up new validators and receive more rewards at the end. So, we
can say that stETH becomes fully auto-compounding after V2 release.

## wstETH​

Due to the rebasing nature of stETH, the stETH balance on the holder's address
is not constant, it changes daily as oracle report comes in. Although
rebasable tokens are becoming a common thing in DeFi recently, many dApps do
not support rebasing. For example, Maker, UniSwap, and SushiSwap are not
designed for rebasable tokens. Listing stETH on these apps can result in
holders not receiving their daily staking rewards which effectively defeats
the benefits of liquid staking. To integrate with such dApps, there's another
form of Lido stTokens called wstETH (wrapped staked ether).

### What is wstETH​

wstETH is an ERC20 token that represents the account's share of the stETH
total supply (stETH token wrapper with static balances). For wstETH, 1 wei in
shares equals to 1 wei in balance. The wstETH balance can only be changed upon
transfers, minting, and burning. wstETH balance does not rebase, wstETH's
price denominated in stETH changes instead. At any given time, anyone holding
wstETH can convert any amount of it to stETH at a fixed rate, and vice versa.
The rate is the same for everyone at any given moment. Normally, the rate gets
updated once a day, when stETH undergoes a rebase. The current rate can be
obtained by calling `wstETH.stEthPerToken()` or `wstETH.getStETHByWstETH(10 **
decimals)`.

### Wrap & Unwrap​

When wrapping stETH to wstETH, the desired amount of stETH is locked on the
WstETH contract balance, and the wstETH is minted according to the share
bookkeeping formula.

When unwrapping, wstETH gets burnt and the corresponding amount of stETH gets
unlocked.

Thus, the amount of stETH unlocked when unwrapping is different from what has
been initially wrapped (given a rebase happened between wrapping and
unwrapping stETH).

#### wstETH shortcut​

Note, that the WstETH contract includes a shortcut to convert ether to wstETH
under the hood, which allows you to effectively skip the wrapping step and
stake ether for wstETH directly. Keep in mind that when using the shortcut,
the staking rate limits still apply.

#### `wstETHReferralStaker`: stake directly into wstETH with referral​

If you need to stake ETH into Lido and receive `wstETH` in **one transaction**
(while also providing a `referral` address), use the permissionless
`wstETHReferralStaker` helper contract.

warning

Do not send ETH or tokens directly to `wstETHReferralStaker`. Use its payable
`stakeETH(address _referral)` method.

See: [`wstETHReferralStaker`](/contracts/wsteth-staker).

### Rewards accounting​

Since wstETH represents the holder's share in the total amount of Lido-
controlled ether, rebases don't affect wstETH balances but change the wstETH
price denominated in stETH.

**Basic example** :

  1. User wraps 1 stETH and gets 0.9803 wstETH (1 stETH = 0.9803 wstETH)
  2. A rebase happens, the wstETH price goes up by 5%
  3. User unwraps 0.9803 wstETH and gets 1.0499 stETH (1 stETH = 0.9337 wstETH)

### Hoodi wstETH for testing​

The most recent testnet version of the Lido protocol lives on the Hoodi
testnet (see the full list of contracts [here](/deployed-contracts/hoodi)).
Just like on mainnet, Hoodi wstETH for testing purposes can be obtained by
approving the desired amount of stETH to the WstETH contract on Hoodi, and
then calling `wrap` method on it. The corresponding amount of Hoodi stETH will
be locked on the WstETH contract, and the wstETH tokens will be minted to your
account. Hoodi ether can also be converted to wstETH directly using the wstETH
shortcut – just send your Hoodi ether to WstETH contract on Hoodi, and the
corresponding amount of wstETH will be minted to your account.

note

Sepolia is deprecated and no longer used for Lido token testing. Use Hoodi for
testnet integrations.

### Lido Multichain​

#### wstETH​

Currently, wstETH token is present on multiple networks (see [/deployed-
contracts/#lido-multichain](/deployed-contracts/#lido-multichain)):

  * [Arbitrum](https://arbiscan.io/address/0x5979D7b546E38E414F7E9822514be443A4800529)
  * [Optimism](https://optimistic.etherscan.io/address/0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb)
  * [Scroll](https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32)
  * [Base](https://basescan.org/address/0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452)
  * [Linea](https://lineascan.build/address/0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F)
  * [zkSync Era](https://explorer.zksync.io/address/0x703b52F2b28fEbcB60E1372858AF5b18849FE867)
  * [Mantle](https://explorer.mantle.xyz/address/0x458ed78EB972a369799fb278c0243b25e5242A83)
  * [Polygon PoS](https://polygonscan.com/token/0x03b54a6e9a984069379fae1a4fc4dbae93b3bccd)
  * [Mode](https://explorer.mode.network/address/0x98f96A4B34D03a2E6f225B28b8f8Cb1279562d81)
  * [Binance Smart Chain (BSC)](https://bscscan.com/address/0x26c5e01524d2E6280A48F2c50fF6De7e52E9611C)
  * [Zircuit](https://explorer.zircuit.com/address/0xf0e673Bc224A8Ca3ff67a61605814666b1234833)
  * [Soneium](https://soneium.blockscout.com/address/0xaA9BD8c957D803466FA92504BDd728cC140f8941)
  * [Unichain](https://uniscan.xyz/address/0xc02fE7317D4eb8753a02c35fe019786854A92001)
  * [Lisk](https://blockscout.lisk.com/address/0x76D8de471F54aAA87784119c60Df1bbFc852C415)
  * [Swellchain](https://explorer.swellnetwork.io/address/0x7c98E0779EB5924b3ba8cE3B17648539ed5b0Ecc)

with bridging implemented via [the canonical bridges recommended
approach](/token-guides/cross-chain-tokens-guide).

note

On most networks, wstETH for Lido Multichain is a bridged ERC-20 token and
cannot be unwrapped locally. On networks where stETH is also available, the
token design follows the [LIP-22](https://github.com/lidofinance/lido-
improvement-proposals/blob/develop/LIPS/lip-22.md) approach.

Without the shares bookkeeping, the bridged token cannot provide the
`wstETH/stETH` rate and the rewards accrued on-chain. Use the wstETH/stETH
rate feeds listed above.

#### stETH (OP Stack networks)​

stETH is available on some OP Stack networks alongside wstETH (see [/deployed-
contracts/#lido-multichain](/deployed-contracts/#lido-multichain)). The wstETH
and stETH tokens design follows the
[LIP-22](https://github.com/lidofinance/lido-improvement-
proposals/blob/develop/LIPS/lip-22.md) architecture approach.

  * Optimism:
    * Token address: [`0x76A50b8c7349cCDDb7578c6627e79b5d99D24138`](https://optimistic.etherscan.io/address/0x76A50b8c7349cCDDb7578c6627e79b5d99D24138)
    * wstETH/stETH in-protocol native rate feed: [`0x294ED1f214F4e0ecAE31C3Eae4F04EBB3b36C9d0`](https://optimistic.etherscan.io/address/0x294ED1f214F4e0ecAE31C3Eae4F04EBB3b36C9d0)
  * Soneium:
    * Token address: [`0x0Ce031AEd457C870D74914eCAA7971dd3176cDAF`](https://soneium.blockscout.com/address/0x0Ce031AEd457C870D74914eCAA7971dd3176cDAF)
    * wstETH/stETH in-protocol native rate feed: [`0xDff6f372e8c16b2b9e95c55bDfe74C0bA3F90265`](https://soneium.blockscout.com/address/0xDff6f372e8c16b2b9e95c55bDfe74C0bA3F90265)
  * Unichain:
    * Token address: [`0x81f2508AAC59757EF7425DDc9717AB5c2AA0A84F`](https://uniscan.xyz/address/0x81f2508AAC59757EF7425DDc9717AB5c2AA0A84F)
    * wstETH/stETH in-protocol native rate feed: [`0xD835fAC9080396CCE95bDf9EcC7cc27Bab12c9f8`](https://uniscan.xyz/address/0xD835fAC9080396CCE95bDf9EcC7cc27Bab12c9f8)

The native rate feed allows getting `wstETH/stETH` in-protocol rate delivered
from the L1 side by the canonical bridge.

## LDO​

### What is LDO​

LDO is a governance token used for the Lido DAO's voting process ([both off-
chain and on-chain](https://lido.fi/governance#regular-process)). The token is
widely available in DeFi and CeFi ecosystems.

LDO has internal mechanics of the balance snapshots
([`balanceOfAt`](https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32#readContract#F5)
and
[`totalSupplyAt`](https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32#readContract#F10))
to allow voting power not being manipulated within the time of the ongoing
vote.

### Note on ERC-20 compliance​

Although the LDO is fully compliant with ERC-20, it is worth noting that the
token doesn't revert a transaction on all of the failure paths inside both
`transfer` and `transferFrom` methods returning the `false` status instead.

note

It's critical to check the return status for external integrations as the
ERC-20 token standard
[requires](https://eips.ethereum.org/EIPS/eip-20#methods) to prevent various
attack vectors (e.g. token deposits in vaults):

> Callers MUST handle `false` from `returns (bool success)`. Callers MUST NOT
> assume that `false` is never returned!

## ERC20Permit​

wstETH and stETH Ethereum Mainnet tokens implement the ERC20 Permit extension
allowing approvals to be made via signatures, as defined in
[EIP-2612](https://eips.ethereum.org/EIPS/eip-2612). stETH is also compatible
with smart contract signatures, implementing
[EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) that is used as a part of
the Account Abstraction.

The `permit` method allows users to modify the allowance using a signed
message, instead of through `msg.sender`. By not relying on `approve` method,
you can build interfaces that will approve and use wstETH in one tx.

## Staking rate limits​

In order to handle the staking surge in case of some unforeseen market
conditions, the Lido protocol implemented staking rate limits aimed at
reducing the surge's impact on the staking queue & Lido’s socialized rewards
distribution model. There is a sliding window limit that is parametrized with
`_maxStakingLimit` and `_stakeLimitIncreasePerBlock`. This means it is only
possible to submit this much ether to the Lido staking contracts within a
24-hours timeframe. The exact limit can change over time; read it on-chain via
`getCurrentStakeLimit()` (or `getStakeLimitFullInfo()`).

You can picture this as a health globe from Diablo 2 with a maximum of
`_maxStakingLimit` and regenerating with a constant speed per block. When you
deposit ether to the protocol, the level of health is reduced by its amount
and the current limit becomes smaller and smaller. When it hits the ground,
the transaction gets reverted.

To avoid that, you should check if `getCurrentStakeLimit() >= amountToStake`,
and if it's not you can go with an alternative route. The staking rate limits
are denominated in ether, thus, it makes no difference if the stake is being
deposited for stETH or using the wstETH shortcut, the limits apply in both
cases.

### Alternative routes​

  1. Wait for staking limits to regenerate to higher values and retry depositing ether to Lido later.
  2. Consider swapping ETH for stETH on DEXes like Curve or Balancer. At specific market conditions, stETH may effectively be purchased from there with a discount due to stETH price fluctuations.

## Withdrawals (unstETH)​

Lido V2 introduced the possibility to withdraw ETH from the Lido on Ethereum
protocol (i.e., primary market).

note

As in-protocol withdrawals have asynchronous nature and sophisticated
execution flow, in general, using secondary markets (exchanges and swap
aggregators) might be more UX-friendly and convenient option to consider for
integrations.

A high-level upgrade overview can be found in [the blog
post](https://blog.lido.fi/introducing-lido-v2/). Withdrawals flow is
organized as a FIFO queue that accepts the requests with stETH attached and
these requests are finalized with oracle reports as soon as ether to fulfill
the request is available.

So to obtain ether from the protocol, you'll need to proceed with the
following steps:

  * request the withdrawal, locking your steth in the queue and receiving an NFT, that represents your position in the queue
  * wait, until the request is finalized by the oracle report and becomes claimable
  * claim your ether, burning the NFT

Request size should be at least **100 wei** (in stETH) and at most **1000
stETH**. Larger amounts should be withdrawn in multiple requests, which can be
batched via in-protocol API. Once requested, withdrawal cannot be canceled.
The withdrawal NFT can be transferred to a different address, and the new
owner will be able to claim the requested withdrawal once finalized.

The amount of claimable ETH is determined once the withdrawal request is
finalized. The rate stETH/ETH of the request finalization can't get higher
than it's been at the moment of request creation. The user will be able to
claim:

  * normally – the ETH amount corresponding to the stETH amount at the moment of the request's placement

**OR**

  * discounted - lowered ETH amount corresponding to the oracle-reported share rate in case the protocol had undergone significant losses (slashings and penalties)

The second option is unlikely, and we haven't ever seen the conditions for it
on mainnet so far.

The end-user contract to deal with the withdrawals is
`WithdrawalQueueERC721.sol`, which implements the ERC721 standard. NFT
represents the position in the withdrawal queue and may be claimed after the
finalization of the request.

Let's follow these steps in detail:

### Request withdrawal and mint NFT​

You have several options for requesting withdrawals, they require you to have
stETH or wstETH on your address:

#### stETH​

  * Call `requestWithdrawalsWithPermit(uint256[] _amounts, address _owner, PermitInput _permit)` and get the ids of created positions, where `msg.sender` will be used to transfer tokens from and the `_owner` will be the address that can claim or transfer NFT (defaults to `msg.sender` if it’s not provided)
  * Alternatively, sending stETH on behalf of `WithdrawalQueueERC721.sol` contract can be approved in a separate upfront transaction (`stETH.approve(withdrawalQueueERC721.address, allowance)`), and the `requestWithdrawals(uint256[] _amounts, address _owner)` method called afterwards

#### wstETH​

  * Call `requestWithdrawalsWstETHWithPermit(uint256[] _amounts, address _owner, PermitInput _permit)` and get the ids of created positions, where `msg.sender` will be used to transfer tokens from, and the `_owner` will be the address that can claim or transfer NFT (defaults to `msg.sender` if it’s not provide)
  * Alternatively, sending wstETH on behalf of `WithdrawalQueueERC721.sol` contract can be approved in a separate upfront transaction (`wstETH.approve(withdrawalQueueERC721.address, allowance)`), and the `requestWithdrawalsWstETH(uint256[] _amounts, address _owner)` method called afterwards

`PermitInput` structure is defined as follows:

    
    
    struct PermitInput {  
        uint256 value;  
        uint256 deadline;  
        uint8 v;  
        bytes32 r;  
        bytes32 s;  
    }  
    

After request, [ERC721](https://eips.ethereum.org/EIPS/eip-721) NFT is minted
to `_owner` address and can be transferred to the other owner who will have
all the rights to claim the withdrawal.

Additionally, this NFT implements the
[ERC4906](https://eips.ethereum.org/EIPS/eip-4906) standard and it's
recommended to rely on

    
    
    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);  
    

to update the NFT metadata if you're integrating it somewhere where it should
be displayed correctly.

note

Withdrawal transactions made with `requestWithdrawalsWithPermit` or
`requestWithdrawalsWstETHWithPermit` might fail due to being front-run by
stealing the user-provided signature to execute `token.permit` method. It does
not impose any fund loss risks nor blocks the capability to withdraw, but it
affects the UX. For the details, see [this
issue](https://github.com/lidofinance/lido-dao/issues/803).

It's recommended to mitigate the issue, e.g. by utilizing the approach used in
[Lido staking widget](https://github.com/lidofinance/ethereum-staking-widget).
Shortly, the idea is as follows. If the initial `...WithPermit` transaction
fails, immediately resent the request but via
`requestWithdrawals/requestWithdrawalsWstETH` method this time, seamlessly
relying on the allowance already provided as a result of the griefing
transaction. For the specific example, see [the following
code](https://github.com/lidofinance/ethereum-staking-
widget/blob/ba65f2180ad0ab43b5f3bdcfeee118e6ceeabe7f/features/withdrawals/hooks/contract/useRequest.ts#L319C6-L319C6).

Any other viable approach for mitigation might be used as well. As one more
example, deploy a wrapper smart contract that tries
`requestWithdrawalsWithPermit/requestWithdrawalsWithPermitWstETH` and if
[catches](https://docs.soliditylang.org/en/latest/control-structures.html#try-
catch) the revert error, continues with
`requestWithdrawals/requestWithdrawalsWstETH`, checking the allowance is
enough.

### Checking the state of withdrawal​

  * You can check all the withdrawal requests for the owner by calling `getWithdrawalRequests(address _owner)` which returns an array of NFT ids.
  * To check the state of the particular NFTs you can call `getWithdrawalStatus(uint256[] _requestIds)` which returns an array of [`WithdrawalRequestStatus`](https://github.com/lidofinance/core/blob/master/contracts/0.8.9/WithdrawalQueueBase.sol#L67-L81) struct.

    
    
        struct WithdrawalRequestStatus {  
            /// @notice stETH token amount that was locked on withdrawal queue for this request  
            uint256 amountOfStETH;  
            /// @notice amount of stETH shares locked on withdrawal queue for this request  
            uint256 amountOfShares;  
            /// @notice address that can claim or transfer this request  
            address owner;  
            /// @notice timestamp of when the request was created, in seconds  
            uint256 timestamp;  
            /// @notice true, if request is finalized  
            bool isFinalized;  
            /// @notice true, if request is claimed. Request is claimable if (isFinalized && !isClaimed)  
            bool isClaimed;  
        }  
    

> NOTE: Since stETH is an essential token if the user requests a withdrawal
> using wstETH directly, the amount will be nominated in stETH on request
> creation.

You can call `getClaimableEther(uint256[] _requestIds, uint256[] _hints)` to
get the exact amount of eth that is reserved for the requests, where `_hints`
can be found by calling `findCheckpointHints(__requestIds, 1,
getLastCheckpointIndex())`. It will return a non-zero value only if the
request is claimable (`isFinalized && !isClaimed`)

### Claiming​

To claim ether you need to call:

  * `claimWithdrawal(uint256 _requestId)` with the NFT Id on behalf of the NFT owner
  * `claimWithdrawals(uint256[] _requestIDs, uint256[] _hints)` if you want to claim multiple withdrawals in batches or optimize on hint search
    * hints = `findCheckpointHints(uint256[] calldata _requestIDs, 1, lastCheckpoint)`
    * lastCheckpoint = `getLastCheckpointIndex()`

## General integration examples​

### stETH/wstETH as collateral​

stETH/wstETH as DeFi collateral is beneficial for several reasons:

  * stETH/wstETH is almost as safe as ether, price-wise: barring catastrophic scenarios, its value tends to hold the ETH 1:1 well;
  * stETH/wstETH is a productive token: getting rewards on collateral effectively lowers the cost of borrowing;
  * stETH/wstETH is a very liquid token with billions of liquidity locked in liquidity pools (see above)

Lido's staked tokens have been listed on major liquidity protocols:

  * On Maker, [wstETH collateral (scroll down to Dai from WSTETH-A section)](https://daistats.com/#/collateral) can be used to mint DAI stablecoin. See [Lido's blog post](https://blog.lido.fi/makerdao-integrates-lidos-staked-eth-steth-as-collateral-asset/) for more details.
  * On AAVE v3, multiple tokens can be borrowed against wstETH on various chains (see the list of the markets)

Robust price sources are required for listing on most money markets, with
ChainLink price feeds being the industry standard. The default option to use
is exchange rate feeds with an option to compose arbitrary feeds:

    
    
    'wstETH/X price feed' = 'wstETH/stETH rate feed' × 'ETH/X price feed'  
    

### Wallet integrations​

Lido's Ethereum staking services have been successfully integrated into the
most popular DeFi wallets, including Ledger, Metamask, MyEtherWallet, ImToken
and others. Having stETH integrated can provide wallet users with a great user
experience of direct staking from the wallet UI itself.

When adding stETH support to a DeFi wallet, it is important to preserve
stETH's rebasing nature. Note that stETH balance changes on each rebase
without any incoming or outgoing user transfers and does not emit ERC-20
'Transfer' events. As a consequence, avoid storing cached stETH balance for
extended periods of time (over 24 hours).

The integration might be implemented leveraging the [Lido on Ethereum
SDK](/integrations/sdk#lido-ethereum-sdk)

### Cross chain bridging​

The Lido's wstETH gets bridged to various L2's and sidechains. The process of
a new network adoption in a future-proof way is outlined as a part of the
separate [bridging guide](/token-guides/cross-chain-tokens-guide).

Most cross-chain token bridges have no mechanics to handle rebases. This means
bridging stETH to other chains will prevent stakers from collecting their
staking rewards.

warning

In the most common case, the rewards will naturally go to the bridge smart
contract becoming locked there and never make it to the stakers.

While working on full-blown bridging solutions, the Lido contributors
encourage the users to only bridge the non-rebasable representation of staked
ether, namely wstETH.

## Risks​

There exist a number of potential risks when staking using liquid staking
protocols.

### Smart contract security​

There is an inherent risk that Lido could contain a smart contract
vulnerability or bug. The Lido code is open-source, audited, and covered by an
extensive bug bounty program to minimize this risk. To mitigate smart contract
risks, all of the core Lido contracts are audited. Audit reports can be found
[here](https://github.com/lidofinance/audits). Besides, Lido is covered with a
massive Immunefi bug bounty program.

### Slashing risk​

Validators risk staking penalties, with up to 100% of staked funds at risk if
validators fail. To minimize this risk, Lido stakes across multiple
professional and reputable node operators with heterogeneous setups, with
additional mitigation in the form of self-coverage.

### stToken price risk​

Users risk an exchange price of stTokens which is lower than inherent value
due to withdrawal restrictions on Lido, making arbitrage and risk-free market-
making impossible. The Lido DAO is driven to mitigate the above risks to the
extent possible. Despite this, they may still exist and, as such, it is our
duty to communicate them.

You can find an extensive [Public Risk Disclosure](/prd) on a dedicated
documentation page.

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/guides/lido-tokens-
integration-guide.md)

[PreviousLido Improvement Proposals](/lips)[NextPublic Risk Disclosure
(PRD)](/prd)

  * Lido
  * Lido tokens
    * stTokens: stETH and wstETH
    * LDO
    * unstETH
  * stETH vs. wstETH
  * stETH
    * What is stETH
    * Note on ERC-20 compliance
    * Accounting oracle
    * stETH internals: share mechanics
    * Bookkeeping shares
    * Transfer shares function for stETH
    * Fees
    * How to get APR?
    * Do stETH rewards compound?
  * wstETH
    * What is wstETH
    * Wrap & Unwrap
    * Rewards accounting
    * Hoodi wstETH for testing
    * Lido Multichain
  * LDO
    * What is LDO
    * Note on ERC-20 compliance
  * ERC20Permit
  * Staking rate limits
    * Alternative routes
  * Withdrawals (unstETH)
    * Request withdrawal and mint NFT
    * Checking the state of withdrawal
    * Claiming
  * General integration examples
    * stETH/wstETH as collateral
    * Wallet integrations
    * Cross chain bridging
  * Risks
    * Smart contract security
    * Slashing risk
    * stToken price risk



  * [](/)
  * Lido DAO

On this page

# Lido DAO

The Lido DAO is a Decentralised Autonomous Organisation that manages the
liquid staking protocols by deciding on key parameters (e.g., setting fees,
assigning node operators and oracles, etc.) through the voting power of
governance token (`LDO`) holders. Also, the DAO will accumulate service fees
and spend them on research, development, liquidity mining incentives and
protocol upgrades.

## Why DAO?​

The DAO is the logical compromise between full centralization and
decentralisation, which allows the deployment of competitive products without
full centralization and custody on the exchanges. We do not believe that it is
possible to make a liquid staking protocol that is completely trustless in the
foreseeable future. A DAO is an optimal structure for launching Lido as:

  * DAO is essentially a decentralised entity, which is enabling a focus on community and might offer a more socially-conscious structure and consequent decision-making;
  * DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury.
  * And other management activities as well if there is a technical ability

The DAO will accumulate service fees from Lido, which is funnelled into the
insurance and development funds, distributed by the DAO.

## Functions​

Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its
efficiency and stability. The Lido DAO should do the following:

  * Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO’s goals
  * Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules
  * Approve LEGO grants to support different research and so initiatives protocol guilds
  * Payments to full-time contributors and other operational duties
  * Bug bounty program, respond to emergency
  * Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.

## Governance​

The `LDO` token governs all Lido DAO governance and network decisions to
ensure its prolonged stability and decentralised decision-making to facilitate
the growth of fair, and transparent liquid staking. The `LDO` contract address
-
[`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32).

> 📝 For more detailed information about governance, please, check out the
> [Governance](https://lido.fi/governance) page.

To have a vote in the Lido DAO, and to contribute to the determination of any
of the topics outlined above, one must hold the `LDO` governance token.
Holding `LDO` gives DAO members a vote in the future of Lido, allowing each
DAO member to have a personal say in the community. `LDO` voting weight is
proportional to the amount of `LDO` a voter holds. The more LDO on a user’s
address, the greater the decision-making power the voter gets. The exact
mechanism of `LDO` voting can be upgraded just like the other DAO
applications.

> 📝 If you have any initiatives you think will benefit the Lido protocol,
> share your thoughts in our [governance forum](https://research.lido.fi).

## Software​

The Lido DAO is an [Aragon](https://aragon.org/dao) organization. Since Aragon
provides a full end-to-end framework to build DAOs, we use its standard tools.

> 📝 The governance process only takes place within the Ethereum network. For
> other networks, this process is implemented through committee and multisig
> (we need a multisig list).

While the Aragon application is a powerful tool for DAO governance due to the
fact that it is both transparent and reliable, it is ill-suited to manage
routine operations that either have strong token-holder support and/or are
only relevant to a subsection of the DAO (e.g. the financial operations team).
For that reason, [Easy Track](https://easytrack.lido.fi/) is developed as an
efficient mechanism to assist with routine and uncontentious governance
proposals for the Lido DAO. Importantly, flexibility, and scalability is all
paramount concerns throughout the development of Easy Track, with extensive
measures taken to ensure that safety has not been compromised for convenience.

The novel Easy Track motions is not only reducing voter fatigue and on-chain
gas costs for token-holders, but is also facilitating the growth of the DAO by
providing greater autonomy to the sub-committees and node operators within the
organisation.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lido-
dao.md)

[Previous📘 Lido V3 Technical Paper](/lido-v3-whitepaper)[NextLido Improvement
Proposals](/lips)

  * Why DAO?
  * Functions
  * Governance
  * Software



  * [](/)
  * Run on Lido

# Run on Lido

This section of the Lido documentation is for users who want to run any of the
Lido products, whether Node Operators, Vault owners, or Oracle Operators.

📘 Read the [Lido V3 Technical Paper](/lido-v3-whitepaper) — the vision and
architecture of stVaults

🖥️ Learn how to set up a CSM Operator with the [Community Staking
Module](/run-on-lido/csm/)

🔲 Discover how to build staking products powered by [stVaults](/run-on-
lido/stvaults/)

📄 See the protocol documentation, contracts and more in the [main section of
the docs](/)

🤝 Find support and community on [Discord](https://discord.gg/vgdPfhZ),
[Telegram](https://t.me/lidofinance)

[NextCSM Guide](/run-on-lido/csm/)



  * [](/)
  * Integrations
  * API

On this page

# API

info

Lido APIs are strictly for read-only access

Here you can find various Lido APIs which you can integrate in your app or
website:

## Lido APR​

API provides Ethereum and Lido staking APR, which include:

### Simple Moving Average Lido APR for 7 last days:​

This APR value is based on Simple Moving Average of APR values over a period
of 7 days.

    
    
    https://eth-api.lido.fi/v1/protocol/steth/apr/sma  
    

Response schema and examples are available in the [Swagger API
documentation](https://eth-
api.lido.fi/api/#/APR%20for%20Eth%20and%20stEth/ProtocolController_findSmaAPRforSTETH)

### Hoodi​

    
    
    https://eth-api-hoodi.testnet.fi/v1/protocol/steth/apr/sma  
    

### Last Lido APR for stETH​

The latest staking APR value. For legacy deployments, APR values were
collected by periodically fetching oracle report events. For Lido V2+ the
value is calculated based on [rebase
events](https://github.com/lidofinance/core/blob/v3.0.1/contracts/0.4.24/Lido.sol#L163-L171)
using the following algorithm:

    
    
    // Emits when token rebased (total supply and/or total shares were changed)  
    event TokenRebased(  
        uint256 indexed reportTimestamp,  
        uint256 timeElapsed,  
        uint256 preTotalShares,  
        uint256 preTotalEther, /* preTotalPooledEther */  
        uint256 postTotalShares,  
        uint256 postTotalEther, /* postTotalPooledEther */  
        uint256 sharesMintedAsFees /* fee part included in `postTotalShares` */  
    );  
      
    preShareRate = preTotalEther * 1e27 / preTotalShares  
    postShareRate = postTotalEther * 1e27 / postTotalShares  
      
    userAPR =  
        secondsInYear * (  
            (postShareRate - preShareRate) / preShareRate  
        ) / timeElapsed  
    
    
    
    https://eth-api.lido.fi/v1/protocol/steth/apr/last  
    

Response schema and examples are available in the [Swagger API
documentation](https://eth-
api.lido.fi/api/#/APR%20for%20Eth%20and%20stEth/ProtocolController_findLastAPRforSTETH)

#### Hoodi​

    
    
    https://eth-api-hoodi.testnet.fi/v1/protocol/steth/apr/last  
    

## Lido Reward History​

Reward History Backend provides an API which returns all stETH interactions by
an address and calculates its daily stETH rewards.

Currently, there's just one endpoint (`/`):

    
    
    https://reward-history-backend.lido.fi/?address=0x12345  
    

Response schema and examples are available in the [Swagger API
documentation](https://reward-history-backend.lido.fi/api)

### Parameters​

The only required query parameter is `address`.

Optional Parameters:

  * `currency`: USD/EUR/GBP - Fiat currency in which to display stETH denominated in fiat. **USD** by default.
  * `archiveRate`: true/false - Use an exchange rate close to the transaction time when calculating currency values instead of the current one. **true** by default.
  * `onlyRewards`: true/false - Include only rewards without transfers or stakings. **false** by default.
  * `sort`: asc/desc - Sort of transactions by blockTime. **desc** by default.
  * `skip`: number - Amount of data items to skip.
  * `limit`: number - Maximum amount of data items to respond with.

`skip` and `limit` params are used for pagination, e.g.:

    
    
    skip: 0, limit: 100 = 1 page  
    skip: 100, limit: 100 = 2 page  
    skip: 200, limit: 100 = 3 page  
    

### Hoodi​

Reward History Backend is also available on Holešky:

    
    
    http://reward-history-backend-hoodi.testnet.fi/?address=0x12345  
    

Response schema and examples are available in the [Swagger API
documentation](https://reward-history-backend-hoodi.testnet.fi/api)

## Withdrawals API​

The Withdrawals API service offers an utility for estimating the waiting time
for [withdrawals](https://docs.lido.fi/contracts/withdrawal-queue-erc721)
within the Lido on Ethereum protocol. The service is helpful for stakers,
providing insights from the moment of withdrawal request placement to its
finalization when the request becomes claimable.

See the [detailed explanation](https://github.com/lidofinance/withdrawals-
api/blob/develop/how-estimation-works.md).

### Use Cases​

  * Estimation before request: users can estimate the waiting time before placing a withdrawal request.
  * Tracking the existing request: users can track the estimated waiting time for the already placed request.

### Calculates time to withdrawals requests:​

    
    
    https://wq-api.lido.fi/v2/request-time?ids=1&ids=2  
    

Response schema and examples are available in the [Swagger API
documentation](https://wq-
api.lido.fi/api#/Request%20Time/RequestTimeController_requestsTime)

### Calculate time to withdrawal current queue:​

    
    
    https://wq-api.lido.fi/v2/request-time/calculate  
    

### Calculates time to withdrawal amount of stETH:​

    
    
    https://wq-api.lido.fi/v2/request-time/calculate?amount=32  
    

Response schema and examples are available in the [Swagger API
documentation](https://wq-
api.lido.fi/api#/Request%20Time/RequestTimeController_calculateTime)

### Hoodi​

    
    
    https://wq-api-hoodi.testnet.fi/v2/request-time?ids=1&ids=2  
    

Response schema and examples are available in the [Swagger API
documentation](https://wq-api-
hoodi.testnet.fi/api#/Request%20Time/RequestTimeController_requestsTime)

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/integrations/api.md)

[PreviousAragon Vote: Checking the EVM Script](/guides/checking-aragon-
vote)[NextWallets](/integrations/wallets)

  * Lido APR
    * Simple Moving Average Lido APR for 7 last days:
    * Hoodi
    * Last Lido APR for stETH
  * Lido Reward History
    * Parameters
    * Hoodi
  * Withdrawals API
    * Use Cases
    * Calculates time to withdrawals requests:
    * Calculate time to withdrawal current queue:
    * Calculates time to withdrawal amount of stETH:
    * Hoodi



  * [](/)
  * Introduction

On this page

# Introduction

This documentation is intended to introduce the general user to the project,
as well as to serve as a guide for anyone who may be developing software using
Lido.

❔ Get started with [FAQ](https://lido.fi/faq)

🖥 See guides for Node Operators, Vault managers or Oracle Operators at [Run on
Lido](/run-on-lido/intro)

🐞 Follow the [bug bounty](https://immunefi.com/bounty/lido/) program

💰 Access grants with [LEGO](https://lego.lido.fi)

🌐 Everything about [Lido Node Operators](https://operatorportal.lido.fi/)

🔗 Integrate your DApp following this
[guide](https://docs.lido.fi/guides/steth-integration-guide)

🔈 Participate in [governance](https://research.lido.fi/) forum

🏷️ Audit [source code](https://github.com/lidofinance)

🤝 Support, partnerships and more in [Discord](https://discord.gg/vgdPfhZ),
[Telegram](https://t.me/lidofinance)

✅ Updates in [blog](https://blog.lido.fi/) and
[Twitter](https://twitter.com/lidofinance)

ℹ️ Find support at [help center](https://help.lido.fi/)

## What is Lido​

Lido is the leading liquid staking solution - providing a simple way to get
rewards on your digital tokens. By staking with Lido your tokens remain liquid
and can be used across a range of DeFi applications, getting extra rewards.

  1. **Staking pool**. Protocol to manage deposits, staking rewards, and withdrawals. A separate one for every supported network.
  2. `st[token]`. Unlike staked tokens, the Lido `st[token]` are freely transferable instead of locked as in the case of native staking. Lido lets users operate with staked tokens by leveraging collateral, lending, farming, and other kinds of DeFi protocols.
  3. **DAO**. Lido liquid protocols management entity, responsible for picking node operators, configuring the protocol parameters and much more.

> 📝 To dive into the details of governance design and implementation, proceed
> to [DAO](/lido-dao)

  4. **Node Operators**. Entities that manage a secure and stable infrastructure for running validator clients for the benefit of the protocols. They’re dedicated staking providers who can ensure the safety of funds belonging to the protocol users and correctness of validator operations.

Ethereum is and remains a primary focus of Lido. That’s affected the
organisational structure - the governance is implemented through ERC20 `LDO`
token on Ethereum.

## Liquid staking​

### Problem statement​

Traditionally, staking in Proof-of-Stake (PoS) protocol based projects has
been about locking one’s tokens in one project for a long time and expecting a
fixed, predetermined staking reward in return. While it guarantees the return
on staked tokens much like a bond, it also limits the opportunities of
generating higher returns on those tokens from the DeFi ecosystem. If you’ve
staked all of your crypto holdings, you can’t invest or trade in more
profitable crypto pairs on exchanges.

### Solution​

Liquid staking allows using the `st[token]` in other trading opportunities to
let the user get the best of both worlds - a reward on your staked tokens, as
well as the returns from new trading opportunities. Liquid staking introduces
various fundamental benefits by:

  * Making staking process simple - no need to worry about hardware setup and maintenance;
  * Making it possible to get rewards on as small a deposit as users want (i.e, Ethereum requires minimum 32 `ETH` staked);
  * Providing the `st[token]` a building block for other applications and protocols (e.g., as collateral in lending or other trading DeFi solutions). Liquid staking gives an opportunity to maximize the potential while having the best of both worlds;
  * Providing an alternative to or even encompassing exchange staking, solo staking, and other semi-custodial and decentralised protocols.

### Comparison with other staking options​

**Solo staking** is great, but it comes with some disadvantages. Setting up a
validator node requires a pristine technical understanding, brings with it a
minimum deposit of 32 ETH in Ethereum case, slashing and offline penalties can
get very severe if the staking is managed improperly and finally the staked
amount is locked up for a significant period.

Solo staking is similar to other option **SaaS staking** in that you are
having your own validator keys. Nevertheless, with SaaS you must trust a
third-party (usually centralised), which may act maliciously, attacked or
simply regulated. Going back to the Ethereum example, there remains a
requirement for a minimum amount of 32 `ETH` staked.

Alternatively, it may be possible to produce staking through **centralised
exchanges**. Needless to say, crypto tokens and CeFi are not suited well
together from the fundamental standpoint. It is also worth mentioning the
economic aspect - by staking within some centralised entities, the user does
not receive a corresponding token in return and, thus, loses the opportunity
to perform any subsequent activity within DeFi or the same centralised entity,
where tokens were staked. Yes, APR, when staking on centralised exchanges
might be higher, but with a significant amount aggregated within the
centralised entity comes a huge potential influence to the ecosystem that was
fundamentally designed decentralised.

Through the use of a **liquid staking** solution such as Lido, users can
eliminate these inconveniences and benefit from non-custodial staking backed
by the actively maintained validators set. Liquid staking is unlocking the
potential of PoS by giving users the ability to not only stake their tokens,
but have the liquidity to use those tokens in DeFi projects that way not only
increasing rewards for the individual, but growing the staking participation
in general.

## Lido on Ethereum APR​

note

APR provides only the current estimation of the rewards without any upfront
forecasts.

> User's APR (Lido staking APR) = Protocol APR * (1 - Protocol fee)

### Protocol APR​

By Protocol APR we mean gross annual percentage rate — the overall Consensus
Layer (CL) and Execution Layer (EL) rewards received by Lido validators to
total pooled ETH estimated as moving average of the last 7 days.

### Consensus Layer​

Validators receive rewards when they perform consensus layer validators’
duties:

  * attest blocks
  * propose blocks
  * participate in sync committees.

The value of the rewards in each epoch is calculated from a base reward. This
is the base unit representing the average reward received by a validator under
optimal conditions per epoch. Base rewards are inversely proportional to the
square root of the total staked ether in Ethereum, that's why the amount of
reward per validator decreases as the overall number of validators on Ethereum
grows.

In addition to rewards, penalties and slashing can be applied to validators on
the CL.

A penalty is a form of reducing the validator’s stake, which is not online or
doesn’t meet certain specifications criteria when attesting the blocks.

Being slashed means that the misbehaving validator is forced to exit the
beacon chain at a point in the future, receiving a [number of penalties until
it leaves](https://docs.prylabs.network/docs/how-prysm-works/validator-
lifecycle#slashing-state). As a result of it, APR can also reduce.

> **Performance of Lido validators** The better the underlying operator sets
> are, the more robust, resilient, and performant the underlying protocol.
> Check [Operator Statistics and
> Metrics](https://operatorportal.lido.fi/operator-statistics-and-metrics).

Learn more about rewards and penalties -
[ethereum.org](https://ethereum.org/en/developers/docs/consensus-
mechanisms/pos/rewards-and-penalties/)

### Execution Layer​

Validators began to receive EL rewards after [the
Merge](https://ethereum.org/en/roadmap/merge/). EL rewards consist of four
parts:

  * **Priority fee** Priority fee refers to optional additional fees (for example it may refer to EIP-1559) paid directly to validators in order to incentivize them to include the given transaction in a block. Also it depends on network demand: as higher network demand, as higher could be priority fee.

  * **Maximal Extractable Value (MEV) rewards** MEV refers to the maximum value that can be extracted by the validator from block production in excess of the standard block reward and gas fees by including, excluding, and changing the order of transactions in a block.

### Rewards socialization model​

With Lido, you receive staking rewards within 24 hours of your deposit being
made, without waiting for validator activation.

### Protocol fee​

> Lido applies a 10% fee on staking rewards that are split between node
> operators and the DAO Treasury. The fee can be changed by the DAO pending a
> successful vote.

### More about APR calculation​

Please refer to the [API doc page](/integrations/api#simple-moving-average-
lido-apr-for-7-last-days) for further details.

## Security​

The security of Lido is highest priority beginning at the time of its initial
deployment, but still users should investigate risks involved with Lido before
engaging with it. We are constantly working on security improvements:

  * Using of DAO for governance decisions & to manage risk factors.
  * Having multiple audits finished (see [more](https://github.com/lidofinance/audits)).
  * Having a committee of elected, best-in-class validators to minimise staking risk.
  * Allowing staking across multiple validators (i.e. current Ethereum staking mechanism only allows to choose only a single validator)
  * Using of non-custodial staking service to eliminate counterparty risk.

In the [scorecard](https://scorecard.lido.fi/) you may find an outlined set of
attributes that we think are important for the decentralisation of the
protocol, and how Lido is faring against these targets.

> 📝 As for now, scorecard has only Ethereum related content.

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/introduction.mdx)

[Next📘 Lido V3 Technical Paper](/lido-v3-whitepaper)

  * What is Lido
  * Liquid staking
    * Problem statement
    * Solution
    * Comparison with other staking options
  * Lido on Ethereum APR
    * Protocol APR
    * Consensus Layer
    * Execution Layer
    * Rewards socialization model
    * Protocol fee
    * More about APR calculation
  * Security



  * [](/)
  * Contracts
  * LidoLocator

On this page

# LidoLocator

  * [Source code](https://github.com/lidofinance/core/blob/v3.0.1/contracts/0.8.9/LidoLocator.sol)
  * [Deployed contract](https://etherscan.io/address/0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb)

LidoLocator is the universal address book for the Lido protocol. It follows
the well-known [service
locator](https://en.wikipedia.org/wiki/Service_locator_pattern) pattern.

## Upgradability​

The contract uses [OssifiableProxy](/contracts/ossifiable-proxy) for
upgradability and does not use storage for the address book. Instead, all
addresses are embedded into the implementation's bytecode as immutables for
gas efficiency, allowing one to update them along with a proxy implementation.

## Methods​

### accountingOracle()​

Returns an address of the [AccountingOracle contract](/contracts/accounting-
oracle)

    
    
    function accountingOracle() view returns(address);  
    

### accounting()​

Returns an address of the [Accounting contract](/contracts/accounting).

    
    
    function accounting() view returns(address);  
    

### depositSecurityModule()​

Returns an address of the [DepositSecurityModule contract](/contracts/deposit-
security-module)

    
    
    function depositSecurityModule() view returns(address);  
    

### elRewardsVault()​

Returns an address of the [LidoExecutionLayerRewardsVault
contract](/contracts/lido-execution-layer-rewards-vault)

    
    
    function elRewardsVault() view returns(address);  
    

### lido()​

Returns an address of the [Lido contract](/contracts/lido)

    
    
    function lido() external view returns(address);  
    

### oracleReportSanityChecker()​

Returns an address of the [OracleReportSanityChecker
contract](/contracts/oracle-report-sanity-checker)

    
    
    function oracleReportSanityChecker() view returns(address);  
    

### burner()​

Returns an address of the [Burner contract](/contracts/burner)

    
    
    function burner() view returns(address);  
    

### stakingRouter()​

Returns an address of the [StakingRouter contract](/contracts/staking-router)

    
    
    function stakingRouter() view returns(address);  
    

### treasury()​

Returns an address of the treasury

    
    
    function treasury() view returns(address);  
    

### validatorsExitBusOracle()​

Returns an address of the [ValidatorsExitBusOracle
contract](/contracts/validators-exit-bus-oracle)

    
    
    function validatorsExitBusOracle() external view returns(address);  
    

### withdrawalQueue()​

Returns an address of the [WithdrawalQueueERC721
contract](/contracts/withdrawal-queue-erc721)

    
    
    function withdrawalQueue() view returns(address);  
    

### withdrawalVault()​

Returns an address of the [WithdrawalVault contract](/contracts/withdrawal-
vault)

    
    
    function withdrawalVault() view returns(address);  
    

### postTokenRebaseReceiver()​

Returns an address of the contract following the `IPostTokenRebaseReceiver`
interface described inside `Lido`.

    
    
    function postTokenRebaseReceiver() view returns(address);  
    

### oracleDaemonConfig()​

Returns an address of the [OracleDaemonConfig contract](/contracts/oracle-
daemon-config)

    
    
    function oracleDaemonConfig() view returns(address);  
    

### triggerableWithdrawalsGateway()​

Returns an address of the [TriggerableWithdrawalsGateway
contract](/contracts/triggerable-withdrawals-gateway)

    
    
    function triggerableWithdrawalsGateway() view returns(address);  
    

### validatorExitDelayVerifier()​

Returns an address of the [ValidatorExitDelayVerifier
contract](/contracts/validator-exit-delay-verifier)

    
    
    function validatorExitDelayVerifier() view returns(address);  
    

### predepositGuarantee()​

Returns an address of the [PredepositGuarantee
contract](/contracts/predeposit-guarantee)

    
    
    function predepositGuarantee() view returns(address);  
    

### wstETH()​

Returns an address of the [wstETH contract](/contracts/wsteth)

    
    
    function wstETH() view returns(address);  
    

### vaultHub()​

Returns an address of the [VaultHub contract](/contracts/vault-hub)

    
    
    function vaultHub() view returns(address);  
    

### vaultFactory()​

Returns an address of the [VaultFactory contract](/contracts/staking-vault-
factory)

    
    
    function vaultFactory() view returns(address);  
    

### lazyOracle()​

Returns an address of the [LazyOracle contract](/contracts/lazy-oracle)

    
    
    function lazyOracle() view returns(address);  
    

### operatorGrid()​

Returns an address of the [OperatorGrid contract](/contracts/operator-grid)

    
    
    function operatorGrid() view returns(address);  
    

### coreComponents()​

Returns a batch of core components addresses at once.

It's just a more gas-efficient way of calling several public getters at once.

    
    
    function coreComponents() view returns(  
        address elRewardsVault,  
        address oracleReportSanityChecker,  
        address stakingRouter,  
        address treasury,  
        address withdrawalQueue,  
        address withdrawalVault  
    );  
    

### oracleReportComponents()​

Returns a batch of addresses that is used specifically during oracle report
handling in the Lido contract.

It's just a more gas-efficient way of calling several public getters at once.

    
    
    function oracleReportComponents() view returns(  
        address accountingOracle,  
        address oracleReportSanityChecker,  
        address burner,  
        address withdrawalQueue,  
        address postTokenRebaseReceiver,  
        address stakingRouter,  
        address vaultHub  
    );  
    

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/contracts/lido-
locator.md)

[PreviousLido cross-chain tokens adoption guide](/token-guides/cross-chain-
tokens-guide)[NextLido](/contracts/lido)

  * Upgradability
  * Methods
    * accountingOracle()
    * accounting()
    * depositSecurityModule()
    * elRewardsVault()
    * lido()
    * oracleReportSanityChecker()
    * burner()
    * stakingRouter()
    * treasury()
    * validatorsExitBusOracle()
    * withdrawalQueue()
    * withdrawalVault()
    * postTokenRebaseReceiver()
    * oracleDaemonConfig()
    * triggerableWithdrawalsGateway()
    * validatorExitDelayVerifier()
    * predepositGuarantee()
    * wstETH()
    * vaultHub()
    * vaultFactory()
    * lazyOracle()
    * operatorGrid()
    * coreComponents()
    * oracleReportComponents()



  * [](/)
  * Lido DAO

On this page

# Lido DAO

The Lido DAO is a Decentralised Autonomous Organisation that manages the
liquid staking protocols by deciding on key parameters (e.g., setting fees,
assigning node operators and oracles, etc.) through the voting power of
governance token (`LDO`) holders. Also, the DAO will accumulate service fees
and spend them on research, development, liquidity mining incentives and
protocol upgrades.

## Why DAO?​

The DAO is the logical compromise between full centralization and
decentralisation, which allows the deployment of competitive products without
full centralization and custody on the exchanges. We do not believe that it is
possible to make a liquid staking protocol that is completely trustless in the
foreseeable future. A DAO is an optimal structure for launching Lido as:

  * DAO is essentially a decentralised entity, which is enabling a focus on community and might offer a more socially-conscious structure and consequent decision-making;
  * DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury.
  * And other management activities as well if there is a technical ability

The DAO will accumulate service fees from Lido, which is funnelled into the
insurance and development funds, distributed by the DAO.

## Functions​

Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its
efficiency and stability. The Lido DAO should do the following:

  * Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO’s goals
  * Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules
  * Approve LEGO grants to support different research and so initiatives protocol guilds
  * Payments to full-time contributors and other operational duties
  * Bug bounty program, respond to emergency
  * Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.

## Governance​

The `LDO` token governs all Lido DAO governance and network decisions to
ensure its prolonged stability and decentralised decision-making to facilitate
the growth of fair, and transparent liquid staking. The `LDO` contract address
-
[`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32).

> 📝 For more detailed information about governance, please, check out the
> [Governance](https://lido.fi/governance) page.

To have a vote in the Lido DAO, and to contribute to the determination of any
of the topics outlined above, one must hold the `LDO` governance token.
Holding `LDO` gives DAO members a vote in the future of Lido, allowing each
DAO member to have a personal say in the community. `LDO` voting weight is
proportional to the amount of `LDO` a voter holds. The more LDO on a user’s
address, the greater the decision-making power the voter gets. The exact
mechanism of `LDO` voting can be upgraded just like the other DAO
applications.

> 📝 If you have any initiatives you think will benefit the Lido protocol,
> share your thoughts in our [governance forum](https://research.lido.fi).

## Software​

The Lido DAO is an [Aragon](https://aragon.org/dao) organization. Since Aragon
provides a full end-to-end framework to build DAOs, we use its standard tools.

> 📝 The governance process only takes place within the Ethereum network. For
> other networks, this process is implemented through committee and multisig
> (we need a multisig list).

While the Aragon application is a powerful tool for DAO governance due to the
fact that it is both transparent and reliable, it is ill-suited to manage
routine operations that either have strong token-holder support and/or are
only relevant to a subsection of the DAO (e.g. the financial operations team).
For that reason, [Easy Track](https://easytrack.lido.fi/) is developed as an
efficient mechanism to assist with routine and uncontentious governance
proposals for the Lido DAO. Importantly, flexibility, and scalability is all
paramount concerns throughout the development of Easy Track, with extensive
measures taken to ensure that safety has not been compromised for convenience.

The novel Easy Track motions is not only reducing voter fatigue and on-chain
gas costs for token-holders, but is also facilitating the growth of the DAO by
providing greater autonomy to the sub-committees and node operators within the
organisation.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lido-
dao.md)

[Previous📘 Lido V3 Technical Paper](/lido-v3-whitepaper)[NextLido Improvement
Proposals](/lips)

  * Why DAO?
  * Functions
  * Governance
  * Software



  * [](/)
  * Token guides
  * stETH superuser functions

On this page

# stETH superuser functions

This guide describes the stETH control surface in Lido V3, the roles that can
change protocol behavior, and the current role holders on mainnet. It focuses
on the minimal set of contracts that can mint, burn, or pause stETH supply.

## What stETH is in Lido V3​

  * stETH is the rebasing token representing pooled ETH in the Core Lido pool
  * stVaults can mint stETH as **external shares** against overcollateralized collateral
  * Rebases are driven by oracle reports applied through [Accounting](/contracts/accounting)
  * Total supply = internal shares (Lido Core pool) + external shares (stVaults)

## Control surfaces (first principles)​

The supply of stETH can change only through the following paths:

Surface| Contract| Mutators| Notes  
---|---|---|---  
Oracle report| [Accounting](/contracts/accounting)| `handleOracleReport()`|
Applies protocol rebase and fee minting  
External shares| [VaultHub](/contracts/vault-hub)| `mintShares()`,
`burnShares()`| Mints/burns external shares for stVaults  
Burn queue| [Burner](/contracts/burner)| `requestBurnShares()`,
`commitSharesToBurn()`| Withdrawal finalization and penalties  
Module rewards| [StakingRouter](/contracts/staking-router)|
`reportRewardsMinted()`| Distributes minted shares to modules  
Emergency pause| [Lido](/contracts/lido)| `stop()`, `resume()`| Pauses core
stETH operations  
  
## Key contracts​

Contract| Address| Purpose  
---|---|---  
[Lido](/contracts/lido)|
[`0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84`](https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84)|
Core stETH token and staking pool  
[Accounting](/contracts/accounting)|
[`0x23ED611be0e1a820978875C0122F92260804cdDf`](https://etherscan.io/address/0x23ED611be0e1a820978875C0122F92260804cdDf)|
Oracle report handling and rebases  
[StakingRouter](/contracts/staking-router)|
[`0xFdDf38947aFB03C621C71b06C9C70bce73f12999`](https://etherscan.io/address/0xFdDf38947aFB03C621C71b06C9C70bce73f12999)|
Staking module routing and withdrawal credentials management  
[Burner](/contracts/burner)|
[`0xE76c52750019b80B43E36DF30bf4060EB73F573a`](https://etherscan.io/address/0xE76c52750019b80B43E36DF30bf4060EB73F573a)|
stETH burning for withdrawals  
[VaultHub](/contracts/vault-hub)|
[`0x1d201BE093d847f6446530Efb0E8Fb426d176709`](https://etherscan.io/address/0x1d201BE093d847f6446530Efb0E8Fb426d176709)|
External share minting for stVaults  
[HashConsensus](/contracts/hash-consensus)|
[`0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288`](https://etherscan.io/address/0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288)|
AccountingOracle consensus contract  
Aragon ACL|
[`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb)|
Permission registry for AragonApp-based access control  
  
## Who controls stETH behavior​

Control is governed by the Lido DAO. Roles are assigned to DAO-owned contracts
or protocol components.

Entity| Address| Description  
---|---|---  
DAO Agent|
[`0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c`](https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c)|
Holds most admin roles; executes DAO votes  
GateSeal Committee|
[`0x8772E3a2D86B9347A2688f9bc1808A6d8917760C`](https://etherscan.io/address/0x8772E3a2D86B9347A2688f9bc1808A6d8917760C)|
Emergency pause signer for GateSeal  
Reseal Manager|
[`0x7914b5a1539b97Bd0bbd155757F25FD79A522d24`](https://etherscan.io/address/0x7914b5a1539b97Bd0bbd155757F25FD79A522d24)|
Pause extension authority for GateSeal-paused apps under DualGovernance veto
escalations  
  
All protocol proxy admins are set to the Lido DAO Agent.

## Pause and resume​

**When paused** : Token transfers, approvals, and rebases are disabled. Core
protocol entry points (staking, withdrawals) revert.

Contract| Role| Role registry / owner contract| Current holder(s)| Purpose  
---|---|---|---|---  
[Lido](/contracts/lido)| `PAUSE_ROLE`| Aragon ACL
([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb))|
Unassigned| Pause protocol  
[Lido](/contracts/lido)| `RESUME_ROLE`| Aragon ACL
([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb))|
Unassigned| Resume protocol  
  
**Mutators** : `stop()`, `resume()` on [Lido](/contracts/lido)

### Emergency pause via GateSeal​

The GateSeal mechanism allows emergency pausing without a full DAO vote. The
GateSeal Committee can trigger a time-limited pause (up to 14 days). The
Reseal Manager holds both the pause and resume role for GateSeal-paused
contracts to effectively prolong the pause if needed under certain
DualGovernance veto conditions.

For current GateSeal contracts and protected apps, see the [GateSeal
registry](/contracts/gate-seal).

## Burning stETH​

Burning is routed through the [Burner](/contracts/burner) contract
([`0xE76c52750019b80B43E36DF30bf4060EB73F573a`](https://etherscan.io/address/0xE76c52750019b80B43E36DF30bf4060EB73F573a)).

Contract| Role| Role registry / owner contract| Current holder(s)| Purpose  
---|---|---|---|---  
[Burner](/contracts/burner)| `REQUEST_BURN_SHARES_ROLE`| Burner
([`0xE76c52750019b80B43E36DF30bf4060EB73F573a`](https://etherscan.io/address/0xE76c52750019b80B43E36DF30bf4060EB73F573a))|
Accounting
([`0x23ED611be0e1a820978875C0122F92260804cdDf`](https://etherscan.io/address/0x23ED611be0e1a820978875C0122F92260804cdDf)),
CSAccounting
([`0x4d72BFF1BeaC69925F8Bd12526a39BAAb069e5Da`](https://etherscan.io/address/0x4d72BFF1BeaC69925F8Bd12526a39BAAb069e5Da))|
Request burns on behalf of others  
[Burner](/contracts/burner)| `REQUEST_BURN_MY_STETH_ROLE`| Burner
([`0xE76c52750019b80B43E36DF30bf4060EB73F573a`](https://etherscan.io/address/0xE76c52750019b80B43E36DF30bf4060EB73F573a))|
Unassigned| Burn caller's own stETH  
  
**Used for** :

  * Withdrawal finalization (burning stETH to release ETH)
  * Covering slashing penalties
  * DAO-directed burns (e.g., insurance fund operations)

## Staking limits​

Controls the maximum ETH that can be staked per transaction or in total.

Contract| Role| Role registry / owner contract| Current holder(s)| Purpose  
---|---|---|---|---  
[Lido](/contracts/lido)| `STAKING_CONTROL_ROLE`| Aragon ACL
([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb))|
Unassigned| Adjust staking limits  
  
**Mutators** : `setStakingLimit()`, `removeStakingLimit()`, `pauseStaking()`,
`resumeStaking()` on [Lido](/contracts/lido)

## External shares cap (stVaults)​

External shares are stETH minted by stVaults against overcollateralized ETH.
The cap limits how much stETH can be minted externally relative to the core
pool.

Contract| Role| Role registry / owner contract| Current holder(s)| Purpose  
---|---|---|---|---  
[Lido](/contracts/lido)| `STAKING_CONTROL_ROLE`| Aragon ACL
([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb))|
Unassigned| Set external shares cap  
  
**Mutator** : `setMaxExternalRatioBP()` on [Lido](/contracts/lido)

**Current behavior** : External shares are capped as a basis point ratio of
total shares. For example, if the cap is 1000 BP (10%), and total internal
shares are 9M stETH, external shares cannot exceed 1M stETH.

**View methods** :

  * `getExternalShares()` \- Returns total external shares
  * `getExternalEther()` \- Returns ETH backing external shares
  * `getMaxExternalRatioBP()` \- Returns current cap in basis points

## Withdrawal credentials​

Controls the Ethereum withdrawal credentials for new validators deposited by
the protocol.

Contract| Role| Role registry / owner contract| Current holder(s)| Purpose  
---|---|---|---|---  
[StakingRouter](/contracts/staking-router)|
`MANAGE_WITHDRAWAL_CREDENTIALS_ROLE`| StakingRouter
([`0xFdDf38947aFB03C621C71b06C9C70bce73f12999`](https://etherscan.io/address/0xFdDf38947aFB03C621C71b06C9C70bce73f12999))|
Unassigned| Set withdrawal credentials  
  
**Mutator** : `setWithdrawalCredentials()` on
[StakingRouter](/contracts/staking-router)

This is a sensitive operation that should only occur during protocol setup or
major upgrades.

## Fees and treasury configuration​

Lever| Role / permission| Role registry / owner contract| Current holder(s)  
---|---|---|---  
Protocol fee (total)| Aragon ACL permissions on Lido| Aragon ACL
([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb))|
Unassigned  
Module fee splits| `STAKING_MODULE_MANAGE_ROLE`| StakingRouter
([`0xFdDf38947aFB03C621C71b06C9C70bce73f12999`](https://etherscan.io/address/0xFdDf38947aFB03C621C71b06C9C70bce73f12999))|
Aragon Agent
([`0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c`](https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c))  
Treasury address| Aragon ACL permissions on Lido| Aragon ACL
([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb))|
Unassigned  
  
**Contracts** : [Lido](/contracts/lido)
([`0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84`](https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84)),
[StakingRouter](/contracts/staking-router)
([`0xFdDf38947aFB03C621C71b06C9C70bce73f12999`](https://etherscan.io/address/0xFdDf38947aFB03C621C71b06C9C70bce73f12999))

Fee parameters are set on-chain and can change via DAO decisions. For current
values, see [StakingRouter](/contracts/staking-router) and related module
parameters.

Protocol fee and treasury permissions are intentionally unassigned today. The
DAO can assign them later through Aragon ACL governance; see the [permissions
transition guide](https://github.com/lidofinance/dual-
governance/blob/main/docs/permissions-transition/permissions-transition-
mainnet.md) for design context (prepared pre-V3 but still relevant on
principles).

## Oracle and accounting flow​

  1. Oracle committee members submit reports to [HashConsensus](/contracts/hash-consensus) ([`0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288`](https://etherscan.io/address/0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288))
  2. When quorum is reached, [AccountingOracle](/contracts/accounting-oracle) ([`0x852deD011285fe67063a08005c71a85690503Cee`](https://etherscan.io/address/0x852deD011285fe67063a08005c71a85690503Cee)) performs sanity checks
  3. AccountingOracle updates consensus layer state on [Lido](/contracts/lido) ([`0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84`](https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84)) via [Accounting](/contracts/accounting) ([`0x23ED611be0e1a820978875C0122F92260804cdDf`](https://etherscan.io/address/0x23ED611be0e1a820978875C0122F92260804cdDf))
  4. [Accounting](/contracts/accounting) internalizes bad debt
  5. [Accounting](/contracts/accounting) commits shares to burn via [Burner](/contracts/burner)
  6. [Accounting](/contracts/accounting) finalizes withdrawal queue requests
  7. [Accounting](/contracts/accounting) distributes protocol fees to modules and treasury
  8. [Accounting](/contracts/accounting) notifies rebase observers
  9. [Lido](/contracts/lido) emits `TokenRebased`

## On-chain verification​

**Aragon ACL roles (Lido, Voting, Agent, etc.)**

  * Use the ACL contract ([`0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb`](https://etherscan.io/address/0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb)) `hasPermission(entity, app, role)` for a specific entity.
  * Aragon ACL cannot enumerate role members on-chain. To prove a role is not granted to any contract, you must index historical `SetPermission` events off-chain (see `tests/regression/test_permissions.py` in `lidofinance/scripts`: <https://github.com/lidofinance/scripts> and <https://github.com/lidofinance/scripts/blob/master/tests/regression/test_permissions.py>).

**AccessControlEnumerable roles (Burner, VaultHub, OperatorGrid, LazyOracle,
PredepositGuarantee, StakingRouter)**

  * Use `getRoleMemberCount` / `getRoleMember` (if available) or `hasRole` to verify role holders on-chain.

## Operational implications​

### Pausing effects​

When paused...| Effect  
---|---  
Token transfers| All `transfer()` and `transferFrom()` calls revert  
Approvals| `approve()` calls revert  
Staking| `submit()` reverts;no new ETH can be staked  
Withdrawals| Withdrawal requests revert  
Rebases| AccountingOracle processing (via Accounting) can be blocked while
Lido is paused  
  
### External shares cap effects​

Cap reached...| Effect  
---|---  
stVault minting| New `mintShares()` calls from VaultHub revert  
Core pool staking| Unaffected;internal shares can still grow  
Existing stVaults| Existing minted shares unaffected;can still burn  
  
### Fee configuration effects​

Change| Effect  
---|---  
Increase protocol fee| More staking rewards go to protocol vs stakers  
Change module splits| Affects node operator vs treasury distribution  
Treasury address change| Future fee distributions go to new address  
  
## Governance references​

  * [Lido DAO Voting](https://vote.lido.fi/)
  * [Protocol levers](/guides/protocol-levers)
  * [Emergency Brakes Multisigs](/multisigs/emergency-brakes)
  * [Deployed contracts (mainnet)](/deployed-contracts)

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/token-
guides/steth-superuser-functions.md)

[PreviousAIP](/integrations/aave/aip)[NextstETH on AAVE caveats](/token-
guides/steth-on-aave-caveats)

  * What stETH is in Lido V3
  * Control surfaces (first principles)
  * Key contracts
  * Who controls stETH behavior
  * Pause and resume
    * Emergency pause via GateSeal
  * Burning stETH
  * Staking limits
  * External shares cap (stVaults)
  * Withdrawal credentials
  * Fees and treasury configuration
  * Oracle and accounting flow
  * On-chain verification
  * Operational implications
    * Pausing effects
    * External shares cap effects
    * Fee configuration effects
  * Governance references



  * [](/)
  * Staking Modules
  * CSM

On this page

# Intro

tip

If you're looking for a practical guide to run CSM on your setup, please
follow the CSM guide [here](/run-on-lido/csm/).

info

Terms `validator`, `key`, `validator key`, and `deposit data` have the same
meaning within the document.

## ∑ TL;DR​

Community Staking Module (CSM) is a permissionless staking module aimed at
attracting community stakers to participate in Lido on Ethereum protocol as
Node Operators. The only requirement to join CSM as a Node Operator is to be
able to run validators (according to the Lido on Ethereum Standard Node
Operator Protocols, aka SNOPs) and supply a [bond](/staking-modules/csm/join-
csm#bond). The stake is allocated to the validator keys in the order in which
the keys are provided and with respect to the queue [priority](/staking-
modules/csm/join-csm#priority-queues), given that the keys are valid. The
[bond](/staking-modules/csm/join-csm#bond) is not directly associated with the
actual validator's stake but instead treated as security collateral. The
[bond](/staking-modules/csm/join-csm#bond) is a characteristic of a Node
Operator; hence, it is collateral for all Node Operator's validators. This
allows for the variable [bond](/staking-modules/csm/join-csm#bond) amounts
required for the validators, depending on their index in the Node Operator's
keys storage. Typically, the rule is: the more validators the Node Operator
has, the less the [bond](/staking-modules/csm/join-csm#bond) for one
validator. Node Operators get their rewards from the [bond](/staking-
modules/csm/join-csm#bond) rebase and from the [Node Operator's
portion](/staking-modules/csm/rewards) of the staking rewards. Node Operator's
portion of the staking rewards is socialized (averaged) if the validators
perform above the [threshold](/staking-modules/csm/rewards#performance-
oracle). Accumulated CL penalties resulting in a balance reduction below the
deposit balance and stolen EL rewards are confiscated from the Node Operator's
[bond](/staking-modules/csm/join-csm#bond). Node Operators should perform
validator exits upon protocol request to avoid force ejection (via
[EIP-7002](https://eips.ethereum.org/EIPS/eip-7002)). Also, Node Operators can
voluntarily exit or eject (via
[EIP-7002](https://eips.ethereum.org/EIPS/eip-7002)) their validators.

## 📓 Glossary​

  * The [**staking router**](/contracts/staking-router) (SR) is a smart contract within the Lido on Ethereum protocol that facilitates stake allocation and rewards distribution across different modules;
  * A **staking module** (SM) is a smart contract or a set of smart contracts connected to the staking router, which:
    * maintains the underlying operator and validator sets,
    * is responsible for on/off-boarding operators,
    * maintains validator deposits, withdrawals, and exits,
    * maintains fee structure and distribution for the module and participants, etc,
    * conforms to the IStakingModule interface;
  * **[Bond](/staking-modules/csm/join-csm#bond)** \- a security collateral that Node Operators must submit before uploading validator keys into CSM. This collateral covers possible losses caused by inappropriate actions on the Node Operator's side. Once the validator exits from the Beacon chain and all losses that occurred are covered, the collateral can be claimed or reused to upload new validator keys.
  * The **Lido DAO** is a Decentralized Autonomous Organization that decides on the critical parameters of controlled liquid staking protocols through the voting power of governance token (LDO).
  * A **Node Operator** (NO) is a person or entity that runs validators;
  * [`Lido`](/contracts/lido) is a core contract of the Lido on Ethereum protocol that stores the protocol state, accepts user submissions, and includes the stETH token;
  * **stETH** is an ERC-20 token minted by [`Lido`](https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84) smart contract and representing a share of the [`totalPooledEther`](/contracts/lido#rebase);
  * **Deposit data** refers to a structure consisting of the validator’s public key and deposit signature submitted to `DepositContract`. This term can also be referred to as `keys` in the text. Validator private keys are created, stored, and managed by Node Operators exclusively;
  * `DepositContract` is the official Ethereum deposit contract for validator deposits;
  * `DepositSecurityModule` or [**DSM**](/guides/deposit-security-manual) is a set of smart contract and off-chain parts mitigating the [deposit front-run vulnerability](/guides/deposit-security-manual#the-vulnerability);
  * A validator is considered to be [**“unbonded”**](/staking-modules/csm/join-csm#unbonded-validators) when the current Node Operator [bond](/staking-modules/csm/join-csm#bond) is not sufficient to cover this validator;
  * The **Curated module** is the first Lido staking module previously referred to as [Node Operators Registry](/contracts/node-operators-registry);
  * **Easy Track** is a suite of smart contracts and an alternative veto-based voting model that streamlines routine DAO operations;
  * [**Accounting Oracle**](/contracts/accounting-oracle) is a contract which collects information submitted by the off-chain oracles about state of the Lido-participating validators and their balances, the amount of funds accumulated on the protocol vaults (i.e., withdrawal and execution layer rewards vaults), the number of exited validators, the number of withdrawal requests the protocol can process and distributes node-operator rewards and performs `stETH` token rebase;
  * [**VEBO**](/contracts/validators-exit-bus-oracle) or Validators Exit Bus Oracle is a contract that implements an on-chain "source of truth" message bus between the protocol's off-chain oracle and off-chain observers, with the main goal of delivering validator exit requests to the Lido-participating Node Operators.

## 🌎 General info​

CSM is a staking module offering permissionless entry with a [bond](/staking-
modules/csm/join-csm#bond). This module provides a clear pathway for
independent [community stakers](https://research.lido.fi/t/lido-on-ethereum-
community-validation-manifesto/3331#lido-on-ethereum-community-validation-
manifesto-1) (solo or home stakers) to enter the Lido on Ethereum protocol
(LoE) node operator set. The [bond](/staking-modules/csm/join-csm#bond)
requirement is an essential security and alignment tool that makes
permissionless entry possible without compromising the security or reliability
of the underlying staking protocol (LoE).

## 🤓 Module specifics​

All staking modules should conform to the same
[IStakingModule](https://github.com/lidofinance/core/blob/aada42242e893ea2726e629c135cd375d30575fc/contracts/0.8.9/interfaces/IStakingModule.sol)
interface. That inevitably results in modules having a lot of common or
similar components and logic. CSM is no exception here. For example, key
storage components are based on the existing [Curated module](/contracts/node-
operators-registry). However, several aspects are different and worth a
separate mention.

### Exited and Withdrawn​

The [Curated module](/contracts/node-operators-registry) uses the "exited"
statuses of the validator (both [Slashed and
Exited](https://notes.ethereum.org/7CFxjwMgQSWOHIxLgJP2Bw#44-Step-4-Slashed-
and-Exited) and [Unslashed and
Exited](https://notes.ethereum.org/7CFxjwMgQSWOHIxLgJP2Bw#45-Step-5-Unslashed-
and-Exited)) as the last meaningful status in accounting since, after this
status, the validator is no longer responsible for any duties on the Beacon
chain (except for the rare cases of the delayed sync committee participation).
CSM, in turn, needs to know about each validator's exact withdrawal balance to
decide on [bond](/staking-modules/csm/join-csm#bond) penalization. Hence, the
module uses the "exited" counter reported by the accounting oracle only to
return a correct number of "active" keys to the staking router and implements
permissionless reporting methods to report the validator's withdrawal balance
once the validator is [withdrawn](https://consensys.io/shanghai-capella-
upgrade#:~:text=Finally%2C%20the%20withdrawable%20validator%20is%20subject%20to%20the%20same%2C%20automated%20%E2%80%9Csweep%E2%80%9D%20that%20processes%20partial%20withdrawals%2C%20and%20its%20balance%20is%20withdrawn).

### Stake distribution queue​

A Node Operator must supply a [bond](/staking-modules/csm/join-csm#bond) to
upload a new validator key to CSM. It is reasonable to allocate a stake in an
order similar to the [bond](/staking-modules/csm/join-csm#bond) submission
order. For this purpose, a FIFO (first in, first out) [stake allocation
queue](/staking-modules/csm/join-csm#stake-allocation-queue) is utilized. Once
the Staking Router requests keys to make a deposit, the next `X` keys from the
queue are returned, preserving the [bond](/staking-modules/csm/join-csm#bond)
submission order. CSM v2 features a [priority queues](/staking-
modules/csm/join-csm#priority-queues) that allow certain Node Operator types
to get a limited amount of seats in the priority queue. Priority queues are
separate from the default one and are used to determine the order of keys in
the stake allocation queue.

### Node Operator structure​

The Node Operator data structure in CSM is similar to that of the [Curated
module](/contracts/node-operators-registry), with several minor differences:

  * The `name` property is omitted as redundant for the permissionless module;
  * The `rewardAddress` is used as a recipient of rewards and excess [bond](/staking-modules/csm/join-csm#bond) claims;
  * A new property, `managerAddress`, is introduced. The Node Operator should perform method calls from this address;
  * A new property, `extendedManagerPermissions`, is introduced. This option indicates whether the Node Operator's `managerAddress` has extended permissions to perform certain actions, such as changing the Node Operator's `rewardAddress`. This is useful for Node Operators utilizing a smart contract as a `rewardAddress`;
  * A new property, `totalWithdrawnKeys`, is introduced to count the total number of the withdrawn keys per Node Operator;
  * A new property, `depositableValidatorsCount`, is introduced to count the current deposit data eligible for deposits;
  * A new property, `enqueuedCount`, is introduced to keep track of the depositable keys that are in the queue. Also useful to determine depositable keys that are not in the queue at the moment;

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/staking-
modules/csm/intro.md)

[PreviousLido IPFS applications](/ipfs/apps-list)[NextIntro](/staking-
modules/csm/intro)

  * ∑ TL;DR
  * 📓 Glossary
  * 🌎 General info
  * 🤓 Module specifics
    * Exited and Withdrawn
    * Stake distribution queue
    * Node Operator structure



  * [](/)
  * Lido DAO

On this page

# Lido DAO

The Lido DAO is a Decentralised Autonomous Organisation that manages the
liquid staking protocols by deciding on key parameters (e.g., setting fees,
assigning node operators and oracles, etc.) through the voting power of
governance token (`LDO`) holders. Also, the DAO will accumulate service fees
and spend them on research, development, liquidity mining incentives and
protocol upgrades.

## Why DAO?​

The DAO is the logical compromise between full centralization and
decentralisation, which allows the deployment of competitive products without
full centralization and custody on the exchanges. We do not believe that it is
possible to make a liquid staking protocol that is completely trustless in the
foreseeable future. A DAO is an optimal structure for launching Lido as:

  * DAO is essentially a decentralised entity, which is enabling a focus on community and might offer a more socially-conscious structure and consequent decision-making;
  * DAO will be able to cover the costs of developing and upgrading the protocol from the DAO token treasury.
  * And other management activities as well if there is a technical ability

The DAO will accumulate service fees from Lido, which is funnelled into the
insurance and development funds, distributed by the DAO.

## Functions​

Lido is managed by the Lido DAO. The DAO members govern Lido to ensure its
efficiency and stability. The Lido DAO should do the following:

  * Build, deploy, update and decide on key parameters of liquid staking protocols, approve incentives for parties that contribute towards DAO’s goals
  * Node operators management. Assign initial DAO-vetted node operators, scout and qualify new node operators and penalise the existing ones slashed by chains rules
  * Approve LEGO grants to support different research and so initiatives protocol guilds
  * Payments to full-time contributors and other operational duties
  * Bug bounty program, respond to emergency
  * Accumulation of service fees from Lido, which can be funnelled into the insurance and development funds, distributed by the DAO.

## Governance​

The `LDO` token governs all Lido DAO governance and network decisions to
ensure its prolonged stability and decentralised decision-making to facilitate
the growth of fair, and transparent liquid staking. The `LDO` contract address
-
[`0x5a98fcbea516cf06857215779fd812ca3bef1b32`](https://etherscan.io/address/0x5a98fcbea516cf06857215779fd812ca3bef1b32).

> 📝 For more detailed information about governance, please, check out the
> [Governance](https://lido.fi/governance) page.

To have a vote in the Lido DAO, and to contribute to the determination of any
of the topics outlined above, one must hold the `LDO` governance token.
Holding `LDO` gives DAO members a vote in the future of Lido, allowing each
DAO member to have a personal say in the community. `LDO` voting weight is
proportional to the amount of `LDO` a voter holds. The more LDO on a user’s
address, the greater the decision-making power the voter gets. The exact
mechanism of `LDO` voting can be upgraded just like the other DAO
applications.

> 📝 If you have any initiatives you think will benefit the Lido protocol,
> share your thoughts in our [governance forum](https://research.lido.fi).

## Software​

The Lido DAO is an [Aragon](https://aragon.org/dao) organization. Since Aragon
provides a full end-to-end framework to build DAOs, we use its standard tools.

> 📝 The governance process only takes place within the Ethereum network. For
> other networks, this process is implemented through committee and multisig
> (we need a multisig list).

While the Aragon application is a powerful tool for DAO governance due to the
fact that it is both transparent and reliable, it is ill-suited to manage
routine operations that either have strong token-holder support and/or are
only relevant to a subsection of the DAO (e.g. the financial operations team).
For that reason, [Easy Track](https://easytrack.lido.fi/) is developed as an
efficient mechanism to assist with routine and uncontentious governance
proposals for the Lido DAO. Importantly, flexibility, and scalability is all
paramount concerns throughout the development of Easy Track, with extensive
measures taken to ensure that safety has not been compromised for convenience.

The novel Easy Track motions is not only reducing voter fatigue and on-chain
gas costs for token-holders, but is also facilitating the growth of the DAO by
providing greater autonomy to the sub-committees and node operators within the
organisation.

[Edit this page](https://github.com/lidofinance/docs/blob/main/docs/lido-
dao.md)

[Previous📘 Lido V3 Technical Paper](/lido-v3-whitepaper)[NextLido Improvement
Proposals](/lips)

  * Why DAO?
  * Functions
  * Governance
  * Software



  * [](/)
  * Introduction

On this page

# Introduction

## earnETH​

earnETH provides on-chain access to strategies involving ETH-denominated
digital assets. It uses defined asset selection and risk controls, supported
by transparent reporting.

### How it works​

earnETH consists of two subvaults. Each subvault specializes in its respective
strategy, and combined, they aim to deliver sustainable, risk-adjusted rewards
for earnETH users' assets. Mellow is appointed to provide curation services
for subvaults — stRATEGY and GGV.

### How deposits work​

Users can deposit ETH, wETH, wstETH, GG, or strETH with up to a 24-hour
deposit waiting period and receive the share token earnETH.

### How withdrawals work​

Users can withdraw wstETH in two steps (request + claim) with a typical
withdrawal waiting time of ~3 days.

### Curators​

  * Mellow - <https://mellow.finance/>

note

Detailed information regarding the architecture, infrastructure, and
management configurations of earnETH can be found
[here](https://metavaults.mellow.finance/architecture).

## earnUSD​

earnUSD provides on-chain access to strategies involving USD-denominated
digital assets. It uses defined asset selection and risk controls, supported
by transparent reporting.

### How it works​

Deposited tokens are allocated across yield-generating protocols through
subvaults, with returns automatically compounded into the earnUSD share token,
reflecting each depositor's share and performance. Currently there is one
subvault, curated by Mellow.

### How deposits work​

Users can deposit USDC or USDT with a 24-hour depositing waiting period and
receive the share token earnUSD.

### How withdrawals work​

Users can withdraw USDC in two steps (request + claim) with a typical
withdrawal waiting time of ~3 days.

### Curators​

  * Mellow - <https://mellow.finance/>

note

Detailed information regarding the architecture, infrastructure, and
management configurations of earnUSD can be found
[here](https://metavaults.mellow.finance/architecture).

[NextDeployments](/earn/deployment-contracts)

  * earnETH
    * How it works
    * How deposits work
    * How withdrawals work
    * Curators
  * earnUSD
    * How it works
    * How deposits work
    * How withdrawals work
    * Curators



  * [](/)
  * Guides
  * Curated Module
  * General Overview

On this page

# General Overview

Node Operators in the Curated Module manage a secure and stable infrastructure
for running Beacon validator clients for the benefit of the protocol. They’re
professional staking providers who can ensure the safety of funds belonging to
the protocol users and correctness of validator operations.

The general flow is the following:

  1. A Node Operator expresses their interest to the DAO members. Their address gets proposed to the DAO vote for inclusion to the Curated Module's Node Operator list. Note that the Node Operator address should be supplied to the DAO with zero signing keys limit.

  2. The DAO votes for including the Operator to the list of active operators. After successful voting for inclusion, the Node Operator becomes active.

  3. The Node Operator generates and submits a set of signing public keys and associated signatures for future validators that will be managed by the Operator. When generating the signatures, the Operator must use withdrawal credentials derived from the withdrawal address supplied by the DAO.

  4. The DAO members check the submitted keys for correctness and, if everything’s good, vote for approving them. After successful approval, the keys become usable by the protocol.

  5. The protocol distributes the pooled ether evenly between all active Node Operators in `32 ether` chunks. When it assigns the next deposit to a Node Operator, it takes the first non-used signing key, as well as the associated signature, from the Node Operator’s usable set and performs a deposit to the official `DepositContract`, submitting the pooled funds. At that time, the Node Operator should have the validator already running and configured with the public key being used.

  6. From this point, the Node Operator is responsible for keeping the validator associated with the signing key operable and well-behaving.

  7. The protocol includes Oracles that periodically report the combined Beacon balance of all validators launched by the protocol. When the balance increases as a result of Beacon chain rewards, a fee is taken from the amount of rewards (see below for the details on how the fee is denominated) and distributed between active Node Operators.

  8. As withdrawals are requested, protocol publishes exit requests and Node Operators exit requested validators.

## The fee​

The fee is taken as a percentage from Beacon chain rewards at the moment the
Oracles report those rewards. Oracles do that once in a while — the exact
period is decided by the DAO members via the voting process.

The total fee percentage, as well as the percentage that goes to all Node
Operators, is also decided by the DAO voting and can be changed during the
lifetime of the DAO. The Node Operators’ part of the fee is distributed
between the active Node Operators proportionally to the number of validators
that each Node Operator runs.

> For example, if Oracles report that the protocol has received 10 ether as a
> reward, the fee percentage that goes to Operators is `10%`, and there are
> two active Node Operators, running `2` and `8` validators, respectively,
> then the first operator will receive `0.2` stETH, the second — `0.8` stETH.

The fee is nominated in stETH, a liquid version of staked ETH introduced by
the Lido protocol. The tokens correspond 1:1 to the ether that the token
holder would be able get by burning their stETH if transfers were already
enabled in the Beacon chain. At any time point, the total amount of stETH
tokens is equal to the total amount of ether controlled by the protocol on
both Execution Layer and Consensus Layer sides.

When a user submits ether to the pool, they get the same amount of freshly-
minted stETH tokens. When reward is received on the Consensus Layer side, each
stETH holder’s balance increases by the same percentage that the total amount
of protocol-controlled ether has increased, corrected for the protocol fee
which is taken by [minting new stETH
tokens](https://github.com/lidofinance/lido-
dao/blob/971ac8f/contracts/0.4.24/Lido.sol#L576) to the fee recipients.

> For example, if the reward has increased the total amount of protocol-
> controlled ether by `10%`, and the total protocol fee percentage is `10%`,
> then each token holder’s balance will grow by approximately `9.09%`, and
> `10%` of the reward will be forwarded to the treasury, insurance fund and
> Node Operators.

One side effect of this is that you, as a Node Operator, will continue
receiving the percentage of protocol rewards even after you stop actively
validating, if you chose to hold stETH received as a fee.

## Expressing interest to the DAO holders​

To include a Node Operator to the protocol, DAO holders must perform a voting.
A Node Operator is defined by an address that is used for two purposes:

  1. The protocol pays the fee by minting stETH tokens to this address.
  2. The Node Operator uses this address for submitting signing keys to be used by the protocol.

Pass this address to the DAO holders along with the other relevant
information.

## Validator Exits Protocol, Penalties, and Recovering​

According to the Lido on Ethereum Validator Exits SNOP 3.0
([IPFS](https://ipfs.io/ipfs/QmW9kE61zC61PcuikCQRwn82aoTCj9yPuENGNPML9QLkSM),
[GitHub](https://github.com/lidofinance/documents-and-
policies/blob/main/Lido%20on%20Ethereum%20Standard%20Node%20Operator%20Protocol%20-%20Validator%20Exits.md)),
a Node Operator participating in the Lido on Ethereum protocol are responsible
for correctly exiting validators within a specified timeframe determined by
the protocol's requirements and rules set by the DAO.

In essence, if a Node Operator is unable to withdraw a validator within the
time specified by the `VALIDATOR_DELINQUENT_TIMEOUT_IN_SLOTS` parameter in the
`OracleDaemonConfig` contract, the accounting oracle report for that Node
Operator increases the `STUCKED` field by the number of delayed validators.

Therefore, a Node Operator is penalized if they have more `STUCKED` validators
than `REFUNDED` validators. While this condition is met, the Node Operator
receives only half of the rewards and no new stake allocations.

Once the Node Operator manages to either withdraw the required number of
validators or compensate for the lost validators and increases the `REFUNDED`
count through DAO voting, the Node Operator is considered under penalty for
the duration of the `STUCK_PENALTY_DELAY` period and then returns to the
normal state. Rewards are automatically restored to normal, but to start
receiving new stake, the Node Operator (or anyone else) must call the
permissionless method `clearNodeOperatorPenalty`.

To clear penalty please send a transaction with desired `_nodeOperatorId`:
[https://etherscan.io/address/0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5#writeProxyContract#F2](https://etherscan.io/address/0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5#writeProxyContract%23F2)

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/guides/curated-
module/general-overview.md)

[PreviousPublic Risk Disclosure (PRD)](/prd)[NextValidator
Keys](/guides/curated-module/validator-keys)

  * The fee
  * Expressing interest to the DAO holders
  * Validator Exits Protocol, Penalties, and Recovering



  * [](/)
  * Security
  * Bug Bounties with Immunefi

On this page

# Bug Bounties with Immunefi

## Program overview​

Lido Bug Bounty programs allow you to report a vulnerability and get up to
$2,000,000.

We’re using the [Immunefi platform](https://immunefi.com/bounty/lido/) — the
leading bug bounty platform for DeFi with the world's largest bounties.

[Lido Bug Bounty program](https://lido.fi/bug-bounty) focused on the
prevention of loss of user funds, denial of service, governance hijacks, data
breaches, and data leaks. We care about it and have already paid more than
$350,000 for 10 Bug Bounties.

[Edit this
page](https://github.com/lidofinance/docs/blob/main/docs/security/bugbounty.md)

[PreviousOssifiableProxy](/contracts/ossifiable-proxy)[NextLido Protocol
Audits](/security/audits)

  * Program overview



