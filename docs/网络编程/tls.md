

### SSL/TLS协议简介
#### SSL
Secure Socket Layer（安全套结层）
#### TLS
Transport Layer Security（传输安全层）

### 握手流程
1.客户端对HTTPS的地址发出请求，并且将自己的SSL版本号等信息发送给服务器
2.服务器接收到请求，将服务器证书和公钥等信息返回给客户端
3.客户端接收到证书后向证书颁发机构验证证书的合法性。如果证书不合法（比如自行签发的证书），则向用户发出警告并确认是否继续，用户可以选择在此时离开终止HTTPS的链接。
4.证书合法或客户端确认在不安全的情况下继续，客户端生成pre-master secret并且使用2中收到的服务器公钥加密后发送给服务器。如果是使用交互策略的TLS，则同时需要将客户端的证书发送给服务器。服务器检查客户端的证书颁发机构是否在信任列表中，以及证书内容是否合法。若不合法，结束本次会话。
5.服务器使用私钥解密pre-master secret，然后双方通过一种实现商定好的加密算法生成本次通讯使用的master secret。
6.双方互相通知对方本次SSL握手成功，其后均使用master secret对传输内容进行加密。

![dd](./img/ssltls_1.png)

### 下载安装open ssl

## API
### `Class: tls.TLSSocket`
`net.Socket`实例对象的包装器,对于流入或者流出的数据进行加密或者解密的操作。
### `Class: SecurePair`
tls.createSecurePair 返回一个SecurePair类
### `Class: tls.Server`
这个类是`net.Server`的一个子类，它和`net.Server`具有同样的方法。
### `Class: CryptoStream`
### `Class: tls.TLSSocket`









参考文献：
http://nodejs.cn/api/tls.html
http://segmentfault.com/a/1190000002630688