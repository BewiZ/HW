if (typeof(font_size)=='undefined')
   var font_size = 16;
var ResizeUploaded =
{
attachref: null,
filetobedeleted: null,
savedfiletodelete: '',
uploadedattachmen: null,
uploadedresized: false,
pathcode: null,
filename: null,
picwidth: null,
picheight: null,
noattachindex: null,
noattachurl: null,
attachindex:null,
oldattachvalue:null,
alluploaded : '',
timestmp:0,
active:false,
butwidth:Math.round(4.5*font_size),
zip: function(str)
{
    var s = str.replace(/,$/,'').split(/,/);
    if (str.indexOf("|") > 0 || s.length ==1) 
        return str;
    var i=0;
    var l = s[0].lastIndexOf("@");
    while (true)
    {
        for (var j=1; j < s.length; j++)
        {
            var k = s[j].lastIndexOf("@");
            if (i+l+1 == s[0].length  || i+k+1 == s[j].length || s[j].charAt(i+k+1) != s[0].charAt(i+l+1)) 
              break;  
        }
        if (j < s.length )
        {
             break;
        }
        else  i++;
    }
    var y = s[0] + ",";
    for (var j=1; j < s.length; j++)
    {
        var k = s[j].lastIndexOf("@");
        var i=0;
        while ( i+l+1 < s[0].length  &&  i+k+1 < s[j].length && s[j].charAt(i+k+1) == s[0].charAt(i+l+1)) 
            i++;
        if (i > 0)
            y += s[j].substring(0,k+1) +  i + "|" + s[j].substring(i+k+1) + ",";  
        else
            y += s[j] + ",";
    }
    return y;
},

unzip : function(str)
{
    if (str == null) return str;
    if (typeof(str.tagName)!='undefined' && str.tagName.toLowerCase() == 'input')
    {
        str = str.value;
    }
    var s = str.replace(/,$/,'').split(/,/);
    if (str.indexOf("|") < 0 || s.length ==1) 
        return str;
    str = s[0] + ",";
    var l = s[0].lastIndexOf("@");
    for (var j=1; j < s.length; j++)
    {
         var k = s[j].indexOf("|");
         if (k < 0)
            str += s[j] + ","; 
         else
         {
            var m = s[j].lastIndexOf("@");
            var n = parseInt(s[j].substring(m+1,k));
            str += s[j].substring(0,m+1) + s[0].substring(l+1,l+n+1) + s[j].substring(k+1) + ",";
         }
    }
    return str;
}, 
widthnow:0,
heightnow:0,
xnow:0,
ynow:0, 
isimg:true,
fileinexam:null,
uploaded : function (z, fn,atc)
{
    
    var regloc = fn;
    var locat = document.location.toString();
    if (atc != null)
    {
        ResizeUploaded.attachref = atc;
    }
    
    if (z.length > 4)
    {
        regloc = locat.replace(/[^\\/]+$/,  "FileOperation?did=" + z.substring(4));
    }
    var imgpath = "FileOperation?did=" + z.substring(4);  
    var tt = fn;
    ResizeUploaded.isimg = false;
    ResizeUploaded.noattachurl = regloc;
    ResizeUploaded.fileinexam = fn + '@'+ z.substring(4);
    if (ResizeUploaded.attachref!=null)
    {
        var xx = ResizeUploaded.unzip(ResizeUploaded.attachref.value); 
        var jj = ("," + xx ).indexOf("," + fn.replace(/@.*/, '@'));
        
        if ( jj < 0 )
            xx =  ResizeUploaded.fileinexam  + "," + xx;
        ResizeUploaded.attachref.value = ResizeUploaded.zip(xx);
    }
    /*
    //ResizeUploaded.oldattachvalue = ResizeUploaded.attachref.value; 
    ResizeUploaded.attachman(ResizeUploaded.attachref);
    */
    if (typeof(beforeclose)!='undefined') 
    window.onbeforeunload = beforeclose;

    var fen = fn.replace(/@.*/, '');
    var jj = fen.lastIndexOf(".");
    fen = fen.substring(jj + 1).toLowerCase();
    var ss = '';
    ResizeUploaded.pathcode = z.substring(4);
    ResizeUploaded.filename = fn;
    var wordfor = textmsg[1293].split(/@/);
   
    if ((fen == 'jpg' || fen == 'jpeg' || fen == 'gif' || fen == 'png') && z.length > 4 && (z.charAt(3) == '/'  ))
    {
       // var hasfile = ResizeUploaded.attachref.value.indexOf("@" + fn.replace(/@.*/, '') + "@");
        var hasfile1 = ResizeUploaded.unzip(ResizeUploaded.attachref.value).indexOf("@" + fn.replace(/@.*/, '') + "@");
        
        var cancut = ResizeUploaded.attachref==null ||  hasfile1< 0;
        ResizeUploaded.isimg = true;
        ResizeUploaded.picwidth = 0;
        ResizeUploaded.picheight = 0;
        var wt = 4*ResizeUploaded.butwidth;
        if (cancut) wt += 3*ResizeUploaded.butwidth + 30;
        ss = "<table  class=outset1 style=\"border-radius:3px;border:0px #d0d0d0 outset\" id=uploadinstru cellspacing=2 cellpadding=2 ><tr>";
        var s1 = '';
        var s2 = ''; var ii = 0;
        
        if (cancut) 
        {    
         ss +=  "<td><select id=resizesel style=\"width:" + ResizeUploaded.butwidth + "px;overflow:hidden;border:1px #b0b0b0 solid;margin:0px 0px 0px 0px;border-radius:3px\" onchange=ResizeUploaded.resizeonly(this,'" + z.substring(4) + "','" + fn + "')><option selected>100%</option>"
            + "<option>5%</option><option>10%</option><option>20%</option><option>25%</option><option>30%</option><option>40%</option><option>50%</option><option>75%</option>"
            + "<option>125%</option><option>150%</option><option>200%</option></select></td>";
        
        ss += "<td style=\"background-color:orange;color:white;border:1px #b0b0b0 outset;width:"+ ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\"   align=center onclick=\"ResizeUploaded.swapproc(this)\"><nobr>"+ textmsg[1295] + "</nobr></td>";
           
        //ss += "<td style=\"background-color:#BBBB00;color:white;border:1px #b0b0b0 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\" align=center onclick=\"ResizeUploaded.cropshow(null)\"><nobr>"+ textmsg[1632] + "</nobr></td>";
        ss += "<td style=\"background-color:#BBBB00;color:white;border:1px #b0b0b0 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\" align=center onclick=\"ResizeUploaded.cropuse()\"><nobr>"+ textmsg[1357] + "</nobr></td>";
        }
        
        ss += "<td style=\"background-color:#b0b0b0;color:white;border:1px #808080 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\"  align=center onclick=ResizeUploaded.cropuse(1)><nobr>"+ textmsg[1359] + "</nobr></td>";
        ss += "<td style=\"background-color:white;color:black;border:1px #808080 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\"  align=center onclick=ResizeUploaded.readbw()><nobr>"+ textmsg[1630] + "</nobr></td>";
        ss += "<td style=\"background-color:red;color:white;border:1px #b0b0b0 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\"  align=center  onclick=\"ResizeUploaded.deleteit()\"><nobr>" + textmsg[69]  + "</nobr></td>";
        if (document.location.toString().indexOf('talkpage.jsp')<0 && document.location.toString().indexOf('webfolder.jsp')<0 && typeof(Play)=='undefined')
        ss += "<td style=\"background-color:#BBBB00;color:white;border:1px #b0b0b0 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\"  align=center  onclick=\"ResizeUploaded.cropuse(3)\"><nobr>" + textmsg[1303]  + "</nobr></td>";
        ss += "<td style=\"background-color:#BBBB00;color:white;border:1px #b0b0b0 outset;font-weight:700;border-radius:3px;cursor:pointer\"  align=center ><img height=" + (font_size + 4) + " src=image/nophoto.jpg  onclick=\"ResizeUploaded.detectface()\"></td>";
        if (cancut && (ResizeUploaded.attachref==null ||ResizeUploaded.unzip(ResizeUploaded.attachref.value).replace(new RegExp(",[0-9][0-9]?@"+fn.replace(/@.*/,'')),"")== ResizeUploaded.unzip(ResizeUploaded.attachref.value))) 
        {
           ss +=  "<td><input id=rotatesel style=\"width:" + ResizeUploaded.butwidth + "px;overflow:hidden;border:1px #b0b0b0 solid;margin:0px 0px 0px 0px;border-radius:3px;width:30px\" onchange=ResizeUploaded.rotateonly(this,'" + z.substring(4) + "','" + fn + "') value=0 ></td><td>&deg;</td>";
        } 
        else 
        {
           ss +=  "<td></td>";
        }
        ss += "</tr></table><img id=\"imgwork\" src=\"" + imgpath + "&tcode=" + (new Date()).getTime()%1000000000 + "\"  style=\"margin:0px 0px 0px 0px\" onload=ResizeUploaded.goodposition(this)>";
        closeprompt();
        
        myprompt(ss, null, null, textmsg[1296]);
        if (promptwin!=null && promptwin.getElementsByTagName('table')!=null && promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')!=null)
        {
            promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0].style.padding = "0px 0px 0px 0px";
            promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('img')[0].onclick
            = function(){var b = document.getElementById("dragcropbox"); if (b!=null) document.body.removeChild(b);ResizeUploaded.cropuse();} 
        }
        //if (isu)   ResizeUploaded.cropshow(document.getElementById('cropfield'));
    }
    else
    {
        
        ss = "<table class=outset1 style=\"border-radius:3px;border:0px #d0d0d0 outset\" id=uploadinstru cellspacing=2 cellpadding=2 ><tr>";
        ss += "<td style=\"background-color:#BBBB00;color:white;border:1px #b0b0b0 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\" align=center onclick=\"ResizeUploaded.docuse()\">"+ textmsg[1357] + "</td>";
        ss += "<td style=\"background-color:red;color:white;border:1px #b0b0b0 outset;width:" + ResizeUploaded.butwidth + "px;font-weight:700;border-radius:3px\"  align=center  onclick=\"ResizeUploaded.deleteit()\"><nobr>" + textmsg[69]  + "</nobr></td></tr>";
        ss += "</table>";
        myprompt(ss, null, null, wordfor[0]);
        promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('img')[0].onclick
        = function(){ResizeUploaded.docuse();}
        if (typeof (showattachment) != 'undefined') 
        {
            showattachment(ResizeUploaded.attachref.value);
        }
            
        //ResizeUploaded.alluploaded += ResizeUploaded.filename + '@' + ResizeUploaded.pathcode + ','; 
    }
    
},
detectface : function()
{
       /* var savedredourl = "UploadFace?pathcode=" + ResizeUploaded.pathcode +   "&tcode=" + ResizeUploaded.filename.replace(/^[^@]+@/,"");
        if (typeof(startface) != 'undefined')
        savedredourl += "&CourseId=" + currentcid + "&Session=" + (numRows>0?mat[0][0]:defaultRecord[0]);
        window.open(savedredourl,'w'+tstmp);*/
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            xmlhttp = new XMLHttpRequest();
        }
        else
        {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function()
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                var y = xmlhttp.responseText;
                if (y!=null && y!='')
                { 
                  
                    if (y.indexOf('<html>') > 0 && y.indexOf('<body ')>0)
                    {
                        var x= window.open('', 'w' + tstmp);
                        x.document.write(y);
                    }
                    else eval(y);
                }
            }
        }
        var f = new FormData();
        f.append('pathcode',ResizeUploaded.pathcode);
        
        if (typeof(startface) != 'undefined'  )
        { 
            f.append('CourseId', currentcid);
            f.append('Session', (numRows>0?mat[0][0]:defaultRecord[0]) );
        }
        xmlhttp.open('POST', "UploadFace", true);
        xmlhttp.send(f);
        
}, 

