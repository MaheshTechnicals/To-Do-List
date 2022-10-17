let input = document.querySelector("input")
let addnote = document.getElementById("addnote")
let save = document.getElementById("save")


addnote.addEventListener("click", () => {

  inputVal = input.value

  if (inputVal.trim() != 0) {
    input.style.border = "none"
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

  else {
    input.style.border = "2px solid red"
  }


  show()
  removeAll()
  input.value = ""
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
            <td onClick="edit(${index})"><i class="fa-solid fa-pen-to-square"></i></td>
            <td onClick="del(${index})"><i class="fa-solid fa-trash"></i></td>
          </tr>`

    table.innerHTML = insert

  })



}

show()


// Edit function.

let edit = (index) => {
  let saveindex = index
  let get = localStorage.getItem(JSON.parse(1))

  data = JSON.parse(get)

  input.value = data[index]

  addnote.style.display = "none"
  save.style.display = "block"





  save.addEventListener("click", () => {

    let get = localStorage.getItem(JSON.parse(1))

    data = JSON.parse(get)

    data[saveindex] = input.value
    save.style.display = "none"
    addnote.style.display = "block"
    input.value = ""
    localStorage.setItem(1, JSON.stringify(data))

    show()

    location.reload()


  })






}






// Delete function

let del = (index) => {
  let get = localStorage.getItem(JSON.parse(1))
  data = JSON.parse(get)

  data.splice(index, 1)

  localStorage.setItem(1, JSON.stringify(data))

  location.reload()



}




// delete all check function

let removeAll = () => {
  if (data == "") {

  }

  else {
    let removeAllBtn = document.getElementById("removeAll")

    removeAllBtn.style.display = "block"

    removeAllBtn.addEventListener("click", () => {

      let get = localStorage.getItem(JSON.parse(1))
      data = JSON.parse(get)

      data = []

      localStorage.setItem(1, JSON.stringify(data))

      location.reload()

    })




  }

}


removeAll()