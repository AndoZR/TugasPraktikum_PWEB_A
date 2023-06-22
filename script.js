document.querySelector('form').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Waduhdih!',
            text: 'Harap isi inputan yang kosong!',
            })
        event.preventDefault();
    }

    else if (!validateEmail(emailInput.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Waduh!',
            text: 'Harap isi email yang valid!',
        })
        event.preventDefault();
    }

    else if (passwordInput.value.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Waduhduh!',
            text: 'Karakter password kurang dari 8!',
            })
        event.preventDefault();
    }

    else {
        Swal.fire({
            icon: 'success',
            title: 'Naisu!',
            text: 'Anda berhasil login!',
        })
        event.preventDefault();
    }
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}