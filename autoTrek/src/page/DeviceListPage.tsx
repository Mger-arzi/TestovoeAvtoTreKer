import { ThemeProvider, createTheme } from "@mui/material";
import { MyAppBar } from "../AppBar/AppBar";
import { useLoginQuery } from "../api/services/autoTrek.service";
import { useState } from "react";
import { TextField } from "../components/ui/textField";

export const DeviceListPage = () => {

  type ThemeMode = 'dark' | 'light'
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const theme = createTheme({
    palette: {
      mode: themeMode === 'light' ? 'light' : 'dark',
      primary: {
        main: '#266cad',
      },
      secondary: {
        main: '#7f3136',
      },

    },
  })
  const changeModeHandler = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }


  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemPerPage] = useState(10)
  const { data, error, isLoading } = useLoginQuery()
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }
  return (
    <>
      <div>
        <ThemeProvider theme={theme}><MyAppBar changeModeHandler={changeModeHandler} /></ThemeProvider>
        DeviceListPage
      </div>
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
          <select onChange={e => setItemPerPage(+e.currentTarget.value)} value={itemsPerPage}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
      </div>
    </>

  );
};
