const previous = [
 {title:'五星與超級團體戰輪替',short:'團體戰輪替',raid:true,start:'2026-11-16',end:'2026-11-24',time:'11/16～11/24（截止時間待確認）',summary:'五星為克雷色利亞、達克萊伊，超級團體戰為超級詛咒娃娃。',community:'GO Hub 列 11/24 10:00 結束，Leek Duck 列 22:00。',links:[['GO Hub','https://pokemongohub.net/post/guide/current-go-raids/'],['Leek Duck','https://leekduck.com/events/'],['捕獲 CP 交叉查詢','https://www.hundo-hunter.com/raids'],['詛咒娃娃 CP','https://pokemongohub.net/post/guide/mega-banette-raid-guide/']],cp:[['克雷色利亞','1555–1633','1944–2041','強風'],['達克萊伊','2048–2136','2560–2671','霧'],['詛咒娃娃','1244–1313','1555–1642','霧']]},
 {title:'Twilight Wishes',short:'Twilight Wishes',start:'2026-11-24',end:'2026-11-30',time:'11/24 10:00 ～ 11/30 20:00',summary:'異色海星星與小灰怪出現機率提高。活動 GO Pass 第 10 級解鎖 2 倍捕捉星塵，豪華版為 3 倍。',community:'GO Hub 整理了服裝團體戰陣容，包含日之圍巾太陽伊布與月之圍巾月亮伊布。',links:[['官方公告','https://pokemongo.com/news/twilight-wishes-2026'],['GO Hub 攻略','https://pokemongohub.net/post/event/twilight-wishes-2026/']],raidPending:true},
 {title:'代歐奇希斯團體戰時刻',short:'代歐奇希斯',raid:true,start:'2026-11-25',end:'2026-11-25',time:'11/25 18:00–19:00',summary:'普通、攻擊、防禦與速度四種形態登場。',links:[['Leek Duck','https://leekduck.com/events/']],raidPending:true},
 {title:'皮可西超級團體戰日',short:'超級皮可西',raid:true,start:'2026-11-28',end:'2026-11-28',time:'11/28 14:00–17:00',summary:'超級皮可西首次登場。道館最多提供 6 張免費入場券，捕獲的皮可西已解鎖超級等級 1。',links:[['官方公告','https://pokemongo.com/en/news/clefable-super-mega-raid-day-2026']],raidPending:true}
];

const categories={five:'5 星團體戰',three:'3 星團體戰',one:'1 星團體戰',s5:'5 星暗影團體戰',s3:'3 星暗影團體戰',s1:'1 星暗影團體戰',mega:'超級團體戰'};
const sources=[['Pokémon GO Hub','https://pokemongohub.net/post/guide/current-go-raids/'],['巴哈姆特 11 月活動首樓','https://forum.gamer.com.tw/C.php?bsn=29659&snA=49328&tnum=2']];
const raid=(start,end,title,bosses,color,time)=>({start,end,title,short:title,bosses,color,time,raid:true,links:sources});
const lowShadow={title:'低星暗影團體戰',summary:'已收錄這批頭目，換檔日期待確認。',bosses:{s3:'暗影波皇子、暗影長毛豬、暗影蚊香君',s1:'暗影幼基拉斯、暗影水躍魚、暗影幕下力士、暗影頭蓋龍'},links:sources};
const rotations=[
 ['2026-10-28','2026-11-03','騎拉帝納（起源）',{five:'騎拉帝納（起源形態）'}],
 ['2026-11-04','2026-11-08','騎拉帝納（別種）',{five:'騎拉帝納（別種形態）'}],
 ['2026-11-09','2026-11-13','蒼響／藏瑪然特',{five:'劍之王蒼響、盾之王藏瑪然特'}],
 ['2026-11-14','2026-11-14','捷克羅姆／焰白酋雷姆',{five:'捷克羅姆、焰白酋雷姆'}],
 ['2026-11-15','2026-11-15','萊希拉姆／闇黑酋雷姆',{five:'萊希拉姆、闇黑酋雷姆'}],
 ['2026-11-16','2026-11-24','克雷色利亞／達克萊伊',{five:'克雷色利亞、達克萊伊',three:'嘎啦嘎啦（阿羅拉）、酷豹、泥偶巨人',one:'喵喵（阿羅拉）、夢妖、哭哭面具（伽勒爾）、沙丘娃',mega:'超級詛咒娃娃'},'11/16 06:00–11/24 10:00（GO Hub）'],
 ['2026-11-25','2026-12-01','代歐奇希斯／超級巨金怪',{five:'代歐奇希斯（普通、攻擊、防禦、速度）',mega:'超級巨金怪'}]
].map(([start,end,title,bosses,time],index)=>raid(start,end,title,bosses,index%2?'b':'a',time));
rotations[5].cp=previous[0].cp;
rotations[5].community=previous[0].community;
rotations[5].links=[...sources,...previous[0].links.slice(1)];
const weekends=[
 ['2026-10-31','2026-11-01','暗影土地雲（化身）'],
 ['2026-11-07','2026-11-08','暗影龍捲雲（化身）'],
 ['2026-11-21','2026-11-22','暗影龍捲雲（化身）'],
 ['2026-11-28','2026-11-29','暗影龍捲雲（化身）']
].map(([start,end,title],i)=>raid(start,end,title,{s5:title},i?'b':'a'));
const eventRaidDates=new Set(['2026-11-09','2026-11-14','2026-11-15']);
const groupedEvents=[...rotations.filter(item=>!eventRaidDates.has(item.start)),raid('2026-10-28','2026-11-08','超級勾魂眼',{mega:'超級勾魂眼'},'a'),...weekends,
 previous[1],{...previous[3],kind:'general',title:'皮可西極致超級團體戰日',stripName:'皮可西團體戰日'}];


