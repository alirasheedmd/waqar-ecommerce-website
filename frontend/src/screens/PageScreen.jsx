import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSinglePage } from "../actions/pageActions"
import Loader from "../components/Loader"

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
      {loading ? <Loader /> : <h1>{page.title}</h1>}
    </Container>
  )
}

export default PageScreen
