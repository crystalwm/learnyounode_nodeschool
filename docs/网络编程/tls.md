

### SSL/TLS协议简介
#### SSL
Secure Socket Layer（安全套结层）
在网景公司的NetScape浏览器推出之初就提出了（SSL安全套接层）
**SSL的功能**
SSL作为一种安全协议，它在传输层提供对网络连接加密的功能。

#### TLS
Transport Layer Security（传输安全层）
**SSL与TLS之间的关系**
最初的SSL应用在web上，被服务器端和浏览器端同时支持，随后IETF将其标准化，成为TLS(传输安全层)

#### 密钥
对于这个不封的内容大致都能理解

#### 数字证书
**为什么要引用证书**
客户端与服务器端通信的时候，可能会遇到`中间人攻击`，这个时候我们需要对于身份进行验证。

**CA**
CA(Certification Authority 数字证书认证中心)
CA机构颁发证书的流程
第一步：服务器通过自己的`私钥`生成CSR（证书签名请求）文件
第二步：ca机构依据这个csf文件颁发服务器端的签名证书

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
《深入浅出node》