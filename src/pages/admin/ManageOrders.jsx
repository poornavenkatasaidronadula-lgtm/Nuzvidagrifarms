import React, { useState } from 'react';
import { Search, Eye, Download, Filter, ShoppingCart, Clock, CheckCircle, Truck, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import './admin.css';

const MOCK_ORDERS = [
  { id: 'ORD-2024-1054', customer: 'Rahul Sharma',  avatar: 'RS', email: 'rahul@example.com', date: '2024-10-27', total: 3500,  paymentStatus: 'Paid',       status: 'Delivered',  items: 1 },
  { id: 'ORD-2024-1053', customer: 'Priya Patel',   avatar: 'PP', email: 'priya@example.com', date: '2024-10-27', total: 7200,  paymentStatus: 'COD',        status: 'Pending',    items: 3 },
  { id: 'ORD-2024-1052', customer: 'Amit Singh',    avatar: 'AS', email: 'amit@example.com',  date: '2024-10-26', total: 1800,  paymentStatus: 'Paid',       status: 'Shipped',    items: 2 },
  { id: 'ORD-2024-1051', customer: 'Sneha Reddy',   avatar: 'SR', email: 'sneha@example.com', date: '2024-10-26', total: 4500,  paymentStatus: 'Paid',       status: 'Processing', items: 1 },
  { id: 'ORD-2024-1050', customer: 'Vikram Mehta',  avatar: 'VM', email: 'vikram@example.com',date: '2024-10-25', total: 950,   paymentStatus: 'COD',        status: 'Pending',    items: 2 },
  { id: 'ORD-2024-1049', customer: 'Ananya Rao',    avatar: 'AR', email: 'ananya@example.com',date: '2024-10-24', total: 12500, paymentStatus: 'Paid',       status: 'Delivered',  items: 5 },
  { id: 'ORD-2024-1048', customer: 'Karan Malhotra',avatar: 'KM', email: 'karan@example.com', date: '2024-10-24', total: 2200,  paymentStatus: 'Paid',       status: 'Shipped',    items: 1 },
];

const STATUS_CONFIG = {
  Delivered:  { badge: 'admin-badge-green',  icon: <CheckCircle size={11}/> },
  Shipped:    { badge: 'admin-badge-blue',   icon: <Truck size={11}/> },
  Processing: { badge: 'admin-badge-yellow', icon: <Clock size={11}/> },
  Pending:    { badge: 'admin-badge-red',    icon: <Package size={11}/> },
};

const PAYMENT_CONFIG = {
  Paid: 'admin-badge-green',
  COD:  'admin-badge-yellow',
};

const AVATAR_COLORS = ['#d68d3c', '#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b', '#06b6d4'];

const ManageOrders = () => {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    toast.success(`Order ${id} → ${newStatus}`);
  };

  const filters = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered'];
  const filtered = orders.filter(o => {
    const matchSearch = o.id.toLowerCase().includes(searchTerm.toLowerCase()) || o.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = activeFilter === 'All' || o.status === activeFilter;
    return matchSearch && matchFilter;
  });

  const stats = [
    { label: 'Total Orders',    value: orders.length,                              icon: <ShoppingCart size={22}/>, color: '#3b82f6', bg: '#eff6ff', accent: '#3b82f6' },
    { label: 'Pending',         value: orders.filter(o=>o.status==='Pending').length,   icon: <Package size={22}/>,     color: '#ef4444', bg: '#fef2f2', accent: '#ef4444' },
    { label: 'Shipped',         value: orders.filter(o=>o.status==='Shipped').length,   icon: <Truck size={22}/>,       color: '#d68d3c', bg: '#fff7ed', accent: '#d68d3c' },
    { label: 'Delivered',       value: orders.filter(o=>o.status==='Delivered').length, icon: <CheckCircle size={22}/>, color: '#10b981', bg: '#ecfdf5', accent: '#10b981' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Orders Management</h1>
          <p className="admin-page-subtitle">{orders.length} total orders · Last updated just now</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="admin-btn-secondary" onClick={() => toast.success('Exporting CSV...')}><Download size={16}/>Export</button>
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="admin-stat-card" style={{ '--card-accent': s.accent }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
            <div className="admin-stat-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
            <div>
              <div className="admin-stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="admin-stat-label">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-search-wrapper">
            <Search size={16} className="admin-search-icon" />
            <input className="admin-search-input" placeholder="Search by Order ID or Customer..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="admin-filter-tabs">
            {filters.map(f => (
              <button key={f} className={`admin-filter-tab ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order, i) => {
              const sc = STATUS_CONFIG[order.status] || {};
              const avatarColor = AVATAR_COLORS[i % AVATAR_COLORS.length];
              return (
                <motion.tr key={order.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <td>
                    <div style={{ fontWeight: 700, color: '#1a1d2e', fontSize: '13px' }}>{order.id}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{order.email}</div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="admin-avatar" style={{ background: avatarColor + '20', color: avatarColor }}>{order.avatar}</div>
                      <span style={{ fontWeight: 600 }}>{order.customer}</span>
                    </div>
                  </td>
                  <td style={{ color: '#6b7280' }}>{order.date}</td>
                  <td><span style={{ fontWeight: 600 }}>{order.items} item{order.items > 1 ? 's' : ''}</span></td>
                  <td><span className={`admin-badge ${PAYMENT_CONFIG[order.paymentStatus] || 'admin-badge-gray'}`}>{order.paymentStatus}</span></td>
                  <td>
                    <select
                      value={order.status}
                      onChange={e => handleStatusChange(order.id, e.target.value)}
                      className={`admin-status-select admin-badge ${sc.badge}`}
                    >
                      {['Pending','Processing','Shipped','Delivered'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td style={{ fontWeight: 700, color: '#1a1d2e' }}>₹{order.total.toLocaleString()}</td>
                  <td>
                    <button className="admin-icon-btn" onClick={() => setSelectedOrder(order)} title="View Order"><Eye size={15}/></button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="admin-empty-state">
            <ShoppingCart size={48} />
            <h3>No orders found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="admin-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <motion.div 
            className="admin-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '600px', width: '90%' }}
          >
            <div className="admin-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#1a1d2e' }}>Order {selectedOrder.id}</h2>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '13px' }}>{selectedOrder.date}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#9ca3af' }}>&times;</button>
            </div>

            <div className="admin-modal-body" style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
                  <h4 style={{ margin: '0 0 8px', fontSize: '14px', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '1px' }}>Customer</h4>
                  <div style={{ fontWeight: 600, color: '#1a1d2e' }}>{selectedOrder.customer}</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>{selectedOrder.email}</div>
                </div>
                <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
                  <h4 style={{ margin: '0 0 8px', fontSize: '14px', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '1px' }}>Payment</h4>
                  <div style={{ fontWeight: 600, color: '#1a1d2e' }}>{selectedOrder.paymentStatus}</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>Total: ₹{selectedOrder.total.toLocaleString()}</div>
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 12px', fontSize: '14px', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '1px' }}>Status</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className={`admin-badge ${STATUS_CONFIG[selectedOrder.status]?.badge || 'admin-badge-gray'}`} style={{ padding: '8px 16px', fontSize: '14px' }}>
                    {selectedOrder.status}
                  </span>
                  <select
                    value={selectedOrder.status}
                    onChange={e => handleStatusChange(selectedOrder.id, e.target.value)}
                    style={{ padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db' }}
                  >
                    {['Pending','Processing','Shipped','Delivered'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 12px', fontSize: '14px', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '1px' }}>Items ({selectedOrder.items})</h4>
                <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '8px', color: '#6b7280', fontSize: '14px' }}>
                  <p style={{ margin: 0 }}>Item details will be loaded from database.</p>
                  <p style={{ margin: '4px 0 0' }}>Currently displaying aggregate count: {selectedOrder.items} items.</p>
                </div>
              </div>
            </div>

            <div className="admin-modal-footer" style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px', marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button className="admin-btn-secondary" onClick={() => setSelectedOrder(null)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
