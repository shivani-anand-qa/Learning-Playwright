# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Verify that the title will be TTA Cart
- Location: tests/example.spec.ts:4:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "TTACart-Login"
Received: "Login"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Login"

```

```yaml
- navigation:
  - link "TheTestingAcademy":
    - /url: /
    - img "TheTestingAcademy"
  - list:
    - listitem:
      - link "HOME":
        - /url: /
    - listitem:
      - link "ALL COURSES":
        - /url: /courses
    - listitem:
      - link "SUPPORT":
        - /url: /support
    - listitem:
      - link "CALENDAR":
        - /url: /calendar
    - listitem:
      - link "BLOG":
        - /url: /blog
  - link "Sign In":
    - /url: /login
- heading "Login" [level=4]
- separator
- textbox "Email Address"
- textbox "Password"
- text: 
- iframe
- separator
- button "Login"
- link "Forgot Password?":
  - /url: /password/reset
- text: Don't have an account?
- link "Sign Up":
  - /url: /register
- paragraph: © 2026 TheTestingAcademy
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem:
    - link "Courses":
      - /url: /courses
  - listitem:
    - link "Support":
      - /url: /support
  - listitem:
    - link "Terms & Conditions":
      - /url: /terms
  - listitem:
    - link "Privacy Policy":
      - /url: /privacypolicy
  - listitem:
    - link "Cookie Policy":
      - /url: /cookiepolicy
  - listitem:
    - link "Refund Policy":
      - /url: https://www.thetestingacademy.com/refundpolicy
- list:
  - listitem:
    - link "":
      - /url: https://facebook.com/techdutta
  - listitem:
    - link "":
      - /url: https://www.instagram.com/thetestingacademy/?hl=en
  - listitem:
    - link "":
      - /url: https://twitter.com/itstechmode
  - listitem:
    - link "":
      - /url: https://www.youtube.com/c/TheTestingAcademy/
- contentinfo
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test'
  2 | 
  3 | 
  4 | test("Verify that the title will be TTA Cart", async ({ page }) => {
  5 |   await page.goto("https://courses.thetestingacademy.com/courses/playwright-automation-mastery-2x/contents/6a32303ec888d");
  6 |   await page.waitForTimeout(5000);
> 7 |   await expect(page).toHaveTitle("TTACart-Login");
    |                      ^ Error: expect(page).toHaveTitle(expected) failed
  8 | })
```