facedim : function (alln)
{
     var r = new RegExp(",[0-9]+@");
     var s = ResizeUploaded.unzip(ResizeUploaded.attachref.value);
     var k = 0;
     var m;
     var j = 0;
     while ( (m = r.exec(s.substring(k))) != null)
     {
         j = parseInt(m.toString().replace(/[^0-9]/g, ''));
         k += m.index + m.toString().length;
     }
     if (alln == '') return;
     var ns = alln.replace(/,$/,'').split(/,/) ;
     var imgs = '<table><tr>';
     var ww = 0; 
     var had = false;
     for (var i=0; i <= ns.length-4; i+=4)
     {var w = parseInt( ns[i+2]);var  h =  parseInt( ns[i+3])
          var x = parseInt( ns[i]) - Math.round(0.13*w);
          var y = parseInt( ns[i+1]) - Math.round(0.25*h);
          w += Math.round(0.26*w);
          h += Math.round(0.5*h);
          ww += w;
          if (ww > 720){imgs += '</tr></table><table><tr>'; ww = w;had = true;} 
          imgs += '<td><table><tr height=' + h + '><td width=' +w +' style="background-image:url(FileOperation?did='+
          ResizeUploaded.pathcode + ');background-position:-' + x + 'px -' + y + 'px" > </td></tr></table></td>';
          s = s + (++j) + "@" + ResizeUploaded.filename.replace(/@.*/,'') + "@" + x  + "_" +  y + "_" +  w + "_" +  h + ",";
     }
     ResizeUploaded.attachref.value = ResizeUploaded.zip(s);
     myprompt(imgs + '</tr></table>');
     if (had)
         promptwin.style.width = '740px';
     else 
         promptwin.style.width = (ww+30) + 'px';
     //ResizeUploaded.attachman(ResizeUploaded.attachref);
},
goodposition:function(im)
{
    
    if (ResizeUploaded.ynow + im.height + 60 > ResizeUploaded.heightnow)
    {
       ResizeUploaded.ynow = ResizeUploaded.heightnow - im.height - 60;
       if (ResizeUploaded.ynow < 0) ResizeUploaded.ynow = 0;
    }
    
    if (ResizeUploaded.xnow + im.width + 5 > ResizeUploaded.widthnow)
    {
       ResizeUploaded.xnow = ResizeUploaded.widthnow - im.width - 5;
       if (ResizeUploaded.xnow < 0) ResizeUploaded.xnow = 0;
    }
    
    promptwin.style.top = document.body.scrollTop + 'px';//    ResizeUploaded.ynow +  'px';
    promptwin.style.left = ResizeUploaded.xnow +  'px'; 
},
deleteit : function()
{
    var usefield = document.getElementById("usefield");
    if (usefield!=null)
    {
        usefield.selectedIndex = 0;
    }
    var url = "UploadChangePic?pathcode=" + ResizeUploaded.pathcode +  "&tcode=" +  (ResizeUploaded.filename.replace(/^[^@]+@/,""));
   
    postopen(url,"w" + tstmp);
    //closeprompt();
     
},
readbw : function()
{
     
    var pic = document.getElementById('imgwork');
    var p = pic.parentNode;
    p.insertBefore(document.createTextNode(textmsg[1631]),pic);
    var btn = document.createElement('input');
    btn.className = 'OrangeButton';
    btn.style.cssText = 'width:' + ResizeUploaded.butwidth + 'px;align:center';
    btn.type='button';
    btn.value = textmsg[848];
    btn.onclick = function(){ResizeUploaded.cropuse(2)};
    p.insertBefore(btn,pic);
    btn = document.createElement('input');
    btn.className = 'GreenButton';
    btn.style.cssText = 'width:' + ResizeUploaded.butwidth + 'px;align:center';;
    btn.type='button';
    btn.value = textmsg[849];
    btn.onclick = function(){var pic = document.getElementById('imgwork');var p = pic.parentNode;p.removeChild(pic.previousSibling);p.removeChild(pic.previousSibling);p.removeChild(pic.previousSibling);};
    p.insertBefore(btn,pic);
    ///myprompt(textmsg[1631], null, "if(v) ResizeUploaded.cropuse(2)", textmsg[1630]); 
},
docuse : function()
{
    
    //savedredourl = "UploadChangePic?pathcode=" + ResizeUploaded.pathcode + "&rdap=" + rdapname + "&tcode=" + ResizeUploaded.filename.replace(/^[^@]+@/,"");
    //window.open(savedredourl, "w" + tstmp); 
    closeprompt();
},
dosplitnow: false,
cropuse : function(bw)
 {
   //if (typeof(showattachment)!='undefined')   showattachment(allentries);
   ResizeUploaded.dosplitnow = false;
   if (bw!=null && bw==3)
   {
      ResizeUploaded.dosplitnow = true;
      bw =null;
   }
   
   var needsubmit = (bw!=null);
   var url = "UploadChangePic?pathcode=" + ResizeUploaded.pathcode +  "&tcode=" + ResizeUploaded.filename.replace(/^[^@]+@/,"");
   var b = null;
    
    var pic = document.getElementById('imgwork');
    var XY = findPositionnoScrolling(pic);
    var w = pic.offsetWidth;
    var h = pic.offsetHeight;
    //needsubmit = false; 
    if (ResizeUploaded.uploadedresized)
    {
        needsubmit = true;
        url += "&rwidth=" + w + "&rheight=" + h;
    }

    b = document.getElementById("dummycenter");
    if ( b != null)
    {
        var cw = b.offsetWidth;
        var ch = b.offsetHeight;
        var xy = findPositionnoScrolling(b);
        xy[0] -= XY[0];
        xy[1] -= XY[1];
        if (xy[0] < 0)
            xy[0] = 0;
        if (xy[1] < 0)
            xy[1] = 0;
        if (cw < w && ch < h)
        {    
            url += "&cropx=" + xy[0] + "&cropy=" + xy[1] + "&cwidth=" + cw + "&cheight=" + ch;
            needsubmit = true;
        }
    }

    if (typeof(showattachment)!='undefined')
        showattachment(ResizeUploaded.attachref.value);
    if (typeof(beforeclose)!='undefined')  
    window.onbeforeunload = beforeclose;
    
    if (needsubmit) 
    {
       if (bw!=null) url += "&whiteblack="+bw;
      
       savedredourl = url;
       window.open(url, "w" + tstmp);
    }
     
    
    
     if ( b!= null) 
        b.parentNode.removeChild(b);
     if (!needsubmit && ResizeUploaded.dosplitnow) 
     {
        ResizeUploaded.cutoff(); 
     }
     else
         closeprompt();
 },
 
 
