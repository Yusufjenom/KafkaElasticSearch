import expressApp from './expressApp'
const port = process.env.PORT || 8080;

export const startServer = async() => {
expressApp.listen(port, () => console.log(`server running on port : ${port}`));

process.on('uncaughtException', async (err) => {
    console.log(err);
    process.exit(1)
});
};

startServer()
.then(() => console.log(`server running.....`))