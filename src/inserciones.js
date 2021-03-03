

//INSERCION DE LA COLECCION DE TIENDAS

db.tiendas.drop()
db.tiendas.insertMany([
    {
        "id_tienda":1,
        "pais":"Mexico",
        "id_marca":1,
        "marca":"Volkswagen",
        "ventas":100,
        "fecha_inauguracion":ISODate("2018-06-03")
    },

    {
        "id_tienda":2,"pais":"USA","id_marca":1,"marca":"Volkswagen","ventas":100,"fecha_inauguracion":ISODate("2016-09-12")
    },
    {
        "id_tienda":3,"pais":"Canada","id_marca":1,"marca":"Volkswagen","ventas":59,"fecha_inauguracion":ISODate("2020-01-04")
    },
    {
        "id_tienda":4,"pais":"Italy","id_marca":2,"marca":"Mitsubishi","ventas":175,"fecha_inauguracion":ISODate("2020-06-05")
    },
    {
        "id_tienda":5,"pais":"Japan","id_marca":2,"marca":"Mitsubishi","ventas":200,"fecha_inauguracion":ISODate("2017-06-27")
    },
    {
        "id_tienda":6,"pais":"USA","id_marca":3,"marca":"Ford","ventas":100,"fecha_inauguracion":ISODate("2015-08-05")
    },
    {
        "id_tienda":7,"pais":"Spain","id_marca":3,"marca":"Ford","ventas":112,"fecha_inauguracion":ISODate("2019-03-02")
    },
    {
        "id_tienda":8,"pais":"China","id_marca":3,"marca":"Ford","ventas":130,"fecha_inauguracion":ISODate("2019-03-13")
    },
    {
        "id_tienda":9,"pais":"Japan","id_marca":4,"marca":"Nissan","ventas":532,"fecha_inauguracion":ISODate("2018-06-16")
    },
    {
        "id_tienda":10,"pais":"USA","id_marca":5,"marca":"Dodge","ventas":317,"fecha_inauguracion":ISODate("2016-07-01")
    },
    {
        "id_tienda":11,"pais":"Spain","id_marca":6,"marca":"Maserati","ventas":0, "fecha_inauguracion":ISODate("2020-02-12")
    },
    {
        "id_tienda":12,"pais":"Italy","id_marca":6,"marca":"Maserati","ventas":0,"fecha_inauguracion":ISODate("2020-03-20")
    },
    {
        "id_tienda":13,"pais":"Spain","id_marca":7,"marca":"Hyundai","ventas":133,"fecha_inauguracion":ISODate("2016-05-02")
    },
    {
        "id_tienda":14,"pais":"Argelia","id_marca":7,"marca":"Hyundai","ventas":100,"fecha_inauguracion":ISODate("2018-01-29")
    },
    {
        "id_tienda":15,"pais":"China","id_marca":7,"marca":"Hyundai","ventas":150,"fecha_inauguracion":ISODate("2019-05-27")
    },
    {
        "id_tienda":16,"pais":"Germany","id_marca":8,"marca":"Mercedes-Benz","ventas":50,"fecha_inauguracion":ISODate("2017-02-10")
    },
    {
        "id_tienda":17,"pais":"Spain","id_marca":8,"marca":"Mercedes-Benz","ventas":50,"fecha_inauguracion":ISODate("2016-01-15")
    },
    {
        "id_tienda":18,"pais":"France","id_marca":8,"marca":"Mercedes-Benz","ventas":50,"fecha_inauguracion":ISODate("2016-01-07")
    },
    {
        "id_tienda":19,"pais":"China","id_marca":9,"marca":"Toyota","ventas":548,"fecha_inauguracion":ISODate("2016-09-19")
    },
    {
        "id_tienda":20,"pais":"Japan","id_marca":10,"marca":"Suzuki","ventas":203,"fecha_inauguracion":ISODate("2016-07-22")
    }])



//INSERCION DE LA COLECCION MARCAS

db.marcas.drop()
db.marcas.insertMany([
    {
        "id_marca":1,
        "marca":"Volkswagen",
        "paises_comerciales":["USA", "Canada", "Mexico"],
        "ventas_totales":259
    },
    {   
        "id_marca":2,"marca":"Mitsubishi","paises_comerciales":["Poland", "Japan", "Italy"],"ventas_totales":375
    },
    {   
        "id_marca":3,"marca":"Ford","paises_comerciales":["USA", "Spain", "China"],"ventas_totales":332
    },
    {   
        "id_marca":4,"marca":"Nissan","paises_comerciales":["Japan", "South Korea", "China"],"ventas_totales":532
    },
    {   
        "id_marca":5,"marca":"Dodge","paises_comerciales":["USA"],"ventas_totales":317
    },
    {   
        "id_marca":6,"marca":"Maserati","paises_comerciales":["Italy, Spain"],"ventas_totales":0
    },
    {   
        "id_marca":7,"marca":"Hyundai","paises_comerciales":["China", "Argelia", "Spain"],"ventas_totales":383
    },
    {   
        "id_marca":8,"marca":"Mercedes-Benz","paises_comerciales":["Germany", "Spain", "France"],"ventas_totales":150
    },
    {   
        "id_marca":9,"marca":"Toyota","paises_comerciales":["China"],"ventas_totales":548
    },
    {   
        "id_marca":10,"marca":"Suzuki","paises_comerciales":["Japan"],"ventas_totales":203
    }])



