import './App.css'

import { useState } from 'react';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import { Grid, Card, Typography } from '@mui/material';

function App() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { data, loading, error } = useFetchData(selectedOption);

  const indicatorCards = data ? [{
        title: 'Temperatura 2m',
        value: `${data.current.temperature_2m} ${data.current_units.temperature_2m}`,
      },
      {
        title: 'Temperatura aparente',
        value: `${data.current.apparent_temperature} ${data.current_units.apparent_temperature}`,
      },
      {
        title: 'Humedad relativa',
        value: `${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m}`,
      },
      {
        title: 'Velocidad del viento',
        value: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
      },
      {
        title: 'Hora actual',
        value: data.current.time,
      },
    ]
    : [];

  return (
    <Grid container spacing={4} sx={{ p: 3 }}>

      <Grid size={{ xs: 12 }}>
        <HeaderUI />
      </Grid>

      <Grid size={{ xs: 12 }} container spacing={3} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <SelectorUI onOptionSelect={setSelectedOption} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <AlertUI description="No se preveen lluvias" />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grid container spacing={3}>
          {loading ? (
            <Grid size={{ xs: 12 }}>
              <IndicatorUI title="Cargando datos" value="Espera mientras se obtiene la información." />
            </Grid>
          ) : error ? (
            <Grid size={{ xs: 12 }}>
              <IndicatorUI title="Error al cargar datos" value={error} />
            </Grid>
          ) : (
            indicatorCards.map((indicator) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={indicator.title}>
                <IndicatorUI title={indicator.title} value={indicator.value} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }} container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <ChartUI hourly={data?.hourly ?? null} loading={loading} error={error} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <TableUI hourly={data?.hourly ?? null} loading={loading} error={error} />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: 2, backgroundColor: 'var(--panel-bg)', border: '1px solid var(--panel-border)', boxShadow: 'var(--panel-shadow)' }}>
              <Typography variant="h6">Información adicional</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                El dashboard utiliza datos de Open-Meteo en tiempo real y agrupa los principales indicadores climáticos.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

