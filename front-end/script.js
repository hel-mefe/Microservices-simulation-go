const broker = document.getElementById('broker-clickable')
const auth = document.getElementById('auth-clickable')
const output = document.getElementById('output')
const sent = document.getElementById('sent')
const received = document.getElementById('received')

broker.addEventListener('click', function() {

    const payload = {
        action: "auth",
        auth: {
            email: "admin@example.com",
            password: "verysecret",
        }
    }

    const headers = new Headers() ;
    headers.append("Content-Type", "application/json") ;

    const body = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: headers,
        credentials: 'include',
    }

    fetch('http://localhost:8080/authenticate', body, {mode: 'cors'})
    .then((res) => res.json())
    .then((data) => {
        sent.innerHTML = JSON,stringify(payload, undefined, 4) ;
        received.innerHTML = JSON.stringify(data, undefined, 4) ;

        if (data.error) {
            output.innerHTML += `<br><b>Error: </b> ${data.message}` ;
        } else {
            output.innerHTML += `<br><b>Response from broker service</b>: ${data.message}` ;
        }
    }).catch((error) => {
        console.log('YES ERROR -> err')
        output.innerHTML = "<br><br> Error: " + error ;
    })
})