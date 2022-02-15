const socialIcon = document.querySelectorAll('.social_icon')
socialIcon.forEach(icon=>{
 icon.addEventListener('mouseover',()=>{
     icon.children[0].style.transform='scale(1.1)' 
 })
 icon.addEventListener('mouseleave',()=>{
    icon.children[0].style.transform='scale(1)' 
})
})


//all animation with scroll
const flower_svg = document.querySelector('.flower_hero')
const scrollUpper = document.querySelector('.scroll_upperText')
const scrollBottom = document.querySelector('.scroll_bottomText')
const roundGetIt_text = document.querySelector('#get_here_txt')
const bottom_scroll_topSection = document.querySelector('.bottom_top_slide')
const bottom_scroll_bottomSection = document.querySelector('.bottom_bottom_slide')

let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
let rotate = 1
let translateingUpperText = -1
let translateingBottomText = 1
let textHere_rotation = 5
let bottom_scroll_top = -1
let bottom_scroll_bottom = 1
window.addEventListener('scroll',()=>{
    let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    //showing the Get IT here text and animation
    if( window.pageYOffset>300){
        
        roundGetIt_text.style.opacity=1
        roundGetIt_text.style.bottom='10px'
        roundGetIt_text.style.transform='translateY(20px)'
    }else{
        textHere_rotation = 0
        roundGetIt_text.style.opacity=0
        roundGetIt_text.style.bottom='-20px'
        roundGetIt_text.style.transform='translateY(0px)'
    }

       //top scroll slider
       if(window.innerWidth>=340){
        if(window.pageYOffset>20 && window.pageYOffset<1730 ){
            if(previousPosition > currentPosition){
                scrollUpper.style.transform = `translateX(${translateingUpperText}px)`
                scrollBottom.style.transform = `translateX(${translateingBottomText}px)`
                --translateingBottomText
                translateingUpperText++
            }else{
                scrollUpper.style.transform = `translateX(${translateingUpperText}px)`
                scrollBottom.style.transform = `translateX(${translateingBottomText}px)`
                translateingBottomText++
                translateingUpperText--
            }
            
        }else{
            scrollUpper.style.transform = 'translateX(0px)'
            scrollBottom.style.transform = 'translateX(0px)'
            translateingUpperText = -10
            translateingBottomText = 10
        }
       }
      

    //bottom scroll slider
    if(window.innerWidth>=821){
        if(window.pageYOffset>4400 && window.pageYOffset<6000 ){
            if(previousPosition > currentPosition){
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                --bottom_scroll_top
                bottom_scroll_bottom++
            }else{
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                bottom_scroll_top++
                bottom_scroll_bottom--
            }
            
        }else{
            bottom_scroll_topSection.style.transform = `translateX(${0}px)`
            bottom_scroll_bottomSection.style.transform = `translateX(${0}px)`
            bottom_scroll_top = -10
            bottom_scroll_bottom = 10
        }
    }else if(window.innerWidth<=820 && window.innerWidth>=750){
        if(window.pageYOffset>5300 && window.pageYOffset<6300 ){
            if(previousPosition > currentPosition){
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                --bottom_scroll_top
                bottom_scroll_bottom++
            }else{
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                bottom_scroll_top++
                bottom_scroll_bottom--
            }
            
        }else{
            bottom_scroll_topSection.style.transform = `translateX(${0}px)`
            bottom_scroll_bottomSection.style.transform = `translateX(${0}px)`
            bottom_scroll_top = -10
            bottom_scroll_bottom = 10
        }
    } else if(window.innerWidth<750 && window.innerWidth>=530){
        if(window.pageYOffset>6300 && window.pageYOffset<7800 ){
            if(previousPosition > currentPosition){
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                --bottom_scroll_top
                bottom_scroll_bottom++
            }else{
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                bottom_scroll_top++
                bottom_scroll_bottom--
            }
            
        }else{
            bottom_scroll_topSection.style.transform = `translateX(${0}px)`
            bottom_scroll_bottomSection.style.transform = `translateX(${0}px)`
            bottom_scroll_top = -10
            bottom_scroll_bottom = 10
        }
    }  /* else if(window.innerWidth<530 && window.innerWidth>=400){
        if(window.pageYOffset>6400 && window.pageYOffset<7800 ){
            if(previousPosition > currentPosition){
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                --bottom_scroll_top
                bottom_scroll_bottom++
            }else{
                bottom_scroll_topSection.style.transform = `translateX(${bottom_scroll_top}px)`
                bottom_scroll_bottomSection.style.transform = `translateX(${bottom_scroll_bottom}px)`
                bottom_scroll_top++
                bottom_scroll_bottom--
            }
            
        }else{
            bottom_scroll_topSection.style.transform = `translateX(${0}px)`
            bottom_scroll_bottomSection.style.transform = `translateX(${0}px)`
            bottom_scroll_top = -10
            bottom_scroll_bottom = 10
        }
    }  */

   
    
    if(currentPosition===0){ 
        roundGetIt_text.style.transform=`rotate(${0}deg)`
        
        textHere_rotation = 0
    }
    else if (previousPosition > currentPosition) {
        flower_svg.style.transform=`rotate(${rotate}deg)`
        roundGetIt_text.style.transform=`rotate(${textHere_rotation}deg)`
        scrollUpper.style.transform = `translateX(${translateingUpperText}px)`
        scrollBottom.style.transform = `translateX(${translateingBottomText}px)`
        
        textHere_rotation-=2
        --rotate
       
    } else {
        flower_svg.style.transform=`rotate(${rotate}deg)`
        roundGetIt_text.style.transform=`rotate(${textHere_rotation}deg)`
        
        textHere_rotation+=2
        rotate++
        
    }
  
    previousPosition = currentPosition;
    
    
    //console.log(window.scrollY)

})


//showing language
const language = document.querySelector('.selsected_lang')
const language_option = document.querySelector('.selection')
language.addEventListener('click',()=>{
    language_option.classList.toggle('show')
})

const englishLan = document.querySelector('.english')
const hongkongLan = document.querySelector('.hongkong')

englishLan.addEventListener('click',()=>{
    language.textContent = `Language: English`
    language_option.classList.remove('show')
})
hongkongLan.addEventListener('click',()=>{
    language.textContent = `Language: Hongkong`
    language_option.classList.remove('show')
})


//on load animation of text 
window.addEventListener('load',()=>{
    setTimeout(()=>{
        document.querySelector('.overLay_animation').style.display='none'
    },3500)
})