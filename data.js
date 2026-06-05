// 🎵 wc4° 音乐仓库 - 全局歌手索引数据库
// 这个文件就像是一本字典的"目录"，用于在各个分类页面（如 huayu.html）生成歌手卡片。

const musicDatabase = [
    // === 华语金曲 ===
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
        id: "uk-judaspriest",
        name: "Judas Priest",
        pinyin: "J",
        category: "欧美之声",
        avatar: "https://star.kuwo.cn/star/starheads/500/s4s28/65/726437609.jpg"
    },

    // === 日韩风尚 ===
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
        id: "uk-boyzone",
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
    }
];