const tierLabels={five:'5★',low:'3★／1★',s5:'暗影 5★',mega:'超級'};
const megaColor=new Map(groupedEvents.filter(item=>item.color&&item.bosses?.mega)
 .sort((a,b)=>a.start.localeCompare(b.start)).map((item,index)=>[item,index%2?'mega-b':'mega-a']));
const events=groupedEvents.flatMap(item=>{
 if(item.kind==='general'||!item.bosses)return [item];
 const bands=[];
 for(const tier of ['five','s5','mega']){
  const boss=item.bosses[tier];
  if(!boss)continue;
  const color=tier==='mega'?(megaColor.get(item)||'mega-a'):tier==='s5'?'shadow-'+item.color:'five-'+(item.color||'a');
  bands.push({...item,tier,color,stripName:item.color?boss:item.short,
   bosses:{[tier]:boss},title:item.color?boss:item.title,
   cp:item.cp?.filter(row=>tier==='mega'?row[0].includes('詛咒娃娃'):!row[0].includes('詛咒娃娃'))});
 }
 const bosses=Object.fromEntries(['three','one'].filter(tier=>item.bosses[tier]).map(tier=>[tier,item.bosses[tier]]));
 if(Object.keys(bosses).length){
  bands.push({...item,tier:'low',color:'low',stripName:Object.entries(bosses).map(([tier,boss])=>(tier==='three'?'3★ ':'1★ ')+boss).join('　｜　'),title:'三星／一星團體戰',bosses,cp:undefined,community:undefined});
 }
 return bands;
});

const maxMonday='https://pokemongohub.net/post/guide/max-monday-schedule/';
const spotlightSource='https://pokemongohub.net/post/guide/spotlight-hour-schedule/';
const officialWild='https://pokemongo.com/zh-Hant/news/into-the-wild-2026';
const maxSchedule=[
 ['2026-10-26','2026-11-01','極巨化勾魂眼','10/26 週一主打時段 06:00–21:00。','https://leekduck.com/events/max-mondays-2026-10-26/'],
 ['2026-11-02','2026-11-08','極巨化腕力','11/2 週一主打時段 06:00–21:00。','https://leekduck.com/events/max-mondays-2026-11-02/'],
 ['2026-11-09','2026-11-13','曠野週','五星團體戰有劍之王蒼響與盾之王藏瑪然特。極巨對戰有拉魯拉絲、腕力。傳說極巨對戰 18:00–19:00：11/11 雷吉斯奇魯、11/12 雷吉鐸拉戈、11/13 拉帝亞斯與拉帝歐斯。',officialWild,'11/9 10:00–11/13 20:00'],
 ['2026-11-16','2026-11-23','巨大足跡','已登場的極巨化寶可夢回歸，傳說與幻之寶可夢除外。11/23 與妙喵輪替重疊。','https://pokemongo.com/zh-Hant/news/dynamax-trails-eternamax-eternatus-2026','11/16 10:00–11/23 20:00'],
 ['2026-11-23','2026-11-29','極巨化妙喵','11/23 週一主打時段 06:00–21:00。','https://leekduck.com/events/max-mondays-2026-11-23/'],
 ['2026-11-30','2026-12-06','極巨化幾何雪花','11/30 週一主打時段 06:00–21:00。','https://leekduck.com/events/max-mondays-2026-11-30/']
];

const specialMaxDates=new Set(['2026-11-09','2026-11-16']);
let nextMaxColor=0;
for(const [start,end,title,summary,url,time] of maxSchedule){
 const special=specialMaxDates.has(start);
 events.push({start,end,title,summary,time,kind:special?'general':'max',
  color:special?'general':['max-a','max-b'][nextMaxColor++%2],
  links:special?[['官方公告',url]]:[['活動資料',url],['極巨週一時程',maxMonday]]
 });
}
events.push({
 title:'曠野地帶：全球',start:'2026-11-14',end:'2026-11-15',time:'11/14–11/15 每天 10:00–18:00',
 summary:'11/14 五星團體戰為捷克羅姆與焰白酋雷姆，11/15 為萊希拉姆與闇黑酋雷姆。',
 kind:'general',links:[['官方活動頁','https://pokemongo.com/zh-Hant/gowildarea/global']]
});

events.push(...[
 ['2026-11-05','魔女帽熊寶寶','進化 XP ×2'],
 ['2026-11-19','敲音猴／炎兔兒／淚眼蜥','捕捉糖果 ×2'],
 ['2026-11-26','嗡蝠','捕捉糖果 ×2']
].map(([start,name,summary])=>({
 start,end:start,title:'聚焦時刻：'+name,stripName:name+' · 18:00',summary,time:start.slice(5).replace('-','/')+' 18:00–19:00',
 kind:'spotlight',color:'spotlight',links:[['聚焦時刻時程',spotlightSource]]
})));


const raidHourSource='https://pokemongohub.net/post/guide/raid-hour-schedule/';
events.push(...[
 ['2026-11-04','騎拉帝納（別種）'],
 ['2026-11-09','蒼響（劍之王）','曠野週加開場次。','https://pokemongo.com/zh-Hant/news/into-the-wild-2026'],
 ['2026-11-10','藏瑪然特（盾之王）','曠野週加開場次。','https://pokemongo.com/zh-Hant/news/into-the-wild-2026'],
 ['2026-11-18','克雷色利亞／達克萊伊'],
 ['2026-11-25','代歐奇希斯',previous[2].summary,'https://leekduck.com/events/raidhour20261125/']
].map(([start,name,summary,url])=>({
 start,end:start,title:name+'團體戰時刻',stripName:name+' · 18:00',summary,
 time:start.slice(5).replace('-','/')+' 18:00–19:00',kind:'raidHour',color:'raid-hour',
 links:[['團體戰時刻時程',raidHourSource],...(url?[['場次詳情',url]]:[])]
})));

