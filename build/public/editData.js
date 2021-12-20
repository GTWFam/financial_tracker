export async function removeEntry(entry) {
    let month = entry.month
    let from = entry.from
    let amount = entry.amount
    let category = entry.category
    const queryString = new URLSearchParams(window.location.search);
    const userID = queryString.get('userID');
    console.log(userID);
    await $.post(`/removeEntry?id=${userID}&month=${month}&from=${from}&amount=${amount}&category=${category}`,
        res => {
            console.log(res);
        });
    return location.reload();
}

export function openAddForm(month) {
    const queryString = new URLSearchParams(window.location.search);
    const userID = queryString.get('userID');

    $('input#month').val(month);
    $('input#id').val(userID);
    if ($('#addEntryOverlay').hasClass('closed')) {
        $('#addEntryOverlay').css('display', 'block');
        setTimeout(() => {
            $('#addEntryOverlay')
                .removeClass('closed')
                .addClass('opened')
        }, 500)
    } else {
        $('#addEntryOverlay')
            .removeClass('opened')
            .addClass('closed');
        setTimeout(() => {
            $('#addEntryOverlay').css('display', 'none');
        }, 1200)
    }
}