resizeonly : function (sel  )
{
   
    var box = document.getElementById("dragcropbox");
     
    if (sel.selectedIndex < 0)
        return;

    var p = parseInt(sel.options[sel.selectedIndex].text.replace(/%/, ''));
    var pic = document.getElementById('imgwork');
    if (ResizeUploaded.picwidth == 0 || ResizeUploaded.picheight == 0) 
    {
        ResizeUploaded.picwidth = pic.width;
        ResizeUploaded.picheight = pic.height;
    }
    var w = Math.round(p * ResizeUploaded.picwidth / 100);
    var h = Math.round(p * ResizeUploaded.picheight / 100);
    
    pic.style.width = w + 'px';
    pic.width = w;
    pic.style.height = h + 'px';
    pic.height = h;
    
    var w0 = document.getElementById("uploadinstru").offsetWidth;
    setRoundedSize(promptwin, (w0>w?w0:w), h+40)  ;
    ResizeUploaded.uploadedresized = (p!=100);
     
},

rotateonly : function (edt,z,fn)
{
    if(typeof(rdapname)=='undefined') var rdapname = 'assign';
    var url = "UploadChangePic?pathcode=" + z + "&rdap=" + rdapname + "&tcode=" + fn.replace(/^[^@]+@/,"");
    url += "&rwidth=-1&rheight=" + (edt.value);
    savedredourl = url;
    window.open(url, "w" + tstmp);
},

swapproc : function(td)
{
    
    var tr = td.parentNode;
    var tds = tr.cells;
    var len = tds.length;
   
    if (td.innerHTML.replace(/<[^>]+>/g,'') == textmsg[1295])
    {
      
        ResizeUploaded.cropshow(td);
      
        td.innerHTML = "<nobr>" + textmsg[1645] + "</nobr>";
        
        for (var j = len - 1; j >  len - 6; j--)
        {
            if (tds[j].innerHTML.replace(/<[^>]+>/g,'') == textmsg[1357])
                break;
            tds[j].style.visibility = 'hidden';
        }
    }
    else
    {
        td.innerHTML =  "<nobr>" + textmsg[1295] + "</nobr>";
        var box = document.getElementById("dragcropbox");
        if (box != null)  document.body.removeChild(box);
        for (var j = len - 1; j >  len - 6; j--)
        {
            if (tds[j].innerHTML.replace(/<[^>]+>/g,'') == textmsg[1357])  break;
            tds[j].style.visibility = 'visible';
        }
    }
},
cropshow : function (sel)
{
    var box = document.getElementById("dragcropbox");
    if (box != null)
        document.body.removeChild(box);
    var k = -1;
    if (sel!=null && sel.tagName.toUpperCase()=='SELECT') 
        k = parseInt(sel.options[sel.selectedIndex].value);
    var w = 100, h =100;
    if (k > -1)
    {
        w = parseInt('' + fsize[k]);
        if (''+w == 'NaN') w = 100;
        if (ffsize[k] == null || ffsize[k] == '' || isNaN(ffsize[k]))
        {
            h = w;
        }
        else
        {
            h = parseInt('' + ffsize[k]);
        }
    }
    else
    {
       var pic = document.getElementById('imgwork');
       if (pic!=null && pic.width >0 && pic.height > 0)
       {   
           w = Math.round(pic.width * 0.7);
           h = Math.round(pic.height * 0.7);
       } 
    }
     
    if (k>=0 && k < numCols)
    {
        var usefield = document.getElementById("usefield");
        if (usefield!=null)
        {
            for (var i=0; i < usefield.options.length; i++)
            if (usefield.options[i].value == k)
            {
                usefield.selectedIndex = i;
                break;
            } 
        }
    }
    ResizeUploaded.showframe(w, h  );
},
showframe : function(w, h )
{
    
    var pic = document.getElementById('imgwork');
    var xy = findPositionnoScrolling(pic);
    if (1==2 && (h > pic.offsetHeight && pic.offsetHeight > 0 || w > pic.offsetWidth && pic.offsetWidth>0 ))
    {
        var ro = (h / pic.offsetHeight);
        if (ro < w / pic.offsetWidth)
            ro = w / pic.offsetWidth;
        var ww = Math.ceil(ro * pic.offsetWidth + 2);
        var hh = Math.ceil(ro * pic.offsetHeight + 2);
        pic.height = hh;
        pic.width = ww;
        pic.style.height = hh + 'px';
        pic.style.width = ww + 'px';
       
    }
    var z = 21;
    if (typeof (promptwin.style.zIndex) != 'undefined')
        z = promptwin.style.zIndex;
    if (typeof (pic.style.zIndex) != 'undefined' && z < pic.style.zIndex)
        z = pic.style.zIndex;

    var box = document.createElement("div");
    box.id = "dragcropbox";
    box.style.cssText = "position:absolute;left:" + xy[0] + "px;top:" + xy[1]
            + "px;z-index:" + (z + 1) + ";background-color:transparent;border:1px #909090 broken;align:center;vertial-align:middle";
    box.innerHTML = round1('100%') + "<div id=dummycenter style=\"background-color:#eee;opacity:0.3;width:" + w + "px;height:" + h + "px;border-radius:3px\"></div>" + round2  ;
    document.body.appendChild(box);
    box.getElementsByTagName('table')[0].cellPadding='0';
    box.getElementsByTagName('table')[0].cellSpacing='0';
    box.getElementsByTagName('table')[0].rows[2].cells[2].innerHTML = "<div><img src=image/diskbg.png></div>"
    new ResizeRounded(box,ResizeUploaded.resizeblank);
    Drag.init(box.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('div')[0], box);
},
 
