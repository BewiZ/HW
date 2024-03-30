/*
 installtool.js
 Description: this program looks for textareas in the page and
 creates an online tool bar followign them based from cached information
 Author: Zhongyan Lin
 */
if (document.location.toString().indexOf("localhost") >= 0
    && typeof (handleErr) == 'undefined')
{
function handleErr(msg, url, l)
{
      var txt= "There was an error on this page.\n\n"
       + "Error: " + msg + "\n"
       + "URL:   " + url + "\n"
       + "Line:  " + l + "\n\n"
       + "Click OK to continue.\n\n";
      myprompt(txt);
      window.onerror = handleErr;
      return true;
}
window.onerror = handleErr;
}

var onlinetooldir = "";
var onlinetoolbarhas = false;
if (typeof (onlinetoolbarsubject) == 'undefined')
    var onlinetoolbarsubject = "";
if (typeof (onlinetoolinitial) == 'undefined')
    var onlinetoolinitial = null;
var onlinetoolbase = null;
var onlinetoolbasewidth = 0;
var onlinetooltextarea = null;
var onlinetoolx, onlinetooly;
var onlinetoolhandle = null;
var onlinetoolpasssel = "";
if (typeof(onlinejslist) == 'undefined')
    var onlinejslist = new Array();

function targe(cgi)
{

    if (cgi.indexOf('Upload') == 0)
    {
        if (typeof (tstmp) != 'undefined')
            return "w" + tstmp;
    }
    else if (typeof (parent.frames[1]) != 'undefined' && parent.frames[1] != null && parent.frames[1] != self)
        return parent.frames[1].name;
    else
        return "_blank";
}
function onlinetoolbarinit()
{
     
    if (onlinetoolbarhas == false)
        onlinetoolbarsearch(document.body);
    else
    {
        if (onlinetoolinitial == null)
        {
            onlinetoolinitial = GetCookie("myonlinetools" + onlinetoolbarsubject);
            if (onlinetoolinitial == null)
            {
               
            }
        }
        if (onlinetoolinitial!=null && onlinetoolinitial != '')
        {
            onlinetoolbarmake(onlinetoolinitial);
            onlinetoolinitial = '';
        }

    }
}
function onlinetoolposition(oElement)
{
    if (oElement == null)
        return [0, 0];
    if (typeof (oElement.offsetParent) != 'undefined')
    {

        var originalElement = oElement;
        for (var posY = 0, posX = 0; oElement != null; oElement = oElement.offsetParent)
        {
            posY += oElement.offsetTop;
            posX += oElement.offsetLeft;
            if (oElement != originalElement && oElement != document.body && oElement != document.documentElement)
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

function onlinetoolstylestr(dtype)
{
    switch (dtype)
    {
        case "text":
            return " style=\"border:1px #b0b0b0 inset;background-color:white;color:#aaaaaa\" ";
        case "file":
            return " style=\"width:1px;visibility:hidden\" ";
        case "password":
            return " style=\"border:1px #b0b0b0 solid;background-color:white;\"";
        case "checkbox":
        case "radio":
            return " style=\"border:0;background-color:transparent\" ";
        case "hidden":
            return "";
    }
    return "";
}

function jsform(cgi, option, i, caption)
{
 
    var argu = option.replace(/[^\(]+\([ ]*/, "").replace(/[ ]*\)[ ]*$/, "");
   
    var calls = option.replace(/\(.*/, "(");
     
    var seq = "";
    var args = argu.split(",");
    var ans = "";
    var alloptions = "<table cellpadding=0 cellspacing=0 border=0   " + ((onlinetoolbarsubject != 'tst') ? '' : 'id=thetoolbar') + "><tr>";
    
    var hasfile = "";
    if (argu != "")
    {
        for (var ll = 0; ll < args.length; ll++)
        {
            var dd = 0;
            if (seq != '')
                seq += ",";
            if (args[ll] == 'this')
                seq += 'this';
            else if (isNaN(args[ll]) == false)
            {
                dd = parseDouble(args[ll]);
                seq += args[ll];
            }
            else
            {
                if (args[ll].charAt(0) == '\'' || args[ll].charAt(0) == '"')
                {
                    seq += args[ll];
                }
                else
                {
                    var zz = args[ll].indexOf("_");
                    if (zz == -1)
                    {
                        zz = args[ll].length;
                        args[ll] += "_a";
                    }
                    var dtype = "text";
                    var dname = args[ll].substring(0, zz);

                    dtype = args[ll].substring(zz + 1);

                    if (dtype.toLowerCase().indexOf("a") == 0)
                    {
                        seq += "onlinetooltextarea";
                    }
                    else
                    {
                        if (dtype.toLowerCase().indexOf("n") == 0)
                            seq += "parseFloat(document.toolform" + i + "." + dname + ".value)";
                        else if (dtype.toLowerCase().indexOf("s") == 0)
                            seq += "document.toolform" + i + "." + dname + ".value";
                        else
                            seq += "this.form." + dname + "";
                    }


                    if (dtype.toLowerCase().indexOf("a") != 0)
                    {
                        if (dtype.toLowerCase().indexOf("h") == 0)
                            dtype = "hidden";
                        else if (dtype.toLowerCase().indexOf("p") == 0)
                            dtype = "password";
                        else if (dtype.toLowerCase().indexOf("c") == 0)
                            dtype = "checkbox";
                        else if (dtype.toLowerCase().indexOf("f") == 0)
                            dtype = "file";
                        else
                            dtype = "text";
                        if (dtype == ("radio") || dtype == ("checkbox"))
                        {
                            alloptions += "<td><nobr>" + dname.substring(0, 1).toUpperCase() + dname.substring(1) + "</nobr></td>";
                        }
                        var opstyle = " size=6 ";
                        if (dtype == "file")
                        {
                            opstyle =    " style=width:1px;visibility:hidden  ";
                            hasfile = dname;
   
                        }
                        alloptions += "<td   ><input type=" + dtype +   opstyle + "  name=\"" + dname + "\"   " + onlinetoolstylestr(dtype) + " class=Parameter  ";
                        if (dtype.toLowerCase().indexOf("t") == 0)
                        {
                            alloptions += "   onfocus=onlinetoolcolor(this,0) onblur=onlinetoolcolor(this,1) value=\"" + dname + "\""
                        }
                        alloptions += "></td>";
                    }
                }
            }
        }

    }

    ans += "<form rel=opener name=toolform" + i + " style=\"margin:0px 0px 0px 0px\" target=" + targe(cgi) + "  >" + alloptions + "<td  >"
    if (hasfile!='')
    { 
        ans +=  "<input class=\"BlueButton Button\" type=button  name=webservice" + i + "   value=\"" + textmsg[779]  + "\"";
        ans +=  " onclick=\"this.form." + dname + ".click()\" ";
        ans +=  "  >";
    }
    else 
    { 
        ans += "<input class=\"BlueButton Button\"   type=button  name=webservice" + i + "  value=\"" + caption
            + "\" onclick=\"setformbeingaction(this);" + calls + seq + ")\"   >";
    }
    ans += "</td></tr></table></form>";

    return ans;
}
var formbeingaction;
function setformbeingaction(t)
{
    formbeingaction=t.form;
}
function associatename(txt, nm)
{
    var fm = txt.name;

    for (var i = 0; i < fm.elements.length; i++)
        if (nm == fm.elements[i].name)
            return fm.elements[i];
}
function onlinetoolcolor(txt, s)
{
    if (s == 1)
    {
        if (txt.value == '')
        {
            txt.value = txt.name;
            txt.style.color = "#aaaaaa";
        }
    }
    else
    {
        var x = txt.style.color.toString().toLowerCase().replace(/ /g, '');

        if (x == '#aaaaaa' || x == 'rgb(170,170,170)')
        {
            txt.value = '';
            txt.style.color = "#000000";
        }
    }
}
function cgiform(cgi, option, i, caption)
{

    var alloptions = "";
    var hiddens = "";
    var aname = null;
    var opts = option.split("&");
    var tail = "?";
    var ll;
    var hasfile= "";
    for (ll = 0; ll < opts.length; ll++)
    {
       
        if (opts[ll].indexOf("=") == -1  )
        {
            var zz = opts[ll].indexOf("_");
            if (zz == -1) 
            {
                zz = opts[ll].length;
                opts[ll] += "_a";
            }
            var dtype = opts[ll].substring(zz + 1);
            var dname = opts[ll].substring(0, zz);
 
            if (dtype.toLowerCase().indexOf("a") == 0)
            {
                hiddens += "<input type=hidden name=\"" + dname + "\" value=\"??\" >";
                aname = dname;
            }
            else
            {
               
                if (dtype == null)
                    dtype = "text";
                else if (dtype.toLowerCase().indexOf("t") == 0)
                    dtype = "text";
                else if (dtype.toLowerCase().indexOf("p") == 0)
                    dtype = "password";
                else if (dtype.toLowerCase().indexOf("r") == 0)
                    dtype = "radio";
                else if (dtype.toLowerCase().indexOf("c") == 0)
                    dtype = "checkbox";
                else if (dtype.toLowerCase().indexOf("f") == 0)
                    dtype = "file";
                else if (dtype.toLowerCase().indexOf("h") == 0)
                    dtype = "hidden";
                if (dtype == ("radio") || dtype == ("checkbox"))
                    alloptions += "<td  ><nobr>" + dname.substring(0, 1).toUpperCase() + dname.substring(1) + "</nobr></td>";
                alloptions += "<td  ><input type=" + dtype + "   name=\"" + dname + "\"   " + onlinetoolstylestr(dtype);
                if (dtype.toLowerCase().indexOf("t") == 0)
                    alloptions += "    size=6   onfous=onlinetoolcolor(this,0) onblur=onlinetoolcolor(this,1) value=\"" + dname + "\""
                else if (dtype.toLowerCase().indexOf("f") == 0)
                {
                    alloptions += "  style=width:1px;visibility:hidden onchange=\"onlinetoolcp(this,'" + aname + "');visual(document.toolform" + i + ");document.toolform" + i + ".submit()\"  ";
                    hasfile = dname; 
                }
                alloptions += "></td>";
                 
            }
        }
        else
        {
            var xx = opts[ll].split(/=/);
            hiddens += "<input type=hidden name=\"" + xx[0] + "\" value=\"" + xx[1] + "\">";
        }
    }
   
    var allbuts = '';
    if (cgi.indexOf('/Upload') == -1)
    {
       allbuts = "<input class=\"BlueButton Button\"  type=submit  name=webservice" + i + "   value=\"" + caption  + "\"";
        if (aname != null)  allbuts += " onclick=\"onlinetoolcp(this,'" + aname + "')\" ";
        allbuts += "  >";
    }
    if (hasfile!='') 
     {
        allbuts = "<input class=\"BlueButton Button\"  type=button  name=webservice" + i + "   value=\"" + textmsg[779]  + "\"";
        allbuts += " onclick=\"this.form." + hasfile + ".click()\" ";
        allbuts += "  >";
    }
    var ans = "<form name=toolform" + i;
    if (cgi.indexOf("/Upload") >= 0)
        ans += " enctype=\"multipart/form-data\" ";
    ans += " style=\"margin:0px 0px 0px 0px\" method=post action=\"" + cgi + "\" target=\"" + targe(cgi) + "\" ><table cellpadding=0 " + ((onlinetoolbarsubject != 'tst') ? '' : 'id=thetoolbar') + " cellspacing=0 border=0  ><tr><td width=1  >" + hiddens + "</td>" + alloptions + "<td  >" + allbuts + "</td></tr></table></form>";
 
    return ans;
}
function onlinetoolcp(button, aname)
{
    fsnd = button.form;
    for (var i=0; i < fsnd.elements.length; i++)
        if (fsnd.elements[i].name == aname) break;
    var x = fsnd.elements[i];
    
    if (onlinetooltextarea!=null)
    x.value = onlinetooltextarea.value;
    if (fsnd.action.indexOf("/Upload") >= 0)
    {
        
        fsnd.target = "w" + tstmp;
        
    }
    else if (fsnd.action.indexOf("/preview.jsp") >= 0 && typeof(guessFormat)!='undefined')
    {
        if (typeof(fsnd.format)!='undefined' && (fsnd.format.value==null || fsnd.format.value=='' || fsnd.format.value=='0'))
        {
            
            fsnd.format.value = guessFormat(x.value);
        }
    }    
    
    formnewaction(fsnd );
    
}
function onlinetoolmini(btn)
{
    if (btn==null || onlinetoolbase ==null) return;
    var xy = onlinetoolposition(onlinetoolbase);
    if (btn.value == '.')
    {
        onlinetoolbasewidth = onlinetoolbase.offsetWidth;
       
        //btn.style.cssText = "background-color:orange;border-radius:11px;width:22px;";
        btn.style.cssText = "background-image:url(image/hammer.png);width:22px;color:white;font-size:12px;text-align:center";
         
        onlinetoolbase.style.overflow = "hidden";
        onlinetoolbase.style.width = "24px";
        var x = parseInt(onlinetoolbase.style.left.replace(/px/,''))-24; 
        var y = parseInt(onlinetoolbase.style.top.replace(/px/,''))+60;
        if (x >= 5)
        {
            onlinetoolbase.style.left = x + "px";
            onlinetoolbase.style.top =  y + "px";
        }
        btn.value = ''; 
    }
    else
    {
        if (onlinetoolbasewidth != 0)
        {
            onlinetoolbase.style.width = null;// onlinetoolbasewidth + "px";
        }
        else
        {
            onlinetoolbasewidth = onlinetoolbase.offsetWidth;
        }
        onlinetoolbase.style.left = (parseInt(onlinetoolbase.style.left.replace(/px/,''))+24) + "px";
        onlinetoolbase.style.top = (parseInt(onlinetoolbase.style.top.replace(/px/,''))-60) + "px";
        btn.style.cssText = "background-color:orange;width:22px;color:white;font-size:12px;text-align:center";
        btn.value = '.';
    }
}

function onlinetooldown(e)
{
    if (typeof e == 'undefined')
        e = window.event;
    if (typeof e.layerX == 'undefined')
        e.layerX = e.offsetX;
    if (typeof e.layerY == 'undefined')
        e.layerY = e.offsetY;
    onlinetoolx = e.layerX;
    onlinetooly = e.layerY;

}

function onlinetoolup(e)
{
    if (onlinetoolbase == null) return;
    if (typeof e == 'undefined')
        e = window.event;
    if (typeof e.layerX == 'undefined')
        e.layerX = e.offsetX;
    if (typeof e.layerY == 'undefined')
        e.layerY = e.offsetY;
    onlinetoolbase.style.left = (onlinetoolbase.offsetLeft + e.layerX - onlinetoolx) + "px";
    onlinetoolbase.style.top = (onlinetoolbase.offsetTop + e.layerY - onlinetooly) + "px";
    onlinetoolx = e.layerX;
    onlinetooly = e.layerY;

}

function onlinetoolmove(e)
{
    if (onlinetoolbase == null) return;
    if (typeof e == 'undefined')
        e = window.event;
    if (typeof e.layerX == 'undefined')
        e.layerX = e.offsetX;
    if (typeof e.layerY == 'undefined')
        e.layerY = e.offsetY;
    onlinetoolbase.style.left = (onlinetoolbase.offsetLeft + e.layerX - onlinetoolx) + "px";
    onlinetoolbase.style.top = (onlinetoolbase.offsetTop + e.layerY - onlinetooly) + "px";
    onlinetoolx = e.layerX;
    onlinetooly = e.layerY;

}
function jsnotexist(jss, cgi)
{
    for (var i=0; i < jss.length; i++)
    if (jss[i].src.indexOf(cgi) >= 0 )
        return false;
    return true;
}
function onlinetoolstr(mytools)
{
    
    if (mytools == '') return '';
    var i = 0;
    
    var jscount = 0;
    var ans = '';
    var picheight = 14;
    if (typeof(font_size)!='undefined')
    {
        picheight = font_size + 0;        
    } 
    else if (typeof(fontsize)!='undefined')
    {
        picheight = fontsize + 0;   
    }
    ans = onlinetoolround1() + "<table id=\"thetoolbar\" class=outset3 cellpadding=0 cellspacing=0 border=0><tr>";
    ans += "<td><input id=tosmall type=button class=\"BlueButton Button\" style=\"text-align:center;width:22px\" onclick=\"onlinetoolmini(this)\" value=\"&bull;\" ></td>";
    if (onlinetoolbarsubject != 'tst')
    {
        //ans+= "<td  bgcolor=white><input name=onlineco  type=button value=\"MoreTool\" class=BlueButton style=\"background-color:#5ba9cf\" onclick=\"javascript:onlinetoolconfigure()\"></td>";
    }
    i = mytools.indexOf(";");
    
    var sep = mytools.substring(0, i + 1);
    
    var re = new RegExp(sep);
    var list = mytools.substring(i + 1).split(re);
    var N = Math.ceil(list.length / 6);
    
    var names = "";
    var alljss = ",";
    var jss = document.getElementsByTagName("script");
    if (onlinetoolinitial.indexOf(";Edit;") < 0)
        onlinetoolinitial += ";" + textmsg[1378] + ";tealeaman;" + textmsg[1378] + "HTML;Edit;findrep.js;wyewyg(source_a)";
        if (onlinetoolinitial.indexOf(";LaTex;") < 0)
        onlinetoolinitial += ";LaTex;tealeaman;LaTex toolbar;LaTex;findrep.js;showlatexpanel(content_a,this)"; 
        if (onlinetoolinitial.indexOf(";Find;") < 0)
         onlinetoolinitial += ";"   + textmsg[1561] + ";tealeaman;" + textmsg[1561] + ";Find;findrep.js;findstrintextarea2(Content_a,Pattern_t);"
            + textmsg[1562] + ";tealeaman;" + textmsg[1562] + ";Find;findrep.js;replacestrintextarea2(source_a,NewString_t)";
    
    
    
    for (i = 0; i < N; i++)
    {
        
        var caption = list[i * 6];
        
        var category = list[i * 6 + 1];
        var des = list[i * 6 + 2];
        var name = list[i * 6 + 3];
         
        names += name + ",";
        var cgi = list[i * 6 + 4];
        
        if (cgi == null) break;
        var nosrc = false;
        if ( cgi.indexOf("/") < 0)
        {
            if (cgi.replace(/ /g,'') == '')
               nosrc = true; 
            cgi = onlinetooldir + cgi;
        }

        var option = "";
        if (list[i * 6 + 5]!=null)
            option = list[i * 6 + 5].replace(/^[ ]+/, '').replace(/[ ]+$/, '');
      
        ans += "<td >";
        
        if (option.replace(/^[a-z|0-9|_|\.]+\([^\)]*\)$/i, '') == '')
        {
            if (cgi != null && cgi.replace(/ /g,'') != '' && alljss.indexOf("," + cgi + ",") < 0 && jsnotexist(jss,cgi) )
            {
                alljss = alljss + cgi + ",";
                var n = jscount;
                onlinejslist[n] = document.createElement('script');
                onlinejslist[n].id = "onlinejs" + n;
                onlinejslist[n].type = "text/javascript"; 
                onlinejslist[n].src = cgi;
                document.body.appendChild(onlinejslist[n]);
                 
                jscount++;
            }
           
            ans += jsform(cgi, option, i, caption);
           
        }
        else
        {
            
            ans += cgiform(cgi, option, i, caption);
            
        }
      
        ans += "</td>";
    }
    ans += "<td><table cellspacing=0 cellpadding=0><tr><td><input  type=button class=\"BlueButton Button\" style=width:30px;text-align:center;font-size:" + font_size + "px  value=\"&larr;\" onclick=\"document.execCommand('undo')\" ></td><td><input  type=button class=\"BlueButton Button\" value=\"&rarr;\"  style=width:30px;text-align:center;font-size:" + font_size + "px onclick=\"document.execCommand('redo')\" ></td></tr></table></td>";
    
    ans += "</tr></table>" + onlinetoolround2();
    onlinetoolpasssel = names;
  
    return ans;
}



function onlinetoolconfigure()
{
    onlinetoolhandle = open(onlinetooldir + "toolset.jsp");
}

function passName()
{
    return onlinetoolpasssel;
}
function onlinetoolbarmake(initstr)
{
    var jss = document.getElementsByTagName("script");
    for (var i = 0; i < jss.length; i++)
    if (jss[i].src.indexOf("installtool.js") >= 0)
    {
        onlinetooldir = jss[i].src.replace(/installtool.js/, '');
        break;
    }
    var st = document.createElement('style');
    st.innerHTML = ("input.Button{font-weight:bold;overflow:visible;color:white;height:22px;font-size:16px;width:68px;border-radius:3px;border:1px #b0b0b0 outset}\ninput.Parameter{background:white;color:black;height:22px;font-size:16px;width:68px;border-radius:0px;border:1px #b0b0b0 outset;}");
    document.getElementsByTagName('head')[0].appendChild(st);
    onlinetoolbase = document.createElement("div");
    onlinetoolbase.id = "mobiletoolbar";
    onlinetoolbase.style.cssText = "position:absolute;z-index:20;padding:0px;visibility:hidden;border:0px";
    
    onlinetoolbase.innerHTML = onlinetoolstr(initstr);
    document.body.appendChild(onlinetoolbase);
    unifonts(onlinetoolbase);
    onlinetoolmini(document.getElementById('tosmall'));
    /*debugger;
     onlinetoolbase = document.createElement('div');
     onlinetoolbase.style.zIndex = 20;
     onlinetoolbase.style.position = "absolute";
     onlinetoolbase.setAttribute("background","white");
     var bordercolor = "#BBBBBB";
     onlinetoolbase.style.padding = "0px";
     onlinetoolbase.style.visibility = "hidden";
     onlinetoolbase.innerHTML = str;
     document.body.appendChild(onlinetoolbase);
     */

}

var onlinetoolnextsep = function(sep)
{
    if (sep.charAt(0) == '#')
        sep = '@' + sep;
    else
        sep = '#' + sep;
    return sep;
}

function onlinetoolgetselected(zz, dao)
{
    if (onlinetoolbase == null) return;
    var sep = "#";

    while (true)
    {
        for (var i = 0; i < zz.length; i++)
        {
            var hit = false;
            if (zz[i])
            {
                for (var j = 0; j < dao.NUMCOLS; j++)
                {
                    if (dao.retrv(i, j).indexOf(sep) >= 0)
                    {
                        hit = true;
                        break;
                    }
                }
            }
            if (hit == true)
                break;
        }
        if (hit == true)
            sep = onlinetoolnextsep(sep);
        else
            break;
    }
    sep = sep + ";";
    var mytools = "";
    for (i = 0; i < zz.length; i++)
    {
        if (zz[i])
        {
            for (j = 0; j < dao.NUMCOLS; j++)
            {
                mytools += sep + dao.retrv(i, j);
            }
        }
    }
    var x = onlinetoolbase.style.left;
    onlinetoolbase.innerHTML = onlinetoolstr(mytools);
     
    
    if (navigator.appName.indexOf("Explorer") < 0)
        onlinetoolbase.style.overflow = "display";
    SetCookie("myonlinetools" + onlinetoolbarsubject, mytools);
    onlinetoolbase.style.left = x;
    if (navigator.appName.indexOf("Explorer") >= 0)
        onlinetooladjust();
}
function onlinetoolbarfollow(ta)
{
    
    var xy = [400,400];
    if (ta != null)
    {
        xy = onlinetoolposition(ta);
    }
    else if (document.getElementById('theattach')!=null)
    {
        xy = onlinetoolposition(document.getElementById('theattach'));
    }
    
     
        
    if (onlinetoolbase != null)
    {
        
        onlinetoolbase.style.visibility = "visible";
        onlinetooltextarea = ta;
        
    }
    else
    {
        onlinetoolbarhas = true;
        onlinetoolbarinit();
        onlinetoolmini(document.getElementById('tosmall'));
    }
    if (onlinetoolbase == null) return;
    if (onlinetoolbase.offsetWidth > 50 || xy[0]<=40)
    {
        onlinetoolbase.style.left = (xy[0]) + "px";
        onlinetoolbase.style.top = (xy[1] - onlinetoolbase.offsetHeight) + "px";
    }
    else  
    {
        onlinetoolbase.style.left = (xy[0]-24) + "px";
        onlinetoolbase.style.top = (xy[1]+35) + "px";
    }
     
}
 
function onlinetoolbarsearch(ele)
{
    
    if (ele == null || ele.tagName == null)
        return;
    if (ele.tagName.toLowerCase() == 'textarea')
    {
         
        if (onlinetoolbarhas == false)
        {
            onlinetoolbarfollow(ele);
        }
        onlinetoolbarhas = true;
        if (typeof (ele.onfocus) == 'function')
        {
            var existing = ele.onfocus;
            ele.onfocus = function()
            {
                existing();
                onlinetoolbarfollow(this);
                
            };
        }
        else
        {
            ele.onfocus = function()
            {
                onlinetoolbarfollow(this);
            };
        }
    }
    else
    {
        var c = ele.childNodes;
        if (c != null || c.length > 0)
        {
            for (var i = 0; i < c.length; i++)
                onlinetoolbarsearch(c[i]);
        }
    }
}
function onlinetoolround1() {
    return "<div style=\"border:0px #b0b0b0 outset;border-radius:0px\">";
}

function onlinetoolround2() {
    return "</div>";
}


function onlinetooladjust0(ele)
{
    if (ele == null)
        return;
    var eles = ele.childNodes;
    if (eles == null || eles.length == 0)
    {
        if (typeof (ele.tagName) != 'undefined'  && ele.className == 'BlueButton Button')
        {
            ele.style.width = (ele.parentNode.offsetWidth - 2) + 'px';
        }
    }
    else
    {
        for (var i = 0; i < eles.length; i++)
            onlinetooladjust0(eles[i]);
    }
}
function onlinetooladjust()
{
    var toolbar = document.getElementById("thetoolbar");
  //  onlinetooladjust0(toolbar);
}
function initmini()
{
    if (onlinetoolbase == null) 
    {
        return;
    }
    var xy = onlinetoolposition(onlinetoolbase);
   
    onlinetoolbase.style.overflow = "hidden";
    onlinetoolbase.style.width = "20px";
     
}
var oldonloadtool = window.onload;
window.onload = function()
{
    try{ 
    if (oldonloadtool!=null)   
        oldonloadtool();
    }catch(e){}
    onlinetoolbarinit();
    
    if (onlinetoolbarhas)
    {
        if (navigator.appName.indexOf("Explorer") >= 0)  onlinetooladjust();
    }  
}

 


