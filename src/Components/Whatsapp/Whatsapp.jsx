import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Icon from '../../Assets/Icon.png'
const Whatsapp = () => {
    return (
        <>
            <div className="whatsapp-container">
                <FloatingWhatsApp
                    avatar={Icon}
                    phoneNumber='+923004601314'
                    accountName="NVISIONDENTAL"
                    allowEsc
                    allowClickAway
                    notification
                    notificationSound
                    chatMessage='Hi there. How can we help you?'
                />
            </div>
        </>
    )
}

export default Whatsapp