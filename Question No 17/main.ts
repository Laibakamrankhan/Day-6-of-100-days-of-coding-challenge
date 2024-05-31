let guest : string[] = [ 'qasim', 'Sara', 'Ali', 'Mahnoor', 'Sameen', 'kamran' ]
console.log("unfortunatly i can invte only two people");
while(guest.length > 2) {
    let removedguest = guest.pop();
    console.log(`Sorry ${removedguest} I can't invite you to dinner`);
    
}
guest.forEach(guest => {
    console.log(`Dear ${guest} you still are invited to dinner`);
    
})
guest.slice(0,guest.length);
console.log(guest);
