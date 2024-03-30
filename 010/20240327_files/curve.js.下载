if (typeof(ismobile) == 'undefined') 
ismobile = function()
{
    return navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/BlackBerry/i)||
    navigator.userAgent.match(/iPhone|iPad|iPod/i)
    || navigator.userAgent.match(/Opera Mini/i)
   ||  navigator.userAgent.match(/IEMobile/i);
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
        for (var posY = 0, posX = 0; ii++ < 20 && oElement != null; oElement = oElement.offsetParent)
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
function alltdisleft(ele)
{
    if (ele == null || typeof (ele.tagName) == 'undefined' || ele.tagName == null)
        return;
    var xx = ele.tagName.toLowerCase();
    if (ele.tagName.toLowerCase() == 'td')
    {

        if (ele.align == null || ele.align == '')
        {
            ele.align = 'left';
        }

    }

    if (xx == 'td' || xx == 'table' || xx == 'tr' || xx == 'div' || xx == 'body' || xx == 'form')
    {
        if (xx == 'table')
            var childs = ele.rows;
        else if (xx == 'tr')
            childs = ele.cells;
        else
            childs = ele.getElementsByTagName("table");

        if (childs != null && childs.length > 0)
        {
            for (var i = 0; i < childs.length; i++)
                alltdisleft(childs[i]);
        }
    }
}

function allcurves(ele)
{
    if (ele == null)
        return;

    if (typeof (ele.className) != 'undefined' && ele.className != null
            && ele.className.indexOf("forcurve") >= 0)
    {
        ele.className = ele.className.replace(/forcurve([0-9])/, 'forcurveie$1');
    }
    else
    {
        var childs = ele.childNodes;
        if (childs != null && childs.length > 0)
        {
            for (var i = 0; i < childs.length; i++)
                allcurves(childs[i]);
        }
    }
}

 
function elewidth(pr)
{
    var leng = 0;
    if (typeof pr.style.pixelWidth != 'undefined')
        leng = pr.style.pixelWidth;
    else
        leng = pr.offsetWidth;
    if (leng != '')
        return leng - 2;
    if (pr != document.body)
        return elewidth(pr.parentNode);
    return 500;
}
 
 
function initcurve()
{
    if (document.images != null && document.images.length > 0)
    {
        for (var i = 0; i < document.images.length; i++)
        {
            var logo = document.images[i];
            if (logo.name == 'logo')
            {
                if (!ismobile())
                {
                  //  logo.src = "image/logoani.gif";
                }
                else
                {
                    logo.width = '86';
                    logo.src = "image/earth.gif";
                } 
                break;
            }
        }
    }
}




function centerlizeit()
{
    var yy = document.body.scrollTop ? document.body.scrollTop : window.pageYOffset;
    promptwin.style.left = (thispagewidth() / 2 - parseInt(promptwin.style.width.replace(/px/, '')) / 2) + 'px';
    promptwin.style.top = (yy + thispageheight() / 2 - parseInt(promptwin.style.height.replace(/px/, '')) / 2) + 'px';
}
function slowshow()
{
    if (typeof ugentmsg == 'undefined')
        return;
    var wd = thispagewidth();
    var het = thispageheight();
    var ms = "";
    if (typeof(textmsg)!='undefined')
        ms = textmsg[567];
    myprompt(ugentmsg.replace(/\n+/g, "<br>"), false, null, ms);

}
function closeUgentmsg()
{
    if (promptwin == null)
        return;
    document.body.removeChild(promptwin);
}





if (!ismobile() && typeof (Drag) == 'undefined')
{
var Drag = 
{
    
    parseIntpx : function (str)
    {
        return parseInt(str.replace(/px/,''));
    },
    
	obj : null,
    
	init : function(o, oRoot, minX, maxX, minY, maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper)
	{
        if (o==null) return;
		

		o.hmode			= bSwapHorzRef ? false : true ;
		o.vmode			= bSwapVertRef ? false : true ;

		o.root = oRoot && oRoot != null ? oRoot : o ;

		if (o.hmode  && isNaN(Drag.parseIntpx(o.root.style.left  ))) o.root.style.left   = "0px";
		if (o.vmode  && isNaN(Drag.parseIntpx(o.root.style.top   ))) o.root.style.top    = "0px";
		if (!o.hmode && isNaN(Drag.parseIntpx(o.root.style.right ))) o.root.style.right  = "0px";
		if (!o.vmode && isNaN(Drag.parseIntpx(o.root.style.bottom))) o.root.style.bottom = "0px";

		o.minX	= typeof minX != 'undefined' ? minX : null;
		o.minY	= typeof minY != 'undefined' ? minY : null;
		o.maxX	= typeof maxX != 'undefined' ? maxX : null;
		o.maxY	= typeof maxY != 'undefined' ? maxY : null;

		o.xMapper = fXMapper ? fXMapper : null;
		o.yMapper = fYMapper ? fYMapper : null;

        o.onmousedown	= Drag.start;
		o.root.onDragStart	= new Function();
		o.root.onDragEnd	= new Function();
		o.root.onDrag		= new Function();
	},

	start : function(e)
	{
        var o = Drag.obj = this;
		e = Drag.fixE(e);
		var y = Drag.parseIntpx(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = Drag.parseIntpx(o.hmode ? o.root.style.left : o.root.style.right );
		o.root.onDragStart(x, y);

		o.lastMouseX	= e.clientX;
		o.lastMouseY	= e.clientY;

		if (o.hmode) {
			if (o.minX != null)	o.minMouseX	= e.clientX - x + o.minX;
			if (o.maxX != null)	o.maxMouseX	= o.minMouseX + o.maxX - o.minX;
		} else {
			if (o.minX != null) o.maxMouseX = -o.minX + e.clientX + x;
			if (o.maxX != null) o.minMouseX = -o.maxX + e.clientX + x;
		}

		if (o.vmode) {
			if (o.minY != null)	o.minMouseY	= e.clientY - y + o.minY;
			if (o.maxY != null)	o.maxMouseY	= o.minMouseY + o.maxY - o.minY;
		} else {
			if (o.minY != null) o.maxMouseY = -o.minY + e.clientY + y;
			if (o.maxY != null) o.minMouseY = -o.maxY + e.clientY + y;
		}

		document.onmousemove	= Drag.drag;
		document.onmouseup		= Drag.end;

		return false;
	},

	drag : function(e)
	{
		e = Drag.fixE(e);
		var o = Drag.obj;
        if (o == null) return;
		var ey	= e.clientY;
		var ex	= e.clientX;
		var y = Drag.parseIntpx(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = Drag.parseIntpx(o.hmode ? o.root.style.left : o.root.style.right );
		var nx, ny;

		if (o.minX != null) ex = o.hmode ? Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
		if (o.maxX != null) ex = o.hmode ? Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
		if (o.minY != null) ey = o.vmode ? Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
		if (o.maxY != null) ey = o.vmode ? Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);

		nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
		ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));

		if (o.xMapper)		nx = o.xMapper(y)
		else if (o.yMapper)	ny = o.yMapper(x)

		Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
		Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
		Drag.obj.lastMouseX	= ex;
		Drag.obj.lastMouseY	= ey;

		Drag.obj.root.onDrag(nx, ny);
		return false;
	},

	end : function()
	{
        if (Drag.obj == null || Drag.obj.root == null)   return;     
		document.onmousemove = null;
		document.onmouseup   = null;
		Drag.obj.root.onDragEnd(	Drag.parseIntpx(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]), 
									Drag.parseIntpx(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"]));
		var ex = Drag.obj.lastMouseX;
		var ey = Drag.obj.lastMouseY;
      Drag.obj = null;
      if (typeof atEndDrag =='function')atEndDrag(ex,ey);
	
   },

	fixE : function(e)
	{
		if (typeof e == 'undefined') e = window.event;
		if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
		if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;
		return e;
	}
};
 
}

