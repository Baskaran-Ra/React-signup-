import React, {useRef,useState} from 'react'
import{ Form,Button,Card, Alert} from 'react-bootstrap'
import {useAuth} from './AuthContext'



export default function Signup(){
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    const { signup,currentUser } = useAuth()
    const [error,setError] =useState("")
    const [Loading,setLoading] =useState(false)



   async function handleSubmit(e){
        e.preventDefault()

if( passwordRef.current.value !== passwordconfirmRef.current.value){
    return setError('Password do not match ')

}
 try {
    setError('')
    setLoading(true)
    await signup(emailRef.current.value,passwordRef.current.value)
 } catch {
    setError("Failed to create an account")
  }
  setLoading(false)
}

 
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {currentUser && currentUser.pass}
            {error && <Alert variant= "danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
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
                <Button disabled={Loading} className="w-100 mt-2" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
    Already have an accound? Log In?
    </div>
 

    </>
  )
}
