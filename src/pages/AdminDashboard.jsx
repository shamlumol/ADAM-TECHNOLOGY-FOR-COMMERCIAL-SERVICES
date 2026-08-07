import React, { useState, useEffect } from 'react';
import { FiLogOut, FiPlus, FiEdit2, FiTrash2, FiUpload, FiX, FiCheck, FiLock, FiGrid } from 'react-icons/fi';
import { RiCarLine } from 'react-icons/ri';

/* ─── Inline styles using the site's design tokens ─── */
const css = {
  page: { minHeight: '100vh', backgroundColor: 'var(--surface)', color: 'var(--on-surface)', fontFamily: '"Inter", sans-serif' },
  loginWrap: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'var(--surface)' },
  loginCard: { width: '100%', maxWidth: '420px', backgroundColor: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: '0', padding: '3rem 2.5rem' },
  loginLogo: { height: '90px', objectFit: 'contain', marginBottom: '1.5rem' },
  loginTitle: { fontFamily: '"Libre Caslon Text", serif', fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--on-surface)', marginBottom: '0.25rem' },
  loginSub: { fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginBottom: '2rem', letterSpacing: '0.1em', textTransform: 'uppercase' },
  label: { fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)', marginBottom: '0.4rem', display: 'block' },
  input: { width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--outline-variant)', color: 'var(--on-surface)', padding: '0.6rem 0', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s', fontFamily: '"Inter", sans-serif' },
  inputFocus: { borderBottomColor: 'var(--accent)' },
  error: { color: '#ef4444', fontSize: '0.78rem', marginTop: '0.4rem' },
  btnRed: { backgroundColor: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 0, padding: '0.85rem 2rem', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'opacity 0.2s' },
  topBar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 2.5rem', backgroundColor: 'var(--surface-container)', borderBottom: '1px solid var(--outline-variant)' },
  topBarBrand: { display: 'flex', alignItems: 'center', gap: '1rem' },
  topBarLogo: { height: '50px', objectFit: 'contain' },
  topBarTitle: { fontFamily: '"Libre Caslon Text", serif', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--on-surface)', margin: 0 },
  topBarSub: { fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700 },
  logoutBtn: { background: 'transparent', border: '1px solid var(--outline-variant)', color: 'var(--on-surface-variant)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, transition: 'all 0.2s', borderRadius: 0 },
  body: { padding: '2.5rem', maxWidth: '1200px', margin: '0 auto' },
  sectionLabel: { fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' },
  card: { backgroundColor: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 0, padding: '2rem', marginBottom: '2rem' },
  cardTitle: { fontFamily: '"Libre Caslon Text", serif', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--on-surface)', marginBottom: '1.5rem' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  fileBox: { border: '1px dashed var(--outline-variant)', padding: '1.5rem', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s', color: 'var(--on-surface-variant)', fontSize: '0.85rem' },
  btnGroup: { display: 'flex', gap: '1rem', marginTop: '0.5rem' },
  btnOutline: { background: 'transparent', border: '1px solid var(--outline-variant)', color: 'var(--on-surface)', padding: '0.75rem 1.5rem', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, borderRadius: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' },
  btnAdd: { backgroundColor: 'var(--accent)', color: '#fff', border: 'none', padding: '0.75rem 1.8rem', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, borderRadius: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)', padding: '0.75rem 1rem', borderBottom: '1px solid var(--outline-variant)' },
  td: { padding: '1rem', borderBottom: '1px solid var(--outline-variant)', fontSize: '0.9rem', color: 'var(--on-surface)', verticalAlign: 'middle' },
  editBtn: { background: 'transparent', border: '1px solid var(--outline-variant)', color: 'var(--on-surface-variant)', padding: '0.4rem 0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '0.5rem', borderRadius: 0 },
  deleteBtn: { background: 'transparent', border: '1px solid rgba(239,68,68,0.4)', color: '#ef4444', padding: '0.4rem 0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 0 },
  accentBar: { width: '30px', height: '3px', backgroundColor: 'var(--accent)', marginBottom: '1.5rem' },
};

/* ─── AdminDashboard ─────────────────────────────────────── */
const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [pwChangeData, setPwChangeData] = useState({ current: '', new: '', confirm: '' });
  const [pwChangeMessage, setPwChangeMessage] = useState('');

  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({ name: '', category: '', image: null });
  const [editingId, setEditingId] = useState(null);
  const [pwFocused, setPwFocused] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const session = sessionStorage.getItem('admin_auth');
    if (session === 'true') setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn) fetchCars();
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem('admin_auth', 'true');
        setIsLoggedIn(true);
        setLoginError('');
      } else {
        setLoginError('Incorrect password. Please try again.');
      }
    } catch (err) {
      setLoginError('Could not connect to server.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsLoggedIn(false);
    setPasswordInput('');
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (pwChangeData.new !== pwChangeData.confirm) {
      setPwChangeMessage('New passwords do not match.');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: pwChangeData.current, newPassword: pwChangeData.new })
      });
      const data = await res.json();
      if (data.success) {
        setPwChangeMessage('Password updated successfully!');
        setPwChangeData({ current: '', new: '', confirm: '' });
        setTimeout(() => setShowPasswordChange(false), 2000);
      } else {
        setPwChangeMessage(data.message || 'Failed to update password.');
      }
    } catch (err) {
      setPwChangeMessage('Could not connect to server.');
    }
  };

  const fetchCars = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cars');
      const data = await res.json();
      setCars(data);
    } catch (err) { console.error(err); }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    if (formData.image) data.append('image', formData.image);
    const url = editingId ? `http://localhost:5000/api/cars/${editingId}` : 'http://localhost:5000/api/cars';
    const method = editingId ? 'PUT' : 'POST';
    try {
      await fetch(url, { method, body: data });
      setFormData({ name: '', category: '', image: null });
      setEditingId(null);
      setPreview(null);
      fetchCars();
    } catch (err) { console.error(err); }
  };

  const handleEdit = (car) => {
    setFormData({ name: car.name, category: car.category, image: null });
    setEditingId(car.id);
    setPreview(car.img ? (car.img.startsWith('/uploads') ? `http://localhost:5000${car.img}` : car.img) : null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: '', category: '', image: null });
    setPreview(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this car from the fleet?')) return;
    try {
      await fetch(`http://localhost:5000/api/cars/${id}`, { method: 'DELETE' });
      fetchCars();
    } catch (err) { console.error(err); }
  };

  /* ── LOGIN SCREEN ── */
  if (!isLoggedIn) {
    return (
      <div style={css.loginWrap}>
        <div style={css.loginCard}>
          <div style={{ textAlign: 'center' }}>
            <img src="/logo.png" alt="Logo" style={css.loginLogo} />
            <div style={{ ...css.accentBar, margin: '0 auto 1.5rem' }} />
            <h4 style={css.loginTitle}>Admin Access</h4>
            <p style={css.loginSub}>Fleet Management Dashboard</p>
          </div>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={css.label}>
                <FiLock size={10} style={{ marginRight: '0.3rem' }} /> Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onFocus={() => setPwFocused(true)}
                onBlur={() => setPwFocused(false)}
                placeholder="Enter admin password"
                autoFocus
                style={{ ...css.input, borderBottomColor: pwFocused ? 'var(--accent)' : (loginError ? '#ef4444' : 'var(--outline-variant)') }}
              />
              {loginError && <p style={css.error}>{loginError}</p>}
            </div>
            <button type="submit" style={css.btnRed}>
              <FiLock size={14} /> LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── DASHBOARD ── */
  return (
    <div style={css.page}>
      {/* Top Bar */}
      <div style={css.topBar}>
        <div style={css.topBarBrand}>
          <img src="/logo.png" alt="Logo" style={css.topBarLogo} />
          <div>
            <div style={css.topBarSub}>Fleet Management</div>
            <h1 style={css.topBarTitle}>Admin Dashboard</h1>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={css.btnOutline} onClick={() => setShowPasswordChange(!showPasswordChange)}>
            <FiLock size={14} /> {showPasswordChange ? 'Cancel' : 'Change Password'}
          </button>
          <button style={css.logoutBtn} onClick={handleLogout}>
            <FiLogOut size={14} /> Logout
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={css.body}>
        
        {/* Password Change Card */}
        {showPasswordChange && (
          <div style={css.card}>
            <div style={css.accentBar} />
            <h2 style={css.cardTitle}>Change Admin Password</h2>
            <form onSubmit={handlePasswordChange}>
              <div style={css.formGrid}>
                <div style={css.formGroup}>
                  <label style={css.label}>Current Password</label>
                  <input
                    type="password"
                    value={pwChangeData.current}
                    onChange={e => setPwChangeData({...pwChangeData, current: e.target.value})}
                    required
                    style={css.input}
                  />
                </div>
                <div style={css.formGroup}>
                  <label style={css.label}>New Password</label>
                  <input
                    type="password"
                    value={pwChangeData.new}
                    onChange={e => setPwChangeData({...pwChangeData, new: e.target.value})}
                    required
                    style={css.input}
                  />
                </div>
                <div style={css.formGroup}>
                  <label style={css.label}>Confirm New Password</label>
                  <input
                    type="password"
                    value={pwChangeData.confirm}
                    onChange={e => setPwChangeData({...pwChangeData, confirm: e.target.value})}
                    required
                    style={css.input}
                  />
                </div>
              </div>
              {pwChangeMessage && <p style={{ fontSize: '0.85rem', color: pwChangeMessage.includes('success') ? '#22c55e' : '#ef4444', marginBottom: '1rem' }}>{pwChangeMessage}</p>}
              <button type="submit" style={css.btnAdd}>Update Password</button>
            </form>
          </div>
        )}

        {/* Form Card */}
        <div style={css.card}>
          <div style={css.accentBar} />
          <div style={css.sectionLabel}>
            {editingId ? <FiEdit2 size={12} /> : <FiPlus size={12} />}
            {editingId ? 'Edit Vehicle' : 'Add New Vehicle'}
          </div>
          <h2 style={css.cardTitle}>{editingId ? 'Update Fleet Entry' : 'Register New Car'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={css.formGrid}>
              <div style={css.formGroup}>
                <label style={css.label}>Car Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Toyota Land Cruiser"
                  style={css.input}
                />
              </div>
              <div style={css.formGroup}>
                <label style={css.label}>Category / Model</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Premium SUV"
                  style={css.input}
                />
              </div>
            </div>

            {/* Image Upload */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={css.label}>
                <FiUpload size={10} style={{ marginRight: '0.3rem' }} />
                Car Image
              </label>
              <label
                htmlFor="car-image-upload"
                style={css.fileBox}
              >
                {preview ? (
                  <img src={preview} alt="Preview" style={{ maxHeight: '140px', objectFit: 'contain', maxWidth: '100%' }} />
                ) : (
                  <>
                    <FiUpload size={24} style={{ marginBottom: '0.5rem', display: 'block', margin: '0 auto 0.5rem' }} />
                    <span>Click to upload car image</span>
                    <br />
                    <span style={{ fontSize: '0.72rem', opacity: 0.6 }}>PNG, JPG, WEBP up to 10MB</span>
                  </>
                )}
              </label>
              <input
                id="car-image-upload"
                type="file"
                name="image"
                onChange={handleInputChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
              {editingId && !preview && <p style={{ fontSize: '0.72rem', color: 'var(--on-surface-variant)', marginTop: '0.4rem' }}>Leave blank to keep the existing image.</p>}
            </div>

            <div style={css.btnGroup}>
              <button type="submit" style={css.btnAdd}>
                {editingId ? <><FiCheck size={14} /> Update Car</> : <><FiPlus size={14} /> Add Car</>}
              </button>
              {editingId && (
                <button type="button" style={css.btnOutline} onClick={handleCancel}>
                  <FiX size={14} /> Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Fleet Table Card */}
        <div style={css.card}>
          <div style={css.accentBar} />
          <div style={css.sectionLabel}>
            <FiGrid size={12} /> Current Fleet
          </div>
          <h2 style={css.cardTitle}>Manage Vehicles</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={css.table}>
              <thead>
                <tr>
                  <th style={css.th}>Image</th>
                  <th style={css.th}>Name</th>
                  <th style={css.th}>Category</th>
                  <th style={css.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map(car => {
                  const imgSrc = car.img && car.img.startsWith('/uploads') ? `http://localhost:5000${car.img}` : car.img;
                  return (
                    <tr key={car.id}>
                      <td style={css.td}>
                        {imgSrc ? (
                          <img src={imgSrc} alt={car.name} style={{ width: '100px', height: '65px', objectFit: 'contain' }} />
                        ) : (
                          <div style={{ width: '100px', height: '65px', backgroundColor: 'var(--surface-container-low)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <RiCarLine size={28} style={{ color: 'var(--on-surface-variant)', opacity: 0.4 }} />
                          </div>
                        )}
                      </td>
                      <td style={{ ...css.td, fontWeight: 600 }}>{car.name}</td>
                      <td style={{ ...css.td, color: 'var(--on-surface-variant)', fontSize: '0.82rem' }}>{car.category}</td>
                      <td style={css.td}>
                        <div style={{ display: 'flex' }}>
                          <button style={css.editBtn} onClick={() => handleEdit(car)}>
                            <FiEdit2 size={12} /> Edit
                          </button>
                          <button style={css.deleteBtn} onClick={() => handleDelete(car.id)}>
                            <FiTrash2 size={12} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {cars.length === 0 && (
                  <tr>
                    <td colSpan="4" style={{ ...css.td, textAlign: 'center', padding: '3rem', color: 'var(--on-surface-variant)' }}>
                      <RiCarLine size={40} style={{ opacity: 0.3, display: 'block', margin: '0 auto 1rem' }} />
                      No vehicles in fleet. Add one above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
