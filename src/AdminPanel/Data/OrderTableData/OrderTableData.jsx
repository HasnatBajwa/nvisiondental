import { db } from "../../../Config/Firebase/Firebase-config"
import { getDocs, collection } from "@firebase/firestore/lite"




    const orderData = async (db) => {
        try {
            const OrderTableData = collection(db, 'order-details');
            const uSnapShot = await getDocs(OrderTableData);
            const orderData = uSnapShot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            console.log(orderData);
            OrderData.push(...orderData)
        } catch (error) {
            console.log(error.message);
        }
    }
   orderData(db);


const OrderData = [

]

export default OrderData