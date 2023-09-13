import express from "express";
import bodyParser from "body-parser";

let newItems =[];

const app = express();

app.use( express.static( "public" ) );

app.use(bodyParser.urlencoded
    ({
        extended : true,
    })
);

const port = 3000;
app.listen(port , () => {console.log(`Port is running on server ${port}`)});

app.get("/",(req, res) =>
    {
        var options = {weekday: `long`, year : `numeric` , month: `long`,day : `numeric`};
        let today = new Date();
        let day = today.toLocaleDateString("en-us", options);

        res.render("index.ejs" , {
            todayDate : day,
            newListItem : newItems 
        });
    }
);

app.post("/",(req, res) =>
    {
        let newItem = req.body.newItem;
        newItems.push(newItem);
        res.redirect("/");
    }
);