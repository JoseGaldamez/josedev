# 📝 Sistema de Blog Completo con Firebase y Next.js

Este proyecto incluye un sistema de blog completo integrado con Firebase, que permite gestionar posts dinámicamente sin depender del build-time.

## 🚀 Características

### ✅ Funcionalidades Implementadas

- **🔐 Autenticación completa con Firebase Auth**
- **📝 Editor de bloques al estilo WordPress**
- **🎨 Renderizador de contenido dinámico**
- **🖼️ Gestión de imágenes con Firebase Storage**
- **📱 Diseño responsive con TailwindCSS**
- **🛡️ Middleware de protección de rutas**
- **🎯 Categorización de posts**
- **⚡ Server Components para mejor rendimiento**

### 🧱 Tipos de Bloques Soportados

- **Encabezados** (H1-H6)
- **Párrafos** con HTML básico
- **Imágenes** con caption y upload automático
- **Código** con resaltado sintáctico
- **Listas** dinámicas
- **Citas** estilizadas

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── admin/                    # Panel de administración
│   │   ├── login/               # Login de admin
│   │   ├── blog/                # Gestión de posts
│   │   │   ├── new/            # Crear nuevo post
│   │   │   └── [slug]/         # Editar post existente
│   │   └── layout.tsx          # Layout del admin
│   ├── blog/                    # Blog público
│   │   ├── [slug]/             # Post individual
│   │   ├── category/[category]/ # Posts por categoría
│   │   └── page.tsx            # Lista de posts
│   └── layout.tsx              # Layout raíz con AuthProvider
├── components/
│   ├── admin/                   # Componentes del admin
│   │   ├── PostEditor.tsx      # Editor principal
│   │   └── BlockEditor.tsx     # Editor de bloques individual
│   ├── blog/                   # Componentes del blog público
│   │   ├── BlogPost.tsx        # Componente de post completo
│   │   ├── BlogCard.tsx        # Tarjeta de post para listas
│   │   └── BlockRenderer.tsx   # Renderizador de bloques
│   └── ui/                     # Componentes UI base
├── hooks/
│   ├── useAuth.tsx             # Hook de autenticación
│   ├── useFirestore.tsx        # Hook para operaciones con Firestore
│   └── useEditor.tsx           # Hook para el editor de bloques
├── lib/
│   ├── firebase.js             # Configuración de Firebase
│   └── firestore.js            # Funciones CRUD para posts
└── middleware.ts               # Protección de rutas admin
```

## 🛠️ Instalación y Configuración

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Firebase

1. **Crear proyecto en Firebase Console**
   - Ve a https://console.firebase.google.com/
   - Crea un nuevo proyecto

2. **Habilitar servicios necesarios:**
   - **Firestore Database** (modo test inicialmente)
   - **Authentication** (método Email/Password)
   - **Storage** (para imágenes)

3. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env.local
   ```
   
   Completa las variables con los datos de tu proyecto Firebase.

### 3. Configurar Reglas de Seguridad

#### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to published posts
    match /posts/{document} {
      allow read: if resource.data.status == 'published';
      allow write: if request.auth != null;
    }
  }
}
```

#### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 4. Crear Usuario Administrador

1. Ve a Firebase Console > Authentication
2. Crea un usuario con email y contraseña
3. Este usuario podrá acceder al panel de administración

## 🎯 Uso del Sistema

### Acceso al Panel de Administración

1. Ve a `/admin/login`
2. Inicia sesión con las credenciales de Firebase
3. Accede al panel en `/admin/blog`

### Crear un Post

1. Haz clic en "Crear nuevo post"
2. Completa título, slug y resumen
3. Agrega bloques de contenido:
   - Usa los botones para agregar diferentes tipos de bloques
   - Arrastra y suelta para reordenar
   - Configura cada bloque según su tipo
4. Agrega imagen destacada y categorías
5. Guarda como borrador o publica directamente

### Gestionar Posts

- **Ver todos los posts** en `/admin/blog`
- **Editar posts existentes** haciendo clic en "Editar"
- **Eliminar posts** con el botón "Eliminar"
- **Previsualizar posts publicados** con "Ver"

## 🔧 Esquema de Datos

### Post en Firestore

```javascript
{
  title: "Título del post",
  slug: "titulo-del-post",
  excerpt: "Breve descripción...",
  featuredImage: "https://...",
  categories: ["tech", "javascript"],
  status: "published", // o "draft"
  blocks: [
    {
      id: "uuid",
      type: "heading",
      level: 2,
      content: "Mi Encabezado"
    },
    {
      id: "uuid",
      type: "paragraph",
      content: "Contenido del párrafo..."
    },
    {
      id: "uuid",
      type: "image",
      src: "https://...",
      caption: "Descripción de la imagen"
    }
    // ... más bloques
  ],
  publishedAt: Timestamp,
  updatedAt: Timestamp,
  createdAt: Timestamp
}
```

## 🎨 Personalización

### Estilos
- Los estilos usan **TailwindCSS**
- Los posts públicos incluyen estilos **prose** para mejor legibilidad
- El panel admin tiene un diseño moderno y limpio

### Agregar Nuevos Tipos de Bloques

1. Actualiza el tipo `Block` en los hooks
2. Agrega el renderizador en `BlockRenderer.tsx`
3. Agrega el editor en `BlockEditor.tsx`
4. Incluye el tipo en `PostEditor.tsx`

## 🚀 Deployment

El sistema funciona completamente del lado del cliente con Firebase, por lo que es compatible con cualquier hosting estático:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Firebase Hosting**

## 📝 Notas Importantes

- **No hay dependencia de build-time**: Los posts se cargan dinámicamente desde Firestore
- **Seguridad**: Solo usuarios autenticados pueden crear/editar posts
- **Performance**: Usa React Server Components donde es posible
- **SEO**: Genera metadata dinámico para cada post
- **Responsive**: Diseño optimizado para móvil y desktop

## 🤝 Soporte

Si necesitas ayuda con la configuración o personalización del sistema, no dudes en contactarme.

---

¡Disfruta tu nuevo sistema de blog! 🎉