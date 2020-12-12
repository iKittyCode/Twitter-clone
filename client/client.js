var button = document.getElementById('submiter')
var clientname;
var message;
button.onclick = async function () {
    clientname = prompt("What's your name")
    message = prompt("What's your message")
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            clientname,
            message
        })
    })
    var api = await fetch('/api')
    var json = await api.json()
    console.log(json)
    for (var i = 0; i < json.length; i++) {
    var root = document.createElement('div')
    var thename = document.createElement('div')
    var themessage = document.createElement('div')
    thename.textContent = json[i].clientname + ':'
    themessage.textContent = json[i].message
    root.append(thename, themessage)
    document.body.append(root)
    }
}
window.onload = async function() {
    var api = await fetch('/api')
    var json = await api.json()
    console.log(json)
    for (var i = 0; i < json.length; i++) {
    var root = document.createElement('div')
    var thename = document.createElement('div')
    var themessage = document.createElement('div')
    thename.textContent = json[i].clientname + ':'
    themessage.textContent = json[i].message
    root.append(thename, themessage)
    document.body.append(root)
}
}