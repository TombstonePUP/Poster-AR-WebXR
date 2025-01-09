Steps to Setting up an SSL-Enabled Local Server

1. Generate an SSL Key and Certificate:
Run the following commands in PowerShell:
cd C:\xampp\apache\bin
.\openssl genpkey -algorithm RSA -out server.key
.\openssl req -new -key server.key -out server.csr -config C:/xampp/apache/conf/openssl.cnf
.\openssl x509 -req -in server.csr -signkey server.key -out server.crt
server.key: The private key.
server.csr: The Certificate Signing Request (CSR).
server.crt: The self-signed SSL certificate.

2. Install http-server (if not already installed):
Run: npm install -g http-server

3. Start the HTTPS Server:
Run:
http-server --ssl --cert C:/xampp/apache/bin/server.crt --key C:/xampp/apache/bin/server.key
By default, this starts the server on port 8080. To use a different port, such as 8000:
http-server --ssl --cert C:/xampp/apache/bin/server.crt --key C:/xampp/apache/bin/server.key -p 8000

4. Alternative Command for Execution Policy Issues:
If you encounter script execution restrictions, use the following command:
powershell -ExecutionPolicy Bypass -File "C:/Users/User/AppData/Roaming/npm/http-server.ps1" --ssl --cert C:/xampp/apache/bin/server.crt --key C:/xampp/apache/bin/server.key