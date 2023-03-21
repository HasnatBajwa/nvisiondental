import { useState } from "react"
import ClientData from "../../Data/Clientdata/ClientData";
import { db } from '../../../Config/Firebase/Firebase-config';
import { addDoc, collection,getDoc,updateDoc,deleteDoc, doc } from '@firebase/firestore/lite';
const AddClientInput = () => {
    const [ClientId, setClientId] = useState("");
    const [ClientName, setClientName] = useState("")
    const [PracticeName, setPracticeName] = useState("")
    const [Address, setAddress] = useState("")
    const [City, setCity] = useState("")
    const [Country, setCountry] = useState("")
    const [Zipcode, setZipcode] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNo, setPhoneNo] = useState("")
    const [MobileNo, setMobileNo] = useState("")
    const [Pricing, setPricing] = useState("")
    const [Disable, setDisable] = useState(true)






    // Create New Client ID
    const CreateNewClient = () => {
        setDisable(false);
        setClientId(Math.floor(Math.random() * 90000) + 10000);

    }






    // Saving Client Information in Data Base
    const SaveClientInfo = async () => {
if (ClientId !== "") {
    

        try {
            await addDoc(collection(db, "Clients"), {
                id: ClientId,
                clientName: ClientName,
                practiceName: PracticeName,
                address: Address,
                country: Country,
                city: City,
                zipCode: Zipcode,
                email: Email,
                phoneNo: PhoneNo,
                mobileNo: MobileNo,
                pricing: Pricing
            })


        alert("client data saved")

        } catch (error) {
            console.log(error.message);
        }
    }
else{
    alert("Cant Update Data No ID Found")
}
        let clientInfo = {
            id: ClientId,
            clientName: ClientName,
            practiceName: PracticeName,
            address: Address,
            country: Country,
            city: City,
            zipCode: Zipcode,
            email: Email,
            phoneNo: PhoneNo,
            mobileNo: MobileNo,
            pricing: Pricing
        }

        ClientData.push({ ...clientInfo });
        console.log(ClientData);
        setClientId("")
        setAddress("")
        setCity("")
        setClientName("")
        setPracticeName("")
        setPhoneNo("")
        setEmail("")
        setMobileNo("")
        setZipcode("")
        setPricing("")
    }






    // Updating Client Data
    const updatehandler = (data) => {
     console.log(data);
    }


















    return {
        ClientId,
        ClientName,
        PracticeName,
        Address,
        Country,
        City,
        Zipcode,
        Email,
        PhoneNo,
        MobileNo,
        Pricing,
        Disable,
        setClientName,
        setPracticeName,
        setAddress,
        setCity,
        setZipcode,
        setEmail,
        setMobileNo,
        setPhoneNo,
        setPricing,
        setCountry,
        CreateNewClient,
        SaveClientInfo,
        updatehandler,
      

    }
}

export default AddClientInput