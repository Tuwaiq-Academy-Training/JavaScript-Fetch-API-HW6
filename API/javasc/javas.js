const input = document.getElementById('name-input');
const button = document.getElementById('name-button');
const name = document.getElementById('name');
const age = document.getElementById('age');
const count = document.getElementById('count');




button.addEventListener('click', async () => {
  const value = input.value;
  // https://www.omdbapi.com/?s=naruto&apikey=7d871d91
  try {
    const request = await fetch(
      `https://api.agify.io?name=${value}`
    );
    if (request.status != 200) {
      return;
    }
    const data = await request.json();
    name.innerHTML=data.name
    age.innerHTML=data.age
    count.innerHTML=data.count
    



    if (data.Response === 'False') {
      alert(data.Error);
      return;
    }



  } catch (error) {
    console.log(error);
  }
});