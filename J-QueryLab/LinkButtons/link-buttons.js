function attachEvents() {
    $(`.button`).on('click', clicked);

    function clicked() {
        $(`.selected`).removeClass(`selected`);
        $(this).addClass(`selected`);
    }
}