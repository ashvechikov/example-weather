import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { store } from ".";

const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";
const appId = "b3f4ce0e0e88bdb8b60830e5aceda196";

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState: {
    weatherData: null,
    isLoading: false,
    error: null,
    zipCode: "101000",
    countryCode: "ru",
  },
  reducers: {
    updateZipCode(state, action) {
      state.zipCode = action.payload;
    },
  },
  extraReducers: (buider) => {
    buider.addCase(getWeather.pending, (state) => {
      state.isLoading = true;
    });
    buider.addCase(getWeather.fulfilled, (state, action) => {
      state.weatherData = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    buider.addCase(getWeather.rejected, (state, action) => {
      state.error = action.payload;
      state.weatherData = null;
      state.isLoading = false;
    });
  },
});

export const getWeather = createAsyncThunk(
  "weatherSlice/getWeather",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(baseApiUrl, {
        params: {
          zip: `${store.getState().weather.zipCode},${
            store.getState().weather.countryCode
          }`,
          appId: appId,
        },
      });

      if (response.status === 200) {
        return response.data.weather[0];
      }
    } catch (e) {
      console.log(e);
      return rejectWithValue((e as AxiosError).message);
    }
  }
);

export const { updateZipCode } = weatherSlice.actions;
export default weatherSlice.reducer;
