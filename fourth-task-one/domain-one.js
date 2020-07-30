
//live-server --port=3001
window.onload = function() {
    
    const iframe = document.getElementsByTagName('iframe')[0];
    const win = iframe.contentWindow;
      

    const obj = {
        name: "Oleg"
     };
     
     win.postMessage(JSON.stringify({key: 'storage', method: "set", data: obj}), "http://127.0.0.1:3002/domain-two.html");
     debugger; 
    
     window.onmessage = function(e) {
        
        console.log(JSON.parse(e.data).name);
    };
    win.postMessage(JSON.stringify({key: 'storage', method: "get"}), "http://127.0.0.1:3002/domain-two.html");

    win.postMessage(JSON.stringify({key: 'storage', method: "remove"}), "http://127.0.0.1:3002/domain-two.html");
};