moveTo :function(r)
{
    var box = document.getElementById("dragcropbox");
    var pic = document.getElementById("imgwork");
    var dox = document.getElementById("dummycenter");
    var w0 = dox.offsetWidth;
    var h0 = dox.offsetHeigh;
    if (w0 > r[2])
    {
        dox.style.width = ( r[2]) + 'px';
        dox.parentNode.width = r[2];
        dox.parentNode.parentNode.parentNode.width = ( r[2]+24);
        box.style.width = ( r[2]+24) + 'px'; 
    }
    else
    {
        box.style.width = ( r[2]+24) + 'px'; 
        dox.parentNode.parentNode.parentNode.width = ( r[2]+24);
        dox.parentNode.width = r[2];
        dox.style.width = ( r[2]) + 'px';
    }
    if (h0 > r[3])
    {
        dox.style.height = ( r[3]) + 'px';
        dox.parentNode.parentNode.height = r[3];
       
        box.style.height = ( r[3]+24) + 'px'; 
    }
    else
    {
        box.style.height = ( r[3]+24) + 'px'; 
        dox.parentNode.parentNode.height = ( r[3]);
        dox.style.height = ( r[3]) + 'px';
    }
     
    var xy = findPositionnoScrolling(pic);
    box.style.left = (xy[0] + r[0]) + 'px';
    box.style.top = (xy[1] + r[1]) + 'px';
    
},

resizeblank : function(td, dx, dy)
{
    var b = document.getElementById('dummycenter');
    var d = document.getElementById('dragcropbox');
    if (dx > 0)
    {
        d.style.width = (d.offsetWidth + dx) + 'px';
        b.style.width = (b.offsetWidth + dx) + 'px';
    }
    else
    {
        b.style.width = (b.offsetWidth + dx) + 'px';
        d.style.width = (d.offsetWidth + dx) + 'px';
    }
    
    if (dy > 0)
    {
        d.style.height = (d.offsetHeight + dy) + 'px';
        b.style.height = (b.offsetHeight + dy) + 'px';
    }
    else
    {
        b.style.height = (b.offsetHeight + dy) + 'px';
        d.style.height = (d.offsetHeight + dy) + 'px';
    }
    
},

updatepic : function()
{
    var pic = document.getElementById('imgwork');
    if (pic!=null)
    {
        var s = pic.src;
        pic.src = s;
    }
},

setattachref : function(x)
{
   if( x != ResizeUploaded.attachref)
   ResizeUploaded.attachref = x;
},
getattachref : function ()
{
   return ResizeUploaded.attachref;
},

setfiletobedel : function (filename)
{
    ResizeUploaded.filetobedeleted = filename;
},
updateattch : function ()
{
  
   if ( ResizeUploaded.filetobedeleted ==null) return;
    
   if (ResizeUploaded.attachref != null )
   {
      var x = ResizeUploaded.unzip(ResizeUploaded.attachref.value);
      if (x.indexOf('@')<0) x = '';
      var x0 = ResizeUploaded.attachref.value;
      var j = x.indexOf(ResizeUploaded.filetobedeleted + ",");
      var k = ResizeUploaded.filetobedeleted.length + 1;
      if (ResizeUploaded.attachref.value.replace(/[^,]/g,'').length < 2 && k>1)
      {
          ResizeUploaded.attachref.value = ''; 
      }
      else
      {
          if (j> 0)
              x = x.substring(0,j) + x.substring(j+k);
          else if(j == 0)
              x = x.substring(k);
         if (ResizeUploaded.ifdelfilealso) 
         {
              var y = '@' + ResizeUploaded.filetobedeleted.replace(/@.*/,'') + "@";
              var z = '', j =0, k =0;
              while ( (k = x.indexOf(y)) > 0)
              {
                  x = x.substring(0,k)  + ( k+y.length < x.length? x.substring(k+y.length) : '');
              }
              x = x.replace(/,[0-9|_]+,/g,',').replace(/^[0-9|_]+,$/g,',');
          }
          ResizeUploaded.ifdelfilealso = false;
          ResizeUploaded.attachref.value = ResizeUploaded.zip(x);
      }
      
     }  
     
      x = ResizeUploaded.unzip(ResizeUploaded.attachref.value);
     
      var j = x.indexOf(ResizeUploaded.filetobedeleted + ",");
      var k = ResizeUploaded.filetobedeleted.length + 1;
      if (j> 0)
          x = x.substring(0,j) + x.substring(j+k);
      else if (j == 0)
          x = x.substring(k);
      ResizeUploaded.attachref.value = ResizeUploaded.zip(x);
       
      if (typeof(showattachment)!='undefined')
                showattachment(x);
      ResizeUploaded.filetobedeleted = null;
},

openmid : function(url,x,y)
{
  if (x==null) 
      x= '300';
  else 
      x = Math.round(x);
  if (y == null) 
      y = '300';
  else
      y = Math.round(y);
  myprompt('<iframe src="' + url + '" width=' + x + " height=" + y + " />");
  //window.open(url,'winname', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width='+x +',height=' +y +',top=' +(screen.height-y)/2+',left=' + (screen.width-x)/2);
  
},

refreshatt : function()
{
    closeprompt();
    ResizeUploaded.updateattch();
    ResizeUploaded.attachman(ResizeUploaded.attachref);
},
ifdelfilealso : false,
 
deleteAttachedFile : function (file)
{
   
   var xs = file.split(/@/);
   ResizeUploaded.setfiletobedel(file);
   if (xs.length==2 && xs[1].indexOf('http')==0)
   {
       var parse = new CSVParse(ResizeUploaded.unzip(ResizeUploaded.attachref.value).replace(/,$/,''),"'", "@",",").nextMatrix();
       var ss = '';
       for (var i=0; i < parse.length; i++)
           if (parse[i].length==2 && parse[i][0]==xs[0] && parse[i][1].indexOf('http')==0
               ||parse[i].length==3 && !isNaN(parse[i][0])&& parse[i][1]==xs[0]&& parse[i][2].replace(/[0-9]/g,'')=='___')
           ;
           else if (parse[i].length == 3)
              ss += parse[i][0] + '@' + parse[i][1] + '@' + parse[i][2] + ',';
           else 
              ss += parse[i][0] + '@\'' + parse[i][1] + '\',';
        ResizeUploaded.attachref.value = ResizeUploaded.zip(ss);
        ResizeUploaded.attachman(ResizeUploaded.attachref);
   }
   else if (xs[2] ==null ||  xs[2].length < 2 || xs[1] == null || xs[1].replace(/[0-9]/g,'')!='')
   {
       syn('del',xs[2]);
   }
   else
   {
       ResizeUploaded.ifdelfilealso = false;
       ResizeUploaded.savedfiletodelete ="UploadChangePic?pathcode=" + xs[2] + '&tcode=' + xs[1];
       var mm = textmsg[809] + "?";
       if (xs[0].toLowerCase().indexOf('.jpg') >0 || xs[0].toLowerCase().indexOf('.png') >0 || xs[0].toLowerCase().indexOf('.gif') >0
               || xs[0].toLowerCase().indexOf('.pdf') >0)
          mm += "<br><input type=checkbox name=ifdeletefile  onclick=\"ResizeUploaded.ifdelfilealso=this.checked\">" + textmsg[1601];
       myprompt(mm,null,"ResizeUploaded.delgoahead(v)");
   }
       
},
showback : function()
{
    ResizeUploaded.attachman(ResizeUploaded.attachref);
},
delgoahead : function(v)
{
 
   if (v == false) 
       ResizeUploaded.showback();
   else
   {
       savedredourl = ResizeUploaded.savedfiletodelete;
       nav1 = window.open(ResizeUploaded.savedfiletodelete,'w' + tstmp);
   }
   closeprompt();
},
openAttachedFile : function(codedpath, filename)
{
    var fn= filename.toLowerCase();
    var dd = (fn.indexOf('.gif')>=0 || fn.indexOf('.jpg')>=0 || fn.indexOf('.jpeg')>=0 || fn.indexOf('.png')>=0);
    if(dd == false)
    {
        var  fsnd1 = document.getElementById("openfileform_id");
        if ( fsnd1 == null)
        {
            fsnd1 = document.createElement("form");
            fsnd1.name = "openfileform";
             fsnd1.id = "openfileform_id";
            if (codedpath.indexOf('http://') == 0 || codedpath.indexOf('https://') == 0)
                formnewaction(fsnd1,codedpath);
            else
                formnewaction(fsnd1,"FileOperation");
            fsnd1.method = 'post';
            fsnd1.target = "_blank" ;
            fsnd1.innerHTML = "<input type=hidden name=did><input type=hidden name=operation value=open>";
            document.body.appendChild(fsnd1);
        }
        fsnd1.did.value = codedpath;
        formnewaction(fsnd1);
        
       visual(fsnd1);
       fsnd1.submit();
    }
    else 
    {
         var showarea =  document.getElementById('codeshow');
         showarea.style.padding = "0px 0px 0px 0px";
         showarea.innerHTML = "<img src=" + ResizeUploaded.goodopenurl(codedpath,false) + " onload=\"ResizeUploaded.fitting(this)\" style=\"margin:0px 0px 0px 0px\" >";
         var tbl = document.getElementById('attachaction');
        
         for (var k=1; k <= 4; k++)
         tbl.rows[0].cells[k].width = ResizeUploaded.butwidth + 'px';
         tbl.rows[0].cells[0].width = '120px';
         //openpicorfile(codedpath}, filename);
     }
},
tobewritten:'',
fitting: function(im)
{
    if (promptwin.offsetWidth < im.width + 21)
       promptwin.style.width = (im.width + 21) + 'px'; 
},
goodopenurl:function(codepath,tail)
{
    if (codepath.indexOf('http://') == 0 || codepath.indexOf('https://') == 0)
    {
        return codepath;
    }
    else
    {
        var st= "FileOperation?did=" + codepath;
        if (tail==null||tail==true) st += "&tcode=" + (new Date()).getTime()%1000000000;
        return st;
    }   
},
gettobewritten : function()
{
   return ResizeUploaded.tobewritten; 
   
}, 
showwfhint : function ()
{
    document.getElementById('codeshow').innerHTML = textmsg[1667];
},

