let codes = [];

function generateCodes() {
    const list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const startTime = getRandomTime();
        const endTime = getRandomTime();
        const totalCodes = getRandomNumber(100000, 999999);
        const gift = getRandomNumber(1, 10);

        const listItem = document.createElement('li');
        listItem.innerText = `${startTime}-${endTime} ${totalCodes} ${gift}`;
        list.appendChild(listItem);

        codes.push(totalCodes);
    }
}

function generateLink() {
    const item = encodeURIComponent(codes.join(','));
    const link = `https://dao3.fun/play/0dfec6ccf47c27bbd7a1?map_name=%E9%A6%99%E8%82%A0%E6%B4%BE%E5%AF%B9pro%E6%9C%8D&map_ID=100012848&from=exp&item=[${item}]`;
    window.prompt("此链接进去就能增加总换码", link);
}

function getRandomTime() {
    const hours = getRandomNumber(0, 23);
    const minutes = getRandomNumber(0, 59);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}