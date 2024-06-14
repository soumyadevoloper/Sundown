// var elemC = document.querySelector("#elem-conatiner");
// var shit = document.querySelector("#fixed-images");


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// elemC.addEventListener("mouseenter", function(){
    
//     shit.style.display = "block"
// })


// const projects = document.querySelectorAll("#elem-conatiner");
// const preview = document.querySelector(".preview");
// const previewImg = document.querySelector(".preview-img");

// let isInside = false;

// const bgPositions = {
//   p1: "0 0",
//   p2: "0 25%",
//   p3: "0 50%",
//   p4: "0 75%",
//   p5: "0 100%",
// };

// const moveStuff = (e) => {
//   const mouseInside = isMouseInsideContainer(e);

//   if (mouseInside !== isInside) {
//     isInside = mouseInside;
//     if (isInside) {
//       gsap.to(preview, 0.3, {
//         scale: 1,
//       });
//     } else {
//       gsap.to(preview, 0.3, {
//         scale: 0,
//       });
//     }
//   }
// };

// const moveProject = (e) => {
//   const previewRect = preview.getBoundingClientRect();
//   const offsetX = previewRect.width / 2;
//   const offsetY = previewRect.height / 2;

//   preview.style.left = e.pageX - offsetX + "px";
//   preview.style.top = e.pageY - offsetY + "px";
// };

// const moveProjectImg = (project) => {
//   const projectId = project.class;
//   gsap.to(previewImg, 0.4, {
//     backgroundPosition: bgPositions[projectId] || "0 0",
//   });
// };

// const isMouseInsideContainer = (e) => {
//   const containerRect = document.querySelector('.container').getBoundingClientRect();

//   return (
//     e.pageX >= containerRect.left &&
//     e.pageX <= containerRect.right &&
//     e.pageY >= containerRect.top &&
//     e.pageY <= containerRect.bottom
//   );
// };

// window.addEventListener("mousemove", moveStuff);

// projects.forEach((project) => {
//   project.addEventListener("mousemove", moveProject);
//   project.addEventListener("mousemove", () => moveProjectImg(project));
// });




  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

var lut = document.querySelector("#loader");
setTimeout(function() {
    lut.style.top = "-100%"
}, 4000)