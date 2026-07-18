# OpoWeb · Prioridades de convocatorias · 18 de julio de 2026

## Decisión de alcance

- **Diputación Provincial de Toledo · Administrativo C1:** desarrollo prioritario.
- **Universidad Carlos III de Madrid · Escala Auxiliar Administrativa C2:** desarrollo prioritario.
- **Las Ventas con Peña Aguilera:** archivada, sin generación de temario, test, supuestos ni mantenimiento activo.
- **La Puebla de Montalbán:** cerrada funcionalmente y en mantenimiento.
- **Carranque:** se conserva, pero queda por detrás de Diputación y UC3M.

## Orden de trabajo

### 1. Diputación Provincial de Toledo · Administrativo C1

1. importar el programa oficial completo de **40 temas**;
2. construir la matriz de reutilización frente a La Puebla y Carranque;
3. reutilizar únicamente contenido ya auditado cuando el epígrafe y la normativa coincidan;
4. completar los temas específicos de Diputación;
5. cerrar el bloque del **OAPGT** solo con sus Estatutos íntegros, oficiales y vigentes;
6. generar preguntas, supuestos y simulacros con trazabilidad individual;
7. integrar selector de convocatoria y progreso independiente.

> ⚠️ **¡Foco Examen!:** no se redactarán de memoria la composición, competencias, órganos, quórums o funciones del OAPGT. El tema correspondiente quedará con reserva documental hasta disponer del texto estatutario oficial íntegro.

### 2. Universidad Carlos III de Madrid · Auxiliar Administrativo C2

1. importar los **20 temas** del programa oficial;
2. separar temas generales, recursos humanos, gestión universitaria y bloque ofimático;
3. reutilizar Constitución, procedimiento, administración electrónica, empleo público y ofimática cuando exista coincidencia real;
4. mantener como contenido específico la LOSU, Estatutos UC3M, normativa académica, presupuesto y contratación universitaria;
5. generar test, simulacros y seguimiento independiente de esta convocatoria.

## Reglas de arquitectura

- Un contenido común se mantiene en una única fuente editorial y se referencia desde cada convocatoria.
- Cada convocatoria conserva su propio programa, orden de temas, estado, preguntas y progreso.
- Los resultados almacenados en el navegador no se mezclan entre oposiciones.
- Una convocatoria descartada no aparece como opción activa de estudio.
- Toda cifra, plazo, mayoría, cuantía u órgano competente debe conservar trazabilidad a una fuente oficial.
