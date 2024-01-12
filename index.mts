import { config } from 'dotenv';
config();
import { Fluence, ClientConfig } from "@fluencelabs/js-client";
// dotenv.config()
// import { Fluence, ClientConfig, } from "@fluencelabs/js-client/";

//   import {
//     generateKeyPairFromSeed,
//     generateKeyPair,
//     unmarshalPublicKey,
//   } from "@libp2p/crypto/keys";
//   import type { PrivateKey, PublicKey } from "@libp2p/interface/keys";
//   import type { PeerId } from "@libp2p/interface/peer-id";
//   import { createFromPrivKey } from "@libp2p/peer-id-factory";
//   import bs58 from "bs58";
//   import { toUint8Array } from "js-base64";
  
//   import { KeyPairOptions } from "../clientPeer/types.js";
  
//   export class KeyPair {
//     private publicKey: PublicKey;
  
//     private constructor(
//       private privateKey: PrivateKey,
//       private libp2pPeerId: PeerId,
//     ) {
//       this.publicKey = privateKey.public;
//     }
  
//     /**
//      * Key pair in libp2p format. Used for backward compatibility with the current FluencePeer implementation
//      */
//     getLibp2pPeerId() {
//       return this.libp2pPeerId;
//     }
  
//     /**
//      * Return public key inferred from private key
//      */
//     getPublicKey() {
//       return this.publicKey.bytes;
//     }
  
//     /**
//      * Generates new KeyPair from ed25519 private key represented as a 32 byte array
//      * @param seed - Any sequence of 32 bytes
//      * @returns - Promise with the created KeyPair
//      */
//     static async fromEd25519SK(seed: Uint8Array): Promise<KeyPair> {
//       const key = await generateKeyPairFromSeed("Ed25519", seed, 256);
//       const lib2p2Pid = await createFromPrivKey(key);
//       return new KeyPair(key, lib2p2Pid);
//     }
  
//     /**
//      * Generates new KeyPair with a random secret key
//      * @returns - Promise with the created KeyPair
//      */
//     static async randomEd25519(): Promise<KeyPair> {
//       const key = await generateKeyPair("Ed25519");
//       const lib2p2Pid = await createFromPrivKey(key);
//       return new KeyPair(key, lib2p2Pid);
//     }
  
//     static verifyWithPublicKey(
//       publicKey: Uint8Array,
//       message: Uint8Array,
//       signature: Uint8Array,
//     ) {
//       return unmarshalPublicKey(publicKey).verify(message, signature);
//     }
  
//     getPeerId(): string {
//       return this.libp2pPeerId.toString();
//     }
  
//     /**
//      * @returns 32 byte private key
//      */
//     toEd25519PrivateKey(): Uint8Array {
//       return this.privateKey.marshal().subarray(0, 32);
//     }
  
//     signBytes(data: Uint8Array): Promise<Uint8Array> {
//       return this.privateKey.sign(data);
//     }
  
//     verify(data: Uint8Array, signature: Uint8Array): Promise<boolean> {
//       return this.publicKey.verify(data, signature);
//     }
//   }
  
//   export const fromBase64Sk = (sk: string): Promise<KeyPair> => {
//     const skArr = toUint8Array(sk);
//     return KeyPair.fromEd25519SK(skArr);
//   };
  
//   export const fromBase58Sk = (sk: string): Promise<KeyPair> => {
//     const skArr = bs58.decode(sk);
//     return KeyPair.fromEd25519SK(skArr);
//   };
  
//   export const fromOpts = (opts: KeyPairOptions): Promise<KeyPair> => {
//     if (opts.source === "random") {
//       return KeyPair.randomEd25519();
//     }
  
//     return KeyPair.fromEd25519SK(opts.source);
//   };

const nodes = [
    {
      "peerId": "12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN",
      "multiaddr": "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN"
    },
    {
      "peerId": "12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z",
      "multiaddr": "/ip4/127.0.0.1/tcp/9992/ws/p2p/12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z"
    },
    {
      "peerId": "12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip",
      "multiaddr": "/ip4/127.0.0.1/tcp/9993/ws/p2p/12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip"
    }
  ];

function stringChecksum(str: any) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum % 255;
}