folder0:null,

sort:function(files, timest, urls, codedpath)
{
   var a = [];
   for (var j=0; j < files.length; j++)
   {
       if (!isNaN(timest[j]) && urls[j] == null && codedpath[j] !=null && codedpath[j].length>14)
       {
           a[a.length] = [files[j], timest[j], codedpath[j]];
           for (var k=0; k < files.length; k++)
           {
               if (timest[k] == files[j] && !isNaN(files[k]) &&codedpath[k]!=null &&  !isNaN(codedpath[k].replace(/_/,'')) )
                   a[a.length] = [files[k], timest[k], codedpath[k]];
           }
       }
   }
   for (var j=0; j < files.length; j++)
   {
       if ( timest[j] == null && urls[j] != null && codedpath[j] ==null )
       {
           a[a.length] = [files[j],null, urls[j]];
           for (var k=0; k < files.length; k++)
           {
               if (timest[k] == files[j] && !isNaN(files[k]) && codedpath[k]!=null && !isNaN(codedpath[k].replace(/_/,'')) )
                   a[a.length] = [files[k], timest[k], codedpath[k]];
           }
       }
   }
   for (var i=0; i < a.length; i++)
   {
       files[i] = a[i][0];
       timest[i] = a[i][1];
       codedpath[i] = a[i][2];
   }
},

