function updateDashboard() {
    fetch('/data')
        .then(r => r.json())
        .then(d => {
            document.getElementById('vIn').innerText = d.vIn.toFixed(1) + ' C';
            document.getElementById('vOut').innerText = d.vOut.toFixed(1) + ' C';
            document.getElementById('evA').innerText = d.evA.toFixed(1) + ' C';
            document.getElementById('evB').innerText = d.evB.toFixed(1) + ' C';
            document.getElementById('cnA').innerText = d.cnA.toFixed(1) + ' C';
            document.getElementById('cnB').innerText = d.cnB.toFixed(1) + ' C';
            document.getElementById('setpoint').innerText = d.setpoint.toFixed(1);
            document.getElementById('statusTxt').innerText = d.status;

            // Контрола на анимација на цевките ако компресорот работи
            let dot1 = document.getElementById('dot1');
            let dot2 = document.getElementById('dot2');
            if(d.run === 1) {
                dot1.style.display = 'block';
                dot2.style.display = 'block';
            } else {
                dot1.style.display = 'none';
                dot2.style.display = 'none';
            }

            // Рутирање на бои на копчињата
            let tBtn = document.getElementById('toggleBtn');
            if(d.run === 1) { tBtn.innerText = "СТОП"; tBtn.className = "btn btn-stop"; }
            else { tBtn.innerText = "СТАРТ"; tBtn.className = "btn btn-start"; }

            let mBtn = document.getElementById('modeBtn');
            if(d.heat === 1) { mBtn.innerText = "РЕЖИМ: ГРЕЕЊЕ"; mBtn.className = "btn btn-mode-gree"; }
            else { mBtn.innerText = "РЕЖИМ: ЛАДЕЊЕ"; mBtn.className = "btn btn-mode-ladi"; }
        }).catch(e => console.log('Синхронизациска грешка:', e));
}

setInterval(updateDashboard, 1000);
updateDashboard();
