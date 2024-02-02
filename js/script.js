const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', function(e){
    e.preventDefault();

    const url = e.target.action;

    const formData = new FormData(myForm);

    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        Swal.fire({
            title: 'Success!',
            text: 'Email balasan akan dikirim 1x24 jam.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            myForm.reset()
            window.location.reload()
        })
    }).catch((e) => {
        alert('Error occured');
    })
})