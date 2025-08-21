import React, { useState } from 'react';
import axios from 'axios';

export default function Summarize() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return alert("Please enter some text");
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:8000/summary', {
        text: text
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while summarizing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Summarize Text</h1>
      <textarea
        className="w-full border p-2 rounded mb-4"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your content here..."
      ></textarea>

      <button
        onClick={handleSummarize}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>

      {summary && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Summary:</h2>
          <p className="bg-gray-100 p-4 rounded">{summary}</p>
        </div>
      )}
    </div>
  );
}
