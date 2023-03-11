import { useState } from 'react'

const CreateOrderInput = () => {

    const [Invoice, setInvoice] = useState("");
    const [Client, setClient] = useState("");
    const [Patient, setPatient] = useState("");
    const [OrderDate, setOrderDate] = useState("");
    const [Status, setStatus] = useState("");
    const [Department, setDepartment] = useState("");
    const [Delivery, setDelivery] = useState("");
    const [CaseType, setCaseType] = useState("");
    const [WorkingPan, setWorkingPan] = useState("");

    const CreateInvoice = () => {
        setInvoice(Math.floor(Math.random() * 90000) + 10000);
    }
    const handleCreateOrder = () => {


        alert("Order detail fetched");
        console.log(
            Invoice,
            Client,
            Patient,
            OrderDate,
            Status,
            Department,
            Delivery,
            CaseType,
            WorkingPan,
        );
    }
    return{
        Invoice,
            Client,
            Patient,
            OrderDate,
            Status,
            Department,
            Delivery,
            CaseType,
            setClient,
            setPatient,
            setOrderDate,
            setStatus,
            setDepartment,
            setDelivery,
            setCaseType,
            handleCreateOrder,
            CreateInvoice,
            WorkingPan, 
            setWorkingPan

    };



}

export default CreateOrderInput