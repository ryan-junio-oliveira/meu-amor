function getFormData() {
    const form = document.getElementById('my-form');
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    window.location.href = 'main.html';
    // Aqui você pode fazer o que quiser com os dados, como enviá-los para um servidor ou processá-los de alguma forma.
}
