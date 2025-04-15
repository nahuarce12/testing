const sqlite3 = require('sqlite3').verbose();

// Basic CRUD operations for a "Client" entity

let clients = []; // In-memory storage for clients
let nextId = 1;

// Create a new client
function createClient(clientData) {
  const client = { id: nextId++, ...clientData };
  clients.push(client);
  return client;
}

// Read (get) a client by ID
function getClient(id) {
  return clients.find(client => client.id === id) || null;
}

// Read (get) all clients
function getAllClients() {
  return clients;
}

// Update a client by ID
function updateClient(id, updatedData) {
  const client = clients.find(client => client.id === id);
  if (!client) return null;
  Object.assign(client, updatedData);
  return client;
}

// Delete a client by ID
function deleteClient(id) {
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return false;
  clients.splice(index, 1);
  return true;
}

// Example usage:
const client1 = createClient({ name: "Alice", email: "alice@example.com" });
const client2 = createClient({ name: "Bob", email: "bob@example.com" });

console.log(getAllClients());
console.log(getClient(client1.id));

updateClient(client2.id, { email: "bob.new@example.com" });
console.log(getClient(client2.id));

deleteClient(client1.id);
console.log(getAllClients());

const db = new sqlite3.Database('./clients.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
    db.run(`
      CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL
      )
    `);
  }
});