import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { PAGE_EDIT_RESET } from "../constants/pageConstants"
import { Editor, EditorState } from "draft-js"

const PageEditScreen = ({ match, history }) => {
  const pageId = match.params.id
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  const dispatch = useDispatch()

  const pageDetail = useSelector((state) => state.pageDetail)
  const { loading, error, page } = pageDetail

  const pageUpdate = useSelector((state) => state.pageUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = pageUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PAGE_EDIT_RESET })
    } else {
      if (!page.title || pageId !== page._id) {
        dispatch(listProductDetails(productId))
      } else {
        setTitle(page.title)
        setBody(product.body)
      }
    }
  }, [dispatch, product, productId, history, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    const updatedPage = {
      title,
      body,
    }
    dispatch(updatePage(updatedPage, pageId))
  }

  return (
    <>
      <Link to="/admin/pages" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Update Page</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlid="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Editor editorState={editorState} onChange={setEditorState} />
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default PageEditScreen
