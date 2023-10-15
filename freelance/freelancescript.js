const onpro_par= document.getElementById("onpro-par")
let onimg_list=[
 
    
]
let onpro_titles= [

    
]
let onpro_des = [
 
    
]
let item_onpro=onimg_list.length
let oncontent =""
if(item_onpro==0){
  onpro_par.classList.add("none-projects")
  onpro_par.innerHTML="No Ongoing projects to show"
}
else{
for(let i=0;i<item_onpro;i++){
  onpro_par.classList.remove("none-projects")
    oncontent+=`
    <div class="pro-child hidden">
      <div class="pro-image">
          <img src='${onimg_list[i]}'>
      </div>
      <div class="pro-content onpro-cont">
        <div class="pro-title">
            ${onpro_titles[i]}
        </div>
        <div class="pro-des">
          ${onpro_des[i]}
        </div>  
      </div>
    </div>
    `
    onpro_par.innerHTML = oncontent
}
}


const pro_par= document.getElementById("pro-par")
let img_list=[
    "../projects/niya-fit.png",
    "../projects/algo.png"
]
let pro_titles= [
    "Niya-Fit",
    "Algorithm"
]
let pro_des = [
    "Offers a one-stop solution for fitness enthusiasts, providing access to workout routines, nutrition plans, and a wide range of fitness gear",
    "Algorithm revolutionizes the way you access repair services. Our platform connects you with certified technicians for a hassle-free experience"
    
]
let item_size=img_list.length
let content =""
for(let i=0;i<item_size;i++){
    content+=`
    <div class="pro-child hidden">
      <div class="pro-image">
          <img src='${img_list[i]}'>
      </div>
      <div class="pro-content">
        <div class="pro-title">
            ${pro_titles[i]}
        </div>
        <div class="pro-des">
          ${pro_des[i]}
        </div>  
      </div>
    </div>
    `
    pro_par.innerHTML = content
    
}