
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.storage.sync.get("reopener", function(items){

        var urls = items.reopener;

        for (var i = 0; i < urls.length; i++) {
            chrome.tabs.create({ url: urls[i] });
        }

        alert(items.reopener.length);
    });

});