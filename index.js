
function sumbitData(){
    
}

const configObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify (sumbitData)
}

fetch("http://localhost:3000/users", configObject)
    .then((resp)=> resp.json())
    .then ((dogData)=> console.log(dogData));


