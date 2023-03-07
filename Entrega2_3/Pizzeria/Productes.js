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
                "Descripció": {
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
                "Descripció",
                "Nom",
                "Imatge"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});