# 📬 Portfolio Contact Form Email Notifier

This project allows you to automatically receive beautifully formatted email notifications whenever someone submits your portfolio contact form via Google Forms.

The email includes:
- First name
- Last name (highlighted in red)
- Visitor’s message
- Email ID (to reply)
- Stylish HTML layout matching your personal branding

---

## 🧠 Overview

- 🛠️ **Script File**: `EmailSendFunction.js`
- 📤 **Email Sent To**: Your personal inbox
- 💌 **Email Format**: Dark-themed header + white content card
- 🖼️ **Branding**: Includes SSR Software Solutions logo

---

## 📝 Form Setup Instructions

### 1. 🧾 Create a Google Form
Design a form with the following fields in this **exact order**:

| Field Name   | Type         |
|--------------|--------------|
| First Name   | Short Answer |
| Last Name    | Short Answer |
| Email ID     | Short Answer |
| Message      | Paragraph    |

> ⚠️ Do not shuffle the field order. The script relies on cell indices.

---

### 2. 📊 Link Google Sheet to the Form
- Click on the **Responses** tab in your form.
- Click the **Google Sheets icon**.
- This creates a linked sheet, usually named `Form Responses 1`.

---

## 🔑 Cell Index Reference

| Index (0-based) | Column     | Variable in Script |
|------------------|------------|--------------------|
| 1                | First Name | `firstName`        |
| 2                | Last Name  | `lastName`         |
| 3                | Email ID   | `emailid`          |
| 4                | Message    | `messageCell`      |

> The `Timestamp` field is in column 0, so the actual user data starts from index `1`.

---

## ⚙️ Script Setup (Apps Script)

### 1. Open Script Editor
- In the linked Google Sheet, go to:  
  `Extensions` → `Apps Script`

### 2. Add the Script
- Paste the entire code from `EmailSendFunction.js` into it.

---

### 3. Set Up Trigger

- In Apps Script editor:
  - Click the **clock icon (Triggers)** on the left.
  - Click **"+ Add Trigger"**.
  - Choose:
    - **Function**: `sendEmailOnFormSubmit`
    - **Event source**: `From form`
    - **Event type**: `On form submit`

> ✅ This will ensure the script runs automatically every time the form is submitted.

---

## ✉️ Output Email Preview

- **Subject**: `Portfolio: [First Name] wanted to contact you`
- **Body**: Includes:
  - Greeting (`Hello [Name] 👋`)
  - Highlighted last name in red
  - Message left by the visitor
  - Visitor’s email to reply
  - "Have a wonderful day 😊"
  - Footer with SSR branding

---

## 🧪 Customization Notes

| Field         | Editable? | Description                          |
|---------------|-----------|--------------------------------------|
| `recipient`   | ✅         | Set to your personal email address   |
| `logo URL`    | ✅         | Change GitHub logo if needed         |
| Styling       | ✅         | All styling is inline and email-safe |

---

## 💼 Project Structure

```plaintext
📁 PortfolioEmailNotifier/
│
├── 📄 EmailSendFunction.js  ← Main Google Apps Script
├── 📄 README.md             ← Setup instructions
├── 🏞️ Sample.png            ← Sample Image
```

---

## 📸 Screenshot Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/SuhasReddy651/Google-Form-Updates/main/Sample.png" alt="Email Preview" />
</p>

## 🙌 Credits


<p align="start">
  Made with ❤️ by &nbsp&nbsp<img src="https://raw.githubusercontent.com/SuhasReddy651/ssr-software-solutions/main/logo-white.png" alt="ssr software solutions" width="150" />
</p>
