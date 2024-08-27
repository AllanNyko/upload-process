$(document).ready(function () {
    $('#image-input').change(function (e) {
        const reader = new FileReader();
        reader.onload = function (e) {
            $('#image-preview').attr('src', e.target.result);
            $('#image-preview').removeClass('d-none');
        }
        reader.readAsDataURL(e.target.files[0]);
    });

    $('form').on('submit', function (e) {
        e.preventDefault(); 
        let $loadBar = $('.load-bar');
        let width = 0;
        let interval = setInterval(function () {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 10;  
                $loadBar.css('width', width + '%');
            }
        }, 100); 
    });
});
