
$(window).scroll(function(){
    
    let scrollTop =$(window).scrollTop();
    
    if(scrollTop > 600)
        {
            $("#btnUp").fadeIn(500);
        }
    else
        $("#btnUp").fadeOut(520);
})
$("#btnUp").click(function(){
    $("body").animate({ scrollTop:0} , 1500)
})
$("a[href='#Login']").click(function(){
    
    let LoginOffest = $("#Login").offset().top;
    $("body,html").animate({scrollTop:LoginOffest},1000)
})
$("a[href='#SignUp']").click(function(){
    
    let SignUpOffest = $("#SignUp").offset().top;
    $("body,html").animate({scrollTop:SignUpOffest},1200)
})
$("a[href='#About']").click(function(){
    
    let AboutOffest = $("#About").offset().top;
    $("body,html").animate({scrollTop:AboutOffest},1400)
})
$("a[href='#Servises']").click(function(){
    
    let ServisesOffest = $("#Servises").offset().top;
    $("body,html").animate({scrollTop:ServisesOffest},1600)
})
$("a[href='#Features']").click(function(){
    
    let FeaturesOffest = $("#Features").offset().top;
    $("body,html").animate({scrollTop:FeaturesOffest},1800)
})
$("a[href='#Contact']").click(function(){
    
    let ContactOffest = $("#Contact").offset().top;
    $("body,html").animate({scrollTop:ContactOffest},2000)
})
/*
$("a").click(function(){
    
    let aHref =$(this).attr("href")
    
    let ContactOffest = $("#aHref").offset().top;
    $("body,html").animate({scrollTop:ContactOffest},2000)
})
*/
