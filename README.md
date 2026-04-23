# ShipGuard – Smart Logistics Protection Platform

## Problem Statement

E-commerce sellers and personal shippers frequently face package loss or damage (approximately 3–5%) during courier transit. The current logistics system has several challenges:

- Lack of transparency in shipment handling  
- Complex and manual claim filing process  
- Long claim processing time (30–45 days)  
- Frequent claim disputes or rejections  
- Expensive insurance options  
- No clear accountability for courier companies  

These issues lead to financial loss, customer dissatisfaction, and reduced trust in logistics services.

---

## Proposed Solution

ShipGuard is a MERN-stack based web platform designed to improve transparency, accountability, and efficiency in courier logistics.

The platform enables users to:
- Track shipments  
- Submit claims for lost or damaged packages  
- Monitor claim status  
- Analyze courier performance  
- Receive alerts for delays and risks  

---

## Objectives

- Simplify and speed up claim filing  
- Improve transparency in shipment lifecycle  
- Reduce disputes in claim processing  
- Provide data-driven insights for courier selection  
- Introduce accountability in logistics systems  

---

## Key Features

### 1. Shipment Tracking
- Track shipment journey (Pickup → Transit → Delivery)  
- View detailed shipment information  
- Visual timeline for better understanding  

---

### 2. Claim Submission System
- Multi-step claim form  
- Auto-filled shipment details  
- Upload supporting proof such as images and invoices  

---

### 3. Claim Status Tracking
- Track claim progress:
  - Submitted  
  - Under Review  
  - Approved / Rejected  
- Transparent status updates  

---

### 4. Rule-Based Risk Analysis
Since the project is restricted to the MERN stack, AI/ML is not used.  
Instead, ShipGuard implements a rule-based risk analysis system using JavaScript.

Risk factors include:
- Courier past performance  
- Route history  
- Package value  
- Delay frequency  
- Previous claim records  

Based on these factors, shipments are categorized into:
- Low Risk  
- Medium Risk  
- High Risk  

---

### 5. Courier Performance Analytics
- Compare courier companies using:
  - Loss rate  
  - Delay rate  
  - Claim approval rate  
- Helps users choose reliable courier services  

---

### 6. Alerts and Notifications
- Notifications for:
  - Shipment delays  
  - High-risk shipments  
  - Claim status updates  

---

## System Architecture
User (Seller / Shipper)
↓
React Frontend
↓
Node.js / Express Backend
↓
MongoDB Database


Additional logic:
- Risk scoring engine implemented in Node.js  
- Claim processing handled via backend APIs  
- Analytics generated from stored shipment data  

---

## Tech Stack

- Frontend: React.js  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Design: Figma (UI/UX and Prototyping)  
- Styling: CSS / Tailwind / Bootstrap  

---

## Project Modules

### Frontend
- Landing Page  
- Login / Signup  
- Dashboard  
- Shipment Tracking Page  
- Claim Submission Page  
- Claim History Page  
- Courier Analytics Page  
- Alerts Page  

---

### Backend
- User authentication APIs  
- Shipment management APIs  
- Claim submission APIs  
- Claim status APIs  
- Risk analysis logic  
- Dashboard analytics APIs  

---

### Database Collections
- Users  
- Shipments  
- Claims  
- Couriers  
- Notifications  

---

## Implementation Details

### Current Status
- UI/UX design completed in Figma  
- Interactive prototype developed  
- MERN implementation planned or in progress  
- Risk analysis implemented using rule-based logic  

---

## Future Scope

- Integration with courier tracking APIs  
- Advanced predictive models  
- Blockchain-based claim ledger  
- Fraud detection mechanisms  
- Email and SMS notification system  

---

## Expected Impact

- Faster claim resolution  
- Reduced financial losses  
- Improved transparency  
- Better courier selection decisions  
- Increased trust in logistics systems  

---

## Conclusion

ShipGuard provides a practical and scalable solution to logistics challenges using the MERN stack. By combining shipment tracking, claim management, and data-driven insights, it improves transparency and accountability without relying on complex AI systems.

---

## Authors

- Aryan Sabasana   

---

## Note

This project is developed as part of a college academic project with the constraint of using only the MERN stack. AI-based features are replaced with rule-based risk analysis to ensure full implementation using JavaScript.
