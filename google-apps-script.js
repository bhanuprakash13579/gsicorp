// ============================================================
// GSI Corp - Contact Form → Google Sheets
// ============================================================
// HOW TO DEPLOY:
//   1. Go to https://script.google.com
//   2. Click "New project"
//   3. Delete the default code and paste this entire file
//   4. Click "Save" (give it any name, e.g. "GSI Contact Form")
//   5. Click "Deploy" → "New deployment"
//   6. Type: "Web app"
//   7. Execute as: "Me"
//   8. Who has access: "Anyone"
//   9. Click "Deploy" → copy the Web App URL
//  10. Add that URL as GOOGLE_SCRIPT_URL in your Vercel environment variables
// ============================================================

const SHEET_NAME = 'Enquiries'; // Tab name in your Google Sheet

function doPost(e) {
    try {
        var data = JSON.parse(e.postData.contents);

        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName(SHEET_NAME);

        // Create the sheet and header row if it doesn't exist yet
        if (!sheet) {
            sheet = ss.insertSheet(SHEET_NAME);
            sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);

            // Style the header row
            var headerRange = sheet.getRange(1, 1, 1, 5);
            headerRange.setBackground('#1a237e');
            headerRange.setFontColor('#ffffff');
            headerRange.setFontWeight('bold');
            sheet.setFrozenRows(1);

            // Set column widths
            sheet.setColumnWidth(1, 180); // Timestamp
            sheet.setColumnWidth(2, 150); // Name
            sheet.setColumnWidth(3, 200); // Email
            sheet.setColumnWidth(4, 200); // Subject
            sheet.setColumnWidth(5, 400); // Message
        }

        // Append the new enquiry row
        sheet.appendRow([
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            data.name || '',
            data.email || '',
            data.subject || '',
            data.message || ''
        ]);

        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: err.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Test this function manually from the Apps Script editor
// to verify the sheet gets created correctly
function testSetup() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log('Connected to: ' + ss.getName());
    Logger.log('All good! Deploy as Web App now.');
}
