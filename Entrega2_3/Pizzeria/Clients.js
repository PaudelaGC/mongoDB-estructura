use Pizzeria;

db.createCollection("Clients", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Clients",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
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
                        "Codi postal": {
                            "bsonType": "int"
                        },
                        "Provincia": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "Carrer",
                        "Localitat",
                        "Codi postal"
                    ]
                },
                "Cognoms": {
                    "bsonType": "string"
                },
                "Telèfon": {
                    "bsonType": "int"
                },
                "Nom": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "Adreça",
                "Cognoms",
                "Telèfon",
                "Nom"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});