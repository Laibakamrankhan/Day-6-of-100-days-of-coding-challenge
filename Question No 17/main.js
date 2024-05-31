var guest = ['qasim', 'Sara', 'Ali', 'Mahnoor', 'Sameen', 'kamran'];
console.log("unfortunatly i can invte only two people");
while (guest.length > 2) {
    var removedguest = guest.pop();
    console.log("Sorry ".concat(removedguest, " I can't invite you to dinner"));
}
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you still are invited to dinner"));
});
guest.slice(0, guest.length);
console.log(guest);
