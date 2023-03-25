import { useState } from "react"
export const clientBill = [

]
const CreateInvoiceInput = () => {
    const [ClientBill, setClientBill] = useState([]);
    const [DueDate, setDueDate] = useState([]);
   

    // Creating Bill NO
    const createBill = ()=>{
 
        setClientBill(Math.floor(Math.random() * 90000) + 10000);
    }

    const showClientBill = (data) => {
       let billData = {
        clientid:data.clientid,
        clientname:data.clientName,

       }
       clientBill.push({...billData})
    console.log(clientBill);
    }
    return {
        showClientBill,
        ClientBill,
        createBill,
        setDueDate,
        DueDate
    }

}

export default CreateInvoiceInput