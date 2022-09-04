const input = document.getElementById('name-input');
const button = document.getElementById('search-button');
const gender = document.getElementById('gender');

button.addEventListener('click', async () => {
  const value = input.value;

try{
  const request=await fetch(
      `https://api.genderize.io?name=${value}`
  );
  if (request.status!=200){
    return;
  }
  const data=await request.json();

  console.log(data)
gender.innerHTML=data.gender
}
catch (error){
console.log(error);

}

});
