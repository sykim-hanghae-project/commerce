import { IoMdClose } from "react-icons/io"
import Modal from "./Modal"
import DaumPostcodeEmbed, { Address } from "react-daum-postcode"

interface OrderAddressModalProps {
  toggle: () => void
  onComplete: (address: Address) => void
}

const OrderAddressModal = ({ toggle, onComplete }: OrderAddressModalProps) => {
  return (
    <Modal className='w-96'>
      <Modal.Header title='주소 입력'>
        <Modal.Close onClose={toggle}>
          <IoMdClose />
        </Modal.Close>
      </Modal.Header>
      <Modal.Body>
        <DaumPostcodeEmbed onComplete={onComplete} onClose={toggle} />
      </Modal.Body>
    </Modal>
  )
}

export default OrderAddressModal