import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';
import { Plus, Trash2 } from 'lucide-react';

const ManageBanners = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newBanner, setNewBanner] = useState('');

  const defaultBanners = ['https://www.nuzvidagrifarms.com/cdn/shop/files/new_1920x.jpg?v=1759635977'];

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'hero_banners')
        .single();
      
      if (data && data.value) {
        setBanners(JSON.parse(data.value));
      } else {
        const localBanners = localStorage.getItem('hero_banners');
        if (localBanners) setBanners(JSON.parse(localBanners));
        else setBanners(defaultBanners);
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
      const localBanners = localStorage.getItem('hero_banners');
      if (localBanners) setBanners(JSON.parse(localBanners));
      else setBanners(defaultBanners);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const bannersStr = JSON.stringify(banners);
    
    // Save to local storage for immediate effect without DB
    localStorage.setItem('hero_banners', bannersStr);
    
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({ key: 'hero_banners', value: bannersStr }, { onConflict: 'key' });
        
      if (error && error.code !== '42P01') { 
        throw error;
      }
      toast.success('Banners updated successfully!');
    } catch (error) {
      toast.success('Banners updated locally!');
    } finally {
      setSaving(false);
    }
  };

  const addBanner = () => {
    if (!newBanner) return;
    setBanners([...banners, newBanner]);
    setNewBanner('');
  };

  const removeBanner = (indexToRemove) => {
    setBanners(banners.filter((_, index) => index !== indexToRemove));
  };

  if (loading) return <p>Loading banner settings...</p>;

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: '#27130F', marginBottom: '30px' }}>Manage Hero Banners</h1>
      
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Add New Banner URL</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="url" 
              style={{ flexGrow: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} 
              value={newBanner} 
              onChange={e => setNewBanner(e.target.value)} 
              placeholder="https://..."
            />
            <button type="button" onClick={addBanner} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Plus size={18} /> Add
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '15px' }}>Current Banners</h3>
          {banners.length === 0 ? (
            <p style={{ color: '#666' }}>No banners added yet.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {banners.map((url, index) => (
                <div key={index} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' }}>
                  <img src={url} alt={`Banner ${index + 1}`} style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }} />
                  <button 
                    onClick={() => removeBanner(index)}
                    style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#ff6b6b', border: 'none', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <button onClick={handleSave} className="btn-primary" disabled={saving} style={{ width: '100%', fontSize: '16px', padding: '12px' }}>
          {saving ? 'Saving...' : 'Save All Banners'}
        </button>
      </div>
    </div>
  );
};

export default ManageBanners;
