let url = `http://localhost:3000/favoourites`;

function favData() {
    let bottom = document.querySelector(".botm");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(card => {
                const card2 = document.createElement('div');
                card2.classList.add('card2');
                card2.innerHTML += `
                  <div class="img">
                      <img src="${card.image}" alt="" />
                  </div>
                  <div class="text">
                      <h4>${card.header}</h4>
                      <p>${card.son}</p>
                  </div>
                  <div>
                  <button onclick="deleteCard(${card.id})" style="background-color: red;">Delete</button>
                  </div>
              `;

                bottom.appendChild(card2);
            })
        })
}

favData();
function deleteCard(id) {
    console.log(id);
    axios.delete(`http://localhost:3000/favoourites/${id}`)
    window.location.reload()
}