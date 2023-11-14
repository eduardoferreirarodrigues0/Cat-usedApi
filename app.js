const buscarGatinhos = (e) => {
    e.preventDefault()

    const xhr = new XMLHttpRequest()
    xhr.open('GET','https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const img = document.createElement('img')
                    const idcat = document.createElement('p')
                    const hxw = document.createElement('p')

                    img.src = cat.url
                    idcat.textContent = `ID: ${cat.id || 'ID não disponível'}`
                    hxw.textContent = `Height: ${cat.height  || 'ID não disponível'}`

                    document.querySelector("#gatinhos").appendChild(img)
                })
            } else {
                alert('Erro na requisição')
            }
        }
    }
    xhr.send()
}

const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)



//Mostrar Marcas de carros usando FETCH

const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')

    tarefas
    .then(resposta => resposta.json())
    .then(marcas => {
        const ul = document.createElement('ul')
        marcas.forEach(marca => {
            const li = document.createElement('li')
            const logo = document.createElement('img')
            const nomeMarca = document.createElement('p')

            logo.src = marca.image?.optimized;
            nomeMarca.textContent = `Marca: ${marca.name || 'Nome não disponível'}`

            li.appendChild(logo)
            li.appendChild(nomeMarca)
            ul.appendChild(li)
            console.log(marca)
        })
        document.body.appendChild(ul)
    })
    .catch(erro => console.log(erro))
}

const btnMarcas = document.querySelector("#mostrar-marcas")
btnMarcas.addEventListener("click",getMarcas)