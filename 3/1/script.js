
var submitForm = function (event) {
    if(event) event.preventDefault()
    if(document.getElementsByName('username')[0] && 
    document.getElementsByName('password')[0]
    ){
        var username = document.getElementsByName('username')[0].value
        var password = document.getElementsByName('password')[0].value
        console.log('username' , username)
        console.log('password' , password)
        document.getElementById('descriptionP').innerHTML = 'Submitted'
        // document.getElementById('descriptionP').innerHTML = '<h1>Submitted</h1>'
        document.getElementById('descriptionP').style.color ="green"
        document.getElementById('descriptionP').style.fontSize ="30px"
        document.getElementById('descriptionP').style.border ="1px solid green"
    } else{
        document.getElementById('descriptionP').innerHTML = 'Error'
    }
}
var onBirthdayChange = function (event) {
    console.log('birthday:' , new Date(event.target.value))
}
var onLoadPageToUpdateInformation = function () {
    document.getElementById('information').innerHTML = "Loading..."
    setTimeout(()=>{
        document.getElementById('information').innerHTML = "<div>" + location.host + "</div>"},
        1000)
    // var myInterval = setInterval(()=>{
    //     document.getElementById('information').innerHTML = "<div>" + location.host + "</div>"},
    //     1000)
    //     clearInterval(myInterval);
}
var goToGoogle = function () {
    location.href = "https://www.google.com/"
}
