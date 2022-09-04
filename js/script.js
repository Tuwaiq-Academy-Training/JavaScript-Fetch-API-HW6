const city = document.getElementById('city-input');
const country = document.getElementById('country-input');
const button = document.getElementById('search-button');
const bestHotel = document.getElementById('hotel');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bb36c9a15fmsh39691fc73ea5267p162d87jsn607b4e4742f2',
    'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
  }
};

button.addEventListener('click', async () => {

  const city1 = city.value;
  const country1 = country.value;
  var response;
  try {
    const request = await fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=' + city1 + '&countryName=' + country1, options
    );
    if (request.status != 200) {
      return;
    }
    const data = await request.json();

    if (data.Response === 'False') {
      alert(data.Error);
      return;
    }
    bestHotel.innerHTML = ` 
        <div class="card-body">
        <p class="h5 p-style">Hotel name:</p>
        <p class="h5"> ${data.name}</p><br>
        <p class="h5 p-style">Hotel Link: </p>
        <p class="h5"> <a href="${data.link}" class="link-info">${data.link}</a></p><br>
        <p class="h5 p-style">Rating: </p>
        <p class="h5">${data.rating}</p><br>
        </div>`

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});