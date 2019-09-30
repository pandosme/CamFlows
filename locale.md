## Setting Time Zone
Edit settings.js and add the to following before "module.exports = {"
```
process.env.TZ = "Europe/Stockholm";
```
## Format Ouput
NodeRed is not designed for locale output.  Ouput will be US date & time format

### Option 1 for Date String YYYY-MM-DD HH:MM:SS
```
date = new Date();
date = (date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + ' ' + ('00' + date.getHours()).slice(-2) + ':' + ('00' + date.getMinutes()).slice(-2) + ':' + ('00' + date.getSeconds()).slice(-2));
```
### Option 2 ISO YYYY-MM-DDTHH:MM:SS
```
date = new Date();
datestring = date.toISOString().substr(0,19);
```
