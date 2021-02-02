console.log('under console');
let nameInp = document.getElementById('nameInp');
let btn = document.getElementById('btn');
let img = document.getElementById('imgchange');
btn.addEventListener('click',()=>{
    const name = nameInp.value;
    alert(name);
    // imgchange.attr('src',`https://joeschmoe.io/api/v1/${name}`);
    img.src = `https://joeschmoe.io/api/v1/${name}`;
 
})