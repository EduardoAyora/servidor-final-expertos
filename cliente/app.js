const socket = io('ws://localhost:3000')

socket.on('message', (data) => {
  document.getElementById('grados').innerHTML = data.grados + '°'
  document.getElementById('direccion').innerHTML = 'Está apuntando hacia el: ' + data.direccion
  const rotationStyle=`transform: rotate(${data.grados - 180}deg);`
  document.getElementById('brujula').style = rotationStyle
})

document.querySelector('button').onclick = () => {
  const text = document.querySelector('input').value
  socket.emit('message', text)
}
