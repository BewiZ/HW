/************************************************************************** 
* (C) Copyright 2004-2014 by Systems on Web, Inc.  All Rights Reserved.  *
* Author: Zhongyan Lin                                                   *
**************************************************************************/
function keeptext2html(txt)
{
   return txt.replace(/ /g,'?').replace(/</g, "<").replace(/>/g,">").replace(/\n/g,'<br>');
}

function spaces(i)
{
   var sp='';
   for (var ii = 0; ii < i; ii++)
      sp += " ";
   return sp; 
}

function foldlines(txt, max)
{
   var word  = txt.replace(/\n+/g, ' ');
   return  foldaline(word, max, '\n');
}

function foldaline2(txt, max)
{
   if (txt==null) return ""; 
   var lines = txt.split(/\n/);
   var ans = '';  
   for (var i=0; i < lines.length; i++)
   {  
      ans += foldaline(lines[i], max,'\n') +"\n";
   }
   return ans;  
}

function foldlines1(txt, max)
{
   var word  = txt.replace(/\n\n/g, '<br>');
   return  foldaline(word, max, '<br>');
   
}

function foldaline(p, m, ccc)
{
   var words = p.split(/[ |\n]/); 
   var processed = "";
   var j = 0, k;
   for (var i = 0; i < words.length; i++)
   {
      k = words[i].length;
      if (j+k < m)
      {
        processed += words[i] + " ";
        j += (k+1);
      }
      else
      {
        if (processed.length != 0)
          processed +=  ccc;
        processed +=  words[i] + " ";
        j = k;
      } 
   }
   return processed;
}

function whichFormat(txt)
{
   return guessFormat(txt.value);
}

function guessFormat(txt)
{ 
   var ans = 0;
   var i = 0; 
   var dcounter = 0; 
   var hcounter = 0;
   var hasslash = false;
   if (txt==null)
   {
       if (typeof(guessedFormat)!='undefined')guessedFormat=0;
       return 0;
   }
   var xy;
   var p1=-1,p2=0;
   for (; i < txt.length; i++)
   {
     if (txt.charAt(i) == '$' && (i==0 || txt.charAt(i-1)!='\\'))
     {
        dcounter++; 
        if (p1 == -1) 
        {
            p1 = i;
        }
        else  
        {
            if (  hasslash || i-p1 < 10 &&  (xy=txt.substring(p1,i)).indexOf(",")==-1 && xy.replace(/^[0-9|\.]+/,'')==xy    )
            {
                if (typeof(guessedFormat)!='undefined')
                    guessedFormat=2;
                return 2;
            }
            else 
            { 
                p1 = i;
                hasslash = false;
            }
        }
         
     }
     else  if ( p1>-1 && i>p1 && (txt.charAt(i)=='\\' &&  i < txt.length-1 && txt.charAt(i+1)!='$' ||txt.charAt(i)=='^'||txt.charAt(i)=='_')) 
         hasslash = true;
        
   }
   for (i=0; i < txt.length; i++)
   {
     if (txt.charAt(i) == '<') 
     {
         hcounter++;
         if (hcounter>1 && i < txt.length-1 && txt.charAt(i+1) == '/')
         {   
             if (typeof(guessedFormat)!='undefined')guessedFormat=1;
             return 1;
         }
     }
   }
   if (txt.replace(/[ |\n]/g,'')!='' && txt.replace(/^[ ]*\n*http[s]?:[^ ]+[ ]*\n*/,'')=='')
   {  
       if (typeof(guessedFormat)!='undefined')guessedFormat=3;
       return 3;
   }
   var r = new RegExp(/<[ ]*[a-z]+[^>]+>/i);
   var m = r.exec(txt);
   if (m != null)
   {
       var x = m.toString().toLowerCase().replace(/<[ ]*/,'');
       
       var y = x.replace(/[^a-z]/,' ');
     
       var j = y.indexOf(" ");
   
       y = "," + y.substring(0, j) + ",";
     
       if (",br,li,img,input,hr,meta,link,area,param,iframe,".indexOf(y)>=0)
       {
           if (typeof(guessedFormat)!='undefined')guessedFormat=1;
           return 1;
       }
   }
   if (typeof(guessedFormat)!='undefined')guessedFormat=1;
   return 0;
}
 
function checkHTML(txt)
{ 
   if (txt!=null) txt.value =  checkh(txt.value,true );
}

function noneedclose(str)
{
    return (str=='img' || str == 'br' || str  == 'hr' || str == 'input' || str=='meta' || str=='frame' || str=='iframe' || str=='li' || str =='link'   )
}

