console.log('%c HI', 'color: firebrick')



fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then((responsePojo) => {
    console.log(responsePojo)


let blankLi = document.createElement('li')
let blankImg = document.createElement('img')
 
blankImg.src = responsePojo.message

blankLi.append(blankImg)

})

