function _0x1d12(){const _0x40ff4d=['onLoginSuccess','errMsg','AnwVu','FeSRL','onGroupListUpdate','登录失败','onLoginFailed','consoleLogLevel','get','1164430szAGfO','jRFJC','NFQVN','ESuWy','./nt_qq/global','JMGal','curVersion','数据库初始化失败','getLoginList','qrcodeUrl','LocalLoginInfoList','session','length','getBuddyList','catch','sVbNi','ybGDn','NodeQQNTWrapperUtil','6FjIOtW','YjjiW','uid','read','floor','CHegj','-v2.db','140022013','onUserLoggedIn','ZwjZI','base64','HvOyg','bkjxk','addKernelGroupListener','NodeIDispatcherAdapter','fUbVZ','has','result','OeeVm','yCoIZ','9QPwTwW','NodeIKernelLoginListener','createMemberListScene','devUid','onSessionInitComplete','GMjhj','140022008','constructor','NpxeP','GBQTI','updateMsg','upnJJ','pngBase64QrcodeData','kkJQc','启动失败:\x20','loginListener','没有可快速登录的QQ号','XmSvL','ynjil','NodeIQQNTWrapperSession','lZnEG','_GW_B','packet_received','XzYLT','map','onQRCodeLoginSucceed','fileLogLevel','gYaRg','ProfileListener','isDelete','getGroupService','recallTime','NodeIKernelMsgListener','\x20has\x20no\x20method\x20','kJjnP','addListener','then','init','packet_sent','tMVxV','data:image/png;base64,','WfDwn','当前账号(','[KickedOffLine]\x20[','YGPGb','1832368intdUa','getBuddyService',')\x20在线状态变更','consoleLog','NOYHU','EzMac','replace','init\x20failed\x20','VEbLN','groupMemberList_MainWindow','dataPathGlobal','initSession','135331sTccWZ','initDataListener','onRecvMsg','GoBer','buddyList','proxyHandler','onMsgInfoListUpdate','getMsgByLongId','MsgListener','engine','message_received','onQRCodeSessionFailed','onProfileDetailInfoChanged','createHash','TXAmA','passwordLogin','util','快速登录失败\x20','LtKkq','uin','initWithDeskTopConfig','md5','54146fRbGPm','getQRCodePicture','initConfig','quickLogin','JcmfS','onBuddyListChange','onLoginSuccessFuncList','cVjBy','MvBlc','42JJgiCa','name','iQDhi','forEach','eRzcM','dEyKt','assign','Windows\x2010\x20Pro','split','vngeD','sceneId','infos','mCzYV',')已登录,无法重复登录','1064804RssmxW','onMemberInfoChange','hZnRR','addKernelMsgListener','onLineDev','addKernelBuddyListener','loginService','账号设备(','93465yaniMY','initSession\x20failed','onMemberListChange','Hvihd','./NapCat/data','GroupListener','last_message_time','本账号数据/缓存目录：','startNT','addKernelProfileListener','tipsDesc','dataPath','resolve','onKickedOffLine','getQuickLoginList','nRRSb','onQRCodeGetPicture','delete','fMsEs','Srmyi','getNextMemberList','gGsEX','353095blpNXt','message_sent','bQriD','NodeIQQNTWrapperEngine','NodeIGlobalAdapter','vcIcA','mkdirSync','YyUnS','getProfileService','getNTUserDataInfoConfig','V1_WIN_NQ_','CagEo','set','tipsTitle','hex','now','groupCode','NodeIDependsAdapter','find','HSqDo'];_0x1d12=function(){return _0x40ff4d;};return _0x1d12();}const _0x2911ea=_0x3fa5;(function(_0x37a430,_0x32d237){const _0x4463f0=_0x3fa5,_0x46457d=_0x37a430();while(!![]){try{const _0x5b0536=-parseInt(_0x4463f0(0x11a))/0x1+parseInt(_0x4463f0(0xfb))/0x2*(parseInt(_0x4463f0(0x98))/0x3)+parseInt(_0x4463f0(0x112))/0x4+-parseInt(_0x4463f0(0x130))/0x5+-parseInt(_0x4463f0(0x104))/0x6*(parseInt(_0x4463f0(0xe5))/0x7)+parseInt(_0x4463f0(0xd9))/0x8+-parseInt(_0x4463f0(0xac))/0x9*(parseInt(_0x4463f0(0x86))/0xa);if(_0x5b0536===_0x32d237)break;else _0x46457d['push'](_0x46457d['shift']());}catch(_0x417ea8){_0x46457d['push'](_0x46457d['shift']());}}}(_0x1d12,0x2099f));import _0x583b7a from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x237c05 from'node:path';function _0x3fa5(_0x1aeb19,_0x1d3e15){const _0x1d121f=_0x1d12();return _0x3fa5=function(_0x3fa5cc,_0x39c0b8){_0x3fa5cc=_0x3fa5cc-0x75;let _0x3f611e=_0x1d121f[_0x3fa5cc];return _0x3f611e;},_0x3fa5(_0x1aeb19,_0x1d3e15);}import _0x3dff12 from'node:os';import _0x35445a from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/core/utils/db';import{sleep}from'@/common/utils/helper';import _0x119ded from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat,uid2UinMap}from'@/core/data';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x2911ea(0x91)];[_0x2911ea(0xf5)];[_0x2911ea(0xee)];['loginListener'];[_0x2911ea(0x118)];[_0x2911ea(0x101)]=[];[_0x2911ea(0xea)]={'get'(target,prop,receiver){const _0x3d2c8f=_0x2911ea,LsOZdu={'GPVlK':function(callee,param1){return callee(param1);},'YjjiW':function(x,y){return x===y;},'WfDwn':'undefined'};if(LsOZdu[_0x3d2c8f(0x99)](typeof target[prop],LsOZdu[_0x3d2c8f(0xd5)]))return(...args)=>{const _0x4f4057=_0x3d2c8f;LsOZdu['GPVlK'](logDebug,target[_0x4f4057(0xb3)][_0x4f4057(0x105)]+_0x4f4057(0xcd)+prop);};return Reflect['get'](target,prop,receiver);}};constructor(){const _0x1a7a20=_0x2911ea,_0x2316fb={'YyUnS':function(_0x352c38,_0x3cf685){return _0x352c38(_0x3cf685);},'cVjBy':function(_0x31ce86,_0x1706a9){return _0x31ce86+_0x1706a9;},'yCoIZ':_0x1a7a20(0xd6),'GoBer':_0x1a7a20(0x111),'mqxSq':_0x1a7a20(0x8d),'jRFJC':function(_0x14ea9d,_0x260ed1,_0x2b9879){return _0x14ea9d(_0x260ed1,_0x2b9879);},'OeeVm':function(_0x465fe1,_0x3ced88,_0x1d57e5){return _0x465fe1(_0x3ced88,_0x1d57e5);},'PBRSi':function(_0x53b9a4,_0x5d07f9){return _0x53b9a4==_0x5d07f9;},'JcmfS':function(_0x23f353,_0x4a9604){return _0x23f353==_0x4a9604;},'NpxeP':function(_0x173539,_0x342a78,_0x311b2d){return _0x173539(_0x342a78,_0x311b2d);},'XmSvL':_0x1a7a20(0x82)};this['engine']=new _0x583b7a[(_0x1a7a20(0x133))](),this['util']=new _0x583b7a[(_0x1a7a20(0x97))](),this[_0x1a7a20(0x118)]=new _0x583b7a['NodeIKernelLoginService'](),this[_0x1a7a20(0x91)]=new _0x583b7a[(_0x1a7a20(0xbf))](),this['loginListener']=new LoginListener(),this[_0x1a7a20(0xbb)][_0x1a7a20(0xa0)]=_0x119efd=>{const _0x520e2c=_0x1a7a20;_0x2316fb['YyUnS'](logError,_0x2316fb[_0x520e2c(0x102)](_0x2316fb[_0x520e2c(0xab)],_0x119efd)+_0x2316fb[_0x520e2c(0xe8)]);},this[_0x1a7a20(0xbb)][_0x1a7a20(0xc5)]=_0x5a4dcc=>{const _0x4c6882=_0x1a7a20,_0x333e0a={'CHegj':function(_0x3ffaeb,_0x467908,_0x3bad6b){return _0x3ffaeb(_0x467908,_0x3bad6b);},'Srmyi':_0x2316fb['mqxSq'],'zbuEp':function(_0x350aa5,_0x21369a,_0x5034b8){return _0x2316fb['jRFJC'](_0x350aa5,_0x21369a,_0x5034b8);},'HvOyg':function(_0x3d07e2,_0xc6481c){return _0x3d07e2(_0xc6481c);},'upnJJ':function(_0x14a531,_0x3f9453){const _0x13c60c=_0x3fa5;return _0x2316fb[_0x13c60c(0x137)](_0x14a531,_0x3f9453);},'ybGDn':function(_0x463522,_0x3aa70c,_0x559bc3){const _0xd1045c=_0x3fa5;return _0x2316fb[_0xd1045c(0x87)](_0x463522,_0x3aa70c,_0x559bc3);},'nRRSb':_0x4c6882(0x121)};this[_0x4c6882(0xe4)](_0x5a4dcc['uin'],_0x5a4dcc['uid'])[_0x4c6882(0xd0)](_0x87289e=>{const _0x3cc5b4=_0x4c6882,_0x484e71={'NFQVN':function(_0x57fa9d,_0x2fc923,_0x11e2ab){return _0x57fa9d(_0x2fc923,_0x11e2ab);},'gYaRg':_0x333e0a[_0x3cc5b4(0x12d)]};selfInfo['uin']=_0x5a4dcc[_0x3cc5b4(0xf8)],selfInfo[_0x3cc5b4(0x9a)]=_0x5a4dcc[_0x3cc5b4(0x9a)],napCatConfig[_0x3cc5b4(0x9b)](),_0x333e0a['zbuEp'](setLogLevel,napCatConfig[_0x3cc5b4(0xc6)],napCatConfig[_0x3cc5b4(0x84)]),_0x333e0a[_0x3cc5b4(0xa3)](enableFileLog,napCatConfig['fileLog']),_0x333e0a[_0x3cc5b4(0xa3)](enableConsoleLog,napCatConfig[_0x3cc5b4(0xdc)]),_0x333e0a[_0x3cc5b4(0xb7)](setLogSelfInfo,selfInfo);const _0x47a101=_0x237c05['resolve'](this[_0x3cc5b4(0x125)],_0x3cc5b4(0x11e));_0x35445a[_0x3cc5b4(0x136)](_0x47a101,{'recursive':!![]}),_0x333e0a[_0x3cc5b4(0x96)](logDebug,_0x333e0a[_0x3cc5b4(0x129)],_0x47a101),dbUtil[_0x3cc5b4(0xd1)](_0x237c05[_0x3cc5b4(0x126)](_0x47a101,'./'+_0x5a4dcc['uin']+_0x3cc5b4(0x9e)))[_0x3cc5b4(0xd0)](()=>{const _0x559cae=_0x3cc5b4,_0xc92918={'tMVxV':function(_0x4a2f92,_0x2d88be,_0x43b0b1){const _0x26115a=_0x3fa5;return _0x333e0a[_0x26115a(0x9d)](_0x4a2f92,_0x2d88be,_0x43b0b1);},'AnwVu':function(_0x39946e,_0x4586cf){return _0x39946e instanceof _0x4586cf;}};this[_0x559cae(0xe6)](),this[_0x559cae(0x101)][_0x559cae(0xc4)](_0x48d28f=>{const _0x5cc720=_0x559cae;new Promise((_0x2d8760,_0x3bfd1e)=>{const _0xf4ddd4=_0x3fa5,_0x45fb68=_0xc92918[_0xf4ddd4(0xd3)](_0x48d28f,_0x5a4dcc['uin'],_0x5a4dcc[_0xf4ddd4(0x9a)]);_0xc92918[_0xf4ddd4(0x7f)](_0x45fb68,Promise)&&_0x45fb68['then'](_0x2d8760)['catch'](_0x3bfd1e);})[_0x5cc720(0xd0)]();});})[_0x3cc5b4(0x94)](_0x3b62e3=>{const _0x518e6f=_0x3cc5b4;_0x484e71[_0x518e6f(0x88)](logError,_0x484e71[_0x518e6f(0xc7)],_0x3b62e3);});})['catch'](_0x478f00=>{const _0x15f529=_0x4c6882;logError(_0x15f529(0x11b),_0x478f00);throw new Error(_0x15f529(0xba)+JSON['stringify'](_0x478f00));});},this[_0x1a7a20(0xbb)][_0x1a7a20(0xf0)]=(_0x5a6078,_0x4909cb,_0xd52686)=>{const _0x389ecb=_0x1a7a20;_0x2316fb[_0x389ecb(0xaa)](logError,_0x389ecb(0x82),_0xd52686),_0x2316fb['PBRSi'](_0x5a6078,0x1)&&_0x2316fb[_0x389ecb(0xff)](_0x4909cb,0x3)&&this[_0x389ecb(0x118)]['getQRCodePicture']();},this[_0x1a7a20(0xbb)][_0x1a7a20(0x83)]=_0xbd540=>{const _0x48655b=_0x1a7a20;_0x2316fb[_0x48655b(0xb4)](logError,_0x2316fb[_0x48655b(0xbd)],_0xbd540);},this['loginListener']=new Proxy(this[_0x1a7a20(0xbb)],this[_0x1a7a20(0xea)]),this[_0x1a7a20(0x118)]['addKernelLoginListener'](new _0x583b7a[(_0x1a7a20(0xad))](this['loginListener'])),this[_0x1a7a20(0xfd)]();}get['dataPath'](){const _0x30c8fd=_0x2911ea;let _0x31100c=this[_0x30c8fd(0xf5)][_0x30c8fd(0x139)]();return!_0x31100c&&(_0x31100c=_0x237c05[_0x30c8fd(0x126)](_0x3dff12['homedir'](),'./.config/QQ'),_0x35445a[_0x30c8fd(0x136)](_0x31100c,{'recursive':!![]})),_0x31100c;}get[_0x2911ea(0xe3)](){const _0x215a13=_0x2911ea,_0x4a5a38={'ynjil':_0x215a13(0x8a)};return _0x237c05[_0x215a13(0x126)](this['dataPath'],_0x4a5a38[_0x215a13(0xbe)]);}[_0x2911ea(0xfd)](){const _0x26c002=_0x2911ea,_0x5e3b1d={'GBQTI':_0x26c002(0x10b)};this[_0x26c002(0xee)][_0x26c002(0xf9)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x26c002(0x8c)],'os_version':_0x5e3b1d[_0x26c002(0xb5)],'use_xlog':!![],'qua':_0x26c002(0x13a)+qqVersionConfigInfo[_0x26c002(0x8c)][_0x26c002(0xdf)]('-','_')+_0x26c002(0xc1),'global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x583b7a[(_0x26c002(0x134))](new GlobalAdapter())),this[_0x26c002(0x118)][_0x26c002(0xfd)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x26c002(0xe3)],'clientVer':qqVersionConfigInfo[_0x26c002(0x8c)],'hostName':hostname});}[_0x2911ea(0xe4)](_0x3e161d,_0x400539){const _0x33bf22=_0x2911ea,_0xd78f0={'Hvihd':function(_0x2373d9,_0x7f39ae){return _0x2373d9===_0x7f39ae;},'lZnEG':function(_0x472488,_0x180d73){return _0x472488(_0x180d73);},'HSqDo':function(_0x503fea,_0x1f8984,_0x3cf7d4,_0x19f246){return _0x503fea(_0x1f8984,_0x3cf7d4,_0x19f246);},'XzYLT':function(_0x46106f,_0x5b6624){return _0x46106f+_0x5b6624;},'FeSRL':_0x33bf22(0xe0)};return new Promise((_0x5eff25,_0x145e3f)=>{const _0x2c0d69=_0x33bf22,_0x4914c8=_0xd78f0[_0x2c0d69(0x7c)](genSessionConfig,_0x3e161d,_0x400539,this['dataPath']),_0x26adc5=new SessionListener();_0x26adc5[_0x2c0d69(0xb0)]=_0x429e63=>{const _0x279754=_0x2c0d69;if(_0xd78f0[_0x279754(0x11d)](_0x429e63,0x0))return _0xd78f0[_0x279754(0xc0)](_0x5eff25,0x0);_0x145e3f(_0x429e63);},this[_0x2c0d69(0x91)][_0x2c0d69(0xd1)](_0x4914c8,new _0x583b7a[(_0x2c0d69(0x7a))](new DependsAdapter()),new _0x583b7a[(_0x2c0d69(0xa6))](new DispatcherAdapter()),new _0x583b7a['NodeIKernelSessionListener'](_0x26adc5));try{this['session'][_0x2c0d69(0x122)](0x0);}catch(_0x31d97d){try{this['session']['startNT']();}catch(_0x266a11){_0xd78f0['lZnEG'](_0x145e3f,_0xd78f0[_0x2c0d69(0xc3)](_0xd78f0[_0x2c0d69(0x80)],_0x266a11));}}});}['initDataListener'](){const _0x540519=_0x2911ea,_0x4ec9aa={'TGYss':function(_0x277e3f,_0x417b79){return _0x277e3f(_0x417b79);},'fUbVZ':function(_0x158f16,_0x3a4e90){return _0x158f16+_0x3a4e90;},'ESuWy':_0x540519(0x119),'uwhqT':_0x540519(0xdb),'GapAd':function(_0x1c082e,_0x3d60f5){return _0x1c082e(_0x3d60f5);},'eRzcM':function(_0x122f77,_0x3baba6){return _0x122f77+_0x3baba6;},'kJjnP':_0x540519(0xd7),'GMjhj':function(_0x131d9c,_0xe9e96e){return _0x131d9c===_0xe9e96e;},'MllsC':function(_0x285975,_0x580344){return _0x285975/_0x580344;},'dEyKt':function(_0x18cb61,_0x4b5895){return _0x18cb61/_0x4b5895;},'bQriD':function(_0x2d2998,_0x25bdf9){return _0x2d2998===_0x25bdf9;},'gJMTQ':_0x540519(0xe2),'sVbNi':function(_0x1e1763,_0x3263ef,_0x3021e4){return _0x1e1763(_0x3263ef,_0x3021e4);}},_0x3cb479=new MsgListener();_0x3cb479[_0x540519(0x116)]=_0x293084=>{_0x293084['map'](_0x652950=>{const _0x4bb28e=_0x3fa5;_0x652950['clientType']===0x2&&_0x4ec9aa['TGYss'](log,_0x4ec9aa[_0x4bb28e(0xa7)](_0x4ec9aa[_0x4bb28e(0x89)]+_0x652950[_0x4bb28e(0xaf)],_0x4ec9aa['uwhqT']));});},_0x3cb479[_0x540519(0x127)]=_0xbe75c=>{const _0xfd642e=_0x540519;_0x4ec9aa['GapAd'](log,_0x4ec9aa[_0xfd642e(0x108)](_0x4ec9aa[_0xfd642e(0xce)]+_0xbe75c[_0xfd642e(0x76)]+']\x20',_0xbe75c[_0xfd642e(0x124)]));},_0x3cb479[_0x540519(0xeb)]=_0x3de20a=>{const _0x46bafa=_0x540519,_0xf44ded={'kkJQc':function(_0x413a2c,_0x1ec906){const _0x420725=_0x3fa5;return _0x4ec9aa[_0x420725(0xb1)](_0x413a2c,_0x1ec906);}};stat[_0x46bafa(0xc2)]+=0x1,_0x3de20a[_0x46bafa(0xc4)](_0x1921f6=>{const _0x3b785b=_0x46bafa;_0xf44ded[_0x3b785b(0xb9)](_0x1921f6[_0x3b785b(0xcb)],'0')?dbUtil['addMsg'](_0x1921f6)['then']()[_0x3b785b(0x94)]():dbUtil[_0x3b785b(0xec)](_0x1921f6['msgId'])[_0x3b785b(0xd0)](_0xa136f=>{const _0x224236=_0x3b785b;_0xa136f&&(_0xa136f[_0x224236(0xcb)]=_0x1921f6['recallTime'],dbUtil[_0x224236(0xb6)](_0xa136f)[_0x224236(0xd0)]());});});},_0x3cb479['onAddSendMsg']=_0x40cef8=>{const _0x3efa72=_0x540519;stat[_0x3efa72(0xd2)]+=0x1,stat[_0x3efa72(0x131)]+=0x1,stat[_0x3efa72(0x120)]=Math['floor'](_0x4ec9aa['MllsC'](Date['now'](),0x3e8));},_0x3cb479[_0x540519(0xe7)]=_0x27af53=>{const _0x5cd5ed=_0x540519;stat[_0x5cd5ed(0xc2)]+=0x1,stat[_0x5cd5ed(0xef)]+=_0x27af53[_0x5cd5ed(0x92)],stat[_0x5cd5ed(0x120)]=Math[_0x5cd5ed(0x9c)](_0x4ec9aa[_0x5cd5ed(0x109)](Date[_0x5cd5ed(0x78)](),0x3e8));},_0x3cb479['onRecvSysMsg']=(..._0x45fd97)=>{const _0x74f245=_0x540519;stat[_0x74f245(0xc2)]+=0x1;},this[_0x540519(0xcf)](_0x3cb479);const _0x515ffd=new BuddyListener();_0x515ffd[_0x540519(0x100)]=_0x5819b1=>{const _0x5616f0=_0x540519;rawFriends[_0x5616f0(0x92)]=0x0,rawFriends['push'](..._0x5819b1);for(const _0x8d4a50 of _0x5819b1){for(const _0x3f4a4d of _0x8d4a50[_0x5616f0(0xe9)]){const _0x5ad559=friends[_0x5616f0(0x85)](_0x3f4a4d[_0x5616f0(0x9a)]);uid2UinMap[_0x3f4a4d[_0x5616f0(0x9a)]]=_0x3f4a4d[_0x5616f0(0xf8)],_0x5ad559?Object[_0x5616f0(0x10a)](_0x5ad559,_0x3f4a4d):friends[_0x5616f0(0x75)](_0x3f4a4d[_0x5616f0(0x9a)],_0x3f4a4d);}}},this[_0x540519(0xcf)](_0x515ffd),this['session'][_0x540519(0xda)]()[_0x540519(0x93)](!![])[_0x540519(0xd0)](_0x237b2b=>{});const _0x2d9a74=new ProfileListener();_0x2d9a74[_0x540519(0xf1)]=_0x1b886d=>{const _0x5ea93c=_0x540519;_0x4ec9aa[_0x5ea93c(0x132)](_0x1b886d[_0x5ea93c(0x9a)],selfInfo[_0x5ea93c(0x9a)])&&Object[_0x5ea93c(0x10a)](selfInfo,_0x1b886d);},_0x2d9a74['onSelfStatusChanged']=_0x528e33=>{},this['addListener'](_0x2d9a74);const _0x47a961=new GroupListener();_0x47a961[_0x540519(0x81)]=(_0x46acce,_0x980136)=>{const _0x406dd3=_0x540519;_0x980136[_0x406dd3(0xc4)](_0x414ac5=>{const _0x3bdc31=_0x406dd3,_0x273fde=groups[_0x3bdc31(0x85)](_0x414ac5['groupCode']);if(_0x273fde)Object[_0x3bdc31(0x10a)](_0x273fde,_0x414ac5);else{groups['set'](_0x414ac5[_0x3bdc31(0x79)],_0x414ac5);const _0x145e2b=this[_0x3bdc31(0x91)][_0x3bdc31(0xca)]()[_0x3bdc31(0xae)](_0x414ac5[_0x3bdc31(0x79)],_0x4ec9aa['gJMTQ']);this[_0x3bdc31(0x91)][_0x3bdc31(0xca)]()[_0x3bdc31(0x12e)](_0x145e2b,undefined,0xbb8)['then'](_0xcd1019=>{});}});},_0x47a961[_0x540519(0x11c)]=_0x5afb45=>{const _0x44bdb7=_0x540519,_0x58dc41=_0x5afb45[_0x44bdb7(0x10e)]['split']('_')[0x0];if(groupMembers[_0x44bdb7(0xa8)](_0x58dc41)){const _0x21c936=groupMembers[_0x44bdb7(0x85)](_0x58dc41);_0x5afb45[_0x44bdb7(0x10f)][_0x44bdb7(0x107)]((_0x2f882d,_0x28f4fd)=>{const _0x433898=_0x44bdb7,_0x250e11=_0x21c936[_0x433898(0x85)](_0x28f4fd);_0x250e11?Object[_0x433898(0x10a)](_0x250e11,_0x2f882d):_0x21c936[_0x433898(0x75)](_0x28f4fd,_0x2f882d);});}else groupMembers[_0x44bdb7(0x75)](_0x58dc41,_0x5afb45[_0x44bdb7(0x10f)]);},_0x47a961[_0x540519(0x113)]=(_0x5d06e3,_0x4e259a,_0x2fd7fb)=>{const _0x128c75=_0x540519;_0x4ec9aa[_0x128c75(0xb1)](_0x4e259a,0x0)&&_0x2fd7fb[_0x128c75(0x85)](selfInfo['uid'])&&_0x2fd7fb[_0x128c75(0x85)](selfInfo[_0x128c75(0x9a)])?.[_0x128c75(0xc9)]&&_0x4ec9aa[_0x128c75(0x95)](setTimeout,()=>{const _0x20ed04=_0x128c75;groups[_0x20ed04(0x12b)](_0x5d06e3);},0x1388);_0x2fd7fb[_0x128c75(0x107)]((_0x417daa,_0x2afbec)=>{const _0x133a45=_0x128c75;uid2UinMap[_0x2afbec]=_0x417daa[_0x133a45(0xf8)];});const _0xff2e39=groupMembers['get'](_0x5d06e3);_0xff2e39?_0x2fd7fb[_0x128c75(0x107)]((_0x5a2c71,_0x54084b)=>{const _0x18d9ab=_0x128c75,_0x2d5406=_0xff2e39[_0x18d9ab(0x85)](_0x54084b);_0x2d5406?Object[_0x18d9ab(0x10a)](_0x2d5406,_0x5a2c71):_0xff2e39[_0x18d9ab(0x75)](_0x54084b,_0x5a2c71);}):groupMembers[_0x128c75(0x75)](_0x5d06e3,_0x2fd7fb);},this[_0x540519(0xcf)](_0x47a961);}['addListener'](_0x51ff59){const _0x222254=_0x2911ea,_0x3a7469={'TXAmA':'BuddyListener','vngeD':_0x222254(0x11f),'JMGal':_0x222254(0xed),'mCzYV':_0x222254(0xc8)};_0x51ff59=new Proxy(_0x51ff59,this[_0x222254(0xea)]);switch(_0x51ff59[_0x222254(0xb3)][_0x222254(0x105)]){case _0x3a7469[_0x222254(0xf3)]:{return this['session']['getBuddyService']()[_0x222254(0x117)](new _0x583b7a['NodeIKernelBuddyListener'](_0x51ff59));}case _0x3a7469[_0x222254(0x10d)]:{return this[_0x222254(0x91)]['getGroupService']()[_0x222254(0xa5)](new _0x583b7a['NodeIKernelGroupListener'](_0x51ff59));}case _0x3a7469[_0x222254(0x8b)]:{return this[_0x222254(0x91)]['getMsgService']()[_0x222254(0x115)](new _0x583b7a[(_0x222254(0xcc))](_0x51ff59));}case _0x3a7469[_0x222254(0x110)]:{return this[_0x222254(0x91)][_0x222254(0x138)]()[_0x222254(0x123)](new _0x583b7a['NodeIKernelProfileListener'](_0x51ff59));}default:return-0x1;}}[_0x2911ea(0x7d)](_0x361007){const _0x264df3=_0x2911ea;this[_0x264df3(0x101)]['push'](_0x361007);}async[_0x2911ea(0xfe)](_0x464698){const _0x5b4160=_0x2911ea,_0x281c5b={'MvBlc':function(_0x1deb47,_0x999498){return _0x1deb47!==_0x999498;},'CagEo':_0x5b4160(0xbc),'LtKkq':function(_0x242ff1,_0x176487){return _0x242ff1(_0x176487);},'iQDhi':function(_0x36e001,_0x4fd61a){return _0x36e001+_0x4fd61a;},'fMsEs':_0x5b4160(0xf6)},_0x36f25a=await this['loginService']['getLoginList']();if(_0x281c5b[_0x5b4160(0x103)](_0x36f25a[_0x5b4160(0xa9)],0x0))throw new Error(_0x281c5b[_0x5b4160(0x13b)]);const _0x4e25d1=_0x36f25a[_0x5b4160(0x90)][_0x5b4160(0x7b)](_0x2d2047=>_0x2d2047['uin']===_0x464698);if(!_0x4e25d1||!_0x4e25d1?.['isQuickLogin'])throw new Error(_0x464698+'快速登录不可用');await _0x281c5b[_0x5b4160(0xf7)](sleep,0x3e8);const _0xf14373=await this['loginService']['quickLoginWithUin'](_0x464698);if(!_0xf14373[_0x5b4160(0xa9)])throw new Error(_0x281c5b[_0x5b4160(0x106)](_0x281c5b[_0x5b4160(0x12c)],_0xf14373['loginErrorInfo'][_0x5b4160(0x7e)]));return _0xf14373;}async['qrLogin'](_0x260cd6){const _0x2b8e20=_0x2911ea,_0x3c87ff={'ZPGNn':_0x2b8e20(0xd4),'VEbLN':_0x2b8e20(0xa2)};return new Promise((_0x55a7d8,_0x49f197)=>{const _0x1d24c2=_0x2b8e20,_0xe7ca8f={'vcIcA':_0x3c87ff['ZPGNn'],'NOYHU':_0x3c87ff[_0x1d24c2(0xe1)]};this[_0x1d24c2(0xbb)][_0x1d24c2(0x12a)]=_0xd8e1eb=>{const _0x1869df=_0x1d24c2,_0x4c92f0=_0xd8e1eb[_0x1869df(0xb8)][_0x1869df(0x10c)](_0xe7ca8f[_0x1869df(0x135)])[0x1],_0x13a542=Buffer['from'](_0x4c92f0,_0xe7ca8f[_0x1869df(0xdd)]);_0x260cd6(_0xd8e1eb[_0x1869df(0x8f)],_0xd8e1eb[_0x1869df(0xb8)],_0x13a542);},this['loginService'][_0x1d24c2(0xfc)]();});}async['passwordLogin'](_0x1e714f,_0x1459eb,_0x923629,_0x4bb2c4,_0x254d7c){const _0x4e7c85=_0x2911ea,_0x1d0203={'hZnRR':_0x4e7c85(0xfa),'YGPGb':_0x4e7c85(0x77),'NqEtp':function(_0x50a559,_0x110030){return _0x50a559&&_0x110030;},'EzMac':function(_0xe91729,_0x24fdbe){return _0xe91729||_0x24fdbe;},'gGsEX':function(_0x49a14c,_0x3d04fc){return _0x49a14c||_0x3d04fc;},'ZwjZI':function(_0x5d8da8,_0x2883b8){return _0x5d8da8(_0x2883b8);},'bkjxk':_0x4e7c85(0x9f)},_0x1a91aa=_0x119ded[_0x4e7c85(0xf2)](_0x1d0203[_0x4e7c85(0x114)])['update'](_0x1459eb)['digest'](_0x1d0203[_0x4e7c85(0xd8)]),_0xdd435d={'uin':_0x1e714f,'passwordMd5':_0x1a91aa,'step':_0x1d0203['NqEtp'](_0x923629,_0x4bb2c4)&&_0x254d7c?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x1d0203[_0x4e7c85(0xde)](_0x923629,''),'proofWaterRand':_0x4bb2c4||'','proofWaterSid':_0x1d0203[_0x4e7c85(0x12f)](_0x254d7c,'')};await this['loginService'][_0x4e7c85(0x8e)](),await _0x1d0203[_0x4e7c85(0xa1)](sleep,0x3e8);const _0x331a45=await this['loginService'][_0x4e7c85(0xf4)](_0xdd435d);switch(_0x331a45[_0x4e7c85(0xa9)]){case'0':{break;}case _0x4e7c85(0xb2):{break;}case'4':case _0x1d0203[_0x4e7c85(0xa4)]:default:}}async[_0x2911ea(0x128)](){const _0x147c8b=_0x2911ea,_0x148d3a=await this['loginService'][_0x147c8b(0x8e)]();return _0x148d3a;}}export const napCatCore=new NapCatCore();