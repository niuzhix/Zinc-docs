---
icon: fa-solid fa-circle-info
category:
  - 编辑器
tag:
  - 应用
  - 主界面
---

# 编辑器

## 编辑区

这里是编写代码的最重要部分。

**👉️ 粘贴以下代码至编辑器以查看效果。**

```cpp
#include<iostream>
using namespace std;

int main(){
    cout << "Hello Zinc!";
    return 0;
}
```

## 编译日志

通过这个面板，你可以查看代码的编译情况以及日志。

**👉️ 点击 `✅编译`，然后选择代码的保存位置。**

你可能会看到如下的输出：

```txt
[13:18:54] [开始编译] Hello.cpp
[13:18:57] [编译成功] 耗时：2992ms
```

这代表编译成功。

**👉️ 粘贴以下代码至编辑器，并编译：**

```cpp
#include<iostream>
using namespace std;

int main(){
    cout << "Hello Zinc!";
    return 0 // [!code error] Missing semicolon
}
```

哎呀，编译失败了！观察输出：

```txt
[13:25:53] [开始编译] 未标题.cpp
[13:25:54] [编译失败] F:\Hello.cpp: In function 'int main()':
F:\Hello?cpp:6:13: error: expected ';' before '}' token
    6 |     return 0 // [!code error] Missing semicolon
      |             ^
      |             ;
    7 | }
      | ~            
耗时：549ms
```

加上分号即可编译成功。

## 样例&调试

这里是仅次于编辑器的重要部分，可帮助你快速调试代码。

**👉️ 粘贴以下代码至编辑器，并编译：**

```cpp
#include<iostream>
using namespace std;

int main(){
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}
```

**👉️ 在调试框内输入以下数据：**

![样例](./image/basic/image-1.png)

**👉️ 点击 `➡️运行样例`。**

![通过](./image/basic/image-2.png)

此处 `AC` 即代表通过。

**🎉恭喜！至此您已经了解了 编辑器 的基本使用方法。**
