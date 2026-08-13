// 🎵 wc4° 音乐仓库 - 全局歌手索引数据库
// 这个文件就像是一本字典的"目录"，用于在各个分类页面（如 huayu.html）生成歌手卡片。

const musicDatabase = [
    { 
        id: "cn-zhoujielun",       // 唯一标识符，以后用来跳转到他的专属页面，比如 ?id=cn-zhoujielun
        name: "周杰伦", 
        pinyin: "Z",            // 用于 A-Z 侧边栏滑动定位
        category: "华语金曲",   // 用于页面分类过滤
        avatar: "https://star.kuwo.cn/star/starheads/300/s4s56/58/291211030.jpg" 
    },
    { 
        id: "cn-daiailing",
        name: "戴爱玲",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/CZTvJ5RlKkHnCNMgIlqYKg==/109951164353373942.jpg?param=640y640"
    },
    { 
        id: "cn-caiyilin",
        name: "蔡依林",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/600/s4s67/8/3629759113.jpg"
    },
    { 
        id: "cn-liuwenzheng",
        name: "刘文正",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/UtBcXgEYiCcPT63F1lGQ4w==/910395627827793.jpg?param=640y640"
    },
    { 
        id: "cn-chensheng",
        name: "陈升",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bd/a8/7f/bda87f4c-79e0-be1f-380b-d3cb2234b036/4710149720412_cover.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-chenhuiyang-chorus",
        name: "陈辉阳 x 女声合唱",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/r-f13WocLChZOBdxm_i5cQ==/109951169727378535.jpg?param=640y640"
    },
    { 
        id: "cn-lizhi", 
        name: "李志", 
        pinyin: "L",
        category: "华语金曲", 
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ac/18/e5/ac18e537-3cc4-7b13-5d03-95b1fa97ccef/9787798608441.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-cocoliwen",
        name: "coco李玟",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/800/s4s20/32/2444940542.jpg"
    },
    { 
        id: "cn-wangfei", 
        name: "王菲", 
        pinyin: "W", 
        category: "华语金曲", 
        avatar: "https://star.kuwo.cn/star/starheads/300/s4s8/6/707165471.png"           
    },
    { 
        id: "cn-weilan",
        name: "卫兰",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/600/s4s86/10/3969983328.jpg"
    },
    { 
        id: "cn-yangchenglin",
        name: "杨丞琳",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/600/s4s28/93/3469735896.jpg"
    },
    {
        id: "cn-4inlove",
        name: "4 In Love",
        pinyin: "4",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/wdStD0IgOe0pwtQHE6Jb1Q==/65970697683655.jpg"
    },
    {
        id: "cn-f4",
        name: "F4",
        pinyin: "F",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/mZv6m9OsfiWnE80NHxhZSA==/109951170120538410.jpg"
    },
    {
        id: "us-judaspriest",
        name: "Judas Priest",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://star.kuwo.cn/star/starheads/500/s4s28/65/726437609.jpg"
    },
    {
        id: "us-badbunny",
        name: "Bad Bunny",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/3EP-Sa5IniDHJ7d9EeS0Kg==/109951169172608009.jpg?param=600y600"
    },
    {
        id: "us-lanadelrey",
        name: "Lana Del Rey",
        pinyin: "L",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/Qa3QYSpZ2A205_IC8F7YgA==/109951168471196428.jpg?param=600y600"
    },
    {
        id: "cn-yangkun",
        name: "杨坤",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/CwMFlqjWxXWU5Ygc-apn0Q==/109951172350766096.jpg?param=600y600"
    },
    {
        id: "cn-lonelychinaday",
        name: "Lonely China Day（寂寞.夏.日）",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/NF6y82uTNNQnDlsyNL1GJw==/109951162901320270.jpg?param=600y600"
    },
    {
        id: "cn-jirujing",
        name: "纪如璟",
        pinyin: "J",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/j04WWYlqdHBjllU_zeRz9Q==/152832116277493.jpg?param=600y600"
    },
    { 
        id: "kr-stella-jang",
        name: "Stella Jang (스텔라장)",
        pinyin: "S",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/bk-MBe0Pxl3pY0Do8JH5-g==/109951170463564554.jpg"
    },
    { 
        id: "cn-zhangguorong",
        name: "张国荣",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/500/s4s44/6/2602790997.png"
    },
    { 
        id: "cn-zhouxun",
        name: "周迅",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/1N5pnot1FD4g_9x0zG_0Kg==/261683767427790.jpg"
    },
    { 
        id: "cn-zhanghexuan",
        name: "张赫煊",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/dayrcjq5DlX-sXahuOnUxw==/109951165511206170.jpg?param=640y640"
    },
    { 
        id: "kr-eugene",
        name: "柳真（유진, Eugene）",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/k5sBmeVKW_wR069Biaw6Gw==/577243604604544.jpg?param=600y600"
    },
    {
        id: "jp-okamura-takako",
        name: "岡村孝子（Okamura Takako）",
        pinyin: "O",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/qB1cr83n_n1VqM1G39srKg==/799344953417257.jpg"
    },
    { 
        id: "jp-yonekura-toshinori",
        name: "米倉利紀（Toshinori Yonekura）",
        pinyin: "T",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/5G5GBxlJ2w0d0ixcbKA7uw==/3373301674943324.jpg"
    },
    { 
        id: "jp-ayaka",
        name: "絢香（Ayaka）",
        pinyin: "A",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/uA3FIj5OlYSnjjW3NHO-tg==/109951171914745135.jpg?param=640y640"
    },
    { 
        id: "cn-sunyanzi",
        name: "孙燕姿",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/600/s4s28/47/3391812016.jpg"
    },
    { 
        id: "cn-steely-heart",
        name: "钢心",
        pinyin: "G",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/500/82/54/2817225375.jpg"
    },
    { 
        id: "cn-tengger",
        name: "腾格尔",
        pinyin: "T",
        category: "华语金曲",
        avatar: "https://img1.kuwo.cn/star/albumcover/600/s4s26/8/1799400730.jpg"
    },
    { 
        id: "ww-tangduytan",
        name: "Tăng Duy Tân",
        pinyin: "T",
        category: "环球探索",
        avatar: "https://p2.music.126.net/WCXdF7e_IbKyNUC0uJpUYw==/109951165561725696.jpg"
    },
    { 
        id: "ww-pami",
        name: "pami",
        pinyin: "P",
        category: "环球探索",
        avatar: "https://p1.music.126.net/DBg-MypM9zSR7rq67kzQmQ==/109951169657893348.jpg"
    },
    { 
        id: "us-michaeljackson",
        name: "Michael Jackson",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/3Et8DQcWqKW1Ejv6SzVWWw==/109951170501526889.jpg"
    },
    { 
        id: "us-miley-cyrus",
        name: "Miley Cyrus",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/UnyFtENpPq_Q8kzd8XuNxA==/109951170645917399.jpg"
    },
    { 
        id: "kr-lesserafim",
        name: "LE SSERAFIM",
        pinyin: "L",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/kfaJmPgiBP-rVpsGww5GdQ==/109951169927409880.jpg"
    },
    { 
        id: "cn-quwanting",
        name: "曲婉婷",
        pinyin: "Q",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/ZIN8IAH1rUKb4St5l4RzmA==/256186209288921.jpg"
    },
    { 
        id: "cn-xuekaiqi",
        name: "薛凯琪",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/_nvV5LsKzNS2Q_dONo1G1w==/109951166783319910.jpg?param=640y640"
    },
    { 
        id: "cn-xinbaodao",
        name: "新宝岛康乐队",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6d/cd/e2/6dcde251-2de4-847b-560d-2199a3f9ec72/0723_Cover_JPG.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-chenli",
        name: "陈粒",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/700/99/50/824592524.jpg"
    },
    { 
        id: "cn-lu1",
        name: "Lu1（陆壹）",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/MV3FeGJhpYSdA7KXTZ8UXA==/109951163009178600.jpg?param=640y640"
    },
    { 
        id: "us-melanie-martinez",
        name: "Melanie Martinez",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4e/8a/da/4e8ada12-5602-fc2c-f75b-167697e140d8/075679921369.jpg/600x600bb.jpg"
    },
    { 
        id: "us-chantal-chamberland",
        name: "Chantal Chamberland",
        pinyin: "C",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/Yd89qXFLdEIOm_e6DkOPIA==/926888302215271.jpg?param=640y640"
    },
    { 
        id: "jp-yusuke",
        name: "遊助（Yusuke）",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/mpQ8ekkWsgrjSzyPqBJ09g==/109951168608564026.jpg?param=640y640"
    },
    { 
        id: "jp-kaf",
        name: "花譜（KAF）",
        pinyin: "K",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/fqd_zvSaJy_osQqBPSKJGg==/109951171354473236.jpg?param=640y640"
    },
    { 
        id: "us-mustard",
        name: "Mustard",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/YTgf00C2SHKF4u0dsdZBbw==/109951167855991106.jpg"
    },
    { 
        id: "cn-yinyuke",
        name: "尹毓恪",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/mrEX4tmsHaq8d_E2K07Unw==/109951173044368819.jpg"
    },
    { 
        id: "cn-zhuyuexin",
        name: "朱约信（猪头皮）",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music7/v4/61/fc/6c/61fc6c64-6778-b123-d74b-2b370fea1db3/dj.mrmyvfsv.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-zhaowei",
        name: "赵薇",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b7/8e/94/b78e9430-ff3d-24f6-3f14-829374c8fceb/4711140371535.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-zhangshaohan",
        name: "张韶涵",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d0/82/d0/d082d010-818c-39e6-c5f9-eea8d2d872e3/70194_cover.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-zhengjun",
        name: "郑钧",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/33/f2/da/33f2dae7-8d18-b88b-2dfb-db52b940ffa6/mzm.ztjmuppm.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-fama",
        name: "农夫",
        pinyin: "N",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/73/5e/ee735e3a-76bb-23ad-6cb3-ecc0ce820bbf/19620101123K02.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-dwagie",
        name: "大支",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/38/e0/0d38e068-6eb5-d640-cc44-59689838f405/4711228293452.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-liumangade",
        name: "流氓阿德",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/ba/71/3b/ba713b81-fe8e-786b-b727-e6debccb38ff/4713616004862.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-hocc",
        name: "何韵诗",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6f/de/d1/6fded144-0dcc-1e1a-2b6d-2ac07741408f/825646268078.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-hepinghelang",
        name: "和平和浪",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e9/8d/14/e98d14fc-1f4a-ec3b-59fc-5957c3ca6012/cover.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-xiaoyuelaoban",
        name: "晓月老板",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/qYEmpWEADwvNy16BdQlu9g==/109951172541721854.jpg"
    },
    { 
        id: "us-50cent",
        name: "50 Cent",
        pinyin: "5",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/VM_nVZFb3FmdTEvoXuJPsA==/109951165742073654.jpg"
    },
    { 
        id: "us-dualipa",
        name: "Dua Lipa",
        pinyin: "D",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/AJP6zkoNdMNqJxEpP5r_vQ==/109951169044863787.jpg?param=640y640"
    },
    { 
        id: "us-boyzone",
        name: "Boyzone",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000002wdX0Y4EEXcH.jpg"
    },
    { 
        id: "cn-xiaoyaxuan",
        name: "萧亚轩",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/ugTD9665AQ7Dl5rJvJkQsw==/109951166194472953.jpg?param=640y640"
    },
    { 
        id: "cn-liuhuan",
        name: "刘欢",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/700/s4s21/34/1247914232.jpg"
    },
    { 
        id: "cn-lironghao",
        name: "李荣浩",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/87/b2/89/87b289ae-5728-6133-88a8-2a2658a535aa/196872064728.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-liangjingru",
        name: "梁静茹",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/55/d7/93/55d793f9-1cbd-51d2-780a-b14b085111d0/4710149701770_cover.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-xiaojingteng",
        name: "萧敬腾",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/fqd_zvSaJy_osQqBPSKJGg==/109951171354473236.jpg?param=640y640"
    },
    { 
        id: "cn-shanrenband",
        name: "山人乐队",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000003lm5tp27dxuR.jpg"
    },
    { 
        id: "cn-chenjieyi",
        name: "陈洁仪",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000001SzsyF0TEjf1.jpg"
    },
    { 
        id: "cn-zengpeici",
        name: "曾沛慈",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000001YzayJ1iMus1.jpg"
    },
    { 
        id: "cn-yunduo",
        name: "云朵",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000002U7Psh3e5vfz.jpg"
    },
    { 
        id: "cn-huangliangyu",
        name: "黄连煜",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/35/4b/62/354b6291-e7e2-116e-7849-95cbb6d19654/193017026689.jpg/600x600bb.jpg"
    },
    {
        id: "cn-1976band",
        name: "1976乐团",
        pinyin: "1",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/71/ec/c6/71ecc6f4-fa1c-b4c5-157d-bed16ac977f6/cover-w.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-supaiqing",
        name: "苏珮卿",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000004MYVXO13qkvT.jpg"
    },
    { 
        id: "cn-xuzhian",
        name: "许志安",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000Jh2K72nwQmN.jpg"
    },
    { 
        id: "cn-xietingfeng",
        name: "谢霆锋",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000004GPm8B362txY.jpg"
    },
    { 
        id: "cn-xieanqi",
        name: "谢安琪",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000001YZBa22LLKce.jpg"
    },
    { 
        id: "cn-xiaolaohu",
        name: "小老虎jfever",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000003sE57n3KXG4x.jpg"
    },
    { 
        id: "cn-xiaoqiang",
        name: "萧蔷",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000001HxEbI46jHPs.jpg"
    },
    { 
        id: "cn-xiban",
        name: "戏班乐队",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000004TcEdT3PBMEC.jpg"
    },
    { 
        id: "cn-gongcangzhuma",
        name: "弓藏竹马",
        pinyin: "G",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/9St2evEimz0Nd_60G99_BA==/109951169156856997.jpg"
    },
    { 
        id: "cn-wukequn",
        name: "吴克群",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000BAMFw3wRg0B.jpg"
    },
    { 
        id: "cn-zhuangxinyan",
        name: "庄心妍",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000003Cn3Yh16q1MO.jpg"
    },
    { 
        id: "cn-zhouyunpeng",
        name: "周云蓬",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M0000015E1aN3zm7tO.jpg"
    },
    { 
        id: "cn-zhaoyihao",
        name: "赵一豪",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000004gFQ7n1dr6ie.jpg"
    },
    { 
        id: "cn-zhaochuan",
        name: "赵传",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000003JUs4X1xzjld.jpg"
    },
    { 
        id: "cn-zhangweijian",
        name: "张卫健",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000003TrPd01f3OYo.jpg"
    },
    { 
        id: "cn-zhanghexuan",
        name: "张赫煊",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000SJp6n49rDgl.jpg"
    },
    { 
        id: "cn-yunhaoying",
        name: "云浩影",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/36/f8/35/36f83509-b210-f3bd-2be4-9c43a49f4fbf/827568003102.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-yongbang",
        name: "永邦",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20200211/20200211032305806558.jpg"
    },
    { 
        id: "cn-yinzhengyang",
        name: "殷正洋",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20200909/20200909124339939268.jpg"
    },
    { 
        id: "cn-tongange",
        name: "童安格",
        pinyin: "T",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20250125/20250125121629945606.jpg"
    },
    { 
        id: "cn-tangcan",
        name: "汤灿",
        pinyin: "T",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20200812/20200812160504610431.jpg"
    },
    { 
        id: "cn-tangbaoru",
        name: "汤宝如",
        pinyin: "T",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20260305/20260305055230329554.jpg"
    },
    { 
        id: "cn-tanjing",
        name: "谭晶",
        pinyin: "T",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20200620/20200620060409839838.jpg"
    },
    { 
        id: "cn-tanjiayi",
        name: "谭嘉仪",
        pinyin: "T",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/rbxek77t6VmeGpM0t2-z1g==/109951165588530236.jpg"
    },
    { 
        id: "cn-suyongkang",
        name: "苏永康",
        pinyin: "S",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20150718/20150718194137885057.jpg"
    },
    { 
        id: "cn-suyang",
        name: "苏阳",
        pinyin: "S",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20200620/20200620095101704079.jpg"
    },
    { 
        id: "cn-panmeichen",
        name: "潘美辰",
        pinyin: "P",
        category: "华语金曲",
        avatar: "http://imge.kugou.com/stdmusic/400/20250125/20250125121645595559.jpg"
    },
    { 
        id: "cn-caijianya",
        name: "蔡健雅",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000hNnWC3kko2c_6.jpg"
    },
    { 
        id: "cn-chenjingfei",
        name: "陈婧霏",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000002a81Ht1RVn1m.jpg"
    },
    { 
        id: "cn-katncandix2",
        name: "棉花糖",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000iyWae3SSKuX_2.jpg"
    },
    { 
        id: "cn-gemeimeimei",
        name: "哥哥妹妹",
        pinyin: "G",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000001Pg4n80KCtxM.jpg"
    },
    { 
        id: "cn-wanxiaoli",
        name: "万晓利",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000d55760WnzUf.jpg"
    },
    { 
        id: "cn-huangsiting",
        name: "黄思婷",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M0000032O3bw3WQit3.jpg"
    },
    { 
        id: "cn-mutuigua",
        name: "木推瓜",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000000nlQrf2K0osh.jpg"
    },
    { 
        id: "cn-beyond",
        name: "BEYOND",
        pinyin: "B",
        category: "华语金曲",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000002pUZT93gF4Cu.jpg"
    },
    { 
        id: "cn-zhangwei",
        name: "张玮",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/0LF8LFUYQDttQk3amt5FFA==/3287539767353245.jpg?param=640y640"
    },
    { 
        id: "cn-dengmiaohua",
        name: "邓妙华",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/GEhvsaEpfezL_VRcoJ7uRw==/226499395338242.jpg?param=640y640"
    },
    { 
        id: "cn-liangbo",
        name: "梁博",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/LaqoquOfDZnlrsEj22kehw==/109951164387670165.jpg?param=640y640"
    },
    { 
        id: "cn-luorifeiche",
        name: "落日飞车",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/9Cfn8l_nwgEJcJO06jzW0Q==/109951171831679493.jpg?param=640y640"
    },
    { 
        id: "cn-lixinjie",
        name: "李心洁",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/eTEUvjxceCjYNHNMAqh2qA==/109951168540526638.jpg?param=640y640"
    },
    { 
        id: "cn-linxiaopei",
        name: "林晓培",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/8wHazMtSZS1emgt-EC1nYg==/109951168993457751.jpg?param=640y640"
    },
    { 
        id: "cn-aikebaier-tuerdi",
        name: "艾克拜尔·吐尔地",
        pinyin: "A",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/3Q7N0AD0zVndz72pB9pMpw==/109951172792827442.jpg?param=640y640"
    },
    { 
        id: "cn-zenyuedui",
        name: "ZEN乐队",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/Y8gytSLMU9HUG9mjKZG0dw==/109951168540041383.jpg?param=640y640"
    },
    { 
        id: "cn-xiemingyou",
        name: "谢铭佑",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e2/41/8d/e2418d98-56fa-25ed-c5bd-374d21ec5e70/4711385815054.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-adu",
        name: "阿杜",
        pinyin: "A",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/6jy6Pusup0l4txZqwR8Oqg==/109951169135330721.jpg?param=640y640"
    },
    { 
        id: "cn-anu",
        name: "阿牛",
        pinyin: "A",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/F4euwKJc8y3SbXPyuJht8Q==/109951163402100968.jpg?param=640y640"
    },
    { 
        id: "cn-benduoruru",
        name: "本多RuRu",
        pinyin: "B",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/-MsAqYVN3VEXpDFJF7NDyg==/452998790645525.jpg?param=640y640"
    },
    {
        id: "kr-hyukoh",
        name: "HYUKOH（혁오）",
        pinyin: "H",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/nhtl5x-Y6xj47nHcdqWixQ==/2921402396910237.jpg?param=640y640"
    },
    {
        id: "kr-irene",
        name: "IRENE (아이린)",
        pinyin: "I",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/JO1rjIaX20hZbmNDdTKEzg==/109951170175638969.jpg"
    },
    {
        id: "kr-t-ara",
        name: "T-ara (티아라)",
        pinyin: "T",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/A51VTHI5Y-B3iy1UB2fi0w==/109951166779380660.jpg"
    },
    {
        id: "kr-yves",
        name: "Yves (이브)",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/lRacigZTmd600nStf4xYWw==/109951169597595123.jpg"
    },
    { 
        id: "cn-majididi",
        name: "麻吉弟弟",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/RbLiZ4POaEYDx8oYhJNbIg==/109951169217075935.jpg"
    },
    { 
        id: "cn-fengjiangzhou",
        name: "丰江舟",
        pinyin: "F",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/Lo9U0usuMuPF-Cn87-9cPA==/109951169703069709.jpg?param=640y640"
    },
    { 
        id: "cn-cangying",
        name: "苍蝇乐队",
        pinyin: "C",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/GY9PeiiqpK95s5jX5rQVrQ==/219902325572636.jpg?param=640y640"
    },
    { 
        id: "cn-caoge",
        name: "曹格",
        pinyin: "C",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/uTlPq6hGB0b9VYkO-uybpQ==/113249697679230.jpg?param=640y640"
    },
    { 
        id: "cn-changshilei",
        name: "常石磊",
        pinyin: "C",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/GYlqfxV6QbffewdpfIjbWg==/109951165133612151.jpg?param=640y640"
    },
    { 
        id: "cn-daqiaoxiaoqiao",
        name: "大乔小乔",
        pinyin: "D",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/f_YEpQIfb3gkH2B-pa4aNA==/109951163003362886.jpg?param=640y640"
    },
    { 
        id: "cn-dixiaying'er",
        name: "地下婴儿",
        pinyin: "D",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/aLz8-v4saOmYtVA5JXMpWg==/109951173013499295.jpg?param=640y640"
    },
    { 
        id: "cn-dingshiguang",
        name: "丁世光",
        pinyin: "D",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/qEiQvX73aCJyYGpcnkvdZQ==/109951170229078011.jpg?param=640y640"
    },
    { 
        id: "cn-dongzhen",
        name: "董真",
        pinyin: "D",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/3pzMkwtbpuYWNlaeYuSh5w==/109951165418812496.jpg?param=640y640"
    },
    { 
        id: "cn-fangfang",
        name: "方芳",
        pinyin: "F",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/MEWZSjBrIcqIIIvxTyC79g==/109951169703392223.jpg?param=640y640"
    },
    { 
        id: "cn-feixu",
        name: "废墟乐队",
        pinyin: "F",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/28IxHS3mHXbxdwkR49kuOA==/109951162892866590.jpg?param=640y640"
    },
    { 
        id: "cn-guyu'an",
        name: "顾于安",
        pinyin: "G",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/lhsmRdYxyAscx2NH2eGjtA==/109951170882647939.jpg?param=640y640"
    },
    { 
        id: "cn-guanguan",
        name: "观观Guanguan",
        pinyin: "G",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/aTvmKAdjlrThcBVFjbIE1w==/109951173008379447.jpg?param=640y640"
    },
    { 
        id: "cn-heisa",
        name: "黑撒乐队",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/L7Zd27J2WfwtSvF2lxRs_Q==/109951166518736849.jpg?param=640y640"
    },
    { 
        id: "cn-huge",
        name: "胡歌",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/4hZUGU95_fA_W0l_qYhe1w==/109951163139102899.jpg?param=640y640"
    },
    { 
        id: "cn-huweiqi",
        name: "胡玮琪",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/J4ax6lo-DHD2VT_rmaAVNA==/109951167060664641.jpg?param=640y640"
    },
    { 
        id: "cn-huanglei",
        name: "黄磊",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/h4wTyCmIooPKilmc7cEZLw==/1411772943116621.jpg?param=640y640"
    },
    { 
        id: "cn-huangxiangyi",
        name: "黄湘怡",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/f627N0iePd1XAHcejiGyhA==/279275953472549.jpg?param=640y640"
    },
    { 
        id: "cn-huangyan",
        name: "黄妍",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/700/s4s85/89/1290074886.jpg"
    },
    { 
        id: "cn-jam",
        name: "Jam",
        pinyin: "J",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/YBvBifSVT1oRoL7Hs8-f8w==/109951163398529539.jpg?param=640y640"
    },
    { 
        id: "cn-chenjianan",
        name: "陈健安",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/700/s4s39/51/353624000.jpg"
    },
    { 
        id: "cn-liuyingting",
        name: "Jer 柳应廷",
        pinyin: "J",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/15VHkus6a8xnud78i7_nNg==/109951166161922016.jpg"
    },
    { 
        id: "cn-lailaibeibei",
        name: "來吧！焙焙！",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ef/de/05/efde05d0-5786-ca56-5fd6-2ad960284451/4711232867434.png/600x600bb.jpg"
    },
    { 
        id: "cn-jiushiyongcha",
        name: "九时用茶",
        pinyin: "J",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/lAxOMVkiVVFtJxHiH7KEEA==/109951167308164939.jpg"
    },
    { 
        id: "cn-dinglodejuxuetuan",
        name: "顶楼的马戏团",
        pinyin: "D",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/VK_CrsiO7sfW0BVnxcH1Rg==/6004432999691458.jpg"
    },
    { 
        id: "cn-lanlao",
        name: "揽佬",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/4OCeH50gC3F91BJeixEocg==/109951168913424214.jpg"
    },
    { 
        id: "cn-lengbing",
        name: "棱镜乐队",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/VszB6N1X1ammCXe0IY-1Nw==/109951164312899254.jpg"
    },
    { 
        id: "cn-liquan",
        name: "李泉",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/EOR2SlEZpONb-NeYZOGgjw==/109951163864167618.jpg"
    },
    { 
        id: "cn-lishengjie",
        name: "李圣杰",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/EE0xBLuGaZWyLqbi1SLndQ==/109951169657753331.jpg"
    },
    { 
        id: "cn-lianghanwen",
        name: "梁汉文",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/4L7WTUSomw7B8_LEuc2EhA==/109951168896259215.jpg"
    },
    { 
        id: "cn-liaoshixian",
        name: "廖士贤",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/77/e7/17/77e717a8-b877-36ee-26c5-76985724014b/4710149683885.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-lincuiping",
        name: "林翠萍",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/AV_GdD6XF43kCC9i_YV53Q==/5792227255362945.jpg"
    },
    { 
        id: "cn-chenchusheng",
        name: "陈楚生",
        pinyin: "C",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/HXs1MIcM7n9V7qFDTuW71A==/109951170540755845.jpg?param=640y640"
    },
    { 
        id: "cn-linyifeng",
        name: "林一峰",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/YV47U1QLdJsI_rKiNHpQmA==/6052811511444433.jpg?param=640y640"
    },
    { 
        id: "cn-liangyongqi",
        name: "梁咏琪",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/7mjL2B3jD4YhE847NEdV-A==/109951164119703038.jpg?param=640y640"
    },
    { 
        id: "cn-liuhonghua",
        name: "刘虹桦",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/vIIK8gGgK9Cm9OMstD6UQg==/8891750534159116.jpg?param=640y640"
    },
    { 
        id: "cn-luguangzhong",
        name: "卢广仲",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/DOhZkp1I7JyCtcZ88jc2Uw==/109951166698382247.jpg?param=640y640"
    },
    { 
        id: "cn-luqiaoyin",
        name: "卢巧音",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/PmvXREt9Zck7D5huaKz9rw==/109951166093405874.jpg?param=640y640"
    },
    { 
        id: "cn-luozhixiang",
        name: "罗志祥",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/h0IAQ5qHH7QKoCOwoflJgw==/109951169138149829.jpg?param=640y640"
    },
    { 
        id: "cn-lvfang",
        name: "吕方",
        pinyin: "L",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/gw2d9YCLMRT2QYkpYOwN6A==/109951168896254916.jpg?param=640y640"
    },
    { 
        id: "cn-mayuanshiren",
        name: "麻园诗人",
        pinyin: "M",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/vSwFbMJuEmfnr6iqMUFLKw==/109951168546162023.jpg?param=640y640"
    },
    { 
        id: "cn-madi",
        name: "马頔",
        pinyin: "M",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/VPvzCkjpoN40-NWlpMazbw==/109951164909602490.jpg?param=640y640"
    },
    { 
        id: "cn-nuomituan",
        name: "糯米团",
        pinyin: "N",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/dd/63/1b/dd631bcc-15b7-e100-8b27-cb2f723527e2/094639109654.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-chenshian",
        name: "陈势安",
        pinyin: "C",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/QERlEcERis13rR7QjUKlhw==/109951169891927091.jpg"
    },
    { 
        id: "cn-hush",
        name: "HUSH",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/8iKvG98galHjkr9pVmqyTw==/109951168184960778.jpg"
    },
    { 
        id: "cn-huangyiling",
        name: "黄乙玲",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/0reNICNJht_-A5heB7PjdQ==/168225279066836.jpg"
    },
    { 
        id: "cn-guojialu",
        name: "郭嘉璐",
        pinyin: "G",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/XWdRjt63F7gn-QFEmxYZaQ==/692692325533729.jpg"
    },
    { 
        id: "cn-dawenxi",
        name: "达闻西乐队",
        pinyin: "D",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/p4GJ1GFnJxesHfEaYxkjzA==/109951167879607853.jpg"
    },
    { 
        id: "cn-wangjingwen",
        name: "王靖雯",
        pinyin: "W",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/PNwEsWnrV2TpAKNadSAOFQ==/109951167493044841.jpg"
    },
    { 
        id: "cn-chenxiaoxia",
        name: "陈小霞",
        pinyin: "C",
        category: "华语金曲",
        avatar: "http://img1.kuwo.cn/star/starheads/120/s4s1/31/4049697152.jpg"
    },
    { 
        id: "cn-fuke",
        name: "浮克",
        pinyin: "F",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/JGSmo_FhjXeLie55veyMPg==/109951165091397813.jpg"
    },
    { 
        id: "cn-hanlei",
        name: "韩磊",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/500/73/32/3277426859.jpg"
    },
    { 
        id: "cn-heshisi",
        name: "何雁诗",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/XcxpvYc4luzPvLmEVaqaPA==/1418370007006063.jpg"
    },
    { 
        id: "cn-huangweijie",
        name: "黄玮杰",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://img3.kuwo.cn/star/starheads/120/58/89/3040272758.jpg"
    },
    { 
        id: "cn-menni",
        name: "门尼",
        pinyin: "M",
        category: "华语金曲",
        avatar: "http://img3.kuwo.cn/star/starheads/120/s4s18/47/3557555491.jpg"
    },
    { 
        id: "cn-miankong",
        name: "面孔乐队",
        pinyin: "M",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/z39kgwcyz_frg1zAlrfHKQ==/109951164103448574.jpg"
    },
    { 
        id: "cn-muma",
        name: "木马乐队",
        pinyin: "M",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/gY-xeEpFiG-vA1cX5DflUw==/109951169858490975.jpg"
    },
    { 
        id: "cn-yexier",
        name: "叶喜儿",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "http://p1.music.126.net/HPy7BsTDDM93rjB3M2kPEQ==/109951168165804287.jpg"
    },
    { 
        id: "jp-chico-with-honeyworks",
        name: "CHiCO with HoneyWorks",
        pinyin: "C",
        category: "日韩风尚",
        avatar: "http://p1.music.126.net/V_rHOoPJJaGVyOJmkhk6cA==/109951167614385149.jpg"
    },
    { 
        id: "jp-lisa",
        name: "織部里沙（LiSA）",
        pinyin: "L",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/fVan92q3iVeKokI5qWScCA==/109951172697725495.jpg"
    },
    { 
        id: "jp-e-girls",
        name: "E-girls",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/dmdWFYyQW2nNz-RBs0HWgQ==/109951165557469620.jpg"
    },
    { 
        id: "jp-sawai-miku",
        name: "沢井美空（Miku Sawai）",
        pinyin: "M",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/jJk_S5opGqnvOtGB7azsEA==/109951170914509870.jpg"
    },
    { 
        id: "jp-oda-kazumasa",
        name: "小田和正（Kazumasa Oda）",
        pinyin: "K",
        category: "日韩风尚",
        avatar: "http://p1.music.126.net/-0-AScu0n0xKF1OOUSUKQg==/109951170213987839.jpg"
    },
    { 
        id: "jp-ozaki-yutaka",
        name: "尾崎豊（Yutaka Ozaki）",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "http://p1.music.126.net/YE_KmM4WfIOAYxm603TkuA==/109951172050846523.jpg"
    },
    { 
        id: "jp-x-japan",
        name: "X JAPAN",
        pinyin: "X",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/tdpQPqlxwov2_QXDPZircg==/3406287028705257.jpg"
    },
    { 
        id: "jp-ishikawa-sayuri",
        name: "石川さゆり（Sayuri Ishikawa）",
        pinyin: "S",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/NjcGGTWGsTmxdlFRq8IVnw==/109951172381870952.jpg"
    },
    { 
        id: "jp-ueno-yuuka",
        name: "上野優華（Yuuka Ueno）",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/eYUyCvY1U4yPRrsoTZ9obA==/109951167442602150.jpg"
    },
    { 
        id: "jp-ken-hirai",
        name: "平井堅（Ken Hirai）",
        pinyin: "K",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/wdQdPTA4nt8AHsBR0VX91w==/109951170363391359.jpg"
    },
    { 
        id: "jp-joe-hisaishi",
        name: "久石譲（Joe Hisaishi）",
        pinyin: "J",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/lmPikYrlW4U52Ytq4S4Bzg==/109951166214498925.jpg"
    },
    { 
        id: "jp-lilas-ikuta",
        name: "幾田りら（Lilas Ikuta）",
        pinyin: "L",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/_yvA0fWvumukn5N03_llvw==/109951167527656544.jpg"
    },
    { 
        id: "jp-sekitori-hana",
        name: "関取花（Hana Sekitori）",
        pinyin: "H",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/00f59WO0WX8zpaEo8UEp_g==/109951165674577299.jpg"
    },
    { 
        id: "jp-nagabuchi-tsuyoshi",
        name: "長渕剛（Tsuyoshi Nagabuchi）",
        pinyin: "N",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/T0zRxI9tppyLSqST97s2sA==/5698768766889112.jpg"
    },
    {
        id: "us-oliviarodrigo",
        name: "Olivia Rodrigo",
        pinyin: "O",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/8vwdxsZ0nZkHnhdY78Kxqw==/109951173373022088.jpg"
    },
    {
        id: "jp-maaya-sakamoto",
        name: "坂本真綾（Maaya Sakamoto）",
        pinyin: "M",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/9iPJkVxXumluIsITDK8fXA==/109951172454927114.jpg"
    },
    {
        id: "jp-ryuichi-sakamoto",
        name: "坂本龍一（Ryuichi Sakamoto）",
        pinyin: "R",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/LENEH5ZOuBlW8RCOz-1BUw==/109951170035050707.jpg"
    },
    {
        id: "jp-yellow-magic-orchestra",
        name: "Yellow Magic Orchestra",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/Fi66jjBP17cJQLHgkl5DNA==/109951164923060890.jpg"
    },
    {
        id: "jp-kishida-kyodan",
        name: "岸田教団＆THE明星ロケッツ（Kishida Kyodan & The Akeboshi Rockets）",
        pinyin: "K",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/8iJWTUPfddY86idYCuD6OQ==/109951163508931190.jpg"
    },
    {
        id: "jp-riria",
        name: "りりあ。（riria.）",
        pinyin: "R",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/WL2YQstp9_ni9sNDkXzJDw==/109951170213930591.jpg"
    },
    {
        id: "jp-kerakera",
        name: "ケラケラ（KERAKERA）",
        pinyin: "K",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/XCmHbVh8i05EzcNDnuY1Cw==/5957153999437622.jpg"
    },
    {
        id: "jp-atarayo",
        name: "あたらよ（Atarayo）",
        pinyin: "A",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/pOvQ6UmQwWgE2LZ6jkBarQ==/109951172591881444.jpg"
    },
    {
        id: "jp-yoasobi",
        name: "YOASOBI",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/Af267FCGfOlv8b48PukVUg==/109951172064237298.jpg"
    },
    {
        id: "jp-girl-next-door",
        name: "girl next door",
        pinyin: "G",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/lUvnzATLm0HNnj3mO0p6fg==/864216139455670.jpg"
    },
    {
        id: "kr-aespa",
        name: "aespa",
        pinyin: "A",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/8nKTd5vdBthCmfJotzjcGA==/109951171467169368.jpg"
    },
    {
        id: "kr-akmu",
        name: "AKMU",
        pinyin: "A",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/j4YuIJj-_sPyETBa_ULsuA==/109951173021669505.jpg"
    },
    {
        id: "kr-boa",
        name: "BoA",
        pinyin: "B",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/Nr2G9r6xy5i8mM3e4FkuMg==/109951169431818675.jpg"
    },
    {
        id: "kr-windflower",
        name: "바람꽃 (Wind Flower)",
        pinyin: "W",
        category: "日韩风尚",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ee/2a/eb/ee2aeb86-b068-476d-4c90-52d38a570782/8809829705798.jpg/600x600bb.jpg"
    },
    {
        id: "cn-maniexian",
        name: "马念先",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/YSekgfzZeo_Fd6ecnZ_rzQ==/922490255729842.jpg"
    },
    {
        id: "cn-zhangxingchan",
        name: "张醒婵",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/NVPoXBkZ8ckRLZkVdkbm3A==/109951165399673170.jpg"
    },
    {
        id: "cn-tuhonggang",
        name: "屠洪刚",
        pinyin: "T",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/wSIQU5TOcnM97kZ_AXr4aQ==/81363860473416.jpg"
    },
    {
        id: "cn-luodayou",
        name: "罗大佑",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/RG7o5BwKjIVK5-PHlPtlNA==/109951172024531494.jpg"
    },
    {
        id: "us-adele",
        name: "Adele",
        pinyin: "A",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/X_tH0bklGF5AjWeTafL5bw==/109951172373873368.jpg"
    },
    {
        id: "us-alanismorissette",
        name: "Alanis Morissette",
        pinyin: "A",
        category: "欧美之声",
        avatar: "http://p1.music.126.net/6Ch6jL1O8etWaoiIWQ6X0g==/109951165956624935.jpg"
    },
    {
        id: "us-avicii",
        name: "Avicii",
        pinyin: "A",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/VFIh-ZZhVwiXL6h_pxd44A==/109951166128779931.jpg"
    },
    {
        id: "us-bbking",
        name: "B.B. King",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/K6IQ56JaWn_soX5lz0hjmw==/195713069764080.jpg"
    },
    {
        id: "us-benjaminclementine",
        name: "Benjamin Clementine",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/tsViiCpd2JdI9mqhCiNmig==/6621259022761077.jpg"
    },
    {
        id: "us-boardsofcanada",
        name: "Boards of Canada",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/xtAGiRmy6BkzxQFtjXJIxQ==/5929666209037542.jpg"
    },
    {
        id: "us-bobdylan",
        name: "Bob Dylan",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/0tY_34MqhE6VayPfvxeVfw==/109951168271930969.jpg"
    },
    {
        id: "us-bossmandlow",
        name: "Bossman Dlow",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/X4zALgwSopYXGd1g-fIxPA==/109951168009598315.jpg"
    },
    {
        id: "us-boywithuke",
        name: "BoyWithUke",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/hoD43Ts-TR7zUgzM-pSefA==/109951166605982853.jpg"
    },
    {
        id: "us-britneyspears",
        name: "Britney Spears",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/ht2XsOngjArNSBuk4lNGLA==/109951166541216410.jpg"
    },
    {
        id: "us-christinaaguilera",
        name: "Christina Aguilera",
        pinyin: "C",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/ZGR9siPMonIMPcJzbpKqyA==/109951167948237353.jpg"
    },
    {
        id: "us-cocteauteins",
        name: "Cocteau Twins",
        pinyin: "C",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/917sb-NJacP7pZLErsdCog==/736672790644834.jpg"
    },
    {
        id: "us-danielcaesar",
        name: "Daniel Caesar",
        pinyin: "D",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/fjQ50mbu7inIjr4DXaSTHA==/109951172201677466.jpg"
    },
    {
        id: "us-dio",
        name: "Dio",
        pinyin: "D",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/gQNbF_UJiOqPMXqpBMQxMA==/733374255761151.jpg"
    },
    {
        id: "us-drake",
        name: "Drake",
        pinyin: "D",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/IYf_pG2T5Ld89EqdIrr5cw==/109951172373878970.jpg"
    },
    {
        id: "us-him",
        name: "HIM",
        pinyin: "H",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/8nKTd5vdBthCmfJotzjcGA==/109951171467169368.jpg"
    },
    {
        id: "cn-xusong",
        name: "许嵩",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/GzUNS4BEQXP6ElMqLmLfow==/109951169440820668.jpg?param=640y640"
    },
    {
        id: "us-imaginedragons",
        name: "Imagine Dragons",
        pinyin: "I",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/lWRDGFJAq-VcUIiQjDq4ow==/109951170483989765.jpg"
    },
    {
        id: "us-jamesbrown",
        name: "James Brown",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/BD-gfB4tFCkVDm9sIOGVsg==/177021372091863.jpg"
    },
    {
        id: "us-jessiej",
        name: "Jessie J",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/SR_oLcRJyLnD_OFSkhF8hw==/109951168272063214.jpg"
    },
    {
        id: "us-joanosborne",
        name: "Joan Osborne",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/QTCKZvpPwk9bzvmG67EYqQ==/775155697593571.jpg"
    },
    {
        id: "us-justintimberlake",
        name: "Justin Timberlake",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/eGhHFk8lcU1FIi5vxv9iIQ==/109951169357770419.jpg"
    },
    {
        id: "cn-huishengtuan",
        name: "回声乐团",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/22/2b/0e/222b0e48-7cde-19f5-6fd1-1ff37d1b8446/4710243778067.png/600x600bb.jpg"
    },
    {
        id: "us-kehlani",
        name: "Kehlani",
        pinyin: "K",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/97/46/23/97462320-3dc5-f1ce-1436-725e4ddf9862/075679908612.jpg/600x600bb.jpg"
    },
    {
        id: "us-kingcrimson",
        name: "King Crimson",
        pinyin: "K",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/a8/5d/d3/a85dd370-ed7e-1e6f-f2ee-5464f7b3a978/Red_2500px.jpg/600x600bb.jpg"
    },
    {
        id: "us-kygo",
        name: "Kygo",
        pinyin: "K",
        category: "欧美之声",
        avatar: "http://p1.music.126.net/mIe-yAeryxEfZIz4aBuc8w==/109951169682732902.jpg"
    },
    {
        id: "us-lauv",
        name: "Lauv",
        pinyin: "L",
        category: "欧美之声",
        avatar: "http://p1.music.126.net/gDluJB24iEH4sHETa1qYXQ==/109951169612657729.jpg"
    },
    {
        id: "us-lilnasx",
        name: "Lil Nass X",
        pinyin: "L",
        category: "欧美之声",
        avatar: "http://p2.music.126.net/gHFnAwGcFApPN4cahzeFEQ==/109951169727325996.jpg"
    },
    {
        id: "us-littlerichard",
        name: "Little Richard",
        pinyin: "L",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6a/59/ba/6a59ba83-b62c-0aba-afdf-70112572352d/00888072025745.rgb.jpg/600x600bb.jpg"
    },
    {
        id: "us-katyperry",
        name: "Katy Perry",
        pinyin: "K",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/A1SLzv04GMv_X8JYT5TW1Q==/109951169774663460.jpg"
    },
    {
        id: "us-m2m",
        name: "M2M",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/k7AXAA4DG9Y9M2ldOh7mQA==/109951165884543825.jpg"
    },
    {
        id: "us-meghantrainor",
        name: "Meghan Trainor",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/4a8krjUR58H3DkkBcm3nwg==/109951172272245131.jpg"
    },
    {
        id: "us-nellyfurtado",
        name: "Nelly Furtado",
        pinyin: "N",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/G6IDt-_E4d5VyYLIm9v9CQ==/109951165904557994.jpg"
    },
    {
        id: "us-pnk",
        name: "P!nk",
        pinyin: "P",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/0Bg1_h_HH2Q5i8g5khFgGg==/109951169421885142.jpg"
    },
    {
        id: "us-raycharles",
        name: "Ray Charles",
        pinyin: "R",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/31/f6/ed/31f6edc2-e415-a854-f634-07086e2a079c/112819.jpg/600x600bb.jpg"
    },
    {
        id: "us-rush",
        name: "Rush",
        pinyin: "R",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/wZ2TFyVGy9t9RI-RR7QvKA==/109951172685785075.jpg?param=640y640"
    },
    {
        id: "us-thechainsmokers",
        name: "The Chainsmokers",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://img4.kuwo.cn/star/albumcover/500/s4s43/20/3957268027.jpg"
    },
    {
        id: "us-samcooke",
        name: "Sam Cooke",
        pinyin: "S",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f0/77/d7/f077d7c0-6d93-d3c0-1b39-e2b9f3859bc5/dj.rvvxgagv.jpg/600x600bb.jpg"
    },
    {
        id: "us-sonnyboywilliamson",
        name: "Sonny Boy Williamson II",
        pinyin: "S",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a4/d2/6b/a4d26bbc-97a7-76d4-a70f-36e104e7c9eb/96297031063.jpg/600x600bb.jpg"
    },
    {
        id: "us-sophia",
        name: "SOPHIA",
        pinyin: "S",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/ZbRa33e57uMk13kMCSbdvw==/109951171706541394.jpg"
    },
    {
        id: "us-sting",
        name: "Sting",
        pinyin: "S",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e2/a4/a2/e2a4a265-f581-e336-5276-36fd694f9217/25UMGIM57592.rgb.jpg/600x600bb.jpg"
    },
    {
        id: "us-thepolice",
        name: "The Police",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/47/de/29/47de29d9-5109-2020-d296-1021a7378574/16UMGIM60880.rgb.jpg/600x600bb.jpg"
    },
    {
        id: "us-sza",
        name: "SZA",
        pinyin: "S",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg"
    },
    {
        id: "us-the1975",
        name: "The 1975",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7f/3b/6e/7f3b6e0f-ac35-98ff-f27f-fc51db0efea4/13UAAIM67470.rgb.jpg/600x600bb.jpg"
    },
    {
        id: "us-thundercat",
        name: "Thundercat",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/EG2VR55aggqBss74_X-n-w==/109951168980519544.jpg?param=640y640"
    },
    {
        id: "us-zaralarsson",
        name: "Zara Larsson",
        pinyin: "Z",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/TI10egalrtcV4SVI7ow-og==/109951169268320918.jpg"
    },
    {
        id: "us-zayn",
        name: "ZAYN",
        pinyin: "Z",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/_Ytc6Z6gZqZTebOnnTextQ==/109951172912561175.jpg"
    },
    {
        id: "us-helenerolles",
        name: "Hélène Rollès",
        pinyin: "H",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/mB0khpfrEkiNJ1wC_2dEhQ==/5918671092742764.jpg"
    },
    {
        id: "cn-huangqiusheng",
        name: "黄秋生",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/fe/93/05/fe930568-eaf5-7eed-a07e-20aba057845e/ROD-5128.jpg/600x600bb.jpg"
    },
    {
        id: "cn-huangdawei",
        name: "黄大炜",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/hcNsr-uW6nVK-POnRO-5VA==/109951169164941727.jpg"
    },
    {
        id: "cn-yujiayun",
        name: "余佳运",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/ZcTOs-OTtuaSK0Ie5We1EQ==/109951165432652393.jpg"
    },
    {
        id: "cn-sunyue",
        name: "孙悦",
        pinyin: "S",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/h8M-IvZvw_yFuMO6CKao3w==/109951169164929751.jpg"
    },
    {
        id: "cn-guyapi",
        name: "谷娅溦",
        pinyin: "G",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/BBmNEH_oO2ziaqXSbfC71A==/109951171892208268.jpg"
    },
    {
        id: "us-bjork",
        name: "Björk",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/56/e0/a8/56e0a842-83d8-b1e7-1748-93d48591de7f/5016958101497.jpg/600x600bb.jpg"
    },
    {
        id: "cn-gordonflanders",
        name: "Gordon Flanders",
        pinyin: "G",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/S1vlz95EimBGPOcTuKyXbQ==/109951168715185084.jpg"
    },
    {
        id: "cn-nanzhengbeizhan-nzbz",
        name: "南征北战NZBZ",
        pinyin: "N",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/HllZQm_iL5njBnKjKRdy0w==/109951171490949106.jpg?param=640y640"
    },
    {
        id: "cn-liuruoying",
        name: "刘若英",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/lkPWuNPoa9ood4pJiXURxA==/109951167974416547.jpg?param=640y640"
    },
    {
        id: "cn-mastamic",
        name: "MastaMic",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/RAW1Ep5It_G66HGs8Yv4kg==/109951168429547882.jpg?param=640y640"
    },
    {
        id: "us-hmltd",
        name: "HMLTD",
        pinyin: "H",
        category: "欧美之声",
        avatar: "https://star.kuwo.cn/star/starheads/700/s4s38/5/3811667018.jpg"
    },
    {
        id: "us-karynwhite",
        name: "Karyn White",
        pinyin: "K",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/YOHHitiwqQoKEJkZEA1XgA==/815837627810133.jpg?param=640y640"
    },
    {
        id: "cn-mixueweiqi",
        name: "蜜雪薇琪",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/YbM9cxSM-kl0ybxY6gfuZw==/109951168454289395.jpg?param=640y640"
    },
    {
        id: "cn-karencici",
        name: "Karencici",
        pinyin: "K",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/dMlXYoIp5JoeEN2RZQ88kQ==/109951163427690580.jpg?param=640y640"
    },
    {
        id: "us-dannyocean",
        name: "Danny Ocean",
        pinyin: "D",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/PiCZ6RuzUy9l0QsVn3d4Fw==/109951163020665915.jpg?param=640y640"
    },
    {
        id: "cn-zhongzhentao",
        name: "钟镇涛",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/jSxj3HoTIM3-Tjy9s7hYpQ==/109951168299155561.jpg?param=640y640"
    },
    {
        id: "us-tierrawhack",
        name: "Tierra Whack",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/IM6JwG1de7mZv_0L63AYJQ==/109951163709095026.jpg"
    },
    {
        id: "cn-wennaband",
        name: "温拿乐队",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/ri-3th7pqz-Anp1swzFamg==/109951165592462809.jpg?param=640y640"
    },
    {
        id: "cn-chenzhuoxuan",
        name: "陈卓璇",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/aTDJFruqkAn7oWalmUHU5w==/109951168226803296.jpg?param=640y640"
    },
    {
        id: "cn-dengruixia",
        name: "邓瑞霞",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/gpGv8VK2puzHNEIoWDsszg==/57174604661995.jpg?param=640y640"
    },
    {
        id: "cn-wangzeyan",
        name: "王泽言",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/N8_WSVtJSv5XUiZWFc3p4w==/109951168785257954.jpg?param=640y640"
    },
    {
        id: "us-johnlegend",
        name: "John Legend",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/BLJCTP_I0qt14h64cE7kZg==/109951170406569499.jpg?param=640y640"
    },
    {
        id: "cn-chenyixun",
        name: "陈奕迅",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/jj0EasWfUZpf1LW2SFeN-A==/109951173289562420.jpg?param=600y600"
    },
    {
        id: "cn-stepjad",
        name: "step.jad依加",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/LeuepDaZSrwdlvGlhBka2A==/109951171176645005.jpg?param=600y600"
    },
    {
        id: "us-jerryleelewis",
        name: "Jerry Lee Lewis",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/eoP-4Oe6Pj9w_rIZUG90cw==/637716744113661.jpg?param=600y600"
    },
    {
        id: "cn-echo",
        name: "ECHO",
        pinyin: "E",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/bH0A94rbLFo8-bIL8BuUAA==/31885837206788.jpg?param=600y600"
    },
    {
        id: "cn-lihuimin",
        name: "李蕙敏",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/eV-UaZmKWju1ECWqYNj9pw==/67070209312409.jpg?param=600y600"
    },
    {
        id: "cn-yinlin",
        name: "银临",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/mMZvNruOjEa4XNL6-lWjNg==/109951168919647064.jpg?param=600y600"
    },
    {
        id: "cn-zhoufeige",
        name: "周菲戈",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/RTHG3fanK6lOl0MubW6lRQ==/109951170215742652.jpg?param=600y600"
    },
    {
        id: "jp-angelaaki",
        name: "アンジェラ・アキ（Angela Aki）",
        pinyin: "A",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/3mGC7cEFuWCDJp25hkAQmw==/3283141725898006.jpg?param=600y600"
    },
    {
        id: "cn-zhangaijia",
        name: "张艾嘉",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/BsRkHhbtfLzdVzQtahUl4A==/109951167090748217.jpg?param=600y600"
    },
    {
        id: "cn-huhongjun",
        name: "胡鸿钧",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/GKpceQ7dezV7D3Mjn2a5gg==/109951169007391432.jpg?param=600y600"
    },
    {
        id: "us-babyface",
        name: "Babyface",
        pinyin: "B",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/DziRCqNcsPqLKIc8rfFaMQ==/579442627871254.jpg?param=600y600"
    },
    {
        id: "us-neworder",
        name: "New Order",
        pinyin: "N",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/2MuM5Ma_yhEpHz9q2HHRCg==/109951170099236776.jpg?param=600y600"
    },
    {
        id: "cn-linmo",
        name: "林默",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/B1L4IDDiAMN6mnMyta-P5A==/5885685743803849.jpg?param=640y640"
    },
    {
        id: "us-marillion",
        name: "Marillion",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/X6PChwIbxa92_cULb0Crbg==/223200860459690.jpg?param=600y600"
    },
    {
        id: "cn-huyanbin",
        name: "胡彦斌",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/w_z5B6inCOmfdmOXLLK6NA==/109951169374772275.jpg?param=600y600"
    },
    {
        id: "jp-msooja",
        name: "Ms.OOJA",
        pinyin: "M",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/n_BWf8ABnFMCUaS15OgifA==/109951172241421541.jpg?param=600y600"
    },
    {
        id: "im-caizhizhan",
        name: "蔡志展",
        pinyin: "C",
        category: "古典与纯音",
        avatar: "https://p2.music.126.net/HNANo3FcQFjXHIg38P9fig==/109951165531515964.jpg?param=600y600"
    },
    {
        id: "ww-ruel",
        name: "Ruel",
        pinyin: "R",
        category: "环球探索",
        avatar: "https://p2.music.126.net/W2gPgMCQAG3fFQOpbBvSkA==/109951172903890890.jpg?param=640y640"
    },
    {
        id: "cn-libihua",
        name: "李碧华",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/cY-f_YTxnR9kqYIGK5HZbA==/465093418551735.jpg?param=640y640"
    },
    {
        id: "cn-yuzhouren",
        name: "宇宙人",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/ppMpj3fwgy4c4KXtqxkWMg==/109951172185272247.jpg?param=640y640"
    },
    {
        id: "us-nas",
        name: "Nas",
        pinyin: "N",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/CEytlTs8ywFlVR6CGocj-A==/109951168733350411.jpg?param=640y640"
    },
    {
        id: "kr-jangyoonjung",
        name: "장윤정（Jang Yoonjung;张允瀞）",
        pinyin: "J",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/Qk0pzbzu4y8nDN21-QBOOw==/109951168044872307.jpg?param=640y640"
    },
    {
        id: "jp-kenshi-yonezu",
        name: "米津玄師（Kenshi Yonezu）",
        pinyin: "K",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/zQum8YKDJPI6mHBT1GkGoQ==/109951173415376229.jpg?param=640y640"
    },
    {
        id: "jp-mirei",
        name: "當山みれい（MIREI）",
        pinyin: "M",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/u5hzAQAemS0YYBgWsGupeQ==/109951169854895296.jpg?param=640y640"
    },
    {
        id: "us-conangray",
        name: "Conan Gray",
        pinyin: "C",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/KAOGpYYOGQ-fzM20p8i1XA==/109951171068360407.jpg?param=640y640"
    },
    {
        id: "cn-daoyuxinqing",
        name: "岛屿心情",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/-IqE7wACwLUTisI2ObgNnw==/109951166195864785.jpg?param=640y640"
    },
    {
        id: "cn-songdongye",
        name: "宋冬野",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/FRS2qHabnha-ZlYyfduX7g==/109951162811536835.jpg?param=640y640"
    },
    {
        id: "cn-linzhiying",
        name: "林志颖",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/HCTOqlgnRbG37YbNIvdbUw==/109951169038474808.jpg?param=640y640"
    },
    {
        id: "us-thecalling",
        name: "The Calling",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/cSljwrJeMVisNNBBVkPEuA==/5899979394974067.jpg?param=640y640"
    },
    {
        id: "cn-zhongshuman",
        name: "钟舒漫",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/V8OkFf7ulsJXQCAYj1Jt_A==/109951169300341434.jpg?param=640y640"
    },
    {
        id: "cn-dasangjiacuo",
        name: "达桑嘉措",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/clnpF5Q-WRjVKYneYhfaPQ==/109951172514774585.jpg?param=640y640"
    },
    {
        id: "cn-wangziming",
        name: "王子鸣",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/o8qoMHRIXpTv8Y985I4jxg==/109951169106526587.jpg?param=640y640"
    },
    {
        id: "us-madonna",
        name: "Madonna",
        pinyin: "M",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/9FG8yfkWzx3gQsFTz0kpTw==/109951173132197100.jpg?param=640y640"
    },
    {
        id: "cn-xuliang",
        name: "徐良",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/gGl5n50qGIRjlNVrjie4KQ==/109951170120539554.jpg?param=640y640"
    },
    {
        id: "cn-lanyibang",
        name: "蓝奕邦",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/qktYGKJ31_kWzm3l8iAoBA==/109951167550642611.jpg?param=640y640"
    },
    {
        id: "cn-wangxinping",
        name: "王馨平",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/hSZx4Gv25_i2DjVG6kWS6w==/109951167325184697.jpg?param=640y640"
    },
    {
        id: "us-2pac",
        name: "2Pac",
        pinyin: "2",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/iKFLjOU1VqELzsNuB2t7yg==/109951168930774652.jpg?param=640y640"
    },
    {
        id: "cn-kuangwenxun",
        name: "邝文珣",
        pinyin: "K",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/vi2lzBw0wf-UB96R0SWupQ==/72567767451227.jpg?param=640y640"
    },
    {
        id: "cn-wanglihong",
        name: "王力宏",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/T5eZ-cn4-_JAdsnB_WtHzQ==/109951170336953174.jpg?param=640y640"
    },
    {
        id: "cn-cailier",
        name: "蔡立儿",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/5yCStExfZN1eoxE0laHjXw==/109951169951696013.jpg?param=640y640"
    },
    {
        id: "jp-yanoakiko",
        name: "矢野顕子（Akiko Yano）",
        pinyin: "A",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/YEVdHNhiwwrnAqx4duOdwQ==/109951166208529916.jpg?param=640y640"
    },
    {
        id: "kr-v8",
        name: "V8",
        pinyin: "V",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/XOqJpRgum9b7k0iW_HK0EA==/109951173477720364.jpg?param=640y640"
    },
    {
        id: "cn-yaoshisan",
        name: "尧十三",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/2y_iNqvJcQyartL9m9Vyog==/109951164107862130.jpg?param=640y640"
    },
    {
        id: "cn-zhangyixing",
        name: "张艺兴",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/_Akf4ptADF0vwoCPvoOw8Q==/109951172494556946.jpg?param=640y640"
    },
    {
        id: "cn-youdaoshe",
        name: "诱导社",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/pqTMlSB4HdPBnbwreFu5Tw==/660806488319984.jpg?param=640y640"
    },
    {
        id: "cn-dingxiaoqin",
        name: "丁小芹",
        pinyin: "D",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/8Wlpue9ipVsWtO1D_libaw==/118747255818642.jpg?param=640y640"
    },
    {
        id: "cn-wenlan",
        name: "温岚",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/jPNVrYi_5I4GmWVkpPaADQ==/109951165687773622.jpg?param=640y640"
    },
    {
        id: "cn-luanzheng",
        name: "乱徵",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/3p_jB06rQI7_4pHWIlQWOQ==/109951171833048474.jpg?param=640y640"
    },
    {
        id: "cn-qiqin",
        name: "齐秦",
        pinyin: "Q",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/5VEZjCGZ-3KMrHpmfwG71w==/109951165592430252.jpg?param=640y640"
    },
    {
        id: "cn-wangsulong",
        name: "汪苏泷",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/rr0okZOQwSxTlVeLj8bKcQ==/109951172494698800.jpg?param=640y640"
    },
    {
        id: "jp-everylittlething",
        name: "Every Little Thing（小事乐团）",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/XH9PBvmMkZC4uMpgMFFnWw==/866415162711274.jpg?param=640y640"
    },
    {
        id: "jp-nakaemitsuki",
        name: "中恵光城（Mitsuki Nakae）",
        pinyin: "M",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/2tUvX8P9lc6TSGj2_Bm5PQ==/109951169959787959.jpg?param=640y640"
    },
    {
        id: "cn-liuxiaohui",
        name: "刘小慧",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/0lqZE2s9DpBXLGtrZE0tKw==/109951168314006703.jpg?param=640y640"
    },
    {
        id: "cn-kouchouching",
        name: "拷秋勤",
        pinyin: "K",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music/57/74/b7/mzi.zomayelm.tif/600x600bb.jpg"
    },
    {
        id: "cn-laodongfuwu",
        name: "劳动服务",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/LADD4JewRxC5uyj4hhWHkQ==/1396379775681587.jpg?param=640y640"
    },
    {
        id: "cn-zhuoshuixigongshe",
        name: "浊水溪公社",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://i.discogs.com/ftXGEEUHSi9Ri0hKDPood5gDPABoa3lkKxGfSgJGQQE/rs:fit/g:sm/q:90/h:480/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MTM4/ODYtMTM3NjMzOTI4/Mi02OTU1LmpwZWc.jpeg"
    },
    {
        id: "kr-newjeans",
        name: "NewJeans",
        pinyin: "N",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/pU_06PC40yUYqw1oAkTffg==/109951168160491323.jpg?param=640y640"
    },
    {
        id: "cn-huhuizhong",
        name: "胡慧中",
        pinyin: "H",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/1q7_y_LSaPLOHW6tZww_iQ==/158329674415720.jpg?param=640y640"
    },
    {
        id: "cn-houdejian",
        name: "侯德健",
        pinyin: "H",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/n8Qx5nVRNA1EJf7U4D1FyA==/605830906930728.jpg?param=640y640"
    },
    {
        id: "cn-kolor",
        name: "Kolor",
        pinyin: "K",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/i7lHrb3GyCDnzrJLUES-oQ==/109951162809972119.jpg?param=640y640"
    },
    {
        id: "cn-tookoo",
        name: "TOOKOO",
        pinyin: "T",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/8gKnkSjCoZ9h_t0njEGFFQ==/109951169502032673.jpg?param=640y640"
    },
    {
        id: "cn-yuwenwen",
        name: "于文文",
        pinyin: "Y",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/qqP7T57ifBhLU_a2ZtfqfA==/109951170187640451.jpg?param=640y640"
    },
    {
        id: "cn-liuyuning",
        name: "刘宇宁",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/k4W8F47fvoSsU8GYqIvJ5A==/109951164250458475.jpg?param=640y640"
    },
    {
        id: "cn-mamuermamer",
        name: "马木尔Mamer & IZ乐队",
        pinyin: "M",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/HZ4YN6D6pbgxz1Y8ki4MBg==/109951169874258811.jpg?param=640y640"
    },
    {
        id: "us-cherylcole",
        name: "Cheryl",
        pinyin: "C",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/nZja0CR8pJRh_m3DjT47GA==/432108069721929.jpg?param=640y640"
    },
    {
        id: "jp-yorushika",
        name: "ヨルシカ（Yorushika）",
        pinyin: "Y",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/XjrBOsnaNc-65_7MXnn73A==/18994063370037362.jpg?param=640y640"
    },
    {
        id: "cn-wangjunjie",
        name: "王俊杰",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/07/4c/76/074c7686-43f7-8e3f-629b-f314a7784c08/3.png/600x600bb.jpg"
    },
    {
        id: "us-westlife",
        name: "Westlife",
        pinyin: "W",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/xCxLPdzfgIzDWket3FspHg==/109951166900372807.jpg?param=640y640"
    },
    {
        id: "us-tyla",
        name: "Tyla",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/z79Ae2wy95PI-bLgsj5JtQ==/109951173193275023.jpg?param=640y640"
    },
    {
        id: "us-charlixcx",
        name: "Charli xcx",
        pinyin: "C",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/lOBdiY6LIBgJhAbaTt1KjA==/109951173389151238.jpg?param=640y640"
    },
    {
        id: "cn-luoyunxi",
        name: "罗云熙",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/dXc5XlW0A8iPlMgQegzl5Q==/109951173580504612.jpg?param=640y640"
    },
    {
        id: "cn-zhanghuimei",
        name: "张惠妹",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=640y640"
    },
    {
        id: "us-taylorswift",
        name: "Taylor Swift",
        pinyin: "T",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/3hF43Um3IacRCBnG0Gi30A==/109951173322708990.jpg?param=640y640"
    },
    {
        id: "cn-xujun",
        name: "许钧",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/l-yWitWorgzJQKIzMvAMjg==/109951173528127436.jpg?param=640y640"
    },
    {
        id: "cn-zhangbozhi",
        name: "张柏芝",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/RTWboutPFD-0Q3g7XN_SKw==/109951165663137742.jpg?param=600y600"
    },
    {
        id: "us-arianagrande",
        name: "Ariana Grande",
        pinyin: "A",
        category: "欧美之声",
        avatar: "https://y.gtimg.cn/music/photo_new/T001R500x500M000004eTCF03KvBOE.jpg"
    },
    {
        id: "us-steps",
        name: "Steps",
        pinyin: "S",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/9jrHGlrn-hB1PiFzyyuhkQ==/109951167580805848.jpg?param=640y640"
    },
    {
        id: "jp-135",
        name: "135（いち・さん・ご）",
        pinyin: "1",
        category: "日韩风尚",
        avatar: "http://p2.music.126.net/f7X4unwdl5JMWaAxvx97Rw==/109951165285082860.jpg?param=640y640"
    },
    {
        id: "cn-sunhuiying",
        name: "孙慧莹",
        pinyin: "S",
        category: "华语金曲",
        avatar: "http://p2.music.126.net/HU1J_iimaY2mthFO4y4txA==/109951169946623861.jpg?param=640y640"
    },
    {
        id: "kr-lee-hyori",
        name: "李孝利（이효리；Lee Hyori）",
        pinyin: "L",
        category: "日韩风尚",
        avatar: "http://p1.music.126.net/NqY3H7mr5TPse888LUfI7w==/18703792302055808.jpg?param=640y640"
    },
    // 2026-08-06 更新
    {
        id: "kr-redvelvet",
        name: "Red Velvet",
        pinyin: "R",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/_orn5sSfaUVOXsYqkul1Ow==/109951170290688256.jpg?param=640y640"
    },
    {
        id: "us-everlybrothers",
        name: "The Everly Brothers",
        pinyin: "T",
        category: "欧美之声",
        avatar: "http://p2.music.126.net/9k85aj3td-IzRwf7wH7-kQ==/109951166032486676.jpg?param=640y640"
    },
    {
        id: "jp-isekaijoucho",
        name: "ヰ世界情緒（ISEKAI JOUCHO）",
        pinyin: "I",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/PiFKcF_24j3IcEboOhqhdQ==/109951170267963587.jpg?param=640y640"
    },
    {
        id: "cn-suzixu",
        name: "苏紫旭&The Paramecia",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/CvcX6nLxJGX_B9pZ5JwiNA==/109951165809535589.jpg?param=640y640"
    },
    {
        id: "kr-picheolin",
        name: "Picheolin (피철인)",
        pinyin: "P",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/CNay7DPPeYpAMkeVtuw2tQ==/109951173570813078.jpg?param=640y640"
    },
    {
        id: "us-gavinturek",
        name: "Gavin Turek",
        pinyin: "G",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/kNV07sD5FV47fapaKsQkaA==/109951163935047614.jpg?param=640y640"
    },
    {
        id: "kr-nmixx",
        name: "NMIXX",
        pinyin: "N",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/pn6yQsHeACNoysl4Vh4C_w==/109951173189077888.jpg?param=640y640"
    },
    {
        id: "cn-paiweijun",
        name: "派伟俊",
        pinyin: "P",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/rBZX11-OtL-LBbOI_cgVAA==/109951173669652360.jpg?param=640y640"
    },
    {
        id: "cn-caiguoquan",
        name: "蔡国权",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/VLrMA5vW1Uyl3gh7b72vpg==/68169720940211.jpg?param=640y640"
    },
    {
        id: "cn-wangweima",
        name: "王喂马",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/R7gVBr4KACJNLZ2vOjXLxw==/109951169707238106.jpg?param=640y640"
    },
    {
        id: "cn-kozhendong",
        name: "柯震东",
        pinyin: "K",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music30/v4/c9/22/42/c92242ee-0d6e-e682-89be-0e46a8f4b3d3/dj.gmeotvmt.jpg/600x600bb.jpg"
    },
    {
        id: "cn-guocaijie",
        name: "郭采洁",
        pinyin: "G",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/5BDarIS0WI2C5ZhKTeJOug==/109951165686224951.jpg?param=640y640"
    },
    {
        id: "cn-zhuzhengting",
        name: "朱正廷",
        pinyin: "Z",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/iyWCeL1z0WZyxpb_fUBBOw==/109951169569700768.jpg?param=640y640"
    },
    {
        id: "us-dido",
        name: "Dido",
        pinyin: "D",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/fXUXMh2UvIaKNPyeXnnINw==/109951165894777063.jpg?param=640y640"
    },
    {
        id: "cn-luguanting",
        name: "卢冠廷",
        pinyin: "L",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/zfGJ3B2VkiIO8kq7lKYY2Q==/109951169019728857.jpg?param=640y640"
    },
    {
        id: "cn-wangjie",
        name: "王杰",
        pinyin: "W",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/tlBP6POjJ8LB1mjKug0NPw==/109951169045458223.jpg?param=640y640"
    },
    {
        id: "us-gunsnroses",
        name: "Guns N' Roses",
        pinyin: "G",
        category: "欧美之声",
        avatar: "https://p2.music.126.net/5MvIXE07KNbEP29diMTV-w==/109951166031889573.jpg?param=640y640"
    },
    {
        id: "kr-exo",
        name: "EXO",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/vY_0HYqgraysBLWXuJ5tIQ==/109951168721913427.jpg?param=640y640"
    },
    {
        id: "kr-exocbx",
        name: "EXO-CBX",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/G7c6MtYNZxbbJzOhtoEc6g==/109951165770594931.jpg?param=640y640"
    },
    {
        id: "kr-exosc",
        name: "EXO-SC",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/aCBHw_FpHzT0P7MIhYofqw==/109951165770616579.jpg?param=640y640"
    },
    {
        id: "kr-exok",
        name: "EXO-K",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/R-u1kRACMXO3BF4hBtTDKQ==/5989039836611074.jpg?param=640y640"
    },
    {
        id: "kr-exom",
        name: "EXO-M",
        pinyin: "E",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/LcowfK1TOr4vzCBiQ8LBzg==/5925268162301672.jpg?param=640y640"
    },
    {
        id: "cn-fengxiyu",
        name: "冯曦妤",
        pinyin: "F",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/XgeUW3w5OX7Py7MAEH92Ig==/109951163353512621.jpg?param=640y640"
    },
    {
        id: "kr-cortis",
        name: "CORTIS",
        pinyin: "C",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/xtKsfKqCv3_XEgTvvBHPWg==/109951173182997264.jpg?param=640y640"
    },
    {
        id: "jp-backnumber",
        name: "back number",
        pinyin: "B",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/P30I1hSwOjODMN5wRHzgQQ==/109951168223970336.jpg?param=640y640"
    },
    {
        id: "jp-goodmorningpancake",
        name: "Goodmorning Pancake",
        pinyin: "G",
        category: "日韩风尚",
        avatar: "https://p2.music.126.net/_FnjAvk5rlOP5_7NPlYCQg==/109951168928810436.jpg?param=640y640"
    },
    {
        id: "kr-wayv",
        name: "威神V(WayV)",
        pinyin: "W",
        category: "日韩风尚",
        avatar: "https://p1.music.126.net/6wHB5UJcrjT-c1d8ddcnzQ==/109951170178729369.jpg?param=640y640"
    },
    {
        id: "cn-she",
        name: "S.H.E",
        pinyin: "S",
        category: "华语金曲",
        avatar: "https://p2.music.126.net/XoTGFFpQoqG2mUuXPnXyJg==/109951172282377954.jpg?param=640y640"
    },
    {
        id: "cn-xiaozhan",
        name: "肖战",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://p1.music.126.net/aMn6gp_RA0RzcBqbmG6xEw==/109951170333965063.jpg?param=640y640"
    },
    {
        id: "us-haim",
        name: "HAIM",
        pinyin: "H",
        category: "欧美之声",
        avatar: "https://p1.music.126.net/PutEK2nhzV382Kw3uzZozg==/109951165095867952.jpg?param=640y640"
    }
];