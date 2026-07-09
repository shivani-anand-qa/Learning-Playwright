class Student {
    static courseName = "Playwright";
    static instructorName = "Pramode";
    static duration = "1 hr";

    constructor(studentName) {
        this.studentName = studentName;
    }


    static studentDetails(studentName) {
        console.log(studentName + " has been enrolled to " + Student.courseName + " course for " +
            Student.duration + " whose instructor is " + Student.instructorName);

    }
}

const s1 = new Student("Shivani");
const s2 = new Student("Elizabeth");
const s3 = new Student("Peter");
const s4 = new Student("Rex");
const s5 = new Student("Garry");
const s6 = new Student("Debbie");
const s7 = new Student("Bella");
const s8 = new Student("Anthony");
const s9 = new Student("Shiba");
const s10 = new Student("Jennelyn");
Student.studentDetails(s1.studentName); //Calling Static method




