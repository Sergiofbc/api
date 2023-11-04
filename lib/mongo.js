const config = require('../config');
const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.1of0vpu.mongodb.net/?retryWrites=true&w=majority`
class MongoDB{
    client;
    connection;
    constructor(){
        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true
            }
        });
    }
    async connect(){
        return await this.client.connect();
    }

    async getAll(collection){
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return users.find();
    }

    async getOne(collection, query){
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return await users.findOne( query );
    }


    async createOne(collection, data){
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return await users.insertOne(data);
    }


    async deleteOne(collection, query){
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return await users.deleteOne(query);
    }

    /*
    async updateOne(collection, data, query){ /////////////
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return await users.updateOne(data, query);
    }
*/

    //insert one updete one delete one
    //este es el crud
}

module.exports = MongoDB;