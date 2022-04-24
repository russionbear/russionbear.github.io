# russionbear.github.io

## 功能
### 类似于笔记软件、个人博客，提供这些功能：  
>### 1. 电脑端通过django和网页实现笔记的编写、本地保存  
>### 2. 笔记只能用markdown编写  
>### 3. 通过git工具将笔记保存到github，实现云端保存  
>### 4. 在github上搭建静态网站并提供对笔记的访问页面  
>### 5. 根目录下的index.html用解析markdown的功能，其他位置的index.html只用做被它读取  
>### 6.
  

  

## 使用

```
clone

cd 克隆目录
cd note_react_server
npm install # 我的node版本 Node.js v14.16.1.

# 确保你的python环境中包换这些库, 我的python版本 3.8.10 64bit
import shutil
import json
import requests
import webbrowser
from contextlib import closing
from django ...

# 你可以直接双击 克隆目录/run.bat 启动程序
# 或者在终端键入 python 克隆目录/note_react_server/main.py

# 可以删除 克隆目录/books/ 内的所有文件以编写你自己的东西

# 通过git 保存到github

# 要使得笔记能通过web访问，需启用github的网站功能
# 并修改 克隆目录\note-react2.0\src\sokect\myAxios.tsx 内
# webAxios.defaults.baseURL = 'https://whitebear.ml/' + 'books'
# 其中 https://whitebear.ml/ 为申请到的网址
```

## 特色


