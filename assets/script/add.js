let form=document.querySelector(".form");
let header=document.querySelector("#name");
let son=document.querySelector("#son");
let image=document.querySelector("#image");



form.addEventListener("submit",function(event){
    event.preventDefault()
    let obj={}
    
let src=image.files[0]
const reader=new FileReader();
reader.onload=function(e){
    obj={
image:e.target.result,
header:header.value,
son:son.value
    }
    axios.post("http://localhost:3000/card",obj).then(res=> console.log(res.data))
}
reader.readAsDataURL(src);
window.location="../index.html"
})