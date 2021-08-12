import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import Loader from "../components/Loader"
import axios from "axios"
import { PRODUCT_CREATE_RESET } from "../constants/productContants"
import { createProduct } from "../actions/productAction"
import { listProductsCategoryList } from "../actions/productAction"
import "./AddProduct.scss"

const AddProduct = ({ match, history }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [isFeatured, setIsFeatured] = useState(false)
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [uploading, setUploading] = useState("")

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productCreate = useSelector((state) => state.productCreate)
  const { product: createdProduct, success: successCreate } = productCreate

  const categoryList = useSelector((state) => state.productCategoryList)
  const { categories } = categoryList

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    dispatch(listProductsCategoryList())
    if (!userInfo.isAdmin) {
      history.push("/login")
    }
  }, [dispatch, history, userInfo, successCreate, createdProduct])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "q4ihwqxa")
    setUploading(true)

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/magwatt/image/upload",
        formData
      )
      const { secure_url } = data
      setImage(secure_url)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newProduct = {
      name,
      description,
      price,
      brand,
      category,
      isFeatured,
      image,
      numSkus: 0,
    }
    console.log(newProduct)
    dispatch(createProduct(newProduct))
  }

  return (
    <>
      <FormContainer>
        <h1>Create Product</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlid="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlid="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlid="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlid="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option></option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlid="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.File
              id="image-file"
              label="Choose File"
              custom
              onChange={uploadFileHandler}
            ></Form.File>
            {uploading && <Loader />}
          </Form.Group>
          <Form.Check
            type="checkbox"
            id="isFeaturedCheckbox"
            className="checkbox"
            label={`Featured`}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default AddProduct
