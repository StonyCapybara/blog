---
title: "A short blog on derivation"
date: 1725466590417
---

# Derivation

### What exactly is derivation?
Think of a function. How would you find the slope of a point on that function? Derivation is required for that process.

Visualise the graph of \\(f(x) = x\\). What do you think the slope of that function at every point is?

Here's an image to help:

![graph_of_f(x)=x](https://www.algebra.com/cgi-bin/plot-formula.mpl?expression=+graph%28+600%2C+600%2C+-10%2C+10%2C+-10%2C+10%2C+x%29+)

It must be \\(\boxed1\\)

### Where do we use derivatives?
Derivatives are useful in physics to find the rate of change in a problem

It is also sometimes used in maths

### How to denote a derivative?
Suppose a function \\(f(x)\\)

The derivative of this function can be written as either:
1. \\(f'(x)\\)
2. \\(\frac{d}{dx} f(x)\\)

### To find the derivative of an arbitrary function?
There are 2 ways: 
1. Using the \\(nx^{n-1}\\) rule
2. Using the limit way

### 1. \\(nx^{n-1}\\)
This rule is pretty simple. It basically says that the derivative of \\(x^n = nx^{n-1}\\)

\\[\boxed{\frac{d}{dx} x^n = nx^{n-1}}\\]

Examples:  
- \\(\frac{d}{dx} x^3 = 3x^2\\)
- \\(\frac{d}{dx} x^1 = 1x^0 = 1\\)
- \\(\frac{d}{dx} x^{100} = 100x^{99}\\)
- \\(\frac{d}{dx} x^0 = 0 x^{-1} = 0\\)
- \\(\frac{d}{dx} \sqrt{x} = \frac{d}{dx} x^\frac12 = \frac12 \cdot x^{\frac12 - 1} = \frac12 \cdot x^{-\frac12} = \frac{1}{2\sqrt{x}}\\)

### 2. The limits way
This is definitely the most intuitive way  
The exact formula is:  
\\[\boxed{\lim_{h\to0} \frac{f(x+h) - f(x)}{h}}\\]

This is the main formula from which you can derive all the previous formulae and also the \\(nx^{n-1}\\) rule. Try to do so

If you need to learn/refresh limits also, check out [this video](https://www.youtube.com/watch?v=riXcZT2ICjA)