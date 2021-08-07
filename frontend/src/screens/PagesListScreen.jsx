import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Table, Row, Col, Container } from "react-bootstrap"
import Loader from "../components/Loader"
import { LinkContainer } from "react-router-bootstrap"
import { getAllPages } from "../actions/pageActions"

const PagesListScreen = ({ history, match }) => {
  const pageList = useSelector((state) => state.pageList)
  const { loading, error, pages } = pageList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPages())
  }, [dispatch])

  return (
    <>
      <Container id="list-pages">
        <Row className="align-items-center">
          <Col>
            <h1>Pages</h1>
          </Col>
          <Col className="text-right">
            <Button variant="secondary">Add Page</Button>
          </Col>
        </Row>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Table bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Created On</th>
                  <th>Upadated On</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page._id}>
                    <td>{page._id}</td>
                    <td>{page.title}</td>
                    <td>{page.createdAt.substring(0, 10)}</td>
                    <td>{page.updatedAt.substring(0, 10)}</td>
                    <td>
                      <LinkContainer to={`/admin/pages/${page._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button size="sm" variant="danger">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  )
}
export default PagesListScreen
