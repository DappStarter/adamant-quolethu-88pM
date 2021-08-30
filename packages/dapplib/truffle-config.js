require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth shift pupil hockey close borrow tuition'; 
let testAccounts = [
"0x808e173dd14202472e0287c0177c9670fd0d5d7789a298641283becb5a9121bc",
"0xb3202da2b065a8eea7c82a4b87d9d72ca8779d3307a98dc76fed7ef79cbf8079",
"0x8c9dfda2e0e6d0d3bf3963c97af27d73ebd83c2e59184a79a0a42d2252af5f50",
"0xa5c3981e9c65367b1b8af1c3cf858f663ecdfa169656772141e9fd1e0fea1bfd",
"0x0df40bdf0c947d027ad7242e04ddfccd054c38216d3f2b913416a65145d68666",
"0xc7ab3e318f0074ff16b562302019de001df296b392b46849fe2c123ae226425a",
"0xf9dae52bcd508ebbb2bb85c87e16206ed19bd1bdf47144601425ece57e28c8ff",
"0x9c645306278fed01f97f68f3d70b36ea74ebd25b9143f757ed10c282c157f8e0",
"0x2d3945572c1d88aa2890b192d8ae126987637a5e0ad67f29c36fbe5265400e35",
"0xf5764e4aeffb900145630efd63dcb9da76d1eba3816bd0dbdb6895b58a09b991"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


