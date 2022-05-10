mt1 = document.getElementById("module1")
mt2 = document.getElementById("module2")
mt3 = document.getElementById("module3")
mt4 = document.getElementById("module4")
mt5 = document.getElementById("module5")

mc1 = document.getElementById("mc1")
mc2 = document.getElementById("mc2")
mc3 = document.getElementById("mc3")
mc4 = document.getElementById("mc4")
mc5 = document.getElementById("mc5")

mc1.onclick = function(){
  mt1.innerHTML = "1. CoderClass-Omgeving-0"
  mt2.innerHTML = "2. Blokjes-programmeren-0"
  mt3.innerHTML = "3. Python-0"
  mt4.innerHTML = "4. HTML-CSS-0"
}
mc2.onclick = function(){
  mt1.innerHTML = "1. Python-1A"
  mt2.innerHTML = "2. Blender-0"
  mt3.innerHTML = "3. Embedded-0"
  mt4.innerHTML = "4. Minecraft-in-python-0"
}
mc3.onclick = function(){
  mt1.innerHTML = "1. HTML-CSS-1"
  mt2.innerHTML = "2. Datarepresentatie-0"
  mt3.innerHTML = "3. Python-1B"
  mt4.innerHTML = "4. Python-games-0"
}
mc4.onclick = function(){
  mt1.innerHTML = "1. Linux-0"
  mt2.innerHTML = "2. Javascript-voor-web-0"
  mt3.innerHTML = "3. Python-2"
  mt4.innerHTML = "4. Ruby-0"
}
mc5.onclick = function(){
  mt1.innerHTML = "Nog niks ( ͡° ͜ʖ ͡°)"
  mt2.innerHTML = ""
  mt3.innerHTML = ""
  mt4.innerHTML = ""
}
