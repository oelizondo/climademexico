## Clima en México

### Pequeña API hecha para consumir las temperaturas históricas del país.

### Qué hay

* Datos históricos del clima desde 1977 hasta el 2017

### Ciudades Cubiertas

* Monterrey

### Ciudades con alta prioridad de ser cubiertas

* Ciudad de México
* Guadalajara

### Correr la aplicación

```console
$ git clone git@github.com:oelizondo/climademexico.git && cd climaenmexico
$ docker-compose up web -d
```

### Consumir la aplicación

Hay varias maneras de acceder los datos: 
1. ```curl localhost:9000/api/cities/:ciudad```
2. ```curl localhost:9000/api/cities/:ciudad/:año```
3. ```curl localhost:9000/api/cities```
