import { opine } from "https://deno.land/x/opine@1.9.0/mod.ts";
const app = opine();
import { config } from "https://deno.land/x/dotenv@v3.1.0/mod.ts";
const env = config();

app.get("/", function (req, res) {
    console.log(req.query);
    res.send("Hello World");
});
app.get("/api/:id", function (req, res) {
    console.log("api", req.params.id);
    res.send("Hello World");
});

app.listen(parseInt(env.port), () => {
    console.log("listening on http://localhost:" + env.port);
});
