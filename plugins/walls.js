const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'hentai', fromMe: true, desc: "GAIA size ozel Hentai fotografi gonderir."}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://cdn.nekobot.xyz/9/1/b/248e67588a5e8039c1964c1c25868.jpg";
        r_text[1] = "https://cdn.nekobot.xyz/a/1/4/8dfddefaa8e8a15181ddbf2fb6665.jpg";
        r_text[2] = "https://i0.nekobot.xyz/1/1/e/51de8653a6a01b0b39fceacc95a5e.jpg";
        r_text[3] = "https://cdn.nekobot.xyz/a/e/2/fa60e953bca603fe26771bc96324d.jpg";
        r_text[4] = "https://cdn.nekobot.xyz/f/6/7/1482daaedee68472c01c437e231e3.jpg";
        r_text[5] = "https://i0.nekobot.xyz/8/3/4/ad9d84406262417f8db42fa26f99d.jpg";
        r_text[6] = "https://i0.nekobot.xyz/2/d/8/d81f10ece3a3ea230c1b7782e11df.jpg";
        r_text[7] = "https://cdn.nekobot.xyz/f/1/f/d77236258d5c7e925eab3337267e3.jpg";
        r_text[8] = "https://cdn.nekobot.xyz/e/a/9/35b219a76f78ce35a2eab2ae4d8b4.jpg";
        r_text[9] = "https://i0.nekobot.xyz/8/b/a/564b425d7cb79b489cdb1ed0e0c44.jpg";
        r_text[10] = "https://cdn.nekobot.xyz/a/3/b/d8eeae2f6a1ee5d6fd0dc00fd3ec4.jpg";
        r_text[11] = "https://cdn.nekobot.xyz/f/0/5/85b6bfa89467af09dd1783754fafd.jpg";
        r_text[12] = "https://cdn.nekobot.xyz/b/5/0/792b41776450581216a47cb20d919.jpg";
        r_text[13] = "https://i0.nekobot.xyz/4/0/f/e84c215fa2de0eef01354890ae8a4.jpg";
        r_text[14] = "https://cdn.nekobot.xyz/a/3/c/7c8abde12da3faec151ce8d994203.jpg";
        r_text[15] = "https://i0.nekobot.xyz/1/e/8/e1d56a1ba83166abaed47ae4fc426.jpg";
        r_text[16] = "https://cdn.nekobot.xyz/d/f/2/9610f49a20efa788fc845e0e1a9dc.jpg";
        r_text[17] = "https://i0.nekobot.xyz/2/6/0/7976fb0d864f108b6afea95297ce1.jpg";
        r_text[18] = "https://i0.nekobot.xyz/0/2/f/0fadb7a1763a8d6210d12fad46056.jpg";
        r_text[19] = "https://www.djuff.com/wp/wp-content/uploads/2017/01/18-Photos-of-Girls-Celebrating-no-Bra-Day.jpg";
        r_text[20] = "https://i.imgur.com/Iy4fvk3.jpg";
        r_text[21] = "https://i0.nekobot.xyz/3/9/7/92b4b781100f5bb09b01f21450389.jpg";
        r_text[22] = "https://i0.nekobot.xyz/8/8/e/3688d7a58b2aae8ee6598368224a5.jpg";
        r_text[23] = "https://cdn.nekobot.xyz/f/7/8/75ebfb440f75e7a4891cb3dcb066d.jpg";
        r_text[24] = "https://cdn.nekobot.xyz/a/e/8/f0ef7216fbf330255b5a6bac342cc.jpg";
        r_text[25] = "https://cdn.nekobot.xyz/e/f/8/3046e8686f6db4d0737519ec6e0e3.jpg";
        r_text[26] = "https://i0.nekobot.xyz/6/5/9/8a3574be81927dbba2205bf4bd604.jpg";
        r_text[27] = "https://i0.nekobot.xyz/4/6/1/96250d45a51e6e4219906e19459fb.jpg";
        r_text[28] = "https://i0.nekobot.xyz/7/8/8/611ea986bfbe29de7f007ae1134d1.jpg";
        r_text[29] = "https://cdn.nekobot.xyz/b/8/d/427e5f6c12b9cccda4d1cbef6b688.jpg";
        r_text[30] = "https://i0.nekobot.xyz/1/5/1/65a1052e6953378604a91118507de.jpg";
        r_text[31] = "https://i0.nekobot.xyz/0/7/b/df16e64a1899ac3ef4f3d1f42ce57.jpg";
        r_text[32] = "https://cdn.nekobot.xyz/a/4/9/ea0d0541cb01bab2e8d22c1353945.jpg";
        r_text[33] = "https://cdn.nekobot.xyz/f/0/c/0022ed9fd9139339ec90d52498f9b.jpg";
        r_text[34] = "https://i0.nekobot.xyz/2/a/c/83192abec0c92ea5bf42e55ff3c29.jpg";
        r_text[35] = "https://i0.nekobot.xyz/3/7/c/5509f82f34a561516a96a2814e5b4.jpg";
        r_text[36] = "https://cdn.nekobot.xyz/c/4/9/c9d4ea26bab5d8a9e2f6d2437be33.jpg";
        r_text[37] = "https://cdn.nekobot.xyz/e/5/0/1965cdc1dc757dca83c15ed0e151f.jpg";
        r_text[38] = "https://cdn.nekobot.xyz/9/2/e/95e149a3c90bebda5b9c2f670aa23.jpg";
        r_text[39] = "https://cdn.nekobot.xyz/a/4/7/5c251075618322a2878b0de4da17c.JPG";
        r_text[40] = "https://i0.nekobot.xyz/4/6/4/14b689730da0b881bc54421de286d.jpg";
        r_text[41] = "https://i0.nekobot.xyz/0/2/1/7ccba3d8856593cc496a62360bf81.jpg";
        r_text[42] = "https://cdn.nekobot.xyz/e/3/b/36bf3ecef18668fb23a65db9e9d6a.jpg";
        r_text[43] = "https://cdn.nekobot.xyz/a/5/d/588c48d55bf886d6ff35a5b9e7708.jpg";
        r_text[44] = "https://i0.nekobot.xyz/5/4/d/46d6f9d6376de10625d87b98b7af7.jpg";
        r_text[45] = "https://cdn.nekobot.xyz/9/e/6/8b69829a7975682905e79b10d4215.jpg";
        r_text[46] = "https://cdn.nekobot.xyz/f/6/1/63efee339f2ab71f94b776da7eb98.jpg";
        r_text[47] = "https://i0.nekobot.xyz/7/1/a/6c50e43f131164567c5d76a4084ff.jpg";
        r_text[48] = "https://i0.nekobot.xyz/4/7/1/f786dcf3e5d8be95308e73ccdc77e.jpg";
        r_text[49] = "https://i0.nekobot.xyz/5/d/1/3727f876382274a32c7199c55d845.jpg";
        r_text[50] = "https://i0.nekobot.xyz/8/5/5/4f657e1683c6b12a92e1b8458446b.jpg";
        r_text[51] = "https://i0.nekobot.xyz/1/e/a/bca2b961ffc4126d2d0ff30561571.jpg";
        r_text[52] = "https://i0.nekobot.xyz/6/9/d/895829058e682aa13680482a80538.jpg";
        r_text[53] = "https://i0.nekobot.xyz/2/0/1/dd819a8a87fa2be5046305105f425.jpg";
        r_text[54] = "https://cdn.nekobot.xyz/f/5/4/45274ced09ca2dbf73e90feb2a9b1.jpg";
        r_text[55] = "https://cdn.nekobot.xyz/f/a/6/23a725fdeb1a16f7382e0e59c5ad0.jpg";
        r_text[56] = "https://i0.nekobot.xyz/4/7/c/8a8953603e1b559957da5c4504133.jpg";
        r_text[57] = "https://i0.nekobot.xyz/7/f/b/81646fc6ff2eeff104da22a7cdcd8.jpg";
        r_text[58] = "https://cdn.nekobot.xyz/b/3/f/d8fe64d850d53c983b1ef67eb214e.jpg";
        r_text[59] = "https://i0.nekobot.xyz/3/2/c/fcf67781c84babfd5400569a06f12.jpg";
        r_text[60] = "https://i0.nekobot.xyz/6/d/f/459207bb7b7db452eeb57486b69b8.jpg";
        r_text[61] = "https://i0.nekobot.xyz/8/f/1/106658db187a732517947b4d9f676.jpg";
        r_text[62] = "https://i0.nekobot.xyz/6/4/6/db262c53bfdd9a5e414d986ff9d8a.jpg";
        r_text[63] = "https://cdn.nekobot.xyz/c/e/9/d7cafedefbb714a6c9e9b91721840.jpg";
        r_text[64] = "https://i0.nekobot.xyz/1/7/4/e35de1a7dcb64484ca07078a40e72.JPG";
        r_text[65] = "https://cdn.nekobot.xyz/e/2/7/6b140a9e8d9a6a6288bbde5edf76e.jpg";
        r_text[66] = "https://cdn.nekobot.xyz/d/c/5/6dc4a477ffa09b8f306069ecacff3.jpg";
        r_text[67] = "https://cdn.nekobot.xyz/e/e/d/fe444491159b3931fe5c7be4eb796.jpg";
        r_text[68] = "https://cdn.nekobot.xyz/b/b/3/5b064dfcb1e2c49f71935bd14ef02.jpg";
        r_text[69] = "https://cdn.nekobot.xyz/d/1/5/91296c293bdc0c646d1d1e801d133.jpg";
        r_text[70] = "https://cdn.nekobot.xyz/c/5/8/fd48c1d2d8df98bcbd154c268422d.jpg";
        r_text[71] = "https://i0.nekobot.xyz/0/f/b/8c686fdbd2dde2a581ead4796e0b1.jpg";
        r_text[72] = "https://i0.nekobot.xyz/0/2/c/4ef8d7c5826711b3a689cfa3656ca.JPG";
        r_text[73] = "https://cdn.nekobot.xyz/c/7/e/5688bb1f26d5db30e5bc92e70cc04.jpg";
        r_text[74] = "https://i0.nekobot.xyz/5/1/7/56103412aa79637723c9428761efe.jpg";
        r_text[75] = "https://cdn.nekobot.xyz/c/2/3/b72de931749b98dbf76f5f5968f26.jpg";
        r_text[76] = "https://i0.nekobot.xyz/6/e/4/02acb80db7c7d77e9fa8a213d4c6f.JPG";
        r_text[77] = "https://cdn.nekobot.xyz/b/8/2/b5819a54a6319414581ad5996e609.jpg";
        r_text[78] = "https://i0.nekobot.xyz/3/4/c/616197928c7fc4ba0acbe355aac25.JPG";
        r_text[79] = "https://i0.nekobot.xyz/7/c/2/1109daaeb58727bf5ddf5ffdaaa80.jpg";
        r_text[80] = "https://cdn.nekobot.xyz/a/a/a/e8aa653641c6a618893f71dda2191.jpg";
        r_text[81] = "https://i0.nekobot.xyz/0/c/2/1eb70c105febfd5b9619501aa073d.JPG";
        r_text[82] = "https://i0.nekobot.xyz/6/4/f/fd8ecef6612d58e8411837ed9a984.jpg";
        r_text[83] = "https://i0.nekobot.xyz/0/f/4/3c6a37a7192bbc0fccd006c737e60.jpg";
        r_text[84] = "https://i0.nekobot.xyz/4/d/2/6c89a89dfcf022226e5e5a9628093.jpg";
        r_text[85] = "https://i0.nekobot.xyz/0/f/9/c583777f32415687bbffb36a24612.JPG";
        r_text[86] = "https://cdn.nekobot.xyz/e/3/e/bb2e984957c57d877ca843a65db8f.jpg";
        r_text[87] = "https://i0.nekobot.xyz/3/e/f/15a02c3634a16b191963199a7ace8.jpg";
        r_text[88] = "https://cdn.nekobot.xyz/9/4/3/3381ea52272ba02fc540e7c8dd5e9.jpg";
        r_text[89] = "https://cdn.nekobot.xyz/e/9/a/1881f37b8d4eb095a052a510f01c0.jpg";
        r_text[90] = "https://cdn.nekobot.xyz/f/f/a/09d637b5eaa8ce83ba82e76ff1bc9.JPG";
        r_text[91] = "https://cdn.nekobot.xyz/b/2/4/3bc4bb16e7ea3a8c64dca0342ef35.jpg";
        r_text[92] = "https://cdn.nekobot.xyz/c/6/4/40f001b57c855838d86588d0f5c76.jpg";
        r_text[93] = "https://i0.nekobot.xyz/5/6/0/13d6ad5d3d2e3c098318145dec1d4.jpg";
        r_text[94] = "https://cdn.nekobot.xyz/f/1/1/6be84ad5cad31b181de0cb582f511.JPG";
        r_text[95] = "https://i0.nekobot.xyz/5/d/0/51de3c6a662bfc738e4ee6b2aec84.jpg";
        r_text[96] = "https://cdn.nekobot.xyz/c/f/a/838d5c98dd6c976d4eea8d2f8b2a4.jpg";
        r_text[97] = "https://i0.nekobot.xyz/7/0/2/a01bffa9d4711b863bad79f2830c0.jpg";
        r_text[98] = "https://i0.nekobot.xyz/2/7/d/5eb1160094df8580154091177f8e1.jpg";
        r_text[99] = "https://i0.nekobot.xyz/2/3/2/ab9153947d47178722f833bde2531.jpg";
        r_text[100] = "https://cdn.nekobot.xyz/d/0/5/ab18f8e87703b9743558cb5efd13e.jpg";
        r_text[101] = "https://i0.nekobot.xyz/6/b/3/bbba68e1647ab7aa82031d2b8f3a3.jpg";
        r_text[102] = "https://i0.nekobot.xyz/3/4/9/ecea0c5543d60ce1766ecceaaca00.jpg";
        r_text[103] = "https://cdn.nekobot.xyz/a/e/6/5aedfdbb2e08aa5dc6e7e5d4de735.jpg";
        var i = Math.floor(104*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsGAIA'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'wallpaper', fromMe: false, desc: Lang.WP}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://cdn.nekobot.xyz/9/1/b/248e67588a5e8039c1964c1c25868.jpg";
        r_text[1] = "https://cdn.nekobot.xyz/a/1/4/8dfddefaa8e8a15181ddbf2fb6665.jpg";
        r_text[2] = "https://i0.nekobot.xyz/1/1/e/51de8653a6a01b0b39fceacc95a5e.jpg";
        r_text[3] = "https://cdn.nekobot.xyz/a/e/2/fa60e953bca603fe26771bc96324d.jpg";
        r_text[4] = "https://cdn.nekobot.xyz/f/6/7/1482daaedee68472c01c437e231e3.jpg";
        r_text[5] = "https://i0.nekobot.xyz/8/3/4/ad9d84406262417f8db42fa26f99d.jpg";
        r_text[6] = "https://i0.nekobot.xyz/2/d/8/d81f10ece3a3ea230c1b7782e11df.jpg";
        r_text[7] = "https://cdn.nekobot.xyz/f/1/f/d77236258d5c7e925eab3337267e3.jpg";
        r_text[8] = "https://cdn.nekobot.xyz/e/a/9/35b219a76f78ce35a2eab2ae4d8b4.jpg";
        r_text[9] = "https://i0.nekobot.xyz/8/b/a/564b425d7cb79b489cdb1ed0e0c44.jpg";
        r_text[10] = "https://cdn.nekobot.xyz/a/3/b/d8eeae2f6a1ee5d6fd0dc00fd3ec4.jpg";
        r_text[11] = "https://cdn.nekobot.xyz/f/0/5/85b6bfa89467af09dd1783754fafd.jpg";
        r_text[12] = "https://cdn.nekobot.xyz/b/5/0/792b41776450581216a47cb20d919.jpg";
        r_text[13] = "https://i0.nekobot.xyz/4/0/f/e84c215fa2de0eef01354890ae8a4.jpg";
        r_text[14] = "https://cdn.nekobot.xyz/a/3/c/7c8abde12da3faec151ce8d994203.jpg";
        r_text[15] = "https://i0.nekobot.xyz/1/e/8/e1d56a1ba83166abaed47ae4fc426.jpg";
        r_text[16] = "https://cdn.nekobot.xyz/d/f/2/9610f49a20efa788fc845e0e1a9dc.jpg";
        r_text[17] = "https://i0.nekobot.xyz/2/6/0/7976fb0d864f108b6afea95297ce1.jpg";
        r_text[18] = "https://i0.nekobot.xyz/0/2/f/0fadb7a1763a8d6210d12fad46056.jpg";
        r_text[19] = "https://www.djuff.com/wp/wp-content/uploads/2017/01/18-Photos-of-Girls-Celebrating-no-Bra-Day.jpg";
        r_text[20] = "https://i.imgur.com/Iy4fvk3.jpg";
        r_text[21] = "https://i0.nekobot.xyz/3/9/7/92b4b781100f5bb09b01f21450389.jpg";
        r_text[22] = "https://i0.nekobot.xyz/8/8/e/3688d7a58b2aae8ee6598368224a5.jpg";
        r_text[23] = "https://cdn.nekobot.xyz/f/7/8/75ebfb440f75e7a4891cb3dcb066d.jpg";
        r_text[24] = "https://cdn.nekobot.xyz/a/e/8/f0ef7216fbf330255b5a6bac342cc.jpg";
        r_text[25] = "https://cdn.nekobot.xyz/e/f/8/3046e8686f6db4d0737519ec6e0e3.jpg";
        r_text[26] = "https://i0.nekobot.xyz/6/5/9/8a3574be81927dbba2205bf4bd604.jpg";
        r_text[27] = "https://i0.nekobot.xyz/4/6/1/96250d45a51e6e4219906e19459fb.jpg";
        r_text[28] = "https://i0.nekobot.xyz/7/8/8/611ea986bfbe29de7f007ae1134d1.jpg";
        r_text[29] = "https://cdn.nekobot.xyz/b/8/d/427e5f6c12b9cccda4d1cbef6b688.jpg";
        r_text[30] = "https://i0.nekobot.xyz/1/5/1/65a1052e6953378604a91118507de.jpg";
        r_text[31] = "https://i0.nekobot.xyz/0/7/b/df16e64a1899ac3ef4f3d1f42ce57.jpg";
        r_text[32] = "https://cdn.nekobot.xyz/a/4/9/ea0d0541cb01bab2e8d22c1353945.jpg";
        r_text[33] = "https://cdn.nekobot.xyz/f/0/c/0022ed9fd9139339ec90d52498f9b.jpg";
        r_text[34] = "https://i0.nekobot.xyz/2/a/c/83192abec0c92ea5bf42e55ff3c29.jpg";
        r_text[35] = "https://i0.nekobot.xyz/3/7/c/5509f82f34a561516a96a2814e5b4.jpg";
        r_text[36] = "https://cdn.nekobot.xyz/c/4/9/c9d4ea26bab5d8a9e2f6d2437be33.jpg";
        r_text[37] = "https://cdn.nekobot.xyz/e/5/0/1965cdc1dc757dca83c15ed0e151f.jpg";
        r_text[38] = "https://cdn.nekobot.xyz/9/2/e/95e149a3c90bebda5b9c2f670aa23.jpg";
        r_text[39] = "https://cdn.nekobot.xyz/a/4/7/5c251075618322a2878b0de4da17c.JPG";
        r_text[40] = "https://i0.nekobot.xyz/4/6/4/14b689730da0b881bc54421de286d.jpg";
        r_text[41] = "https://i0.nekobot.xyz/0/2/1/7ccba3d8856593cc496a62360bf81.jpg";
        r_text[42] = "https://cdn.nekobot.xyz/e/3/b/36bf3ecef18668fb23a65db9e9d6a.jpg";
        r_text[43] = "https://cdn.nekobot.xyz/a/5/d/588c48d55bf886d6ff35a5b9e7708.jpg";
        r_text[44] = "https://i0.nekobot.xyz/5/4/d/46d6f9d6376de10625d87b98b7af7.jpg";
        r_text[45] = "https://cdn.nekobot.xyz/9/e/6/8b69829a7975682905e79b10d4215.jpg";
        r_text[46] = "https://cdn.nekobot.xyz/f/6/1/63efee339f2ab71f94b776da7eb98.jpg";
        r_text[47] = "https://i0.nekobot.xyz/7/1/a/6c50e43f131164567c5d76a4084ff.jpg";
        r_text[48] = "https://i0.nekobot.xyz/4/7/1/f786dcf3e5d8be95308e73ccdc77e.jpg";
        r_text[49] = "https://i0.nekobot.xyz/5/d/1/3727f876382274a32c7199c55d845.jpg";
        r_text[50] = "https://i0.nekobot.xyz/8/5/5/4f657e1683c6b12a92e1b8458446b.jpg";
        r_text[51] = "https://i0.nekobot.xyz/1/e/a/bca2b961ffc4126d2d0ff30561571.jpg";
        r_text[52] = "https://i0.nekobot.xyz/6/9/d/895829058e682aa13680482a80538.jpg";
        r_text[53] = "https://i0.nekobot.xyz/2/0/1/dd819a8a87fa2be5046305105f425.jpg";
        r_text[54] = "https://cdn.nekobot.xyz/f/5/4/45274ced09ca2dbf73e90feb2a9b1.jpg";
        r_text[55] = "https://cdn.nekobot.xyz/f/a/6/23a725fdeb1a16f7382e0e59c5ad0.jpg";
        r_text[56] = "https://i0.nekobot.xyz/4/7/c/8a8953603e1b559957da5c4504133.jpg";
        r_text[57] = "https://i0.nekobot.xyz/7/f/b/81646fc6ff2eeff104da22a7cdcd8.jpg";
        r_text[58] = "https://cdn.nekobot.xyz/b/3/f/d8fe64d850d53c983b1ef67eb214e.jpg";
        r_text[59] = "https://i0.nekobot.xyz/3/2/c/fcf67781c84babfd5400569a06f12.jpg";
        r_text[60] = "https://i0.nekobot.xyz/6/d/f/459207bb7b7db452eeb57486b69b8.jpg";
        r_text[61] = "https://i0.nekobot.xyz/8/f/1/106658db187a732517947b4d9f676.jpg";
        r_text[62] = "https://i0.nekobot.xyz/6/4/6/db262c53bfdd9a5e414d986ff9d8a.jpg";
        r_text[63] = "https://cdn.nekobot.xyz/c/e/9/d7cafedefbb714a6c9e9b91721840.jpg";
        r_text[64] = "https://i0.nekobot.xyz/1/7/4/e35de1a7dcb64484ca07078a40e72.JPG";
        r_text[65] = "https://cdn.nekobot.xyz/e/2/7/6b140a9e8d9a6a6288bbde5edf76e.jpg";
        r_text[66] = "https://cdn.nekobot.xyz/d/c/5/6dc4a477ffa09b8f306069ecacff3.jpg";
        r_text[67] = "https://cdn.nekobot.xyz/e/e/d/fe444491159b3931fe5c7be4eb796.jpg";
        r_text[68] = "https://cdn.nekobot.xyz/b/b/3/5b064dfcb1e2c49f71935bd14ef02.jpg";
        r_text[69] = "https://cdn.nekobot.xyz/d/1/5/91296c293bdc0c646d1d1e801d133.jpg";
        r_text[70] = "https://cdn.nekobot.xyz/c/5/8/fd48c1d2d8df98bcbd154c268422d.jpg";
        r_text[71] = "https://i0.nekobot.xyz/0/f/b/8c686fdbd2dde2a581ead4796e0b1.jpg";
        r_text[72] = "https://i0.nekobot.xyz/0/2/c/4ef8d7c5826711b3a689cfa3656ca.JPG";
        r_text[73] = "https://cdn.nekobot.xyz/c/7/e/5688bb1f26d5db30e5bc92e70cc04.jpg";
        r_text[74] = "https://i0.nekobot.xyz/5/1/7/56103412aa79637723c9428761efe.jpg";
        r_text[75] = "https://cdn.nekobot.xyz/c/2/3/b72de931749b98dbf76f5f5968f26.jpg";
        r_text[76] = "https://i0.nekobot.xyz/6/e/4/02acb80db7c7d77e9fa8a213d4c6f.JPG";
        r_text[77] = "https://cdn.nekobot.xyz/b/8/2/b5819a54a6319414581ad5996e609.jpg";
        r_text[78] = "https://i0.nekobot.xyz/3/4/c/616197928c7fc4ba0acbe355aac25.JPG";
        r_text[79] = "https://i0.nekobot.xyz/7/c/2/1109daaeb58727bf5ddf5ffdaaa80.jpg";
        r_text[80] = "https://cdn.nekobot.xyz/a/a/a/e8aa653641c6a618893f71dda2191.jpg";
        r_text[81] = "https://i0.nekobot.xyz/0/c/2/1eb70c105febfd5b9619501aa073d.JPG";
        r_text[82] = "https://i0.nekobot.xyz/6/4/f/fd8ecef6612d58e8411837ed9a984.jpg";
        r_text[83] = "https://i0.nekobot.xyz/0/f/4/3c6a37a7192bbc0fccd006c737e60.jpg";
        r_text[84] = "https://i0.nekobot.xyz/4/d/2/6c89a89dfcf022226e5e5a9628093.jpg";
        r_text[85] = "https://i0.nekobot.xyz/0/f/9/c583777f32415687bbffb36a24612.JPG";
        r_text[86] = "https://cdn.nekobot.xyz/e/3/e/bb2e984957c57d877ca843a65db8f.jpg";
        r_text[87] = "https://i0.nekobot.xyz/3/e/f/15a02c3634a16b191963199a7ace8.jpg";
        r_text[88] = "https://cdn.nekobot.xyz/9/4/3/3381ea52272ba02fc540e7c8dd5e9.jpg";
        r_text[89] = "https://cdn.nekobot.xyz/e/9/a/1881f37b8d4eb095a052a510f01c0.jpg";
        r_text[90] = "https://cdn.nekobot.xyz/f/f/a/09d637b5eaa8ce83ba82e76ff1bc9.JPG";
        r_text[91] = "https://cdn.nekobot.xyz/b/2/4/3bc4bb16e7ea3a8c64dca0342ef35.jpg";
        r_text[92] = "https://cdn.nekobot.xyz/c/6/4/40f001b57c855838d86588d0f5c76.jpg";
        r_text[93] = "https://i0.nekobot.xyz/5/6/0/13d6ad5d3d2e3c098318145dec1d4.jpg";
        r_text[94] = "https://cdn.nekobot.xyz/f/1/1/6be84ad5cad31b181de0cb582f511.JPG";
        r_text[95] = "https://i0.nekobot.xyz/5/d/0/51de3c6a662bfc738e4ee6b2aec84.jpg";
        r_text[96] = "https://cdn.nekobot.xyz/c/f/a/838d5c98dd6c976d4eea8d2f8b2a4.jpg";
        r_text[97] = "https://i0.nekobot.xyz/7/0/2/a01bffa9d4711b863bad79f2830c0.jpg";
        r_text[98] = "https://i0.nekobot.xyz/2/7/d/5eb1160094df8580154091177f8e1.jpg";
        r_text[99] = "https://i0.nekobot.xyz/2/3/2/ab9153947d47178722f833bde2531.jpg";
        r_text[100] = "https://cdn.nekobot.xyz/d/0/5/ab18f8e87703b9743558cb5efd13e.jpg";
        r_text[101] = "https://i0.nekobot.xyz/6/b/3/bbba68e1647ab7aa82031d2b8f3a3.jpg";
        r_text[102] = "https://i0.nekobot.xyz/3/4/9/ecea0c5543d60ce1766ecceaaca00.jpg";
        r_text[103] = "https://cdn.nekobot.xyz/a/e/6/5aedfdbb2e08aa5dc6e7e5d4de735.jpg";
        var i = Math.floor(104 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsGAIA'})

    }));
    Asena.addCommand({pattern: 'wallpaper', fromMe: true, desc: Lang.WP, dontAddCommandList: true}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://cdn.nekobot.xyz/9/1/b/248e67588a5e8039c1964c1c25868.jpg";
        r_text[1] = "https://cdn.nekobot.xyz/a/1/4/8dfddefaa8e8a15181ddbf2fb6665.jpg";
        r_text[2] = "https://i0.nekobot.xyz/1/1/e/51de8653a6a01b0b39fceacc95a5e.jpg";
        r_text[3] = "https://cdn.nekobot.xyz/a/e/2/fa60e953bca603fe26771bc96324d.jpg";
        r_text[4] = "https://cdn.nekobot.xyz/f/6/7/1482daaedee68472c01c437e231e3.jpg";
        r_text[5] = "https://i0.nekobot.xyz/8/3/4/ad9d84406262417f8db42fa26f99d.jpg";
        r_text[6] = "https://i0.nekobot.xyz/2/d/8/d81f10ece3a3ea230c1b7782e11df.jpg";
        r_text[7] = "https://cdn.nekobot.xyz/f/1/f/d77236258d5c7e925eab3337267e3.jpg";
        r_text[8] = "https://cdn.nekobot.xyz/e/a/9/35b219a76f78ce35a2eab2ae4d8b4.jpg";
        r_text[9] = "https://i0.nekobot.xyz/8/b/a/564b425d7cb79b489cdb1ed0e0c44.jpg";
        r_text[10] = "https://cdn.nekobot.xyz/a/3/b/d8eeae2f6a1ee5d6fd0dc00fd3ec4.jpg";
        r_text[11] = "https://cdn.nekobot.xyz/f/0/5/85b6bfa89467af09dd1783754fafd.jpg";
        r_text[12] = "https://cdn.nekobot.xyz/b/5/0/792b41776450581216a47cb20d919.jpg";
        r_text[13] = "https://i0.nekobot.xyz/4/0/f/e84c215fa2de0eef01354890ae8a4.jpg";
        r_text[14] = "https://cdn.nekobot.xyz/a/3/c/7c8abde12da3faec151ce8d994203.jpg";
        r_text[15] = "https://i0.nekobot.xyz/1/e/8/e1d56a1ba83166abaed47ae4fc426.jpg";
        r_text[16] = "https://cdn.nekobot.xyz/d/f/2/9610f49a20efa788fc845e0e1a9dc.jpg";
        r_text[17] = "https://i0.nekobot.xyz/2/6/0/7976fb0d864f108b6afea95297ce1.jpg";
        r_text[18] = "https://i0.nekobot.xyz/0/2/f/0fadb7a1763a8d6210d12fad46056.jpg";
        r_text[19] = "https://www.djuff.com/wp/wp-content/uploads/2017/01/18-Photos-of-Girls-Celebrating-no-Bra-Day.jpg";
        r_text[20] = "https://i.imgur.com/Iy4fvk3.jpg";
        r_text[21] = "https://i0.nekobot.xyz/3/9/7/92b4b781100f5bb09b01f21450389.jpg";
        r_text[22] = "https://i0.nekobot.xyz/8/8/e/3688d7a58b2aae8ee6598368224a5.jpg";
        r_text[23] = "https://cdn.nekobot.xyz/f/7/8/75ebfb440f75e7a4891cb3dcb066d.jpg";
        r_text[24] = "https://cdn.nekobot.xyz/a/e/8/f0ef7216fbf330255b5a6bac342cc.jpg";
        r_text[25] = "https://cdn.nekobot.xyz/e/f/8/3046e8686f6db4d0737519ec6e0e3.jpg";
        r_text[26] = "https://i0.nekobot.xyz/6/5/9/8a3574be81927dbba2205bf4bd604.jpg";
        r_text[27] = "https://i0.nekobot.xyz/4/6/1/96250d45a51e6e4219906e19459fb.jpg";
        r_text[28] = "https://i0.nekobot.xyz/7/8/8/611ea986bfbe29de7f007ae1134d1.jpg";
        r_text[29] = "https://cdn.nekobot.xyz/b/8/d/427e5f6c12b9cccda4d1cbef6b688.jpg";
        r_text[30] = "https://i0.nekobot.xyz/1/5/1/65a1052e6953378604a91118507de.jpg";
        r_text[31] = "https://i0.nekobot.xyz/0/7/b/df16e64a1899ac3ef4f3d1f42ce57.jpg";
        r_text[32] = "https://cdn.nekobot.xyz/a/4/9/ea0d0541cb01bab2e8d22c1353945.jpg";
        r_text[33] = "https://cdn.nekobot.xyz/f/0/c/0022ed9fd9139339ec90d52498f9b.jpg";
        r_text[34] = "https://i0.nekobot.xyz/2/a/c/83192abec0c92ea5bf42e55ff3c29.jpg";
        r_text[35] = "https://i0.nekobot.xyz/3/7/c/5509f82f34a561516a96a2814e5b4.jpg";
        r_text[36] = "https://cdn.nekobot.xyz/c/4/9/c9d4ea26bab5d8a9e2f6d2437be33.jpg";
        r_text[37] = "https://cdn.nekobot.xyz/e/5/0/1965cdc1dc757dca83c15ed0e151f.jpg";
        r_text[38] = "https://cdn.nekobot.xyz/9/2/e/95e149a3c90bebda5b9c2f670aa23.jpg";
        r_text[39] = "https://cdn.nekobot.xyz/a/4/7/5c251075618322a2878b0de4da17c.JPG";
        r_text[40] = "https://i0.nekobot.xyz/4/6/4/14b689730da0b881bc54421de286d.jpg";
        r_text[41] = "https://i0.nekobot.xyz/0/2/1/7ccba3d8856593cc496a62360bf81.jpg";
        r_text[42] = "https://cdn.nekobot.xyz/e/3/b/36bf3ecef18668fb23a65db9e9d6a.jpg";
        r_text[43] = "https://cdn.nekobot.xyz/a/5/d/588c48d55bf886d6ff35a5b9e7708.jpg";
        r_text[44] = "https://i0.nekobot.xyz/5/4/d/46d6f9d6376de10625d87b98b7af7.jpg";
        r_text[45] = "https://cdn.nekobot.xyz/9/e/6/8b69829a7975682905e79b10d4215.jpg";
        r_text[46] = "https://cdn.nekobot.xyz/f/6/1/63efee339f2ab71f94b776da7eb98.jpg";
        r_text[47] = "https://i0.nekobot.xyz/7/1/a/6c50e43f131164567c5d76a4084ff.jpg";
        r_text[48] = "https://i0.nekobot.xyz/4/7/1/f786dcf3e5d8be95308e73ccdc77e.jpg";
        r_text[49] = "https://i0.nekobot.xyz/5/d/1/3727f876382274a32c7199c55d845.jpg";
        r_text[50] = "https://i0.nekobot.xyz/8/5/5/4f657e1683c6b12a92e1b8458446b.jpg";
        r_text[51] = "https://i0.nekobot.xyz/1/e/a/bca2b961ffc4126d2d0ff30561571.jpg";
        r_text[52] = "https://i0.nekobot.xyz/6/9/d/895829058e682aa13680482a80538.jpg";
        r_text[53] = "https://i0.nekobot.xyz/2/0/1/dd819a8a87fa2be5046305105f425.jpg";
        r_text[54] = "https://cdn.nekobot.xyz/f/5/4/45274ced09ca2dbf73e90feb2a9b1.jpg";
        r_text[55] = "https://cdn.nekobot.xyz/f/a/6/23a725fdeb1a16f7382e0e59c5ad0.jpg";
        r_text[56] = "https://i0.nekobot.xyz/4/7/c/8a8953603e1b559957da5c4504133.jpg";
        r_text[57] = "https://i0.nekobot.xyz/7/f/b/81646fc6ff2eeff104da22a7cdcd8.jpg";
        r_text[58] = "https://cdn.nekobot.xyz/b/3/f/d8fe64d850d53c983b1ef67eb214e.jpg";
        r_text[59] = "https://i0.nekobot.xyz/3/2/c/fcf67781c84babfd5400569a06f12.jpg";
        r_text[60] = "https://i0.nekobot.xyz/6/d/f/459207bb7b7db452eeb57486b69b8.jpg";
        r_text[61] = "https://i0.nekobot.xyz/8/f/1/106658db187a732517947b4d9f676.jpg";
        r_text[62] = "https://i0.nekobot.xyz/6/4/6/db262c53bfdd9a5e414d986ff9d8a.jpg";
        r_text[63] = "https://cdn.nekobot.xyz/c/e/9/d7cafedefbb714a6c9e9b91721840.jpg";
        r_text[64] = "https://i0.nekobot.xyz/1/7/4/e35de1a7dcb64484ca07078a40e72.JPG";
        r_text[65] = "https://cdn.nekobot.xyz/e/2/7/6b140a9e8d9a6a6288bbde5edf76e.jpg";
        r_text[66] = "https://cdn.nekobot.xyz/d/c/5/6dc4a477ffa09b8f306069ecacff3.jpg";
        r_text[67] = "https://cdn.nekobot.xyz/e/e/d/fe444491159b3931fe5c7be4eb796.jpg";
        r_text[68] = "https://cdn.nekobot.xyz/b/b/3/5b064dfcb1e2c49f71935bd14ef02.jpg";
        r_text[69] = "https://cdn.nekobot.xyz/d/1/5/91296c293bdc0c646d1d1e801d133.jpg";
        r_text[70] = "https://cdn.nekobot.xyz/c/5/8/fd48c1d2d8df98bcbd154c268422d.jpg";
        r_text[71] = "https://i0.nekobot.xyz/0/f/b/8c686fdbd2dde2a581ead4796e0b1.jpg";
        r_text[72] = "https://i0.nekobot.xyz/0/2/c/4ef8d7c5826711b3a689cfa3656ca.JPG";
        r_text[73] = "https://cdn.nekobot.xyz/c/7/e/5688bb1f26d5db30e5bc92e70cc04.jpg";
        r_text[74] = "https://i0.nekobot.xyz/5/1/7/56103412aa79637723c9428761efe.jpg";
        r_text[75] = "https://cdn.nekobot.xyz/c/2/3/b72de931749b98dbf76f5f5968f26.jpg";
        r_text[76] = "https://i0.nekobot.xyz/6/e/4/02acb80db7c7d77e9fa8a213d4c6f.JPG";
        r_text[77] = "https://cdn.nekobot.xyz/b/8/2/b5819a54a6319414581ad5996e609.jpg";
        r_text[78] = "https://i0.nekobot.xyz/3/4/c/616197928c7fc4ba0acbe355aac25.JPG";
        r_text[79] = "https://i0.nekobot.xyz/7/c/2/1109daaeb58727bf5ddf5ffdaaa80.jpg";
        r_text[80] = "https://cdn.nekobot.xyz/a/a/a/e8aa653641c6a618893f71dda2191.jpg";
        r_text[81] = "https://i0.nekobot.xyz/0/c/2/1eb70c105febfd5b9619501aa073d.JPG";
        r_text[82] = "https://i0.nekobot.xyz/6/4/f/fd8ecef6612d58e8411837ed9a984.jpg";
        r_text[83] = "https://i0.nekobot.xyz/0/f/4/3c6a37a7192bbc0fccd006c737e60.jpg";
        r_text[84] = "https://i0.nekobot.xyz/4/d/2/6c89a89dfcf022226e5e5a9628093.jpg";
        r_text[85] = "https://i0.nekobot.xyz/0/f/9/c583777f32415687bbffb36a24612.JPG";
        r_text[86] = "https://cdn.nekobot.xyz/e/3/e/bb2e984957c57d877ca843a65db8f.jpg";
        r_text[87] = "https://i0.nekobot.xyz/3/e/f/15a02c3634a16b191963199a7ace8.jpg";
        r_text[88] = "https://cdn.nekobot.xyz/9/4/3/3381ea52272ba02fc540e7c8dd5e9.jpg";
        r_text[89] = "https://cdn.nekobot.xyz/e/9/a/1881f37b8d4eb095a052a510f01c0.jpg";
        r_text[90] = "https://cdn.nekobot.xyz/f/f/a/09d637b5eaa8ce83ba82e76ff1bc9.JPG";
        r_text[91] = "https://cdn.nekobot.xyz/b/2/4/3bc4bb16e7ea3a8c64dca0342ef35.jpg";
        r_text[92] = "https://cdn.nekobot.xyz/c/6/4/40f001b57c855838d86588d0f5c76.jpg";
        r_text[93] = "https://i0.nekobot.xyz/5/6/0/13d6ad5d3d2e3c098318145dec1d4.jpg";
        r_text[94] = "https://cdn.nekobot.xyz/f/1/1/6be84ad5cad31b181de0cb582f511.JPG";
        r_text[95] = "https://i0.nekobot.xyz/5/d/0/51de3c6a662bfc738e4ee6b2aec84.jpg";
        r_text[96] = "https://cdn.nekobot.xyz/c/f/a/838d5c98dd6c976d4eea8d2f8b2a4.jpg";
        r_text[97] = "https://i0.nekobot.xyz/7/0/2/a01bffa9d4711b863bad79f2830c0.jpg";
        r_text[98] = "https://i0.nekobot.xyz/2/7/d/5eb1160094df8580154091177f8e1.jpg";
        r_text[99] = "https://i0.nekobot.xyz/2/3/2/ab9153947d47178722f833bde2531.jpg";
        r_text[100] = "https://cdn.nekobot.xyz/d/0/5/ab18f8e87703b9743558cb5efd13e.jpg";
        r_text[101] = "https://i0.nekobot.xyz/6/b/3/bbba68e1647ab7aa82031d2b8f3a3.jpg";
        r_text[102] = "https://i0.nekobot.xyz/3/4/9/ecea0c5543d60ce1766ecceaaca00.jpg";
        r_text[103] = "https://cdn.nekobot.xyz/a/e/6/5aedfdbb2e08aa5dc6e7e5d4de735.jpg";
        var i = Math.floor(104 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsGAIA'})

    }));
}
