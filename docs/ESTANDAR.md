
# Estándar de código del equipo

**Proyecto:** ArenaGG
**Equipo:** 5  
**Fecha:** 28/10/2026

Este documento es un acuerdo del equipo. Todas las personas lo siguen y se usa para revisar los pull requests.

## 1. HTML

1. El documento incluye doctype, lang, meta charset, meta viewport y un title con texto.
2. Etiquetas y atributos en minúsculas; valores entre comillas dobles.
3. Indentación de 2 espacios, sin tabulaciones.
4. Estructura semántica: header, nav, main, section, article, footer.
5. Un solo h1 por página y encabezados en orden.
6. Toda imagen lleva alt.
7. Sin estilos en línea y sin br para espaciar.

## 2. CSS

1. El CSS vive en un archivo aparte (css/style.css).
2. Clases en kebab-case que dicen qué es, no cómo se ve.
3. Una propiedad por línea y un bloque por selector.
4. Colores y medidas repetidas en variables dentro de :root.
5. Sin !important ni selectores por id para dar estilo.
6. Diseño adaptable: unidades relativas, flex o grid, max-width en lugar de anchos fijos.

## 3. Nuestras reglas propias

1. Tener una carpeta para cada archivo.
2. Las imágenes tendrán nombres descriptivos en minúsculas y con guiones, por ejemplo: logo-empresa.png.
3. Las propiedades CSS se ordenarán por grupos: posicionamiento, dimensiones, espaciado, tipografía y apariencia.
4. Los comentarios se usarán para identificar secciones importantes y explicar código complejo.

## 4. Archivos, ramas y commits

- Carpetas y archivos: minúsculas con guiones, sin espacios ni tildes (css/, js/, img/).
- Ramas: feature/, fix/ o docs/ seguido de una descripción corta.
- Commits: en presente, que expliquen qué se hizo.
- La rama main se mantiene estable y los cambios se integran mediante pull requests.

## 5. Base de datos

- Tablas: plural y en snake_case (detalle_pedido).
- Columnas: snake_case. Claves foráneas con el nombre de la tabla en singular y _id (cliente_id).
- Palabras clave de SQL en MAYÚSCULAS.

## 6. Cómo lo verificamos

- Herramientas: revisión manual del código en VS Code y validación HTML/CSS.
- Quién revisa cada pull request: otro integrante del equipo que no haya realizado el cambio.
- Qué pasa si una regla no se cumple: se solicita corregir el código antes de aprobar el pull request.
