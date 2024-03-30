
/************************************************************************** 
* (C) Copyright 2004-2014 by Systems on Web, Inc.  All Rights Reserved.  *
* Author: Zhongyan Lin                                                   *
**************************************************************************/
var numf = 0;
var textareatobesearch = null; 
var oldtextareatobesearch = null; 
var foundat = -1; 
var targetstr = "";
var foundstring = "";
function tolinefeed(str1)
{
 if (str1==null) return null;
 return str1.replace(/([^\\])\\t/g,"$1\t").replace(/([^\\])\\n/g,"$1\n").replace(/\\\\t/g,"\\t").replace(/\\\\n/g,"\\n").replace(/^\\t/,"\t").replace(/^\\n/,"\n");
}
function replacestrintextarea(str1)
{
 str1 = tolinefeed(str1); 
 if (textareatobesearch == null) return;
 if (navigator.appName=='Microsoft Internet Explorer')
 {
 var tas =  document.selection.createRange();
 var oldtxt = tas.text;
 if (oldtxt.length > 0)
 {
 tas.text = str1;//replace(targetstr,str1);
 numf--;
 findstrintextarea(targetstr);
 }
 }
 else if (foundat > -1)
 {
 var txt = textareatobesearch.value;
 textareatobesearch.value = txt.substring(0,foundat)
 + txt.substring(foundat).replace(foundstring, str1);
 foundat += str1.length - 1;
 findstrintextarea(targetstr); 
 }
}

function replacestrintextareareg(str1)
{
 str1 = tolinefeed(str1);
 var tas =  document.selection.createRange();
 var oldtxt = tas.text;
 if (oldtxt.length > 0)
 {
 //tas.text = str1;
 tas.text = replace(targetstr,str1);
 numf--;
 findstrintextarea(targetstr);
 } 
} 
function findstrintextarea(str) 
{
 
 targetstr = str;
 if (textareatobesearch == null || str==null || str =='') return false;
 textareatobesearch.focus();
 var found = false; 
 if (navigator.appName=='Microsoft Internet Explorer') 
 {
 var text = textareatobesearch.createTextRange(); 
 for(var i=0; i<=numf && (found=text.findText(str)) != false; i++) 
 {
 text.moveStart('character', 1);
 text.moveEnd('textedit');
 }
 if(found) 
 {
 text.moveStart('character', -1);
 text.findText( str);
 text.select();
 text.scrollIntoView();
 numf++; 
 return true;
 }
 else
 {
 numf=0; 
 }
 return false;
 }
 else
 {
 if (oldtextareatobesearch != textareatobesearch) foundat = -1;
 oldtextareatobesearch = textareatobesearch;
 var txt = textareatobesearch.value;
 
 var foundstr = txt.substring(foundat+1).match(new RegExp(str));
 if (foundstr !=null)
 {
 foundstring = "" + foundstr;
 
 var j = txt.substring(foundat+1).indexOf(foundstring);
 foundat = j + foundat + 1;
 var linenum = 0, k=0;
 while (k <= foundat){  if (txt.charAt(k)=='\n') linenum++; k++;}
 
 var fnt = 15;
 if (typeof(font_size)!='undefined')
 fnt = font_size;
 if (typeof(document.f1)!='undefined' && typeof(document.f1.linenum)!='undefined')
 document.f1.linenum.value = linenum;

 textareatobesearch.scrollTop = (linenum*fnt);
 textareatobesearch.selectionStart = foundat;
 textareatobesearch.selectionEnd = foundat + foundstring.length;
 textareatobesearch.scrollIntoView();
 }
 else
 {
 textareatobesearch.selectionStart = 0;
 textareatobesearch.selectionEnd = 0;
 foundat = -1;
 }
 return (foundat > -1);
 }
}
var secondtextarea = null;
var secondnumf = 0;
var secondfoundat = -1;
function swap(source_a)
{
 if (textareatobesearch != source_a)
 {
 secondtextarea = textareatobesearch;
 var tmp = numf;
 numf = secondnumf;
 secondnumf = tmp;
 textareatobesearch = source_a;
 tmp = foundat;
 foundat = secondfoundat;
 secondfoundat = tmp;
 
 }
} 
 
function findstrintextarea2(sourcea,Patternt)
{
  
 if (Patternt==null)
 {
     if (typeof(fsnd)!='undefined') 
         Patternt = fsnd.Pattern;
     else
     {
         var fms = document.forms;
         var yy = false;
         for (var j=0; j < fms.length; j++)
         {
             var xs = fms[j].elements;
             for (var i=0; i < xs.length; i++)
             {
                 if (xs[i].name == 'Pattern')
                 {
                     Patternt= xs[i];
                     yy = true;
                     break;
                 }  
             }
             if (yy) break;
         }
     }
 } 
 if (sourcea==null)
 {
     myprompt('source null'); 
     return;
 }
 swap(sourcea);
 findstrintextarea(Patternt.value);
}
 
