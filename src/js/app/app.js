window.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('header__heading');
    const form = document.getElementById('form');

    if(title) {
        title.className += title.className ? ' is-active' : 'is-active';
    }

    if(form) {
        form.className += form.className ? ' is-active' : 'is-active';
    }
});
