use Òptica;

db.createCollection("Ventes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Ventes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Ulleres": {
                    "bsonType": "objectId"
                },
                "Venedor": {
                    "bsonType": "objectId"
                },
                "Data venta": {
                    "bsonType": "date"
                }
            },
            "additionalProperties": false,
            "required": [
                "Ulleres",
                "Venedor",
                "Data venta"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
