import { useState } from 'react'
import OrderDetails from '../../Data/OrderDetails/OrderDetails';
import { db } from '../../../Config/Firebase/Firebase-config';
import { addDoc, collection } from '@firebase/firestore/lite';
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
    const [Disable, setDisable] = useState(true);
    const [WorkCategory, setWorkCategory] = useState("");
    const [Product, setProduct] = useState("");
    const [Jaw, setJaw] = useState("");
    const [ShadeValue, setShadeValue] = useState("");
    const [Margin, setMargin] = useState("");
    const [StainValue, setStainValue] = useState("");
    const [Translucency, setTranslucency] = useState("");
    const [PonticDesign, setPonticDesign] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [Appointment, setAppointment] = useState("");
    const [TotalPrice, setTotalPrice] = useState("");
    const [PerUnitPrice, setPerUnitPrice] = useState("");
    const [Enclosed, setEnclosed] = useState("");
    const [Note, setNote] = useState("");



    const CreateInvoice = () => {
        setDisable(false);
        let date = new Date().toLocaleString() + "";
        setOrderDate(date);
        setInvoice(Math.floor(Math.random() * 90000) + 10000);
    }


    const handleCreateOrder = async () => {
        try {
            await addDoc(collection(db, "labslip"), {
                invoice: Invoice,
                client: Client,
                patient: Patient,
                orderdate: OrderDate,
                category: WorkCategory,
                product: Product,
                shade: ShadeValue,
                enclosed: Enclosed,
                duedate: DueDate,
                desc: Note
            })
        } catch (error) {
            console.log(error.message);
        }

        try {
            await addDoc(collection(db, "order-details"), {
                invoice: Invoice,
                client: Client,
                patient: Patient,
                orderdate: OrderDate,
                status: Status,
                dpt: Department,
                delivery: Delivery,
                casetype: CaseType,
                pan: WorkingPan,
                category: WorkCategory,
                product: Product,
                jaw: Jaw,
                shade: ShadeValue,
                margin: Margin,
                stain: StainValue,
                translucency: Translucency,
                poticdesign: PonticDesign,
                duedate: DueDate,
                appointment: Appointment,
                perunitprice: PerUnitPrice,
                totalprice: TotalPrice,
                enclosed: Enclosed,
                desc: Note

            })

        } catch (error) {
            console.log(error.message);
        }
        alert("Order detail fetched");


        let orderData = {
            invoice: Invoice,
            client: Client,
            patient: Patient,
            orderdate: OrderDate,
            status: Status,
            dpt: Department,
            delivery: Delivery,
            casetype: CaseType,
            pan: WorkingPan,
            workcategory: WorkCategory,
            product: Product,
            jaw: Jaw,
            shadevalue: ShadeValue,
            margin: Margin,
            stainvalue: StainValue,
            translucency: Translucency,
            poticdesign: PonticDesign,
            duedate: DueDate,
            appointment: Appointment,
            perunitprice: PerUnitPrice,
            totalprice: TotalPrice,
            enclosed: Enclosed,
            note: Note
        }



        OrderDetails.push({ ...orderData });
        console.log(OrderDetails);
        // setInvoice("");
        // setClient("");
        // setPatient("");
        // setOrderDate("");
        // setStatus("");
        // setDepartment("");
        // setDelivery("");
        // setCaseType(false);
        // setWorkingPan("");
        // setDisable(true);
    }
    return {
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
        setWorkingPan,
        Disable,
        WorkCategory,
        setWorkCategory,
        Product,
        setProduct,
        Jaw,
        setJaw,
        Margin,
        ShadeValue,
        setShadeValue,
        setMargin,
        StainValue,
        setStainValue,
        Translucency,
        setTranslucency,
        PonticDesign,
        setPonticDesign,
        DueDate,
        setDueDate,
        Appointment,
        setAppointment,
        TotalPrice,
        setTotalPrice,
        PerUnitPrice,
        setPerUnitPrice,
        Enclosed,
        setEnclosed,
        Note,
        setNote

    };



}

export default CreateOrderInput


        // });
