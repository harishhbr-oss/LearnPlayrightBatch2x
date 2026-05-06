// JavaScript file to display current time and timezone information

function displayCurrentTimeInfo() {
    const now = new Date();

    console.log("=== Current Date and Time Information ===\n");

    // Current local time
    console.log("Local Time:");
    console.log(`  Date: ${now.toLocaleDateString()}`);
    console.log(`  Time: ${now.toLocaleTimeString()}`);
    console.log(`  Full: ${now.toLocaleString()}\n`);

    // Timezone information
    console.log("Timezone Information:");
    console.log(`  Timezone Offset: ${now.getTimezoneOffset()} minutes`);
    console.log(`  Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
    console.log(`  ISO String: ${now.toISOString()}\n`);

    // UTC time
    console.log("UTC Time:");
    console.log(`  Date: ${now.toUTCString()}\n`);

    // Additional details
    console.log("Additional Details:");
    console.log(`  Day of Week: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`);
    console.log(`  Timestamp: ${now.getTime()}`);
}

// Display the information
displayCurrentTimeInfo();
