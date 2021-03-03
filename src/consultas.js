
/*ESTA CONSULTA CREARÁ UNA COLECCION CON LAS TIENDAS POR CADA MARCA QUE SE COMERCIALIZA EN 
CHINA, ORDENADOS SEGÚN SU NÚMERO DE VENTAS DE MAYOR A MENOR.*/

db.marcas.aggregate(
    [
        {
            $lookup: {
                from: "tiendas",
                localField: "id_marca",
                foreignField:"id_marca",
                as:"tiendas"
            }
        },
        {
            $match: {paises_comerciales:"USA"}
        },
        {
            $project: {
                _id: 0,
                marca: 1,
                ventas_totales: 1,
                "tiendas.pais" : 1,
                "tiendas.ventas" : 1,
                "tiendas.fecha_inauguracion" :1,
            }
        },
        {
            $sort: {ventas_totales:-1},
        },
        {
            $merge: {into:"tiendas_marcas"}
        }
    ]
).pretty()

/* CON ESTE AGGREGATE FILTRAREMOS LA COLECCION ANTERIORMENTE CREADA PARA MOSTRAR LAS TIENDAS
PERTENECIENTES A LOS PAISES QUE NO SEAN USA E INAUGURADAS A PARTIR DE 2017 */

db.tiendas_marcas.aggregate(
    [   
        {
            $unwind:"$tiendas"
        },
        {
            $match: {$and:[
                    { $expr: { $gte: [ { $year:"$tiendas.fecha_inauguracion" },2017] } },
                    { $expr: { $ne: [ "$tiendas.pais","USA"] } }
                ]
            }
        },
        {
            $project: { _id : 0 }
        },
        {
            $sort: { "tiendas.ventas": 1}
        }
    ]
)


/* ESTA CONSULTA NOS PERMITE VISUALIZAR LOS DATOS DE LAS TIENDAS CUYAS MARCAS SE 
COMERCIALIZAN EN USA O CHINA */

db.marcas.aggregate(
    [
        {
            $lookup: {
                from: "tiendas",
                localField: "id_marca",
                foreignField:"id_marca",
                as:"tiendas"
            }
        },
        {
            $match: {$or:[
                {paises_comerciales:"China"},
                {paises_comerciales:"USA"}
            ]
        }
        },
        {
            $project: {
                _id: 0,
                marca: 1,
                ventas_totales: 1,
                "tiendas.pais" : 1,
                "tiendas.ventas" : 1,
                "tiendas.fecha_inauguracion" :1,
            }
        },
        {
            $sort: {ventas_totales:-1},
        },
    ]
).pretty()


/* CON ESTA CONSULTA VAMOS A LISTAR LOS DATOS DE LOS COCHES PERTENECIENTES A LAS MARCAS CUYAS
VENTAS HAYAN SUPERADO LAS 270 UNIDADES */

db.marcas.aggregate(
    [
        {
            $lookup: {
                from: "coches",
                localField: "id_marca",
                foreignField:"id_marca",
                as:"modelos"
            }
        },
        {
            $match: { $expr: { $gte: [ "$ventas_totales" , 270 ] } }
        },
        {
            $project: {
                _id: 0,
                marca: 1,
                ventas_totales: 1,
                "modelos.marca" : 1,
                "modelos.modelo" : 1,
                "modelos.modelo_año" :1,
                "modelos.num_bastidor":1
            }
        },
        {
            $sort: {ventas_totales: -1},
        },
    ]
).pretty()


/* POR ULTIMO VAMOS A REALIZAR UNA AGRUPACION EN LA COLECCION DE COCHES SEGUN EL AÑO DEL MODELO
Y DE LA MARCA */

db.coches.aggregate(
    [
        {
            $group:
            {
                _id: { 
                    año_modelo:"$modelo_año" ,
                    marca: "$marca"
                },
                

                Coches: { $push:  { marca: "$marca", modelo: "$modelo" } }
            
            },
               
        },
        {
            $sort: {
                "_id.marca":1 
            }
        }
    ]
).pretty()