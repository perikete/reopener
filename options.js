$(document).ready(function(){

    var urls = [];

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        appendNewForm($('#url').val());
        $('#url').val('');
    });

    chrome.storage.sync.get("reopener", function(items){
        if (items && items.reopener) {
            urls = items.reopener;

            $(urls).each(function(k, url){
                appendNewForm(url);
            });


        }
    });

    $('.add-btn').on('click', function(){
        var url = $('#url').val();

        urls.push(url);

        chrome.storage.sync.set({ "reopener": urls }, function() {
            console.log('Data is stored in Chrome storage');
        });

    });

    function appendNewForm(url) {
        var newUrlComponent = $('<label for="url">Url:</label>' + url + '<br/>');
        $('form').append(newUrlComponent);
    }
});