const $ = id => document.getElementById(id);
const dateKey = date => date.toISOString().slice(0,10);
const parse = key => new Date(key+'T00:00:00Z');
const add = (date,days) => new Date(date.getTime()+days*86400000);
const taipeiToday = new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei'}).format(new Date());
let anchor = parse(taipeiToday.startsWith('2026-11') ? taipeiToday : '2026-11-22');
const mobileView = document.documentElement.dataset.layout === 'mobile';
let mode = mobileView ? 'week' : 'month';
const label = date => dateKey(date).slice(5).replace('-','/');

const filter=$('filter');
for(const [key,name] of Object.entries({...categories,general:'一般活動',communityDay:'社群日',max:"極巨對戰",raidHour:'團體戰時刻',spotlight:'聚焦時刻'})) filter.add(new Option(name,key));
filter.onchange=()=>{render();if(lowShadow.bosses[filter.value])showDetail(lowShadow);};


const october='https://pokemongohub.net/post/event/october-2026-events/';
const november='https://pokemongohub.net/post/event/pokemon-go-november-2026-events/';
const news='https://pokemongo.com/news/';
const eventDate=s=>s.slice(5).replace('-','/');
function addEvent(title,start,end,hours,summary,slug,highlights=[],monthSource=october){
 const prefix=eventDate(start)+(start===end?'':'–'+eventDate(end));
 events.push({title,start,end,kind:'general',time:prefix+(hours?' · '+hours:''),summary,highlights,
 links:slug?[['官方公告',news+slug],['月度排程',monthSource]]:[['月度排程',monthSource]]});
}
addEvent('豐收節：採蘋果','2026-09-29','2026-10-05','10:00 起／20:00 結束','主打啃果蟲。','harvest-festival-2026',[['異色首次開放','啃果蟲。']]);
addEvent('豐收節：火箭隊入侵','2026-10-02','2026-10-05','00:00 起／20:00 結束','火箭隊活動，從坂木手中拯救暗影捷克羅姆。','harvest-festival-tgr-2026',[['寶可夢首次登場','暗影捷克羅姆，透過坂木遭遇。'],['異色首次開放','滋汁鼴，透過孵蛋取得。']]);
addEvent('超極巨閃焰王牌極巨對戰日','2026-10-03','2026-10-03','14:00–17:00','主打超極巨化閃焰王牌。','gigantamax-cinderace-max-battle-day-2026',[['寶可夢首次登場','超極巨化閃焰王牌，透過極巨對戰。']]);
addEvent('世界太空週','2026-10-04','2026-10-10','00:00 起／23:59 結束','太空主題活動。','world-space-week-2026',[['特殊造型','太空人皮卡丘。']]);
addEvent('索羅亞社群日','2026-10-10','2026-10-10','14:00–17:00','當天 21:00 前進化索羅亞，可取得會使用突襲的索羅亞克。','communityday-october-2026-zorua',[['特殊背卡','野生索羅亞有機會帶特殊背卡；付費特殊調查包含三次對應遭遇。']]);
addEvent('秋季馬拉松：夥伴健行','2026-10-13','2026-10-19','10:00 起／20:00 結束','GO Pass 等級 10 可解鎖薰香持續兩小時，散步薰香除外。','fall-marathon-buddy-trek-2026',[
 ['寶可夢首次登場','納噬草，透過 GO Pass 任務或一般薰香遭遇。'],
 ['異色機率提高','落雷獸；10/16 10:00 至 10/19 20:00 使用一般薰香時，洗翠卡蒂狗的異色機率也提高。'],
 ['特殊造型','戴馬拉松遮陽帽的皮卡丘，透過免費限時調查取得。']]);
addEvent('黑眼鱷孵化日','2026-10-17','2026-10-17','11:00–17:00','主打黑眼鱷孵化。','sandile-hatch-day-2026',[['異色機率提高','黑眼鱷，透過孵蛋取得。']]);
addEvent('小隕星流星雨：獵戶座','2026-10-19','2026-10-24','17:00 起／23:59 結束','主打小隕星的流星雨活動。','minior-meteor-showers-2026',[['寶可夢首次登場','小隕星。']]);
addEvent('湖之眾神極巨對戰日','2026-10-24','2026-10-24','14:00–17:00','主打極巨化由克希、艾姆利多與亞克諾姆。','dynamax-uxie-mesprit-azelf-max-battle-day-2026',[['寶可夢首次登場','極巨化由克希、艾姆利多與亞克諾姆，透過極巨對戰。']]);
addEvent('萬聖節 2026 Part I','2026-10-27','2026-11-01','10:00 起／10:00 結束','GO Pass 等級 10 解鎖捕捉糖果加倍，等級 20 解鎖捕捉星星沙子加倍；豪華版對應為三倍。','halloween-part-1-2026',[
 ['特殊造型','帽子與短披肩皮卡丘、蝴蝶結來悲茶可在一星團體戰取得；皮卡丘也可透過免費限時調查取得。'],
 ['特殊造型','高禮帽超音蝠在野外出現。']]);
addEvent('水晶燈火靈極致超級團體戰日','2026-10-31','2026-10-31','14:00–17:00','轉動道館轉盤最多可領六張免費團體戰入場券；捕獲後已解鎖超級等級 1。','chandelure-super-mega-raid-day-2026',[
 ['寶可夢首次登場','超級水晶燈火靈，透過極致超級團體戰登場；實際捕獲水晶燈火靈。'],
 ['異色機率提高','水晶燈火靈，限活動的極致超級團體戰遭遇。']]);
addEvent('萬聖節 2026 Part II','2026-11-01','2026-11-05','10:00 起／20:00 結束','超級勾魂眼開放極致超級等級。','halloween-part-2-2026',[
 ['異色首次開放','墓仔狗，可在野外、GO Pass 或田野調查遇到。'],
 ['特殊造型','帽子與短披肩皮卡丘、蝴蝶結來悲茶出現在一星團體戰；萬聖節造型木木梟及慶典造型耿鬼可在野外遇到。']],november);
