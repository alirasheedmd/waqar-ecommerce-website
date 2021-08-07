import Axios from "axios"
import {
  PAGE_LIST_FAIL,
  PAGE_LIST_REQUEST,
  PAGE_LIST_SUCCESS,
} from "../constants/pageConstants"

export const getAllPages = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PAGE_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await Axios.get(`/api/pages`, config)
    dispatch({
      type: PAGE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
