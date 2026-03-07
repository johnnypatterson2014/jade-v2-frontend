

# Review of Probability Theory

*Arian Maleki and Tom Do — Stanford University*

Probability theory is the study of uncertainty. These notes review the basic probability concepts needed for machine learning. The full mathematical theory involves measure theory, but these notes focus on the core concepts required for practical work.

---

# 1. Elements of Probability

To define probability formally, we need three components.

## Sample Space

The **sample space** $\Omega$ is the set of all possible outcomes of an experiment.

Each outcome $\omega \in \Omega$ represents a complete description of the experiment.

---

## Event Space

The **event space** $F$ is a set of events where each event is a subset of the sample space.

$$
A \in F \Rightarrow A \subseteq \Omega
$$

---

## Probability Measure

A **probability measure**

$$
P : F \rightarrow \mathbb{R}
$$

must satisfy the **axioms of probability**:

1. $P(A) \ge 0$
2. $P(\Omega) = 1$
3. If $A_1, A_2, ...$ are disjoint events:

$$
P\left(\bigcup_i A_i\right) = \sum_i P(A_i)
$$

---

## Example: Tossing a Die

Sample space:

$$
\Omega = {1,2,3,4,5,6}
$$

Example probabilities:

$$
P({1,2,3}) = \frac{3}{6}
$$

$$
P({1,2,3,4}) = \frac{4}{6}
$$

---

## Useful Properties

If $A \subseteq B$ then

$$
P(A) \le P(B)
$$

Intersection bound:

$$
P(A \cap B) \le \min(P(A),P(B))
$$

Union bound:

$$
P(A \cup B) \le P(A) + P(B)
$$

Complement rule:

$$
P(\Omega \setminus A) = 1 - P(A)
$$

---

# 1.1 Conditional Probability and Independence

Conditional probability:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

Two events are **independent** if

$$
P(A \cap B) = P(A)P(B)
$$

Equivalently,

$$
P(A|B) = P(A)
$$

---

# 2. Random Variables

A **random variable** is a function

$$
X : \Omega \rightarrow \mathbb{R}
$$

It assigns a numerical value to each outcome.

Example:

If we flip 10 coins, define

$$
X(\omega) = \text{number of heads}
$$

---

## Discrete Random Variables

Probability of a specific value:

$$
P(X = k) = P({\omega : X(\omega) = k})
$$

Possible values:

$$
Val(X) = {0,1,2,...,10}
$$

---

## Continuous Random Variables

Probability that $X$ lies within an interval:

$$
P(a \le X \le b)
$$

---

# 2.1 Cumulative Distribution Function (CDF)

The **CDF** is defined as

$$
F_X(x) = P(X \le x)
$$

### Properties

* $0 \le F_X(x) \le 1$
* $F_X(x)$ is non-decreasing
* $\lim_{x \to -\infty} F_X(x) = 0$
* $\lim_{x \to \infty} F_X(x) = 1$

---

# 2.2 Probability Mass Function (PMF)

For discrete variables:

$$
p_X(x) = P(X = x)
$$

### Properties

$$
0 \le p_X(x) \le 1
$$

$$
\sum_{x \in Val(X)} p_X(x) = 1
$$

Probability of an event $A$:

$$
P(X \in A) = \sum_{x \in A} p_X(x)
$$

---

# 2.3 Probability Density Function (PDF)

For continuous variables:

$$
f_X(x) = \frac{dF_X(x)}{dx}
$$

Probability over a small interval:

$$
P(x \le X \le x+\Delta x) \approx f_X(x)\Delta x
$$

### Properties

$$
f_X(x) \ge 0
$$

$$
\int_{-\infty}^{\infty} f_X(x),dx = 1
$$

Probability of event $A$:

$$
P(X \in A) = \int_A f_X(x),dx
$$

---

# 2.4 Expectation

Expectation of a function $g(X)$.

### Discrete Case

$$
E[g(X)] = \sum_{x \in Val(X)} g(x)p_X(x)
$$

### Continuous Case

$$
E[g(X)] = \int_{-\infty}^{\infty} g(x)f_X(x)dx
$$

Mean of a random variable:

$$
E[X]
$$

---

## Properties

Constant:

$$
E[a] = a
$$

Scaling:

$$
E[af(X)] = aE[f(X)]
$$

Linearity:

$$
E[f(X) + g(X)] = E[f(X)] + E[g(X)]
$$

---

# 2.5 Variance

Variance measures how spread out a random variable is.

$$
Var[X] = E[(X - E[X])^2]
$$

Equivalent form:

$$
Var[X] = E[X^2] - (E[X])^2
$$

---

## Example: Uniform(0,1)

Mean:

$$
E[X] = \int_0^1 x,dx = \frac12
$$

Second moment:

$$
E[X^2] = \int_0^1 x^2,dx = \frac13
$$

Variance:

$$
Var[X] = \frac13 - \frac14 = \frac1{12}
$$

