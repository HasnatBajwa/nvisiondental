import { db } from "../../../Config/Firebase/Firebase-config"
import { getDocs, collection } from "@firebase/firestore/lite"


const clientData = async (db) => {
    try {
        const ClientsData = collection(db, 'Clients');
        const uSnapShot = await getDocs(ClientsData);
        const clientData = uSnapShot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        console.log(clientData);
        ClientData.push(...clientData)
    } catch (error) {
        console.log(error.message);
    }
}
clientData(db);

const ClientData = [

]
export default ClientData;