document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Предотвращаем отправку формы

            var username = document.getElementById('login').value;
            var password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin') {
                window.location.href = 'create-contract.html'; // Переход на страницу create-contract.html
            } else {
                alert('Неверный логин или пароль');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var createContractForm = document.getElementById('create-contract-form');

    if (createContractForm) {
        createContractForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Предотвращаем отправку формы

            // Обработка создания контракта
            alert('Контракт успешно создан!');

            // Перенаправление на страницу "Контракты"
            window.location.href = 'contract.html';
        });
    }
});