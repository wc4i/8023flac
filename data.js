// 🎵 wc4° 音乐仓库 - 全局歌手索引数据库
// 这个文件就像是一本字典的“目录”，用于在各个分类页面（如 huayu.html）生成歌手卡片。

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
        id: "chenyixun", 
        name: "陈奕迅", 
        pinyin: "C", 
        category: "华语金曲", 
        avatar: "https://star.kuwo.cn/star/starheads/300/37/26/3816222178.jpg" 
    },
    { 
        id: "cn-lizhi", 
        name: "李志", 
        pinyin: "L", 
        category: "华语金曲", 
        avatar: "https://resources.tidal.com/images/12206e3d/714b/4248/92b9/05f9d4d214be/1280x1280.jpg"              // 没有头像，网页会自动为他生成统一的默认占位头像
    },
    { 
        id: "wuyifan", 
        name: "吴亦凡", 
        pinyin: "W", 
        category: "华语金曲", 
        avatar: ""              // 黑胶唱片效果
    },
    { 
        id: "cn-wangfei", 
        name: "王菲", 
        pinyin: "W", 
        category: "华语金曲", 
        avatar: "https://star.kuwo.cn/star/starheads/300/s4s8/6/707165471.png"           
    },

    // === 欧美之声 ===
    { 
        id: "taylorswift", 
        name: "Taylor Swift", 
        pinyin: "T", 
        category: "欧美之声", 
        avatar: "" 
    },
    { 
        id: "michaeljackson", 
        name: "Michael Jackson", 
        pinyin: "M", 
        category: "欧美之声", 
        avatar: "" 
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
    }
    
];