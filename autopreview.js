let links = document.getElementsByTagName('a');
for (var i = 0, l = links.length; i < l; i++) {
    let current;
    current = links[i].href;
    if (current.includes('\?forcedownload=1')) {
        current = current.replace('?forcedownload=1', '?forcedownload=0');
        console.log(current);
        links[i].href = current;
    }
}