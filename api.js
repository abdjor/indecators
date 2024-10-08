// api.js
const apiKey = 'f2e2b76a-3a5a-4a73-8ace-9a2228d6fc98
const baseURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

// دالة لتحميل بيانات العملة
async function fetchCryptoData(cryptoSymbol) {
    try {
        const response = await fetch(`${baseURL}?symbol=${cryptoSymbol}&CMC_PRO_API_KEY=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
