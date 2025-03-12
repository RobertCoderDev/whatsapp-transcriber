# 📢 WhatsApp Transcriber - Audio a Texto con OpenAI

El **WhatsApp Transcriber** es un microservicio diseñado para convertir mensajes de voz de WhatsApp en texto utilizando la API de **OpenAI**. Ideal para flujos de trabajo automatizados, sistemas de gestión de información o cualquier solución que requiera extraer contenido de notas de voz de manera eficiente.

---

## 🚀 Características Clave
✅ **Desencriptación Automática:** Desencripta los audios recibidos desde WhatsApp utilizando la información proporcionada por Evolution API.  
✅ **Transcripción Precisa:** Usa OpenAI para convertir el audio en texto con alta precisión.  
✅ **Fácil Integración:** Compatible con herramientas de automatización como **n8n**, **EasyPanel** y sistemas personalizados.  
✅ **Seguridad Incorporada:** Implementa autenticación mediante token para proteger el endpoint.  
✅ **Optimizado y Ligero:** Imagen Docker de tan solo **512 MB** para una mayor eficiencia en despliegues.  

---

## 🖥️ Requisitos
- **Docker 20+**  
- **Node.js 22+**  
- **API Key de OpenAI**  
- **Token de autenticación** para proteger el servicio  

---

## ⚙️ Instalación Rápida

### 🟠 Descargar desde Docker Hub
Puedes obtener la última versión desde Docker Hub con el siguiente comando:
```bash
docker pull robertcoder/whatsapp-transcriber:latest
```

### 🟠 Construir la Imagen Localmente
```bash
docker build -t robertcoder/whatsapp-transcriber:latest .
```

### 🟢 Ejecutar el Contenedor
```bash
docker run -d -p 3000:3000 --env-file .env robertcoder/whatsapp-transcriber:latest
```

### 🔵 Probar el Endpoint
```bash
curl -H "Authorization: Bearer mi_token_secreto" http://localhost:3000/api/audio
```

---

## ⚙️ Variables de Entorno
| Variable        | Descripción                                               |
|-----------------|-----------------------------------------------------------|
| `PORT`           | Puerto en el que se ejecuta el servicio (por defecto 3000) |
| `AUTH_TOKEN`     | Token de autenticación para proteger el endpoint           |
| `OPENAI_API_KEY` | Clave API para la integración con OpenAI                   |

---

## 🔄 Ejemplo de Uso en n8n
Integra el servicio como un nodo HTTP en **n8n** para procesar automáticamente los audios recibidos de WhatsApp.

1. **Configura un nodo Webhook** para recibir el mensaje de Evolution API.
2. **Usa un nodo HTTP Request** para enviar el audio al servicio de transcripción.
3. **Conecta** el resultado del texto al sistema que lo necesite.

---

## 🧑‍💻 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, agregar nuevas funcionalidades o reportar un error, sigue estos pasos:

1. **Haz un fork del repositorio** en [GitHub](https://github.com/RobertCoderDev/whatsapp-transcriber).
2. **Clona tu fork** en tu máquina local:
   ```bash
   git clone https://github.com/RobertCoderDev/whatsapp-transcriber.git

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.
Puedes ver los términos completos en el archivo [`LICENSE`](https://opensource.org/licenses/MIT).

---

## 🌐 Contacto

Si tienes dudas, sugerencias o deseas colaborar en el proyecto, no dudes en ponerte en contacto conmigo.

📧 **Correo Electrónico:** [robertcoderdev@gmail.com](mailto:robertcoderdev@gmail.com)  
🐙 **GitHub:** [RobertCoderDev](https://github.com/RobertCoderDev)  
💼 **LinkedIn:** [Robert Coder](https://www.linkedin.com/in/roberto-vazquez-coder/)  

¡Estoy abierto a ideas, mejoras y colaboraciones! 🚀
