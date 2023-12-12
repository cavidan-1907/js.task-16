
let menu = document.querySelector(".menu");
let modal = document.querySelector(".modal-bg");
let close = document.querySelector(".close");
let scrol=document.querySelector(".scroll")
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
              <i class="bi bi-heart"></i>
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                 
                  </div>
                  <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                  <button onclick="deleteCard(${card.id})">Delete</button>
                  <button onclick="editCard(${card.id})">Update</button>
              `;

              bottom.appendChild(card1);
          });
      });
}
let form1=document.querySelector(".form1");
let uptade=document.querySelector(".uptade");
let name1=document.querySelector("#name1");
let category1=document.querySelector("#category1");
let image1=document.querySelector("#image1");
let none=document.querySelector(".x");


showData();
let section2=document.querySelector(".section2");
function editCard(id) {

  section2.style.opacity="0.5"
  uptade.style.display="block";
  none.addEventListener("click",(e)=>{
    e.preventDefault();
    uptade.style.display="none";
    section2.style.opacity="1";
   
    });
    form1.addEventListener("submit",function(event){
   
      event.preventDefault();
      axios.get(`http://localhost:3000/card/${id}`).then(res=>console.log(res.data))
      let src1=image1.files[0]
      const reader1=new FileReader();
      reader1.onload=function(e){
        const obj1={
          image:e.target.result,
          header:name1.value,
          son:category1.value

        }
        axios.patch(`http://localhost:3000/card/${id}`,obj1).then(res=>console.log(res.data))
      }
      reader1.readAsDataURL(src1)
})
}

function deleteCard (id){
  console.log(id);
  axios.delete(`http://localhost:3000/card/${id}`)
window.location.reload()
}
scrol.style.display="none";
let nav=document.querySelector("nav");

window.onscroll = () => {



  
  if (window.scrollY > 50) {
    nav.style.background = "rgba(18, 18, 19, 0.9)";
    nav.style.padding = "10px 0";
    scrol.style.display="block";
    scrol.addEventListener("click",()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    })
  } else {
    nav.style.padding = "0px 0";

    nav.style.backgroundColor = "transparent";
    scrol.style.display="none";
  }
};
console.log();