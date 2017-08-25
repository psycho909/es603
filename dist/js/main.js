require.config({
    baseUrl: "./js",
    paths: {
        "jquery": "./lib/jquery-3.1.1.min",
        "handlebars":"./lib/handlebars-v4.0.10"
    }
});
require(["jquery","handlebars","registerHelper","templates"], function ($,Handlebars) {
    console.log('done')
    var url="https://randomuser.me/api/?results=20";
    $.ajax({
        url:url,
        dataType:'json',
        success:function(res){
            for(let i=0;i<res.results.length;i++){
                $('#jsonapi ul').append("<li>"+res.results[i].gender+"</li>")
            }
             console.log(res.results)
        },error:function(){
            console.log('error')
        }
    })
});