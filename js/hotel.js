var test = {
    fname: "Coen",
    lname: "Bott",
    age: 20,
    display: function(){
        console.log("in function");
        return this.fname + " " +this.lname;
    }

};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#guestname').val(),
        checkin: $('#checkin').val(),
        people: $('#numppl').val(),
        room: $('#room').val()
    }
    alert(guest.name + " Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}