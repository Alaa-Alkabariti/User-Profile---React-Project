import { Button, ColumnOne, ColumnTwo } from "../ManageAbout/index.style";
import React, { useState } from "react";
import MainLayout from "../../../Layout";
import { Form, Input, TextField, Header } from "./index.style";

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

    setInitialServiceList([...initialServiceList, serviceList]);
    setServiceList({ ServiceTitle: "", ServiceDescription: "" });
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
      <Header>
        <ColumnOne>Image Source</ColumnOne>
        <ColumnTwo>Skill Name</ColumnTwo>
      </Header>
      {initialServiceList.map((el) => (
        <Header key={el.id + 1}>
          <ColumnOne>{el.ServiceTitle}</ColumnOne>
          <ColumnTwo>{el.ServiceDescription}</ColumnTwo>
        </Header>
      ))}
    </MainLayout>
  );
}

export default ManageServices;
