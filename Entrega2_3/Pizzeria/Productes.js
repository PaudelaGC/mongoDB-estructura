use Pizzeria;

db.createCollection("Productes", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Productes",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "Tipus": {
                    "bsonType": "string"
                },
                "Preu": {
                    "bsonType": "decimal"
                },
                "DescripciĆ³": {
                    "bsonType": "string"
                },
                "Categoria pizza": {
                    "bsonType": "objectId"
                },
                "Nom": {
                    "bsonType": "string"
                },
                "Imatge": {
                    "bsonType": "object",
                    "additionalProperties": false
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "Tipus",
                "Preu",
                "DescripciĆ³",
                "Nom",
                "Imatge"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});