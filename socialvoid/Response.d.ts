export default class Response {
    data: any;
    id: number;
    success: boolean;
    error?: {
        code: number;
        message: string;
    };
    constructor(data: any);
    unwrap(): any;
}
