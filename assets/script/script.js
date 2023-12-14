
let menu = document.querySelector(".menu");
let modal = document.querySelector(".modal-bg");
let close = document.querySelector(".close");
let scrol = document.querySelector(".scroll");
let loadBtn = document.querySelector(".button");
let select = document.querySelector("#select");
let page = 1;
let search= document.querySelector("#search");
let arr=[];
//data

function showData() {
  let bottom = document.querySelector(".botom");
  fetch(`http://localhost:3000/card?_page=${page}&_limit=3`)
    .then(response => response.json())
    .then(data => {
      arr.push(data);
      console.log(arr);
      data.forEach(card => {
        const card1 = document.createElement('div');
        card1.classList.add('card');
        card1.innerHTML += `
              <i onclick="Favorite(${card.id})" class="bi bi-heart"></i>
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                  </div>
                  <div class="but">
                  <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                  <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                  <button onclick="editCard(${card.id})">Update</button>
                  </div>
              `;

        bottom.appendChild(card1);
        return arr.flat()
      });

search.addEventListener('input',()=>{
  let value=event.target.value
  console.log(value);
  if(value!==null){
    data.filter(c=>{
      bottom.innerHTML=' '
      return c.header.toLowerCase().includes(value.toLowerCase())
    }).forEach(card=>{
      const card1 = document.createElement('div');
      card1.classList.add('card');
      card1.innerHTML += `
            <i onclick="Favorite(${card.id})" class="bi bi-heart"></i>
                <div class="img">
                    <img src="${card.image}" alt="" />
                </div>
                <div class="text">
                    <h4>${card.header}</h4>
                    <p>${card.son}</p>
                </div>
                <div class="but">
                <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                <button onclick="editCard(${card.id})">Update</button>
                </div>
            `;

      bottom.appendChild(card1);
    })
  }
})














      select.addEventListener("change", (e) => {
        if (e.target.value == 'header') {

          console.log("HEADERRR");

          let dataS = data.sort((a, b) => {
            return a.header.localeCompare(b.header);
          });
          console.log(dataS);
          bottom.innerHTML = "";
          dataS.forEach(card => {
            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML += `
              <i onclick="Favorite(${card.id})" class="bi bi-heart"></i>
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                 
                  </div>
                  <div>
                  <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                  <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                  <button onclick="editCard(${card.id})">Update</button></div>
              `;

            bottom.appendChild(card1);
          })
        } else if (e.target.value == 'son') {

          console.log("DESC");

          console.log(data);
          let dataS1 = data.sort((a, b) => {
            return a.son.toLowerCase().localeCompare(b.son.toLowerCase());
          });
          console.log(dataS1);
          bottom.innerHTML = "";
          dataS1.forEach(card => {
            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML += `
              <i onclick="Favorite(${card.id})" class="bi bi-heart"></i>
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                 
                  </div>
                  <div>
                  
                  <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                  <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                  <button onclick="editCard(${card.id})">Update</button>
                  </div>
              `;

            bottom.appendChild(card1);
          })
        }
        else if(e.target.value == 'artan'){
          console.log("artan");

          // console.log(data);
          let dataS2 = data.sort((a, b) => {
            return a.id-b.id;
          });
          console.log(dataS2);
          bottom.innerHTML = "";
          dataS2.forEach(card => {
            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML += `
              <i onclick="Favorite(${card.id})" class="bi bi-heart"></i>
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                 
                  </div>
                  <div>
                  
                  <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                  <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                  <button onclick="editCard(${card.id})">Update</button>
                  </div>
              `;

            bottom.appendChild(card1);
          })
          
        }
        else if(e.target.value == 'azalan'){
          console.log("azalan");

          // console.log(data);
          let dataS3 = data.sort((a, b) => {
            return b.id-a.id;
          });
          console.log(dataS3);
          bottom.innerHTML = "";
          dataS3.forEach(card => {
            const card1 = document.createElement('div');
            card1.classList.add('card');
            card1.innerHTML += `
              <i onclick="Favorite(${card.id})" class="bi bi-heart"></i>
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                 
                  </div>
                  <div>
                  
                  <a href="./details/details.html?id=${card.id}"><button>Details</button></a>
                  <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                  <button onclick="editCard(${card.id})">Update</button>
                  </div>
              `;

            bottom.appendChild(card1);
          })
          
        }
        else if (e.target.value == 'All') {
          console.log("all");
          bottom.innerHTML = ''

          showData()

        }
      })

    });
}
//select



