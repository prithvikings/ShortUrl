const express=require('express');
const app=express();
const port=3009;
const urlRoutes=require('./routes/urlRoutes');
const { connectToDB } = require('./connect');
const Url=require('./models/url');


app.use(express.json());
app.use('/url',urlRoutes);
// Short URL redirection route
app.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl;
    try {
        const url = await Url.findOne({ shortId: shortUrl }); // Find the URL by shortId
        if (url == null) {
            return res.sendStatus(404); // Return 404 if not found
        }

        // Increment the count and update visitHistory
        url.count += 1;
        url.visitHistory.push({ timestamp: Date.now() });
        await url.save(); // Save the changes to the database

        // Redirect to the original URL
        return res.redirect(url.redirectUrl);
    } catch (error) {
        console.error('Error handling short URL:', error);
        return res.status(500).send('Internal Server Error');
    }
});







connectToDB()
.then(()=>{
    console.log("connected to database");
    // Catch-all for 404 errors (page not found)
    app.use((req, res) => {
        res.status(404).send('Page not found. Sorry!');
    });

    // General error handler (500 internal server errors)
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send("Something went wrong");
    });
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
})
.catch(err=>{
    console.log(err);
})