if (ismobile() && typeof (Drag) == 'undefined')
{
    var Drag = 
   {
      init : function (draggable, obj)
      {
        if (obj == null)
        {
            draggable.style.position = "absolute";
            draggable.addEventListener('touchmove', function(event) 
            {
               var touch = event.targetTouches[0];
               draggable.style.left = (touch.pageX -25 ) + 'px';
               draggable.style.top = (touch.pageY -25 )  + 'px';
               event.preventDefault();
            }, false);
        }
        else
        {
            obj.style.position = "absolute";
            var oElement = draggable;
            var originalElement = oElement;
            var posY = 0, posX = 0;
            for (;  oElement != null; oElement = oElement.offsetParent)
            {
                posY += oElement.offsetTop;
                posX += oElement.offsetLeft;
                if (oElement != originalElement && oElement != obj)
                {
                    posY -= oElement.scrollTop;
                    posX -= oElement.scrollLeft;
                }
            }
         
            draggable.addEventListener('touchmove', function(event) 
            {
               var touch = event.targetTouches[0];
               obj.style.left = (touch.pageX - 20)  + 'px';
               obj.style.top = (touch.pageY - 20) + 'px';
               event.preventDefault();
            }, false);
        }
     }
   } 
}

var Lasymbols = [
//Greek letters
{input:"\\alpha",	 output:"\u03B1"},
{input:"\\beta",	 output:"\u03B2"},
{input:"\\gamma",	 output:"\u03B3"},
{input:"\\delta",	 output:"\u03B4"},
{input:"\\epsilon",	 output:"\u03B5"},
{input:"\\varepsilon",   output:"\u025B"},
{input:"\\zeta",	 output:"\u03B6"},
{input:"\\eta",		 output:"\u03B7"},
{input:"\\theta",	 output:"\u03B8"},
{input:"\\vartheta",	 output:"\u03D1"},
{input:"\\iota",	 output:"\u03B9"},
{input:"\\kappa",	 output:"\u03BA"},
{input:"\\lambda",	 output:"\u03BB"},
{input:"\\mu",		 output:"\u03BC"},
{input:"\\nu",		 output:"\u03BD"},
{input:"\\xi",		 output:"\u03BE"},
{input:"\\pi",		 output:"\u03C0"},
{input:"\\varpi",	 output:"\u03D6"},
{input:"\\rho",		 output:"\u03C1"},
{input:"\\varrho",	 output:"\u03F1"},
{input:"\\varsigma",	 output:"\u03C2"},
{input:"\\sigma",	 output:"\u03C3"},
{input:"\\tau",		 output:"\u03C4"},
{input:"\\upsilon",	 output:"\u03C5"},
{input:"\\phi",		 output:"\u03C6"},
{input:"\\varphi",	 output:"\u03D5"},
{input:"\\chi",		 output:"\u03C7"},
{input:"\\psi",		 output:"\u03C8"},
{input:"\\omega",	 output:"\u03C9"},
{input:"\\Gamma",	 output:"\u0393"},
{input:"\\Delta",	 output:"\u0394"},
{input:"\\Theta",	 output:"\u0398"},
{input:"\\Lambda",	 output:"\u039B"},
{input:"\\Xi",		 output:"\u039E"},
{input:"\\Pi",		 output:"\u03A0"},
{input:"\\Sigma",	 output:"\u03A3"},
{input:"\\Upsilon",	 output:"\u03A5"},
{input:"\\Phi",		 output:"\u03A6"},
{input:"\\Psi",		 output:"\u03A8"},
{input:"\\Omega",	 output:"\u03A9"},

//fractions
{input:"\\frac12",	 output:"\u00BD"},
{input:"\\frac14",	 output:"\u00BC"},
{input:"\\frac34",	 output:"\u00BE"},
{input:"\\frac13",	 output:"\u2153"},
{input:"\\frac23",	 output:"\u2154"},
{input:"\\frac15",	 output:"\u2155"},
{input:"\\frac25",	 output:"\u2156"},
{input:"\\frac35",	 output:"\u2157"},
{input:"\\frac45",	 output:"\u2158"},
{input:"\\frac16",	 output:"\u2159"},
{input:"\\frac56",	 output:"\u215A"},
{input:"\\frac18",	 output:"\u215B"},
{input:"\\frac38",	 output:"\u215C"},
{input:"\\frac58",	 output:"\u215D"},
{input:"\\frac78",	 output:"\u215E"},

//binary operation symbols
{input:"\\pm",		 output:"\u00B1"},
{input:"\\mp",		 output:"\u2213"},
{input:"\\triangleleft", output:"\u22B2"},
{input:"\\triangleright",output:"\u22B3"},
{input:"\\cdot",	 output:"\u22C5"},
{input:"\\star",	 output:"\u22C6"},
{input:"\\ast",		 output:"\u002A"},
{input:"\\times",	 output:"\u00D7"},
{input:"\\div",		 output:"\u00F7"},
{input:"\\circ",	 output:"\u2218"},
//{input:"\\bullet",	   output:"\u2219"},
{input:"\\bullet",	 output:"\u2022"},
{input:"\\oplus",	 output:"\u2295"},
{input:"\\ominus",	 output:"\u2296"},
{input:"\\otimes",	 output:"\u2297"},
{input:"\\bigcirc",	 output:"\u25CB"},
{input:"\\oslash",	 output:"\u2298"},
{input:"\\odot",	 output:"\u2299"},
{input:"\\land",	 output:"\u2227"},
{input:"\\wedge",	 output:"\u2227"},
{input:"\\lor",		 output:"\u2228"},
{input:"\\vee",		 output:"\u2228"},
{input:"\\cap",		 output:"\u2229"},
{input:"\\cup",		 output:"\u222A"},
{input:"\\sqcap",	 output:"\u2293"},
{input:"\\sqcup",	 output:"\u2294"},
{input:"\\uplus",	 output:"\u228E"},
{input:"\\amalg",	 output:"\u2210"},
{input:"\\bigtriangleup",output:"\u25B3"},
{input:"\\bigtriangledown",output:"\u25BD"},
{input:"\\dag",		 output:"\u2020"},
{input:"\\dagger",	 output:"\u2020"},
{input:"\\ddag",	 output:"\u2021"},
{input:"\\ddagger",	 output:"\u2021"},
{input:"\\lhd",		 output:"\u22B2"},
{input:"\\rhd",		 output:"\u22B3"},
{input:"\\unlhd",	 output:"\u22B4"},
{input:"\\unrhd",	 output:"\u22B5"},


//BIG Operators
{input:"\\sum",		 output:"\u2211"},
{input:"\\prod",	 output:"\u220F"},
{input:"\\bigcap",	 output:"\u22C2"},
{input:"\\bigcup",	 output:"\u22C3"},
{input:"\\bigwedge",	 output:"\u22C0"},
{input:"\\bigvee",	 output:"\u22C1"},
{input:"\\bigsqcap",	 output:"\u2A05"},
{input:"\\bigsqcup",	 output:"\u2A06"},
{input:"\\coprod",	 output:"\u2210"},
{input:"\\bigoplus",	 output:"\u2A01"},
{input:"\\bigotimes",	 output:"\u2A02"},
{input:"\\bigodot",	 output:"\u2A00"},
{input:"\\biguplus",	 output:"\u2A04"},
{input:"\\int",		 output:"\u222B"},
{input:"\\oint",	 output:"\u222E"},

//binary relation symbols
{input:":=",		 output:":="},
{input:"\\lt",		 output:"<"},
{input:"\\gt",		 output:">"},
{input:"\\ne",		 output:"\u2260"},
{input:"\\neq",		 output:"\u2260"},
{input:"\\le",		 output:"\u2264"},
{input:"\\leq",		 output:"\u2264"},
{input:"\\leqslant",	 output:"\u2264"},
{input:"\\ge",		 output:"\u2265"},
{input:"\\geq",		 output:"\u2265"},
{input:"\\geqslant",	 output:"\u2265"},
{input:"\\equiv",	 output:"\u2261"},
{input:"\\ll",		 output:"\u226A"},
{input:"\\gg",		 output:"\u226B"},
{input:"\\doteq",	 output:"\u2250"},
{input:"\\prec",	 output:"\u227A"},
{input:"\\succ",	 output:"\u227B"},
{input:"\\preceq",	 output:"\u227C"},
{input:"\\succeq",	 output:"\u227D"},
{input:"\\subset",	 output:"\u2282"},
{input:"\\supset",	 output:"\u2283"},
{input:"\\subseteq",	 output:"\u2286"},
{input:"\\supseteq",	 output:"\u2287"},
{input:"\\sqsubset",	 output:"\u228F"},
{input:"\\sqsupset",	 output:"\u2290"},
{input:"\\sqsubseteq",   output:"\u2291"},
{input:"\\sqsupseteq",   output:"\u2292"},
{input:"\\sim",		 output:"\u223C"},
{input:"\\simeq",	 output:"\u2243"},
{input:"\\approx",	 output:"\u2248"},
{input:"\\cong",	 output:"\u2245"},
{input:"\\Join",	 output:"\u22C8"},
{input:"\\bowtie",	 output:"\u22C8"},
{input:"\\in",		 output:"\u2208"},
{input:"\\ni",		 output:"\u220B"},
{input:"\\owns",	 output:"\u220B"},
{input:"\\propto",	 output:"\u221D"},
{input:"\\vdash",	 output:"\u22A2"},
{input:"\\dashv",	 output:"\u22A3"},
{input:"\\models",	 output:"\u22A8"},
{input:"\\perp",	 output:"\u22A5"},
{input:"\\smile",	 output:"\u2323"},
{input:"\\frown",	 output:"\u2322"},
{input:"\\asymp",	 output:"\u224D"},
{input:"\\notin",	 output:"\u2209"},

//matrices
{input:"\\begin{eqnarray}",	output:"X"},
{input:"\\begin{array}",	output:"X"},
{input:"\\\\",			output:"}&{"},
{input:"\\end{eqnarray}",	output:"}}"},
{input:"\\end{array}",		output:"}}"},

//grouping and literal brackets -- ieval is for IE
{input:"\\big",	    output:"1.2"   },
{input:"\\Big",	     output:"1.6"   },
{input:"\\bigg",     output:"2.2"   },
{input:"\\Bigg",    output:"2.9"   },
{input:"\\left",    output:"X"},
{input:"\\right",   output:"X"},
{input:"{",	   output:"{"},
{input:"}",	   output:"}"},

 
{input:"\\lbrack",  output:"["        },
{input:"\\{",	    output:"{"       },
{input:"\\lbrace",  output:"{"       },
{input:"\\langle",  output:"\u2329"   },
{input:"\\lfloor",  output:"\u230A" },
{input:"\\lceil",   output:"\u2308" },

// rtag:"mi" causes space to be inserted before a following sin, cos, etc.
// (see function AMparseExpr() )
 
{input:"\\rbrack",output:"]",	    routput:"1"},
{input:"\\}",	  output:"}",	    routput:"1"},
{input:"\\rbrace",output:"}",	    routput:"1"},
{input:"\\rangle",output:"\u232A", routput:"1"},
{input:"\\rfloor",output:"\u230B", routput:"1"},
{input:"\\rceil", output:"\u2309", routput:"1"},

// "|", "\\|", "\\vert" and "\\Vert" modified later: lspace = rspace = 0em
{input:"|",		 output:"\u2223" },
{input:"\\|",		 output:"\u2225" },
{input:"\\vert",	 output:"\u2223" },
{input:"\\Vert",	 output:"\u2225" },
{input:"\\mid",		 output:"\u2223" },
{input:"\\parallel",	 output:"\u2225" },
{input:"/",		 output:"/" },
{input:"\\backslash",	 output:"\u2216" },
{input:"\\setminus",	 output:"\\"},

//miscellaneous symbols
{input:"\\!",	    output:""},
{input:"\\,",	    output:"<div style=width:0.167em><!----></div>"},
{input:"\\>",	    output:"<div style=width:0.222em><!----></div>"},
{input:"\\:",	    output:"<div style=width:0.222em><!----></div>"},
{input:"\\;",	    output:"<div style=width:0.278em><!----></div>"},
 
{input:"\\quad",    output:"<div style=width:1em><!----></div>"},
{input:"\\qquad",   output:"<div style=width:2em><!----></div>"},
//{input:"{}",		   output:"\u200B"}, // zero-width
{input:"\\prime",	 output:"\u2032"},
{input:"'",		 output:"\u02B9"},
{input:"''",		 output:"\u02BA"},
{input:"'''",		 output:"\u2034"},
{input:"''''",		 output:"\u2057"},
{input:"\\ldots",	 output:"\u2026"},
{input:"\\cdots",	 output:"\u22EF"},
{input:"\\vdots",	 output:"\u22EE"},
{input:"\\ddots",	 output:"\u22F1"},
{input:"\\forall",	 output:"\u2200"},
{input:"\\exists",	 output:"\u2203"},
{input:"\\Re",		 output:"\u211C"},
{input:"\\Im",		 output:"\u2111"},
{input:"\\aleph",	 output:"\u2135"},
{input:"\\hbar",	 output:"\u210F"},
{input:"\\ell",		 output:"\u2113"},
{input:"\\wp",		 output:"\u2118"},
{input:"\\emptyset",	 output:"\u2205"},
{input:"\\infty",	 output:"\u221E"},
{input:"\\surd",	 output:"\\sqrt{}"},
{input:"\\partial",	 output:"\u2202"},
{input:"\\nabla",	 output:"\u2207"},
{input:"\\triangle",	 output:"\u25B3"},
{input:"\\therefore",	 output:"\u2234"},
{input:"\\angle",	 output:"\u2220"},
//{input:"\\\\ ",	   output:"\u00A0"},
{input:"\\diamond",	 output:"\u22C4"},
//{input:"\\Diamond",	   output:"\u25CA"},
{input:"\\Diamond",	 output:"\u25C7"},
{input:"\\neg",		 output:"\u00AC"},
{input:"\\lnot",	 output:"\u00AC"},
{input:"\\bot",		 output:"\u22A5"},
{input:"\\top",		 output:"\u22A4"},
{input:"\\square",	 output:"\u25AB"},
{input:"\\Box",		 output:"\u25A1"},
{input:"\\wr",		 output:"\u2240"},

//standard functions
//Note UNDEROVER *must* have tag:"mo" to work properly
{input:"\\arccos",  output:"arccos"},
{input:"\\arcsin",  output:"arcsin"},
{input:"\\arctan",  output:"arctan"},
{input:"\\arg",	    output:"arg"},
{input:"\\cos",	    output:"cos"},
{input:"\\cosh",    output:"cosh"},
{input:"\\cot",	    output:"cot"},
{input:"\\coth",    output:"coth"},
{input:"\\csc",	    output:"csc"},
{input:"\\deg",	    output:"deg"},
{input:"\\det",	    output:"det"},
{input:"\\dim",	    output:"dim"}, //CONST?
{input:"\\exp",	    output:"exp"},
{input:"\\gcd",	    output:"gcd"}, //CONST?
{input:"\\hom",	    output:"hom"},
{input:"\\inf",	       output:"inf"},
{input:"\\ker",	    output:"ker"},
{input:"\\lg",	    output:"lg"},
{input:"\\lim",	       output:"lim"},
{input:"\\liminf",     output:"liminf"},
{input:"\\limsup",     output:"limsup"},
{input:"\\ln",	    output:"ln"},
{input:"\\log",	    output:"log"},
{input:"\\max",	       output:"max"},
{input:"\\min",	       output:"min"},
{input:"\\Pr",	    output:"Pr"},
{input:"\\sec",	    output:"sec"},
{input:"\\sin",	    output:"sin"},
{input:"\\sinh",    output:"sinh"},
{input:"\\sup",	       output:"sup"},
{input:"\\tan",	    output:"tan"},
{input:"\\tanh",    output:"tanh"},

//arrows
{input:"\\gets",		 output:"\u2190"},
{input:"\\leftarrow",		 output:"\u2190"},
{input:"\\to",			 output:"\u2192"},
{input:"\\rightarrow",		 output:"\u2192"},
{input:"\\leftrightarrow",	 output:"\u2194"},
{input:"\\uparrow",		 output:"\u2191"},
{input:"\\downarrow",		 output:"\u2193"},
{input:"\\updownarrow",		 output:"\u2195"},
{input:"\\Leftarrow",		 output:"\u21D0"},
{input:"\\Rightarrow",		 output:"\u21D2"},
{input:"\\Leftrightarrow",	 output:"\u21D4"},
{input:"\\iff",  output:"~\\Longleftrightarrow~"},
{input:"\\Uparrow",		 output:"\u21D1"},
{input:"\\Downarrow",		 output:"\u21D3"},
{input:"\\Updownarrow",		 output:"\u21D5"},
{input:"\\mapsto",		 output:"\u21A6"},
{input:"\\longleftarrow",	 output:"\u2190"},
{input:"\\longrightarrow",	 output:"\u2192"},
{input:"\\longleftrightarrow",	 output:"\u2194"},
{input:"\\Longleftarrow",	 output:"\u21D0"},
{input:"\\Longrightarrow",	 output:"\u21D2"},
{input:"\\Longleftrightarrow",   output:"\u21D4"},
{input:"\\longmapsto",		 output:"\u21A6"},
							// disaster if LONG

 
//diacritical marks
{input:"\\acute",	  output:"\u00B4"},
//{input:"\\acute",	    output:"\u0317"},
//{input:"\\acute",	    output:"\u0301"},
//{input:"\\grave",	    output:"\u0300"},
//{input:"\\grave",	    output:"\u0316"},
{input:"\\grave",	  output:"\u0060"},
{input:"\\breve",	  output:"\u02D8"},
{input:"\\check",	  output:"\u02C7"},
{input:"\\dot",		  output:"."},
{input:"\\ddot",	  output:".."},
//{input:"\\ddot",	    output:"\u00A8"},
{input:"\\mathring",	  output:"\u00B0"},
{input:"\\vec",		  output:"\u20D7"},
{input:"\\overrightarrow",output:"\u20D7"},
{input:"\\overleftarrow", output:"\u20D6"},
{input:"\\hat",		  output:"\u005E"},
{input:"\\widehat",	  output:"\u0302"},
{input:"\\tilde",	  output:"~"},
//{input:"\\tilde",	    output:"\u0303"},
{input:"\\widetilde",	  output:"\u02DC"},
{input:"\\bar",		  output:"\u203E"},
{input:"\\overbrace",	  output:"\u23B4"},
{input:"\\overline",	  output:"\u00AF"},
{input:"\\underbrace",   output:"\u23B5"},
{input:"\\underline",	 output:"\u00AF"},
//{input:"underline",	 output:"\u0332"},
{input:"\\sqrt",       output:"&radic;"},
//typestyles and fonts
{input:"\\displaystyle",atname:"displaystyle",output:"true"},
{input:"\\textstyle",atname:"displaystyle",output:"false"},
{input:"\\scriptstyle",atname:"scriptlevel",output:"1"},
{input:"\\scriptscriptstyle",atname:"scriptlevel",output:"2"},
{input:"\\textrm",  output:"\\mathrm"},
{input:"\\mathbf",  atname:"mathvariant", output:"bold"},
{input:"\\textbf",  atname:"mathvariant", output:"bold"},
{input:"\\mathit",  atname:"mathvariant", output:"italic"},
{input:"\\textit",  atname:"mathvariant", output:"italic"},
{input:"\\mathtt",  atname:"mathvariant", output:"monospace"},
{input:"\\texttt",  atname:"mathvariant", output:"monospace"},
{input:"\\mathsf",  atname:"mathvariant", output:"sans-serif"},
{input:"\\mathbb",  atname:"mathvariant", output:"double-struck"},
{input:"\\mathcal", atname:"mathvariant", output:"script"},
{input:"\\mathfrak",atname:"mathvariant", output:"fraktur"}
];
  
