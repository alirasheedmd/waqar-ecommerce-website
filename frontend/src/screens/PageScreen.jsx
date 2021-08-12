import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSinglePage } from "../actions/pageActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

const PageScreen = ({ match }) => {
  const slug = match.params.slug

  const pageDetail = useSelector((state) => state.pageDetail)
  const { loading, error, page } = pageDetail

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSinglePage(slug))
  }, [dispatch])

  return (
    <Container className="full-height">
      {error && <Message variant="danger">{error}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>{page.title}</h1>
          <p>{page.body}</p>
        </>
      )}
    </Container>
  )
}

export default PageScreen
