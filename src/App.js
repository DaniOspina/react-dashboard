import React, { useState, useEffect } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import TableComponent from "./components/TableComponent";
import FilterComponent from "./components/FilterComponent";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de fetch de datos desde un archivo local
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error al cargar datos:", error));
  }, []);

  useEffect(() => {
    // Filtrar los datos según el filtro seleccionado
    if (filter === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.estado === filter));
    }
  }, [filter, data]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard de Llamadas
      </Typography>
      <FilterComponent filter={filter} setFilter={setFilter} />
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TableComponent data={filteredData} />
      )}
    </Container>
  );
};

export default App;
