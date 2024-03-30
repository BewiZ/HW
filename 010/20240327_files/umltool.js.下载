
if (document.location.toString().indexOf("localhost") >= 0
        && typeof (handleErr) == 'undefined')
{
    function handleErr(msg, url, l)
    {
        var txt = "There was an error on this page.\n\n"
                + "Error: " + msg + "\n"
                + "URL:   " + url + "\n"
                + "Line:  " + l;


        // window.onerror = handleErr;
        return true;
    }
    window.onerror = handleErr;
}
if (typeof (expiretime) == 'undefined')
{
    var expiretime = (new Date()).getTime() + 3600000;
    var activeidletime = 3600000;
}
var allis = [];
//shapearr[i]=[words,shapename,x,y,width,height,fontsize,color]
//linearr[i]=[type,startobjnum,xonobj, yonobj, endobjnum, xonobj,yonobj,thick,direction]
var shapes = ["rightrect", "roundrect", "ellipse", "diamond"];
var arrows = ["arrow", "arrom", "diamond", "line"];
//var COLORS = ["black", "red", "green", "orange", "blue", "purple", "pink", "#00BBBB"];
//var BCOLORS = ["white", "red", "green", "orange", "blue", "purple", "pink","lightyellow","transparent",'1'];
if (typeof (kframes) == 'undefined')
{
    var kframes = new Object();// kframes['5_4'] = {esn:1, ets:[[1,2]], etm:5, ssn:1, sts:[[1,2]], stm:5, loop:3, lsn:1, lts:[[1,2]], ltm:5};
    var kshapes = [];
}
if (typeof (colors) == 'undefined')
{
    var colors = ["black", "red", "green", "orange", "blue", "purple", "pink", "#BBBB00"];
}
if (typeof (bcolors) == 'undefined')
{
    var bcolors = ["white", "red", "green", "orange", "blue", "purple", "pink", "lightyellow", "transparent", '1'];
} 
else
{
    bcolors[8] = 'transparent';
    bcolors[9] = '1';
}
var iconx, icony;
var handle = null;
var allfonts = [15, 20, 25, 30, 35, 40, 45, 50];
var fillblank = "<!---->";
var diamondchar = "&loz;";
var horarrowchar = "&rarr;";
var uparrowchar = "&uarr;";
var bullchar = "&bull;";
var diamschar = "&diams;";
var linetype = '';
var state = 0;
var numShapes = 0;
var allShapes = new Array();
var savestart = 0;
var savestartx = 0;
var savestarty = 0;
var numLines = 0;
var allLines = new Array();
var currentlnum = 0;
var myHintx = 0;
var myHinty = 0;
var cord;
var folder = null;
var locationstr = '';
var whichact = '';
var textareatobesearch = null;
var playstate = 'playstop';
var menufontcolor = 0;
var numbeing = 0;
var activesave = false;
var pagetbl = null;
var hasone = null;
var numsselected = [];
var cdbeing = -1;
var tdaredoing;
var numaredoing = [];
var itemaredoing;
var bgcolorcode = -1;
var fromserver = true;
if (typeof (originalurl) == 'undefined')
{
    var originalurl = '';
    var filename = null;
}
if (typeof (shapearr) == 'undefined')
{
    fromserver = true;
    var shapearr = new Array();
    var linearr = new Array();
    var curvearr = new Array();
    var attachstr = '';
    var shapetime = new Array();
    var linetime = new Array();
    var curvetime = new Array();
    var pagetime = new Array();
}
if (typeof (bgarr) == 'undefined')
    var bgarr = new Array();
if (typeof (attachstr) == 'undefined')
    var attachstr = '';
if (typeof (attacharr) != 'undefined')
{
    for (var i1 = 0; i1 < attacharr.length; i1++)
        if (attacharr[i1] != null && attacharr[i1] != '')
            attachstr += attacharr[i1];
}
if (typeof (editable) == 'undefined')
{
    var editable = true;
}
if (typeof (tstmp) == 'undefined')
{
    var tstmp = (new Date()).getTime() % 10000000;
}

var iframename = "w" + tstmp;

var seldirect = 0;
var onmouseover0 = null;
var pagenum = 0;
var favorx = 5;
var mfavory = 0;
var favory = 50;
var favorw = 400;
var favorh = 200;
var deletepage = 0;
var beingloadnum;
var selectend;
var selectstart = 0;
var entered = new Array();
var otherunique = null;

var ppos = 0;
var tobeparsed = '';
var tempsstr;
var templstr;
var tempcstr;
var tempastr;
var tempbstr;
var pgn = 0;
var hassaved = true;
var tnamebeing = '';
var toolbarxy = 0;
var sentline = false;
var drawstate = 0;
var drawpoints = null;
var drawpointslength = 0;
var numCurves = 0;
var allCurves = new Array();
var searches = document.location.search.replace(/^\?/, '').split(/&/);
var dobackground = false;
var minutes = "";
var sessionid = null;
var toolnames = "";
var cachedshapenum;
var cachedshapename = "rightrect";
var cachedlinecolor = 0;
var cachedcurvecolor = 0;
var cachedianum = 0;
var cachedcd = 0;
var cachedfc = 0;
var ismakingtab = 1;
var savedfontrate = 1;
var hintstr = textmsg[1836].split(/@/);
if (typeof (cachedfontfamily) == 'undefined')
    var cachedfontfamily = textmsg[1594].replace(/@.*/, '');
var haspagesort = false;
var imagelet2wh = [];
var base2cn = [];
if (typeof (myfontname) != 'undefined')
    cachedfontfamily = myfontname;
if (typeof (onlinetoolinitial) == 'undefined' || onlinetoolinitial == null)
{
    onlinetoolinitial = ";LaTex;web;LaTex toolbar;LaTex;" + originalurl + "/../js/findrep.js;showlatexpanel(content_a,this);";
}
if (folder != null)
onlinetoolinitial += textmsg[16] + ";web;Configuration;Configure;;openconfigtool();";
var onlinetoolinfo = onlinetoolinitial;
if (typeof (allies) == 'undefined')
    var allies = [];
var filenamestr = null;// localStorage['filenames'];
function $(id) {return document.getElementById(id);}
function samefont(x, y)
{
    if (x == null || y == null)
        return false;
    y = y.toLowerCase();
    var ans = false;
    var xs = x.toLowerCase().split(/[ ]*,[ ]*/);
    for (var i = 0; i < xs.length; i++)
        if (y.indexOf(xs[i]) >= 0)
        {
            ans = true;
            break;
        }

    return ans;
}
var oldonlinetoolcp = onlinetoolcp;
onlinetoolcp = function (button, aname)
{
    button.form.target = "_blank";
    oldonlinetoolcp(button, aname);
}
var objentering = -1;

function openconfigtool()
{
    onlinetoolinfo = onlinetoolinfo.replace(/^;/, '');
    var xs = onlinetoolinfo.split(/;/);
    var s = '@';

    for (var i = 0; i < xs.length; i++)
        if (i % 6 == 3)
            s += xs[i] + '@';
    myprompt('<iframe src="remote.jsp?schedule=' + s + '" width=700 height=600 />', null, null, textmsg[16] + textmsg[1776]);

}
function setTool(n, y)
{
    var j;
    if (y.charAt(0) == ';')
        y = y.substring(1);
    if ((j = onlinetoolinfo.indexOf(y)) >= 0)
    {

        onlinetoolinfo = onlinetoolinfo.substring(0, j) + onlinetoolinfo.substring(j + y.length);

    } else
    {
        onlinetoolinfo += y;

    }
    if (onlinetoolinfo.charAt(0) != ';')
        onlinetoolinfo = ';' + onlinetoolinfo;

    onlinetoolinitial = onlinetoolinfo;
    var ss = onlinetoolstr(onlinetoolinfo);

    onlinetoolbase.innerHTML = ss;
}

if (typeof (passedencoding) == 'undefined')
{
    var passedencoding = '';
    var passedfilename = '';
    var passedsessionid = '';
    for (var j2 = 0; j2 < searches.length; j2++)
        if (searches[j2].indexOf('fn=') == 0)
            passedfilename = searches[j2].substring(3);
        else if (searches[j2].indexOf('en=') == 0)
            passedencoding = searches[j2].substring(3);
        else if (searches[j2].indexOf('sn=') == 0)
            passedsessionid = searches[j2].substring(3);
    document.title = passedfilename;
}

var chatsessionnum = (passedsessionid == null || passedsessionid == '' || isNaN(passedsessionid)) ? -1 : parseInt(passedsessionid);

if ($('mainmeta') && passedencoding != '')
{
    $('mainmeta').content = 'text/html; charset=' + passedencoding;
}
function tohex(s)
{
    var i = parseInt(s);
    var y = Number(i).toString(16);
    if (y.length == 1)
        y = '0' + y;
    return y.toLowerCase();
}
function hexcolor(cl)
{
    if (cl == null || cl == '' || cl.toLowerCase() == 'transparent')
        return 'transparent';
    else if (!isNaN(cl))
        return cl;
    if ((cl + '').toLowerCase().indexOf('rgb') >= 0)
    {
        var x = ('' + cl).replace(/rgb/, '').replace(/\(/, '').replace(/\)/, '').split(/,/);
        return  '#' + tohex(x[0]) + tohex(x[1]) + tohex(x[2]);
    }
    cl = cl.toUpperCase();
    if (cl == "WHITE")
        cl = "#FFFFFF";
    else if (cl == "SILVER")
        cl = "#C0C0C0";
    else if (cl == "GRAY")
        cl = "#808080";
    else if (cl == "BLACK")
        cl = "#000000";
    else if (cl == "RED")
        cl = "#FF0000";
    else if (cl == "MAROON")
        cl = "#800000";
    else if (cl == "YELLOW")
        cl = "#FFFF00";
    else if (cl == "OLIVE")
        cl = "#808000";
    else if (cl == "LIME")
        cl = "#00FF00";
    else if (cl == "GREEN")
        cl = "#008000";
    else if (cl == "AQUA")
        cl = "#00FFFF";
    else if (cl == "TEAL")
        cl = "#008080";
    else if (cl == "BLUE")
        cl = "#0000FF";
    else if (cl == "NAVY")
        cl = "#000080";
    else if (cl == "FUCHSIA")
        cl = "#FF00FF";
    else if (cl == "PURPLE")
        cl = "#800080";
    else if (cl == 'PINK')
        cl = '#FFC0CB';
    else if (cl == 'ORANGE')
        cl = '#FFA500';
    else if (cl == 'CYAN')
        cl = '#00FFFF';
    if (cl.replace(/#[0-9|a-z][0-9|a-z][0-9|a-z][0-9|a-z][0-9|a-z][0-9|a-z]/i, '') != '')
        return 'transparent';
    return cl.toLowerCase();
}
function samecolor(x, y)
{
    return hexcolor(x) == hexcolor(y);
}

function gradient(cl, sn)
{
    cl = hexcolor(cl);
    if (cl == 'transparent')
        return "url()";
    var r = parseInt(cl.substring(1, 3), 16);
    var g = parseInt(cl.substring(3, 5), 16);
    var b = parseInt(cl.substring(5), 16);
    var c0;
    if (sn == 'egg' || sn == 'ellipse' || sn == 'circle')
    {
        r += 60;
        if (r > 255)
            r = 255;
        g += 50;
        if (g > 255)
            g = 255;
        b += 60;
        if (b > 255)
            b = 255;
        c0 = "rgb(" + r + "," + g + "," + b + ")";
    } else
    {
        if (r == 0)
            r = Math.round(Math.random() * 50);
        else {
            r -= Math.round(Math.random() * 0.34 * r);
            if (r < 0)
                r = 0;
        }
        var rs = Number(r).toString(16);
        if (r < 16)
            rs = '0' + rs;
        if (g == 0)
            g = Math.round(Math.random() * 50);
        else {
            g -= Math.round(Math.random() * 0.34 * g);
            if (g < 0)
                g = 0;
        }
        var gs = Number(g).toString(16);
        if (g < 16)
            gs = '0' + gs;
        if (b == 0)
            b = Math.round(Math.random() * 50);
        else {
            b -= Math.round(Math.random() * 0.30 * b);
            if (b < 0)
                b = 0;
        }
        var bs = Number(b).toString(16);
        if (b < 16)
            bs = '0' + bs;
        c0 = "#" + rs + gs + bs;
    }

    if (sn == 'egg' || sn == 'ellipse' || sn == 'circle')
        c0 = 'radial-gradient(closest-side at 40% 35%,' + c0 + ",   " + cl + ")";
    else
        c0 = 'linear-gradient(' + c0 + " 10%," + cl + ")";

    return c0;
}
function findPositionnoScrolling(oElement, win)
{
    if (win == null)
        win = self;
    if (oElement == null)
        return [0, 0];
    if (typeof (oElement.offsetParent) != 'undefined')
    {
        var ii = 0;
        var originalElement = oElement;
        for (var posY = 0, posX = 0; ii++<10 && oElement!=null; oElement = oElement.offsetParent )
        {
            posY += oElement.offsetTop;
            posX += oElement.offsetLeft;
            if (oElement != originalElement && oElement != win.document.body && oElement != win.document.documentElement)
            {
                posY -= oElement.scrollTop;
                posX -= oElement.scrollLeft;
            }
        }
        return  [posX, posY];
    }
    else
    {
        return  [oElement.x, oElement.y];
    }
}
function padd2(i)
{
    if (i > 9)
        return i;
    else
        return '0' + i;
}
function initfilename()
{
    locationstr = document.location.toString();
    var lj = locationstr.lastIndexOf("/");
    if (lj > 0)
    {
        var filenm = locationstr.substring(lj + 1);
        locationstr = locationstr.substring(0, lj);
        if (locationstr.indexOf("http") == 0 && filenm.indexOf("umltool.html") == 0)
        {
            originalurl = locationstr;
            filename = passedfilename;
        }
    }

    if ( (filename == null || filename == '') &&  passedfilename!= 'erd.html')
    {
        var d = new Date();
        filename = padd2(d.getYear() % 100) + padd2(d.getMonth()) + padd2(d.getDate()) + ".html";
    }

    if (window.opener!= null
    && typeof(window.self)!='undefined'
    && window.opener!= window.self
    && window.opener!=null
    &&  (onmydomain(opener))
    && typeof(window.opener.getFolder)!='undefined'
    )
    {
        folder = window.opener.getFolder();
        subdb = window.opener.getSubdb();
    }
    else if (parent!=self && parent.frames[0]!=self && typeof(parent.frames[0].getFolder)!='undefined')
    {
        folder = parent.frames[0].getFolder();
        subdb = parent.frames[0].getSubdb();
    }
    else if (parent!=self && parent.frames[0]!=self && typeof(parent.fntobesaved)!='undefined')
    {
        folder = "communication/chat";
        filename = parent.fntobesaved();
    }
    else
    {
        var str = localStorage[filename];
         
        if (str!=null)
        {
            try{
            var obj = JSON.parse(str);
            orgnum = obj.orgnum;
            originalurl = obj.originalurl;
            if (typeof(umltoolstyles)!= 'undefined')
            {
            umltoolstyles.id = obj.umltoolstylesid;
            umltoolstyles.href = obj.umltoolstyleshref;
            }
            cachedfontfamily = obj.cachedfontfamily;
            colors = obj.colors;
            bcolors = obj.bcolors;
            filename = obj.filename;
            needtranslator = obj.needtranslator;
            editable = obj.editable;
            tstmp = obj.tstmp;
            shapearr = obj.shapearr;
            
            linearr = obj.linearr;
            curvearr = obj.curvearr;
            attachstr = obj.attachstr;
            shapetime = obj.shapetime;
            linetime = obj.linetime;
            curvetime = obj.curvetime;
             pagetime = obj.pagetime;
             allies = obj.allies;
             bgarr = obj.bgarr;
            kframes = obj.kframes;
            kshapes = obj.kshapes;
            }catch(e1){}
        }
    }
}
var subdb = null;
function rcolor(x)
{
    var i=0;
    for (; i < colors.length; i++)
        if (colors[i] == x) return i;
    return 0;
}
function rbcolor(x)
{
    var i=0;
    for (; i < bcolors.length; i++)
        if (bcolors[i] == x) return i;
    return bcolors.length-1;
}
function setcolor()
{

}
function insideobj()
{
   for (var i=0; i < numShapes; i++)
       if (allShapes[i]!=null && allShapes[i].inbase(myHintx,myHinty)) return true;
   var m = $('m0_0');
   if (m==null) return false;
   var x = parseInt(m.style.left.replace(/px/,'')) - myHintx;
   var y = parseInt(m.style.top.replace(/px/,'')) - myHinty;
   var w = m.offsetWidth;
   var h = m.offsetHeight;
   return (x>=0 && x <=w && y>=0 && y <= h);
}

function saveable()
{
    return (opener!=null && (onmydomain(opener))  && typeof(opener.helpsave) != 'undefined');
}
function setfolderfn(fd, fn)
{
    folder = fd;
    filename = fn;
}
function savesqlable()
{
    return (parent!=self && typeof(parent.frames[0].savedef) != 'undefined');
}
function shrink(shapename)
{
   if (shapename== 'roundrect') return 0.85;
   if (shapename== 'ellipse') return  0.63;
   if (shapename== 'diamond') return  0.43;
   return 0.9;
}
function picname(s,d)
{
    if (s== "line")
       return  "-";
    else if (s== 'diamond' )
        return  diamondchar;
    else if (s== 'arrom')
        return 'm';
    else if (d== 0)
        return horarrowchar ;
    return '>' ;
}

function filecontent()
{

   sourcecodes();
   //canceldia(0,0);
}
function clr()
{
    clearall1(1);
}

var high = 20;
function shrinkht(tdid)
{
    $(tdid).style.visibility =  "hidden";
}
function changepagelbl(td)
{
    var tbl = td.parentNode.parentNode.parentNode;
    for (var j=1; j < tbl.rows.length; j++)
    {
        var ctd = tbl.rows[j].cells[0];
        if (td == ctd) ctd.style.backgroundColor = 'grey';
        else ctd.style.backgroundColor = 'white';
    }
    tbl.rows[0].cells[0].innerHTML = td.innerHTML;
    tbl.rows[0].cells[0].style.backgroundColor = 'transparent';
}
function makemenu2()
{
   popmenu('selplay',$('tdplay'));
   if (editable)popmenu('selfile',$('tdfile'));
   popmenu('selpage',$('tdpage'));
   
}
function popmenu(id,td)
{
    if (filenamestr == null) 
    {
        var farr = [];
       
        for (var fn in localStorage)
        {
            if (fn.indexOf(".html")>0 )
            farr[farr.length] = fn;
        }
        filenamestr = JSON.stringify(farr);
    }
    var dv = $(id);
    var xy = findPositionnoScrolling(td); 
    if (dv != null)
    {
        if (closemenuhandle[id] != null)
            clearTimeout(closemenuhandle[id]);
        closemenuhandle[id] = null;
        
        if (id == 'selpage') 
        {
            pagetbl.rows[0].cells[0].innerHTML = textmsg[1854].replace(/@/, '1');
            pagetbl.style.backgroundColor = 'transparent';
            $('selplay').style.visibility = 'hidden';
            if(editable)$('selfile').style.visibility = 'hidden';
        }
        else if (id=='selplay')
        {
            Play.color(Play.state);
            $('selpage').style.visibility = 'hidden';
            if(editable)$('selfile').style.visibility = 'hidden';
        }
        else
        {
            $('selplay').style.visibility = 'hidden';
            $('selpage').style.visibility = 'hidden';
        }
        dv.style.visibility = 'visible';
        td.style.textDecoration = 'none';
        dv.style.left = xy[0] + 'px';
        $(id).style.color =  colors[menufontcolor];
        return;
    }
    
    var palylabels = textmsg[1771].split(/@/);
    dv = document.createElement('div');
    dv.id = id;
    
    xy[1] += 2; if (id=='selpage') xy[0] -= 4;
    dv.style.cssText = "background-image:linear-gradient(#eff,#cdd);visibility:hidden;background-color:white;box-shadow:#bbb 1px 1px;padding:5px 4px 4px 4px;vertical-align:middle;position:absolute;left:" + xy[0] + "px;top:" + (xy[1] + high) + "px;z-index:300;color:" + colors[menufontcolor]  ;
    var str = "<table style=margin:0px;font-weight:400px;color:inherit cellpadding=0 cellspacing=0>";
    //<div onmouseover=\"exitsort();$('selplay').style.height=null;\"  id=\"selplay\" style=\"vertical-align:middle;line-height:" + high + "px;display:inline-block;overflow:hidden\" >
    if (id == 'selplay')
    {
        str += ("<tr height=" + (high) + "><td align=left class=flipcolor valign=middle  style=font-weight:400 onclick=\"Play.schedule();shrinkht('selplay');\"  id=\"timebtn\"   title=\"" + hintstr[2] + "\" >" + textmsg[36] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.start();shrinkht('selplay');\"  >" + palylabels[0] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.pause();shrinkht('selplay');\" >" + palylabels[1] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.resume();shrinkht('selplay');\" >" + palylabels[2] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.forward();shrinkht('selplay');\" >" + palylabels[3] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.backward();shrinkht('selplay');\">" + palylabels[4] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.stop();shrinkht('selplay');\">" + palylabels[5] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"Play.remote();shrinkht('selplay');\"  title=\"" + hintstr[3] + "\" >" + palylabels[6] + "</td></tr>");
        str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   style=font-weight:400 onclick=\"makepagetab1();shrinkht('selplay');\"  title=\"" + hintstr[1] + "\" >" + palylabels[8] + "</td></tr>");
        if (editable)
            str += ("<tr height=" + (high) + "><td  class=flipcolor align=left  valign=middle   onclick=\"makepagesort();shrinkht('selplay');\"  style=font-weight:400  title=\"" + hintstr[4] + "\" >" + palylabels[13] + "</td></tr>");
    } else if (id == 'selfile')
    {
        let labelfs = textmsg[1871].split(/@/);
        //0Cache@1Open@2Rename@3Download@4Back up@5Clear@Recent
        str += ("<tr height=" + high + "><td  class=flipcolor align=left  valign=middle  style=font-weight:400 onclick=\"newafile();activesave=true;shrinkht('selfile');\" id=\"newfile\">" +  textmsg[114]  + "</td></tr>");
        if (filename != null)
        {
            str += ("<tr height=" + high + "><td  class=flipcolor align=left  valign=middle  style=font-weight:400 onclick=\"saveit();activesave=true;shrinkht('selfile');\" id=\"saveit\">" + (folder==null?labelfs[0]:textmsg[67]) + "</td></tr>");
        }
        str += ("<tr height=" + high + "><td   class=flipcolor valign=middle  align=left  style=font-weight:400  onclick=\"saveas();shrinkht('selfile');\" id=\"saveit1\"><nobr>" +  labelfs[2] + "</nobr></td></tr>");
        if (chatsessionnum == -1 && folder!=null)
        {  //uploadfile()
            str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  style=font-weight:400  align=left onclick=\"uploadfile();shrinkht('selfile');\"  id=\"attachbtn\"  title=\"" + hintstr[5] + "\" >" + textmsg[294] + "</td></tr>");
        }
        str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  align=left  style=font-weight:400 onclick=\"openfiles();shrinkht('selfile');\"  id=\"openbtn\"  title=\"" + labelfs[1] + "\" >" + labelfs[1] + "</td></tr>");
        str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  align=left  style=font-weight:400 onclick=\"downloadfiles();shrinkht('selfile');\"  id=\"downloadbtn\"  title=\"" + labelfs[3] + "\" >" + labelfs[3] + "</td></tr>");
        
        str += ("<tr height=" + high + "><td  valign=middle  class=flipcolor align=left  style=font-weight:400 onclick=\"managefiles();shrinkht('selfile');\" >" + labelfs[4] + "</td></tr>");
        str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  align=left  style=font-weight:400 onclick=\"clr();shrinkht('selfile');\"  id=\"clearbtn\"  title=\"" + hintstr[6] + "\" >" + textmsg[1663] + "</td></tr>");
        
            
        if (filenamestr!=null && filenamestr.replace(filename,'').replace(/[\W]/g,'')!='')
        str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  align=left  style=font-weight:400 onmouseenter=\"popmenu1('recentfile',this)\"  id=\"recentbtn\"  onmouseout=\"nullmenu('recentfile')\" >" + labelfs[6] + "</td></tr>");
 
    } 
    else if (id == 'recentfile')
    {
        if (filenamestr!=null && filenamestr!='')
        {
           let allfs = JSON.parse(filenamestr);
           for (let ii=0; ii < allfs.length; ii++)
           {   
               if (allfs[ii] != filename)
               str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  align=left  style=font-weight:400 onclick=\"loadthis('" + allfs[ii] + "')\"  id=\"recentfile" + ii + "\"  title=\"" + allfs[ii] + "\" >Recent</td></tr>");
           } 
        }
    }
    else {
        for (var i = 0; i < Math.max(1, shapearr.length); i++)
        {
            str += ("<tr height=" + high + "><td  class=flipcolor align=left  valign=middle  style=font-weight:400; onclick=\"changepage(this);shrinkht('selpage');\">" + textmsg[1854].replace(/@/, '' + (i + 1)) + "</td></tr>");
        }
        if (editable)
            str += "<tr height=" + high + "><td     class=flipcolor align=left  valign=middle  style=font-weight:400  onclick=\"changepage(this);shrinkht('selpage');\">" + textmsg[114] + "</td</tr>";
        else 
            str += "<tr height=1><td  ></td</tr>";
    }
    str += "</table>";
    dv.innerHTML = str;
    dv.onmouseout = function () {
      closemenuhandle[this.id] = setTimeout("$('" + this.id + "').style.visibility='hidden';$('" + this.id.replace(/sel/,'td') + "').style.textDecoration='underline';",500); 
    }
    dv.onmouseover = function () {
        if (closemenuhandle[this.id] != null)
            clearTimeout(closemenuhandle[this.id]);
        this.style.visibility = 'visible';
        closemenuhandle[this.id] = null;
    }
    document.body.appendChild(dv);
}
function tempfilename()
{
   var d  = new Date(); 
   let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
   let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
   let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
   var filen = "showcase" +ye + mo + da + ".html";
   for (let fn in localStorage)
   if (fn == filen) 
   {
      let k = 0;
      while (true)
      {
         filen  = "showcase" + mo + da + (k) + ".html";
         let found = false;
         for (let gn in localStorage)
          if (gn == filename)
          {   
              found = true;
              break;
          }
        if (found) 
           k++;
        else 
           break; 
      }
     
   }
   return filen;
}

function newafile()
{
   saveit();
   clr();
   filename = tempfilename();
   shapearr=[];
   linearr=[];
   curvearr=[];
   attachstr="";
   shapetime=[];
   linetime=[];
   curvetime=[];
   pagetime=[];
   allies=[];
   bgarr=[];
   kframes=[];
   kshapes = [];
   document.location.href = document.location.toString().replace(/fn=[^&]+&/,"fn=" + filename).replace(/fn=[^&]+$/,"fn=" + filename);
}
function proceedfile(filebox)
{
   var file = filebox.files[0];
   var reader = new FileReader();
   reader.onload = function (e) 
   {
      let v  = e.target.result;
      let i = v.indexOf('width:1px;height:1px>');
      let j = v.indexOf('</textarea>',i);
      passcache(v.substring(i+21,j));
   };
   reader.readAsText(file);
}
var closemenuhandle = [];
function openfiles()
{
   myprompt("Open showcase presentation file:<input type=file onchange=proceedfile(this)><br> Typical file name look like showcase***.html");
}
function nullmenu(menu)
{
   closemenuhandle[menu] = setTimeout("$('" + menu + "').style.visibility='hidden';$('" + menu.replace(/sel/,'td') + "').style.textDecoration='underline';",500); 
}

function popmenu1(id,td)
{
    var dv = $(id);
    var xy = findPositionnoScrolling(td); 
    if (dv != null)
    {
        if (closemenuhandle[id] != null)
            clearTimeout(closemenuhandle[id]);
        closemenuhandle[id] = null;
        dv.style.visibility = 'visible';
        td.style.textDecoration = 'none';
        dv.style.left = xy[0]  + 'px';
        $(id).style.color =  colors[menufontcolor];
        return;
    }
    
    dv = document.createElement('div');
    dv.id = id;
    xy[1] += 2; 
    xy[0] += 230;
    dv.style.cssText = "background-image:linear-gradient(#eff,#cdd);background-color:white;box-shadow:#bbb 1px 1px;padding:5px 4px 4px 4px;vertical-align:middle;position:absolute;left:73px;top:125px;z-index:300;color:" + colors[menufontcolor]  ;
    var str = "<table style=margin:0px;font-weight:400px;color:inherit cellpadding=0 cellspacing=0>";
     
        if (filenamestr!=null && filenamestr!='')
        {
           let allfs = JSON.parse(filenamestr);
           for (let ii=0; ii < allfs.length; ii++)
           {   
               if (allfs[ii] != filename)
               str += ("<tr height=" + high + "><td  class=flipcolor valign=middle  align=left  style=font-weight:400 onclick=\"loadthis('" + allfs[ii] + "')\"  id=\"recentfile" + ii + "\"  title=\"" + allfs[ii] + "\" >" + allfs[ii] + "</td></tr>");
           } 
        }
    
    str += "</table>";
    dv.innerHTML = str;
    dv.onmouseout = function () {
      closemenuhandle[this.id] = setTimeout("$('" + this.id + "').style.visibility='hidden';",500); 
    }
    dv.onmouseover = function () 
    {
        if (closemenuhandle[this.id] != null)
            clearTimeout(closemenuhandle[this.id]);
        this.style.visibility = 'visible';
        closemenuhandle[this.id] = null;
    }
    document.body.appendChild(dv);
}
function loadthis(filename)
{
   document.location.href = document.location.toString().replace(/fn=[^\.]+\.html/,'fn=' + filename);
}
function makebtns()
{
   var PN = shapearr.length+1;
   if (shapearr.length==0) PN = 2;
   if (editable) PN++;
   var sty1 = document.createElement('style');
   sty1.id='hovers';
   sty1.innerHTML =  '.flipcolor{background-color:transparent}'
                  + '\n.flipcolor:hover{background-color:#cdd}'
                  + '\n.upto2{border:0px;z-index:0;position:relative;top:0px;height:16px}'
                  + '\n.upto2:hover{background:#ccc;border:1px grey solid;z-index:200;top:0px;height:32px;margin:0px 0px -16px 0px}'
                  + '\n.upto3{border:0px;z-index:0;position:relative;top:0px;height:16px}'
                  + '\n.upto3:hover{background:#ccc;border:1px grey solid;z-index:200;top:0px;height:48px;margin:0px 0px -32px 0px}'
                  + '\n.aniexapnd{border-radius:0px;border:0px;background:#ccc;border:0px;z-index:0;position:relative;top:0px;width:50px;height:16px;margin:0px 0px 0px 0px}'
                  + '\n.aniexapnd1{border-radius:4px;border:2px #333 solid;background:linear-gradient(#999,#ddd);z-index:200;top:0px;width:240px;height:108px;margin:-25px -95px -80px -95px}'
                  + '\n.loopexpand{border-radius:0px;border:0px;background:#ccc;width:40px;border:0px;z-index:0;position:relative;top:0px;height:16px;margin:0px 0px 0px 0px}'
                  + '\n.loopexapnd1{border-radius:4px;border:1px #666 solid;background:linear-gradient(#999,#ddd);z-index:200;top:0px;height:' + (384) + 'px;width:40px;margin:-184px 0px -184px 0px}'
                  ;
   document.getElementsByTagName('head')[0].appendChild(sty1);
  
    document.write("<table id=toolbar  cellspacing=0 cellpadding=5 border=0 align=left style=\"z-index:0;margin:0px 0px 0px 0px\" ><tr height=" + (high) + ">");
    var palylabels = textmsg[1771].split(/@/);
    if (document.title=='') document.title = palylabels[7];
    
    if (editable==false  )
    {
        if (chatsessionnum == -1) {
        document.write("<td    valign=middle  style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\" onmouseover=popmenu('selplay',this) onmouseenter=\"popmenu('selplay',this);exitsort()\" onmouseout=nullmenu('selplay') id=tdplay>" + palylabels[7] + "</td>");
        }
        document.write("<td " + (chatsessionnum==-1?'':'width=0') + "   style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\"   id=tdpage   onmouseenter=popmenu('selpage',this) onmouseout=nullmenu('selpage')  valign=middle >" + textmsg[1854].replace(/@/,'1') + "</td>");
        document.write("<td    id=tdcord  style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\"  valign=middle align=left onclick=movecord()></td>");
        document.write("<td width=0><form rel=opener style=\"margin:0px 0px 0px 0px\" name=\"f\" method=\"post\" action=\"FileOperation\"   >"
                        + "<input name=operation type=hidden value=save>"
                        + "<input name=filedir size=8 style=\"border:0px;background-color:transparent;\"  type=hidden  value=\"" + filename + "\"  >"
                        + "<input name=folder  type=hidden  >"
                        + "<input name=destination type=hidden ><td><input name=attach type=hidden></td></form></td>");
        document.write("</tr></table>");
    }
    else if (editable)
    {
        document.write("<td   valign=middle id=tdfile  style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\"   onmouseenter=popmenu('selfile',this) onmouseout=nullmenu('selfile') >" + textmsg[1651] + "</td>");
        if (chatsessionnum == -1) 
        {
            document.write("<td    valign=middle  style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\" onmouseover=popmenu('selplay',this) onmouseenter=\"popmenu('selplay',this);exitsort()\" onmouseout=nullmenu('selplay') id=tdplay>" + palylabels[7] + "</td>");
            document.write("<td " + (chatsessionnum==-1?'':'width=0') + "  style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\"   id=tdpage   onmouseenter=popmenu('selpage',this) onmouseout=nullmenu('selpage')  valign=middle >" + textmsg[1854].replace(/@/,''+1) + "</td>");
        }
        document.write("<td   id=tdicon   style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\"   align=left valign=middle   onclick=\"makeanew(this);hidehint()\"  title=\"" + hintstr[7] + "\"  onmouseout=hidehint()>" + textmsg[1849].split(/@/)[1] + "</td>");
            
        if ( chatsessionnum==-1 )
        {
             document.write("<td  id=tdclip style=\"text-decoration:underline;background-color:transparent;border-radius:0px;font-weight:400;color:" + colors[menufontcolor] + "\"  align=left onclick=\"ResizeUploaded.attachman(document.f.attach);hidehint()\" title=\"" + hintstr[8] + "\"  onmouseout=hidehint()>" + textmsg[1849].split(/@/)[2] + "</td>");
        }
 
        document.write("<td   id=tdline align=left  valign=middle  style=\"text-decoration:underline;background-color:transparent;font-size:16px;font-family:courier;font-weight:500;border-radius:0px;color:" + colors[menufontcolor] + "\" valign=middle onclick=\"select(this,0,0);hidehint()\"  title=\"" + hintstr[9] + "\" >" + textmsg[1850].split(/@/)[4] + "</td>");
         if ( chatsessionnum==-1 )document.write("<td    id=tdcurve align=left valign=middle  style=\"text-decoration:underline;font-size:16px;font-weight:500;background-color:transparent;border-radius:0px;color:" + colors[menufontcolor] + "\"  onclick=\"selcurve();hidehint()\" title=\"" + hintstr[10] + "\"  onmouseout=hidehint()>" + textmsg[1850].split(/@/)[5] + "</td>");
        document.write("<td  id=tdbg align=left valign=middle  style=\"text-decoration:underline;font-size:15px;background-color:transparent;font-weight:500;border-radius:0px;color:" + colors[menufontcolor] + "\" onclick=\"startbg(this);hidehint()\" title=\"" + hintstr[11] + "\"  onmouseout=hidehint() ><nobr>" + textmsg[1781].replace(/,.*/,'') + "</nobr></td>");

         if ( chatsessionnum==-1 )document.write("<td   id=tdcf align=left valign=middle  style=\"text-decoration:underline;font-size:15px;background-color:#transparent;font-weight:500;border-radius:0px;color:" + colors[menufontcolor] + "\" onclick=\"mdia(1,5);hidehint()\"  title=\"" + hintstr[12] + "\"  onmouseout=hidehint()><nobr>" + textmsg[1786].replace(/@.*/,'') + "</nobr></td>");
        document.write("<td    id=tdcord  style=\"text-decoration:underline;background-color:transparent;font-size:15px;vertical-align:middle;font-weight:500;border-radius:0px;color:" + colors[menufontcolor] + "\" valign=middle align=left onclick=movecord()></td>");
        if (document.createElement('input').webkitSpeech !== undefined)
        document.write("<td     valign=middle align=left><input id=voice style=\"text-decoration:underline;font-size:14px;vertical-align:middle;border:1px #555555 solid;width:20px;border-radius:0px;color:" + colors[menufontcolor] + "\" onfocus=voicefocus(this) onblur=voiceblur(this) x-webkit-speech></td>");
        if ( chatsessionnum==-1 )
        {
            document.write("<td width=0><form name=ff1 style=\"margin:0px 0px 0px 0px\" method=post  enctype=\"multipart/form-data\" action=UploadFile" +
                    " target=\"" + iframename + "\"><input type=file size=1 style=\"width:1px;visibility:hidden\" name=localpath onchange=\"clickedhere(this);upload(document.ff1)\" " +
                    "><input type=hidden name=maximumsize value=10000000><input type=hidden name=dummy value=4000000>" +
                    "<input type=hidden name=securitytoken value=\"111111111\">" +
                    "<input type=hidden   name=allcourse value=\"\"><input type=hidden name=subdb value=\"" + subdb + "\"><input type=hidden name=subfolder value=\"chat\"><input type=hidden name=saveindir value=\"" + folder + "\"></form>" +
                    "</td>");
        }
        document.write("<td width=0><form rel=opener style=\"margin:0px 0px 0px 0px\" name=\"f\" method=\"post\" action=\"FileOperation\"   >"
                        + "<input name=operation type=hidden value=save>"
                        + "<input name=filedir size=8 style=\"border:0px;background-color:transparent;\"  type=hidden  value=\"" + filename + "\"  >"
                        + "<input name=folder  type=hidden  >"
                        + "<input name=destination type=hidden ><td><input name=attach type=hidden></td></form></td>");
           
        document.write("</tr></table>");
 
    }
    cord = $("tdcord");
    onmouseover0 = (navigator.userAgent.indexOf('MSIE') > - 1)?
    function ()
    {
        myHintx = event.clientX + document.body.scrollLeft;
        myHinty = event.clientY + document.body.scrollTop;
        //var ps = $('selplay');
        if (drawstate == 2)
        {
            addp();
        }
        else if (state == 1 || state == 2)
        {

        }
        else 
        {
            if (cord!=null && (Play.handle == null ||Play.current == 'resume'))
            {
                cord.innerHTML = myHintx + "," + myHinty;
            }
             
        }
    }
    : function (e)
    {
        myHintx = e.pageX;
        myHinty = e.pageY;
        if (drawstate == 2)
        {
        addp();
        }
        else if (state == 1 || state == 2)
        {

        }
        else
        {  
            if (cord!=null && (Play.handle == null ||Play.current == 'resume'))
            {
                cord.innerHTML = myHintx + "," + myHinty;
            }
             
        }
    }
    document.onmousemove = onmouseover0;
    if (typeof(document.f)!='undefined' && typeof(document.f.attach)!='undefined')
    ResizeUploaded.attachref = document.f.attach;
   
}

function playcomm(str)
{
    if (str == playcommand) return;
    var j = str.indexOf(';');
    var x = str.substring(0,j);
    var p = (new CSVParse(str.substring(j+1),"\"",",", ";")).nextMatrix();
    for (var i=0; i < p.length; i++)
    {
        var k = parseInt(p[i][0]);
        allShapes[k].start = parseInt(p[i][1]);
        allShapes[k].time  = parseInt(p[i][2]);

    }
    eval(x);
}
var playcommand;
function sendObject(num,del)
{
    if (chatsessionnum > -1 && num ==-2)
    {
        var x = '';
        for (var i=0; i < numShapes; i++)
        {
            if (allShapes[i] != null)
            {
                x += ';' + i + ',' + allShapes[i].start + ',' + allShapes[i].time  ;
            }
        }
        playcommand = del + x;
        parent.sendObject(chatsessionnum,  playcommand);
    }
    else if (chatsessionnum > -1 && num != null &&  num >=0 && allShapes[num]!= null && (  del !=null))
    {
        if (del == null)
        {
            var tt = num + " s" + allShapes[num].toString();
            parent.sendObject(chatsessionnum,  tt);
        }
        else if (del== 'd')
        {
            parent.sendObject(chatsessionnum,  num + " s"  );
        }
        else if (del== 'u')
        {
            parent.sendObject(chatsessionnum, ""+ num   );
        }

        else if (del== 'a')
        {
            parent.sendObject(chatsessionnum, ""+ num  + "a"  );
        }
        else if (del== 'h')
        {
            parent.sendObject(chatsessionnum, ""+ num  + "h"  );
        }

    }
}



function uploadfile()
{
    saveit();
    formnewaction(document.ff1, originalurl + "/UploadFile");
    document.ff1.localpath.click();

}
function startbg(td)
{
    if (numsselected!=null)
    canceldia(numsselected[numsselected.length-1],cdbeing);
    dobackground=!dobackground;
    if (dobackground)
         enabletd('tdcord');
    else
         enabletd(null,1);
    
    var xs = textmsg[1781].split(/,/);
    td.innerHTML = '<nobr>' +  ((dobackground)?xs[1]:xs[0]) + '</nobr>';
    if (dobackground)
    {
        mdia(0,0);
    }
    else
    {
        drawstate = 0;
        drawlinenumber = null;
        linetype = '';

        document.onclick = null;

    }

}
function voicefocus(t){t.style.width='200px';}
function voiceblur(t){t.style.width='20px';}
function addp()
{
    var x = $("c" + drawlinenumber + "_" + (allCurves[drawlinenumber].k-1));
    if (x==null) return;
    if (drawpointslength > 1 &&  myHintx== drawpoints[drawpointslength-1][0] && myHintx== drawpoints[drawpointslength-2][0] && myHinty != drawpoints[drawpointslength-1][1])
    {
        x.style.height = Math.abs(myHinty - drawpoints[drawpointslength-2][1]) + 'px';
        drawpoints[drawpointslength-1][1] = myHinty;
    }
    else if (drawpointslength > 1 &&  myHinty== drawpoints[drawpointslength-1][1] && myHinty== drawpoints[drawpointslength-2][1] && myHintx != drawpoints[drawpointslength-1][0])
    {
        x.style.width = Math.abs(myHintx - drawpoints[drawpointslength-2][0]) + 'px';
        drawpoints[drawpointslength-1][0] = myHintx;
    }
    else if (myHintx != drawpoints[drawpointslength-1][0] || myHinty != drawpoints[drawpointslength-1][1])
    {
        drawpoints[drawpointslength] = [myHintx, myHinty];
        if (drawpointslength>0)
        allCurves[drawlinenumber].draw(drawpointslength-1);
        drawpointslength++;

    }
}
 
function makeanew(td)
{
   stopdemo();
   newshape(td);
}
function newshape(td,n)
{
    if (chatsessionnum > -1 && td != null)
    {
        
        parent.sendObject(chatsessionnum,'s');
        return;
    }
    if (td == null)
    {
        if ( cachedshapename != null)
        {
            anewshape(allShapes.length,cachedshapename);
            return;
        }

        if (chatsessionnum > -1  && hassaved== false && $("m0_0" )!=null && cutshape != '')
        {
            pasteshape(n);
            return;
        }
    }
    
    var i = 0;//parseInt(td.name.replace(/[a-z]/g,''));
    hassaved = false;
    var x = 10;
    var y = 200;

    if (numediting >-1)
    {
       x = allShapes[numediting].x +110;
       y = allShapes[numediting].y;
    }

    var xy = [0, 5];
    if (typeof(findPositionnoScrolling)!='undefined')
        xy = findPositionnoScrolling($("toolbar"));
    if (y < xy[1]) y = xy[1]+40;
    document.onmousemove = onmouseover0;
    if (n==null) n = allShapes.length;
  
    var z  = new Shape(n,'','', cachedshapename, x, y, 400, 150, parseInt(cachedfontsize.replace(/px/i,'')), cachedcolor,cachedbgcolor,cachedfc,0,n,n);
    z.visible = 1;
    allShapes[n] = z;
    if (numediting==-1)
    {
         
         action(z.base, n);
         
    }
    else
    {
        z.initbase();
        z.init();
    }
}
var drawlinetypei,drawlinenumber = null;

function enabletd(str,b)
{
   if (str!=null)
   str  = "," + str + ",";
   var tds = ['tdfile','tdplay','tdpage','tdclip', 'tdline','tdcurve','tdbg','tdcf','tdcord', 'tdicon' ];
   for (var i=0; i < tds.length; i++)
   {
       var x = $(tds[i]);
       if (x == null){  continue}

       if (str!=null && str.indexOf(tds[i]) >= 0 && b == null || str == null && b!=null)
       {
           x.style.visibility = 'visible';
           if (tds[i] == 'tdpage'|| tds[i] == 'tdplay')
               $(tds[i].replace(/td/,'sel')).style.visibility = 'visible';
       }
       else
       {
           x.style.visibility = 'hidden';
           if (tds[i] == 'tdpage'|| tds[i] == 'tdplay')
               $(tds[i].replace(/td/,'sel')).style.visibility = 'hidden';
       }
   }
}
function drawdone(dot)
{
   if ( chatsessionnum > -1 )
   {
       parent.sendObject(chatsessionnum, drawlinenumber + " c" +  allCurves[drawlinenumber].toString());
   }
   drawstate = 0;
   drawlinenumber = null;
   linetype = '';
   document.body.removeChild(dot);
   linetype='mline';
   drawstate = -1;
   drawlinetypei = 0;
   if (drawlinenumber == null)
   {
       drawlinenumber = numCurves;
   }
  
   hassaved = false;
}
var firstcurvenum = 0;
function selcurve()
{
    var td = $('tdcurve');
    var cword = textmsg[1781].replace(/.*,/,'');
    if (td.innerHTML  == cword)
    {        
       if ( chatsessionnum > -1 )
       {
           parent.sendObject(chatsessionnum, drawlinenumber + " c" +  allCurves[drawlinenumber].toString());
       }
       drawstate = 0;
       drawlinenumber = null;
       linetype = '';
       document.onclick =null;
       enabletd(null,1);
       var t=$('drawdonebtn');
       if (t!=null) 
       document.body.removeChild(t);
        td.innerHTML = textmsg[1850].split(/@/)[5] ;
        td.style.fontSize = '16px';
        td.style.backgroundColor='transparent';
        drawstate = 0;
        drawlinenumber = null;
        linetype = '';
        document.onclick =null;
        enabletd(null,1);
         $('selplay').style.visibility = 'hidden';
         $('selpage').style.visibility = 'hidden';
        if (firstcurvenum < numCurves)
        {
        numsselected = [];
        for(; firstcurvenum < numCurves-1; firstcurvenum++)
           numsselected[numsselected.length] = firstcurvenum;
        mdia(numCurves-1,4);
        }
        
    }
    else
    {
        document.onclick = winclick;
        firstcurvenum = numCurves;
        //td.style.backgroundColor='#bbb';
        td.style.fontSize = '15px';
        td.innerHTML = cword;
        enabletd(td.id+',tdcord');
        myprompt(textmsg[1783]);
        promptwin.style.top = '0px';
        setTimeout(closeprompt1, 2000);
        drawlinetypei = 0;
        if (chatsessionnum > -1)
        {
            parent.sendObject(chatsessionnum,'c');
            return;
        }
        linetype='mline';
        drawstate = 3;
        if (drawlinenumber == null)
        {
            drawlinenumber = numCurves;
        }
        hassaved = false;
    }
}

function drawmode()
{

}
function select(td,i,j)
{
     
    if (state>0)
    {
        state = 0;
        enabletd(null,1);
        var x = $("q" + savestart);
        if (x!=null)
        {
            if (savestart==-1)
                document.body.removeChild(x);
            else
                allShapes[savestart].base.removeChild(x);
        }
        linetype = '';

        if (numsselected!=null && numsselected.length>=1)
            mdia(numsselected[numsselected.length-1],2);
        drawlinenumber = null;
        td.style.fontWeight='400';
        
        td.innerHTML = textmsg[1850].split(/@/)[4] ;
        td.style.fontSize = '16px';
         $('selplay').style.visibility = 'hidden';
         $('selpage').style.visibility = 'hidden';
         if(editable)$('selfile').style.visibility = 'hidden';
        document.onclick = null;
        return;
    }
    document.onclick = winclick;
    td.style.fontSize = '15px'
   // td.style.backgroundColor='#ccc';
    td.innerHTML = '<nobr>' + textmsg[1781].replace(/.*,/,'') +  '</nobr>';
    myprompt(textmsg[1782]);
    promptwin.style.top = '0px';

    setTimeout(closeprompt1,2000);
    enabletd( 'tdline,tdcord');

    drawlinetypei = i;
    seldirect = j;
    if (chatsessionnum > -1)
    {
        parent.sendObject(chatsessionnum,'l');
        return;
    }
    hassaved = false;
    linetype = arrows[i];
    state = 1;
    hidehint();
}
function parsestr(s)
{

    if (s == null) return false;
    var  st = 0;
    var  j=0;
    s = s.replace(/\r/g, '');
    while(j < s.length && (s.charAt(j)==' ' || s.charAt(j)=='\n' || s.charAt(j)== "\r") )
       j++;

    var z = "";
    tempsstr = new Array();
    templstr = new Array();
    tempcstr = new Array();
    tempastr = new Array();
    tempbstr = null;
    var isShape = true;
    for (var i=0; i < s.length; i++)
    {
        if (s.charAt(i)== "'" && (i==0 || s.charAt(i-1)!='\\'))
           st = 1 - st;

        if (st== 0)
        {
           if (i > 10 && (s.charCodeAt(i)== 10 || s.charAt(i)== '\r' || s.charAt(i)== '\n' || i== s.length-1))
           {
            var k = i;
            if (i== s.length-1)
                k = s.length;

            while ( k>=1 &&  s.charAt(k-1)== ' ' )
            {
                k--;
            }
            var one = s.substring(j,k);

            if (one.length > 2 &&  isShape && one.charAt(0)== "'" )
            {
                tempsstr[tempsstr.length] = one;
            }
            else if ( isShape==false && one.length > 10 && one.charAt(0)== "'"  )
            {
                templstr[templstr.length] = one;
            }
            else if (one.length <= 2)
            {
                 isShape = false;
            }
            j = i+1;
            while(j < s.length && (s.charAt(j)==' ' || s.charAt(j)=='\n' || s.charAt(j)== "\r"))
            {
                j++;

            }
            if (j== s.length)
            {
                break;
            }
            z = '';
           }
           else if (s.charAt(i)!="'") z +=  s.charAt(i);
        }
        else z = '';
    }
     return tempsstr.length >0 || templstr.length > 0;
}
function cachedone(needconfirm)
{
    var str = GetCookie("UMLtoolstr");

    if (str == null) return false;
    var stmpi = str.indexOf(" ");
    if (stmpi < 0) return false;
    var dstr = str.substring(0, stmpi);
    if (isNaN(dstr)) return false;
    var d = parseInt(dstr);
    var j = str.indexOf(" ",1+stmpi);
    if (j < 0) return false;
    var fnstr = str.substring(stmpi+1, j);
    if (fnstr!=filename) return false;
    var pn = str.indexOf(" ",1+j);
    if (pn < 0) return false;
    var pstr = str.substring(j+1, pn);
    if (isNaN(pstr)) return false;
    pgn = parseInt(pstr);
    if (pgn > shapearr.length) return false;
    str = str.substring(pn+1);
    var bb = parsestr(str);

    if (bb== false)
    {
         return false;
    }
    if (shapearr.length== 0)
    {
        usecached();
    }
    else if (needconfirm== true && typeof(tstmp) != 'undefined')
    {
        var tnow = (new Date()).getTime();
        tnow = tnow - (tnow%10000000) + tstmp;
        var savedtime = (new Date(tnow)).toString();
        var cachedtime = (new Date(d)).toString();
        var compare = " > ";
        if (d < tnow ) compare =  ' < ';
        myprompt(textmsg[1652].replace(/#/, (pgn+1)).replace(/#/, cachedtime ).replace(/#/,  compare)
            .replace(/#/, savedtime ).replace(/#/, (pgn +1) ),
            null,
            "if(v)usecached()",textmsg[1633]);

    }
     return true;
}
function notcached(clearfirst)
{
    if (clearfirst) delall();
    if (pagenum < shapearr.length)
    {
       initial();
    }
}
function copy(a, num, b)
{
    if (b==null || b.length==0) return;
    if (num >=0 && b.length>0)
    {
       a[num] = new Array();
       for (var i=0; i < b.length; i++)
       {
           a[num][i] = b[i];
       }
    }
    else if (b.length>0)
    {
        a = new Array(b.length);
        for (  i=0; i < b.length; i++)
         {a[i] = b[i];}
    }
}
function usecached()
{
    if (psel!= null && pgn >= pagetbl.rows.length-1)
        return;
    if (pgn!=pagenum) makeintostring();
    delall();
    pagenum = pgn;

    copy(shapearr,pgn , tempsstr);
    copy(linearr, pgn, templstr);
    copy(curvearr, pgn, tempcstr);
    copy(allies, pgn, tempastr);
    tempbstr = bgarr[pgn];
    initial();

}
function movecord()
{

    mdia(0,3);
    document.onmousemove = onmouseover0;
}
function genkeyframes(num)
{
    var str = genkeyframe(num,'e') + genkeyframe(num,'s') + genkeyframe(num,'l');
 
    var std = $('kf' + num);
    if (std == null)
    {
        if (str!=''){
        std = document.createElement('style');
        std.id = 'kf' + num;
        std.innerHTML = str;
        document.getElementsByTagName('head')[0].appendChild(std);}
    }
    else
    {
        if (str!='')
          std.innerHTML = str;
        else 
          document.getElementsByTagName('head')[0].removeChild(std);  
    }
}
function genkeyframe(num, type)
{
    var str = '';
    var kframe = kframes[pagenum + '_' + num];
    if (kframe == null)
        return '';
    var tm = kframe.etm;
    if (type == 's')
        tm = kframe.stm;
    else if (type == 'l')
        tm = kframe.ltm;
    if (tm == 0)
        return '';
    var sn = kframe.esn;
    if (type == 's')
        sn = kframe.ssn;
    else if (type == 'l')
        sn = kframe.lsn;
    var ts = kframe.ets;
    if (type == 's')
        ts = kframe.sts;
    else if (type == 'l')
        ts = kframe.lts;
    if (type == 'e')
    {
        if (sn >= 0)
        {
            var kshape = kshapes[sn];
            var k = new Shape(sn);
            k.parse(kshape);
            if (ts != null && ts.length > 0)
            {
                k.x = ts[0][0];
                k.y = ts[0][1];
            }
            str += "@keyframes b" + type + "_" + num + "{\n";
            var xx = k.keyframe("0");
            xx += 'opacity:0.0';
            str += xx + "}\n";

            if (ts != null && ts.length > 1)
            {
                var len = 100 / ts.length;
                for (var jj = 1; jj < ts.length; jj++)
                {
                    str += Math.round(jj * len) + "%{";
                    str += "left:" + ts[jj ][0] + "px;top:" + ts[jj ][1] + "px;}\n";
                }
            }
            xx = allShapes[num].keyframe(100);

            str += xx + "opacity:1.0;}\n}\n";
        } else if (ts != null && ts.length > 0)
        {
            str += "@keyframes b" + type + "_" + num + "{\n";
            var len = (100 / ts.length);
            for (var jj = 0; jj < ts.length; jj++)
            {
                str += Math.round(jj * len) + "%{";
                str += "left:" + ts[jj][0] + "px;top:" + ts[jj][1] + "px;}\n";
            }
            xx = allShapes[num].keyframe(100);
            xx += "opacity:1.0;"
            str += xx + "\n}\n}\n";
        }
    } else if (type == 's')
    {
        str += "@keyframes b" + type + "_" + num + "{\n";
        var xx = allShapes[num].keyframe("0");
        xx += "opacity:1.0}";
        str += xx;

        if (ts != null && ts.length > 0)
        {
            var len = 100 / ts.length;
            for (var jj = 1; jj < ts.length; jj++)
            {
                if (sn != -1 && jj == ts.length - 1)
                    break;
                str += Math.round(jj * len) + "%{";
                str += "left:" + ts[jj ][0] + "px;top:" + ts[jj ][1] + "px;}\n";

            }
        }
        if (sn > 0)
        {
            var kshape = kshapes[sn];
            var k = new Shape(sn);
            k.parse(kshape);
            if (ts != null && ts.length > 0)
            {
                k.x = ts[ts.length - 1][0];
                k.y = ts[ts.length - 1][1];
            }
            var xx = k.keyframe(100);
            xx += 'opacity:1.0}';
        }
        str += xx + "\n}\n";
    } else
    {
        str += "@keyframes b" + type + "_" + num + "{\n";
        var xx = allShapes[num].keyframe("0");
        xx += "opacity:1.0}";
        str += xx;
        if (ts != null && ts.length > 0)
        {
            var len = 100 / ts.length;
            for (var jj = 0; jj < ts.length; jj++)
            {
                if (sn != -1 && jj == ts.length - 1)
                    break;
                str += Math.round(jj * len) + "%{";
                str += "left:" + ts[jj ][0] + "px;top:" + ts[jj ][1] + "px;}\n";
            }
        }

        if (sn >= 0)
        {
            var kshape = kshapes[sn];
            var k = new Shape(sn);
            k.parse(kshape);

            if (ts != null && ts.length > 0)
            {
                k.x = ts[ts.length - 1][0];
                k.y = ts[v - 1][1];
            }

            var xx = k.keyframe("100");
            xx += "opacity:0.0";
            str += xx + "}\n";
        }
        str += "\n}\n";
    }
    return str;
}

HandleAttach.attaf2code = new Array();
function HandleAttach(atta)
{
    this.divs = "";
    this.maximagelet = 0;
    this.attachheader = '';
    this.numlets = 0;
    this.goodopenurl = function(codepath,tail)
    {
        if (codepath.indexOf('http://') == 0 || codepath.indexOf('https://') == 0)
        {
            return codepath;
        }
        else
        {
            var st= "FileOperation?did=" + codepath;
            if (tail==null||tail==true) st = "&tcode=" + (new Date()).getTime()%1000000000;
            return st;
        }
    }

    this.parseAttach = function(atta)
    {
        if (atta == null)
        {
            this.divs = "";
            this.maximagelet = 0;
            this.attachheader = '';
            this.numlets = 0;
            return;
        }
        this.numlets = 0;
        atta = ResizeUploaded.unzip(atta);
        atta = atta.replace(/,$/,'');
        if (atta == '')
        {
            this.divs = "";
            this.maximagelet = 0;
            this.attachheader = '';
            var sid = $('style_0' );
            if (sid!=null) document.getElementsByTagName('head')[0].removeChild(sid);
            return;
        }
        var z = (new CSVParse(atta, '\'','@',',')).nextMatrix(true);
        var at = '', q='';
        var k=0;
        var iis = '';

        for (var i=0; i < z.length; i++)
        {
            if (  this.courseonly!=null && z[i][2].charAt(0) == '_') continue;
            if ( z[i][0].replace(/[0-9]/g,"")==""  && z[i][2].replace(/[0-9]+/g, "")=="___")
            {
                this.numlets++;
                var xx = HandleAttach.attaf2code[z[i][1]];
                
                if (xx == null) continue;
                
                if (parseInt(z[i][0]) > this.maximagelet)
                {
                    this.maximagelet = parseInt(z[i][0]);
                }
                var  ns = z[i][2].split(/_/);
                var cln = 'imagelet'+z[i][0];
                var bs = base2cn[cln];

                if (bs!=null)
                   bs.base.style.cssText = setBorder(bs.base.style.cssText,[(parseInt(ns[0])), (parseInt(ns[1])),(parseInt(ns[2])), (parseInt(ns[3]))],bs.shape);
                imagelet2wh[cln] =  [(parseInt(ns[0])), (parseInt(ns[1])),(parseInt(ns[2])), (parseInt(ns[3]))];
                q += "div." +  cln
                + "\n{\nmargin:0px;background-image:url("
                + this.goodopenurl(xx,false) + ");\nbackground-position:-" + ns[0] + "px -" + ns[1] + "px;\nwidth:" + ns[2] + "px  ;\nheight:" + ns[3] + "px  ;\n}\n\n";
                q += ".shapebg" +z[i][0]
                + "\n{\nmargin:0px;background-image:url("
                + this.goodopenurl(xx,false) + ");\nbackground-position:-" + ns[0] + "px -" + ns[1] + "px;\n}\n";
                k = at.indexOf('>' + z[i][1] + '<');
                if (k >=0)
                {
                    at = at.substring(0,k).replace(/ <[^<]+$/,'') + at.substring(k+z[i][1].length+8);
                }
            }
            else
            {
                var cd = HandleAttach.attaf2code[z[i][0]];
                if (cd == null)
                {
                   if (z[i].length == 3)
                   {
                       HandleAttach.attaf2code[z[i][0]] = z[i][2];
                       at += " <span style=color:blue;cursor:pointer onclick=\"openproper('" + z[i][2] + "','" + z[i][0] + "',this)\" >" + z[i][0] + "</span> ";
                   }
                   else
                   {
                       HandleAttach.attaf2code[z[i][0]] = z[i][1];
                       at += " <span style=color:blue;cursor:pointer onclick=\"openproper('" + z[i][1] + "','" + z[i][0] + "',this)\" >" + z[i][0] + "</span> ";
                   }
                }
            }
        }
        this.divs = q  ;

        at = at.replace(/^[ ]+/g, '').replace(/[ ]+$/g, '');
        if (at.length > 1)
        {
            this.attachheader = at;
        }
        addcss2head(0, this.divs, '');
    }

    this.merge = function(s)
    {
        var iis = "_" + pagenum;
        if (s==null) return '';
        if (ismakingtab != 1) return s;
          return s.replace(new RegExp("\\[" + textmsg[1303],"ig"),"[imagelet").replace(new RegExp("\\[imagelet([0-9]+):1\\]","ig"),"<table style=display:inline;float:left cellpadding=0 cellspacing=0 ><tr><td><div  class=\"imagelet$1"   + "\"></div></td></tr></table>")
          .replace(new RegExp("\\[imagelet([0-9]+):2\\]","ig"),"<table style=display:inline;float:right  cellpadding=0 cellspacing=0 ><tr><td><div class=\"imagelet$1"  + "\"></div></td></tr></table>")
          .replace(new RegExp("\\[imagelet([0-9]+)\\]", "ig"), "<table align=center  cellpadding=0 cellspacing=0 ><tr><td><div class=\"imagelet$1" +  "\"></div></td></tr></table>");
    }

}
var hw = new HandleAttach();
function setBorder(s, arr, shape)
{
    var j, k;
    j = s.indexOf("width:");
    if (j==-1)
        s += ";width:" + arr[2] + 'px';
    else
    {
        k = s.indexOf('px',j);
        s = s.substring(0,j) + ";width:" + arr[2] + s.substring(k);
    }
    j = s.indexOf("height:");
    if (j==-1)
        s += ";height:" + arr[2] + 'px';
    else
    {
        k = s.indexOf('px',j);
        s = s.substring(0,j) + ";height:" + arr[2] + s.substring(k);
    }
    if (shape=='rightrect')
        var da = '0px';
    else if (shape=='roundrect')
        da =  (2*arr[2]/100) + 'px';
    else  if (shape=='circle')
        da =  (arr[2]/2) + 'px';
    else  if (shape=='ellipse')
        da =   '50% / 50%';
    else  if (shape=='egg')
        da =   '50% 50% 50% 50% / 40% 40% 60% 60%';
    j = s.indexOf("border-radius:"); if (j==-1)
        s += ";border-radius:" + da;
    else
    {
        k = s.indexOf(';',j);
        if (k>0)
        s = s.substring(0,j) + ";border-radius:" + da + s.substring(k);
        else
           s = s.substring(0,j) + ";border-radius:" + da + ";"
    }

    return s;
}

function changepage(sel)
{
   var keepdo = true;
   for (var jj=0; keepdo && jj < numShapes ; jj++)
       if ( $("m" + jj + "_" + cdbeing) !=null )
            {
                canceldia(jj,cdbeing);
                keepdo = false;
            }
   var v = $("m0_0");
   if (v!=null) document.body.removeChild(v);
   hassaved = false;
   var pn = -1;
   var xx = sel.innerHTML.replace(/[^0-9]/g,'');
   if (xx!='' && isNaN(xx) == false)
       pn = parseInt(xx)-1;
   if (pn == pagenum && ismakingtab == 1) return;
  // if (pagenum>=0)  pagetbl.rows[pagenum].cells[0].style.backgroundColor = 'white';
   var tpb = '';
   if (typeof(bgarr)!= 'undefined' && pagenum>=0)
       tpb = bgarr[pagenum];
   if (pagenum != pn)
   {
      Play.stopfordel();
   }

   if (ismakingtab == 1 && haspagesort==false)
   {
       makeintostring();
   }
   
   delall();
   //attachstr  = document.f.attach.value;
   var sid = $('style1_' );
  // if (sid!=null) document.getElementsByTagName('head')[0].removeChild(sid);
   if (pn== -1)
   {
       pagenum = parseInt(pagetbl.rows[pagetbl.rows.length-2].cells[0].innerHTML.replace(/[^0-9]/g,''));
       var r = pagetbl.insertRow(pagetbl.rows.length-1);
       var c = r.insertCell(-1);
       c.innerHTML =   textmsg[1854].replace(/@/,''+ (pagenum+1));
       c.onclick = function(){changepage(this);}
       c.style.fontWeight = '400';
       c.style.backgroundColor = 'transparent';
    
   }
   else
   {
       pagenum = pn;
       initial();
       if (ismakingtab == 1 && typeof(LaTexHTML) != 'undefined')
       {
            for (var  k=0; k < numShapes; k++)
            {
                if (allShapes[k]!=null)
                {
                    LaTexHTML.formatele(allShapes[k].base);
                }
            }
       }
   }
  // pagetbl.rows[pagenum].cells[0].style.backgroundColor = 'grey';
   $('tdpage').innerHTML = textmsg[1854].replace(/@/,''+ (pagenum+1));
   //document.f.attach.value = attachstr==null?'':attachstr;
   if (typeof(bgarr) != 'undefined')
   {
       if (bgarr[pagenum] == null)
       {
           if (tpb == null) tpb = '';
           bgarr[pagenum] = tpb;
       }
       setdocbg(bgarr[pagenum]);
   }
   allowmove(1);
   setTimeout(fixall,100);
}

function clearall(d)
{

    if (ismakingtab == 1 && chatsessionnum== -1 )
    {
         makeintostring();
         copy(tempsstr,-1,shapearr[pagenum]);
         copy(templstr,-1,linearr[pagenum]);
         copy(tempcstr,-1,curvearr[pagenum]);
         copy(tempastr,-1,allies[pagenum]);
         bgarr[pagenum] = tempbstr;
    }
    for (var i=0; i < numShapes; i++)
    {
        if (allShapes[i]!=null && allShapes[i].inediting)
            return;
    }

    
    for (i=0; i < numLines; i++)
    {
        if (allLines[i]!=null)
        {
            allLines[i].delme();
            allLines[i] = null;
        }
    }
    for (i=0; i < numCurves; i++)
    {
        if (allCurves[i]!=null)
        {
            allCurves[i].delme();
            allCurves[i] = null;
        }
    }
    for (i= allShapes.length-1; i>=0; i--)
    {
        if (allShapes[i]!=null)
        {
            allShapes[i].delme();
        }
    }

    numShapes = numLines =  numCurves = 0;
    if (chatsessionnum > -1 && d == null)
    {
        parent.sendObject(chatsessionnum,'d');
    }

}
function clearall1(btn)
{
   var psel = $("selpage");
   if (btn != null)
   {
       var str = "";
       if (chatsessionnum== -1)
       {
           if (pagenum <= pagetbl.rows.length - 1 &&  pagetbl.rows.length > 1 )
           str = "<br><input type=checkbox id=\"promptcheck\" " + (deletepage==1?'checked':'') + " onclick=\"ifchecked(this)\">" + textmsg[1661];
       }
       myprompt( (textmsg[1660] + str), null, "if(v)clearall2()", textmsg[1633]);

   }
   else
   {
       delall();
       if (deletepage== 1)
       {
         var i = shapearr.length-1;
         for (; i > pagenum; i--)
         {
           shapearr[i] = shapearr[i-1];
           linearr[i]  = linearr[i-1];
           curvearr[i]  = curvearr[i-1];
           allies[i] = allies[i-1];
           bgarr[i] = bgatt[i-1];
         }

       }

       // if (cachedone(false))
       if (tempsstr!=null)
       {
           copy(shapearr,pagenum,  tempsstr);
           copy(linearr, pagenum,   templstr);
           copy(curvearr, pagenum,   tempcstr);
           copy(allies, pagenum,   tempastr);
           tempbstr = bgarr[pagenum];
           initial();
       }
       hassaved = false;
   }
}
function ifchecked(td)
{
    deletepage = td.checked?1:0;
}
function undodel()
{

}
function clearall2()
{
    clearall();
    if (chatsessionnum > -1) return;
    //$("clearbtn").text = "Undo";
    if (deletepage== 1)
    {
        for (var i=pagenum; i < shapearr.length-1 && shapearr[i+1]!=null; i++)
        {
           shapearr[i] = shapearr[i+1];
           linearr[i]  = linearr[i+1];
           curvearr[i]  = curvearr[i+1];
           allies[i]  = allies[i+1];
           bgarr[i] = bgarr[i+1];
        }
        var NN = shapearr.length-1;
        shapearr.splice(NN,1);
        linearr.splice(NN,1);
        curvearr.splice(NN,1);
        allies.splice(NN,1);
        bgarr.splice(NN,1);
        pagetbl.deleteRow(NN);
        if (pagenum>0 && shapearr[pagenum] == null)
        {
            $('tdpage').innerHTML = textmsg[1854].replace(/@/,''+ (pagenum));
            pagenum--;
        }
      
        initial();
    }
}
function changethickall()
{
    var fs = Math.floor(getFontsize()/10);
    for (var i=0; i < numLines; i++)
    if (allLines[i] != null)
    {
       allLines[i].thick = fs;
       allLines[i].redraw();
    }
    for (i=0; i < numCurves; i++)
    if (allCurves[i] != null)
    {
       allCurves[i].thick = fs;
       allCurves[i].redraw();
    }
}


function makeintostring(xy)
{

    var map = new Array(numShapes);
    var k = numShapes;
    if (typeof(curvearr) == 'undefined')
    {
        curvearr = new Array();
        for (var l=0; l <shapearr.length; l++ )
            curvearr[l] = new Array();
    }
    if (typeof(linearr) == 'undefined')
    {
        linearr = new Array();
        for (var l=0; l <shapearr.length; l++ )
            linearr[l] = new Array();
    }

    if (typeof(allies) == 'undefined')
    {
        allies = new Array();
        for (var l=0; l <shapearr.length; l++ )
            allies[l] = new Array();
    }
    if (typeof(bgarr) == 'undefined')
    {
        bgarr = new Array(shapearr.length);

    }

    if (shapearr.length <= pagenum)
    {

        shapearr[pagenum] = new Array();
         linearr[pagenum] = new Array();
         curvearr[pagenum] = new Array();
         allies[pagenum] = new Array();

    }
    var i=0;
    for (; i < k; i++)
    {
        var j = i;
        if (allShapes[i] == null)
        {
            while (k>=1 && allShapes[k-1]==null)
            {
                k--;
            }
            if (k <= i) break;
            j = k-1;
            map[j] = i;
            k--;
        }
        else map[i] = i;
        if (shapearr[pagenum]!=null)
        shapearr[pagenum][i] =  allShapes[j].toString().replace(/true$/,'false');
        if (xy!=null)
        {
            xy[i] = [allShapes[j].x,allShapes[j].y];
        }
    }
    if (shapearr[pagenum]!=null)
    for (; i < shapearr[pagenum].length; i++)
        shapearr[pagenum][i] = null;
    k = numLines;
    for (i=0; i < k; i++)
    {
        j = i;
        if (allLines[i] == null)
        {
           while (k>=1 && allLines[k-1]==null)
           {
                k--;
           }
            if (k <= i) break;
           j = k -1;
           k--;

        }
        linearr[pagenum][i] =   allLines[j].toString(map) ;

    }
    if (linearr[pagenum]!=null)
    for (; i < linearr[pagenum].length; i++)
        linearr[pagenum][i] = null;

    k = numCurves;

    for (i=0; i < k; i++)
    {
        j = i;
        if (allCurves[i] == null)
        {
           while (k>=1 && allCurves[k-1]==null)
           {
                k--;
           }
            if (k <= i) break;
           j = k -1;
           k--;

        }
        curvearr[pagenum][i] =   allCurves[j].toString() ;

    }
    if (curvearr[pagenum]!=null)
    {
        for (; i < curvearr[pagenum].length; i++)
        {
            curvearr[pagenum][i] = null;
        }
    }
}
function useoriginalurl(x)
{
    var j=0, k=0; var s = '';
    while ( (j = x.indexOf(originalurl,k)) >= 0)
    {
        if (j > k)
            s += x.substring(k,j) ;
        s += '" + originalurl + "';
        k = j + originalurl.length;
    }
    return s + x.substring(k);
}
function arrstr(x)
{
    if (x==null || x.length==0) return '[]';
    var str = '[';
    for (var j=0; j < x.length; j++)
        str += '[' + x[j][0] + "," + x[j][1] + '],';
    return str.replace(/,$/,']');
}

function makefile()
{
    attachstr  = document.f.attach.value;
    makeintostring();
    if (passedencoding == null || passedencoding == '')
    {
        passedencoding = 'UTF-8';
        var headsec = document.getElementsByTagName('head')[0];
        var metas = headsec.getElementsByTagName('meta');
        for (var j=0; j < metas.length; j++)
            if (metas[j].content && metas[j].content.toLowerCase().indexOf('charset'))
        {
            passedencoding = metas[j].content.replace(/^text.html;[ ]*charset=(.*)$/i,"$1");
            break;
        }
    }

    var ltxscrpt  = $("ltxscrpt");
    var s = "<!DOCTYPE html>\n<html>\n<head>\n<meta id=mainmeta http-equiv=\"Content-Type\" content=\"text/html;charset=" + passedencoding + "\" >\n"
       + ltxscrpt.outerHTML.replace(/;executed=true/,'')
       + "<style type=\"text/css\">.tlmmsty{border:0px black solid;font-style:normal;font-family:" + myfontname + ";vertical-align:top;text-align:center;padding:0px 0px 0px 0px}\n"
       + ".tlmmline{width:100%}\n.tlmvline{height:100%}\n"
       + ".tdbutton1{border:0px #bbb solid;font-style:normal;font-family:arial;vertical-align:middle;text-align:center;padding:0px 0px 0px 0px;}\n"
       +".samebg{background-color:transparent;color:black;font-size:20px;font-family:" + myfontname + "}\n"
       + "</style>\n\n"
       +"<!--link rel=styleSheet type=css/text href=mystyle.css-->\n\n</head>\n";

    var tx = null;
    if (typeof(bgarr)!='undefined'&&bgarr.length>0)
        tx = bgarr[0];
    else
        tx = getdocbg();
    var xz = ''; var xt;
    if (tx!=null && tx.indexOf('http') == 0 && tx.length>15)
    var xx = ";background-image:url(" + tx +")";
    else if (tx!=null &&tx.indexOf(',') > 0)
        xx = ";background-image:linear-gradient(to right," + tx +")";
    else if (tx!=null && (xt = tx.split(/ /)).length>1)
    {
        xx = ";backgroundImage:url();background-color:" + xt[1];
        xz = 'shapebg' +  xt[0] ;
    }
    else if (tx!=null &&!isNaN(tx))
    {
        xx = ";backgroundImage:url()";
        xz = 'shapebg' + tx;
    }
    var yy = document.body.style.backgroundColor;

    if (yy!=null)
        yy  = ";background-color:" + yy;
    else
        yy = '';

    s += "<body class=" + xz + "  style=\"margin:0px 5px 0px 5px" + xx + yy + "\">\n<scr" + "ipt  type=\"text/javascript\" >\n"
    s += "/*1*/var orgnum="   + orgnum+";\n"
    s += "/*1*/var originalurl='"   + originalurl +"';\n";
    s += "/*1*/var umltoolstyles = document.createElement('link');umltoolstyles.id='styleb'+(orgnum%65536);umltoolstyles.rel = 'stylesheet';umltoolstyles.type = 'text/css';umltoolstyles.media = 'screen';document.getElementsByTagName('head')[0].appendChild(umltoolstyles);\n";
    s += "/*1*/umltoolstyles.href =originalurl + '/styleb' + (orgnum%65536) + '.css';\n";
    s += "/*1*/var cachedfontfamily='" + cachedfontfamily + "';\n";
    s += "/*1*/var colors='"   +  hexcolor(colors[0]);
    for (var j=1; j < colors.length; j++) s += "," + hexcolor(colors[j]);
    s += "'.split(/,/);\n"
    s += "/*1*/var bcolors='"   +  hexcolor(bcolors[0]);
    for (j=1; j < bcolors.length; j++) s += "," +  hexcolor(bcolors[j]);
    s += "'.split(/,/);\n"
    s += "/*1*/var filename='"   + document.f.filedir.value + "';\n/*1*/var needtranslator = true;\n/*1*/var editable=true;\n/*1*/var tstmp="
    +  ((new Date()).getTime()%10000000) + ";\n/*1*/var shapearr=[];\n/*1*/var linearr=[];\n/*1*/var curvearr=[];\n/*1*/var attachstr=\"" + attachstr + "\";\n/*1*/var shapetime=[];\n/*1*/var linetime=[];\n/*1*/var curvetime=[];\n/*1*/var pagetime=[];\n/*1*/var allies=[];\n/*1*/var bgarr=[];\n";
    s += "/*1*/var kframes=[];\n/*1*/var kshapes = [];\n";
    for (j=0; j < kshapes.length; j++) if (kshapes[j]!=null && kshapes[j]!='')
    s += "/*1*/kshapes[" + j + "]=\"" + kshapes[j] + "\";\n";
    for (var jj in kframes)
    {
        s += "/*1*/kframes['" + jj + "']={esn:"  +kframes[jj].esn + ",ets:" + arrstr(kframes[jj].ets) + ",etm:" + kframes[jj].etm + ",ssn:"  +kframes[jj].ssn + ",sts:" + arrstr(kframes[jj].sts) + ",stm:" + kframes[jj].stm + ",loop:" + kframes[jj].loop + ",lsn:"  +kframes[jj].lsn + ",lts:" + arrstr(kframes[jj].lts) + ",ltm:" + kframes[jj].ltm + "};\n";
    }
    for (var n=0; n < shapearr.length && shapearr[n]!=null; n++)
    {
        var sd = '';
        for (var j=0; j < shapearr[n].length; j++)
        {
            if (shapearr[n][j] != null)
            {
                if (sd != '')  sd +=',\n';
                sd += '"' + useoriginalurl(shapearr[n][j].replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '').replace(/\n/g, '\\n')) + '"';
            }
        }

        s +="\n/*1*/shapearr[" +  n +"] = [" + sd + "];\n/*1*/linearr[" +  n + "] = [";
        sd = '';
        for (j=0; j < linearr[n].length; j++)
        {
            if (linearr[n][j] != null)  {
            if ( sd != '' ) sd +=',\n';
            sd += '"' + linearr[n][j] + '"';}
        }
        s += sd + "];\n/*1*/curvearr[" +  n + "] = [";

        sd = '';
        if (curvearr[n]!=null)
        for (j=0; j < curvearr[n].length; j++)
        {
            if (curvearr[n][j] != null)  {
            if ( sd != '' ) sd +=',\n';
            sd += '"' + curvearr[n][j] + '"';}
        }
        s += sd + "];";
      //  s += "\n/*1*/attacharr[" +  n + "] = '" + ((attacharr[n]==null||attacharr[n]=='undefined')?'':attacharr[n]) + "';";
        if (allies[n]!=null)
        {  s += "\n/*1*/allies[" +  n + "] = [";
        if (allies[n].length > 0)
        {   s += "'" +  allies[n][0] +"'";
           for (var j=1; j < allies[n].length; j++)
           {
            s += ",'" + allies[n][j] + "'";
           }
        }
        s += "];";
        }
        s += "\n/*1*/bgarr[" +  n + "] = ";
        if (bgarr[n]==null) bgarr[n]='';
        s += "'" +  bgarr[n] +"';";

    }
    
    s += "\n/*1*/var jsscripts = ['" + getlang() + ".js','cookie.js','checkHTML.js','attachment.js','curve.js?sn=30&dn=20','findrep.js','installtool.js','mousetrap.min.js','umltool.js'];\n";
    s += "/*1*/for (var ii=0; ii < jsscripts.length; ii++)\n";
    s += "/*1*/document.write('<scrip'+'t  type=\"text/javascript\" src=\"'   + originalurl + '/../js/' + jsscripts[ii] + '\"></scrip' + 't>');\n";
    s += "/*1*/</scrip"+ "t>\n</body>\n</html>";
    return s;
}
function getlang()
{
    let lang = null;
    if (typeof(jsscripts)!='undefined')
        lang = jsscripts[0].replace(/\.js/,'');
    else
    {
        var lang0 = document.location.toString();
        let j = lang0.indexOf('lang=');
        if (j > 0)
        {
            lang = lang0.substring(j+5).replace(/&.*/,'');
        }
        else
            lang = 'en';
    }
    return lang;
}
function saveas()
{
    myprompt(textmsg[2],document.f.filedir.value.replace(/\\./, '1.'), "saveas1(v)");

}
function filexist(fn, len)
{
    if (len >= 0)
    {
        document.f.filedir.value = filename;
        myprompt(fn + textmsg[3] + "<br>" + textmsg[2],document.f.filedir.value.replace(/\\./, '1.'), "saveas1(v)");

    }
    else
    {
        filename = document.f.filedir.value;
        saveit();
    }
}

function saveas1(v)
{
    if (folder !=null){
    submitstring = "saveas1('" + v + "')";
    filename = document.f.filedir.value;
    document.f.target = iframename;
    document.f.operation.value = 'exist';
    formnewaction(document.f, originalurl + "/FileOperation");
    document.f.filedir.value = v;
    expiretime = activeidletime + (new Date()).getTime();
    visual(document.f);
    document.f.submit();
    }
    else
    {
        filename = v;
        makefile();
        localStorage[filename] = tojson(); 
        let x = document.location.toString().replace(/fn=[^&]+/,'fn=' + filename);
        document.location.href = x;
    }
}
function downloadfiles()
{
    //alert(pagenum);
    if (pagenum == -1) pagenum = 0;
    let mime_type =  "text/html";
    makefile();
    var short = new Shorty();
    let contents = lzw_encode(tojson());
    contents = "<html><body>" + 
    "<textarea id=$_1 style=width:1px;height:1px>"
    + contents + "</textarea>"
    +"<script>function openit(){\nlet t=document.getElementsByTagName('textarea')[0];t.focus();t.select();\ndocument.execCommand('copy');\nopen('"
   + originalurl + "/umltool.html?fn=" + filename + "&lang=" + getlang() 
   + "&pass','_self');\n}</script>" +
    '<br><center><font size=20><a href="javascript:openit()">' + originalurl + '</a><br>The File Content of Page 1:<br><div>'
        + makemini() +  '</div></font></center></body></html>'; 
    var blob = new Blob([contents], {type: mime_type});
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
var submitstring = null;
resumehalted = function(sid)
{
   sessionid = sid;
   if (submitstring!=null && submitstring!='')
   eval(submitstring);
}

function saveit()
{
   
    submitstring = "saveit()";
    expiretime = activeidletime + (new Date()).getTime();
    hassaved = false;

    if (opener!=null &&  (onmydomain(opener))  && opener.helpsave)
    {
        if ($("savearea") == null)
            opener.helpsave(window, document.f.filedir.value,  (makefile()));
        else
            opener.helpsave(window, document.f.filedir.value,   ($("savearea").value));
    }
    else if (parent!=null && parent.helpsave)
    {
        if ($("savearea") == null)
            parent.helpsave(window, document.f.filedir.value,   (makefile()));
        else
            parent.helpsave(window, document.f.filedir.value,   ($("savearea").value));
    }
    else if (folder !=null)
    {
        document.f.folder.value  =  folder;
        document.f.destination.value = makefile();
        document.f.target = "w" + tstmp;
        document.f.operation.value = "save";
        formnewaction(document.f,originalurl + "/FileOperation");
        visual(document.f);
        document.f.submit();
    }
    else
    {
        makefile();
        localStorage[filename] = tojson(); 
    }
}
function tojson()
{
    var obj = {
    "orgnum":orgnum,
    "originalurl":originalurl,
    "umltoolstylesid":typeof(umltoolstyles)!='undefined' && umltoolstyles!=null? umltoolstyles.id:null,
    "umltoolstyleshref":typeof(umltoolstyles)!='undefined' && umltoolstyles!=null?umltoolstyles.href:null,
    "cachedfontfamily":cachedfontfamily,
    "colors":colors,
    "bcolors":bcolors,
    "filename":filename,
    "needtranslator":needtranslator,
    "editable":editable,
    "tstmp":tstmp,
    "shapearr":shapearr,
    "linearr":linearr,
    "curvearr":curvearr,
    "attachstr":attachstr,
    "shapetime":shapetime,
    "linetime":linetime,
    "curvetime":curvetime,
     "pagetime":pagetime,
     "allies":allies,
     "bgarr":bgarr,
    "kframes":kframes,
    "kshapes":kshapes,
    "page1str":makemini()
    };
    return JSON.stringify(obj);
}

function fromjson()
{
    
}
function sourcecodes()
{
    closeprompt();
    myprompt("<textarea id=\"savearea\" rows=20 cols=60></textarea><br><center><a id=\"da\"  download=\"" + filename + "\" type='text/html'>Save File</a>  <input type=button style=\"background-color:#00BBBB;color:white;width:90px;border:1px #b0b0b0 outset;border-radius:3px\" value=\"Manage Cache\" onclick=\"managefiles()\" > <input type=button style=\"background-color:#00BBBB;color:white;width:90px;border:1px #b0b0b0 outset;border-radius:3px\" value=\"" + textmsg[118] + "\" onclick=\"restorefiles()\" ></center>",null,null,filename );
    let csv = $("savearea").value = makefile().replace(/\n\/\*1\*\//g, '\n');
    var data = new Blob([csv]);
    var a = document.getElementById('da');
    a.href = URL.createObjectURL(data);
}
function restorefiles(filebox)
{
    if (filebox == null)
    {
    closeprompt();
    myprompt("Open back-up file to restore:\b<input type=file onchange=restorefiles(this)><br>Typical file name is like yyyymmdd.bak",null,null,textmsg[118]);
    //$("savearea").value = makefile().replace(/\n\/\*1\*\//g, '\n');
    }
    else
    {
       var file = filebox.files[0];
       var reader = new FileReader();
       reader.onload = function (e) 
       {
           let v  = e.target.result;
           var xy = JSON.parse(lzw_decode(v));
           let kk = 0 ;
           for (let x in xy)
           {
               localStorage[x] = xy[x];
               kk++;
           }
           myprompt(kk + " files are restored from  " + filebox.value);
       };
       reader.readAsText(file);
   }
}
function delivery()
{
     closeprompt();
     var attr  = "";
     var x = document.body.attributes;
     for (var i=0; i < x.length; i++)
     {
         if (x[i].value != null && x[i].value != 'null' && x[i].value != '')
         {
             attr  += x[i].name + "=\"" + x[i].value +"\" ";

         }
     }
     var s = "<!DOCTYPE html><html><head>" + document.getElementsByTagName("head")[0].innerHTML + "</head><body "
    + attr  + ">";

     for (var j =0; j < numShapes; j++)
     {
         var w = allShapes[j].base;

         attr  = "";
         x = w.attributes;
         for (  i=0; i < x.length; i++)
         {
           if (x[i].value != null && x[i].value != 'null' && x[i].value != '' && x[i].name.indexOf("on") != 0)
           {
             attr  += x[i].name + "=\"" + x[i].value +"\" ";
           }
         }

         s += "<DIV " + attr + ">" + w.innerHTML + "</DIV>\n\n\n";

     }
    myprompt("<textarea id=\"savearea\" rows=20 cols=60></textarea><br><center><input type=button style=\"background-color:#00BBBB;color:white;width:90px;border:1px #b0b0b0 outset;border-radius:3px\" value=\"Editing Version\" onclick=\"sourcecodes()\" ></center>",null,null,textmsg[532]);
    $("savearea").value = s + "</body></html>";

}
function managefiles(ms)
{
    if (ms == null) ms = '';
    else 
        ms = '<font color=red>'+ ms +'</font>';
    var v =ms + '<table align=center id=savearea style=border-collapse:collapse;border-color:lightyellow border=1><tr bgcolor=lightgray><td>File Name</td><td><input type=checkbox onclick=selectallfile(this)></td><td>Preview</td></tr>';
    for (let fn in localStorage)
    {
        if (fn.indexOf('.html')>0)
        {
            v += '<tr><td>' + fn + '</td><td><input type=checkbox></td><td onmouseover=showpage1(\''+ fn + '\') onmouseout=hidepage1()>Preview</td></tr>';
        }
    }
    v += '</table>';
    myprompt(v + "<br><center><input type=button style=\"background-color:#00BBBB;color:white;width:90px;border:1px #b0b0b0 outset;border-radius:3px\" value=\"Back Up\" onclick=\"backupFiles()\" > <input type=button style=\"background-color:#00BBBB;color:white;width:90px;border:1px #b0b0b0 outset;border-radius:3px\" value=\"Delete\" onclick=\"deleteSFiles()\" ><br><a   href=\"javascript:restorefiles()\" >" + textmsg[118] + "</a></center>",null,null,"Files");
    //$("savearea").value = s + "</body></html>";   
}
function showpage1(fn)
{
   var tt = JSON.parse(localStorage[fn]).page1str;
   var d = document.createElement('div');
   var xy = findPositionnoScrolling(promptwin);
   d.style.cssText = 'position:absolute;left:' + (xy[0] + 200) + 'px;top:100px';
   d.innerHTML = JSON.parse(localStorage[fn]).page1str;
   d.id = "$_z_$";
   document.body.appendChild(d);
}
function hidepage1()
{
   document.body.removeChild($("$_z_$"));
}
function selectallfile(c)
{
    if (c.checked)
    {
       var tbl = $("savearea");
       for (let i =1; i < tbl.rows.length; i++)
       {
           tbl.rows[i].cells[1].childNodes[0].checked = true;

       }
    }
    else
    {
       var tbl = $("savearea");
       for (let i =1; i < tbl.rows.length; i++)
       {
           tbl.rows[i].cells[1].childNodes[0].checked = false;
       }
    }
}
function deleteSFiles()
{
   var tbl = $("savearea");
   var c = 0;
   for (let i =1; i < tbl.rows.length; i++)
   {
       if (tbl.rows[i].cells[1].childNodes[0].checked)
       {
           delete  localStorage[tbl.rows[i].cells[1].innerHTML];
           c++;
       }
   }
   let ms = '';
   if (c == 0) ms = 'No file selected';
   managefiles(ms);
}
function backupFiles()
{
   var obj = {};
   var tbl = $("savearea");
   var nf = 0;
   for (let i =1; i < tbl.rows.length; i++)
   {
       if (tbl.rows[i].cells[1].childNodes[0].checked)
       {
           nf++; 
           let fn = tbl.rows[i].cells[0].innerHTML;
           obj[fn] = localStorage[fn];
       }
   }
   if (nf == 0)
   {
      managefiles('No file selected');
      return;
   }
   var s = lzw_encode(JSON.stringify(obj)); 
   var d  = new Date(); 
let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
//let hr = new Intl.DateTimeFormat('en', { hour: '2-digit' }).format(d);
//let mn = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d);
//let se = new Intl.DateTimeFormat('en', { second: '2-digit' }).format(d);
    
   var fn = "showcase" + ye + mo + da  + ".bak";
   
        var blob = new Blob([s], {type: "text/json"});

        var dlink = document.createElement('a');
        dlink.download = fn;
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
function toclip(fn)
{
   var copyText = document.getElementById("savearea");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  myprompt("File contents have been copied to clipboard. You can paste them to a notepad and save them as a file named <font color=red>" + fn + "</font>");
}
function removescript(ss)
{
    var i = 0, j = -9;
    var a = '';
    var s = ss.toLowerCase();
    while ( (i= s.indexOf("<scr" + "ipt ", j+9)) > 0 )
    {
        a += ss.substring(j+9, i);
        j = s.indexOf("</scr" + "ipt>", i+8);
    }
    a += ss.substring(j+9);
    return a;
}
function renull(fn,len,furl,ltime)
{
    if (activesave)
    {
    filename = fn;
    myprompt(textmsg[1655]);
    promptwin.style.left = '10px';
    promptwin.style.top = '1px';
    setTimeout('closeprompt()',1500);

    }
    hassaved = true;
    activesave = false;
}
function addedItem(fn, url, len, tm)
{
    ResizeUploaded.uploaded("web/" + url, fn+'@'+tm);
    return;
    closeprompt();
    var num = beingloadnum;
    var s = "<img alt=\"" + fn + "\" src=\"" + originalurl + "/FileOperation?did=" + url +"\" />";
    var b = $("t" + num);
    var t = $("e" + num);
    allShapes[num].words = t.value + s;
    document.body.removeChild(b);
    done(num);
    document.onmousemove = onmouseover0;
}
function syn(act,x,y)
{
   if (act.indexOf('web') == 0)
   {
       var fn = x.replace(/@.*/,'');
       document.title = fn;
       var len = x.replace(/[^@]+@/,'');
       var url = act.substring(4);
       ResizeUploaded.uploaded(act,x);
       addedItem(fn, url, len);
   }
   else if (act == 'del')
   {
       if (x.replace(/[0-9|a-z]/ig,'').replace(/[\-|_|\.|\$]/g,'')=='')
          ResizeUploaded.refreshatt();
   }
   else if (isNaN(act))
   {
       document.f.filedir.value = filename;
       document.title = filename;
   }
   else
   {

       if (whichact=='sql')
       {
       if (parseInt(act) > 0)
       {
          //var nam = open("tables.jsp?tname="+tnamebeing);
           if ( typeof(parent.frames[0])!='undefined')
           {
               parent.frames[0].document.location.href =  parent.frames[0].document.location.toString();
           }
           myprompt(textmsg[1656]);

       }
       }
   }

}

function winclick()
{
   var adot = document.getElementById("drawdonebtn");
   if (adot != null) 
   {
       var xy = findPositionnoScrolling(adot);
       if (myHinty <= xy[1] + adot.offsetHeight && myHinty >= xy[1]
               && myHintx <= xy[0] + adot.offsetWidth && myHintx >= xy[0])
       return;
   }
   if (myHinty < 30 ) return;
   if (insideobj()) return;
   var arr = null;
  
   if (drawstate== 1)
   {
        drawpointslength = 1;
        drawpoints = [[myHintx,myHinty]];
        drawstate = 2;
        var k = Math.floor(getFontsize()/10);
        new Curve(drawlinenumber,'curve', k, null, 0,2,0, drawpoints );
   }
   else if (drawstate== 2)
   {
        linetype = '';
        drawstate = 0;
        if ( chatsessionnum > -1 )
        {
             parent.sendObject(chatsessionnum, drawlinenumber + " c" +  allCurves[drawlinenumber].toString());
        }
        drawlinenumber = null;

   }
   else if (drawstate== 3)
   {
        drawpointslength = 1;
        drawpoints = [[myHintx,myHinty]];
        drawstate = 4;
        var adot = document.createElement("span");
        adot.id = "drawdonebtn"  ;
        adot.style.cssText = "position:absolute;width:50px;left:" +  (myHintx+3)
        +"px;top:" + (myHinty + 3) +"px;border:1px #909090 solid;background-color:orange;text-align:center";
        adot.innerHTML = "End";
        document.body.appendChild(adot);
        Drag.init(adot);
        adot.onmouseover = function()
        {
           this.style.left = (myHintx - 20 ) + 'px';
           this.style.top =  (myHinty - 15 ) + 'px';
        }
        adot.onclick = function()
        {
           drawdone(this);
        }
        new Curve(drawlinenumber,'mline', Math.floor(getFontsize()/10), null,0,2,0, drawpoints);
   }
   else if (drawstate == -1)
   {
       drawstate = 3;
   }
   else if (drawstate >= 4)
   {
        drawpoints[drawpointslength++] = [myHintx,myHinty];
        allCurves[drawlinenumber].draw(drawpointslength-2);
        drawstate++;
        adot = $("drawdonebtn");
        adot.style.left = (myHintx+3);
        adot.style.top = (myHinty+3);
   }
   
   else  if (state == 1)
   {
        savestart = -1;
        savestartx = myHintx;
        savestarty = myHinty;
        state = 2;
        adot = document.createElement("div");
        adot.id = "q-1"  ;
        adot.style.cssText = "position:absolute;width:6px;height:6px;left:" +  (myHintx-3)
        +"px;top:" + (myHinty - 3) +"px;border:1px #909090 solid;background-color:yellow";
        adot.innerHTML = fillblank;
        document.body.appendChild(adot);
   }
   else if (state== 2)
   {
        // Math.floor(getFontsize()/10);
        var l = new Line(drawlinenumber,linetype,savestart,savestartx,savestarty, -1, myHintx, myHinty, cachedlinethick, seldirect,0, 2,cachedlinecolor, 0);

        if (numsselected==null)
        {
            numsselected = [l.num]
        }
        else
            numsselected[numsselected.length] = l.num;
        drawlinenumber = null;
         if (savestart == -1)
         {
            var x = $("q-1" );
            if (x!=null)
                document.body.removeChild(x);
         }
         else
         {
            var x = $("q" + (savestart));
            if (x!=null)
               allShapes[savestart].base.removeChild(x);
         }

        state = 1;
        enabletd('tdline,tdcord');
   }
   else if ( ( arr = closelineend()) !=null)
   {
       var dv = document.createElement("div");
       dv.id = "f" + arr[2] + "_" + arr[3];
       dv.style.cssText = "position:absolute;z-index:10;width:6px;height:6px;background-color:yellow;border:1px #909090 solid;left:" + (arr[0]-3) +"px;top:" +
           (arr[1]-3) + "px;";
       document.body.appendChild(dv);
       Drag.init(dv);
       dv.onDragEnd = function(x,y)
       {
          var xs = this.id.substring(1).split(/_/);
          var i = parseInt(xs[0]);
          if (xs[1]== '0')
          {
              allLines[i].sx = x + 3;
              allLines[i].sy = y + 3;
          }
          else if (xs[1]== '1')
          {
              allLines[i].ex = x + 3;
              allLines[i].ey = y + 3;
          }
          allLines[i].redraw();
          document.body.removeChild(this);
       }
   }
   else if (dobackground && $("m0_0")==null)
   {

        var pg = $("tdbg");
        if (pg!=null)
        {
            var xy = [0, 50];
            if(typeof(findPositionnoScrolling)!= 'undefined')
               xy = findPositionnoScrolling(pg);
            if (! (myHintx < xy[0] + 100 && myHintx > xy[0] && myHinty < xy[1] + pg.offsetHeight+5 && myHinty > xy[1]))
            mdia(0,0);
        }
        else
            mdia(0,0);
   }

    document.onmousemove = onmouseover0;
}
function closelineend()
{
    for (var i=0; i< numLines; i++)
    {
        if (allLines[i] == null) continue;
        if (allLines[i].startnum== -1 && (myHintx - allLines[i].sx)*(myHintx - allLines[i].sx) + (myHinty - allLines[i].sy)*(myHinty - allLines[i].sy) < 25 )
            return [allLines[i].sx,allLines[i].sy,i,0];
        else if( allLines[i].endnum== -1 && (myHintx - allLines[i].ex)*(myHintx - allLines[i].ex) + (myHinty - allLines[i].ey)*(myHinty - allLines[i].ey) < 25)
            return [allLines[i].ex,allLines[i].ey,i,1];

    }
    return null;

}
function divclick(dv)
{
   if (dv.id.charAt(0) == 'b') return;

   var num =  parseInt(dv.id.substring(1));
   if (''+ num== 'NaN')
   {
       myprompt(dv.id + ' is num');

       return;
   }

   if (state== 0)
   {
       var tt = dv.innerHTML.replace(/^\s+/g,'').replace(/\s+$/,'').replace(/<[\/]?nobr>/gi,'');

       mdia(num, 1);
   }
   else
   {
       var bv = $("b" + dv.id.substring(1));
       begindraw(bv);
   }
   document.onmousemove = onmouseover0;
}

function islatex(s)
{
   return (s.indexOf("$") >= 0  || s.indexOf("\\begin{") >=0 );
}
function ishtml(s)
{
   s = s.toLowerCase();
   var k = 0;
   var r = RegExp(/<[a-z|0-9]+/);
   while (k < s.length-4)
   {
       var m = r.exec(s.substring(k));
       if (m == null) return false;
       var z = m.toString();

       k += m.index + z.length;
       var uu = z.substring(1);
       if ( (s.indexOf("</" + uu + ">",k) > 0 || s.indexOf("/>",k) > 0 ) && uu!='oln'&& uu!='ola' && uu!='ulb')
           return true;
   }
   return false;
}
var formatstr0old = formatstr0;
formatstr0 = function(v, fmt)
{
   // var bb = ishtml(v);
    v =  formatnolx(v, colorbeing, fmt );
    return hw.merge(v);
}
 
var shapenamebeing = null;
var colorbeing = 'red';
function  tohtml1(v,urlas,cl, shapename)
{

}
function tohtml(v,urlas,cl, shapename)
{
    
    colorbeing = cl;
    shapenamebeing = shapename;

    var ttype = 0;
    if (urlas.indexOf('HTML')>=0) ttype = 1;
    else if (urlas.indexOf('LaText')>=0) ttype = 2;
    var s = formatstr(v, ttype).replace(/#aaaaaa/,cl);

    if (s.indexOf('<nobr>http')==0) s = s.replace(/^<nobr>/,'').replace(/<.nobr>$/,'');
    s = mergelink(s,urlas);

    return s;
}
function makemultmedia(link,urla)
{
    var xs = urla.split(/_/);
    if (xs[1] == null || xs[1]=='') xs[1] = '';
    if ( (xs[0] == '2' || xs[0] == '3') && xs[1] == '')
    {
        xs[1] = '500';
    }
    if (xs[0] == '1')
    {
        if (ismakingtab!=1)
        {
            link = originalurl + "/image/pic.png";
            xs[1] = Math.round(ismakingtab*parseFloat(xs[1]));
            if (xs[1] != '' && !isNaN(xs[1]) && parseInt(xs[1])>1)
                return '<img src="' + link + '" width=' + xs[1] + "   >";

        }
        if (xs[1] != '' && !isNaN(xs[1]) && parseInt(xs[1])>1)
            return '<img src="' + link + '" width=' + xs[1] + ">";
        else
            return '<img src="' + link + '"  >';
    }
    else if (xs[0] == '2')
    {
        if (ismakingtab!=1)
        {
            link = originalurl + "/image/giphy.gif";
            xs[1] = Math.round(ismakingtab*parseFloat(xs[1]));
        }
        return '<iframe style="margin:4px 4px 4px 4px" src="' + link + '" width=' + xs[1] + " height=" + xs[1] + ">";
    }
    else if (xs[0] == '3')
    {
        if (ismakingtab!=1)
        {
            link = originalurl + "/image/index.gif";
            xs[1] = Math.round(ismakingtab*parseFloat(xs[1]));
            return '<img src="' + link + '" width=' + xs[1] + ">";
        }
        if (link.indexOf('.mp4')>0)
          link = '<video  width=' + xs[1] + ' controls><source  src="' + link + '" type=video/mp4 /></video>';
        else if (link.indexOf('youtu')>0 || link.indexOf('youku')>0)
          link =  '<iframe  style="margin:4px 4px 4px 4px"  src="' + link.replace(/watch\?v=/,'embed/') + '" width=' + xs[1] + " height=" + Math.round(0.5625*parseInt(xs[1])) + " style=border:0px >";
        return  link;
    }
    else if (xs[0] == '4')
    {
         if (ismakingtab!=1)
        {
            return 'sound clip';
        }
         link = '<embed src="' + link + '" width=200 height=25></embed>';

        return  link  ;
    }
    else if (xs[0] == '5')
    {
        return '<a href="' + link + '" target=_blank>' + link + '</a>';
    }
    return link;
}
function foldto(x, l)
{
    return "<div style=\"overflow-wrap:break-word;word-wrap:break-word;-ms-word-break: break-all;word-break: break-all;word-break: break-word;ms-hyphens: auto;"
 + "-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;\">" + x + "</div>";
    var y = '';
    var i = 0;
    while (true)
    {
        if (i + l < x.length)
        {
            y += x.substring(i, i+l) + '<br>';
        }
        else
        {
            y += x.substring(i, x.length);
            return y;
        }
        i += l;
    }
}
function mergelink(v,urlas)
{
   if(urlas==null) return '';
   var tail = '';
   if (urlas.indexOf('HTML')>=0) tail ='HTML';
   else if (urlas.indexOf('LaTex')>=0) tail = 'LaText';
   urlas = urlas.replace(/HTML/,'').replace(/LaTex/,'');
   var urlarr = urlas.split(/\|/);
   var x = '';
   var r = new RegExp(/[ |"|'|\]|\[|\(|\)|\{|\}|\n|\r|\t|<]/);
   var k = 0;
   var K = 0;
   var link;
   var z = '';
   var edt = $('t' + numbeing);
   var needp = (edt!=null && edt.getElementsByTagName('table')[0].rows.length==2 );
   var  urlasnew ='';
   var ttype = 0;
   if (needp && typeof(guessFormat)!='undefined')
       ttype=guessFormat($('e' + numbeing).value);

   while (k < v.length)
   {
       var j = v.indexOf('http://',k);
       if (j == -1) j = v.indexOf('https://',k);
       if (j == -1)
       {
           z += v.substring(k);
           break;
       }
       var q = urlarr[K];
       if (urlasnew != '') urlasnew += '|';
       urlasnew += q;
       if (q == null) q= '';
       var w = asoption(urlas,K);
       var m = r.exec(v.substring(j));
       if (m == null)
           link = v.substring(j);
       else
           link = v.substring(j, m.index+j);
       if (j < 6 || v.substring(j-6, j).toLowerCase().indexOf("src=") <0 && v.substring(j-6, j).toLowerCase().indexOf("href=") <0)
       {
           if (needp)
           {
               var ll = w.replace(/<[^>]+>/g, "").length + 240;
               x += '<tr bgcolor=lightyellow><td width=100% >' + foldto(link,ll) + "</td></tr><tr><td  width=100% >" + w + "</td></tr><tr><td bgcolor=transparent></td></tr>";
           }
           var e = link;
           if ( ismakingtab != 1)
           {
               if (e.length > 8) e = e.substring(0,8)+"...";
           }
           else
              e = makemultmedia(link,q);

           z += v.substring(k, j) + e;
       }
       k  = link.length + j;
       K++;
   }
   var x1='';
   if (ishtml(v))
      x1 = '<div style="margin:2px 2px 2px 2px;border:1px #999999 solid;"><table  cellspacing=0 cellpadding=3 style="margin:0px 3px 0px 0px;border-radius:0px"><tr><td width=50><nobr><b>' 
      + textmsg[156] 
      + '</b></nobr></td><td   align=left style="padding:0px 8px 0px 0px"><input name=wordformat style=background-color:#bbb onclick=changeformat('
      + numbeing 
      + ',0) type=radio value=0 ' 
      + (tail==''?'checked':'') 
      + '>' 
      + textmsg[1608] 
      + '</td><td  style="padding:0px 8px 0px 0px" align=left><input name=wordformat  type=radio  style=background-color:#bbb  onclick=changeformat('
      + numbeing 
      + ',1)  value=1 ' 
      + (tail=='HTML'?'checked':'') 
      + '>HTML</td><td  style="padding:0px 8px 0px 0px" align=left><input name=wordformat value=2  type=radio  style=background-color:#bbb  onclick=changeformat('+numbeing +',2) ' + (tail=='LaTex'?'checked':'') 
      + ">LaTex</td></tr></table></div>";

   if (needp && (x!='' || x1!=''))
   {
       var x2 = '';
       if (x!='') x2 =   textmsg[1777]+'<div style="margin:2px 2px 2px 2px;border:1px #999999 solid;"><table width=100%  cellspacing=0 cellpadding=3 style="margin:0px;border:1px #999999 solid;border-radius:0px">' + x + "</table></div>";
       if (x1!='') x2 += x1;
       //myprompt(x2,null,null,textmsg[1634]);
       var tbl = $('t'+numbeing).getElementsByTagName('table')[0];
       var r = tbl.insertRow(1);
       var c = r.insertCell(-1);
       c.innerHTML = x2;
       c.style.cssText ='font-size:14px;font-weight:400;background-color:#bbb';
       allShapes[numbeing].urlas = urlasnew + tail;
   }
   return z;
}



function changeformat(num,n)
{
    var t = ''+n;
    var x = allShapes[numbeing].urlas;
    if (t == '0')
    {
        if (x.indexOf('HTML')>=0) allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/HTML/,'');
        if (x.indexOf('LaTex')>=0) allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/LaTex/,'');
    }
    else if (t == '1')
    {
        if (x.indexOf('LaTex')>=0) allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/LaTex/,'');
        if (x.indexOf('HTML')== -1) allShapes[numbeing].urlas += "HTML";
    }
    else if (t == '2')
    {
        if (x.indexOf('HTML')>=0) allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/HTML/,'');
        if (x.indexOf('LaTex')== -1) allShapes[numbeing].urlas += "LaTex";
    }
}

function chooseurlas( K,i)
{
    var ttype='';
    if (allShapes[numbeing].urlas.indexOf('HTML')>=0)
    {
        allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/HTML/,'');
        ttype ='HTML';
    } else if (allShapes[numbeing].urlas.indexOf('LaTex')>=0)
    {
        allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/LaTex/,'');
        ttype ='LaTex';
    }

    var urlarr = allShapes[numbeing].urlas.split(/\|/);
    var q = $('width' + K);
    q.style.visibility=  (i<4?'visible':'hidden');
    var wv = '';
    if ( i < 7)
    {
        var w = q.getElementsByTagName('table')[0].rows[0].cells[1].getElementsByTagName('input')[0];
        var wv = urlarr[K];
        if (wv == null) wv = '';
        var j = wv.indexOf('_');
        if (j == -1)
            wv = '';
        else
            wv = wv.substring(j+1);
        if ( (i==2 || i==3))
        {
            if (  wv=='' || isNaN(wv) )
            {

                if (w.value =='' || isNaN(w.value) || parseInt(w.value) < 1)
                   wv = w.value = '500';
                else
                   wv = w.value;
            }
            else
            {
                if (w.value =='' || isNaN(w.value) || parseInt(w.value) < 1)
                    w.value = wv;
            }
        }
        else if (i==1)
        {
            if (  wv=='' || isNaN(wv) )
            {
               if (w.value =='' || isNaN(w.value) || parseInt(w.value) < 1)
                   wv = w.value = '';
                else
                   wv = w.value;
            }
            else
            {
                if (w.value =='' || isNaN(w.value) || parseInt(w.value) < 1)
                    w.value = wv;
            }
        }

    }

    var urlasnew = '';
    for (var j=0; j < urlarr.length; j++)
    {
      if (j > 0) urlasnew += "|";
      if (j != K)
        urlasnew +=   urlarr[j];
      else
        urlasnew +=  i + (wv==''?'':'_')  +  wv;
    }
    allShapes[numbeing].urlas = urlasnew + ttype;
  
}
function dourlaswidth(td, K)
{
    var ttype='';
    if (allShapes[numbeing].urlas.indexOf('HTML')>=0)
    {
        allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/HTML/,'');
        ttype ='HTML';
    } else if (allShapes[numbeing].urlas.indexOf('LaTex')>=0)
    {
        allShapes[numbeing].urlas = allShapes[numbeing].urlas.replace(/LaTex/,'');
        ttype ='LaTex';
    }
    var urlarr = allShapes[numbeing].urlas.split(/\|/);
    var urlasnew = '';
    var wv = td.value;
    var z = urlarr[K].split(/_/)[1];
    var p = urlarr[K].split(/_/)[0];

    if (K == 2 || K == 3)
    {
        if (wv == '' || isNaN(wv))
            t.value = wv =(z==''||z==null||isNaN(z))? '500':z;
        else
            z = wv;
    }
    else if (K == 1)
    {
        if (wv == '' || isNaN(wv))
            t.value = wv =(z==null||z==''||isNaN(z))? '':z;
        else
            z = wv;
    }

    for (var i=0; i < urlarr.length; i++)
    {
      if (i > 0) urlasnew += "|";
      if (i != K)
        urlasnew +=   urlarr[i];
      else
        urlasnew +=   p + (td.value==''?'':'_')  + td.value;
    }
    var t = allShapes[numbeing];
    t.urlas = urlasnew + ttype;
   
}

function drawlinein(x0, y0, x1, y1, thick,color)
{
    var str = '<div style="';

    if (Math.abs(x1-x0) > Math.abs(y1-y0) )
    {
        var width = Math.sqrt((y1-y0)*(y1-y0) + (x1-x0)*(x1-x0));
        var left = x0 + (x1-x0)/2 - width/2 + thick/2;
        var top =  y0 + (y1-y0)/2 ;
        var height = thick;
        var deg  =   Math.atan2(y1-y0 , x1-x0 )*180/3.14159265;
        str +=  'position:relative;left:'
        + left + 'px;top:'
        + top +  'px;width:'
        + width + 'px;height:'
        + height + "px;background-color:" +  color  + ';-ms-transform: rotate(' + deg
        + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px';

    }
    else //if (Math.abs(x1-x0) < Math.abs(y1-y0) )
    {
        var height = Math.sqrt((y1-y0)*(y1-y0) + (x1-x0)*(x1-x0));
        var left = x0 + (x1-x0)/2;
        var top =  y0 + (y1-y0)/2 - height/2 + thick/2;
        var width = thick;
        var deg  = -Math.atan2(x1 -x0,y1 -y0)*180/3.14159265;
        str += 'position:relative;left:'
        + left + 'px;top:'
        + top +  'px;width:'
        + width + 'px;height:'
        + height + "px;background-color:" +  color + ';-ms-transform: rotate(' + deg
        + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px';

    }
    return str +  '"><!--></div>';

} 
function asoption(urlas,K)
{
    if (urlas == null) return '';
    var urlarr = urlas.split(/\|/);
    var X = urlarr[K];
    if (X == null || X =='') X = '6';
    var Y = X.split(/_/);
    if (Y[1] == null) Y[1] = '';
    var xs = textmsg[1775].split(/@/);
    var x = '<table border=0 cellspacing=0 cellpadding=0><tr ><td><nobr><b>' + xs[0] + "</b></nobr></td>";
    for (var i=1; i < xs.length; i++)
    {
        var w = (Y[0]==''+i);
        x += "<td><input onclick=\"chooseurlas(" + K + "," + i + ")\" name=opts" + K + " type=radio  style=background-color:#bbb value=\"" + i + "\" " + (w?'checked':'') + '></td><td style="padding:0px 8px 0px 0px"><nobr>' + xs[i] + "</nobr></td>";
    }
    x += '<td  id=width' + K + ' style=visibility:' + (parseInt(Y[0]) < 4?'visible':'hidden') + '><table cellspacing=0 cellpadding=0><tr ><td><nobr>' +textmsg[733] + "</nobr></td><td><input type=text name=aswidth size=3 value=\"" + Y[1] + "\" onchange=dourlaswidth(this,"+ K + ")></td><td>px</td></tr></table></td></tr></table>";
    return x;
}


function dotable(str,cl)
{
    var x =(new CSVParse(str, '"', "\t", "\r\n")).tohtml().replace(/border\-collapse:/,'border:1px ' +cl + ' solid;border-collapse:').replace(/<td /g,'<td style=border-color:' +cl + ' ');

    return x;
}
if (typeof(formatnolx) == 'undefined')
   var formatnolx = null;

formatnolx = function(v,cl, fmt)
{
    var j = v.indexOf("<img ");
    if (j== 0) return v;
    var j = v.indexOf("<iframe ");
    if (j== 0) return v;
    if (j < 0)
    {
      v = dotag(v,cl, fmt);
      return v;
    }

    var y = v.substring(j);
    v = v.substring(0,j);
    v = dotag(v,cl, fmt);
    j = v.lastIndexOf("<br>");
    if (j < 0 || j>=0 && j < v.length-5)
      return v + "<br>" + y;
    return v + y;
}
function dotag(v,cl, fmt)
{
   var tag = ['oln', 'ola', 'ulb'];
   for (var i=0; i < 3; i++)
   {
       var j = v.indexOf("<" + tag[i] + ">");
       if (j>=0)
       {
          var k = v.indexOf("</" + tag[i] + ">",j);
          var x = v.substring(0,j);
          if (x.length>0 && x.charAt(x.length-1)!='\n')
              x += "\n";
          x = dotag(x,cl, fmt);
          if (k >=0)
          {
              var y = dotag1(v.substring(j+ tag[i].length+2, k),tag,i,cl, fmt);
              return x + y + dotag(v.substring(k+tag[i].length+3), cl, fmt);
          }
          return x   + dotag1(v.substring(j+ tag[i].length+2),tag, i,cl, fmt);
       }
   }

   if (shapenamebeing== 'rightrect' || shapenamebeing== 'roundrect')
   v =   v.replace(/\n[\r| ]*\n/g, "<br><div style=\"display:block;width:100%;height:2px;background-color:" + cl +"\"><!----></div>");

   var arr = v.split(/\n/);
   v= '';
   for (i=0; i < arr.length; i++)
   {
      if (v!='') v += "<br>";
      //v += "<nobr>" +  arr[i]  + "</nobr>";
      v += arr[i];
   }
   return v;
}
function dotag1(v, tag,i,cl,  fmt)
{

   var arr = v.split("\n");
   var base = '1a';

   var s = '';
   var k = 0;
   for (var j=0; j <  arr.length; j++)
   {
       if (arr[j].length== 0)
       {
           s += '<br>';
           continue;
       }
       else if (arr[j].charAt(0)== ' ' )
       {
           var rr = arr[j].replace(/^\s+/,'');
           if (fmt == 0) rr = formatstr0old(rr,0);
           s += "<nobr>" + diamschar +  rr  + "</nobr><br>";
       }
       else
       {
           var x = bullchar;
           var rr = arr[j];
           if (fmt==0) rr = formatstr0old(rr,0);
           if (i < 2)
               x = String.fromCharCode(base.charCodeAt(i) + k ) + ".";
           s += "<nobr>" + x +  rr   + "</nobr>";
           if ( j < arr.length-1) s += "<br>";
           k++;
       }
   }

   return s;
}
function uploadfile()
{
    if (folder == null)
    {
        
    }
    else
    {
        saveit();
        document.ff1.localpath.click();
    }
}
var freference;
function upload(f,num)
{
    freference = f;
    beingloadnum = num;
    submitstring = "upload(freference,beingloadnum)";
    expiretime = activeidletime + (new Date()).getTime();
    var xx;
    if (chatsessionnum > -1)
    {
        f.subdb.value = parent.subdb;
        f.subfolder.value = "chat";
        formnewaction(f, "UploadComm");
        f.subfolder.disabled = false;
        f.saveindir.disabled = true;
    }
    else
    {
        f.action = "UploadFile";
        f.saveindir.disabled = false;
        f.subfolder.disabled = true;
        xx = f.saveindir.value;
    }

    if (saveable())
    {
        f.saveindir.value = xx + "/image";
        f.target = iframename ;
       visual(f);
       expiretime = activeidletime + (new Date()).getTime();
       f.submit();
        f.saveindir.value = xx;
    }

}
 
function addtab(num)
{
    var t = $('e' + num);
    t.focus();
    var j = caretPos(t);
    var x = '';
    if (j>0) x = t.value.substring(0,j);
    t.value =  x + "\t"  + t.value.substring(j);

}
var cachedlinethick = 1;
var cachedfontsize = '15px';
var cachedbgcolor = 0;
var cachedcolor = 0;
function selectfontname(sel)
{
    cachedfontfamily = sel.options[sel.selectedIndex].value;
  
}
function changefsinousing(sel,num)
{
    var edt = $('e' + num);
    var fs = parseInt(sel.options[sel.selectedIndex].text.replace(/px/,''));
    edt.style.fontSize = fs + 'px';
    allShapes[num].base.style.fontSize = fs + 'px';
    allShapes[num].fontsize = fs;
    cachedfontsize = edt.style.fontSize;
}
function addtilde(id)
{
    var x = $(id);
    var y = getCursorPos(x)+1;
    x.value   = x.value.substring(0, y ) + "\t" + x.value.substring(y);
    setCursorPos(x,y+1);
}
function setCursorPos(input, start, end) {
    if (arguments.length < 3) end = start;
    if ("selectionStart" in input) {
        setTimeout(function() {
            input.selectionStart = start;
            input.selectionEnd = end;
        }, 1);
    }
    else if (input.createTextRange) {
        var rng = input.createTextRange();
        rng.moveStart("character", start);
        rng.collapse();
        rng.moveEnd("character", end - start);
        rng.select();
    }
}
var xx;
function getCursorPos(input) {
    if ("selectionStart" in input && document.activeElement == input) {
        return {
            start: input.selectionStart,
            end: input.selectionEnd
        };
    }
    else if (input.createTextRange) {
        var sel = document.selection.createRange();
        if (sel.parentElement() === input) {
            var rng = input.createTextRange();
            rng.moveToBookmark(sel.getBookmark());
            for (var len = 0;
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                len++;
            }
            rng.setEndPoint("StartToStart", input.createTextRange());
            for (var pos = { start: 0, end: len };
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                pos.start++;
                pos.end++;
            }
            return pos;
        }
    }
    return -1;
}
function changeshapefontfamily(sel,num)
{
   allShapes[num].fontfamily = sel.options[sel.selectedIndex].value;
   $('e' + num).style.fontFamily = allShapes[num].fontfamily;

}
function showedit(num,x,y,w,h,tt)
{
    var a ;
    if (tt!=null)
    {
        if (w == null) w = favorw;
        if (h == null) h = favorh;
        a = $("a" + num);
        if (a!=null) a.style.visibility = 'hidden';
    }
    var edt = document.createElement("div");
    edt.id = "t" + num;
    var fns = textmsg[1594].split(/@/);
    var ffs =  "<select name=ff style=font-size:15px;background-color:#BBBBBB;font-weight:700 onchange=changeshapefontfamily(this," + num + ")>";    //var fns = textmsg[1594].split(/@/);
    var ii = "";
    if (tt!=null)
    for(var  i =0; i < fns.length; i++)
    {
         if (allShapes[num]!=null && samefont(allShapes[num].fontfamily,fns[i]) || 
         fns[i] + 'px' == cachedfontsize) ii = " selected "; else ii = "";
         ffs += "<option value=\"" + fns[i] + "\" " + ii + " >" + fns[i].replace(/,.*/,'').replace(/ .*/,'') + "</option>";
    }
    ffs += "</select>";
    var fml = 'courier'; if (allShapes[num]!=null) allShapes[num].fontfamily;
    edt.style.cssText = "border-radius:4px;border:2px #444 solid;background-image:linear-gradient(-45deg,#ccc,#bbb,#999,#aaa);position:absolute;z-index:" + (2*numShapes+4) + ";left:" + x +"px;top:" + y +"px;";
    var s = "<table cellpadding=0 cellspacing=0 border=0 align=center ><tr><td align=left><textarea  onkeydown=\"if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}\"        id=\"e"
    + num + "\" onfocus=\"if(typeof(onlinetoolbarfollow)!='undefined')textareatobesearch=this;\"  class=samebg style=\"background-color:white;border-radius:3px;border:1px #eee block;width:" + w +"px;height:" + (h>600?600:h) +"px;font-size:" + cachedfontsize + ";font-family:" + fml + "\"  onkeyup=getInputSelection(this)  onmouseout=getInputSelection(this)>" + (tt==null?'':tt) +"</textarea></td></tr>"
    + "<tr><td  align=center  bgcolor=#bbb> <table cellspacing=0 cellpadding=0 border=0><tr>"
    + "<td><div id=an" + num + " style=\"background-color:#dde;width:24px;height:24px;border-radius:12px;line-height:24px;text-align:center;vertial-align:middle;font-size:18px\">&#10021;</div></td>";
    if (tt!=null)
    {
        s +="<td  style=\"background-color:#BBBBBB;border:1px #b0b0b0 outset;font-weight:700\" ><select  style=font-size:15px;background-color:#BBBBBB;font-weight:700  name=editfs onchange=changefsinousing(this,"+ num + ")><option " + (cachedfontsize=='15px'?'selected':'') + " value=15px>15px</option><option  " + (cachedfontsize=='25px'?'selected':'') + "  value=25px>25px</option><option  " + (cachedfontsize=='35px'?'selected':'') + " value=35px>35px</option><option  " + (cachedfontsize=='45px'?'selected':'') + "  value=45px>45px</option><option  " + (cachedfontsize=='55px'?'selected':'') + " value=55px>55px</option><option  " + (cachedfontsize=='70px'?'selected':'') + " value=70px>70px</option></select><td><input style=width:1px;height:1px;border:0px onfocus=addtab(" +num + ")></td><td style=\"background-color:#BBBBBB;border:1px #b0b0b0 outset;font-weight:700\" >";
        s += "</td><td  style=\"background-color:#BBBBBB;border:1px #b0b0b0 outset;font-weight:700\" >" + ffs + "</td><td  id=helpbtn  onclick=helpstr(" + num +")          align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;background-image:linear-gradient(-60deg,#bbb,#edf);border-radius:3px;background-color:#BBBBBB;border:1px #0b0b0b outset;\"><nobr>" + textmsg[17] + "</nobr></td>";
        if (onlinetoolinitial.replace(/[^;]/g,'').length < 8 && onlinetoolinitial.indexOf('LaTex')>=0)
        s+= "<td                                         align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset;\"><span  onclick=\"showlatexpanel($('e" + num + "'),this)\">LaTex</span></td><td style=width:10px;overflow:hidden></td>";
        else
        s+= "<td                                         align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset;\"><span  onclick=\"showonlinetool(" + num + ")\"><nobr>" + textmsg[1776] + "</nobr></span></td><td style=width:10px;overflow:hidden></td>";
        s+= "<td    onclick=\"listf(" + num +",'b')\"    align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\"><nobr>" + textmsg[1592].replace(/ .*/,'') + "</nobr></td>"
        s+= "<td    onclick=\"listf(" + num +",'pre')\"    align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\"><nobr>Pre</nobr></td>"
        + "<td    onclick=\"listf(" + num +",'oln')\"  align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\"><nobr>1.2.3.</nobr></td>"
        + "<td    onclick=\"listf(" + num +",'ola')\"  align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\">a.b.c.</td>"
        + "<td    onclick=\"listf(" + num +",'ulb')\"  align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\">&bull;&bull;&bull;</td>"
        + "<td    onclick=\"clearformat(" + num +")\"  align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\" ><nobr>" + textmsg[1663] + "</nobr></td><td style=width:10px;overflow:hidden></td>";
        }
    s +="<td  id=donebtn  onclick=done(" + num +")             align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset\"><nobr>" + textmsg[1357] + "</nobr></td><td>"
    + "<td    onclick=cancele(" + num +")          align=center   style=\"width:40px;overflow:hidden;font-size:12px;font-weight:bold;border-radius:3px;background-image:linear-gradient(-60deg,#bbb,#edf);background-color:#BBBBBB;border:1px #0b0b0b outset;\"><nobr>" + textmsg[18] + "</nobr></td>"
    + "</tr></table></td></tr></table>";

    edt.innerHTML =s;
    document.body.appendChild(edt);
    edt.onmouseover= function()
    {
        showanchor($("e" + num), $("t" + num), 'se');
    }
    Drag.init($("an" + num),edt);
    if (tt!=null)
    {
        if (allShapes[num]!=null)
            allShapes[num].inediting = true;
        sendObject(num);
        numbeing = num;
    }
    return edt;
}
function example(num)
{
    var x =  $('e' + num);
    if (x.value == '' || x.value.length < 10)
    x.value = "Math:$y=x^2$\n\nTable:\n11\tTab 12\n21\tTab 22\n\nImage:[" + textmsg[1303] + "1]\n[" + textmsg[1303] + "2:2] \n\nItemrize:\n<oln>Upload images\n\create imagelet from it</oln>"
}
function helpstr(num)
{
    var ex = '';
    var x =  $('e' + num);
    if (x.value == '' || x.value.length < 10)
        ex = "<br><center><a   href=\"javascript:example("  + num + ")\"><b><font color=blue>" + textmsg[1322] + "</font></b></a></center>";
    myprompt("<ol><li>" + textmsg[1664].replace(/\n/g, "<li>") + "</ol>" + ex,null,null,textmsg[17]);

}
function clearformat(num)
{
   var ta = $("e" + num);
   ta.value = ta.value.replace(/<[a-z]+>/g,'').replace(/<\/[a-z]+>/g,'');
}
function listf(num,b)
{
    var tag = ["<" + b +">","</" + b + ">"];
    var ta = $("e" + num);
    var t  = ta.value.substring(selectstart, selectend);
    var i =  selectstart;

    if (t.indexOf(tag[0]) >= 0 || t.indexOf(tag[1]) >= 0)
        return;

    for (var k =0; k < 2; k++)
    for (var j=1; j < tag[k].length; j++)
    {

        if (    i > j
             && i < ta.value.length - tag[k].length + j
             && ta.value.substring(i-j,i+tag[k].length-j)== tag[k]
           )
        {
            i = i-j;

        }

    }

    j = ta.value.substring(0,i).lastIndexOf(tag[1]);
    k = ta.value.substring(0,i).lastIndexOf(tag[0]);

    if (k>j  )
    {
        var l = ta.value.indexOf(tag[1],i);
        var m = t.length + i;

        if (m > l && l>0)
          ta.value = ta.value.substring(0,i) +  tag[1] + ta.value.substring(i,l) + tag[0] + ta.value.substring(l+4,m) + tag[1] + ta.value.substring(m);
        else if ( m < l)
          ta.value = ta.value.substring(0,i) + tag[1] + ta.value.substring(i,m) + tag[0]+ ta.value.substring(m);
    }
    else if (k <= j  )
    {
         l = ta.value.indexOf(tag[0],i);
         m = t.length + i;

        if (m > l && l>0)
          ta.value = ta.value.substring(0,i) +  tag[0] + ta.value.substring(i,l) + tag[1] + ta.value.substring(l+3,m) + tag[0] + ta.value.substring(m);
        else
          ta.value = ta.value.substring(0,i) + tag[0]  + ta.value.substring(i,m) + tag[1] + ta.value.substring(m);

    }
    ta.value = ta.value.replace(tag[0] + tag[1], '');
}
var numediting = -1;
function action(dv,num)
{
    var x = 20;
    var y = 20;
    var tt = '';
    var w =  null;
    var h =  null;
    if (allShapes[num]!=null) 
        tt =  allShapes[num].words;
    if (tt==null ) tt = '';
    if (dv!=null)
    {
        LaTexHTML.deformat(dv);
        num = parseInt(dv.id.substring(1));
        
        
        if (allShapes[num].isrect())
        {
            x = allShapes[num].x + 4;
            y = allShapes[num].y + 4;
        }
        else
        {
            x = parseInt(dv.style.left.replace(/px/,''));
            y = parseInt(dv.style.top.replace(/px/,''));
        }
        dv.style.cssText =  allShapes[num].basiccss();
        w =  dv.style.offsetWidth;
        h =  dv.style.offsetHeight;
    }
    if (w==null || w < favorw)
        w = favorw;
    if (allShapes[num]!=null && allShapes[num].width != null)
        w = allShapes[num].width;

    if (h==null || h < favorh)
        h = favorh;
    if (allShapes[num]!=null && allShapes[num].height != null)
        h = allShapes[num].height;
    
    var b = showedit(num,x,y,w,h,tt);
    var ta = b.getElementsByTagName("textarea")[0];
    if (typeof(onlinetoolbarfollow)!='undefined' && typeof(onlinetoolbase)!= 'undefined' && onlinetoolbase!=null)
    {
        onlinetoolbarfollow(ta);
        ta.focus();
    }

    $('mobiletoolbar').style.zIndex = '' + (2*numShapes + 4);
    if (b.offsetWidth > ta.offsetWidth+ 6)
        ta.style.width = (b.offsetWidth - 6) + 'px';

    numediting = num;
}
function cancele(num)
{
    allShapes[num].inediting = false;
    sendObject(num);
     if (typeof(onlinetoolbase)!='undefined')
     {
         onlinetoolbase.style.visibility = "hidden";
     }
    numediting = -1;
    var b = $("t" + num);
    document.body.removeChild(b);
    document.onmousemove = onmouseover0;
    hideanchor(num);
    if (allShapes[num]==null)
    ;
    else if (num == numShapes-1 && allShapes[num].words.length<10 && allShapes[num].bcolor<9)
    {
        allShapes[num].delme(false);
    }
    else
    {
        allShapes[num].visible = 1;
        allShapes[num].initbase();
        allShapes[num].init();
        allShapes[num].setup();
        
    }
    
}
var numsselected1 = null;
var moreslice = '';
var moreslicesaved = '';
function done(num, W, H, enforce)
{
    allShapes[num].inediting = false;
    var b = $("t" + num);
    var stage = 0;
    if (b!=null) stage = b.getElementsByTagName('table')[0].rows.length;
    if (typeof(onlinetoolbase)!='undefined')
    onlinetoolbase.style.visibility = "hidden";
    var haseditt = false;
    var ta = null;
    var wt = null, ht = null;
    if (b!=null)
    {
        haseditt = true;
        hideanchor(num);
         
        ta = $("e" + num);
        wt = ta.offsetWidth;
        ht = ta.offsetHeight;
       // if (num == numShapes-1)
        {
            var v = ta.value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/^[\n]+/,'');
            var j =  v.indexOf('\n\n\n',1);
            if (j > 0)
            {
                moreslice = v.substring(j+3);
                ta.value = v.substring(0,j);
            }
            else
                moreslice = '';
        }
       // else moreslice = '';

        var stv = ta.value;
        allShapes[num].words =  stv;
        allShapes[num].ispic = allShapes[num].onlyimg();
    }
    var z = allShapes[num];
    if (W == null )
    {
        if (!(z.urlas=='circular'&&z.shapename=='circle'))
        { 
          z.width = null;
          z.height = null;
        }
    }
    else
    {
        z.width = W;
        z.height = H;
    }
    if (wt!=null&&(z.urlas=='circular'&&z.shapename=='circle'||stv.replace(/[ |\n]/g,'')==''))
    {
        z.width = wt;
        z.height = ht;
    }

    z.initbase();
    
    if (b!=null && b.getElementsByTagName('table')[0].rows.length==3 && stage==2)
    {
        if (ta!=null && moreslice!='') ta.value = ta.value + "\n\n\n" + moreslice;
        document.body.removeChild(z.base);
        return;
    }
    if (wt != null && z.ispic == 0)
    {
        var pp = $('p' + z.num);
        var lg = pp.offsetWidth;
        if (lg + 4 > wt)
        {
            pp.style.width = wt + 'px'
            //z.base.style.width = wt + 'px';
        }
        lg = pp.offsetWidth;
        //if (lg  > wt)  z.base.style.width = lg + 'px';
    }
    z.init();
    z.setup();
    if (b!=null)
        z.animates();
    z.visible = 1;
    z.base.style.visibility = 'visible';
    if (allLines!=null  && b==null)
    {
        for (var i=0; i < numLines; i++)
        {
          if (allLines[i]!=null &&  allLines[i].startnum ==  num   )
          {
             allLines[i].sx = Math.round(allLines[i].sx*savedfontrate);
             allLines[i].sy = Math.round(allLines[i].sy*savedfontrate);
             allLines[i].redraw();
          }
          if (allLines[i]!=null &&   allLines[i].endnum ==  num )
          {
             allLines[i].ex = Math.round(allLines[i].ex*savedfontrate);
             allLines[i].ey = Math.round(allLines[i].ey*savedfontrate);
             allLines[i].redraw();
          }
        }
    }
    if (ismakingtab == 1 && typeof(LaTexHTML)!='undefined')
    {
        LaTexHTML.formatele(allShapes[num].base);
    }

    if (b!=null)
    {
       document.body.removeChild(b);
       numediting = -1;
    }

    hassaved = false;
    document.onmousemove = onmouseover0;
    allShapes[num].inediting = false;
    sendObject(num);
    if (b!=null)
    {
    if (numsselected1==null)
        numsselected1 = [num];
    else
        numsselected1[numsselected1.length] = num;
    }
    if (moreslice != '')
    {
        num = allShapes.length;
        if ( (W!=null || H!=null) && enforce == true)
        {
            var qz = new Shape( num,moreslice,'', z.shapename,z.x+z.base.offsetWidth,z.y, W, H, z.fontsize, z.color, z.bcolor, z.fc, z.time,z.zindex,z.start,z.fontfamily,z.slope);
        }
        else
        {
            qz = new Shape( num,moreslice, '', z.shapename,z.x+z.base.offsetWidth,z.y, null, null, z.fontsize, z.color, z.bcolor,z.fc,z.time,z.zindex,z.start,z.fontfamily,z.slope);
        }
        qz.visible = 1;
        allShapes[num] = qz;
        edit(num);
        done(num, W, H, enforce);

    }
    else
    {
        if (b!=null)
        {
            numsselected = new Array(numsselected1.length);
            for (var j=0; j < numsselected.length; j++)
                numsselected[j] = numsselected1[j];
            numsselected1 = null;
            mdia(num,1);
            var xx = $('m' + num + '_1');
            xx.style.left = (z.x + z.width*0.7) + 'px';
            xx.style.top = (z.y + 10) + 'px';
        }
        if (haseditt && demohandle==null)
        saveit();
    }
}



function modifyimg(tag, num, w, h)
{
    var pi = allShapes[num].words.indexOf("<" + tag +" ");
     allShapes[num].words = allShapes[num].words.substring(0,pi) +
     ( (allShapes[num].words.substring(pi).indexOf(" width=")>0)? allShapes[num].words.substring(pi).replace(/ width=[0-9]+/, " width=" + w).replace(/height=[0-9]+/, "height=" + h)
     : ("<" + tag +"  width=" + w +" height=" + h + " "+allShapes[num].words.substring(pi+2 + tag.length)));
    done(num);
}
var anchorx,anchory;
function showanchor(obj, baseobj, direct )
{
    var num = parseInt(obj.id.substring(1));

    if ( (''+num)== 'NaN')
    {
        if (otherunique == null)
            otherunique = obj;
        else
            return;
    }
    else
    {
        if (obj.id.charAt(0)== 'z')
        {
          if (entered[num] != null && obj.id.charAt(0) != 'z')
          {
              hideanchor(num);
              entered[num] = obj;
          }
          else if (entered[num] == null)
          {
               entered[num] = obj;
          }
          else
               return;
        }
        else
        {
            if (entered[num] != null)
               return;
            else
               entered[num] = obj;
        }
    }
    if ($("a" + num)!=null) return;
    var anchor = document.createElement("div");
    anchor.id = "a" + num;
    var xy = findPositionnoScrolling(baseobj);
    var z = 0;
    if ( isNaN(baseobj.style.zIndex)== false)
        z = parseInt(baseobj.style.zIndex);
    z += 2 ;

    if (direct== 'ss')
    {
         anchor.style.cssText = "position:absolute;left:" + (xy[0] + baseobj.offsetWidth/2-10) + "px;top:" + (xy[1]+baseobj.offsetHeight-2)
        + "px;width:20px;height:2px;z-index:" + z + ";cursor:" + direct + "-resize;background-color:black";
        anchor.innerHTML = fillblank;
    }
    else if (obj.id == 'b' + num )
    {
        var ww = baseobj.offsetWidth;
        var hh = baseobj.offsetHeight ;

        var qq = 0;
        var zz = 0;
        try{
           qq = (allShapes[num].base.offsetWidth - allShapes[num].width)/2;
           zz = parseInt(allShapes[num].extract(allShapes[num].base.style.cssText,"padding").replace(/([0-9]+).*/,'$1'));
           if (''+zz == 'NaN') zz = 0;

        }catch(e){}

        ww = allShapes[num].width + qq;
        hh = allShapes[num].height + zz;

        anchor.style.cssText = "position:absolute;left:" + (xy[0] + ww-11) + "px;top:" + (xy[1]+hh-12)
        + "px;width:12px;height:12px;z-index:" + z + ";cursor:" + direct + "-resize;border-bottom-style:solid;border-bottom-width:2px;border-bottom-color:"
        + colors[allShapes[num].color] + ";border-right-width:2px;border-right-style:solid;border-right-color:" +
        colors[allShapes[num].color];

        anchor.innerHTML = "<!---->";
    }
    else if (obj.id == 'z' + num)
    {
        var ww = baseobj.offsetWidth;
        var hh = baseobj.offsetHeight ;
        anchor.style.cssText = "position:absolute;left:" + (xy[0] + ww-11) + "px;top:" + (xy[1]+hh-12)
        + "px;width:12px;height:12px;z-index:" + z + ";cursor:" + direct + "-resize;border-bottom-width:2px;border-bottom-color:"
        + allShapes[num].color + ";border-right-width:2px;border-right-color:" + allShapes[num].color;
        anchor.innerHTML = "&drcorn;";
    }
    else if (obj.id == 'e' + num)
    {
        var ww = obj.offsetWidth;
        var hh = obj.offsetHeight ;
        anchor.style.cssText = "position:absolute;left:" + (xy[0] + ww-11) + "px;top:" + (xy[1]+hh-12)
        + "px;width:12px;height:12px;z-index:" + z + ";cursor:" + direct + "-resize;border-bottom-width:2px;border-bottom-color:"
        + "black" + ";border-bottom-style:solid;border-right-width:2px;border-right-color:black;border-right-style:solid";
        anchor.innerHTML = "<!---->";
    }
    else if (obj.id == 'c' + num)
    {
        var ww = obj.offsetWidth;
        var hh = obj.offsetHeight ;
        anchor.style.cssText = "position:absolute;left:" + (xy[0] + ww-11) + "px;top:" + (xy[1]+hh-12)
        + "px;width:12px;height:12px;z-index:" + z + ";cursor:" + direct + "-resize;border-bottom-width:2px;border-bottom-color:"
        + "black" + ";border-bottom-style:solid;border-right-width:2px;border-right-color:black;border-right-style:solid";
        anchor.innerHTML = "<!---->";
    }
    document.body.appendChild(anchor);
    var bxy = findPositionnoScrolling(baseobj);

    Drag.init(anchor);
    anchor.onDragStart = function(x,y)
    {
       var num = parseInt(this.id.substring(1));

       if ( (''+num) != 'NaN')
         var obj = entered[num];
       else
           obj = otherunique;
       if (obj == null) return;
       anchorx = x;
       anchory = y;
    }
    anchor.onDragEnd = function(x,y)
    {
       var num = parseInt(this.id.substring(1));
       if ( (''+num) != 'NaN')
         var obj = entered[num];
       else
           obj = otherunique;
       if (obj == null) return;
       var xy =  findPositionnoScrolling(obj);
       var w = x - xy[0] - (baseobj.offsetWidth - obj.offsetWidth);
       var h = y - xy[1] - (baseobj.offsetWidth - obj.offsetWidth);

       if (w < 2 || h < 2) return;

       if (typeof(obj.tagName) == 'undefined')   return;
       if (obj.tagName.toLowerCase()== 'div' && obj.id.charAt(0) == 'c')
       {
           var ps = allCurves[num].points;
           var minx = 10000,maxx =-10000, miny=10000,maxy=-10000;
          for (var i=0; i < ps.length; i++)
       {    if (ps[i][0] < minx)
               minx = ps[i][0];
           else if (ps[i][0] > maxx)
               maxx = ps[i][0];
           if (ps[i][1] < miny)
               miny = ps[i][1];
           else if (ps[i][1] > maxy)
               maxy = ps[i][1];
       }
           
           var rx = ((maxx - minx)  +  x-anchorx)/(maxx - minx);
           var ry = ((maxy -miny) +  y-anchory)/(maxy -miny);
            for (var i=0; i < ps.length; i++)
            {
                ps[i][0] = minx + rx*(ps[i][0]-minx);
                ps[i][1] = miny + rx*(ps[i][1]-miny);
            }
           allCurves[num].redraw();
       }
       else if (obj.tagName.toLowerCase()== 'div' && obj.id.charAt(0) == 'b')
       {
            done(num, w, h, true);
       }

       else if (obj.tagName.toLowerCase()== 'textarea')
       {
           w = (obj.offsetWidth + (x-anchorx));
           h = obj.offsetHeight + (y-anchory);
           obj.style.width = w + 'px';
           obj.style.height = h + 'px';
           favorw = w;
           favorh = h;
       }
       else
           modifyimg(obj.tagName.toLowerCase(), num, w, h);
       hideanchor(num);

    }
    setTimeout("hideanchor(" + num +")", 5000);
}
function hideanchor(num)
{

    var obj = $("a" + num);
    if (obj == null) return;
    document.body.removeChild(obj);
    entered[num] = null;

}
function begindraw(bv)
{
    var num = parseInt(bv.id.substring(1));
    bv = $('b'+num);
    var sp = allShapes[num];
    var tsn = sp.shapename;
    if (linetype== '' || state== 0) return;
    var xy = sp.dotposition();
    var i = myHintx - sp.x - xy[0];
    var j = myHinty - sp.y - xy[1];
    var dn = j;
    var ds = Math.abs(j - sp.height);
    var de = Math.abs(i - sp.width);
    var dw = i;
    var md = dn;
    if (md > ds) md = ds;
    if (md > de) md = de;
    if (md > dw) md = dw;
    if (sp.ispic >0 )
    {
        if (md== dn)
        {
            j = 0;
            i = 0.5;
        }
        else if (md== dw)
        {
            i = 0;
            j = 0.5;
        }
        else if (md== de)
        {
            i = 1;
            j = 0.5;
        }
        else if (md== ds)
        {
            i = 0.5;
            j = 1;
        }
    }
    else
    {
        j /= sp.height;
     
        if (Math.abs(j) < 0.03) { j = 0; i =0.5;}
        else if (Math.abs(1-j) < 0.03){j=1; i=0.5;}
        else if (de > i)
            i = 0;
        else
            i = 1;
    }


    if (state == 1)
    {
        savestart = num;
        savestartx = i;
        savestarty = j;
        state = 2;
        var adot = document.createElement("div");
        adot.id = "q" + num;
        adot.style.cssText = "position:absolute;width:6px;height:6px;left:" +  (xy[0] + sp.width*i)
        +"px;top:" + (sp.height*j + xy[1]) +"px;border:1px #909090 solid;background-color:yellow;z-index";
        adot.innerHTML = fillblank;
        allShapes[num].base.appendChild(adot);
        sp.toshape();
        sp.onshape = true;
    }
    else if (state== 2)
    {
        sp.toshape();
        sp.onshape = true;
        var k = cachedlinethick;
        var l = new Line(drawlinenumber,linetype,savestart,savestartx,savestarty, num, i, j, k,seldirect,0,3,cachedlinecolor,0);
        if (numsselected==null)
        {
            numsselected = [l.num]
        }
        else
            numsselected[numsselected.length] = l.num;
        drawlinenumber = null;
        var x = $("q" + savestart);
        if(savestart>=0)
           allShapes[savestart].base.removeChild(x);
        else
           document.body.removeChild(x);
        state = 1;
    }
    document.onmousemove = onmouseover0;
}

function getFontsize()
{
    var sel = $("fntsize");
    if (sel == null) return 20;
    var sfs = parseInt(sel.options[sel.selectedIndex].value);
    return sfs;
}
function circular(x, radius, cl)
{
   var ans = "";
   x = x.replace(/&nbsp;/g,' ').toLowerCase();
   var U = 19; if (U > 350/x.length) U = 350/x.length;
   if (x.length < 7)
   {
       U = 35;
       x = "---" + x + "---";
       x = x.replace(/ /,'');
   }
   for (var j=0; j < x.length; j++)
   {
       var u = U;
       var y = x.charAt(j);

       if (y == '-') y = '<font size=' + ((j<2||x.length-1-j<2)?2:1) + '>&bull;</font>';
       ans += "<div style=\"padding:0px 0px 0px 0px;margin:" + (j==0?0:(-radius)) + "px 0px 0px 0px;width:" + radius + "px;height:" + radius + "px;border-radius:" + (radius/2) + "px;transform:rotate(" + (0.4+j-x.length/2)*U + "deg);font-size:inherit;font-weight:700;text-align:center\">" + y + "</div>";
   }
   ans +=  '<div style="padding:0px 0px 0px 0px;margin:-' 
           + radius + 'px 0px 0px 0px;width:' 
           + radius + 'px;line-height:' 
           + radius + 'px;border-radius:' 
           + (radius/3) + 'px;font-size:25px;font-weight:700;text-align:center;vertical-align:middle">&star;</div>';
   return ans;
}
 
function Shape (num, words, urlas, shapename,x, y, w, h, fs, cl, bc, fc,tm,zIndex,starttime, fontfamily,slope)
{
    
   this.onlyimg = function()
   {
       if (this.words == null) return 0;
       var str = this.words.replace(/[ ]+$/,'');
       if (str.length>0 && this.urlas=='circular' && this.shapename=='circle')
           return 3;
       var b = str.length>4 ;
       var b1 = false, b2=false, b3=false;
       if (b)
       {
            b1 = str.charAt(0)=='[';
            if (b1)
            {
                b2 = str.charAt(str.length-1)==']';
                if (b2)
                {
                    b3 = str.substring(1,str.length-1).replace(/[0-9]+$/g,'')==  textmsg[1303]
                     || str.substring(1,str.length-1).replace(/[0-9]+$/g,'')==  "Imagelet" ;
                }
            }
       }
       if (b3) return 1;
       if (this.words.replace(/http[s]?:\/\/[^ ]+$/i,'')=='' && this.urlas.length>0 && this.urlas.charAt(0) == '1')
           return 2;
       return 0;
   }
    this.parse = function(str)
   {
        var parser = new CSVParse(str,"'",",",";");
        var words = parser.nextElement();
        if (words == null) this.words ='';
        else this.words = words;
        this.urlas = parser.nextElement();
        this.shapename = parser.nextElement();
        this.x = parseInt(parser.nextElement()); if (this.x<0) this.x = 0;
        this.y = parseInt(parser.nextElement()); if (this.y < 0) this.y = 0;
        var w = null;
        var h = null;
        var w1 = parser.nextElement();if (w1!= '' && w1!=null) w = parseInt(w1);
        var h1 = parser.nextElement();if (h1!= '' && h1!=null) h = parseInt(h1);
        this.width = w;
        this.height = h;
        this.fontsize = parseInt(parser.nextElement());
        var cl = parser.nextElement();
        var cn = 0;
         if (cl==null) cl = 'black';
         if (isNaN(cl))
            cn = rcolor(cl);
         else
            cn = parseInt(cl);
        this.color = cn;
        var bc = parser.nextElement();
        var bn = 0;
         if (bc==null) bc = 'black';
         if (isNaN(bc))
            bn = rbcolor(bc);
         else
            bn = parseInt(bc);
        this.bcolor = bn;

        this.fc = parseInt(parser.nextElement());
        this.time = parseFloat(parser.nextElement());
        this.zindex = parseInt(parser.nextElement());
        this.start = parseFloat(parser.nextElement());
        var ffs = parser.nextElement();
        var fns = textmsg[1594].split(/@/);
        for(var  i =0; i < fns.length; i++)
        {
             if (samefont(ffs,fns[i])) break;
        }
        if (i == fns.length) ffs = cachedfontfamily;
        this.fontfamily = ffs;
        this.inediting =  (parser.nextElement() == ("true"));
        var slope =  parser.nextElement();
        if ( slope == null) this.slope = 0;
        else this.slope = parseInt(slope);
        this.ispic =  this.onlyimg();
         if (ismakingtab!=1 && false)
       {
       
           if (this.ispic>0)
             this.words = '<img src="image/pic.png" width=50>';
          else if (this.words!=null)
             this.words = this.words.replace(/<img [^>]+>/g, '<img src="image/pic.png" width=50>');
       }
   }

   if (ismakingtab!=1)
   {
       if (x!=null)
           x = Math.round(ismakingtab*x);
       if (y!=null)
           y = Math.round(ismakingtab*y);
       if (w!=null)
           w = Math.round(ismakingtab*w);
       if (h!=null)
           h = Math.round(ismakingtab*h);
       if (fs!=null)
           fs = Math.round(ismakingtab*fs);
   }
    
  var s = ("words=" + words + '\nsp='+ shapename+ '\nx=' + x+ '\ny=' + y+ '\nw=' + w+ '\nh=' + h+ '\nfs=' + fs+ '\ncl=' + cl+ '\nbc=' + bc+ '\nfc=' + fc+ '\nzi=' + zIndex+ '\nor=' + starttime) ;
   if (zIndex == null)
      this.zindex =  1;
   else
      this.zindex = zIndex;
   this.slope = 0;
   if (slope!=null && isNaN(''+slope) == false)
      this.slope =  slope;
   if (tm == null )
       this.time = 5;
   else
       this.time = tm;
   this.urlas = urlas;
   this.fontfamily = cachedfontfamily;
   if (fontfamily != null)
       this.fontfamily = fontfamily;
 
   if (shapename == null )
       shapename = 'rightrect';
   var sfs = getFontsize();
   this.x = x;
   this.y = y;
   if (fs == null) fs = sfs;
   if (cl == null) cl = 0;
   if (bc == null) bc = 0;
    
   

   this.shapename = shapename;
   this.width = null;
   this.height = null;
   if (isNaN(''+w) == false)
   {
      this.width = w;
      this.height = h;
   }
   this.words = words;
   this.num = num;
   if (starttime == null)
      this.start = 5*this.num;
   else
      this.start = starttime;
   this.fontsize = fs;
   this.color = cl;
   if (bc == null) bc = bcolors.length-2;
   this.bcolor = bc;
   this.fc = 0;
   this.inediting = false;
   if(fc!=null)
   {
       this.fc = fc;
   }
   this.visible = 0;
   this.bx = 0;
   this.by = 0;
   this.validdrag = false;
   this.ispic =  this.onlyimg();
   if (ismakingtab!=1)
   {
      if (this.ispic>0)
         this.words = '<img src="image/pic.png" width=50>';
      else if (this.words!=null)
         this.words = this.words.replace(/<img [^>]+>/g, '<img src="image/pic.png" width=50>');
   }
   this.base = null;
   this.onshape = true;
   
    this.leaves = function()
    {
        var kframe = kframes[pagenum + '_' + this.num];
        if (kframe!=null)
        {
            if (kframe.ltm > 0 && (kframe.lts!=null && kframe.lts.length>0 || kframe.lsn!=-1))
            {
                this.base.style.animation = "bl" +   "_" + this.num + " " + kframe.ltm + "s 1";
            }
            else 
            {
                this.base.style.visibility = 'hidden';
                this.visible = 0;
            }
        }
        else 
        {
                this.base.style.visibility = 'hidden';
                this.visible = 0;
        }
        for (var j=0; j < allLines; j++)
       {
           if (allLines[j]==null) continue;
           if ((allLines[j].startnum==-1 || allShapes[allLines[j].startnum].visible) &&  allLines[j].endnum == this.num 
             ||(allLines[j].endnum==-1 || allShapes[allLines[j].endnum].visible) && allLines[j].startnum == this.num)
           allLines[j].delme();   
       }
    }
    this.animates = function()
   {
        var kframe = kframes[pagenum + '_' + this.num];
        if (kframe!=null)
        {
            if (kframe.etm > 0 && (kframe.ets!=null && kframe.ets.length>0 || kframe.esn!=-1))
            {
                this.base.style.animation = "be" +   "_" + this.num + " " + kframe.etm + "s 1";
                if (kframe.stm > 0 && (kframe.sts!=null && kframe.sts.length>0 || kframe.ssn!=-1))
                {
                    setTimeout("allShapes[" + this.num + "].animate('bs" +  "_" + this.num + "'," + kframe.stm + "," + kframe.loop + ");", kframe.etm*1000);
                }
            }
            else if (kframe.stm > 0 && (kframe.sts!=null && kframe.sts.length>0 || kframe.ssn!=-1))
            {
                this.animate("bs" +   "_" + this.num,kframe.stm,kframe.loop);
            }
            else 
            {
                this.base.style.animation = null;
                this.visible =  1;
                this.base.style.opacity = '1.0';
            }
        }
        else 
        {
            this.base.style.animation = null;
            this.base.style.opacity = '1.0';
            this.visible = 1;
        }
        this.base.style.visibility = this.visible == 1?'visible':'hidden';
   }
   this.animate = function(nm,tm,loop)
   {
       this.base.style.animationName = nm;
       this.base.style.animationDuration = tm + "s";
       this.base.style.animationIterationCount =  loop==-1?'infinite':(''+loop);
       for (var j=0; j < allLines; j++)
       {
           if (allLines[j]==null) continue;
           if ((allLines[j].startnum==-1 || allShapes[allLines[j].startnum].visible) &&  allLines[j].endnum == this.num 
             ||(allLines[j].endnum==-1 || allShapes[allLines[j].endnum].visible) && allLines[j].startnum == this.num)
           allLines[j].draw();   
       }
   }
   this.keyframe = function(stage)
   {
       var wt = this.width;
       var ht = this.height;
       var xy = this.dotposition();
       wt += xy[0] * 2 + this.framew()*2;
       ht += xy[1] * 2+ this.framew()*2;
       var str  = stage + "%{left:" + this.x + "px;top:" + this.y + "px;width:" + wt + "px;height:"
                + ht + "px;font-size:" + this.fontsize + "px;color:" + colors[this.color];
       if (this.isrect()){
           str+= ";background-color:";
        if (this.bcolor < 10)
            str += bcolors[this.bcolor] + ";";
        else
            str += "transparent;";
      }
        if ((this.fc & 2) > 0)
            str += "box-shadow:#777 3px 3px;";
        else
            str += "box-shadow:#777 0px 0px;";
        if ((this.fc & 1) == 0)
            str += "border-radius:" + this.framew() + "px " + colors[this.color] + " solid;";
        else
            str += "border-radius:0px " + colors[this.color] + " solid;";
        if ((this.fc & 4) > 0)
            str += "text-shadow:#777 1px 1px;";
        else
            str += "text-shadow:#777 0px 0px;";
        if (this.bcolor < 10)
        {
            if ((this.fc & 8) > 0)
                str += "background-image:" + gradient(bcolors[this.bcolor],this.shapename) + ";";
            else
                str += "background-image:url();";
        }
        str += "transform:rotate(" + this.slope + "deg);";
        return str;
   }
   
   this.basiccss = function()
   {
       return "text-align:center;vertical-align:middle;box-sizing:border-box;position:absolute;top:" + this.y +"px;left:" + this.x +"px;font-family:" + this.fontfamily  + ";font-size:" + this.fontsize + 'px;text-shadow:' + ((this.fc & 4)/4) + "px " + ((this.fc & 4)/4) + "px grey;color:" + colors[this.color] + ";visibility:" + (this.visible==1?'visible;':'hidden;');
   }
   this.initbase = function()
   {
       var bb = 'b';
       if (inkframe) bb = 'u';
       var x = $(bb+ this.num)
       if (x!=null)
       {
           if (typeof(LaTexHTML) != 'undefined')
               LaTexHTML.deformat(this.base);
           document.body.removeChild(x);
       }
       this.ispic = this.onlyimg();

       this.base = document.createElement("div");
       this.base.id = bb + this.num;
       var tmp = this.basiccss();
       if (inkframe)
           tmp = tmp.replace(/absolute/,'static').replace(/hidden/,'visible');
       this.base.style.cssText = tmp;
       bb ='p';
       if (inkframe) bb = 'v';
        if (this.ispic==3)
            this.base.innerHTML = "<div id=\"" +bb+ this.num + "\" style=\"font-size:inherit;margin:0px;vertical-align:middle;display:inline-block;\">" + circular(this.words, this.width , colors[this.color]) + "</div>";
       else if (this.ispic>0)
            this.base.innerHTML = tohtml(this.words, this.urlas, colors[this.color],this.shapename);
       else
            this.base.innerHTML = "<div id=\"" + bb + this.num + "\" style=\"font-size:inherit;margin:0px;vertical-align:middle;display:inline-block;text-align:left;line-height:" + 1.2*this.fontsize + "px;margin:auto\">" + tohtml(this.words, this.urlas, colors[this.color],this.shapename)+ "</div>";

       document.body.appendChild(this.base);

       //if (typeof(LaTexHTML) != 'undefined')   LaTexHTML.formatele(this.base);
       if (this.width == null)
       {
           this.width = this.base.offsetWidth + 3;
           this.height = this.base.offsetHeight + 3;
       }
       else
       {
           this.base.style.width = this.width + 'px';
           this.base.style.height = this.height + 'px';
       }
   }
   this.resize = function()
   {
       var x = $('g' + this.num);
       if (x!=null) this.base.removeChild(x);
       x = $('h' + this.num);
       if (x!=null) this.base.removeChild(x);
       x = $('f' + this.num);
       if (x!=null) this.base.removeChild(x);
       this.base.style.width = null;
       this.base.style.height = null;
       this.base.style.margin = '0px';
       this.base.style.padding = '0px';
       this.base.style.borderRadius = '0px';
       this.base.style.borderWidth = '0px';
       this.base.style.overflow ='visible';
       this.base.style.fontSize = (this.fontsize) + 'px';
       this.base.style.transform = "rotate(0deg)" ;
       //this.base.style.border = "1px red solid";
   }

   this.noshape = function()
   {
       this.base.style.transform = "rotate(0deg)";
       this.base.left = this.x + "px";
       this.base.top = this.y + "px";
       this.onshape = false;
   }
   
   this.toshape = function()
   {
       this.onshape = true;
       this.base.style.transform = "rotate(" + this.slope + "deg)";
   }
   this.move = function(Ax, Ay,z)
   {
        var mx = parseInt(this.base.style.left.replace(/px/i,''));
        var my = parseInt(this.base.style.top.replace(/px/i,''));
        var  x = Ax - mx;
        var  y = Ay - my;
        var more = true;
        if (z!=null)
        {
            more = false;

        }
        else if (Math.abs( x) + Math.abs( y) < 4)
        {
            more = false;
        }
        else if (x>0 && y==0){x=2;y=0;}
        else if (x>y && y>0){x=2;y=1;}
        else if (x==y && y>0){x=1;y=1;}
        else if (y > x && x>0){x=1;y=2;}
        else if (y > 0 && x==0){x=0;y=2;}
        else if (y > -x && y>0){x=-1;y=2;}
        else if (-x==y && y>0){x=-1;y=1;}
        else if (y < -x && y>0){x=-2;y=1;}
        else if (y == 0 && x < 0){x=-2;y=0;}

        else if (-x>-y && y<0){x=-2;y=-1;}
        else if (x==y && y < 0){x=-1;y=-1;}
        else if (-y > -x && x<0){x=-1;y=-2;}
        else if (y < 0 && x==0){x=0;y=-2;}
        else if (-y > x && y < 0){x=1;y=-2;}
        else if (-x==y && y<0){x=1;y=-1;}
        else if (-y < x && y<0){x=2;y=-1;}

        mx += x;
        my += y;
        this.x = mx;
        this.y = my;
        this.base.style.top = my + 'px';
        this.base.style.left = mx + 'px';
        var fw = this.framew();

        {
            this.base.style.left = (parseInt(this.base.style.left.replace(/px/i,'')) + x) + 'px';
            this.base.style.top =  (parseInt(this.base.style.top.replace(/px/i,'')) + y)  + 'px';

        }
        if (more && this.num < allShapes.length)
            setTimeout("allShapes[" + this.num + "].move(" + Ax + "," + Ay + ")",5);
        else  redrseline();
   };

   this.framew = function()
   {
       return 1+ Math.round(this.fontsize/30);
   }
   this.isrect = function()
   {
       return this.shapename == 'rightrect'
           || this.shapename == 'roundrect'
           || this.shapename == 'circle'
           || this.shapename == 'ellipse'
           || this.shapename == 'egg' ;
   }

   this.shapewidth = function()
   {
       var wdd = 1;
        if (this.ispic>0)
            return 1;
        if (this.shapename=='diamond')
        {
            wdd =  1.92;
        }
        else if (this.shapename.indexOf('rect')==5)
        {
            wdd = 1;
        }
        else if (  this.shapename == 'circle' )
        {
            wdd = 1.414;
        }
        else if ( this.shapename == 'hexgon' )
        {
            wdd = 1.3;
        }
        else if (this.shapename == 'ellipse'  )
        {
            wdd = 1.35;
        }
        else if (this.shapename == 'clouds' || this.shapename == 'egg')
        {
            wdd = 1.5;
        }
        return wdd;
   }
   this.dotposition = function()
   {
       var wt = this.width;
       var ht = this.height;
       var fw = this.framew();
        if (this.ispic > 0)
            return [0,0];
        else if (this.shapename== 'rightrect' || this.shapename== 'roundrect')
        {
            return [0, 0];
        }
        else if (this.shapename== 'circle')
        {
            var sd = Math.sqrt(wt*wt+ ht*ht);
            var mx = sd ;
            var tp = (mx - ht)/2;
            var wd = (mx -wt)/2;

            return [ wd, tp];
        }
        else  if (this.shapename== 'ellipse')
        {
            return [ 0.2*wt,  0.2*ht];
        }
        else if (this.shapename== 'egg')
        {
            return [ 0.25*wt,  0.25*ht];
        }
        else if (this.shapename== 'diamond')
        {
           return [ 0.5*wt, 0.5*ht];
        }
        else  if (this.shapename== 'hexgon')
        {
           var mt = (1.3)*((wt>ht)?wt:ht);
           return [ ((mt-wt)/2), ((mt-ht)/2)];

        }
        else if (this.shapename== 'clouds')
        {
           return [ (0.25*wt),   (0.25*ht)];
        }
        return [0,0];
   }
   this.basecss = function()
   {
       var jj = this.onlyimg();
       this.ispic = jj;
       var fw  = this.framew();
       var framecolor =  colors[this.color];
       if ((this.fc & 1) == 1)
       {
           framecolor = bcolors[this.bcolor];
           fw = 0;
       }
       var wt = this.width;
       var ht = this.height;
       var boxshadow = ((this.fc & 2) > 0)?2:0;
       var twocolors = null;
       if (this.bcolor < 9)
       {
           if ( (this.fc & 8 ) > 0 && (jj==0 || jj==3))
           {
               var bf = "background-image:" + gradient(bcolors[this.bcolor],this.shapename) + ";";
               twocolors = bf.replace(/[^#]+(#[0-9]+)[^#]+(#[0-9]+).*/, "$1,$2").split(/,/);
           }
           else
               bf = 'background-color:' + bcolors[this.bcolor] + ";";
       }
       else
       {
           bf = '';
       }
       if (this.isrect())
       {
           var tmp = this.basiccss();
           if (inkframe) tmp = tmp.replace(/absolute/,'static');
           tmp += ";border:" + fw + "px " + framecolor + " solid;box-shadow:" + boxshadow + "px " + boxshadow + "px grey;transform-origin:center;transform:rotate(" + this.slope + "deg);" + bf;
           if (this.shapename== 'rightrect')
           {
               if (jj == 0)
                   tmp += ";width:" + (wt+3+2*fw) + "px;height:" + (ht+3+2*fw) + "px;border-radius:0px;";
               else
                   tmp += ";width:" + (wt+3+2*fw) + "px;border-radius:0px";
           }
           else if (this.shapename== 'roundrect')
           {
               if (jj == 0)
                   tmp += ";width:" + (wt+3+2*this.framew()) + "px;height:" + (ht+3+2*this.framew()) + "px;border-radius:" + (2.5*this.framew()) + "px;";
               else
                   tmp += ";width:" + (wt+3+2*this.framew()) + "px;border-radius:" + (2.5*this.framew()) + "px";
           }
           else if (this.shapename== 'circle')
           {
               if (jj == 1 && jj == 2)
               {
                   var sd = (ht < wt)?ht : wt;
                   var mx = sd ;
                   if (jj==2) mx *= 0.3;
                   var tp = 0;
                   var wd = 0;
                   tmp += ";width:" + mx + "px;height:" + mx + "px;border-radius:50% / 50%;line-height:" + (mx-6) + "px;";
               }
               else if (jj == 3)
               {
                   tmp += ";border-radius:50%/50%;";
               }
               else
               {
                   var mx = Math.ceil(Math.sqrt(ht*ht+wt*wt))+2*fw;
                   var tp = (mx - ht)/2;
                   var wd = (mx - wt)/2;
                   tmp += ";width:" + mx + "px;height:" + mx + "px;border-radius:50% / 50%;line-height:" + (mx-6) + "px;";
               }

           }
           else if (this.shapename== 'ellipse')
           {
               if (jj == 0)
                    tmp += "width:" + 1.45*(wt+2*fw) + "px;height:" + 1.45*(2*fw+ht) + "px;border-radius:50% / 50%;line-height:" +  1.45*(ht) + "px;";
               else
                    tmp += "width:" + (wt+2*fw) + "px;border-radius:50% / 50%;padding:0px 0px 0px 0px";
           }
           else if (this.shapename== 'egg')
           {
               if ( jj == 0)
                   tmp += ";width:" + 1.5*(2*fw+wt) + "px;height:" + 1.5*(2*fw+ht) + "px;border-radius:50% 50% 50% 50%/ 60% 60% 40% 40%;line-height:" + 1.5*(ht) + "px;";
               else
                   tmp += ";width:" + (wt+2*fw) + "px;border-radius:50% 50% 50% 50%/ 60% 60% 40% 40%;";
           }

       }
       else if (this.shapename== 'diamond')
       {
           
           var rt = wt/ht;
           if (jj == 0)
              tmp = this.basiccss() + ";width:" + (2*(wt+fw)) + "px;height:" + (2*(ht+fw)) + "px;line-height:" + ((ht)*2) + "px;transform:rotate(" + this.slope + "deg)";
           else
              tmp = this.basiccss() + ";width:" + (wt+fw) + "px;transform:rotate(" + this.slope + "deg)";
       }
       else   if (this.shapename== 'hexgon')
       {
           var mt =  ((wt>ht)?wt:ht);
           mt *= 1.3;
           if (jj == 0)
               tmp = this.basiccss() + ";line-height:" + (mt-fw) + "px;;width:" + (2*mt/1.732) + "px;height:" + mt + "px;transform:rotate(" + this.slope + "deg);";
           else
               tmp = this.basiccss() + ";width:" + (wt) + "px;transform:rotate(" + this.slope + "deg)";

       }
       else   if (this.shapename== 'clouds')
       {
           if (jj==0)
               tmp = this.basiccss() +  ";width:" + (1.5*wt) + "px;height:" + (1.5*ht) + "px;line-height:" + (1.5*ht-fw) + "px;";
           else
               tmp = this.basiccss() + ";width:" + (wt) + "px;transform:rotate(" + this.slope + "deg)";

       }
       return tmp;
   }
   this.init = function()
   {
       if (inkframe)
       {
           if ($('w' + this.num) !=null)   
               this.base.removeChild($('w' + this.num));
       }
       else
       {
           if ($('g' + this.num) !=null)   this.base.removeChild($('g' + this.num));
       }
       var wt = this.width ;
       var ht = this.height ;
       var fw  = this.framew();
       var framecolor =  colors[this.color];
       if ((this.fc & 1) == 1)
       {
           framecolor = bcolors[this.bcolor];
           fw = 0;
       }
       var boxshadow = ((this.fc & 2) > 0)?1:0;
       if (this.bcolor < 9)
       {
       if ( (this.fc & 8 ) > 0  )
           var bf = "background-image:" + gradient(bcolors[this.bcolor],this.shapename) + ";";
       else
           bf = 'background-color:' + bcolors[this.bcolor] + ";";
       }
       else
       {
           bf = '';
       }
       var tmp = this.basecss();
       if (inkframe) {
           tmp = tmp.replace(/absolute/,'static');
          
       }
       var jj = this.ispic =  this.onlyimg();
       if (jj>0)
       {
           if (jj==1 || jj==3 )
           {
               this.base.style.cssText = tmp;
           }
           this.ellipseimg();
       }
       else if (this.isrect())
       {
           var  bb = 'p'; if (inkframe) bb = 'v';
           this.base.style.cssText = tmp;
           if (this.bcolor>10)
               this.base.className = 'shapebg' + (this.bcolor-10);
           else
               this.base.className = null;
           if (this.shapename=='rightrect')
           {

               var tbls = $(bb+this.num).getElementsByTagName('table');
               if (tbls!=null)for (var i=0; i < tbls.length; i++)
               {
                   tbls[i].style.borderRadius = '0px';
                   tbls[i].style.borderCollapse = 'collapse';
                   tbls[i].style.borderColor = colors[this.color];
                   tbls[i].style.borderWidth = '1px';
                   tbls[i].cellSpacing = '0px';
                   tbls[i].cellPadding = '2px';
               }
           }
           else
           {
               var tbls = $(bb+this.num).getElementsByTagName('table');
               if (tbls!=null)for (var i=0; i < tbls.length; i++)
               {
                   tbls[i].style.borderRadius = '4px';
                   tbls[i].style.borderCollapse = null;
                   tbls[i].style.borderColor = colors[this.color];
                   tbls[i].style.borderWidth = '1px';
                   tbls[i].cellSpacing = '0px';
                   tbls[i].cellPadding = '2px';
               }
           }
       }
       else if (this.shapename== 'diamond')
       {
           this.base.style.cssText = tmp; 
           var q = document.createElement('div');
           var bb ='g';
           if (inkframe) bb = 'w';
           q.id = bb + this.num;
           q.style.cssText = "position:absolute;top:0px;left:0px;height:" + (2*ht) + "px;transform:scaleX(" + (wt/ht) + ");transform-origin:0%;width:" + (2*ht) + "px;z-index:-2";
           q.innerHTML = "<div  " + (this.bcolor>10?("class=shapebg" + (this.bcolor-10)):"") + "  style=\"" + bf   + "border:" + fw + "px " + framecolor + " solid;box-shadow:" + boxshadow + "px " + boxshadow + "px grey;height:"+ ((2*ht-fw)/1.4142) +"px;width:"+ (2*(ht-fw)/1.4142) +"px;transform:rotate(45deg);transform-origin:35.5% 84%\"></div>";
           this.base.appendChild(q);
           this.base.style.vertialAlign =   'middle';
       }
       else   if (this.shapename== 'hexgon')
       {
           this.base.style.cssText = tmp;
           var q = document.createElement('div');
           var bb ='g';
           if (inkframe) bb = 'w';
           q.id = bb + this.num;
           var mt = wt; if (ht > wt) mt = ht;
           mt *= 1.3;
           var hasframe = ((this.fc & 1) == 0)?1:0;

           q.style.cssText =  "position:relative;margin:-" +  (mt ) + "px 0px 0px 0px;z-index:-2";
           if (this.bcolor>10)
           {
               var qq = "";
               var twocolors = ["transparent","transparent"]
           }
           else
           {

               twocolors = [bcolors[this.bcolor],bcolors[this.bcolor]];
               if ( (this.fc & 8 ) > 0  )
                   twocolors = bf.replace(/[^#]+(#[0-9|a-f]+)[^#]+(#[0-9|a-f]+).*/, "$1,$2").split(/,/);
               qq = bf.replace(/\(/,'(to right,');
           }
           if( bf!='')
           q.innerHTML = "<table cellpadding=0 cellspacing=0><tr><td><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
           +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-right-color:" + twocolors[0] + ";border-right-width:"
           + (mt/2/1.732) + "px;border-right-style:solid;border-right-style:solid;border-top-style:solid;border-bottom-style:solid;></div></td><td   width=" +((mt/1.732)) + " style=\""
           + bf.replace(/\(/,'(to right,') + "\"><!----></td><td><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
           +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-left-color:" + twocolors[1]+ ";border-left-width:"
           + (mt/2/1.732) + "px;border-left-style:solid;border-bottom-style:solid;border-top-style:solid;></div></td></tr></table>";
           else
           q.innerHTML = "<table cellpadding=0 cellspacing=0><tr><td width=" + (mt/2/1.732) + "px><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
           +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-right-color:" + twocolors[0] + ";border-right-width:"
           + (mt/2/1.732) + "px;border-right-style:solid;border-right-style:solid;border-top-style:solid;border-bottom-style:solid;></div></td><td  class=shapebg" + (this.bcolor-10)  + " width=" +((mt/1.732))
           +  "><div class=shapebg" + (this.bcolor-10)  + " style=\"margin:-1px 0px 0px  0px;height:" + mt + "px;width:" +((mt/1.732))
           +  "px;\"><!----></div><div class=shapebg" + (this.bcolor-10)  + " style=\"z-index:-3;margin:-" + (mt) + "px 0px 0px  0px;height:" + mt + "px;width:" +((mt/1.732))
           +  "px;transform:rotate(60deg)\"><!----></div><div class=shapebg" + (this.bcolor-10)  + " style=\"z-index:-3;margin:-" + (mt) + "px 0px 0px 0px;height:" + mt + "px;width:" +((mt/1.732))
           +  "px;transform:rotate(-60deg)\"><!----></div></td><td width=" + (mt/2/1.732) + "px><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
           +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-left-color:" + twocolors[1]+ ";border-left-width:"
           + (mt/2/1.732) + "px;border-left-style:solid;border-bottom-style:solid;border-top-style:solid;></div></td></tr></table>";

           this.base.appendChild(q);
           if (hasframe > 0)
           {
               q = document.createElement('div');
               var bb ='f';
               if (inkframe) bb = 'x';
               q.id = bb + this.num;
               var fw = this.framew();
               mt += 2*fw;
               q.style.cssText =  "position:relative;margin:-" +  (mt-fw) + "px  -" +  fw + "px  -" +  fw + "px -" +  fw + "px;z-index:-3";
               q.innerHTML = "<table cellpadding=0 cellspacing=0><tr><td><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
               +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-right-color:" + colors[this.color] +";border-right-width:"
               + (mt/2/1.732) + "px;border-right-style:solid;border-right-style:solid;border-top-style:solid;border-bottom-style:solid;></div></td><td  width=" + (mt/1.732) + " style=background-color:" + colors[this.color] +"><!----></td><td><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
               +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-left-color:" + colors[this.color] +";border-left-width:"
               + (mt/2/1.732) + "px;border-left-style:solid;border-bottom-style:solid;border-top-style:solid;></div></td></tr></table>";
               this.base.appendChild(q);
           }
           var boxshadow = ((this.fc & 2) > 0)?1:0;
           if (boxshadow > 0)
           {
               q = document.createElement('div');
               var bb ='h';
           if (inkframe) bb = 'y';
               q.id = bb + this.num;
               var fw = this.framew()*2/3;
               q.style.cssText =  "position:relative;margin:-" +  (mt - fw/2) + "px  -" +  fw*3/2 + "px  " +  fw + "px " +  fw/2 + "px;z-index:-4";

               q.innerHTML = "<table cellpadding=0 cellspacing=0><tr><td><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
               +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-right-color:#777;border-right-width:"
               + (mt/2/1.732) + "px;border-right-style:solid;border-right-style:solid;border-top-style:solid;border-bottom-style:solid;></div></td><td  width=" + (mt/1.732) + " style=background-color:#777 ><!----></td><td><div style=width:0xp;height:0px;border-top-color:transparent;border-top-width:" + (mt/2)
               +"px;border-bottom-color:transparent;border-bottom-width:" + (mt/2) + "px;border-left-color:#777;border-left-width:"
               + (mt/2/1.732) + "px;border-left-style:solid;border-bottom-style:solid;border-top-style:solid;></div></td></tr></table>";
               this.base.appendChild(q);
           }

            
       }
       else   if (this.shapename== 'clouds')
       {
           var boxshadow = ((this.fc & 2) > 0)?1:0;
           this.base.style.cssText = tmp;;
           var q = document.createElement('div');
           var bb ='g';
           if (inkframe) bb = 'w';
           q.id = bb + this.num;
           q.style.cssText = "transform:scale(" + (1.5*wt/150) + "," + (1.5*ht/88) + ");transform-origin:0% 0%;height:88px;overflow:hidden;width:150px;position:relative;color:" + bcolors[this.bcolor] + ";margin:-" + (1.69*ht) + "px 0px 0px -0px;z-index:-2";
           q.innerHTML = "<div style=\"text-shadow:"  + boxshadow + "px " + boxshadow + "px grey;color:inherit;border:0px grey outset;font-size:167px;line-height:129px;width:150px\">&#x2601;</div></div>";
           this.base.appendChild(q);
       }

       this.base.style.fontSize =  (this.fontsize+1) +  'px';
       numbeing = this.num;
       this.inediting = false;
       shapenamebeing = this.shapename;
   }



   this.positionbyfn = function(fn)
   {
       var s = this.words.split(/\n/);
       for (var i=0; i < s.length; i++)
       {
           if (s[i].replace(/<[^>]+>/g,'') == fn) return (i-0.5)/s.length;
       }
       return 0.5;
   }

   this.inbase = function(bx,by)
   {
       if (this.shapename== 'egg'||this.shapename== 'ellipse'||this.shapename== 'circle')
       {
           var w =  this.base.offsetWidth;
           var h =  this.base.offsetHeight;
           var x = bx - this.x - w/2 ;
           var y = by - this.y - h/2;
           var D = x*x/w/w + y*y/h/h;

           return (  D <= 0.25);
       }
       else if (this.shapename== 'diamond')
       {
           w =  this.base.offsetWidth;
           h =  this.base.offsetHeight;
           x = bx - this.x - w/2 ;
           y = by - this.y - h/2;
           D =  Math.abs(x/w) + Math.abs(y/h) ;
           return (D <= 0.5);
       }
       else
       {
           w =  this.base.offsetWidth;
           h =  this.base.offsetHeight;
           x = bx - this.x ;
           y = by - this.y ;

           return ( x>=0 && x <=w && y >=0 && y <=h);
       }
   }

   this.extract = function(str,nm)
   {
      var j= str.indexOf(nm + ":");
      if (j ==-1) return null;
      var k= str.indexOf(";", j);
      if (k>-1)
          return str.substring(j+nm.length+1,k);
      return str.substring(j+nm.length+1);
   }
   this.ellipseimg = function()
   {
       var j = this.ispic;
       if ( j==1)
       {
          this.base.innerHTML = '';
          var cln = this.words.replace(new RegExp("\\[" + textmsg[1303] + "([0-9]+)\\]","i"),'imagelet$1')  ;
          this.base.className = cln;

          if (this.shapename == 'circle')
          {
              this.base.style.width = this.width + 'px';
              this.base.style.height = this.width + 'px';
          }

          return true;
       }
       else if (j==2)
       {
          var zz = this.basecss();
          this.base.style.border = '0px';
          this.base.style.boxShadow = '0px 0px white';
          this.base.style.background = null;
          this.base.style.backgroundColor = 'transparent';
          this.base.style.transform = this.extract(zz,"transform");
          this.base.style.left = this.x + "px";
          this.base.style.top = this.y + "px";
          this.base.style.position = "absolute";
          this.base.style.boxSizing= 'border-box';
          this.base.style.display = 'inline-block';
          var p = this.base.getElementsByTagName('img')[0];
          p.id = 'p' + this.num;
          p.style.boxShadow = this.extract(zz,"box-shadow");
          p.style.border = this.extract(zz,"border");
          var ht = null;
          var wd = null;
          var ww = 0, wws;
          try{ht = parseFloat(this.extract(zz,"height").replace(/px/,''));}catch(e){}
          try{wd = parseFloat(this.extract(zz,"width").replace(/px/,''));}catch(e){}
          try{ wws = this.urlas.replace(/^1/,'').replace(/_/,'');}catch(e){}
          if (!isNaN(wws)) ww = parseFloat(wws);
          if (ww > 0 && ht!=null ) { ht *= ww/wd; }
          if (ww > 0) wd = ww;
          if (ht!=null) p.style.height = ht + 'px'; else  p.style.height = null;
          if (wd!=null) p.style.width = wd + 'px';  else  p.style.width = null;

          p.style.borderRadius = this.extract(zz,"border-radius");

          return true;
       }
       else if (j==3) return true;
       return false;
   }

   this.onDragEnd = function(x,y)
   {

       if (this.inediting || this.validdrag == false) return;

       if (Math.abs(x) + Math.abs(y) > 10)
       {
           sendObject(this.num);
       }
       if (Math.abs(x) + Math.abs(y) > 0)
       {
        for (var i=0; i < allLines.length; i++)
        {
           if (allLines[i]!=null && (allLines[i].startnum== this.num || allLines[i].endnum== this.num ))
           {
               allLines[i].redraw();
           }
        }
       }
       var p = whichally(this.num,1);

       if (p > -1)
       {
           var ns = allies[pagenum][p].split(/,/);
           for (var j=0; j < ns.length; j++)
           if (ns[j] != ''+ this.num)
           {
               var ll = parseInt(ns[j]);
               var obj = allShapes[ll];
               obj.x += x;
               obj.y += y;
               obj.base.style.left = (  obj.x) + 'px';
               obj.base.style.top  = (  obj.y) + 'px';

               for (var i=0; i < allLines.length; i++)
               {
                   if (allLines[i]!=null && (allLines[i].startnum== obj.num || allLines[i].endnum== obj.num ))
                   {
                       allLines[i].redraw();
                   }
               }
           }
       }
       document.onmousemove = onmouseover0;
   }



   this.delme = function(needcomfirm)
   {
      if (typeof(LaTexHTML)!='undefined')
      LaTexHTML.deformat(this.base);
      if (needcomfirm!=null && saveable()  && this.words!=null &&  this.words.indexOf("<img ") >= 0)
      {
          var im = this.base.getElementsByTagName("img")[0].alt;

          if (im.src.indexOf(originalurl + "/FileOperation?did=") >=0
           && confirm(textmsg[1662].replace(/#/,  im)))
              delpic(this.num, im);
      }
      if (this.base!=null)
      document.body.removeChild( this.base);
      
      if (allies[pagenum]!=null)
      {
          for (var k=allies[pagenum].length-1; k >= 0; k--)
          {
             allies[pagenum][k] = ("," + allies[pagenum][k] + ",").replace(new RegExp("," + this.num + ","), ",").replace(/^,/,'').replace(/,$/,'');
             if (allies[pagenum][k] == '') 
                 allies[pagenum].splice(k,1);
             else
                 for (var j=this.num; j < allShapes.length-1; j++)
                    allies[pagenum][k] = ("," + allies[pagenum][k] + ",").replace(new RegExp("," + (j+1) + ","), "," + i + ",").replace(/^,/,'').replace(/,$/,'');
               
          }
      }
      for (var i=allLines.length-1; i >=0; i--)
      {
           if (allLines[i]!=null && (allLines[i].startnum== this.num || allLines[i].endnum== this.num ))
           {
               allLines[i].delme();
           }
          for (var j=this.num; j < allShapes.length-1; j++)
          { if (allLines[i]!=null && allLines[i].startnum== j+1)// || allLines[i].endnum== this.num ))
           {
               allLines[i].startnum = j;
           }
           if (allLines[i]!=null && allLines[i].endnum== j+1)// || allLines[i].endnum== this.num ))
           {
               allLines[i].endnum = j;
           }
         }
      }
      if (numsselected!=null) 
      {
          var l =0;
          for (; l < numsselected.length && numsselected[l]!=this.num; l++);
          if (l < numsselected[l])numsselected.splice(l,1);
          for (; l < numsselected.length; l++)
          {
             if (numsselected[l] > this.num)
                 numsselected[l] = numsselected[l] - 1;
          }
      }
      allShapes.splice(this.num,1);
      numShapes = allShapes.length;
      var k = kframes[pagenum + '_' + this.num];
      if (k!=null) delete kframes[pagenum + '_' + this.num];
      for (var j=this.num; j < allShapes.length; j++)
      {
          allShapes[j].num--;
          $('b'+(j+1)).id = 'b' + j;
          var pp = $('p'+ (j+1));
          if (pp!=null)pp.id = 'p' + j; 
          pp = $('g'+(j+1))
          if (pp!=null) pp.id = 'g' + j; 
          pp = $('f' + (j+1));
          if (pp!=null) pp.id = 'f' + j;
          var k = kframes[pagenum + '_' + (j+1)];
          if (k!=null)
          {
              kframes[pagenum + '_' + (j)] =   copyk(k);
              delete kframes[pagenum + '_' + (j+1)]; 
          }
      } 
   }
   
   
   this.toString = function()
   {
       if (ismakingtab != 1) return null;
       if (this.words == null)
           this.words = "";

       if (this.shapename == null) this.shapename = 'rightrect';
       var yy  = parseInt(this.base.style.top.replace(/px/,''));
       var xx  = parseInt(this.base.style.left.replace(/px/,''));
       var ww = '';
       if (this.width !=null)
           ww = this.width;
       else
           ww = this.base.offsetWidth;
       var hh = '';
       if (this.height !=null)
           hh = this.height;
       else
           hh = this.base.offsetHeight;
       var str ;
       if (this.words.indexOf(",") >= 0 || this.words.indexOf("\n") >= 0 || this.words.indexOf("\r") >= 0)
           str = "'" + this.words.replace(/'/g, "''") + "',";
       else
           str = this.words + ",";
        ;
       str += this.urlas + ",";
       str += this.shapename  +"," +  xx +"," + yy + "," + ww + "," + hh +","
          + this.fontsize + ",'" + (this.color) + "','" + this.bcolor + "'," + this.fc + "," + this.time.toFixed(3)+ "," + this.zindex + "," + this.start.toFixed(3) + ",'" + this.fontfamily + "'," + this.inediting + "," + this.slope;

       return str;
   }

   this.showresize = function(pic)
   {
       pic.id = "z" + this.num;
       {
           this.base.onmouseover = function()
           {
               var num = parseInt(this.id.substring(1));
               showanchor($("z"+num), this, 'se');
           }
       }

   }
   this.resizeit = function()
   {
       var ims = this.base.getElementsByTagName("img");
       if (this.ispic == 2)
       {
          ims[0].onload = function()
          {
               var sp = allShapes[parseInt(this.parentNode.id.substring(1))];
               sp.height = this.offsetHeight;
               sp.width = this.offsetWidth;
               sp.init();
          }
       }
       else if ( ( ims = this.base.getElementsByTagName("iframe") ) !=null && ims.length >0)
       {
           this.showresize(ims[0]);
       }
       else if ( ( ims = this.base.getElementsByTagName("embed") ) !=null && ims.length >0)
       {
           this.showresize(ims[0]);
       }

   }


   this.getdim = function()
   {
      this.width = this.base.offsetWidth;
      this.height = this.base.offsetHeight;
   }
 

   this.setup = function()
   {
       this.resizeit();
       allShapes[this.num] = this;
       numShapes = allShapes.length;
       numbeing = this.num;
       this.inediting = false;
       shapenamebeing = this.shapename;
       if (mfavory < this.base.offsetHeight)
           mfavory = this.base.offsetHeight;
       if (mfavory < this.height)
           mfavory = this.height;
       var mw = this.base.offsetWidth;
       if (mw < this.width ) mw = this.width;
       favorx += 10 + mw;
       if (favorx > 800)
       {
           favory += mfavory + 10;
           favorx = 5;
          mfavory = 0;
       }
       Drag.init(this.base);
       this.base.onDragStart = function(x,y)
       {
           document.onmousemove = onmouseover0;
           var sp = allShapes[parseInt(this.id.substring(1))];
           if (sp==null || sp.inediting) return;
           sp.bx = x;
           sp.by = y;
           if (state>0)
               sp.validdrag = false;
           else
               sp.validdrag = sp.inbase(myHintx, myHinty);

           sp.x =  parseInt(sp.base.style.left.replace(/px/,''));
           sp.y =  parseInt(sp.base.style.top.replace(/px/,''));

       }
       var xx = $('p' + this.num);
       if (xx!=null)
       xx.onresize = function()
       {
          var sp = allShapes[parseInt(this.id.substring(1))];
          sp.resize();
          sp.width = this.offsetWidth;
          sp.height = this.offsetHeight;
          sp.init();
       }

       this.base.onDragEnd = function(x,y)
       {
           document.onmousemove = onmouseover0;
           var sp = allShapes[parseInt(this.id.substring(1))];
           if (y>=-2&&y<3 && chatsessionnum==-1){saveit();activesave=true;}
           if ( state>0) // bounce back
           {
               this.style.left = sp.bx + 'px';
               this.style.top  = sp.by + 'px';
               sp.x = sp.bx;
               sp.y = sp.by;
               begindraw(sp.base);
               return;
           }
           if (document.onclick !=null) return;
           var diffx  = x - sp.bx;
           var diffy =  y - sp.by;
         
           if (  Math.abs(diffx) + Math.abs(diffy) > 4)
           {
               sp.x = x;
               sp.y = y;
               sp.onDragEnd(diffx,diffy);
               hassaved = false;
           }
           else
           {
               var n = parseInt(this.id.substring(1));
             
               if (!editable && myHintx - sp.x < this.offsetWidth/6  )
               {
                   sp.scale=sp.scale/1.5;
                   if (this.style.transform == null || this.style.transform == '')
                       this.style.transform = "scale(" + sp.scale + "," + sp.scale + ")";
                   else 
                       this.style.transform = this.style.transform.replace(/scale[^\)]+\)/,'').replace(/ /,'') + " scale(" + sp.scale + "," + sp.scale + ")";
               }
               else if (!editable && sp.x + this.offsetWidth - myHintx < this.offsetWidth/6 )
               {
                   sp.scale=sp.scale*1.5;
                        if (this.style.transform == null || this.style.transform == '')
                       this.style.transform = "scale(" + sp.scale + "," + sp.scale + ")";
                   else 
                       this.style.transform = this.style.transform.replace(/scale[^\)]+\)/,'').replace(/ /,'') + " scale(" + sp.scale + "," + sp.scale + ")";
               
               }
               else
               {
                   mdia(n,1);
               }
           }

           document.onmousemove = onmouseover0;
       }
       
        
       this.scale = 1; 
        
       this.base.onmouseenter = function()
       {
           var num = parseInt(this.id.substring(1));
           var sp = allShapes[num];
           if (sp==null) return;
           var wdd = sp.dotposition();

           if (state == 0)// && this.offsetHeight > 2*wdd[1] + sp.height + sp.framew()*2)
           {
               var q = $('p' + num);
               if (q!=null && sp.height < q.offsetHeight )
               {
                   sp.resize();
                   sp.height = q.offsetHeight+3;
                   sp.width = q.offsetWidth+3;
                   q.style.fontSize = sp.fontsize + 'px';
                   sp.init();
               }
           }
           else if (state == 1 || state == 2)
           {
               objentering = num;
               allShapes[num].noshape();
               allShapes[num].onshape = false;
           }
           this.style.fontSize =  sp.fontsize +  'px';

       }
       this.base.onmouseout = function()
       {

           if (state == 1 || state == 2)
           {
               var num = parseInt(this.id.substring(1));
               var sp = allShapes[num];
               objentering = -1;
               allShapes[num].toshape();
               allShapes[num].onshape = true;
           }

       }

   }
   this.reinit = function()
   {
       done(this.num);
   }
   
}

function toString()
{
    var s = "";
    var map = new Array();
    var k = numShapes;
    for (var i=0; i < k; i++)
    {
        if (allShapes[i] != null)
        {
           s += allShapes[i].toString() + "\n";
           map[i] = i;
        }
        else
        {
           while (k>=1 && allShapes[k-1] == null)
              k--;
           if (i >= k)
           {
               break;
           }
           map[k-1] = i;
           s += allShapes[--k].toString() + "\n";
        }
    }
    s += "A\n";
    if (allLines!=null)
    for (i=0; i < allLines.length; i++)
    {
       if (allLines[i]!=null)
       s += allLines[i].toString(map) + "\n";
    }
    return s;
}
function delall()
{
    if (allLines!=null)
    {
        for (i=0; i < allLines.length; i++)
        {
            if (allLines[i] != null)
            {
                allLines[i].delme();
                allLines[i] = null;
            }
        }
    }
    if (allCurves!=null)
    {
        for (i=0; i < allCurves.length; i++)
        {
            if (allCurves[i] != null)
            {
                allCurves[i].delme();
                allCurves[i] = null;
            }
        }
    }
    if (allShapes!=null)
    {
        
        for (var i=allShapes.length-1; i >= 0; i--)
        {
            if (allShapes[i] != null)
            {
                allShapes[i].delme();
            }
        }
    }


    numShapes = 0;
    numLines = 0;

}

function Line(ordernum,type,startnum,sx,sy,endnum,ex,ey,thick,direct,start, time,cl,zi)
{
   if (ordernum == null)
      this.num = numLines;
   else
      this.num = ordernum;
   numLines++;
   allLines[this.num] = this;
   this.startnum = startnum;
   this.sx = sx;
   this.sy = sy;
   this.endnum = endnum;
   this.ex = ex;
   this.ey = ey;
   this.direct = direct;
   this.type = type;
   this.thick = thick;
   this.time = time;
   this.start = start;
   if (zi==null) zi=0;
   this.zindex = zi;
   this.k = 0;
   this.color = cachedlinecolor;
   if (cl != null && cl != '')
   {
       this.color = cl;
   }
   this.x = 0;
   this.y = 0;
   this.visible = 0;
   this.toString = function(map)
   {
       var  sn = this.startnum;
       var  en = this.endnum;
       if (map != null)
       {
            sn = map[this.startnum];
            en = map[this.endnum];
       }

       if (sn == null) sn = -1;
       if( en == null) en = -1;
       var s =    this.type + "," + sn + "," + this.sx.toFixed(2) + "," + this.sy.toFixed(7)
       + ","  + en + "," + this.ex.toFixed(2) + "," + this.ey.toFixed(7) + "," + this.thick + "," + this.direct+ "," + this.start + "_" + this.time + "," +  this.color + "," + this.zindex;
       return s;
   }
   this.lineends = function(sobj, target,yy)
   {
            if (sobj==null) return null;
            var B;
            var adj = 0;
             
            if (sobj.shapename == 'diamond' )
                adj = 1;//this.thick;
             else if (this.direct%2==0 && sobj.shapename == 'circle')
            {
                var x = sobj.x, r = sobj.base.offsetWidth/2,y = sobj.y, 
                    d = Math.sqrt((target[0]-x-r)*(target[0]-x-r) + (target[1]-y-r)*(target[1]-y-r));
                var x1 = (target[0]-x-r)*r/d  + r + x;
                var y1 = (target[1]-y-r)*r/d  + r + y;
                return [[x1,y1]];
            }
              
            var xy = sobj.dotposition();
            var wdd = sobj.shapewidth();
            var hh = sobj.base.offsetHeight;
            //var h1 = $('g' + this.endnum);
            //if (h1!=null ) hh = h1.offsetHeight;
            //if (hh < wdd*sobj.height + sobj.framew())   hh = wdd*sobj.height+ sobj.framew();
             var pa = (hh - sobj.height)/2;

            if (sobj.ispic == 2)
            {
               sobj.noshape();
               var img = sobj.base.getElementsByTagName('img')[0];
               var xy = findPositionnoScrolling(img);

               var xyx = [img.offsetWidth,img.offsetHeight];
               var kk = 0.5;
               if (sobj.shapename=='egg') kk = 0.60;
               B = [
                  [xy[0],xy[1]+xyx[1]*kk],
                  [xy[0]+xyx[0],xy[1]+xyx[1]*kk],
                  [xy[0]+xyx[0]/2,xy[1]],
                  [xy[0]+xyx[0]/2,xy[1]+xyx[1]]
                  ];
                  sobj.toshape();
                  sobj.onshape = true;
            }
            else  if( !(sobj.shapename!='circle'&& sobj.shapename!='hexgon' && sobj.shapename!='diamond'
               &&  sobj.shapename!='ellipse'&& sobj.shapename!='egg') || this.ey == 0 || this.ey == 1)
            {
                B = [
                [sobj.x , sobj.y + hh/2-adj/2],
                [sobj.x + sobj.base.offsetWidth,   sobj.y + hh/2-adj/2],
                [sobj.x + sobj.base.offsetWidth/2, sobj.y],
                [sobj.x + sobj.base.offsetWidth/2, sobj.y + hh-adj]
               ];
            }
            else if (yy > 1)
            {
                B =[ [sobj.x + (wdd-1)*sobj.width/2, pa + sobj.y   + yy],
                   [sobj.x +   sobj.base.offsetWidth, pa+ sobj.y  + yy+ sobj.framew()]];
            }
            else  if (yy < 1)
            {
                B =[ [sobj.x + (wdd-1)*sobj.width/2, pa+ sobj.y +  yy*(sobj.height)+ sobj.framew() ],
                   [sobj.x +sobj.base.offsetWidth, pa+ sobj.y +  yy*(sobj.height)+ sobj.framew()]];
            }
            return B;
   }
   this.draw = function()
   {
        var ss = '';
        this.k =0;
        if (this.startnum == this.endnum && (this.startnum!=-1 || this.endnum!=-1))
        {
            return;
        }
        var A, B;
        var obja = null,objb = null;
        if (this.startnum>=0)
            obja = allShapes[this.startnum];
        if (this.endnum>=0)
            objb = allShapes[this.endnum];
        
        if (obja!=null)
        {
            var target = [this.ex, this.ey];
            if (objb!=null) { target[0] = objb.base.offsetWidth/2 + objb.x;
              target[1] =  objb.base.offsetHeight/2 + objb.y;}
            A = this.lineends(obja,target,this.sy);
            rotatepoint(A,obja);
            ss += A.toString() + '\n';
        }
        else
        {
            A = [[this.sx, this.sy]];
        }
        if (objb != null)
        {
            var target = [this.sx, this.sy];
            if (obja!=null) { target[0] = obja.base.offsetWidth/2 + obja.x;
              target[1] =  obja.base.offsetHeight/2 + obja.y;}
            B = this.lineends(objb,target, this.ey);
            rotatepoint(B, objb);
            ss += B.toString() + '\n';
        }
        else
        {
            B = [[this.ex, this.ey]];
        // this.mdiv(this.ex, this.ey,4, 6, "&times;");
        }
         
        var m = 100000000;
        var mi = 0;
        var mj = 0;
        var sss= '';
        for (var i=0; i < A.length; i++)
        for (var j=0; j < B.length; j++)
        {
            if (this.direct%2 == 0)
            var d =  Math.sqrt( (A[i][0] - B[j][0])*(A[i][0] - B[j][0]) + (A[i][1] - B[j][1])*(A[i][1] - B[j][1]));
            else if (this.direct%2 == 1)
                d = Math.abs(A[i][0] - B[j][0])  + Math.abs(A[i][1] - B[j][1]);
            sss += Math.round(d) + ' ' + i +  '  ' + j ;
            if (d < m && !( i == 1 &&  j >=2 && A[i][0] > B[j][0]  || i == 0 && j>=2 && A[i][0] < B[j][0])
                      && !(i==1 && j==0 && A[i][0] > B[j][0] || i==0 && j==1 && A[i][0] < B[j][0])
                      && !(i==3 && j==2 && A[i][1] > B[j][1] || i==2 && j==3 && A[i][1] < B[j][1]))
            {
                m = d;
                mi= i;
                mj= j;
                sss += ' x';
            }
            sss += '\n';
        }

        var Ax = A[mi][0];
        var Ay = A[mi][1];
        var Bx = B[mj][0];
        var By = B[mj][1];

        var bx = Bx;
        var by = By;

        var way = '';
        if (mi == 0 && mj ==1 || mi == 1 && mj ==0 ) way = 'hh';
        if (mi == 0 && mj ==0 || mi == 1 && mj ==1 ) way = 'vhv';
        if (mi < 2 && mj >=2) way = 'hv';
        if (mi >= 2 && mj < 2) way = 'vh';
        if (mi == 2 && mj ==3 || mi == 3 && mj ==2) way = 'vv';
        if (mi == 2 && mj ==2 || mi == 3 && mj ==3) way = 'vh';
        var mg = '';
        if (this.type == 'arrow')
            mg = ' ';
        else if (this.type == 'arrom')
            mg = ' ';
        else if (this.type == 'diamond')
            mg = ' ';

        var f = this.thickw(this.thick)/4;
        if (this.direct%2 == 0)
        {
            this.drawLine(Ax,Ay,Bx,By,this.thick,mg);
        }
        else if (this.direct%2 == 1)
        {
            if (way== 'hv')
            {
                if (!(this.startnum>=0 && allShapes[this.startnum].inbase(Bx,Ay))
                 && !(this.endnum>=0 && allShapes[this.endnum].inbase(Bx,Ay)))
                {
                    this.drawLine(Ax,Ay,Bx+(Bx>Ax?(f):(-f)),Ay,this.thick);
                    this.drawLine(Bx,Ay,Bx,By,this.thick,mg);
                }
                else
                {
                    this.drawLine(Ax,Ay,Ax,By +(By>Ay?(f):(-f)),this.thick);
                    this.drawLine(Ax,By,Bx,By,this.thick,mg);
                }
            }
            else if (way== 'vhv')
            {
                if (!(this.startnum>=0 && allShapes[this.startnum].inbase(Bx,Ay))
                        && !(this.endnum>=0 && allShapes[this.endnum].inbase(Bx,Ay)))
                {
                this.drawLine(Ax,Ay,Bx+(Bx>Ax?(f):(-f)),Ay,this.thick);
                this.drawLine(Bx,Ay,Bx,By,this.thick,mg);
                }
                else
                {
                this.drawLine(Ax,Ay,Ax+ (mi==1?1:(-1))*20,Ay,this.thick);
                this.drawLine(Ax+(mi==1?1:(-1))*20,Ay,Ax+(mi==1?1:(-1))*20,By +(By>Ay?(f):(-f)),this.thick);
                this.drawLine(Ax+(mi==1?1:(-1))*20,By,Bx,By,this.thick,mg);
                }
            }
            else if (way== 'vh')
            {
                if (!(this.startnum>-1 && allShapes[this.startnum].inbase(Ax,By))
                   && !(this.endnum>-1 && allShapes[this.endnum].inbase(Ax,By)) )
                {
                   this.drawLine(Ax ,Ay,Ax,By + (By>Ay?f:(-f)),this.thick);
                   this.drawLine(Ax ,By,Bx, By,this.thick,mg);
                }
                else
                {

                   this.drawLine(Ax ,Ay,Bx +(Bx>Ax?(-f):f),Ay ,this.thick);
                   this.drawLine(Bx ,Ay,Bx, By,this.thick,mg);

                }
            }
            else if (way== 'hh')
            {

                this.drawLine(Ax,Ay ,(Ax+Bx)/2 +(Bx>Ax?f:(-f)),Ay,this.thick);
                this.drawLine((Ax+Bx)/2 ,Ay,(Ax+Bx)/2 ,By + (By>Ay?f:(-f)),this.thick);
                this.drawLine((Ax+Bx)/2 ,By,Bx,By ,this.thick, mg);
            }
            else if (way== 'vv')
            {

                this.drawLine(Ax,Ay ,Ax ,(Ay + By)/2 +(By>Ay?f:(-f)) ,this.thick);
                this.drawLine(Ax,(Ay + By)/2  ,Bx +(Bx>Ax?f:(-f)),(Ay + By)/2,this.thick);
                this.drawLine(Bx ,(Ay + By)/2,Bx, By,this.thick, mg);
            }
       }
       if (chatsessionnum > -1 &&  sentline== false)
       {
            parent.sendObject(chatsessionnum, this.num + " l" +  this.toString());
       }
       sentline = false;
       document.onmousemove = onmouseover0;

   }
  
 
   this.drawLine = function(Ax,Ay,Bx,By,thick,mg)
   {
      this.drawl(Ax,Ay,Bx,By,thick,mg);

   }
   this.thickw = function(thick)
   {
       if (thick > 4) return 10;
       var f = [2, 4, 6, 8, 10];
       return f[thick];
   }
   this.drawlo = function(x0,y0,x1,y1,thick,mg)
   {
       var  dv =  document.createElement('div');
       dv.id = "l" + this.num +"_" + (this.k++);
       var f = this.thickw(thick)/2;
       if (mg!=null) mg = this.type;
       
       if (mg == 'arrow')
       {
           mg = '<div style="margin:-'+(f/2) + 'px 1px -' + (f/2) + 'px -1px;width:0px;height:0px;border-top:' + (f) + 'px solid transparent;border-left:' + f*2 + 'px solid ' + colors[this.color] +  ';border-bottom:' + (f) + 'px solid transparent;"><!----></div>';
       }
       else if (mg == 'arrom')
       { 
           mg = '<div style="margin:-'+(f/2) + 'px 1px -' + (f/2) + 'px -1px;width:0px;height:0px;border-top:' + (f) + 'px solid transparent;border-right:' + f*2 + 'px solid ' + colors[this.color] +  ';border-bottom:' + (f) + 'px solid transparent;"><!----></div>';
       }
       else if (mg == 'diamond')
       {
           mg = '<div style="margin:-'+(f*0.5) + 'px -' + (f*0.20) + 'px -' + (f*0.5) + 'px ' + (f*0.20) + 'px;width:' + (f*2/1.41) + 'px;height:' + (f*2/1.41) + 'px;background-color:' + colors[this.color] +  ';-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);transform-origin:50% 50%"><!----></div>';
       }
       else 
       {
           mg = '';
          
       }
        var ml =   (y1>y0?(-f+2):(-2));
        var width = Math.sqrt((y1-y0)*(y1-y0) + (x1-x0)*(x1-x0))  ;
        if (width < f) {mg = '';  }
        var left =  (x1+x0)/2 - (width)/2;
        var top =   (y1+y0)/2 + ml;
        var height = f;

        if (y1==y0)
        {
            left = x1>x0?x0:x1;
            top = y0-f/2;
            width = Math.abs(x1-x0)  ;
            height = f;
        }
        else if (x1==x0)
        {
            width = Math.abs(y1-y0) ;
            height = f;
            left = x1 - width/2;
            top = (y1+y0)/2 + ml;
        }

        if (x1==x0)
        {
            if (y1>y0)
            var deg = 90;
            else
                deg = 270;
        }
        else if (y1==y0)
        {
            if (x1<x0) deg = 180;
            else deg = 0;
        }
        else if (Math.abs(x1-x0) > Math.abs(y1-y0) )
    {
         deg  =   Math.atan2(y1-y0, x1-x0)*180/3.14159265;
    }
    else
    {
        deg  = -Math.atan2(x1-x0,y1-y0)*180/3.14159265 + 90;
    }
     {
        if (mg!=null && mg!='')
        {
            if (this.direct > 1)
            {
               var tds = '';
               var j=0;
               while ((j+1) * f < width-1.5*f)
               {
                   tds += "<td width=" + f + " valign=middle><div style=\"margin:0px 0px 0px 0px;width:" + f + "px;height:" + f + "px;background-color:" + ((j%2==0)?colors[this.color]:'transparent')  + "\"><!----></div></td>";
                   j++;
               }
               tds += "<td width=" + (width-1.5*f-j * f) + " valign=middle><div style=\"margin:0px 0px 0px 0px;width:" + (width-1.5*f-j * f) + "px;height:" + f + "px;background-color:" + ((j%2==0)?colors[this.color]:'transparent')  + "\"><!----></div></td>"

            }
            else
                tds = "<td width=" + (width-1.5*f) + " valign=middle><div style=\"margin:0px 0px 0px 0px;width:" + (width-1.5*f) + "px;height:" + f + "px;background-color:" +  colors[this.color]  + "\"><!----></div></td>";
            dv.style.cssText = 'z-index:0;position:absolute;left:'
            + left + 'px;top:'
            + top +  'px;width:'
            + width + 'px;height:'
            + f + 'px;-ms-transform: rotate(' + deg
            + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);z-index:0;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;';
            dv.innerHTML = '<table cellpadding=0 cellspacing=0><tr height=' + f + " valign=middle>" + tds + "<td style=\"color:" + (colors[this.color]) + "\" width=" + f + " align=center valign=middle>" + mg + "</td></tr></table>";
        }
        else
        {
            if (this.direct > 1)
            {
               var tds = '';
               var j=0;
               while ((j+1) * f < width)
               {
                   tds += "<td width=" + f + " valign=middle><div style=\"margin:0px 0px 0px 0px;width:" + f + "px;height:" + f + "px;background-color:" + ((j%2==0)?colors[this.color]:'transparent')  + "\"><!----></div></td>";
                   j++;
               }
               tds += "<td width=" + (width-j * f) + " valign=middle><div style=\"margin:0px 0px 0px 0px;width:" + (width-j * f) + "px;height:" + f + "px;background-color:" + ((j%2==0)?colors[this.color]:'transparent')  + "\"><!----></div></td>"

            }
            dv.style.cssText = 'z-index:0;position:absolute;left:'
            + left + 'px;top:'
            + top +  'px;width:'
            + (width) + 'px;height:'
            + f + "px;padding:0px;" +  (this.direct<=1?("background-color:" + colors[this.color]):'')  + ';-ms-transform: rotate(' + deg
            + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);z-index:0;padding:0px 0px 0px 0px;margin:0px -1px 0px 0px;';
            if (this.direct>1)
                dv.innerHTML = '<table cellpadding=0 cellspacing=0><tr height=' + f + " valign=middle>" + tds + "</tr></table>";
        }
    }
    document.body.appendChild(dv);

    return dv;
   }


   this.drawl = function(x0, y0, x1, y1, thick,mg)
   {
       var  dv = this.drawlo(x0,y0,x1,y1,thick,mg);
       if (this.startnum== -1 && this.endnum== -1)
       {

            if (editable)Drag.init(dv);
            dv.onDragStart = function(x,y)
            {

                var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
                current(tnum);
                allLines[tnum].x = x;
                allLines[tnum].y = y;
            }
            dv.onDragEnd = function(x,y)
            {
                var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
                var d = (allLines[tnum].x - x)*(allLines[tnum].x - x) +
                        (allLines[tnum].y - y)*(allLines[tnum].y - y) ;
                if (d > 4)
                {
                    allLines[tnum].sx += x - allLines[tnum].x;
                    allLines[tnum].sy += y - allLines[tnum].y;
                    allLines[tnum].ex += x - allLines[tnum].x;
                    allLines[tnum].ey += y - allLines[tnum].y;
                    allLines[tnum].redraw();
                }
                else
                  mdia(tnum,2);
            }
       }
       else
       {
            dv.onclick = function()
            {
             var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
             mdia(tnum,2) ;
            }

       }
       dv.style.zIndex = "0";
   }
   this.hide = function()
   {
       var k = 0, t;
        while (true)
           {
               t = $('l' + this.num + '_' + k);
               if (t==null) break;
               t.style.visibility = 'hidden';
               k++;
           }
   }
   this.show = function()
   {
       var k = 0, t;
        while (true)
           {
               t = $('l' + this.num + '_' + k);
               if (t==null) break;
               t.style.visibility = 'visible';
               k++;
           }
   }
   this.mdiv = function(x,y,w,h,mg)
   {
       var dv = document.createElement("div");
       dv.id = "l" + this.num +"_" + (this.k++);
       if (mg== '' || mg == null)
           dv.style.cssText = "z-index:0;position:absolute;left:"+ x +"px;top:"+y +"px;width:" + w +"px;height:" + h +"px;background-color:" +  colors[this.color] +";padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px";
       else
           dv.style.cssText = "z-index:0;position:absolute;left:"+ x +"px;top:"+y +"px;background-color:transparent;color:" +  colors[this.color] +";padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:" + w + "px;width:" + w +"px;height:"+ w +"px";

       if (mg== '' || mg == null)
       {
           dv.innerHTML = "<!---->";
       }
       else
       {
           dv.innerHTML = mg;
       }
       if (this.startnum== -1 && this.endnum== -1)
       {

            if (editable)Drag.init(dv);
            dv.onDragStart = function(x,y)
            {

                var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
                current(tnum);
                allLines[tnum].x = x;
                allLines[tnum].y = y;
            }
            dv.onDragEnd = function(x,y)
            {

                var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
                var d = (allLines[tnum].x - x)*(allLines[tnum].x - x) +
                        (allLines[tnum].y - y)*(allLines[tnum].y - y) ;
                if (d > 4)
                {
                    allLines[tnum].sx += x - allLines[tnum].x;
                    allLines[tnum].sy += y - allLines[tnum].y;
                    allLines[tnum].ex += x - allLines[tnum].x;
                    allLines[tnum].ey += y - allLines[tnum].y;
                    allLines[tnum].redraw();
                }
                else
                  mdia(tnum,2);
            }
       }
       else
       {
            dv.onclick = function()
            {
               var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
               mdia(tnum,2) ;
            }

       }
       document.body.appendChild(dv);

   }

   this.remove = function()
   {
      var k=0;
      var z;
      while (true)
      {
          z = $("l" + this.num +"_" + k);
          if (z == null) break;

          try{
              document.body.removeChild(z);
          } catch(e){ }
          k++;
      }
   }
   this.delme = function()
   {
       this.remove();
       allLines[this.num] = null;
       if (chatsessionnum== -1 && this.num== numLines-1)
         numLines--;
   }
   this.redraw = function()
   {
      this.remove();
      this.draw();
   }
   this.draw();
}


function Curve(ordernum, type, thick, cl,start, tm, zi, points)
{
   if (ordernum == null)
      this.num = numCurves;
   else
      this.num = ordernum;
   numCurves++;
   allCurves[this.num] = this;
   this.points = points;
   this.type = type;
   this.thick = thick;
   this.time = tm;
   this.start = start;
   if (zi==null) zi=-1;
   this.zindex = zi;
   this.k = 0;
   this.kk = 0;
   this.color = cachedcurvecolor;
   if (cl != null && cl != '')
   {
       this.color = cl;

   }
   this.x = 0;
   this.y = 0;
   this.visible = 1;
   this.toString = function()
   {
       var s =  this.type + ","  + this.thick + "," + this.color + "," + this.start.toFixed(3) + "_" + this.time.toFixed(3)+ "," + this.zindex;
       if (this.points!=null && this.points.length>0)
       {
           s += "," + this.points[0][0] + "," + this.points[0][1];
           for (var i=1; i < this.points.length; i++)
           {
               if ( Math.abs(this.points[i][0]-this.points[i-1][0]) + Math.abs(this.points[i][1]-this.points[i-1][1]) > 0)
               s += "," + (this.points[i][0]-this.points[i-1][0]) + "," + (this.points[i][1]-this.points[i-1][1]);
           }
       }
       return s;
   }
   this.drawcurve = function()
   {
       var minx = 10000,maxx =-10000, miny=10000,maxy=-10000;
       for (var i=0; i < this.points.length; i++)
       {    if (this.points[i][0] < minx)
               minx = this.points[i][0];
           else if (this.points[i][0] > maxx)
               maxx = this.points[i][0];
           if (this.points[i][1] < miny)
               miny = this.points[i][1];
           else if (this.points[i][1] > maxy)
               maxy = this.points[i][1];
       }
       minx -=this.thick;
       maxx +=this.thick;
       miny -=this.thick;
       maxy +=this.thick;
       var cvs = document.createElement('div');
       cvs.id= 'c' + this.num;
       cvs.style.cssText = 'position:absolute;left:' +  minx + 'px;top:' + miny + 'px;width:' + (maxx-minx +2*this.thick ) + 'px;overflow:visible;padding:0px;';
       cvs.innerHTML = "<canvas style=\"margin:0px\" id=\"j" + this.num + "\" width=" + (maxx-minx + 2*this.thick) + " height=" + (maxy-miny + 2*this.thick) + "  >Your browser does not support the HTML5 canvas tag.</canvas>";
       document.body.appendChild(cvs);
       this.drawoncanvas();
       Drag.init(cvs);
       cvs.onmouseenter = function()
       {
           showanchor(this,this,'se');
       }
       cvs.onDragStart = function(x,y)
        {
            var tnum = parseInt(this.id.substring(1) );
            allCurves[tnum].x = x;
            allCurves[tnum].y = y;
        }
        cvs.onDragEnd = function(x,y)
        {
            var tnum = parseInt(this.id.substring(1) );
            if (tnum + '' == 'NaN') return;
            var d = [allCurves[tnum].x - x,allCurves[tnum].y - y];
            var ds = d[0]*d[0] + d[1]*d[1];
            if (ds > 4)
            {
               for (var j=0; j < allCurves[tnum].points.length; j++)
               {
                   allCurves[tnum].points[j][0] -= d[0];
                   allCurves[tnum].points[j][1] -= d[1];
               }
               allCurves[tnum].x = x;
               allCurves[tnum].y = y;
               var p = whichally(tnum,4);
               if (p > -1)
               {
                   var ns = allies[pagenum][p].split(/,/);
                   for (var j=1; j < ns.length; j++)
                   {
                       var num = parseInt(ns[j]);
                       if (num==tnum) continue;
                       for (var j=0; j < allCurves[num].points.length; j++)
                       {
                           allCurves[num].points[j][0] -= d[0];
                           allCurves[num].points[j][1] -= d[1];
                       }
                       allCurves[num].x = x-d[0];
                       allCurves[num].y = y-d[1];
                   }
               }
            }
            else
            {
                mdia(tnum,4);
            }
            hideanchor(tnum);
        }
        showanchor(cvs, cvs, 'se');
   }
   
   this.drawoncanvas = function(f, t)
   {
        var cv = document.getElementById("j" + this.num);
        var ctx = cv.getContext("2d");
        ctx.beginPath();
        if (this.type=='curve' || this.type=='smooth')
           ctx.setLineDash([0]);
        else if (this.type=='dotted'||this.type=='dsmooth')
           ctx.setLineDash([5]); 
        ctx.lineWidth =  this.thick;
        ctx.strokeStyle = colors[this.color];
         var minx = 10000,maxx =-10000, miny=10000,maxy=-10000;
       
       for (var i=0; i < this.points.length; i++)
       {    if (this.points[i][0] < minx)
               minx = this.points[i][0];
           else if (this.points[i][0] > maxx)
               maxx = this.points[i][0];
           if (this.points[i][1] < miny)
               miny = this.points[i][1];
           else if (this.points[i][1] > maxy)
               maxy = this.points[i][1];
       }
       minx -=this.thick;
       maxx +=this.thick;
       miny -=this.thick;
       maxy +=this.thick;
       var points = [];
        for (var i = 0; i < this.points.length; i++ ) 
        {
            points.push({x:(this.points[i][0]-minx ),y:(this.points[i][1]-miny)});
        }
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
       if ( (this.type=='curve' || this.type=='dotted') && this.points.length > 1)
       {  
        if (typeof(f) == 'undefined') f = 0.3;
        if (typeof(t) == 'undefined') t = 0.6;
        
     
 
        var m = 0;
        var dx1 = 0, dx2;
        var dy1 = 0, dy2;

        var preP = points[0];
        for (var i = 1; i < points.length; i++) 
        {
            var curP = points[i];
            var nexP = points[i + 1];
            if (nexP ) {
                if (nexP.x != preP.x){
                m = (nexP.y-preP.y)/(nexP.x-preP.x);
                dx2 = (nexP.x - curP.x) * -f;
                dy2 = dx2 * m * t;}
                else if (nexP.y==preP.y)
                {
                    dx2 = (nexP.x - curP.x) * -f;
                    dy2 = dx2 * t; 
                }
                else if (nexP.x == curP.x)
                {
                    dx2 = 0;
                    dy2 = (nexP.y-preP.y)*(-f*t);
                }
                else
                {
                     dx2 = 0;
                     dy2 = 0;
                }
            } else {
                dx2 = 0;
                dy2 = 0;
            }
            ctx.bezierCurveTo(preP.x - dx1, preP.y - dy1, curP.x + dx2, curP.y + dy2, curP.x, curP.y);
            dx1 = dx2;
            dy1 = dy2;
            preP = curP;
        }
    }
    else if ((this.type=='smooth' || this.type=='dsmooth') && points.length > 1)
    {    i=0;
        if (points.length  > 2)
        for (i = 0; i  < points.length-2; i ++)
        {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    }
        ctx.stroke();
   }
   
   this.draw = function(ii)
   {
        if (this.type=='curve' || this.type=='dotted'||this.type=='smooth' || this.type=='dsmooth')
        {
            this.drawcurve();
            return;
        }
        var j  = 0;
        if (ii != null)
            j = ii;
        else
            this.k =0;
        for (var i=j; i < this.points.length-1; i++)
        {
            if(this.points[i]==null || this.points[i+1]==null) continue;
            if (  this.points[i][0]== this.points[i+1][0]  && this.points[i][1]== this.points[i+1][1])
            continue;
            this.drawLine(this.points[i][0],this.points[i][1],this.points[i+1][0],this.points[i+1][1]);
            if ( ii == null && (i==0 || this.points[i][0] != this.points[i-1][0] || this.points[i][1] !=this.points[i-1][1]))
            {
                this.drawDot(this.points[i][0],this.points[i][1],i);
            }
        }
        i = this.points.length-1;
        if (  (i== 0 || this.points[i]!=null && this.points[i-1]!=null && this.points[i][0] != this.points[i-1][0]  || this.points[i][1] != this.points[i-1][1]) )
        {
                this.drawDot(this.points[i][0],this.points[i][1],i);
        }
       if (ii == null && chatsessionnum > -1 &&  sentline== false)
       {
            parent.sendObject(chatsessionnum, this.num + " c" +  this.toString());
       }
       sentline = false;
       document.onmousemove = onmouseover0;
   }
   this.hide = function()
   {
       var t = $('c' + this.num);
       if (t!=null)
       {
           t.style.visibility = 'hidden';
       }
       else
       {
           var k =0;
           while (true)
           {
               t = $('c' + this.num + '_' + k);
               if (t==null) break;
               t.style.visibility = 'hidden';
               k++;
           }
       }
   }
   this.show = function()
   {
       var t = $('c' + this.num);
       if (t!=null)
       {
           t.style.visibility = 'visible';
       }
       else
       {
           var k =0;
           while (true)
           {
               t = $('c' + this.num + '_' + k);
               if (t==null) break;
               t.style.visibility = 'visible';
               k++;
           }
       }
   }
   this.drawl = function(x0, y0, x1, y1, thick )
{
    var  dv = document.createElement('div');
    dv.id = "c" + this.num +"_" + (this.k++);
    if (Math.abs(x1-x0) > Math.abs(y1-y0) )
    {
        var width = Math.sqrt((y1-y0)*(y1-y0) + (x1-x0)*(x1-x0));
        var left =   (x1+x0)/2 - width/2;
        var top =   (y1+y0)/2 - thick/2;
        var height = thick;
        var deg  = Math.atan2(y1-y0, x1-x0)*180/3.14159265;
        if (this.type == 'dotline'){
        dv.style.cssText = 'position:absolute;left:'
        + left + 'px;top:'
        + top +  'px;width:'
        + width + 'px;height:'
        + height + 'px;-ms-transform: rotate(' + deg
        + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);z-index:5;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px';
        
          dv.innerHTML = "<div style=\"margin:0px;padding:0px;border:0px;height:0px;width:" +  width + "px;border-top-width:" + this.thick + 'px;border-top-color:' + colors[this.color] + ";border-top-style:dotted\"><!----></div>";
        }else
        {
            dv.style.cssText = 'position:absolute;left:'
        + left + 'px;top:'
        + top +  'px;width:'
        + width + 'px;height:'
        + height + 'px;background-color:' + colors[this.color] + ';-ms-transform: rotate(' + deg
        + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);z-index:5;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px';
         dv.innerHTML = "<!---->"; 
      }
        document.body.appendChild(dv);
    }
    else //if (Math.abs(x1-x0) < Math.abs(y1-y0) )
    {
        var height = Math.sqrt((y1-y0)*(y1-y0) + (x1-x0)*(x1-x0));
        var left =  (x1+x0)/2 - thick/2;
        var top =    (y1+y0)/2 - height/2;
        var width = thick;
        var deg  = -Math.atan2(x1-x0,y1-y0)*180/3.14159265;
        if (this.type == 'dotline'){
        dv.style.cssText = 'position:absolute;left:'
        + left + 'px;top:'
        + top +  'px;width:'
        + width + 'px;height:'
        + height + 'px;-ms-transform: rotate(' + deg
        + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);z-index:5;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px';
           dv.innerHTML = "<div style=\"border:0px;width:0px;height:" +  height + "px;border-right-width:" + this.thick + 'px;border-right-color:' + colors[this.color] + ";border-right-style:dotted\"><!----></div>";
        }
        else
        {
            dv.style.cssText = 'position:absolute;left:'
        + left + 'px;top:'
        + top +  'px;width:'
        + width + 'px;height:'
        + height + "px;background-color:" + colors[this.color] + ';-ms-transform: rotate(' + deg
        + 'deg);-webkit-transform: rotate('+ deg + 'deg);transform: rotate('  + deg + 'deg);z-index:5;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px';
        
          dv.innerHTML = "<!---->"; 
        }
        document.body.appendChild(dv);
    }
       
       Drag.init(dv);
       dv.onDragStart = function(x,y)
        {

            var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
            current(tnum);
            allCurves[tnum].x = x;
            allCurves[tnum].y = y;
        }
        dv.onDragEnd = function(x,y)
        {

            var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
            if (tnum + '' == 'NaN') return;
            var d = [allCurves[tnum].x - x,allCurves[tnum].y - y];
            var ds = d[0]*d[0] + d[1]*d[1];
            if (ds > 4)
            {
                for (var i=0; i < allCurves[tnum].points.length; i++)
                {
                    for (var j=0; j < 2; j++)
                    {
                        allCurves[tnum].points[i][j] -= d[j];
                    }
                }
                allCurves[tnum].redraw();
                
                var p = whichally(tnum,4);
               if (p > -1)
               {
                   var ns = allies[pagenum][p].split(/,/);
                   for (var j=1; j < ns.length; j++)
                   {
                       var num = parseInt(ns[j]);
                       if (num==tnum) continue;
                       for (var i=0; i < allCurves[num].points.length; i++)
                        {
                            for (var j=0; j < 2; j++)
                            {
                                allCurves[num].points[i][j] -= d[j];
                            }
                        }
                        allCurves[num].redraw();
                   }
               }
            }
            else
            {
                mdia(tnum,4);
            }
        }
       document.body.appendChild(dv);
   }

   this.drawLine = function(Ax,Ay,Bx,By)
   {
       this.drawl(Ax,Ay,Bx,By,this.thick);
       return;

   }
   this.mdiv = function(x,y,w,h)
   {
       if (w == 0 || h == 0) return;
       var dv = document.createElement("div");
       dv.id = "c" + this.num +"_" + (this.k++);
       dv.style.cssText = "z-index:1;position:absolute;left:"+ x +"px;top:"+y +"px;width:" + w +"px;height:" + h +"px;background-color:" + colors[this.color] +";padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px";
       dv.innerHTML = "<!---->";
       Drag.init(dv);
       dv.onDragStart = function(x,y)
        {

            var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
            current(tnum);
            allCurves[tnum].x = x;
            allCurves[tnum].y = y;
        }
        dv.onDragEnd = function(x,y)
        {
            var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
            var d = [allCurves[tnum].x - x,allCurves[tnum].y - y];
            var ds = d[0]*d[0] + d[1]*d[1];
            if (ds > 4)
            {
                for (var i=0; i < allCurves[tnum].points.length; i++)
                {
                    for (var j=0; j < 2; j++)
                    {
                        allCurves[tnum].points[i][j] -= d[j];
                    }
                }
                allCurves[tnum].redraw();
            }
            else
            {
                mdia(tnum,4);
            }
        }
       document.body.appendChild(dv);
   }

   this.drawDot = function(x,y,i)
   {
       var w = this.thick, h = this.thick;
       x-=this.thick/2;y-=this.thick/2;
       var dv = document.createElement("div");
       dv.id = "g" + this.num +"_" + this.kk++;
       dv.style.cssText = "z-index:1;position:absolute;left:"+ x +"px;top:"+y +"px;width:" + w +"px;height:" + h +"px;border-radius:" + (this.thick/2) + "px;background-color:" + colors[this.color] +";padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;font-size:1px";
       dv.innerHTML = "<!---->";
       Drag.init(dv);
       dv.onDragStart = function(x,y)
       {

       }
       dv.onDragEnd = function(x,y)
       {
            var i = parseInt(this.id.substring( this.id.indexOf("_")+1 ) );
            var tnum = parseInt(this.id.substring(1, this.id.indexOf("_") ) );
            allCurves[tnum].points[i] = [x,y];
            allCurves[tnum].redraw();
       }
       document.body.appendChild(dv);
   }

   this.remove = function(k,r)
   {
      var z;
      if ( (z = $('c' + this.num)) != null)
      {
         document.body.removeChild(z);
         if (r == 'c')
         {
             this.draw();
         }
      }
      if ( k ==null)
      {
          for (var j = 0; j < this.k; j++)
          if ( (z = $('c' + this.num +"_" + j)) != null)
          {
              document.body.removeChild(z);
          }
          for (j = 0; j <  this.kk; j++)
          if ( (z = $('g' + this.num +"_" + j)) != null)
          {
               document.body.removeChild(z);
          }
      }
      else
      {
          if (k < this.k && r== 'c')
          {
             z   = $('c'  + this.num +"_" + k);
             if (z!=null) document.body.removeChild(z);
             this.remove(k+1, 'c');
           //setTimeout(s, 5);
          }
          else if (k== this.k && r== 'c')
          {
              this.remove(0, 'g');
          }
          else if (k < this.kk && r=='g')
          {
             z   = $( 'g' + this.num + "_" + k);
             if (z!=null) document.body.removeChild(z);
             this.remove(k+1, 'g');
          }
          else if (k== this.kk && r=='g')
          {
              this.draw();
          }
      }
   }
   this.delme = function()
   {
       this.remove();
       allCurves[this.num] = null;
       if (chatsessionnum== -1 && this.num== numCurves-1)
         numCurves--;
   }
   this.redraw = function()
   {
      this.remove(0,'c');
   } 
   this.draw();
}


function current(lnum)
{
    currentlnum = lnum;
}
function redrawl(x,y)
{
   var l = allLines[currentlnum];
   if (l.startnum== -1)
   {
      l.sx = x;
      l.sy = y;

   }

   l.redraw();
   canceldia(currentlnum,2);
}
function redraw2(num,d)
{
    for (var i=0; i < numsselected.length; i++)
    {
              num = numsselected[i];
              var l = allLines[num];
             l.direct = d;
             l.redraw();

    }
     canceldia(num,2);
}

function removehint(t, hint)
{
    if (t.value == hint)
    {
        t.style.color = 'black';
        t.value = '';
    }
}

function showhint(t, hint)
{
    if (t.value == '')
    {
        t.style.color = 'grey';
        t.value = hint;
    }
}
function thesame(num,cd)
{
    var i = whichally(num,cd);
    if (i==-1) return false;
    if (cd == 1)
    {
    var x = "," + allies[pagenum][i] + ",";
    for (num=0; num < numsselected.length; num++)
        x = x.replace(new RegExp("," + numsselected[num] + ","), ",");
    return x == ",";
    }
    else if (cd == 4)
    {
    var x =  allies[pagenum][i] + ",";
    for (num=0; num < numsselected.length; num++)
        x = x.replace(new RegExp("," + numsselected[num] + ","), ",");
    return x == "c,";
    }
}
var bgmouseentered ;
function choosebg(sel,num,cd)
{
    if (innewkframe) return;
    bgmouseentered=false;
     var tbl = sel.parentNode.parentNode;
      if (tbl.tagName.toLowerCase() != 'table')
      {
          tbl = sel.parentNode.parentNode.parentNode;
      }
      var iii = 0;
      for (var j=0; j < tbl.rows.length; j++)
      for (var i=0; i < tbl.rows[j].cells.length; i++)
      {
          tbl.rows[j].cells[i].style.border = '1px transparent solid';
          if (tbl.rows[j].cells[i]==sel)
              iii = j*tbl.rows[0].cells.length + i;
      }
    sel.style.border = '1px orange solid';
    
    var  xx = "<table style=\"margin:0px\" ><tr><td width=20  onmouseenter=\"if(bgmouseentered)closeprompt1()\"><!---></td><td  onmouseenter=\"javascript:bgmouseentered=true\"><table  style=margin:0px  cellspacing=0 cellpadding=0 border=1 style=\"border-collapse:collapse;border-color:grey;border:1px #444 solid\">";
    var nc = Math.ceil(Math.sqrt(hw.numlets)); if (nc>8) nc = 8;
    var nr = Math.ceil(hw.numlets/nc);
    var wd = 300; if (nc==2) wd = 150; else if (nc>2) wd =100;
    var kk=1;
    for (var ii=0; ii < nr; ii++)
    {
       xx += "<tr height=100>";
     
       for (var jj=0; jj < nc; jj++)
       {
          if (kk <= hw.numlets)
          {  //this," + num  + "," + cd + "," + i + "
              xx += "<td width=" + wd + "><div class=shapebg" + kk + " onclick=changecolorb(this," + num + "," + cd + "," + (10+kk)  + ") style=\"width:100%;height:100px\"><!----></div></td>";
              kk++;
          }
          else
              xx += "<td></td>";
       }
       xx += "</tr>";
    }
    xx +="</table></td><td width=20  onmouseenter=\"if(bgmouseentered)closeprompt1()\"></td></tr><tr height=15><td colspan=3 onmouseenter=\"if(bgmouseentered)closeprompt1()\" ></td></tr></table>";
    myprompt(xx,null,null,textmsg[1493]);
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].onclick= closeprompt1;
    //promptwin.getElementsByTagName('table')[0].rows[1].cells[1].onmouseenter = function(){};
    //promptwin.getElementsByTagName('table')[0].rows[1].cells[1].onmouseout = closeprompt1;
}
function mmdia(num,cd)
{
    mdia(num,cd); 
    var xx = $('m' + num + "_" + cd);
    if (cd==1)
    {
    xx.style.left = (allShapes[num].x + 90) + 'px';
    xx.style.top = (allShapes[num].y) + 'px';
    allShapes[num].visible = 1;
    allShapes[num].base.style.visibility = 'visible';
    } else if (cd==2)
    {
    xx.style.left = (allLines[num].sx + 90) + 'px';
    xx.style.top = (allLines[num].sy) + 'px';
    
    
    } else if (cd==4)
    {
    xx.style.left = (allCurves[num].x + 90) + 'px';
    xx.style.top = (allCurves[num].y) + 'px';
     
    }
    closeprompt1();
}
function mdia(num,cd )
{
       var mss = textmsg[1786].split(/@/);
       var xs = textmsg[1773].split(/@/);
       if (num<0 || cd==1 && num>=allShapes.length || cd==2 && num>=allLines.length )
       {
           myprompt(textmsg[1657] + "<br>" + num +  "," + cd);
           return;
       }
       if (cd!=cdbeing && cdbeing!=-1) return;
       if (cd==0 && numsselected!=null && numsselected.length==1) return;
       cdbeing = cd;
       if (numsselected==null)
       {
           numsselected = [];
       }
       for (var i=0; i < numsselected.length; i++)
           if (numsselected[i] == num) break;
       if (i == numsselected.length)
       {
           numsselected[i] = num;
       }
       if (hasone!=null) document.body.removeChild(hasone);
       var dv = document.createElement("div");
       dv.id = "m" + num + "_" + cd;
       hasone = dv;

       dv.style.cssText = "position:absolute;left:"+ myHintx +"px;top:"+ myHinty +"px;border:2px #444 solid;background-image:linear-gradient(-45deg,#ccc,#bbb,#eee,#aaa);z-index:" + ( 3*numShapes+3) + ";border-radius:4px;box-shadow:-" + (numsselected.length*2-2) + "px -" + (numsselected.length-1) + "px #777";
       var str = "<table style=\"font-size:12px\" border=0><tr><td  >               </td></tr>";
       if(editable && (cd== 1) )
       {
           str += "<tr id=mdiatitle><td><table align=center   cellspacing=0 cellpadding=0><tr><td align=left>(#" + num + ")&nbsp;</td><td  style=color:blue onclick=edit(" + num + ")>" + xs[0] + "</td></tr></table></td></tr>";
       }
       else if(editable && (cd== 2 || cd==4 ))
       {
           str += "<tr id=mdiatitle><td><table align=center   cellspacing=0 cellpadding=0><tr><td align=left>(#" + num + ")&nbsp;</td><td  style=color:blue  > </td></tr></table></td></tr>";
       }
       var icons = [
         "<div style=\"width:12px;height:8px;border:1px blue solid;border-radius:0px\"><!----></div>",
         "<div style=\"width:12px;height:8px;border:1px blue solid;border-radius:3px\"><!----></div>",
        "&#9711;",
         "<div style=transform:scale(1.4,0.8)>O</div>",
         "<div style=\"width:14px;height:10px;background-color:blue;border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;\">",
        "<div style=transform:scale(1.8,0.9);color:blue;>" + diamondchar +"</div>",
        "&#11041;",
        "&#x2601;"];  
      
       if (  cd== 1)
       {
            str += "<tr><td><table align=center width=100%  cellspacing=0 cellpadding=0 style=\"border:1px #555 solid\"><tr>";
            str += "<td   valign=middle align=center width=25%  style=\"color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='rightrect')?'border:1px orange solid':'') + "\" onclick=redraw3(" + num +   ",'rightrect'," + cd + ")>" + icons[0] +"</td>";
            str += "<td   valign=middle align=center width=25%  style=\"color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='roundrect')?'border:1px orange solid':'') + "\" onclick=redraw3(" + num +   ",'roundrect'," + cd + ") >" + icons[1] +"</td>";
            str += "<td   valign=middle align=center  width=25%   style=\"font-size:12px;color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='circle')?'border:1px orange solid':'') + "\"  onclick=redraw3(" + num +   ",'circle'," + cd + ")>" + icons[2] +"</td>";
            str += "<td   valign=middle align=center  width=25%   style=\"font-size:14px;color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='ellipse')?'border:1px orange solid':'') + "\"  onclick=redraw3(" + num +   ",'ellipse'," + cd + ")>" + icons[3] +"</td></tr><tr height=13>";
            str += "<td   valign=middle align=center  width=25%  style=\"font-size:12px;color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='egg')?'border:1px orange solid':'') + "\"   onclick=redraw3(" + num +   ",'egg'," + cd + ")>" + icons[4] +"</td>";
            str += "<td   valign=middle align=center  width=25%  style=\"font-size:13px;color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='diamond')?'border:1px orange solid':'') + "\"   onclick=redraw3(" + num +   ",'diamond'," + cd + ")>" + icons[5] +"</td>";
            str += "<td   valign=middle align=center  width=25%  style=\"transform:rotate(90deg);font-size:14px;color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='hexgon')?'border:1px orange solid':'') + "\"   onclick=redraw3(" + num +   ",'hexgon'," + cd + ")>" + icons[6] +"</td>";
            str += "<td   valign=middle align=center  width=25%  style=\"font-size:14px;color:blue;" + ((allShapes[num]!=null && allShapes[num].shapename=='clouds')?'border:1px orange solid':'') + "\"   onclick=redraw3(" + num +   ",'clouds'," + cd + ")>" + icons[7] +"</td>";
            str +="</tr></table></td></tr>";
       }
       else if (cd == 5)
       {
           //str += "<tr><td>" + textmsg[1639].split(/@/)[4] + "</td></tr>";
           str += "<tr><td align=center><select name=selfont onchange=selectfontname(this)>";
           var fns = textmsg[1594].split(/@/);
         var ii = 0;
         for(var   l =0; l < fns.length; l++)
         {
             str += "<option value=\"" + fns[l] + "\"  " + (samefont(cachedfontfamily, fns[l])?'selected':'') + ">" + fns[l].replace(/,.*/,'') + "</option>"

         }
         str += "</select></td></tr>"
       }
       if (cd== 1 || cd==5)
       {
            var mini = -1;
            if (cd == 5)
            {
                str += "<tr><td width=90><table align=center cellpadding=0 cellspacing=0><tr><td><nobr>" + mss[1] + "</nobr></td><td id=orient style=color:blue onclick=changeorient(this)>&uarr;</td></tr></table></td></tr>";
            }
            else
            {
                var tt= parseInt(allShapes[num].base.style.fontSize.replace(/px/,''));
                var minm = 1000000;
                if (cd == 1)
                for (var i=0; i <  allfonts.length; i++)
                {
                    if (minm > Math.abs(allfonts[i]-tt))
                    {
                        minm = Math.abs(allfonts[i]-tt);
                        mini = i;
                    }
                }
            }
            str += "<tr><td><table width=100% align=center cellpadding=0 cellspacing=0 style=\"border:1px #555 solid\"><tr height=14>";
            for (var i=0; i <  allfonts.length; i++)
            {
                str  += "<td  width=25%  align=center valign=middle style=\"color:blue;font-size:13px;" ;
                if (mini == i)
                    str += ";font-weight:700;border:1px orange solid";
                str   += "\"  onclick=\"changefont(this," + num  + "," + cd + "," + i + ")\">" + allfonts[i] +"</td>\n";
                if (i==allfonts.length/2-1)
                {
                   str  += "</tr>\n<tr height=14>";
                }
            }
            str  += "</tr></table></td></tr>";
       }
       else if (cd== 2)
       {
           str += "<tr><td align=center><table width=100% style=\"border:1px #555 solid\" align=center cellpadding=0 cellspacing=0 border=0><tr height=14>";//changefont(this," + num  + ")>";
            for ( i=0; i <  4; i++)
            {

                str += "<td  width=25%  align=center valign=middle style=\"color:" + (allLines[num]!=null? colors[allLines[num].color]:'black');
                if (allLines[num]!=null && allLines[num].type == arrows[i])
                    str += ";border:2px orange inset"
                var pn = picname(arrows[i]);
                if (pn == '') pn = '---';else if (pn=='arrow'||pn=='>') pn = '&rarr;';
                else if (pn == 'm') pn = '--m';else   pn = '--'+pn;
                str += "\"  onclick=changelinetype(" + i +"," + num  + ","+ cd + ")><nobr>" + pn + "</nobr></td>\n";
            }
            str  += "</tr></table></td></tr>";

            str += "<tr><td  align=center><table style=\"border:1px #555 solid\" width=100% align=center cellpadding=0 cellspacing=0 border=0><tr height=14>";//changefont(this," + num  + ")>";
            for ( i=1; i <= 4; i++)
            {
                str += "<td  width=25%  align=center valign=middle ";
                if (allLines[num].thick == i)
                    str += "style=\"border:2px orange inset\"";
                str += "  onclick=changethick(" + i +"," + num  + ","+ cd + ")><div style=\"width:12px;height:" + i +"px;background-color:" + (allLines[num]!=null?colors[allLines[num].color]:'') + "\">" + fillblank + "</div></td>\n";
            }
            str  += "</tr></table></td></tr>";
       }
       else if (cd== 4)
       {
            str += "<tr><td  align=center><table style=border-collapse:collapse width=100% align=center cellpadding=0 cellspacing=0 border=1><tr height=14>";//changefont(this," + num  + ")>";
            for ( i=1; i <= 4; i++)
            {
                str += "<td  width=20  align=center valign=middle ";
                if (allCurves[num].thick== i)
                    str += "style=\"border:2px orange inset\"";
                str += "  onclick=changethick(" + i +"," + num  + ","+ cd + ")><div style=\"width:12px;height:" + i +"px;background-color:" + colors[allCurves[num].color] + "\">" + fillblank + "</div></td>\n";
            }
            str  += "</tr></table></td></tr>";
       }
      if (cd==1   ||  cd==0  || cd == 5  )
      {
            var ww = 11;if (cd== 0) ww = 16;

            if (cd==1)
                var vv=  allShapes[num].bcolor;
            else if (cd == 0)
            {
                var uu = getdocbg();
                if (!isNaN(uu.charAt(0)))
                {
                    vv =  (parseInt(uu.replace(/ .*/,'')) + 10);
                }
                else
                    vv = hexcolor(document.body.style.backgroundColor);
            }
            else
                vv = -1;
            if (cd == 5)
            {
                str += "<tr  valign=bottom><td  align=center><table  width=100% align=center cellpadding=0 cellspacing=0 ><tr><td><nobr>" + mss[2] + "</nobr></td><td><input  id=hiddencolorb type=color style=\"width:1px;visibility:hidden;height:10px\" onchange=changethatcolor(this,'b')></td></tr></table></td></tr>";
            }
            str += "<tr><td  valign=top><table  width=100% align=center cellpadding=0 cellspacing=0 border=1><tr height=" + ww +">";
            var  N1 = 8;
            if (cd != 5) N1 = bcolors.length;
            for (  i=0; i < N1; i++)
            {
               str  += "<td width=" + ww +" style=\"background-color:" + bcolors[i]
               if ( (cd==1 && ( vv==i%100 || vv-i*100 < 100 && vv >= 100 )) || (cd==0 && vv==hexcolor(bcolors[i]) ) )
                   str += ";border:1px orange solid";
               else
                   str += ";border:1px transparent solid";
               if (i < 9)
                  str  += "\"    onclick=changecolorb(this," + num  + "," + cd + "," + i + ")><!----></td>\n";
               else if (hw.numlets>0)
                  str  += "\" class=shapebg" + (vv>10?(vv-10):1) + "  onclick=choosebg(this," + num  + "," + cd + ")><!----></td>\n";
               else
                   str  += "\" style=\"background-color:white\" ><!----></td>\n";
               if (i== N1/2-1)
               {
                   str  += "</tr>\n<tr height=" + ww +">";
               }
            }
           // bcolors[bcolors.length-1] = hold;
            str  += "</tr></table></td></tr>";
      }

       if (cd==1 || cd==2 || cd==4 || cd == 5 || cd==0)
       {
            if (cd == 5)
            {
                str += "<tr  valign=bottom><td ><table  width=100% align=center cellpadding=0 cellspacing=0 ><tr><td><nobr>" + mss[3] + "</nobr></td><td><input id=hiddencolorf type=color style=\"width:1px;height:15px;height:10px;visibility:hidden\" onchange=changethatcolor(this,'f')></td></tr></table></td></tr>";
            }
            str += "<tr  valign=bottom><td><table  width=100% align=center cellpadding=0 cellspacing=0 border=1><tr height=" + 10 +">";
            var uu = -1;
            if (cd == 0)
                uu = menufontcolor;
            else if (cd== 1)
                uu=  allShapes[num].color;
            else if (cd== 2)
                uu = allLines[num].color;
            else if (cd== 4)
                uu = allCurves[num].color;
            for (  i=0; i < colors.length; i++)
            {
               str  += "<td  width=25%  align=center valign=middle style=\"font-size:14px;font-weight:700;color:" + colors[i]
               if (uu==i)
                   str += ";border:1px orange solid";
               else
                  str += ";border:1px transparent solid";
               str  += "\"  onclick=changecolor(this," + num  + "," + cd + "," + i  +")>" + ((cd==1||cd==5 || cd==0)?'a':('<div style=background-color:' + colors[i] +";width:13px;height:3px><!----></div>")) +"</td>\n";
               if (i== colors.length/2-1)
               {
                   str  += "</tr>\n<tr height=14>";
               }
            }
            str  += "</tr></table></td></tr>";
            if (cd== 2)
            {
            str += "<tr><td><table align=center style=\"border:1px #555 solid\" width=100%  cellspacing=0 cellpadding=0 border=0><tr height=20>";
            str += "<td   valign=middle align=center width=25% " + (allLines[num].direct==0?'style="border:1px orange solid"':'') +" onclick=redraw2(" + num +   ",0)><div style=\"background-color:" + (allLines[num]!=null?colors[allLines[num].color]:'black') + ";width:20px;height:2px;transform: rotate(41deg);\"><!----></div></td>"
            str += "<td   valign=middle align=center width=25%  " + (allLines[num].direct==1?'style="border:1px orange solid"':'') +" onclick=redraw2(" + num +   ",1)><div style=\"background-color:transparent;margin:1px 1px 1px 1px;width:17px;height:12px;border-left-width:2px;border-left-color:" + (allLines[num]!=null?colors[allLines[num].color]:'black') + ";;border-left-style:solid;border-bottom-width:2px;border-bottom-color:" + (allLines[num]!=null?colors[allLines[num].color]:'black') + ";border-bottom-style:solid;\"><!----></div></td>"
            str += "<td   valign=top style=\"padding:1px\"   width=25%  " + (allLines[num].direct==2?'style="border:1px orange solid"':'') +" onclick=redraw2(" + num +   ",2)><div style=\"color:" + (allLines[num]!=null?colors[allLines[num].color]:'black') + ";;width:20px;transform: rotate(41deg);\">-----</div></td>"
            str += "<td   valign=middle align=center  width=25%  " + (allLines[num].direct==3?'style="border:1px orange solid"':'') +" onclick=redraw2(" + num +   ",3)><div style=\"background-color:transparent;margin:1px 1px 1px 1px;width:17px;height:12px;border-left-width:2px;border-left-color:" + (allLines[num]!=null?colors[allLines[num].color]:'black') + ";;border-left-style:dotted;border-bottom-width:2px;border-bottom-color:" + (allLines[num]!=null?colors[allLines[num].color]:'black') + ";border-bottom-style:dotted;\"><!----></div></td>"
            str +="</tr></table></td></tr>";
            }
       }
        if (cd==1)
        {
            str += "<tr  valign=bottom><td><table  width=100% align=center cellpadding=0 cellspacing=0 border=1><tr height=" + 10 +">";
            str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 1) > 0?'1':'0') + "px orange solid\" title=\"" + xs[1] + "\" onclick=\"changeframewidth(" + num + ",true,this)\" align=center valign=middle><div style=\"width:12px;height:9px;background-color:blue\"><!----></div></td>";
            str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 2) > 0?'1':'0') + "px orange solid;text-shadow:2px 2px #333\" title=\"" + xs[2] + "\" onclick=\"changeshadow(" + num + ",true,this)\" align=center valign=middle><div style=\"box-shadow:1px 1px #881122;width:12px;height:9px;background-color:blue\"><!----></div></td>";
            str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 4) > 0?'1':'0') + "px orange solid;text-shadow:2px 2px #333;color:blue;font-size:14px\" title=\"" + xs[14] + "\" onclick=\"changeTshadow(" + num + ",true,this)\" align=center  valign=middle>a</td>";
             str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 8) > 0?'1':'0') + "px orange solid;\" title=\"" + mss[4] + "\" onclick=\"changegradient(" + num + ",true,this)\" align=center><div style=width:12px;height:10px;background-image:linear-gradient(#fff,#000)><!----></div></td></tr>";
            str  += "<tr height=" + 10 +"><td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 1) == 0?'1':'0') + "px orange solid\" title=\"&cross;" + xs[1] + "\"   onclick=\"changeframewidth(" + num + ",false,this)\" align=center  valign=middle>&rect;</td>";
            str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 2) == 0?'1':'0') + "px orange solid;\" title=\"&cross;" + xs[2] + "\"   onclick=\"changeshadow(" + num + ",false,this)\" align=center  valign=middle><div style=width:12px;height:9px;background-color:blue><!----></div></td>";
            str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 4) == 0?'1':'0') + "px orange solid;color:blue;font-size:14px\" title=\"&cross;" + xs[14] + "\"  onclick=\"changeTshadow(" + num + ",false,this)\" align=center  valign=middle>a</td>";
             str  += "<td width=" + ww +" style=\"border:" +  ((allShapes[num].fc & 8) == 0?'1':'0') + "px orange solid;\" title=\"&cross;" + mss[4] + "\"   onclick=\"changegradient(" + num + ",false,this)\" align=center><div style=width:12px;height:9px;background-color:#888><!----></div></td></tr>";
          
           str  += "</tr></table></td></tr>";
           str += "<tr><td style=\"padding:0px 0px 0px 0px;color:blue\" ><span style=\"font-size:16px;color:"+(allShapes[num].words.length>0&&allShapes[num].urlas=='circular'?'#0000cc':'#666699') + ";visibility:" + (cd==1 && allShapes[num].shapename=='circle'?'visible':'hidden') + "\" onclick=circulartext(" + num + ",this)>&#10686;</span><input style=\"margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;width:10px;visibility:hidden\">" + xs[15].replace(/ /g,'') + "<input style=\"margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;width:16px;color:black;border:1px grey solid;width:25px;text-align:right\" name=slope type=text value=" +  (allShapes[num].slope) + " onchange=\"changeslope(" + num + ",this)\">&deg;</td></tr>";
        }
        if (cd== 4)
        {
            str += "<tr><td><table align=center style=\"border:1px #555 solid\" width=100% cellspacing=0 cellpadding=0 border=0><tr height=20>";
            str += "<td   valign=middle align=center width=16% " +   (allCurves[num].type=='curve'?'style="border:1px orange solid"':'') +" onclick=redraw4(" + num +    ",'curve')><div style=\"color:" + (allCurves[num]!=null?colors[allCurves[num].color]:'black') + ";\">&ac;</div></td>"
            str += "<td   valign=middle align=center width=17%  " +  (allCurves[num].type=='mline'?'style="border:1px orange solid"':'') +" onclick=redraw4(" + num +    ",'mline')><div style=\"color:" + (allCurves[num]!=null?colors[allCurves[num].color]:'black') + ";\">&ang;</div></td>"
            str += "<td   valign=middle align=center width=16%  " + (allCurves[num].type=='dotted'?'style="border:1px orange solid"':'') +" onclick=redraw4(" + num +   ",'dotted')><div style=\"color:" + (allCurves[num]!=null?colors[allCurves[num].color]:'black') + ";\">&homtht;</div></td>"
            str += "<td   valign=middle align=center width=17%  " + (allCurves[num].type=='dotline'?'style="border:1px orange solid"':'') +" onclick=redraw4(" + num +  ",'dotline')><div style=\"color:" + (allCurves[num]!=null?colors[allCurves[num].color]:'black') + "\" >&there4;</div></td>"
            str += "<td   valign=middle align=center width=17%  " + (allCurves[num].type=='smooth'?'style="border:1px orange solid"':'') + " onclick=redraw4(" + num +  ",'smooth')><div style=\"color:" + (allCurves[num]!=null?colors[allCurves[num].color]:'black') + ";\">&acd;</div></td>"
            str += "<td   valign=middle align=center width=17%  " + (allCurves[num].type=='dsmooth'?'style="border:1px orange solid"':'') +" onclick=redraw4(" + num +  ",'dsmooth')><div style=\"color:" + (allCurves[num]!=null?colors[allCurves[num].color]:'black') + "\" >&minusd;</div></td>"
            str +="</tr></table></td></tr>";
        }
        var NN = 0;
        str += '<tr><td><table cellpading=0 cellspacing=0 align=center width=100%>';
        if (cd== 1 || cd== 4)
        {
           var mm = whichally(num,cd);
           var formally =  (editable  && (numsselected!=null && numsselected.length>1 && !thesame(num,cd)));
           var exitally = (mm >= 0);
           var selally =   (editable  && mm >= 0 && allies[pagenum][mm].replace(/[0-9]/g,'').length!=numsselected.length-1);
           if (formally  && !exitally && !selally)
           {
               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td   style=color:blue onclick=formally(" + num +"," + cd + ") >" + xs[16] + "</td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else if (!formally  &&  exitally && !selally)
           {

               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td width=50%  style=color:blue><div class=upto2 style=line-height:16px;overflow:hidden ><table width=100% cellpadding=0 cellspacing=0><tr><td ><font color=black>" + xs[16] + "</font></td></tr><tr><td   style=color:blue onclick=exitally1(this," + num + "," + cd + ") >" + xs[17] + "</td></tr></table></div></td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else if (!formally  && !exitally && selally)
           {
               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td width=50%  style=color:blue><div class=upto2 style=line-height:16px;overflow:hidden ><table width=100% cellpadding=0 cellspacing=0><tr><td ><font color=black>" + xs[16] + "</font></td></tr><tr><td   style=color:blue onclick=selally(this," + num + "," + cd + ") >" + textmsg[1849].replace(/@.*/,'') + "</td></tr></table></div></td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else if (formally  && exitally && !selally)
           {
               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td width=50%  style=color:blue><div class=upto2 style=line-height:16px;overflow:hidden ><table width=100% cellpadding=0 cellspacing=0><tr><td onclick=formally(" + num +"," + cd + ") >" + xs[16] + "</td></tr><tr><td  onclick=exitally1(this," + num + "," + cd  +") >" + xs[17] + "</td></tr></table></div></td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else if (formally  &&  !exitally && selally)
           {
               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td width=50%  style=color:blue><div class=upto2  style=line-height:16px;overflow:hidden ><table width=100% cellpadding=0 cellspacing=0><tr><td onclick=formally(" + num+"," + cd + ") >" + xs[16] + "</td></tr><tr><td  onclick=selally(this," + num +"," + cd + ") >" + textmsg[1849].replace(/@.*/,'') + "</td></tr></table></div></td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else if (!formally  && exitally && selally)
           {
               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td width=50%  style=height:16px;color:blue ><div class=upto2  style=line-height:16px;overflow:hidden ><table width=100% cellpadding=0 cellspacing=0><tr><td  ><font color=black>" + xs[16] + "</font></td></tr><tr><td  onclick=exitally1(this," + num + "," + cd + ") >" + xs[17] + "</td></tr><tr><td  onclick=selally(this," + num + ") >" + textmsg[1849].replace(/@.*/,'') + "</td></tr></table></div></td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else if (formally  && exitally && selally)
           {
               if ((NN%2) == 0) str += '<tr height=16>';
               str += "<td  width=50% style=height:16px;color:blue ><div class=upto3  style=line-height:16px;overflow:hidden ><table width=100% cellpadding=0 cellspacing=0><tr><td onclick=formally(" + num+"," + cd + ") >" + xs[16] + "</td></tr><tr><td  onclick=exitally1(this," + num + "," + cd + ") >" + xs[17] + "</td></tr><tr><td  onclick=selally(this," + num + ") >" + textmsg[1849].replace(/@.*/,'') + "</td></tr></table></div></td>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           //xs[18] = Emerging@     xs[19]=State  xs[20]=Trajectory xs[21]=Time  xs[22]=Loop xs[23]=Showing xs[24]=Leaving
           //var kframes = [];// kframes['5_4'] = {esn:1, ets:[[1,2]], etm:5, ssn:1, sts:[[1,2]], stm:5, loop:3, lsn:1, lts:[[1,2]], ltm:5};
           //var kshapes = [];
       }
       if (cd== 1 )
        {


            if (allShapes[num].words.indexOf("<img ") > 0)
            if (editable)
           {
               if (NN%2 == 0) str += '<tr>';
               str += "<td   style=color:blue onclick=delpic(" + num +   ")>" + xs[12] + "</td>";
               if ((++NN%2) == 0) str += '</tr>';
            }
            if (NN%2 == 0) str += '<tr>';
            str += "<td   style=color:blue onclick=\"switchshow(" + num + ");canceldia(" + num + ",1);\"> " + ((allShapes[num].visible==1)?xs[3]:xs[26]) + "</td>";
             if ((++NN%2) == 0) str += '</tr>';
             if ( (allShapes[num].shapename=='roundrect' || allShapes[num].shapename=='rightrect' )  && issql(allShapes[num].words))
            {
                if (NN%2 == 0) str += '<tr>';
                str += " <td   style=color:blue onclick=dosql(" + num + ")>SQL</td> ";
                if ((++NN%2) == 0) str += '</tr>';
            }
            else if ((allShapes[num].shapename=='rightrect' || allShapes[num].shapename=='roundrect')   && iscpp(allShapes[num].words))
            {
                if (NN%2 == 0) str += '<tr>';
                str += "<td   style=color:blue onclick=docpp(" + num + ")>C++H</td>";
                if ((++NN%2) == 0) str += '</tr>';
            }
            if (numsselected.length>1 && achain())
            {
                if (NN%2 == 0) str += '<tr>';
                str += "<td   style=color:blue onclick=alignchain()>" + textmsg[1785] + "</td>";
                if ((++NN%2) == 0) str += '</tr>';
            }
            
        }

        else if (cd== 0)
        {
           str += "<tr><td align=left>" + textmsg[1493].replace(/ .*/,'') + "</td><td align=right style=\"background-image:linear-gradient(to right,white,black)\" ><input type=checkbox id=chkgradient ></td></tr>";
           var a = getdocbg();
           var fc = 'black';
           if (a == '' || !isNaN(a.charAt(0))) {fc = 'grey';a = 'http://...';}
           str += "<tr><td colspan=2><input id=bgurl onchange=setdocbg(this.value) onfocus=removehint(this,'" + a + "') onblur=showhint(this,'" + a + "') style=\"border:1px grey solid;width:89px;font-size:10px;color:" + fc + "\" value=\"" + a + "\"></td></tr>";

           var z = $("selpage");
           if (z!= null)
           {
               var xx = '';
               for (i=0; i < pagetbl.rows.length-1; i++)
                   if (i!=pagenum)
                       xx += "<option value=P" + (i+1) +">";

               if (  numShapes>0  && xx!='')
               {
                   str += "<tr><td align=left>" + xs[13] + "</td><td align=right><input onchange=\"mergeto(this)\"  style=\"border:1px;background-color:white;width:35px\" list=pagenums ><datalist id=pagenums>" + xx +"</datalist></td></tr>";
               }
                var yy = '';
                var j = 0;
                for (i=0; i < numShapes; i++)
                {
                    if (allShapes[i]!= null && allShapes[i].visible == 0)
                    {
                        if (yy=='')
                            yy = "<tr><td  colspan=2><table cellspacing=0 cellpadding=0 border=1>";
                        if (j%2==0)
                            yy += "<tr height=26>";
                          xx = tblname(i);
                        if (xx.length > 7)
                            xx = xx.substring(0,7).replace(/ /g,'&nbsp;')+"..";
                        if (allShapes[i].shapename=='rightrect') var kk=0;
                        else if (allShapes[i].shapename=='roundrect') kk=1;
                       else if (allShapes[i].shapename=='circle') kk=2;
                     else if (allShapes[i].shapename=='ellipse') kk=3;
                          else if (allShapes[i].shapename=='egg') kk=4;
                           else if (allShapes[i].shapename=='diamond') kk=5;
                            else if (allShapes[i].shapename=='hexgon') kk=6;
                            else kk =7;
                        yy += "<td  colspan=2 align=center valign=middle width=41   onclick=\"switchshow(" + i + ");canceldia(0,0)\"><div stle=width:41px >" + xx  + "</div><div style=\"opacity:0.5;margin:-20px 0px 0px 0px;width:41px\">" + icons[kk] + "</div></td>";

                        if (j%2==1)
                            yy += "</tr>";
                        j++;
                    }

                }

                if (yy!='')
                {
                    if (j%2== 0)
                    {
                        str += "<td width=30  colspan=2> </td></tr>";
                    }
                    str += yy + "</table></td></tr>";
                }

            }

        }
        
       if (editable && cd==1)
       {
           if ((NN%2) == 0) str += '<tr>';
           str += "<td   style=color:blue onclick=copyshape(" + num + ")>" + xs[4] + "</td>";
           if ((++NN%2) == 0) str += '</tr>';
       }
       if (editable && (cd==1 || cd==2 || cd== 4))
       {
           if ((NN%2) == 0) str += '<tr>';
           str += "<td   style=color:blue onclick=dodelete(" + num + "," + cd + ")>" + xs[5] + "</td>";
           if ((++NN%2) == 0) str += '</tr>';
       }

       if (editable && cd==0 && cutshape!= null)
       {
           if ((NN%2) == 0) str += '<tr>';
           str += "<td   style=color:blue onclick=pasteshape()>" + xs[7] + "</td>";
           if ((++NN%2) == 0) str += '</tr>';
       }
       if (cd== 3)
       {
           var xt = $("toolbar");
           if (xt.style.position == null || xt.style.position.toLowerCase()!='absolute')
           {
               if ((NN%2) == 0) str += '<tr>';
               str += "<tr><td   style=color:blue onclick=allowmove(0)>" + xs[8] + "</td></tr>";
               if ((++NN%2) == 0) str += '</tr>';
           }
           else
           {
               if ((NN%2) == 0) str += '<tr>';
               str += "<tr><td   style=color:blue onclick=allowmove(0)>" + xs[8] + "</td></tr>";
               str += "<tr><td   style=color:blue onclick=allowmove(1)>" + xs[9] + "</td></tr>";
               if ((++NN%2) == 0) str += '</tr>';
           }
       }
       if (cd==1)
       {
           var kframe = kframes[pagenum + '_' + num];
           var self = textmsg[1850].split(/@/)[3];
           if ((NN%2) == 0) str += '<tr height=16>';
           str += "<td width=50  style=color:blue><div class=aniexapnd style=\"padding:0px;position:relative;overflow:hidden\"  ><table width=234 align=center style=\"width:230px;margin:0px;border-collapse:collpase;border-radius:4px;border:0px\" border=1  cellpadding=0 cellspacing=0>";
          str += "<tr height=20><td align=left  width=50 style=\"width:50px !important\" onclick=\"expandmenuani(this,'" + xs[6] + "','" + xs[25] + "')\"><nobr>" + xs[25] + "</nobr></td>"
     + "<td  width=60 align=center style=color:black ><nobr>" + xs[18] + "</nobr></td>"
     + "<td  width=60 align=center style=color:black  ><nobr>" + xs[23] + "</nobr></td>"
     + "<td  width=60 align=center style=color:black   ><nobr>" + xs[24] + "</nobr></td></tr>";

str += "<tr height=20><td  align=left  width=50   style=color:black ><nobr>" + xs[19] + "</nobr></td>";
str += "<td  width=60  align=center  onclick=choosesn(this," + (kframe!=null?kframe.esn:(-1)) +"," +  num + ",'e') >" + (kframe!=null&&kframe.esn>-1?(''+kframe.esn):self) + "</td>";
str += "<td v width=60  align=center onclick=choosesn(this," + (kframe!=null?kframe.ssn:(-1)) +"," +  num + ",'s') >" + (kframe!=null&&kframe.ssn>-1?(''+kframe.ssn):self) + "</td>";
str += "<td  width=60  align=center onclick=choosesn(this," + (kframe!=null?kframe.lsn:(-1)) +"," +  num + ",'l') >" + (kframe!=null&&kframe.lsn>-1?(''+kframe.lsn):self) + "</td></tr>";

str += "<tr height=20><td align=left  width=50   style=color:black  ><nobr>" + xs[20] + "</nobr></td>";
str += "<td  width=60 onclick=choosets(this," + (kframe!=null&&kframe.ets!=null&&kframe.ets.length>0) +",'e'," +  num + ") align=center>" + (kframe!=null&&kframe.ets!=null&&kframe.ets.length>0?'...':textmsg[801]) + "</td>";
str += "<td  width=60 align=center onclick=choosets(this," + (kframe!=null && kframe.sts!=null && kframe.sts.length>0) +",'s'," +  num + ") >" + (kframe!=null&&kframe.sts!=null&&kframe.sts.length>0?'...':textmsg[801]) + "</td>";
str += "<td   align=center onclick=choosets(this," + (kframe!=null&&kframe.lts!=null && kframe.lts.length>0) +",'l'," +  num + ") >" + (kframe!=null&&kframe.lts&&kframe.lts.length>0?'...':textmsg[801]) + "</td></tr>";

str += "<tr height=20><td align=left style=color:black  width=50   ><nobr>" + xs[21] + "</nobr></td>";
str += "<td width=60 bgcolor=white align=center><input class=right style=color:blue:width:60px size=4 value=\"" +   (kframe!=null?kframe.etm:0)  + "s\" onchange=choosetm(this," + num + ",'etm')></td>"
str += "<td  width=60  bgcolor=white  align=center><input class=right style=color:blue:width:60px  size=4  value=\"" +   (kframe!=null?kframe.stm:0)  + "s\" onchange=choosetm(this," + num + ",'stm')></td>"
str += "<td  width=60  bgcolor=white  align=center><input class=right style=color:blue:width:60px  size=4 value=\"" +   (kframe!=null?kframe.ltm:0)  + "s\" onchange=choosetm(this," + num + ",'ltm')></td></tr>"

str += "<tr height=20><td align=left style=color:black >" + xs[22] + "</td>";
str += "<td  width=60 align=center style=color:black >1</td>";
str += "<td  width=60  bgcolor=white  align=center>" +  chooseloop(num)  + "</td>";
str += "<td  width=60  align=center style=color:black >1</td></tr>";
           str += "</table></div></td>";
           if ((++NN%2) == 0) str += '</tr>';
       }
       if ((NN%2) == 0) str += '<tr>';
       str += "<td   style=color:blue onclick=canceldia(" + num + "," + cd + ")>" + xs[6] + "</td>";
       if ((++NN%2) == 0) str += '</tr>';
       
       
       
       str += "</table></td></tr></table>";

       dv.innerHTML = str;


       document.body.appendChild(dv);
       if (cd!=0)
           Drag.init($('mdiatitle'),dv);
       else
           dv.style.top = '0px';

}
function expandmenuani(td,cls, ani)
{
    var dv = td.parentNode.parentNode.parentNode.parentNode;
    if (td.innerHTML.replace(/<[^>]*>/g,'') == cls)
    {
        dv.className='aniexapnd';
        td.innerHTML = '<nobr>' + ani + '</nobr>';
    }
    else
    {
        dv.className='aniexapnd1';
        td.innerHTML = '<nobr>' + cls + '</nobr>';
    }
}
function redraw4(num,type)
{
    for (var i=0; i < numsselected.length; i++)
    {
        var num = numsselected[i];
        allCurves[num].type = type;
        allCurves[num].redraw();
    }
}
function usethisassn(k,y)
{
    for (var i=0; i < numsselected.length; i++)
    {
        var num = numsselected[i];
        var kframe = kframes[pagenum + "_" + num];
        if (kframe == null)
        {
            kframes[pagenum + "_" + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
        }
        if (y == 'e') kframe.esn = k;
        else if (y == 's') kframe.ssn = k;
        else  kframe.lsn = k;
    }
    if (k==-1)
    tdbeing.innerHTML = 'self';
    else tdbeing.innerHTML = '' + k;
    closeprompt1();
}
var inkframe =false;
var innewkframe = false;
var testingxy, ptindex,intervalhandle=null;
var frameupdated = false;
function showts(type,num)
{
   var kframe = kframes[pagenum + '_' + num];
   numbeing = num;
   if (kframe == null) return;
   if (type=='e') testingxy = kframe.ets;
   else if (type=='s') testingxy = kframe.sts;
   else testingxy = kframe.lts;
   if (testingxy == null || testingxy.length==0) return;
   ptindex = 0;
   var tt = 2000/testingxy.length;
   if (tt<50) tt = 50;
   intervalhandle=setInterval(placeobj, tt);
}
function placeobj()
{
   if (ptindex == testingxy.length)
   {
       allShapes[numbeing].base.style.left = allShapes[numbeing].x + 'px';
       allShapes[numbeing].base.style.top = allShapes[numbeing].y + 'px';
       clearInterval(intervalhandle);
       return;
   }
   allShapes[numbeing].base.style.left = testingxy[ptindex][0] + 'px';
   allShapes[numbeing].base.style.top = testingxy[ptindex][1] + 'px';
   ptindex++;
}
var intrajactory=false,trajactory=[];
function recordts(it,num,y)
{
    if (it.value != textmsg[1612])
    {
        $('tsxy').innerHTML = textmsg[1853];
        trajactory=[];
        intrajactory=true;
        it.value = textmsg[1612];
        allShapes[num].base.onDrag = function(nx, ny)
        {
           if (trajactory.length == 0) 
               trajactory[0] =  [nx,ny]; 
           else if (Math.abs(trajactory[trajactory.length-1][0]-nx)
                   + Math.abs(trajactory[trajactory.length-1][1]-ny)>9)
               trajactory[trajactory.length] = [nx,ny]; 
        }
    }
    else
    {
         it.value =  textmsg[1482];
         allShapes[num].base.onDrag = null;
         if (trajactory.length > 0)
         {
            tdbeing.innerHTML = '...';
            it.previousSibling.style.visibility = 'visible';
            it.nextSibling.style.visibility = 'visible';
            var xy = [allShapes[num].x, allShapes[num].y];
            for (var i=0; i < numsselected.length; i++)
            {
                num = numsselected[i];
                var kframe = kframes[pagenum + '_' + num];
            if (kframe==null)
                kframes[pagenum + '_' + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};

            intrajactory=false;
            if (y=='e')
                kframe.ets = copynew(trajactory,[allShapes[num].x-xy[0], allShapes[num].y-xy[1]]);
            else if (y == 's')
                kframe.sts = copynew(trajactory,[allShapes[num].x-xy[0], allShapes[num].y-xy[1]]);
            else
                kframe.lts = copynew(trajactory,[allShapes[num].x-xy[0], allShapes[num].y-xy[1]]);
             $('tsxy').innerHTML =  tsxystr(trajactory);
         }
            frameupdated = true;
        }
    }
}
function tsxystr(xy)
{
   var str ='<table>';
   var j = 0;
   while (j < xy.length)
   {
   str += '<tr><td align=left><table><tr><td>x</td>';
   for (var i=0,j1=j; i < 30 && j1 < xy.length; i++,j1++)
   {
       str += '<td align=right>' + xy[j1][0] + '</td>';
   }
   str += '</tr><tr><td>y</td>';
   for (var i=0; i < 30 && j < xy.length; i++,j++)
   {
       str += '<td align=right>' + xy[j][1] + '</td>';
   }
   str += '</tr></table></td></tr>';
   }
   str += '</table>';
   return str;
}
function choosets(td,tf,type,num)
{
   var kframe = kframes[pagenum + '_' + num];
   if (kframe==null)
       kframes[pagenum + '_' + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
   var xy = null;
   if (type=='e') xy = kframe.ets;
   else if (type=='s') xy = kframe.sts;
   else  xy = kframe.lts;
   var str = '<div id=tsxy>' + tsxystr(xy) + '</div>';
   tdbeing = td;
    
   str += "<center><input type=button class=GreenButton style=width:68px;visibility:" + (tf?"visible":"hidden") + " value=\"" + textmsg[1200] + "\" onclick=showts('" + type + "'," + num + ")>"
   str += "<input type=button class=OrangeButton style=width:68px value=\"" + textmsg[1482] + "\" onclick=recordts(this," + num + ",'" + type + "')>";
   
   if (type=='e')
       str += "<input type=button class=OrangeButton style=width:68px value=\"" + textmsg[1855].split(/@/)[0] + "\" onclick=randomsingle(this," + num + ")>";
   if (type=='e' || type=='l')
       str += "<input type=button class=OrangeButton style=width:68px value=\"" + textmsg[1855].split(/@/)[1] + "\" onclick=from2origin(this," + num + ",'" + type + "')>";
   str += "<input type=button class=RedButton style=width:68px;visibility:" + (tf?"visible":"hidden") + "  value=\"" + textmsg[69] + "\" onclick=deletets(" + num + ",'" + type + "')></center>"
   myprompt(str,null,null,y2word(type) + " " + textmsg[1773].split(/@/)[20]);
   promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('img')[0].onclick=
    function()
    {
        innewkframe = false;
        intrajactory=false;
        closeprompt1();
    }
}
function from2origin(but, num ,type)
{
    tdbeing.innerHTML = '...';
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var kframe = kframes[pagenum + '_' + num];
        if (kframe==null)
          kframes[pagenum + '_' + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
        if (type=='e') kframe.ets = [[0,0]]; 
        else kframe.lts = [[0,0]]; 
    }
}
function randomsingle(but, num )
{
    tdbeing.innerHTML = '...';
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var kframe = kframes[pagenum + '_' + num];
        if (kframe==null)
           kframe = kframes[pagenum + '_' + num] = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
        var x = Math.floor(Math.random()*(screen.width - 100 - allShapes[num].base.offsetWidth));
        var y = Math.floor(Math.random()*(screen.height - 150 - allShapes[num].base.offsetHeight));
        kframe.ets = [[x,y]];  
        
    }
}
function deletets(num,y)
{
    var kframe = kframes[pagenum + '_' + num];
    if (kframe==null) return;
    if (y=='e')
        kframe.ets = [];
    else if (y == 's')
        kframe.sts = [];
    else
        kframe.lts = [];
    $('tsxy').innerHTML = '';
    tdbeing.innerHTML = textmsg[801];
    frameupdated = true;
}
function copynew(arr,xy)
{
    var a = [];
    for (var j=0; j < arr.length; j++)
        a[j] = [arr[j][0] + (xy==null?0:xy[0]), arr[j][1] + (xy==null?0:xy[1])];
    return a;
}
var tdbeing;
function choosesn(td, k, num, y)
{
    if (numsselected==null)
        numsselected = [num];
    numbeing = num;
    inkframe = true;
    tdbeing = td;
    var str = '';

    for (var i= 0; i < kshapes.length; i++)
    {
       if (kshapes[i]!=null)
       {
           var z = constructshape(i , kshapes[i].replace(/^,/,"   \n  ,"), 0, 0);
          str += "<div " + (k==i? 'style="border:1px orange solid" ':'') +   " onclick=\"usethisassn(" + i + ",'" + y + "')\" >" + z.base.outerHTML + "</div>";
           document.body.removeChild(z.base);
       }
       else
       {
           str += "<div " + (k==i? 'style="border:1px orange solid" ':'') + "  >Invalid</div>";
       }
    }
    str += "<div " + (k==-1? 'style="border:1px orange solid" ':'') + " onclick=\"usethisassn(-1,'" + y + "')\" >" + textmsg[1850].split(/@/)[3] + "</div>";
    str += "<div style=text-align:center id=sndv></div><br><center><input type=button onclick=newkshape(this," + kshapes.length +  "," + num +  ",'" + y + "') class=GreenButton value=\"" + textmsg[406] + "\"></center>";
    inkframe = false;
    myprompt(str,null,null,y2word(y)+textmsg[1773].split(/@/)[19]);
    bufferedshape = '';
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('img')[0].onclick=
    function()
    {
        innewkframe = false;
        if (bufferedshape!='')
        allShapes[numbeing].parse(bufferedshape);
        if (numsselected1!=null)
        {
            numsselected = [];
            for(var j=0; j < numsselected1.length; j++)
            {
                numsselected[j] = numsselected1[j];
            }
        }
        $('m' +  numsselected[0] + "_1").style.boxShadow = "-" + (numsselected.length*2-2) + "px -" + (numsselected.length-1) + "px #777";
        closeprompt1();
    }

}
function y2word(y)
{
   var xs = textmsg[1773].split(/@/);
   if (y=='e') return xs[18];
   else if (y=='s') return xs[23];
   return xs[24]; //Showing@Leaving@Animat
}
var bufferedshape;
function newkshape(dv,n,num,y)
{
    if (dv.value == textmsg[406])
    {
        innewkframe = true;
        var t = $('sndv'); t.innerHTML = textmsg[1852].replace(/@/,y2word(y));
        dv.value = textmsg[1357];
        if (numsselected1 == null) numsselected1 =[];
        for(var j=0; j < numsselected.length; j++)
        {
            numsselected1[j] = numsselected[j];
        }
        if (numsselected.length>1)
        numsselected.splice(1,numsselected.length-1);
        $('m' +  numsselected[0] + "_1").style.boxShadow = null;
        bufferedshape = allShapes[num].toString();
    }
    else
    {
        dv.value = textmsg[406];
        for (var i=0; i < numsselected1.length; i++)
        {
            var num = numsselected1[i];
            var kframe = kframes[pagenum + '_' + num];
            if (kframe==null)
                kframes[pagenum + '_' + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
            var wd = allShapes[num].words;
            allShapes[num].words = "";
            kshapes[n] = allShapes[num].toString();
            allShapes[num].words = wd;
            if (y=='e')
                kframe.esn = n;
            else if (y == 's')
                kframe.ssn = n;
            else
                kframe.lsn = n;
            frameupdated = true;
        }
        innewkframe =false;
        allShapes[numbeing].parse(bufferedshape);
        allShapes[numbeing].initbase();
        allShapes[numbeing].init();
        allShapes[numbeing].setup();
        for(var j=0; j < numsselected1.length; j++)
        {
            numsselected[j] = numsselected1[j];
        }
        $('m' +  numsselected[0] + "_1").style.boxShadow = "-" + (numsselected.length*2-2) + "px -" + (numsselected.length-1) + "px #777";
        closeprompt1();
    }
}

function chooseloop(num)
{

       var kframe = kframes[pagenum + '_' + num];
       var x = 1;
       if (kframe!=null)
       {
           x = kframe.loop;
          
       }

       var i;
       var str = '<select name=loop size=1 class=right onchange=usethisasloop(this,' + num + ') >';
       for (  i=1; i <= 10; i++) str += '<option value="' + i + '" ' + (x==i?'selected':'') + '>' + i + '</option>';
       for ( i=12; i <= 20; i+=2)  str += '<option value="' + i + '" ' + (x==i?'selected':'') + '>'+ i + '</option>';
       for ( i=25; i <= 50; i+=5)  str += '<option value="' + i + '" ' + (x==i?'selected':'') + '>'+ i + '</option>';
       str += '<option value="-1" ' + (x==-1?'selected':'') + '>&#8734;</option>';
       return str + '</select>';
}
function usethisasloop(t,num)
{
   for (var i=0; i < numsselected.length; i++)
   {
       num = numsselected[i];
       var kframe = kframes[pagenum + '_' + num];
       if (kframe==null)
       {
           kframes[pagenum + '_' + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
       }
       if (!isNaN(t.value))
          kframe.loop = parseInt(t.value);
       else
          kframe.loop = -1;
       frameupdated = true;
   }

}
function choosetm(it, num, which)
{
   var v = it.value.replace(/[^0-9]/g,''); 
   for (var i=0; i < numsselected.length; i++)
   {
       num = numsselected[i];
       var kframe = kframes[pagenum + '_' + num];
       if (kframe==null)
       {
           kframes[pagenum + '_' + num] = kframe = {esn:-1,ets:[],etm:0,ssn:-1,sts:[],stm:0,loop:1,lsn:-1,lts:[],ltm:0};
       }
       
       if (which == 'etm')
          kframe.etm = v;
       else if (which == 'stm')
          kframe.stm = v;
       else if (which == 'ltm')
          kframe.ltm = v;
       frameupdated = true;
   }
}

function achain()
{

    var l = 0;
    if(numsselected == null || numsselected.length < 2) return false;

    while (l < numsselected.length-1)
    {
        var k = 0;
        for (; k < allLines.length; k++)
        {
            if (allLines[k] == null) continue;
            if (allLines[k].startnum == numsselected[l]  && numsselected[1+l] == allLines[k].endnum)
            break;
        }
        if (k == allLines.length) return false;
        if (allShapes[allLines[k].endnum] == null) return false;
        l++;
    }
    return true;

}
function alignchain()
{
    var i = numsselected[0];
    var j = numsselected[numsselected.length-1];
    var x0 = allShapes[i].x + allShapes[i].base.offsetWidth/2;
    var y0 = allShapes[i].y + allShapes[i].base.offsetHeight/2;
    var x1 = allShapes[j].x + allShapes[j].base.offsetWidth/2;
    var y1 = allShapes[j].y + allShapes[j].base.offsetHeight/2;
    var x = [], y = [];
    var di = 'v';
    if (Math.abs(x1-x0) < Math.abs(y1-y0))
    {
        x[0] = allShapes[i].x;
        y[0] = allShapes[i].y;
        for (i=1; i < numsselected.length; i++)
        {
            x[i] = x0 - allShapes[numsselected[i]].base.offsetWidth/2;

            y[i] = y[i-1] + allShapes[numsselected[i-1]].base.offsetHeight + Math.round(0.7*(allShapes[numsselected[i]].fontsize + allShapes[numsselected[i-1]].fontsize));
        }
    }
    else
    {
        di = 'h';
         x[0] = allShapes[i].x;
        y[0] = allShapes[i].y;
        for (i=1; i < numsselected.length; i++)
        {
            y[i] = y0 -  Math.round(allShapes[numsselected[i]].base.offsetHeight/2);
            x[i] = x[i-1] + allShapes[numsselected[i-1]].base.offsetWidth + Math.round(0.7*(allShapes[numsselected[i]].fontsize + allShapes[numsselected[i-1]].fontsize));
        }
    }
    for (i=1; i < numsselected.length; i++)
    {

        allShapes[numsselected[i]].move(x[i], y[i],1);
        var k = 0;
        for (; k < allLines.length; k++)
        {
            if (allLines[k].startnum == numsselected[i-1]  && numsselected[i] == allLines[k].endnum)
            {
               if (di == 'v')
               {
                   allLines[k].sx =allShapes[ numsselected[i-1]].base.offsetWidth/2;
                   allLines[k].sy = allShapes[numsselected[i-1]].base.offsetHeight;
                   allLines[k].ex = allShapes[numsselected[i]].base.offsetWidth/2;
                   allLines[k].ey = 0;
               }
               else
               {
                   allLines[k].sx =allShapes[ numsselected[i-1]].base.offsetWidth;
                   allLines[k].sy = allShapes[numsselected[i-1]].base.offsetHeight/2;
                   allLines[k].ex = 0;
                   allLines[k].ey = allShapes[numsselected[i]].base.offsetHeight/2;
               }
               break;
            }
        }
        allLines[k].redraw();
    }


}

function d1(m)
{
    var mstr = ''+Math.round(m*10);
    mstr = mstr.replace(/\..*$/,'');
    if (mstr.length==1) mstr = "0" + mstr;
    mstr = mstr.replace(/(.)$/,'.$1');
    mstr = mstr.replace(/\.0$/,'');
    return mstr;
}
function selectget(td)
{
    var or;
    var nw = -1;
    if (!isNaN(td.innerHTML)) nw = parseInt(td.innerHTML);
    if (itemaredoing =='t')
    {
        for (var i=0; i <  numaredoing.length; i++)
        {
            or = parseInt(selectedtds['t'][i].innerHTML);
            if (nw >= 0)
            {
                 selectedtds['t'][i].innerHTML = ''+ nw;
                 var n = numaredoing[i];
                 var num = n%1000;
                 var cd = (n - num)/1000;
                 if (cd==1)
                 allShapes[num].time = nw + (allShapes[num].time- Math.floor(allShapes[num].time));
                 else if (cd == 2)
                     allLines[num].time = nw + (allLines[num].time- Math.floor(allLines[num].time));
                 else 
                     allCurves[num].time = nw + (allCurves[num].time- Math.floor(allCurves[num].time));
            }
            selectedtds['t'][i].style.backgroundColor = 'white';
        }
        selectedtds['t'] = null;
        numaredoing = [];
    }
    else if (itemaredoing =='dt')
    {
        for (var i=0; i <  numaredoing.length; i++)
        {
            if (nw >= 0)
            {
                selectedtds['dt'][i].innerHTML = '.'+ nw;
                 var n = numaredoing[i];
                 var num = n%1000;
                 var cd = (n - num)/1000;
                 if (cd==1)
                allShapes[num].time = Math.floor(allShapes[num].time) + nw/10.0;
                 else if (cd == 2)
                     allLines[num].time = Math.floor(allLines[num].time) + nw/10.0;
                 else allCurves[num].time = Math.floor(allCurves[num].time) + nw/10.0;
            }
            selectedtds['dt'][i].style.backgroundColor = 'white';
        }
        selectedtds['dt'] = null;

    }
    else if (itemaredoing =='do')
    {
        for (var i=0; i <  numaredoing.length; i++)
        {
           if (nw >= 0)
           {
               selectedtds['do'][i].innerHTML = '.'+ nw;
               var n = numaredoing[i];
                 var num = n%1000;
                 var cd = (n - num)/1000;
                 if (cd==1)
                   allShapes[num].start = Math.floor(allShapes[num].start) + nw/10.0;
                 else if (cd==2)
                  allLines[num].start = Math.floor(allLines[num].start) + nw/10.0;
                 else
                   allCurves[num].start = Math.floor(allCurves[num].start) + nw/10.0;
           }
           selectedtds['do'][i].style.backgroundColor = 'white';
        }
        selectedtds['do'] = null;

    }
    else if (itemaredoing =='p')
    {
        if (nw>=0)
        tdaredoing.innerHTML = ''+ nw;

    }
    else if (itemaredoing =='o')
    {
        for (var i=0; i <  numaredoing.length; i++)
        {
            or =  parseInt(selectedtds['o'][i].innerHTML);
            selectedtds['o'][i].style.backgroundColor = 'white';
            if (nw >= 0)
            {
                selectedtds['o'][i].innerHTML = ''+ nw;
                 var n = numaredoing[i];
                 var num = n%1000;
                 var cd = (n - num)/1000;
                 if (cd==1)
                allShapes[num].start = nw + (allShapes[num].start- Math.floor(allShapes[num].start));
                 else if (cd == 2)
                   allLines[num].start = nw + (allLines[num].start- Math.floor(allLines[num].start));
                 else 
                     allCurves[num].start = nw + (allCurves[num].start- Math.floor(allCurves[num].start));
            }
        }
        selectedtds['o'] = null;

    }
    else if (itemaredoing =='z')
    {
        for (var i=0; i <  numaredoing.length; i++)
        {
            if (nw > -1)
            {
                selectedtds['z'][i].innerHTML = ''+ nw;
                var n = numaredoing[i];
                 var num = n%1000;
                 var cd = (n - num)/1000;
                 if (cd==1)
                   allShapes[num].zindex = nw;
              
            }
            selectedtds['z'][i].style.backgroundColor = 'white';
        }
        selectedtds['z'] = null;
    }
    numaredoing = [];
    var tbl = td.parentNode.parentNode;
    if (tbl.tagName.toLowerCase()!='table') tbl = tbl.parentNode;
    tbl = tbl.parentNode;
    document.body.removeChild(tbl);
     if (itemaredoing =='p') return;
    var m = 0;
    for (var i = 0; i < numShapes; i++)
    {
        if (allShapes[i] == null)
            continue;
        var d = allShapes[i].start + allShapes[i].time;
        if (m < d)
            m = d;
    }
    for (var i = 0; i < numLines; i++)
    {
        if (allLines[i] == null || allLines[i].startnum>-1 || allLines[i].endnum>-1)
            continue;
        var d = allLines[i].start + allLines[i].time;
        if (m < d)
            m = d;
    }
    for (var i = 0; i < numCurves; i++)
    {
        if (allCurves[i] == null)
            continue;
        var d = allCurves[i].start + allCurves[i].time;
        if (m < d)
            m = d;
    }
    var q = $('totaltime');

    if (q!=null) q.innerHTML = '' + d1(m);
}
function lessnum(td)
{
    var tr = td.parentNode.parentNode;
    if (tr.tagName.toLowerCase()!='table') tr = tr.parentNode;
    var n = parseInt(tr.rows[2].cells[0].innerHTML);
    n -= 20;
    if (n < 0) n=0;
    for (var i=2; i < 22; i++)
       tr.rows[i].cells[0].innerHTML = ''+(n+i-2);
}
function addmorenum(td)
{
    var tr = td.parentNode.parentNode;
    if (tr.tagName.toLowerCase()!='table') tr = tr.parentNode;
    var n = parseInt(tr.rows[21].cells[0].innerHTML)+1;
    for (var i=2; i < 22; i++)
       tr.rows[i].cells[0].innerHTML = ''+(n+i-2);
}
function selectnum(td,arr,z)
{
    tdaredoing = td;
    var x = document.createElement('div');
    var n = parseInt(td.innerHTML);
    var xy = findPositionnoScrolling(td);
    var zd = (promptwin==null)?(4*numShapes+100):( parseInt(promptwin.style.zIndex)+1 );
    x.style.cssText = 'position:absolute;left:' + (xy[0]-90) + 'px;z-index:' + zd + ';border:1px grey solid;background-color:lightyellow';
    var str = '<table width=60>';
    str += '<tr><td align=right onclick=selectget(this)  >' +   textmsg[18] + '</td></tr>';
    if (arr.length==20)
        str += '<tr><td align=right onclick=lessnum(this)  >---</td></tr>';
    var j = 0;
    for (var i=0; i < arr.length; i++)
    {
        str += '<tr><td align=right onclick=selectget(this)  >' +   (arr[i]) + '</td></tr>';
        if (arr[0]>=0 && arr[i] == n) j = i;
    }
    if (arr.length==20)
    str += '<tr><td align=right onclick=addmorenum(this)  >+++</td></tr>';
    str += '</table>';

    x.innerHTML = str;
    document.body.appendChild(x);
    var y1 = x.offsetHeight/arr.length;
    if (arr[0] < 0) j = arr.length/2;
    var y = xy[1] - y1*j;
    if (y < 30) y = 30;
    x.style.top = y + 'px';
}
function changetm(td,num,cd)
{
    if (selectedtds['o'] != null || selectedtds['z'] != null || selectedtds['do'] != null || selectedtds['dt'] != null) return;
    var has = true;
    td.style.backgroundColor = '#777777';
    if (selectedtds['t'] == null)
    {
        selectedtds['t']  = [];
        numaredoing= [];
        has = false;
    }
    for (var i=0; i < selectedtds['t' ].length; i++)
    if (td ==  selectedtds['t' ][i])
    {
        if (selectedtds['t' ].length==1)
            selectedtds['t' ]  = null;
        else
            selectedtds['t' ].splice(i, 1);
        td.style.backgroundColor = '#ffffff';
        numaredoing.splice(i, 1);
        return;
    }
    selectedtds['t'][selectedtds['t'].length] = td;
    numaredoing[numaredoing.length] = num + 1000*cd;
    var arr = [];
    var k = parseInt(td.innerHTML);
    k -= 10;
    if (k < 0) k = 0;
    itemaredoing = 't';
     for (var i=0; i < 20; i++ )
        arr[arr.length] = k+i;

    if (!has)selectnum(td,arr);
}


function changeplaytime(td)
{
    numaredoing = [];
    itemaredoing = 'p';
    var k = parseInt(td.innerHTML) - 10;
    if (k < 0) k=0;
    var arr = [];
    for (var i=0; i < 20; i++)
        arr[arr.length] = i  + k;
    selectnum(td,arr);
}
var selectedtds = new Array();
function changeZ(td,num,cd)
{
    if (selectedtds['o'] != null || selectedtds['t'] != null || selectedtds['do'] != null || selectedtds['dt'] != null) return;
    var has = true;
    td.style.backgroundColor = '#777777';
    if (selectedtds['z'] == null)
    {
        selectedtds['z']  = [];
        has = false;
    }
    for (var i=0; i < selectedtds['z'].length; i++)
        if (td ==  selectedtds['z'][i])
    {
        if (selectedtds['z' ].length==1)
            selectedtds['z' ]  = null;
        else
            selectedtds['z' ].splice(i, 1);
        td.style.backgroundColor = '#ffffff';
        numaredoing.splice(i, 1);
        return;
    }
    selectedtds['z'][selectedtds['z'].length] = td;
    numaredoing[numaredoing.length] = num + 1000*cd;
    itemaredoing = 'z'
    var arr = [];
    for (var i=0; i < numShapes + numLines + numCurves; i++)
        arr[arr.length] = i;
    arr[arr.length] = 110;
    arr[arr.length] = 111;
    arr[arr.length] = 112;
    arr[arr.length] = 113;
    if (!has)selectnum(td,arr);
}
function changedecimal(td,num,x,cd)
{
     if (selectedtds['z'] != null || selectedtds['o'] != null || selectedtds['t'] != null || selectedtds['do'] != null&&x=='t' || selectedtds['dt'] != null&&x=='o') return;
    var has = true;
    if (selectedtds['d'+x] == null)
    {
        selectedtds['d'+x]  = [];
        has = false;
    }
    for (var i=0; i < selectedtds['d'+x].length; i++)
    if (td ==  selectedtds['d'+x][i])
    {
        if (selectedtds['d'+x].length==1)
            selectedtds['d'+x]  = null;
        else
            selectedtds['d'+x].splice(i, 1);
        td.style.backgroundColor = '#ffffff';
        numaredoing.splice(i, 1);
        return;
    }
    selectedtds['d'+x][selectedtds['d'+x].length] = td;
    numaredoing[numaredoing.length] = num + 1000*cd;
    itemaredoing = 'd'+x;
    td.style.backgroundColor = '#777777';
    var arr = [];

    for (var i=0; i < 10; i++)
        arr[arr.length] = i;
    if (!has) selectnum(td,arr);
}
function changeord(td,num,cd)
{
     if (selectedtds['z'] != null || selectedtds['t'] != null || selectedtds['do'] != null || selectedtds['dt'] != null) return;
    var has = true;
    td.style.backgroundColor = '#777777';
    if (selectedtds['o'] == null)
    {
        has = false;
        selectedtds['o']  = [];
    }
    for (var i=0; i < selectedtds['o'].length; i++)
     if (td ==  selectedtds['o' ][i])
    {
        if (selectedtds['o' ].length==1)
            selectedtds['o' ]  = null;
        else
            selectedtds['o' ].splice(i, 1);
        td.style.backgroundColor = '#ffffff';
        numaredoing.splice(i, 1);
        return;
    }
    selectedtds['o'][selectedtds['o'].length] = td;
    numaredoing[numaredoing.length] = num + 1000*cd;
    itemaredoing = 'o';
    var k = parseInt(td.innerHTML);
    k -= 10;
    if (k<0) k = 0;
    var arr = [];
    for (var i=0; i < 20; i++ )
        arr[arr.length] = k+i;
    if (!has)
        selectnum(td,arr);
}

function showoptions(sel)
{

   //if(navigator.userAgent.indexOf("Chrome")>=0)
   {
      var xys = findPositionnoScrolling(sel, window);
      var tbl = document.createElement('table');
      tbl.style.border = "1px #b0b0b0 outset";
      for (var i=0; i < sel.options.length; i++)
      {
          var row=tbl.insertRow(i);
         var cell=row.insertCell(0);
         if (i==0)cell.innerHTML = '&nbsp;&nbsp;';
         else
             cell.innerHTML = sel.options[i].text;
         cell.onclick = function() {pickthis(this);}

      }
      tbl.style.zIndex = '30';
      tbl.style.position = 'absolute';
      tbl.style.top = xys[1] +'px';
      tbl.style.left = xys[0] + 'px';
      document.body.appendChild(tbl);
   }
}
function changelinetype(i,num,cd)
{
    hassaved = false;

    for (var j=0; j < numsselected.length; j++)
    {
        num = numsselected[j];
        if (cd== 4)
        {
            allCurves[num].remove();
            allCurves[num].type = arrows[i];
            allCurves[num].draw();
        }
        else
        {
            allLines[num].remove();
            allLines[num].type = arrows[i];
            allLines[num].draw();
        }
        sendObject(num);
    }
}
function changethick(i, num,cd)
{
    hassaved = false;
    cachedlinethick = i;
    if (numsselected==null)
    {
           numsselected = [];
    }
    for (var j=0; j < numsselected.length; j++)
    {
        num = numsselected[j];
        if (cd== 4)
        {
            allCurves[num].thick = i;
            allCurves[num].redraw();
        }
        else
        {
            allLines[num].thick = i;
            allLines[num].redraw();
        }
        sendObject(num);
    }
}
function changeframewidth(num , fcchecked,td)
{
    hassaved = false;
    td.style.borderWidth = '1px'
    if (fcchecked)
        td.parentNode.nextSibling.cells[0].style.borderWidth = '0px';
    else
        td.parentNode.previousSibling.cells[0].style.borderWidth = '0px';
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var j = allShapes[num].fc;
        if (fcchecked &&  (j & 1) == 0)
            j++;
        else if (fcchecked == false && (j & 1) == 1)
            j--;
        cachedfc = j;
        allShapes[num].fc = j;
        if (allShapes[num].shapename!='clouds')
        {
            allShapes[num].reinit();
            sendObject(num);
        }
    }
}
function changegradient(num, fcchecked,td)
{
      hassaved = false;
    td.style.borderWidth = '1px';
    if (fcchecked)
        td.parentNode.nextSibling.cells[3].style.borderWidth = '0px';
    else
        td.parentNode.previousSibling.cells[3].style.borderWidth = '0px';
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var z = allShapes[num];
        var j = z.fc;
        if (fcchecked &&  (j & 8) == 0)
            j += 8;
        else if (fcchecked == false && (j & 8) == 8)
            j -= 8;
        cachedfc = j;
        z.fc = j;

        if (z.isrect() && (z.ispic ==0||z.ispic ==3))
        {
            if ( (j & 8) > 0)
            {
                 z.base.style.backgroundImage =  gradient(bcolors[z.bcolor],z.shapename);
                 z.base.style.backgroundColor =  'transparent';
            }
            else
            {
                 z.base.style.backgroundImage =  null;
                 z.base.style.backgroundColor =  bcolors[z.bcolor];
            }
        }
        else if (z.shapename == 'diamond')
        {
              var dv =  $('g' + z.num);
              dv = dv.getElementsByTagName('div')[0];
              if ( (j & 8) == 8)
              {
                  dv.style.backgroundImage = gradient(bcolors[z.bcolor]);
                  dv.style.backgroundColor =  null;

              }
              else
              {
                  dv.style.backgroundColor =  bcolors[z.bcolor];
                  dv.style.backgroundImage = null;
              }
        }
        else if (z.shapename == 'hexgon')
        {
              var dv =  $('g' + z.num);
              if ( (j & 8) == 8)
              {
                  var bf = gradient(bcolors[z.bcolor]).replace(/\(/,'(to right,');

                  var twocolors = bf.replace(/[^#]+(#[0-9|a-f]+)[^#]+(#[0-9|a-f]+).*/,'$1,$2').split(/,/);
                  var tr = dv.getElementsByTagName('table')[0].rows[0];

                  tr.cells[0].getElementsByTagName('div')[0].style.borderRightColor = twocolors[0];
                  tr.cells[1].style.background   = bf;
                  tr.cells[2].getElementsByTagName('div')[0].style.borderLeftColor = twocolors[1];

              }
              else
              {
                  var tr = dv.getElementsByTagName('table')[0].rows[0];
                  tr.cells[0].getElementsByTagName('div')[0].style.borderRightColor = bcolors[z.bcolor];
                  tr.cells[2].getElementsByTagName('div')[0].style.borderLeftColor = bcolors[z.bcolor];
                  tr.cells[1].style.background   = null;
                  tr.cells[1].style.backgroundColor =bcolors[z.bcolor];
              }
        }

        sendObject(num);
    }
}
function circulartext(num,span)
{
    var cl = hexcolor(span.style.color);
    if (cl == '#0000cc') //true
    {
        allShapes[num].urlas = '';
        span.style.color = '#666699';
    }
    else
    {
        allShapes[num].urlas = 'circular';
        span.style.color = '#0000cc';
    }
    done(num);
}
function whichally(num,cd)
{
    if (allies[pagenum] == null)
    {
       allies[pagenum] = [];
    }
    for (var i=0; i < allies[pagenum].length; i++)
    {
        if (cd==1 && allies[pagenum][i].charAt(0)!='c' && ("," + allies[pagenum][i] + ",").indexOf(',' + num + ",") >= 0)
            return i;
        else if (cd==4 && allies[pagenum][i]!=null && allies[pagenum][i].charAt(0)=='c' && ("," + allies[pagenum][i] + ",").indexOf(',' + num + ",") >= 0)
            return i;
    }
    return -1;
}
function selally(td,num,cd)
{
    var i = whichally(num,cd);
    if (cd==1 && i >-1)
    {
        var moresel = allies[pagenum][i].split(/,/);
        var cc = false;
        for (var j=0; j < moresel.length; j++)
        {
            var k = parseInt(moresel[j]);
            for (var l=0; l < numsselected.length; l++)
                if (numsselected[l] == k) break;
            if (l == numsselected.length)
            {
                numsselected[l] = k;
                cc = true;
            }
        }

        if (cc)  $("m" + num + "_" + cdbeing).style.boxShadow = "-" + (numsselected.length*2-2) + "px -" + (numsselected.length-1) + "px #777";
    }
    else if (cd==4 && i >-1)
    {
        var moresel = allies[pagenum][i].split(/,/);
        var cc = false;
        for (var j=1; j < moresel.length; j++)
        {
            var k = parseInt(moresel[j]);
            for (var l=0; l < numsselected.length; l++)
                if (numsselected[l] == k) break;
            if (l == numsselected.length)
            {
                numsselected[l] = k;
                cc = true;
            }
        }

        if (cc)  $("m" + num + "_" + cdbeing).style.boxShadow = "-" + (numsselected.length*2-2) + "px -" + (numsselected.length-1) + "px #777";
    }
     td.innerHTML = '';
     
}
var exithold = [];
function exitally1(td,num,cd)
{
        var i = whichally(num,cd);
        if (i==-1) return;
        allies[pagenum][i] = allies[pagenum][i].replace(new RegExp("," + num + ","),",").replace(new RegExp("^" + num + ","),"").replace(new RegExp("," + num + "$"),"");
        if (cd==1 && (allies[pagenum][i] == '' || allies[pagenum][i].indexOf(",")==-1))
        {
            allies[pagenum].splice(i,1);
        }
        else if (cd==4 && (allies[pagenum][i].replace(/[0-9]/,'')==allies[pagenum][i]))
        {
            allies[pagenum].splice(i,1);
        }
        td.innerHTML = '';
}
function formally(num,cd)
{
    if (cd == 1)
    {
    var ww = '';
    var i = -1;
    for (var j=0; j < numsselected.length; j++)
    {
        num = numsselected[j];
        i = whichally(num,cd);
        if (i > -1)
        {
            ww +=  "," + allies[pagenum][i];
            allies[pagenum][i] = null;
        }
        else
            ww += "," + num;
    }
    if (i > -1)
        allies[pagenum][i] = ww.substring(1);
    else
        allies[pagenum][allies[pagenum].length] = ww.substring(1);
    for (var k= allies[pagenum].length-1; k >=0; k--)
        if (allies[pagenum][k] == null)
            allies[pagenum].splice(k,1);
    }
    else
    {
    var ww = 'c';
    var i = -1;
    for (var j=0; j < numsselected.length; j++)
    {
        num = numsselected[j];
        i = whichally(num,cd);
        if (i > -1)
        {
            ww +=  "," + allies[pagenum][i].replace(/^c,/,'');
            allies[pagenum][i] = null;
        }
        else
            ww += "," + num;
    }
    if (i > -1)
        allies[pagenum][i] = ww;
    else
        allies[pagenum][allies[pagenum].length] = ww;
    for (var k= allies[pagenum].length-1; k >=0; k--)
        if (allies[pagenum][k] == null)
            allies[pagenum].splice(k,1);
    }
    canceldia(num,1);
}
function changeslope(num, x)
{
      hassaved = false;

    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var z = allShapes[num];
        if (isNaN(x.value))
        {
            x.value = ''+z.slope;
            return;
        }
        z.slope = parseFloat(x.value);
        allShapes[num].reinit();
        sendObject(num);
    }
}
function changeTshadow(num, fcchecked,td)
{
    td.style.borderWidth = "1px";
    if (fcchecked)
        td.parentNode.nextSibling.cells[2].style.borderWidth = '0px';
    else
        td.parentNode.previousSibling.cells[2].style.borderWidth = '0px';
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var j = allShapes[num].fc;
        if (fcchecked && (j & 4) == 0)
            j+=4;
        else if (fcchecked == false && (j & 4) > 0)
            j-=4;
        allShapes[num].fc = j;
        cachedfc = j;
        if ( (j&4) == 4)
           allShapes[num].base.style.textShadow = (colors[allShapes[num].color]=='blue'? '1px 1px #111111':'1px 1px #505050');
        else
           allShapes[num].base.style.textShadow =  null;
        sendObject(num);
    }
}
function changeshadow(num , fcchecked,td)
{
    hassaved = false;
    td.style.borderWidth = "1px";
    if (fcchecked)
        td.parentNode.nextSibling.cells[1].style.borderWidth = '0px';
    else
        td.parentNode.previousSibling.cells[1].style.borderWidth = '0px';
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        var j = allShapes[num].fc;
        if (fcchecked && (j & 2) == 0)
            j+=2;
        else if (fcchecked == false && (j & 2) > 0)
            j-=2;
        cachedfc = j;
        allShapes[num].resize();
        allShapes[num].visible = 1;
        allShapes[num].fc = j;
        allShapes[num].init();
        sendObject(num);
    }
}

function setdocbg(tv)
{
    document.body.className = null;
    tv = tv.replace(/ /g,'');
    if (tv.length > 14)
    {
        hassaved = false; var xs;
        if (tv.indexOf('http') == 0)
            document.body.style.backgroundImage = "url(" + tv +")";
        else if (tv.charAt(0)=='#')
            document.body.style.backgroundImage = "linear-gradient(to right," + tv +")";
        else if( (xs = tv.split(/ /)).length>1)
        {
            document.body.style.backgroundImage = null;
            document.body.style.backgroundColor = xs[1];
            document.body.className = 'shapebg' +  xs[0] ;
        }
        bgarr[pagenum] = tv;
    }
    else if( (xs = tv.split(/ /)).length>1)
    {
            document.body.style.backgroundImage = null;
            document.body.style.backgroundColor = xs[1];
            document.body.className = 'shapebg' +  xs[0] ;
    }
    else if (!isNaN(tv))
    {
        document.body.style.backgroundImage = null;
        document.body.className = 'shapebg' + tv;
    }
    else
        document.body.style.backgroundImage = null;

    if (chatsessionnum > -1  )
    {
        parent.sendObject(chatsessionnum,'b' + tv);
    }
    canceldia(0,1);

}
function setdocbg1()
{
    var tv = bgarr[pagenum]; 
    if (tv==null || tv=='') return ['',''];
    tv = tv.replace(/ /g,'');
    var qq = [];
    if (tv.length > 14)
    {
        var xs;
        if (tv.indexOf('http') == 0)
            return ['', "background-image:url(" + tv +")"];
        if (tv.charAt(0)=='#')
        {
            tv = tv.replace(/(,[^,]+),.*/,"$1");
            return ["","background-image:linear-gradient(to right," + tv +")"];
        }
        else if( (xs = tv.split(/ /)).length>1)
        {
            return ["class=shapebg" +  xs[0],"background-color:" + xs[1]] ;
        }
        
    }
    else if( (xs = tv.split(/ /)).length>1)
    {
          return   ["class=shapebg" +  xs[0],"background-color:" + xs[1]] ;
    }
    else if (!isNaN(tv))
    {
        return ['class=shapebg' +  tv + " ",''];
    }
    return ['',"background-color:#BBB"];
 
}
function getdocbg()
{
   var cn = document.body.className;
   if (cn == null || cn == 'null' || cn.indexOf('style')==0)
   {
   var xx =  document.body.style.backgroundImage;
   if (xx == null) return '';

   xx = xx.replace(/[^\(]*\(/,'').replace(/\)[^\)]*$/,'');
   xx = xx.replace(/to right,/, '')
   xx = xx.replace(/"/g, '');
   if (xx.indexOf(',') > 0)
   {
       var xs = xx.split(/\),/);
       xx = '';
       for (var yy in xs)
           xx +=   "," + hexcolor(xs[yy].replace(/\)$/,'') + ')');
       xx = xx.substring(1);
   }
   bgarr[pagenum] = xx;
   return xx;
   }
   else
   {
       var bg = cn.replace(/shapebg/,'');
       var xx = hexcolor(document.body.style.backgroundColor);
       if (xx.charAt(0) =='#')
          bg += " " + xx;
       return bg;
   }
}


function dosql(num)
{
   hassaved = false;
   var s = '';
   for (var j=0; j < numsselected.length; j++)
    {
        num = numsselected[j];
       var str = allShapes[num].words.replace(/\r/g,'');
       var a = str.split( /[\n|\s]*\n[\n|\s]*/);
       s += "CREATE TABLE " + a[0] + "\n(";
        if (a[1]!='lastupdate') s += "\n   lastupdate BigInt,\n";
       for (var i=1; i < a.length; i++)
       {
           a[i] = a[i].replace("^[ ]+", "").replace(/[ ]+$/,'');
           if (a[i].indexOf(" ")<0)
               s += "   " + a[i].replace(/<b>/ig,"").replace(/<.b>/ig,"") + " VARCHAR(50),\n";
           else
               s += "   " + a[i].replace(/<b>/ig,"").replace(/<.b>/ig,"") + ",\n";
       }

       var p = '';
       for (i=1; i < a.length; i++)
       {
           a[i] = a[i].replace(/<b>/i,'').replace(/<.b>/i,'');
           var j = str.indexOf(a[i]);
           var k = str.substring(0,j).lastIndexOf("</b>");
           var l = str.substring(0,j).lastIndexOf("<b>");
           if (l < 0 || l > k && k>=0) continue;
           k = str.indexOf("</b>", j);
           l = str.indexOf("<b>",  j);
           if (k < 0 || l < k && l>=0) continue;
           p += "," + a[i].replace(/<b>/ig,'').replace(/<.b>/ig,'');
       }
       if (p!='')
       s +=   "   PRIMARY KEY(" + p.substring(1) +")";

       var maps = new Array();
       var mape = new Array();
       var alltbl = new Array();
       for (i=0; i < allLines.length; i++)
       {
           if (allLines[i] == null) continue;
           if (allLines[i].endnum != num) continue;
           var tbl = tblname(allLines[i].startnum);
           if (maps[tbl]==null) maps[tbl] = '';
           if (mape[tbl]==null) mape[tbl] = '';
           alltbl[alltbl.length] = tbl;
           var startfn = fdname(allLines[i].startnum, allLines[i].sy);
           var endfn   = fdname(allLines[i].endnum,   allLines[i].ey);
           maps[tbl] = maps[tbl] + "," + startfn;
           mape[tbl] = mape[tbl] + "," + endfn;
       }
       for (i=0; i < alltbl.length; i++)
       {
           tbl = alltbl[i];
           s += ",\n   FOREIGN KEY (" + mape[tbl].substring(1) + ") REFERENCES " + tbl + "(" + maps[tbl].substring(1) +")";

       }
       s += "\n)";
       if (j < numsselected.length-1)
           s += "\n\n";
    }
   if (savesqlable())
       myprompt( "<textarea name=def id=\"def" + num +"\" rows=20 cols=60>" + s +"</textarea><br><center><input type=hidden name=tname value=\"" + a[0] +"\"><input name=submit style=\"width:70px;height:22px;border:1px #b0b0b0 outset\" value=GoPhysical type=button onclick=\"gophysical('" + a[0] +"'," + num + ")\"></center>",null,null,textmsg[797]);
   else
       myprompt(textmsg[1658] + ":<br><textarea id=\"savesql\" rows=20 cols=60>" + s  +"</textarea>",null,null,textmsg[797]);


}
function gophysical(tname,num)
{

    parent.frames[0].savedef(tname, $("def" + num).value);
    whichact = 'sql';
    hassaved = false;
    tnamebeing = tname;
}
function docpp(num)
{

   hassaved = false;
   canceldia(0,0);
   var inh = '';
   if(numsselected==null || numsselected.length ==0)
       numsselected = [num];
   for (var j=0; j < numsselected.length; j++)
   {
        num = numsselected[j];
   for (var i=0; i < numLines; i++)
   {
       if (allLines[i] == null)continue;
       if (allLines[i].startnum==  num && allLines[i].type== 'arrow')
       {
           if (inh!='') inh += ",";
           inh += tblname(allLines[i].endnum);
       }
   }

   var str = allShapes[num].words;
   var a = str.split(/\n/);
   var s = "public class " + a[0];
   if (inh !='')
   {
       s += " : public " + inh;
   }
   s += "\n{\n";

   var st = 'data';
   var alltbl = new Array();
   for (  i=0; i < allLines.length; i++)
   {
       if (allLines[i] == null) continue;
       if (allLines[i].endnum != num || allLines[i].type!='diamond') continue;
       var tbl = tblname(allLines[i].startnum);
       var endfn   = fdname(allLines[i].endnum, allLines[i].ey);
       endfn   = endfn.replace("^[ ]+", "").replace(/[ ]+$/,'').replace(/\r/,'').replace(/<b>/ig,"").replace(/<.b>/ig,"");
       alltbl[endfn] = tbl;
   }

   for ( i=2; i < a.length; i++)
   {
       var v = a[i].replace("^[ ]+", "").replace(/[ ]+$/,'').replace(/\r/,'').replace(/<b>/ig,"").replace(/<.b>/ig,"");
       if (i>=2&& v== ''){st = 'method';continue;}

       if (v.indexOf(" ")<0)
       {
           if (st== 'data')
           {
              tbl = alltbl[v];
              if (tbl!=null) s += "   " + tbl + "* " + v + ";\n";
              else
                  s += "   string " + v + ";\n";
           }
           else
              s += "   void " + v + "();\n";
       }
       else
       {
           if (st== 'data')
           {
               s += "   " + v  + ";\n";
           }
           else
              s += "   " + v + "();\n";
       }
   }

   s += "\n};";
   if (i < numsselected.length-1)
       s += "\n\n";
   }
   if (saveable())
       myprompt( "<textarea id=\"destination" + num +"\" rows=20 cols=60>" + s +"</textarea><br><center><input size=8 name=filedir value=\"" + a[0] +".h\" ><input name=submit  style=\"width:50px;height:22px;border:1px #b0b0b0 outset\" value=\"" + textmsg[67] + "\" type=button onclick=\"savehfile('" + a[0] +".h'," + num + ")\"></center>",null,null, textmsg[797]);
   else
       myprompt(textmsg[1659] + ":<textarea id=\"destination\" rows=20 cols=60>" +s + "</textarea>");

   canceldia(0,0);
   canceldia(num,1);
}
function savehfile(fn, num)
{
    opener.helpsave(window, fn, $("destination"+ num).value);
}
function fdname(num, y)
{
    var s = allShapes[num].words.split(/\n/);
    var z = Math.round(y*s.length + 0.5);
    return s[z].replace(/<[^>]*>/g,"");
}

function tblname(num)
{
   var s = allShapes[num].words.replace(/\r/g,'').replace(/^[\s|\n]+/,'');
   var j = s.indexOf("\n");
   if (j>0)
   return s.substring(0,j);
   return s;

}
function issql(s)
{
    s = s.replace(/\r/g, '');
    s = s.replace(/[ ]*\n[ ]*/g, '\n');
    s = s.replace(/^\s+/g, '');
    s = s.replace(/\s+$/g, '');
    var j = s.indexOf("\n\n");
    if (j < 0) return false;
    if (s.indexOf("<b>") < 0)
        return false;
    j = s.indexOf("\n\n",j+3);
    if (j > 0) return false;
    return true;
}
function iscpp(s)
{

    s = s.replace(/\r/g, '');
    s = s.replace(/[ ]+\n/g, '\n');
    s = s.replace(/^\s+/g, '');
    var j = s.indexOf("\n\n");
    if (j < 0) return false;
    if (s.indexOf("<b>") >= 0)
        return false;
    j = s.indexOf("\n\n",j+3);
    if (j < 0) return false;
    return true;
}
function switchshow(num)
{
    allShapes[num].visible = 1 - allShapes[num].visible;
    hideshow(num);
}
function hideshow(num)
{
    if (num < 0 || num >= numShapes || allShapes[num] == null) return;

    //allShapes[num].visible = 1 - allShapes[num].visible;
    allShapes[num].base.style.visibility = (allShapes[num].visible== 1)? 'visible':'hidden';
    
    if (allShapes[num].visible==1)
    {
        for (var j=0; j < numLines; j++)
            if (allLines[j]!=null && (allLines[j].endnum == num || allLines[j].endnum==-1 && allLines[j].startnum == num))
                allLines[j].draw();
    }
    else
    {
        for (var j=0; j < numLines; j++)
            if (allLines[j].startnum == num || allLines[j].endnum == num)
                allLines[j].remove();
    }
    //allShapes[num].base.style.visibility  = (allShapes[num].visible== 1)? 'visible':'hidden';
    document.onmousemove = onmouseover0;

}

function hideLine(num)
{
    if (num < 0 || num >= numLines || allLines[num]==null) return;

    allLines[num].visible = 1 - allLines[num].visible;
    if (allLines[num].visible)
       allLines[num].draw();
    else
       allLines[num].remove();
    document.onmousemove = onmouseover0;

}

function hideCurve(num)
{

    allCurve[num].visible = 1 - allCurve[num].visible;
    allCurve[num].base.style.visibility = (allCurve[num].visible== 1)? 'visible':'hidden';

    document.onmousemove = onmouseover0;

}


function redraw3(num,shapename,cd)
{
    cachedshapename = shapename;
    if (cd== 1)
    {
        hassaved = false;
        savedfontrate = 1;
        if (numsselected ==null || numsselected.length==0)
            numsselected = [num];
        for (var j=0; j < numsselected.length; j++)
        {
            var num = numsselected[j];
            allShapes[num].resize();
            allShapes[num].shapename = shapename;
            allShapes[num].visible = 1;
            allShapes[num].init();
            for (var i=0; i < numLines; i++)
        {
          if (allLines[i]!=null &&  allLines[i].startnum ==  num   )
          {
             allLines[i].sx = Math.round(allLines[i].sx*savedfontrate);
             allLines[i].sy = Math.round(allLines[i].sy*savedfontrate);
             allLines[i].redraw();
          }
          if (allLines[i]!=null &&   allLines[i].endnum ==  num )
          {
             allLines[i].ex = Math.round(allLines[i].ex*savedfontrate);
             allLines[i].ey = Math.round(allLines[i].ey*savedfontrate);
             allLines[i].redraw();
          }
        }
        }

        mdia(num,cd);
   }
   else if (cd== 0)
   {
       if (chatsessionnum== -1)
       {
           anewshape(num,shapename);
       }
       else
       {
           cachedshapenum = num;

           parent.sendObject(chatsessionnum,'s');
       }
   }

   document.onmousemove = onmouseover0;
}
function anewshape(num,shapename)
{
   if (num == null)
   {
       num  = cachedshapenum;
       shapename = cachedshapename;
   }
   var dv = $("m0_0"); var z;
   if (dv==null)
      z = new Shape(num, '','', shapename, 30, 100, null, null, parseInt(cachedfontsize.replace(/px/i,'')), cachedcolor, cachedbgcolor,cachedfc,0,num,num);
   else
      z = new Shape(num, '','', shapename, parseInt(dv.style.left.replace(/px/,'')), parseInt(dv.style.top.replace(/px/,''))+70, null, null, parseInt(cachedfontsize.replace(/px/i,'')), cachedcolor, cachedbgcolor,cachedfc,0,num,num);
   z.visible = 1;
   canceldia(num,0);

   if (numediting==-1)
   {
       allShapes[num] = z;
       numShapes = allShapes.length;
       action(null,num);
   }
   else
   {
       z.initbase();
       z.init();
       z.setup();
   }
   cachedshapenum = null;

}
function edit(num)
{
    if (chatsessionnum== -1)
    {
       // urlas = allShapes[num].urlas;
        numbeing = num;
        action(allShapes[num].base,num);
    }
    else
    {
         if (allShapes[num].inediting== false)
         {
             if (allShapes[num].word != '')
             {
                 sendObject(num,'u');
             }
            // urlas = allShapes[num].urlas;
             numbeing = num;
             action(allShapes[num].base,num);
         }
    }
    canceldia(num,1);
}

function holdtomodify(num)
{
    return;
    if (num < 0 || allShapes[num] == null) return;
   // allShapes[num].inediting = true;
    if (numediting== num)
    {
        var b = $("t" + num);
        document.body.removeChild(b);
        numediting = -1;
        myprompt(textmsg[1657]);

    }
}
function delpic(num,im)
{
    beingloadnum = num;
    if (im!=null )
        submitstring = "delpic(beingloadnum,'" + im + "')";
    else
        submitstring = "delpic(beingloadnum)";

    hassaved = false;
    if (saveable())
    {
    if (im==null)
    {
        var img = allShapes[num].base.getElementsByTagName("img")[0];
        im = img.alt;
        allShapes[num].words = allShapes[num].words.replace(/<img [^>]+>/,'');
        done(num);
        canceldia(num,1);
        if ( img.src.indexOf(originalurl + "/FileOperation?did=")!=0)
            return;
    }
    if (im == null || im== '' || im.indexOf(".") < 0 ) return;
    var fn = (folder== '')? (im ): (folder + "/" + im );

    {
    document.f.operation.value = "delete";
    document.f.destination.value = "";
    document.f.filedir.value = fn  ;
    formnewaction(document.f, originalurl + "/FileOperation");
    document.f.target = iframename ;
    expiretime = activeidletime + (new Date()).getTime();
    visual(document.f);
    document.f.submit();
    document.f.filedir.value = filename;
    document.title = filename;
    }
    }
    else
    {
        allShapes[num].words = allShapes[num].words.replace(/<img [^>]+>/,'');
        done(num);
    }
    document.onmousemove = onmouseover0;
}

function changefont(sel,num, cd ,ii)
{
    var fs = parseInt(sel.innerHTML);
    if (cd == 1)
    {
        hassaved = false;
        hassaved = false;
        var tbl = sel.parentNode.parentNode;
        if (tbl.tagName.toLowerCase() != 'table')
        {
            tbl = sel.parentNode.parentNode.parentNode;
        }
        for (var j=0; j < tbl.rows.length; j++)
           for (var i=0; i < tbl.rows[j].cells.length; i++)
       {
           tbl.rows[j].cells[i].style.fontWeight = '500';
           tbl.rows[j].cells[i].style.borderWidth = '0px';
       }
        sel.style.fontWeight = '700';
        sel.style.border = '1px orange solid';
        if (numsselected!=null)
        for (var i=0; i < numsselected.length; i++)
        {
            num = numsselected[i];
            savedfontrate = fs/allShapes[num].fontsize;
            allShapes[num].base.style.fontSize = fs + 'px';
            cachedfontsize = fs + 'px';
            allShapes[num].fontsize = fs;
            done(num);
        }
    }
    else if (cd == 5)
    {
        var ori = $('orient').innerHTML.charCodeAt(0);
        var ij =  1;
        if (ori  ==  8593 ) ij =  -1;
        fs += ij;
        if (fs > 6 ){
        sel.innerHTML = '' + fs;
        allfonts[ii] = fs;}
    }
    //canceldia(num,1);
}
function changeorient(td)
{
    var ori = td.innerHTML.charCodeAt(0);
    if (ori  ==  8593 )
        td.innerHTML = '&darr;'
    else
        td.innerHTML = '&uarr;'
}
function changecolorb(sel,  num, cd, cl)
{
      hassaved = false;
      var tbl = sel.parentNode.parentNode;
      if (tbl.tagName.toLowerCase() != 'table')
      {
          tbl = sel.parentNode.parentNode.parentNode;
      }
      var iii = 0;
      for (var j=0; j < tbl.rows.length; j++)
      for (var i=0; i < tbl.rows[j].cells.length; i++)
      {
          tbl.rows[j].cells[i].style.border = '1px transparent solid';
          if (tbl.rows[j].cells[i]==sel)
              iii = j*tbl.rows[0].cells.length + i;
      }
      sel.style.border = '1px orange solid';
      if (cd==0)
      {

          document.body.className = null;
          if (cl < 10)
          {

          if ($('chkgradient').checked)
          {
              if ($('bgurl').value.indexOf(',')>0)
              {
                 $('bgurl').value = $('bgurl').value.replace(/,$/,'') + "," + bcolors[cl];
                 document.body.style.background = null;
                 document.body.style.backgroundImage = 'linear-gradient(to right,' + $('bgurl').value + ")";
                 document.body.style.backgroundColor = bcolors[cl];
                 bgarr[pagenum] = $('bgurl').value;
              }
              else if ($('bgurl').value.length < 15)
              {
                 document.body.style.background = null;
                 document.body.style.backgroundImage = null;
                 document.body.style.backgroundColor = bcolors[cl];
                 $('bgurl').value = bcolors[cl] + ",";
                 bgarr[pagenum] = "";
              }
              if (chatsessionnum > -1 && num == null)
              {
                  parent.sendObject(chatsessionnum,'g' + bcolors[cl]);
              }
          }
          else
          {
              document.body.style.backgroundImage = null;
              document.body.style.backgroundColor = bcolors[cl];
              if ($('bgurl').value.length > 15)
                  document.body.style.background = "url(" + $('bgurl').value + ") " + bcolors[cl];
              else
                  document.body.style.background = "url() " + bcolors[cl];
              bgarr[pagenum] = $('bgurl').value;
              if (chatsessionnum > -1 && num == null)
              {
                  parent.sendObject(chatsessionnum,'g' + bcolors[cl]);
              }
          }
      }
      else
      {
           document.body.style.background = null;
           document.body.style.backgroundImage = null;
           document.body.className = "shapebg" + (cl-10);
           bgarr[pagenum] = ""+(cl-10) + " " +  hexcolor(document.body.style.backgroundColor);
      }
      }
      else if (cd == 1)
      {
         for (var i=0; i < numsselected.length; i++)
         {
              num = numsselected[i];
              var z = allShapes[num];
              if (cl>9)
              {
                  z.bcolor = cl;
                  if (z.isrect() && (z.ispic == 0 || z.ispic == 3))
                  {
                      z.base.style.backgroundColor = null;
                      z.base.style.backgroundImage = null;
                      z.base.className = 'shapebg' + (cl-10);
                  }
                  else if (z.shapename == 'diamond')
                  {
                      z.base.className = null;
                      var dv =  $('g'+num);
                      dv = dv.getElementsByTagName('div')[0];
                      dv.style.backgroundImage =  null;
                      dv.className = 'shapebg' + (cl-10);
                      dv.style.backgroundColor = null;
                  }
                  else if (z.shapename == 'hexgon')
                  {
                       z.base.className = null;
                       var dv =  $('g'+num);
                       var tr = dv.getElementsByTagName('table')[0].rows[0];
                       tr.cells[0].getElementsByTagName('div')[0].style.borderRightColor = "transparent";
                       tr.cells[1].style.backgroundImage   = null;
                       tr.cells[1].style.backgroundColor   = null;
                       tr.cells[2].getElementsByTagName('div')[0].style.borderLeftColor = "transparent";
                       tr.cells[1].className = 'shapebg' + (cl-10);
                       var mt = tr.cells[1].offsetHeight;
                       tr.cells[1].innerHTML = "<div class=shapebg" + (cl-10)  + " style=\"margin:-1px 0px 0px  0px;height:" + mt + "px;width:" +((mt/1.732))
           +  "px;\"><!----></div><div class=shapebg" + (cl-10)  + " style=\"z-index:-3;margin:-" + (mt) + "px 0px 0px  0px;height:" + mt + "px;width:" +((mt/1.732))
           +  "px;transform:rotate(60deg)\"><!----></div><div class=shapebg" + (cl-10)  + " style=\"z-index:-3;margin:-" + (mt) + "px 0px 0px 0px;height:" + mt + "px;width:" +((mt/1.732))
           +  "px;transform:rotate(-60deg)\"><!----></div>";
                  }
                  else
                  {
                      var dv =  $('g'+num);
                      if (dv!=null) dv.style.color = null;
                  }
              }
              else {

              if (z.isrect() && (z.ispic == 0 || z.ispic == 3))
              {
                  z.base.className = null;
                  if ( (z.fc & 8) == 0)
                  {

                      z.base.style.backgroundColor = bcolors[cl];
                      z.base.style.backgroundImage = null;
                  }
                  else
                  {
                      z.base.style.backgroundColor = bcolors[cl];
                      z.base.style.backgroundImage = gradient(bcolors[cl],z.shapename);
                  }
              }
              else if (z.shapename == 'diamond')
              {

                  var dv =  $('g'+num);
                  z.base.className = null;
                  if ( (z.fc & 8) == 0)
                  {
                      dv = dv.getElementsByTagName('div')[0];
                      dv.className = null;
                      dv.style.backgroundImage = null;
                      dv.style.backgroundColor =  bcolors[cl];
                  }
                  else
                  {
                      dv = dv.getElementsByTagName('div')[0];
                      dv.className = null;
                      dv.style.backgroundImage = gradient(bcolors[cl]);
                      dv.style.backgroundColor = null;
                  }
              }
              else if (z.shapename == 'hexgon')
              {
                  var dv =  $('g'+num);
                  if ( (z.fc & 8) == 0)
                  {
                       var tr = dv.getElementsByTagName('table')[0].rows[0];
                       tr.cells[0].className = null;
                       tr.cells[1].className = null;
                       tr.cells[2].className = null;
                       tr.cells[0].getElementsByTagName('div')[0].style.borderRightColor = bcolors[cl];
                       tr.cells[1].style.backgroundImage   = null;
                       tr.cells[1].style.backgroundColor   = bcolors[cl];
                       tr.cells[2].getElementsByTagName('div')[0].style.borderLeftColor = bcolors[cl];
                       tr.cells[1].innerHTML = "<!---->";
                  }
                  else
                  {
                       var bf = gradient(bcolors[cl]).replace(/\(/,'(to right,');
                       var twocolors = bf.replace(/[^#]+(#[0-9|a-f]+)[^#]+(#[0-9|a-f]+).*/,'$1,$2').split(/,/);
                       var tr = dv.getElementsByTagName('table')[0].rows[0];
                       tr.cells[0].className = null;
                       tr.cells[1].className = null;
                       tr.cells[2].className = null;
                       tr.cells[0].getElementsByTagName('div')[0].style.borderRightColor = twocolors[0];
                       tr.cells[1].style.background   = bf;
                       tr.cells[1].innerHTML = "<!---->";
                       tr.cells[2].getElementsByTagName('div')[0].style.borderLeftColor = twocolors[1];
                  }
              }
              else
              {
                  var dv =  $('g'+num);
                  if (dv!=null) dv.style.color = bcolors[cl];
              }
              cachedbgcolor = allShapes[num].bcolor = cl;
              }
              sendObject(num);
         }
      }
      else if (cd == 5)
      {

          if (iii < bcolors.length-1)
          {
           $('hiddencolorb').value = bcolors[cl];
          $('hiddencolorb').click();
          cachediii = iii;
          cachedtd = sel;
          } else
          {
              myprompt(textmsg[1642].replace(/@.*/,''));
          }

      }
}
var cachedtd;
var cachediii;
function childcolor(x,col)
{
    if (x==null) return;
    if (x.tagName.toLowerCase()=='tbody'||x.tagName.toLowerCase()=='td'||x.tagName.toLowerCase()=='div' || x.tagName.toLowerCase()=='table' || x.tagName.toLowerCase()=='tr'
            )
    {
        if (x.style!=null&&(x.tagName.toLowerCase()=='td'||x.tagName.toLowerCase()=='div') && x.style.color!=null && hexcolor(x.style.color)!='#cddcc2')
            x.style.color = col;
        if (x.childNodes == null) return;
        else for (var i=0; i < x.childNodes.length; i++)
           if (typeof(x.childNodes[i].tagName)!='undefined')
        childcolor(x.childNodes[i],col);
    }
}
function changecolor(sel,  num, cd, cl)
{
    if (cd == 0)
    {
        childcolor($('toolbar'),colors[cl]);
        menufontcolor = cl;
        childcolor($('selplay'),colors[cl]);
        childcolor($('selpage'),colors[cl]);
        childcolor($('selfile'),colors[cl]);
        
        return;
    }
    hassaved = false;
    var tbl = sel.parentNode.parentNode;
      if (tbl.tagName.toLowerCase() != 'table')
      {
          tbl = sel.parentNode.parentNode.parentNode;
      }

      var iii = 0;
      for (var j=0; j < tbl.rows.length; j++)
      for (var i=0; i < tbl.rows[j].cells.length; i++)
      {
          tbl.rows[j].cells[i].style.border = '1px transparent solid';
          if (tbl.rows[j].cells[i]==sel)
               iii = j*tbl.rows[0].cells.length + i;
      }
      sel.style.border = '1px orange  solid';
      if (numsselected!=null)
      for (var i=0; i < numsselected.length; i++)
     {
        num = numsselected[i];
        if (cd== 1)
        {
          var z = allShapes[num];
          if (z.ispic == 1)
          {
              z.base.style.borderColor = colors[cl];
          }
          else if (z.ispic == 2)
          {
              z.base.getElementsByTagName('img')[0].style.borderColor = colors[cl];
          }
          else if (z.shapename == 'diamond')
              $('g'+num).getElementsByTagName('div')[0].style.borderColor = colors[cl];
          else if (z.shapename == 'hexgon' && (z.fc & 1) == 0 )
          {
              var g = $('f'+num).getElementsByTagName('table')[0].rows[0];
              g.cells[0].getElementsByTagName('div')[0].style.borderRightColor = colors[cl];
              g.cells[1].style.backgroundColor = colors[cl];
              g.cells[2].getElementsByTagName('div')[0].style.borderLeftColor = colors[cl];
          }
          else if (z.isrect() || z.ispic == 3)
              z.base.style.borderColor = colors[cl];
          allShapes[num].base.style.color = colors[cl];
          cachedcolor =  allShapes[num].color = cl
          var tbls = $('p'+ num); if (tbls!=null) tbls = tbls.getElementsByTagName('table');
          if (tbls!=null)for (var k=0; k < tbls.length; k++)
          {
              tbls[k].style.borderColor = colors[cl];
          }
          sendObject(num);
        }
        else if (cd== 2)
        {

           allLines[num].color = cl;
           allLines[num].redraw();
           cachedlinecolor = cl;
           //canceldia(num,cd);
        }
        else if (cd== 4)
        {
           cachedcurvecolor = cl;
           allCurves[num].color = cl;
           allCurves[num].redraw();
           //canceldia(num,cd);
        }
         else if (cd == 5)
         {
          $('hiddencolorf').value = colors[cl];
          $('hiddencolorf').click();
          cachediii = iii;
          cachedtd = sel;
         }
    }
}

function changethatcolor(txt,c)
{
    if (c == 'b')
    {
        cachedtd.style.backgroundColor = txt.value;
        bcolors[cachediii] = txt.value;
    }
    else if (c =='f')
    {
        cachedtd.style.color = txt.value;
        colors[cachediii] = txt.value;
    }
}
var cutshape = null;
function dodelete(num,cd)
{
    if ($("m" + num + "_" + cd) == null) return;

    hassaved = false;
    if (numsselected!=null)
    {
    cutshape = [];
    cutkframe = [];
    for (var i=0; i < numsselected.length; i++)
    {
        num = numsselected[i];
        if (cd== 1)
        {
            if (true)// allShapes[ num ].inediting== false)
            {
                cutkframe[cutshape.length] = kframes[pagenum + '_' + num];
                cutshape[cutshape.length] = allShapes[ num ].toString();
                
                sendObject(num,'d');
                allShapes[ num ].delme(1);
            }
            else
            {
                myprompt(textmsg[1657]);

            }
        }
        else if (cd== 2)
        {
            allLines[ num ].delme();
            if (chatsessionnum > -1 )
           {
                parent.sendObject(chatsessionnum,  num + " l");
           }
        }
        else if (cd== 4)
        {
            allCurves[ num ].delme();
            if (chatsessionnum > -1 )
           {
                parent.sendObject(chatsessionnum,  num + " c");
           }
        }
    }
    }
    canceldia(num,cd);

}
var cutkframe = [];
function copyshape(num)
{

    cutshape = new Array(numsselected.length);
    cutkframe = new Array(numsselected.length);
    for (var j=0; j < numsselected.length; j++)
    {
        num=numsselected[j] ;
        cutshape[j] = allShapes[ num ].toString();
        cutkframe[j] = copyk(kframes[pagenum + '_' + num]);
    }
    canceldia(num,1);
}
function pasteshape(num)
{
    hassaved = false;
    var dv = $("m0_0" );
    if (chatsessionnum > -1 && num == null)
    {
        parent.sendObject(chatsessionnum,'s');
    }
    else if (num!=null)
    {
        var z = new Shape(num);
        z.parse(cutshape[cutshape.length-1]);
        if (cutkframe[cutshape.length-1]!=null)
        kframes[pagenum + '_' + num] = copyk(cutkframe[cutshape.length-1]);
        z.x =  parseInt(dv.style.left.replace(/px/,''));
        z.y = parseInt(dv.style.top.replace(/px/,''));
        z.visible = 1;
          z.initbase();
          z.init();
          z.setup();
          z.animates();
        canceldia(0,0);
        sendObject(num);
    }
    else if (num == null)
    {
       var j = 0;
       for (var n=numShapes;  j < cutshape.length; j++,n++)
       {
          var z = new Shape(n);
           z.parse(cutshape[j]);
           if (cutkframe[j]!=null)
           kframes[pagenum + '_' + n] = copyk(cutkframe[j]);
           
          z.visible = 1;
          z.initbase();
          z.init();
          z.setup();
          z.animates();
       }
    }
}
function canceldia(num,cd)
{
    var xx = $('myprompt');
    if (xx!=null) document.body.removeChild(xx);
    if (cd == 0 && num == 0)
    {
        var bg = $('bgurl');
        if (bg!=null && bg.value!='' && bg.value.length > 12)
            setdocbg(bg.value);
    }
    if (cd == 1 && frameupdated && numsselected!=null)
    {
        for (var i=0; i < numsselected.length; i++)
        {   
            genkeyframes(numsselected[i]);
            allShapes[numsselected[i]].animates();
        }
        frameupdated = false; 
    }
    numsselected = null;
    var md = $("m" + num + "_" + cd);
    if (md != null)
        document.body.removeChild(md);
    hasone = null;
    cdbeing = -1;
    document.onmousemove = onmouseover0;
    if ($('tdbg')!=null)
    var j = hexcolor($('tdbg').style.backgroundColor);
    if (cd==0 && num==0 && md!=null&& editable)
    {
        startbg($('tdbg'));
        $('selfile').style.visibility = 'hidden';
        $('selpage').style.visibility = 'hidden';
        $('selplay').style.visibility = 'hidden';
    }
}

var copyk  = function(k)
   {
       if (k == null) return null;
       var x = new Object();
       x.esn = k.esn; x.ets=k.ets; x.etm = k.etm;
       x.ssn = k.ssn; x.sts=k.sts; x.stm = k.stm; x.loop = k.loop;
       x.lsn = k.lsn; x.lts=k.lts; x.ltm = k.ltm; 
       return x; 
   }

function constructshape(num,str, xx, yy)
{
     var z = new Shape(num);
     numbeing = num;
     z.parse(str);
     if (z.x == null) z.x = xx;
     if (z.y == null) z.y = yy;
       
        if ( constructshape.caller.name==null || constructshape.caller.name.indexOf('choosesn') >= 0)
        {
            z.visible = 1;
            z.initbase();
            z.init();
           
        }
        else  if ( constructshape.caller.name==null || constructshape.caller.name.indexOf('exebuffered') < 0)
        {
            z.initbase();
            z.init();
            z.setup();
        }
        else   if (createmove == null)
        {
            z.initbase();
            z.init();
            
            if (num>=0 && num  < allShapes.length)
            setTimeout("allShapes[" + num + "].move(" + x + "," + y + ")",5);
            var em = $("sound");
            if (em!=null) em.Play();
            
        }
        else
        {
            z.initbase();
            z.init();
            if ((num>=0 && num  < allShapes.length))
            setTimeout("allShapes[" + num + "].move(" + x + "," + y + ")",5);
            
        }
        
        return z;
}
function constructline(num, str)
{
         var i = 0;
         var parser = new CSVParse(str,"'", ",", "\r\n");
         var type = parser.nextElement();
         if (type == null) return null;
         var startn = parseInt(parser.nextElement());
         if (''+startn=='NaN') return null;
         var sx = parseFloat(parser.nextElement());
         if (''+sx == 'NaN') return null;
         var y = parser.nextElement();
         if (y==null) return null;
         if (isNaN(''+y))
         {
             var sy =  allShapes[startn].positionbyfn(y);
         }
         else
             sy = parseFloat(y);

         var endn = parseInt(parser.nextElement());
         if (''+endn == 'NaN') return null;
         var ex = parseFloat(parser.nextElement());
         if (''+ex== 'NaN') return null;
         y = parser.nextElement();
         if (y == null) return null;

         if (isNaN(''+y))
         {
             var ey =  allShapes[(endn)].positionbyfn(y);
         }
         else
             ey = parseFloat(y);

         var thick = parser.nextElement();
         if (thick==null) thick = '1';
         var direct = parser.nextElement();
         if (direct==null) direct = '1';
         var time = parser.nextElement();
         if (time==null) time = '0_1';
          var tm = 1;
          var start = 0;
       var st = time.split(/_/);
       if (!isNaN(st[0])) 
          start = parseFloat(st[0]);
       if (st.length>1 &&!isNaN(st[1]))
         tm = parseFloat(st[1]);
        
         var cn = 0;
         var color = parser.nextElement();
         if (color==null) color = 'black';
         if (isNaN(color))
            cn = rcolor(color);
         else
            cn = parseInt(color);
         sentline = true;
         var zi = parser.nextElement(); if (zi==null) zi = '0';
         var l =  (new Line(num,type, (startn), (sx),sy, (endn) , (ex),ey,parseInt(thick),parseInt(direct),start, tm, cn,parseInt(zi)));

         return l;
}

function constructcurve(num, str)
{
     var i = 0,x,y  = 0;
     var parser = new CSVParse(str, "'", ",", "\r\n");

     var type = parser.nextElement();
     if (type == null) return null;
     var thick = parseInt(parser.nextElement());
     if (thick==null) return null;
     var color = parser.nextElement();
     if (color == null) return null;
     var tm = parser.nextElement();
     if (tm == null) return null;
     var start = 0;
     var time = 2;
     if (tm!=null)
   {
       var st = tm.split(/_/);
       if (!isNaN(st[0])) 
           start = parseFloat(st[0]);
       if (st.length>1 &&!isNaN(st[1]))
           time = parseFloat(st[1]);
   }
     var zi = parser.nextElement();
     var points = [];
     while (true)
     {
         x = parser.nextElement();
         y = parser.nextElement();
         if (x ==null || y == null) break;
         if (i == 0)
            points[i] = [parseInt(x),parseInt(y)];
         else
         {
            points[i] = [parseInt(x) + points[i-1][0], parseInt(y) + points[i-1][1]];
         }
         i++;
     }

     sentline = true;
     var cn = 0;
     if (isNaN(color))
        cn = rcolor(color);
     else
        cn = parseInt(color);
     return (new Curve(num, type, thick, cn,start, time, parseInt(zi), points));
}

function initial()
{
     hw.parseAttach(attachstr);
     document.f.attach.value = attachstr;
     favorx = 5;
     favory = 35;
     mfavory = 0;
     allShapes = [];
     numShapes = 0;
     if (shapearr[pagenum]!= null)
     for (var i=0; i < shapearr[pagenum].length; i++)
     {
        var z = constructshape(i,shapearr[pagenum][i]);
        if (ismakingtab==1)
        {
           genkeyframes(i);
           z.animates();
        }
        else
        {
            
        }
        z.visible = 1;
        z.base.style.visibility = 'visible';
     }
     if (ismakingtab==1 && linearr[pagenum]!= null)
     for (i=0; i < linearr[pagenum].length; i++)
     {
         constructline(null, linearr[pagenum][i]);
     }
     if (ismakingtab==1 && curvearr!=null)
     for (i=0; curvearr[pagenum]!=null && i < curvearr[pagenum].length; i++)
     {
         constructcurve(null, curvearr[pagenum][i]);
     }
     document.onmousemove = onmouseover0;
      
}
function getInputSelection(el)
{
    var start = 0;
    var end = 0;
    var normalizedValue;
    var range;
    var textInputRange;
    var len;
    var endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number")
    {
        start = el.selectionStart;
        end = el.selectionEnd;
    }
    else
    {
        range = document.selection.createRange();

        if (range && range.parentElement() == el)
        {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1)
            {
                start = end = len;
            }
            else
            {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1)
                {
                    end = len;
                }
                else
                {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    selectstart = start,
    selectend = end;
}
function makevisible(n)
{
    allShapes[n].visible = 1;
    allShapes[n].base.style.visibility = 'visible';
    if (allShapes[n].shapename == 'diamond' && $('u' + n)!=null)
        $('u' + n).style.visibility = 'visible';
    //Play.appear(n);
}
function makehidden(n)
{
    allShapes[n].visible = 0;
    allShapes[n].base.style.visibility = 'hidden';
   
}
function savetocache()
{

    if (hassaved == false)
    {
       var str = toString();

       //SetCookie("UMLtoolstr", "" + ((new Date()).getTime()) + " " + filename + " " + pagenum + " " + str);
    }
}

function initialdraw()
{
     notcached(false);
     if (editable && chatsessionnum==-1)
     {
         cachedone(true);
     }
}
function makeframe()
{
    document.write("<iframe name=\"" + iframename + "\" width=1  height=1 style=\"visibility:hidden\" />");
    //if (saveable()) document.f.filedir.style.fontWeight = 700;
}




function pickthis(sp)
{
    if (sp.innerHTML.toLowerCase()!='&nbsp;&nbsp;')
    mergeto(null, parseInt(sp.innerHTML.replace(/[^0-9]/g,''))-1);
    var tbl = sp.parentNode.parentNode
    if (tbl.tagName.toLowerCase()!='table') tbl = tbl.parentNode;
    document.body.removeChild(tbl);
}
function mergeto(sel,pn)
{
   var pp = pagenum;
   hassaved = false;
   if (pn == null)
       pn = parseInt(sel.value.replace(/[^0-9]/g,''))-1;
   var xy=[];
   makeintostring(xy);

   delall();
   var lower = 0;
   if (pagenum < pn)
       lower = 1;
   pagenum = pn;
   initial();
   hw.parseAttach(attachstr);
   var my = 40;
   for (var i=0; i < numShapes; i++)
   {
      if (allShapes[i]!= null)
      {
          var bt = allShapes[i].y+allShapes[i].base.offsetHeight;
          if (bt > my) my = bt;
      }
   }
   var ns = numShapes;
   for (i=0; i < shapearr[pp].length; i++)
   {
       constructshape(i,shapearr[pp][i], xy[i][0], xy[i][1]+my+10);
   }
   for (i=0; i < linearr[pp].length; i++)
   {
         var parser = new CSVParse(linearr[pp][i],"'");
         var type = parser.nextElement();
         var startn = parseInt(parser.nextElement()) + ns;
         if (''+startn=='NaN') continue;
         var sx = parseFloat(parser.nextElement());
         if (sx == null) continue;
         var y = parser.nextElement();
         if (y==null) continue;
         if (isNaN(''+y))
         {
             var sy =  allShapes[startn].positionbyfn(y);
         }
         else
             sy = parseFloat(y);
         
         var endn = parseInt(parser.nextElement()) + ns;
         var ex = parseFloat(parser.nextElement());
         var y = parser.nextElement();
         if (''+endn=='NaN') continue;
         if (y==null) return null;
         if (isNaN(''+y))
         {
             var ey =  allShapes[endn].positionbyfn(y);
         }
         else
             ey = parseFloat(y);
         
         var thick = parser.nextElement();
         var direct = parser.nextElement();
         var time = parser.nextElement();
         var tm = 2;
         var start = 0;
         if (time==null) time = "0_2";
          var st = time.split(/_/);
       if (!isNaN(st[0])) 
          start = parseFloat(st[0]);
       if (st.length>1 &&!isNaN(st[1]))
         tm = parseFloat(st[1]);
        
         var cn = 0;
         var color = parser.nextElement();
         if (color==null) color = 'black';
         if (isNaN(color))
            cn = rcolor(color);
         else
            cn = parseInt(color);
         var zi = parser.nextElement(); if (zi==null) zi = '0';
         new Line(drawinenumber,type,startn,sx,sy,endn ,ex,ey,parseInt(thick),direct,start,tm,cn,parseInt(zi));
   }
   shapearr.splice(pp,1);
   linearr.splice(pp,1);
   curvearr.splice(pp);
   allies.splice(pp);
   bgarr.splice(pp);
   //pagenum -= lower;
   $('tdpage').innerHTML = textmsg[1854].replace(/@/,''+ (pagenum+1));
   canceldia(0,0);
}

function allowmove(c)
{
   canceldia(0,3);
   var xx = $("toolbar");

   if (c == 0)
   {
   toolbarxy = findPositionnoScrolling(xx);
   var holdpos = $("holdpos");
   if (holdpos==null)
   {
       holdpos = document.createElement("div");
       holdpos.id = "holdpos";
       holdpos.cssText = "width:" + xx.offsetWidth + "px;height:" + xx.offsetHeight +"px";
       document.body.insertBefore(holdpos, xx);
   }
   xx.style.position = "absolute";
   var my = 40;
   for (var i=0; i < numShapes; i++)
   {
      if (allShapes[i]!= null)
      {
          var bt = allShapes[i].y+allShapes[i].base.offsetHeight;
          if (bt > my) my = bt;
      }
   }
   xx.border = "0";
   xx.cellpadding = "5";
   xx.style.top = my + 'px';
   xx.style.left = toolbarxy[0] + 'px';
   xx.style.height = "16px";
   window.scrollTo(0, bt);
   }
   else
   {
       xx.style.position = "";
       xx.style.height = "16px";
     //  xx.align = "center";

       var xy = $("holdpos");
       if (xy!= null){
       document.body.insertBefore(xx, xy);
       document.body.removeChild(xy);
       window.scrollTo(0, 0);
       }
   }

}
var createmove = null;
var linenums = null;
function redrseline()
{
    if (linenums == null) return;
    for (var j=0; j < linenums.length; j++)
    {
        var x = linenums[j];
        allLines[x.num] = constructline(x.num, x.str);
    }
    linenums = null;
}
var bufferedcommand =null;
function exebuffered()
{
    if (bufferedcommand!=null)
    {
       var xx = constructshape(bufferedcommand.num,bufferedcommand.str);
       if (xx == null) return;
       allShapes[bufferedcommand.num] = xx;
       if (ismakingtab == 1 &&  typeof(LaTexHTML) != 'undefined')
       {
           LaTexHTML.formatele(allShapes[bufferedcommand.num].base);
       }
       if (!allShapes[bufferedcommand.num].isrect())
            allShapes[bufferedcommand.num].gooddim();

       bufferedcommand = null;

    }
}
function createupdate(str)
{
    var j =  str.indexOf(" ");
    if (j == -1)
    {
        if (str.charAt(0) == 'b')
        {
            setdocbg(str.substring(1));
        }
        else (str.charAt(0) == 'g')
        {
            document.body.style.backgroundColor = (str.substring(1));
        }
        return;
    }
    var num = parseInt( str.substring(0, j));
    var c =  str.charAt(1 + j);
    if (2+j <  str.length )
         str = str.substring(2 + j);
    else
         str = '';
    if (c == 's')
    {
        if (allShapes[num] != null)
        {
            createmove = [allShapes[num].x, allShapes[num].y];
            linenums = [];
            for (var j=0; j < allLines.length; j++)
            {
                if (allLines[j].startnum == num || allLines[j].endnum == num)
                {
                    linenums[linenums.length] = {num:allLines[j].num, str:allLines[j].toString()};
                    allLines[j].delme();
                }
            }
            allShapes[num].delme(false);
        }
        else
        {
            createmove = null;
        }
        if (str !='')
        {
            bufferedcommand  = {num:num,str:str};
            var delay = 10;
            if (linenums!=null) delay += linenums.length*400;
            setTimeout('exebuffered()', delay);
        }
    }
    else if (c == 'l')
    {
        if (allLines[num] != null)
            allLines[num].delme();
        if (str!='')
        {
            allLines[num] = constructline(num, str);
        }
    }
    else if (c == 'c')
    {
        if (allCurves[num] != null)
            allCurves[num].delme();
        if (str!='')
        {
            allCurves[num] = constructcurve(num, str);
        }
    }
}
function changefontfamily()
{
    var myfontname1 = GetCookie('telamanfontname');

    if (myfontname1!=null)
    {
        myfontname = myfontname1;
    }
    else if (typeof(defaultfontfamily)!='undefined')
    {
        myfontname = defaultfontfamily;
    }

    var s = document.getElementsByTagName('head')[0].getElementsByTagName('style')[0];
    s.innerHTML = s.innerHTML.replace(/font-family:arial\}/, "font-family:" + myfontname + "}"  );

}
function appendfileto()
{
     var tt = $('e' + numbeing);

     if (tt!=null)
         tt.value +=' '+ originalurl + '/FileOperation?did=' + ResizeUploaded.pathcode;
     else
         ResizeUploaded.attachman(document.f.attach);
     attachstr = document.f.attach.value;
     hw.parseAttach(attachstr );
}
var oldResizeUploadeddocuse = ResizeUploaded.docuse;
ResizeUploaded.docuse = function()
{
    oldResizeUploadeddocuse();
    appendfileto();

}

function showattachment(t)
{
    attachstr  = t;
    hw.parseAttach(t);
}

Msg.handlepost = function(s)
{
    var m = new Message(s);
    if (m.code == "newd")
    {
        Msg.tid = m.tid;

        if (''+m.tid !='-1')
        {
             var url = originalurl + "/remote.jsp?t=" + tstmp + "&orgnum=" + orgnum;
             var url1 = originalurl + "/Qrlink?url=" + Msg.hex(url);
             var twos = textmsg[1778].split(/@/);

             myprompt("<input type=radio name=remoteway onclick=\"Play.remoteway=1;\" value=1 " + (Play.remoteway==1?'checked':'') + " >" + twos[0] + "<br><input type=radio name=remoteway onclick=\"Play.remoteway=2;\" value=2 " + (Play.remoteway==2?'checked':'') + " >" + twos[1] +  '<br><span style=background-color:lightyellow;width:100% >' + url + "</span><br><input type=radio name=remoteway onclick=\"Play.remoteway=3;\" value=3 " + (Play.remoteway==3?'checked':'') + " >" + textmsg[1779] + "<br><img src=" + url1 + " width=500 />", null, null,textmsg[1771].split(/@/)[6]);
             promptwin.style.top = '30px';

             mypromptonclose(Play.quitremote);
        }

    }
    else if (m.code == 'snap')
    {
        var zz = textmsg[1725].split(/@/);
        var seg = m.msg.split(/\|/);
        var x = textmsg[1646].split(/@/);
        for (var i=1; i < 4; i++)
        seg[i] = seg[i].replace(/<table/, '<table width=100% border=1 style=border-collapse:collapse;border-radius:3px;background-color:white');
        myprompt("<body style=\"font-family:" + myfontname + "\"><table id=snap border=1  cellspacing=4px cellpadding=3  style=background-color:white;border-collapse:collapse><tr><td>" + zz[0] + "</td><td>" + zz[1] + "</td><td>" + zz[2] + "</td><td>" + zz[3] + "</td><td>" + zz[4] + "</td><td>" + zz[5] + "</td></tr></table>");
        var tbl0 =  $('snap');

           var r = tbl.insertRow(-1);
           var c = r.insertCell(-1);
           c.colSpan = 6;
           c.innerHTML =  ("<table width=98%><tr><td>" + x[0] +seg[1]+ "</td></tr> <tr><td>" + x[1] +seg[2]+ "</td></tr><tr><td>" + x[2] +seg[3]+ "</td></tr></table>");

    }
}
Msg.handleget = function(s)
{
    if (s == '')  return  ;
    usingremote = true;
    var m = new Message(s);
    Msg.rid = m.sid;
    Msg.needmore = true;
    if (m.code == 'join')
    {
        Play.remoteway = 3;
        closeprompt();
    }
    else if (m.code == 'login')
    {
        window.open('login.jsp?follow=' + m.msg, 'w' + Msg.tstmp);
        Msg.needmore = false;
    }
    else  if (m.code == "plain")
    {
        Play.remoteway = 3;
        if (promptwin!=null && promptwin.innerHTML.indexOf(textmsg[1771].split(/@/)[6])>0)
            closeprompt();
        eval( m.msg );
        Msg.needmore = true;
    }
    else  if (m.code == "leave")
    {
        Msg.send({code:'unsubs',msg:tstmp});
        Msg.needmore = false;
        usingremote = false;
        myprompt("Remote control ended");
    }
}
var usingremote = false;
var oldcropuse = ResizeUploaded.cropuse;
ResizeUploaded.cropuse = function(t)
{
    oldcropuse(t);
    if (t == null || t==1)
    {
        appendfileto();
    }
}
var olddrawbw = ResizeUploaded.readbw;
ResizeUploaded.readbw = function()
{
    olddrawbw();
    appendfileto();
}
var closeprompt1 = closeprompt;
closeprompt = function()
{
    closeprompt1();
    canceldia(numbeing,cdbeing);
}
function showonlinetool(num)
{
    onlinetoolbase.style.visibility='visible';
    onlinetoolbarfollow($('e' + num ));
    oldonlinetoolmini($('tosmall'));
    var t = $('t' + num);
    var xy = findPositionnoScrolling(t);
    onlinetoolbase.style.top = (xy[1]-25) + 'px';
    onlinetoolbase.style.left = ( xy[0]) + 'px';
    onlinetoolbase.style.zIndex = '' + (2*numShapes + 4);
}
var oldonlinetoolmini = onlinetoolmini;
onlinetoolmini = function(t)
{
    if( t.value =='.')
    {
       oldonlinetoolmini(t);
       onlinetoolbase.style.visibility = "hidden";
    }
    else
    {
        oldonlinetoolmini(t);
    }

}

var Play =
{
    starttime: 0,
    idletime: 0,
    startunit: 0,
    handle: null,
    shorttime: 0,
    current: 'stop',
    state: 'begin',
    sel: null,
    nopath: ";stop,pause;stop,forward;stop,backward;stop,resume;start,resume;resume,resume;pause,start;pause,forward;pause,backward;pause,pause;forward,resume;backward,resume;",
    color: function (s)
    {
        var sel = $('selplay').getElementsByTagName('table')[0];
        for (var i = 0; i < 6; i++)
        {
            var x =  (''+sel.rows[i].cells[0].outerHTML).replace(/.*Play\.([a-z]+).*/, '$1');

            if (Play.nopath.indexOf(";" + s + ',' + x + ";") >= 0)
                 sel.rows[i].cells[0].style.color = '#cddcc2';
            else
                sel.rows[i].cells[0].style.color = colors[menufontcolor];//colors[menufontcolor];
        }
    },
    reinit: function (td)
    {
        var total = 75;
        if (td != null)
        {
            total = parseInt(td.parentNode.cells[1].innerHTML);
        }
        var lens = [];
        var W = 0;
         
        var xx = ',';
        for (var k=0; k < allies[pagenum].length; k++)
        {
            if (allies[pagenum][k].charAt(0)!='c')
            xx +=  allies[pagenum][k] + ','; 
        }
        for (var i = 0; i < numShapes; i++)
        {
            if (xx.indexOf(',' + i + ',')  < 0) xx +=  i + ",";
        }
        var yy =  xx.replace(/^,/,'').replace(/,$/,'').split(/,/);
        var jj = 0,ll=0; 
        for (k = 0; k < yy.length; k++)
        {
            var i = parseInt(yy[k]);
            if (allShapes[i] == null)
                continue;
            var j = allShapes[i].words.replace(/<[a-b]+[^>]*>/ig, '').replace(/<\/[a-b|0-9]+>/ig, '').length;
            if (j < 2 && allShapes[i].words.indexOf("http") == 0)
            {
                j = 50;
            }
            lens[i] = j;
            W += j;
        }
         
        var r = total / W;
        var p = 0;
        var sum = [], min = [], zo=[];
        for (k = 0; k < yy.length; k++)
        {
            var i = parseInt(yy[k]);
            if (allShapes[i] == null)
                continue;
            var j = whichally(i,1);
            var d = Math.round(r * lens[i]*10)/10;
            if (d == 0)
                d = 0.1;
             
            if (j > -1)
            {  
                if (sum[j]==null) sum[j] = d; else  sum[j] += d;
                if (min[j]==null) min[j] = p; else if (p > min[j]) min[j] = p;
                if (zo[j] == null) zo[j] = i;
            }
            else
            {
                allShapes[i].time = d;
                allShapes[i].start = p;
                allShapes[i].zindex = ''+i;
            }
            p += d;
        }
        for (k = 0; k < yy.length; k++)
        {
            var i = parseInt(yy[k]);
            if (allShapes[i] == null)
                continue;
            var j = whichally(i,1);
            if (j == -1) continue;
            allShapes[i].time = sum[j];
            allShapes[i].start = min[j];
            allShapes[i].zindex = ''+zo[j];
        }
        for (var i = 0; i < numLines; i++)
        {
            var l = allLines[i];
            if (l == null )
                continue;
            var k = l.startnum;
            var j = l.endnum;
            if (k == -1 || j == -1)
            {
                if (l.time == 2)
                    l.time = total;
                continue;
            }
            var dk = allShapes[k].start + allShapes[k].time;
            var dj = allShapes[j].start + allShapes[j].time;

            if (dk > dj)
            {
                allShapes[j].time += (dk - dj);
            } else if (dk < dj)
            {
                allShapes[k].time += (dj - dk);
            }
        }

        if (td != null)
        {
            Play.schedule();
        }
    },
    speedup:1,

    schedule: function (simple)
    {
        var m = 0;
        for (var i = 0; i < numShapes; i++)
        {
            if (allShapes[i] == null)
                continue;
            var d = allShapes[i].start + allShapes[i].time;
            if (m < d)
                m = d;
        }
        for (var i = 0; i < numLines; i++)
        {
            if (allLines[i] == null || allLines[i].startnum>-1 || allLines[i].endnum>-1)
                continue;
            var d = allLines[i].start + allLines[i].time;
            if (m < d)
                m = d;
        }
        for (var i = 0; i < numCurves; i++)
        {
            if (allCurves[i] == null )
                continue;
            var d = allCurves[i].start + allCurves[i].time;
            if (m < d)
                m = d;
        }
        var sim = '';
        var xs = textmsg[1772].split(/@/);
        var x = "<table align=center  ><tr><td   style=color:purple;font-size:14px;float:center>" + xs[7] + "</td></tr></table><table align=center  border=1 style=\"width:100%;border-collapse:collapse\"><tr><td  align=left bgcolor=lightblue><nobr><b>" + xs[8] + "</b></nobr></td><td id=totaltime align=center onclick=changeplaytime(this) bgcolor=white  width=50>" + d1(m) + "</td><td  align=center style=color:blue onclick=Play.reinit(this)><nobr>" + xs[9] + "</nobr></td><td align=center style=color:black  bgcolor=lightblue><nobr>" + xs[10] + "</nobr></td>"
                +"<td onclick=Play.changespeedup(this,-1) style=\"background-color:white;color:blue;font-weight:700\"  width=17>&lt;</td><td id=speednum align=center   bgcolor=transparent  width=17>" + Play.speedup + "</td><td onclick=Play.changespeedup(this,1) style=\"background-color:white;color:blue;font-weight:700\"  width=17>&gt;</td></tr></table>";
        x += "<table align=center border=1 style=\"border-collapse:collapse;margin:3px 0px 1px 0px\"><tr bgcolor=lightblue><td><nobr><b>" + xs[0] + "</b></nobr></td><td><nobr><b>" + xs[6] + "</b></nobr></td><td><nobr><b>" + xs[1] + "</b></nobr></td><td align=right><nobr><b>" + xs[2] + "</b></nobr></td><td align=right><nobr><b>" + xs[3] + "</b></nobr></td><td><nobr><b>" + xs[4] + "</b></nobr></td><td><nobr><b>" + xs[11] + "</b></nobr></td></tr>";
        var xx = ',';
        if (allies[pagenum]!=null)
        for (var k=0; k < allies[pagenum].length; k++)
        {
            if (allies[pagenum][k].charAt(0)!='c')
            xx +=  allies[pagenum][k] + ','; 
        }
        for (var i = 0; i < numShapes; i++)
        {
            if (xx.indexOf(',' + i + ',')  < 0) xx +=  i + ",";
        }
        var yy =  xx.replace(/^,/,'').replace(/,$/,'').split(/,/);
        var jj = 0,ll=0; 
        var bc = setdocbg1(); 
        for (k = 0; k < yy.length; k++)
        {
            var i = parseInt(yy[k]);
            jj = whichally(i,1); 
            ll = ''; if (jj > -1) ll = ':' + jj;
            if (allShapes[i] == null)
                continue;
            if (simple == null)
            {
                var l = allShapes[i].words.length;
                if (l > 15)
                    l = 15;
                var cln = '',bgc='';

                if (allShapes[i].bcolor>9)
                {
                    cln = ' class=shapebg' + (allShapes[i].bcolor-10) + " ";
                } 
                else if (allShapes[i].bcolor < 8)
                   bgc = ';background-color:' + bcolors[allShapes[i].bcolor];

                var str;
                if (allShapes[i].shapename == 'circle')
                    str ='<div ' + cln + ' style="width:15px;height:15px' + bgc + ';border-radius: 50%"></div>';
                else if (allShapes[i].shapename == 'egg')
                    str = '<div ' + cln + ' style="width:15px;height:10px' + bgc + ';border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;"></div>';
                else if (allShapes[i].shapename == 'hexgon')
                    str = '&#11041;';
                else if (allShapes[i].shapename == 'clouds')
                    str = '&#x2601;';
                else  if (allShapes[i].shapename == 'ellipse')
                   str = '<div ' + cln + ' style="width:15px;height:10px' + bgc + ';border-radius: 50%/50%;"></div>';
                else if (allShapes[i].shapename == 'diamond')
                    str =  '<div ' + cln + ' style=transform:scale(1.8,0.9);color:inherit >&diams;</div>';
                else if (allShapes[i].shapename == 'roundrect')
                    str = "<div " + cln +  " style=\"width:14px;height:10px" + bgc + ";border-radius:3px;border:1px " + colors[allShapes[i].color] + " solid\"><!----></div>";
                else
                    str = "<div " + cln + " style=\"width:14px;height:10px" + bgc + ";border:1px " + colors[allShapes[i].color] + " solid;\"><!----></div>";

                x += "<tr  bgcolor=lightyellow><td valign=middle style=color:#113344 align=right >" + i  + ll + "</td>";
                x += "<td  align=center " + bc[0] + " style=\"" + bc[1] + ";color:" + bcolors[allShapes[i].bcolor] + "\" ><nobr>" + str + "</nobr></td>";
                x += "<td  align=left  style=color:" + colors[allShapes[i].color] + "><nobr>" + allShapes[i].words.substring(0, l) + "</nobr></td>";
                x += "<td align=right  bgcolor=white ><table bgcolor=white align=right cellspacing=0 cellpadding=0><tr><td valign=middle align=right  bgcolor=white  onclick=changeord(this," + i + ",1)>" + Math.floor(allShapes[i].start) + "</td><td valign=middle align=right  bgcolor=white  onclick=changedecimal(this," + i + ",'o',1) width=20>." + Math.round((allShapes[i].start-Math.floor(allShapes[i].start))*10)  + "</td></tr></table></td>";
                x += "<td align=right  bgcolor=white ><table  bgcolor=white align=right cellspacing=0 cellpadding=0><tr><td valign=middle align=right  bgcolor=white  onclick=changetm(this," + i + ",1)>" + Math.floor(allShapes[i].time) + "<td valign=middle align=right  bgcolor=white  onclick=changedecimal(this," + i + ",'t',1) width=20>." + Math.round((allShapes[i].time-Math.floor(allShapes[i].time))*10)  + "</td></tr></table></td>";
                x += "<td valign=middle align=right  bgcolor=white  onclick=changeZ(this," + i + ",1)>" + allShapes[i].zindex + "</td>";
                x += "<td valign=middle align=right  bgcolor=white style=color:blue onclick=mmdia(" + i + ",1)> &gt;&gt; </td>"; 
                x +="</tr>";
            }
            else{
                var cl = ''; 
                if (allShapes[i].bcolor==8) 
                    cl = 'transparent';
                else if (allShapes[i].bcolor<8) 
                    cl = bcolors[allShapes[i].bcolor];
                sim += i+ ll + ","; 
                sim += allShapes[i].shapename + "."   + cl.replace(/#/,'') + ","; 
                sim +=  allShapes[i].words.length + ","; 
                sim +=  allShapes[i].start.toFixed(2)  + ","; 
                sim +=  allShapes[i].time.toFixed(2) + ","; 
                sim +=  allShapes[i].zindex + ";";
            
            }
        }
         for (var i = 0; i < numLines; i++)
        {
            if (allLines[i] == null || allLines[i].startnum>-1 || allLines[i].endnum>-1)
                continue;
            var pn = picname(allLines[i].type);
            if (pn == '') pn = '---';else if (pn=='arrow'||pn=='>') pn = '&rarr;';
             else if (pn == 'm') pn = '--m';else   pn = '--'+pn;
            var str = "--";
            if (simple == null)
            {
                x += "<tr  bgcolor=lightyellow><td valign=middle  style=color:#113344  align=right >" + i  +   "</td>";
                x += "<td  align=center  " + bc[0] + " style=\"" + bc[1] + ";" + colors[allLines[i].color] + "\"><nobr>" + pn + "</nobr></td>";
                x += "<td  align=left style=color:" + colors[allLines[i].color] + ">(" + allLines[i].sx + "," + allLines[i].sy + ")</td>";
                x += "<td align=right  bgcolor=white ><table bgcolor=white align=right cellspacing=0 cellpadding=0><tr><td valign=middle align=right  bgcolor=white  onclick=changeord(this," + i + ",2)>" + Math.floor(allLines[i].start) + "</td><td valign=middle align=right  bgcolor=white  onclick=changedecimal(this," + i + ",'o',2) width=20>." + Math.round((allLines[i].start-Math.floor(allLines[i].start))*10)  + "</td></tr></table></td>";
                x += "<td align=right  bgcolor=white ><table  bgcolor=white align=right cellspacing=0 cellpadding=0><tr><td valign=middle align=right  bgcolor=white  onclick=changetm(this," + i + ",2)>" + Math.floor(allLines[i].time) + "<td valign=middle align=right  bgcolor=white  onclick=changedecimal(this," + i + ",'t',2) width=20>." + Math.round((allLines[i].time-Math.floor(allLines[i].time))*10)  + "</td></tr></table></td>";
                x += "<td valign=middle align=right  bgcolor=white  onclick=changeZ(this," + i + ",2)>" + allLines[i].zindex + "</td>";
                x += "<td valign=middle align=right  bgcolor=white style=color:blue onclick=mmdia(" + i + ",2)> &gt;&gt; </td>"; 
                x +="</tr>";
            }
            else
                sim += i + "," + pn.replace(/&/,'@').replace(/;/,'') + "." 
                    + colors[allLines[i].color].replace(/#/,'') + "," 
                    + Math.round(Math.sqrt((allLines[i].sx-allLines[i].ex)*(allLines[i].sx-allLines[i].ex) + (allLines[i].sy-allLines[i].ey)*(allLines[i].sy-allLines[i].ey))).toFixed(0) + "," 
                    + allLines[i].start.toFixed(2) + "," 
                    + allLines[i].time.toFixed(2) + "," 
                    + allLines[i].zindex + ";";
        }
        xx = ',';
        
        for (var k=0; k < allies[pagenum].length; k++)
        {
            if (allies[pagenum][k].charAt(0)=='c')
            xx +=  allies[pagenum][k].replace(/^c,/,'') + ','; 
        }
        for (var i = 0; i < numCurves; i++)
        {
            if (xx.indexOf(',' + i + ',')  < 0) xx +=  i + ",";
        }
        var yy =  xx.replace(/^,/,'').replace(/,$/,'').split(/,/);
        var jj = 0,ll=0; 
        for (k = 0; k < yy.length; k++)
        {
            var i = parseInt(yy[k]);
            jj = whichally(i,4); 
            if (jj==-1) ll = '';
            else ll = ':' + jj;
            if (allCurves[i] == null)
                continue;
            var pn = '';
            if (allCurves[i].type=='curve') pn = "&ac;";
            else if(allCurves[i].type=='mline') pn = "&ang;";
            else if (allCurves[i].type=='dotted') pn = "&homtht;";
            else if (allCurves[i].type=='dotline') pn = "&there4;";
            else if (allCurves[i].type=='smooth') pn = "&acd;";
            else pn = "&minusd;";
            if (simple == null)
            {
                x += "<tr  bgcolor=lightyellow><td valign=middle  style=color:#114444  align=right >" + i  + ll+  "</td>";
                x += "<td  align=center  " + bc[0] + " style=\"" + bc[1] + ";color:" + colors[allCurves[i].color] + "\"><nobr>" + pn + "</nobr></td>";
                x += "<td  align=left style=color:" + colors[allCurves[i].color] + ">(" + allCurves[i].points[0][0] +","+ allCurves[i].points[0][1] + ")</td>";
                x += "<td align=right  bgcolor=white ><table bgcolor=white align=right cellspacing=0 cellpadding=0><tr><td valign=middle align=right  bgcolor=white  onclick=changeord(this," + i + ",4)>" + Math.floor(allCurves[i].start) + "</td><td valign=middle align=right  bgcolor=white  onclick=changedecimal(this," + i + ",'o',4) width=20>." + Math.round((allCurves[i].start-Math.floor(allCurves[i].start))*10)  + "</td></tr></table></td>";
                x += "<td align=right  bgcolor=white ><table  bgcolor=white align=right cellspacing=0 cellpadding=0><tr><td valign=middle align=right  bgcolor=white  onclick=changetm(this," + i + ",4)>" + Math.floor(allCurves[i].time) + "<td valign=middle align=right  bgcolor=white  onclick=changedecimal(this," + i + ",'t',4) width=20>." + Math.round((allCurves[i].time-Math.floor(allCurves[i].time))*10)  + "</td></tr></table></td>";
                x += "<td valign=middle align=right  bgcolor=white  onclick=changeZ(this," + i + ",4)>" + allCurves[i].zindex + "</td>";
                x += "<td valign=middle align=right  bgcolor=white style=color:blue onclick=mmdia(" + i + ",4)> &gt;&gt; </td>"; 
                x +="</tr>";
            }
            else
                sim += i + ll + ",c"   + pn.replace(/&/,'@').replace(/;/,'') + "."+ colors[allCurves[i].color].replace(/#/,'') +"," + allCurves[i].points.length + "," + allCurves[i].start.toFixed(2) + "," + allCurves[i].time.toFixed(2) + "," + allCurves[i].zindex +";";
        }
        if (simple == null)
            myprompt(x + "</table>", null, null, xs[5]);
        else
            return sim;
    },
    changespeedup: function(s, k)
    {
        Play.speedup += k;
        if (Play.speedup==0) Play.speedup = 1;
        if (Play.speedup==7 || Play.speedup==9 || Play.speedup==11) Play.speedup += k;
        if (Play.speedup >= 13) Play.speedup = 12;
        s.parentNode.cells[5].innerHTML = '' + Play.speedup;

    },
    navpagenum:-1,
    pageicon:function()
    {
        makepagetab();
    },
    sendnewsch:function()
    {
        var y = Play.schedule(1);
        Msg.send({code:'plain', msg:y});
    },
    select:function()
    {
       showbig(Play.navpagenum);
       Play.navpagenum=-1;
       Play.stop();
       Play.sendnewsch();
    },
    pagedown:function()
    {
        if (Play.navpagenum==-1)
            Play.navpagenum = pagenum;

        var N = pagetbl.rows.length - 1;
        var icon = $('icon' + Play.navpagenum);
        if (icon!=null)
        {
        icon.style.backgroundColor = "white";
        Play.navpagenum = (Play.navpagenum+1)%N;
        icon = $('icon' + Play.navpagenum);
        icon.style.backgroundColor = "#aaaaaa";
        }
    },
    pageup:function()
    {
        if (Play.navpagenum==-1)
        {
            Play.navpagenum = pagenum;
        }

        var N = pagetbl.rows.length - 1;
        var icon = $('icon' + Play.navpagenum);
        if (icon!=null)
        {
        icon.style.backgroundColor = "white";
        Play.navpagenum = (Play.navpagenum+1)%N;
        icon = $('icon' + Play.navpagenum);
        icon.style.backgroundColor = "#aaaaaa";
        }
    },
    stop: function ()
    {
        if (!Play.cando('stop'))
            return;
        Play.hideother(false,false);
        Play.current = 'stop';
        Play.color('stop');
        if (Play.handle != null)
            clearInterval(Play.handle);
        Play.handle = null;
        Play.starttime = 0;

        for (var i = 0; i < numShapes; i++)
        {
            if (allShapes[i] != null)
            {
                allShapes[i].visible = 1;
                hideshow(i);
            }
        }
        for (i = 0; i < numLines; i++)
        {
            if (allLines[i] != null)
            {
                allLines[i].visible = 0;
                hideLine(i);
            }
        }
        sendObject(-2,'Play.stop()');
       
    },
    stopfordel: function ()
    {
        if (!Play.cando('stop'))
            return;
        Play.hideother(false,true);
        Play.current = 'stop';
        Play.color('stop');
        if (Play.handle != null)
            clearInterval(Play.handle);
        Play.handle = null;
        Play.starttime = 0;
        sendObject(-2,'Play.stop()');
    },
    numob:0,
    cando: function (str)
    {
        var x = ";" + Play.current + "," + str + ";";
        var y = Play.nopath.indexOf(x);
        return (y < 0);
    },
    backward: function ()
    {
        if (!Play.cando('backward'))
            return;
        Play.current = 'backward';
        Play.color('backward');
        
        if (Play.pregress == 1)
        {
            if (Play.handle != null)
            {
            clearInterval(Play.handle);
            Play.handle = null;
            }
            Play.pregress = 0;
            Play.prevpage();
        } 
        else
        {
           for (var i = 0; i < numShapes; i++)
          {
           allShapes[i].base.style.animation = null;
           allShapes[i].base.style.visibility = 'hidden';
           allShapes[i].visible = 0;
          }
          for (var i = 0; i < numLines; i++)
          {
             allLines[i].visible = 1;
             hideLine(i);
          }
          if (Play.handle != null)
            {
            clearInterval(Play.handle);
            Play.handle = null;
            }
           var N = Play.pregress-2;
           Play.pregress = 0;
           for (var j=0; j < N; j++)
               Play.playsh(false);
           Play.playsh();
           Play.handle = setInterval(Play.playsh, 6000/Play.speedup);
        }
         sendObject(-2,'Play.backward()');
    },
    forward: function ()
    {
        if (!Play.cando('forward'))
            return;
        Play.current = 'forward';
        Play.color('forward');
        if (Play.handle != null)
        {
            clearInterval(Play.handle);
            Play.handle = null;
        }
        while (Play.pregress<Play.showbar.length || Play.pregress<Play.hidebar.length)
        {
            if (Play.showbar[Play.pregress]==null && Play.hidebar[Play.pregress]==null)
                Play.pregress++;
            else break;
        }
        if (Play.pregress<Play.hidebar.length)
        {
            Play.playsh();
            if (Play.handle != null)
            {
                clearInterval(Play.handle);
            }
            Play.handle = setInterval(Play.playsh, Math.round(6000/Play.speedup));
        }
        else
        {
            if (Play.handle != null)
            {
                clearInterval(Play.handle);
            }
            Play.nextpage();
        }
        sendObject(-2,'Play.forward()');
    },
    tblhtml:[],
    hideother:function(b,big)
    {
       if (editable == false) return;
       var tds = ['tdfile','tdclip', 'tdline','tdcurve','tdbg','tdcf','tdicon'];
       if (big)
           tds = ['tdfile','tdclip','tdpage', 'tdline','tdcurve','tdbg','tdcf','tdicon','tdcord'];
       var tbl = $("toolbar");
       if (b)
       for (var j=0; j < tbl.rows[0].cells.length; j++)
       {
           Play.tblhtml[j] = tbl.rows[0].cells[j].innerHTML;
       }
       for (var j=0; j < tds.length; j++)
       {
           var x = $(tds[j]);
           if (x!=null )
           {
               tbl = x.parentNode.parentNode.parentNode;
               x.style.visibility = b?'hidden':'visible';
           }
       }
       if (b)
       {
           var k=1;
           for (var j=0; j < tbl.rows[0].cells.length; j++)
           {
               var xx = tbl.rows[0].cells[j].id;
               if (tds.includes(xx))
              {
                 tbl.rows[0].cells[j].innerHTML = '';
                 tbl.rows[0].cells[j].width = 0;
              }
           }
       }
       else
       {
           for (var j=0; j < tbl.rows[0].cells.length; j++)
           {
              if (tbl.rows[0].cells[j].innerHTML=='')
              {
                  tbl.rows[0].cells[j].innerHTML = Play.tblhtml[j];
                  tbl.rows[0].cells[j].width = ''; 
              }
           }
       }
    },
    prevpage: function ()
    {
        if (pagenum > 0)
        {
            Play.stop();
            changepage(pagetbl.rows[pagenum-1].cells[0]);
            Play.play();
        } else if (Play.handle != null)
        {
            clearInterval(Play.handle);
            Play.handle = null;
        }
        if (usingremote)Play.sendnewsch();
        return;
    },
    nextpage: function ()
    {
        if (pagenum < pagetbl.rows.length-2)
        {
            Play.starttime == 0;
            var xt = pagetbl.rows[pagenum+1].cells[0];
            var xx = xt.innerHTML;
            changepage(xt);
            Play.start();
        } else if (Play.handle != null)
        {
            clearInterval(Play.handle);
            Play.handle = null;
        }
        $('selpage').style.visibility = 'hidden';
        if (usingremote)Play.sendnewsch();
        return;
    },
    keepgoing:false,
    pause: function ()
    {
        if (Play.starttime == 0)
            return;
        if (!Play.cando('pause'))
            return;
        Play.current = 'pause';
        Play.color('pause');
        Play.keepgoing = false;
        Play.idletime = (new Date()).getTime();
        Play.shorttime = Play.idletime - Play.startunit;
         sendObject(-2,'Play.pause()');
    },
    resume: function ()
    {
        if (Play.starttime == 0)
            return;
        if (!Play.cando('resume'))
            return;
        Play.current = 'resume';
        Play.color('resume');
        var rightnow = (new Date()).getTime();
        Play.starttime += rightnow - Play.idletime;
        Play.startunit += rightnow - Play.idletime;
        Play.keepgoing = true;
       // setTimeout(Play.play, 6000/Play.speedup - Play.shorttime%(6000/Play.speedup));
        sendObject(-2,'Play.resume()');
    },
    showbar:[],
    hidebar:[],
    lengthy:[],
    updatesch: function()
    {
       Play.showbar=[];
       Play.hidebar=[];
       Play.lengthy=[];
       for (var i = 0; i < numShapes; i++)
       {
           allShapes[i].base.style.animation = null;
           allShapes[i].base.style.visibility = 'hidden';
           var j = Math.round(allShapes[i].start/0.1);
           var s = Play.showbar[j];
           if (s == null) Play.showbar[j] = 's'+i;
           else  Play.showbar[j] += ",s" + i;
           j = Math.round((allShapes[i].start + allShapes[i].time)/0.1);
           s = Play.hidebar[j];
           if (s == null) Play.hidebar[j] = 's'+i;
           else  Play.hidebar[j] += ",s" + i;
       }
       for (var i = 0; i < numCurves; i++)
       {
           if (allCurves[i]==null) continue;
           var j = Math.round(allCurves[i].start/0.1);
           var s = Play.showbar[j];
           if (s == null) Play.showbar[j] = 'c'+i;
           else  Play.showbar[j] += ",c" + i;
           j = Math.round((allCurves[i].start + allCurves[i].time)/0.1);
           s = Play.hidebar[j];
           if (s == null) Play.hidebar[j] = 'c'+i;
           else  Play.hidebar[j] += ",c" + i;
           allCurves[i].hide();
       }
       for (var i = 0; i < numLines; i++)
       {
           if (allLines[i]==null || allLines[i].startnum>-1 || allLines[i].endnum > -1)
               continue;
           var j = Math.round(allLines[i].start/0.1);
           var s = Play.showbar[j];
           if (s == null) Play.showbar[j] = 'l'+i;
           else  Play.showbar[j] += ",l" + i;
           j = Math.round((allLines[i].start + allLines[i].time)/0.1);
           s = Play.hidebar[j];
           if (s == null) Play.hidebar[j] = 'l'+i;
           else  Play.hidebar[j] += ",l" + i;
           allLines[i].hide();
       }
       for (var k=0; k < Play.showbar.length; k++)
       {
           var j = 0, t=0;
           Play.lengthy[k] = 1;
           if (Play.showbar[k] == null) continue;
           j = k+1;
           while (j < Play.showbar.length && Play.showbar[j]==null && j < Play.hidebar.length && Play.hidebar[j]==null)
           { Play.lengthy[k]++; j++;}
       }
       
    },
    start: function ()
    {
       Play.updatesch();
       Play.hideother(true,false);
        if (!Play.cando('start'))
        {
            alert('can not start');
            return;
        }
        Play.current = 'start';
        Play.color('start');
        Play.starttime = 0;
        if (Play.handle != null)
            clearInterval(Play.handle);
        
        for (var i = 0; i < numLines; i++)
        {
            if (allLines[i] != null && (allLines[i].startnum>-1 || allLines[i].endnum>-1))
            {
                allLines[i].visible = 1;
                hideLine(i);
            }
        }
        Play.pregress = 0;
        Play.keepgoing = true;
        Play.playsh();
        Play.handle = setInterval(Play.playsh, 6000/Play.speedup);
        sendObject(-2,'Play.start()');
       /* 33('end', Play.stop);
        keymage('pagedown', Play.nextpage);
        keymage('pageup', Play.prevpage);
        keymage('right', Play.forward);
        keymage('left', Play.backward);
        keymage('left', Play.backward);*/
        
    },
    pregress:0,
    remaining:0,
    playsh: function(nostopping)
    {
        if (Play.keepgoing == false) return;
        var i = Play.pregress++;
        var str =Play.showbar[i];  
        if (str!=null)
        {
            var xs = str.split(/,/);
            for (var j =0; j < xs.length; j++)
            {
                var type= xs[j].charAt(0);
                var k = parseInt(xs[j].substring(1));
                if (nostopping!=null || type != 's')
                {
                    if (type=='s')
                       allShapes[k].visible = true;
                    else if (type=='c')
                    try{ allCurves[k].show();}catch(e){ }
                    else 
                       allLines[k].show();
                }
                else 
                {
                    allShapes[k].animates();
                   
                }
            }
            Play.remaining = Play.lengthy[i] ;
        }
        else
        {
            Play.remaining--;
        }
        var s = Math.round(Play.remaining*6/Play.speedup);
        if (s > 60){ var m = (Math.floor(s/60));
           cord.innerHTML = m + "'" + (s%60) + '"';}
        else  cord.innerHTML = s + '"';
        str =Play.hidebar[i]; 
        var mx = 0;
        if (str!=null)
        {
            var xs = str.split(/,/);
            for (var j =0; j < xs.length; j++)
            {
                var type= xs[j].charAt(0);
                var k = parseInt(xs[j].substring(1));
                if (nostopping!=null || type != 's')
                {   
                    if (type=='s')
                        allShapes[k].visible = false;
                    else if (type=='c')
                        try{ allCurves[k].hide();}catch(e){ }
                    else allLines[k].hide();
                }
                else
                {    
                    allShapes[k].leaves();
                    var kframe = kframes[pagenum + '_' + allShapes[k].num];
                    if (kframe!=null)
                    {
                       var min = kframe.ltm;
                       if (min > mx ) mx = min;
                    }
                }
            }
        }
        if (Play.hidebar==null)
        {
           ; 
        }
        else  if (i < Play.hidebar.length-1)
        {
           ;
        }
        else
        {
            if (pagenum < shapearr.length - 1)
            {
                if (min == 0)
                    Play.nextpage();
                else 
                    setTimeout(Play.nextpage, 1000*min);
            }
            else
            {
                clearInterval(Play.handle);
            }
        }
    },
    appear: function (n)
    {
       allShapes[n].visible = 1; 
       allShapes[n].base.style.visibility = 'visible';
    },
    disappear: function (n)
    {
       allShapes[n].visible = 0; 
       allShapes[n].base.style.visibility = 'hidden';
    },
    remoteway:1,
    remote: function ()
    {
        var y = Play.schedule(1);  
        var url = locationstr + "/remote.jsp?t=" + tstmp + '&schedule=' + y.replace(/;$/, '') + "&current=" + Play.current;
        open(url, iframename);
    },
    initRemote: function (securitytoken, uid, sek)
    {
        Msg.init({stoken: securitytoken,
            app: "chat",
            tid: '',
            sid: uid,
            sname: uid,
            rid: '',
            code: '',
            msg: '',
            sek: sek});
        Msg.needmore = true;
        Msg.listen();
        Msg.send({code: 'new', msg: '' + tstmp});

    },
    endRemote: function ()
    {
        Msg.send({code: 'unsubs', msg: Msg.tid});
    },
    quitremote: function ()
    {
        open(originalurl + "/remote.jsp?t=" + tstmp + "&schedule=", 'w' + tstmp);
        closeprompt();
    }


}

var needtranslator = true;
initfilename();
makebtns();
makeframe();
initialdraw();
makemenu2();
pagetbl  = $('selpage').getElementsByTagName('table')[0];

changefontfamily();

if ( document.body.style.backgroundImage == 'url()' || document.body.style.backgroundImage == '')
{
    document.body.style.backgroundImage = null;
}
if (chatsessionnum==-1)
Play.color('stop');
if (editable)
{
    window.onunload = savetocache;
}
var countex = 0;
var tenexechandle;
function tenexec()
{
   countex++;
   if (countex==4)
   {
       fixall();
       clearInterval(tenexechandle);
   }
}
var oldonload4 = window.onload;
function passcache(v)
{
    //let y = document.location.toString().replace(/&pass/,'');
    //var short = new Shorty();
    let contents = lzw_decode(v);//$("savearea").value);
    //$("savearea").value = (contents);
    localStorage[filename] =  contents;
    document.location.href = document.location.toString().replace(/&pass/,'');
}
window.onload  = function()
{
    onlinetoolbarhas = true;
    if (oldonload4!=null) oldonload4();
    if (document.location.toString().indexOf("&pass")>0)
    {
        myprompt("Press Ctrl-V and click the Proceed button.","","passcache(v)","Do Ctrol-V");//<br><textarea id=\"savearea\" rows=1 cols=60 onchange=passcache() onload=this.focus()></textarea>", "passcache()",<br><center><input type=button style=\"background-color:#00BBBB;color:white;width:90px;border:1px #b0b0b0 outset;border-radius:3px\" value=\"Open\" onclick=\"passcache()\" ></center>");
        $("promptinput").focus();
        //document.execCommand("paste");
        //passcache();
        return;
    }
    if (shapearr.length==0 && chatsessionnum==-1)
    {
        trydemo();
    }
    else
    {
        if (document.location.toString().indexOf("http")!=0)
        {
            myprompt("<textarea id=savearea cols=40 rows=2 ></textarea><br>You are opening the file from local disk. To edit it further, click the link to use designated web application to open it<br><a href=javascript:openremote()>" + originalurl + "</a>");
            $("savearea").value = tojson();
        }
    }
    //else  tenexechandle = setInterval(tenexec,100);//fixall();
    
}
function openremote()
{
  var copyText = document.getElementById("savearea");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  
  open(originalurl + "/umltool.html?fn=" + filename + "&lang=" + getlang() + "&pass", "_self");
  
}
var oldpagenum;
function copyapage(xys)
{
   var str = '';
   var x,y;
   var mx = 0, my=0;
   var had = [];
   var N = numShapes;
   for (var  j=0; j<N;j++)
   {
       x = $('b'+j);
       if (x==null) continue;
       var tt = x.style.left;
       if (tt == null) continue;
       tt = parseInt(tt.replace(/px/,'')) - xys[0];
       x.style.left = tt + 'px';
       tt = x.style.top;
       if (tt == null) continue;
       tt = parseInt(tt.replace(/px/,'')) - xys[1];
       x.style.top = tt + 'px';
       var t = x.outerHTML.replace(/ id=["]?[a-z|0-9]+["]? /gi," ").replace(/ onclick="[^"]+"/ig," ").replace(/ ondragstart="[^"]+"/ig," ").replace(/ ondragend="[^"]+"/ig," ");
       str += myformatele1(t,ismakingtab);
   }
   xys[0] = mx+20; xys[1] = my+20;
   return (str);
}
var haspagetab = false;
function makepagetab1()
{
    if(haspagetab == false)
        makepagetab();
    else
    {
        showbig(oldpagenum);
    }
}
function makemini()
{
    let tt = "";
    let arr = shapearr[0];
    for (let i=0; i < arr.length; i++)
    {
        tt += (new CSVParse(arr[i], "'", ",")).nextElement() + "<br>";
    }
    return tt;
        
}
function makepagetab()
{
    if (haspagetab == false)
    {
        if (pagetbl.rows.length  <= 2) return;
        ismakingtab = 160/thispagewidth();
        oldpagenum = pagenum;
        pagenum = -1; 
        for (var j=0; j < pagetbl.rows.length-1;j++)
        {
            changepage(pagetbl.rows[j].cells[0]);
            var m = 0;
            var wn = 10000, wx=-1, hn=10000, hx=-1;
            for (var i = 0; i < numShapes; i++)
            {
                if (allShapes[i].x < 0) allShapes[i].delme();
            }
            var jj = 0;
            for (var i = 0; i < numShapes; i++)
            {
                if (allShapes[i] == null  )
                    continue;
                var d = allShapes[i].start + allShapes[i].time;
                if (m < d)
                    m = d;
               
                if (allShapes[i].x!=null && allShapes[i].x < wn){
                   wn = allShapes[i].x;
                }
               if (allShapes[i].x!=null && allShapes[i].width!=null && allShapes[i].x + allShapes[i].width*1.5 > wx){
                   wx = allShapes[i].x + allShapes[i].width*1.5;
               }
                if (allShapes[i].y!=null && allShapes[i].y < hn){
                   hn = allShapes[i].y;
               }
               if (allShapes[i].y!=null &&  allShapes[i].height!=null && allShapes[i].y +  allShapes[i].height*1.5> hx){
                   hx = allShapes[i].y +  allShapes[i].height*1.5;
               }
            }
            
            var mstr = '';
            if (m>0)  mstr = (Math.round(10*m)/10) + "m";
            var xy = [wn,hn];
            var str = copyapage(xy);
            clearall(); 
            var icon = document.createElement('div');
            icon.id= 'icon' + j;
            var width0 = 160;
            var height0 = 100;
            var rate = 160/(wx-wn);
            if (rate >  100/(hx-hn)) rate = 100/(hx-hn);
            icon.style.cssText = "background:" + (oldpagenum==j?'#aaaaaa':'white') + ";position:absolute;width:"+ width0 + "px;height:" + height0 + "px;left:0px;top:" + (j*100) + "px;border:1px red solid;border-radius:3px;display:block;z-index:100";
            var width1 = (30*width0/160);
            var height1 = (20*height0/100);
            icon.innerHTML = "<div style=\"position:absolute;transform:scale(" + rate + "," + rate + ")\" >" + str + "</div>"
            +"<div style=\"position:absolute;left:0px;top:0px;width:" + width0 +"px;height:" + height0 +"px;vertical-align:top;background-color:transparent;z-index:126;text-align:right;color:#221100;font-size:" + (12*width0/160) + "px;\" onclick=showbig(" + j +")   onmouseout=\"javascript:this.parentNode.style.backgroundColor='white';\" onmouseover=\"javascript:this.parentNode.style.backgroundColor='#aaaaaa';\" >" + textmsg[1854].replace(/@/,''+(j+1)) + '<br> '+ mstr + "</div>";
            icon.onClick = function()
            {
                var pn = parseInt(this.id.substring(4));
                changepage(pagetbl.rows[pn].cells[0]);
               // changepagelbl(pagetbl.rows[pn].cells[0]);
            }
            document.body.appendChild(icon);
          //  if (icon.style.left != '0px') icon.style.left  = '0px';
        }
        haspagetab = true;
        changepage(pagetbl.rows[oldpagenum].cells[0]);
      //  changepagelbl(pagetbl.rows[oldpagenum].cells[0]);
       // document.getElementById('selplay').options[1].text = textmsg[1771].split(/@/)[9];

    }
    else
    {
        haspagetab = false;
        for (var j=0;  ;j++)
        {
            var x = document.getElementById('icon' + j);
            if (x == null) break;
            document.body.removeChild(x);
        }
        //document.getElementById('selplay').options[1].text = textmsg[1771].split(/@/)[8];
    }
}

function copyanarr(y)
{
    var ar = new Array(y.length);
    for (var j=0;j<y.length;j++) ar[j] = y[j];
    return ar;
}
function makepagesort()
{
    if (haspagetab) makepagetab();
    if (haspagesort == false)
    {

        if (pagetbl.rows.length  <= 2) return;
        var width0 = Math.round((screen.width-40)/6);
        var height0 = Math.round((screen.height-110)/6);
        ismakingtab = (screen.width-40)/6/thispagewidth();
        oldpagenum = pagenum;
      
        var wi=0, hi = 0;
        pagenum = -1;
        for (var j=0; j < pagetbl.rows.length-1;j++)
        {
            changepage(pagetbl.rows[j].cells[0]);
            var wn=100000,wx=-1,hn=100000,hx=-1;
            for (var i = 0; i < numShapes; i++)
            {
                if (allShapes[i] == null  )
                    continue;
                if (allShapes[i].x!=null && allShapes[i].x < wn){
                   wn = allShapes[i].x;
                }
               if (allShapes[i].x!=null && allShapes[i].width!=null && allShapes[i].x + allShapes[i].width*1.5 > wx){
                   wx = allShapes[i].x + allShapes[i].width*1.5;
               }
                if (allShapes[i].y!=null && allShapes[i].y < hn){
                   hn = allShapes[i].y;
               }
               if (allShapes[i].y!=null &&  allShapes[i].height!=null && allShapes[i].y +  allShapes[i].height*1.5> hx){
                   hx = allShapes[i].y +  allShapes[i].height*1.5;
               }
            }
            var icon = document.createElement('div');
            icon.id= 'icon' + j;
            icon.style.cssText = "background:white;position:absolute;width:"+ width0 + "px;height:" + height0 + "px;left:" + (wi*(width0+5)+5) + "px;top:" + (hi*(height0+5)+50) + "px;border:1px red solid;border-radius:5px;display:block;z-index:100";
            wi++;
            if ( wi == 6)
            {
                hi++;
                wi = 0;
            }
            var rate = width0/(wx-wn);
            if (rate > height0/(hx-hn)) rate = height0/(hx-hn);
            
            icon.innerHTML = "<div style=\"position:absolute;transform:scale(" + rate + "," + rate + ")\" >" + copyapage([wn,hn]) + "</div>"
           
            var width1 = (156*width0/160);
            var height1 = (96*height0/100);
           
            Drag.init(icon);
            document.body.appendChild(icon);
            delall();

            icon.onDragStart = function(x,y)
            {
                iconx = x;
                icony = y;
                var k =  parseInt(this.id.substring(4));
            }
            icon.onDragEnd = function(x,y)
            {
                var width0 = Math.round((screen.width-40)/6);
                var height0 = Math.round((screen.height-110)/6);
                var N = pagetbl.rows.length - 1;
                var k =  parseInt(this.id.substring(4)), k0 = k;
                for (k--; k>=0; k--)
                {
                    var c = $('icon' + k);
                    var cx = parseInt(c.style.left.replace(/px/i,''));
                    var cy = parseInt(c.style.top.replace(/px/i,''));
                    if ( Math.abs(cx-x) < width0 && Math.abs(cy-y) < height0 )
                    {
                        break;
                    }
                }
                if (k < 0)
                {
                    k=k0+1;
                    for (; k < N; k++)
                    {
                    var c = $('icon' + k);
                    var cx = parseInt(c.style.left.replace(/px/i,''));
                    var cy = parseInt(c.style.top.replace(/px/i,''));
                    if ( Math.abs(cx-x) < width0 && Math.abs(cy-y) < height0 )
                    {
                        break;
                    }
                    }
                }

                if (k>=0 && k < N && k!=k0)
                {
                    var delta = k>k0?1:-1;
                    var ar = copyanarr(shapearr[k0]);
                    var li = copyanarr(linearr[k0]);
                    var cu = copyanarr(curvearr[k0]);
                    var at =copyanarr(allies[k0]);
                    var bg = bgarr[k0];
                    while (true)
                    {
                        var j = k0 + delta;
                        shapearr[k0] = copyanarr( shapearr[j]);
                        linearr[k0] = copyanarr(linearr[j]);
                        curvearr[k0] = copyanarr(curvearr[j]);
                        allies[k0] = copyanarr(allies[j]);
                        bgarr[k0] = bgarr[j];
                        k0 = j;
                        if (j==k) break;
                    }
                    shapearr[k] =  (ar);
                    linearr[k] =  (li) ;
                    curvearr[k] =  (cu);
                    allies[k] = at;
                    bgarr[k] = bg;
                    for (var j=0;  ;j++)
                    {
                        var x = document.getElementById('icon' + j);
                        if (x == null) break;
                        document.body.removeChild(x);
                    }
                    haspagesort = false;
                    makepagesort();

                }
                else
                {
                    this.style.left = iconx + 'px';
                    this.style.top = icony  + 'px';
                }
            }
        }

        ismakingtab = 1;
        haspagesort = true;
       // changepage(pagetbl.rows[oldpagenum+1].cells[0]);
        $('selplay').getElementsByTagName('table')[0].rows[9].cells[0].innerHTML  = textmsg[1771].split(/@/)[14];
        Play.hideother(true,true);
    }
    else
    {
        Play.hideother(false,true);

        for (var j=0;  ;j++)
        {
            var x = document.getElementById('icon' + j);
            if (x == null) break;
            document.body.removeChild(x);
        }
        pagenum = -1;
        changepage(pagetbl.rows[oldpagenum].cells[0]);
        haspagesort = false;
        $('selplay').getElementsByTagName('table')[0].rows[9].cells[0].innerHTML = textmsg[1771].split(/@/)[13];
    }
}

function exitsort()
{
    if (haspagesort)
        makepagesort();
}
function showbig(pn)
{
     haspagesort = true;
     ismakingtab = 1;
     makepagetab();
     changepage(pagetbl.rows[pn].cells[0]);
     haspagesort = false;

}
document.onkeydown = overrideKeyboardEvent;
document.onkeyup = overrideKeyboardEvent;
var keyIsDown = {};

function overrideKeyboardEvent(e){
  switch(e.type){
    case "keydown":

      if(!keyIsDown[e.keyCode])
      {
        keyIsDown[e.keyCode] = true;

        if (Play.remoteway==1)
        {

            if (e.keyCode == 33 && Play.starttime>0)
            {

             Play.backward();
             disabledEventPropagation(e);
             e.preventDefault();
             return false;
            }
            else if (e.keyCode == 34 && Play.starttime>0)
            {
             Play.forward();
             disabledEventPropagation(e);
             e.preventDefault();
             return false;
             }
        }
        else
        {
        if (e.keyCode == 36)
        {
             Play.start();
             disabledEventPropagation(e);
             e.preventDefault();
             return false;
        }
        else if (e.keyCode == 35 && Play.starttime>0)
        {
            Play.stop();
            disabledEventPropagation(e);
            e.preventDefault();
            return false;
        }
        else if (e.keyCode == 34 && Play.starttime>0)
        {
            Play.nextpage();
             disabledEventPropagation(e);
  e.preventDefault();
  return false;}
        else if (e.keyCode == 33 && Play.starttime>0)
        {
            Play.prevpage();
             disabledEventPropagation(e);
  e.preventDefault();
  return false;
        }
        else if (e.keyCode == 37 && Play.starttime>0)
        {
            Play.backward();
             disabledEventPropagation(e);
  e.preventDefault();
  return false;
        }
        else if (e.keyCode == 39 && Play.starttime>0)
        {
            Play.forward();
             disabledEventPropagation(e);
  e.preventDefault();
  return false;
        }
        else if (e.keyCode == 38 && $('icon0')!=null)
        {
            Play.pageup();
             disabledEventPropagation(e);
  e.preventDefault();
  return false;
        }
        else if (e.keyCode == 40 && $('icon0')!=null)
        {
            Play.pagedown();
             disabledEventPropagation(e);
  e.preventDefault();
  return false;
        }
        else if (e.keyCode == 45)
        {

             makepagetab();
             disabledEventPropagation(e);
             e.preventDefault();
             return false;
        }
        else if (e.keyCode == 13 && $('icon0')!=null)
        {
               Play.select();
                disabledEventPropagation(e);
  e.preventDefault();
  return false;
           }
        else
        {
            return true;
        }
        }
      }
    break;
    case "keyup":
      delete(keyIsDown[e.keyCode]);
      // do key up stuff here
    break;
  }
  return true;
}
function disabledEventPropagation(e){
  if(e){
    if(e.stopPropagation){
      e.stopPropagation();
    } else if(window.event){
      window.event.cancelBubble = true;
    }
  }
}

function showhintstr(dv,msg)
{
    if(shapearr.length>2) return;
    if ($('hinttext')!=null) hidehint();
    var xy = findPositionnoScrolling(dv);
    var d = document.createElement('span');
    d.style.cssText = 'background-color:white;color:#444444;border:1px #9988aa solid;font-size:16px;position:absolute;top:5px;left:' + (xy[0]+dv.offsetWidth + 2) + 'px;box-shadow:1px 1px #bbbbbb;height:22px;line-height:22px';
    d.id='hinttext';
    d.innerHTML = msg;
    document.body.appendChild(d);
}
function showhint1(msg,dv)
{
    hidehint1();
    dv = dv.parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling;
    var xy = findPositionnoScrolling(dv);
    var d = document.createElement('span');
    d.style.cssText = 'z-index:200;background-color:white;color:#444444;border:1px #9988aa solid;font-size:16px;position:absolute;top:' + (xy[1]+20 ) + 'px;left:' + (xy[0] +4) + 'px;box-shadow:1px 1px #bbbbbb;height:22px;line-height:22px';
    d.id='hinttext';
    d.innerHTML = msg;
    document.body.appendChild(d);
}
function hidehint()
{
   if(shapearr.length==3)
   {
       for(var l=0; l < 14; l++)
           hintstr[l] = '';
   }
   if(shapearr.length>3) return;
   var x = $('hinttext');
   if (x!=null) document.body.removeChild(x);

}
function hidehint1()
{
   var x = $('hinttext');
   if (x!=null) document.body.removeChild(x);

}


function trydemo()
{
    if (opener!=null && typeof(opener.demokeyframen)!='undefined' &&  opener.demokeyframen > 0)
    {
        demospeedup = opener.demospeedup;
        demo();
    }
    else
    {
        myprompt(hintstr[0], null, "if(v)demo();else newshape($('tdicon'));");
    }
}
demo = function()
{
   demoinitcursor(originalurl + "/");
   demosch();
}
var thetbl0;
function getsubtable(k,j,cd)
{
    thetbl0 = $('m' + k + '_' + cd).getElementsByTagName('table')[0];
    thetbl0 = thetbl0.rows[j].cells[0].getElementsByTagName('table')[0];
}
demotasks = [
["democursorx = 400;democursory = 300;democursor2($('tdicon'))", 0],
["demoheight(0.7); newshape($('tdicon'))", 3000],
["demoheight();democursor2($('helpbtn'))",500],
['demoheight(0.7);helpstr(0);tm = parseInt(promptwin.style.zIndex) + 1; democursorsim.style.zIndex = tm',3000],
['demoheight();democursor2(promptwin)',500],
['democursor2(democursorx, democursory + promptwin.offsetHeight/2-15)', 3000],
['demoheight(0.7);example(0)', 3000],
["demoheight();democursor2($('donebtn'))", 500],
['demoheight(0.7);done(0);closeprompt()', 3000],
["demoheight();democursor2($('donebtn'))", 500],
['demoheight(0.7);done(0)', 1000],
//["demoheight();democursor2($('b0'))",500],
//["demoheight(0.7);closeprompt(); myHintx = democursorx;myHinty = democursory; mdia(0,1)", 2000],
["demoheight();getsubtable(0,2,1);democursor2(thetbl0.rows[0].cells[2])", 500],
['demoheight(0.7);thetbl0.rows[0].cells[2].click()', 3000],
["demoheight();getsubtable(0,3,1);democursor2(thetbl0.rows[0].cells[3])", 500],
['demoheight(0.7); thetbl0.rows[0].cells[3].click()', 2000],
["demoheight();getsubtable(0,4,1);democursor2(thetbl0.rows[0].cells[2])",500],
['demoheight(0.7);thetbl0.rows[0].cells[2].click()', 2000],
["demoheight();getsubtable(0,5,1);democursor2(thetbl0.rows[0].cells[3])",500],
['demoheight(0.7); thetbl0.rows[0].cells[3].click()', 2000],
["demoheight();getsubtable(0,2,1);democursor2(thetbl0.rows[0].cells[0])", 500],
["demoheight(0.7); thetbl0.rows[0].cells[0].click()", 3000],
["demoheight();getsubtable(0,6,1);democursor2(thetbl0.rows[0].cells[1])", 500],
["demoheight(0.7); thetbl0.rows[0].cells[1].click()", 2000],
["demoheight();getsubtable(0,8,1);democursor2(thetbl0.rows[2].cells[0])",500],
['demoheight(0.7); canceldia(0,1)', 2000],
["demoheight();democursor2($('b0'),2)",500],
["demoheight(0.7);democursor2(democursorx+500,democursory)",500],
["$('b0').style.left = (democursorx-100) + 'px';$('b0').style.top = (democursory-100) + 'px';allShapes[0].x=(democursorx-100);allShapes[0].y=(democursory-100)", 4000],
["demoheight();democursor2($('tdicon'))", 500],
["demoheight(0.7); newshape($('tdicon'))", 3000],
["demoheight();democursor2($('e1'))",500],
["demoheight(0.7); $('e1').focus()", 2000],
["demoheight();$('e1').value=originalurl+'/image/tm.gif'",500],
["demoheight();democursor2($('donebtn'))", 500],
['demoheight(0.7);done(1)', 3000],
["thetbl0=getelebyname($('t1'),'opts0');democursor2(thetbl0,2)",1000],
["demoheight(0.7);thetbl0.checked=true;chooseurlas(0,1);thetbl0=getelebyname($('t1'),'aswidth')", 3000] ,
["demoheight();democursor2(thetbl0,2)",500],
["demoheight(0.7);thetbl0.value='400'", 3000],
["demoheight();dourlaswidth(thetbl0,0);",1000],
["demoheight();democursor2($('donebtn'))", 500],
['demoheight(0.7);done(1)',2000],
["demoheight();getsubtable(1,8,1);democursor2(thetbl0.rows[1].cells[1])",2000],
['demoheight(0.7); canceldia(1,1)',3000],
["demoheight();thetbl0=$('tdline');democursor2(thetbl0,2)",500] ,
["demoheight(0.7);thetbl0=$('tdline');select(thetbl0,0,0)", 3000],
["demoheight();democursor2($('b0'),2)", 500],
["demoheight(0.7);begindraw($('b0'))", 3000],
["demoheight();democursor2($('b1'),2)", 2000],
["demoheight(0.7);begindraw($('b1'));", 3000],
["demoheight();thetbl0=$('tdline');democursor2(thetbl0)", 3000],
["demoheight(0.7);thetbl0.click();", 3000],
["demoheight();getsubtable(0,3,2);democursor2(thetbl0.rows[0].cells[3])", 2000],
["demoheight(0.7); thetbl0.rows[0].cells[3].click();", 2000],
["demoheight();getsubtable(0,4,2);democursor2(thetbl0.rows[0].cells[3])", 500],
["demoheight(0.7);thetbl0.rows[0].cells[3].click()", 2000],
["demoheight();getsubtable(0,5,2);democursor2(thetbl0.rows[0].cells[1])", 1000],
["demoheight(0.7);thetbl0.rows[0].cells[1].click()", 3000],
["demoheight();delall();demoremovesim();myprompt(hintstr[13])",3000]
];
function getelebyname(t,n )
{
    if (t==null || t.tagName == null )
        return null;
    if (t.tagName.toLowerCase()=='input' && t.name == n)
       return t;
        var y = t.childNodes;
        if (y!=null && y.length>0)
        {
            for (var j=0; j < y.length; j++)
            {
                var z = getelebyname(y[j],n );
                if (z!=null) return z;
            }
        }
     return null;
}
function stopdemo()
{
    closeprompt();
    demostop();
    demoremovesim();
}

function rotatepoint(t, obj)
{
    var an = Math.PI * obj.slope/180;
    if (obj.shapename != 'circle') 
    for (var i=0; i < t.length; i++)
    {
        var u = t[i];
        var ct = [obj.x + obj.base.offsetWidth/2, obj.y + obj.base.offsetHeight/2];
        var x = u[0] - ct[0];
        var y = u[1] - ct[1];
        t[i][0] = x*Math.cos(an) - y * Math.sin(an) + ct[0];
        t[i][1] = y*Math.cos(an) + x * Math.sin(an) + ct[1];
    }
}

function fixall()
{
    for (var num=0; num < numShapes; num++)
    {
       var sp = allShapes[num];
       if (sp.ispic==0)
       {
       var q = $('p' + num);
       if (q!=null && sp.height < q.offsetHeight )
       {
           sp.resize();
           sp.height = q.offsetHeight+3;
           sp.width = q.offsetWidth+3;
           q.style.fontSize = sp.fontsize + 'px';
           sp.init();
       }
       }
    }
}
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
           phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}
function lzw_encode(s) 
{
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}
ResizeUploaded.initfolder = folder;




