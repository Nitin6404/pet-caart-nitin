import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import getPetCaartResponse from './helpers/getPetCartResponse';

const SubmittedResponsesPage = () => {
  const [responses, setResponses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPetCaartResponse()
      .then((response) => {
        console.log(response?.response?.data);
        setResponses(response?.response?.data);
        setFiltered(response?.response?.data);
      })
      .catch((error) => {
        console.error('Error fetching responses:', error);
      });
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    setFiltered(
      responses.filter(
        (r) =>
          r.name.toLowerCase().includes(term) ||
          r.email.toLowerCase().includes(term) ||
          r.mobile.includes(term)
      )
    );
  }, [search, responses]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Submitted Responses</h1>

        {/* Search bar */}
        <div className="flex items-center mb-4 rounded-md shadow-sm bg-white px-4 py-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, email or mobile..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full outline-none bg-transparent text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border bg-white shadow-md rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.mobile}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center px-4 py-6 text-gray-500">
                    No responses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmittedResponsesPage;
