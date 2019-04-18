var $ = {
    ajax: function(opt) {
        var async = opt.async ? opt.async : true;
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject()
        }
        xhr.open(opt.type || 'get', opt.url, async);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                opt.success && opt.success(JSON.parse(this.responseText))
            } else {
                opt.error && opt.error(this.responseText)
            }
        }
        xhr.send();
    }
}