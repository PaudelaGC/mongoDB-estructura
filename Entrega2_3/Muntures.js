use Òptica;

db.createCollection("Muntures", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Muntures",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Muntura": {
                    "bsonType": "object",
                    "properties": {
                        "Tipus": {
                            "bsonType": "string"
                        },
                        "Id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "Tipus",
                        "Id"
                    ]
                }
            },
            "additionalProperties": true,
            "required": [
                "Muntura"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});