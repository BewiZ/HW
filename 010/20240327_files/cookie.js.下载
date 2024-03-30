/**************************************************************************
 * (C) Copyright 2006-2013 by Systems on Web, Inc.  All Rights Reserved.  *
 * Author: Zhongyan Lin                                                   *
 **************************************************************************/
if (typeof(someconsts)=='undefined')
{
var someconsts=['<meta http-equiv="Pragma" content="no-cache" ><meta http-equiv="content-type" content="text/html; charset=gb2312" />','arial,KaiTi,KaiTiGB2312,STKaiti','121334211234341231231324354546765765sdffhgfjhgasczerrtredsv1312344dfdw3rhdsgQWERETEASA','1','3598000','zh-cn'];
var unititle = function(str,cls){
        if (cls!='outset2') 
        return '<table cellspacing=0 cellpadding=0 width=100% border=0 align=center class=' + cls + ' ><tr height=48><td valign=middle align=center><table width=100%  align=center><tr><td width=36 align=middle id=homeico  onclick=gohome()></td><td  align=center><div class=forcurve1 style=width:180px;overflow:hidden  id=titlediv  onclick=qrlink()><NOBR>' + str + '</NOBR></div></td><td  onclick=actionmenu(this) valign=middle width=20  align=center  style="font-size:20px;color:white;padding:0px">&vellip;</td></tr></table></td></tr></table>'; 
        return '<table  cellspacing=0 cellpadding=0 width=100%   align=center ><tr><td width="2px"></td><td class=outset2 valign=middle align=center style="border:1px outset"><table width=100% ><tr><td width=36 valign=middle  id=homeico   onclick=gohome()></td><td  align=center><div class=forcurve1  onclick=qrlink()  id=titlediv><NOBR>' + str + '</NOBR></div></td></tr></table></td><td width="3px"></td></tr></table>';
    } 
}
 if (typeof(parent.frames)!='undefined' && parent.frames.length>0 && parent.frames[0]==window)
 {
     var oldunititle = unititle;
     unititle = function(x,y){ return oldunititle(x,y).replace(/&vellip;/,'');}
 }
 var metaencode=someconsts[0];
 var defaultfontfamily=someconsts[1];
 var apphashgene = someconsts[2];
 var latexislocal= (someconsts[3]== '1');
 var activeidletime= parseInt(someconsts[4]);
 var ibgcolorw =  "#785673";
 function headercl( clx) {
        var  cl = "#45626a";
        if (clx==("red")) {
            clx = "#ff0000";
         } else if (clx==("blue")) {
            clx = "#0000ff";
        } else if (clx==("green")) {
            clx = "#00ff00";
        } else if (clx == null || clx==("") || clx.charAt(0) != '#' || clx.length  < 7) {
            clx = "#45626a";
        }
        var hs = "0123456789ABCDEF";
        var  j =  parseInt(clx.substring(1, 3), 16);
        if (j >= 128) {
            j-=30;
        } else if (j < 128) {
            j+=30;
        }
        var  k =  parseInt(clx.substring(3, 5), 16);
        if (k >= 128) {
            k-=30;
        } else if (k < 128) {
            k+=30;
        }
        var  l =  parseInt(clx.substring(5), 16);
        if (l >= 128) {
            l-=30;
        } else if (l < 128) {
            l+=30;
        }
        cl = "#" + hs.charAt(j / 16) + hs.charAt(j % 16);
        var  k1 = k / 16;
        var  k2 = k % 16;
        var  l1 = l / 16;
        var  l2 = l % 16;
        cl = cl + hs.charAt(k1);
        cl = cl + hs.charAt(k2);
        cl = cl + hs.charAt(l1);
        cl = cl + hs.charAt(l2);
        return cl;
    } 
 
 if (typeof(IBGCOLOR)=='undefined')
     IBGCOLOR = '#01170B';
 ibgcolorw = headercl(IBGCOLOR);
  
 var gradientbg = "linear-gradient(" + IBGCOLOR + "," + ibgcolorw + ")";
  
 var expiretime=activeidletime+(new Date()).getTime(); 
 var crosssite = null;
var promptwin = null;
var mychildwin = new Array();
var myparentwin = null;
var defaultrsakey = "10001,202700adbd85e2d7182720c3a0ee19c1,30db31542ace0f7d37a629ee5eba28cb,7";
var needtochecksyntax = true;
var failedformsubmit='';
var openedfileinframe1 = false;
var font_size1 = '';
var oldonclose0 = null;
var oldonbegin00 = null;
var indexwindow = null;
var savedredourl = '';
var activealink = null;
var numcalls = 0;
var systemnamestr = null;
var ccbeing = -1;
var promptfunc = null;
var iaminpuprompt = false;
var keepgoing = true;
var editingfmt = 0;
var tabeingedited = null;
var AMtranslated = true;
var totaleles = 0;
var myfontname = 'inherit';
var round20 = "</td><td width=5  ><div style=\"height:1px;width:5px;background-color:transparent;cursor:e-resize\"></div></td>"
        + "</tr><tr height=5><td width=5  ></td>"
        + "<td colspan=1  ><div style=\"width:100%;height:5px;cursor:s-resize\"></div></td>"
        + "<td width=5 ><div style=\"width:5px;height:5px;cursor:se-resize\"></div></td></tr></table>";

var round2 = "</td><td width=2  ><div style=\"width:100%;cursor:e-resize\"></div></td>"
        + "</tr><tr height=5><td width=2   ></td>"
        + "<td   ><div style=\"width:100%;height:2px;cursor:s-resize\"></div></td>"
        + "<td width=2  ><div style=\"width:2px;height:2px;cursor:se-resize\"></div></td></tr></table>";
function ismobile()
{
    return navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i)
            || navigator.userAgent.match(/Opera Mini/i)
            || navigator.userAgent.match(/IEMobile/i);
}


function writenow(x)
{
    document.write(x);
}

function getcrosssite()
{
    if (crosssite != null)
        return crosssite;
    var crosssite1 = null;
    if (opener != null&& onmydomain(opener) && opener != self && typeof (opener.getcrosssite) != 'undefined')
        crosssite1 = opener.getcrosssite();
    if (crosssite1 != null)
    {
        crosssite = crosssite1;
        return crosssite1;
    }
    
    if ( parent != window && typeof (parent.getcrosssite) != 'undefined')
    {
        crosssite1 = parent.getcrosssite();
        if (crosssite1 != null)
        {
            crosssite = crosssite1;
            return crosssite1;
        }
    }
    return null;
}

function clickedhere(obj)
{

    if (typeof (findPositionnoScrolling) != 'undefined')
    {
        var xy = findPositionnoScrolling(obj);
        closeprompt();
        promptwin = document.createElement('div');
        promptwin.setAttribute('id', "myprompt");
        promptwin.style.cssText = "position:absolute;border:1px #b0b0b0 outset;font-size:25px;font-weight:700;background:url(image/giphy.gif);z-index:30;top:" + xy[1] + "px;left:" + xy[0] + "px;width:" + obj.offsetWidth + "px;height:" + obj.offsetHeight + "px;overflow:hidden;font-family:inherit";
       /* var x = '';
        var N = Math.ceil(obj.offsetWidth / 8);
        var v = 0;
        while (N > 0)
        {
            var j = Math.round(Math.random() * 6);
            v = 1 - v;
            x += "<font color=" + (v == 0 ? 'white' : 'black') + ">";
            for (var k = 0; k < j && N > 0; k++)
            {
                x += "&middot;";
                N--;
            }
            x += "</font>";
        }*/
        var x  = '';
        promptwin.innerHTML = x;
        document.body.appendChild(promptwin);

    }
}

function childwinborn(win)
{
    var x = document.location.toString();
    var j = x.lastIndexOf("/");
    if (x.substring(j + 1).indexOf("index") == 0)
    {
        window.onbeforeunload = "Child windows not close. Continue?";
    }
    for (var i = 0; i < mychildwin.length; i++)
        if (mychildwin[i] == win)
        {
            return;
        }
    for (var i = 0; i < mychildwin.length; i++)
        if (mychildwin[i] == null)
        {
            mychildwin[i] = win;
            return;
        }
    mychildwin[mychildwin.length] = win;
}
function childwindie(win)
{
    mychildwin.remove(win);
    var j = x.lastIndexOf("/");
    if (x.substring(j + 1).indexOf("index") == 0 && mychildwin.length == 0)
    {
        window.onbeforeunload = null;
    }
}

function childwindie1(win)
{
    try{
    if (opener != null&& onmydomain(opener) && opener.childwinborn)
    {
        myparentwin.childwindie(window);
    }
    else if (parent.opener != null && parent.opener.childwinborn)
    {
        myparentwin.childwindie(window.parent);
    }
    else if (parent.parent.opener != null&& onmydomain(parent.parent.opener) && parent.parent.opener.childwinborn)
    {
        myparentwin.childwindie(window.parent.parent);
    }
    }
    catch(e){}

}

function lookforparent()
{
    try{
    if (opener != null && opener.childwinborn)
    {
        myparentwin = opener;
        myparentwin.childwinborn(window);
    }
    else if (parent.opener != null&& onmydomain(parent.opener) && parent.opener.childwinborn)
    {
        myparentwin = parent.opener;
        myparentwin.childwinborn(window.parent);
    }
    else if (parent.parent.opener != null&& onmydomain(parent.parent.opener) && parent.parent.opener.childwinborn)
    {
        myparentwin = parent.parent.opener;
        myparentwin.childwinborn(window.parent.aprent);
    }
    }catch(e){}
}

if (typeof (onclose) != 'undefined')
{
    onclose += ";closechildwin();myparentwin.childwindie1(self);";
}
else
{
    var onclose = ";closechildwin();myparentwin.childwindie1(self);";
}

if (typeof (onbegin) != 'undefined')
{
     onbegin += ";lookforparent();";
}
else
{
     var onbegin = ";lookforparent();";
}
function closechildwin()
{
    for (var j = 0; j < myparentwin.length; j++)
        myparentwin[j].close();
}


function getCookieVal(offset)
{
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return decodeURIComponent(document.cookie.substring(offset, endstr));
}

function GetCookie(name)
{
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen)
    {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;
}

function dothetable(v)
{
    var j = v.indexOf("\n\t");
    if (j>=0) return v;
    j = v.indexOf("\r\t");
    if (j>=0) return v;
    j = v.indexOf("\t", 1);
    if (j == -1) return v;
    var x =(new CSVParse(v, '"', "\t", "\r\n")).nextMatrix(false);
    var str = '';
    var start = -1;
    var z;
    for (var r = 0;  r < x.length; r++)
    {
    
       if ((x[r] == null ||x[r].length == 1) && (r==0 || x[r-1]!=null && x[r-1].length>1))
       {
            z = '';
       }
       
       if (x[r] == null ||x[r].length == 1)
       {
           if (x[r] ==null )  
           {
               if ( r < x.length-1)z+=('\n');
           }
           else
           {
               if (x[r][0].indexOf('\t')>=0 || x[r][0].indexOf('\r')>=0 || x[r][0].indexOf('\n')>=0)
                   z += ('"');
               z += (x[r][0]);
               if (x[r][0].indexOf('\t')>=0 || x[r][0].indexOf('\r')>=0 || x[r][0].indexOf('\n')>=0)
                   z += ('"');
               if (r < x.length-1)
                   z += ('\n');
           }
           
           if (r == x.length-1 || x[r+1]!=null && x[r+1].length>1)
           {
               str += z;
               z= '';
               start = r;
           }
           
           
           
       }
       else if (r == x.length-1 || x[r+1]==null  || x[r].length!=x[r+1].length  )
       {
           str += '<table align=center border=1 style="border:1px #aaaaaa solid;border-collapse:collapse;border-radius:3px;border-color:#cccccc">';
           for ( var i= start+1; i <= r; i++)
           {
               str += "<tr>";
               var startj = 0;
               for (var j=0; j < x[i].length; j++)
               {
                   var k = -1;
                   if (  (x[i][j] != null&&x[i][j]!='') && ( j == x[i].length-1 || x[i][j+1]!=null&&x[i][j+1]!=''))
                   {
                       k = j;
                   }
                   else if ( (x[i][j] == null||x[i][j]=='') && ( j == x[i].length-1 || x[i][j+1]!=null&&x[i][j+1]!=''))
                   {
                       k = startj;
                   }
                   else if ( j < x[i].length-1 &&  x[i][j] != null&& x[i][j]!='' && ( x[i][j+1]==null||x[i][j+1]=='')   )
                   {
                       startj = j;
                   }
                   if (k > -1)
                   {
                       str += '<td   valign=top    ';
                       var col = j - k +1;
                       if (col > 1) str += ' colspan=' + col + " ";
                       if (x[i][k].charAt(0) == ' ' && x[i][k].charAt(x[i][k].length-1)==' ')
                           str += 'align=center ';
                       else if (x[i][k].charAt(0) == ' ' && x[i][k].charAt(x[i][k].length-1)!=' ')
                           str += 'align=right ';
                       else  if (x[i][k].charAt(0) != ' ' && x[i][k].charAt(x[i][k].length-1)==' ')
                           str += 'align=left ';
                       else if ( isNaN(x[i][k]))
                           str += 'align=left ';
                       else if ( !isNaN(x[i][k]))
                           str += 'align=right ';
                       else 
                       str += '>' + x[i][k] + '</td>';
                   }
               }
               str += "</tr>";
           }
           str += '</table>';
           start = r;
       }
        
    }
     
    return str;
}
var codestab = new RegExp("[\t|\n][ ]*\t");
function formatstr(v, fmt)
{
    if (v == null) return v;
    var  mc = codestab.exec(v);
    var  e = 0;
    if (mc!=null)
    { 
        e = mc.index + mc.toString().length;
        mc = codestab.exec(v.substring(e));
        if (mc!=null)
        {
           e += mc.index + mc.toString().length;
           mc = codestab.exec(v.substring(e));
           if (mc!=null)
           {
               return formatstr0(v, fmt);
           }
        }
    } 
     
    if (v.indexOf('@#@,@@,#\t')>=0) 
        return formatstr0(v, fmt);
    j = v.indexOf("\t", 1);
    
    if (j == -1) return formatstr0(v, fmt);
     
    var psr =(new CSVParse(v, '"', "\t", "\r\n"));
    psr.ignorespace = false;
    var x = psr.nextMatrix(false);
    var str = '';
    var start = -1;
    var z;
    for (var r = 0;  r < x.length; r++)
    {
    
       if ((x[r] == null ||x[r].length == 1) && (r==0 || x[r-1]!=null && x[r-1].length>1))
       {
            z = '';
       }
       
       if (x[r] == null ||x[r].length == 1)
       {
           if (x[r] ==null )  
           {
               if ( r < x.length-1)z+=('\n');
           }
           else if(x[r][0]!=null)
           {
               if (x[r][0].indexOf('\t')>=0 || x[r][0].indexOf('\r')>=0 || x[r][0].indexOf('\n')>=0)
                   z += ('"');
               z += (x[r][0]);
               if (x[r][0].indexOf('\t')>=0 || x[r][0].indexOf('\r')>=0 || x[r][0].indexOf('\n')>=0)
                   z += ('"');
               if (r < x.length-1)
                   z += ('\n');
           }
           
           if (r == x.length-1 || x[r+1]!=null && x[r+1].length>1)
           {
               str += formatstr0(z, fmt);
               z= '';
               start = r;
           }
           
           
           
       }
       else if (r == x.length-1 || x[r+1]==null  || x[r].length!=x[r+1].length  )
       {
           str += '<div style=display:block;align-content:' + (x[start+1][0].indexOf('  ')==0?'center':'left') + '><table  border=1 style="border:1px #aaaaaa solid;border-collapse:collapse;border-radius:3px;border-color:#cccccc;margin:3px 0px 3px 0px">';
           for ( var i= start+1; i <= r; i++)
           {
               str += "<tr>";
               var startj = 0;
               for (var j=0; j < x[i].length; j++)
               {
                   var k = -1;
                   if (  (x[i][j] != null&&x[i][j]!='') && ( j == x[i].length-1 || x[i][j+1]!=null&&x[i][j+1]!=''))
                   {
                       k = j;
                   }
                   else if ( (x[i][j] == null||x[i][j]=='') && ( j == x[i].length-1 || x[i][j+1]!=null&&x[i][j+1]!=''))
                   {
                       k = startj;
                   }
                   else if ( j < x[i].length-1 &&  x[i][j] != null&& x[i][j]!='' && ( x[i][j+1]==null||x[i][j+1]=='')   )
                   {
                       startj = j;
                   }
                   if (k > -1)
                   {
                       str += '<td   valign=top    ';
                       var col = j - k +1;
                       if (col > 1) str += ' colspan=' + col + " ";
                       if (x[i][k].charAt(0) == ' ' && x[i][k].charAt(x[i][k].length-1)!=' ')
                           str += 'align=right ';
                       else  if (x[i][k].charAt(0) != ' ' && x[i][startj].charAt(x[i][k].length-1)==' ')
                           str += 'align=leftt ';
                       else if (x[i][k].charAt(0) == ' ' && x[i][startj].charAt(x[i][k].length-1)==' ')
                           str += 'align=center ';
                       str += '>' + formatstr0(x[i][k], fmt) + '</td>';
                   }
               }
               str += "</tr>";
           }
           str += '</table></div>';
           start = r;
       }
        
    }
     
    return str;
}
function delCookie(name)
{
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function SetCookie(name, value, expdays)
{
    
    var expires = null;
    
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    if (expdays !=null)
    {
        //expdays = 365;
        var exp = new Date();
        exp.setTime(exp.getTime() + Math.floor(expdays * (3600000 * 24)));
        expires = exp;
    }
    delCookie(name);
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + encodeURIComponent(value) +
            ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
            ((path == null) ? "" : ("; path=" + path)) +
            ((domain == null) ? "" : ("; domain=" + domain)) +
            ((secure == true) ? "; secure" : "");
}

function getRSAkeys()
{
    var privatersa = getcrosssite();
    if (privatersa == null)
    {
        if (opener != null&& onmydomain( opener) && opener.getcrosssite != null)
            privatersa = opener.getcrosssite();
    }
    if (privatersa == null)
        privatersa = defaultrsakey;
    return privatersa.split(",");
}

function getrsakeyN4()
{
    var xx = getRSAkeys();
    return xx[2].substring(0, 4);
}
function saveMyrsakey(appletvar)
{
    if (typeof (crosssite) != 'undefined')
        crosssite = appletvar;
}

function setfontsz(str)
{
    font_size1 = str;
}
function unifontstyle(font_size)
{
    var fontname = defaultfontfamily;
    var weight = 500;
    if (font_size > 15)
        weight = Math.floor(weight * Math.sqrt(font_size / 15));
    return   "<style type=text/css>input{font-size:" + font_size + "px;padding:0px 1px;margin:0px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + "select{font-size:" + font_size + "px;padding:0px;margin:0px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + "textarea{font-size:" + font_size + "px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + "body{font-size:" + font_size + "px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + "div{font-size:" + font_size + "px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + ".thehint{background:yellow;border:1px outset green;color:purple;font-size:" + (font_size + 1) + "px;font-family:" + fontname + "}\n"
            + "table,tr,td,TABLE,TR,TD{font-size:" + font_size + "px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + "table,tr,td,TABLE,TR,TD,table,tr,td,TABLE,TR,TD{font-size:" + font_size + "px;font-weight:" + weight + ";font-family:" + fontname + "}\n"
            + "table,tr,td,TABLE,TR,TD,table,tr,td{font-size:" + font_size + "px;font-weight:" + weight + ";font-family:" + fontname + "}</style>"
            ;
}
function bufferit(s)
{
    var x= GetCookie('fileurlbuf');
    if (x==null) x = '';
    else if (x.indexOf(s)>=0) return;
    SetCookie('fileurlbuf', x+s, 0.02);
}
function butstyle(font_size)
{
    return " class=GreenButton style=width:" + Math.ceil(font_size * charwidthrate()) + "px";
}
function dim(w, h)
{
    return "toolbar=0,location=0,directories=0,status=0,menubar=0,alwaysRaised=1,scrollbars=1,resizable=1,width=" + w + ",height=" + h + ",top=" + ((screen.height - h) / 2) + ",left=" + ((screen.width - w) / 2);
}

function tail()
{
    if (parent == window)
    {
        var imp = document.images['testimg'];
        if (imp == null)
            return;
        var twidth = imp.width + 60;
        if (twidth < 250)
            twidth = 250;
        var lll = (screen.width - twidth) / 2;
        if (theight < 150)
            theight = 150;
        if (theight > screen.height - 35)
            theight = screen.height - 35;
        var ttt = (screen.height - theight) / 2;
        if (lll < 0)
            lll = 0;
        if (typeof resizeCont == 'function')
            resizeCont();
        if (typeof IBGCOLOR == 'undefined')
            var IBGCOLOR = "green";
        if (twidth > 400 && theight > 350)
            document.write("<center> <font size=-1 color=" + IBGCOLOR + ">" + textmsg[790] + "</font> </center>");
    }
}

function formselementbyname(formhandle, elenametxt)
{
    if (elenametxt==null || formhandle == null || formhandle.tagName==null|| formhandle.tagName.toLowerCase() != 'form')
    {
        //alert(formselementbyname.caller)
        return null;
    }
    for (var i = 0; i < formhandle.elements.length; i++)
        if (formhandle.elements[i].name!=null && formhandle.elements[i].name.toLowerCase() == elenametxt.toLowerCase())
            return formhandle.elements[i];
    return null;
}
function openblank(windowNameStr, optionStr, tl)
{
    var winhandle = window.open('', windowNameStr, optionStr);
    if (winhandle == null)
        return null;
    var doc = winhandle.document;
    if (doc != null && doc.body.innerHTML != '')
    {
        doc.body.innerHTML = '';
    }
    else
    {
        if (typeof encoding == 'undefined')
            var encoding = document.charset;
        var bgcolor = "lightyellow";
        if (typeof DBGCOLOR != 'undefined')
            bgcolor = DBGCOLOR;
        if (tl == null)
            tl = textmsg[107];
        winhandle.document.write("<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset="
                + encoding + "\"><title>" + tl + "</title></head><body style=\"background-color:" + bgcolor + "\">");
    }
    return winhandle;
}
function endDocWrite(winhandle)
{
    winhandle.document.write("</body>");
    //winhandle.document.write("<scrip" + "t>if (navigator.appName=='Netscape')setTimeout('window.stop()',200);</s" +"cript>");
    winhandle.document.write("</html>");
    winhandle.focus();
}
var showmyhint = function(j) {
}
var hidemyhint = function() {
}



var thispagewidth = function()
{
    var wd = screen.width - 200;
    if (typeof (self.innerWidth) != 'undefined')
    {
        wd = self.innerWidth;
    }
    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0)
    {
        wd = document.documentElement.clientWidth;
    }
    else
    {
        wd = document.getElementsByTagName('body')[0].clientWidth;
    }
    return wd;
}

var thispageheight = function()
{
    if (navigator.appName.indexOf('Explorer') > 0)
    {
        return (document.documentElement && document.documentElement.clientHeight) || window.innerHeight || self.innerHeight || document.body.clientHeight;
    }
    var het = screen.height;
    if (typeof (self.innerHeight) != 'undefined')
    {
        het = self.innerHeight;
    }
    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0)
    {
        het = document.documentElement.clientHeight;
    }
    else
    {
        het = document.getElementsByTagName('body')[0].clientHeight;
    }
    return het;
}

var thispagescrollheight = function()
{
    if (typeof (self.innerWidth) != 'undefined')
    {
        return document.height;
    }
    return  document.body.scrollHeight;
}

var thispagescrollwidth = function()
{
    if (typeof (self.innerWidth) != 'undefined')
    {
        return document.width;
    }
    return document.body.scrollWidth;
}

var thescrollleft = function()
{
    var h = 0;
    if (typeof (document.body)!='undefined' && document.body!=null && typeof (document.body.scrollLeft) != 'undefined')
    {
        h = document.body.scrollLeft;
    }
    if (h > 0)
        return h;
    if (typeof (document.documentElement)!='undefined' && document.documentElement!=null &&typeof (document.documentElement.scrollLeft) != 'undefined')
    {
        h = document.documentElement.scrollLeft;
    }
    if (h > 0)
        return h;
    if (typeof (self.pageXOffseth) != 'undefined')
    {
        h = self.pageXOffset;
    }
    if (h > 0)
        return h;
    if (typeof (document.body)!='undefined' && document.body!=null && typeof (document.body.parentElement) != 'undefined')
    {
        h = document.body.parentElement.scrollLeft;
    }
    return h;
}

var thescrolltop = function()
{
    var h = 0;
    if (typeof (document.body)!='undefined' && document.body!=null && typeof (document.body.scrollTop) != 'undefined')
    {
        h = document.body.scrollTop;
    }
    if (h > 0)
        return h;
    if (typeof (document.documentElement)!='undefined' && document.documentElement!=null && typeof (document.documentElement.scrollTop) != 'undefined')
    {
        h = document.documentElement.scrollTop;
    }
    if (h > 0)
        return h;
    if (typeof (self.pageYOffseth) != 'undefined')
    {
        h = self.pageYOffset;
    }
    if (h > 0)
        return h;
    if (typeof (document.body)!='unefined' && document.body!=null  && typeof (document.body.parentElement) != 'undefined')
    {
        h = document.body.parentElement.scrollTop;
    }
    return h;
}

function removejs(str)
{
    if (str == null)
        return null;
    var rg, rg1;
    for (var q = 0; q < 4; q++)
    {
        if (q == 0)
        {
            rg = new RegExp(/<scr.pt[^>]*>/i);
            rg1 = new RegExp(/<\/script[ ]*>/i);
        }
        else if (q == 1)
        {
            rg = new RegExp(/<embed[^>]*>/i);
            rg1 = new RegExp(/<\/embed[ ]*>/i);
        }
        else if (q==2)
        {
            rg = new RegExp(/<object[^>]*>/i);
            rg1 = new RegExp(/<\/object[ ]*>/i);
        }
        else
        {
            rg = new RegExp(/<style[^>]*>/i);
            rg1 = new RegExp(/<\/style[ ]*>/i);
        }


        var k = 0, k1 = 0;
        var s = '';
        var m = rg1.exec(str);
        if (m != null)
        {
            k1 = m.index + m.toString().length;
            m = rg.exec(str);
            if (m != null && k1 <= m.index)
                k = k1;
        }
        while (k < str.length)
        {
            m = rg.exec(str.substring(k));
            if (m == null)
                return s + str.substring(k);

            s += str.substring(k, k + m.index);
            var j = m.index + k + 8;
            var n = rg1.exec(str.substring(j));
            if (n == null)
                return s;

            k = n.index + n.toString().length + j;
        }
        if (q < 2)
            str = s;
    }
    return s;
}
function mypromptchanggemsg(x)
{
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0].innerHTML = x;
}
function mypromptmodifymsg(x)
{
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0].innerHTML += x;
}
function mypromptmsg(x)
{
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0].innerHTML = x;
}
function getpromptmsg()
{
    if (promptwin == null) return "";
    return promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0].innerHTML;
}
function addpromptmsg(y)
{
    if (promptwin == null)
    {
        myprompt(y);
        return;
    }
    var x = promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0];
    var dv = document.createElement("div");
    dv.style.margin = "2px 3px 2px 3px";
    dv.innerHTML = y;
    x.appendChild(dv);

}

