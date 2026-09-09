What is logistic regression?

## Logistic regression

A statistical model for **binary classification** (and its generalization, **softmax / multinomial logistic regression**, for multi-class) that learns a *probability* — not just a label — for each input.

### The model

Given an input vector $x \in \mathbb{R}^n$, binary logistic regression predicts:

$$P(y = 1 \mid x) = \sigma(w^\top x + b) = \frac{1}{1 + e^{-(w^\top x + b)}}$$

where $\sigma$ is the **sigmoid** (logistic) function, $w$ is a learned weight vector, and $b$ is a learned bias.

Equivalently, the **log-odds** (logit) of the positive class is *linear* in $x$:

$$\log \frac{P(y=1 \mid x)}{P(y=0 \mid x)} = w^\top x + b$$

That's why it's called "logistic *regression*" — it regresses the *log-odds* linearly on the inputs.

### Multi-class generalization

For $k$ classes (this is the form you saw in PS1 Q2):

$$P(y \mid x) = \frac{\exp(x^\top w_y + b_y)}{\sum_{i=1}^{k} \exp(x^\top w_i + b_i)}$$

This is **softmax regression** (a.k.a. multinomial logistic regression). Each class has its own weight vector $w_y$ and bias $b_y$.

### Three angles on what it's doing

1. **Geometric**: it learns a hyperplane $w^\top x + b = 0$; the sigmoid converts distance from the hyperplane into a probability that smoothly transitions from 0 (far on one side) to 1 (far on the other).

2. **Probabilistic / information-theoretic**: it's the *maximum-entropy* model consistent with the constraint that the expected feature vector matches the data — i.e. the least-assumption-baked-in linear-feature classifier.

3. **Discriminative**: unlike Naive Bayes (which models $p(x, y)$ generatively), logistic regression models $p(y \mid x)$ *directly*. It doesn't try to explain how $x$ was generated, just how to map $x$ to a label distribution.

### Training

Fit $w, b$ by **maximum likelihood** on labeled data $\{(x_i, y_i)\}$:

$$\hat w, \hat b = \arg\max_{w, b} \sum_{i} \log P(y_i \mid x_i; w, b)$$

This is equivalent to minimizing the **cross-entropy / binary cross-entropy loss** — which is exactly the result PS1 Q1 proved (MLE = minimizing KL from the empirical to the model conditional). For logistic regression, the loss is **convex**, so gradient descent finds the global optimum.

### Why it's everywhere in ML

- **Linear baseline** for any classification task — the "Hello, World" of supervised learning.
- **Spam detection, click prediction, credit scoring, medical diagnosis** — anywhere you want a calibrated probability, not just a label.
- **Final layer of a neural network**: a fully connected layer + softmax *is* (multinomial) logistic regression on top of learned features.
- **Special case of GLMs** (generalized linear models — Gaussian for regression, Bernoulli for binary classification, Poisson for counts, etc.).

### Connection back to PS1 Q2

PS1 Q2 showed that Gaussian Naive Bayes with shared covariance is a **special case** of multinomial logistic regression — the generative model induces a posterior $p(y \mid x)$ that happens to have exactly the linear-logit softmax form, with $w_y = \mu_y/\sigma^2$ and $b_y = \log\pi_y - \mu_y^\top\mu_y/(2\sigma^2)$. So:

- **Naive Bayes** → models $p(x, y)$ generatively → induces a softmax posterior with constrained $w, b$.
- **Logistic regression** → models $p(y \mid x)$ directly → unconstrained $w, b$ (strictly more expressive).

That's the classic discriminative-vs-generative trade-off: logistic regression is more flexible and tends to beat NB given enough data, while NB needs fewer training examples (because the generative assumption regularizes the parameter estimates).

### Limitations

- **Linear decision boundary** in the input space — fails on non-linearly-separable data unless you hand-craft features or use feature maps (kernels, neural networks).
- **No feature interactions** unless you explicitly construct them (e.g. polynomial features $x_i x_j$).
- This is exactly why deep networks exist: they *learn* a non-linear feature transformation $\phi(x)$ such that logistic regression on top of $\phi(x)$ is powerful enough.