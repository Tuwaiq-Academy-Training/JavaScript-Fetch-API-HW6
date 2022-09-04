const catFact=document.getElementById('fact');

const button=document.getElementById('button');

const img=document.getElementById('image');


button.addEventListener('click', async () => {
    try {
      const request = await fetch(
        "https://catfact.ninja/fact"
      );
      const request1 = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      if (request.status != 200||request1.status != 200) {
        return;
      }
      const data = await request.json();
      const data1=await request1.json();
  
      if (data.Response === 'False'||data1.Response === 'False') {
        alert(data.Error);
        return;
      }

      catFact.innerHTML=data.fact 
      url='url('+data1[0]["url"]+')';
      document.getElementById('image').style.backgroundImage=url;  




    } catch (error) {
        console.log(error);
      }

    });
