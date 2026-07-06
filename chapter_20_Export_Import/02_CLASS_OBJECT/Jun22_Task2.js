class PlaywrightBatch {
    // Static variables — shared across all students (same for the whole batch)
    static courseName = "Playwright 2x";
    static instructorName = "Pramode";
    static duration = "1 hr";
    static batchDate = "June 2024";

    // Non-static variable — unique per student
    constructor(studentName) {
        this.studentName = studentName;
    }

    // Non-static method — called on each student instance
    printStudent() {
        console.log(`Student: ${this.studentName}`);
    }

    // Static method — prints batch info, accepts a student object
    static printBatchInfo(student) {
        console.log(
            `${student.studentName} is enrolled in ${PlaywrightBatch.courseName} ` +
            `batch (${PlaywrightBatch.batchDate}), ` +
            `taught by ${PlaywrightBatch.instructorName}, ` +
            `duration: ${PlaywrightBatch.duration}`
        );
    }

    // Static method — prints all students in the batch
    static printAllStudents(students) {
        console.log(`\n--- ${PlaywrightBatch.courseName} Batch Students ---`);
        students.forEach((student, index) => {
            console.log(`${index + 1}. ${student.studentName}`);
        });
    }
}

// 10 student objects
const s1 = new PlaywrightBatch("Shivani");
const s2 = new PlaywrightBatch("Elizabeth");
const s3 = new PlaywrightBatch("Peter");
const s4 = new PlaywrightBatch("Rex");
const s5 = new PlaywrightBatch("Garry");
const s6 = new PlaywrightBatch("Debbie");
const s7 = new PlaywrightBatch("Bella");
const s8 = new PlaywrightBatch("Anthony");
const s9 = new PlaywrightBatch("Shiba");
const s10 = new PlaywrightBatch("Jennelyn");

const students = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

// Non-static print method called on each instance
console.log("--- Individual Print (non-static) ---");
students.forEach(student => student.printStudent());

// Static method — print all students
PlaywrightBatch.printAllStudents(students);

// Static method — print batch info for one student
console.log("\n--- Batch Info (static) ---");
PlaywrightBatch.printBatchInfo(s1);
