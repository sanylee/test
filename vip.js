var thisURL = window.location.href,inum=1,vipOption;
var vipChannl = new Array(
"http://yyygwz.com/index.php?url=",
"https://api.47ks.com/webcloud/?v=",
"http://www.wmxz.wang/index.php?url=",
"http://000o.cc/jx/ty.php?url=",
"http://www.vipjiexi.com/yun.php?url=",
"http://q.z.vip.totv.72du.com/?url=",
"http://aikan-tv.com/tong.php?url=",
"http://player.gakui.top/?url=",
"http://www.yydy8.com/Common/?url=",
"http://p2.api.47ks.com/webcloud/?v=",
"http://s1y2.com/?url=",
"http://ckjiexi.duapp.com/?url="
);

for (x in vipChannl)
{
  vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';
}

function insVIP(emID,rID){
var gemID = document.getElementsByClassName(emID)[0];
var newNode = document.createElement("select");
newNode.setAttribute("title","Insert VIPChannl by ADM.");
gemID.appendChild(newNode);
newNode.setAttribute("onchange", "replacePlayer(this,'"+rID+"')");
newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
}

function replacePlayer(e,rID){
    var playerID = document.getElementById(rID);
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height","100%");
    newplayerID.src = e.value;
}