# Imagen base más ligera
FROM node:22.14.0-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos esenciales para instalar dependencias
COPY package*.json ./

# Instala solo dependencias de producción
RUN npm ci --omit=dev && npm cache clean --force

# Copia el resto del código después para aprovechar la caché de Docker
COPY . .

# Asigna permisos adecuados para evitar errores de acceso
RUN chown -R node:node /app

# Cambia al usuario node para mayor seguridad
USER node

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]