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
  console.log('put to database has been implemented');
const db = await initdb();
const tx = db.transaction("jate", "readwrite");
const store = tx.objectStore("jate");
await store.put({ value: content, id: 1 });
await tx.done;
console.log("This content has been added to the database:", content);
};

export const getDb = async () => {
  console.log('get from database has been implemented');
  const db = await initdb();
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const content = await store.getAll();
  await tx.done;
  console.log("All the contents from the database:", content);
  return content;
};

initdb();