addEvent('小隕星流星雨：獅子座','2026-11-14','2026-11-19','17:00 起／23:59 結束','小隕星主題流星雨。','minior-meteor-showers-2026',[],november);
addEvent('駒刀小兵社群日','2026-11-21','2026-11-21','14:00–17:00','活動期間孵蛋距離為 1/4。當天 21:00 前將劈斬司令進化成仆斬將軍，可學會仆刀。','communityday-november-2026-pawniard',[
 ['特殊背卡','野生駒刀小兵有機會帶特殊背卡；付費特殊調查包含三次對應遭遇。']],november);
const existingHighlights={
 'Twilight Wishes':[
 ['異色機率提高','海星星、小灰怪。'],
 ['特殊造型','太陽／月亮冠飾皮卡丘出現在一星團體戰；太陽圍巾太陽伊布、月亮圍巾月亮伊布出現在三星團體戰。'],
 ['特殊造型','慶典造型耿鬼與萬聖節造型隨風球，11/26 10:00 到 11/30 20:00 可透過活動田野調查遭遇。']],
 '巨大足跡':[['特殊背卡','活動期間成功捕捉極巨對戰頭目時有機會取得。GO Pass 也提供帶特殊背卡的活動極巨寶可夢遭遇。']],
 '皮可西極致超級團體戰日':[
 ['寶可夢首次登場','超級皮可西，透過極致超級團體戰登場；實際捕獲皮可西。'],
 ['異色機率提高','皮可西，限活動的極致超級團體戰遭遇。']]
};
for(const item of events){
 if(existingHighlights[item.title])item.highlights=existingHighlights[item.title];
 item.links=item.links.filter(([,url])=>!url.includes('forum.gamer.com.tw'));
}
const octoberRotations=[
 ['2026-09-30','2026-10-06','哲爾尼亞斯','超級大食花'],
 ['2026-10-07','2026-10-13','伊裴爾塔爾','超級水箭龜'],
 ['2026-10-14','2026-10-20','帝牙盧卡','超級快龍'],
 ['2026-10-21','2026-10-27','帕路奇亞','超級噴火龍 X／Y']
];
octoberRotations.forEach(([start,end,five,mega],index)=>{
 for(const [tier,title] of [['five',five],['mega',mega]]){
  events.push({start,end,title,tier,raid:true,color:tier+(index%2?'-b':'-a'),bosses:{[tier]:title},links:[['GO Hub 10 月月表',october]]});
 }
});
[
 ['2026-09-28','2026-10-04','極巨化淚眼蜥'],
 ['2026-10-05','2026-10-11','極巨化燒火蚣'],
 ['2026-10-12','2026-10-18','極巨化稚山雀'],
 ['2026-10-19','2026-10-25','極巨化狃拉']
].forEach(([start,end,title],index)=>events.push({start,end,title,kind:'max',color:index%2?'max-b':'max-a',summary:'週一主打日，極巨對戰時段 06:00–21:00。',links:[['GO Hub 10 月月表',october]]}));
const sableyeOctober=events.find(item=>item.title==='極巨化勾魂眼');
const firstNovemberMax=events.find(item=>item.title==='極巨化腕力');
if(sableyeOctober&&firstNovemberMax&&sableyeOctober.color===firstNovemberMax.color){
 for(const item of events.filter(item=>item.kind==='max'&&item.start>='2026-11-01'))item.color=item.color==='max-a'?'max-b':'max-a';
}
const scheduled=(day,name,kind,summary)=>events.push({
 start:'2026-10-'+day,end:'2026-10-'+day,title:name+(kind==='raidHour'?'團體戰時刻':'聚焦時刻'),
 stripName:name+' · 18:00',time:'10/'+Number(day)+' 18:00–19:00',kind,color:kind==='raidHour'?'raid-hour':'spotlight',
 summary,links:[['GO Hub 10 月月表',october]]
});
for(const [day,name] of [['07','伊裴爾塔爾'],['14','帝牙盧卡'],['21','帕路奇亞'],['28','騎拉帝納（起源形態）']])scheduled(day,name,'raidHour');
for(const [day,name,bonus] of [['01','橡實果','捕捉 XP ×2'],['08','小灰怪','捕捉糖果 ×2'],['15','童偶熊','傳送糖果 ×2'],['22','睡睡菇','捕捉星星沙子 ×2'],['29','鬼斯','進化 XP ×2']])scheduled(day,name,'spotlight',bonus);
for(const [start,end,title,color] of [
 ['2026-10-03','2026-10-04','暗影雷電雲（化身）','shadow-b'],
 ['2026-10-10','2026-10-11','暗影土地雲（化身）','shadow-a'],
 ['2026-10-17','2026-10-18','暗影土地雲（化身）','shadow-a'],
 ['2026-10-24','2026-10-25','暗影土地雲（化身）','shadow-a']
])events.push({start,end,title,tier:'s5',raid:true,color,links:[['GO Hub 10 月月表',october]]});


const spotlightBonusTags=new Map([
 ['捕捉 XP ×2','補XP'],
 ['捕捉糖果 ×2','補糖'],
 ['傳送糖果 ×2','傳糖'],
 ['捕捉星星沙子 ×2','補星'],
 ['進化 XP ×2','進XP']
]);
for(const item of events.filter(event=>event.kind==='spotlight')){
 const tag=spotlightBonusTags.get(item.summary);
 if(!tag)continue;
 const prefix='['+tag+'] ';
 item.stripName=prefix+(item.stripName||item.title);
 item.title=prefix+item.title;
}


