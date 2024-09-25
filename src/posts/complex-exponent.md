---
title: "Solve for \\(1^x = 2\\)"
date: 1727265533577
---

# Solve for \\(1^x = 2\\)

This might seems impossible right? You would think that \\(1\\) raised to the power of any number is just \\(1\\)?

You would be right but there's one more thing that you would need to add: \\(1\\) raised to the power of any REAL number is equal to one.

This would suggest that there might be a complex soulution right\\(?\\) Yes.

---

To find out the solution, first you need to undertstand what the polar form of a complex number is. It is of the form 
## \\[\boxed{z = re^{i \theta}}\\]

To understand this form, just imagine a complex number, say \\(z=x+yi\\), as a point in the complex plane, \\((x, y)\\).

The distance of this point from the origin is \\(r=\sqrt{x^2+y^2}\\)

The angle made by the line joining this point to the origin and the x axis is \\(\theta\\) and is always taken in radians.

\\(e\\) is Euler's number, defined by
\\[\boxed{e=\lim_{n\rightarrow \infty}\left(1+\frac1n\right)^n}\\]

\\(i\\) is the imaginary number, defined by
\\[\boxed{i=\sqrt{-1}}\\]

---

Now let's go to the steps:

We know that \\(1 = 1 + 0i\\), this can be represented in the polar form by
\\[1+0i=(1,0)=e^{i(2\pi)}\\]

Notice we cannot take \\(\theta\\) as \\(0\\).

\\[1^x=2\\]
\\[\implies x=\log_1{2}=\frac{\ln2}{\ln1}\\]

Now because of the problem of \\(\ln1=0\\), we should take the polar form of \\(1\\) to obtain the solution.

\\[x=\frac{\ln2}{\ln1}=\frac{\ln2}{\ln(e^{2\pi i})}\\]
## \\[\implies \boxed{x=\frac{\ln2}{2\pi i}}\blacksquare\\]

---

### Check

### \\[1^{\frac{\ln2}{2\pi i}}\\]
### \\[=(e^{2\pi i})^{\frac{\ln2}{2\pi i}}\\]
### \\[=e^{\ln2}\\]
### \\[=2\\]