function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || "{}");
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");
      sheet.appendRow(["Submitted At","Full Name","Business Email","Company Name","Phone / WhatsApp","Website URL","Industry","Service Required","Target Market","Message","Source"]);
    }
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.fullName || "",
      data.businessEmail || "",
      data.companyName || "",
      data.phone || "",
      data.websiteUrl || "",
      data.industry || "",
      data.service || "",
      data.targetMarket || "",
      data.message || "",
      data.source || "IdeaWonder AI Website"
    ]);
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
