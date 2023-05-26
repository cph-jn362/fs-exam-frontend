import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "./UserAPI";
import { UserEntity } from "./UserEntity";
import { BoardmemberEntity } from "./BoardmemberEntity";
import * as SecureStore from "expo-secure-store";
import { TenantEntity } from "./TenantEntity";


export const signup = createAsyncThunk(
  "auth/signup",
  async (user: UserEntity, thunkAPI) => {
    const response = await UserAPI.signup(user);
    return response;
  }
);

export const signupTenant = createAsyncThunk(
  "auth/signup-tenant",
  async (tenant: TenantEntity, thunkAPI) => {
    const response = await UserAPI.signupTenant(tenant);
    return response;
  }
);

export const signupBoardmember = createAsyncThunk(
  "auth/signup-boardmember",
  async (boardmember: BoardmemberEntity, thunkAPI) => {
    const response = await UserAPI.signupBoardmember(boardmember);
    return response;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: UserEntity, thunkAPI) => {
    const response = await UserAPI.login(user);

    console.log(response.access_token);

    SecureStore.setItemAsync("token", response.access_token);


    return response;
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    SecureStore.deleteItemAsync("token");
    return
  }
)


interface UserState {
  token: string | undefined | null;
  error: string | undefined;
}

const initialState = {
  token: undefined,
  error: undefined,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("running signup fulfilled");
      state.error = undefined;
      if (action.payload.id != undefined) {
        state.error = "Signup | success";
      }
    });
    builder.addCase(signupTenant.fulfilled, (state, action) => {
      console.log("running signup tenant fulfilled");
      state.error = undefined;
      if (action.payload.id != undefined) {
        state.error = "Signup | success";
      }
    });
    builder.addCase(signupBoardmember.fulfilled, (state, action) => {
      console.log("running signup boardmember fulfilled");
      state.error = undefined;
      if (action.payload.id != undefined) {
        state.error = "Signup | success";
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("running login fulfilled");
      state.error = undefined;
      state.token = action.payload?.access_token;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      console.log("running logout fulfilled");
      state.token = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Invalid login";
        state.token = undefined;
      }
      console.log("error in slice", action.error);
    });

  },
});

export const { updateToken } = userSlice.actions;

export default userSlice.reducer;
