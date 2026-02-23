# Ejercicio1 : Gestión de Aprendices

         Descripción:
Este ejercicio consiste en trabajar con un grupo de aprendices usando JavaScript puro. Cada aprendiz tiene un ID, nombre, ficha y nota.

    Estructura de los datos:
Cada aprendiz tiene la siguiente información:
-ID
-Nombre
-Número de ficha
-Nota final

Funcionalidades implementadas:

1. Obtener aprendices aprobados:
Se creó una función que filtra a los aprendices con nota mayor o igual a 3.0.
Esto permite identificar quiénes aprobaron el curso.

2️. Calcular el promedio del grupo:
Se sumaron todas las notas y luego se dividieron entre la cantidad de aprendices para obtener el promedio general del grupo.

3️. Buscar aprendiz por nombre:
Se implementó una función que permite buscar un aprendiz específico por su nombre.
Si el nombre coincide, se devuelve la información completa del aprendiz.

4️. Obtener solo los nombres:
Se creó una función que devuelve un nuevo arreglo que contiene únicamente los nombres de los aprendices, sin mostrar el resto de la información.

¿Qué aprendí con este ejercicio?
-Cómo usar arreglos de objetos
-Cómo filtrar información
-Cómo buscar elementos específicos
-Cómo calcular promedios

               Conclusión:
Este proyecto demuestra cómo se puede manejar información de manera organizada usando JavaScript puro. Es una base importante para desarrollar aplicaciones más grandes en el futuro, como sistemas académicos o paneles de seguimiento de notas.


# Ejercicio2: Gestión de Productos (Filtros y transformaciones)

        Descripción:
Este ejercicio consiste en trabajar con un pequeño inventario de productos utilizando JavaScript puro. Cada producto tiene un nombre, un precio y una cantidad disponible en stock.
El objetivo fue practicar cómo manipular información dentro de un arreglo de objetos y aplicar diferentes funciones para simular operaciones básicas de una tienda.

Estructura de los datos:
Cada producto contiene:
-Nombre
-Precio
-Cantidad disponible (stock)

Funcionalidades implementadas:

1️. Obtener productos disponibles:
Se creó una función que devuelve únicamente los productos que tienen stock mayor a 0.

2️. Calcular el valor total del inventario:
Se implementó una función que calcula cuánto dinero representa todo el inventario disponible.
Para esto se multiplica el precio por la cantidad de cada producto y luego se suman todos los valores.
Esto simula cuánto vale la tienda en productos almacenados.

3️. Aplicar descuento a los productos:
Se desarrolló una función que reduce el precio de todos los productos según un porcentaje dado.
Por ejemplo, si se aplica un 10% de descuento, el precio de cada producto disminuye automáticamente en ese porcentaje.
Esto permite simular promociones o rebajas.

4️. Ordenar productos por precio:
Se creó una función que organiza los productos de menor a mayor precio.
Esto ayuda a visualizar los productos desde el más económico hasta el más costoso.

        Conclusión:
Este proyecto me permitió entender cómo manejar productos, precios y cantidades usando JavaScript puro. Es una base importante para futuros proyectos como sistemas de ventas, tiendas virtuales o aplicaciones administrativas.


# Ejercicio: Contactos (Manipulación de contactos)

        Descripción:
Este proyecto consiste en desarrollar una pequeña agenda de contactos utilizando JavaScript puro. El objetivo principal fue practicar la manipulación de arreglos de objetos y aplicar operaciones básicas como agregar, buscar, actualizar y eliminar información.
La aplicación funciona desde la consola y simula el comportamiento básico de una agenda digital.

Estructura de los datos:
Cada contacto contiene la siguiente información:
-ID único (generado automáticamente)
-Nombre
-Teléfono
-Correo electrónico
Los contactos se almacenan dentro de un arreglo que se va actualizando cada vez que se realiza una operación.

Funcionalidades implementadas:

1️. Agregar contacto:
Permite crear un nuevo contacto con un ID único generado automáticamente.
El contacto se guarda en el arreglo principal.

2️. Eliminar contacto:
Permite eliminar un contacto usando su ID.
Si el contacto no existe, el sistema muestra un mensaje informando que no fue encontrado.

3️. Buscar contacto:
Permite buscar un contacto por nombre o correo electrónico.
La búsqueda no distingue entre mayúsculas y minúsculas, lo que facilita encontrar resultados.

4️. Actualizar contacto:
Permite modificar la información de un contacto existente sin borrar los demás datos.
Se puede actualizar solo el campo que se necesite (por ejemplo, el teléfono).

5️. Exportar a formato JSON
Convierte el arreglo de contactos en formato JSON.
Esto permite guardar la información o enviarla a otro sistema si fuera necesario.

        Conclusión
Este proyecto me permitió entender cómo manejar información dinámica en JavaScript y cómo estructurar funciones para que el código sea más organizado y claro.