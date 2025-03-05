# DIW_Tailwindcss_PachecoRopero_Raul

# ACTIVIDAD 14

# Análisis nivel AA

| CRITERIO | DESCRIPCIÓN | ¿LO CUMPLE MI PÁGINA? |
| :---- | :---- | ----- |
| 1.2.4 Subtítulos (En Vivo) | Todo audio en vivo debe tener subtítulos en tiempo real. | NO |
| 1.2.5 Audiodescripción (Pregrabado) | Los videos deben incluir audiodescripción si hay información visual clave. | NO |
| 1.3.4 Orientación | El contenido no debe restringirse a una sola orientación (vertical u horizontal). | SÍ |
| 1.3.5 Identificación del Propósito de Entrada | Los campos de formulario deben indicar su propósito semánticamente. | NO |
| 1.4.3 Contraste (Mínimo) | El texto debe tener un contraste mínimo de 4.5:1 (3:1 para texto grande). | SÍ |
| 1.4.4 Redimensionamiento del Texto | El texto debe poder aumentarse hasta 200% sin perder funcionalidad. | SÍ |
| 1.4.5 Imágenes de Texto | Evitar imágenes con texto, excepto cuando sean esenciales. | SÍ |
| 1.4.10 Reajuste del Texto | El contenido no debe requerir desplazamiento horizontal a 320 píxeles. | SÍ |
| 1.4.11 Contraste de Componentes No Textuales | Elementos interactivos deben tener contraste de 3:1 con el fondo. | SÍ |
| 1.4.12 Espaciado del Texto | El usuario debe poder modificar interlineado, espaciado y párrafos. | NO |
| 1.4.13 Controles de Entrada Accesibles | Los controles de entrada deben ser utilizables sin gestos complejos. | SÍ |
| 2.4.5 Múltiples Formas de Navegación | Debe haber más de una forma de encontrar contenido. | SÍ |
| 2.4.6 Encabezados y Etiquetas | Los encabezados y etiquetas deben describir su propósito claramente. | SÍ |
| 2.4.7 Foco Visible | Los elementos navegables deben tener una indicación visual cuando están enfocados. | SÍ |
| 2.5.1 Modos de Entrada | No se deben requerir gestos complejos para interactuar. | SÍ |
| 3.1.2 Idioma de las Partes | Se debe indicar el idioma de diferentes partes del contenido. | NO |
| 3.2.3 Navegación Consistente | La navegación debe mantenerse igual en todas las páginas. | SÍ |
| 3.2.4 Identificación Consistente | Componentes que cumplen la misma función deben tener la misma etiqueta y función. | SÍ |
| 3.3.3 Sugerencias ante Errores | Se deben ofrecer sugerencias cuando un usuario comete un error. | SÍ |
| 3.3.4 Prevención de Errores (Legales y Financieros) | Debe haber confirmación antes de acciones críticas. | SÍ |
| 4.1.3 Mensajes de Estado | Los mensajes de estado deben ser anunciados sin perder el foco. | NO |


# Primera prueba automatizada  
Para realizar una prueba automatizada he utilizado la herramienta de **lighthouse,** que es una herramienta gratuita que ofrece Chrome. 

Para utilizarla debemos ejecutar nuestra página y pulsar **F12.** Cuando se abren las herramientas de desarrolladores seleccionamos la pestaña de **LIghthouse.**

Dejamos el modo por defecto, en Device seleccionamos **Desktop** y en Categorías vamos a seleccionar solo **Accesibilidad** que es lo que nos interesa por ahora.

![Imagen 1](https://files.catbox.moe/5xzmbs.png "Imagen 1")


Una vez configurado **Lighthouse** presionamos **Analyze page load,** y cuando termine de analizar nuestra página, presionamos en los tres puntos y seleccionamos **Save as HTML.**  

![Imagen 2](https://files.catbox.moe/cl70xk.png "Imagen 2")

# Corrección de errores

Mi página solo tenía problemas con el contraste de colores, entre el color de la fuente y el color de fondo.

![Imagen 3](https://files.catbox.moe/ne1txa.png "Imagen 3")

Por ejemplo, este error ocurría en la sección **user-reviews** en la página de inicio. Ya que el fondo era blanco y el texto tenía un color gris claro. 

![Imagen 4](https://files.catbox.moe/lmuc2b.png "Imagen 4")

Para solucionarlo he utilizado un color más oscuro para mantener un contraste mayor a 4.5.

![Imagen 5](https://files.catbox.moe/p32csv.png "Imagen 5")

Después he realizado el mismo procesos con todas las fuentes que no cumplía con el contraste de color.

# Segunda prueba automatizada

Una vez corregidos todos realizamos otra prueba de accesibilidad usando **Lighthouse.** La accesibilidad debe ser del 100%.

![Imagen 6](https://files.catbox.moe/18bo6m.png "Imagen 6")

