
function next(n){
document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
document.getElementById('s'+n).classList.add('active');
}

const text=`สุขสันต์วันเกิดนะหมูอุ้ดดด 🎂

วันนี้แกอายุ 18 ปีแล้วนะ

เค้าดีใจมากเลยที่ได้อยู่ในชีวิตแก

ขอบคุณที่เข้ามาเป็นความสุขของเค้า

ตลอด 4 เดือนที่ผ่านมา

แกทำให้ทุกวันธรรมดาของเค้าพิเศษขึ้นมากเลย

ไม่ว่าจะสุข ไม่ว่าจะเหนื่อย

แค่ได้คุยกับแก

เค้าก็รู้สึกดีขึ้นเสมอ

ขอให้ปีที่ 18 ของแกเต็มไปด้วยรอยยิ้ม

ความสุข และสิ่งดี ๆ มากมาย

รักแกนะ หมูอุ้ดดด 🤍🐷`;

let i=0;
function type(){
 if(i<text.length){
  document.getElementById('letter').innerHTML += text.charAt(i);
  i++; setTimeout(type,30);
 }
}
setTimeout(type,500);

function hug(){
document.getElementById('end').innerHTML='🫂 รักแกนะ หมูอุ้ดดด 🤍🐷<br>จากคนที่รักแกมากคนนึง 💌';
}

setInterval(()=>{
 let p=document.createElement('div');
 p.className='petal';
 p.innerHTML='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.animationDuration=(4+Math.random()*4)+'s';
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),8000);
},250);
