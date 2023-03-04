import { useState } from 'react'
const UserContactDetails = () => {
    const [fullName, setfullName] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [email, setemail] = useState();
    const [message, setmessage] = useState();

    const userInputHandler = () => {
        alert(`Hi there ${fullName} We've got your query we will contact you shortly`);
        console.log(
            fullName,
            phoneNumber,
            email,
            message,);
        setemail("");
        setfullName("")
        setphoneNumber("")
        setmessage("")
    }
    return {
        fullName,
        setfullName,
        phoneNumber,
        setphoneNumber,
        email,
        setemail,
        message,
        setmessage,
        userInputHandler
    }
}

export default UserContactDetails