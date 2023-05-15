import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('PUT to Database');
const db = await openDB("jate", 1);
const tx = db.transaction("jate", "readwrite");
const store = tx.objectStore("jate");
const request = store.put({ value: content, id: 1 });
const results = await request;
console.log("This content has been added to the database:", results);
};

export const getDb = async () => {
  console.log('GET from database');
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const results = await request;
  console.log("All the contents from the database:", results);
  return results.value;
};

initdb();
