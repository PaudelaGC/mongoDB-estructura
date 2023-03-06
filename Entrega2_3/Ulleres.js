use Òptica;

db.createCollection("Ulleres", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Ulleres",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Proveïdor": {
                    "bsonType": "objectId"
                },
                "Vidres": {
                    "bsonType": "object",
                    "properties": {
                        "Esquerra": {
                            "bsonType": "object",
                            "properties": {
                                "Graduació": {
                                    "bsonType": "decimal"
                                },
                                "Color": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "Graduació",
                                "Color"
                            ]
                        },
                        "Dret": {
                            "bsonType": "object",
                            "properties": {
                                "Graduació": {
                                    "bsonType": "decimal"
                                },
                                "Color": {
                                    "bsonType": "string"
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "Graduació",
                                "Color"
                            ]
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "Esquerra",
                        "Dret"
                    ]
                },
                "Tipus": {
                    "bsonType": "objectId"
                },
                "Preu": {
                    "bsonType": "decimal"
                },
                "Marca": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "Proveïdor",
                "Vidres",
                "Tipus",
                "Preu",
                "Marca"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});