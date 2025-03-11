# Usa la imagen oficial de Node.js v22.14.0
FROM node:22.14.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias
RUN npm install --omit=dev

# Expone el puerto 3000 (o el que uses)
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]
