---
title: "A pretty easy question on Number Bases"
date: 1725173332068
---

## Q. A number \\(N\\) is in base \\(10\\), \\(503\\) in base \\(b\\) and \\(305\\) in base \\(b+2\\). Find the product of digits of \\(N\\).
___
#### Solution:
Consider the number \\(503\\) in base \\(b\\). It can be written as:
\\[N=503_b = 5\cdot b^2 + 0\cdot b + 3 = 5b^2 + 3\\]
Now, this is equal to the number \\(305\\) in base \\(b+2\\) which can be written as:
\\[N=305_{b+2} = 3\cdot (b+2)^2 + 0\cdot (b+2) + 5 = 3(b+2)^2+5\\]

Now equate and solve

\\(5b^2+3=3(b+2)^2+5\\)

Expand

\\(5b^2+3=3(b^2+4b+4)+5\\)

\\(=5b^2+3=3b^2+12b+12+5\\)

We get a quadratic which is
\\[2b^2-12b-14=0\\]
\\[\Rightarrow b^2-6b-7=0\\]
\\[b=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\\]
\\[b=\frac{-(-6)\pm\sqrt{(-6)^2-4(1)(-7)}}{2(1)}\\]
\\[b=\frac{6\pm\sqrt{36+28}}2\\]
\\[b=\frac{6\pm\sqrt{64}}2\\]
\\[b=\frac{6\pm8}{2}\\]
\\[b=3\pm4\\]
\\[b=-1 \text{ or } 7\\]

Now, as number bases are not negative, we can assume \\(b\\) to be \\(7\\)

Calculate for N:
\\[N=5b^2+3\\]
\\[N=5(7)^2+3\\]
\\[N=5\cdot 49+3\\]
\\[N=245+3=248\\]

Product of digits of \\(N = \boxed{2\cdot4\cdot8 = 64}\\)

Question Source: IOQM 2020-2021 #2