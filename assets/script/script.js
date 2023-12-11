
function showData(){
    let bottom=document.querySelector(".botom");
fetch(`http://localhost:3000/card`)
.then(response=>response.json())
.then(data=>{
    data.foreach(card=>{
    const card1 = document.createElement('div');
card1.classList.add('card');
    card.innerHTML+=`
    
    <div class="img">
    <img src="${card.image}" alt="" />
  </div>
  <div class="text">
    <h5>${card.header}</h5>
    <p>${card.son}</p>
  
      <a href="./dataesehtml/navfoot.html?id=${card.id}"> <button>VIEW MORE  </button></a>
  
    <button onclick="deleterobot(${card.id})">Delete</button>  

    <button onclick="editRobot(${card.id})">Uptade</button> 
  </div>
`;
  
bottom.appendChild(card1)

})
}
    
    )
}
showData()