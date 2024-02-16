function getFormData() {
    const form = document.getElementById('my-form');
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    if (data['apelido'] == 'juninho' && data['fullname'] == 'Ryan Junio Lacerda Calisto De Oliveira' && data['email'] == 'ryanjunio073@gmail.com' && data['professora'] == 'Eva' && data['sogra'] == 'Claudineia Procópio Calisto') {
        window.location.href = 'main.html';
        alert('Parabens, voçê acertou!, será redirecionada!');
    } else {
        alert('Você errou!, tente novamente para acessar seu presente!');
    }
    // Aqui você pode fazer o que quiser com os dados, como enviá-los para um servidor ou processá-los de alguma forma.
}