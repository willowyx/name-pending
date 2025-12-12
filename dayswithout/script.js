document.addEventListener('DOMContentLoaded', function () {
    console.log('started connection');
    document.getElementById('ignorebtn').addEventListener('click', function() {
        considerThink();
        incrementDays(1);
    });
});

function incrementDays(days) {
    var cdays = parseInt(document.getElementById('fvalmain').innerText);
    document.getElementById('fvalmain').innerText = cdays + days;
}

function considerThink() {
    var chance = Math.random();

    if (chance < 0.1) {
        document.getElementById('ignorebtn').setAttribute('disabled', 'true');
        document.getElementById('ignorebtn').classList.add('post');
        document.getElementById('ignorebtn').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;think about it';
        document.getElementById('thinkcap').classList.remove('pre');
    }
}