function mypromptonclose(func)
{
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('img')[0]
    .onclick = func;
}

function myprompt(str, dfv, func, title,mypromptid)
{
    if(str==null||str=='') return;
    if (document.body == null) return;
    if (mypromptid==null)
        mypromptid = "myprompt";
    var promptwin0 = document.getElementById(mypromptid);
    str = removejs(str);
    if (promptwin0 != null)
    {
        keepgoing = false;
        if (iaminpuprompt)
            return;
        var b = document.getElementById("dragcropbox");
        if (b!=null) document.body.removeChild(b);
        closeprompt(mypromptid);
    }
    iaminpuprompt = (func != null);
    var iamgoing = (dfv != null && dfv == true && func == null);

    promptfunc = func;
    var wd = thispagewidth();
    if (wd > screen.width)
        wd = screen.width;
    var het = thispageheight();
    if (het > screen.height)
        het = screen.height;
    var thescrollt = thescrolltop();
    var thescrolll = thescrollleft();
    var promptwin0 = document.createElement('div');

    promptwin0.setAttribute('id', mypromptid);

    var bordercolor = "#0000BB";
    if (typeof (IBGCOLOR) != 'undefined')
        bordercolor = IBGCOLOR;
    var pbgcolor = "#FFEECC";
    if (typeof (DBGCOLOR) != 'undefined')
        pbgcolor = DBGCOLOR;

    var len = 300;
    if (typeof (font_size) != 'undefined')
        len = Math.ceil(75 + 300 * font_size / 20);
    else if (typeof (fontsize) != 'undefined')
        len = Math.ceil(75 + 300 * fontsize / 20);
    if (len > wd - 20)
        len = wd - 20;

    if (iamgoing == false)
    {
        promptwin0.style.cssText = "position:absolute;color:black;border:0px;padding:0px;zIndex:20;top:0px;width:" + len + "px;left:" + Math.floor((wd - len) / 2) + "px;font-family:inherit" ;
    }
    else
    {
        promptwin0.style.cssText = "position:absolute;color:black;border:0px;padding:0px;zIndex:20;wodth:300px;overflow:hidden;top:" + (het - 200) + "px;left:" + (wd - 330) + "px;font-family:inherit";
    }
    var picwidth = 22;
    var bdim = "width:68px;height:21px;";

    if (typeof (font_size) != 'undefined')
    {
        picwidth = font_size + 6;
        bdim = "width:" + Math.round(font_size * 4.5) + "px;";
    }
    var fw = 4;

    if (title == null || title == '')
    {
        if (func != null)
        {
            if (dfv == null)
                title = textmsg[1633];
            else
                title = textmsg[1634];
        }
        else
            title = textmsg[1635];
    }

    var head = round10('100%').replace(/">$/, "background-color:" + pbgcolor + ";font-family:" + myfontname +  ";\">")
            + "<table border=0 style=\"border-radius:" + fw + "px;-webkit-border-radius:" + fw + "px;-moz-border-radius:" + fw + "px;background-color:" + pbgcolor + ";border:0px " + bordercolor + " solid;font-family:" + myfontname + "\"   border=0 width=100% cellpadding=2 cellspacing=0>"
            +"<tr style=\"font-family:" + myfontname + ";background:" + gradientbg + ";background-color:" + bordercolor + "\" >"
            + "<td   style=\"width:" + picwidth + "px !important;font-family:" + myfontname + "\" valign=middle align=left>"
            + "<img  style=\"margin:0px 0px 0px 0px;float:left;width:" + picwidth + "px !important;border-radius:" + Math.round(picwidth/2) + "px;cursor:pointer\" src=\"image/icon/smalls00.png\" onclick=\"closeprompt('" + mypromptid + "')\" onmouseover=\"swappic(this)\" onmouseout=\"swappic(this)\"></td>"
            + "<td id=myprompthead  valign=middle align=center style=\"color:#DDCC05;font-weight:700;text-align:center;font-family:" + myfontname + "\" onclick=stopgoing()><nobr>"
            + (title)
            + "</nobr></td></tr><tr  style=\"padding:1px 1px 0px 1px;background-color:" + pbgcolor + ";font-family:" + myfontname +  ";\"><td colspan=2 align=left valign=top style=\"padding:1px 1px 0px 1px;background-color:" + pbgcolor + ";font-family:" + myfontname +  ";color:black\">";
    var lblyes = "Yes";
    var lblno = "No";
    var lblok = "Proceed";
    var lblcan = "Cancel";
    if (typeof (textmsg) != 'undefined')
    {
        lblno = textmsg[849];
        lblyes = textmsg[848];
        lblok = textmsg[66];
        lblcan = textmsg[18];
    }

    if (func != null)
    {
        if (dfv == null)
        {
            promptwin0.innerHTML = head + ((het < 110) ? '<nobr>' : '') + str
                    + "</td></tr><tr  style=\"padding:1px 1px 0px 1px;background-color:" + pbgcolor + ";font-family:" + myfontname +  ";\"><td align=center colspan=2><table  cellpadding=3 align=center><tr><td align=center><input name=b1 type=button class=OrangeButton style=" + bdim + " value=\"" + lblyes + "\" onclick=\"takeuserinputyn(true)\"><input name=b2 type=button class=GreenButton style=" + bdim + " value=\"" + lblno + "\" onclick=\"takeuserinputyn(false)\"></td></tr></table></td></tr></table>" + round2;
        }
        else
        {
            promptwin0.innerHTML = head + str
                    + "</td></tr><tr  style=\"padding:1px 1px 0px 1px;background-color:" + pbgcolor + ";font-family:" + myfontname +  ";\"><td align=center colspan=2><table cellpadding=3 align=center><tr><td align=center><input id=promptinput style=\"width:" + (len) + "px;border:1px #505050 solid;border-radius:3px\"  value=\"" + dfv.replace(/"/g, '\\"') + "\" onkeypress=\"return takeuserinputenter(event,this)\"><br><table><tr><td></td></tr></table><input name=b1 type=button class=GreenButton style=" + bdim + " value=\"" + lblok + "\" onclick=\"takeuserinput(this)\"><input name=b2 type=button class=GreenButton style=" + bdim + " value=\"" + lblcan + "\" onclick=\"closeprompt()\"></td></tr></table></td></tr></table>" + round2;
        }
    }
    else
    {
        promptwin0.innerHTML = head + str + "</td></tr></table>" + round20;

    }

    document.body.appendChild(promptwin0);

    if (iamgoing)
    {
        var heit = promptwin0.offsetHeight+20;
        if (heit < 130)
            heit = 130;
        promptwin0.style.height = "1px";
        if (het < 10) het = 0;
        promptwin0.style.top = (het-10) + "px";
        keepgoing = true;
        risedown(1, 0, het - 10, heit);
    }
    else
    {
        promptwinfit(mypromptid);


        var left = Math.floor(wd - promptwin0.offsetWidth) / 2;
        if (left < 0)
            left = 0;
        left += thescrolll;
        var top = het - promptwin0.offsetHeight;
        top = Math.floor(top / 2);
        if (top < 0)
            top = 0;
      
        top += thescrollt;
        if (top < 0)
            top = 0;
        promptwin0.style.left = left + "px";
        promptwin0.style.top = top + "px";
    }
    promptwin0.style.zIndex = 20;

    var titlebar = promptwin0.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0];
    if (typeof (Drag) != 'undefined')
        Drag.init(titlebar, promptwin0);
    if (titlebar!=null)
        titlebar.cells[0].style.width = (picwidth + 2) + 'px';

    unifonts(promptwin0, myfontname);
     if (!iamgoing)
         document.getElementById('myprompthead').style.cursor = 'move';
    if (mypromptid=='myprompt')
        promptwin = promptwin0;
    var zi = 0;
    for (var i=0; i < document.body.childNodes.length; i++)
        if ( typeof(document.body.childNodes[i].style)!='undefined' && document.body.childNodes[i].style!=null &&
             typeof(document.body.childNodes[i].style.zIndex) != 'undefined')
     {
         var xx = parseInt(document.body.childNodes[i].style.zIndex);
         if (xx > zi) zi = xx;
     }
    zi++;
    promptwin0.style.zIndex = ''+zi;
    return promptwin0;
   
}

function setpromptbutlabel(s0, s1)
{
    var x = promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[2].cells[0].getElementsByTagName('table')[0].rows[0].cells[0];
    if (s0!=null) x.getElementsByTagName('input')[0].value = s0;
    if (s1!=null) x.getElementsByTagName('input')[1].value = s1;
}

function setRoundedWidth(adiv, w)
{
    if (adiv == null)
        return;
    var t = adiv.getElementsByTagName('table')[0];
    if (t.rows.length < 3 || t.rows[2].cells.length < 2 ||  t.rows[2].cells[1].getElementsByTagName('div')==null)
    {
        return;
    }
    var r = t.rows[2].cells[1].getElementsByTagName('div')[0];
    {
        r.style.width = '1px';
        adiv.style.width = (10 + w) + 'px';
        r.style.width = w + 'px';
    }
}
function setRoundedHeight(adiv, h)
{
    if (adiv == null)
        return;
    if (adiv.getElementsByTagName)
        var r = adiv.getElementsByTagName('table');
    if (r == null)
        return;
    var u = r[0].rows[1];
    if (u != null)
        r = u.cells[2];
    if (r == null)
        return;
    u = r.getElementsByTagName('div');
    if (u == null)
        return;
    r = u[0];
    if (r != null)
    {
        r.style.height = '1px';
        adiv.style.height = (2 + h) + 'px';
        r.style.height = h + 'px';
    }
}

function setRoundedSize(adiv, w, h)
{
    setRoundedWidth(adiv, w);
    setRoundedHeight(adiv, h);
}

function promptsetwidth(w)
{
    var picwidth = 22;
    setRoundedWidth(promptwin, w);
    var titlebar = promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0];
    titlebar.cells[0].style.width = (picwidth + 2) + 'px';
    titlebar.cells[1].style.width = (w - 2 - picwidth) + 'px';
}
function swappic(p)
{
    var x = p.src, y;
    if (x.charAt(x.length - 5) == '1')
        y = x.replace(/1\.png$/, '0.png');
    else
        y = x.replace(/0\.png$/, '1.png');
    p.src = y;
}
function stopgoing()
{
    keepgoing = false;
}

function risedown(j, i, het, ht)
{
    if (keepgoing == false)
        return;
    if (j == 1)
    {
        if (i < ht)
            i++;
        else {
            j = 0;
        }
    }
    else if (j == 0)
    {
        i--;
        if (i == 0)
        {
            j = -1;
            i = ht;
        }
    }
    else
    {
        if (i > 0)
            i--;
        if (i == 0)
        {
            keepgoing = false;
            closeprompt();
        }
    }
    if (keepgoing && promptwin != null && j != 0 && i > 0)
    {
        setRoundedHeight(promptwin, i);
        promptwin.style.width = '300px';
        promptwin.style.height = i + 'px';
        if (het<i) het = i;
        promptwin.style.top = (het - i) + "px";
    }
    if (i > 0 && keepgoing)
        setTimeout("risedown(" + j + "," + i + "," + het + "," + ht + ")", 50);

}
function promptwinfit(mypromptid)
{
    if (mypromptid==null)
        mypromptid = 'myprompt';
    var promptwin1 = document.getElementById(mypromptid);
    document.getElementById('myprompthead').style.cursor = 'move';
    var div1 = promptwin1.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0];
    if (div1.childNodes != null && div1.childNodes.length > 0)
    {
        var maxw = 0, maxh = 0;
        var hasbut = false;
        for (var i = 0; i < div1.childNodes.length; i++)
        {
            if (div1.childNodes[i].offsetWidth > maxw)
                maxw = div1.childNodes[i].offsetWidth;
            if (div1.childNodes[i].offsetHeight > maxh)
                maxh = div1.childNodes[i].offsetHeight;
            if (hasbut == false && typeof (div1.childNodes[i].tagName) != 'undefined'
                    && div1.childNodes[i].tagName.toLowerCase() == 'input'
                    && typeof (div1.childNodes[i].type) != 'undefined'
                    && div1.childNodes[i].type.toLowerCase() == 'button')
                hasbut = true;

        }
        if (hasbut)
            maxh += 30;

        if (div1.offsetWidth < maxw+4)
        {
            div1.style.width = (maxw+4) + 'px';
        }
        if (div1.offsetHeight < maxh+4)
            div1.style.height = (maxh+4) + 'px';
    }
    /*((dfv!=null)?4:0)) +  ((func!=null)?30:0) */
    //if (div1.offsetWidth != 0)
    //   promptwin.style.width = (div1.offsetWidth + 18) + "px";
    //else
    //   promptwin.style.width = (div1.clientWidth + 18) + "px";

    if (div1.offsetHeight != 0)
        setRoundedHeight(promptwin1, div1.offsetHeight + 38 + (promptwin1.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows.length > 2 ? 36 : 0));
    else
        setRoundedHeight(promptwin1, div1.clientHeight + 38 + (promptwin1.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows.length > 2 ? 36 : 0)) + "px";
    var wd = thispagewidth();
    var het = thispageheight();
    if (promptwin1.offsetHeight > het - 4)
        promptwin1.style.top = '0px';
    if (promptwin1.offsetHeight < 120)
        setRoundedHeight(promptwin1, 120);
    if (promptwin1.offsetWidth > wd - 4)
        promptwin1.style.left = '0px';
    var mw = 250;
    if (250 > thispagewidth() - 10)
        mw = thispagewidth() - 10;
    if (promptwin1.offsetWidth < mw)
        setRoundedWidth(promptwin1, mw);
}

function takeuserinput(btn)
{
    var v = btn.parentNode.childNodes[0].value;
    closeprompt();
    eval(promptfunc);
}
function takeuserinputenter(evt, tbx)
{
    var e = evt ? evt : window.event;
    if (!e)
        return true;
    var key = 0;
    if (e.keyCode) {
        key = e.keyCode;
    } // for moz/fb, if keyCode==0 use 'which'
    else if (typeof (e.which) != 'undefined') {
        key = e.which;
    }
    if (key == 13)
    {
        var v = tbx.value;
        eval(promptfunc);
        closeprompt();
    }
    return true;
}
function takeuserinputyn(v)
{
    closeprompt();
    eval(promptfunc);
}
function closeprompt(mypromptid)
{
    if (mypromptid == null) mypromptid = 'myprompt';
    var promptwin1 = document.getElementById(mypromptid);
    if (promptwin1 != null && typeof (needtranslator) != 'undefined' && needtranslator && typeof(LaTexHTML) != 'undefined')
    {
        LaTexHTML.deformat(promptwin1);
    }
    if (promptwin1 != null)
        document.body.removeChild(promptwin1);
    if (mypromptid == 'myprompt')
        promptwin = null;
}