const decemberSources={
 dates:'https://pokemongo.com/news/save-the-date-s25',
 community:'https://pokemongo.com/zh-Hant/news/community-day-december-2026',
 meteor:'https://pokemongo.com/news/minior-meteor-showers-2026'
};
for(const [day,title] of [['05','極巨對戰日'],['19','團體戰日'],['26','孵化日']]){
 const start='2026-12-'+day;
 events.push({title,start,end:start,kind:'general',summary:'官方已公布日期，時間與主打寶可夢待公布。',links:[['官方日期公告',decemberSources.dates]]});
}
events.push({title:'小隕星流星雨：雙子座',start:'2026-12-11',end:'2026-12-16',kind:'general',time:'12/11 17:00–12/16 23:59',links:[['官方公告',decemberSources.meteor]],sections:{
 debut:['北半球與南半球各有一種小隕星核心顏色首次登場，顏色待公布。'],
 bonuses:['捕捉小隕星可獲得更多星星沙子。'],
 wild:['每天 17:00–21:00，野外遇見小隕星的機會提高。其他活動重疊時，小隕星可能暫停出現。']
}});
const decemberLineups=[
 ['12','六尾*、六尾（阿羅拉的樣子）*、敲音猴*、炎兔兒*、愛吃豚*、小鍛匠*。另有機會遇見波加曼*。'],
 ['13','索羅亞*、駒刀小兵*、淚眼蜥*、偷兒狐*、涼脊龍*。另有機會遇見圓陸鯊*、單首龍*。']
];
for(const [day,lineup] of decemberLineups){
 const start='2026-12-'+day;
 events.push({title:'12 月社群日｜12/'+day,start,end:start,kind:'communityDay',time:'12/'+day+' 14:00–17:00',links:[['官方繁中公告',decemberSources.community]],sections:{
 bonuses:['每日 14:00–17:00：捕捉 XP、糖果與星星沙子 ×2，孵蛋距離減半。等級 31 以上捕捉獲得糖果 XL 的機率 ×2，普通薰香延長至 3 小時。','12/12 09:00–12/13 21:00：誘餌模組延長至 1 小時、每天最多 2 次特殊交換、交換星星沙子減半。'],
 wild:['14:00–17:00 主打：'+lineup,'兩天 09:00–21:00 都可能遇到本次主打寶可夢。','*運氣好的話，還有機會遇見異色寶可夢喔！'],
 other:['異色機率比照各寶可夢原本的社群日。','特殊背卡：活動期間有機會遇見帶背卡的寶可夢，付費特殊調查也有背卡遭遇。','限定招式：12/12 09:00–12/13 21:00 進化可取得對應招式，完整對照見官方公告。']
 }});
}
for(const item of events){
 if(['索羅亞社群日','駒刀小兵社群日'].includes(item.title))item.kind='communityDay';
 if(item.kind==='communityDay')item.color='community-day';
}
const detailedSections={
 '萬聖節 2026 Part I':{
  bonuses:['GO Pass 等級 10：捕捉糖果 ×2；等級 20：捕捉星星沙子 ×2。豪華版各為 ×3。'],
  wild:['野外可能遇見高禮帽超音蝠*、夜巡靈*、萬聖節惡作劇造型波加曼*等，也可能遇見萬聖節惡作劇造型隨風球*。','*運氣好時，有機會遇見異色。'],
  raids:['一星：帽子與短披肩皮卡丘*、蝴蝶結來悲茶*。帽子與短披肩皮卡丘也可透過免費限時調查取得。']
 },
 '萬聖節 2026 Part II':{
  wild:['野外可能遇見燭光靈*、萬聖節造型木木梟*、墓仔狗*等，也可能遇見慶典造型耿鬼*。','*運氣好時，有機會遇見異色。'],
  raids:['一星：帽子與短披肩皮卡丘*、蝴蝶結來悲茶*。']
 },
 'Twilight Wishes':{
  bonuses:['海星星與小灰怪的異色機率提高。','GO Pass 等級 1 提高交換取得亮晶晶寶可夢及成為亮晶晶好朋友的機率。等級 10 解鎖捕捉星星沙子 ×2，豪華版 ×3。'],
  wild:['野外可能遇見皮皮*、海星星*、小灰怪*等，也可能遇見岩狗狗*。','*運氣好時，有機會遇見異色。'],
  raids:['一星：太陽冠飾皮卡丘*、月亮冠飾皮卡丘*。','三星：太陽圍巾太陽伊布*、月亮圍巾月亮伊布*。','超級：超級大針蜂*、超級黑魯加*、超級勾魂眼*、超級雷電獸*。']
 },
 '巨大足跡':{bonuses:['GO Pass 等級 15：捕捉星星沙子 ×2；等級 35：極巨炮冒險效果的糖果和星星沙子消耗減半；等級 55：極巨對戰額外糖果及糖果 XL。']},
 '駒刀小兵社群日':{bonuses:['活動期間孵蛋距離為 1/4。'],wild:['駒刀小兵在野外出現的機會增加，也有機會遇見異色。']},
 '索羅亞社群日':{wild:['索羅亞在野外出現的機會增加，也有機會遇見異色。']}
};
for(const item of events){
 const detail=detailedSections[item.title];
 if(detail)item.sections=detail;
}

const groupOrder=["general","communityDay","five","mega","max","raidHour","spotlight","s5","low"];
const groupOf=item=>item.tier||item.kind||'general';
const hiddenGroups=new Set(["s5","low"]);
const orderedEvents=events.map((item,index)=>({item,index})).sort((a,b)=>
 groupOrder.indexOf(groupOf(a.item))-groupOrder.indexOf(groupOf(b.item))||
 a.item.start.localeCompare(b.item.start)
);
$('category-toggles').onclick=event=>{
 const control=event.target.closest('button[data-group]');
 if(!control)return;
 const group=control.dataset.group;
 const wasHidden=hiddenGroups.delete(group);
 if(!wasHidden)hiddenGroups.add(group);
 control.setAttribute('aria-pressed',String(wasHidden));
 render();
};
const visible=item=>!hiddenGroups.has(groupOf(item))&&
 (!filter.value||groupOf(item)===filter.value||Boolean(item.bosses?.[filter.value]));

