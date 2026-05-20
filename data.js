// 🎵 wc4° 音乐仓库 - 全局歌手索引数据库
// 这个文件就像是一本字典的“目录”，用于在各个分类页面（如 huayu.html）生成歌手卡片。

const musicDatabase = [
    // === 华语金曲 ===
    { 
        id: "zhoujielun",       // 唯一标识符，以后用来跳转到他的专属页面，比如 ?id=zhoujielun
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
        id: "lizhi", 
        name: "李志", 
        pinyin: "L", 
        category: "华语金曲", 
        avatar: ""              // 没有头像，网页会自动为他生成逼格满满的“黑胶唱片”
    },
    { 
        id: "wuyifan", 
        name: "吴亦凡", 
        pinyin: "W", 
        category: "华语金曲", 
        avatar: ""              // 黑胶唱片效果
    },
    { 
        id: "wangfei", 
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
    }
    
];