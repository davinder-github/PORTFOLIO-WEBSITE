const box_el=document.getElementById('box');
box_el.addEventListener('click',()=>{
    if(box_el.name!='close-outline'){
        box_el.name='close-outline';
        console.log("name change")
    }
    else{
        box_el.name='reorder-three-outline';
    }
    const mobile_nav=document.getElementById('nav-ul');
    console.log("insdie event listenr");
    // mobile_nav.classList.toggle('translate_0');
    mobile_nav.classList.toggle('mobile-nav-display')
})

function check_current_width(){
    var bodyWidth = document.body.clientWidth;
    return bodyWidth;
}

check_current_width();

function animation(el,value_container,value){
let progressValue = 0;
let progressEndValue = value;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  value_container.textContent = `${progressValue}%`;
  el.style.background = `conic-gradient(
      from 0deg,
      #4d5bf9 ${progressValue*3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
return;
}



function play_animation(){
        const el=document.getElementById('skill_1');
        el.classList.toggle('show_content');
        const progress=document.getElementById('skill_1_p');
     
        progress.classList.toggle('display_int');
        const value_container=document.getElementById('value_container_1');
       
       
        animation(el,value_container,80);
    // }

    // else if(el.id=='skill_2'){
        // console.log(el);

        const el2=document.getElementById('skill_2');
        el2.classList.toggle('show_content');
        // const check_tag=document.getElementById('skill_1_check');
        const progress2=document.getElementById('skill_2_p');
     
        progress2.classList.toggle('display_int');
        const value_container2=document.getElementById('value_container_2');
       
       
        animation(el2,value_container2,70);
    // }



    // else if(el.id=='skill_3'){
        const el3=document.getElementById('skill_3');
        console.log(el);
        el3.classList.toggle('show_content');
        // const check_tag=document.getElementById('skill_1_check');
        const progress3=document.getElementById('skill_3_p');
     
        progress3.classList.toggle('display_int');
        const value_container3=document.getElementById('value_container_3');
       
       
        animation(el3,value_container3,80);
    // }

    
    // else if(el.id=='skill_4'){
        const el4=document.getElementById('skill_4');
        // console.log(el);

        el4.classList.toggle('show_content');
        // const check_tag=document.getElementById('skill_1_check');
        const progress4=document.getElementById('skill_4_p');
     
        progress.classList.toggle('display_int');
        const value_container4=document.getElementById('value_container_4');
       
      
        animation(el4,value_container4,80);
    // }
}


play_animation();



let them_btn=document.getElementById('theme');
them_btn.addEventListener('click',()=>{
    if(them_btn.name!='sunny-outline'){
        them_btn.name='sunny-outline';
    }
    else{
        them_btn.name='moon-outline';
    }
   
    document.body.classList.toggle('black_theme')
})
