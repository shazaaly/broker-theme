$(function () {

  AOS.init();
  // counter start//
  function countup() {
    var options = {
      useEasing: true,
      useGrouping: true,
      // suffix: " مشروع "
    };

    var demo = new CountUp("counter", 0, $("#counter").text(), 2, 4, options);
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
    }
  }

  countup();
  // counter end//
  // section gallery:
  

     
  $("#mission span.carousel-control-next-icon").click(function(){
   $("#mission .title-parag").html('أفضل مولات العاصمة الإداريه  بمساحات أكثر من 2 فدان وري و طبي ');
    
   $("#mission span.carousel-control-next-icon").click(function(){
    $("#mission .title-parag").html('أفضل مولات العاصمة الإداريه   و تحتوي على عيادات و تجاري و طبي ');
     
    });
    $("#mission span.carousel-control-next-icon").click(function(){

      });
      $("#mission span.carousel-control-next-icon").click(function(){
        $("#mission .title-parag").html(' يحتوي الحى السكنى على 25 ألف وحدة سكنية، بمساحات تتراوح من 130 إلى 180 مترًا مربعًا للوحدة.) لكل طابق، ويختلف مسطح كل وحدة حيث يبدأ من (130 مترًا مربعًا) وحتى (180 مترًا مربعًا) شامل الخدمات. تتكون الشقة من 3 غرف و2 حمام ومطبخ له شرفة وحجرة نوم بحمام مستقلق في المبنى السكني من 4 شقق سكنية و2 مصعد. ');
       
        });

        $("#mission .rec-buttons-next").click(function(){
          $("#mission .title-parag").html(' يختلف مسطح كل وحدة حيث يبدأ من (130 مترًا مربعًا) وحتى (180 مترًا مربعًا) شامل يتكون كل طابق في المبنى السكني من 4 شقق سكنية و2 مصعد. ');
         
          });

          // start projects data opject//
        //   let projectsData=[
        //     {
        //       img:"assets/images/marquee.jpg",
        //       price:"2M LE.",
        //       location:"يقع بـ حي المال و الاعمال على شارع رئيسي امام الحديقة المركزية و مجمع السينمات مباشرة",
        //       description:"مول (تجاري ، إداري ، طبي) ",
        //       projectname:"ماركيه مول",
        //       longDesc:" بجوار مجمع البنوك و على بعد دقيقة من البرلمان ومجلس الوزراء و فندق الماسة و اول محطة مترو بالعاصمة الادارية..",
        //       area:"26 متر",
        //       payment:":انظمة سداد"
        //     },
        //     {
        //       img:"assets/images/audaz.jpg",
        //       price:"1M LE.",
        //       location:"يقع بـ حي المال و الاعمال على شارع رئيسي امام الحديقة المركزية و مجمع السينمات مباشرة",
        //       description:"مول (تجاري ، إداري ، طبي) ",
        //       projectname:"ماركيه مول",
        //       longDesc:" بجوار مجمع البنوك و على بعد دقيقة من البرلمان ومجلس الوزراء و فندق الماسة و اول محطة مترو بالعاصمة الادارية..",
        //       area:"26 متر",
        //       payment:":انظمة سداد"
        //     },
        //     {
        //       img:"assets/images/paris.jpg",
        //       price:"2M LE.",
        //       location:"يقع بـ حي المال و الاعمال على شارع رئيسي امام الحديقة المركزية و مجمع السينمات مباشرة",
        //       description:"مول (تجاري ، إداري ، طبي) ",
        //       projectname:"ماركيه مول",
        //       longDesc:" بجوار مجمع البنوك و على بعد دقيقة من البرلمان ومجلس الوزراء و فندق الماسة و اول محطة مترو بالعاصمة الادارية..",
        //       area:"26 متر",
        //       payment:":انظمة سداد"
        //     }
        //   ]

        //   let projectsWrapper="";
        //   for(project of projectsData ) {
        //     projectsWrapper += `
        //     <div class="col-4">
        //     <div class="item">
        //       <div class="img-holder">
        //         <img src="${img}" alt="">
        //       </div>
        //       <div class="slide">
        //         <div class="price d-flex justify-content-end"> <span align="right ">  ${price}   أسعار تبدأ من : </span> </div>
        //       <div class="main-info">
        //         <div class="location d-flex">
        //           <img style="height: 16px;" src="https://img.icons8.com/material-sharp/26/000000/map-pin.png">
        //            <p align="align right"> ${location} يقع في   : </p>
        //         </div> 
                
        //         <div class="description d-flex">
        //           <img style="height: 16px;" src="https://img.icons8.com/material-two-tone/24/000000/galaxy.png">
        //           <p align="align right"> ${description}الوصف: </p>
        //        </div>
  
        //        <div class="project-name longDesc">
        //          <h3> اوداز مول${projectname}</h3>
        //          <p align="align right"> ${longDesc}</p>
        //        </div>
        //        <div class="additional-info">
        //          <div class="area d-flex">
        //           <img style="height: 16px;" src="https://img.icons8.com/metro/24/000000/doughnut-chart.png">
        //            <p align="align right">${area} مساحات تبدأ من: </p></div>
        //          <div class="payment d-flex">
        //           <img style="height: 16px;" src="https://img.icons8.com/windows/40/000000/pay-date.png">
        //           <p align="align right"> ${payment}انظمة سداد:</p></div>
  
        //        </div>
              
        //       </div>
        //       </span>
  
        //     </div>
        //   </div>
  
        // </div>
            
        //     `
        //   }
        //   $('#projects .projects-item').html(projectsWrapper);



          // end projects//

        
  





















   });

  















  
// carousel flip on button click??
// make header2 sticky bar //
// var height = $('header').height();
// $(window).scroll(function(){
//   if ($(this).scrollTop() > height) {
//     $('#sticky  nav').addClass('.fixed');
//     }
//   else{
//     $('#sticky nav').removeClass('.fixed');

//   }
// })

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector("#sticky > nav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// // $(window).on("scroll", function(){
//   if( $(this).scrollTop()  > 100 ){
//       $("#sticky > nav > div > ul").addClass("fixed")
//   }else{
//       $("#sticky > nav > div > ul").removeClass("fixed")

//   }

// })



   
  
  


});//ready function