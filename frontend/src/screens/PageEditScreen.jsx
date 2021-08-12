import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { PAGE_EDIT_RESET } from "../constants/pageConstants"
import { getSinglePage, updatePage } from "../actions/pageActions"

const PageEditScreen = ({ match, history }) => {
  const pageId = match.params.id
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

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
      if (!page.title || page._id !== pageId) {
        dispatch(getSinglePage(pageId))
      } else {
        setTitle(page.title)
        setBody(page.body)
      }
    }
  }, [dispatch, page, pageId, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    const updatedPage = {
      title,
      body,
    }
    dispatch(updatePage(pageId, updatedPage))
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
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
