// const videos = document.querySelectorAll(".video__category");
// videos.forEach((video) => {
//   video.addEventListener("click", () => {
//     videos.forEach(v => v.classList.remove("video__category--active"))
//     video.classList.add("video__category--active");
//   });
// });



const fatherVed = document.querySelector(".videos__grid");

// fetch("http://127.0.0.1:8000/api/videos")
// .then(res => res.json())
// .then(res => res = res.video)
// .then(res => {
//   res.forEach(ele => {
//     fatherVed.innerHTML += `<iframe
//     class="video__item ${ele.section} most-viewed"
//     src="${ele.link}"
//     title="${ele.name}"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     allowfullscreen
//     ></iframe>`
//   })
// })

// const links = document.querySelectorAll(".video__category");
// const ved = document.querySelectorAll("iframe")
// console.log(ved)
// for(let i = 0 ; i <= links.length-1 ; i++) {
//   links[i].onclick = () => {
//     let m = links[i].innerText.toLowerCase().replaceAll(" ","-")
//     console.log(m)
//     ved.forEach(ele => {
//       if(ele.classList.contains(`${m}`)){
//         console.log("yes")
//         ele.classList.remove("d-none")
//       }
//       else{
//         console.log("no",ele)
//         ele.classList.add("d-none")
//       }
//     })
//   }
// }



new Swiper(".videos-swiper", {
  spaceBetween: 28,
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
    420: {
			slidesPerView: 4,
		}
	},
});


const myPhotos = document.querySelectorAll(".videos .videos-swiper .video__item img") ; 
const myVideo = document.querySelector(".videos .videos_active_video .videos_active_video_iframe iframe")
myPhotos.forEach((photo, i) => {
	photo.addEventListener("click" , ()=> {
    myVideo.src = myPhotos[i].dataset.src;
	})
});
