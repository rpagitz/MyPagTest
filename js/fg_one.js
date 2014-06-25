var FGONE = (function(module){

module.Doit = function(resultObject){
var d = new Date();
var theyear=d.getFullYear();
var themonth=d.getMonth()+1;
var thetoday=d.getDate();

var t = d.getTime();
var thehours=d.getHours();
var theminutes=d.getMinutes();
var theseconds=d.getSeconds();
resultObject.prepend(theyear+'/'+themonth+'/'+thetoday+' - '+ thehours+':'+theminutes+':'+theseconds+'<br/>');
}

return module;
}(FGONE || {}));