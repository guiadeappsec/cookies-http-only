
chrome.cookies.getAll({'domain':'cookies-http-only.vercel.app'}, function (cookies) {
    for (var i = 0; i < cookies.length; i++) {

        // add a new row to a table with id cookies for each cookie
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + cookies[i].name + '</td><td>' + cookies[i].value + '</td>';
        document.querySelector('#cookies tbody').appendChild(row);
        

    }
});