#### http的缺点
##### 通信使用`明文`可能被`窃听`
面对这个问题的处理方式是`加密`

只是说如果通信经过加密，就有可能让人无法破解报文信息的含义，但加密处理后的报文信息本身还是会被看到的。

##### 不验证通信方的`身份`就可能遭遇`伪装`

问题说明
在http协议通信时，任何人都可以发起请求。服务器只要接收到请求，不管对方是谁，都会返回一个响应
（但也仅限于发送端的IP地址和端口号没有被web服务器限定访问的前提下）

可能会存在如下的隐患

* 无法确定请求发送至目标的web服务器是否是按真实意图返回响应的那台服务器。`有可能是已伪装的web服务器`
* 无法确定响应返回到的客户端是否是按真实意图接收响应的那个客户端。`有可能是已伪装的客户端。`
* 无法确定正在通信的双方是否具备`访问权限`。因为某些web服务器上保存着重要的信息。只想发给特定用户通信的权限。
* 无法判定请求是来自何方，出自谁手。
* 即使是无意义的请求也会照单全收。无法阻止海量请求下的Dos攻击（denial of service `拒绝服务攻击`）

对于这个问题解决方法
    证书


##### 无法证明报文的`完整性`，可能已遭`篡改`

* 可能遇到的问题--`中间人攻击`
最近比较著名的安全问题
从非官方网站上下载XCodeGhost,被人注入恶意代码，从而引发安全问题。

* 如何防止篡改
MD5
SHA-1
数字签名


#### https

##### 什么是https
http+加密+认证+完整性保护=https，

##### 什么是SSL
SSL是独立于HTTP的协议，所以不光是HTTP协议，其他运行在应用层的SMTP和Telnet等协议均可配合SSL协议使用。可以说SSL是当今
世界上应用最为广泛的网络安全技术。

##### https与ssl
HTTPS并`非`是应用层的一种`新协议`，只是HTTP通信接口部分用SSL（Secure Socket Layer）和TLS(transport layer security)
协议代替而已
通常HTTP直接和TCP通信。当使用SSL时，则演变成先和SSL通信，再由SSL和TCP通信了，简言之，所谓HTTPS,其实就是身披SSL协议
这层外壳的HTTP.


#### https的API

 类|	方法|备注
------------ | -------------|-------------
https.Agent|  |用于管理客户端请求的套接字连接池 |
https.Server|  |它是一个`EventEmitter` |
 |server.setTimeout(msecs, callback)  |给socket`设置超时时间`，当超时事件发生的时候，触发`timeout`事件 |
 |server.timeout  |对于`新创建的连接`有效，对于`已经创建的连接`无效。设置为0的话，新创建的连接就不会触发`timeout`事件了 |
https.createServer(options[, requestListener])|  |返回一个新的https的server对象|
 |server.close([callback])  |使server不再接收连接 |
 |server.listen(handle[, callback])  | |
 |server.listen(path[, callback])  | |
 |server.listen(port[, host][, backlog][, callback])  | |
https.get(options, callback)|  |与`http.request`的不同之处在于，使用`GET方法`发送请求，并且会自动的调用`req.end()` |
https.globalAgent|  |它是`https.Agent`的实例对象 |
https.request(options, callback)|  | 发起一个https请求|



    








参考文献
《图解HTTP》 上野宣 著
https://nodejs.org/api/https.html
