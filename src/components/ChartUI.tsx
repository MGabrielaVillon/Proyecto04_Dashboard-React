import { LineChart } from '@mui/x-charts/LineChart';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { type Hourly } from '../types/DashboardTypes';

interface ChartUIProps {
  hourly: Hourly | null;
  loading: boolean;
  error: string | null;
}

export default function ChartUI({ hourly, loading, error }: ChartUIProps) {
  const maxPoints = 24;
  const labels = hourly?.time.slice(0, maxPoints) ?? [];
  const temperatureData = hourly?.temperature_2m.slice(0, maxPoints) ?? [];
  const windSpeedData = hourly?.wind_speed_10m.slice(0, maxPoints) ?? [];
  const humidityData = hourly?.relative_humidity_2m.slice(0, maxPoints) ?? [];
  const apparentTemperatureData = hourly?.apparent_temperature.slice(0, maxPoints) ?? [];

  return (
    <Box sx={{ backgroundColor: 'var(--panel-bg)', border: '1px solid var(--panel-border)', boxShadow: 'var(--panel-shadow)', borderRadius: 3, p: 2 }}>
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Datos horarios
      </Typography>

      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : loading ? (
        <Typography>Cargando datos del gráfico...</Typography>
      ) : hourly && labels.length > 0 ? (
        <LineChart
          height={360}
          series={[
            { data: temperatureData, label: 'Temperatura 2m (°C)' },
            { data: apparentTemperatureData, label: 'Temperatura aparente (°C)' },
            { data: humidityData, label: 'Humedad (%)' },
            { data: windSpeedData, label: 'Viento 10m (m/s)' },
          ]}
          grid={{ horizontal: true, vertical: false }}
          xAxis={[
            {
              scaleType: 'point',
              data: labels,
              label: 'Hora',
              tickLabelStyle: { fill: 'var(--panel-text)', opacity: 0.92, fontSize: 12 },
              labelStyle: { fill: 'var(--panel-text)', opacity: 0.96 },
              slotProps: {
                axisLine: { stroke: 'rgba(148, 163, 184, 0.7)', strokeWidth: 1 },
                axisTick: { stroke: 'rgba(148, 163, 184, 0.7)', strokeWidth: 1 },
              },
            },
          ]}
          yAxis={[
            {
              label: 'Valor',
              tickLabelStyle: { fill: 'var(--panel-text)', opacity: 0.92, fontSize: 12 },
              labelStyle: { fill: 'var(--panel-text)', opacity: 0.96 },
              slotProps: {
                axisLine: { stroke: 'rgba(148, 163, 184, 0.7)', strokeWidth: 1 },
                axisTick: { stroke: 'rgba(148, 163, 184, 0.7)', strokeWidth: 1 },
              },
            },
          ]}
          hideLegend={false}
          slotProps={{
            legend: {
              sx: { color: 'var(--panel-text)' },
            },
            tooltip: {
              trigger: 'axis',
              anchor: 'pointer',
              position: 'top',
            },
          }}
        />
      ) : (
        <Typography>No hay datos suficientes para generar el gráfico.</Typography>
      )}
    </Box>
  );
}
