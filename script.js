(function () {
    var btn = document.querySelector('.burger'), menu = document.getElementById('menu');
    function set(o) { menu.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); btn.setAttribute('aria-label', o ? 'Close menu' : 'Open menu') }
    btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true') });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false) });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(false); btn.focus() } });
    matchMedia('(min-width:64em)').addEventListener('change', function (m) { if (m.matches) set(false) });
    document.getElementById('y').textContent = new Date().getFullYear();
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault(); var f = e.target, s = document.getElementById('status');
        if (!f.checkValidity()) { s.textContent = 'Please fill in your name, a valid email and a message.'; return }
        s.textContent = 'Message ready. Connect this form to your email service to send it.'; f.reset();
    });
})();