document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.getElementById('overlay');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');
    const closeBtn = document.getElementById('close-btn');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            const imgSrc = this.getAttribute('src');
            modalImg.setAttribute('src', imgSrc);
            overlay.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
