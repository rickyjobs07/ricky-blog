---
title: "Guía Completa de Markdown"
date: "2024-03-20"
tags: ["markdown", "tutorial", "web development"]
excerpt: "Una guía completa sobre cómo usar Markdown para escribir contenido en la web."
---

# Guía Completa de Markdown

Markdown es un lenguaje de marcado ligero que te permite formatear texto de manera sencilla. En esta guía, exploraremos todas las características principales de Markdown.

## Texto Básico

Puedes usar **negrita**, *cursiva*, y ~~tachado~~ fácilmente.

### Enlaces e Imágenes

- [Enlace a Google](https://www.google.com)
- ![Imagen de ejemplo](https://via.placeholder.com/150)

## Listas

### Lista no ordenada
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Lista ordenada
1. Primer paso
2. Segundo paso
3. Tercer paso

## Citas

> La mejor manera de predecir el futuro es inventarlo.
> 
> — Alan Kay

## Código

Código en línea: `const x = 42;`

Bloque de código:
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};
```

## Tablas

| Nombre | Edad | Ciudad |
|--------|------|--------|
| Juan   | 25   | Madrid |
| María  | 30   | Barcelona |
| Pedro  | 28   | Valencia |

## Tareas

- [x] Completar la guía
- [ ] Revisar el contenido
- [ ] Publicar el post

## Notas al pie

Aquí hay una nota al pie[^1].

[^1]: Esta es la nota al pie.

## Líneas horizontales

---

## Características avanzadas

### Resaltado de sintaxis

```javascript
// Función que suma dos números
function sum(a, b) {
  return a + b;
}

// Uso de la función
console.log(sum(5, 3)); // 8
```

### Enlaces automáticos

https://www.ejemplo.com

### Emojis

:smile: :heart: :rocket:

## Conclusión

Markdown es una herramienta poderosa y versátil para formatear texto. Con esta guía, deberías poder crear contenido bien estructurado y atractivo para tu blog. 