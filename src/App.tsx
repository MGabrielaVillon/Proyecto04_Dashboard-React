import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido al Dashboard</h1>
        <p>Esta es la base del proyecto React con Vite.</p>
      </header>

      <section className="dashboard-grid">
        <div className="dashboard-card">Encabezado</div>
        <div className="dashboard-card">Alertas</div>
        <div className="dashboard-card">Selector</div>
        <div className="dashboard-card">Indicadores</div>
        <div className="dashboard-card">Gráfico</div>
        <div className="dashboard-card">Tabla</div>
        <div className="dashboard-card">Información adicional</div>
      </section>
    </div>
  )
}

export default App
