function showMessage(message) {
    switch (typeof message) {
        case 'number':
            console.log('Hello world');
            break;
        case 'string':
            console.log(message);
            break;
    }
}
showMessage(0);
showMessage('test');
