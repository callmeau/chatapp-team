import './ProfileModal.css';
import React from 'react'
import { Button, Input, Icon, Modal, Form, Label } from 'semantic-ui-react'
import Avatar from 'react-avatar';

const colors = ['red', 'green', 'blue', 'pink', 'lightblue']
function ProfileModal(props) {
  const [open, setOpen] = React.useState(false)
  const color = colors[Math.floor(props.data.name[0] % colors.length)];
  const Interests = props.data.interests.map((x, i)=>(
    <Label as='a'>
      {x}
      <Icon name='close' />
    </Label>
  ))
  
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='tiny'
      trigger={<div className='chat-item-avatar' >
      <Avatar color={colors[Math.floor(color % colors.length)]} name={props.data.name} round="50px" size="90px"/>
      </div>}
    >
      <Modal.Header>User Profile</Modal.Header>
      <Modal.Content>
        <Form>
           <Form.Group widths='equal'>
            <Form.Input fluid label='Name' defaultValue={props.data.name} readOnly />
            <Form.Input fluid label='Age' defaultValue={props.data.age} readOnly />
            <Form.Input fluid label='Nationality' defaultValue={props.data.nationality} readOnly />
          </Form.Group>
          <div className="add-interests">
          <Input type='text' placeholder='Add new interests' readOnly action>
            <input />
            <Button type='submit'>Add</Button>
          </Input>
          </div>
          <Label.Group color='blue'>
          {Interests}
          </Label.Group>
          
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted onClick={() => setOpen(false)} positive>
          <Icon name='checkmark' /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ProfileModal