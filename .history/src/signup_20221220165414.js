import React,  from 'react'
import{ Form,Button,Card} from 'react-bootstrap'

export default function signup() {
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <From.Control type ="email" ref = {emailRef} Required></From.Control>

                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <From.Control type ="password" ref = {passwordRef} Required></From.Control>

                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <From.Control type ="password" ref = {passwordconfirmRef} Required></From.Control>

                </Form.Group>
                <Button className="w-100" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
    Already have an accound? Log In?
    </div>
 

    </>
  )
}
