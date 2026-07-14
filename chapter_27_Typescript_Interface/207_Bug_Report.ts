interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

const BugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["Step1", "Step2"]
}


const BugReport2: BugReport = {
    id: 2,
    title: "title",
    severity: "High",
    stepsToReproduce: ["Step1", "Step2"]
}

const BugReport3: BugReport = {
    id: 3,
    title: "title",
    severity: "High",
    stepsToReproduce: ["Step1", "Step2"]
}

