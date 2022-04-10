export class ResponseData {
  code: number;
  message: string;
  data ?: any;

  constructor(code: number, message: string, data?: any){
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
