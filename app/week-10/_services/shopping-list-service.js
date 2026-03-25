import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";



async function getItems(userId) 
{
  const items = [];

  try 
  {
    const colRef = collection(db, 'users', userId, 'items');
    
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => 
    {
      items.push({id: doc.id, ...doc.data()});
    });

    return items;
  } 
  catch (error) 
  {
    console.error("Error fetching user items: ", error);
    throw error; 
  }
}

async function addItem(userId, item) 
{
  try
  {
    const colRef = collection(db, 'users', userId, 'items');

    const docRef = await addDoc(colRef, item);

    return docRef.id;
  } 
  catch (error) 
  {
    console.error("Error adding item: ", error);
    throw error;
  }
}