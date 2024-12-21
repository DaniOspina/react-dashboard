import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FilterComponent = ({ filter, setFilter }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Filtrar por Estado</InputLabel>
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        label="Filtrar por Estado"
      >
        <MenuItem value="All">Todos</MenuItem>
        <MenuItem value="Exitosa">Exitosa</MenuItem>
        <MenuItem value="Fallida">Fallida</MenuItem>
        <MenuItem value="En Proceso">En Proceso</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterComponent;
