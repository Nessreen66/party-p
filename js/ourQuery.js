$("#iconShow").click(function () {

    $("#navContainer").show(1000);
    $(".header-data").css("margin-left", "15%")

});

$("#closeIcon").click(function () {
    $("#navContainer").hide(1000);
    $(".header-data").css("margin-left", "0")

});

let contactOffset = $("#Contact").offset().top;
let detailsOffset = $("#Details").offset().top;
let durationOffset = $("#Duration").offset().top;

$(".nav-item a").click(function () {
    let x = $(this).attr("href");
    let clickOffset = $(x).offset().top;
    $("html , body").animate({
        scrollTop: clickOffset
    }, 1000)
});


$("#Details div").click(function () {
    let x = $(this).attr("id");
    $(`#${x} p `).show();
    $(`#${x}`).siblings().find("p").hide();

});

// Set the date we're counting down to
var countDownDate = new Date(2023, 0, 1, 20).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="dateSecond"

    $("#durationDate").html(`<div class="time text-white" id="dateSecond"> ${seconds} S</div>
  <div class="time" id="dateMinutes">${minutes} m</div>
  <div class="time" id="dateHours">${hours} h</div>
  <div class="time" id="dateDays">${days} days</div>
`)


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $("#durationDate").html(`  <div class="w-100 h-100 time text-center" id="dateDays"> Time Out </div>  `)
    }
}, 1000);



$('#textLeft').keyup(function ()
 {
    var max = 100;
    var len = $(this).val().length;
    if (len >= max)
     {
      $('#charLeft').text(' you have reached the limit');
    }
    else
    {
     var char = max - len;
     $('#charLeft').text(char + ' characters left');
   }
  })