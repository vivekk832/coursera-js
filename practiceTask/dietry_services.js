let userRole = prompt("Enter your identity:");
let accessLevel ;

if (userRole === "Employee"){
    accessLevel = "Full access to Dietary Services"
} else if (userRole === "Enrolled Member"){
    accessLevel == "Full access to Dietry services and also one-on-one interaction with a dietician"
} else if (userRole === "Subscriber"){
    accessLevel == "Partial access to Dietry services "
}else if (userRole === "Non-Subscriber"){
    accessLevel == "Subscribe first to avail this facility."
}

console.log("Access Level:",accessLevel)