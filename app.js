// 引入 Express
const express = require('express');
const app = express();

// 设置端口
const PORT = 3000;

// 配置 JSON 返回格式
app.use(express.json());

// 定义一个接口
app.get('/api/data', (req, res) => {
    // 返回 JSON 数据
    res.json({
        success: true,
        message: '数据获取成功',
        data: {
            id: 1,
            name: 'Neo',
            role: 'Developer'
        }
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
