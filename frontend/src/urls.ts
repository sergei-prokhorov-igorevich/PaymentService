const api = 'api/v1/';
const host = 'http://localhost:81/';
const endpoint = `${host}${api}`;

const getOrderGuidUrl = (orderGuid: string) => `${endpoint}order/${orderGuid}`;
const payOrderUrl = (orderGuid: string) => `${endpoint}pay/${orderGuid}`;

export { getOrderGuidUrl, payOrderUrl };
