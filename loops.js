var order = prompt('what do you want turkish or cappuccino');

while (order !== 'turkish' && order !== 'cappuccino'){
    order = prompt('what do you want turkish or cappuccino');
}

var itemOrder = '';

if (order === 'cappuccino') {
    itemOrder = '<img src="https://www.azquotes.com/picture-quotes/quote-the-curious-paradox-is-that-when-i-accept-myself-just-as-i-am-then-i-can-change-carl-rogers-24-91-90.jpg"/>';
} else if (order === 'turkish') {
    itemOrder = '<img src="https://www.azquotes.com/picture-quotes/quote-the-curious-paradox-is-that-when-i-accept-myself-just-as-i-am-then-i-can-change-carl-rogers-24-91-90.jpg"/>';
}

var noCups = prompt('how many cups do you want?');

var result = '';

for (var i = 0; i < noCups; i++) {
    result = result + itemOrder;
}

document.write(result);

