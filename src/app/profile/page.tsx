export default function ProfilePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">Mi perfil</h1>

      <div className="border rounded-xl p-6 shadow-sm max-w-md">
        <h2 className="text-2xl font-semibold mb-2">
          Macarena
        </h2>

        <p className="text-gray-600 mb-2">
          Amante de los viajes y las experiencias únicas.
        </p>

        <p>
          <strong>Favoritos guardados:</strong> 0
        </p>
      </div>
    </main>
  );
}