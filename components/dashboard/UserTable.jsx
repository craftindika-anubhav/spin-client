export default function UserTable({ data }) {
  return (
    <div>
      <section className="container mx-auto p-6">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3 text-xl">Email</th>
                  <th className="px-4 py-3 text-xl">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data &&
                  data.map((form) => (
                    <tr key={form._id} className="text-gray-900">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="text-lg">{form.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 border text-lg">
                        {new Date(form.createdAt).toLocaleString(undefined, {
                          timeZoneName: 'short',
                        })}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
