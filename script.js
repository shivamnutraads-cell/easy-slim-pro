function startCountdown(el, seconds){let left=seconds;function tick(){let h=Math.floor(left/3600),m=Math.floor((left%3600)/60),s=left%60;el.textContent=[h,m,s].map(x=>String(x).padStart(2,'0')).join(' : ');if(left>0)left--;else left=seconds;}tick();setInterval(tick,1000)}startCountdown(document.getElementById('topTimer'),600);startCountdown(document.getElementById('offerTimer'),600);
document.getElementById('orderForm').addEventListener('submit',function(e){e.preventDefault();document.getElementById('formMsg').textContent='Thank you. Your order request has been received. Connect this form to your LeadVertex/webhook endpoint before going live.';});
// Smooth reveal for sections
const revealItems=document.querySelectorAll('.section,.split,.story,.offer,.guarantee,.order-section,.faq');
if('IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.animationPlayState='running';io.unobserve(e.target)}}),{threshold:.08});
 revealItems.forEach(el=>{el.style.animationPlayState='paused';io.observe(el)});
}