function charwidthrate()
{
    var x = "";
    if (typeof (document.characterSet) != 'undefined')
        x = document.characterSet.toLowerCase();
    else if (typeof (document.charset) != 'undefined')
        x = document.charset.toLowerCase();
    if (x == 'gb2312')
        return 4.1;
    return 4.5;
}
function resizebut(theform, fontsize, enforce)
{
    if (theform == null)
        return;
    var fntsize = 16;
    if (typeof (fontsize) != 'undefined' && fontsize != null)
        fntsize = fontsize;
    else if (typeof (font_size) != 'undefined' && font_size != null)
        fntsize = font_size;
    var width = Math.ceil(fntsize * charwidthrate());
    for (var j = 0; j < theform.elements.length; j++)
    {
        if (theform.elements[j].tagName.toLowerCase() == 'input'
                && typeof (theform.elements[j].type) != 'undefined'
                && (theform.elements[j].type.toLowerCase() == 'submit' ||
                        theform.elements[j].type.toLowerCase() == 'reset' ||
                        theform.elements[j].type.toLowerCase() == 'button')
                )
        {
            if (enforce != null && enforce == '1')
                theform.elements[j].style.overflow = "hidden";
            else if (enforce == null || enforce == '0')
                theform.elements[j].style.overflow = "visible";
            else
            {
                theform.elements[j].style.overflow = "visible";
                width = 2 * fntsize;
            }
            if (theform.elements[j].value.indexOf(">") < 0
                    && theform.elements[j].value.indexOf("<") < 0)
            {
                if (theform.elements[j].offsetWidth < width
                        || navigator.appName == 'Microsoft Internet Explorer')
                    theform.elements[j].style.width = width + 'px';

            }
            //theform.elements[j].style.height = (fntsize + 6) + 'px';
        }
    }

}


function enforcebutwidth(theform, width)
{
    var again = false;
    for (var j = 0; j < theform.elements.length; j++)
    {
        if (theform.elements[j].offsetWidth > width)
        {
            again = true;
            theform.elements[j].value = theform.elements[j].value.replace(/.$/, '');
            theform.elements[j].style.width = width + "px";
            if (typeof (theform.elements[j].width) != 'undefined')
                theform.elements[j].width = width;
        }
    }
    return again;
}

function resizehelpbut(wind, fontsize)
{

    var fntsize = 16;
    if (typeof (fontsize) != 'undefined' && fontsize != null)
        fntsize = fontsize;
    else if (typeof (font_size) != 'undefined' && font_size != null)
        fntsize = font_size;
    var buts = wind.document.getElementsByTagName("input");

    for (var j = 0; j < buts.length; j++)
    {
        if (typeof buts[j].type != 'undefined' &&
                buts[j].type == 'button' &&
                buts[j].offsetWidth < fntsize * charwidthrate())
            buts[j].style.width = "" + (fntsize * charwidthrate()) + "px";
    }
}

function tailaction(s)
{

    var i = s.indexOf("?");
    if (i == -1)
        return s + "?1";
    var j = i + 1;

    while (j < s.length && s.charAt(j) <= '9' && s.charAt(j) >= '0')
        j++;
    var ans = s.substring(0, i + 1);
    if (j == i + 1)
    {
        ans += "1&";
    }
    else
    {
        ans += "" + (parseInt(s.substring(i + 1, j)) + 1);
    }
    if (j < s.length)
        ans += s.substring(j);
    return ans;
}

function resumeFailed(win)
{
    win.onunload = function(){
    setTimeout(failedformsubmit,500);
   }
}
function formnewaction(fm, s)
{
    failedformsubmit = "document." + fm.name + ".submit();";
    if (s == null)
        fm.action = tailaction(fm.action);
    else if (fm.action == s)
        fm.action = tailaction(s);
    else
        fm.action = s;
    var el = formselementbyname(fm, "securitytoken");

    if (el == null)
    {
        el = document.createElement("input");
        el.type = "hidden";
        el.name = "securitytoken";
        fm.appendChild(el);
    }
    if (typeof (securitytoken) != 'undefined')
        el.value = securitytoken;
    if (typeof(orgnum)!='undefined')
    {
        var e2 = formselementbyname(fm, "orgnum");

        if (e2 == null)
        {
            e2 = document.createElement("input");
            e2.type = "hidden";
            e2.name = "orgnum";
            fm.appendChild(e2);
            if (typeof (orgnum) != 'undefined')
                 e2.value = (orgnum%65536);
             
        }
        e2.disabled = false;
    }

}

function initialhintneed(i)
{
    var x = GetCookie("initialhint");

    if (x == null)
        return true;
    return (x.indexOf("," + i + ",") < 0);
}
function initialhint(i, helpmsg)
{
    return "<table cellpadding=1 cellspacing=1><tr><td colspan=2>"
            + ((helpmsg == null) ? textmsg[88] : helpmsg)
            + "</td></tr><tr><td><input type=checkbox style=background-color:transparent onclick=\"javascript:initialhintset(" + i + ")\">"
            + "</td><td>" + textmsg[872] + "</td></tr></table>";
}
function initialhintset(i)
{
    var x = GetCookie("initialhint");
    if (x == null)
        x = "," + i + ",";
    else if (x.indexOf("," + i + ",") < 0)
        x += i + ",";
    else
        return;

    SetCookie("initialhint", x);
}

function newajax()
{
    var ajaxRequest = null;
    try
    {
        ajaxRequest = new XMLHttpRequest();
    } catch (e)
    {
        try
        {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                myprompt("Your browser has a problem. Please restart or update your browser ");
            }
        }
    }
    return ajaxRequest;
}

function textboxhint(txt, s, hint)
{
    if (s == 1)
    {
        if (txt.value == '')
        {
            if (hint == null)
                txt.value = txt.name;
            else
                txt.value = hint;
            txt.style.color = "#aaaaaa";
        }
    }
    else
    {
        if (txt.style!=null)
        {
            var x = '#aaaaaa';
            if (txt.style.color!=null)
                x = txt.style.color.toString().toLowerCase().replace(/ /g, '');
            if (x == '#aaaaaa' || x == 'rgb(170,170,170)')
            {
                txt.value = '';
                txt.style.color = "#000000";
            }
        }
    }
}


function caretPos(el)
{
    if (el == null) return 0;
    if (document.selection)
    {

        var start = 0,
                range = el.createTextRange(),
                range2 = document.selection.createRange().duplicate(),
                range2Bookmark = range2.getBookmark();
        range.moveToBookmark(range2Bookmark);
        while (range.moveStart('character', -1) != 0)
        {
            start++;
        }
        return start;
    }
    else if (el.selectionStart || el.selectionStart == '0')
    {

        return el.selectionStart;
    }

    return 0;

}

function mkstrike(ta, evt, orientation)
{
    if (needtochecksyntax == false)
        return;
    if (orientation == null)
        orientation = 's';
    var e = evt ? evt : window.event;
    if (!e)
        return true;
    var key = 0;
    if (e.keyCode) {
        key = e.keyCode;
    } // for moz/fb, if keyCode==0 use 'which'
    else if (typeof (e.which) != 'undefined')
    {
        key = e.which;
    }
    if (key == 36 || key == 62)
    {
        var j = caretPos(ta);
        var fmt = editingfmt;

        if (editingfmt < 2)
        {
            if (j > 0)
                fmt = guessFormat(ta.value.substring(0, j) + String.fromCharCode(key) + ta.value.substring(j));
            else
                fmt = guessFormat(String.fromCharCode(key) + ta.value.substring(j));
            editingfmt = fmt;
        }

        if (fmt == 1 || fmt == 2 && needtranslator)
        {
            tabeingedited = ta;
            showlatexonfly(orientation, fmt, key)
        }
    }
    return true;
}

var circlenum = function(n,k)
{
    
    var m = Math.round(n/2 + 3) ;
    return "<div style=\"font-family:arial;font-weight:700;width:" + (2*m) + "px;height:" + (2*m)
        + "px;border-radius:" + m + "px;font-size:" + n + "px;color:#ddcc11;line-height:" + (2*m) + "px;text-align:center;background-color:" + IBGCOLOR + "\">" 
        + k + "</div>";
  
}
var UpdateMath = function(TeX, y)
{
    var math = MathJax.Hub.getAllJax('MathOutput')[0];
    var box = document.getElementById(y);
    MathJax.Hub.queue.Push(["Text", math, "\\displaystyle{" + TeX + "}"]);
}
var addbr = function(x)
{
    var state = 0;
    var y = '';
    x = x.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    for (var j=0; j < x.length; j++)
    {
       if (x.charAt(j) == '$')
       {
           state = 1-state;
           y += '$';
       }
       else if (x.charAt(j) == '\n')
       {
           if (state == 0)
               y += '<br>';
           else
               y += '\n';
       }
       else
           y += x.charAt(j);

    }
    return y;
}



var formatstr0 = function(x, f)
{
    if (x == null)   return null;
    if (f==null || ''+f != '0' && ''+f !='1' && ''+f !='2') 
    {
        if (typeof(guessFormat) != 'undefined')
           f = ''+guessFormat(x);
        else
           f = '0';
    }
    if (''+f == '0' )
    {
        var ispre = '<pre style="display:inline;margin:0px 0px 0px 0px;font-family:inherit;font-size:inherit;font-weight:inherit">';
        var ispre1 = '</pre>';
        var xs = x.replace(/\r\n/g,'\n').replace(/\r/g,'\n').split(/\n/);
        for (var j=0; j < xs.length; j++)
        if (xs[j].length > 70)
        {
            ispre = '';
            ispre1 = '';
            break;
        }
        if (ispre == '')
            x =   x.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r\n/g, '<br>').replace(/\r/g, "<br>").replace(/\n/g, "<br>");
        else 
            x = ispre +  x.replace(/</g, '&lt;').replace(/>/g, '&gt;')  + ispre1;
        
    }
    else if (''+f == '2' )
    {
        if (typeof (needtranslator) != 'undefined')
            needtranslator = true;
        
        return  x.replace(/\n[ |\t|\r]*\n/g, '<br>');
    }
    var r = new RegExp(/<pre[^>]*>/ig);
    var r1 = new RegExp(/<.pre>/ig);
    var k = 0;
    
    var str = '';
    while (k < x.length)
    {
        var m = r.exec(x.substring(k));
        if (m != null) 
        {
            var j = m.index + k;
            var out = x.substring(k,j);
            var ins = m.toString(); 
            k = j + ins.length; 
        }
        else
        {
            out = x.substring(k);
            ins = '';
            k = x.length;
        }
        var l = r1.exec(out);
        if (l == null)
        {
            str += dol(out);
        }
        else
        {
            var ll = l.index;
            str += out.substring(0,ll+6) + dol(out.substring(ll+6));
        }
        str += ins; 
    }
  
    return str;
}
function dol(x)
{
    var str = "";
    var k = 0;
    while ( k < x.length )
    {
        var j = x.indexOf("$", k);
        var out;
        var ins = "";
        if (j == -1)
        {
            out = x.substring(k);
            k = x.length ;
        }
        else 
        {
             out = x.substring(k,j);
             k = j+1;
             ins = "$";
        }
        str +=  out; 
        if (j == 0 || j > 1 && x.charAt(j-1) !='\\')
            ins = "<pre style=\"display:inline;margin:0px 0px 0px 0px;font-family:inherit;font-size:inherit;font-weight:inherit\">&dollar;</pre>" ;
        str += ins;

    }
    return str;
}
function setPpenedf(t)
{
    openedfileinframe1 = false;
    showraw(2);
    document.body.removeChild(t);

}

