//live-server --port=3002

document.domain = '127.0.0.1';
window.onmessage = function(e) {
    
    const payload = JSON.parse(e.data);
    
    switch(payload.method) {
        
        case 'set':
            localStorage.setItem(payload.key, JSON.stringify(payload.data));
            console.log('written');
            break;

        case 'get':
            var parent = window.parent;
            var data = localStorage.getItem(payload.key);
            console.log(data);
            parent.postMessage(data, "*");
            break;

        case 'remove':
            localStorage.removeItem(payload.key);
            console.log('removed');
            break;
    }
};