function replacestrintextarea2(source_a, NewString_t)
{
 if (source_a==null){myprompt('source null'); return;}
 swap(source_a);
 replacestrintextarea(NewString_t.value);
}

function searchreplacewin(ta)
{
 textareatobesearch = ta;
 var nav = window.open("","searchwin","location=0;toolboar=0,menubar=0,top=0,left=300,width=260,height=130");
 nav.document.getElementsByTagName("body")[0].innerHTML = "";
 nav.document.write("<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=" + encoding +"\"></head><body bgcolor=lighyellow><form rel=opener name=f  ><table>"
+"<tr><td><input name=old value=D></td><td>"
+"<input type=button name=findbtn  style=width:60 value=Next onclick=opener.findstrintextarea(document.f.old.value)>"
+"</td></tr><tr><td><input name=newone></td><td>"
+"<input type=button name=replacebtn style=width:60 value=Replace onclick=opener.replacestrintextarea(document.f.newone.value)>"
+"<table></form></body></html>");
}

function go2line(v)
{

 var j=0, i = parseInt(v);
 if ('' + i == 'NaN')
 {
 myprompt(v + ":" + textmsg[245]);
 return;
 }
 var txt = textareatobesearch.value;
 var N = txt.length;
 var ii= i;
 for (; i > 1 && j < N; j++)
 {
 if (txt.charAt(j) == '\n')
 i--;
 }

 if (i > 1)
 {
 myprompt('No such a line');
 return;
 }
 var k = j+1;
 for (; k < N && txt.charAt(k) != '\n';
 k++);
 
 
 if(textareatobesearch.setSelectionRange)
 {
 textareatobesearch.setSelectionRange(j, k);
 textareatobesearch.focus();
 var fnt = 15;
 if (typeof(font_size)!='undefined')
 fnt = font_size;
 textareatobesearch.scrollTop = (ii*fnt);
 }
 else
 {
 var r = textareatobesearch.createTextRange();
 r.collapse(true);
 r.moveStart('character', j-ii +1);
 r.moveEnd('character', k-j);
 r.select();
 r.scrollIntoView();
 }

}