const range=item=>item.time||label(parse(item.start))+(item.start===item.end?'':'–'+label(parse(item.end)));
function button(item,index,extra='',style='',agenda=false){
 const name=item.stripName||item.title;
 const badge=item.tier&&item.tier!=='low'?'<span class="tier">'+tierLabels[item.tier]+'</span>':'';
 return '<button class="event '+(item.raid?'raid ':'')+(item.color||'general')+extra+'" data-event="'+index+'" style="'+style+'" title="'+name+' · '+range(item)+'" aria-label="'+(item.tier?(categories[item.tier]||'三星與一星團體戰')+'，':'')+name+'，'+range(item)+'">'+badge+name+(agenda?' · '+range(item):'')+'</button>';
}
function weekRow(start,month){
 const dates=Array.from({length:7},(_,i)=>add(start,i));
 const keys=dates.map(dateKey);
 const heads=dates.map((date,i)=>{
  const col=' style="grid-column:'+(i+1)+'"';
  return '<div class="day-bg '+(date.getUTCMonth()!==month?'outside':'')+'"'+col+'></div><div class="date-num '+(keys[i]===taipeiToday?'current':'')+'"'+col+'><strong>'+date.getUTCDate()+'</strong></div>';
 }).join('');
 const lanes=[];
 let previousGroup;
 let firstLane=0;
 const bars=orderedEvents.map(({item,index})=>{
  if(!visible(item)||item.end<keys[0]||item.start>keys[6])return '';
  const from=item.start<keys[0]?0:keys.indexOf(item.start);
  const to=item.end>keys[6]?6:keys.indexOf(item.end);
  const mask=((1<<(to-from+1))-1)<<from;
  const group=groupOf(item);
  if(group!==previousGroup){
   firstLane=lanes.length;
   previousGroup=group;
  }
  let lane=lanes.findIndex((occupied,index)=>index>=firstLane&&!(occupied&mask));
  if(lane<0){lane=lanes.length;lanes.push(0);}
  lanes[lane]|=mask;
  return button(item,index,' span'+(item.start<keys[0]?' left':'')+(item.end>keys[6]?' right':''),'grid-column:'+(from+1)+' / '+(to+2)+';grid-row:'+(lane+2));
 }).join('');
 return '<div class="week-row">'+heads+bars+'</div>';
}
const syncWeekdays=()=>{$('weekday-header').scrollLeft=$('calendar').scrollLeft;};
$('calendar').onscroll=syncWeekdays;
function render(){
 $('weekday-header').hidden=mode!=='month';
 for(const view of ['month','week']) $(view).setAttribute('aria-pressed',String(mode===view));
 const year=anchor.getUTCFullYear(),month=anchor.getUTCMonth();
 if(mode==='week'){
  const end=add(anchor,6);
  $('period').textContent=label(anchor)+'～'+label(end);
  const items=orderedEvents.filter(({item})=>visible(item)&&item.start<=dateKey(end)&&item.end>=dateKey(anchor));
  $('calendar').innerHTML=items.length?'<ul class="agenda">'+items.map(({item,index})=>'<li>'+button(item,index,'','',true)+'</li>').join('')+'</ul>':'<p class="muted">這段日期沒有符合的活動。</p>';
  return;
 }
 if (mobileView) {
  renderMobileMonth();
  return;
 }
 $('period').textContent=year+' 年 '+(month+1)+' 月';
 const first=new Date(Date.UTC(year,month,1));
 const firstOffset=(first.getUTCDay()+6)%7;
 const start=add(first,-firstOffset);
 const days=new Date(Date.UTC(year,month+1,0)).getUTCDate();
 $('calendar').innerHTML='<div class="grid">'+Array.from({length:Math.ceil((firstOffset+days)/7)},(_,i)=>weekRow(add(start,i*7),month)).join('')+'</div>';
 syncWeekdays();
}
function renderMobileMonth() {
 const year = anchor.getUTCFullYear(), month = anchor.getUTCMonth();
 const first = new Date(Date.UTC(year, month, 1));
 const count = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
 const selected = dateKey(anchor);
 $('period').textContent = year+' 年 '+(month+1)+' 月';
 const offset = (first.getUTCDay()+6)%7;
 const filtered = orderedEvents.filter(({item}) => visible(item));
 const dayItems = key => filtered.filter(({item}) => item.start <= key && item.end >= key);
 const days = Array.from({length: count}, (_, i) => {
  const key = dateKey(add(first, i));
  const num = dayItems(key).length;
  return '<button data-day="'+key+'" aria-pressed="'+(key===selected)+'" aria-label="'+key+'，'+num+' 筆活動">'+(i+1)+(num?'<i></i>':'')+'</button>';
 });
 const items = dayItems(selected);
 $('calendar').innerHTML = '<div class="phone-month">'+Array.from('一二三四五六日', d=>'<span>'+d+'</span>').join('')+
  '<span></span>'.repeat(offset)+days.join('')+'</div><h3>'+label(anchor)+' 活動</h3>'+
  (items.length ? '<ul class="agenda">'+items.map(({item,index})=>'<li>'+button(item,index,'','',true)+'</li>').join('')+'</ul>' : '<p>這天沒有符合的活動。</p>');
}
function shift(direction){
 anchor=mode==='week'?add(anchor,7*direction):new Date(Date.UTC(anchor.getUTCFullYear(),anchor.getUTCMonth()+direction,1));
 render();
}
$('prev').onclick=()=>shift(-1);
$('next').onclick=()=>shift(1);
$('today').onclick=()=>{anchor=parse(taipeiToday);render();};
for(const view of ['month','week']) $(view).onclick=()=>{mode=view;render();};
$('calendar').onclick=event=>{
 const day=event.target.closest('[data-day]');
 if(day){anchor=parse(day.dataset.day);render();return;}
 const button=event.target.closest('[data-event]');
 if(!button)return;
 showDetail(events[Number(button.dataset.event)]);
};
$("shadow").onclick=()=>showDetail(lowShadow);

