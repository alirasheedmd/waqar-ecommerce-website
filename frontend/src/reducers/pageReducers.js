import {
  PAGE_DETAIL_FAIL,
  PAGE_DETAIL_REQUEST,
  PAGE_DETAIL_SUCCESS,
  PAGE_EDIT_FAIL,
  PAGE_EDIT_REQUEST,
  PAGE_EDIT_RESET,
  PAGE_EDIT_SUCCESS,
  PAGE_LIST_FAIL,
  PAGE_LIST_REQUEST,
  PAGE_LIST_SUCCESS,
} from "../constants/pageConstants"

export const pageListReducer = (state = { pages: [] }, action) => {
  switch (action.type) {
    case PAGE_LIST_REQUEST:
      return { loading: true }
    case PAGE_LIST_SUCCESS:
      return { loading: false, pages: action.payload } // this will fetch the payload value from the pageAction.js file.
    case PAGE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const pageDetailReducer = (state = { page: {} }, action) => {
  switch (action.type) {
    case PAGE_DETAIL_REQUEST:
      return { loading: true, ...state }
    case PAGE_DETAIL_SUCCESS:
      return { loading: false, page: action.payload } // this will fetch the payload value from the pageAction.js file.
    case PAGE_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const pageUpdateReducer = (state = { page: {} }, action) => {
  switch (action.type) {
    case PAGE_EDIT_REQUEST:
      return { loading: true }
    case PAGE_EDIT_SUCCESS:
      return { loading: false, page: action.payload, success: true } // this will fetch the payload value from the pageAction.js file.
    case PAGE_EDIT_FAIL:
      return { loading: false, error: action.payload, success: false }
    case PAGE_EDIT_RESET:
      return {}
    default:
      return state
  }
}
