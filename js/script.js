const input=document.getElementById('name-input')
const button=document.getElementById('search-botton')
const age=document.getElementById('age')


button.addEventListener('click', async () => {
    const value = input.value;
    // https://api.agify.io/?name=${value}
    
  try {
    const request = await fetch(

        `https://api.agify.io/?name=${value}`
        
    );
    if (request.status != 200) {
      return;
    }
    const data = await request.json();

    if (data.Response === 'False') {
      alert(data.Error);
      return;
    }

    // const dataMap = data.Search.map((item) => {
    //   return `
    //   <div class="row">
                
    //             <h5 class="theage">${item.age}</h5>
    //         </div>
    //   `;
    // });

    // age.innerHTML = dataMap.join('');



    const result=data.age;

    age.innerHTML=result

    // if (result<50){
    //     age.innerHTML='you are young!!!'
    // }


    console.log(data.age);

  } catch (error) {
    console.log(error);
  }
});