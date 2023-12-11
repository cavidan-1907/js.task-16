
let menu = document.querySelector(".menu");
let modal = document.querySelector(".modal-bg");
let close = document.querySelector(".close");

menu.addEventListener('click', () => {
  if (window.innerWidth > 991) {
    modal.style.display = "none";
  } else {
    if (modal.style.display === "none") {
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        modal.querySelector(".modal-menu").style.left = "0";
      }, 100);
    } else {
      modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
      modal.querySelector(".modal-menu").style.left = "-30%";
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  }
});

close.addEventListener('click', () => {
  modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
  modal.querySelector(".modal-menu").style.left = "-30%";
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});




function showData() {
  let bottom = document.querySelector(".botom");

  fetch(`http://localhost:3000/card`)
      .then(response => response.json())
      .then(data => {
          data.forEach(card => {
              const card1 = document.createElement('div');
              card1.classList.add('card');
              card1.innerHTML += `
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                 
                  </div>
                  <a href="./dataese/Data.html?id=${card.id}"><button>VIEW MORE</button></a>
                  <button onclick="deleteRobot(${card.id})">Delete</button>
                  <button onclick="editRobot(${card.id})">Update</button>
              `;

              bottom.appendChild(card1);
          });
      });
}

showData();
let nav=document.querySelector("nav");

window.onscroll = () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(18, 18, 19, 0.9)";
    nav.style.padding = "10px 0";
  } else {
    nav.style.padding = "0px 0";

    nav.style.backgroundColor = "transparent";
  }
};
console.log();