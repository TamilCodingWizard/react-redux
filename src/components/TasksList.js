import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';

const TasksList = () => {
  const updateTask = () => {
    console.log("update Task");
    setModalShow(true)
  };

  const deleteTask = () => {
    console.log("delete task");
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => updateTask()}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button variant="primary">
                <i className="bi bi-trash3" onClick={() => deleteTask()}></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
