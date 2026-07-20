let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}
//Till here type is unknown
interface elementI {
    tagName: string,
    textContent: string,
    id: string,
    disabled: boolean
};

let button = element as elementI
//Here we confirm element is type of interface

console.log("Tag:", button.tagName);
console.log("Text:", button.textContent);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);

// Tag: Button
// Text: Submit
// ID: submit-btn
// Disabled: false