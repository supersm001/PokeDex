import {AxiosInstance} from './axios';

export async function SendOTP() {
  try {
    var res = await AxiosInstance.post('GenerateUserOtp?contact=9582345889');
    console.log(res.data);
  } catch (e) {
    return e;
  }
}
