const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

if (!data.password) {
  data.password = 'adamtech2024';
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  console.log('Added password to data.json');
} else {
  console.log('Password already exists in data.json');
}
