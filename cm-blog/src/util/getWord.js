import axios from 'axios';

// 请求一言

// a	Anime - 动画
// b	Comic – 漫画
// c	Game – 游戏
// d	Novel – 小说
// e	Myself – 原创
// f	Internet – 来自网络
// g	Other – 其他
// 其他不存在参数	任意类型随机取得
async function getWord() {
    const res = await axios.get(`https://v1.hitokoto.cn`);
    const { hitokoto, from } = res.data;
    return {
        text: hitokoto,
        from,
    };
}

export default  getWord;