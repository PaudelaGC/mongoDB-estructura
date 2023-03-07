use Òptica;

db.createCollection("Proveïdors", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Proveïdors",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "NIF": {
                    "bsonType": "string"
                },
                "Fax": {
                    "bsonType": "int"
                },
                "Telèfon": {
                    "bsonType": "int"
                },
                "Nom": {
                    "bsonType": "string"
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
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "NIF",
                "Fax",
                "Telèfon",
                "Nom",
                "Adreça"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
