import { ProblemEntity } from "./ProblemEntity";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Platform } from "react-native";

export class ProblemAPI {
  static ip: string = "192.168.1.94";
  static baseUrl: string = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

  static async create(problem: ProblemEntity) {
    // const token: string | undefined | null = useSelector(
    //   (state: RootState) => state.user.token
    // );

    try {
      console.log("sending data", problem);
      const result = await axios.post("http://" + this.ip + ":3003/problem", {
        data: problem,
        headers: { "Content-Type": "multipart/form-data" },
      });
      return result.data;
    } catch (error) {}
  }

  static async fetchAllProblems() {
    try {
      const result = await axios.get(
        "http://" + this.baseUrl + ":3003/problem",
        {
          // headers: { Authorization: `Basic ${token}` },
        }
      );
      console.log(result);
      return result.data;
    } catch (error) {
      console.log("error", error);
    }
  }
}
