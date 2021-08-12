import Axios from "axios"
import {
  PAGE_DETAIL_FAIL,
  PAGE_DETAIL_REQUEST,
  PAGE_DETAIL_SUCCESS,
  PAGE_EDIT_FAIL,
  PAGE_EDIT_REQUEST,
  PAGE_EDIT_SUCCESS,
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

export const getSinglePage = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: PAGE_DETAIL_REQUEST,
    })

    const { data } = await Axios.get(`/api/pages/${slug}`)
    dispatch({
      type: PAGE_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PAGE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const editSinglePage = (id, page) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PAGE_EDIT_REQUEST,
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

    const { data } = await Axios.post(`/api/pages/${id}`, page, config)
    data &&
      dispatch({
        type: PAGE_EDIT_SUCCESS,
        payload: data,
      })
  } catch (error) {
    dispatch({
      type: PAGE_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
