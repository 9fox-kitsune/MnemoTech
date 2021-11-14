const switchSlider = document.querySelector('.arrows-projects');
const photosProjects = document.querySelectorAll('.slider-item-project');
// const pointsSliderProjects = document.querySelectorAll('.slider-foto-projects');
// const pointsPhotoProjects = document.querySelectorAll('.point-project');
const pointsSliderProjects = document.querySelector('.slider-foto-projects');
const pointsPhotoProjects = pointsSliderProjects.children;

let currentItem;
let currentPoint;

// Пролистывание слайдера
switchArrowsProjects.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (let i = 0; i < photosProjects.length; i++) {
        currentItem = document.querySelector('.current-project');
        if (currentItem == photosProjects[i]) {
            currentItem.classList.remove("current-project");
            if (i != photosProjects.length - 1) {
                i++;
                photosProjects[i].classList.add("current-project");
            } else {
                i = 0;
                photosProjects[i].classList.add("current-project");
            }
        }
    }
});


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