attachman : function(attach_h)
{
   if (ResizeUploaded.folder0!=null) 
   {
       ResizeUploaded.initfolder = ResizeUploaded.folder0;
       ResizeUploaded.folder0 = null;
       ResizeUploaded.selicon();
       return;
   }
   if (attach_h !=null) 
   ResizeUploaded.attachref = attach_h;
   else
      attach_h =ResizeUploaded.attachref;
   var dbgcolor = "lightyellow", ibgcolor="teal", bbgcolor = "grey", tbgcolor="white";
   if (typeof(DBGCOLOR) != "undefined")
      dbgcolor = DBGCOLOR;
   if (typeof(IBGCOLOR) != "undefined")
      ibgcolor = IBGCOLOR;
   if (typeof(BBGCOLOR) != "undefined")
      bbgcolor = BBGCOLOR;
   if (typeof(TBGCOLOR) != "undefined")
      tbgcolor = TBGCOLOR;
    
   var encoding1 = "utf-8";
   if (typeof(encoding) != "undefined")
       encoding1 = encoding;
    
   var selectedfiles = "";

   
   var ss = "";
   var nav = null;
   var allentries = ResizeUploaded.unzip(attach_h.value);
   
    
  if (allentries.replace(/ /g,'').length < 2)
   {
       var tt = "";
       if (typeof(uploadfile) == 'function') tt = ". <a href=javascript:uploadfile() >" + textmsg[294] + "</a>";
       ss = "<center>";
       if (ResizeUploaded.initfolder!=null)
          ss += "<a href=\"javascript:ResizeUploaded.selicon()\">" +  textmsg[675] + "</a>&nbsp;&nbsp;&nbsp;"; 
       ss += "<a href=\"javascript:ResizeUploaded.asraw()\"> " +   textmsg[1614].replace(/[^:]+:/,'') +" </a>&nbsp;&nbsp;&nbsp;<a href=javascript:ResizeUploaded.showwfhint()><!--[?]--></a></center>" + textmsg[89]+ tt + "<br><div id=codeshow></div>";
       myprompt(ss,null,null,textmsg[787]);
       //if (typeof(showattachment)!='undefined')  showattachment('');
       return;
   }
   
   var fparse = new CSVParse(allentries.replace(/,$/,''),"'","@", ",").nextMatrix();
   var files = new Array();
   var timest = new Array();
   var urls = new Array();  
   var codedpath = new Array();
   for (var i=0; i < fparse.length; i++)
   {
       files[i] = fparse[i][0];
       if (fparse[i].length==2)
       {
           urls[i] = fparse[i][1];
       }
       else 
       {
           timest[i] = fparse[i][1];
           codedpath[i] = fparse[i][2];
       }
   }
   ResizeUploaded.sort(files, timest, urls, codedpath);
   var maxcols = 3; 
   var wt = 150 + 4*ResizeUploaded.butwidth;
   ss += "<center>";   
   if (ResizeUploaded.initfolder!=null)
       ss += "<a href=\"javascript:ResizeUploaded.selicon()\">" +  textmsg[675] + "</a>&nbsp;&nbsp;&nbsp;";     
   
   if (typeof(haswebfolder)!='undefined' && haswebfolder || typeof(allShapes)!= 'undefined')
   {
       ss += "<a href=\"javascript:ResizeUploaded.asraw()\">" +   textmsg[1614].replace(/[^:]+:/,'') +" </a>&nbsp;&nbsp;&nbsp;<a href=javascript:ResizeUploaded.showwfhint()><!--[?]--></a></center>"; 
   }
   ss += "<form rel=opener name=form1 style=\margin:0px 0px 0px 0px\"  ><table id=\"attachaction\" cellpadding=2 cellspacing=2  border=0 class=outset1 style=\"border:0px #b0b0b0 outset;border-radius:3px;margin:3px 3px 3px 3px\" align=center  >";
   
   var maps = new Array();
   
   for (i =0; i < files.length; i++)
   {
      if (files[i]==null||files[i]==''||codedpath[i] ==null) continue;
      if (isNaN(files[i]) == false && codedpath[i].replace(/[0-9]/g,"")=="___")
      {
         
          ss +=  "<tr><td  style=\"border:1px #c0c0c0 solid;\"><nobr><a href=\"javascript:";
          ss +=   "ResizeUploaded.openImagelet('" + timest[i]+ "','" +  codedpath[i] + "')\">" + textmsg[1303] + files[i] + "</a></nobr></td>";
          ss+= "<td   class=GreenButton style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" align=center   onclick=\"";
          ss += "ResizeUploaded.infoImage('" +   timest[i] +  "','" +  codedpath[i] +  "')\"><nobr>" +  textmsg[1605] +"</nobr></td>";
          var bb = true;//typeof(issubmit)!='undefined' && issubmit == true ||  rdapname.indexOf(  'grading') >=0 || rdapname == 'assignedit' || rdapname.toLowerCase().indexOf("message") >= 0;
          
          ss+= "<td   class=GreenButton style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" align=center   onclick=\"";
          ss += "ResizeUploaded.insertImagelet('" +   files[i] +  "')\"><nobr>" +  textmsg[1604] +"</nobr></td>";
          ss+= "<td   class=OrangeButton style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" align=center   onclick=\"";
          ss += "ResizeUploaded.cutoff('" +  maps[timest[i]] +  "','" +   timest[i] +  "','" +  codedpath[i] +  "'," + files[i] + ")\"><nobr>" +  textmsg[1603] +"</nobr></td>";
          ss+= "<td   class=RedButton style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" align=center   onclick=\"";
          ss += "ResizeUploaded.deleteImagelet('" + files[i] + '@'+timest[i]  + "')\"><nobr>" +  textmsg[69] +"</nobr></td>";
          ss += "<td></td></tr>";
      }
      else  
      {
          ss += "<TR ><td  style=\"border:1px #c0c0c0 solid;\"><nobr><a href=\"javascript:";
          ss +=   "ResizeUploaded.openAttachedFile('" + codedpath[i] + "','" + files[i] + "')\">" + files[i] + "</a></nobr></td>";
          ss+= "<td    class=GreenButton style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" align=center   onclick=\"";
          ss += "ResizeUploaded.urlAttachedFile('" + codedpath[i] +  "')\"><nobr>" +  textmsg[546] +"</nobr></td>";
          var bb = true;//typeof(issubmit)!='undefined' && issubmit == true ||  rdapname.indexOf(  'grading') >=0 || rdapname == 'assignedit' || rdapname.toLowerCase().indexOf("message") >= 0;

          
          var jj = files[i].lastIndexOf(".");
          var fen = files[i].substring(jj + 1).toLowerCase();
           
          if (fen == 'jpg' || fen == 'jpeg' || fen == 'gif' || fen == 'png') 
          {
             maxcols = 5;
             if (timest[i]!=null ){
             if (allentries.indexOf("@" + files[i] + "@")<0)
             {
             ss += "<td style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" class=OrangeButton  align=center   onclick=\"";
             ss +=   "ResizeUploaded.uploaded('web/" + codedpath[i] + "','" + files[i] + '@' + timest[i] + "')\"><nobr>" +  textmsg[1294] +"</nobr></td>";
             }
             else 
             {
             ss += "<td style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\" class=OrangeButton  align=center   onclick=\"";
             ss +=   "ResizeUploaded.uploaded('web/" + codedpath[i] + "','" + files[i] + '@' + timest[i] + "')\"><nobr>" +  textmsg[1294] +"</nobr></td>";
             }}
             else ss += "<td></td>";
         ////  ss += "<td width=" +  Math.round(4.5*font_size) +" class=OrangeButton style=\"width:70px\" align=center   onclick=\"";
           //  ss +=    "ResizeUploaded.codeAttachedFile('"  + codedpath[i] + "')\"><nobr>" +  textmsg[1303] +"</nobr></td>";
            ss += "<td style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\"  class=OrangeButton   align=center   onclick=\"";
            ss +=    "ResizeUploaded.cutoff('" + codedpath[i] + "','" + files[i]+ "')\"><nobr>" +  textmsg[1303] +"</nobr></td>"; 
            maps[files[i]] = codedpath[i];
          }
          else
          {
              if (typeof(DBGCOLOR) == 'undefined') DBGCOLOR = "white";
              ss += "<td colspan=2 style=background-color:" + DBGCOLOR +"></td>"; 
          }
          if (timest[i]!=null)
          {
              ss+= "<td style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\"   class=RedButton   align=center   onclick=\"";
              ss +=   "ResizeUploaded.deleteAttachedFile('" + files[i] + '@'+timest[i]  +'@' + codedpath[i] +  "')\"><nobr>" +  textmsg[69] +"</nobr></td>";
          }
          else
          {
              ss+= "<td style=\"width:" + ResizeUploaded.butwidth + "px !important;border-radius:3px\"   class=RedButton   align=center   onclick=\"";
              ss +=   "ResizeUploaded.deleteAttachedFile('" + files[i] + '@' + codedpath[i] +  "')\"><nobr>" +  textmsg[69] +"</nobr></td>";
         
          }
          ss += "<td></td></tr>" ;
      }
   }
  ss += ("<tr><td colspan=" + (maxcols+1) + " id=codeshow><br></td></tr></table></form>"  );
  
   
  {
      myprompt(ss,null,null,   textmsg[787]  );
      if (promptwin!=null)  
      {
          var zz = promptwin.getElementsByTagName('table')[0];
          if (zz!=null && zz.rows.length > 1)
          {
              zz = zz.rows[1].cells[1].getElementsByTagName('table')[0];
              if (zz.rows!=null && zz.rows.length > 1)
              {
                  zz.rows[1].cells[0].style.padding = "0px 0px 0px 0px";
              }
          }
          
      }
  }
   ResizeUploaded.xnow = parseInt(promptwin.style.left.replace(/px/,''));
   ResizeUploaded.ynow = parseInt(promptwin.style.top.replace(/px/,''));
   ResizeUploaded.widthnow = document.body.scrollWidth;
   ResizeUploaded.heightnow = document.body.scrollHeight;
   
},
 
