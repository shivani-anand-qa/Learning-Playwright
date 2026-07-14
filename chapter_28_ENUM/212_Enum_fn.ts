enum Severity {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
    BLOCKING
}
console.log(Severity.LOW); //0
//or
/*
enum Severity {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}
console.log(Severity.LOW); //low
*/

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}


console.log(Environment.QA);
