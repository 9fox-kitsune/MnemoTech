// const switchSlider = document.querySelector('.arrows-projects');
// const photosProjects = document.querySelectorAll('.slider-item-project');
// // const pointsSliderProjects = document.querySelectorAll('.slider-foto-projects');
// // const pointsPhotoProjects = document.querySelectorAll('.point-project');
// const pointsSliderProjects = document.querySelector('.slider-foto-projects');
// const pointsPhotoProjects = pointsSliderProjects.children;

// let currentItem;
// let currentPoint;

// // Пролистывание слайдера
// switchArrowsProjects.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     for (let i = 0; i < photosProjects.length; i++) {
//         currentItem = document.querySelector('.current-project');
//         if (currentItem == photosProjects[i]) {
//             currentItem.classList.remove("current-project");
//             if (i != photosProjects.length - 1) {
//                 i++;
//                 photosProjects[i].classList.add("current-project");
//             } else {
//                 i = 0;
//                 photosProjects[i].classList.add("current-project");
//             }
//         }
//     }
// });


// pointsSliderProjects.addEventListener('click', function (i) {
//     console.log('Сделан клик по пойнту');
//     currentItem = document.querySelector('.current-project');
//     console.log(currentItem);
//     currentPoint = document.querySelector('.current-point-project');
//     console.log(currentPoint);
    
//         console.log(photosProjects[i]);    
        
//             currentItem.classList.remove("current-project");
//             currentPoint.classList.remove("current-point-project");
//             console.log('Класс удален');
//             photosProjects[i].classList.add("current-project");
//             pointsPhotoProjects[i].classList.add("current-point-project");
//             console.log('Класс добавлен');
    
    
// });

// let getPhotoProject = function (point, photo) {
//     console.log('Функция вызвана');
//     point.addEventListener('click', function () {
//         console.log('Сделан клик по пойнту');
//         currentItem = document.querySelector('.current-project');
//         currentPoint = document.querySelector('.current-point-project');
//         currentItem.classList.remove("current-project");
//         currentPoint.classList.remove("current-point-project");
//         console.log('Класс удален');
//         photo.classList.add("current-project");
//         point.classList.add("current-point-project");
//         console.log('Класс добавлен');
//     });
// };

// for (let i = 0; i < pointsSliderProjects.length; i++) {
//     console.log('Вызываем функцию');
//     getPhotoProject(pointsSliderProjects[i], photosProjects[i]);
//     console.log('Функция вызвана');
//     pointsSliderProjects[i].addEventListener('click', function () {
//     console.log('Сделан клик по пойнту');
//     currentItem = document.querySelector('.current-project');
//     currentPoint = document.querySelector('.current-point-project');
//     currentItem.classList.remove("current-project");
//     currentPoint.classList.remove("current-point-project");
//     console.log('Класс удален');
//     photosProjects[i].classList.add("current-project");
//     pointsSliderProjects[i].classList.add("current-point-project");
//     console.log('Класс добавлен');
//     });
// }

// (function() {
//     "use strict";
//     var DM_ORIGIN = "https://www.detmir.ru";
//     var DM_ORIGIN_ZOO = "https://zoozavr.detmir.ru/";
//     var RPC_URL = "https://www.detmir.ru/rpc.html";
//     var REPLY_WAIT = 3e3;
//     var w = window;
//     var d = document;
//     var fw;
//     var msgId = Math.random();
//     var callbackHash = {};
//     w.detmir = w.detmir || {};
//     w.detmir.rpc = w.detmir.rpc || {};
//     w.detmir.rpc.addToCart = function(arg, cb) {
//         if (!fw || !arg)
//             return;
//         if (!cb)
//             cb = function() {}
//             ;
//         var products;
//         if (Array.isArray(arg)) {
//             products = arg.map(convertArg)
//         } else {
//             products = [convertArg(arg)]
//         }
//         if (products.length === 0) {
//             throw new Error("Empty products")
//         }
//         var data = {
//             id: ++msgId,
//             method: "addToCart",
//             params: [products]
//         };
//         registerCallback(msgId, cb);
//         fw.postMessage(data, DM_ORIGIN)
//     }
//     ;
//     w.detmir.rpc.addToCartAndGo = function(href) {
//         if (!fw || !href)
//             return;
//         var productId = parseHref(href).productId;
//         if (!productId) {
//             throw new Error("Invalid product id")
//         }
//         var data = {
//             id: ++msgId,
//             method: "addToCart",
//             params: [[{
//                 id: productId,
//                 quantity: 1
//             }]]
//         };
//         registerCallback(msgId, function() {
//             w.location.href = href
//         });
//         fw.postMessage(data, DM_ORIGIN);
//         return false
//     }
//     ;
//     w.addEventListener("message", function(e) {
//         if (e.source !== fw)
//             return;
//         var replyId = Number(e.data.replyId);
//         if (callbackHash.hasOwnProperty(replyId)) {
//             var cb = callbackHash[replyId];
//             if (typeof cb === "function") {
//                 cb()
//             }
//             delete callbackHash[replyId]
//         }
//     });
//     d.addEventListener("DOMContentLoaded", function() {
//         var f = d.createElement("iframe");
//         f.onload = function() {
//             fw = f.contentWindow
//         }
//         ;
//         f.onerror = function() {
//             f.parentNode.removeChild(f);
//             throw new Error("Could not load detmir RPC iframe")
//         }
//         ;
//         f.width = 0;
//         f.height = 0;
//         f.style = "display:none";
//         f.tabIndex = -1;
//         f.setAttribute("aria-hidden", true);
//         f.src = RPC_URL;
//         d.body.appendChild(f)
//     });
//     function convertArg(arg) {
//         if (typeof arg === "object") {
//             if (!arg.id) {
//                 throw new Error("Invalid arg id")
//             }
//             return {
//                 id: arg.id,
//                 quantity: arg.quantity || 1
//             }
//         }
//         if (typeof arg !== "string") {
//             throw new TypeError("Could not parse arg " + arg)
//         }
//         var productId = arg;
//         if (productId.indexOf(DM_ORIGIN) === 0 || productId.indexOf(DM_ORIGIN_ZOO) === 0) {
//             productId = parseHref(productId).productId
//         }
//         return {
//             id: productId,
//             quantity: 1
//         }
//     }
//     function parseHref(href) {
//         if (!href || typeof href !== "string") {
//             throw new TypeError("href could not be parsed")
//         }
//         var ret = {};
//         var hrefMatch = href.match(/\/product\/index\/id\/(\d+)\//);
//         ret.productId = hrefMatch ? hrefMatch[1] : "";
//         return ret
//     }
//     function registerCallback(id, cb) {
//         if (!id || typeof cb !== "function")
//             return;
//         callbackHash[id] = cb;
//         setTimeout(function() {
//             delete callbackHash[id]
//         }, REPLY_WAIT)
//     }
// }
// )();

