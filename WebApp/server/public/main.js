const socket = io();

socket.on('temp', (data) => {
    console.log(data);
    document.getElementById('temperature').innerHTML = `${data} V`
});