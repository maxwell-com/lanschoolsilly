var url = prompt("Silly website(include https://):");
url = encodeURI(url);

const html = '<html><title>Games HAHA LANSCHOOL SUCK IT</title><iframe src="' + url + '" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></html>';
const iframe = document.createElement('iframe');
const blob = new Blob([html], {type: 'text/html'});
iframe.src = window.URL.createObjectURL(blob);
document.body.appendChild(iframe);
window.open(window.URL.createObjectURL(blob));

