function add() {
  const a = parseFloat(document.getElementById("add1").value)
  const b = parseFloat(document.getElementById("add2").value)
  document.getElementById("addResult").innerText = "Result: " + (a + b)
}

function subtract() {
  const a = parseFloat(document.getElementById("sub1").value)
  const b = parseFloat(document.getElementById("sub2").value)
  document.getElementById("subResult").innerText = "Result: " + (a - b)
}

function multiply() {
  const a = parseFloat(document.getElementById("mult1").value)
  const b = parseFloat(document.getElementById("mult2").value)
  document.getElementById("multResult").innerText = "Result: " + (a * b)
}
