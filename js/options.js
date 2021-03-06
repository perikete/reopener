$(document).ready(function () {

    var urls = [];

    var sortableUrls = $('tbody').sortable({
        items: '> tr',
        appendTo: 'parent',
        helper: 'clone'
    }).disableSelection();

    sortableUrls.on('sortupdate', function(event, ui){
        var urlRows = $('tbody > tr');

        urls = [];

        $.each(urlRows, function(index, row){
            var url = $(row).children('.url-col').html();
            urls.push(url);
        });

        chrome.storage.sync.clear();

        setUrls(urls);
    });


    chrome.storage.onChanged.addListener(function () {
        $('#url').val('');
    });

    chrome.storage.sync.get('reopener', function (items) {
        if (items && items.reopener) {
            urls = items.reopener;

            $(urls).each(function (index, url) {
                appendNewForm(url, index);
            });
        }
    });

    $('form').on('submit', function () {
        var url = $('#url').val();

        if (!(url.startsWith('http://') || url.startsWith('https://'))) {
            url = 'http://' + url;
        }

        urls.push(url);

        setUrls(urls);
    });

    $('body').on('click', '.delete', function () {
        var index = $(this).data('index');

        if (index > -1) {
            urls.splice(index, 1);
            setUrls(urls);
            $('#idx-' + index).remove();
        }
    });

    function appendNewForm(url, index) {
        var newUrlComponent = $('<tr id="idx-' + index + '"><td class="url-col">' + url
            + '</td><td><button type="button" data-index="' + index
            + '" class="btn btn-danger delete">Delete</button></td></tr>');

        $('#url-container > tbody').append(newUrlComponent);
    }

    function setUrls(urls) {
        chrome.storage.sync.set({'reopener': urls});
    }
});