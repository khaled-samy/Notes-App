const app = require('./app');

// eslint-disable-next-line no-console
app.listen(app.get('port'), () => { console.log(`Server is Running on http://localhost:${app.get('port')}`); });
