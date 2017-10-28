module.exports = (Tinder) => {
    const getMessages = function getMessages() {
        const allMessages = Math.round(document.querySelectorAll("#content > div > span > div > div.H\28 100\25 \29.App__body.Pos\28 r\29.Z\28 0\29.Ov\28 h\29 > div > aside > nav > div > div > div > div.matchListTitle.Py\28 12px\29.Px\28 8px\29.Px\28 24px\29 --ml > span.matchListTitle__badge.D\28 ib\29.C\28 \23 fff\29.Ta\28 c\29.Bgc\28 \24 c-pink\29.Mstart\28 4px\29.Fz\28 \24 xs\29.Px\28 4px\29.H\28 20px\29.Miw\28 20px\29.Lh\28 20px\29.Bdrs\28 20px\29")[0].innerText);
        Tinder.setBadge(allMessages);
    };
    Tinder.loop(getMessages);
};