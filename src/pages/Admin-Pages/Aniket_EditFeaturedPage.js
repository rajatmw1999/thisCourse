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

class Aniket_EditFeaturedPage extends React.Component {
render(){
    return (
        <Container fluid className="mt-5">
      <Row>
        <Col md="6" className="offset-md-3 p-2">
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="Company"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="url"
                name="imageurl"
                id="imageurl"
                placeholder="Image URL"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="number"
                name="numberofhours"
                id="numberofhours"
                placeholder="Number of Hours"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Description"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="nameofskill"
                id="nameofskill"
                placeholder="Name of Skill"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
            </FormGroup>
            <Button>ADD</Button>
        </Form>
        </Col>
      </Row>
    </Container>

    )}
    }

export default Aniket_EditFeaturedPage;