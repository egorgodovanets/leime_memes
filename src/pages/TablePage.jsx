import { useState } from 'react';
import { useMemes } from '../hooks/useMemes';
import EditMemeDialog from '../components/EditMemeDialog';

export default function TablePage() {
  const { memes, updateMeme } = useMemes();
  const [editingMeme, setEditingMeme] = useState(null);

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">Таблиця мемів</h1>

      <div className="overflow-x-auto shadow rounded border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-muted/10 text-muted uppercase tracking-wide text-xs">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Назва</th>
              <th className="p-3 border">Лайки</th>
              <th className="p-3 border text-center">Дії</th>
            </tr>
          </thead>
          <tbody>
            {memes.map((meme) => (
              <tr key={meme.id} className="hover:bg-gray-50 transition">
                <td className="p-3 border">{meme.id}</td>
                <td className="p-3 border">{meme.title}</td>
                <td className="p-3 border">{meme.likes}</td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => setEditingMeme(meme)}
                    className="bg-accent text-primary font-semibold px-4 py-2 rounded hover:bg-accent/90 transition"
                  >
                    ✏️ Редагувати
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingMeme && (
        <EditMemeDialog
          meme={editingMeme}
          onClose={() => setEditingMeme(null)}
          onSave={(updated) => {
            updateMeme(updated);
            setEditingMeme(null);
          }}
        />
      )}
    </div>
  );
}
