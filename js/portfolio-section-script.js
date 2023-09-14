new Swiper(".portfolio-swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	spaceBetween: 20,
	breakpoints: {
		600: {
			slidesPerView: 1,
		},
		800: {
			slidesPerView: 2,
		},
		1250: {
			slidesPerView: 3,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// const father = document.querySelector(".swiper-wrapper-portfolio");
// var container = document.querySelector(".port-redu");
// var btns = container.querySelectorAll(".redu");
// const subSection = document.querySelector(".redu.active");
// let lastRes;
// let currentSection  = subSection.innerText.toLowerCase().replaceAll(' ','-');//to fit with sections values from back-end
// if(currentSection === "photos-taken-by-me") { // also to fit 
//   lastRes = "photos";
// }else {
//   lastRes = currentSection;
// }

// fetch("http://127.0.0.1:8000/api/portfolios").then((result)=>{
//   let myData = result.json();
//   return myData;
// }).then((myData) => {
//   const res = myData.portfolios.filter(it => it.section === lastRes
    
    
//     );
//   return res;
// }).then((res) => {
//   if(res.length === 0) {
//     console.log("no portfolios");
//   }else{
//     res.forEach(element => {
//       const s1 = document.createElement("div");
//       s1.classList.add("swiper-slide");
//       const s2 = document.createElement("div");
//       s2.classList.add("port-c-cont");
//       s1.append(s2);
//       const im = document.createElement("img");
//       im.setAttribute("src",`${element.image_url}`);
//       s2.append(im);
//       const s3 = document.createElement("div");
//       s3.classList.add("port-card-text");
//       s2.append(s3);
//       const p1 = document.createElement("p");
//       p1.innerText = `${element.name}`;
//       s3.append(p1);
//       const a1 = document.createElement("a");
//       a1.setAttribute("href",`${element.link}`);
//       a1.innerText = "view >";
//       s3.append(a1);
//       father.append(s1)
//     });
//   }
// })



// acive and disactive in port-redu links
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     while (father.hasChildNodes()) {
//       father.removeChild(father.firstChild);
//     }
//     currentSection  = this.innerText.toLowerCase().replaceAll(' ','-');
//   if(currentSection === "photos-taken-by-me") { // also to fit 
//   lastRes = "photos";
// }else {
//   lastRes = currentSection;
// }
//   fetch("http://127.0.0.1:8000/api/portfolios").then((result)=>{
//   let myData = result.json();
//   return myData;
// }).then((myData) => {
//   const res = myData.portfolios.filter(it => it.section === lastRes
    
    
//     );
//   return res;
// }).then((res) => {
//   if(res.length === 0) {
//     console.log("no portfolios");
//   }else{
//     res.forEach(element => {
//       const s1 = document.createElement("div");
//       s1.classList.add("swiper-slide");
//       const s2 = document.createElement("div");
//       s2.classList.add("port-c-cont");
//       s1.append(s2);
//       const im = document.createElement("img");
//       im.setAttribute("src",`${element.image_url}`);
//       s2.append(im);
//       const s3 = document.createElement("div");
//       s3.classList.add("port-card-text");
//       s2.append(s3);
//       const p1 = document.createElement("p");
//       p1.innerText = `${element.name}`;
//       s3.append(p1);
//       const a1 = document.createElement("a");
//       a1.setAttribute("href",`${element.link}`);
//       a1.innerText = "view >";
//       s3.append(a1);
//       father.append(s1)
//     });
//   }
// })
//   });
// }
// <section id="portfolio-section" class="blog-sec">
// <h2 class="main-heading">Blog</h2>
// <div class="portfolio-contanier port-content">
//   <ul class="port-redu">
// 	<li class="redu active">Lorem</li>
// 	<li class="redu">Lorem</li>
// 	<li class="redu">Lorem</li>
// 	<li class="redu">Lorem</li>
//   </ul>
//   <div class="swiper blog-swiper">
// 	<div class="swiper-wrapper swiper-wrapper-portfolio">
// 	  <div class="swiper-slide">
// 		<div class="port-c-cont">
// 		  <img src="./imgs/blog-photo.png" alt="" />
// 		  <div class="blog-card-text">
// 			<h2>Lorem ipsum dolor sit amet</h2>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda vitae cumque accusantium.</p>
// 			<div class="blog-carf-lastone">
// 			  <a href="">Read more</a>
// 			  <p>22th Aug 2023</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  <div class="swiper-slide">
// 		<div class="port-c-cont">
// 		  <img src="./imgs/blog-photo.png" alt="" />
// 		  <div class="blog-card-text">
// 			<h2>Lorem ipsum dolor sit amet</h2>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda vitae cumque accusantium.</p>
// 			<div class="blog-carf-lastone">
// 			  <a href="">Read more</a>
// 			  <p>22th Aug 2023</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  <div class="swiper-slide">
// 		<div class="port-c-cont">
// 		  <img src="./imgs/blog-photo.png" alt="" />
// 		  <div class="blog-card-text">
// 			<h2>Lorem ipsum dolor sit amet</h2>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda vitae cumque accusantium.</p>
// 			<div class="blog-carf-lastone">
// 			  <a href="">Read more</a>
// 			  <p>22th Aug 2023</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  <div class="swiper-slide">
// 		<div class="port-c-cont">
// 		  <img src="./imgs/blog-photo.png" alt="" />
// 		  <div class="blog-card-text">
// 			<h2>Lorem ipsum dolor sit amet</h2>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda vitae cumque accusantium.</p>
// 			<div class="blog-carf-lastone">
// 			  <a href="">Read more</a>
// 			  <p>22th Aug 2023</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  <div class="swiper-slide">
// 		<div class="port-c-cont">
// 		  <img src="./imgs/blog-photo.png" alt="" />
// 		  <div class="blog-card-text">
// 			<h2>Lorem ipsum dolor sit amet</h2>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda vitae cumque accusantium.</p>
// 			<div class="blog-carf-lastone">
// 			  <a href="">Read more</a>
// 			  <p>22th Aug 2023</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  <div class="swiper-slide">
// 		<div class="port-c-cont">
// 		  <img src="./imgs/blog-photo.png" alt="" />
// 		  <div class="blog-card-text">
// 			<h2>Lorem ipsum dolor sit amet</h2>
// 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda vitae cumque accusantium.</p>
// 			<div class="blog-carf-lastone">
// 			  <a href="">Read more</a>
// 			  <p>22th Aug 2023</p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	  </div>
// 	</div>
// 	<div class="bottom-row">
// 	  <div class="swiper-button-next"></div>
// 	  <div class="swiper-button-prev"></div>
// 	  <div class="swiper-pagination"></div>
// 	</div>
//   </div>
// </div>
// </section>