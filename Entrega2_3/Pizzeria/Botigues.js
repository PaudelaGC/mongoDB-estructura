use Pizzeria;

db.createCollection("Botigues", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Botigues",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Treballadors": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "minItems": 1,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "IdTreballador": {
                                "bsonType": "objectId"
                            },
                            "Nom": {
                                "bsonType": "string"
                            },
                            "Cognoms": {
                                "bsonType": "string"
                            },
                            "NIF": {
                                "bsonType": "string"
                            },
                            "Telèfon": {
                                "bsonType": "int"
                            },
                            "Tasca": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "IdTreballador",
                            "Nom",
                            "Cognoms",
                            "NIF",
                            "Telèfon",
                            "Tasca"
                        ]
                    }
                },
                "Adreça": {
                    "bsonType": "object",
                    "properties": {
                        "Carrer": {
                            "bsonType": "string"
                        },
                        "Localitat": {
                            "bsonType": "string"
                        },
                        "Provincia": {
                            "bsonType": "string"
                        },
                        "Codi postal": {
                            "bsonType": "int"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "Carrer",
                        "Localitat",
                        "Provincia",
                        "Codi postal"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "Treballadors",
                "_id",
                "Adreça"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});