updatecell:function()
{
    var p = new CSVParse(ResizeUploaded.unzip(ResizeUploaded.attachref.value).replace(/,$/,''), '\'', '@',',');
    var y = p.nextMatrix(true);
    var tbl = document.getElementById('celledit');
    for (var i=0; i < tbl.rows.length; i++)
    {    
        var bb = (document.getElementById('CE' + i + '_2')!=null);
    for (var j=0; j < (bb?3:2); j++)
    {  
       if (bb)
       {
           var ij = document.getElementById('CE' + i + '_' + j);
           if (ij != null) 
           {
               if (i >= y.length)
                  y[i] = ['','',''];
               y[i][j] = ij.value.replace(/ /g,'');
               if (j==2) y[i][j] = y[i][j].replace(/@/g, escape('@')).replace(/,/g, escape(','));
                
           }
       }
       else
       {
           var ij = document.getElementById('CE' + i + '_' + j);
           if (ij != null && ij.value!='') 
           {
               if (i >= y.length)
                  y[i] = ['',''];
               y[i][j] = ij.value.replace(/ /g,'');
           }
       }
    }
}
    var z = '';
    for (i=0; i < y.length; i++)
    {
        if (y[i].length==3) 
        for (var j=0; j < 3; j++)
        {
            if (y[i][0].replace(/ /g,'')=='' || y[i][1].replace(/ /g,'')==''|| y[i][2]=='')continue;
            if (y[i][2].length>18 && isNaN(y[i][1]) && y[i][2].replace(/[0-9]/g,'')!="___")
                y[i][1] = parseTime(y[i][1]);
            z +=   y[i][j] + "@";
        }
        else
        for (var j=0; j < 2; j++)
        {
            if (y[i][0]=='' || y[i][1]=='')continue;
            z += (j==0?'':"'") +  y[i][j] + (j==0?'':"'") + "@";
        }    
        z = z.replace(/@$/,','); 
    }
    
    ResizeUploaded.attachref.value = ResizeUploaded.zip(z);
},
dontdel : '',
asraw : function()
{
    var ck = GetCookie('fileurlbuf');
    SetCookie('fileurlbuf','',-1);
    var hasone = false;
    if (ck == null || ck == 'null') 
        ck = '';
    else
        ResizeUploaded.dontdel += ck;
    ck = ck + ResizeUploaded.unzip(ResizeUploaded.attachref.value);
    var p = new CSVParse(ck.replace(/,$/,''), '\'', '@',',');
    var y = p.nextMatrix(true); 
    if (ck == '') 
    {
        y[0] = ['','','']; 
        y[1] = ['',''];
    }
    else 
    {
        y[y.length] = ['','',''];
        y[y.length] = ['',''];
    }
    var z  = "<table id=celledit border=1 style=border-collapse:collapse style=\"border:1px #dddddd solid;background-color:white\">";
    var sizes = [16,16,50];
    var xs = textmsg[1850].split(/@/);
   // z += "<tr  bgcolor=lightblue><td align=left>" + xs[0] + "</td><td>"+ xs[1] +"</td><td>"+ xs[2] +"</td></tr>";
    for (var i=0; i < y.length  ; i++)
    {
        z += "<tr>";
        if (y[i].length==3)
        for (var j=0; j < 3; j++)
        {
            if (y[i][j] == null) y[i][j] = '';
            var len = 20; if (y[i][j]!=null) len = y[i][j].length;
            if (len < sizes[j]) len = sizes[j];
            if (len > sizes[j] + 2) len = sizes[j] + 2; 
            len = Math.round(7.5*len);
            
            z += "<td align=left   style=\"background-color:white;font-size:" + font_size + "px;\"><input id=CE" + i + '_' + j + " value=\"" + y[i][j] + "\" style=\"background-color:white;color:black;border:0px;width:" + len+ "px;font-size:" + font_size + "px\"></td>";
        }
        else
        for (var j=0; j < 2; j++)
        {
            if (y[i][j] == null) y[i][j] = '';
            var len = 20; if (y[i][j]!=null) len = y[i][j].length;
            if (len < sizes[j]) len = sizes[j];
            if (len > sizes[j] + 2) len = sizes[j] + 2; 
            if (y[i][1]=='') y[i][1] = "http...";
            z += "<td align=left colspan=" + (j==0?"1":"2") + "  style=\"background-color:white;font-size:" + font_size + "px;\"><input id=CE" + i + '_' + j + " value=\"" + y[i][j] + "\" style=\"background-color:white;color:" +(y[i][1]==''?'black':'grey') + ";border:0px;width:100%;font-size:" + font_size + "px\" " + (j==0?"":" onchange=ResizeUploaded.fillfilename(this," + i +")  ") + "></td>";
        }    
        z += "</tr>";
    }
    
    z += "</table><br><center><input type=button style=\"background:url(image/addopt.png);width:18px;height:18px;background-position:-2px -2px;cursor:pointer\" onclick=\"ResizeUploaded.updatecell();ResizeUploaded.asraw()\">&nbsp;&nbsp;<input name=send type=button value=\"" + textmsg[225] + "\" class=OrangeButton style=width:" + Math.round(4.5*font_size) + "px onclick=\"ResizeUploaded.updatecell();ResizeUploaded.attachman(ResizeUploaded.attachref)\"><input name=cancel  value=\"" + textmsg[18] + "\" type=button class=GreenButton style=width:" + Math.round(4.5*font_size) + "px onclick=closeprompt()></center>";
    
    var ss = '<center>';
    if (ResizeUploaded.initfolder!=null)
          ss += "<a href=\"javascript:ResizeUploaded.selicon()\">" +  textmsg[675] + "</a>&nbsp;&nbsp;&nbsp;"; 
    ss += '<a href="javascript:ResizeUploaded.attachman(ResizeUploaded.attachref)">' 
     + textmsg[1614].replace(/:.*/,'') + '</a></center>' + z;
    myprompt(ss,null,null,textmsg[787] );
},
fillfilename:function(tb,i)
{
    var j = tb.value.lastIndexOf('/');
    if (j==-1) return;
    var t1 = document.getElementById( "CE" + i + '_0');
    if (t1.value=='')  
    {
       var fn = tb.value.substring(j+1);
       if (fn.length>16) fn = fn.substring(fn.length-16);
       t1.value = fn;
    }
},
initfolder: null,
iframewin:null,
getIFrameSelected:function()
{
    var s = ResizeUploaded.iframewin.selected();
    ResizeUploaded.attachref.value = ResizeUploaded.zip(ResizeUploaded.unzip(ResizeUploaded.attachref.value)+ s);
},
selicon: function()
{
    if (ResizeUploaded.initfolder!=null)
    myprompt(
     ""//<center><input name=send type=button value=\"" + textmsg[1600] + "\" class=OrangeButton style=width:" + Math.round(4.5*font_size) + "px onclick=\"ResizeUploaded.getIFrameSelected();ResizeUploaded.attachman(ResizeUploaded.attachref)\"><input name=cancel  value=\"" + textmsg[18] + "\" type=button class=GreenButton style=width:" + Math.round(4.5*font_size) + "px onclick=closeprompt()></center><br>" 
   + "<iframe id=filebrowse src=Thumbs?folder=" + ResizeUploaded.initfolder + " width=450 height=550 />",null,null,ResizeUploaded.initfolder); 
},
addAnentry : function(fn, tm, code)
{
    var x = ResizeUploaded.unzip(ResizeUploaded.attachref.value);
    if (x.indexOf(code) < 0)
    {
        x += fn + '@' + tm + '@' + code + ',';
    }
    ResizeUploaded.attachref.value = ResizeUploaded.zip(x);
    if (typeof(showattachment)!='undefined')  showattachment(x);
},
deleteByCode : function(c)
{
    var x = ResizeUploaded.unzip(ResizeUploaded.attachref.value).replace(/,$/,'');
    var y = (new CSVParse(x,'\'',"@", ",")).nextMatrix();
    var str = '';
    for (var i=0; i < y.length; i++)
    {
        if (y[i][2]!=c)
            str += y[i][0] + '@' + y[i][1] + '@' + y[i][2] + ',';
    }
    ResizeUploaded.attachref.value = ResizeUploaded.zip(str);
    if (typeof(showattachment)!='undefined')  showattachment(str);
}, 
deleteImagelet : function(filename)
{
    var v = ',' + ResizeUploaded.unzip(ResizeUploaded.attachref.value); var v0=v;
    var k = v.indexOf(','+filename + '@');
    if (k < 0) return;
    v = v.substring(0,k) + v.substring(k + filename.length + 2).replace(/[^,]+/,'');
    
    ResizeUploaded.attachref.value = ResizeUploaded.zip(v.replace(/^,/,''));
    ResizeUploaded.attachman(ResizeUploaded.attachref);
},
insertImagelet : function(j)
{
    var sa = document.getElementById("codeshow");
    var ss = textmsg[311].replace(new RegExp("("+textmsg[1303]+ ")","ig"),"$1" + j) ;
    var dic = textmsg[1613].split(/@/);
    var  associatedtxt = textareatobesearch;
    if ( associatedtxt != null && typeof(caretPos)!='undefined') 
    {
        ResizeUploaded.oldonclick = associatedtxt.onclick;
        associatedtxt.onclick = function()
        {
            ResizeUploaded.caretpos = caretPos(associatedtxt);
            
            if (ResizeUploaded.oldonclick!=null) 
                ResizeUploaded.oldonclick();
        }
        ss += ",<br>" + textmsg[312];
        for (var k=0; k < 3; k++)
           ss += " <a href=\"javascript:ResizeUploaded.goinsert(" + j + "," + k  + ")\">" + dic[k] + "</a> ";
    }
    
    sa.innerHTML = ss  ;
},
oldonclick : null,
caretpos:0, 
goinsert : function(n,k)
{
    var j = ResizeUploaded.caretpos;
    var  associatedtxt = textareatobesearch;
    if ( associatedtxt == null || j == 0)
    { 
        var sa = document.getElementById('codeshow');
        if (sa!=null)
        sa.innerHTML = sa.innerHTML + "<br>" + textmsg[1606];
        return;
    }
     
    var m = '';
    if (k==0) m=':1';else if (k==2) m= ':2'; 
    associatedtxt.value = associatedtxt.value.substring(0,j) + "[Imagelet" +  n + m+ "]" + associatedtxt.value.substring(j); 
    
},
infoImage : function(fn, dim) 
{
     var sa = document.getElementById("codeshow");
     var ds = dim.split(/_/);
     sa.innerHTML = fn  + ", x=" + ds[0] + ", y=" + ds[1] + ", w=" + ds[2] + ", h=" + ds[3]
},
openImagelet : function(filename, dim)
{
    var v = ResizeUploaded.unzip(ResizeUploaded.attachref.value).replace(/,$/,'');
    var mt =  (new CSVParse(v, "'", "@", ",")).nextMatrix(true);
    for (var i=0; i < mt.length; i++)
    {
        if (filename == mt[i][0]) break;
    }
    if (i == mt.length) return;
    if (mt[i].length==3)
    var url = ResizeUploaded.goodopenurl(mt[i][2]);
    else
        url = ResizeUploaded.goodopenurl(mt[i][1]);
    var sa = document.getElementById("codeshow");
    var ns = dim.split(/_/);
    
    sa.innerHTML = '<div style="background-image:url('+ url + ');background-position:-' + ns[0] + "px -" + ns[1] + "px;width:" + ns[2] + "px;height:" + ns[3] + 'px" >&nbsp&nbsp;</div>';
 
},
urlAttachedFile : function(pathcode)
{
    var showarea = document.getElementById('codeshow');
    showarea.style.border = "1px #b0b0b0 outset";
    if (pathcode.indexOf('http://')==0 || pathcode.indexOf('https://')==0)
         showarea.innerHTML = pathcode;
    else 
         showarea.innerHTML = document.location.toString().replace( /[^\\/]+$/,  ResizeUploaded.goodopenurl(pathcode,false ));
     
},
activetextarea : function(x)
{
    return null;
},
setformat2html : function()
{
    
},
picfilename : null, 
 