---

# 2.6 Common Random Variables

## Discrete Distributions

### Bernoulli

$$
X \sim Bernoulli(p)
$$

$$
p(x) =
\begin{cases}
p & x=1 \
1-p & x=0
\end{cases}
$$

Mean:

$$
E[X] = p
$$

Variance:

$$
Var[X] = p(1-p)
$$

---

### Binomial

$$
X \sim Binomial(n,p)
$$

$$
p(x) = \binom{n}{x}p^x(1-p)^{n-x}
$$

Mean:

$$
np
$$

Variance:

$$
np(1-p)
$$

---

### Geometric

$$
p(x) = p(1-p)^{x-1}
$$

Mean:

$$
\frac1p
$$

Variance:

$$
\frac{1-p}{p^2}
$$

---

### Poisson

$$
p(x) = e^{-\lambda}\frac{\lambda^x}{x!}
$$

Mean and variance:

$$
\lambda
$$

---

## Continuous Distributions

### Uniform

$$
f(x) =
\begin{cases}
\frac{1}{b-a} & a \le x \le b \
0 & \text{otherwise}
\end{cases}
$$

Mean:

$$
\frac{a+b}{2}
$$

Variance:

$$
\frac{(b-a)^2}{12}
$$

---

### Exponential

$$
f(x) = \lambda e^{-\lambda x}, \quad x \ge 0
$$

Mean:

$$
\frac1\lambda
$$

Variance:

$$
\frac1{\lambda^2}
$$

---

### Normal (Gaussian)

$$
f(x) =
\frac{1}{\sigma\sqrt{2\pi}}
e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

Mean:

$$
\mu
$$

Variance:

$$
\sigma^2
$$

---

# 3. Two Random Variables

Joint CDF:

$$
F_{XY}(x,y) = P(X \le x, Y \le y)
$$

Marginal distributions:

$$
F_X(x) = \lim_{y \to \infty} F_{XY}(x,y)
$$

$$
F_Y(y) = \lim_{x \to \infty} F_{XY}(x,y)
$$

---

# 3.2 Joint PMF

$$
p_{XY}(x,y) = P(X=x, Y=y)
$$

Marginalization:

$$
p_X(x) = \sum_y p_{XY}(x,y)
$$

---

# 3.3 Joint PDF

$$
f_{XY}(x,y) = \frac{\partial^2 F_{XY}(x,y)}{\partial x \partial y}
$$

Probability over region $A$:

$$
P((X,Y)\in A) = \int_A f_{XY}(x,y),dx,dy
$$

---

# 3.4 Conditional Distributions

Discrete case:

$$
p_{Y|X}(y|x) = \frac{p_{XY}(x,y)}{p_X(x)}
$$

Continuous case:

$$
f_{Y|X}(y|x) = \frac{f_{XY}(x,y)}{f_X(x)}
$$

---

# 3.5 Bayes Rule

Discrete:

$$
P_{Y|X}(y|x) =
\frac{P_{X|Y}(x|y)P_Y(y)}
{\sum_{y'}P_{X|Y}(x|y')P_Y(y')}
$$

Continuous:

$$
f_{Y|X}(y|x) =
\frac{f_{X|Y}(x|y)f_Y(y)}
{\int f_{X|Y}(x|y')f_Y(y')dy'}
$$

---

# 3.6 Independence

Random variables are independent if

$$
p_{XY}(x,y) = p_X(x)p_Y(y)
$$

or

$$
f_{XY}(x,y) = f_X(x)f_Y(y)
$$

---

# 3.7 Covariance

$$
Cov[X,Y] = E[(X-E[X])(Y-E[Y])]
$$

Equivalent form:

$$
Cov[X,Y] = E[XY] - E[X]E[Y]
$$

---

# 4. Multiple Random Variables

For variables $X_1,...,X_n$.

Joint density:

$$
f(x_1,...,x_n)
$$

Chain rule:

$$
f(x_1,...,x_n) =
f(x_1)\prod_{i=2}^{n} f(x_i|x_1,...,x_{i-1})
$$

---

# Random Vectors

Random vector:

$$
X=[X_1,X_2,...,X_n]^T
$$

Expectation:

$$
E[g(X)] = \int g(x)f_X(x),dx
$$

---

# Covariance Matrix

$$
\Sigma = Cov(X)
$$

$$
\Sigma = E[(X-E[X])(X-E[X])^T]
$$

Properties:

* symmetric
* positive semidefinite

---

# Multivariate Gaussian

$$
X \sim N(\mu,\Sigma)
$$

Density:

$$
f(x)=
\frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}}
\exp\left(
-\frac12 (x-\mu)^T\Sigma^{-1}(x-\mu)
\right)
$$

---

# Why Gaussian Distributions Matter

1. Noise often results from many small independent effects
2. By the **Central Limit Theorem**, sums of random variables tend to become Gaussian
3. Gaussian integrals often have closed-form solutions
