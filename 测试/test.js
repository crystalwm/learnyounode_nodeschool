

var ss="1$|08321$|ยฌ๊ี^|2$|13212010021$|ฮบร็^|3$|$|^

(function(){
    var ss=$.UC.userData[$.getProjID()+"$5964-SELTABLEDATA"];
    var ss=ss.split('^|');
    var m_no="";
    var name="";
    for(var i=0;i<ss.length;i++){
        if(ss[i][0]=='1'){
            var temp=ss[i].split('$|');
            m_no=temp[1];
            name=temp[2];
        }
    }

    $.C.setValue(5964,'req_no',m_no);
    $.C.setValue(5964,'req_name',name)

    })();
var ss=$.UC.userData[$.getProjID()+"$5964-SELTABLEDATA"];
var ss=ss.split('^|');
var m_no="";
var name="";
for(var i=0;i<ss.length;i++){
    if(ss[i][0]=='1'){
        var temp=ss[i].split('$|');
        m_no=temp[1];
        name=temp[2];
    }
}

$.C.setValue(5964,'req_no',m_no);
$.C.setVaule(5964,'req_name',name)
console.log(m_no+name);
