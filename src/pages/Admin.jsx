import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Video, Image, Instagram, CheckCircle2, RotateCcw, ArrowLeft } from 'lucide-react';
import { getStoredPortfolio, savePortfolioItem, deletePortfolioItem, resetPortfolioToDefault, portfolioCategories } from '../data/portfolioData';

export default function Admin({ navigate }) {
  const [items, setItems] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Form state
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Wedding',
    tags: '',
    videoUrl: '',
    poster: '',
  });

  const loadData = () => {
    setItems(getStoredPortfolio());
  };

  useEffect(() => {
    loadData();
    window.addEventListener('posh_portfolio_updated', loadData);
    return () => window.removeEventListener('posh_portfolio_updated', loadData);
  }, []);

  // Handle Image File Upload (Convert to Base64 data URL)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      setForm((prev) => ({ ...prev, poster: uploadEvent.target.result }));
    };
    reader.readAsDataURL(file);
  };

  // Handle Video File Upload (Convert to Base64 data URL)
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      setForm((prev) => ({ ...prev, videoUrl: uploadEvent.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!form.title || !form.location) return;

    const newItem = {
      id: `client-${Date.now()}`,
      title: form.title,
      date: form.date || 'Recent Celebration',
      location: form.location,
      category: form.category,
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()) : ['Bespoke Luxury', 'Bengaluru'],
      videoUrl: form.videoUrl || '/wedding_bento.mp4',
      poster: form.poster || '/media/hero/hero-poster.jpg',
      featured: true,
    };

    savePortfolioItem(newItem);
    setSuccessMsg(`Celebration "${form.title}" uploaded successfully and is now live!`);
    setIsAdding(false);
    setForm({
      title: '',
      date: '',
      location: '',
      category: 'Wedding',
      tags: '',
      videoUrl: '',
      poster: '',
    });
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deletePortfolioItem(id);
      setSuccessMsg(`Deleted "${title}".`);
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all celebrations back to the original curated defaults?')) {
      resetPortfolioToDefault();
      setSuccessMsg('Restored original celebrations store.');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3D0A14] pt-28 pb-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#EEDDC8]">
        <div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-dark hover:text-gold font-semibold mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Website</span>
          </button>
          <h1 className="font-display text-3xl sm:text-4xl text-[#3D0A14]">
            Posh Events <span className="gold-glow-word">Admin Portal</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5A2A27] mt-1 font-light">
            Upload new celebration photos & videos, or paste Instagram reel links. All additions automatically display live on the website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="btn-ghost-pill !py-2.5 !px-4 !text-xs flex items-center gap-2 text-[#5A2A27] hover:text-[#3D0A14]"
            title="Reset to factory defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="btn-gold-pill !py-2.5 !px-5 !text-xs flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>{isAdding ? 'Close Form' : 'Upload New Media'}</span>
          </button>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="my-6 p-4 rounded-xl bg-gold/15 border border-gold text-[#3D0A14] text-xs flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <span>{successMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload New Celebration Form Drawer */}
      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#EEDDC8] shadow-[0_12px_40px_rgba(201,162,75,0.12)]"
          >
            <h2 className="font-display text-2xl text-[#3D0A14] mb-6">
              Add New Celebration / Reel
            </h2>

            <form onSubmit={handleCreate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Title */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold">
                    Couple / Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Varun & Anika"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold">
                    Venue / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Leela Bhartiya City, Bengaluru"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold">
                    Celebration Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25 November 2026"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  >
                    {portfolioCategories.filter((c) => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold">
                    Tags (Comma-separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Temple Mandap, Jasmine Florals, Royal Entry"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Media Inputs (Video & Poster) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#EEDDC8]">
                {/* Video: URL or Upload or Instagram Reel Link */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gold-dark text-xs font-semibold uppercase tracking-wider">
                    <Video className="w-4 h-4 text-gold" />
                    <span>Video / Instagram Reel Link</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Paste Video URL or Instagram Reel URL"
                    value={form.videoUrl}
                    onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  />
                  <div className="text-xs text-[#8C5D53] flex items-center gap-2">
                    <span>Or select video file:</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="text-xs file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold/20 file:text-gold hover:file:bg-gold/30"
                    />
                  </div>
                </div>

                {/* Poster Image: URL or Upload */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gold-dark text-xs font-semibold uppercase tracking-wider">
                    <Image className="w-4 h-4 text-gold" />
                    <span>Poster Thumbnail Image</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Paste Image URL"
                    value={form.poster}
                    onChange={(e) => setForm({ ...form, poster: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                  />
                  <div className="text-xs text-[#8C5D53] flex items-center gap-2">
                    <span>Or upload photo:</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="text-xs file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gold/20 file:text-gold hover:file:bg-gold/30"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="btn-gold-pill !py-3 !px-8 text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish to Live Site</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Celebrations List */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl text-[#3D0A14]">
            Active Celebrations & Reels ({items.length})
          </h2>
          <span className="text-xs text-gold-dark font-mono font-semibold">
            Auto-Sync Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white border border-[#EEDDC8] flex flex-col justify-between hover:border-gold transition-all shadow-sm"
            >
              <div className="flex gap-4">
                <div className="w-20 h-24 rounded-2xl overflow-hidden bg-[#FAF3EA] shrink-0 border border-[#EEDDC8]">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/media/hero/hero-poster.jpg';
                    }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] tracking-wider uppercase text-gold font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg text-[#3D0A14] mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A2A27] truncate mt-0.5">
                    {item.location}
                  </p>
                  <p className="text-[11px] text-[#8C5D53] mt-1 font-mono">
                    {item.date}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#F0E4D5] flex items-center justify-between text-xs">
                <span className="text-[#8C5D53] font-mono text-[10px] truncate max-w-[150px]">
                  {item.videoUrl}
                </span>
                <button
                  onClick={() => handleDelete(item.id, item.title)}
                  className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-1 text-[11px]"
                  title="Delete item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
