import {AxiosInstance, AxiosInstance2} from './axios';

export async function SendOTP() {
  try {
    var res = await AxiosInstance.post('GenerateUserOtp?contact=9582345889');
    console.log(res.data);
  } catch (e) {
    return e;
  }
}
export async function getPokeData(rank) {
  console.log(rank);
  try {
    var Data = [];
    const res = await AxiosInstance2.get('/' + rank + '/');
    //  console.log(res.data);
    Data = res.data;
    return Data;
  } catch (e) {
    return e;
  }
}
