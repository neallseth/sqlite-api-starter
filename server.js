const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const playlistsRoutes = require("./routes/playlists");
app.use(express.json());
app.use("/playlists", playlistsRoutes);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
