let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear'
let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
};
//fetch data
let allData = []
let cardContainer = document.getElementById("cardContainer")
let btn = document.getElementById("fetchdata")
btn.addEventListener("click", async (e) => {
    e.preventDefault()
    const data = await fetch(url, options).then(res => res.json()).then(res => res).catch(err => console.log(err))
    console.log(data)
    allData = data
    dispalyCards(data)
    data.forEach((x) => {
        let card = document.createElement("div")
        card.innerHTML = `<img src="${x.Image}" width="300"
        <p>${x.Brand}
        <button>Add to cart</button>`
        document.body.append(card)
    });
})


const getData= async ()=>{
    // e.preventDefault()
    const data = await fetch(url, options).then(res => res.json()).then(res => res).catch(err => {
        console.log(err)
})
    console.log(data)
    allData = data
    dispalyCards(data)
}
getData()


//for filteration
function dispalyCards(z){
    cardContainer.textContent =""
    z.forEach(
        (x) => {
            let card = document.createElement("div")
            card.innerHTML = `<img src="${x.Image}" width="300"
            <p>${x.Brand}
            <button>Add to cart</button>`
            cardContainer.append(card)
        })
    }


let puma = document.getElementById("puma")
puma.addEventListener("click",()=>{
    const filteredData = allData.filter(x=>x.Brand.toLowerCase() === "puma")
    console.log(filteredData)
    dispalyCards(filteredData)
})

let woodland = document.getElementById("woodland")
woodland.addEventListener("click",()=>{
    const filteredData = allData.filter(x=>x.Brand.toLowerCase() === "woodland")
    console.log(filteredData)
    dispalyCards(filteredData)
})

let sparx = document.getElementById("sparx")
sparx.addEventListener("click",()=>{
    const filteredData = allData.filter(x=>x.Brand.toLowerCase() === "sparx")
    console.log(filteredData)
    dispalyCards(filteredData)
})

let bata = document.getElementById("bata")
bata.addEventListener("click",()=>{
    const filteredData = allData.filter(x=>x.Brand.toLowerCase() === "bata")
    console.log(filteredData)
    dispalyCards(filteredData)
})

let redtape = document.getElementById("amico")
amico.addEventListener("click",()=>{
    const filteredData = allData.filter(x=>x.Brand.toLowerCase() === "amico")
    console.log(filteredData)
    dispalyCards(filteredData)
})