(async () => {
    // create a 32 lengthed array from 0-255
    const spaces = [
        {
            name: 'closet_1'
        },{
            name: 'closet_2'
        },{
            name: 'bathroom'
        },{
            name: 'livingroom_1' // 0xwolf
        },{
            name: 'livingroom_2'
        },{
            name: 'livingroom_3'
        },{
            name: 'livingroom_4'
        },{
            name: 'livingroom_5'
        },{
            name: 'diningroom'
        },{
            name: 'kitchen'
        },{
            name: 'window_1'
        },{
            name: 'window_2'
        },{
            name: 'window_3'
        },{
            name: 'window_4'
        },{
            name: 'window_5'
        }
    ]


    const library: any = {
        0: '🃟',
        1: '⚚',
        2: '♕',
        3: '⚘',
        4: '♖',
        5: '♔',
        6: '☂',
        7: '♘',
        8: '☮',
        9: '☯',
        10: '☸',
        11: '⚖',
        12: '♱',
        13: '☠',
        14: '♻',
        15: '☢',
        16: '☖',
        17: '★',
        18: '☽',
        19: '☼',
        20: '⚱',
        21: '⚬',
        22: '∅',
        23: 'RED',
        24: 'ORANGE',
        25: 'YELLOW',
        26: 'GREEN',
        27: 'CYAN',
        28: '◨',
        29: '❍',
        30: '☉',
        31: '☿',
        32: '♀',
        33: '♁',
        34: '♂',
        35: '⚳',
        36: '♃',
        37: '♄',
        38: '♅',
        39: '♆',
        40: '♇',
        41: '⚀',
        42: 'Birch 𐂷 BEITH',
        43: 'Rowan 𐂷 LUIS',
        44: 'Alder 𐂷 FEARN',
        45: 'Willow 𐂷 SAILLE',
        46: 'Ash 𐂷 NUIN',
        47: 'Hawthon 𐂷 HUATHE',
        48: 'Oak 𐂷 DUIR',
        49: 'Holly 𐂷 TINNE',
        50: 'Hazel 𐂷 COLL',
        51: 'Apple 𐂷 QUERT',
        52: 'Vine 𐂷 MUIN',
        53: 'Ivy 𐂷 GORT',
        54: 'Reed 𐂷 NGETAL',
        55: 'Blackthorn 𐂷 STRAIF',
        56: 'Elder 𐂷 RUIS',
        57: 'Silver Fir 𐂷 AILIM',
        58: 'Furze 𐂷 OHN',
        59: 'Heather 𐂷 UR',
        60: 'Poplar 𐂷 EADHA',
        61: 'Yew 𐂷 IOHO',
        62: 'The Grove 𐂷 KOAD',
        63: 'Spindle 𐂷 OIR',
        64: 'Honeysuckle 𐂷 UNILEAND',
        65: 'Beech 𐂷 PHAGOS',
        66: 'The Sea 𐂷 MOR',
        67: '⚁',
        68: 'The Self ᛗ MANNAZ',
        69: 'Partnership ᚷ GEBO',
        70: 'Signals ᚫ ANSUZ',
        71: 'Seperation ᛟ OTHILA',
        72: 'Strength ᚢ URUZ',
        73: 'Initiatian ᛈ PERTH',
        74: 'Constraint ᚾ NAUTHIZ',
        75: 'Fertility ᛝ INGUZ',
        76: 'Defense ᛇ EIHWAZ',
        77: 'Protection ᛉ ALGIZ',
        78: 'Posessions ᛓ FEHU',
        79: 'Joy ᚹ WUNJO',
        80: 'Harvest ᛃ JERA',
        81: 'Opening ᚲ KANO',
        82: 'Warrior ᛏ TEIWAZ',
        83: 'Growth ᛒ BERKANA',
        84: 'Movement ᛖ EHWAZ',
        85: 'Flow ᛐ LAGUZ',
        86: 'Disruption ᚺ HAGALAZ',
        87: 'Journey ᚱ RAIDO',
        88: 'Gateway ᚦ THURISAZ',
        89: 'Breakthrough ᛞ DAGAZ',
        90: 'Standstill ᛁ ISA',
        91: 'Wholeness ᛲ SOWELU',
        92: 'Unknowable  ODIN',
        93: '⚂',
        94: '🜁',
        95: '🜂',
        96: '🜃',
        97: '🜄',
        98: '⚃',
        99: '䷀',
        100: '䷁',
        101: '䷂',
        102: '䷃',
        103: '䷄',
        104: '䷅',
        105: '䷆',
        106: '䷇',
        107: '䷈',
        108: '䷉',
        109: '䷊',
        110: '䷋',
        111: '䷌',
        112: '䷍',
        113: '䷎',
        114: '䷏',
        115: '䷐',
        116: '䷑',
        117: '䷒',
        118: '䷓',
        119: '䷔',
        120: '䷕',
        121: '䷖',
        122: '䷗',
        123: '䷘', // 25
        124: '䷙',
        125: '䷚',
        126: '䷛',
        127: '䷜',
        128: '䷝',
        129: '䷞',
        130: '䷟',
        131: '䷠',
        132: '䷡',
        133: '䷢',
        134: '䷣',
        135: '䷤',
        136: '䷥',
        137: '䷦',
        138: '䷧', // 40
        139: '䷨',
        140: '䷩',
        141: '䷪',
        142: '䷫',
        143: '䷬',
        144: '䷭',
        145: '䷮',
        146: '䷯',
        147: '䷰',
        148: '䷱', // 50
        149: '䷲',
        150: '䷳',
        151: '䷴',
        152: '䷵',
        153: '䷶',
        154: '䷷',
        155: '䷸',
        156: '䷹', /// 58
        157: '䷺',
        158: '䷻',
        159: '䷼',
        160: '䷽',
        161: '䷾',
        162: '䷿',
        163: '¤',
        164: '🃕',
        165: '🂢',
        166: '🃉',
        167: '🂾',
        168: '🃃',
        169: '🂣',
        170: '🃋',
        171: '🂶',
        172: '🃍',
        173: '🂮',
        174: '🃞',
        175: '🂪',
        176: 'MOONSTONE',
        177: 'LAPIS_LAZULI',
        178: 'FLOWER_AGATE',
        179: 'MOSS_AGATE',
        180: 'SHAKTI',
        181: 'SUNSTONE',
        182: 'HEMATITE',
        183: 'AQUAMARINE',
        184: 'MALACHITE',
        185: 'ARAGONITE',
        186: 'BLACK_TOURMALINE',
        187: 'TOURQUISE',
        188: 'CALCITE',
        189: 'ROSE_QUARTZ',
        190: 'FLOURITE',
        191: 'PINK_AMETHYST',
        192: 'SMOKY_AMAZONITE',
        193: 'CITRINE',
        194: 'PEACH_SELENITE',
        195: 'SUPER_SEVEN',
        196: 'LABRADORITE',
        197: 'LARIMAR',
        198: 'LACE_AGATE',
        199: 'PYRITE',
        200: 'RED_JASPER',
        201: 'APOPHYLLITE',
        202: 'OPAL',
        203: 'EMERALD',
        204: 'HERKIMER_DIAMOND',
        205: 'AZURITE',
        206: 'AMMONITE',
        207: 'DESERT_JASPER',
        208: 'SPIRIT_QUARTZ',
        209: '⚄',
        210: '☌',
        211: '⚯',
        212: '□',
        213: '♈︎',
        214: '⚹',
        215: '⚯',
        216: '□',
        217: 'WOOD',
        218: 'METAL',
        219: '⇠',
        220: '⇡',
        221: '⇢',
        222: '⇣',
        223: '꩜',
        224: '❀',
        225: '𑗘',
        226: '♡',
        227: '▲',
        228: 'FRIDAY',
        229: '⚅',
        230: 'WOLF',
        231: 'CAT',
        232: 'ROOSTER',
        233: 'COW',
        234: 'BUFFALO',
        235: 'SPIDER',
        236: 'HORSE',
        237: 'SNAKE',
        238: 'FISH',
        239: 'FOX',
        240: 'BAT',
        241: 'MONKEY',
        242: 'TURTLE',
        243: 'BIRD',
        244: 'GOAT',
        245: 'MALKUTH',
        246: 'YESOD',
        247: 'HOD',
        248: 'NETZACH',
        249: 'TIPARETH',
        250: 'GEBURH',
        251: 'CHESED',
        252: 'DAATH',
        253: 'BINAH',
        254: 'CHOKMAH',
        255: 'KETER'
      }

    // Check if pkey exists in .env
    // if (process.env.pkey) {
        // console.log('Private key already exists in .env file.');
        const keys: any = []
        spaces.map((space: any) => {
            console.log(process.env[space])
            keys.push(process.env[space.name])
        })
        // return spaces;
    // }

    console.log(keys)
    for(let i = 0; i < spaces.length; i++){
        await Fluence.connect(nodes[0].multiaddr, {
            keyPair: { type: 'Ed25519', source: keys[i] }
        } as ClientConfig);
        const input = (await Fluence.getClient()).getPeerId();
        console.log('~~~~~~~')
        console.log(spaces[i])
        console.log(stringChecksum(input),'~' ,library[stringChecksum(input)]);
        console.log('connected ', input)
    }
})()