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

class Aniket_ChangePassword extends React.Component {
  render()
  {
    return (
        <Container fluid className="mt-5">
      <Row>
        <Col md="6" className="offset-md-3 p-2">
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="newpassword"
                id="newpassword"
                placeholder="New Password"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
              />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        </Col>
      </Row>
    </Container>

    )}
}


export default Aniket_ChangePassword;