const pro_par= document.getElementById("pro-par")
let img_list=[
    "../projects/niya-fit.png",
    "../projects/algo.png",
]
let pro_titles= [
    "Niya-Fit",
    "Algorithm",
    "Fatch",
    "Fatch"
]
let pro_des = [
    "Offers a one-stop solution for fitness enthusiasts, providing access to workout routines, nutrition plans, and a wide range of fitness gear",
    "Algorithm revolutionizes the way you access repair services. Our platform connects you with certified technicians for a hassle-free experience",
    "Elevate smartwatch game with custom-designed smartwatch faces.",
    "Elevate smartwatch game with custom-designed smartwatch faces."
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