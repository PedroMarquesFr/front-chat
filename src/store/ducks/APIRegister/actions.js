import userAPI from "../../../services/backApi";
import { TasksTypes } from "./types";

const userApi = userAPI();

const requestingData = () => {
  return { type: TasksTypes.REQUESTING_DATA };
};
const receivedData = (result) => {
  return { type: TasksTypes.RECEIVED_DATA, resp: result };
};
const failedRequest = (error) => {
  return { type: TasksTypes.FAILED_REQUEST, resp: error };
};
export default function handleAsyncRegister(email, password, displayName) {
  return async (dispatch) => {
    try {
      dispatch(requestingData());
      const resp = await userApi.register(email, password, displayName);
      console.log(resp);
      return dispatch(receivedData(resp));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
