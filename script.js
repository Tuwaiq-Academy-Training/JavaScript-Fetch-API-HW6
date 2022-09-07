/* fetch("https://www.breakingbadapi.com/api/")
.then(function(recponse){
  console.log(recponse);
  return recponse.json()

  

 })
.then(function(data){
  console.log(data)
})

*/

async function get(){
const recponse = await fetch("https://www.breakingbadapi.com/api/characters/")
const data = await recponse.json()
console.log(data)

data.map(function(actor){
  console.log(actor.name)
})
// object.onchange = function(){myScript};
document.querySelector("#content h1").innerHTML =  data[0].name 
document.querySelector("#content h5").innerHTML =  data[0].name 
document.querySelector("#content img").src = data[0].img



document.querySelector("#actor").innerHTML =  `

<select>
${
  data.map(actor => ` <option>${actor.name}</option> `)
}


</select>
`
 }

get()
