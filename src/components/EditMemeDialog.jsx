import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function EditMemeDialog({ meme, onClose, onSave }) {
  const [form, setForm] = useState({ ...meme });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.title || form.title.length < 3 || form.title.length > 100) {
      newErrors.title = 'Назва має бути від 3 до 100 символів';
    }

    if (!form.image || !/^https?:\/\/.*\.jpg$/i.test(form.image)) {
      newErrors.image = 'Посилання має бути валідним JPG-URL';
    }

    if (
      typeof form.likes !== 'number' ||
      isNaN(form.likes) ||
      form.likes < 0 ||
      form.likes > 99
    ) {
      newErrors.likes = 'Лайки мають бути числом від 0 до 99';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSave({ ...form });
    }
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="text-xl font-bold text-primary mb-4">
              ✏️ Редагувати мем #{form.id}
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted">Назва</label>
                <input
                  className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                {errors.title && (
                  <p className="text-sm text-red-600 mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted">Картинка (JPG URL)</label>
                <input
                  className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
                {errors.image && (
                  <p className="text-sm text-red-600 mt-1">{errors.image}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted">Лайки</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  value={form.likes}
                  onChange={(e) =>
                    setForm({ ...form, likes: Number(e.target.value) })
                  }
                />
                {errors.likes && (
                  <p className="text-sm text-red-600 mt-1">{errors.likes}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-muted/10 hover:bg-muted/20 rounded text-muted"
              >
                Скасувати
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-accent hover:bg-accent/90 text-primary font-semibold rounded"
              >
                Зберегти
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
