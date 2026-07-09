class Student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }

    static course_name = "Playwright";
    static instructor_name = "Pramode";

    static display() {
        console.log("Hi, I am a common f(n)");

    }
}

const s1 = new Student("Tom", 32, "4567891230");
const s2 = new Student("Harry", 30, "65478912310");

console.log(s1.name_student); // Tom
console.log(s2.name_student); //Harry

console.log(s1.course_name); //undefined as static can be access directly
console.log(Student.course_name); // Playwright
