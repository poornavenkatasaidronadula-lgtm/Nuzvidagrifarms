import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { Lock, Mail, ArrowLeft, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setMockUser } = useAuth();
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (email === 'admin@nuzvidagrifarms.com' && password === 'admin123') {
        const mockAdmin = {
          email: email,
          user_metadata: {
            full_name: 'Farm Admin',
            role: 'admin'
          }
        };
        setMockUser(mockAdmin);
        toast.success('Admin access granted!');
        navigate('/admin');
      } else {
        toast.error('Invalid admin credentials.');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: "'Inter', sans-serif",
      backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Dark Overlay for readability */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'relative',
          width: '100%', 
          maxWidth: '420px', 
          margin: '20px',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '24px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          color: 'white'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            style={{ 
              background: 'rgba(255,255,255,0.15)', 
              width: '64px', 
              height: '64px', 
              borderRadius: '18px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 20px',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            <Fingerprint size={32} color="#fff" />
          </motion.div>
          <h1 style={{ fontSize: '28px', margin: '0 0 8px 0', fontWeight: '700', letterSpacing: '-0.5px' }}>Workspace</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>Authenticate to access the admin portal.</p>
        </div>

        <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }}>
              <Mail size={18} />
            </div>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '16px 16px 16px 48px', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '12px', 
                fontSize: '15px', 
                color: 'white',
                background: 'rgba(0,0,0,0.2)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              placeholder="Admin Email"
              onFocus={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.6)'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }}>
              <Lock size={18} />
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '16px 16px 16px 48px', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '12px', 
                fontSize: '15px', 
                color: 'white',
                background: 'rgba(0,0,0,0.2)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              placeholder="Passkey"
              onFocus={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.6)'; e.target.style.background = 'rgba(0,0,0,0.4)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'rgba(0,0,0,0.2)'; }}
            />
          </div>

          <motion.button 
            type="submit" 
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              width: '100%', 
              padding: '16px', 
              background: '#fff', 
              color: '#000', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: '700', 
              fontSize: '15px', 
              cursor: loading ? 'not-allowed' : 'pointer', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              marginTop: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            {loading ? (
              <div style={{ width: '20px', height: '20px', border: '3px solid rgba(0,0,0,0.1)', borderTopColor: '#000', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            ) : (
              'Unlock Dashboard'
            )}
          </motion.button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button 
            onClick={() => navigate('/')} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'rgba(255,255,255,0.6)', 
              cursor: 'pointer', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '13px', 
              fontWeight: '500', 
              transition: 'color 0.2s ease' 
            }}
            onMouseOver={(e) => e.target.style.color = '#fff'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
          >
            <ArrowLeft size={14} /> Return to Storefront
          </button>
        </div>

      </motion.div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder {
          color: rgba(255,255,255,0.4) !important;
        }
      `}</style>
    </div>
  );
};

export default AdminAuth;
