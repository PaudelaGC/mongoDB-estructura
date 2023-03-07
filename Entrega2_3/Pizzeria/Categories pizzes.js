use Pizzeria;

db.createCollection("Categories pizzes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Categories pizzes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Categories": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "minItems": 1,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "IdCategoria": {
                                "bsonType": "objectId"
                            },
                            "Nom": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "IdCategoria",
                            "Nom"
                        ]
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "Categories"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});