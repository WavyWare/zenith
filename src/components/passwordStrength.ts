type PasswordStrength = "Weak" | "Medium" | "Strong";

function checkPasswordStrength(password: string): PasswordStrength {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[\W_]/.test(password)) score++;

    if (score <= 2) return "Weak";
    if (score === 3 || score === 4) return "Medium";
    return "Strong";
}

function getStrengthDetails(strength: PasswordStrength) {
    switch (strength) {
        case "Weak":
            return { color: "bg-red-500", width: "33.333333%", label: "Weak" };
        case "Medium":
            return { color: "bg-yellow-500", width: "66.666666%", label: "Medium" };
        case "Strong":
            return { color: "bg-green-500", width: "100%", label: "Strong" };
        default:
            return { color: "bg-background", width: "0%", label: "Enter password" };

    }
}

export { checkPasswordStrength, getStrengthDetails };