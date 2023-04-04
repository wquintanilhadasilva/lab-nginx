# Certificado Autoassinado

Chave privada:
```
openssl genrsa -out node_app.key 2048
```

Certificado usando a chave privada acima

```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout node_app.key -out node_app.crt
```

Dados utilizados:
```
Country Name (2 letter code) [AU]:BR
State or Province Name (full name) [Some-State]:GO
Locality Name (eg, city) []:GYN
Organization Name (eg, company) [Internet Widgits Pty Ltd]:lab
Organizational Unit Name (eg, section) []:lab
Common Name (e.g. server FQDN or YOUR name) []:lab
Email Address []:lab@mail.com
```

```
sudo apt-get install libnginx-mod-security
```

```
/etc/nginx/nginx.conf
 bloco http
modsecurity on;
```

```
/etc/nginx/modsec/main.conf
Include /etc/nginx/modsec/modsecurity.conf
Include /etc/nginx/modsec/owasp-modsecurity-crs/crs-setup.conf
Include /etc/nginx/modsec/owasp-modsecurity-crs/rules/*.conf

sudo systemctl restart nginx
```

Install vi in nginx image
```
docker exec -it reverse bash -c "apt-get update && apt-get install -y vim"
```

```
docker exec reverse nginx -t
```

```
docker exec reverse nginx -s reload

```