import React, {useRef} from 'react'
import{ Form,Button,Card} from 'react-bootstrap'
import {useAuth} from './AuthContext'
import {signup} 


export default function Signup(){
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    const { signup } = useAuth()


    function handleSubmit(e){
        e.preventDefault()
        signup(emailRef.current.value,passwordRef.current.value)
    }
   

 
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type ="email" ref = {emailRef} Required></Form.Control>

                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type ="password" ref = {passwordRef} Required></Form.Control>

                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type ="password" ref = {passwordconfirmRef} Required></Form.Control>

                </Form.Group>
                <Button className="w-100 mt-2" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
    Already have an accound? Log In?
    </div>
 

    </>
  )
}
