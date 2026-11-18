# Auditoría técnica · Tema 15 · 18 de julio de 2026

## Epígrafe oficial

> **Tema 15. Microsoft Windows I. Creación, copiado y borrado de archivos y carpetas. Las unidades de disco locales y de red. Impresión y digitalización de documentos.**

## Fuentes oficiales contrastadas

- Documentación oficial de Microsoft sobre el Explorador de archivos en Windows 11.
- Documentación oficial de Microsoft sobre instalación y uso de escáneres y la aplicación Escáner de Windows.
- Documentación oficial del ciclo de vida de Windows 10.

## Resultado

**Estado:** `AUDITADO_TECNICA_VIGENTE`.

No se detectan errores sustantivos en el manual. La elección de **Windows 11** como referencia principal es correcta: el soporte general de Windows 10 finalizó el **14 de octubre de 2025**, sin perjuicio de ciclos LTSC y programas de actualizaciones extendidas específicos.

## Operaciones confirmadas

| Materia | Regla técnica |
|---|---|
| Abrir Explorador | `Windows + E` |
| Copiar | conserva el original y crea otro ejemplar |
| Mover | cambia la ubicación del elemento |
| Papelera | se utiliza normalmente para eliminaciones compatibles en unidades locales |
| `Mayús + Supr` | solicita eliminar sin pasar por la Papelera |
| Ruta UNC | `\\servidor\recurso\carpeta` |
| Unidad de red asignada | letra que representa un recurso remoto; no lo convierte en disco local |
| Microsoft Print to PDF | impresora virtual que genera un PDF; no escanea |
| Digitalización | transforma un original físico en un archivo mediante escáner |
| OCR | reconoce texto; no es inherente a toda digitalización |

## Revisión de digitalización

La documentación vigente de Microsoft confirma que la aplicación **Escáner de Windows** permite seleccionar:

- escáner;
- origen, como superficie plana o alimentador;
- tipo de archivo;
- carpeta de destino.

Si no se selecciona otra ubicación, el destino habitual es la carpeta **Imágenes/Digitalizaciones** del perfil del usuario.

## Precisión sobre formatos

La aplicación Escáner de Windows documenta como formatos de imagen disponibles **JPEG, PNG, TIFF y mapa de bits**. Un documento multipágina en PDF puede requerir software del fabricante, una aplicación específica o una operación posterior. Debe evitarse presentar la aplicación Escáner como generador universal de PDF multipágina.

## Incidencias de examen revisadas

- Cambiar la extensión no convierte el formato real.
- El comportamiento del arrastre depende del origen, destino y modificadores.
- Una unidad `Z:` puede ser un recurso de red.
- Eliminar en red o en determinados dispositivos puede no utilizar la Papelera local.
- Digitalizar no equivale automáticamente a generar texto editable.
- Imprimir en PDF no es digitalizar.

> ⚠️ **¡Foco Examen!:** **Copiar** conserva el original; **mover** cambia su ubicación; un **acceso directo** solo referencia al original. La letra de unidad no permite saber por sí sola si el almacenamiento es local o de red.

## Conclusión

El Tema 15 puede mantenerse como material de estudio vigente. No requiere corrección sustantiva. Se recomienda conservar el enfoque funcional y evitar preguntas dependientes de pequeñas variaciones visuales entre compilaciones de Windows 11.