//uptade

let form1 = document.querySelector(".form1");
let uptade = document.querySelector(".uptade");
let name1 = document.querySelector("#name1");
let category1 = document.querySelector("#category1");
let image1 = document.querySelector("#image1");
let none = document.querySelector(".x");
let img = document.querySelector("#img");

image1.addEventListener("change", () => {
  let src = image1.files[0]
  const reader = new FileReader();
  reader.readAsDataURL(src);
  reader.onload = function (e) {
    img.src = e.target.result
  }
})



showData();
let section2 = document.querySelector(".section2");
function editCard(id) {

  section2.style.opacity = "0.5"
  uptade.style.display = "block";
  axios.get(`http://localhost:3000/card/${id}`).then(res => {
    name1.value = res.data.header;
    category1.value = res.data.son;
    img.src = res.data.image;
    image1.value = res.data.image
  })
  none.addEventListener("click", (e) => {
    e.preventDefault();
    uptade.style.display = "none";
    section2.style.opacity = "1";

  });
  form1.addEventListener("submit", function (event) {

    event.preventDefault();
    axios.get(`http://localhost:3000/card/${id}`).then(res => {
      name1.value = res.data.header;
      category1.value = res.data.son;
      img.src = res.data.image;

    })

    let src1 = image1.files[0]
    const reader1 = new FileReader();
    reader1.onload = function (e) {
      const obj1 = {
        image: e.target.result,
        header: name1.value,
        son: category1.value

      }
      axios.patch(`http://localhost:3000/card/${id}`, obj1).then(res => console.log(res.data))
    }
    reader1.readAsDataURL(src1)
  })
}
//loadbtn
loadBtn.addEventListener("click", () => {
  page++
  showData()
})
//delete
function deleteCard(id) {
  console.log(id);
  axios.delete(`http://localhost:3000/card/${id}`)
  window.location.reload()
}



//scroll
scrol.style.display = "none";
let nav = document.querySelector("nav");

window.onscroll = () => {




  if (window.scrollY > 50) {
    nav.style.background = "rgba(18, 18, 19, 0.9)";
    nav.style.padding = "10px 0";
    scrol.style.display = "block";
    scrol.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
  } else {
    nav.style.padding = "0px 0";

    nav.style.backgroundColor = "transparent";
    scrol.style.display = "none";
  }
};

//favorite

function Favorite(id) {
  event.preventDefault();
  if (event.target.classList.contains('bi-heart')) {
    event.target.classList.remove('bi-heart')
    event.target.classList.add('bi-heart-fill')

    axios.get(`http://localhost:3000/card/${id}`)
      .then(res => {
        console.log(res.data);
        return res.data
      })
      .then(res => {
        axios.get(`http://localhost:3000/favoourites`)
          .then(response => {
            let iD = response.data.find(f => f.id === response.id);
            if (!iD) {
              axios.post(`http://localhost:3000/favoourites`, res)
              console.log(event.target);
            }
            else {
              axios.delete(`http://localhost:3000/favoourites/${iD.id}`)
            }
          })
      })
  }
  else {
    event.preventDefault();
    event.target.classList.remove('bi-heart-fill')
    event.target.classList.add('bi-heart')
    axios.delete(`http://localhost:3000/favoourites/${id}`)
  }
}

//modal
modal.style.display = "none";
menu.addEventListener('click', () => {
  menu.style.display = "none";
  if (window.innerWidth > 991) {
    modal.style.display = "none";
    menu.style.display = "none";
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
    menu.style.display = "block";
  }, 500);
});


