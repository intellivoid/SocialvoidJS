export default class Request {
    method: string;
    params?: any;
    notification: boolean;
    id?: string;
    constructor(method: string, params?: any, notification?: boolean);
}
