use Pizzeria;

db.createCollection("Comandes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Comandes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Client": {
                    "bsonType": "objectId"
                },
                "Botiga": {
                    "bsonType": "objectId"
                },
                "Repartiment": {
                    "bsonType": "object",
                    "properties": {
                        "Repartidor": {
                            "bsonType": "objectId"
                        },
                        "Data/hora": {
                            "bsonType": "date"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "Repartidor",
                        "Data/hora"
                    ]
                },
                "Productes": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "minItems": 1,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "IdProducte": {
                                "bsonType": "objectId"
                            },
                            "Quantitat": {
                                "bsonType": "int"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "IdProducte",
                            "Quantitat"
                        ]
                    }
                },
                "Data/hora": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "Client",
                "Botiga",
                "Productes",
                "Data/hora"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});