function Trans(s, fs, color)
{
    this.wcolor = "red";
    this.color = color;
    if (this.color == 'red' || this.color =='#ff0000')
        this.wcolor = "blue";
    this.s = s; 
    this.pos = 0;
    this.fs = fs;
    this.literal = function(q) //read a this.literal aftr pos before q
    {
                    
        var state = 0;
        var i = this.pos;
        var j = this.pos;
        ans = null;
        while (i < q)
        {
            if (state == 0)
            {
                if (this.s.charAt(i) == ' ')
                {
                    if (this.s.charAt(j) == '\\')
                    {
                         this.pos = i+1;
                         ans = this.s.substring(j,i);
                         break;
                    }    
                    else
                        i++;
                }
                else if (this.s.charAt(i) == '\\')
                {
                    state = 1;
                    j = i;
                    i++;
                }
                else if (this.s.charAt(i)<='9' && this.s.charAt(i) >='0' || this.s.charAt(i)=='.')
                {
                    state = 2;
                    j= i;
                    i++;
                }
                else
                {
                    this.pos = i+1;
                    ans = this.s.charAt(i);
                    break;
                }
            }
            else if (state == 2)
            {
                if (this.s.charAt(i)<='9' && this.s.charAt(i) >='0' || this.s.charAt(i)=='.')
                {
                    i++;
                }
                else
                {
                    this.pos = i;
                    ans = this.s.substring(j,i);
                    state = 0;
                    break;
                }
            }
            else if (state == 1)
            {
                if (i == j+1 && this.s.charAt(i) == '\\')
                {
                    this.pos = i+1;
                    ans = '\\';
                    state = 0;
                    break;
                }
                else if (i == j+1 && (this.s.charAt(i) == '{' || this.s.charAt(i) == '}' || this.s.charAt(i) == ',' || this.s.charAt(i) == '>' ||this.s.charAt(i) == ':' || this.s.charAt(i) == ';'))
                {
                    this.pos = i+1;
                    ans = '\\' + this.s.charAt(i);
                    state = 0;
                    break;
                } 
                else if ((this.s.charAt(i)=='(' ||  this.s.charAt(i)=='[' ) && this.s.substring(j,i)=='\\left' )
                {
                    this.pos = i+1;
                    ans = this.s.substring(j,i+1);
                    state = 0;
                    break;
                }
                else if ((  this.s.charAt(i)==')'||   this.s.charAt(i)==']') && this.s.substring(j,i)=='\\right' )
                {
                    this.pos = i+1;
                    ans = this.s.substring(j,i+1);
                    state = 0;
                    break;
                }
                else if (  (this.s.charAt(i) < 'a' || this.s.charAt(i) > 'z') && (this.s.charAt(i) < 'A' || this.s.charAt(i) > 'Z')   )
                {
                    this.pos = i;
                    if (i>j+1)
                    {
                        ans = this.s.substring(j,i);
                        state = 0;
                        break;
                    }
                    else
                    {  
                        state = 0;
                    }
                                
                }
                else i++;
            }
        }
        if (state==2)
        {
            this.pos = i;
            ans = this.s.substring(j,i);
        }
        else if (state==1)
        {
            this.pos = i;
            ans = this.s.substring(j,i);
        }
      
        if (ans!=null && ans.indexOf("\\")>=0) 
            return ans.replace(/^[ ]+/,'').replace(/[ ]+$/,'');           
        return ans;
    }

    this.closeone = function(openc,c,q)
    {
        var t = ''; 
        var m = 1;
        while ((t = this.literal(q)) != null)
        {
            if (t == openc) m++;
            else if ( t == c) m--;
            if (m == 0) return t;
        }
        return null;
    }
    this.subs = function(t)
    {
        for (var i=0; i < Lasymbols.length; i++)
            if (t == Lasymbols[i].input)
                return Lasymbols[i].output;
        return t;
    }
    this.format = function(s,fs)
    {
        return "<div style=\"font-family:Arial, Helvetica, sans-serif;font-style:italic;height:" + fs + "px;color:" + this.color +";font-size:" + (fs  ) +"px;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;border:0px black solid;text-align:right\">" + s +"</div>";
    }
    this.formatl = function(s,fs)
    {
        return "<div style=\"font-family:Arial, Helvetica, sans-serif;height:" + fs + "px;color:" + this.color +";font-size:" + (fs  ) +"px;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px\">" + s +"</div>";
    }
    this.formatthin = function(s,fs)
    {
        return "<div style=\"font-family:Arial, Helvetica, sans-serif;height:" + fs + "px;color:" + this.color +";font-size:" + (fs  ) +"px;font-weight:400;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px\">" + s +"</div>";
    }
    this.formate = function(s,fs)
    {
        return "<div style=\"Times;height:" + fs + "px;color:" + this.wcolor +";font-size:" + (fs  ) +"px;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px\">" + s +"</div>";
    }
    this.linethick = function(fs)
    {
        return Math.floor(fs/30) + 1;
    }
    this.recur = function(p, q, fs)
    { 
        var s = this.s;
        this.pos = p;
        var tt;
        var k;
        var a;
        var buf = '';
        var newpos = 0;
        var Z = [];
         
        while ((tt=this.literal(q))!=null)
        {
            switch(tt)
            { 
                case '\\frac':
                                
                    if (buf!='') Z[Z.length] = {
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                        
                    buf = '';
                    u = this.literal(q);
                    if (u!='{' ) 
                    { 
                        Z[Z.length] =  {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"{\"   in " 
                                + s.substring(this.pos,q))
                            };
                        break;
                    }
                    k1 = this.pos;
                    a = this.closeone('{', '}',q);
                    if (a == null) 
                    { 
                        Z[Z.length] =  {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"}\"   in " 
                                + s.substring(this.pos,q))
                            };
                        break;
                    }
                    var k2 = this.pos - 1;
        
                    a = this.literal(q);
                    if (a !=  '{') 
                    { 
                        Z[Z.length] =   Z[Z.length] =  {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"{\"   in "
                                + s.substring(this.pos,q))
                            };
                        break;
                    }
                    var k3 = this.pos;
                    a = this.closeone('{', '}',q);
                    if (a == null) 
                    {    
                        Z[Z.length] =  {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"{\"   in " 
                                + s.substring(this.pos,q))
                            };
                        break;
                    }
                    k4 = this.pos - 1;
                    newpos = this.pos;
                    var num  =this.recur(k1,k2, fs);
                    var x = num.x + num.y;
                    var den = this.recur(k3,k4, fs);
                    var y = den.x + den.y;
                    var lk = this.linethick(fs);
                    var t = "<table style=display:inline cellpadding=0 cellspacing=0 ><tr height=" + x +"><td align=center>" + num.t 
                    + "</td></tr><tr height=" + lk +"><td><div style=\"width:100%;background-color:"
                    + this.color +";height:" + lk +"px\"><!-- --></td></tr><tr><td><tr height=" + y +"><td  align=center>" + den.t +"</td></tr></table>";
                    Z[Z.length] = {
                        x:x, 
                        y:y, 
                        t:t
                    };
                    this.pos = newpos;
                    break;
                case '\\lim':
                    if (buf!='') Z[Z.length] = {
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                        
                    buf = '';
                    newpos = this.pos;
                    var n = this.literal(q);
                    if (n!='_' ) 
                    {
                        Z[Z.length] = {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formatl('lim',fs)
                            };
                        this.pos = newpos;
                        break;
                    }
        
                    a = this.literal(q);
                    k1 = this.pos;
                    if (a != "{" ) 
                    { 
                        Z[Z.length] = {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"{\"   in " 
                                + s.substring(newpos,q) )
                            };
                        break;
                    }
        
                    a = this.closeone("{", "}",q);
                    k2 = this.pos -1 ;
                    if (a == null) 
                    {  
                        Z[Z.length] =  {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"}\"   in "
                                + s.substring(newpos,q))
                            };
                        break;
                    }
         
                    newpos = this.pos;
                                
                    num  =this.recur(k1,k2,Math.ceil(fs/2));
                    x = num.x + num.y;
      
                    t = "<table style=display:inline cellpadding=0 cellspacing=0><tr height=" + fs +"><td align=center>"  + this.formatl('lim', fs) 
                    + "</td></tr><tr height=" +  x +"><td  align=center >" + num.t +"</td></tr></table>";
                    y = Math.round(fs/2 + x);
                    x = Math.round(fs/2);
                    Z[Z.length] = {
                        x:x, 
                        y:y, 
                        t:t
                    };
                    this.pos = newpos;
                    break;    
                case '\\sum': case '\\prod':
                                    
                    if (buf!='') Z[Z.length] ={
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                       
                    buf = '';
                    newpos = this.pos;
                    var u = this.literal(q);
        
                    if ( u!='_' && u!='^') 
                    {
                        this.pos = newpos;
                        break;
                    }
                    else
                    { 
                        k1 = this.pos;
                        a = this.literal(q);
                        if (a == '{')
                        {
                            k1 = this.pos;
                            a = this.closeone("{", "}",q);
                            k2 = this.pos - 1;
                            if (a == null) 
                            {
                                Z[Z.length] = {
                                    x:Math.ceil(fs/2), 
                                    y:Math.ceil(fs/2),
                                    t:this.formate("Missing \"}\"   in "
                                        + s.substring(k1,q))
                                    };
                                break;
                            }
                        }
                        else
                        {
                            k2 = this.pos;
                        }
                        var v = this.literal(q);
                        if (v!='_' && v!='^') 
                        {
                            newpos = this.pos;
                                            
                            num  =this.recur(k1,k2,Math.ceil( fs/2));
                            var x = num.x + num.y;
                            if (u =='_')
                            {
                                t = "<table style=display:inline cellpadding=0 cellspacing=0><tr height=" + fs +"><td>" + this.formatl(tt,fs) 
                                + "</td></tr><tr height=" + x +"><td>" + num.t +"</td></tr></table>";
                                y = Math.round(fs/2 + x);
                                x = Math.round(fs/2);
                            }
                            else
                            {
                                t = "<table style=display:inline cellpadding=0 cellspacing=0><tr height=" + x +"><td  align=center >" + num.t +"</td></tr><tr height=" + fs +"><td  align=center >" +  this.formatl(tt,fs) 
                                + "</td></tr></table>"; 
                                x = Math.round(fs/2 + x);
                                y = Math.round(fs/2);
                            }
                            Z[Z.length] = {
                                x:x, 
                                y:y, 
                                t:t
                            };
                            this.pos = newpos;
                            break;
                        }
                        else
                        { 
                            k3 = this.pos;
                            a = this.literal(q);
                            if (a == '{')
                            {
                                k3 = this.pos;
                                a = this.closeone("{", "}",q);
                                k4 = this.pos - 1;
                                if (a == null) 
                                {
                                    Z[Z.length] = {
                                        x:Math.ceil(fs/2), 
                                        y:Math.ceil(fs/2),
                                        t:"<span style=\"color:" + this.wcolor +";font-size:" + this.fs +"px\">Missing \"}\" in " 
                                        + s.substring(k3,q) +"</span>"
                                        };
                                    break;
                                }
                                                
                            }
                            else
                            {
                                k4 = this.pos;
                                                
                            }
                            newpos = this.pos;
                            if (u =='^')
                            {
                                                
                                num  =this.recur(k1,k2,Math.ceil(fs/2));
                                var z  =this.recur(k3,k4,Math.ceil(fs/2));
                            }
                            else
                            {
                                                
                                num  =this.recur(k3,k4,Math.ceil( fs/2));
                                z  =this.recur(k1,k2,Math.ceil( fs/2));
                            }
             
                            x = num.x + num.y;
             
                            y = z.x + z.y;
                                       
                            tt =this.subs(tt);
                            t = "<table style=display:inline cellpadding=0 cellspacing=0><tr height=" + x +"><td  align=center >" + num.t +"</td></tr>"
                            +"<tr height=" + fs +"><td  align=center >"  +  this.formatl(tt,fs) 
                            + "</td></tr><tr height=" + y +"><td  align=center >" + z.t +"</td></tr></table>";
                            x = Math.round(fs/2 + x);
                            y = Math.round(fs/2 + y);
            
                            Z[Z.length] = {
                                x:x, 
                                y:y, 
                                t:t
                            };
                            this.pos = newpos; 
                            break;
                        }
                    }
        
         
                    break;
                                    
                case '\\int': case '\\oint':
                                    
                    if (buf!='') Z[Z.length] ={
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                       
                    buf = '';
                    newpos = this.pos;
                    u = this.literal(q);
        
                    if ( u!='_' && u!='^') 
                    {
                        this.pos = newpos;
                        break;
                    }
                    else
                    { 
                        k1 = this.pos;
                        a = this.literal(q);
                        if (a == '{')
                        {
                            k1 = this.pos;
                            a = this.closeone("{", "}",q);
                            k2 = this.pos - 1;
                            if (a == null) 
                            {
                                Z[Z.length] = {
                                    x:Math.ceil(fs/2), 
                                    y:Math.ceil(fs/2),
                                    t:this.formate("Missing \"}\"   in "
                                        + s.substring(k1,q))
                                    };
                                break;
                            }
                        }
                        else
                        {
                            k2 = this.pos;
                        }
                        var v = this.literal(q);
                        if (v!='_' && v!='^') 
                        {
                            newpos = this.pos;
                                            
                            num  =this.recur(k1,k2,Math.ceil( fs/2));
                            x = num.x + num.y;
                            tt = this.subs(tt);
                            if (u =='_')
                            {
                                t = "<table style=display:inline cellpadding=0 cellspacing=0 border=1><tr height=" + x +"><td rowspan=3 valign=middle width=" + Math.ceil(fs/2) +">" + this.formatl(tt,fs+x) 
                                + "</td><td><!----></td></tr><tr height=" + fs +"><td><!-- --></td></tr><tr height=" + x +"><td>" + num.t +"</td></tr></table>";
                                y = Math.round(fs/2 + x);
                                x = Math.round(fs/2 + x);
                            }
                            else
                            {
                                t = "<table style=display:inline cellpadding=0 cellspacing=0><tr height=" + x +"><td rowspan=3 valign=middle>" + this.formatl(tt,fs+x) 
                                + "</td><td>" + num.t +"</td></tr><tr height=" +  fs +"><td><!-- --></td></tr><tr height=" + x +"><td><!----></td></tr></table>";
                                x = Math.round(fs/2 + x);
                                y = Math.round(fs/2 + x);
                            }
                            Z[Z.length] = {
                                x:x, 
                                y:y, 
                                t:t
                            };
                            this.pos = newpos;
                            break;
                        }
                        else
                        { 
                            k3 = this.pos;
                            a = this.literal(q);
                            if (a == '{')
                            {
                                k3 = this.pos;
                                a = this.closeone("{", "}",q);
                                var k4 = this.pos - 1;
                                if (a == null) 
                                {
                                    Z[Z.length] = {
                                        x:Math.ceil(fs/2), 
                                        y:Math.ceil(fs/2),
                                        t:this.formate("Missing \"}\" in " 
                                            + s.substring(k3,q))
                                        };
                                    break;
                                }
                                                
                            }
                            else
                            {
                                k4 = this.pos;
                                                
                            }
                            newpos = this.pos;
                            if (u =='^')
                            {
                                                
                                num  =this.recur(k1,k2,Math.ceil(fs/2));
                                z  =this.recur(k3,k4,Math.ceil(fs/2));
                            }
                            else
                            {
                                                
                                num  =this.recur(k3,k4,Math.ceil( fs/2));
                                z  =this.recur(k1,k2,Math.ceil( fs/2));
                            }
             
                            x = num.x + num.y;
             
                            y = z.x + z.y;
                                            
                            tt = this.subs(tt);
                                            
                            t = "<table style=display:inline cellpadding=0 cellspacing=0 border=0>"
                            + "<tr height=" + x +"><td rowspan=3 valign=middle >"   +  this.formatthin(tt,x+y+fs) + "</td>"
                            + "<td>"   + num.t +"</td></tr>"
                            + "<tr height=" + fs+"><td><!-- --></td></tr>"
                            + "<tr height="  + y +"><td  align=center >"  
                            + z.t  + "</td></tr></table>";
                            x = Math.round(fs/2 + x);
                            y = Math.round(fs/2 + y);
            
                            Z[Z.length] = {
                                x:x, 
                                y:y, 
                                t:t
                            };
                            this.pos = newpos; 
                            break;
                        }
                    }
        
         
                    break;
                case '\\left(': case '\\left[':  case '\\left{':
                                    
                    if (buf!='') Z[Z.length] ={
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                       
                    buf = '';
                    k1 = this.pos;
                    var closed = "\\right" + String.fromCharCode(2+tt.charCodeAt(5));
                    if (tt.charAt(5) == '(')
                        closed = "\\right" + String.fromCharCode(1+tt.charCodeAt(5));
                                    
                    u = this.closeone(tt,closed,q);
                                     
                    if ( u == null) 
                    {
                        Z[Z.length] = {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing the closing \"" + closed +"\"   in "
                                + s.substring(newpos,q))
                            };
                        break;
                    }
                    else
                    { 
                        k2 = this.pos - 7;
                        newpos = this.pos;
                        num  =this.recur(k1,k2, fs);
                        x = num.x + num.y;
                        t = "<table style=display:inline cellpadding=0 cellspacing=0 border=0>"
                        + "<tr height=" + x +"><td>"   +  this.formatthin(tt.charAt(5),x) + "</td>"
                        + "<td>"   + num.t +"</td>"
                        + "<td>"   +  this.formatthin(closed.charAt(6),x) 
                        + "</td></tr></table>";
                        x = Math.round(x/2);
                        y = Math.round(x/2);
                        Z[Z.length] = {
                            x:x, 
                            y:y, 
                            t:t
                        };
                        this.pos = newpos; 
                        break; 
                    }
        
         
                    break;
                case '^': case '_':
                                    
                    if (buf!='') Z[Z.length] ={
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                       
                    buf = '';
                    k1 = this.pos;
                    a = this.literal(q);
                    if (a == '{')
                    {
                        k1 = this.pos;
                        a = this.closeone("{", "}",q);
                        k2 = this.pos - 1;
                        if (a == null) 
                        {
                            Z[Z.length] = {
                                x:Math.ceil(fs/2), 
                                y:Math.ceil(fs/2),
                                t:this.formate("Missing \"}\"   in "
                                    + s.substring(k1,q))
                                };
                            break;
                        }
                    }
                    else
                    {
                        k2 = this.pos;
                    }
                    newpos = this.pos;
                    num  =this.recur(k1,k2,Math.ceil( fs/2));
                  
                    if (tt =='^')
                    {
                        var w = Z[Z.length-1];
                         
                        t = "<table style=display:inline cellpadding=0 cellspacing=0 border=0>"
                        +   "<tr height=" + num.x +"><td style=\"font-size:" + (num.x-3) + "px\"><!-- --></td><td rowspan=2 valign=top align=left>" + num.t +"</td></tr>" 
                        +"<tr><td valign=center align=right>" + w.t + "</td></tr></table>";
                        y = Math.max(w.y, num.y-w.x);
                        x = w.x + num.x;
                        Z[Z.length-1] = {
                            x:x, 
                            y:y, 
                            t:t
                        };
                    }
                    else
                    {
                        w = Z[Z.length-1];
                         
                        t = "<table style=display:inline cellpadding=0 cellspacing=0 border=0>"
                        + "<tr ><td  valign=center  align=right>" + w.t +"</td><td rowspan=2 valign=bottom  align=left>" + num.t +"</td></tr>"
                        + "<tr height=" + num.y + "><td style=\"font-size:" + (num.y-3) + "px\"><!-- --></td></tr></table>";
                        x = Math.max(w.x, num.x-w.y);
                        y = w.y + num.y;
                        Z[Z.length-1] = {
                            x:x, 
                            y:y, 
                            t:t
                        };
                    }
                    this.pos = newpos;                   
                    break;  
    
                case "{" :
                    if (buf!='') Z[Z.length] ={
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                       
                    buf = '';
                    k1 = this.pos;
                    a = this.closeone("{", "}", q);
                    if (a == null)
                    { 
                        Z[Z.length] = {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"}\"   in "
                                + s.substring(k1,q))
                            };
                        break;
                         
                    }
                    newpos = this.pos;
                    Z[Z.length] = this.recur(k1, this.pos-1, fs);
                    this.pos = newpos;
                    break;
      
                case "\\bar":
                    num = this.recur(this.pos, q, fs);
                    lk = this.linethick(fs);
                    t = "<table style=display:inline cellspacing=0 cellpadding=0><tr height=" 
                    +  lk + "><td><div style=\"background-color:" + this.color +";height:" 
                    + lk +"px;width:100%\"><!-- --></div></td></tr>" 
                    + "<tr><td>" + num.t + "</td></tr></table>"; 
                    x = num.x+ Math.floor(lk/2);
                    y = num.y+ Math.floor(lk/2);
                    Z[Z.length] = {
                        x:x, 
                        y:y, 
                        t:t
                    };
                    this.pos = q;
                    break;

                case "\\hat": case "\\hat":

                    num = this.recur(this.pos, q, fs);
                    tt = this.subs(tt);
                    t = "<table style=display:inline cellspacing=0 cellpadding=0><tr height=" 
                    +  Math.round(fs/2) 
                    + "><td align=center>" 
                    + this.format(tt,Math.round(fs/2)) 
                    +"</td></tr>" 
                    + "<tr><td>" + num.t + "</td></tr></table>"; 
                    x = num.x+ Math.floor(fs/3);
                    y = num.y;
                    Z[Z.length] = {
                        x:x, 
                        y:y, 
                        t:t
                    };
                    this.pos = q;
                    break;

                case "\\sqrt" :

                    if (buf!='') Z[Z.length] ={
                        x:Math.ceil(fs/2),
                        y:Math.ceil(fs/2), 
                        t:this.format(buf,fs)
                        };                       
                    buf = '';
                    a = this.literal(q);
                    var  k1 = this.pos;
                    if (a != '{')
                    {
                        Z[Z.length] = {
                            x:Math.ceil(fs/2), 
                            y:Math.ceil(fs/2),
                            t:this.formate("Missing \"{\"   in " + s.substring(k1,q))
                            };
                        break;
                    }
    
                    a = this.closeone("{", "}",q);
                    k2 = this.pos - 1;
                    newpos = this.pos;
                    num = this.recur(k1, k2, fs);
                    lk = this.linethick(fs);
                    tt = this.subs(tt);
                    t = "<table style=display:inline cellspacing=0 cellpadding=0><tr height=" +  lk + "><td rowspan=2>" + this.format(tt,(num.x + num.y+2) ) + "</td><td><div style=\"background-color:" + this.color +";height:" + lk +"px;width:100%\"><!-- --></div></td></tr>" 
                    + "<tr><td>" + num.t + "</td></tr></table>"; 
                    x = num.x+ Math.floor(lk/2);
                    y = num.y+ Math.floor(lk/2);
                    Z[Z.length] = {
                        x:x, 
                        y:y, 
                        t:t
                    };
                    this.pos = newpos;
                    break;  
       
                case  "\\arcsin":  case "\\arctan":  case"\\arg" :  case"\\cos" :  case"\\cosh"   :  case"\\cot" 	 :  case"\\coth"    :  
                case"\\csc" 	  :  case"\\deg" :  case"\\det"
                :  case"\\dim" :  case"\\exp" 	    :  case"\\gcd" :  case"\\hom" :  case"\\inf" :  case"\\ker" :  case"\\lg" :  
                case"\\liminf" :  case"\\limsup" :  case"\\ln" 
                :  case"\\log" :  case"\\max" :  case"\\min" :  case"\\sec" :  case"\\sin" :  case"\\sinh" :  case"\\sup" :  
                case"\\tan" :  case"\\tanh":
                    Z[Z.length] = {
                        x:Math.round(fs/2), 
                        y:Math.round(fs/2), 
                        t:this.formatl(tt.substring(1), fs)
                        };
                    break;
                default:
                                    
                    tt = this.subs(tt);
                    if (tt.indexOf("\\") > 0)
                        buf +=   tt +" ";
                    else
                        buf += tt;
                                    
                    break;
           
            }
                             
                             
        }
        if (buf!='') Z[Z.length] ={
            x:Math.ceil(fs/2),
            y:Math.ceil(fs/2), 
            t:this.format(buf,fs)
            };           
        buf = '';
        var mx = 0; 
        var my = 0;
    
        for (var i=0; i < Z.length; i++)
        {
            if (Z[i].x > mx) mx = Z[i].x;
            if (Z[i].y > my) my = Z[i].y;
        }
        t = '<table style=display:inline cellspacing=0 cellpadding=0 border=0><tr>';
        lk = this.linethick(fs)*3;
        for ( i=0; i < Z.length; i++)
        {
                                
            t += "<td style=width:" + lk + "px><!-- --></td><td><table style=display:inline cellspacing=0 cellpadding=0  border=0>";
            if (mx > Z[i].x)
                t += "<tr height=" + (mx-Z[i].x) +"><td   > <!-- --></td></tr>";
            t += "<tr height=" + (Z[i].y+Z[i].x) +"><td valign=middle>" + Z[i].t +"</td></tr>";
            if (my > Z[i].y)
                t += "<tr height=" + (my-Z[i].y) +"><td  > <!-- --></td></tr>";    
            t += "</table></td>";
                             
        } 
        t +="</tr></table>";
        return {
            x:mx, 
            y:my, 
            t:t
        };
    }
 
}

