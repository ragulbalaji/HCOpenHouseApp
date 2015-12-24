/* #IAMAJavascriptBEAST 
  * Ragul Balaji (C) 2015
  * Ho Jie Feng (C) 2015
  * Some Quick JS to insert into chrome's V8 to strip data off of 
  * http://teamecaco.wix.com/ccawebsite
  */ 

/*var alla = document.getElementsByTagName("a"); for(var i = 0; i < alla.length; i++){window.open(alla[i].href, '_blank');}*/
/* http://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript */
function escapeHtmlEntities(str)
{
	return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
	   return '&#'+i.charCodeAt(0)+';';
	});
};
function totitlecase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
function getintro(){var intro = "";for(var i = 1; i < document.getElementsByClassName("s1")[3].childNodes.length; i++){var lol = document.getElementsByClassName("s1")[3].childNodes[i].childNodes[0]; if (typeof lol !== 'undefined'&& typeof lol.childNodes[0] !== 'undefined') {
    intro += lol.childNodes[0].childNodes[0].innerHTML + "<br><br>"
}} return intro;}

function getmycontent(){var intro = "";for(var i = 0; i < document.getElementsByClassName("s1")[4].childNodes.length; i++){var lol = document.getElementsByClassName("s1")[4].childNodes[i].childNodes[0]; if (typeof lol !== 'undefined'&& typeof lol.childNodes[0] !== 'undefined') {
    intro += lol.childNodes[0].childNodes[0].innerHTML + "<br><br>"
}} return intro;} 
var title = document.getElementsByTagName("font");
var ccatitle;
if(title.length)
ccatitle = title[0].innerHTML || "" ;
else
ccatitle = "";

var pagetitle = document.getElementsByTagName("title")[0].innerHTML.split('|')[1];
var a = {fullname:totitlecase(ccatitle), introduction:getintro(), content: getmycontent(), website: "http://teamecaco.wix.com/", img: "img/ccas/cns/hcirs.jpg", searchtags:ccatitle + ' ' + pagetitle};
var encodedjson = JSON.stringify(a,null,4).replace(/\"([^"]+)\":/g,"$1:").replace(/\uFFFF/g,"\\\"");

localStorage.stuff = localStorage.stuff || "";

localStorage.stuff += encodedjson;
localStorage.stuff += ",\n";