function dd(txtstr)
{
  if (txtstr==null ) return null;
  var arr = new Array();
  var dd = new RegExp(/\$[^\$]+\$/);
  var k =0;

  while ( k < txtstr.length )
  {

      var m  = dd.exec(txtstr.substring(k));

      if (m  == null  )
      {
         break;
      }
      arr[arr.length] = [k + m.index, k+m.index+m.toString().length];
      k += m.index+m.toString().length;
  }
  return arr;
}
function indd(k, arr )
{
    if (arr== null) return -1;
    for (var i=0; i < arr.length; i++)
    if (k>=arr[i][0] && k <=arr[i][1])
        return arr[i][1];
    return -1;
}

function Astack()
{
    this.st = new Array();
    this.len = 0;
    this.push = function(x)
    {
        this.st[this.len++] = x;
    }
    this.pop  = function()
    {
        if (this.len > 0)
           this.len--;
    }
    this.get  = function()
    {
       if (this.len == 0) return null;
       return this.st[this.len-1];
    }
    this.size = function()
    {
        return this.len;
    }
}
var transition =
[
[1,0,0,9,0,13,0,0,0,0,0],
[1,0,6,9,0,0,0,2,0,0,0],
[1,4,3,9,7,0,2,2,2,2,0],
[1,0,0,9,0,0,0,0,0,0,0],
[5,4,4,9,4,4,4,4,4,4,4],
[5,4,6,9,4,4,4,2,4,4,4],
[5,0,4,9,4,4,6,6,6,4,4],
[7,7,7,7,2,8,7,7,7,7,7],
[7,7,7,7,7,8,7,7,7,7,7],
[11,11,11,10,11,11,11,11,11,11,11],
[10,10,10,12,10,10,10,10,10,10,10],
[11,11,11,14,11,11,11,11,11,11,11],
[14,14,14,14,14,14,14,14,14,14,14],
[1,0,0,0,0,0,0,0,0,0,0]
];

