const techButtons = document.querySelectorAll('.btn_[data-tech]');
const descriptions = document.querySelectorAll('.description');
const tech_ = document.querySelector('.tech_');

techButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tech = btn.dataset.tech;
        tech_.classList.add('out');

        techButtons.forEach(b => b.classList.remove('active'));

        descriptions.forEach(desc => desc.classList.add('d-none'));

        btn.classList.add('active');

        const activeDescription = document.querySelector(
            `.description[data-tech="${tech}"]`
        );

        if (activeDescription) {
            activeDescription.classList.remove('d-none');
        }
    });
});