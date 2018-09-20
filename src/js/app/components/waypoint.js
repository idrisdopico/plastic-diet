// const $logo = $('.menu__image');
// const about = document.getElementById('about');
// let content_array = [];
// let window_W = window.innerWidth;
//
// function logo_handler() {
//     let hide_logo = new Waypoint({
//         element: about,
//         handler: function() {
//             if (window_W < '768') {
//                 if (!$logo.hasClass('is-disabled')) {
//                     $logo.addClass('is-disabled');
//                 } else {
//                     $logo.removeClass('is-disabled');
//                 }
//             }
//         },
//         offset: '30%'
//     });
// }
//
// function innovation_handler() {
//     for (let i = 0; i < $('.innovation').length; i++) {
//         content_array[i] = document.querySelector('.innovation-' + ([i + 1]));
//         let innovation_waypoint = new Waypoint({
//             element: content_array[i],
//             handler: function() {
//                 if (window_W >= '768') {
//                     if (!$(content_array[i]).hasClass('is-active')) {
//                         $(content_array[i]).addClass('is-active');
//                     } else {
//                         $(content_array[i]).removeClass('is-active');
//                     }
//                 } else {
//                     if (!$(content_array[i]).hasClass('is-active--mobile')) {
//                         $(content_array[i]).addClass('is-active--mobile');
//                     } else {
//                         $(content_array[i]).removeClass('is-active--mobile');
//                     }
//                 }
//             },
//             offset: '25%'
//         });
//     }
// }
//
// $(document).ready(function() {
//     logo_handler();
//     innovation_handler();
// });
//
// $(window).resize(function(){
//     logo_handler();
//     innovation_handler();
// });
