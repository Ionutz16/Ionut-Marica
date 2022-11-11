function Person(firstName, lastName) {
    this.FistName = firstName || "unknown";
    this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function() {
    return this.FistName + " " + this.LastName
}

function Student(fistName, lastName, schoolName, grade){
    Person.call(this, fistName, lastName);
    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}

//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James", "Bond", "Oxford", 5);

alert(std.getFullName()); //James Bond;
alert(std instanceof Student); //true;
alert(std instanceof Person); //true;