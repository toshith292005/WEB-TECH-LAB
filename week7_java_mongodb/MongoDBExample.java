import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.FindIterable;

import org.bson.Document;

public class MongoDBExample {

    public static void main(String[] args) {

        // Connect to MongoDB
        MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");

        System.out.println("Connected to MongoDB");

        // Access Database
        MongoDatabase database = mongoClient.getDatabase("webtechDB");

        // Access Collection
        MongoCollection<Document> collection = database.getCollection("students");

        // Insert Document
        Document student = new Document("name", "Toshith")
                .append("regNo", "23BCE8216")
                .append("marks", 92);

        collection.insertOne(student);

        System.out.println("Document inserted successfully");

        // Retrieve Documents
        FindIterable<Document> docs = collection.find();

        for (Document doc : docs) {
            System.out.println(doc.toJson());
        }

        // Close connection
        mongoClient.close();
    }
}
