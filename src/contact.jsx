import { ModalDialog, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import './contact.css'
//
export function Contact(props){
    const {contact, setContact} = props
    return(
        <div className={`z-99 position-sticky bg-body mx-auto p-2 border ${contact ? 'contact-open' : 'contact-close'}` }>
            <ModalDialog>
                <ModalHeader className="border-bottom" closeButton onClick={()=>setContact(false)}>
                    <ModalTitle>
                       <h3>Contact us</h3> 
                    </ModalTitle> 
                    </ModalHeader>
                    <ModalBody>
                        <h4>Available 7 days a week from 7am to 7pm</h4>
                        <p>Call us 07740211442</p>
                        <p>Email us @ iamlightning.co.uk</p>
                        <p>or Chat with us now</p>
                    </ModalBody>
               
            </ModalDialog>
        </div>
    )
}
export function Locations(props){
    const {locations, setLocations} = props
    return(
        <div className={`z-99 position-sticky bg-body mx-auto p-2 border ${locations ? 'contact-open' : 'contact-close'}` }>
            <ModalDialog>
                <ModalHeader className="border-bottom" closeButton onClick={()=>setLocations(false)}>
                    <ModalTitle>
                       <h3>Locations</h3> 
                    </ModalTitle> 
                    </ModalHeader>
                    <ModalBody>
                        <h4>Come in for whatever</h4>
                        <p className="m-0">Fort lauderdale</p>
                        <p>Mississipi, USA</p>
                    </ModalBody>
               
            </ModalDialog>
        </div>
    )
}
export function OpenTimes(props){
    const {openTimes, setOpenTimes} = props
    return(
        <div className={`z-99 position-sticky bg-body mx-auto p-2 border ${openTimes ? 'contact-open' : 'contact-close'}` }>
            <ModalDialog>
                <ModalHeader className="border-bottom" closeButton onClick={()=>setOpenTimes(false)}>
                    <ModalTitle>
                       <h3>Opentimes</h3> 
                    </ModalTitle> 
                    </ModalHeader>
                    <ModalBody>
                        <h4>Monday to Friday</h4>
                        <p>Open 8:30am to 8pm</p>
                        <h4>Saturday to Sunday</h4>
                        <p>Open 9am to 5pm</p>
                    </ModalBody>
               
            </ModalDialog>
        </div>
    )
}