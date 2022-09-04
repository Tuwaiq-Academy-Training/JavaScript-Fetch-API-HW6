const input = document.getElementById('country-input');
const button = document.getElementById('search-btn');
const universttyList = document.getElementById('univirsty-area');


button.addEventListener('click', async () => {
    const value = input.value;
    try {
      const request = await fetch(
        `http://universities.hipolabs.com/search?country=${value}`
      );
      if (request.status != 200) {
        return;
      }
      const data = await request.json();
      console.log(data)
  
      if (data.Response === 'False') {
        alert(data.Error);
        return;
      }
  
      const dataMap = data.map((item) => {
        return `
        <div class="col mt-3">
        <div class="card border-success mb-3" style="max-width: 25rem;">

          <div class="card bg-dark text-white">
            <div class="row">
                <div class="col">
                <p class="card-text">country: </p>
                </div>
                <div class="col">
                    <p class="card-text">${item.country}</p>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <p class="card-text">universiry name: </p>
                </div>
                <div class="col">
                    <p class="card-text">${item.name}</p>
                </div>
                
            </div>   
                
          </div>
          <div class="card-body text-dark">
         
          <div class="row">   
          <div class="col">
          <p class="card-text">state-province: </p>
          </div>
          <div class="col">
            <h4 class="card-title">${item['state-province']}</h4>
            </div>
            </div>

            <div class="row">
                <div class="col">
                    <p class="card-text text-dark ">Web Page:  </p>
                </div>
                <div class="col">
                    <p class="card-text text-dark">${item.web_pages[0]}</p>
                </div>
            </div>
          </div>
        </div>
  </div>
        `;
      });
  
      universttyList.innerHTML = dataMap.join('');
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });