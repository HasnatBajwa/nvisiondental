import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';

const CreateInvoiceInput = () => {
    const [createBill, setcreateBill] = useState("");
    const [invoiceData, setinvoiceData] = useState([]);
    const [clientData, setclientData] = useState(null);
    const [disable, setDisable] = useState(true);

    // Create Bill Number
    const generateBill = () => {
        setcreateBill(Math.floor(Math.random() * 900) + 10000);
        setDisable(false)

    }
    // Add To Invoice
    const addToInvoiceHandler = (item) => {

        setinvoiceData([...invoiceData, item])
        console.log(invoiceData);
    }
    // Print Handler  
    const invoiceRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => invoiceRef.current,
    });
    return {
        createBill,
        setcreateBill,
        invoiceData,
        clientData,
        setclientData,
        addToInvoiceHandler,
        generateBill,
        invoiceRef,
        handlePrint,
        disable

    }
}
export default CreateInvoiceInput