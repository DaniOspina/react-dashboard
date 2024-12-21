# **React Dashboard - Gestión de Llamadas**

Este proyecto es un dashboard desarrollado en React que permite gestionar y visualizar datos de llamadas. Incluye una tabla dinámica con un filtro funcional y está completamente estilizado con Material-UI.

---

## **Características del Proyecto**

- **Visualización de Datos**: Tabla que muestra:
  - ID de la llamada.
  - Duración (en minutos).
  - Estado de la llamada (Exitosa, Fallida, En Proceso).
  - Fecha y hora.
- **Filtrado de Datos**: Filtro funcional para mostrar solo llamadas según su estado.
- **Estilos Profesionales**: Diseño responsivo y estilizado con Material-UI.

---

## **Tecnologías Utilizadas**

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Material-UI**: Framework para diseño UI profesional.
- **Fetch API**: Para simular la carga de datos desde un archivo JSON local.

---

## **Requisitos Previos**

- Node.js >= 14
- npm >= 6

---

## **Instalación y Configuración**

### Clonar el Repositorio

```bash
git clone https://github.com/DaniOspina/react-dashboard.git
cd react-dashboard
```

### Instalar Dependencias

```bash
npm install
```

### Ejecutar la Aplicación

```bash
npm start
```

Esto abrirá la aplicación en tu navegador en la dirección:
```
http://localhost:3000
```

---

## **Estructura del Proyecto**

```
react-dashboard/
├── src/
│   ├── components/
│   │   ├── FilterComponent.jsx  # Filtro de estado
│   │   ├── TableComponent.jsx   # Tabla dinámica
│   ├── theme.js                 # Configuración global del tema
│   ├── App.jsx                  # Componente principal
│   ├── index.js                 # Punto de entrada
├── public/
│   ├── index.html               # Archivo HTML base
│   ├── data.json                # Datos simulados
├── package.json                 # Dependencias y scripts
├── README.md                    # Documentación del proyecto
```

---

## **Cómo Funciona el Proyecto**

1. **Carga de Datos**:
   - Los datos se simulan en un archivo JSON local (`public/data.json`).
   - La aplicación utiliza `fetch` para obtener estos datos y mostrarlos en la tabla.

2. **Tabla Dinámica**:
   - Muestra los datos cargados con encabezados claros y filas responsivas.
   - Estilos ajustados globalmente desde el tema.

3. **Filtro Funcional**:
   - Permite filtrar llamadas según su estado (Exitosa, Fallida, En Proceso).

4. **Indicador de Carga**:
   - Muestra un `CircularProgress` mientras los datos se están obteniendo.

---

## **Datos Simulados**

El archivo `data.json` contiene los datos simulados.

## **Personalización**

### Temas
Los colores, tipografías y espaciado están centralizados en el archivo `theme.js`. Puedes modificarlo para ajustar el diseño global de la aplicación.

