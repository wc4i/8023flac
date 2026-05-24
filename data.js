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
        id: "cn-chensheng",
        name: "陈升",
        pinyin: "C",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bd/a8/7f/bda87f4c-79e0-be1f-380b-d3cb2234b036/4710149720412_cover.jpg/600x600bb.jpg"
    },
    { 
        id: "cn-lizhi", 
        name: "李志", 
        pinyin: "L", 
        category: "华语金曲", 
        avatar: "https://resources.tidal.com/images/12206e3d/714b/4248/92b9/05f9d4d214be/1280x1280.jpg"              // 没有头像，网页会自动为他生成统一的默认占位头像
    },
    { 
        id: "cn-wangfei", 
        name: "王菲", 
        pinyin: "W", 
        category: "华语金曲", 
        avatar: "https://star.kuwo.cn/star/starheads/300/s4s8/6/707165471.png"           
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
        id: "cn-steely-heart",
        name: "钢心",
        pinyin: "G",
        category: "华语金曲",
        avatar: "https://star.kuwo.cn/star/starheads/500/82/54/2817225375.jpg"
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
        id: "cn-xinbaodao",
        name: "新宝岛康乐队",
        pinyin: "X",
        category: "华语金曲",
        avatar: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6d/cd/e2/6dcde251-2de4-847b-560d-2199a3f9ec72/0723_Cover_JPG.jpg/600x600bb.jpg"
    }
    
];
