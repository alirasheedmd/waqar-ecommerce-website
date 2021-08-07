import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productCategoryReducer,
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productFeaturedReducer,
  productListReducer,
  productNewReducer,
  productReviewCreateReducer,
  productTopReducer,
  productUpdateReducer,
} from "./reducers/productReducers"
import { cartReducer } from "./reducers/cartReducers"
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers"
import {
  listOrdersReducer,
  myOrdersReducer,
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailReducer,
  orderPayReducer,
} from "./reducers/orderReducers"
import { pageDetailReducer, pageListReducer } from "./reducers/pageReducers"

const reducer = combineReducers({
  productCreate: productCreateReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productReviewCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  productTopList: productTopReducer,
  productFeaturedList: productFeaturedReducer,
  productNewList: productNewReducer,
  productCategoryList: productCategoryReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailReducer,
  orderList: listOrdersReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  myOrders: myOrdersReducer,
  usersList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  pageList: pageListReducer,
  pageDetail: pageDetailReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const UserInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {}

const paymentMethodfromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodfromStorage,
  },
  userLogin: { userInfo: UserInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
