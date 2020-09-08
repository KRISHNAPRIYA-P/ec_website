document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const para = button.nextElementSibling;
        button.classList.toggle('.btn--active');
        if(button.classList.contains('.btn--active'))
        {
            para.style.maxHeight = para.scrollHeight + 'px';
            para.style.padding = 10 +"px";
        }
        else
        {
            para.style.maxHeight = 0;
            para.style.padding =0;
        }
    })
})