const hub='https://db.pokemongohub.net/pokemon/';
const currentRaids='https://leekduck.com/raid-bosses/';
const addCP=(name,lv20,lv25,weather,source)=>({name,lv20,lv25,weather,source});
const cpData={
 origin:addCP('騎拉帝納（起源）','2018–2105','2523–2631','強風／霧',hub+'487-Origin'),
 altered:addCP('騎拉帝納（別種）','1848–1931','2310–2414','強風／霧',hub+'487-Altered'),
 cresselia:addCP('克雷色利亞','1555–1633','1944–2041','強風',currentRaids),
 darkrai:addCP('達克萊伊','2048–2136','2560–2671','霧',currentRaids),
 sableye:addCP('勾魂眼','789–843','986–1054','霧',hub+'302'),
 banette:addCP('詛咒娃娃','1244–1313','1555–1642','霧',currentRaids),
 metagross:addCP('巨金怪','2078–2166','2598–2708','強風／下雪',hub+'376-Mega/iv-chart'),
 clefable:addCP('皮可西','1322–1392','1653–1741','陰天','https://pokemongohub.net/post/event/super-mega-clefable-raid-day/'),
 zacian:addCP('蒼響（百戰勇者）','2100–2188','2625–2735','陰天','https://pokemongohub.net/post/guide/zacian-crowned-sword-raid-guide/'),
 zamazenta:addCP('藏瑪然特（百戰勇者）','2100–2188','2625–2735','陰天','https://pokemongohub.net/post/guide/zamazenta-crowned-shield-raid-guide/'),
 zekrom:addCP('捷克羅姆','2217–2307','2771–2884','下雨／強風','https://leekduck.com/pokemon-go-wild-area/raids/'),
 reshiram:addCP('萊希拉姆','2217–2307','2771–2884','晴天／強風','https://leekduck.com/pokemon-go-wild-area/raids/'),
 kyurem:addCP('酋雷姆（焰白／闇黑團體戰）','1957–2042','2446–2553','下雪／強風','https://leekduck.com/pokemon-go-wild-area/raids/'),
 tornadus:{...addCP('暗影龍捲雲（化身）','1762–1911','2203–2389','強風',hub+'641-Incarnate_Shadow/iv-chart'),purifyCP:{lv20:1878,lv25:2347}},
 landorus:{...addCP('暗影土地雲（化身）','1897–2050','2372–2563','晴天／強風',hub+'645-Incarnate_Shadow/iv-chart'),purifyCP:{lv20:2016,lv25:2520}}
};
const deoxys=[
 ['普通','1717–1806','2146–2257','Normal'],['攻擊','1372–1474','1716–1842','Attack'],
 ['防禦','1228–1299','1535–1624','Defense'],['速度','1568–1645','1960–2056','Speed']
].map(([form,lv20,lv25,id])=>addCP('代歐奇希斯（'+form+'）',lv20,lv25,'強風',hub+'386-'+id));
const lowTier=[
 ['嘎啦嘎啦（阿羅拉）','988–1048','1235–1311','晴天／霧'],['酷豹','993–1055','1241–1318','霧'],
 ['泥偶巨人','1554–1630','1943–2038','晴天／霧'],['喵喵（阿羅拉）','416–455','520–569','霧'],
 ['夢妖','1039–1100','1298–1376','霧'],['哭哭面具（伽勒爾）','516–561','646–701','晴天／霧'],
 ['沙丘娃','655–705','819–881','晴天／霧']
].map(row=>addCP(...row,currentRaids));
const maxCP=(name,cp,id)=>addCP('極巨化'+name,cp,null,null,hub+id+'-Dynamax');
const machop=maxCP('腕力','678–730',66);
const shadowLowCP=[["暗影波皇子","868–972","1086–1215","下雨",948,1186],["暗影長毛豬","1217–1340","1521–1675","下雪／晴天",1312,1640],["暗影蚊香君","716–811","895–1013","下雨",789,987],["暗影幼基拉斯","513–594","642–743","局部多雲／晴天",576,720],["暗影水躍魚","560–644","700–805","下雨",625,781],["暗影幕下力士","391–467","489–583","陰天",449,562],["暗影頭蓋龍","922–1040","1153–1300","局部多雲",1013,1267]].map(([name,lv20,lv25,weather,cp20,cp25])=>({
 ...addCP(name,lv20,lv25,weather,currentRaids),purifyCP:{lv20:cp20,lv25:cp25}
}));
const tables={
 [lowShadow.title]:shadowLowCP,
 '騎拉帝納（起源形態）':[cpData.origin],
 '騎拉帝納（別種形態）':[cpData.altered],
 '騎拉帝納（別種）團體戰時刻':[cpData.altered],
 '克雷色利亞、達克萊伊':[cpData.cresselia,cpData.darkrai],
 '克雷色利亞／達克萊伊團體戰時刻':[cpData.cresselia,cpData.darkrai],
 '代歐奇希斯（普通、攻擊、防禦、速度）':deoxys,
 '代歐奇希斯團體戰時刻':deoxys,
 '超級勾魂眼':[cpData.sableye],'超級詛咒娃娃':[cpData.banette],'超級巨金怪':[cpData.metagross],
 '皮可西極致超級團體戰日':[cpData.clefable],
 '暗影土地雲（化身）':[cpData.landorus],'暗影龍捲雲（化身）':[cpData.tornadus],
 '三星／一星團體戰':lowTier,
 '極巨化勾魂眼':[maxCP('勾魂眼','789–843',302)],'極巨化腕力':[machop],
 '極巨化妙喵':[maxCP('妙喵','669–719',677)],'極巨化幾何雪花':[maxCP('幾何雪花','1524–1598',615)],
 '蒼響（劍之王）團體戰時刻':[cpData.zacian],'藏瑪然特（盾之王）團體戰時刻':[cpData.zamazenta],
 '曠野地帶：全球':[cpData.zekrom,cpData.reshiram,cpData.kyurem],
 '曠野週':[cpData.zacian,cpData.zamazenta,maxCP('拉魯拉絲','275–308',280),machop,
  maxCP('雷吉斯奇魯','1326–1398',379),maxCP('雷吉鐸拉戈','1614–1699',895),
  maxCP('拉帝亞斯','1921–2006',380),maxCP('拉帝歐斯','2090–2178',381)]
};
function catchCP(item){
 const rows=tables[item.title];
 if(!rows)return '';
 const weather=rows.some(row=>row.lv25);
 const body=rows.map(({name,lv20,lv25,weather:boost,source,purifyCP})=>'<tr><th scope="row"><a href="'+source+'" target="_blank" rel="noopener">'+name+'</a></th><td>'+lv20+'</td>'+
  (weather?'<td>'+(lv25||'—')+'</td><td>'+(boost||'—')+'</td>':'')+'</tr>'+
  (purifyCP?'<tr><th scope="row">13/13/13</th><td>'+purifyCP.lv20+'</td><td>'+purifyCP.lv25+'</td><td>'+(boost||'—')+'</td></tr>':'')).join('');
 return '<h3>捕獲 CP</h3><p class="muted">最低–最高，最大值為 15/15/15。'+(!weather?'極巨對戰固定 Lv.20。':'')+'</p>'+
  '<div class="cp-scroll"><table><thead><tr><th scope="col">捕獲寶可夢</th><th scope="col">Lv.20</th>'+
  (weather?'<th scope="col">Lv.25</th><th scope="col">加成天氣</th>':'')+'</tr></thead><tbody>'+body+'</tbody></table></div>';
}


