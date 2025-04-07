import '../src/styles/style.scss';
import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    const searchedWordContainer = document.getElementById('searchedWord');

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const input = form.querySelector('input');
            const value = input.value;
            searchedWordContainer.textContent = value;
            const modalTrigger = form.querySelector("[data-bs-toggle='modal']"); // Botão dentro do form

            if (modalTrigger) {
                modalTrigger.click();
            }
        });
    });
});
