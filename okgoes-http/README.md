# 基于node api实现的http请求工具
### 用法
```js
const request = require("./index");

request({
    url: "https://blog.okgoes.com",
    method: "GET",
    headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    }
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});