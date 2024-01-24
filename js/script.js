function showForm2() {
    var form1 = document.querySelector('.form-1');
    var form2 = document.querySelector('.form-2');

    form1.style.display = 'none';
    form2.style.display = 'block';
}

const buttons = document.querySelectorAll('.btn-mulai');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const form2 = document.querySelector('.form-2');

        const paragraph = form2.querySelector('.paragraf2').textContent;

        Swal.fire({
            icon: 'info',
            iconColor: '#3C7AC0',
            title: 'Info',
            html: `<p class="paragraf2">${paragraph}</p>`,
            confirmButtonColor: '#3C7AC0',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false
        });
    });
});