const input=document.getElementById('text-name');
const button=document.getElementById('search-button');
const gender=document.getElementById('output-area');

button.addEventListener('click', async()=>{
const value=input.value;
try{
    const request = await fetch(`https://api.genderize.io?name=${value}`);
    if(request.status!=200){
        return;
    }
    
    const data= await request.json();
    if(data.request==='false'){

        alert(data.error);
        return;
    }
    gender.innerHTML=data.gender;
    console.log(data.gender);}
catch (error) {
    console.log(error);

}
});




