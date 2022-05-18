import { Portal } from 'react-portal';

const Modal = ({child}) => {

    return (
        <Portal node={document && document.getElementById("portal")}>
            <div>Hola</div>
        </Portal>
    )
   
}

export default Modal