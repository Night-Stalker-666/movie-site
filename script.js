$(document).ready(function () {
    // Toggle Dark/Light Mode
    $('#toggle-mode').click(function () {
        $('body').toggleClass('light-mode');
        $(this).text($(this).text() === '🌙' ? '☀️' : '🌙');
    });

    // Handle Watch Now Button Click
    $('#watch-now').click(function () {
        var imdbId = $('#imdb-id').val().trim();
        if (imdbId) {
            var iframeSrc = `https://autoembed.co/movie/imdb/${imdbId}`;
            var iframe = `<iframe src="${iframeSrc}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
            $('#movie-container').html(iframe);
        } else {
            alert('Please enter a valid IMDb Movie ID.');
        }
    });
});
