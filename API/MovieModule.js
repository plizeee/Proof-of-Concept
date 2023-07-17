const moviesDB = "mongodb://127.0.0.1:27017/Movies";

exports.DisplayMovies = async function(req, mongoDB){
    try{
        const client = await mongoDB.connect(moviesDB);

        let res = await client.db('Movies').collection("Movie").find().toArray();

        console.log("Number of Movies: " + res.length + "\n");

        for(let i = 0; i < res.length; i++){
            console.log("Movie " + (i+1) + ": " + res[i].title);
            console.log("Director: " + res[i].director);
            console.log("Year: " + res[i].year);
            console.log("Rating: " + res[i].rating + "\n");
        }

        client.close();
        return res;
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Movies Displayed");
    }
}