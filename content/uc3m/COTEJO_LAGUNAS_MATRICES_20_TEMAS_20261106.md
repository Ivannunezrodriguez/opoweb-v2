# UC3M C2 — Diagnóstico transversal de las 20 matrices de temas

**Fecha de corte del informe: 06/11/2026.** Comparación de las listas `cobertura[].preguntas` del **banco histórico** con los materiales complementarios añadidos en GitHub. **No** es una auditoría legal completa ni la fuente del estado operativo: esa es exclusivamente [**AUDITORIA_CONTINUA.md**](../../AUDITORIA_CONTINUA.md).

## Resultado y significado

- **20 temas** representados por matrices individuales; **183 bloques** declarados en total.
- **24 bloques** con matriz histórica `preguntas: []`, localizados en **9 temas**.
- **24 bloques** cuentan con material complementario **rastreable** a manual y/o repaso, añadido durante el **06/11/2026**. Se mantiene la lista histórica vacía para no simular que nuevas preguntas estén incorporadas al banco de tests de la web.
- **No implica cobertura jurídica total** ni certificación de las **121** unidades de todas las convocatorias.

| Tema | Bloques en matriz | Sin ítem histórico | Recurso complementario |
|---:|---:|---:|---|
| [**1**](tema-01/matriz.json) | 5 | 0 | No requerido por esta métrica |
| [**2**](tema-02/matriz.json) | 4 | 0 | No requerido por esta métrica |
| [**3**](tema-03/matriz.json) | 9 | 0 | No requerido por esta métrica |
| [**4**](tema-04/matriz.json) | 7 | 0 | No requerido por esta métrica |
| [**5**](tema-05/matriz.json) | 10 | 0 | No requerido por esta métrica |
| [**6**](tema-06/matriz.json) | 6 | 0 | No requerido por esta métrica |
| [**7**](tema-07/matriz.json) | 5 | 0 | No requerido por esta métrica |
| [**8**](tema-08/matriz.json) | 13 | 4 | [**Repaso adicional**](REPASO_IGUALDAD_T08_20261106.md) |
| [**9**](tema-09/matriz.json) | 13 | 2 | [**Repaso adicional**](REPASO_OFIMATICA_T09_20261106.md) |
| [**10**](tema-10/matriz.json) | 11 | 3 | [**Repaso adicional**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| [**11**](tema-11/matriz.json) | 12 | 2 | [**Repaso adicional**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| [**12**](tema-12/matriz.json) | 17 | 4 | [**Repaso adicional**](REPASO_PRL_T12_20261106.md) |
| [**13**](tema-13/matriz.json) | 12 | 4 | [**Repaso adicional**](REPASO_LOSU_T13_20261106.md) |
| [**14**](tema-14/matriz.json) | 12 | 2 | [**Repaso adicional**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| [**15**](tema-15/matriz.json) | 7 | 1 | [**Manual ampliado**](tema-15/manual.md) |
| [**16**](tema-16/matriz.json) | 7 | 0 | No requerido por esta métrica |
| [**17**](tema-17/matriz.json) | 9 | 0 | No requerido por esta métrica |
| [**18**](tema-18/matriz.json) | 8 | 2 | [**Repaso adicional**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| [**19**](tema-19/matriz.json) | 6 | 0 | No requerido por esta métrica |
| [**20**](tema-20/matriz.json) | 10 | 0 | No requerido por esta métrica |

## Bloques concretos donde faltaban preguntas históricas

| Tema | Bloques sin pregunta original | Documento relacionado |
|---|---|---|
| **8** | Tutela y consecuencias; igualdad en empleo público; identidad/expresión de género; lenguaje e imagen inclusivos | [**Consultar**](REPASO_IGUALDAD_T08_20261106.md) |
| **9** | Word 2019 revisión/correspondencia; Excel 2019 gestión de datos | [**Consultar**](REPASO_OFIMATICA_T09_20261106.md) |
| **10** | Marco y ámbito TREBEP; derechos individuales/colectivos; reingreso | [**Consultar**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| **11** | Ámbito RD 364/1995; convocatorias y órganos de selección | [**Consultar**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| **12** | Ámbito PRL; especial sensibilidad; consulta preventiva; coordinación empresarial | [**Consultar**](REPASO_PRL_T12_20261106.md) |
| **13** | Coordinación LOSU; estructuras; docencia; cooperación universitaria | [**Consultar**](REPASO_LOSU_T13_20261106.md) |
| **14** | Derechos/deberes PDI; igualdad/conciliación | [**Consultar**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |
| **15** | Naturaleza de los Estatutos (dos microtests en manual) | [**Consultar**](tema-15/manual.md) |
| **18** | Prórroga presupuesto; tesorería y control | [**Consultar**](REPASO_LOTE_T10_T11_T14_T18_20261106.md) |

## Puntos pendientes — importantes

1. **Integración de entrenamiento:** los archivos de repaso Markdown no pasan a formar parte del motor de tests automáticamente. Deben convertirse a un formato compatible, enlazarse desde la interfaz y probarse. **No usar esta matriz para inflar el número de preguntas disponibles en la web.**
2. **Rigor jurídico:** la existencia de pregunta no valida que su opción, excepción o fecha esté actualizada. Debe cotejarse legislación en su versión exigible y la fuente oficial de cada respuesta.
3. **Corte normativo UC3M:** sigue pendiente verificar con la **resolución primaria** de listas definitivas y convocatoria de ejercicio la fecha que exige la **base primera.7**; no sustituir por el día del examen.
4. **Pruebas reales:** CI, navegador, móvil, WCAG, PWA, enlaces y carga de datos se validan por separado. No presumir calidad integral por tener archivos presentes.
5. **Otras convocatorias:** el tema 6 de **Diputación Auxiliar C2 / OAPGT** permanece bloqueado hasta obtener normas institucionales actualizadas sin incertidumbre.

## Priorización operativa

A corto plazo, **incorporar a una ruta práctica interactiva** las preguntas complementarias ya redactadas, conservando los **bancos oficiales del proyecto** intactos, y realizar validación automática estructural. Después revisar jurídicamente **varios temas a la vez** por artículos críticos: plazos de la Ley 39/2015, competencias de la Ley 40/2015, protección de datos, transparencia y normativa universitaria. La certificación de extremo a extremo requiere pruebas en web desplegada.
