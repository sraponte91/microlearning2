export default function () {
    if (process.client) {
        document
            .getElementById('navbarSupportedContent')
            .classList.add('menu-close-after-cl')
        document.getElementById('navbarSupportedContent').classList.remove('show')
        document.body.classList.remove('overflow-hidden')
    }
    return Promise.resolve(true);
}