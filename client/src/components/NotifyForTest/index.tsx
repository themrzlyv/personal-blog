import React from 'react'
import Modal from '../Modal'

const NotifyForTest = () => {
    const [show, setShow] = React.useState(true);
  return (
    <Modal show={show} modalStyles={{ maxHeight: 150}} onClose={() => setShow((prevState) => !prevState)} innerClose>
        <div className='flex flex-col items-center'>
            <h1 className='text-lg font-semibold'>Pay Attention Please!</h1>
            <p className='text-red-500'>This is Beta Version!!!</p>
        </div>
    </Modal>
  )
}

export default NotifyForTest