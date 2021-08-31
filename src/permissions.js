export default function getPermissions() {
    return navigator.mediaDevices.getUserMedia({ audio: true, video: false })
}

navigator.permissions.query({name: 'microphone'})
.then((permissionObj) => {
 console.log(permissionObj.state);
})
.catch((error) => {
 console.log('Got error :', error);
})

navigator.permissions.query({name: 'camera'})
.then((permissionObj) => {
 console.log(permissionObj.state);
})
.catch((error) => {
 console.log('Got error :', error);
})