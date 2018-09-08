switchView = function(viewType) {
    if (viewType == 'image') {
        document.getElementById('image_view').style.display = "contents";
        document.getElementById("text_view").style.display = "none";
    } else if (viewType == 'text') {
        document.getElementById('image_view').style.display = "none";
        document.getElementById("text_view").style.display = "contents";
    }
}