const messageBox = document.querySelector(".message-box");

messageBox.addEventListener("click", () => {
    messageBox.querySelector("textarea").focus();
})

const formEle = document.querySelector(".form");

formEle.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEle);
    const data = Object.fromEntries(formData);
   
    fetch('http://localhost:8000/api/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
})



document.addEventListener('DOMContentLoaded', function() {
    let readMore = document.querySelector('.read-more');
    let showLess = document.querySelector('.show-less');
    let textContainer = document.querySelector('.text-container');
    let FFFFF = document.querySelector('.FFFFF');
  
    readMore.addEventListener('click', function(event) {
      event.preventDefault();
      textContainer.classList.add('show-more');
      FFFFF.style.display = 'inline-block';
      readMore.style.display = 'none';
      showLess.style.display = 'inline-block';
    });
  
    showLess.addEventListener('click', function(event) {
      event.preventDefault();
      textContainer.classList.remove('show-more'); 
      FFFFF.style.display = 'none';
      FFFFF.style.z_index = '12345';
      showLess.style.display = 'none';
      readMore.style.display = 'inline-block'; 
    });
  });