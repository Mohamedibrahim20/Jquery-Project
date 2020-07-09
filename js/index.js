let singerTitle = $(".singerDet")

$(singerTitle).eq(0).click(function () {

   $(".singerCap").eq(0).slideToggle(500)
   $("#s1").siblings(".singerCap").slideUp(500)






})
$(singerTitle).eq(1).click(function () {

   $(".singerCap").eq(1).slideToggle(500)
   $("#s2").siblings(".singerCap").slideUp(500)






})

$(singerTitle).eq(2).click(function () {

   $(".singerCap").eq(2).slideToggle(500)
   $("#s3").siblings(".singerCap").slideUp(500)






})
$(singerTitle).eq(3).click(function () {

   $(".singerCap").eq(3).slideToggle(500)
   $("#s4").siblings(".singerCap").slideUp(500)






})




var countDownDate = new Date("Dec 17, 2019 ");
setInterval(function(){

let now = new Date();
let distance = countDownDate - now ;
 let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

 $("#days").html(`${days } D`);
 $("#hours").html(`${hours } H`);
 $("#min").html(`${minutes } M`);
 $("#sec").html(`${seconds } S`);


},0)
let counter = 100;
$("#textArea").keydown(function (e) {
   counter--;
   console.log(counter) 
   $("#count").html(counter);
   if(counter<1){
      $("#count").html('your available character finished')
   }
   
});

let navWidth=$("#nav").innerWidth();
$(".sideNav").css("left", -navWidth);

$(".closeBtn").click(function () { 
   $(".openNav").animate({left : "0px" },1000)
   $(".sideNav").animate({left : -navWidth },1000)
   
});
$(".openNav").click(function () { 

      $(".openNav").animate({left : navWidth },1000)
       $(".sideNav").animate({left : "0px" },1000)
});
$("a").click(function () { 
   let aHref=$(this).attr("href");
 console.log(aHref)
 let sectionOffset = $(aHref).offset().top;
 $("html,body").animate({scrollTop : sectionOffset},1000)
   
});