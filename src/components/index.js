import React from "react";
import { InputGroup ,Card,Button,Form   } from 'react-bootstrap';
import './index.css';
const axios = require('axios').default;

class Index extends React.Component {
    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod',
        tblData: [],
        window:'create',
        name: '',
        expireDate: '',
        description: '', 
        qty: 0,


     }

    changeWindowCreate=()=> {
        console.log("changeTblData");
        this.setState({window: 'create'})
 }
  changeWindowShow=()=> {
        console.log("changeTblData");
        this.setState({window: 'show'})
 }
 handleName = (text) => {
    this.setState({ password: text })
 }
     componentDidMount() {
        // Runs after the first render() lifecycle
       

            fetch('http://localhost:8080/api/item', {
                method: 'GET'
             })
             .then((response) => response.json())
             .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                   tblData: responseJson
                })
             })
             .catch((error) => {
                console.error(error);
             });

       
      }
     

   render() {
    // if (this.state.window=="show")
    switch(this.state.window){
    case "show":  return (
        
        <div>
             <Button variant="outline-primary" onClick={this.changeWindowCreate}>Create</Button>
        <Card body>  
                <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Prescription Required</th>
                    <th>Expire Date</th>
                    <th>Qty</th>
                </tr>
                {
                this.state.tblData.map(
                    (info)=>{
                        return(
                            <tr>
                                <td>{info.id}</td>
                                <td>{info.name}</td>
                                <td>{info.description}</td>
                                <td>{info.prescriptionRequired}</td>
                                <td>{info.expireDate}</td>
                                <td>{info.qty}</td>
                            </tr>
                        )
                    }
                )}
                </table>
    </Card>

    </div>
      );
      case "create":  return (
        <div>
            <Button variant="outline-primary" onClick={this.changeWindowShow}>Items</Button>
        <Card body>  
           
             <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Qty</InputGroup.Text>
                <Form.Control
                
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Expire Date</InputGroup.Text>
                <Form.Control
              
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Prescription Required</InputGroup.Text>
                <Form.Select aria-label="Default select example">
     
      <option value="NOT_REQUIRED">NOT_REQUIRED</option>
      <option value="REQUIRED">REQUIRED</option>
    </Form.Select>
            </InputGroup>
            <Button variant="primary">Save</Button>

      
    </Card>

    </div>
      );
                }
   }
}
export default Index;