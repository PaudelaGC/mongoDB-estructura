use Òptica;

db.createCollection("Clients/es", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Clients/es",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Adreça": {
                    "bsonType": "object",
                    "properties": {
                        "Número": {
                            "bsonType": "int"
                        },
                        "Carrer": {
                            "bsonType": "string"
                        },
                        "Pis": {
                            "bsonType": "int"
                        },
                        "Porta": {
                            "bsonType": "int"
                        },
                        "Codi postal": {
                            "bsonType": "int"
                        },
                        "País": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "Número",
                        "Carrer",
                        "Pis",
                        "Porta",
                        "Codi postal",
                        "País"
                    ]
                },
                "Nom": {
                    "bsonType": "string"
                },
                "Telèfon": {
                    "bsonType": "int"
                },
                "Recomanat per": {
                    "bsonType": "objectId"
                },
                "Correu electrònic": {
                    "bsonType": "string"
                },
                "Data registre": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "Adreça",
                "Nom",
                "Telèfon",
                "Correu electrònic",
                "Data registre"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
