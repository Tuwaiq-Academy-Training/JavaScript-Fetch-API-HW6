const button= document.getElementById('search-button');
const joke = document.getElementById('joke-area');

button.addEventListener('click', async () => {

     try {
        const request = await fetch(
            `https://v2.jokeapi.dev/joke/Any?safe-mode`
        );
        if (request.status != 200) {
            return;}

        const data = await request.json();

        if (data.Response === 'False') {
            // alert(data.Error);
            return;}
           
                if(data.type === "twopart"){
                    joke.innerHTML= `
                    <div class="joke">
                       <h3>${data.setup}</h3> 
                       <br>
                       <br>
                       <br>
                       <br>
                       <br>
                       <br>
                       <button class="btn btn-light a-button" id="ans-button" >Answer>></button>
                       <div id="ans-area"></div>
                    </div>
                    `
                    document.getElementById("ans-button").addEventListener('click', async() =>{
                        try{
                            document.getElementById("ans-area").innerHTML=`<h5>${data.delivery}</h5>`

                        }catch{
                            console.log(error);
                        }
                    })
                }else{
                    joke.innerHTML= `
                    <div class="joke">
                       <h3>${data.joke}</h3> 
                    </div>
                    ` }
              
              console.log(data);


}catch (error){
    console.log(error);
}});