cutoff : function(pathcode,fn,dim, num) 
{
    if (pathcode==null)
    {
        pathcode = ResizeUploaded.pathcode.replace(/@.*/,'');
        fn = ResizeUploaded.filename.replace(/@.*/,'');
    }
      
    ResizeUploaded.picfilename = fn; 
    var x = textmsg[1602] +  "<input type=button  class=GreenButton style=width:" + Math.round(4.5*font_size) + "px value=\"" + textmsg[16] + "\" onclick=\"ResizeUploaded.selectit(" + (num==null?'':num)+ ")\"><div style=display:inline id=selectlet></div>";
    myprompt(x +"<img id=imgwork src=\"" + ResizeUploaded.goodopenurl(pathcode) +  "\" onload=\"ResizeUploaded.goodposition(this);ResizeUploaded.cropshow(null);" + (dim==null?'':("ResizeUploaded.moveTo(["+dim.replace(/_/g,',')+"]);")) + "\" style=\"margin:0px 0px 0px 0px\" >",
    null, null, (num==null? (textmsg[1600]+ textmsg[1303]) : (textmsg[1603] + " " + textmsg[1303] + num)) );
     
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[1].cells[0].style.padding = "0px 0px 0px 0px";
    promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('img')[0].onclick
    = function()
    {
        var b = document.getElementById("dragcropbox"); 
        if (b!=null) document.body.removeChild(b);
        closeprompt();
    } 
},
 
selectit : function(j)
{
    var pic = document.getElementById('imgwork');
    var XY = findPositionnoScrolling(pic);
    var w = pic.offsetWidth;
    var h = pic.offsetHeight;
    var b = document.getElementById("dummycenter");
    var cw, ch;
    if (b==null) return; 
    if ( b != null)
    {
        cw = b.offsetWidth;
        ch = b.offsetHeight;
         
        var xy = findPositionnoScrolling(b);
        xy[0] -= XY[0];
        xy[1] -= XY[1];
        if (xy[0] < 0)
            xy[0] = 0;
        if (xy[1] < 0)
            xy[1] = 0;
    } 
    var mt = (new CSVParse(ResizeUploaded.unzip(ResizeUploaded.attachref.value).replace(/,$/,''),"'","@",",")).nextMatrix();
    if (j == null || j=='' || isNaN(j)) 
    {
        j = 0;
        for (var i=0; i < mt.length; i++)
        {
            if (mt[i].length==3 && !isNaN(mt[i][0]) && mt[i][2].replace(/[0-9]/g,'')=='___')  
            {
            var k = parseInt(mt[i][0]);
            if (k > j) j = k;
            }
        }
        j++;
        var xx = ResizeUploaded.unzip(ResizeUploaded.attachref.value) + (j) + "@" + ResizeUploaded.picfilename.replace(/@.*/,'') + "@" + xy[0] + "_" +  xy[1] + "_" + cw + "_" + ch + ",";
        ResizeUploaded.attachref.value = ResizeUploaded.zip(xx);
        var x = promptwin.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0].cells[2];
        b.style.left = XY[0] + 'px'; b.style.top = XY[1] + 'px';
        
        var zt = document.getElementById('selectlet');
        zt.innerHTML = zt.innerHTML.replace(new RegExp(textmsg[1611] + ".*$"),'') + '&check;' + textmsg[1611] + "<input type=button class=GreenButton style=width:" + Math.round(4.5*font_size) + "px name=t1 value=\"" + textmsg[1612] + "\" onclick=\"ResizeUploaded.attachman(ResizeUploaded.attachref)\">";
    }
    else
    {
        var y= ',' + ResizeUploaded.unzip(ResizeUploaded.attachref.value);
        var w = "," + j + "@" + ResizeUploaded.picfilename + "@";
        var w1 = w + xy[0] + "_" +  xy[1] + "_" + cw + "_" + ch;
        if(typeOf(imagelet2wh) != 'undefined' && typeOf(pagenum) != 'undefined' )
        {
            imagelet2wh['imagelet' + j + '_' + pagenum] =  (parseInt(''+cw)/2) + "px/" + (parseInt(''+ch)/2) + 'px';
        }
        var k = y.indexOf(w); 
        if (k>=0)
        {
            y = y.substring(0,k) + w1 + y.substring(k + w.length).replace(/^[0-9|_]+/,'');
            ResizeUploaded.attachref.value = ResizeUploaded.zip(y.replace(/^,/,''));
            document.body.removeChild(document.getElementById('dragcropbox'));
            closeprompt();
        }  
    }
    
     
    if (typeof(showattachment)!='undefined') showattachment(ResizeUploaded.attachref.value);
               // url += "&cropx=" + xy[0] + "&cropy=" + xy[1] + "&cwidth=" + cw + "&cheight=" + ch;
},
codeAttachedFile : function(pathcode)
{
    var showarea = document.getElementById('codeshow');
    showarea.style.border = "1px #b0b0b0 outset";
    showarea.innerHTML = "&lt;img src=\"" + ResizeUploaded.goodopenurl(pathcode,false)   + "\" &gt;";
    var ta = ResizeUploaded.activetextarea(pathcode);
    if (ta != null)
    {
        var j = caretPos(ta);
        ta.value = ta.value.substring(0,j) +  "<img src=\"" + ResizeUploaded.goodopenurl(pathcode)   + "\" style=display:inline;float:right >" +  ta.value.substring(j); 
         
        ResizeUploaded.setformat2html();
        myprompt(textmsg[794]);
    }
} 
}

function failupload(err,leng,newfilename,js)
{
    
    if (err == null || err == '')
    {
         
    }
    else if (typeof(err) == 'number')
    {
        var y =  ResizeUploaded.filename;
         
        ResizeUploaded.filename =  newfilename+ '@' + err;
        if (ResizeUploaded.attachref!=null)
        {
            var z = ResizeUploaded.unzip( ResizeUploaded.attachref.value );
            
            var j = z.indexOf(y);
            if (j >-1)
            {  
                var k = j + y.length;
                while (k < z.length && z.charAt(k) != ',') k++;
                var w = z.substring(0,j) + ResizeUploaded.filename + '@' + js;
                if (k < z.length)  w += z.substring(k); 
                
                ResizeUploaded.attachref.value = ResizeUploaded.zip(w);
            }
        }
         
        if (ResizeUploaded.dosplitnow)
        {
            ResizeUploaded.cutoff();
            ResizeUploaded.dosplitnow = false;
        }
    }
    else
        myprompt(err);
    
    
}
 
function viewattachment(t)
{
    
    if (t == null || t =='') return '';
    var attarr = ResizeUploaded.unzip(t).replace(/,$/,'').split(/,/);
    var tmptxt = '';
    for (var i = 0; i < attarr.length; i++)
    {
        var xs = attarr[i].split(/@/);
        if (tmptxt!='') tmptxt += ", "; 
        tmptxt += '<span style=color:blue;cursor:pointer onclick="openpicorfile(\''+ xs[2].replace(/^[ ]+/,'') + '\',\'' + xs[0] + '\',this)">' +  xs[0] + '</span>';
    }
    return tmptxt;
}
 




