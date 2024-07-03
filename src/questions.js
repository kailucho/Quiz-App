const questions = [
  {
    pregunta: "¿Qué es una clave primaria en una tabla de base de datos?",
    alternativas: [
      {
        texto: "Un campo que puede contener valores duplicados",
        correcta: false,
      },
      {
        texto: "Un campo que identifica de manera única cada fila en la tabla",
        correcta: true,
      },
      {
        texto: "Un campo que no puede contener valores nulos",
        correcta: false,
      },
      {
        texto: "Un campo que define la estructura de la tabla",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Respecto de las claves candidatas en el modelo relacional, señalar la afirmación errónea:",
    alternativas: [
      {
        texto: "Toda relación tiene al menos una clave candidata.",
        correcta: false,
      },
      {
        texto:
          "Una clave candidata es una clave primaria que también cumple la propiedad de minimalidad.",
        correcta: true,
      },
      {
        texto: "Toda clave primaria es también clave candidata.",
        correcta: false,
      },
      {
        texto: "Toda clave alternativa es también clave candidata.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Qué es una transacción en el contexto de bases de datos?",
    alternativas: [
      { texto: "Una consulta SQL", correcta: false },
      {
        texto: "Una operación de mantenimiento de la base de datos",
        correcta: false,
      },
      {
        texto:
          "Un conjunto de operaciones que se ejecutan como una unidad indivisible",
        correcta: true,
      },
      { texto: "Un procedimiento almacenado", correcta: false },
    ],
  },
  {
    pregunta:
      "¿Qué es la normalización de bases de datos y cuál es su objetivo principal?",
    alternativas: [
      {
        texto:
          "Proceso para descomponer grandes tablas en tablas más pequeñas y optimizar el rendimiento.",
        correcta: false,
      },
      {
        texto:
          "Proceso para asegurar que los datos estén correctos y sin errores.",
        correcta: false,
      },
      {
        texto:
          "Proceso para minimizar la redundancia y evitar anomalías de actualización.",
        correcta: true,
      },
      {
        texto:
          "Proceso para eliminar datos duplicados y mejorar la eficiencia de almacenamiento.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Qué es la normalización de BCNF (Boyce-Codd Normal Form)?",
    alternativas: [
      {
        texto: "Forma normal que elimina la dependencia transitiva.",
        correcta: false,
      },
      {
        texto: "Forma normal que elimina la dependencia multivaluada.",
        correcta: false,
      },
      {
        texto:
          "Forma normal que asegura que cada determinante sea una superclave.",
        correcta: true,
      },
      {
        texto:
          "Forma normal que asegura que no haya dependencias funcionales parciales.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es un índice en una base de datos y cuál es su propósito principal?",
    alternativas: [
      {
        texto:
          "Estructura que facilita la organización física de los datos en el disco.",
        correcta: false,
      },
      {
        texto:
          "Estructura que asegura la coherencia y consistencia de los datos.",
        correcta: false,
      },
      {
        texto: "Estructura que acelera la búsqueda y recuperación de datos.",
        correcta: true,
      },
      {
        texto: "Estructura que asegura la privacidad y seguridad de los datos.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué son las vistas en una base de datos y para qué se utilizan?",
    alternativas: [
      {
        texto: "Resultado de una consulta almacenado en una tabla.",
        correcta: false,
      },
      {
        texto: "Definición de una tabla virtual basada en una consulta SQL.",
        correcta: true,
      },
      {
        texto: "Tipo de tabla que almacena los resultados de una operación.",
        correcta: false,
      },
      {
        texto:
          "Tipo de tabla que almacena datos temporales durante una transacción.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Dadas las siguientes relaciones:\nCliente(dni, paterno, materno, nombres, direccion, telefono)\nCuenta(numero_cta, fecha_apertura, saldo, dni_cliente)\n¿Qué tipo de restricción debe agregar y en qué tabla para asegurar que siempre que se introduzca una cuenta nueva el cliente al que pertenece dicha cuenta deba existir previamente y siempre que se borre un Cliente se borren todos sus Cuentas?",
    alternativas: [
      {
        texto:
          "En la relación Cuenta definir el atributo dni_cliente como NOT NULL, como clave ajena el atributo dni_cliente y como opción de borrado especificar CASCADE.",
        correcta: true,
      },
      {
        texto:
          "En la relación Cuenta definir como clave ajena sobre el atributo dni_cliente que especifique como opción de borrado NO ACTION.",
        correcta: false,
      },
      {
        texto:
          "En la relación Cliente definir como clave ajena el atributo dni y como opción de borrado especificar CASCADE.",
        correcta: false,
      },
      {
        texto:
          "En la relación Cuentas definir una restricción CHECK indicando como modo de borrado CASCADE.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es la prueba de carga en el contexto de pruebas de software?",
    alternativas: [
      {
        texto:
          "Prueba para verificar la estabilidad del sistema ante una carga máxima.",
        correcta: true,
      },
      {
        texto:
          "Prueba para encontrar defectos en el software utilizando datos de carga.",
        correcta: false,
      },
      {
        texto:
          "Prueba para verificar la capacidad del software para manejar múltiples usuarios.",
        correcta: false,
      },
      {
        texto:
          "Prueba para verificar la capacidad de recuperación del sistema después de una carga máxima.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es el propósito principal de la prueba de regresión en el ciclo de vida del desarrollo de software?",
    alternativas: [
      {
        texto: "Verificar la corrección de los requisitos del software.",
        correcta: false,
      },
      {
        texto:
          "Asegurar que los nuevos cambios no introduzcan errores en el software existente.",
        correcta: true,
      },
      {
        texto:
          "Evaluar la capacidad de rendimiento del software bajo condiciones normales de uso.",
        correcta: false,
      },
      {
        texto:
          "Optimizar el rendimiento del software utilizando técnicas de carga.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es la automatización de pruebas en el contexto de evaluación de software?",
    alternativas: [
      {
        texto:
          "Proceso para realizar pruebas manuales sin intervención humana.",
        correcta: false,
      },
      {
        texto:
          "Proceso para utilizar herramientas y scripts para ejecutar pruebas automáticamente.",
        correcta: true,
      },
      {
        texto:
          "Proceso para simular la interacción del usuario final con el software.",
        correcta: false,
      },
      {
        texto:
          "Proceso para documentar los resultados de las pruebas de manera automatizada.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es la diferencia principal entre pruebas funcionales y pruebas no funcionales?",
    alternativas: [
      {
        texto:
          "Las pruebas funcionales evalúan la usabilidad del software, mientras que las no funcionales evalúan la funcionalidad.",
        correcta: false,
      },
      {
        texto:
          "Las pruebas funcionales verifican las características del software, mientras que las no funcionales verifican cómo funciona.",
        correcta: false,
      },
      {
        texto:
          "Las pruebas funcionales prueban los requisitos del software, mientras que las no funcionales prueban los atributos del software.",
        correcta: true,
      },
      {
        texto:
          "Las pruebas funcionales prueban la interfaz de usuario, mientras que las no funcionales prueban la lógica interna del software.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es la prueba de penetración en el contexto de seguridad de software?",
    alternativas: [
      {
        texto:
          "Prueba para detectar vulnerabilidades en el código fuente del software.",
        correcta: false,
      },
      {
        texto:
          "Prueba para evaluar el rendimiento del software bajo carga máxima.",
        correcta: false,
      },
      {
        texto:
          "Prueba para simular un ataque real contra el sistema para identificar vulnerabilidades.",
        correcta: true,
      },
      {
        texto:
          "Prueba para verificar la capacidad de recuperación del sistema después de un fallo.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es el objetivo principal de las pruebas de usabilidad en el contexto de evaluación de software?",
    alternativas: [
      {
        texto:
          "Verificar que el software cumple con los estándares de codificación.",
        correcta: false,
      },
      {
        texto:
          "Evaluar la facilidad de uso del software por parte de los usuarios finales.",
        correcta: true,
      },
      {
        texto:
          "Optimizar el rendimiento del software bajo diferentes condiciones.",
        correcta: false,
      },
      {
        texto:
          "Documentar los resultados de las pruebas de rendimiento del software.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es el testing exploratorio en el contexto de pruebas de software?",
    alternativas: [
      {
        texto: "Prueba sistemática basada en casos de prueba predefinidos.",
        correcta: false,
      },
      {
        texto:
          "Prueba realizada por usuarios finales antes de la entrega del software.",
        correcta: false,
      },
      {
        texto:
          "Prueba realizada sin un plan previamente establecido para descubrir defectos.",
        correcta: true,
      },
      {
        texto:
          "Prueba realizada para validar la interfaz de usuario del software.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es la diferencia entre prueba de integración y prueba de unidad en el ciclo de vida del desarrollo de software?",
    alternativas: [
      {
        texto:
          "La prueba de integración evalúa componentes individuales, mientras que la prueba de unidad evalúa el sistema completo.",
        correcta: false,
      },
      {
        texto:
          "La prueba de integración verifica la interfaz del usuario, mientras que la prueba de unidad verifica la lógica interna.",
        correcta: false,
      },
      {
        texto:
          "La prueba de integración verifica la interoperabilidad entre componentes, mientras que la prueba de unidad verifica la funcionalidad de cada unidad.",
        correcta: true,
      },
      {
        texto:
          "La prueba de integración es realizada por usuarios finales, mientras que la prueba de unidad es realizada por desarrolladores.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "El modelo RUP (Rational Unified Process) tiene 3 características esenciales que son:",
    alternativas: [
      {
        texto: "Estructurado, Secuencial, Basado en objetos.",
        correcta: false,
      },
      {
        texto: "Orientado a personas, Basado en UML, Guiado por prototipos.",
        correcta: false,
      },
      {
        texto:
          "Dirigido por casos de uso, Centrado en la arquitectura, Es iterativo e incremental.",
        correcta: true,
      },
      {
        texto:
          "Dominado por casos de uso, Proceso incremental e iterativo, Basado en programación estructurada.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Fueron creadores del método unificado (UML): G. Booch, ……………. y ……………..",
    alternativas: [
      {
        texto: "I. Jacobson y B. Coleman.",
        correcta: false,
      },
      {
        texto: "B. Coleman y J. Rumbaugh",
        correcta: false,
      },
      {
        texto: "B. Coleman, J. Deitel",
        correcta: false,
      },
      {
        texto: "I. Jacobson, J. Rumbaugh",
        correcta: true,
      },
    ],
  },
  {
    pregunta:
      "Reemplaza a la antigua especificación funcional tradicional y constituyen la guía fundamental para las actividades a realizar durante todo el proceso de desarrollo.",
    alternativas: [
      {
        texto: "Diagrama de clases",
        correcta: false,
      },
      {
        texto: "Diagrama de secuencias",
        correcta: false,
      },
      {
        texto: "Diagrama de casos de uso",
        correcta: true,
      },
      {
        texto: "Diagrama de actividades",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "La fase que no corresponde al Modelo RUP es:",
    alternativas: [
      {
        texto: "Inicio",
        correcta: false,
      },
      {
        texto: "Diagramación",
        correcta: true,
      },
      {
        texto: "Construcción",
        correcta: false,
      },
      {
        texto: "Transición",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Es una técnica para capturar información de cómo un sistema o negocio trabaja, o de cómo se desea que trabaje.",
    alternativas: [
      {
        texto: "Diagrama de transición",
        correcta: false,
      },
      {
        texto: "Diagrama de casos de uso",
        correcta: true,
      },
      {
        texto: "Diagrama de secuencia",
        correcta: false,
      },
      {
        texto: "Diagrama de colaboración",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "En el modelo RUP se definen:",
    alternativas: [
      {
        texto: "Nueve flujos de trabajo separados en tres grupos",
        correcta: false,
      },
      {
        texto: "Siete flujos de trabajo separados en dos grupos",
        correcta: false,
      },
      {
        texto: "Nueve flujos de trabajo separados en dos grupos",
        correcta: true,
      },
      {
        texto: "Siete flujos de trabajo separados en tres grupos",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "El elemento donde se define el comportamiento y responsabilidad de un individuo o de un grupo de individuos, corresponde a:",
    alternativas: [
      {
        texto: "Inicio",
        correcta: false,
      },
      {
        texto: "Flujos de trabajo",
        correcta: false,
      },
      {
        texto: "Roles",
        correcta: true,
      },
      {
        texto: "Actividades",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Es una característica significativa de las metodologías ágiles con respecto a las metodologías tradicionales.",
    alternativas: [
      {
        texto: "Continuo feedback acortando el tiempo de entrega",
        correcta: true,
      },
      {
        texto: "Rigidez ante los cambios de manera lenta o moderada",
        correcta: false,
      },
      {
        texto: "Basados en normas de estándares de desarrollo",
        correcta: false,
      },
      {
        texto: "Seguimiento estricto del plan inicial de desarrollo",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Es el encargado de comprobar que el modelo y la metodología funcione. Elimina todos los inconvenientes que impiden que el proceso fluya. La descripción pertenece a:",
    alternativas: [
      {
        texto: "Scrum Master",
        correcta: true,
      },
      {
        texto: "Sprint Backlog",
        correcta: false,
      },
      {
        texto: "Stakeholders",
        correcta: false,
      },
      {
        texto: "Product Owner",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Todas las relaciones son funciones.",
    alternativas: [
      {
        texto: "Falso",
        correcta: true,
      },
      {
        texto: "Verdadero",
        correcta: false,
      },
      {
        texto: "No es una proposición",
        correcta: false,
      },
      {
        texto: "Ninguna de las anteriores",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Todas las funciones son relaciones",
    alternativas: [
      {
        texto: "Falso",
        correcta: false,
      },
      {
        texto: "Verdadero",
        correcta: true,
      },
      {
        texto: "No es una proposición",
        correcta: false,
      },
      {
        texto: "Ninguna de las anteriores",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "La regla de deducción:\np → q\np\n-----------------\n∴ q\nCorresponde a:",
    alternativas: [
      {
        texto: "Modus Ponens",
        correcta: true,
      },
      {
        texto: "Modus Tollens",
        correcta: false,
      },
      {
        texto:
          "Silogismo Hipotético (principio de transitividad de la implicación)",
        correcta: false,
      },
      {
        texto: "Ninguna de las anteriores",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "La regla de deducción:\np → ¬q\n¬q\n-----------------\n∴ ¬p\nCorresponde a:",
    alternativas: [
      {
        texto: "Modus Ponens",
        correcta: false,
      },
      {
        texto: "Modus Tollens",
        correcta: true,
      },
      {
        texto:
          "Silogismo Hipotético (principio de transitividad de la implicación)",
        correcta: false,
      },
      {
        texto: "Ninguna de las anteriores",
        correcta: false,
      },
    ],
  },

  {
    pregunta:
      "La regla de deducción:\np → q\nq → r\n-----------------\n∴ p → r\nCorresponde a:",
    alternativas: [
      {
        texto: "Modus Ponens",
        correcta: false,
      },
      {
        texto: "Modus Tollens",
        correcta: false,
      },
      {
        texto:
          "Silogismo Hipotético (principio de transitividad de la implicación)",
        correcta: true,
      },
      {
        texto: "Ninguna de las anteriores",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "“Permite calcular el cardinal de la unión de varios conjuntos, mediante los cardinales de cada uno de ellos y todas sus posibles intersecciones”. Corresponde a:",
    alternativas: [
      {
        texto: "Demostración por contradicción",
        correcta: false,
      },
      {
        texto: "Demostración por inducción (estructural o matemática)",
        correcta: false,
      },
      {
        texto: "Principio de inclusión y exclusión",
        correcta: true,
      },
      {
        texto: "Ninguna de las anteriores",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Es el dispositivo de mayor velocidad (tiempo de acceso):",
    alternativas: [
      {
        texto: "Memoria principal",
        correcta: false,
      },
      {
        texto: "Cache",
        correcta: false,
      },
      {
        texto: "Registros",
        correcta: true,
      },
      {
        texto: "Disco duro",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "El “almacenamiento en caché” (en inglés: “caching”) es:",
    alternativas: [
      {
        texto:
          "Almacenamiento y reutilización de recursos a los que se accede frecuentemente en las páginas web",
        correcta: false,
      },
      {
        texto:
          "Se utiliza para dispositivos de E/S de alta velocidad capaces de transmitir información a velocidades cercanas a las de la memoria",
        correcta: false,
      },
      {
        texto:
          "Información copiada temporalmente de un almacenamiento más lento (como la memoria principal) a un sistema de almacenamiento más rápido",
        correcta: true,
      },
      {
        texto: "Acceso directo a memoria",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Es el dispositivo de menor velocidad (tiempo de acceso):",
    alternativas: [
      {
        texto: "Memoria principal",
        correcta: false,
      },
      {
        texto: "Cache",
        correcta: false,
      },
      {
        texto: "Registros",
        correcta: false,
      },
      {
        texto: "Disco duro",
        correcta: true,
      },
    ],
  },
  {
    pregunta: "El trabajo principal del “planificador del CPU” consiste en:",
    alternativas: [
      {
        texto: "Elegir un proceso en espera y asignarlo a la CPU",
        correcta: true,
      },
      {
        texto: "Manejar la memoria",
        correcta: false,
      },
      {
        texto: "Proteger del sistema operativo",
        correcta: false,
      },
      {
        texto: "Controlar el uso y almacén de información en un medio físico",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Implica proteger los recursos de la computadora contra el acceso no autorizado, la destrucción o alteración maliciosa y la introducción accidental de inconsistencia. Los recursos de la computadora incluyen la información almacenada en el sistema (tanto datos como código), así como la CPU, la memoria, el almacenamiento secundario, el almacenamiento terciario y las redes.",
    alternativas: [
      {
        texto: "Máquinas virtuales",
        correcta: false,
      },
      {
        texto: "Sistema de archivos",
        correcta: false,
      },
      {
        texto: "Seguridad",
        correcta: true,
      },
      {
        texto: "Sincronización de procesos",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "La cibernética es una disciplina que estudia el:",
    alternativas: [
      {
        texto: "Gobierno y control.",
        correcta: false,
      },
      {
        texto: "Autómata y máquina.",
        correcta: false,
      },
      {
        texto: "Control y comunicación.",
        correcta: true,
      },
      {
        texto: "Estructura y variedad.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Un ejemplo de transformación digital en la organización es:",
    alternativas: [
      {
        texto: "El cambio de modo de pensar respecto a la computadora.",
        correcta: false,
      },
      {
        texto: "Los sistemas de información tradicional.",
        correcta: false,
      },
      {
        texto: "Las redes sociales",
        correcta: false,
      },
      {
        texto: "Gestión documental a través de la estrategia paperless.",
        correcta: true,
      },
    ],
  },
  {
    pregunta: "¿Qué es metanoia?:",
    alternativas: [
      {
        texto:
          "Conjunto de reglas, escritas o no, las cuales determinan nuestra moral, creencias, visión de la realidad y del mundo.",
        correcta: false,
      },
      {
        texto:
          "Conjunto de reglas, escritas, las cuales determinan nuestra moral, creencias, visión de la realidad y del mundo.",
        correcta: false,
      },
      {
        texto: "Cambio profundo proceso de transformación interno.",
        correcta: true,
      },
      {
        texto:
          "Nuevas tecnologías que cambian la visión de la realidad y del mundo.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Desde el punto de vista de la TGS, un ejemplo de emergencia es:",
    alternativas: [
      {
        texto:
          "La caída de internet de una organización que afecta sus operaciones.",
        correcta: false,
      },
      {
        texto: "La crisis de un sistema que requiere atención inmediata.",
        correcta: false,
      },
      {
        texto: "La crisis del covid 19 que afectó a todos los sistemas.",
        correcta: false,
      },
      {
        texto: "El arcoíris que se forma después de la lluvia.",
        correcta: true,
      },
    ],
  },
  {
    pregunta: "Un buen ejemplo de equifinalidad es:",
    alternativas: [
      {
        texto: "María es médico y también ingeniero.",
        correcta: false,
      },
      {
        texto: "Juan es médico, Carlos es ingeniero.",
        correcta: false,
      },
      {
        texto: "Edgar es Ingeniero y Alexandra también.",
        correcta: true,
      },
      {
        texto: "Alexandra es médico, Elmer economista.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "La propiedad de feedback o retroalimentación en un sistema equivale a:",
    alternativas: [
      {
        texto: "Entropía",
        correcta: false,
      },
      {
        texto: "Recursividad",
        correcta: true,
      },
      {
        texto: "Sinergia.",
        correcta: false,
      },
      {
        texto: "Holismo.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "El valor Hexadecimal para el valor 1110000110101001 es:",
    alternativas: [
      {
        texto: "EFAF.",
        correcta: false,
      },
      {
        texto: "E1A9.",
        correcta: true,
      },
      {
        texto: "AF18.",
        correcta: false,
      },
      {
        texto: "FCA9.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Los tres buses principales de la arquitectura convencional de un computador son:",
    alternativas: [
      {
        texto: "Bus de datos, bus de señales, bus de control.",
        correcta: false,
      },
      {
        texto: "Bus de datos, bus de control, bus E/S.",
        correcta: false,
      },
      {
        texto: "Bus de datos, bus de direcciones, bus de control.",
        correcta: true,
      },
      {
        texto: "Bus de direcciones, bus de datos, bus de transmisión.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Los procesos “AS IS”, se refieren a:",
    alternativas: [
      {
        texto: "Procesos nuevos.",
        correcta: false,
      },
      {
        texto: "Los procesos actuales.",
        correcta: true,
      },
      {
        texto: "Procesos rediseñados.",
        correcta: false,
      },
      {
        texto: "Procesos optimizados.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Los procesos 'TO BE', se refieren a:",
    alternativas: [
      {
        texto: "Procesos propuestos.",
        correcta: true,
      },
      {
        texto: "Los procesos actuales.",
        correcta: false,
      },
      {
        texto: "Procesos tecnológicos.",
        correcta: false,
      },
      {
        texto: "Procesos de soporte.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "La triada de la gestión de procesos, son:",
    alternativas: [
      {
        texto: "Personas, tecnología, BPMN.",
        correcta: false,
      },
      {
        texto: "Personas, tecnología, Calidad.",
        correcta: false,
      },
      {
        texto: "Calidad, Personas, procesos.",
        correcta: false,
      },
      {
        texto: "Personas, tecnología, procesos.",
        correcta: true,
      },
    ],
  },
  {
    pregunta: "Una estructura funcional de una organización es un ejemplo de:",
    alternativas: [
      {
        texto: "Gestión por procesos.",
        correcta: false,
      },
      {
        texto: "Gestión tradicional.",
        correcta: true,
      },
      {
        texto: "Gestión piramidal.",
        correcta: false,
      },
      {
        texto: "Gestión innovadora.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "El enfoque por procesos plantea tres bloques grandes estructurales:",
    alternativas: [
      {
        texto:
          "Procesos estratégicos, procesos operativos, procesos de soporte.",
        correcta: true,
      },
      {
        texto: "Procesos estratégicos, procesos tácticos, procesos de soporte.",
        correcta: false,
      },
      {
        texto: "Procesos estratégicos, procesos operativos, procesos tácticos.",
        correcta: false,
      },
      {
        texto:
          "Procesos estratégicos, procesos operativos, procesos tecnológicos.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Normalmente los procesos se pueden descomponer en:",
    alternativas: [
      {
        texto: "Actividades y macro procesos.",
        correcta: false,
      },
      {
        texto: "Procesos operativos y microprocesos.",
        correcta: false,
      },
      {
        texto: "Actividades y microprocesos.",
        correcta: false,
      },
      {
        texto: "Actividades y tareas.",
        correcta: true,
      },
    ],
  },
  {
    pregunta:
      "En la mayoría de organización los procesos relacionados con recursos humanos y logística, constituyen:",
    alternativas: [
      {
        texto: "Procesos principales.",
        correcta: false,
      },
      {
        texto: "Procesos alternos.",
        correcta: false,
      },
      {
        texto: "Procesos de apoyo.",
        correcta: true,
      },
      {
        texto: "Procesos estratégicos.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Un mapa estratégico en balance score card, tiene:",
    alternativas: [
      {
        texto: "3 dimensiones.",
        correcta: false,
      },
      {
        texto: "4 dimensiones.",
        correcta: true,
      },
      {
        texto: "6 dimensiones.",
        correcta: false,
      },
      {
        texto: "4 dimensiones.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "El ciclo de Deming, consiste en las siguientes etapas:",
    alternativas: [
      {
        texto: "Planificar, hacer, verificar, actuar.",
        correcta: true,
      },
      {
        texto: "Planificar, hacer, verificar, construir.",
        correcta: false,
      },
      {
        texto: "Planificar, modelar, verificar, actuar.",
        correcta: false,
      },
      {
        texto: "Planificar, hacer, construir, actuar.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Siguiendo la metodología de mejora de procesos, después de la identificación de oportunidades de mejora se procede a:",
    alternativas: [
      {
        texto: "Implementación de procesos.",
        correcta: false,
      },
      {
        texto: "Rediseño de los procesos.",
        correcta: true,
      },
      {
        texto: "Análisis cuantitativo.",
        correcta: false,
      },
      {
        texto: "Monitoreo y control del proceso.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "En la biblioteca existen 103 libros de ciencias de la computación que tratan en cierta medida los siguientes temas: Compiladores, Estructura de datos y Redes. Del total, 50 libros tienen información sobre compiladores, 54 sobre estructuras de datos, 51 sobre redes, 30 sobre compiladores y estructuras de datos, 32 sobre compiladores y redes, 35 sobre estructuras de datos y redes, 19 sobre los tres temas. ¿Cuántos libros contienen material exactamente sobre uno de los tres temas?",
    alternativas: [
      {
        texto: "26",
        correcta: false,
      },
      {
        texto: "40",
        correcta: true,
      },
      {
        texto: "18",
        correcta: false,
      },
      {
        texto: "16",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Supóngase que se desea etiquetar las gavetas de los alumnos de la Universidad, y que la etiqueta puede estar marcada con un solo dígito, una sola letra o la combinación de una sola letra con un solo dígito (sin importar si primero se pone la letra y después el dígito o, al contrario) – suponga que el alfabeto tiene 27 letras –. Bajo estas condiciones, el número de etiquetas distintas que se pueden formar son:",
    alternativas: [
      {
        texto: "137",
        correcta: false,
      },
      {
        texto: "577",
        correcta: true,
      },
      {
        texto: "1027",
        correcta: false,
      },
      {
        texto: "217",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Se tienen 10 computadoras y 6 impresoras. Determinar el número de paquetes que es posible formar, si se desea que éstos contengan 4 computadoras y 3 impresoras.",
    alternativas: [
      {
        texto: "720",
        correcta: false,
      },
      {
        texto: "360",
        correcta: true,
      },
      {
        texto: "230",
        correcta: false,
      },
      {
        texto: "4200",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Sea A={a,b,c,d,e,f,g,h}, Considérense los siguientes subconjuntos de A: A1={a,b,c,d}, A2={a,c,e,f,g,h}, A3={a,c,e,g}, A4={b,d}, A5={f,h}. Determine cuáles son particiones de A",
    alternativas: [
      {
        texto: "{ A1, A2 )",
        correcta: false,
      },
      {
        texto: "{ A3, A4, A5 }",
        correcta: false,
      },
      {
        texto: "{ A1, A5 }",
        correcta: false,
      },
      {
        texto: "{A2, A3, A4 }",
        correcta: true,
      },
    ],
  },
  {
    pregunta: "Un escenario de caso de uso se divide en tres secciones:",
    alternativas: [
      {
        texto: "Precondiciones; Postcondiciones; y Suposiciones",
        correcta: false,
      },
      {
        texto:
          "Identificación e iniciación; pasos realizados; y condiciones, suposiciones y preguntas",
        correcta: true,
      },
      {
        texto:
          "Historias ágiles; Preguntas sobre tareas; y Requerimientos cumplidos",
        correcta: false,
      },
      {
        texto: "Prioridad; Acciones iterativas o de ciclos; y Riesgo",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "Los tres elementos clave de la viabilidad son:",
    alternativas: [
      {
        texto: "Viabilidad técnica, económica y operacional",
        correcta: true,
      },
      {
        texto:
          "Viabilidad de cargas de trabajo, vida del proyecto, tipo de equipo",
        correcta: false,
      },
      {
        texto: "Viabilidad de Hardware, Software e inventario",
        correcta: false,
      },
      {
        texto: "Viabilidad física, económica y de soporte de distribuidores",
        correcta: false,
      },
    ],
  },
];

export default questions;
