# Group 3: Real-Time Telemetry (Auth Gate)

## Assigned Challenge

**Challenge:** Real-Time Telemetry — Auth Gate

**Core Task:** Add a live character counter directly beneath the password field.

**Mandatory Technique:** Bind an `input` event listener to the password field and update the `textContent` of a target `<span>` on every keystroke.

---

## How the DOM Logic Was Implemented

This feature was built on top of the existing **Client-Side Authentication Gate** (`auth-portal/login.html`) from Applied Lab 2.

### 1. HTML — Target Node
A new `<span id="pwCounter">0</span>` was added inside a `<div class="form-text">`, placed directly beneath the password `<input>` field, inside the same `mb-3` wrapper `div`. This span acts as the on-screen display node for the live count.

```html
<div class="mb-3">
    <label for="passwordInput" class="form-label fw-semibold">Password</label>
    <input type="password" id="passwordInput" class="form-control" placeholder="••••••••" required>
    <div class="form-text">
        Characters typed: <span id="pwCounter">0</span>
    </div>
</div>
```

### 2. JavaScript — Node Targeting
The counter span was retrieved from the DOM using `document.getElementById("pwCounter")`, and stored in a `const` alongside the other DOM node references at the top of `login.js`.

```javascript
const passwordCounter = document.getElementById("pwCounter");
```

### 3. JavaScript — Event Binding
An `input` event listener was attached to the `passwordInput` field. The `input` event was chosen over alternatives like `keyup` because it reliably fires on **every** value change — typed characters, pasted text, cut text, and autofill — not just physical key presses.

```javascript
passwordInput.addEventListener("input", function() {
    passwordCounter.textContent = passwordInput.value.length;
});
```

### 4. Runtime Behavior
On every keystroke, the callback reads the live `.value.length` of the password field directly from the in-memory DOM tree and writes it into the `.textContent` of the `pwCounter` span — updating the on-screen counter in real time with no page reload and no extra state variables.

---

## Group Members & Reporting Roles

| Name | Reporting Role |
|------|----------------|
| _Lezly Therese Villanueva_ | QA |
| _Thirbby Andrei Rollon_ | Frontend Developer |
| _Kerk Dagohoy_ | Frontend Developer |
| _Kierby Antonio_ | Systems Analyst |

---

## Live Deployment

- **Repository:** `https://github.com/<username>/dom-micro-challenges-group3`
- **Live Demo (GitHub Pages):** `https://<username>.github.io/dom-micro-challenges-group3`
