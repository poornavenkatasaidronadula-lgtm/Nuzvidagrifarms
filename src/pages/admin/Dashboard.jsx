
import { DollarSign, ShoppingCart, Users, TrendingUp, Package, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './admin.css';

const SALES_DATA = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const STATS = [
  { label: 'Total Revenue', value: '₹1,24,500', change: '+12.5%', up: true, icon: <DollarSign size={22}/>, color: '#d68d3c', bg: '#fff7ed', accent: '#d68d3c' },
  { label: 'Total Orders',  value: '156',        change: '+8.2%',  up: true, icon: <ShoppingCart size={22}/>, color: '#3b82f6', bg: '#eff6ff', accent: '#3b82f6' },
  { label: 'Customers',     value: '1,204',      change: '+15.3%', up: true, icon: <Users size={22}/>, color: '#10b981', bg: '#ecfdf5', accent: '#10b981' },
  { label: 'Active Products',value: '24',        change: '-2.0%',  up: false,icon: <Package size={22}/>, color: '#8b5cf6', bg: '#f5f3ff', accent: '#8b5cf6' },
];

const RECENT_ORDERS = [
  { id: 'ORD-1054', customer: 'Vikram Mehta',   avatar: 'VM', amount: 950,  status: 'Pending',    statusClass: 'admin-badge-red' },
  { id: 'ORD-1053', customer: 'Sneha Reddy',    avatar: 'SR', amount: 4500, status: 'Processing', statusClass: 'admin-badge-yellow' },
  { id: 'ORD-1052', customer: 'Amit Singh',     avatar: 'AS', amount: 1800, status: 'Shipped',    statusClass: 'admin-badge-blue' },
  { id: 'ORD-1051', customer: 'Priya Patel',    avatar: 'PP', amount: 7200, status: 'Delivered',  statusClass: 'admin-badge-green' },
];

const TOP_PRODUCTS = [
  { name: 'A2 Cow Ghee 500ml',   sales: 145, revenue: 507500, pct: 100 },
  { name: 'Wild Forest Honey',   sales: 98,  revenue: 83300,  pct: 68  },
  { name: 'Avakaya Mango Pickle',sales: 87,  revenue: 39150,  pct: 60  },
  { name: 'Turmeric Powder 250g',sales: 65,  revenue: 19500,  pct: 45  },
];

const AVATAR_COLORS = ['#d68d3c', '#3b82f6', '#10b981', '#8b5cf6'];

const Dashboard = () => (
  <div>
    <div className="admin-page-header">
      <div>
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-subtitle">Welcome back! Here's what's happening at Nuzvid Agri Farms.</p>
      </div>
      <div style={{ fontSize: '13px', color: '#6b7280', background: 'white', border: '1px solid #e8eaf0', padding: '10px 16px', borderRadius: '10px', fontWeight: 600 }}>
        📅 June 2024 · All time
      </div>
    </div>

    {/* Stats */}
    <div className="admin-stats-grid">
      {STATS.map((s, i) => (
        <motion.div key={s.label} className="admin-stat-card" style={{ '--card-accent': s.accent }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="admin-stat-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 700, color: s.up ? '#10b981' : '#ef4444' }}>
              {s.up ? <ArrowUpRight size={16}/> : <ArrowDownRight size={16}/>}{s.change}
            </div>
          </div>
          <div>
            <div className="admin-stat-value">{s.value}</div>
            <div className="admin-stat-label">{s.label}</div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Sales Chart */}
    <motion.div className="admin-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ marginBottom: '24px' }}>
      <div className="admin-card-header">
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#1a1d2e' }}>Sales Overview</h2>
      </div>
      <div className="admin-card-body" style={{ height: '300px', padding: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SALES_DATA} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dx={-10} tickFormatter={(value) => `₹${value}`} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
              itemStyle={{ color: '#1a1d2e', fontWeight: 700 }}
              formatter={(value) => [`₹${value}`, 'Sales']}
            />
            <Line type="monotone" dataKey="sales" stroke="#d68d3c" strokeWidth={3} dot={{ r: 4, fill: '#d68d3c', strokeWidth: 2, stroke: 'white' }} activeDot={{ r: 6, fill: '#d68d3c', stroke: 'white', strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>

    {/* Bottom Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '24px' }}>
      {/* Recent Orders */}
      <motion.div className="admin-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <div className="admin-card-header">
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#1a1d2e' }}>Recent Orders</h2>
          <span className="admin-badge admin-badge-blue">Live</span>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_ORDERS.map((o, i) => (
              <tr key={o.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="admin-avatar" style={{ background: AVATAR_COLORS[i] + '20', color: AVATAR_COLORS[i], width: '34px', height: '34px', borderRadius: '8px', fontSize: '12px' }}>{o.avatar}</div>
                    <span style={{ fontWeight: 600, fontSize: '14px' }}>{o.customer}</span>
                  </div>
                </td>
                <td style={{ fontSize: '13px', color: '#6b7280' }}>{o.id}</td>
                <td style={{ fontWeight: 700 }}>₹{o.amount.toLocaleString()}</td>
                <td><span className={`admin-badge ${o.statusClass}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Top Products */}
      <motion.div className="admin-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
        <div className="admin-card-header">
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#1a1d2e' }}>Top Products</h2>
          <TrendingUp size={18} color="#10b981" />
        </div>
        <div className="admin-card-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {TOP_PRODUCTS.map((p, i) => (
            <div key={p.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', background: ['#fff7ed','#eff6ff','#ecfdf5','#f5f3ff'][i], color: AVATAR_COLORS[i], borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>#{i+1}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: '#1a1d2e' }}>{p.name}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{p.sales} units sold</div>
                  </div>
                </div>
                <div style={{ fontWeight: 800, color: '#d68d3c', fontSize: '14px' }}>₹{(p.revenue/1000).toFixed(0)}K</div>
              </div>
              <div className="admin-progress-bar">
                <div className="admin-progress-fill" style={{ width: `${p.pct}%`, background: AVATAR_COLORS[i] }}></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Dashboard;
