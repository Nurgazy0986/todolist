const AddNew = document.querySelector('.btn1')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const btn2 = document.querySelector('.btn2')
const inputName = document.querySelector('.inputName')
const inputNum = document.querySelector('.inputNum')
const btn3= document.querySelector('.btn3')
const ul = document.querySelector('.ul')
const ul1 = document.querySelector('.ul1')


btn3.addEventListener('click', ()=>{
    ul.innerHTML = `<li>${inputName.value}</li>`
})
btn3.addEventListener('click', ()=>{
    ul1.innerHTML = `<li>${inputNum.value}</li>`
    
})

function getResult() {
    let Name =JSON.parse(localStorage.getItem("Name")) || [] ;
    let Num =JSON.parse(localStorage.getItem("Num")) || [] ;
    console.log(Name);
    console.log(Num);
    let allList = '';
    let allListt = '';
    Name.map(el => {
        allList = `<li>${el.title}<li/>`
        
    });
    ul.innerHTML = allList
    Num.map(el => {
        allListt = `<li>${el.title}<li/>`
    });
    ul1.innerHTML = allListt
}
    
btn3.addEventListener('click', () => {
    addList();
    })
    
    function addList() {
        let Name =JSON.parse(localStorage.getItem("Name")) || [] ;
        let Num =JSON.parse(localStorage.getItem("Num")) || [] ;
        let newList = {
            title: inputName.value,

        };
        let newListt = {
            title: inputNum.value,

        };
        Name = [...Name,newList];
        localStorage.setItem('Name',JSON.stringify(Name));
        getResult()  
        Num = [...Num,newListt];
        localStorage.setItem('Num',JSON.stringify(Num));
        getResult()
    }
    getResult();
