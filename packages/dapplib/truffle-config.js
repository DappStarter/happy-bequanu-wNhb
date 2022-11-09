require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stomach crawl shift promote hover praise army general'; 
let testAccounts = [
"0xe8dd8000010ec91d93927319fd116a9f59204189b9c2b3ebcde2359161c584b3",
"0x12fa6e10c4523afaa4c2c81dfbd5df2a4ea5e177a104c3c31bc177d51681c3ad",
"0x0a521ff1f767ff79643b4faaa6fdd7d003cf7f0cd9b8a80b71da79fc2a29bccb",
"0x279bf18a4cc30d4f5c885fd0c6f2281a3c4da239d3949a6e17aeadd2f0402380",
"0x217a41fbb644c688955754a612cf79b142b4fd5eabf991eefca8709a6d257776",
"0xed91890298b7e28e89034d3292b3da2295c31889f64ce8ca3418289861a62f1d",
"0x7eb3f676425aeb47926396033d3db081cfb4c2b99f47e83e98bc96480c75d71c",
"0x9b32aa2a8ac75f3869a3b2b2687b1fbc1f1bf5fa9a435bd490a7ce790173857d",
"0x2516702d192cd33c4babeae8bfb2bb3bd6dc1848a708756c025fe85fe407ad7b",
"0xd5336c06376bb47d526e451676f74d765febfd3b380056c91bc1140acf56259f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

