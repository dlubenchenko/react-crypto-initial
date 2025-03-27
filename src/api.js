import { cryptoAssets } from './data';

export async function fakeFetchCrypto() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'z5f3Lf2okLOv2nRH8eUkELDv/dRUZP+utQQ6CDJ/npg='
        }
    };
    
    try {
        const res = await fetch('https://openapiv1.coinstats.app/coins', options);
        const res_1 = await res.json();
        return res_1;
    } catch (err) {
        return console.error(err);
    }
}

export function fetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 2000);
    });
}