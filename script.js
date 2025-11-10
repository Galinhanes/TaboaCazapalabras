// Nombres para los encabezados de las COLUMNAS (12 nombres)
const columnNames = [
   "Alumno", "Avaliación", "Calendario", "Capacidade", "Diagrama", "Formación", "Gráfico",
    "Obxectivo", "Proxector", "Recurso", "Rotafolios", "Taboleiro", 
];

// Nombres para los encabezados de las FILAS (12 nombres)
const rowNames = [
    "Bruno", "Belén", "Mariel", "Álvaro", "Abraham", "Sara",
    "Marta", "Borja", "Ana María", "Olga", "Jesús", "Salvador"
];

const table = document.getElementById('colorTable');

// Función para generar la tabla
function generateTable() {
    // 1. Generar el encabezado de la columna (primera fila)
    let headerRow = table.insertRow();
    
    // Celda superior izquierda vacía
    let cornerCell = headerRow.insertCell();

    // Llenar los encabezados de columna con los nombres de 'columnNames'
    columnNames.forEach(name => {
        let th = document.createElement('th');
        th.textContent = name;
        headerRow.appendChild(th);
    });

    // 2. Generar las filas de datos
    // Usamos 'rowNames' para los encabezados de las filas
    rowNames.forEach((rowName, rowIndex) => {
        let row = table.insertRow();
        
        // Primera celda de la fila es el encabezado de fila
        let rowHeader = document.createElement('th');
        rowHeader.textContent = rowName;
        row.appendChild(rowHeader);
        
        // 3. Generar las 12 celdas de datos por fila
        // La longitud sigue siendo 12, determinada por el número de 'columnNames'
        for (let i = 0; i < columnNames.length; i++) {
            let cell = row.insertCell();
            // Inicia todas las celdas de datos con la clase 'green-bg'
            cell.classList.add('green-bg'); 
            
            // Asigna el evento de clic a la celda
            cell.addEventListener('click', toggleColor);
        }
    });
}

// Función para cambiar el color al hacer clic
function toggleColor(event) {
    const cell = event.target; // La celda que se ha clicado
    
    // Alterna (quita si está, pone si no está) la clase 'red-bg'
    cell.classList.toggle('red-bg'); 
}

// Llama a la función para construir la tabla al cargar el script
generateTable();