const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const reset = document.querySelector('#reset');
    reset.addEventListener('click',(val)=>{
        val.innerHTML=" ";
    });
    reset.addEventListener('click',(e)=>{
        result.innerHTML=" ";
    })
     
    
    if( height ==='' || height<0 || isNaN(height)){
        result.innerHTML = `Please write a valid height ${height}`;
    } else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `please write a valide weight ${weight}`;
    }else{
        const ans = (weight/((height*height) /10000)).toFixed(3);
        result.innerHTML =  `<span>${ans}</span>`;
    }

})