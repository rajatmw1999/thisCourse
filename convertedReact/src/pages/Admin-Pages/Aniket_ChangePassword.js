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

const Aniket_ChangePassword = () => {
    <div>
        <h1>UPDATE YOUR PASSWORD</h1>
    </div>
    return (
        <Container fluid className="mt-5">
      <Row>
        <Col md="6" className="offset-md-3 p-2">
          <Form onSubmit={handleSubmit}>
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

    )


export default Aniket_ChangePassword;