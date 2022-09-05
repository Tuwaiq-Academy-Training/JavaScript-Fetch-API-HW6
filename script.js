//const input = document.getElementById('coffee-input');
const button = document.getElementById('search-button');
const coffeeArea = document.getElementById('coffee-area');
            
            button.addEventListener('click', async () => {
              //const value = input.value;
              
              try {
                const request = await fetch(
                  `https://api.sampleapis.com/coffee/hot`
                );
                if (request.status != 200) {
                  return;
                }
                const data = await request.json();
            
                if (data.Response === 'False') {
                  alert(data.Error);
                  return;
                }
            
                const dataMap = data.map((item) => {
                  return `
                  <div class="col mt-3">
                            <div id="${item.id}" class="card text-center" >
                                <img src='${item.image}'
                                    class="card-img-top" alt="img">
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <h5 class="card-title">Description : ${item.description}</h5>
                                </div>
                            </div>
                        </div>
                  `;
                });
            
                coffeeArea.innerHTML = dataMap.join('');
            
                console.log(data.Search);
              } catch (error) {
                console.log(error);
              }
            });