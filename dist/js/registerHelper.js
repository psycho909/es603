define(['jquery','handlebars'],function($,Handlebars){
     Handlebars.registerHelper('findprogramme',function(value,options){
        if(value.length != 0){
            return "show";
        }else{
            return "hide";
        }
    })
    Handlebars.registerHelper('debug',function(v1,v2){
        if(v1>v2){
            return 'block';
        }else{
            return 'none';
        }
    })
    Handlebars.registerHelper("lg",function(i,stand){
        if(i>=stand){
            return "gold"
        }else{
            return "silver"
        }
    })
})