//INSERCION DE LA COLECCION COCHES

db.coches.drop()
db.coches.insertMany([

    {
        "id_coche":1,
        "id_marca":10,
        "marca":"Suzuki",
        "modelo":"Sidekick",
        "modelo_año":1993,
        "num_bastidor":"1G6AB5SX6D0877073"
    },

    {
           "id_coche":3,"id_marca":3,"marca":"Ford","modelo":"Probe","modelo_año":1997,"num_bastidor":"SALFR2BG8EH481459"
    },
    {
           "id_coche":5,"id_marca":3,"marca":"Ford","modelo":"3500","modelo_año":1992,"num_bastidor":"4T1BD1FK5EU601492"
    },
    {
           "id_coche":7,"id_marca":8,"marca":"Mercedes-Benz","modelo":"SLK-Class","modelo_año":2009,"num_bastidor":"1G4PP5SK5E4860977"
    },
    {
           "id_coche":8,"id_marca":9,"marca":"Toyota","modelo":"Tacoma Xtra","modelo_año":2001,"num_bastidor":"1GTN1UEH5EZ086272"
    },
    {
           "id_coche":12,"id_marca":10,"marca":"Suzuki","modelo":"Grand Am","modelo_año":1999,"num_bastidor":"2C3CCABG9EH309171"
    },
    {
           "id_coche":13,"id_marca":3,"marca":"Ford","modelo":"E150","modelo_año":2008,"num_bastidor":"WVWAA7AHXBV487258"
    },
    {
           "id_coche":15,"id_marca":5,"marca":"Dodge","modelo":"Eldorado","modelo_año":1997,"num_bastidor":"JM1GJ1U53F1383992"
    },
    {
           "id_coche":18,"id_marca":3,"marca":"Ford","modelo":"F250","modelo_año":2003,"num_bastidor":"WAUEFBFL7BN197544"
    },
    {
           "id_coche":19,"id_marca":3,"marca":"Ford","modelo":"Mustang","modelo_año":1989,"num_bastidor":"3GYFNEE30CS623055"
    },
    {
           "id_coche":20,"id_marca":4,"marca":"Nissan","modelo":"Altima","modelo_año":2009,"num_bastidor":"5J8TB182X9A171091"
    },
    {
           "id_coche":25,"id_marca":2,"marca":"Mitsubishi","modelo":"Grand Cherokee","modelo_año":2009,"num_bastidor":"WA1VMBFE1BD452795"
    },
    {
           "id_coche":26,"id_marca":2,"marca":"Mitsubishi","modelo":"Mighty Max Macro","modelo_año":1992,"num_bastidor":"1G4PP5SK7C4013827"
    },
    {
           "id_coche":29,"id_marca":3,"marca":"Ford","modelo":"F350","modelo_año":2007,"num_bastidor":"ZHWGU5BR3EL747973"
    },
    {
           "id_coche":30,"id_marca":2,"marca":"Mitsubishi","modelo":"Challenger","modelo_año":2004,"num_bastidor":"5UXWX7C53CL984445"
    },
    {
           "id_coche":31,"id_marca":10,"marca":"Suzuki","modelo":"TL","modelo_año":1999,"num_bastidor":"WAUKFBFLXBN290559"
    },
    {
           "id_coche":32,"id_marca":9,"marca":"Toyota","modelo":"Tacoma","modelo_año":2004,"num_bastidor":"1G6DK67V290354960"
    },
    {
           "id_coche":34,"id_marca":9,"marca":"Toyota","modelo":"Avalon","modelo_año":1995,"num_bastidor":"3D7JV1EP0AG286842"
    },
    {
           "id_coche":35,"id_marca":3,"marca":"Ford","modelo":"Mustang","modelo_año":1970,"num_bastidor":"WAUHGAFC4FN116977"
    },
    {
           "id_coche":38,"id_marca":3,"marca":"Ford","modelo":"Ranger","modelo_año":2010,"num_bastidor":"1G4HD57257U153113"
    },
    {
           "id_coche":40,"id_marca":1,"marca":"Volkswagen","modelo":"Beetlee","modelo_año":1997,"num_bastidor":"SCBLF34F35C515594"
    },
    {
           "id_coche":41,"id_marca":1,"marca":"Volkswagen","modelo":"Corrado","modelo_año":1991,"num_bastidor":"2T1KU4EE3DC983759"
    },
    {
           "id_coche":42,"id_marca":5,"marca":"Dodge","modelo":"Nitro","modelo_año":2009,"num_bastidor":"1N6AD0CU0BC126042"
    },
    {
           "id_coche":45,"id_marca":9,"marca":"Toyota","modelo":"4Runner","modelo_año":1999,"num_bastidor":"5UMDU93537L934238"
    },
    {
           "id_coche":46,"id_marca":7,"marca":"Hyundai","modelo":"Grand Prix","modelo_año":1973,"num_bastidor":"WBANF73596C468172"
    },
    {
           "id_coche":47,"id_marca":1,"marca":"Volkswagen","modelo":"New Beetle","modelo_año":2010,"num_bastidor":"WAUAF48H67K964859"
    },
    {
           "id_coche":48,"id_marca":5,"marca":"Dodge","modelo":"Ram Van 1500","modelo_año":1999,"num_bastidor":"1C3CDZCB2DN456050"
    },
    {
           "id_coche":52,"id_marca":3,"marca":"Ford","modelo":"E150","modelo_año":1984,"num_bastidor":"WUADNAFG1BN019033"
    },
    {
           "id_coche":53,"id_marca":10,"marca":"Suzuki","modelo":"Forenza","modelo_año":2008,"num_bastidor":"WBSBL934X2J598090"
    },
    {
           "id_coche":55,"id_marca":3,"marca":"Ford","modelo":"E-Series","modelo_año":1989,"num_bastidor":"1N4AB7AP9DN436699"
    },
    {
           "id_coche":58,"id_marca":5,"marca":"Dodge","modelo":"Ram 1500 Club","modelo_año":1998,"num_bastidor":"WAUDH94F26N469323"
    },
    {
           "id_coche":59,"id_marca":1,"marca":"Volkswagen","modelo":"Jetta","modelo_año":1991,"num_bastidor":"5N1AN0NU9AC192127"
    },
    {
           "id_coche":61,"id_marca":7,"marca":"Hyundai","modelo":"Excel","modelo_año":1994,"num_bastidor":"3GYFK66NX5G142105"
    },
    {
           "id_coche":62,"id_marca":2,"marca":"Mitsubishi","modelo":"Tredia","modelo_año":1987,"num_bastidor":"1FTWW3A5XAE628153"
    },
    {
           "id_coche":65,"id_marca":8,"marca":"Mercedes-Benz","modelo":"E-Class","modelo_año":1992,"num_bastidor":"1FMJK1F56AE940940"
    },
    {
           "id_coche":66,"id_marca":1,"marca":"Volkswagen","modelo":"New Beetle","modelo_año":1999,"num_bastidor":"3C63DPNL4CG777527"
    },
    {
           "id_coche":69,"id_marca":5,"marca":"Dodge","modelo":"Stratus","modelo_año":1996,"num_bastidor":"1G6YV34A245912083"
    },
    {
           "id_coche":70,"id_marca":8,"marca":"Mercedes-Benz","modelo":"CL-Class","modelo_año":1998,"num_bastidor":"1G4CW54K514279889"
    },
    {
           "id_coche":71,"id_marca":3,"marca":"Ford","modelo":"Econoline E150","modelo_año":2001,"num_bastidor":"1FMCU0F79EU686747"
    },
    {
           "id_coche":73,"id_marca":1,"marca":"Volkswagen","modelo":"Jetta","modelo_año":1984,"num_bastidor":"2C3CDXHG0EH950104"
    },
    {
           "id_coche":75,"id_marca":3,"marca":"Ford","modelo":"F-Series","modelo_año":1994,"num_bastidor":"KMHFH4JGXFA876241"
    },
    {
           "id_coche":76,"id_marca":5,"marca":"Dodge","modelo":"Dakota","modelo_año":1994,"num_bastidor":"1GYEC63T24R564380"
    },
    {
           "id_coche":78,"id_marca":4,"marca":"Nissan","modelo":"Maxima","modelo_año":1999,"num_bastidor":"WDDEJ7GB3CA253613"
    },
    {
           "id_coche":79,"id_marca":8,"marca":"Mercedes-Benz","modelo":"SLR McLaren","modelo_año":2008,"num_bastidor":"5UXZV4C52CL596754"
    },
    {
           "id_coche":80,"id_marca":5,"marca":"Dodge","modelo":"Dakota","modelo_año":2002,"num_bastidor":"JTEBU5JR5B5698226"
    }])