import { useMemes } from "../hooks/useMemes";

export default function ListPage() {
  const { memes } = useMemes();

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">
        Картки з мемами
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="bg-card border border-gray-200 rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={meme.image}
              alt={meme.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-primary">
                {meme.title}
              </h2>
              <p className="text-muted text-sm">&#10084; {meme.likes} лайків</p>
              <a
                href={meme.image}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline text-sm mt-2 block"
              >
                Відкрити зображення
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
