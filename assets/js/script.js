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
   $("#mission .title-parag").html('يعد مول العاصمة الطبية – مشروع العاصمة الطبية المول الطبي الأول من نوعه بالعاصمة الإدارية الجديدة، وهو عبارة عن مول طبي كامل الخدمات، يجمع بين التشطيبات الفاخرة والمساحات الخضراء الكبيرة في أرقى المناطق بالعاصمة، مع مجموعة كبيرة من المميزات وأسعار وطرق سداد مناسبة.');
    
   $("#mission span.carousel-control-next-icon").click(function(){
    $("#mission .title-parag").html('أفضل مولات العاصمة الإداريه   و تحتوي على عيادات و تجاري و طبي ');
     
    });
    $("#mission span.carousel-control-next-icon").click(function(){

      });
      $("#mission span.carousel-control-next-icon").click(function(){
        $("#mission .title-parag").html(' إذا كنت تبحث عن مشروع يمثل لك فرصة العمر لتستثمر به أموالك، وتضمن نجاح مشروعك مهما كان مجال عملك فأنت تبحث عن باريس مول العاصمة الإدارية الجديدة، ويعد باريس مول ثالث المشروعات التي قامت بتنفيذها شركة بيراميدز العقارية');
       
        });

        $("#mission .rec-buttons-next").click(function(){
          $("#mission .title-parag").html(' يختلف مسطح كل وحدة حيث يبدأ من (130 مترًا مربعًا) وحتى (180 مترًا مربعًا) شامل يتكون كل طابق في المبنى السكني من 4 شقق سكنية و2 مصعد. ');
         
          });

          // $("#featured .row .col-sm img").hover(
          //   function () {
          //     $(this).addClass('imgoverlay');
          //   }, 
          //   function () {
          //     $(this).removeClass('imgoverlay');
          //   }
          //   );     
            
            // featured projects on img hover add text above overlay:
                      

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

        
  




          

// modal://
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
$('#myModal').modal(options)















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