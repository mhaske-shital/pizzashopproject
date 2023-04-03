import React from 'react'
import {Col, Container,Image,Row,Table} from "react-bootstrap";
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"
export default function Contact() {
  return (
    <>
    <Container style={{marginTop:"50PX"}}>
    <Row >
    <Col md={6} >
        <h1>Online Pizza Shop</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo voluptates atque nobis magnam tenetur soluta nihil vel sapiente id, modi consequuntur? Numquam dicta reprehenderit consequatur quas dolore totam officiis voluptate amet ab, odit corrupti eaque porro. Vitae at aliquam accusantium, esse odio sunt et, nostrum ipsam, fugit qui corrupti! Nemo ad quod facilis sed expedita maxime cumque, perspiciatis, nobis optio voluptas accusantium asperiores et sequi itaque mollitia, eius est distinctio minima commodi odit neque tempore delectus! Illum iste suscipit molestiae aspernatur temporibus. Labore et mollitia distinctio laborum provident recusandae ipsum placeat! Eius eveniet enim labore sed maxime esse harum repellat amet necessitatibus eos, omnis exercitationem hic ab animi fugiat laboriosam quam excepturi placeat corrupti non a? Eveniet nam aperiam sit eius eligendi, explicabo aspernatur nobis error deleniti saepe aliquid odio veniam accusamus reiciendis molestias consequatur suscipit repellendus illum facere excepturi dolor voluptatem distinctio. Et quo provident voluptatem nihil modi ipsa rerum tenetur nisi quam pariatur labore incidunt sunt error perferendis fugit iste omnis quaerat quasi optio, quod iure eaque! Dicta maxime ex dignissimos consectetur, expedita ipsa, velit vitae fugiat ipsam culpa eum totam neque est iste sit? Optio et commodi reprehenderit magnam vel, dolorum illo eius fugiat hic cumque?</p>
        
        <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th className="bg-warning text-center " colSpan={6}>contact details</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Phone</td>
          <td>+91 9922347984</td>
        </tr>
        
        <tr>
          <td><AiOutlineMail/></td>
          <td>Email</td>
          <td>mhaskeshitu98@gmail.com</td>
        </tr>
       
      </tbody>
    </Table>
    </Col>
    <Col md={6} >
    <Image src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{width:"100%",height:"92%"}}/>
    </Col>
    </Row>
    </Container>
    </>
  )
}