function mapcode(c)
{
    switch(c)
    {
        case  '<':return 0;
        case  '>':return 1;
        case  '/':return 2;
        case  '$':return 3;
        case  '"':return 4;
        case  '\\':return 5;
        case  ' ': case  '\n': case  '\r':return 6;
        case  '=':return 9;
        default:
           if ('a' <= c && c <= 'z' || 'A' <= c && c <= 'Z')
               return 7;
           else if ('0' <= c && c <= '9')
               return 8;
           return 10;
    }
    return 10;
   
}
var noneedmatchs=['br','li','img','input','hr','meta','link', 'area', 'param', 'iframe'];
var harmfuleles = ',head,title,meta,link,';
var harmfultags = ',html,body,';
function nnmatch(x)
{
    if (x==null) return true;
    for (var i=0; i < noneedmatchs.length; i++)
        if (x.toLowerCase() == noneedmatchs[i])
           return true;
   return false;
}
function removecm(txtstr)
{
   var y = '';
   var i, j = 0;
   while (true)
   {
       i = txtstr.indexOf("<!--", j);
       if (i == -1)
       {
           y += txtstr.substring(j);
           break;
       }
       else
       {
           y += txtstr.substring(j, i);
       }
       j = txtstr.indexOf("-->", i+4);
       if (j < 0)
       {
           break;
       }
       else
       {
           j += 3;
       }
   }
   return y;

}
function checkh1(txtstr, modify)
{
    //txtstr = removecm(txtstr);
    var st = new Astack() 
    var s = 0, saveds = 0;
    var buf = "";
    var y = '',z;
    var nls = 0;
    for (var i=0; i < txtstr.length; i++)
    {
        z = txtstr.charAt(i);
        var c = mapcode(z);
        var t = transition[s][c];
        if (nls == 0 )
        {
            if( z == '\n')
            nls = 1;
        }
        else if (nls == 1)
        {
            if (z == '\n')
            {
                if (modify) y += "<br>";
                nls = 0;
            }
            else if (c != 6) 
                nls = 0;
        }
        

        if (t == 14)t =saveds;
        if (c==0&& ( s < 7 || s ==13))
        {
            buf =  '';
            if (modify) y +=z;
        }
        else if (c==7 && (s == 1 || s == 5))
        {
            buf += z;
            if (modify) y +=z;
        }
        else if ( s == 2||s==6  )
        {
            if ( c ==1 )
            {
            
            buf = buf.replace(/ .*/,'');
            if (s == 6)
            {
                if (nnmatch(this.st.get()))
                    this.st.pop();
                if (buf.toLowerCase() ==  this.st.get().toLowerCase())
                    this.st.pop();
                else if (modify)
                {
                    var j = y.lastIndexOf(buf);
                    while (y.charAt(j) != '<')j--;
                    y = y.substring(0,j);
                    
                }
            }
            else
            {
                this.st.push(buf);
            }
           }
           else if ( c >= 6 && c<=8 )
           {
               buf += z;
           }
           if (modify) y += z;
        }
        else if (c == 3 && s < 7)
        {
            if (s < 4)
                saveds = 0;
            else
                saveds = 4;
        }
        else if (modify)
        {
        if (s == 9)
        {
            if (c == 3)
            {
                y += '<div>$'
            }
            else
            {
                y += '<span>$' + z;
            }
        }
        else if (s == 10)
        {
            if (c != 3)
            {
                y += z;
            }
        }
        else if (s == 11)
        {
            if (c == 3)
            {
                y += '$</span>';
            }
            else
                y += z;
        }
        else if (s == 12)
        {
            y += '$</div>';
            if (c!=3)
                y += z;
        }
        else
        {
            y += z;
        }
        }
        s = t;
    }
     
    var w = '';

    while( (z = st.get()) != null)
    {
       if (nnmatch(z)==false)
           w += "</" + z + ">";
        st.pop();
    }
    if (modify)
    return  dobeginend(y) + w;
    return w;
}
function dobeginend(t)
{
   if (t==null||t.length<6) return t;
   var inside = [t.charAt(0)=='$'?1:0];
   
   for (var i=1; i < t.length; i++)
   {
      if (t.charAt(i) == '$')
      {
          if ( inside[i-1] == 1)  inside[i] = 2;
          else if (inside[i-1] == 0)inside[i] == 1;
          else inside[i] = 1;
      }
      else
      {
          if ( inside[i-1] == 1)  inside[i] = 0;
          else if (inside[i-1] == 0)inside[i] == 0;
          else inside[i] = 2;
      }
   }
   var referlabels = new Array();
   var equnum = 1;
   var n=0;
   var y = '';
   var i = 0;
   var block;
   while (true)
   {
       
      var cs = 0;
      var kk = n;
      while (true)
      {
         i = t.indexOf("\\begin{", kk);
         if (i <0 || inside[i] == 0) break;
         kk = i+6;
      } 
      if (i >= 0)
      {
          var j = t.indexOf("}", i+7);
          if (j > 0)
          {
              block = t.substring(i+7, j);
              if (block == 'equation')       cs = 1;
              else if (block == 'eqnarray')  cs = 2;
              else if (block == 'eqnarray*') cs = 3;
              else if (block == 'array')     cs = 4;
              else if (block == 'pmatrix')   cs = 5;
              else if (block == 'vmatrix')   cs = 6;
          }
      }    
       
      
      if ( cs == 1)
      {
          j = t.indexOf("\\end{equation}",i);
         if (j < 0)
         {
            return t.substring(0,i) + "<font color=red>NO \\end{equation} FOUND: "+ t.substring(i) +"</font>";
         }
         else
         {
            var k = t.indexOf("\\label{",i);
            if ( k >0 && k < j)
            {
               var m = t.indexOf("}", k+7);
               if (m < 0) m = j;
                  var lab = t.substring(k + 7, m);
               
               if (referlabels[lab] != null)
               {
                  return t.substring(0,i) + "<font color=red>duplicate label "+ lab + "</font> "+ t.substring(i) ;
                  
               }
               referlabels[lab] = equnum;
               
               block = t.substring(i+16, k);
               if ( m+1 < j) block += t.substring(m+1,j);
            }
            else
               block = t.substring(i+16, j);
            y += t.substring(n, i) + "<table  ><tr><td>("+ (equnum++) + ") </td><td align=left>$"+ block +"$</td></tr></table>";
         }
         n = j + 14;
      }
      else if ( cs == 2)
      {
         j = t.indexOf("\\end{eqnarray}",i);
         if (j < 0)
         {
            return t.substring(0,i) + "<font color=red>NO \\end{eqnarray} FOUND: "+ t.substring(i) +"</font>";
         }
         else
         {
            y += t.substring(n, i) + "<table  >";
            var arr = t.substring(i+16, j).split(/\\\\/);
            for (var l=0; l < arr.length; l++)
            {
                k = arr[l].indexOf("\\label{");
               if ( k >0 )
               {
                  m = arr[l].indexOf("}", k+6);
                  if (m < 0) m = arr[l].length;
                  lab = arr[l].substring(k + 7, m); 
                  if (referlabels[lab] != null)
                  {
                     return t.substring(0,i) + "<font color=red>duplicate label "+ lab + "</font> "+ t.substring(i) ;
                  }
                  referlabels[lab] = equnum;
                  block = arr[l].substring(0, k);
                  if ( m < arr[l].length-1) block += arr[l].substring(m+1);
                     
               }
               else
               {
                  block = arr[l];
               }
               var barr = block.split(/&/);
               if (barr.length < 3)
               {
                   return t.substring(0,i) + "<font color=red>Need two & in : "+ arr[l] + "</font>" + t.substring(i) +"</font>";

               }
               y += "<tr><td>";
               if (block.indexOf("\\nonumber") < 0)
                  y+= "("+ (equnum++) + ")";
               y += " </td><td align=right>$"+ barr[0] + "$</td><td align=center>$"+ barr[1] + "$</td><td align=left>$"+ barr[2] + "$</td></tr>";
               
               
            }
            y += "</table>";
         }
         n = j + 14;
         
      }
      else if ( cs == 3)
      {
         j = t.indexOf("\\end{eqnarray*}",i);
         if (j < 0)
         {
            return t.substring(0,i) + "<font color=red>NO \\end{eqnarray*} FOUND: "+ t.substring(i) +"</font>";
         }
         else
         {
            y += t.substring(n, i) + "<table  >";
            arr = t.substring(i+17, j).split(/\\\\/);
            for (l=0; l < arr.length; l++)
            {
               k = arr[l].indexOf("\\label{");
               if ( k >0 )
               {
                  m = arr[l].indexOf("}", k+6);
                  if (m < 0) m = arr[l].length;
                     
                  block = arr[l].substring(0, k);
                  if ( m < arr[l].length-1) block += arr[l].substring(m+1);
                     
               }
               else
               {
                  block = arr[l];
               }
               barr = block.split(/&/);
               if (barr.length < 3)
               {
                   return t.substring(0,i) + "<font color=red>Need two & in : "+ arr[l] + "</font>" + t.substring(i) +"</font>";

               }
               y += "<tr><td align=right>$"+ barr[0] + "$</td><td align=center>$"+ barr[1] + "$</td><td align=left>$"+ barr[2] + "$</td></tr>";
               
            }
            y += "</table>";
         }
         n = j + 15;
         
      }
      else if ( cs == 4)
      {
         j = t.indexOf("\\end{array}",i);
         if (j < 0)
         {
            return t.substring(0,i) + "<font color=red>NO \\end{array} FOUND: "+ t.substring(i) +"</font>";
         }
         else
         {
            m = t.indexOf("{", i+13);
            if (m <0 || m >j)
            {
               return t.substring(0,i) + "<font color=red>NO  {alignment} such as {ccc} FOUND: "+ t.substring(i) +"</font>";
               
            }
            l = t.indexOf("}", m+1);
            if (l < 0 || l > j)
            {
               return t.substring(0,i) + "<font color=red> {alignment} not closed: "+ t.substring(i) +"</font>";
            }
            var aligns = t.substring(m+1, l).replace(/\s/g,'').split( "" );
            
            y += t.substring(n, i) + "<span style=\vertial-align:middle\"><table style=\"display:inline;vertial-align:middle\">";
            arr = t.substring(l+1, j).split(/\\\\/);
            for (l=0; l < arr.length; l++)
            {
               y += "<tr>";
               barr = arr[l].split(/&/);
               if (barr.length < 2)
               {
                 //  return t.substring(0,i) + "<font color=red>Need some &  as delimiter in : "+ arr[l] + "</font>" + t.substring(i) +"</font>";

               }
               for (var r=0; r < barr.length; r++)
               {
                  var alignstr = "center";
                  if (aligns[r] == 'l')
                     alignstr = "left";
                  else if (aligns[r] == 'r')
                     alignstr = "right";
                  y += "<td align="+ alignstr +">$"+ barr[r] + "$</td>";
               }
               y += "</tr>";
               
            }
            y += "</table></span>";
         }
         n = j + 11;
      }
      else if ( cs == 5)
      {
         j = t.indexOf("\\end{pmatrix}",i);
         if (j < 0)
         {
            return t.substring(0,i) + "<font color=red>NO \\end{pmatrix} FOUND: "+ t.substring(i) +"</font>";
         }
         else
         {
            
            y += t.substring(n, i) + "<span style=\vertial-align:middle\"><table  style=\"display:inline;vertial-align:middle\">";
            arr = t.substring(i+15, j).split(/\\\\/);
            y += "<tr><td rowspan=" + arr.length +"><img width=" + (2+(arr.length*3)) +" style=border:0px height=\"100%\" src=image/lbpar.png></td>";
            for (l=0; l < arr.length; l++)
            {
               if (l>0) y += "<tr>";
               barr = arr[l].split(/&/);
               if (barr.length < 2)
               {
                  // return t.substring(0,i) + "<font color=red>Need some &  as delimiter in : "+ arr[l] + "</font>" + t.substring(i) +"</font>";
               }
               for (r=0; r < barr.length; r++)
               {
                  y += "<td align=center>$"+ barr[r] + "$</td>";
               }
               if (l == 0)
                   y += "<td rowspan=" + arr.length +"><img width=" + (2+(arr.length*3)) +"  style=border:0px height=\"100%\" src=image/rbpar.png></td>";
               y += "</tr>";
               
            }
            y += "</table></span>";
         }
         n = j + 13;
      }
      else if ( cs == 6)
      {
         j = t.indexOf("\\end{vmatrix}",i);
         if (j < 0)
         {
            return t.substring(0,i) + "<font color=red>NO \\end{vmatrix} FOUND: "+ t.substring(i) +"</font>";
         }
         else
         {
            
            y += t.substring(n, i) + "<span style=\vertial-align:middle\"><table  style=\"display:inline;vertial-align:middle\">";
            arr = t.substring(i+15, j).split(/\\\\/);
            y += "<tr><td rowspan=" + arr.length +" style=\"padding:0px 0px 0px 0px\"  bgcolor=black width=1><img src=image/vertbar.png width=1 height=1></td>";
            for (l=0; l < arr.length; l++)
            {
               if (l>0) y += "<tr>";
               barr = arr[l].split(/&/);
               if (barr.length < 2)
               {
                 //  return t.substring(0,i) + "<font color=red>Need some &  as delimiter in : "+ arr[l] + "</font>" + t.substring(i) +"</font>";
               }
               for ( r=0; r < barr.length; r++)
               {
                  y += "<td align=center>$"+ barr[r] + "$</td>";
               }
               if (l == 0)
                   y += "<td rowspan=" + arr.length +"  style=\"padding:0px 0px 0px 0px\"   bgcolor=black width=1><img src=image/vertbar.png width=1 height=1></td>";
               y += "</tr>";
               
            }
            y += "</table></span>";
         }
         n = j + 13;
      }
      else
      {
         y += t.substring(n);
         break;
      }
       
   }
   
   
   var w = '';
   n =0;
   
   while (true)
   {
      i = y.indexOf("\\ref{", n);
      if (i < 0)
      {
         w += y.substring(n);
         break;
      }
      j = y.indexOf("}", i);
      if (j == -1)
      {
        return y.substring(0,i) + "<font color=red>NO closing } FOUND: "+ t.substring(i) +"</font>";
         
      }
      var ref = referlabels[y.substring(i+5, j)];
      if (ref == null)
      {
         return y.substring(0,i) + "<font color=red>"+ y.substring(i+5, j) +" NOT A LABEL. "+ t.substring(i) +"</font>";
      }
      w += y.substring(n, i) + "("+ ref +")";
      n = j+1;
      
   }
   
   return w;
}

