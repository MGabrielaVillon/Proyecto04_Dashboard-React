import { Grid, Paper, Typography } from '@mui/material'
import './App.css'

function App() {
  return (
    <Grid container spacing={2} sx={{ padding: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bienvenido al Dashboard
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>Elemento: Encabezado</Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>Elemento: Alertas</Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>Elemento: Selector</Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>Elemento: Indicadores</Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>Elemento: Gráfico</Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>Elemento: Tabla</Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>Elemento: Información adicional</Paper>
      </Grid>
    </Grid>
  )
}

export default App
