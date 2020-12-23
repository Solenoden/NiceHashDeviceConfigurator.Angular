const express = require('express');

let app = express();
app.use(express.static('./dist/NiceHashDeviceConfiguratorAngular'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/NiceHashDeviceConfiguratorAngular/'});
});

app.listen(process.env.PORT || 8080);
