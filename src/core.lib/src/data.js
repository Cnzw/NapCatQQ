function _0x1642(_0x1a8662,_0x1d40c7){const _0x66d13f=_0x66d1();return _0x1642=function(_0x164216,_0x1ad570){_0x164216=_0x164216-0xe3;let _0x380bd3=_0x66d13f[_0x164216];return _0x380bd3;},_0x1642(_0x1a8662,_0x1d40c7);}(function(_0x1866c3,_0xe707af){const _0x7fb1e8=_0x1642,_0x3fac90=_0x1866c3();while(!![]){try{const _0x13d3e7=parseInt(_0x7fb1e8(0xea))/0x1*(-parseInt(_0x7fb1e8(0xe4))/0x2)+-parseInt(_0x7fb1e8(0xeb))/0x3+-parseInt(_0x7fb1e8(0xf8))/0x4+-parseInt(_0x7fb1e8(0xf1))/0x5+-parseInt(_0x7fb1e8(0xe7))/0x6+parseInt(_0x7fb1e8(0xf0))/0x7*(-parseInt(_0x7fb1e8(0xf4))/0x8)+-parseInt(_0x7fb1e8(0xf7))/0x9*(-parseInt(_0x7fb1e8(0xe8))/0xa);if(_0x13d3e7===_0xe707af)break;else _0x3fac90['push'](_0x3fac90['shift']());}catch(_0x549291){_0x3fac90['push'](_0x3fac90['shift']());}}}(_0x66d1,0x34954));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0,'Cookies':new Map(),'ClientKey':'','KeyIndex':'','PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};export const groups=new Map();export function deleteGroup(_0x15a7a6){const _0x2c5d9f=_0x1642;groups[_0x2c5d9f(0xec)](_0x15a7a6),groupMembers[_0x2c5d9f(0xec)](_0x15a7a6);}export const groupMembers=new Map();export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':'NapCat未能正常启动，请检查日志查看错误'};export async function getFriend(_0x36c81b){const _0x5070e1=_0x1642;_0x36c81b=_0x36c81b['toString']();if(isNumeric(_0x36c81b)){const _0x2acf8c=Array[_0x5070e1(0xf9)](friends[_0x5070e1(0xed)]());return _0x2acf8c[_0x5070e1(0xe3)](_0xfe1ef7=>_0xfe1ef7[_0x5070e1(0xf5)]===_0x36c81b);}else return friends['get'](_0x36c81b);}export async function getGroup(_0x265c3d){const _0x21d54d=_0x1642;let _0x4b47b8=groups[_0x21d54d(0xe9)](_0x265c3d[_0x21d54d(0xe5)]());if(!_0x4b47b8)try{const _0x3ace3c=await NTQQGroupApi[_0x21d54d(0xfa)]();_0x3ace3c[_0x21d54d(0xf3)]&&_0x3ace3c['forEach'](_0x19263b=>{const _0x248465=_0x21d54d;groups[_0x248465(0xee)](_0x19263b[_0x248465(0xef)],_0x19263b);});}catch(_0x93e832){return undefined;}return _0x4b47b8=groups['get'](_0x265c3d[_0x21d54d(0xe5)]()),_0x4b47b8;}export async function getGroupMember(_0x4c9dde,_0x2a836c){const _0x3c843c=_0x1642,_0x2552a3={'NPAsI':function(_0x423608,_0x3928c7){return _0x423608(_0x3928c7);},'csHUm':function(_0x4dfaa8){return _0x4dfaa8();},'fQDEe':function(_0xe63e3d){return _0xe63e3d();}};_0x4c9dde=_0x4c9dde[_0x3c843c(0xe5)](),_0x2a836c=_0x2a836c[_0x3c843c(0xe5)]();let _0x2f424f=groupMembers[_0x3c843c(0xe9)](_0x4c9dde);if(!_0x2f424f)try{_0x2f424f=await NTQQGroupApi['getGroupMembers'](_0x4c9dde),groupMembers[_0x3c843c(0xee)](_0x4c9dde,_0x2f424f);}catch(_0x121aa6){return null;}const _0x467aab=()=>{const _0x5ba92b=_0x3c843c;let _0x3ae4b1=undefined;return _0x2552a3['NPAsI'](isNumeric,_0x2a836c)?_0x3ae4b1=Array[_0x5ba92b(0xf9)](_0x2f424f['values']())['find'](_0x3f9f4f=>_0x3f9f4f['uin']===_0x2a836c):_0x3ae4b1=_0x2f424f[_0x5ba92b(0xe9)](_0x2a836c),_0x3ae4b1;};let _0x234020=_0x2552a3[_0x3c843c(0xf6)](_0x467aab);return!_0x234020&&(_0x2f424f=await NTQQGroupApi[_0x3c843c(0xe6)](_0x4c9dde),_0x234020=_0x2552a3[_0x3c843c(0xf2)](_0x467aab)),_0x234020;}export const uid2UinMap={};export function getUidByUin(_0x3cc9c2){for(const _0x37ff82 in uid2UinMap){if(uid2UinMap[_0x37ff82]===_0x3cc9c2)return _0x37ff82;}}function _0x66d1(){const _0x1aafc1=['delete','values','set','groupCode','35NkYjYP','1666025YLVJIM','fQDEe','length','445448ZUKZQK','uin','csHUm','13268628HwALlt','214108scqLKw','from','getGroups','find','2rzzIQy','toString','getGroupMembers','827250mHLyYZ','10HaeqNQ','get','236069tAfqDV','659493muGXei'];_0x66d1=function(){return _0x1aafc1;};return _0x66d1();}export const tempGroupCodeMap={};export const rawFriends=[];export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};