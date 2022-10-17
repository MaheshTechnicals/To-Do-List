let input = document.querySelector("input")
let addnote = document.getElementById("addnote")


addnote.addEventListener("click", () => {

  inputVal = input.value

  if (inputVal.trim() != 0) {
    input.style.border="none"
    let get = localStorage.getItem(JSON.parse(1))

    if (get == null) {
      data = []

    }

    else {
      data = JSON.parse(get)


    }
    data.push(inputVal)
    let set = localStorage.setItem(1, JSON.stringify(data))



  }

else{
  input.style.border="2px solid red"
} 


  show()

})



let show = () => {

  inputVal = input.value

  let get = localStorage.getItem(JSON.parse(1))

  if (get == null) {
    data = []

  }

  else {
    data = JSON.parse(get)


  }

  let insert = ""

  data.forEach((item, index) => {
    let table = document.getElementById("table")

    insert += `<tr>
            <td>${index+1}</td>
            <td>${item}</td>
            <td><i class="fa-solid fa-pen-to-square"></i></td>
            <td><i class="fa-solid fa-trash"></i></td>
          </tr>`

    table.innerHTML = insert
  })



}

show()