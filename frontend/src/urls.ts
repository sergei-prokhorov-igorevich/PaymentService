const api = 'api/v1/';
const host = 'http://localhost:81/';
const endpoint = `${host}${api}`;

const orderGuidUrl = (orderGuid: string) => `${endpoint}order/${orderGuid}`;

export { orderGuidUrl };
