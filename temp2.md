

# Probability Cheat Sheet (Machine Learning)

## 1. Probability Basics

### Sample Space

Set of all possible outcomes.

$$
\Omega = {\omega_1, \omega_2, ...}
$$

### Probability Axioms

1. Non-negativity

$$
P(A) \ge 0
$$

2. Total probability

$$
P(\Omega) = 1
$$

3. Additivity (disjoint events)

$$
P(A \cup B) = P(A) + P(B)
$$

---

### Useful Probability Rules

Complement rule

$$
P(A^c) = 1 - P(A)
$$

Union rule

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

Union bound

$$
P(A \cup B) \le P(A) + P(B)
$$

---

# 2. Conditional Probability

### Definition

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

---

### Product Rule

$$
P(A \cap B) = P(A|B)P(B)
$$

---

### Bayes Rule

$$
P(A|B) =
\frac{P(B|A)P(A)}{P(B)}
$$

Expanded form

$$
P(A|B) =
\frac{P(B|A)P(A)}
{\sum_i P(B|A_i)P(A_i)}
$$

---

# 3. Independence

Events are independent if

$$
P(A \cap B) = P(A)P(B)
$$

Equivalent:

$$
P(A|B) = P(A)
$$

---

# 4. Random Variables

A random variable is a function

$$
X : \Omega \rightarrow \mathbb{R}
$$

---

## Discrete Random Variable

Probability mass function (PMF)

$$
p(x) = P(X = x)
$$

Properties

$$
0 \le p(x) \le 1
$$

$$
\sum_x p(x) = 1
$$

---

## Continuous Random Variable

Probability density function (PDF)

$$
f(x)
$$

Properties

$$
f(x) \ge 0
$$

$$
\int_{-\infty}^{\infty} f(x)dx = 1
$$

Probability over interval

$$
P(a \le X \le b) =
\int_a^b f(x)dx
$$

---

# 5. Cumulative Distribution Function (CDF)

$$
F(x) = P(X \le x)
$$

Properties

$$
0 \le F(x) \le 1
$$

$$
F(-\infty) = 0
$$

$$
F(\infty) = 1
$$

---

# 6. Expectation (Mean)

Discrete case

$$
E[X] = \sum_x x p(x)
$$

Continuous case

$$
E[X] =
\int_{-\infty}^{\infty} x f(x)dx
$$

General expectation

$$
E[g(X)] = \sum g(x)p(x)
$$

or

$$
E[g(X)] =
\int g(x)f(x)dx
$$

---

## Properties

Linearity of expectation

$$
E[aX + b] = aE[X] + b
$$

$$
E[X+Y] = E[X] + E[Y]
$$

---

# 7. Variance

Definition

$$
Var(X) = E[(X - E[X])^2]
$$

Alternative form

$$
Var(X) = E[X^2] - (E[X])^2
$$

Standard deviation

$$
\sigma = \sqrt{Var(X)}
$$

---

## Variance Rules

Scaling

$$
Var(aX) = a^2 Var(X)
$$

Sum

$$
Var(X+Y) =
Var(X) + Var(Y) + 2Cov(X,Y)
$$

If independent

$$
Var(X+Y) = Var(X) + Var(Y)
$$

---

# 8. Covariance

$$
Cov(X,Y) = E[(X-E[X])(Y-E[Y])]
$$

Equivalent form

$$
Cov(X,Y) =
E[XY] - E[X]E[Y]
$$

---

## Correlation

$$
\rho =
\frac{Cov(X,Y)}
{\sigma_X \sigma_Y}
$$

Range

$$
-1 \le \rho \le 1
$$

---

# 9. Common Distributions

| Distribution | PMF/PDF                                                       | Mean                | Variance              |
| ------------ | ------------------------------------------------------------- | ------------------- | --------------------- |
| Bernoulli    | $p(x)=p^x(1-p)^{1-x}$                                         | $p$                 | $p(1-p)$              |
| Binomial     | $\binom{n}{k}p^k(1-p)^{n-k}$                                  | $np$                | $np(1-p)$             |
| Poisson      | $e^{-\lambda}\frac{\lambda^k}{k!}$                            | $\lambda$           | $\lambda$             |
| Uniform      | $\frac{1}{b-a}$                                               | $\frac{a+b}{2}$     | $\frac{(b-a)^2}{12}$  |
| Exponential  | $\lambda e^{-\lambda x}$                                      | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| Normal       | $\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$               | $\sigma^2$            |

---

# 10. Joint Distributions

Joint distribution

$$
P(X=x,Y=y)
$$

Marginal distribution

$$
P(X=x) = \sum_y P(X=x,Y=y)
$$

Continuous

$$
f_X(x) = \int f_{XY}(x,y)dy
$$

---

# 11. Conditional Distributions

Discrete

$$
P(Y=y|X=x) =
\frac{P(X=x,Y=y)}{P(X=x)}
$$

Continuous

$$
f_{Y|X}(y|x) =
\frac{f_{XY}(x,y)}{f_X(x)}
$$

---

# 12. Multivariate Gaussian

$$
X \sim N(\mu,\Sigma)
$$

Density

$$
f(x) =
\frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}}
\exp
\left(
-\frac12
(x-\mu)^T\Sigma^{-1}(x-\mu)
\right)
$$

---

# 13. Central Limit Theorem

For independent variables

$$
X_1,...,X_n
$$

the sample mean

$$
\bar X =
\frac{1}{n}\sum X_i
$$

approaches

$$
N(\mu,\frac{\sigma^2}{n})
$$

as

$$
n \rightarrow \infty
$$
