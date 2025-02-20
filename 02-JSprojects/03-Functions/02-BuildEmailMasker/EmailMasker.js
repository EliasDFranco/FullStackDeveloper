function maskEmail(email) {
    let[username, domain] = email.split("@");
    let maskedUsername = username[0] + "*".repeat(username.length - 2) + username[username.length - 1];
    return maskedUsername + "@" + domain;
}
let email = "freecodecamp@example.com";

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));