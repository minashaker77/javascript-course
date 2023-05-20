var title = document.getElementById('titleID');
var desc = document.getElementById('descID');


let onClickAdd = (event) => {
    event.preventDefault()
    console.log(title.value)
    console.log(desc.value)
    title.value = ""
    desc.value = ""
}
