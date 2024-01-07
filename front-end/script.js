const broker = document.getElementById('broker-clickable')
const auth = document.getElementById('auth-clickable')
const output = document.getElementById('output')
const sent = document.getElementById('sent')
const received = document.getElementById('received')

broker.addEventListener('click', function() {
    const body = {
        method: "POST",
    }

    fetch('http:\/\/localhost:8080', body)
    .then((res) => res.json())
    .then((data) => {
        sent.innerHTML('empty post request');
        received.innerHTML = JSON.stringify(data, undefined, 4) ;

        if (data.error) {
            console.log(data.message)
        } else {
            output.innerHTML += `<br><b>Response from broker service</b>: ${data.message}` ;
        }
    }).catch((error) => {
        output.innerHTML = "<br><br> Error: " + error ;
    })
})