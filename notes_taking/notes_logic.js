// console.log('logic')

shownotes()

let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt')
    let notes = localStorage.getItem("notes")

    if (notes == null) { notesobj = [] }
    else { notesobj = JSON.parse(notes) }

    notesobj.push(addtxt.value)

    // for local storange updating
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addtxt.value = ""
    // console.log(notesobj)


    shownotes()
})





// show note in clint side

function shownotes() {

    let notes = localStorage.getItem("notes")

    if (notes == null) { notesobj = [] }
    else { notesobj = JSON.parse(notes) }




    // this code create dynamic notes
    let html = ""

    notesobj.forEach(function (element, index) {

        html += `
      <div class=" notecards my-3 mx-3 card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete </button>
      </div>
     </div>`

    });




    let noteselm = document.getElementById("notes")

    if (notesobj.length != 0) {
        noteselm.innerHTML = html
    }
    else {
        // when notes is note there then show
        noteselm.innerHTML = `<h2><b>nothing is here</b><h2>`
    }



}

// for notes deleting
function deletenote(index) {
    let notes = localStorage.getItem("notes")

    if (notes == null) { notesobj = [] }
    else { notesobj = JSON.parse(notes) }


    notesobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    shownotes()


}



// for searching of notes
let search = document.getElementById('seartxt')
search.addEventListener("input", function () {

    let inputval = search.value
    let notecard = document.getElementsByClassName('notecards')

    Array.from(notecard).forEach(function (e) {

        let cardtxt = e.getElementsByTagName("p")[0].innerText

        if (cardtxt.includes(inputval)) {

            e.style.display = "block"
        }

        else {
            e.style.display = "none"

        }

    })

    // console.log(inputval)



})





