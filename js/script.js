const name=document.getElementById('name');
const button=document.getElementById('sub');
const age=document.getElementById('age');

button.addEventListener('click',async () =>{
    const value=name.value;

    try{
        const request=await fetch(
            `https://api.agify.io?name=${value}`
        );
        if (request.status!=200){
          return;
        }
        const data=await request.json();
      
        console.log(data)
age.innerHTML=data.age
    }
   catch (error){
    console.log(error);

    }

});

