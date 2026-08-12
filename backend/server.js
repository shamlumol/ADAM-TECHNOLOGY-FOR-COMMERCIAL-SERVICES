const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

app.use('/uploads', express.static(UPLOADS_DIR));

const DATA_FILE = path.join(__dirname, 'data.json');

// Initialize data.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  const initialData = {
    password: 'adamtech2024',
    cars: [
      { id: 1, name: "Toyota Fortuner", img: "/fortuner.png", category: "Premium SUV", delay: 100 },
      { id: 2, name: "Toyota Land Cruiser", img: "/land_cruiser.png", category: "Full-Size SUV", delay: 200 },
      { id: 3, name: "GMC Yukon Denali", img: "/yukon.png", category: "Luxury SUV", delay: 300 },
      { id: 4, name: "Chevrolet Tahoe Z71", img: "/tahoe.png", category: "Premium SUV", delay: 400 }
    ]
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, uuidv4() + ext);
  }
});
const upload = multer({ storage: storage });

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  const data = readData();
  if (password === data.password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

app.post('/api/password', (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const data = readData();
  if (currentPassword === data.password) {
    data.password = newPassword;
    writeData(data);
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid current password' });
  }
});

app.get('/api/cars', (req, res) => {
  const data = readData();
  res.json(data.cars);
});

app.post('/api/cars', upload.single('image'), (req, res) => {
  const { name, category } = req.body;
  const data = readData();
  
  const newCar = {
    id: uuidv4(),
    name,
    category,
    img: req.file ? `/uploads/${req.file.filename}` : '',
    delay: (data.cars.length + 1) * 100
  };
  
  data.cars.push(newCar);
  writeData(data);
  res.status(201).json(newCar);
});

app.put('/api/cars/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, category } = req.body;
  const data = readData();
  
  const index = data.cars.findIndex(car => car.id.toString() === id);
  if (index === -1) return res.status(404).json({ message: "Car not found" });
  
  const updatedCar = {
    ...data.cars[index],
    name: name || data.cars[index].name,
    category: category || data.cars[index].category
  };
  
  if (req.file) {
    updatedCar.img = `/uploads/${req.file.filename}`;
  }
  
  data.cars[index] = updatedCar;
  writeData(data);
  res.json(updatedCar);
});

app.delete('/api/cars/:id', (req, res) => {
  const { id } = req.params;
  const data = readData();
  
  const initialLength = data.cars.length;
  data.cars = data.cars.filter(car => car.id.toString() !== id);
  
  if (data.cars.length === initialLength) return res.status(404).json({ message: "Car not found" });
  
  writeData(data);
  res.json({ message: "Car deleted" });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, interest, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, phone number, and message are required.' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'operations@adamtechcommercial.com';

    const { data, error } = await resend.emails.send({
      from: 'Adam Tech Commercial <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: 'New Website Enquiry - Adam Tech Commercial',
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #f3f3f4; padding: 40px 20px; color: #1a1c1c; min-height: 100vh;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #c4c7c7; border-top: 4px solid #e50914; padding: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="font-family: 'Libre Caslon Text', serif; color: #1a1c1c; font-size: 24px; margin: 0;">ADAM TECH COMMERCIAL</h1>
              <div style="width: 30px; height: 3px; background-color: #e50914; margin: 0 auto 15px auto;"></div>
              <p style="color: #444748; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0; font-weight: 500;">New Enquiry Received</p>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 25px; margin-bottom: 30px; border-left: 3px solid #e50914;">
              <p style="margin: 0 0 15px 0; font-size: 14px;"><strong style="color: #747878; display: inline-block; width: 90px; letter-spacing: 0.1em; text-transform: uppercase; font-size: 11px;">NAME</strong> <span style="color: #1a1c1c; font-weight: 500;">${name}</span></p>
              <p style="margin: 0 0 15px 0; font-size: 14px;"><strong style="color: #747878; display: inline-block; width: 90px; letter-spacing: 0.1em; text-transform: uppercase; font-size: 11px;">EMAIL</strong> <span style="color: #1a1c1c; font-weight: 500;">${email}</span></p>
              <p style="margin: 0 0 15px 0; font-size: 14px;"><strong style="color: #747878; display: inline-block; width: 90px; letter-spacing: 0.1em; text-transform: uppercase; font-size: 11px;">PHONE</strong> <span style="color: #1a1c1c; font-weight: 500;">${phone || 'N/A'}</span></p>
              <p style="margin: 0; font-size: 14px;"><strong style="color: #747878; display: inline-block; width: 90px; letter-spacing: 0.1em; text-transform: uppercase; font-size: 11px;">INTEREST</strong> <span style="color: #1a1c1c; font-weight: 500;">${interest || 'General Enquiry'}</span></p>
            </div>

            <div style="margin-top: 30px;">
              <h3 style="font-family: 'Libre Caslon Text', serif; color: #1a1c1c; font-size: 18px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; margin-bottom: 20px;">Message Details</h3>
              <p style="font-size: 15px; line-height: 1.6; color: #1a1c1c; white-space: pre-wrap; background-color: #ffffff; padding: 20px; border: 1px solid #eeeeee;">${message}</p>
            </div>

            <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eeeeee; padding-top: 20px;">
              <p style="color: #747878; font-size: 12px;">This email was sent automatically from your website contact form.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
    }

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ success: false, message: 'An internal server error occurred.' });
  }
});

// Serve frontend static files in production
const frontendDist = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  
  // React Router fallback
  app.use((req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
