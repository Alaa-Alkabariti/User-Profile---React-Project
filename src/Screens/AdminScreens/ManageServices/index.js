import {
  Button,
  ColumnOne,
  ColumnTwo,
  Delete,
  Table,
  Td,
  Th,
  Tr,
} from "../ManageAbout/index.style";
import React, { useState } from "react";
import MainLayout from "../../../Layout";
import { Form, Input, TextField, ServicesList} from "./index.style";

function ManageServices() {
  const [initialServiceList, setInitialServiceList] = useState([]);
  const [serviceList, setServiceList] = useState({
    id: 0,
    ServiceTitle: "",
    ServiceDescription: "",
  });

  function handleChange(event) {
    setServiceList({
      ...serviceList,
      [event.target.name]: event.target.value.trim(),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let currentLength = initialServiceList.length;
    setInitialServiceList([...initialServiceList, {id: currentLength , ServiceTitle: serviceList.ServiceTitle , ServiceDescription: serviceList.ServiceDescription}]);
    setServiceList({ ServiceTitle: "", ServiceDescription: "" });
  }

  function removeService(el) {
      console.log('el' , el.id + 1)
      console.log('initialServiceList' , initialServiceList)
      const currentID = el.id
     setInitialServiceList(initialServiceList.filter((items) => items.id !== currentID)) 
  }

  return (
    <MainLayout>
      <Form>
        <Input
          onChange={handleChange}
          type="text"
          placeholder="Service Title"
          name="ServiceTitle"
          value={serviceList.ServiceTitle}
        />
        <TextField
          onChange={handleChange}
          type="text"
          placeholder="Service Description "
          name="ServiceDescription"
          value={serviceList.ServiceDescription}
        />
        <Button onClick={handleSubmit}>Save</Button>
      </Form>
     <ServicesList>
     <Table>
        <thead>
          <Tr>
            <Th>#</Th>
            <Th>ServiceTitle</Th>
            <Th>ServiceDescription</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <tbody>
          {initialServiceList.map((el) => (
            <Tr key={el.id}>
              <Td>{el.id+1}</Td>
              <Td>{el.ServiceTitle}</Td>
              <Td>{el.ServiceDescription}</Td>
              <Td>
                <Delete onClick={() => removeService(el)}>Delete</Delete>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
     </ServicesList>
    </MainLayout>
  );
}

export default ManageServices;
