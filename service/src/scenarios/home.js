import { sleep } from 'k6';
import http from 'k6/http';
import LoadTest from '../models/loadTest.js';

export default function homePage(baseUrl, token) {
  let response;

  group('ongoing', function () {
    response = http.get(`${baseUrl}/debt/ongoing`, {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    });

    response = http.get(`${baseUrl}/api/credit/api/v1/web/wallet/credit/homepage`, {
      headers: {
        'app-version': 'v3.7.2',
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'x-parent-app': 'snappSuperAppPWA',
        dpr: '1',
        locale: 'fa-IR',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'viewport-width': '993',
      },
    });

    response = http.get(`${baseUrl}/api/credit/api/v1/web/wallet/credit/homepage/debtDetails`, {
      headers: {
        'app-version': 'v3.7.2',
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'x-parent-app': 'snappSuperAppPWA',
        dpr: '1',
        locale: 'fa-IR',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'viewport-width': '993',
      },
    });
  });

  sleep(1);
}
