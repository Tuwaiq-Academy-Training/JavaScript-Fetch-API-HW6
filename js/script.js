const input = document.getElementById('name');
const button = document.getElementById('search-button');
const gender = document.getElementById('result-area');


button.addEventListener('click', async () => {
    const value = input.value;
    try {
      const request = await fetch(
        `https://api.genderize.io?name=${value}`
      );
      if (request.status != 200) {
        return;
      }
      const data = await request.json();

      if (data.Response === 'False') {
        alert(data.Error);
        return;
      }
      
      gender.innerHTML = '<h3> The gender is: </h3>' + '<h5>' + data.gender + '</h5>';

      console.log(data);


    } catch (error) {
      console.log(error);
    }

  });