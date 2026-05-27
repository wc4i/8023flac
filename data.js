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
        pinyin: "Y",
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
    }
    
];