var holdtoolbartable = '';
var holdtoolbartablelength = 0;
var latexhintbar = [
[0, '<span style=font-size:20px;vertical-align:middle><nobr>a/b</nobr></span>',          'fraction',                   '\\frac{}{}'],
[1, '<table  border=0 cellpadding=0 cellspacing=0  width=25 ><tr height=12><td rowspan=2 width=15 align=right style=font-size:18px>a</td><td width=10 style=font-size:13px align=left >b</td></tr><tr height=11><td  style=font-size:13px> </td></tr></table>',        'exponential',                '{}^{}'],
[2, '<span style=font-size:20px;vertical-align:middle>\u03A3</span>',      'summation',                  '\\sum_{}^{}'],
[3, '<span style=font-size:20px;vertical-align:middle>lim</span>',          'limit',                      '\\lim_{}'],
[4, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">\u222B</span>',      'indefinite integral',        '\\int' ],
[5, '<table  border=0 cellpadding=0 cellspacing=0  width=25 ><tr height=10><td rowspan=2 width=12 style=font-size:20px valign=bottom  align=right >\u222B</td><td  width=13  align=left style=font-size:13px  valign=bottom  >x</td></tr><tr  height=10><td wisth=13 align=left style=font-size:13px  valign=middle  >a</td></tr></table>',  'definite integral',          '\\int_{}^{}'],
[6, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">|m|</span>',          'vertail matrix',             '\\begin{vmatrix}  &  & \\\\ &  & \\end{vmatrix}'],
[7, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">(m)</span>',          'parenthes matrix',           '\\begin{pmatrix}  &  & \\\\ &  & \\end{pmatrix}'],
[8, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">equ</span>',          'labeled equation',           '\\begin{equation}   \\end{equation}'],
[9, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">eqn</span>',          'equation array',             '\\begin{eqnarray}  &=&  \\\\ &=&  \\end{eqnarray}'],
[10, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">eq*</span>',        'no-label equation array',    '\\begin{eqnarray*}  &=&  \\\\ &=& \\end{eqnarry*}'], 
[11, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">\u03C0</span>',      'Greek letter pi',        '\\pi' ],
[12, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">\u03B1</span>',  'Greek letter alpha',          '\\alpha'],
[13, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">\u03B2</span>',          'Greek letter belta',                   '\\beta'],
[14, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">\u03B3</span>',        'Greek letter gamma',                '\\gamma'],
[15, '<span style="font-size:20px;width:25px;text-align:center;vertical-align:middle">\u03B8</span>',      'Greek letter',                  '\\theta'] 
];
 
function showlatexpanel(ta,btn)
{
    var tbl0 = document.getElementById('latexbtntbl');
    if ( tbl0 != null  &&   tbl0.innerHTML.indexOf('insertlatexhints') >= 0 )
    {
        tbl0.parentNode.removeChild(tbl0);
    }
    if (typeof(hidemyhint) !='undefined') hidemyhint();
    textareatobesearch = ta;
    var moholdtoolbartable = '';
    holdtoolbartable = ''; 
    var v = document.getElementById("thetoolbar"); //for makeform case
    var makeformcase = ( v != null && v.tagName.toLowerCase() == 'td');
    var ll = ((latexhintbar.length + 1)*31 + 4);
    if (btn == null)makeformcase = true;
    if (btn!=null && v == null)    
    { 
        v =    btn;
        while (v.tagName.toLowerCase()!='table' && v.tagName.toLowerCase()!='div'){ v = v.parentNode;}
        v = v.parentNode;
        if (v.tagName.toLowerCase()=='form')
        {
           while (v.tagName.toLowerCase()!='table'){ v = v.parentNode;}
           v = v.parentNode;
        }
        
        holdtoolbartablelength = v.offsetWidth;
        holdtoolbartable = v.innerHTML;
        moholdtoolbartable = v.innerHTML.replace(/<input [^>]+>/ig, '<input type=hidden />').replace(/<table[^>]*>/ig,'').replace(/<tr[^>]*>/ig,'').replace(/<td[^>]*>/ig,'').replace(/<.table[\s]*>/ig,'').replace(/<.tr[\s]*>/ig,'').replace(/<.td[\s]*>/ig,'').replace(/<.?tbody>/ig,'');
        moholdtoolbartable = ""; 
    }
    else if (btn!=null && v.tagName.toLowerCase() == 'table') // this is for moving toolbar case
    {
        v = v.parentNode;  //go to td 
        holdtoolbartable = v.innerHTML;
        holdtoolbartablelength = v.offsetWidth;
    }
    
    var cellheight = 25;
    if (btn!=null) cellheight = btn.offsetHeight;
    var str = '<table id=latexbtntbl cellspacing=1 cellpadding=0 style="layout:fixed;overflow:visible"><tr height=25>';
     
    if (btn == null)
         str += '<td class=outset1 width=25 style="border:1px #333333 outset;width:25px;" align=center  onclick="topdf(\"' + ta.name + '\")">2PDF</td>';
    else if (makeformcase == false)
         str += '<td class=outset1 width=25 style="border:1px #333333 outset;width:25px;" align=center  onclick="restoreregulartoolbar(this)"><img src=image/return.png height=20></td>';
    else
         str += "<td  class=outset1 style=\"padding:0px 0px 0px 0px;border:1px #333333 outset;width:25px;height:" + btn.offsetHeight + "px;font-size:8px;overflow:hidden\" width=25 align=center> <br><div style=\"font-family:arial;font-size:12px;border:1px #505050 solid;border-radius:3px;width:13px\" onclick=\"closeprompt1(this)\" >x</div></td>";
     
    for (var i=0; i <  latexhintbar.length; i++)
    {
         str += '<td class=outset1  style="font-size:22px;border:1px #333333 outset;width:25px !important;height:' + cellheight + 'px;overflow:visible;font-size:25px;vertical-align:middle" align=center  valign=middle  onmouseout="hidehint(' + i + ')" onmouseover="showhint(' + i +')" onclick="insertlatexhints(' + i + ')">' + latexhintbar[i][1] + '</td>';
    }
     
    str += '<td class=outset1  style="font-size:15px;border:1px #333333 outset;width:25px !important;height:' + cellheight + 'px;overflow:visible;vertical-align:middle" align=center  valign=middle   onclick=showlatexsymbols()>&bull;&bull;&bull;</td>';
    str += '<td>' + moholdtoolbartable +'</td></tr></table>';

   
    if (btn == null || makeformcase == false)
    {
        v.style.width = ll + 'px !important';
        v.innerHTML = str.replace('<table', '<table width=' + ll )  ;
        v.style.overflow = 'visible';
        displaylatex(v);
        v.style.width = ll + 'px !important';
    }
    else
    {
        if (typeof(findPositionnoScrolling) == 'function'   && typeof(displaylatex) == 'function')
        { 
             
            var xy = findPositionnoScrolling(ta);
            var promptwin1 = document.createElement('div');
            promptwin1.id = "latextoolbar";
            promptwin1.style.cssText = "z-index:20;overflow:visible;position:absolute;border:1px #b0b0b0 outset;padding:0px;top:" + (xy[1]-35) +"px;left:"
            + (xy[0]+5) +"px;width:" + ll + 'px !important';
            promptwin1.innerHTML =  str.replace('<table', '<table width=' + ll ) ;
            document.body.appendChild(promptwin1);
            var dragcell = promptwin1.getElementsByTagName('table')[0].rows[0].cells[0];
            if (typeof (Drag)!='undefined')Drag.init(dragcell,promptwin1);
        }
    }
    
    var tbl = document.getElementById('latexbtntbl');
    tbl.parentNode.style.width = ll + 'px';
    for (var k=0; k <= latexhintbar.length; k++)
        tbl.rows[0].cells[k].width = '30';
}

function closeprompt1(mg)
{
   var v = mg.parentNode;
   while (v.tagName.toLowerCase() !='div' )  
      v = v.parentNode;
   document.body.removeChild(v);
}
function showhint(i)
{
    window.status = latexhintbar[i][2];
}
function hidehint(i)
{
    window.status = "";
}

function restoreregulartoolbar(btn)
{
     if (holdtoolbartable=='') return;
     var v = document.getElementById('latexbtntbl');
     if (v!=null) 
     {
         v = v.parentNode;
         LaTexHTML.deformat(v);
         v.innerHTML = holdtoolbartable;
         holdtoolbartable = '';
         v.style.width = holdtoolbartablelength  + 'px';
     }
}

function insertlatexhints(i)
{
    insertstrintotextarea(latexhintbar[i][3]);
}
 
function insertstrintotextarea(myValue)
{
var myField = textareatobesearch;
var j = caretPos(myField), m=j-1;
var n =0;
while (m>=0)
{  
    if (myField.value.charAt(m) =='$')
    n++;
    m--;
}
var x = '';
if (j>0) x = myField.value.substring(0,j);
if (n % 2 == 0)
{
   myField.value =  x + "$" + myValue + "$"  + myField.value.substring(j);
}
else
{
   myField.value = x +  myValue +  myField.value.substring(j); 
}
 
}


var latexsymbols = ["\\alpha","\u03B1",
"\\beta","\u03B2",
"\\gamma","\u03B3",
"\\delta","\u03B4",
"\\epsilon","\u03B5",
"\\varepsilon","\u025B",
"\\zeta","\u03B6",
"\\eta","\u03B7",
"\\theta","\u03B8",
"\\vartheta","\u03D1",
"\\iota","\u03B9",
"\\kappa","\u03BA",
"\\lambda","\u03BB",
"\\mu","\u03BC",
"\\nu","\u03BD",
"\\xi","\u03BE",
"\\pi","\u03C0",
"\\varpi","\u03D6",
"\\rho","\u03C1",
"\\varrho","\u03F1",
"\\varsigma","\u03C2",
"\\sigma","\u03C3",
"\\tau","\u03C4",
"\\upsilon","\u03C5",
"\\phi","\u03C6",
"\\varphi","\u03D5",
"\\chi","\u03C7",
"\\psi","\u03C8",
"\\omega","\u03C9",
"\\Gamma","\u0393",
"\\Delta","\u0394",
"\\Theta","\u0398",
"\\Lambda","\u039B",
"\\Xi","\u039E",
"\\Pi","\u03A0",
"\\Sigma","\u03A3",
"\\Upsilon","\u03A5",
"\\Phi","\u03A6",
"\\Psi","\u03A8",
"\\Omega","\u03A9",
"\\frac","\\faqc",
"\\over","\\over",
"\\half","\\half",
"\\quarter","\\quarter",
//fractions
"\\frac12","\u00BD",
"\\frac14","\u00BC",
"\\frac34","\u00BE",
"\\frac13","\u2153",
"\\frac23","\u2154",
"\\frac15","\u2155",
"\\frac25","\u2156",
"\\frac35","\u2157",
"\\frac45","\u2158",
"\\frac16","\u2159",
"\\frac56","\u215A",
"\\frac18","\u215B",
"\\frac38","\u215C",
"\\frac58","\u215D",
"\\frac78","\u215E",

//binary operation symbols
"\\pm","\u00B1",
"\\mp","\u2213",
"\\triangleleft","\u22B2",
"\\triangleright","\u22B3",
"\\cdot","\u22C5",
"\\star","\u22C6",
"\\ast","\u002A",
"\\times","\u00D7",
"\\div","\u00F7",
"\\circ","\u2218",
//"\\bullet","\u2219",
"\\bullet","\u2022",
"\\oplus","\u2295",
"\\ominus","\u2296",
"\\otimes","\u2297",
"\\bigcirc","\u25CB",
"\\oslash","\u2298",
"\\odot","\u2299",
"\\land","\u2227",
"\\wedge","\u2227",
"\\lor","\u2228",
"\\vee","\u2228",
"\\cap","\u2229",
"\\cup","\u222A",
"\\sqcap","\u2293",
"\\sqcup","\u2294",
"\\uplus","\u228E",
"\\amalg","\u2210",
"\\bigtriangleup","\u25B3",
"\\bigtriangledown","\u25BD",
"\\dag","\u2020",
"\\dagger","\u2020",
"\\ddag","\u2021",
"\\ddagger","\u2021",
"\\lhd","\u22B2",
"\\rhd","\u22B3",
"\\unlhd","\u22B4",
"\\unrhd","\u22B5",


//BIG Operators
"\\sum","\u2211",
"\\prod","\u220F",
"\\bigcap","\u22C2",
"\\bigcup","\u22C3",
"\\bigwedge","\u22C0",
"\\bigvee","\u22C1",
"\\bigsqcap","\u2A05",
"\\bigsqcup","\u2A06",
"\\coprod","\u2210",
"\\bigoplus","\u2A01",
"\\bigotimes","\u2A02",
"\\bigodot","\u2A00",
"\\biguplus","\u2A04",
"\\int","\u222B",
"\\oint","\u222E",

//binary relation symbols
":=",":=",
"\\lt","<",
"\\gt",">",
"\\ne","\u2260",
"\\neq","\u2260",
"\\le","\u2264",
"\\leq","\u2264",
"\\leqslant","\u2264",
"\\ge","\u2265",
"\\geq","\u2265",
"\\geqslant","\u2265",
"\\equiv","\u2261",
"\\ll","\u226A",
"\\gg","\u226B",
"\\doteq","\u2250",
"\\prec","\u227A",
"\\succ","\u227B",
"\\preceq","\u227C",
"\\succeq","\u227D",
"\\subset","\u2282",
"\\supset","\u2283",
"\\subseteq","\u2286",
"\\supseteq","\u2287",
"\\sqsubset","\u228F",
"\\sqsupset","\u2290",
"\\sqsubseteq","\u2291",
"\\sqsupseteq","\u2292",
"\\sim","\u223C",
"\\simeq","\u2243",
"\\approx","\u2248",
"\\cong","\u2245",
"\\Join","\u22C8",
"\\bowtie","\u22C8",
"\\in","\u2208",
"\\ni","\u220B",
"\\owns","\u220B",
"\\propto","\u221D",
"\\vdash","\u22A2",
"\\dashv","\u22A3",
"\\models","\u22A8",
"\\perp","\u22A5",
"\\smile","\u2323",
"\\frown","\u2322",
"\\asymp","\u224D",
"\\notin","\u2209",
"\\begin{eqnarray}","X",
"\\begin{array}","X",
"\\\\","}&{",
"\\end{eqnarray}","}}",
"\\end{array}","}}",
"\\big","1.2"   ,
"\\Big","1.6"   ,
"\\bigg","2.2"   ,
"\\Bigg","2.9"   ,
"\\large","1.2"   ,
"\\Large","1.6"   ,
"\\LARGE","2.2"   ,

"\\left","X",
"\\right","X",
"{","{",
"}","}",

 
"\\lbrack","",
"\\{","{"       ,
"\\lbrace","{"       ,
"\\langle","\u2329"   ,
"\\lfloor","\u230A" ,
"\\lceil","\u2308" ,
"\\rbrack","]",
"\\}","}",
"\\rbrace","}",
"\\rangle","\u232A",
"\\rfloor","\u230B",
"\\rceil","\u2309",

// "|", "\\|", "\\vert" and "\\Vert" modified later: lspace = rspace = 0em
"|","\u2223" ,
"\\|","\u2225" ,
"\\vert","\u2223" ,
"\\Vert","\u2225" ,
"\\mid","\u2223" ,
"\\parallel","\u2225" ,
"/","/" ,
"\\backslash","\u2216" ,
"\\setminus","\\",

//miscellaneous symbols
"\\!","",
"\\,","<div style=width:0.167em><!----></div>",
"\\>","<div style=width:0.222em><!----></div>",
"\\:","<div style=width:0.222em><!----></div>",
"\\,","<div style=width:0.278em><!----></div>",
 
"\\quad","<div style=width:1em><!----></div>",
"\\qquad","<div style=width:2em><!----></div>",
//"{}","\u200B", // zero-width
"\\prime","\u2032",
"'","\u02B9",
"''","\u02BA",
"'''","\u2034",
"''''","\u2057",
"\\ldots","\u2026",
"\\cdots","\u22EF",
"\\vdots","\u22EE",
"\\ddots","\u22F1",
"\\forall","\u2200",
"\\exists","\u2203",
"\\Re","\u211C",
"\\Im","\u2111",
"\\aleph","\u2135",
"\\hbar","\u210F",
"\\ell","\u2113",
"\\wp","\u2118",
"\\emptyset","\u2205",
"\\infty","\u221E",
"\\surd","\\sqrt{}",
"\\partial","\u2202",
"\\nabla","\u2207",
"\\triangle","\u25B3",
"\\therefore","\u2234",
"\\angle","\u2220",
"\\diamond","\u22C4",
"\\Diamond","\u25C7",
"\\neg","\u00AC",
"\\lnot","\u00AC",
"\\bot","\u22A5",
"\\top","\u22A4",
"\\square","\u25AB",
"\\Box","\u25A1",
"\\wr","\u2240",

//standard functions
"\\arccos","arccos",
"\\arcsin","arcsin",
"\\arctan","arctan",
"\\arg","arg",
"\\cos","cos",
"\\cosh","cosh",
"\\cot","cot",
"\\coth","coth",
"\\csc","csc",
"\\deg","deg",
"\\det","det",
"\\dim","dim",  
"\\exp","exp",
"\\gcd","gcd",  
"\\hom","hom",
"\\inf","inf",
"\\ker","ker",
"\\lg","lg",
"\\lim","lim",
"\\liminf","liminf",
"\\limsup","limsup",
"\\ln","ln",
"\\log","log",
"\\max","max",
"\\min","min",
"\\Pr","Pr",
"\\sec","sec",
"\\sin","sin",
"\\sinh","sinh",
"\\sup","sup",
"\\tan","tan",
"\\tanh","tanh",
"\\gets","\u2190",
"\\leftarrow","\u2190",
"\\to","\u2192",
"\\rightarrow","\u2192",
"\\leftrightarrow","\u2194",
"\\uparrow","\u2191",
"\\downarrow","\u2193",
"\\updownarrow","\u2195",
"\\Leftarrow","\u21D0",
"\\Rightarrow","\u21D2",
"\\Leftrightarrow","\u21D4",
"\\iff","~\\Longleftrightarrow~",
"\\Uparrow","\u21D1",
"\\Downarrow","\u21D3",
"\\Updownarrow","\u21D5",
"\\mapsto","\u21A6",
"\\longleftarrow","\u2190",
"\\longrightarrow","\u2192",
"\\longleftrightarrow","\u2194",
"\\Longleftarrow","\u21D0",
"\\Longrightarrow","\u21D2",
"\\Longleftrightarrow","\u21D4",
"\\longmapsto","\u21A6",
"\\acute","\u00B4",
"\\grave","\u0060",
"\\breve","\u02D8",
"\\check","\u02C7",
"\\dot",".",
"\\ddot","..",
"\\mathring","\u00B0",
"\\vec","\u20D7",
"\\overrightarrow","\u20D7",
"\\overleftarrow","\u20D6",
"\\hat","\u005E",
"\\widehat","\u0302",
"\\tilde","~",
"\\widetilde","\u02DC",
"\\bar","\u203E",
"\\overbrace","\u23B4",
"\\overline","\u00AF",
"\\underbrace","\u23B5",
"\\underline","\u00AF",
"\\sqrt","&radic,",
"\\section","section",
"\\chapter","chapter"];

function showlatexsymbols()
{
    var n = Math.ceil(latexsymbols.length/16);
    for (var i=latexsymbols.length;i < n*16;i++)
        latexsymbols[i] = "";
    var k = 0;
    var x = "<table border=1 style=border-collapse:collapse>";
    for (var i=0; i < n; i++)
    {
        x += "<tr><td>"  + latexsymbols[k+1] + "</td><td>"  + latexsymbols[k] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 2*n] + "</td><td>"  + latexsymbols[k + 2*n ] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 4*n] + "</td><td>"  + latexsymbols[k + 4*n] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 6*n] + "</td><td>"  + latexsymbols[k + 6*n] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 8*n] + "</td><td>"  + latexsymbols[k + 8*n] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 10*n] + "</td><td>"  + latexsymbols[k + 10*n] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 12*n] + "</td><td>"  + latexsymbols[k + 12*n] + "</td>" + (i==0?("<td rowspan=" + n + " width=5></td>"):"")
          + "<td>"  + latexsymbols[k+1 + 14*n] + "</td><td>"  + latexsymbols[k + 14*n] + "</td></tr>";
          k+= 2;
    }
    myprompt(x + "</table>");
}


var activeeditingbox = null;
var wyswyghead='';
var wyswygtail=''; 
function getBounce(t)
{
    if (activeeditingbox == null) return;
    var loct = document.location.toString().split("/");
    var jj = "/" + loct[loct.length-2];
    if (jj.replace(/\/[a-z]+/ig,'')!='') jj = '';
    t = t.replace(/src=(["]?)\.\..\.\..[a-z|A-Z]+.FileOperation\?did=/g, 'src=$1FileOperation?did=');  
    t = t.replace(/<p>[ |\n|\r|\t]*&nbsp;<.p>/,'').replace(/<td>[ |\n|\r|\t]+/g,'<td>').replace(/<p>[ |\r|\n|\t]*/ig,'').replace(/<\/p>/ig,'<br>');
    if (activeeditingbox.tagName.toLowerCase() != 'textarea')
    {
        if (wyswyghead == '') wyswyghead = '<!DOCTYPE html><!--created by wyswyg tool-->\n<html>\n<body>';
        if (wyswygtail == '') wyswygtail = '</body></html>';
    }
    if (typeof(fields)!='undefined' && typeof(numCols)!='undefined')
    {
       
        for (var j=0; j < numCols && activeeditingbox.name!=fields[j]; j++);
        if (j < numCols) 
        {
            var xt = retrv(counter,j);
            setv(counter, j, wyswyghead + t.replace(/&mdash;/g,'__') + wyswygtail);
            if (xt != activeeditingbox.value) 
                UT(counter,j);
        }  
        else
        {
            
            var xt = activeeditingbox.value;
            activeeditingbox.value = wyswyghead + t.replace(/&mdash;/g,'__') + wyswygtail;
            if (xt != activeeditingbox.value && typeof(whenwyewygchange)!='undefined')
            whenwyewygchange(activeeditingbox);
            
        }
    }
    else
    {
        var xt = activeeditingbox.value;
        
        if (wyswyghead == '') wyswyghead = '<!DOCTYPE html><!--created by wyswyg tool-->\n<html>\n<body>';
       
        activeeditingbox.value = wyswyghead + t.replace(/&mdash;/g,'__') + wyswygtail;
        if (xt != activeeditingbox.value && typeof(whenwyewygchange)!='undefined')
        whenwyewygchange(activeeditingbox);

    }
    
    if (activeeditingbox.tagName.toLowerCase() == 'textarea' && typeof(edithtml) == 'undefined')
    {   
        activeeditingbox = null;
        var promptwin1 = document.getElementById('myprompt1');
        document.body.removeChild(promptwin1);
        //closeprompt();
    }
}
function wyewyg(ta)
{
    activeeditingbox = ta; 
    if (ta.tagName.toLowerCase() == 'textarea')
    {
    var w = (activeeditingbox.offsetWidth+ 122);
    var h = (activeeditingbox.offsetHeight+ 30);
    
    if (h < 470) h = 470;
    if (w < 900) w = 900;
    if (w > thispagewidth()-28) w = thispagewidth()-28; 
    }
    else
    {
        w = 900;
        h = 600;
        if (w > thispagewidth()-28) w = thispagewidth()-28; 
    }
    if (typeof(encoding) == 'undefined')
    {
        var x = document.getElementsByTagName('head')[0].innerHTML.toLowerCase();
        var ii = x.indexOf('charset=');
        if (ii >0)
        {
            var jj = x.indexOf('"',ii+8);
            encoding = x.substring(ii+8,jj); 
        }
        else
            encoding = "utf-8";
    }
     
    var title = "WYSWYG " + textmsg[1378];
    if (typeof(fields)!='undefined' && typeof(numCols)!='undefined')
    {
        for (var j=0; j < numCols && activeeditingbox.name!=fields[j]; j++);
        if (j < numCols) title = labels[j];   
    }
    var color = null;
    if (typeof(activeeditingbox.parentNode) != 'undefined')
       color = activeeditingbox.parentNode.style.backgroundColor;
    if (color == null || color == '')
    {
        if (typeof(DBGCOLOR) != 'undefined')
            color = DBGCOLOR;
    }
     
    if (color == null || color == '')
    color = '#149856';
    
    myprompt("<iframe  src=\"../ckeditor/_samples/box.jsp?enc=" + encoding + "&ht=" + h + "&color=" + encodeURIComponent(color) + "\" id=editfrm name=popeditor frameborder=0  width=" + w  +  " height=" + h  +" border=0 />",null,null,title, 'myprompt1');   
    
}
var removetagstr;
function traversalremove(v)
{
    var x = v.childNodes;
    if (x == null || x.length == 0) 
       removetagstr += x.innerHTML;
    else
    {
       for (var i=0; i < x.length; i++)
          traversalremove(x[i]);
    }
}
function removetags(t)
{
    var v = document.createElement('div');
    v.innerHTML = t;
    removetagstr = "";
    traversalremove(v);
    return removetagstr;
}
function removehtmltags(t)
{
    t = removetags(t); 
    var loct = document.location.toString().split("/");
    var jj = "/" + loct[loct.length-2];
    if (jj.replace(/\/[a-z]+/ig,'')!='') jj = '';
    t = t.replace(/src=(["]?)\.\..\.\..[a-z|A-Z]+.FileOperation\?did=/g, 'src=$1FileOperation?did=');  
    if (typeof(fields)!='undefined' && typeof(numCols)!='undefined')
    {
        for (var j=0; j < numCols && activeeditingbox.name!=fields[j]; j++);
        if (j < numCols) 
        {
            var xt = retrv(counter,j);
            setv(counter, j, t);
            if (xt!=t) UT(counter,j);
        }   
    }
    else
    {  
       
        var xt = activeeditingbox.value;
        activeeditingbox.value = t;
        if (xt!=t && typeof(whenwyewygchange)!='undefined')
            whenwyewygchange(activeeditingbox);
    }
     
    activeeditingbox = null;
}

var saveorupdatelabel = textmsg[225];
function movetogood(win)
{
    if (typeof(callingwindow) !='undefined')
        callingwindow = win;
    var xy = [5,5];
    if (typeof(findPositionnoScrolling) =='function')
    xy = findPositionnoScrolling(activeeditingbox);
    var promptwin1 = document.getElementById('myprompt1');
    promptwin1.style.left =   '11px';
    var t= xy[1]-35; if (t<0) t = 0;
    promptwin1.style.top = t + 'px';
    var titlebar = promptwin1.getElementsByTagName('table')[0].rows[1].cells[1].getElementsByTagName('table')[0].rows[0];
    titlebar.onmousedown = null;
    var loct = document.location.toString().split("/");
    var jj = "/" + loct[loct.length-2];
    if (jj.replace(/\/[a-z]+/ig,'')!='') jj = '';
    var xx = activeeditingbox.value.replace(/src=(["]?)FileOperation\?did=/g, 'src=$1../..' + jj + '/FileOperation?did=');
    
    var ii = xx.toLowerCase().indexOf("<body");
    
    var kk = xx.toLowerCase().indexOf("</body>");
    if (ii >=0 && kk >=0)
    {
        ii = xx.indexOf(">", ii)+1;
        wyswyghead = xx.substring(0,ii);
        wyswygtail = xx.substring(kk);
        xx = xx.substring(ii, kk);
    }
    else if (ii >= 0 && kk < 0)
    {
        ii = xx.indexOf(">", ii)+1;
        wyswyghead = xx.substring(0,ii);
        wyswygtail = "";
        xx = xx.substring(ii);
       
    }
    else if (ii <  0 && kk >= 0)
    {
        wyswyghead = "";
        wyswygtail = xx.substring(kk);
        xx = xx.substring(0, kk);
    }
    else
    {
        wyswyghead = wyswygtail = "";
    }
    wyswyghead = wyswyghead.replace(/^[ ]+/,'');
     
    win.setd(xx); 
    return saveorupdatelabel + "," + textmsg[18] ;
}

function mkstrike12(ta, evt, orientation)
{

    if (orientation == null)
    {
        orientation = 's';
    }
    var e = evt ? evt : window.event;
    if (!e)
        return true;
    var key = 0;
    if (e.keyCode) {
        key = e.keyCode;
    } // for moz/fb, if keyCode==0 use 'which'
    else if (typeof(e.which) != 'undefined')
    {
        key = e.which;
    }
    if (key == 36 || key == 62)
    {
        var fmt = 0;
        if (typeof(editingfmt) != 'undefined')
            fmt = editingfmt;
        if (fmt!=null && fmt < 2)
        {
            fmt = guessFormat(ta.value + String.fromCharCode(key));
            editingfmt = fmt;
        }
        if (fmt == 1 || fmt == 2)
        {
            showlatexonfly(orientation, fmt, key);
        }
        var fms = document.forms;
        for (var i=0; i < fms.length; i++)
            if (fms[i].action.indexOf("/preview.jsp") >0)
            {
                fms[i].format.value = editingfmt;
                break;
            }
    }
    return true;
}

function wyewyg1(ta)
{
    open("")
}



 

