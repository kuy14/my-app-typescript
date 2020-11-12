import axios from "axios";
import { CreateDataTestSuccessResponse, DataTestModel } from "./models";

export default class DataTestApi {
    private static endpoint = "http://sandbox.potalava.com:9095/api/UOM";

    static getDataTest(token: string) {
        return axios.get<any>(this.endpoint + "/GetList", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.data);
    }
    static createDataTest(token: string, createUOM: DataTestModel) {
        return axios.post<CreateDataTestSuccessResponse>(this.endpoint + "/create", createUOM, {
            headers : {
              Authorization: `Bearer + ${token}`,
            }
             
          }).then((res) => res.data);
      }
}