const octoberCP=[
 ['哲爾尼亞斯','2073–2160','2591–2701','陰天',716],
 ['伊裴爾塔爾','2073–2160','2591–2701','強風／霧',717],
 ['帝牙盧卡','2217–2307','2771–2884','強風／下雪',483],
 ['帕路奇亞','2190–2280','2737–2850','下雨／強風',484]
];
for(const [name,lv20,lv25,weather,id] of octoberCP){
 const rows=[addCP(name,lv20,lv25,weather,hub+id+'/iv-chart')];
 tables[name]=rows;
 tables[name+'團體戰時刻']=rows;
}
tables['騎拉帝納（起源形態）團體戰時刻']=[cpData.origin];
for(const [title,name,lv20,lv25,weather,source] of [
 ['超級大食花','大食花','1332–1389','1666–1736','晴天／陰天','https://pokemongohub.net/post/guide/mega-victreebel-raid-guide/'],
 ['超級水箭龜','水箭龜','1338–1409','1673–1761','下雨',hub+'9-Mega/iv-chart'],
 ['超級快龍','快龍','2079–2167','2599–2709','強風',hub+'149-Mega/iv-chart'],
 ['超級噴火龍 X／Y','噴火龍','1574–1651','1968–2064','晴天／強風',hub+'6/iv-chart'],
 ['水晶燈火靈極致超級團體戰日','水晶燈火靈','1784–1867','2231–2335','晴天／霧','https://pokemongohub.net/post/guide/super-mega-chandelure-raid-guide/']
])tables[title]=[addCP(name,lv20,lv25,weather,source)];
for(const [name,range,id] of [['淚眼蜥','579–627',816],['燒火蚣','553–599',850],['稚山雀','344–380',821],['狃拉','1107–1172',215]])tables['極巨化'+name]=[maxCP(name,range,id)];
tables['超極巨閃焰王牌極巨對戰日']=[addCP('超極巨化閃焰王牌','1646–1724',null,null,hub+'815-Gigantamax')];
tables['暗影雷電雲（化身）']=[{...addCP('暗影雷電雲（化身）','1762–1911','2203–2389','下雨／強風',hub+'642-Incarnate_Shadow/iv-chart'),purifyCP:{lv20:1878,lv25:2347}}];

function eventSections(item){
 const sectionNames={debut:'首度登場的寶可夢',shiny:'首度開放的異色寶可夢',bonuses:'活動獎勵加碼內容',wild:'地圖上遇見的寶可夢',raids:'團體戰',other:'其餘'};
 const sections={...item.sections};
 for(const [type,detail] of item.highlights||[]){
  const key=type==='寶可夢首次登場'?'debut':type==='異色首次開放'?'shiny':'other';
  if(type==='特殊造型'&&['萬聖節 2026 Part I','萬聖節 2026 Part II'].includes(item.title))continue;
  if(item.title==='Twilight Wishes'&&(type==='異色機率提高'||detail.includes('冠飾')))continue;
  (sections[key]??=[]).push(key==='other'?type+'｜'+detail:detail);
 }
 return Object.entries(sectionNames).map(([key,title])=>{
  const entries=sections[key];
  return entries?.length?'<section class="event-highlights"><h3>'+title+'</h3><ul>'+entries.map(detail=>'<li>'+detail+'</li>').join('')+'</ul></section>':'';
 }).join('');
}

function showDetail(item){
 $('body').innerHTML='<h2 id="event-title">'+item.title+'</h2><p>'+(item.start?range(item)+' · 台灣時間':'換檔日期待確認')+'</p>'+(item.summary?'<p>'+item.summary+'</p>':'')+
 (item.bosses?'<dl class="raid-list">'+Object.entries(categories).filter(([key])=>(item.shownBosses||item.bosses)[key]).map(([key,name])=>'<dt>'+name+'</dt><dd>'+(item.shownBosses||item.bosses)[key]+'</dd>').join('')+'</dl>':'')+
 (item.community?'<h3>玩家整理</h3><p>'+item.community+'</p>':'')+
 eventSections(item)+catchCP(item)+
 '<h3>來源</h3><ul>'+item.links.map(([name,url])=>'<li><a href="'+url+'" target="_blank" rel="noopener">'+name+'</a></li>').join('')+'</ul>';
 $('detail').showModal();
};
$('detail').setAttribute('aria-labelledby','event-title');
render();
