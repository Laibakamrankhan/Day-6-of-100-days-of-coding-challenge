var guest = ["Sara", "Ali", "Mahnoor"];
guest.push("Sameen");
console.log(guest);
guest.unshift("qasim");
console.log(guest);
guest.splice(5, 1, "kamran");
console.log(guest);
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join at dinner"));
});
