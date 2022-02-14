var remove_btn = document.querySelector('.box__btn button')
var eInput = document.querySelector('.input__search')
var eUl = document.querySelector('ul')
var eIcon = document.querySelector('ul li i')

remove_btn.addEventListener('click', function(){
    eInput.focus()
})
var tags = [];
function loger(){
    eUl.innerHTML=''
for(var i = 0; i<tags.length; i++){
    var tag = tags[i];
    eUl.innerHTML += `<li>${tag}<i onclick="removeTags( ${i})" class='bx bx-x'></i>
                    </li>
                    `
}
    eUl.appendChild(eInput)
        eInput.focus()
}
loger()
function removeTags(index){
    tags.splice(index, 1)
    loger()
}
eInput.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        tags.push(eInput.value.trim())
        eInput.value= ''
        loger()
    }
})
remove_btn.addEventListener('click', function(){
    tags = []
    loger()
})


