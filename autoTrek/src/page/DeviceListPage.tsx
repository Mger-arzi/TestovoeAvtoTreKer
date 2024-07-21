import { useLoginQuery } from "../api/services/autoTrek.service";
import { useState } from "react";
import { TextField } from "../components/ui/textField";

export const DeviceListPage = () => {


  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemPerPage] = useState(10)
  const { isLoading, data, isError } = useLoginQuery()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {JSON.stringify(isError)}</div>
  }
  return (
    <>
      <h2>
        DeviceListPage
      </h2>
      <div style={{ margin: '0 auto', padding: '1.5rem', width: '1024px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <TextField
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder={'Search'}
            value={search}
          />
          <table>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Name</th>
                <th>uniqueId</th>
                <th>Last updated</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(el => {
                const updated = new Date(el.lastUpdate).toLocaleDateString('ru-RU')

                return (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.uniqueId}</td>
                    <td>{updated}</td>
                    <td>{el.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <select style={{ backgroundColor: 'gray' }} onChange={e => setItemPerPage(+e.currentTarget.value)} value={itemsPerPage}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
      </div>
    </>

  );
};
