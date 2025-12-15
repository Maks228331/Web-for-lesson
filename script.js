
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('nav');
        if (window.scrollY > 50) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    document.querySelectorAll('.btn[data-target]').forEach(btn=>{
     btn.addEventListener('click', (e)=>{
    const id = btn.dataset.target;
    const el = document.getElementById(id);
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});