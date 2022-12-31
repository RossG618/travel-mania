import {ModalDialog, ModalBody, ModalTitle, ModalHeader } from 'react-bootstrap';
import { accounts } from './accountsArrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export function Messages(props){
    const{messageShow, setMessageShow}=props;
    //
    return(<div className={`z-99 position-fixed messages-div ${messageShow ? 'messshow' : 'unshow'} bg-body shadow`}>
    <h1 className='border-bottom align-items-center'>
    Messages
    <FontAwesomeIcon className='mx-2' icon={faArrowLeft} size="xs" onClick={() => setMessageShow(false)}/>
    </h1>
    <div className='messages'>
       {accounts.map(item => 
      <ModalDialog >
      <ModalHeader closeButton>
      <ModalTitle>
        <h5>

        {item.name}
        </h5>
      </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <p>User:{item.user} Pass:{item.pass}</p>
        <hr className='' />
      </ModalBody>
      {/* <ModalFooter>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </ModalFooter> */}
    </ModalDialog>
    )}
    </div>
  

</div>)
}