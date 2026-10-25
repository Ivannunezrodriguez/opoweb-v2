# Diputación Provincial de Toledo · Auxiliar Administrativo C2 · Tema 19

**ESTADO EDITORIAL: BORRADOR ESPECÍFICO PARCIAL, PENDIENTE DE AMPLIACIÓN Y AUDITORÍA FUNCIONAL.**

## 1. Epígrafe oficial literal

> **Tema 19. LibreOffice 24 II. Utilización de documentos de hoja de cálculo con LibreOffice 24 Calc.**

**Fuente:** BOP Toledo **n.º 197, 14/10/2026**, **Anexo XI**, CSV **2026.00004759**.

## 2. Producto y documentación de versión

Calc es el componente de hojas de cálculo de LibreOffice. El formato abierto nativo es **ODS** y el de plantilla **OTS**. Una fórmula comienza con **=** y puede utilizar referencias relativas, absolutas y mixtas.

**Guía oficial de Calc para LibreOffice 24.2:** https://books.libreoffice.org/en/CG24/CG24.html

Se utiliza como referencia **LibreOffice 24.2**, de la rama **24**. El epígrafe no especifica subversión. **No** se incorpora como materia principal Microsoft Word ni Excel. El contenido que sigue es un **núcleo inicial**, no reemplaza la guía del fabricante ni el desarrollo práctico completo.

## 3. Libro, hojas y celdas en Calc 24

- **Libro/documento**: archivo que contiene una o varias hojas.
- **Hoja**: cuadrícula de filas y columnas.
- **Celda**: intersección de una fila y una columna, identificable por referencia como `B3`.
- **Rango**: conjunto de celdas, por ejemplo `A1:C10`.
- **Fórmula**: expresión que calcula un resultado, normalmente comenzando por `=`.
- **Función**: operación predefinida con argumentos, por ejemplo `SUMA`, según nombres e idioma de instalación.

### 3.1. Referencias y fórmulas

| Referencia | Tipo | Al copiar una fórmula |
|---|---|---|
| `A1` | Relativa | Cambia fila y columna según desplazamiento |
| `$A$1` | Absoluta | Mantiene fila y columna |
| `$A1` | Mixta | Columna fija, fila relativa |
| `A$1` | Mixta | Columna relativa, fila fija |

La formulación exacta de funciones, separadores y formatos puede depender de la configuración regional de Calc. No se deben trasladar automáticamente convenciones de Excel.

### 3.2. Datos, formato y validación

- Introducir texto, números, fechas y fórmulas.
- Distinguir **valor almacenado** y **formato mostrado** (porcentaje, moneda, fecha).
- Utilizar formatos de celda, alineación, bordes, estilos y formato condicional.
- Aplicar validación para limitar entradas, cuando corresponda.

### 3.3. Organización y análisis

- **Ordenar** reorganiza registros por los criterios establecidos.
- **Filtrar** limita las filas visibles sin equivaler a su borrado.
- Utilizar subtotales, funciones estadísticas y tablas dinámicas en los términos de la guía Calc 24.2.
- Crear gráficos partiendo de rangos seleccionados.

### 3.4. Impresión y documentos

- Configurar áreas de impresión, orientación, escala, encabezados, pies y saltos de página.
- Guardar en formato **ODS**, exportar a **PDF** e importar o exportar **CSV**, identificando diferencias entre archivos de hoja de cálculo y archivos de texto delimitado.

### 3.5. Protección, errores y revisión

- Distinguir protección de hoja, protección de celdas y seguridad del archivo.
- Reconocer errores de fórmulas por su código, tras cotejar el mensaje exacto con la guía de la versión 24.

> ⚠️ **¡Foco Examen!:** **Filtrar** no elimina registros y **formatear como porcentaje** no cambia por sí mismo la fórmula de cálculo. La referencia `$A$1` conserva columna y fila cuando se copia.


## 4. Auditoría y ampliaciones pendientes

1. Verificar rutas exactas de menús, botones y atajos en **LibreOffice 24** bajo Windows.
2. Desarrollar apartados avanzados documentados en la guía **24.2** sin reutilizar instrucciones específicas de Microsoft Office.
3. Elaborar ejercicios resueltos y preguntas vinculadas a los capítulos del fabricante.
4. Comprobar formatos, valores y opciones dependientes de la configuración de idioma, tipo de archivo y plataforma.

**No marcar este tema PUBLICADO hasta completar estos controles.**
