
// Trabajo Integrador: Sistema de Gestión de Biblioteca
// Alumna: Luz [Apellido]
// Curso: Fundamentos de JavaScript
// Fecha de Entrega: 05 de Julio

// Punto 1:
// a) Array de libros
const libros = [
  { id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, genero: "Novela", disponible: true },
  { id: 2, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963, genero: "Novela", disponible: true },
  { id: 3, titulo: "1984", autor: "George Orwell", año: 1949, genero: "Distopía", disponible: true },
  { id: 4, titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, genero: "Ciencia Ficción", disponible: true },
  { id: 5, titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605, genero: "Novela", disponible: true },
  { id: 6, titulo: "La metamorfosis", autor: "Franz Kafka", año: 1915, genero: "Cuento", disponible: true },
  { id: 7, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, genero: "Romance", disponible: true },
  { id: 8, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, genero: "Fábula", disponible: true },
  { id: 9, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", año: 1981, genero: "Novela", disponible: true },
  { id: 10, titulo: "Los detectives salvajes", autor: "Roberto Bolaño", año: 1998, genero: "Novela", disponible: true }
];

// b) Array de usuarios
const usuarios = [
  { id: 1, nombre: "Juan Pérez", email: "juanperez@mail.com", librosPrestados: [] },
  { id: 2, nombre: "Ana García", email: "ana@mail.com", librosPrestados: [] },
  { id: 3, nombre: "Luis Rodríguez", email: "luis@mail.com", librosPrestados: [] },
  { id: 4, nombre: "Sofía Martínez", email: "sofia@mail.com", librosPrestados: [] },
  { id: 5, nombre: "Carlos López", email: "carlos@mail.com", librosPrestados: [] }
];

// Punto 2: Funciones de Gestión de Libros

function agregarLibro(id, titulo, autor, anio, genero) {
  const nuevoLibro = { id, titulo, autor, año: anio, genero, disponible: true };
  libros.push(nuevoLibro);
}

function buscarLibro(criterio, valor) {
  return libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}

function ordenarLibros(criterio) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  console.log(libros);
}

function borrarLibro(id) {
  const index = libros.findIndex(libro => libro.id === id);
  if (index !== -1) libros.splice(index, 1);
}

// Punto 3: Gestión de Usuarios

function registrarUsuario(nombre, email) {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: nombre.trim(),
    email: email.toLowerCase(),
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
}

function mostrarTodosLosUsuarios() {
  return usuarios;
}

function buscarUsuario(email) {
  return usuarios.find(usuario => usuario.email === email.toLowerCase());
}

function borrarUsuario(nombre, email) {
  const index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email.toLowerCase());
  if (index !== -1) usuarios.splice(index, 1);
}

// Punto 4: Sistema de Préstamos

function prestarLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);
  if (libro && libro.disponible && usuario) {
    libro.disponible = false;
    usuario.librosPrestados.push(libro.id);
  }
}

function devolverLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);
  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
  }
}

// Punto 5: Reporte de Libros

function generarReporteLibros() {
  const total = libros.length;
  const prestados = libros.filter(l => !l.disponible).length;
  const porGenero = libros.reduce((acc, l) => {
    acc[l.genero] = (acc[l.genero] || 0) + 1;
    return acc;
  }, {});
  const libroMasAntiguo = libros.reduce((a, b) => a.año < b.año ? a : b);
  const libroMasNuevo = libros.reduce((a, b) => a.año > b.año ? a : b);

  console.log("Total libros:", total);
  console.log("Libros prestados:", prestados);
  console.log("Libros por género:", porGenero);
  console.log("Libro más antiguo:", libroMasAntiguo.titulo);
  console.log("Libro más nuevo:", libroMasNuevo.titulo);
}

// Punto 6: Libros con palabras en el título

function librosConPalabrasEnTitulo() {
  return libros
    .filter(libro => /^[a-zA-Z ]+$/.test(libro.titulo) && libro.titulo.trim().split(" ").length > 1)
    .map(libro => libro.titulo);
}

// Punto 7: Estadísticas

function calcularEstadisticas() {
  const años = libros.map(l => l.año);
  const promedio = años.reduce((a, b) => a + b, 0) / años.length;

  const frecuencia = {};
  años.forEach(año => frecuencia[año] = (frecuencia[año] || 0) + 1);
  const añoMasFrecuente = Object.keys(frecuencia).reduce((a, b) => frecuencia[a] > frecuencia[b] ? a : b);

  const max = Math.max(...años);
  const min = Math.min(...años);
  const diferencia = max - min;

  console.log("Promedio de años:", promedio);
  console.log("Año más frecuente:", añoMasFrecuente);
  console.log("Diferencia entre más antiguo y más nuevo:", diferencia);
}

// Punto 8: Normalización de datos

function normalizarDatos() {
  libros.forEach(libro => libro.titulo = libro.titulo.toUpperCase());
  libros.forEach(libro => libro.autor = libro.autor.trim());
  usuarios.forEach(usuario => usuario.email = usuario.email.trim().toLowerCase());
}

// Punto 9: Menú interactivo por consola

function menuPrincipal() {
  let opcion;
  do {
    opcion = prompt("Seleccione una opción:\n1. Agregar libro\n2. Buscar libro\n3. Ordenar libros\n4. Borrar libro\n5. Registrar usuario\n6. Mostrar usuarios\n7. Buscar usuario\n8. Borrar usuario\n9. Prestar libro\n10. Devolver libro\n11. Reporte\n12. Títulos con palabras\n13. Estadísticas\n14. Normalizar datos\n0. Salir");
    switch(opcion) {
      case "1":
        // ejemplo de uso: agregarLibro(11, "Nuevo Libro", "Autor", 2023, "Ficción")
        break;
      case "2":
        // ejemplo: buscarLibro("titulo", "Rayuela")
        break;
      case "3":
        ordenarLibros("titulo");
        break;
      case "4":
        // ejemplo: borrarLibro(1)
        break;
      case "5":
        // ejemplo: registrarUsuario("Nuevo Usuario", "email@mail.com")
        break;
      case "6":
        console.log(mostrarTodosLosUsuarios());
        break;
      case "7":
        // ejemplo: buscarUsuario("ana@mail.com")
        break;
      case "8":
        // ejemplo: borrarUsuario("Ana García", "ana@mail.com")
        break;
      case "9":
        // ejemplo: prestarLibro(2, 1)
        break;
      case "10":
        // ejemplo: devolverLibro(2, 1)
        break;
      case "11":
        generarReporteLibros();
        break;
      case "12":
        console.log(librosConPalabrasEnTitulo());
        break;
      case "13":
        calcularEstadisticas();
        break;
      case "14":
        normalizarDatos();
        break;
      case "0":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida");
    }
  } while (opcion !== "0");
}

// Punto 10: Comentarios
// Todo el código ha sido seccionado punto por punto con explicaciones
// breves de cada función y su propósito.