function latex2html1(s,  color, fs)
{
    var ans = '';
    var k = -1;
    while (k < s.length)
    {
        var l = s.indexOf("$", k+1);
        if (l == -1) 
        {
            ans += s.substring(k+1);
            break;
        }
        if (l>0 && s.charAt(l-1) == '\\') 
        {
            ans += s.substring(k+1,l-1) + "$";
            k = l;
            continue;
        }
        ans += "<font color=" + color + ">" + s.substring(k+1,l) + "</font>";
       
        k = s.indexOf("$",l+1);
        while (k>0 && s.charAt(k-1) == '\\')
        {
           k = s.indexOf("$",k+1);
        }
        if (k < 0)
        {
            k = s.length;
        }
        var y = s.substring(l+1,k);
        
        ans +=  latex2html(y,  color, fs) ;
    }
    
   
    return ans;
}

function latex2html(s,  color, fs)
{ 
    var x = new Trans(s,fs, color)
    var y = x.recur(0, s.length, fs);
    
    return y.t;
}
function myformatele(v)
{
    if (v==null) return;
    var s = v.innerHTML;
    
    if (s!=null || s == '')
        s = myformatele1(s);
    
    v.innerHTML = s;
}
function myformatele1(s,ratio)
{
    var st = 0;
    var ss = '';
    var did = false;
    var buf='';
    for (var i=0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (c == '$')
        {
            if (st == 0)
                st = 1;
            else if (st == 1)
            {
                st = 5;
                buf = '';
            }
            else if (st == 2)
            {
                if (did==false)
                   ss += latex2html(buf, 'black', 30*ratio);
                else 
                    ss += '\$...\$'; 
                st = 0;
                did=true;
            }
            else if (st ==5)
            {
                if (did==false)
                    ss += latex2html(buf, 'red', 20*ratio);
                else 
                    ss += '\$\$...\$\$';
                st = 6;
            }
            else if (st == 6)
            {
                st = 0;
            }
        }
        else
        {
            if (st == 0)
            {
                ss += c;
            }
            else if (st == 1)
            {
                st = 2;
                buf = c;
            }
            else if (st == 2 || st == 5)
            {
                buf += c;
            } 
        }
    }
    return ss;
}
//var s = "\\sqrt{(a+b)^2}  xy  \\frac{x}{1+ \\frac{x}{1+ \\frac{x}{y}} } \\lim_{x \\to 0}f(x) \\prod_{n=1}^23 a(i)  \\oint_0^\\pi f(x)dx";
//document.write(latex2html(s, 'red', 20) );
var LaTexHTML =
{
    states : 
    [
    [6,1,0],
    [3,2,3],
    [4,5,4],
    [3,0,3],
    [4,5,4],
    [4,0,4],
    [0,0,0] 
     
    ],
    ei : 0,
    SI : 20,
    DI : 20,
    fid : '',
    assignedid:false,
    jj : 0,
    sav : '',
    dav : '',
    pn : ",div,span,p,body,li,td,h1,h2,h3,h4,h5,th,dt,th,form,a,font,b,nobr,strong,i,em,", 
    r : null, 
    formatele : function (dv)
    {
       if (dv == null  )  return;
       
       var p = "," + dv.parentNode.nodeName.toLowerCase() + ',';
       if (dv.nodeName.toLowerCase() == '#text' && LaTexHTML.pn.indexOf(p) >=0)
       {
           var x = dv.nodeValue;
           if (x.indexOf("$")>=0)
           {
                LaTexHTML.format(x,dv.parentNode,dv);  
                dv.parentNode.removeChild(dv);
           }
           return;
       }
         
       var N = dv.childNodes.length;
       if (N == 0) return;
       for (var i=N-1; i >=0; i--)
          LaTexHTML.formatele(dv.childNodes[i]); 
    },
    
    format : function (t,dv,zz) 
    {
        LaTexHTML.initid();
        if (dv == null)
        {
            dv = document.createElement("div");
        }
       
        var state = 0;
        var buf = '';
        var code;
        for (var i=0; i < t.length; i++)
        {
           if (t.charAt(i) == '\\') code = 0;
           else if (t.charAt(i) == '$') code = 1;
           else code = 2;
 
           if ( code == 2 || (state > 0 && state<=6) && code  == 0)
           {
              if (state == 6) buf += "\\";
              buf += t.charAt(i);
           }
           else if (code == 1)
           {
               if ( state == 0)
               {
                   
                  var x = document.createTextNode(buf);
                  if (buf!='')
                  {
                      if (zz == null)
                      dv.appendChild(x);
                      else
                      dv.insertBefore(x,zz);
                  }
               }
               else if ( state == 3)
               {
                  var si = LaTexHTML.nexts();
                  if (si!=null)
                  {
                      var x = document.getElementById("S__s" +  si);

                      if (x!= null)
                      {
                         if (zz ==null)
                          dv.appendChild(x);
                         else
                          dv.insertBefore(x,zz);
                          var math = LaTexHTML.next(x);
                          if (math!=null)
                              MathJax.Hub.queue.Push(["Text",math,"\\displaystyle{"+ buf + "}"] );

                      }
                  }
                  
               }
               else if ( state == 5)
               {
                  var di = LaTexHTML.nextd();
                  if (di!=null)
                  {
                      var x = document.getElementById("D__d" +  di);

                      if (x!=null)
                      {
                          if (zz == null)
                          dv.appendChild(x);
                          else
                          dv.insertBefore(x,zz);
                          var math = LaTexHTML.next(x);
                          if (math!=null)
                              MathJax.Hub.queue.Push(["Text",math,"\\displaystyle{"+ buf + "}"] );

                      }
                  }
                  
               }
               else if (state == 6)
               {
                  buf += '$';
               }
               if (state == 5 || state < 4) buf = '';
           }
           
           state = LaTexHTML.states[state][code];

        }
        if (buf!='')
        {
              var x = document.createTextNode(buf);
              if (zz == null)
              dv.appendChild(x);
              else
              dv.insertBefore(x,zz);
        } 
       
    },
    deformat :  function (dv)
    {
       if (dv == null || dv.nodeName.toLowerCase() == '#text' )  return;
       
       var d =  dv.nodeName.toLowerCase() ;
       if (d  == 'span' && dv.id.indexOf("S__s") == 0 || d  == 'div' && dv.id.indexOf("D__d") == 0)
       {
          var y = document.createTextNode("XXX");
          dv.parentNode.insertBefore(y,dv);
          var ans = LaTexHTML.del(dv);
          var z = '$'; if (d == 'div') z+='$';
          y.nodeValue = z + ans + z;
          return; 
       }  
       var N = dv.childNodes.length;
       if (N == 0) return;
       for (var i=N-1; i >=0; i--)
          LaTexHTML.deformat(dv.childNodes[i]); 
    },
    reformat : function(dv)
    {
        LaTexHTML.deformat(dv);
        LaTexHTML.formatele(dv);
    },
    getId : function(e)
    {
       if (e == null || typeof(e.innerHTML) == 'undefined')
           return null;
       var s = e.innerHTML;
       var i  = s.indexOf(LaTexHTML.fid);
       var j  = i + LaTexHTML.fid.length;
       while (true)
       {
           var c = s.charAt(j);
           if (c < '0' || c > '9') break;
           else j++;
       }  
       return s.substring(i,j);
    },
    next : function(e)
    {
       var id = LaTexHTML.getId(e);
       if (id == null || typeof(MathJax) == 'undefined') return null;
       var maths = MathJax.Hub.getAllJax('MathOutput');
       for (var j=0; j < maths.length; j++)
       {  
           if( maths[j].inputID  == id  )
           {  
               
               return maths[j];
           }
        }
        return null;
    },
     
    del : function(e)
    {
       var ans = '';
       var id = LaTexHTML.getId(e);
       if (id == null) return;
       var maths = MathJax.Hub.getAllJax('MathOutput');
       for (var j=0; j < maths.length; j++)
       {  
         
           if( maths[j].inputID == id)
           {
               ans = maths[j].SourceElement().innerHTML.replace(/^[^{]+{/,'').replace(/}$/,'');
               MathJax.Hub.queue.Push(["Text",maths[j],"{}"] );
               break;
           }
       } 
      //document.body.insertBefore(e, document.getElementById("D__d")); 
      document.getElementById('sdhost').insertBefore(e, document.getElementById("D__d")); 
       var eid = e.id;
       if (eid.indexOf("S__s") == 0)
       {
          LaTexHTML.sav += eid.replace(/S__s/,'')  + ",";
       }
       else
       {
          LaTexHTML.dav += eid.replace(/D__d/,'')  + ",";
       }
       return ans;
    }, 
     
    initid : function()
    {
        if (LaTexHTML.assignedid || typeof(MathJax) == 'undefined') return;
        var maths = MathJax.Hub.getAllJax('MathOutput');
        LaTexHTML.ei = 0;
        for (var j=0; j < maths.length; j++)
        {  
            if( maths[j].SourceElement().innerHTML.replace(/[\r|\n| ]/g,'') != '{}')
            {  
                LaTexHTML.ei++;
            }
        }
        if (LaTexHTML.ei < maths.length)
        {
            LaTexHTML.fid = maths[LaTexHTML.ei].inputID.replace(/[0-9]+/,''); 
            LaTexHTML.r = new RegExp(".*(" + LaTexHTML.fid + "[0-9]+).*", "i");
            LaTexHTML.assignedid = true;
        }
        else
        {
            
        }
    },
     
    
    reset : function()
    {
         
        for (var i=0; i < LaTexHTML.SI; i++)
        {
            if ( ("," + LaTexHTML.sav).indexOf("," + i +",") < 0)  
            LaTexHTML.del(document.getElementById("S__s" + i));
        }
        for (  i=0; i < LaTexHTML.DI; i++)
        {
            if ( ("," + LaTexHTML.dav).indexOf("," + i +",") < 0)  
            LaTexHTML.del(document.getElementById("D__d" + i));
        }
        
    },
    
    init : function(sdn)
    {  
      
        var i = null, j=null;
        if (sdn!=null && sdn[0]!=null && isNaN(sdn[0])==false)
            i = parseInt(sdn[0]);
        if (sdn!=null && sdn[1]!=null && isNaN(sdn[1])==false)
            j = parseInt(sdn[1]);
        if (i == null && j == null) return;
        if (j!=null)LaTexHTML.DI = j;
        if (i!=null)LaTexHTML.SI = i;
        document.write("<div id=sdhost style=\"height:1px;overflow:hidden;\">");
        //document.write("<div style=\"width:200px;height:30px;overflow:hidden\">");
        for (var i=0; i < LaTexHTML.SI; i++)
        {
           document.write("<span id=\"S__s" + i +"\" style=\"border:0px 0px 0px 0px !important\">${}$</span><br>");
           LaTexHTML.sav += i + ",";
        }
        for (i=0; i < LaTexHTML.DI ; i++) 
        {
            document.write("<div id=\"D__d" + i +"\"  style=\"border:0px 0px 0px 0px !important\">$${}$$</div>");
            LaTexHTML.dav += i + ",";
        }
        document.write("<div id=\"D__d\"  style=\"border:0px 0px 0px 0px !important\"> </div>");
        document.write("</div>");
        //document.write("<span id=\"S__s\" style=\"border:1px blue solid\">\\({}\\)</span>");
        //document.write("<div id=\"D__d\">$${}$$</div>");
       
    },
     nexts : function()
     {
         if (LaTexHTML.sav == '') return null;
         var j = LaTexHTML.sav.indexOf(",");
         var ans = parseInt(LaTexHTML.sav.substring(0,j));
         if (j < LaTexHTML.sav.length-1)
             LaTexHTML.sav = LaTexHTML.sav.substring(j+1);
         else
             LaTexHTML.sav = '';
         return ans;
         
     },
     nextd : function()
     {
         if (LaTexHTML.dav == '') return null;
         var j = LaTexHTML.dav.indexOf(",");
         var ans = parseInt(LaTexHTML.dav.substring(0,j));
         if (j < LaTexHTML.dav.length-1)
             LaTexHTML.dav = LaTexHTML.dav.substring(j+1);
         else
             LaTexHTML.dav = '';
         return ans;
         
     }
    
};


 
var oldonload7   = function()
{
    
    if (typeof (tail) == 'function')
    {
         tail();
    }
    alltdisleft(document.body);

   // initcurve();
    if (typeof(needtranslator)!='undefined' && needtranslator)
    {
        if (typeof(getJsParam) == 'function')
            LaTexHTML.init(getJsParam("curve.js",['sn','dn']));
        else
            LaTexHTML.init([20,20]);

    }
    if (typeof ugentmsg != 'undefined' && ugentmsg!='')
    {
        slowshow(); 
    }
}
oldonload7();

function tomaster()
{
     window.location.href = "mailto:linzhongyan@gmail.com?subject=About website&body="
}
 







 