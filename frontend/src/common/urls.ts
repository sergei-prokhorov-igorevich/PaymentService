const api = 'api/v1/';
const host = 'http://127.0.0.1:81/';
const endpoint = `${host}${api}`;

const orderGuidUrl = (orderGuid: string) => `${endpoint}order/${orderGuid}`;

export { host, orderGuidUrl };
