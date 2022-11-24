let img = document.querySelectorAll('.open-img')
let item = document.querySelector('.item')
let closeBtn = document.querySelector('.close-btn')
let t = 0
img.forEach((v,i)=>{
    
    v.addEventListener('click',()=>{
        while(item.children.length>0){
            item.removeChild(item.lastChild)
        }
        console.log('click')
      item.classList.add('set')
    
        item.insertAdjacentElement('afterbegin',v.cloneNode())
       

        console.log(item.children)
        item.children[0].style.left='50%'
        item.children[0].style.top='30px'

        item.children[0].style.position='absolute'
        item.children[0].style.transform='translate(-50%,0)'
       setTimeout(v=>{
        closeBtn.classList.add('open-btn')
       },200)
        t=1
    })
})

closeBtn.addEventListener('click',()=>{
    item.classList.remove('set')
    closeBtn.classList.remove('open-btn')
})

item.addEventListener('click',()=>{
    item.classList.remove('set')
    closeBtn.classList.remove('open-btn')
})