function HTMLChecker(txtstr)
{
    this.st = new Astack();
    this.x = txtstr;
    this.pos = 0;
    this.type = 'txt';
    this.thisstart = -1;
    this.thisend = -1;
    this.corrected = '';
    this.newt = '';
    this.msg = '';
    this.ident = 0; 
    
    this.harmfulele = 0;
    this.harmfultag = false;
    this.tag = '';
    this.ele = function()
    {
        var s = 0;
        var buf = '';
        while (this.pos < this.x.length)
        {     
            var z = this.x.charAt(this.pos);
            if (z == '<')
            {
                if (s == 0 )
                {
                    this.thisstart = this.pos;
                    s = 1;
                    buf = '';
                }
                else if (s == 1 )
                {
                    this.thisstart = this.pos;
                    buf = '';
                }

            }
            else if (z == '"')
            {
                if (s == 1)
                {
                    s = 2;
                }
                else if (s == 2) 
                {
                    if (this.pos>0 && txtstr.charAt(this.pos-1)!='\\')
                        s = 1;
                }
            }
            else if (z == '>')
            {
                if (s == 1)
                {
                    this.thisend = ++this.pos;
                    return true;
                   
                    s = 0;
                }
            }
            else
            {
                if (s == 1 )
                {
                    if (this.pos - this.thisstart == 3 && this.x.substring(this.thisstart+1,this.pos+1) == '!--')
                    {
                        var j = this.x.indexOf("-->", this.pos+1);
                        if (j > 0)
                        {
                            this.thisend = this.pos = j + 3;
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                } 
            }
            this.pos++; 
        }
        return false;
    }
    this.ishtml = function(y)
    {
         y = "," + y.toLowerCase() + ",";
         return ",a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,command,datalist,dd,del,details,dfn,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,font,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,map,mark,menu,meta,meter,nav,nobr,noscript,object,ol,optgroup,option,output,p,param,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,span,strong,style,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr,".indexOf(y)>=0;
    }
    this.nofolder = function(y)
    {
        y = "," + y.toLowerCase() + ",";
        return ",a,b,body,br,caption,div,dd,dl,dt,em,font,h1,h2,h3,h4,h5,h6,hr,i,mark,nobr,option,p,pre,small,span,strong,td,th,sub,sup,".indexOf(y)>=0;
    }
                  
    this.lastopen = '';
    this.lastclose = '';
    this.proctag = function()
    {
        var x1 = this.x.substring(this.thisstart, this.thisend);
        var x = x1.replace("^<[ ]+", "<");
        var y = '';
        if (x.charAt(1) == '!' || x.charAt(1) == '>')
        {    
            this.type = 'txt';
            this.corrected = x1;
            
        }
        else if (x.charAt(1) == '/')
        {
            y = x.replace(/<.([a-z|A-Z|0-9]+)/,'$1 ');
            if (y != x)
            {
                y = y.substring(0, y.indexOf(" "));
                this.lastclose = y.toLowerCase();
            }
            if (y == x)
            {
                this.type = 'txt';
                this.corrected = x1;
            }
            else if (this.ishtml(y))
            {
                var getmatched = false;
                var w;
                while ( (w = this.st.get()) != null)
                {
                    if (y.toLowerCase() == w.toLowerCase())
                    {
                        this.st.pop();
                        this.corrected = x;
                        this.type = 'endtag';
                        getmatched = true;
                        if (!nnmatch(y)) this.ident--;
                        break;
                    }
                    if (nnmatch(w))
                    {
                        this.st.pop();
                        if (w.toLowerCase() == 'iframe' || w.toLowerCase() == 'meta' || w.toLowerCase() == 'link')
                        {
                            this.harmfulele--;
                        }
                    } 
                    else
                    {
                        break;
                    }
                }
                
                if (!getmatched)
                {
                     this.corrected = x1; 
                     this.type = 'err';
                }
                if (harmfultags.indexOf(','+y.toLowerCase() +',') >= 0)
                {
                    this.corrected = this.corrected.replace(/</,'&lt;');
                }
            }
            else
            {
                this.corrected = x1; 
                this.type = 'txt';
            }
        }
        else   
        {
            y = x.replace(/<([a-z|A-Z|0-9]+)/,'$1 ');
            if (y!=x)
            {
                y = y.substring(0, y.indexOf(" "));
                this.lastopen = y.toLowerCase();
            }
            if ( y == x)
            {
                this.corrected = x1;
                this.type = 'txt';
            }
             
            else if (this.ishtml(y))
            {
                 this.isscript = (y.toLowerCase() == 'script');
                  
                 if (x1.charAt(x1.length-2) != '/')
                 {
                    this.st.push(y);
                    this.type = 'tag';
                    if (!nnmatch(y)) this.ident++;
                 }
                 else 
                     this.type = 'ctag';
                 this.corrected = x;
                 if (harmfuleles.indexOf(','+y.toLowerCase() +',') >= 0)
                {
                    this.harmfulele++;
                }
                else if (harmfultags.indexOf(','+y.toLowerCase() +',') >= 0)
                {
                    this.corrected = '';//this.corrected.replace(/</,'&lt;');
                    this.harmfultag = true;
                    this.harmfulel = 0;
                }
            }
            else 
            {
                this.corrected = x1;
                this.type = 'txt';
            }
        }
        if (y.toLowerCase() == 'style' || y.toLowerCase() == 'script')
            this.corrected = this.corrected.replace(/</, '&lt;').replace(/>/, '&gt;');
        else
            this.corrected = this.corrected.replace(/^[ ]+/,'');
        return y;
    }
    this.padtab = function(n)
    {
        var s = '';
        for (var i=0; i < n; i++)
           s += '\t';
       return s;
    }
    this.onechardiff = function (x,y)
    {
        if (y == null || x == null) return false;
        var x1 = x, y1 = y;
        for (var i=0; i < x.length; i++)
            y1 = y1.replace(x.charAt(i),'');
        for (var i=0; i < y.length; i++)
            x1 = x1.replace(y.charAt(i),'');
        return x1.length  <= 1 && y1.length  <= 1;
    }
    
    this.html = function(w)
    {
        return w.replace(/\t/g,"&nbsp;&nbsp;&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>").replace(/\n/g, "<br>");
    }
    this.trim = function(x)
    {
        if (x == null) return "";
        var i=0; 
        while (i < x.length && (x.charAt(i) == ' ' || x.charAt(i) == '\t'||x.charAt(i) == '\n' || x.charAt(i) == '\r')) i++;
        if (i == x.length) return "";
        var j= x.length - 1;
        while (j >= 0 && (x.charAt(j) == ' ' || x.charAt(j) == '\t'||x.charAt(j) == '\n' || x.charAt(j) == '\r')) j--;
        return x.substring(i, j+1);
    }
    this.canfolder = false;
     
    this.parse = function()
    {
        if (this.x == null) return;
        var ans1= false;
        while (true)
        {
            var ps = this.pos;
            var b =  this.ele();
            if (b == false)
            {
                
                this.newt += this.x.substring(ps);
                this.msg += this.html(this.x.substring(ps));
                break;
            }
            var w = this.x.substring(ps, this.thisstart);
            var hasspace=false, hasnewl = false;
            var jj=-1; while (++jj < w.length) if (w.charAt(jj) == ' '||w.charAt(jj) == '\t') hasspace = true; else if (w.charAt(jj) == '\n' || w.charAt(jj) == '\r') hasnewl = true;else break;
            if (hasnewl) w = '\n' + w.substring(jj);
            else if (hasspace) w = ' ' + w.substring(jj);
            hasspace=false; hasnewl = false;
            var jj=w.length; while (--jj >= 0) if (w.charAt(jj) == ' '||w.charAt(jj) == '\t') hasspace = true; else if (w.charAt(jj) == '\n'|| w.charAt(jj) == '\r') hasnewl = true;else break;
            if (hasnewl) w =   w.substring(0,jj+1) + '\n';
            else if (hasspace) w = w.substring(0,jj+1) + ' ';
            
            if (this.harmfulele == 0 && w != '')
            { 
                
                this.newt += w;
                this.msg += this.html(w);
            }
            var y = this.proctag(); 
            var xx = 0;
             
            if (this.type == 'txt')
            {
                if (this.harmfulele==0)
                {
                    if (this.canfolder)
                    {
                        if (this.newt.replace(/\n[ ]+$/,'') != this.newt) this.newt += "\n"; 
                        this.newt +=   this.padtab(xx) + this.corrected;  
                        this.msg += this.html("\n" + this.padtab(xx) + this.corrected);
                    }
                    else
                    {
                        this.newt += this.corrected;
                        this.msg += this.html( this.corrected);
                    }
                }
            }
            else if (this.type == 'tag'|| this.type == 'ctag' )
            {
                xx = this.ident-1;
                if (nnmatch(this.st.get()))
                {
                    xx++;
                }
                if (this.trim(w) != '' )
                {
                    if (this.canfolder)
                    {
                        if ( this.harmfulele==0 && !this.harmfultag)
                        {
                         if (this.newt.replace(/\n[ ]+$/,'') != this.newt) this.newt += "\n";
                         this.newt +=   this.padtab(xx) + this.corrected; 
                         this.msg +=  this.html(  "\n" + this.padtab(xx) + this.corrected);
                        }
                         
                    }
                    else
                    {
                        if (this.harmfulele==0 && !this.harmfultag)
                        {
                        this.newt +=  this.padtab(xx) + this.corrected;
                        this.msg +=  this.html( this.padtab(xx) + this.corrected);
                        }
                    }
                }
                else if (this.canfolder || w != '')
                {
                    if (this.harmfulele==0 && !this.harmfultag)
                    {
                        if (this.newt.replace(/\n[ ]+$/,'') != this.newt)  this.newt += "\n";
                        this.newt +=   this.padtab(xx) + this.corrected; 
                        this.msg += this.html("\n" + this.padtab(xx) + this.corrected);
                    }
                }
                else  
                {
                    if (this.harmfulele==0 && !this.harmfultag)
                    {
                        if (this.newt.replace(/\n[ ]+$/,'') != this.newt)  this.newt += "\n";
                        this.newt +=  this.corrected;
                        this.msg += this.html(  this.corrected);
                    }
                }
                
                if (this.type == 'ctag' && harmfuleles.indexOf(','+y.toLowerCase() +',') >= 0)
                    this.harmfulele--;
                this.canfolder  = (this.nofolder(this.lastopen) == false);
            }
            else if (this.type == 'endtag')
            {
                if ( (w.indexOf("\n") < 0 && w.indexOf("\r")<0) && this.lastclose.toLowerCase() == this.lastopen.toLowerCase())
                {
                    if (this.harmfulele==0 && !this.harmfultag)
                    {
                    this.newt +=   this.corrected;
                    this.msg +=  this.html(  this.corrected);
                    }
                }
                else  if (this.trim(w) == '')
                {  
                    if (this.harmfulele==0 && !this.harmfultag)
                    {
                    if (this.canfolder)
                    {
                        if (this.newt.replace(/\n[ ]+$/,'') != this.newt) this.newt += "\n";
                        this.newt +=   this.padtab(this.ident) + this.corrected; 
                        this.msg +=  this.html( "\n" + this.padtab(this.ident) + this.corrected);
                    }
                   else 
                    {
                        this.newt +=     this.corrected;
                        this.msg +=  this.html(   this.corrected);
                    }
                    }
                }
                else  
                {
                    if (this.harmfulele==0 && !this.harmfultag)
                        {
                    if (this.canfolder)
                    {
                        if (this.newt.replace(/\n[ ]+$/,'') != this.newt)  this.newt += "\n";
                        this.newt +=   this.padtab(this.ident) + this.corrected; 
                        this.msg +=  this.html(  "\n" + this.padtab(this.ident) + this.corrected);
                    }
                    else
                    {
                        this.newt +=      this.corrected;
                        this.msg +=  this.html(  this.corrected);
                    }
                        }
                }
                if (harmfuleles.indexOf(','+y.toLowerCase() +',') >= 0)
                {
                    this.harmfulele--;
                }
                
                this.canfolder  = (this.nofolder(this.lastclose) == false||  this.lastclose == 'body' || this.lastclose == 'td'|| this.lastclose == 'option'|| this.lastclose == 'li'|| this.lastclose == 'dd'|| this.lastclose == 'dl'); 
            }
            else if (this.type == 'err')
            {
                ans1 = true;
                if (this.harmfulele==0 && !this.harmfultag)
                {
                if (w != '')
                {
                    if (this.newt.replace(/\n[ ]+$/,'') != this.newt)  this.newt += "\n";
                    this.newt +=   this.padtab(this.ident-1) + '<!--' +  this.corrected + "-->"; 
                    this.msg +=  this.html(  "\n" + this.padtab(this.ident-1) )+ '<font color=grey>&lt;!--' + this.html(this.corrected) + '--&gt;</font>';
                }
                else
                {
                    this.newt +=   '<!--' +  this.corrected + "-->";
                    this.msg +=  '<font color=red>&lt;!--' + this.html(this.corrected) + '--&gt;</font>';
                }
                }
            }
        }
        
        var ans2 = false;
        while (this.st.size()>0)
        {
            var w = this.st.get();
            if (!nnmatch(w))
            {
               ans2 = true;
               if (this.newt.replace(/\n[ ]+$/,'') != this.newt) this.newt += "\n";
               this.newt +=   this.padtab(this.st.size()-1) + "</" + w + ">";
               this.msg +=  this.html("\n" + this.padtab(this.st.size()-1)) + "<font color=red>&lt;/" + w + "&gt;</font>";
            }
            this.st.pop();
        }
        hasHTMLerror = (ans1 || ans2);
        if (ans1 || ans2)
        {
           //myprompt(this.msg,null,null,"HTML" + textmsg[1358]); 
        }
    }
    this.parse();
}
var hasHTMLerror = false;
var fentureg = null;
function standardize(ts)
{
    if (fentureg == null)
    {
        var x = "\\[[ ]*imagelet[ ]*([0-9]+)[ ]*([:]?)[ ]*([0-9]?)\\]";
        if (textmsg[1332].charAt(7)!='[')
        {
            x = "[\\[|" + textmsg[1332].charAt(7) + "][ ]*" + textmsg[1303] + "[ ]*([0-9]+)[ ]*([:]?)[ ]*([0-9]?)[\\]|" + textmsg[1332].charAt(5) + "]";
        }
       
        fentureg = new RegExp(x, "ig");
    }
    ts.value = ts.value.replace(fentureg, "[Imagelet$1$2$3]");
}
function checkh(str, showerror)
{
    if (str == null) return null;
    
    var w = new HTMLChecker(str);
    if (showerror!=null && showerror == true && hasHTMLerror)
    {
        myprompt(w.msg,null,null,"HTML" + textmsg[1358]);
    }
    var y1 = (w.newt);
    y1 = dobeginend(y1);
    return y1;
}
