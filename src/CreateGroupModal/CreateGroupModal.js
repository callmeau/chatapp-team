import './CreateGroupModal.css';
import _ from 'lodash'
import React from 'react'
import { Button, Input, Icon, Modal, Form, Dropdown, Item as SItem, Checkbox, Segment } from 'semantic-ui-react'
import {Item} from 'react-sidebar-ui'
import Avatar from 'react-avatar';
import { MdAddCircle } from "react-icons/md"

const getOptions = (number) =>
  _.times(number, (index) => ({
    key: index + 2,
    text: `${index + 2}`,
    value: index + 2,
  }))
const colors = ['red', 'green', 'blue', 'pink', 'lightblue']
function CreateGroupModal(props) {
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)
  const [isPublic, setPublic] = React.useState(true)
  const handleRadio = (isPublic) => setPublic(isPublic);
  const contact =
    props.dataSource.map((x, i) => (
      <SItem key={x.id}>
        <Checkbox label={""} inline/>
        <div className="contact-item-avatar">
        <Avatar color={colors[Math.floor(x.name[0] % colors.length)]} name={x.name} round="50px" size="60px"/>
        </div>
        <SItem.Content verticalAlign='middle'>
          <SItem.Header as='a'>{x.name}</SItem.Header>
          <SItem.Description>id: {x.id}</SItem.Description>
        </SItem.Content>
      </SItem>

    ))
  return (
    <Modal
      onClose={() => setFirstOpen(false)}
      onOpen={() => setFirstOpen(true)}
      open={firstOpen}
      size='tiny'
      trigger={<Item bgColor='black'>
      <div className='menu-bar-icon'>
          <MdAddCircle/>
      </div>
      <div className='menu-bar-text'>
      Create
      </div>
    </Item>}
    >
      <Modal.Header>Create a Chat Room</Modal.Header>
      <Modal.Content scrolling>
        <Form>
          <Form.Field>
            <label>Name of New Chat Room</label>
            <Input  size='large' icon='group' iconPosition='left' placeholder='Chat room name...' />
          </Form.Field>
          <Form.Field>
            <label>Room Capacity</label>
            <Dropdown placeholder='Room Capacity' scrolling options={getOptions(99)} selection/>
          </Form.Field>
          <Form.Group inline>
            <label>Privacy</label>
            <Form.Radio
              label='Public'
              isPublic={true}
              checked={isPublic === true}
              onChange={(e) => handleRadio(true, e)}
            />
            <Form.Radio
              label='Private'
              isPublic={false}
              checked={isPublic === false}
              onChange={(e) => handleRadio(false, e)}
            />
         </Form.Group>
            <label>Choose Member</label>
            <SItem.Group divided>
            {contact}
            </SItem.Group>
          
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted onClick={() => setFirstOpen(false)} negative>
          <Icon name='cancel' /> Cancel
        </Button>
        <Button color='green' inverted onClick={() => setFirstOpen(false)} positive>
          <Icon name='checkmark' /> Create
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CreateGroupModal
