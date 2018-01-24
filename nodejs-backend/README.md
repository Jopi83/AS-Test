#Basic NodeJS Example


##Start and configure Keycloak

###Start Keycloak:

####Docker
Using the image from https://hub.docker.com/r/jboss/keycloak/
```
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak
```