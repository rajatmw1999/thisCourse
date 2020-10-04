import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";

class Aniket_DeleteRescrapeData extends React.Component {
    render(){
    return (
        <Container fluid className="mt-5">
      <Row>
        <Col md="6" className="offset-md-3 p-2">
          <Form>
            <FormGroup>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Description"
              />
            </FormGroup>
            <Button>DELETE ALL COURSES</Button>
            <Button>RESCRAPE ALL COURSES</Button>
        </Form>
        </Col>
      </Row>
    </Container>

    )}
}


export default Aniket_DeleteRescrapeData;