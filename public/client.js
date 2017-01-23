$(document).ready(function(){
   console.log('document is loaded');


   $('.operator').on('click', function(event) {
     event.preventDefault();

     if($(this).addClass('highlighted')) {
       $(this).toggleClass('highlighted');
     }else{
       $('.highlighted').removeClass('highlighted');
       $(this).toggleClass('highlighted');
     }
   });

   $('#equals').on('click', function(event){
     event.preventDefault();
     equal();
   });

   $('#clear').on('click', function(){
     $('.highlighted').removeClass('highlighted');
     $('#output').text(' ');
   })

 });

 function equal(){
   var number1 = $('#x').val();
   var number2 = $('#y').val();
   var operator = $('#form').find('.highlighted').attr('id');
   $.ajax({
       url: '/equal',
       type: 'POST',
       data: {
         x : number1,
         y : number2,
         operator : operator
       },
       success: getSolution
     });
 }
 function getSolution(){
   $.ajax({
     url: '/answer',
     type: 'GET',
     success: displaySolution
   });
 }
 function displaySolution(toReturn){
   $('#output').text(toReturn);
 }
