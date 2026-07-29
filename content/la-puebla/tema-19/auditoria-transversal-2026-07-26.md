# Auditoría transversal · Tema 19 · actualización 29 de julio de 2026

## Alcance revisado

- `manual.md`
- `matriz.json`
- `preguntas.json`
- cinco bloques modulares
- `fuentes.md`
- epígrafe oficial del BOP de Toledo número 82, de 5 de mayo de 2026

## Cobertura técnica

El contenido cubre de forma coherente el epígrafe oficial sobre conceptos generales del ordenador personal y periféricos:

- hardware, software, firmware y controladores;
- placa base, CPU, RAM, almacenamiento, GPU, fuente y refrigeración;
- periféricos de entrada, salida, almacenamiento y comunicación;
- impresoras de inyección y láser, cola de impresión y dispositivos de red;
- escáneres, ADF, resolución y OCR;
- HDD y SSD externos, memorias USB, particiones, sistemas de archivos y retirada segura;
- lectores y grabadores de CD y DVD, soportes ROM, R y RW.

La matriz refleja correctamente que el epígrafe es técnico y no remite a una norma jurídica específica. La vigencia se ha reconfirmado con documentación oficial actual de Microsoft y USB-IF.

La documentación vigente de Microsoft distingue las directivas **Eliminación rápida** y **Mejor rendimiento** para soportes externos: la segunda puede usar caché de escritura y exige utilizar la retirada segura para proteger la integridad de los datos. La documentación USB-IF mantiene la distinción entre el conector USB Type-C y las prestaciones concretas del enlace.

No se detectó error técnico material en las 12 preguntas revisadas. Se mantiene correctamente la distinción entre USB-C como conector y las versiones del estándar USB, entre RAM y almacenamiento, entre escaneo y OCR, y entre dispositivo físico y cola o unidad lógica.

## Cambios aplicados

1. `manual.md`
   - título visible normalizado;
   - estado editorial normalizado a `PUBLICADO`;
   - fecha de revisión técnica actualizada a **29 de julio de 2026**;
   - eliminados los metadatos históricos y el apartado interno `Estado real`;
   - añadida una llamada homogénea `¡Foco Examen!` sobre USB-C;
   - precisada la retirada segura según la directiva de caché y rendimiento.

2. `matriz.json`
   - fecha de revisión técnica actualizada a `2026-07-29`;
   - incorporadas como referencias actuales la directiva de eliminación de soportes de Microsoft y la especificación USB Type-C 2.5 de USB-IF;
   - precisado el contenido exigible sobre eliminación rápida, mejor rendimiento y retirada segura.

3. `preguntas.json`
   - verificadas las 12 preguntas, sus cuatro opciones, respuestas, justificaciones, trampas y referencias;
   - no fue necesario modificar el banco.

## Incidencias abiertas

- Deben validarse visualmente los enlaces relativos de los cinco bloques y `fuentes.md`.
- Las llamadas destacadas de los bloques deben homogeneizarse al patrón OpoWeb sin alterar referencias internas.

## Resultado

**Tema 19 normalizado editorialmente y técnicamente actualizado.** Permanece en `EN_REVISION` hasta completar los controles generales de enlaces, llamadas y esquema final de la fase 2.
