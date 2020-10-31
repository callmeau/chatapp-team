import './JoinGroupModal.css';
import React from 'react'
import { Button, Input, Icon, Modal, Form, Dropdown } from 'semantic-ui-react'
import {Item} from 'react-sidebar-ui'
import { MdGroupAdd } from "react-icons/md"

function JoinGroupModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='tiny'
      trigger={<Item bgColor='black'>
      <div className='menu-bar-icon'>
          <MdGroupAdd/>
      </div>
      <div className='menu-bar-text'>
      Join
      </div>
    </Item>}
    >
      <Modal.Header>Join a Chat Room</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name of Chat Room</label>
            <Input  size='large' icon='group' iconPosition='left' placeholder='Chat room name...' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted onClick={() => setOpen(false)} negative>
          <Icon name='cancel' /> Cancel
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)} positive>
          <Icon name='checkmark' /> Join
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default JoinGroupModal