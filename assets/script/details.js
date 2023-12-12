let id =new URLSearchParams (window.location.search).get("id");
let data2=document.querySelector(".data");
fetch(`http://localhost:3000/card/${id}`)
.then(response => response.json())
.then(data => {
        const card2 = document.createElement('div');
        card2.classList.add('card1');
        card2.innerHTML = `
        <i class="bi bi-heart"></i>
            <div class="img">
                <img src="${data.image}" alt="" />
            </div>
            <div class="text">
                <h4>${data.header}</h4>
                <p>${data.son}</p>
                <a href="../index.html"> <button>BACK</button></a>
            </div>
        `
        data2.append(card2)
});