// src/bootstrap.js

// Realiza aquí cualquier configuración inicial o setup global
console.log('Initializing application...');

// Importa el archivo principal de la aplicación
import('./components/ExampleComponent.jsx').then(() => {
    console.log('Application started');
});
