const buttons = document.querySelectorAll('button');
const search = document.querySelector('.search');
const items = document.querySelectorAll('.item');
search.addEventListener('keyup',(e)=>{
    buttons.forEach((button)=>{
        button.classList.remove('clicked');
    });
    buttons[0].classList.add('clicked');
    searchText=e.target.value.toLowerCase().trim();
    items.forEach((item)=>{
        const data = item.dataset.item;
        if(data.includes(searchText)){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        setActiveButton(e);
        const buttonFilter = e.target.dataset.filter;
        items.forEach((item)=>{
            const itemFilter = item.dataset.item;
            if(buttonFilter=='all'){
                 item.style.display='block'
            }
            else{
                if(buttonFilter==itemFilter){
                    item.style.display='block'
                }
                else{
                    item.style.display='none'
                }
            }
        });
    });
});
function setActiveButton(e){
    buttons.forEach((button)=>{
        button.classList.remove('clicked');
    });
    e.target.classList.add('clicked')
}