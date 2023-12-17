// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState(''); // Added state for password

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPassword(user.password);
    setShowModal(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${selectedUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: updatedName,
          email: updatedEmail,
          password: updatedPassword, // Include password in the request body
        }),
      });

      if (response.ok) {
        console.log('User updated successfully');
        // Fetch the updated user list
        fetchUsers();
        handleCloseModal();
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('User deleted successfully');
        // Fetch the updated user list
        fetchUsers();
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser({});
    setUpdatedName('');
    setUpdatedEmail('');
    setUpdatedPassword('');
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>User List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => handleUpdateClick(user)}
                    >
                      Update
                    </Button>{' '}
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for Update */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formUpdatedName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter updated name"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formUpdatedEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter updated email"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formUpdatedPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter updated password"
                    value={updatedPassword}
                    onChange={(e) => setUpdatedPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleUpdateSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
