const ESP32_ADDRESS = "http://your-ddns-address.com"; // Replace with your actual public IP or DDNS

function act(u) { 
  fetch(ESP32_ADDRESS + u).then(function(){ setTimeout(refresh, 150); }); 
}
function refresh() {
  fetch(ESP32_ADDRESS + '/data').then(function(r){ return r.json(); }).then(function(d){
    // ... rest of the refresh logicdocument.addEventListener('DOMContentLoaded', function() {
    // Update sensor readings every second
    setInterval(function() {
        document.getElementById('vIn').textContent = Math.random().toFixed(2);
        document.getElementById('vOut').textContent = Math.random().toFixed(2);
        document.getElementById('evA').textContent = Math.random().toFixed(2);
        document.getElementById('evB').textContent = Math.random().toFixed(2);
        document.getElementById('p1').textContent = (Math.random() * 5 + 3).toFixed(1); // Example pressure
        document.getElementById('t1').textContent = (Math.random() * 40 - 20).toFixed(1); // Example temperature
        document.getElementById('p2').textContent = (Math.random() * 5 + 3).toFixed(1);
        document.getElementById('t2').textContent = (Math.random() * 40 - 20).toFixed(1);
        document.getElementById('cnA').textContent = Math.random().toFixed(2);
        document.getElementById('cnB').textContent = Math.random().toFixed(2);
        document.getElementById('flowRate').textContent = Math.random().toFixed(1); // Example flow rate
        document.getElementById('p3').textContent = (Math.random() * 5 + 3).toFixed(1);
        document.getElementById('t3').textContent = (Math.random() * 40 - 20).toFixed(1);
        document.getElementById('p4').textContent = (Math.random() * 5 + 3).toFixed(1);
        document.getElementById('t4').textContent = (Math.random() * 40 - 20).toFixed(1);

        // Update flow dots
        const dot1 = document.getElementById('dot1');
        const dot2 = document.getElementById('dot2');
        const dot3 = document.getElementById('dot3');
        const dot4 = document.getElementById('dot4');
        const dot5 = document.getElementById('dot5');
        const dot6 = document.getElementById('dot6');
        const dot7 = document.getElementById('dot7');
        const dot8 = document.getElementById('dot8');

        dot1.style.left = Math.random() * 130 + 'px';
        dot2.style.left = (Math.random() * 130) - 130 + 'px'; // Reverse direction
        dot3.style.left = Math.random() * 130 + 'px';
        dot4.style.left = (Math.random() * 130) - 130 + 'px'; // Reverse direction
        dot5.style.left = Math.random() * 130 + 'px';
        dot6.style.left = (Math.random() * 130) - 130 + 'px'; // Reverse direction
        dot7.style.left = Math.random() * 130 + 'px';
        dot8.style.left = (Math.random() * 130) - 130 + 'px'; // Reverse direction
    }, 1000);
});
