const input = document.getElementById('name');
const button = document.getElementById('search-button');
const conList = document.getElementById('list');


button.addEventListener('click', async () => {
    const value = input.value;
    try {
      const request = await fetch(
        `https://api.nationalize.io/?name=${value}`
      );
      if (request.status != 200) {
        return;
      }
      const data = await request.json();
  
      if (data.Response === 'False') {
        alert(data.Error);
        return;
      }
    
      const dataMap = data.country.map((countryy) => {
        return `
        <div class="col mt-3">
                  <div id="${countryy.country_id}" class="card text-center" >
                  <h3 class="card-title">${countryy.country_id}</h3>
                  <h3 class="card-title">${countryy.probability}</h3>
                  </div>
                  
        </div>
        `;
      });
  
      conList.innerHTML = dataMap.join('');
  
      console.log(data.country);

    } catch (error) {
      console.log(error);
    }

  });