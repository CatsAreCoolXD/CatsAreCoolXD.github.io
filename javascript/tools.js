var text, values, resultt, a, b, c
b = 0;
c = 0;
result = document.getElementById("result");
submit = document.getElementById("submit");
avcalc = document.getElementById("averagecalct");
submit.addEventListener("click", function(){
  text = avcalc.value;
  values = text.split(" ");
  a = values.forEach(addValues)
  b = b/c;
  result.innerHTML = "Result: " + b.toString();
  b = 0.0;
  c = 0;
})
function addValues(currentValue){
  b += Number.parseFloat(currentValue)
  console.log(c);
  c += 1;
  return b;
}
