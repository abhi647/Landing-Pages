document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const target=Number(entry.target.dataset.count);let value=0;const timer=setInterval(()=>{value=Math.min(target,value+Math.max(1,Math.ceil(target/28)));entry.target.textContent=value+(target>20?'+':'');if(value>=target)clearInterval(timer)},35);counterObserver.unobserve(entry.target)}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>counterObserver.observe(el));
document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.classList.toggle('mobile-nav')});
document.querySelector('.lead-form').addEventListener('submit',event=>{event.preventDefault();const button=event.currentTarget.querySelector('button');button.innerHTML='Thanks — let’s talk <b>✓</b>';button.disabled=true});
