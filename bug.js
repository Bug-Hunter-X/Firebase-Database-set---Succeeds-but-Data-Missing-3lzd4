In a Firebase project, I encountered an issue where data wasn't being written to the Realtime Database correctly.  The strange part was that the `set()` method appeared to succeed, returning a promise that resolved, but the data wasn't actually in the database. The code looked like this: 
```javascript
firebase.database().ref('/myData').set({ key1: 'value1' }).then(() => { console.log('Data written!'); });
```