function addbreak(str,nora)
{
    if (str.indexOf('\n\t') >= 0 || str.indexOf('\r\t') >= 0) return str;
    if (nora == null) nora = "[a-z]";
    else nora = "[0-9]+";
    var rorn = (str.indexOf("\n") < 0 && str.indexOf("\r") >= 0)?'\r':'\n';
    var m = null;
    var k = 0, l = 0, j;
    var spt = null;
    var langsep = textmsg[1332].replace(/\./,'').replace(/\]/,'').replace(/\)/,'').replace(/:/,'').replace(/\[/,'').replace(/\(/,'').replace(/\\/,'').replace(/(.)/g, "|$1") + "]";
    
    if (rorn == '\n')
        spt = new RegExp("\n(" + nora + "[ |:|\\.|\\)|\\]" + langsep + ")", "ig");
    else
        spt = new RegExp("\r(" + nora + "[ |:|\\.|\\)|\\]" + langsep +")" , "ig");
    str = str.replace(spt,   "@#@,@@,#$1");
     
    return str;
}
function addbreak1(str)
{
    return str.replace(/@#@,@@,#/g, '<br>');
}

function openproper(s,x,t)
{
    if (window!=parent&&parent.parent.frames.length>1 && parent.parent.frames[0]==window.parent && typeof(ResizeUploaded) != 'undefined')
    {
        s = ResizeUploaded.goodopenurl(s,false);

        window.open(s,parent.parent.frames[1].name);

        openedfileinframe1 = true;
    }
    else if (window!=parent&&parent.frames.length>1 && parent.frames[0]==window  && typeof(ResizeUploaded) != 'undefined')
    {
        s = ResizeUploaded.goodopenurl(s,false);
        if (s.indexOf('http') == 0)
            window.open(s,'_blank');
        else 
            window.open(s,parent.frames[1].name);
        openedfileinframe1 = true;
        var btn = document.createElement('div');
        btn.onclick =  function()
        {
            setPpenedf(this);
        };
        btn.id='closebtn';
        btn.style.cssText = "position:fixed;left:" + (thispagewidth()-44) + 'px;top:56px;z-index:27;background-color:transparent;color:white;font-size:17px;width:22px;height:22px;line-height:22px;font-weight:bold;vertical-align:middle';
        btn.innerHTML = "<img src=\"image/icon/smalls01.png\" style=\"margin:0px 0px 0px 0px;width:24px;height:24px;border-radius:12px\">";
        document.body.appendChild(btn);

    }
    else
        openpicorfile(s,x,t);
}
function mergeunderscore(x, y)
{
   if (x == null || y == null || y == '') return x;
   var xs = (" " + x + " ").split(/__[_]+/);
   var ys = y.replace(/\n/g,' \n').split(/\n/);
   var ans = xs[0].substring(1);
   for (var i=1; i < xs.length; i++)
   {
        var xx = '______________';
        if (i <= ys.length)
            xx = ys[i-1].replace(/ $/,'');
        ans += '<span style="text-decoration: underline;font-weight:bold;color:purple">' + xx + '</span>' + xs[i];

   }
   return ans;
}
function openopen(str, ab)
{
    var xy = ab.split(/_/);
    open(str,'_blank','width=' + xy[0] +",height=" + xy[1]);
}
function displaylatex(ele)
{
    //var fs = findFont(ele);
    //var color = findColor(ele);
    LaTexHTML.deformat(ele);
    LaTexHTML.reformat(ele);
}
var findFont = function(n)
{
    if (n.style.fontSize != null)
        return n.style.fontSize;
    if (n.tagName.toLowerCase() == 'body')
    {
        if (typeof (font_size) != 'undefined')
            return '' + font_size;
        return '20';
    }
    return findFont(n.parentNode);
}
var findColor = function(n)
{
    if (n.style.color != null)
        return n.style.color;
    if (n.tagName.toLowerCase() == 'body')
    {
        return 'black';
    }
    return findColor(n.parentNode);
}
function turnoffdynamic()
{
    needtochecksyntax = false;
}

function showlatexonfly(orientation, fmt, key)
{
    var ta = tabeingedited;
    var j = caretPos(ta), m = j - 1, l = -1;
    if (j == 0)
        return;

    var str = '';
    var ch = String.fromCharCode(key);
    var str0 = '';
    if (ch != '$')
    {
        str = ta.value.substring(0, j) + ch + ta.value.substring(j);
        str0 = str;
    }
    else
    {
        str = ta.value.substring(0, j) + ch;
        str0 = str;
        var y = str.replace(/\\\$/g, '').replace(/\$\$[^\$]+\$\$/g, '').replace(/\$[^\$]+\$/g, '');

        if (y.indexOf("$") >= 0)
            return;
        while (m >= 0 && str.charAt(m) == ch)
            m--;
        l = m + 1;
        while (m >= 0 && str.charAt(m) != ch)
            m--;
        str = str.substring(m, l) + "$";

        if (str == '$$')
        {
            return;
        }
    }
    closeprompt();

    var xx = "<br><input type=checkbox onclick=turnoffdynamic()>" + textmsg[872];

    if (fmt == 2)
        myprompt(checkh(str, true) + xx, null, null, textmsg[1047] + " LaTex");
    else
        myprompt(str + xx, null, null, textmsg[1047] + " HTML");
    var xy = findPositionnoScrolling(ta);
    if (orientation == 's')
    {
        promptwin.style.left = xy[0] + 'px';
        if (xy[1] + ta.offsetHeight < 0) xy[1] = -ta.offsetHeight;
        promptwin.style.top = (xy[1] + ta.offsetHeight) + 'px';
        setRoundedWidth(promptwin, ta.offsetWidth);
    }
    else if (orientation == 'e')
    {
        promptwin.style.left = (xy[0] + ta.offsetWidth) + 'px';
        if (xy[1] < 0) xy[1] = 0;
        promptwin.style.top = (xy[1]) + 'px';
    }
    else if (orientation == 'n')
    {
        promptwin.style.left = xy[0] + 'px';
        if (xy[1] <  promptwin.offsetHeight);
        xy[1] = promptwin.offsetHeight;
        promptwin.style.top = (xy[1] - promptwin.offsetHeight) + 'px';
        setRoundedWidth(promptwin, ta.offsetWidth);
    }
    else if (orientation == 'w')
    {
        promptwin.style.left = (xy[0] - promptwin.offsetWidth) + 'px';
        if (xy[1] < 0) xy[1] = 0;
        promptwin.style.top = (xy[1]) + 'px';

    }
    else
    {
        str0 = str0.replace(/\r\n/g,'\n').replace(/\r/g,'\n');

        var n = str0.replace(/[^\n]/g,'').length ;

        var sty = ta.style;
        var j = 24;

        if (sty!=null && typeof(sty.lineHeight)!='undefined' && sty.lineHeight!=null)
            j = parseInt(sty.lineHeight.replace(/[^0-9]/g,''));
        if ( '' +j == 'NaN' && sty!=null && typeof(sty.fontSize)!='undefined')
            j = Math.round(parseInt(sty.fontSize.replace(/[^0-9]/g,''))+ 4);
        if ('' +j == 'NaN') j = 24;

        var yy = xy[1] + (n*j) - promptwin.offsetHeight - 20;
        var yy1 = yy;
        if (yy < 0)
            yy = 0;
        if (yy > ta.offsetHeight - promptwin.style.offsetHeight)
            yy = (ta.offsetHeight - promptwin.style.offsetHeight);
        if (yy < 0)
            yy = 0;
        promptwin.style.top = yy + 'px';

    }

    if (fmt == 2)
    {
        displaylatex(promptwin);
    }
}


function unifonts(x,f)
{

     if (f == null) f = myfontname;
     if (x==null || x.nodeType==3 ||  typeof(x.className)!='undefined' && (''+x.className).toLowerCase().indexOf('math')==0) return;
     if ((typeof(x.id)=='undefined'|| x.id==null || x.id.toString().indexOf('S_s')<0 && x.id.toString().indexOf('D_d')<0 ) && typeof(x.tagName)!='undefined'
             &&  (x.tagName.toLowerCase() == 'div' || x.tagName.toLowerCase() == 'td'
             || x.tagName.toLowerCase() == 'p' ||x.tagName.toLowerCase() == 'span'
             || x.tagName.toLowerCase() == 'input' && x.type!='hidden' && x.type!='radio' ||x.tagName.toLowerCase() == 'select'
             || x.tagName.toLowerCase() == 'textarea'|| x.tagName.toLowerCase() == 'body'
            ))
     {
         x.style.fontFamily = f;
         totaleles++;
         if (x.tagName.toLowerCase() == 'select' ||  x.hasAttribute("onclick"))
         {
             x.style.cursor = 'pointer';
         }
     }
     var y = x.childNodes;
     if (y !=null && y.length>0)
     for (var j=0; j < y.length; j++)
     {
        if (y[j]!=x) unifonts(y[j],f);
     }
}
function homestr()
{
    if (typeof(IBGCOLOR)=='undefined') IBGCOLOR = "#007700";
    if (typeof(BBGCOLOR)=='undefined') BBGCOLOR = "#00BBBB";
    return "<div style=\"background:radial-gradient(farthest-side at 70% 65%," + BBGCOLOR + "," + IBGCOLOR + ");width:36px;height:36px;border-radius:18px;alignment:center;vertical-align:middle;line-height:36px\">"
+"<table cellspacing=0 width=24 align=center><tr height=6><td colspan=7></td></tr><tr height=10><td colspan=7>"
+"<div style=\"width:0px;height:0px;border-left:12px solid transparent;border-bottom:10px #fff solid;border-right:12px solid transparent;\"></div></td></tr>"
+"<tr height=3><td width=3 rowspan=2></td><td width=5 style=\"background-color:#ffffff\"  rowspan=2></td><td width=5  rowspan=2></td><td width=4 style=\"background-color:#ffffff\"  rowspan=2></td><td width=5 ></td>"
+"<td width=4 style=\"background-color:#ffffff\"  rowspan=2></td><td width=3 rowspan=2></td></tr><tr height=5><td style=\"background-color:#ffffff\" width=5></td></tr><tr height=12><td colspan=7></td></tr></table</div>";
 
}
window.onload = function()
{
   if (typeof (needtranslator) != 'undefined' && needtranslator)
    {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (latexislocal)
        {
            script.src = "mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
        }
        else
        {

            script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
        }
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    var dotmenu1 = document.getElementById('dotmen0');
    if (dotmenu1 != null && dotmenu1.innerHTML!='')
    {
        if (allainputeles=='')buildactmenu();  
        if (allainputeles=='') dotmenu1.parentNode.removeChild(dotmenu1);
    }
    if (indexwindow == null && opener!=null&& onmydomain( opener) && opener!=window && typeof(opener.indexwindow)!='undefined' && opener.indexwindow!=null)
        indexwindow = opener.indexwindow;
    if (indexwindow == null && parent.opener!=null&& onmydomain(parent.opener) && parent.opener!=parent && typeof(parent.opener.indexwindow)!='undefined' && parent.opener.indexwindow!=null)
        indexwindow = parent.opener.indexwindow;
     
    oldonclose0 = window.onunload;
    //if (indexwindow != null) indexwindow.managewin(window, 0);
    window.onunload = function()
    {
        if (oldonclose0 != null)
            oldonclose0();
        //indexwindow.managewin(window, 1);
    }
    var myfontname1 = GetCookie('telamanfontname');
    if (myfontname1!=null)
    {
        myfontname = myfontname1;
    }
    else if (typeof(defaultfontfamily)!='undefined')
    {
        myfontname = defaultfontfamily;
    }
    unifonts(document.body); 
    if (typeof(thisislogin) == 'undefined') mywindowref();
    if (window == parent.frames[1])
    {
        document.body.style.marginLeft = '1px';
        if (typeof(DBGCOLOR)!='undefined')
        {
            document.body.style.backgroundColor = DBGCOLOR; 
        }
    }
    if ( parent.parent!=parent || window != parent && window==parent.frames[1] && parent.frames[0].document.getElementById('homeico')!=null)
    {
        var homeico = document.getElementById('homeico');
        if (homeico!=null)
            homeico.parentNode.removeChild(homeico);
    }
    else if (window != parent && parent.parent.parent==parent.parent && parent.parent!=parent && parent.parent.frames[0].document.getElementById('homeico')!=null)
    {
        var homeico = document.getElementById('homeico');
        if (homeico!=null)
            homeico.parentNode.removeChild(homeico);
    }
    else
    {
        var homeico = document.getElementById('homeico');
        if (homeico!=null)
            homeico.innerHTML = homestr();
    }    
}
function round1(p)
{
    var fw = 2;
    if (p != '')
        p = " width=" + p;
    return "<table  style=\"font-family:inherit\"  border=0 align=center cellpadding=0 cellspacing=0 " + p + ">"
            + "<tr style=\"font-family:inherit\"><td width=2  ></td><td colspan=1  height=2></td>"
            + "<td width=2  ></td></tr><tr><td width=2  ></td>"
            + "<td align=left valign=top style=\"border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;font-family:inherit\">";
}
function round10(p) {
    var fw = 4;
    if (p != '')
        p = " width=" + p;
    return "<table     border=0 align=center cellpadding=0 cellspacing=0 " + p + ">"
            + "<tr><td width=5  ></td><td colspan=1   height=5></td>"
            + "<td width=5 ></td></tr><tr><td width=5></td>"
            + "<td align=left valign=top style=\"border:2px #696969 outset;box-shadow:#aaaaaa 1px 1px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;font-family:inherit;\">";
}

ResizeRounded.mapfromc2r = new Array();
ResizeRounded.activeone = null;
ResizeRounded.start2drag = function(anc)
{
    var p = anc.parentNode.parentNode.parentNode;
    if (p.tagName.toLowerCase() != 'table')
        p = p.parentNode;
    ResizeRounded.mapfromc2r[p.parentNode.id].resizingwinstart(anc);
}

function ResizeRounded(c, resizeelements)
{
    if (c.id == null || c.id == '')
    {
        var j = mapfromc2r.length;
        while (document.getElementById('resizing' + j) != null)
            j++;
        c.id = 'resizing' + j;
    }
    this.resizingw = c;
    ResizeRounded.mapfromc2r[c.id] = this;
    this.resizeelements = resizeelements;
    this.resizingxy = null;
    if (c.getElementsByTagName('table') == null || c.getElementsByTagName('table')[0] == null)
        return;
    this.anchor = c.getElementsByTagName('table')[0].rows[2].cells[2].getElementsByTagName('div')[0];
    this.anchor1 = c.getElementsByTagName('table')[0].rows[1].cells[2].getElementsByTagName('div')[0];
    this.anchor2 = c.getElementsByTagName('table')[0].rows[2].cells[1].getElementsByTagName('div')[0];
    this.anchor.style.width = '5px';
    this.anchor.style.height = '5px';
    this.anchor1.style.height = (this.anchor1.parentNode.offsetHeight - 2) + 'px';
    this.anchor2.style.width = (this.anchor2.parentNode.offsetWidth - 2) + 'px';

    if (typeof (Drag) != 'undefined')
    {
        Drag.init(this.anchor);
        Drag.init(this.anchor1);
        Drag.init(this.anchor2);
    }

    this.resizingwinstart = function(anchor)
    {
        var xy = findPositionnoScrolling(anchor);
        document.body.appendChild(anchor);
        anchor.style.position = 'absolute';
        anchor.style.left = xy[0] + 'px';
        if (xy[1] < 0) 
        anchor.style.top = xy[1] + 'px';
        this.resizingxy = findPositionnoScrolling(anchor);
        ResizeRounded.activeone = this;
    };

    this.shrink = function()
    {
        this.anchor1.style.height = '1px';
        this.anchor2.style.width = '1px';
    };

    this.resizingwinend = function(anchor, i, j)
    {
        if (anchor != this.anchor1)
            this.anchor1.style.height = '1px';
        if (anchor != this.anchor2)
            this.anchor2.style.width = '1px';
        var xy = findPositionnoScrolling(anchor);
        var dx = xy[0] - this.resizingxy[0];
        var dy = xy[1] - this.resizingxy[1];
        if (i == 1)
            dy = 0;
        if (j == 1)
            dx = 0;
        if (this.resizeelements != null)
        {
            this.resizeelements(this.resizingw.getElementsByTagName('table')[0].rows[1].cells[1], dx, dy);
        }

        this.resizingw.getElementsByTagName('table')[0].rows[i].cells[j].appendChild(anchor);
        anchor.style.position = 'static';
        if (anchor != this.anchor1)
        {
            this.anchor1.style.height = (this.anchor1.parentNode.offsetHeight - 2) + 'px';
        }
        if (anchor != this.anchor2)
        {
            this.anchor2.style.width = (this.anchor2.parentNode.offsetWidth - 2) + 'px';
        }
    };
    this.fitsize = function()
    {
        this.anchor1.style.height = '1px';
        this.anchor2.style.width = '1px';
        this.resizingw.getElementsByTagName('table')[0].rows[0].cells[1].width = 10;
        this.resizingw.getElementsByTagName('table')[0].rows[1].cells[1].width = 10;
        this.resizingw.getElementsByTagName('table')[0].rows[2].cells[1].width = 10;
        this.resizingw.getElementsByTagName('table')[0].rows[1].height = 10;
        this.anchor1.style.height = (this.anchor1.parentNode.offsetHeight - 2) + 'px';
        this.anchor2.style.width = (this.anchor2.parentNode.offsetWidth - 2) + 'px';
    };

    this.anchor.onDragStart = function(x, y)
    {
        ResizeRounded.start2drag(this);
    };
    this.anchor1.onmouseover = function()
    {
        if (ResizeRounded.activeone != null)
            ResizeRounded.activeone.fitsize();
    }
    this.anchor2.onmouseover = function()
    {
        if (ResizeRounded.activeone != null)
            ResizeRounded.activeone.fitsize();
    }
    this.anchor.onDragEnd = function(x, y)
    {
        if (ResizeRounded.activeone != null)
            ResizeRounded.activeone.resizingwinend(this, 2, 2);
        ResizeRounded.activeone = null;
    };

    this.anchor1.onDragStart = function(x, y)
    {
        ResizeRounded.start2drag(this);
    };

    this.anchor1.onDragEnd = function(x, y)
    {
        if (ResizeRounded.activeone != null)
            ResizeRounded.activeone.resizingwinend(this, 1, 2);
        ResizeRounded.activeone = null;
    };

    this.anchor2.onDragStart = function(x, y)
    {
        ResizeRounded.start2drag(this);
    };

    this.anchor2.onDragEnd = function(x, y)
    {
        if (ResizeRounded.activeone != null)
            ResizeRounded.activeone.resizingwinend(this, 2, 1);
        ResizeRounded.activeone = null;
    };


}


function CSVParse()
{
    this.str = '';
    this.quote = "\"";
    this.separates = [',', '\r\n'];
    this.previousOffset = -1;
    this.PREQUOTE = 0;
    this.QUOTE = 1;
    this.UNQUOTE = 2;
    this.POSTQUOTE = 3;
    this.NAKED = 4;
    this.FILEEND = 5;
    this.ERROR = 6;
    this.DIMENSIONEND = [7, 8];
    this.states =
            [
                /*PREQUOTE  = 0*/  [0, 1, 4, 5, 7],
                /*QUOTE     = 1*/  [1, 2, 1, 6, 1],
                /*UNQUOTE   = 2*/  [3, 1, 6, 5, 7],
                /*POSTQUOTE = 3*/  [3, 6, 6, 5, 7],
                /*NAKED     = 4*/  [4, 4, 4, 5, 7],
                /*FILE END  = 5*/  [5, 5, 5, 5, 5],
                /*ERROR     = 6*/  [6, 6, 6, 6, 6],
                /*DIM1 END  = 7*/  [0, 1, 4, 5, 7]

            ];
    this.state = this.PREQUOTE;
    this.pstate;
    this.ppOffset = -1;
    this.ppstate = 0;
    this.index = [0, 0];
    this.numSeparates = 2;

    if (arguments.length > 0)
    {
        this.str = arguments[0];
    }
    if (arguments.length >= 2)
    {
        this.quote = arguments[1];
    }
    if (arguments.length >= 3)
    {
        if (arguments[2] != null)
        {
            this.numSeparates = arguments.length - 2;
            this.separates = new Array(this.numSeparates);
            for (var i = 0; i < arguments.length - 2; i++)
                this.separates[i] = arguments[i + 2];
            this.index = new Array(this.numSeparates);
            for (var j = 0; j < this.numSeparates; j++)
                this.index[j] = 0;
        }
        else
        {
            this.numSeparates = 0;
            this.separates = null;
            this.numSeparates = 0;
        }
    }
    if (this.numSeparates > 0)
    {
        this.DIMENSIONEND = new Array(this.numSeparates);
        for (var i = 0; i < this.numSeparates; i++)
            this.DIMENSIONEND[i] = (7 + i);
    }

    this.transit = function(charCode)
    {
        if (this.state == this.FILEEND || this.state == this.ERROR || this.state == this.QUOTE && charCode >= 4)
        {
            return;
        }

        var diff = 0;
        if (charCode >= 4)
        {
            diff = charCode - 4;
            charCode = 4;
        }
        var v = this.state;
        if (v >= this.DIMENSIONEND[0])
            v = 0;
        this.state = this.states[v][charCode] + diff;

    };

    this.checkError = function(b)
    {
        if (b)
        {
            this.states[1][3] = this.states[2][2] = this.states[3][1] = this.states[3][2] = this.ERROR;
        }
        else
        {
            this.states[1][3] = FILEEND;
            this.states[2][2] = this.states[3][1] = this.states[3][2] = this.POSTQUOTE;
        }
    };
    
    this.ignorespace = true;
    
    this.code = function(c)
    {
        if (  c == ' ')
        {
            return 0;
        }
        if (c == this.quote)
        {
            return 1;
        }
        for (var i = 0; i < this.numSeparates; i++)
        {
            if (this.separates[i].indexOf("" + c) >= 0)
            {
                return  (i + 4);
            }
        }

        return 2;

    };

    this.putBack = function()
    {
        this.previousOffset = this.ppOffset;
        this.state = this.ppstate;
    }
    this.nextElement = function()
    {
        this.ppOffset = this.previousOffset;
        this.ppstate = this.state;
        if (this.str==null || this.state == this.FILEEND || this.state == this.ERROR)
        {
            return null;
        }
        var k;
        var c = ' ';
        var i = this.previousOffset;
        var charCode;
        var i1,j1;
        var j = i + 1;
        var ans = '';
        while (true)
        {
            i++;
            if (i < this.str.length)
            {
                c = this.str.charAt(i);
                charCode = this.code(c);
            }
            else
            {
                charCode = 3;
            }

            /*
             if ( (this.state == this.PREQUOTE || this.state > (this.ERROR + 1) ) && charCode > 4)
             {
             continue;
             }*/
            this.pstate = this.state;
            this.transit(charCode);

            switch (this.state)
            {
                case this.PREQUOTE:
                case this.NAKED:
                    break;
                case this.QUOTE:
                    if (this.pstate == this.UNQUOTE)
                    {
                        j = i;
                    }
                    else if (this.pstate != this.QUOTE)
                    {
                        j = i + 1;
                    }
                    break;
                case this.UNQUOTE:
                    if (i > j)
                    {
                         
                        ans += this.str.substring(j, i);
                    }
                    break;
                case this.POSTQUOTE:
                    break;
                case this.ERROR:
                    return null;
                default:
                    this.previousOffset = i;
                    k = this.state - 7;
                    if (k < 0)
                    {
                        k = this.numSeparates - 1;
                    }
                    for (var l = 0; l < k; l++)
                        this.index[l] = 0;
                    if (k >= 0)
                        this.index[k]++;

                    if (this.pstate == this.UNQUOTE || this.pstate == this.POSTQUOTE)
                    {
                        if (this.ignorespace == false && this.str.charAt(this.ppOffset+1)==' ')
                        {
                           ans = ' ' + ans;
                        }
                        return ans;
                    }
                    else
                    {
                        if (i > j)
                        {
                            if (this.ignorespace == false && j>0 && this.str.charAt(j-1)==' ')
                            {
                                j--;
                            }
                            return this.str.substring(j, i);
                        }
                        else
                            return '';
                    }
            }
        }
    };

    this.getState = function()
    {
        return this.state;
    };
    this.getPstate = function()
    {
        return this.pstate;
    };
    this.setString = function(s)
    {
        this.str = s;
    };
    this.setSeparates = function(s, i)
    {
        if (i == null)
        {
            if (s != null)
            {
                this.separates = s;
                this.numSeparates = s.length;
                this.index = new Array(this.numSeparates);
                for (var j = 0; j < this.numSeparates; j++)
                    this.index[j] = 0;
            }
            else
            {
                this.separates = null;
                this.numSeparates = 0;
                this.index = null;
            }
        }
        else if (i < this.numSeparates)
            this.separates[i] = s;
        this.state = this.PREQUOTE;
        this.previousOffset = -1;
    };
    this.setQuote = function(q)
    {
        this.quote = q;
        this.state = this.PREQUOTE;
        this.previousOffset = -1;
    };

    this.nextInt = function()
    {
        if (this.state == this.FILEEND)
            return null;
        var x = parseInt(this.nextElement());
        if ('' + x == 'NaN')
            return null;
        return x;
    };
    this.nextFloat = function()
    {
        return parseFloat(this.nextElement());
    };

    this.beyong = function(x)
    {
        if (x == null || this.index == null || x.length != this.index.length)
        {
            return false;
        }
        for (var k = x.length - 1; k >= 0; k--)
            if (this.index[k] < x[k])
                return true;
        return false;
    };
    this.elementAt = function(x)
    {
        while (this.beyong(x))
        {
            this.nextElement();
        }
        return this.nextElement();
    };
    this.hasSeparate = function(v)
    {
        for (var i = 0; i < this.numSeparates; i++)
        {
            for (var j = 0; j < this.separates[i].length; j++)
                if (v.indexOf(this.separates[i].charAt(j)) >= 0)
                    return true;
        }
        return false;
    };
    this.compose = function(v)
    {
        if (v == null)
            return v;
        if (this.hasSeparate(v))
            return this.quote + this.doubleQuote(v) + this.quote;
        return v;
    };

    this.doubleQuote = function(v)
    {
        var j = v.indexOf(this.quote);
        if (j == -1)
            return v;
        if (j == v.length - 1)
            return v + this.quote;
        return v.substring(0, j + 1) + this.quote + this.doubleQuote(v.substring(j + 1));

    };
    this.setStr = function(x, v, ifadd)
    {
        if (x == null || this.index == null || x.length != this.index.length || this.str == null)
        {
            return;
        }
        this.reset();
        while (this.beyong(x))
        {
            this.nextElement();
        }

        v = this.compose(v);
        if (ifadd == false)
        {
            var ll = this.previousOffset + 1;
            this.str = this.str.substring(0, ll) + v + this.str.substring(this.previousOffset);
        }
        else if (this.previousOffset > -1)
        {
            this.str = this.str.substring(0, this.previousOffset + 1) + v + this.separates[0].charAt(0) + this.str.substring(this.previousOffset + 1);
        }
        else
        {
            this.str = v + this.separates[0].charAt(0) + this.str;
        }
    };

    this.nextRow = function()
    {

        if (this.state == this.FILEEND || this.state == this.ERROR || this.str == null)
            return null;
        var v = new Array();
        do
        {
            v[v.length] = this.nextElement();
        }
        while (this.state == this.DIMENSIONEND[0]);

        return v;
    }
    this.nextMatrix = function(ignoreblank)
    {

        if (this.state == this.FILEEND || this.state == this.ERROR || this.str == null)
            return null;
        var v = new Array();
        do
        {
            var y = this.nextRow();
            if (y.length > 1 || y[0] != null && y[0] != '' || ignoreblank == null || ignoreblank == false)
                v[v.length] = y;

        }
        while (this.state == this.DIMENSIONEND[1]);
        return v;
    }
    this.tohtml = function()
    {
        var x = this.nextMatrix();
        var num = [];
        for (var j=0; j < x[0].length+10; j++)
        {
            num[j] = true;
            if (x.length < 2) num[j] = false;
            for (var i=1; i < x.length; i++)
            {
                if (j >= x[i].length) continue;
                if (x[i][j]!=null && x[i][j]!='' && isNaN(x[i][j]))
                {
                    num[j] = false; break;
                }
            }
        }
        var s = '<table border=1 style="border-collapse:collapse" >';
        for (var i = 0; i < x.length; i++)
        {
            s += "<tr>";
            for (var j = 0; j < x[i].length; j++)
            {
                var sp=1; for (var k=j+sp; k < x[i].length && x[i][k] == null; k++,sp++);
                s += "<td " + (num[j]?"align=right ":"align=left ") + ((sp==1)?"":"colspan=" + sp) + ">" + x[i][j] + '</td>';
            }
            s += "</tr>";
        }
        return s + "</table>";
    }
}

function getJsParam(js, params)
{
    var scripts = document.getElementsByTagName("script");
    var sn, dn = null, args = null;
    for (var i = 0, len = scripts.length; i < len; i++)
    {
        var src = scripts[i].getAttribute("src");
        if (!src)
            continue;
        var x = src.split(/\?/);
        var url = x[0];
        args = x[1];
        if (args && url.indexOf(js) >= 0)
            break;
    }
    if (!args)
        return null;
    var argv = args.split(/&/);
    var ans = [];
    for (var i = 0; i < params.length; i++)
    {
        var argValue = null;
        for (var j = 0, argc = argv.length; j < argc; j++)
        {
            var pair = argv[j].split("=");
            if (pair[0] == params[i])
            {
                argValue = pair[1];
                break;
            }
        }
        ans[ans.length] = argValue;
    }

    return ans;
}

function dochangepic()
{
    window.open(saveredourl, 'w' + tstmp);
}

function delnotusedattach(x)
{
    if (x != null && x != '')
    {
        savedredourl = "UploadChangePic?dellist=" + encodeURIComponent(x);
        postopen(savedredourl, 'w' + tstmp);
        myprompt(textmsg[1306], null, null, textmsg[1635]);
    }
}

 
    

 
 
function gohome1()
{
    var b = (indexwindow!=null);
   
    if (b)
    { 
        myprompt(indexwindow.document.title);
        window.blur();
       // opener.focus();
       // indexrealClose();
         
    } 
    else
    {
       var x = document.location.toString().replace(/[^\/]+$/,'');
       indexwindow = open(x,'_blank');
    }
}

//notifyopenertodie();

function weekdaynamestr(s)
{
    var y = '';
    var x = textmsg[830].split( "" );
    var z = "NMTWRFS".split( "" );
    for (var i = 0; i < x.length; i++)
    {
        y += "<option value=\"" + x[i] + "\"";
        if (s == x[i] || s == z[i])
            y += " selected ";
        y += ">" + x[i] + "</option>";
    }
    if (s == null)
        return "<option value=\"\"></option>" + y;
    return  y;
}
function readweekhourmin(k, i)
{
    var x = document.getElementById('weekhourminsel' + k + i);
    return x.options[x.selectedIndex].value;
}
function hourminnumstr(m, n)
{
    var y = '';
    for (var i = 0; i < m; i++)
    {
        var xx = '' + i;
        if (i < 10)
            xx = '0' + i;
        y += "<option value=\"" + xx + "\"";
        if (xx == n || xx == '0' + n)
            y += " selected ";
        y += ">" + xx + "</option>";
    }
    if (n == null)
        return "<option value=\"\" selected ></option>" + y;
    return y;
}
function showtimeslots(sel, cl, firsttime)
{
    var cr = 0;
    if (datapresentformat == 'DataTable')
    {
        cr = rr;
        var v = sel.value;
    }
    else
    {
        var l = sel.selectedIndex;
        var v = '';
        if (l > -1)
            v = sel.options[l].text;
    }
    var s = v.split(/,/);
    var k = 0;
    var heading = textmsg[1360].split(/@/);
    var x = '<table style="-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border-color:#d0d0c0;border-collapse:collapse;background-color:white" border=1 cellspacing=1 cellpadding=2 ><tr bgcolor=#eee ><td>' + heading[0] + "</td><td colspan=3>" + heading[1] + "</td><td></td><td colspan=3>" + heading[2] + "</td></tr>";
    for (var i = 0; i < s.length && v != ''; i++)
    {
        var wd = s[i].replace(/([0-9])/, '@$1').split(/@/);
        if (wd.length < 2)
            continue;

        var y = wd[0].split( "" );
        var z = wd[1].replace(/^\s+/, '').replace(/\s+$/, '').split(/[^0-9]+/);

        for (var j = 0; j < y.length; j++)
        {

            if (textmsg[830].indexOf(y[j]) == -1 && "NMTWRFS".indexOf(y[i]) == -1 || z.length != 4)
                continue;
            x += "<tr><td><select id=weekhourminsel" + k + "0 >" + weekdaynamestr(y[j]) + "</select></td><td><select id=weekhourminsel" + k + "1>"
                    + hourminnumstr(24, z[0]) + "</select></td><td>:</td><td><select id=weekhourminsel" + k + "2>"
                    + hourminnumstr(60, z[1]) + "</select></td><td> - </td><td><select id=weekhourminsel" + k + "3>"
                    + hourminnumstr(24, z[2]) + "</select></td><td>:</td><td><select id=weekhourminsel" + k + "4>"
                    + hourminnumstr(60, z[3]) + "</select></td></tr>";
            k++;
        }
    }
    for (; k < 5; k++)
    {
        x += "<tr><td><select id=weekhourminsel" + k + "0>" + weekdaynamestr() + "</select></td><td><select id=weekhourminsel" + k + "1>"
                + hourminnumstr(24) + "</select></td><td>:</td><td><select id=weekhourminsel" + k + "2>"
                + hourminnumstr(60) + "</select></td><td> - </td><td><select id=weekhourminsel" + k + "3>"
                + hourminnumstr(24) + "</select></td><td>:</td><td><select id=weekhourminsel" + k + "4>"
                + hourminnumstr(60) + "</select></td></tr>";
    }
    x += "<tr><td colspan=8 align=center><input class=OrangeButton style=text-align:center;width:" + Math.round(4.5 * font_size) + "px onclick=\"setbacktimeslots(" + cl + ")\" value=\"" + textmsg[829] + "\" ><input class=GreenButton style=text-align:center;width:" + Math.round(4.5 * font_size) + "px onclick=canceltimeslots(" + cl + ")  value=\"" + textmsg[18] + "\" ></td></tr></table>";


    if (firsttime == 1)
    {
        sel.onchange = function()
        {
            if (datapresentformat == 'DataTable')
            {
                var nm = this.name.split(/_/);
                UT(parseInt(nm[0]), parseInt(nm[1]));
                showtimeslots(this, parseInt(nm[1]));
            }
            else
            {
                var nm = this.name;

                var cll = 0;
                for (; cll < numCols && fields[cll] != nm; cll++)
                    ;

                UT(counter, cll);
                showtimeslots(this, cll);
            }
        }
    }
    else
    {
        myprompt(x, null, null, labels[cl]);
        var xy = findPositionnoScrolling(sel);
        promptwin.style.left = xy[0] + 'px';
        if (xy[1] + 50 < 0) xy[1] = -50;
        promptwin.style.top = (xy[1] + 50) + 'px';
        promptwin.style.width = '200px';

    }
}



function canceltimeslots(cl)
{
    setv(counter, cl, mat[counter][cl]);
    closeprompt();
}

function newformele(nm,vl,dis)
{
    var z = formselementbyname(fsnd, nm);
    if ( z == null)
    {
        var el = document.createElement('input');
        el.type = 'hidden';
        el.name = nm;
        el.value = vl;
        fsnd.appendChild(el);
    }
    else
    {
       z.value = y;
       if (dis!=null) z.disabled = dis;
    }

}

function setbacktimeslots(cl)
{
    var did = [];
    for (var k = 0; k < 5; k++)
    {
        did[k] = false;
    }
    var y = '';
    var mins = 0;
    var min = 0;
    for (var k = 0; k < 5; k++)
    {
        if (did[k])
            continue;
        var q = [readweekhourmin(k, 0), readweekhourmin(k, 1), readweekhourmin(k, 2), readweekhourmin(k, 3), readweekhourmin(k, 4)];
        if (q[0] == '' || q[1] == '' || q[2] == '' || q[3] == '' || q[4] == '')
            continue;
        var z = q[0];
        min = (parseInt(q[3]) * 60 + parseInt(q[4]) - parseInt(q[1]) * 60 + parseInt(q[2]));
        mins += min;
        for (var j = k + 1; j < 5; j++)
        {
            if (readweekhourmin(j, 1) == q[1]
                    && readweekhourmin(j, 2) == q[2]
                    && readweekhourmin(j, 3) == q[3]
                    && readweekhourmin(j, 4) == q[4])
            {
                z += readweekhourmin(j, 0);
                did[j] = true;
                mins += min;
            }
        }
        if (y != '')
            y += ",";
        y += z + q[1] + ":" + q[2] + "-" + q[3] + ":" + q[4];

    }
    var X = textmsg[830].split( "" );
    var Y = y.replace(X[0], "N").replace(X[1], "M").replace(X[2], "T").replace(X[3], "W").replace(X[4], "R").replace(X[5], "F").replace(X[6], "S");
    if (datapresentformat == 'DataForm')
    {
        var sel = ele(counter, cl);
        var j = 0;
        for (; j < sel.options.length; j++)
        {
            if (sel.options[j].value == y || sel.options[j].value == Y)
            {
                sel.selectedIndex = j;
                break;
            }
        }
        closeprompt();
        if (j == sel.options.length)
        {
            var xx = '' + j;
            if (j < 10)
                xx = '0' + j;
            sel.options[j] = new Option(y, xx);

            sel.selectedIndex = j;
            newformele('newtimeslots',y);
            newformele('rdap','timeslotadd');
            newformele('subdb',subdb);

            mins = Math.ceil(mins / 60);
            newformele('hours','' + mins);

            formnewaction(fsnd, 'DataUpdate');
            // formnewaction(fsnd, 'Echo');
            fsnd.target = 'w' + tstmp;
            //fsnd.target = '_blank'
           visual(fsnd);
 fsnd.submit();
            if (subdb != '')
            {
                formselementbyname(fsnd, 'subdb').value = '';
                setTimeout(fsnd.submit, 1500);
            }

        }
    }
    else
    {

        var j = 0;
        for (; j < NUMROWS; j++)
        {
            if (retrv(j, cl) == y || retrv(j, cl) == Y)
            {
                break;
            }
        }
        if (j < NUMROWS)
        {
            myprompt(y + "" + textmsg[3]);
        }
        else
        {
            setv(rr, cl, y);
            closeprompt();
        }
    }
}

function insertpicundera(m)
{
    var td = activealink.parentNode;
    while (td.tagName.toLowerCase() != 'tr')
        td = td.parentNode;
    var nc = 0;
    for (var jj = 0; jj < td.cells.length; jj++)
    {
        var zz = td.cells[jj].colSpan;
        if (isNaN(zz + ''))
            nc++;
        else
            nc += parseInt(zz);
    }

    var tbl = td.parentNode;
    if (tbl.tagName.toLowerCase() != 'table')
        tbl = tbl.parentNode;
    var st = tbl.rows[tbl.rows.length - 1].cells[0].style;
    var css = "";
    for (var x in st)
    {
        if (st[x] != '' && isNaN(x))
        {
            css += x.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() + ":" + st[x] + ";";
        }
    }
    //var ww = tbl.rows[tbl.rows.length - 1].bgColor;
    //var w1 = tbl.rows[tbl.rows.length - 1].cells[0].bgColor;
    var r = tbl.insertRow(-1);
    if (typeof(TBGCOLOR)!='undefined')
        r.bgColor = TBGCOLOR;
    else
        r.bgColor = 'transparent';
    var c = r.insertCell(0);
    var yy = tbl.rows[tbl.rows.length - 1].cells[0].className;
    if (yy != null && yy != '')
        c.className = yy;
    c.style.cssText = css.replace(/^csstext/i, '');
    c.colSpan = nc;

    //if (c.style.backgroundColor == null)
    {
        if (typeof(TBGCOLOR)!='undefined')
            c.style.backgroundColor = TBGCOLOR;
        else
        {
            c.style.backgroundColor ='transparent';
        }
    }
    var wd = c.offsetWidth;
    var wd1 = r.offsetWidth;
    if (wd < wd1)
        wd = wd1;
    var mg = m.parentNode.parentNode.nextSibling.cells[0].childNodes[0];
    if (mg.offsetWidth > wd)
        mg.width = wd - 4;
    c.appendChild(mg);
    closeprompt();
}
function loadpicresize(m)
{
    if (m.offsetWidth < promptwin.offsetWidth - 10)
        promptwin.style.width = (m.offsetWidth + 10) + 'px';

    if (m.offsetWidth < promptwin.offsetWidth - 14)
        m.style.width = (promptwin.offsetWidth - 10) + 'px';
    if (typeof( ResizeUploaded.goodposition) != 'undefined')
    ResizeUploaded.goodposition(m);
}
var Imagelet =
{
    fns2order : new Array(),
    fns2dim : new Array(),
    fn2s : new Array(),
    addImagelet: function(r, i)
    {
        var xs = r.split(/@/);
        Imagelet.fns2order[  xs[0] + "@" +  xs[1] ] = i;
        Imagelet.fns2dim[    xs[0] + "@" +  xs[1] ] = xs[2];
        var f=Imagelet.fn2s[ xs[1] ];
        if (f==null)
            Imagelet.fn2s[ xs[1] ]=  xs[0] + '_';
        else   if (('_'+f).indexOf('_'+xs[0]+'_')<0)
            Imagelet.fn2s[  xs[1]  ] +=  xs[0] + '_' ;
    },
    filldiv : function(code,fn)
    {
        var ns = Imagelet.fn2s[fn];
        if (ns == null) return;
        var ss = ns.replace(/_$/,'').split(/_/);
        for (var j=0; j < ss.length; j++)
        {
           var y =  ss[j] + '@' + fn;
           if (Imagelet.fns2order[y] == null || isNaN(Imagelet.fns2order[y])) continue;
           var ns = Imagelet.fns2dim[y].split(/_/);
           var ii = Imagelet.fns2order[y];

           for (var k=0; ; k++)
           {
               var d = document.getElementById(ii + '_' + ss[j] + '_' + k);
               if (d == null) break;
               d.style.backgroundImage = 'url(FileOperation?did=' + code + ')';
               d.style.backgroundPosition = '-'+ ns[0] + 'px -' + ns[1] + 'px';
               d.style.width = ns[2] + 'px';
               d.style.height = ns[3] + 'px';
           }
        }
    }
}
function openpicorfile(did, filename, alink)
{
    activealink = alink;
    var fn = filename.toLowerCase();
    if (typeof(ResizeUploaded)!='undefined' && (fn.indexOf('.gif') >= 0 || fn.indexOf('.jpg') >= 0 || fn.indexOf('.jpeg') >= 0 || fn.indexOf('.png') >= 0))
    {
        did = ResizeUploaded.goodopenurl(did,false);
        myprompt('<img src="' + did + '" style="margin:0px 0px 0px 0px" onload=loadpicresize(this)>', null, null, filename);
        var tbl = promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0];
        var td = tbl.rows[0].insertCell(1);
        tbl.rows[1].cells[0].style.padding = "0px 0px 0px 0px";
        tbl.rows[1].cells[0].colSpan = "3";
        var picwidth = tbl.rows[0].cells[0].childNodes[0].width;
        td.innerHTML = "<img width=" + picwidth + " height=" + picwidth + "   style=\"margin:0px 0px 0px 0px;float:left;border-radius:" +  (Math.round(picwidth/2)) + "px;width:" + picwidth + "px !important;cursor:pointer\" src=\"image/arrow.jpg\" onclick=\"insertpicundera(this)\" >"
    }
    else
    {
        var fsnd1 = document.getElementById("openfileform_id");
        if (fsnd1 == null)
        {
            fsnd1 = document.createElement("form");
            fsnd1.name = "openfileform";
            fsnd1.id = "openfileform_id";
            fsnd1.action = (did.indexOf('http')!=0?"FileOperation":did);
            fsnd1.method = 'post';
            fsnd1.target = "_blank";
            fsnd1.innerHTML = "<input type=hidden name=did><input type=hidden name=operation value=open>";
            document.body.appendChild(fsnd1);
        }
        fsnd1.did.value = did;
        formnewaction(fsnd1);
       visual(fsnd1);
 fsnd1.submit();
    }
}

var systemname = function()
{
    if (numcalls++ > 2000) return "";
    var ans = systemnamestr;
    if (ans !=null) return ans;

    if (opener!=window && typeof(opener) != 'undefined' && opener!=null&& onmydomain(opener) && typeof(opener.systemname)!='undefined' && opener.systemname!=null)
        ans = opener.systemname();
    if ( ans!=null) return ans;

    if (parent!=window && typeof(parent.systemname)!='undefined' && parent.systemname!=null)
        ans = parent.systemname();
    if  (ans!=null) return ans;

    if (parent!=window && parent.opener!=null&& onmydomain(parent.opener) && typeof(parent.opener.systemname)!='undefined' && parent.opener.systemname!=null)
        ans = parent.opener.systemname();
    if  (ans!=null) return ans;

    return null;
}
systemnamestr = systemname();
function narrowtable()
{
    if (datapresentformat == 'DataLongForm')
        for(Z=0;Z<numRows;Z++)
        {
            var tb=document.getElementById('Igdt'+Z+'_4');
            tb.width=null;
            for(r=0;r<tb.rows.length;r++)
            {
                tb.rows[r].cells[0].innerHTML=tb.rows[r].cells[0].innerHTML.replace(/&nbsp;/g,' ');
                tb.rows[r].cells[0].width='600';
            }
            for(c=1;c<tb.rows[0].cells.length;c++)
                tb.rows[0].cells[c].innerHTML='<nobr>' + tb.rows[0].cells[c].innerHTML + '</nobr>';
        }
}
function nonamefunc1()
{
    for(r=0;r<numRows;r++)
    {
        ele(r,2).style.width='180px';
        if(mat[r][1].indexOf('textmsg')==0 &&''+(x=parseInt(mat[r][1].replace(/[^0-9]/g,'')))!='NaN')
            setv(r,1,textmsg[x]);valuechanged[r]=false;
    }
}
function visual(f)
{
    var x = "name=" + f.name
    + "\naction=" + f.action
    + "\ntarget=" + f.target
    + "\nenc=" + f.enctype;
    
    if (f.target == '_self')
    {
        var el = document.createElement('input');
        el.name = 'targetisself';
        el.value= '11';
        el.type= 'hidden';
        f.appendChild(el);
    }
    for (var i=0; i < f.elements.length; i++)
        if (f.elements[i].name!='wcds')
        x += "\n"+ f.elements[i].name + "=" + f.elements[i].value;
    failedformsubmit = "document." + f.name + ".submit();";
    console.log(x);
}

function makeformhiddenele(f, nm, vl)
{
   if (f == null) return;
   var i;
   for (i=0; i < f.elements.length; i++)
   {
       if (f.elements[i].name == nm)
       {
           f.elements[i].value = vl;
           return;
       }
   }
   var el = document.createElement('input');
   el.name = nm;
   el.value = vl;
   el.type = 'hidden';
   f.appendChild(el);
}

function changerid(routine, oldid, newid, session, course, semester)
{
     if (typeof(cc) != 'undefined')
     {
         ccbeing = cc;
     }
     var nms = ["rdap", "subdb", "x", "OldId", "NewId", "Session", "CourseId", "Semester"];
     var vls = [ routine ,subdb ,routine, oldid, newid, session,   course,     semester];
     postopen('follows.jsp', nms, vls,  "w" + tstmp);

}
function  roolback()
{
    ele(rr,ccbeing).value = mat[rr][ccbeing];
    myprompt(textmsg[91]);
}
function  old2new()
{
    mat[rr][ccbeing] = retrv(rr,ccbeing);

    if (rdapname == 'assignedit')
    {
        parent.frames[0].refresh();
    }
}

function fff()
{
    popwin1=self.name;
    var sel=f1.displayformat;
  
    sel.options[1].className='selectoption';
    var sels = sel.selectedIndex;
    var xx=sel.options[0].text;
    var selx=sel.selectedIndex;
    if(retrv(0,0)=='0')
    {
        document.form1.Poster.value='Myself';
        f1.displayformat.options[0]=new Option(xx,'announcepage.jsp');
    }
    else
    {
        document.form1.Poster.value='';
        f1.displayformat.options[0]=new Option(xx,'announcepageother.jsp');
    }
    f1.displayformat.options[0].className='selectoption';
    sel.selectedIndex=selx;

}

function morecoursesel(t)
{
   
    if (t!=null && t.replace(/ /g,'') != '') {
    var ts = t.split(/,/);
    for (var i=0; i < ts.length; i++)
    {
        var isone = false;
        for (var j=0; j < numRows; j++)
        {
            if (ts[i] == retrv(j,0))
            {
                isone = true;
                break;
            }
        }
        if (!isone)
        {
            var y = ts[i].split(/\|/);
            document.form1.checkbox[numRows].checked = true;
           mat[numRows] = new Array();

           mat[numRows][0] = ts[i];

            setv(numRows, 0, ts[i]);
           mat[numRows][1] = y[0];

            setv(numRows, 1, y[0]);
           mat[numRows][2] = y[1];

            setv(numRows, 2, y[1]);
            mat[numRows][5] ='DataFormHTML?rdap=Syllabusi';

            setv(numRows, 5, 'DataFormHTML?rdap=Syllabusi');
             mat[numRows][6] = parent.frames[0].document.form1.semester.value;

            setv(numRows, 6, mat[numRows][6]);
            mat[numRows][4] = y[2];

            setv(numRows++, 4, y[2]);

        }
    }
    }
  
    var z = ele(0,7).outerHTML.replace(/width:[ ]?100px/,'').replace(/name=.0_7./, 'name=depts id=depttr style="width:99%;border:1px #60606 solid" onchange="change2asemester(this)" ' );
    var inss = textmsg[1647].split("\n");
    var ins0 = inss[0];
    var ins1 = '';
     
    if (parent.frames[0].getstudentdriven())
        ins1 = inss[1];
    var tt = document.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('table')[0];
    var ttr = tt.insertRow(1);
    var ttd = ttr.insertCell(0);
    ttd.align='center';
    ttd.style.padding = '3px 3px 3px 3px';
    ttd.innerHTML = '<div id=newsession><table align=center ><tr><td colspan=2 class=outset1 style=width:500px;text-align:left>'+ ins0 + ins1 + (ins1==''?'':('<input type=button class=GreenButton style=width:80px;overflow:show value="' + textmsg[610] + '" onclick=addasession()>')) + '</td></tr><tr ><td  valign=top  style="background:' + gradientbg + ';background-color:' + IBGCOLOR +';color:#DDCC11;width:110px;font-weight:700;text-shadow:-1px -1px #060606"><nobr>' +textmsg[1815] + '</nobr></td><td style="border:1px #505050 solid">' +  z + "</td></tr></table></div>";
    for (var j=0; j < NUMROWS; j++)
    {
        ele(j,7).style.visibility = 'hidden';
        ele(j,7).style.width = '1px';
    }
}

function writehint()
{
    addasession(1);
}
function change2asemester(sel)
{
    var v = sel.options[sel.selectedIndex].value;
    if (v!='new')
    {
        parent.frames[0].dodept(v,0);
        return;
    }
}
function change1semester(sel)
{
    if (sel.selectedIndex == sel.options.length-1)
    {
        document.fadds.anewsemester.style.visibility = 'visible';
    }
}
function addasession(t)
{
    var sel  = document.getElementById('depttr');
    var selstr = '';
    for (var j=0; j < options[7].length; j++)
        selstr += '<option value="' +  options[7][j]  + '" ' + (j==0?'selected':'') + '>' + captions[7][j] + '</option>';
    selstr += '<option value="new">' + textmsg[925] + '</option>';
     
    var str = "<form rel=opener name=fadds method=post action=follows.jsp target=w" + tstmp +" style=\"margin:0px 0px 0px 0px\"  ><table   align=center style=\"width:" + (document.getElementById('maintbl').offsetWidth-8) +"px;margin:4px 4px 4px 4px\"><tr><td colspan=2> </td></tr><tr height=80 valign=middle align=left><td colspan=2>" + textmsg[1808] + (t==null?'':('<br>(<font color=purple>' +textmsg[1817] + '</font>)') ) +  "</td></tr>"
         //   + '<tr><td align=center colspan=2 style=font-weight:700;font-size:30px>' + textmsg[1813] + '</td></tr>'
            + '<tr><td style="border-radius:3px;background:' + gradientbg + ';background-color:' + IBGCOLOR +';color:#DDCC11;width:110px;font-weight:700;text-shadow:-1px -1px #060606">' + textmsg[152] + '</td>'
            + '<td><input class=left style="width:99%;color:#505050;border:1px rgb(176,176,176) solid;border-radius:3px" value="' + textmsg[1809] + '" onfocus=clearhint(this) onblur=rehint(this,1809) name=courseid></td></tr>'
            + '<tr><td style="border-radius:3px;background:' + gradientbg + ';background-color:' + IBGCOLOR +';color:#DDCC11;width:110px;font-weight:700;text-shadow:-1px -1px #060606">' + textmsg[604] + '</td>'
            + '<td><input class=left style="width:99%;color:#505050;border:1px rgb(176,176,176) solid;border-radius:3px" value="' + textmsg[1810] + '" onfocus=clearhint(this) onblur=rehint(this,1810) name=coursetitle></td></tr>'
            + '<tr><td style="border-radius:3px;background:' + gradientbg + ';background-color:' + IBGCOLOR +';color:#DDCC11;width:110px;font-weight:700;text-shadow:-1px -1px #060606">' + textmsg[1510] + '</td>'
            + '<td><input class=left style="width:99%;color:#505050;border:1px rgb(176,176,176) solid;border-radius:3px" value="' + textmsg[1811] + '" onfocus=clearhint(this) onblur=rehint(this,1811)  name=sessionname></td></tr>'
            + '<tr><td style="border-radius:3px;background:' + gradientbg + ';background-color:' + IBGCOLOR +';color:#DDCC11;width:110px;font-weight:700;text-shadow:-1px -1px #060606"><nobr>' + textmsg[1812] + '</nobr></td>'
            + '<td><input class=left style="width:99%;color:#505050;border:1px rgb(176,176,176) solid;border-radius:3px"  value="' + textmsg[750] +':hsmith12@abc.edu" onfocus=clearhint(this) onblur="rehint(this,\'' + textmsg[750] +':hsmith12@abc.edu\')"  name=email></td></tr>'
            + '<tr><td valign=top style="border-radius:3px;background:' + gradientbg + ';background-color:' + IBGCOLOR +';color:#DDCC11;width:110px;font-weight:700;text-shadow:-1px -1px #060606"><nobr>' + textmsg[1815] + '</nobr></td>'
            + '<td><select id=depts style="width:100%;color:#505050;border:1px rgb(176,176,176) solid;border-radius:3px" onchange=change1semester(this) >'+  selstr + '</select></td></tr>'  
            + '<tr><td   align=left></td><td><input  type=text class=left style="visibility:hidden;border:1px rgb(176,176,176) solid;border-radius:3px;width:99%;color:#505050" '
            + " name=anewsemester value=\"" + textmsg[1816] + '" onfocus=clearhint(this) onblur=rehint(this,1816) ></td></tr><tr><td colspan=2 align=center><input type=hidden name=url><input type=hidden name=uid><input type=button class=OrangeButton style=width:75px value="' + textmsg[61] + '" onclick=addasessionsubm()><input type=button class=OrangeButton style=width:75px value="' + textmsg[18] + '" onclick=notaddasession()></td></tr>'
            + '</table><input type=hidden name=x value=sessionadd></form>';
            var dv = document.getElementById('newsession');
            dv.innerHTML = str;
            dv.className = 'outset1';
        //myprompt(str,null,null,textmsg[1813])
            //promptwin.style.width = "450px";
}
function notaddasession()
{
    var z = ele(0,7).outerHTML.replace(/width:[ ]?1px/,'').replace(/name=.0_7./, 'name=depts id=depttr style="width:99%;border:1px #60606 solid" onchange="change2asemester(this)" ' ).replace(/hidden/i,'visible');
    
    var inss = textmsg[1647].split("\n");
    var ins0 = inss[0];
    var ins1 = inss[1];
    var dv = document.getElementById('newsession'); 
   dv.innerHTML = '<table align=center ><tr><td colspan=2  style=width:500px;text-align:left>'+ ins0 + ins1 + (ins1==''?'':('<input type=button class=GreenButton style=width:80px;overflow:show value="' + textmsg[610] + '" onclick=addasession()>')) + '</td></tr><tr ><td  valign=top  style=background:' + gradientbg.replace(/\(/,'(to right,') + ';color:#DDCC11;width:110px;font-weight:700><nobr>' +textmsg[1815] + '</nobr></td><td style="border:1px #505050 solid">' +  z + "</td></tr></table>";
    
}
function clearhint(txt)
{
  
   if (''+txt.style.color=='rgb(80, 80, 80)' ||''+txt.style.color=='#505050')
   {
       txt.style.color = 'rgb(0, 0, 0)';
       txt.value = '';
   }
    
}
function rehint(txt,j)
{
    
        txt.value = txt.value.replace(/^[ ]+/,'').replace(/[ ]+$/,'').replace(/[ ]+./,' ');
        if (txt.value == '')
        {
            if (typeof(j)=='number')
                txt.value = textmsg[j];
            else
                txt.value = j;
            txt.style.color = '#505050';
        }
     
}
function addasessionsubm()
{
    if (document.fadds.courseid.value.length<2 || document.fadds.courseid.style.color=='rgb(80, 80, 80)')
    {
        myprompt(textmsg[152] + ":" + textmsg[1814]);
        return;
    }
    if (document.fadds.coursetitle.value.length<3 || document.fadds.coursetitle.style.color=='rgb(80, 80, 80)')
    {
        myprompt(textmsg[604] + ":" + textmsg[1814]);
        return;
    }
    if (document.fadds.sessionname.value.length<2 || document.fadds.sessionname.style.color=='rgb(80, 80, 80)')
    {
        myprompt(textmsg[1510] + ":" + textmsg[1814]);
        return;
    }
    document.fadds.email.value = document.fadds.email.value.replace(/^[ ]+/,'').replace(/[ ]+$/,'').replace(/[ ]+./,' ');
    
    if (document.fadds.email.value.length<12 || document.fadds.email.value.indexOf('@')<=4)
    {
        myprompt(textmsg[1812] + ":" + textmsg[1814]);
        return;
    }
    document.fadds.url.value = theurl.replace(/DataPicker.*/,'');
    document.fadds.action = "follows.jsp";
    document.fadds.target = "w" + tstmp;
    visual(document.fadds);
    document.fadds.submit();         
}
function Message(tid, sid, sname, rid, code, msg)
{
    this.j = 0;
    this.parse = function(s)
    {
        var i = s.indexOf("@", this.j);
        var x = "";
        if (i < 0)
        {
            this.valid = false;
        }
        else
        {
            x = s.substring(this.j, i);
            this.j = i + 1;
        }
        return x;
    }

    this.valid = true;
    if (code == null && tid != '')
    {
        var s = tid;
        var j = s.length - 1;
        while (j >= 0 && (s.charAt(j) == '\n' || s.charAt(j) == '\r'))
            j--;

        if (j == 0)
            s = '';
        else
            s = s.substring(0, j + 1);
        //"" + this.serial + " " + this.tid + " " + this.sek + " "

        this.serial = parseInt(this.parse(s));
        this.num = parseInt(this.parse(s));
        this.tid = this.parse(s);
        this.sid = this.parse(s);
        this.sname = this.parse(s).replace(/_/g, ' ');
        this.rid = this.parse(s);
        this.code = this.parse(s);
        this.time = this.parse(s);
        this.msg = s.substring(this.j);
        this.j = 0;
    }
    else
    {
        this.tid = tid;
        this.sid = sid;
        this.sname = sname;
        this.rid = rid;
        this.code = code;
        this.msg = msg;
        this.num = 0;
        this.serial = 0;
    }
    this.toString = function()
    {
        return  this.serial + " " + this.num + " " + this.tid + " " + this.sid + " " + this.sname.replace(/ /g, '_') + " " + this.rid + " " + this.code + " " + this.time + " " + this.msg;
    }
}
var Msg =
{
     app:'',
     tid:'',
     topic:'',
     sek:'',
     rid:'',
     sid:'',
     msg:'',
     code:'',
     sname:'',
     stoken:'',
     oldonunload : window.onunload,
     timeoutInMin:120,
    switchn:0,
    queued :[],
    statel: 0,
    lastsent: 0,
    url:'',
    sequence:0,
    tstmp:Math.round(Math.random()*10000000),
    needmore:true,
    hexd : '0123456789abcdef'.split( "" ),
    sendingqueue:[],
    tail:-1,
    front:-1,
    maximum:100,
    sendingstatus:'sent',

    xmlhttp:null,

    handleget: function (x)
    {
       // myprompt(x);

    },
    handlepost: function (x)
    {
        //myprompt(x);
    },
    send0 : function()
    {
         formnewaction(Msg.fmsgsend);
         visual(Msg.fmsgsend);
         Msg.fmsgsend.submit();
    },
     resend : function()
     {
         Msg.sendingstatus = 'sent';
         Msg.send();
     },

    getpacket: function(packet)
    {
        var s = '';
        if (packet!=null)
        {
        if (typeof(packet.app)!='undefined') {
            Msg.app = packet.app;  }
        if (typeof(packet.tid)!='undefined'){
            Msg.tid = packet.tid;  }
        if (typeof(packet.sek)!='undefined'){
            Msg.sek = packet.sek;  }
        if (typeof(packet.rid)!='undefined'){
            Msg.rid = packet.rid;   }
        if (typeof(packet.sid)!='undefined'){
            Msg.sid = packet.sid;  }
        if (typeof(packet.msg)!='undefined'){
            Msg.msg = packet.msg;  }
        if (typeof(packet.code)!='undefined'){  Msg.code = packet.code;  }
        if (typeof(packet.sname)!='undefined'){ Msg.sname = packet.sname ;  }
        if (typeof(packet.stoken)!='undefined'){
            Msg.stoken = packet.stoken; }

       }

   },


     process:function()
    {
        if (Msg.xmlhttp.readyState == 4 && Msg.xmlhttp.status == 200&& Msg.xmlhttp.responseText!='')
        {
            var q = Msg.xmlhttp.responseText ;
            Msg.handleget(q);
            if (Msg.needmore)
            Msg.listen();
        }
    },

   fmsgsend:null,
   init : function (packet)
   {
       Msg.getpacket(packet);
       window.onunload = function(){ if (Msg.oldonunload!=null) Msg.oldonunload(); Msg.quit();}
       Msg.xmlhttp =  newajax();
       Msg.xmlhttp.onreadystatechange =  Msg.process;
       if (typeof(tstmp)!='undefined') Msg.tstmp = tstmp;
       for (var i=0; i < window.frames.length; i++)
        if (window.frames[i].name.replace(/w[0-9]+/,'')=='')
        {
            Msg.tstmp = parseInt(window.frames[i].name.replace(/w/,''));
            break;
        }

        if (i==window.frames.length)
        {
           myprompt("The page does not have hidden tiny iframe" +window.frames.length)
          //  var fr = document.createElement('i1111frame');
          //  fr.name = 'w' + Msg.tstmp;
          //  fr.width='1'; fr.height = '1';
         //   document.body.appendChild(fr);
        }
       var fsnd = document.createElement("form");
        fsnd.name = "fmsg";
        fsnd.action = "Msgsend";
        fsnd.method = 'post';
        fsnd.target = 'w' + Msg.tstmp;
        fsnd.innerHTML = "<input type=\"hidden\" name=\"stoken\" value=\"\">"
                + "<input type=\"hidden\" name=\"app\" value=\"\">"
                + "<input type=\"hidden\" name=\"tid\">"
                + "<input type=\"hidden\" name=\"topic\">"
                + "<input type=\"hidden\" name=\"sid\">"
                + "<input type=\"hidden\" name=\"sname\">"
                + "<input type=\"hidden\" name=\"rid\">"
                + "<input type=\"hidden\" name=\"code\">"
                + "<input type=\"hidden\" name=\"msg\">"
                + "<input type=\"hidden\" name=\"sek\" value=\"\">";
        document.body.appendChild(fsnd);
        Msg.fmsgsend = fsnd;


    },
    lastlisten:0,

    listen: function ()
    {
        lastlisten = (new Date()).getTime();
        Msg.url = "Msgrecev?" + ((Msg.switchn++) % 100) + "&sek=" + Msg.sek + "&sid=" + Msg.sid + "&app=" + Msg.app;
        var url =  Msg.getURL() + '&time='+ lastlisten;
        if (typeof(orgnum)!='undefined') url += "&orgnum=" + (orgnum%65536);
        Msg.xmlhttp.open('GET', url ,true);
        Msg.xmlhttp.send();
    },
    rtohex: function(x)
    {
        if (x==null) return null;
        var  y = '';
        for (var  i=0; i < x.length/4 ; i++)
        {
            var  j =  parseInt(x.substring(i*4,(i+1)*4), 16);
            var c = String.fromCharCode(j);
            y +=(c);
        }
        return y;
    },

    tohex: function(j)
    {
        var z = '';
        for (var k=0; k < 4; k++)
        {
        var y = j % 16;
        z = Msg.hexd[y] + z;
        j = j >> 4;
        }
        return z;
    },
    getURL:function(){return Msg.url;},
    hex: function(ms)
    {
        if (ms == null) return null;
        var x = '';
        for (var j=0; j < ms.length; j++)
            x += Msg.tohex(ms.charCodeAt(j))
        return x;
    },

    append: function(x,y)
    {
        return x +'=' + y +'&';
    },

    send:function(packet)
    {
         if (Msg.fmsgsend == null) return;
         if (packet!=null)
         {
             Msg.tail = (Msg.tail + 1) % Msg.maximum;
             Msg.sendingqueue[Msg.tail] = packet;
         }
         if (Msg.sendingstatus == 'sending')
         {

             return;
         }
         Msg.front = (Msg.front + 1) % Msg.maximum;
         packet = Msg.sendingqueue[Msg.front];
         if (packet == null)
         {
             Msg.front = (Msg.front - 1) % Msg.maximum;
             return;
         }
         Msg.getpacket(packet);

         Msg.sendingqueue[Msg.front] = null;

         Msg.sendingstatus = 'sending';
         Msg.fmsgsend.app.value = Msg.app;
         Msg.fmsgsend.sek.value = Msg.sek;
         Msg.fmsgsend.tid.value = Msg.tid;
         Msg.fmsgsend.topic.value = Msg.topic;
         Msg.fmsgsend.sid.value = Msg.sid;
         Msg.fmsgsend.rid.value = Msg.rid;
         Msg.fmsgsend.sname.value = Msg.sname;
         Msg.fmsgsend.code.value = Msg.code;
         Msg.fmsgsend.stoken.value = Msg.stoken;
         Msg.fmsgsend.msg.value = Msg.msg;
         if (Msg.code == 'new')
         {
             Msg.topic = Msg.msg;
             Msg.fmsgsend.topic.value = Msg.msg;
         }
       /* var url = "Msgsend?" + (Msg.switchn++) + "&sek=" + Msg.sek + "&app=" + Msg.app + "&tid=" + Msg.tid
        + "&sid=" + Msg.sid + "&rid=" + Msg.rid + "&sname=" + Msg.hex(Msg.sname) + "&code=" + Msg.code + "&stoken=" + Msg.stoken
 +"&msg=" + Msg.hex(Msg.msg);*/
         formnewaction(Msg.fmsgsend);
         visual(Msg.fmsgsend);
         Msg.fmsgsend.submit();

    },

    get:function(x)
    {
       return eval("Msg." + x + "");
    },
    set:function(x,y)
    {
      eval("Msg." + x + "='" + y + "'");
    },

    quit:function()
    {
        //if (Msg.tid == '' || Msg.msg == '') return;
        if (parent.parent.opener!=null&& onmydomain(parent.parent.opener) && parent.parent.opener.Msg)
        {
           parent.parent.opener.Msg.send({app:Msg.app,sek:Msg.sek, tid:Msg.tid, code:'unsubs'});
        }
        else if (parent.frames[0]!=null && parent.frames[0].Msg)
        {
           parent.frames[0].Msg.send({app:Msg.app,sek:Msg.sek, tid:Msg.tid, code:'unsubs'});
        }
        else if (parent.opener!=null && onmydomain(parent.opener)&& parent.opener.Msg)
        {
           parent.opener.Msg.send({app:Msg.app,sek:Msg.sek, tid:Msg.tid, code:'unsubs'});
        }
        else
        {
             Msg.send({app:Msg.app,sek:Msg.sek, tid:Msg.tid, code:'unsubs'});
        }
    }
};
if (typeof(orgnum)!='undefined')
{
    SetCookie("orgnum", ""+orgnum);
   
}
function warning(mg)
{
    if (mg.offsetWidth < 300)
    {
        document.getElementById('warning0').innerHTML = textmsg[1864];
    }
}
function qrlink(nlg)
{
    if (parent!=window && parent.frames[0].document.location.toString().indexOf("studentindex.jsp")==0)
    {

    }
    var theurl1 = "";
    if (typeof(theurl) == 'undefined' &&  parent != window)
    {
        theurl1 = parent.parent.parent.document.location.toString();
        myprompt("<div id=warning0> </div><br><img src=\"Qrlink?url=" + Msg.hex(theurl1) + (nlg==null?'':('&nlg=1')) + "\" onload=warning(this) style=text-align:center>",null,null,textmsg[1860]);
    }
    else if (typeof(theurl) != 'undefined')
    {
        var j = theurl.lastIndexOf('/');
        if (parent == window)
        {
            theurl1 = theurl;
        }
        else
        {
            var url = parent.parent.parent.document.location.toString();
            var k = url.lastIndexOf('/');
            theurl1 = theurl.substring(0,j) + url.substring(k);
        }
        myprompt("<div id=warning0> </div><img  style=alignment:center src=\"Qrlink?url=" + Msg.hex(theurl1) + (nlg==null?'':('&nlg=1'))  + "\" onload=warning(this)  style=text-align:center>",null,null,textmsg[1860]);

    }
    else
    {
        myprompt("<img src=\"image/qrcode.gif\" >");
    }
}
var justopenedwindowhandle;
function mywindowref()
{
    if (window.opener&& onmydomain(opener) && window.opener.justopened)
      window.opener.justopened(window);
    else if (parent!=window && parent.justopened)
      parent.justopened(window);
}
var pstsubmfm = null;
function justopened(win,sucess)
{
   justopenedwindowhandle = win;
   if (sucess==null || sucess==true)
   {
       if (pstsubmfm!=null && pstsubmfm.name!='postform')
       document.body.removeChild(pstsubmfm);
       pstsubmfm = null;
   }
   
}
function realClose()
{
    var win=window.open("","_top","","true");
    win.opener=true;
    win.close();
}
function redoexpired(win)
{
    try
    {
        eval(failedformsubmit);
    }catch(e){
        alert(failedformsubmit);
    }
}
function postopen()
{
    if (postopen.arguments.length == 4)
    {
       var  url = postopen.arguments[0];
       var  nms = postopen.arguments[1];
       var  vls = postopen.arguments[2];
       var  target =  postopen.arguments[3];
    }
    else if (postopen.arguments.length < 4)
    {
        if (postopen.arguments.length>0)
            url = postopen.arguments[0];
        else
            url = "";
        if (postopen.arguments.length>1)
            target =  postopen.arguments[1];
        else
            target = "_blank";
        var jj = url.indexOf("?");
        if (jj==-1)
        {
            nms = null;
            vls = null;
        }
        else
        {
            var xs = url.substring(jj+1).split(/&/);
            nms = [];
            vls = [];
            for (var j=0; j < xs.length; j++)
            {
                if (xs[j].charAt(xs[j].length-1)=='=')
                {
                    nms[j] = xs[j].substring(0,xs[j].length-1);
                    vls[j] = '';
                }
                else
                {
                    var ys = xs[j].split(/=/);
                    nms[j] = ys[0];
                    try{
                       vls[j] = decodeURIComponent(ys[1]);
                    }catch(e){ }
                }
            }
            url = url.substring(0,jj);
        }
    }
    var w = null, h=null;
    if (target.replace(/[0-9]+/,'') == '' )
    {
         w = parseInt(target);
         h = thispageheight() -10;
    }
    else if (target.replace(/[0-9]+_[0-9]+/,'') == '')
    {
         w = parseInt(target.replace(/_.*/,''));
         h = parseInt(target.replace(/.*_/,''));
    }
    if (w!=null)
    {
        target = 'openlink';
        myprompt('<iframe name=openlink width=' + w + ' height=' + h + ' />');
    }

    var f3 = null;
    for (var j=0; j < document.forms.length; j++)
        if ( 'subfollo' == document.forms[j].name)
        {
            f3 = document.forms[j];
            for (var k=0; k < f3.elements.length; k++)
            {
                f3.removeChild(f3.elements[k]);
            }
            break;
        }
    if (f3 == null)
    {
        f3 = document.createElement("form");
        f3.method = "POST";
        f3.name = "subfollo";
        if (target.replace(/w[0-9]+/,'')=='' && window.frames!=null && window.frames.length>0 && window.frames[window.frames.length-1].name == target)
            document.body.insertBefore(f3,document.body.childNodes[document.body.childNodes.length-1]);
        else
            document.body.appendChild(f3);
    }
        formnewaction(f3,url);
        f3.target = target;
        if (nms!=null) 
        for (var i=0; i < nms.length; i++)
        {
            var el = null;
            for (var j=0; j < f3.elements.length; j++)
            {
                if (f3.elements[j].name == nms[i]) break;
            }
            if (j == f3.elements.length)
            {
                el = document.createElement('input');
                el.type = 'hidden';
                el.name = nms[i];
                f3.appendChild(el);
            }
            else
            {
                el = f3.elements[j];
            }
            el.value = vls[i];
        }
         
        pstsubmfm = f3;
        justopenedwindowhandle = null;
        if (w!=null)
        {
            for (var i=0; i < window.frames.length; i++)
            if (window.frames[i].name == 'openlink')
            {
               justopenedwindowhandle = window.frames[i];
               break;
            }
        }
        if (typeof(f3.submit) == 'function')
        {
           visual(f3);
           f3.submit();
        }
} 
var resumehalted = function()
{
    expiretime = activeidletime + (new Date()).getTime();
    if (typeof(document.subfollo)!='undefined')
    document.subfollo.submit();
}

var numofuploadtries = 0;
function setbackf(x,err)
{
    var fes = document.thisform.elements;
    for (var i=0; i < fes.length; i++)
    {
        fes[i].disabled = false;
    }
    for (var k=0; k < x.length; k++)
    {
        for (var j=0; j < numRows; j++)
        {
            if (x[k][0] == mat[j][0])
            {
                setv(j,4,x[k][1]);
                mat[j][4] = x[k][1];
                holdvalues[j + '_4'] = null;
                valuechanged[j] = false;
            }
        }
    }
    var N = 1;
    if (err!='')
    {
        N = err.replace(/<.tr>.*/i, '').replace(/<tr>/i,'').replace(/[^<]/g,'').length/2;
    }
    if(N >= 2)
    {
        var vv = GetCookie("col" + subdb);
        if (vv == null) vv = ";0:lastname;2:email;3:score;4:detail;5:detail;6:detail;7:detail;8:detail;9:detail;10:detail;11:detail;12:detail;13:detail;14:detail;15:detail;16:detail;17:detail;18:detail;19:detail;";
        var err1 = '<tr>';
        for (var j=0; j < N; j++)
        {
            var l = vv.indexOf(";" + j + ":lastname")>=0?" selected ":"";
            var e = vv.indexOf(";" + j + ":email")>=0?" selected ":"";
            var s = vv.indexOf(";" + j + ":score")>=0?" selected ":"";
            var d = vv.indexOf(";" + j + ":detail")>=0?" selected ":"";
            var i = vv.indexOf(";" + j + ":sid")>=0?" selected ":"";
            
            err1+= "<td><select name=c" + j + " onchange=selectse(this,"+j+")><option value=\"\" >No  Use</option><option value=lastname" + l + ">LastName</option><option value=email" + e + ">Email</option><option value=sid" + i + ">StudentId</option><option value=score" + s + ">Score</option><option value=detail " + d + ">Detail</option></select></td>";
        }
        
        myprompt('<form rel=opener name=fef  ><font color=red>(' + (++numofuploadtries)  + ')</font> The following records failed to match. Match them manually by selecting columns then <input class=GreenButton type=button onclick=submissmatch() value=Resubmit><table id=missed border=1 style=border-collapse:collapse>' + err1 + "</tr>" + err + '<table><form>');
        promptwin.style.top = "0px";
        promptwin.style.left = "0px";
    }
    else
    {
        document.thisform.removeChild(document.thisform.localpath);
        document.thisform.removeChild(document.thisform.csname);
        document.thisform.removeChild(document.thisform.item);
        document.thisform.action = "SaveBack";
        document.thisform.enctype = "application/x-www-form-urlencoded";
        if (err=='') err = 'All right';
        myprompt(  err );
    }
    
    var fes = document.thisform.elements;
    
    for (var i=0; i < fes.length; i++)
    {
        fes[i].disabled = false;
    }
}
function submissmatch()
{
    var tbl = document.getElementById('missed');
   // if (tbl == null || tbl.nodeType != 'table') alert('missed');
    for (var j=0; j < tbl.rows[0].cells.length; j++)
    {
        var sels = tbl.rows[0].cells[j].getElementsByTagName('select');
        if (sels==null ) continue;
        var sel = sels[0];
        var nm = sel.options[sel.selectedIndex].value.toLowerCase();
        if (nm == 'lastname' || nm == 'last name' ) break;
        
    }
    for (var l=0; l < tbl.rows[0].cells.length; l++)
    {
        var sels = tbl.rows[0].cells[l].getElementsByTagName('select');
        if (sels==null ) continue;
        var sel = sels[0];
        var nm = sel.options[sel.selectedIndex].value.toLowerCase();
        if (nm == 'score'   ) break;
        
    }
    //alert(j + ' ' + l);
    for (var i=1; i < tbl.rows.length; i++)
    {
        for (var k=0; k < numRows; k++)
        if (tbl.rows[i].cells[j].innerHTML.toLowerCase() == mat[k][2].toLowerCase())
        { 
           var sc = tbl.rows[i].cells[l].innerHTML;
           setv(k,4,sc);
          // alert(j + '   ' + l +  '   ' + k + '  ' + i + '  ' + sc);
           holdvalues[k + '_4'] = sc;
           valuechanged[k] = true;
        }
    }
    setaction(1);
}
function selectse(sel,j)
{
    document.thisform.whichc.value = document.thisform.whichc.value.replace(new RegExp(";" + j + ":[a-z]*;"),";") + j + ":" + sel.options[sel.selectedIndex].value + ";";
    SetCookie("col" + subdb, document.thisform.whichc.value);
}
function uploadother()
{
    numofuploadtries = 0;
    if (typeof(document.thisform.localpath) == 'undefined')
    {
        var ef = document.createElement('input');
        ef.type = "file";
        ef.name='localpath';
        ef.style.width = "1px";
        ef.style.visibility = 'hidden';
        ef.onchange = function()
        {
            document.thisform.enctype = "multipart/form-data";
            document.thisform.action = "UploadOther";
            if (typeof(tstmp)=='undefined')
               document.thisform.target = "_blank" ;
            else
               document.thisform.target = "w" + tstmp;
            visual(document.thisform);
            document.thisform.submit();
        }
        document.thisform.appendChild(ef);
        var fc = document.createElement('input');
        fc.type = "hidden";
        fc.name = "csname"
        fc.value= title.replace(/ .*/,'');
        document.thisform.appendChild(fc);
        var fs = document.createElement('input');
        fs.type = "hidden";
        fs.name = "item"
        fs.value= title.replace(/.*:/,'');
        document.thisform.appendChild(fs);
        fs = document.createElement('input');
        fs.type = "hidden";
        fs.name = "whichc";
        var vv = GetCookie("col" + subdb);
        if (vv == null) vv = ";0:lastname;2:email;3:score;4:detail;5:detail;6:detail;7:detail;8:detail;9:detail;10:detail;11:detail;12:detail;13:detail;14:detail;15:detail;16:detail;17:detail;18:detail;19:detail;";
        fs.value = vv;
        document.thisform.appendChild(fs);
    }
    document.thisform.localpath.click();
}

function addcss2head(i, divs, u)
{
    var q  =document.getElementById('style' + u + '_' +  i);
    if (divs!='' && q==null)
    {
        var q = document.createElement('style');
        q.id = 'style' + u + '_' +  i;
        q.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(q);
        q.innerHTML =  divs;
    }
    else if ( divs!='' && q!=null)
    {
        q.innerHTML = divs;
    }
    else if (divs=='' && q!=null)
    {
        q.parentNode.removeChild(q); 
    }   
}
var allainputeles = '';
function recurainput(x)
{
   if (x == null) 
       return;
   var label = textmsg[1771].split(/@/);
   if (typeof(x.tagName) !='undefined' && x.tagName.toLowerCase() == 'a' ) 
   {
      if (typeof(x.innerHTML)!='undefined' && x.innerHTML.indexOf('&vellip;')>=0) 
      {
          return;
      }
       
      if (x.href.indexOf("javascript")>=0)
          allainputeles += "<tr><td style=\"color:white;font-family:" + defaultfontfamily + "\" onclick=\"" + x.href +";closeactmenu()\"><nobr>" + x.innerHTML + "</nobr></td></tr>";
      else
          allainputeles += "<tr><td style=\"color:white;font-family:" + defaultfontfamily + "\" onclick=\"open('" + x.href +"','_blank');closeactmenu()\"><nobr>" + x.innerHTML + "</nobr></td></tr>";
   }
   else if (typeof(x.tagName) !='undefined' && x.tagName.toLowerCase() == 'input' && x.type.toLowerCase() =='submit') 
   {
       if (typeof(x.value)!='undefined' && x.value.indexOf('&vellip;')>=0) 
       {
           return;
       }
        
       allainputeles += "<tr><td style=\"color:white;font-family:" + defaultfontfamily + "\" onclick=\"" + (''+x.onclick).replace(/^[^\{]+/,'').replace(/ /g,'') +";closeactmenu()\"><nobr>" + x.value + "</nobr></td></tr>";
   }
   else if (typeof(x.tagName) !='undefined' && x.tagName.toLowerCase() == 'input' && x.type.toLowerCase() =='button') 
   {
       if (typeof(x.value)!='undefined' && x.value.indexOf('&vellip;')>=0) 
       {
           return;
       }
       
       allainputeles += "<tr><td style=\"color:white;font-family:" + defaultfontfamily + "\" onclick=\"" + (''+x.onclick).replace(/^[^\{]+/,'').replace(/ /g,'') +";closeactmenu()\"><nobr>" + x.value.replace(/</,label[11]).replace(/>/,label[12]) + "</nobr></td></tr>";
   }
   else if (typeof(x.tagName) !='undefined' && x.tagName.toLowerCase() == 'td' && typeof(x.onclick)!='undefined' && x.onclick!=null &&  x.onclick!='') 
   {
      if (typeof(x.innerHTML)!='undefined' && x.innerHTML.length < 2) 
      {
          return;
      } 
      if (x.innerHTML.replace(/^\/[0-9]+.*/,'')!='')
      allainputeles += "<tr><td style=\"color:white;font-family:" + defaultfontfamily + "\" onclick=\"" + (''+x.onclick).replace(/^[^\{]+/,'').replace(/ /g,'') +";closeactmenu()\"><nobr>" + x.innerHTML.replace(/&lt;/,label[11]).replace(/&gt;/,label[12]) + "</nobr></td></tr>";
   }
   else if (typeof(x.childNodes)!='undefined' && x.childNodes!=null && x.childNodes.length>0)
   {
       for (var i=0; i < x.childNodes.length; i++)
           recurainput(x.childNodes[i]);
   }
}
function buildactmenu()
{
    if (typeof(document.thisform)!= 'undefined')
    recurainput(document.thisform);
}
function closeactmenu()
{
    document.body.removeChild(document.getElementById('dotmenu'));
}
function gohome()
{
    var gp = window;
    var url0 = document.location.toString().replace(/[^\/]+$/,'');
    var url1= url0.replace(/\/$/,'');
    var url2 = url0 + "index.";
    while (gp!=gp.parent) gp = gp.parent;
    var ip = gp.opener;
    if (ip !=null)
    {
       try
       {
          var x = ip.document.location.toString();
          if (x == url0 || x == url1 || x.indexOf(url2)>=0)
          {
              gp.close();
          }
          else
          {
              if (ip.parent.document.location.toString().indexOf('index.jsp') < 0
                 && ip.parent.document.location.toString().indexOf('studentpage.jsp') < 0     
              )
             {
                 ip.parent.document.location.href = "index.jsp";
                 indexwindow = ip;
             }
             close();
          }
       }catch(e)
       {
           if (gp.document.location.toString().indexOf('index.jsp') < 0
                 && gp.document.location.toString().indexOf('studentpage.jsp') < 0     
                 )
         {   
             gp.document.location.href = "index.jsp";
             indexwindow = gp;
         }
          close();
       }
    }
    else if (gp.document.location.toString().indexOf('index.jsp') < 0
          && gp.document.location.toString().indexOf('studentpage.jsp') < 0     
        ) 
    {
        gp.document.location.href = "index.jsp";
        indexwindow = gp;
    }
    else  close();
}
function actionmenu(spn)
{
    if (allainputeles=='')
        buildactmenu();
    if (allainputeles=='')
    {
        spn.parentNode.removeChild(spn);
        return;
    }
    var str = "<table style=\"color:white;font-family:" + defaultfontfamily + "\" >" + allainputeles  
       +"<tr><td style=\"color:white;font-family:" + defaultfontfamily + "\" onmouseout=closeactmenu() onclick=closeactmenu()>" + textmsg[1824] +  "</table>";
    var xy = findPositionnoScrolling(spn);
    var dv = document.createElement("div");
    dv.id = 'dotmenu';
    //dv.className = 'outset2';
    dv.style.cssText = "background-image:" + gradientbg + ";background-position:-30px 0px;background-color:#222222;color:white;display:inline-block;position:absolute;top:" + xy[1] + "px;left:" + (xy[0]-70) 
    +"px;border:1px #666666 solid;color:white;font-family:" + defaultfontfamily;
    dv.innerHTML = str;
   // dv.onmouseout = closeactmenu;
    document.body.appendChild(dv);
}

function onmydomain(openwin)
{
    try
    {  
        var x = openwin.location.href;
        return true;
    }catch(e){return false;}
}

var democursorx = 0;
var democursory = 0;
var democursorsim = null;
var demokeyframen = 0;
var demohandle = null;
var demosound = null;
var demospeedup = 1;
function demoinitcursor(originalurl)
{
    if (originalurl==null) originalurl = '';
    demosound = new Audio(originalurl + "image/clicksound.mp3");
    democursorsim = document.createElement('div');
    democursorsim.id = "cursorid";
    democursorsim.style.cssText = "background:url(" + originalurl + "image/cursorsim.gif);position:absolute;z-index:400;left:0px;top:0px;width:27px;height:48px;";
    democursorsim.innerHTML = "<!---->";
    document.body.appendChild(democursorsim);
    democursorsim.onclick =  demopause;
}
var demodelay = false;
function demopause()
{
    if (promptwin==null)
    {
        demosuspend();
        demoshowsel();
    }
}

function demoshowsel()
{
    var s = "<br><center>s=" + demospeedup  +"<br>"
    + "<input type=button class=GreenButton style=width:65px value=\"&uarr;&times;2\" onclick=\"demospeedup*=2;demosch();closeprompt()\">"
    + "<input type=button class=GreenButton style=width:65px value=\"&darr;&divide;2\" onclick=\"demospeedup/=2;demosch();closeprompt()\">"
    + "<input type=button class=GreenButton style=width:65px value=\"" + textmsg[821] + "\" onclick=\"demosch();closeprompt()\">"
    + "<input type=button class=GreenButton style=width:65px value=\"" + textmsg[1771].split(/@/)[5] + "\" onclick=demostop()></center>";
    myprompt(s,null,null,textmsg[820]);
}
var demotasks = [];
var demostepi = 0;
var demostepj;
function demosuspend()
{
    if (demohandle!=null)
    {
        clearTimeout(demohandle);
        demohandle = null;
    }
}
function demoresume()
{
    demostepi--;
    if ( demostepi < demotasks.length )
    {
        demohandle = setTimeout(demotasks[demostepi][0] + ";demosch()", 200);
        demostepi++;
    }
}
function demosch()
{
     
    if ( demostepi < demotasks.length )
    {
        demohandle = setTimeout(demotasks[demostepi][0] + ";demosch()" , Math.round(demotasks[demostepi][1]/demospeedup));
        demostepi++;
    }
}
function demo()
{
    demoinitcursor();
    demostepi = 0;
    demosch();
}
 
function demostop()
{
    demostepi = 0;
    demoremovesim();
    demokeyframen = 0;
    closeprompt();
}
function demoheight(h)
{
    if (h==null) h = 1;
    if (democursorsim != null)
    {
       democursorsim.style.transform = "scale(1," + h + ")"; 
       if (h!=1)
       {  
           demosound.currenTime = 0;
           try{demosound.play();}catch(e){}
       }
     
    }
}
function democursor2(x, y)
{
    if (typeof(x) == 'undefined' || x == null) return 0;
    if (typeof(x)!= 'number')
    {
        if (y==null) y = 2;
        var xy = findPositionnoScrolling(x);
        xy[0] += x.offsetWidth/y;
        xy[1] += x.offsetHeight/2;
        return democursor2(xy[0],xy[1]);
    }
    
    var str = '@keyframes cursormove' + demokeyframen + '{\n from {left:' + democursorx + 'px;top:' + democursory + 'px}\n to {left:' + x + 'px;top:' + y + 'px}\n}\n}';
        var st = document.getElementById('cursormove');
        if (st == null)
        {
            st = document.createElement('style');
            st.id = 'cursormove';
            st.innerHTML = str;
            document.getElementsByTagName('head')[0].appendChild(st);
        } else
            st.innerHTML = str;
        
        democursorsim.style.animationName = "cursormove" + (demokeyframen++);
        democursorsim.style.animationFillMode = "forwards";
        var tm = Math.round(Math.sqrt((x-democursorx)*(x-democursorx) + (y-democursory)*(y-democursory))/200/demospeedup);
        if (tm == 0) tm = 1;
        democursorsim.style.animationDuration = tm +  "s";
        democursorsim.style.animationDelay = "0s"; 
        democursorx = x;
        democursory = y;
        setTimeout(democursorat,tm*1000);
        return tm*1000; 
}

function democursorat()
{
   if (democursorsim!=null){
   democursorsim.style.left = democursorx + 'px';
   democursorsim.style.top = democursory + 'px';
   }
}

function demoremovesim()
{
    if (democursorsim!=null)
    {
        document.body.removeChild(democursorsim);
        democursorsim = null;
    }
}



var eventcodes = new Array();
eventcodes[0] = "realClose();";
eventcodes[1] = "if(hints[cc]==labels[cc] && mandatory[cc]==false) closeprompt();else{myprompt(((hints[cc]==labels[cc])?(labels[cc]+ textmsg[722]):hints[cc]),null,null,textmsg[191]);var xy=findPositionnoScrolling(ele(0,cc));promptwin.style.top=(xy[1]+25)+'px';promptwin.style.left=(xy[0]+150)+'px';}";
eventcodes[2] = "opener.document.location.href='cfgdb.jsp?which=registered';var win=window.open('','_top','',true);win.opener=true;win.close();";
eventcodes[3] = "opener.syn2();realClose();";
eventcodes[4] = "opener.aftertool()";
eventcodes[5] = "validating=opener.check()";
eventcodes[6] = "defaultRecord[0]=Math.floor((new Date())/1000)";
eventcodes[7] = "popwin='z21';parent.z12.syn1();";
eventcodes[8] = "parent.frames[0].setname(mat[0][0])";
eventcodes[9] = "opener.redo(mat);populate(true)";
eventcodes[10] = "opener.assemble()";
eventcodes[11] = "parent.frames[0].refresh()";
eventcodes[12] = "if (cc==0)renaming()";
eventcodes[13] = "if(retrv(0,0)==''){validating=textmsg[97];ele(0,0).focus();}";
eventcodes[14] = "if(cc==1){setv(0,2,guessFormat(v));}";
eventcodes[15] = "save2places();SetCookie(subdb+'tcmt','');SetCookie(subdb+'acinfo','');saveabsence()";
eventcodes[16] = "f2.subdb.value=''";
eventcodes[17] = "if(mat[0][8]=='')setv(0,8,mat[0][14]);if(mat[0][5]=='')setv(0,5,mat[0][15]);";
eventcodes[18] = "if(cc==1){if(valuechanged[rr])for(var i=0;i<numCols;i++)if(ele(rr,i).value=='')setv(rr,i,defaultRecord[i]);}else if (cc==5&&rdapname=='roster')setCell(rr,6,''+(parseInt(retrv(rr,6))+parseInt(v)-parseInt(x)));";
eventcodes[19] = "opener.getChecked(newmat[rr][cc])";
eventcodes[20] = "if (cc==1&&v!='...'){var t=v.split(',');for(var z=0;z<t.length;z++){var w=t[z].split( \"\" );var j=rr;if(z>0&&rr<numRows)j=numRows+z-1;else if (z>0&&rr==numRows)j=numRows+z;setv(j,0,retrv(rr,0));setv(j,3,w[0]);setv(j,4,w[1]); }}";
eventcodes[21] = "if(numRows!=1){myprompt('Incorrect code');} else{xy=findPositionnoScrolling(document.getElementById('thetoolbar'));myHintx=xy[0]-10;myHinty=xy[1]+80; showmyhint(0,1);}";
eventcodes[22] = "timeformat=timeformat.replace(/ hh:mm/,'');opener.close();resizeTo(600,screen.height);moveTo((screen.width-600)/2,0)";
eventcodes[23] = "ret=2;nav1.document.getElementById('detail').innerHTML=textmsg[90];close();";
eventcodes[24] = "timeformat=timeformat.replace(/hh/,'').replace(/mm/,'').replace(/:/g,'');setv(0,15,defaultRecord[15]);";
eventcodes[25] = "parent.frames['z12'].syn5()";
eventcodes[26] = "if(cc==3){parent.z12.showlabel(rr);if(mat[rr][2]!='')setv(rr,cc,x);}";
eventcodes[27] = "for(r=numRows-1;r>=0;r--)valuechanged[r]=false;";
eventcodes[28] = "for(r=numRows-1;r>=0;r--)if(parseInt(mat[r][11])>0){mat[r][8]='';ele(r,8,'');}";
eventcodes[29] = "opener.log1(rr,cc,x,v)";
eventcodes[30] = "popwin1=parent.frames[1].name;";
eventcodes[31] = "";//x=updateQuery;updateQuery=mu(updateQuery,retrv(0,3));";
eventcodes[32] = "ret=2;myprompt(textmsg[778],null,\"if(v){f1.action='Email';f1.target='w'+tstmp;formnewaction(f1);visual(f1f1.submit();}\");updateQuery=x;";
eventcodes[33] = "if(cc==0){subdb=(v=='1')?mat[0][1]:'';setv(0,2,subdb);mat[0][4]=(v=='1')?mat[0][5]:mat[0][6];}else if (cc==8)setv(0,9,guessFormat(v));";
eventcodes[34] = "document.location.href='DataForm?rdap=feeurge&numrows=1'";
eventcodes[35] = "if(cc==9){setv(rr,10,guessFormat(v));setv(rr,8,'1');}";
eventcodes[36] = "for(r=0; r < numRows; r++)setv(r,15,''+r)";
eventcodes[37] = "if(cc==1){if(valuechanged[rr])for(var i=0;i<numCols;i++)if(ele(rr,i).value=='')setv(rr,i,defaultRecord[i]);}else if (cc==6&&rdapname=='roster'){formselementbyname(document.form1,rr+'_7').value=''+(parseInt(retrv(rr,7))-parseInt(v)+parseInt(x));}";
eventcodes[38] = "if(mat[0][8]=='')setv(0,8,mat[0][14]);if(mat[0][5]=='')setv(0,5,mat[0][15]);showtimeslots(ele(0,3),3,1)";
eventcodes[39] = "parent.resizeIframe(0,window);";
eventcodes[40] = "parent.rename0(rr,cc)";
eventcodes[41] = "parent.old(x)";
eventcodes[42] = "valuechanged[0]=true;validating='';var fm=window.frames[0];setv(0,2,'');c=fm.passoverNumRows();for(j=c-1;j>=0;j--){r=c-j;cc=fm.retrv(r-1,3);x=fm.retrv(r-1,2);if(x==''){validating=textmsg[417].concat(fm.retrv(r-1,0));break;}setv(0,cc,retrv(0,cc).concat(fm.retrv(r-1,2)));fm.setvaluechanged(r-1,false);}";
eventcodes[43] = "for(c=0;c<4;c++)if(ctype[c]=='h'){setv(0,c,'');mat[0][c]='';}valuechanged[0]=false;";
eventcodes[44] = "parent.openassess1(mat[0][0])";
eventcodes[45] = "popwin1=parent.frames[1].name";
eventcodes[46] = 'parent.parent.frames[0].zz()';
eventcodes[47] = "opener.fill(window)";
eventcodes[48] = "cellvalue=retrv(0,3);setv(0,4,''+guessFormat(cellvalue));";
eventcodes[49] = "opener.follows(1)";
eventcodes[50] = 'passdefaults(parent.frames[0])';
eventcodes[51] = "parent.match();parent.resizeIframe(1,window)";
eventcodes[52] = "parent.fill()";
eventcodes[53] = "parent.endload((5+NUMROWS)*23)";
eventcodes[54] = "opener.changeback()";
eventcodes[55] = "opener.existwarning(numRows)";
eventcodes[56] = "parent.regroup();parent.resizeIframe(1,window)";
eventcodes[57] = "opener.redo(mat);populate(0)";
eventcodes[58] = "opener.assemble()";
eventcodes[59] = "addextraform()";
eventcodes[60] = "parent.frames[0].redo(mat);populate(true);var labelsc0=textmsg[1644].split(/@/);for(var i=0;i<5;i++)setv(i,0,labelsc0[i]);";
eventcodes[61] = "parent.frames[0].assemble()";
eventcodes[62] = "parent.frames[0].menupermit()";
eventcodes[63] = "for(r=3;r>=0;r--)valuechanged[r]=true;";
eventcodes[64] = "if (numRows==0) myprompt('Record does not exist. You may help to enter one')";
eventcodes[65] = 'popwin=self.name;if(cc==0){setv(0,2,v.split(/\|/)[0]);setv(0,4,v.split(/\|/)[1]);}';
eventcodes[66] = "popwin1=self.name;";
eventcodes[67] = "popwin1=self.name;ele(0,4).options[0]=new Option(textmsg[1272],'');ele(0,4).selectedIndex=0;";
eventcodes[68] = "popwin1='tlmrsch';";
eventcodes[69] =  "popwin1='tlmrsch';showhelp2(popwin1);";
eventcodes[70] = "if(whichaction=='0')parent.frames[0].openfix();";
eventcodes[71] = "if(whichaction=='0')parent.parent.frames[0].openfix(600);";
eventcodes[72] = "if(numRows==0)valuechanged[0]=true;popwin1='tlmrsch';showhelp2(popwin1);";
eventcodes[73] = "if(numRows==0)opener.hints1();focus()";
eventcodes[74] = "ret=3;opener.refresh();setTimeout(close,100)";
eventcodes[75] = "if(ctype[cc]=='a'){var fmti=0;for(;fmti < numCols && fields[fmti].toLowerCase()!='format';fmti++);if (fmti<numCols){cellvalue=retrv(0,fmti);setv(0,fmti,guessFormat(v));}}";
eventcodes[76] = "ret=3;opener.reopen();setTimeout(close,100);";
eventcodes[77] = "if(retrv(0,0)==mat[0][0] && retrv(0,1)==mat[0][1] && confirm(textmsg[723])==false) validating=' '";
eventcodes[78] = "ret=2;opener.openagain();setTimeout('close()','100')";
eventcodes[79] = "allanswers()";
eventcodes[80] = "opener.updatescore()";
eventcodes[81] = "if (numRows == NUMROWS) document.location.href= document.location.toString();";
eventcodes[82] = "if(cc==1)parent.parent.frames[0].check1(retrv(rr,cc),rr)";
eventcodes[83] = "if(cc==1)parent.parent.frames[0].check(retrv(rr,cc),rr)";
eventcodes[84] = "if(cc==1)parent.frames[0].check(retrv(rr,cc),rr)";
eventcodes[85] = "if (cc==1&&v!='...'){ var t=v.split(',');for(var z=0;z<t.length;z++){var w=t[z].split('|');var j=rr;if(z>0&&rr<numRows)j=numRows+z-1;else if (z>0&&rr==numRows)j=numRows+z;setv(j,0,retrv(rr,0));setv(j,3,w[0]);setv(j,4,w[1]); }}";
eventcodes[86] = "";
eventcodes[87] = "";//x=updateQuery;updateQuery=mu(updateQuery,retrv(0,3))";
//eventcodes[88] = "myprompt(textmsg[778],null,\"if(v){f1.action='Echo';f1.target='_blank';visual(f1);f1.submit();}\");updateQuery=x;";
eventcodes[88] = "myprompt(textmsg[778],null,\"if(v){f1.action='Email';f1.target='w'+tstmp;visual(f1);f1.submit();}\");updateQuery=x;";
eventcodes[89] = "if(cc==0){subdb=(v=='1')?mat[0][1]:'';setv(0,2,subdb);mat[0][4]=(v=='1')?mat[0][5]:mat[0][6];}else if (cc==8){setv(0,10,guessFormat(v));}else if (c==9){v=v.replace(/([a-z])[ ]*$/,'$1,');setv(0,9,v);}";
eventcodes[90] = "maxsize[3]=1000";
eventcodes[91] = "if(cc==0){subdb=(retrv(0,0)=='1')?mat[0][1]:'';setv(0,2,subdb);mat[0][4]=(retrv(0,0)=='1')?mat[0][5]:mat[0][6];}else if (c==9){v=v.replace(/([a-z][ ]*)$/,'$1,');setv(0,9,v);}";
eventcodes[92] = "opener.addAnItem1()";
eventcodes[93] = "parent.z12.syn5()";
eventcodes[94] = "close()";
eventcodes[95] = "if (cc==3)showtimeslots(ele(counter,3),3)";
eventcodes[96] = "if (cc==1)showtimeslots(ele(rr,1),1)";
eventcodes[97] = "if (numRows==0 && typeof(document.thisform.webservice0)!='undefined'){myprompt(textmsg[1362],null,null,textmsg[591]);};";
eventcodes[98] = "if (numRows==0){myprompt(textmsg[1363],null,null,textmsg[591]);};";
eventcodes[99] = "narrowtable();"
eventcodes[100] = "nonamefunc1();";
eventcodes[101] = "for(r=numRows;r<NUMROWS;r++){n=Math.round(Math.pow(2,(r-1)));setv(r,0,''+r);setv(r,1,''+n);valuechanged[r]=false;}";
eventcodes[102] = "r=thispageheight();parent.resizeifrm(window.name,r);"
eventcodes[103] = "if(numRows>0 && rr < numRows && cc==0&&v!=x){myprompt(textmsg[1572],null,\"if(v)changerid('changeid',mat[rr][0],retrv(rr,0));else setv(rr,0,x);\",'')}";
eventcodes[104] = "if(numRows>0 && rr < numRows && cc==0&&v!=x){myprompt(textmsg[1572],null,\"if(v)changerid('changecid',mat[rr][0],retrv(rr,0));else setv(rr,0,x);\",'')}";
eventcodes[105] = "if(numRows>0 && rr < numRows && cc==0&&v!=x){myprompt(textmsg[1572],null,\"if(v)changerid('changedept',mat[rr][0],retrv(rr,0));else setv(rr,0,x);\",'')}";
eventcodes[106] = "if(numRows>0 && rr < numRows && cc==1&&v!=x){myprompt(textmsg[1572],null,\"if(v)changerid('changesess',mat[rr][1],retrv(rr,1),'',retrv(rr,0),retrv(rr,3));else setv(rr,1,x);\",'')}";
eventcodes[107] = "if(numRows>0 && rr < numRows && cc==2&&v!=x){myprompt(textmsg[1572],null,\"if(v)changerid('changesess',mat[rr][2],retrv(rr,2),'',retrv(rr,0),retrv(rr,4));else setv(rr,2,x);\",'')}";
eventcodes[108] = "popwin1='w'+tstmp;";
eventcodes[109] = "parent.width2(document.getElementById('maintable').offsetWidth,document.getElementById('maintable').offsetHeight)";
eventcodes[110] = "var xx=ele(0,1).options.length;ele(0,1).options[xx]=new Option(textmsg[114]+' '+labels[1] ,'@');newitem=function(Z,j){var X=ele(Z,j);if (X.options[X.selectedIndex].value=='@')myprompt('<center><iframe src=schedulerindex.jsp?semester=@&forindex=1 width=300 height=320 /></center>');}";;
eventcodes[111] = "fff();";
eventcodes[112] = "setv(rr,0,retrv(rr,1) + '|' + retrv(rr,2) + '|' + retrv(rr,4))";
eventcodes[113] = "morecoursesel(existing)";
eventcodes[114] = "setTimeout(parent.closeprompt,1500)";
eventcodes[115] = "timeformat=timeformat.replace(/[a-z][a-z]/g,'').replace(/:/g,'');Sch.printsch1();parent.newalarm(mat,numRows)";
eventcodes[116] = "printcourse()";
eventcodes[117] = "printcourse1()";
eventcodes[118] = "morecoursesel(existing);writehint()";
eventcodes[119] = "popwin1=parent.frames[1].name;parent.modify23(f1)";
eventcodes[120] = "timeformat=timeformat.replace(/ mm:ss/,'');for(j1=0;j1<numCols&&fields[j1]!='Birthday';j1++);if (mat[0][j1]==null || mat[0][j1]=='0'){mat[0][j1]=(''+((new Date()).getTime()-20*365*24*3600000) ).replace(/[0-9][0-9][0-9]$/,'');ele(0,j1).value=timestr(parseInt(mat[0][j1]));} ele(0,j1).value=ele(0,j1).value.replace(/ [0-9][0-9]:[0-9][0-9]/,'');";
eventcodes[121] = "SetCookie(mat[0][0] + \"acinfo\",'');parent.document.location.herf=parent.document.location.toString()";
eventcodes[122] = "saveabsence()"; 
eventcodes[123] = "parent.extraweight(window)"; 
var homestr = '<a href="../"><div style="float:left;background:radial-gradient(farthest-side at 70% 65%,#efeffd,#666660);width:54px;height:54px;border-radius:27px;alignment:center;text-align:center;vertical-align:middle;line-height:54px"><table cellspacing="0" width="24" style="transform:scale(1.5,1.5);margin:10px 0px 0px 13px" align="center"><tr height="6"><td colspan="7"></td></tr><tr height="10"><td colspan="7"><div style="width:0px;height:0px;border-left:12px solid transparent;border-bottom:10px #fff solid;border-right:12px solid transparent;"></div></td></tr><tr height="3"><td width="3" rowspan="2"></td><td width="5" style="background-color:#ffffff" rowspan="2"></td><td width="5" rowspan="2"></td><td width="4" style="background-color:#ffffff" rowspan="2"></td><td width="5"></td><td width="4" style="background-color:#ffffff" rowspan="2"></td><td width="3" rowspan="2"></td></tr><tr height="5"><td style="background-color:#ffffff" width="5"></td></tr><tr height="12"><td colspan="7"></td></tr></table></div></a>';
function openfileto(filebox,txtbox)
{
 var file = filebox.files[0];
 var reader = new FileReader();
 reader.onload = function (e) 
 {
    txtbox.value = e.target.result;
 };
 reader.readAsText(file); 
 let j = filebox.value.lastIndexOf('/');
 if (j==-1)j = filebox.value.lastIndexOf('\\');
 return filebox.value.substring(j+1);
}
if (typeof ($)!='function')
$ = function(id){return document.getElementById(id);}
let txtboxhold =null;
function savefileas(txtbox,filename)
{
    if (filename == null || filename.indexOf(".")==0)
    {
        txtboxhold = txtbox;
        var d  = new Date(); 
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        let hr = new Intl.DateTimeFormat('en', { hour: '2-digit' }).format(d);
        let mn = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d);
        //let se = new Intl.DateTimeFormat('en', { second: '2-digit' }).format(d);
        var fn =  ye + mo + da;
        if (filename == null) fn += ".csv";
        else fn += filename;
        myprompt('Enter File name:',fn,"downloadas(txtboxhold,v)","File Name");
        return;
    }
    let ext2mime = [];
    ext2mime['aac'] = 'audio/aac';    
    ext2mime['abw'] = 'application/x-abiword';    
    ext2mime['arc'] = 'application/x-freearc';    
    ext2mime['avi'] = 'video/x-msvideo';    
    ext2mime['azw'] = 'application/vnd.amazon.ebook';    
    ext2mime['bin'] = 'application/octet-stream';    
    ext2mime['bmp'] = 'image/bmp';    
    ext2mime['bz'] = 'application/x-bzip';    
    ext2mime['bz2'] = 'application/x-bzip2';    
    ext2mime['csh'] = 'application/x-csh';    
    ext2mime['css'] = 'text/css';    
    ext2mime['csv'] = 'text/csv';    
    ext2mime['doc'] = 'application/msword';    
    ext2mime['docx'] = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';    
    ext2mime['eot'] = 'application/vnd.ms-fontobject';    
    ext2mime['epub'] = 'application/epub+zip';    
    ext2mime['gz'] = 'application/gzip';    
    ext2mime['gif'] = 'image/gif';    
    ext2mime['htm'] = 'text/html';    
    ext2mime['html'] = 'text/html';    
    ext2mime['ico'] = 'image/vnd.microsoft.icon';    
    ext2mime['ics'] = 'text/calendar';    
    ext2mime['jar'] = 'application/java-archive';    
    ext2mime['jpg'] = 'image/jpeg';    
    ext2mime['jpeg'] = 'image/jpeg';    
    ext2mime['js'] = 'text/javascript';    
    ext2mime['json'] = 'application/json';    
    ext2mime['jsonld'] = 'application/ld+json';    
    ext2mime['mid'] = 'audio/midi audio/x-midi';   
    ext2mime['midi'] = 'audio/midi audio/x-midi';    
    ext2mime['mjs'] = 'text/javascript';  
    ext2mime['mp3'] = 'audio/mpeg';   
    ext2mime['cda'] = 'application/x-cdf';   
    ext2mime['mp4'] = 'video/mp4';  
    ext2mime['mpeg'] = 'video/mpeg';  
    ext2mime['mpkg'] = 'application/vnd.apple.installer+xml';   
    ext2mime['odp'] = 'application/vnd.oasis.opendocument.presentation'; 
    ext2mime['ods'] = 'application/vnd.oasis.opendocument.spreadsheet';   
    ext2mime['odt'] = 'application/vnd.oasis.opendocument.text';    
    ext2mime['oga'] = 'audio/ogg';    
    ext2mime['ogv'] = 'video/ogg';    
    ext2mime['ogx'] = 'application/ogg';   
    ext2mime['opus'] = 'audio/opus';    
    ext2mime['otf'] = 'font/otf';    
    ext2mime['png'] = 'image/png';   
    ext2mime['pdf'] = 'application/pdf';  
    ext2mime['php'] = 'application/x-httpd-php'; 
    ext2mime['ppt'] = 'application/vnd.ms-powerpoint';   
    ext2mime['pptx'] = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';   
    ext2mime['rar'] = 'application/vnd.rar';    
    ext2mime['rtf'] = 'application/rtf';    
    ext2mime['sh'] = 'application/x-sh';    
    ext2mime['svg'] = 'image/svg+xml';    
    ext2mime['swf'] = 'application/x-shockwave-flash';    
    ext2mime['tar'] = 'application/x-tar';    
    ext2mime['tif'] = 'image/tiff';   
    ext2mime['tiff'] = 'image/tiff';   
    ext2mime['ts'] = 'video/mp2t';    
    ext2mime['ttf'] = 'font/ttf';    
    ext2mime['txt'] = 'text/plain';   
    ext2mime['vsd'] = 'application/vnd.visio';   
    ext2mime['wav'] = 'audio/wav';    
    ext2mime['weba'] = 'audio/webm';   
    ext2mime['webm'] = 'video/webm';    
    ext2mime['webp'] = 'image/webp';    
    ext2mime['woff'] = 'font/woff';    
    ext2mime['woff2'] = 'font/woff2';   
    ext2mime['xhtml'] = 'application/xhtml+xml';   
    ext2mime['xls'] = 'application/vnd.ms-excel';   
    ext2mime['xlsx'] = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';    
    ext2mime['xml'] = 'text/xml';   
    ext2mime['xul'] = 'application/vnd.mozilla.xul+xml'; 
    ext2mime['zip'] = 'application/zip';    
    ext2mime['3gp'] = 'video/3gppaudio/3gpp';  
    ext2mime['3g2'] = 'video/3gpp2audio/3gpp2';   
    ext2mime['7z'] = 'application/x-7z-compressed';
var mime_type = ext2mime[filename.replace("[^\\.]+\\.","")];
var blob = new Blob([txtbox.value], {type: mime_type});
    var dlink = document.createElement('a');
    dlink.download = filename;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function(e) {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function() {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };

    dlink.click();
    dlink.remove();
}   
 
