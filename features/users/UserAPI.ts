import { Platform } from "react-native";
import { UserEntity } from "./UserEntity";
import { TenantEntity } from "./TenantEntity";
import { BoardmemberEntity } from "./BoardmemberEntity";
import axios from "axios";

export class UserAPI {
  //static ip: string = "192.168.1.94";
  static baseUrl: string = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

  static async signup(user: UserEntity) {
    try {
      const result = await axios.post(
        "http://" + this.baseUrl + ":3003/auth/signup",
        user
      );
      console.log("back from server", result.data);

      return result.data;
    } catch (error) {}
  }


  static async signupTenant(tenant: TenantEntity) {
    try {
      const result = await axios.post(
        "http://" + this.baseUrl + ":3003/auth/signup-tenant",
        tenant
      );
      console.log("back from server", result.data);

      return result.data;
    } catch (error) {}
  }

  static async signupBoardmember(boardmember: BoardmemberEntity){
    try {
        const result = await axios.post(
          "http://" + this.baseUrl + ":3003/auth/signup-boardmember",
          boardmember
        );
        console.log("back from server", result.data);
  
        return result.data;
      } catch (error) {}
    }   

  static async login(user: UserEntity) {
    try {
      const result = await axios.post(
        "http://" + this.baseUrl + ":3003/auth/login",
        user
      );

      return result.data;
    } catch (error) {}
  }
}
