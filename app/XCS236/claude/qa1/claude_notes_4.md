What is a Bernoulli random variable?

## Bernoulli random variable

The simplest non-trivial random variable: a **single coin flip** with a possibly biased coin.

### Definition

A Bernoulli random variable $X$ takes one of exactly two values — conventionally $\{0, 1\}$ — with:

$$P(X = 1) = p, \qquad P(X = 0) = 1 - p$$

where $p \in [0, 1]$ is the **success probability** (the single parameter of the distribution). We write $X \sim \mathrm{Bernoulli}(p)$.

You can pack this into one formula:

$$P(X = x) = p^x (1 - p)^{1 - x}, \qquad x \in \{0, 1\}.$$

### Moments

- **Mean**: $\mathbb{E}[X] = 0 \cdot (1-p) + 1 \cdot p = p$
- **Variance**: $\mathrm{Var}(X) = p(1 - p)$
  - Note it's maximized at $p = 1/2$ (variance $= 1/4$) — a fair coin is the most "uncertain" Bernoulli.
- **Entropy**: $H(X) = -p\log p - (1-p)\log(1-p)$, also maximized at $p = 1/2$.

### Why it's the atomic building block

Almost every other discrete distribution can be built from Bernoullis:

| Distribution | Construction |
|--------------|--------------|
| **Binomial$(n, p)$** | Sum of $n$ i.i.d. Bernoulli$(p)$ → "how many successes in $n$ trials?" |
| **Geometric$(p)$** | Number of Bernoulli trials until the first 1 |
| **Negative binomial$(r, p)$** | Number of trials until the $r$-th 1 |
| **Categorical** | A "Bernoulli with $k$ outcomes" — each individual class outcome is itself a Bernoulli |

### Where it shows up in ML

#### 1. Binary classification labels

Whenever a label $y \in \{0, 1\}$ is conditional on $x$, you're modeling
$$y \mid x \;\sim\; \mathrm{Bernoulli}(p(x))$$
where $p(x) = P(y = 1 \mid x)$ is the model's output. **Logistic regression** is literally this: it parameterizes $p(x) = \sigma(w^\top x + b)$.

The **binary cross-entropy loss** is just the negative log-likelihood of a Bernoulli:

$$-\log P(y \mid x) = -\big[\, y \log p(x) + (1-y) \log(1 - p(x)) \,\big].$$

That's the loss every binary classifier in deep learning minimizes.

#### 2. The label model in PS1 Q3

The $Y$ node in the annotator network (Q3a) takes values in `{good, bad}` — it's a Bernoulli with the prior $\pi = P(Y = \text{good})$. Each annotator $A_i \mid Y$ is also Bernoulli (per parent value), which is why the CPT only needs one free parameter per row.

#### 3. Generative-model architectures

- **Binary VAEs / RBMs**: the visible variables are Bernoulli given the latent state. The "binary cross-entropy" reconstruction loss for binary MNIST is exactly a Bernoulli log-likelihood.
- **Bernoulli policy in RL**: a stochastic policy over a binary action is a Bernoulli parameterized by a network.
- **Mask / dropout / sparsity gates**: every dropout neuron is an independent Bernoulli.

#### 4. Bayesian conjugacy

The **Beta distribution** is the conjugate prior to a Bernoulli likelihood — observing a stream of Bernoulli trials lets you update a Beta posterior in closed form. This is the foundational example in any Bayesian-stats course, and it's what makes the "Beta-Bernoulli bandit" the simplest non-trivial RL setting.

### Relationship to the categorical distribution

A **categorical** distribution over $k$ outcomes is the natural generalization: one trial, $k$ possible values, with probabilities $(\pi_1, \ldots, \pi_k)$ summing to 1.

- Bernoulli$(p)$ = Categorical with $k = 2$ and $\pi = (1 - p, p)$.
- The CPT rows in PS1 Q3 (each row a multinomial over $k_i$ outcomes) are exactly categorical distributions; counting "$k_i - 1$ free parameters per row" is the same trick that says "a Bernoulli has 1 free parameter."

### Why it matters as the foundational example

Even though it's the "simplest" distribution, the Bernoulli is enough to demonstrate almost every important concept in probability and ML:

- **MLE**: with $n$ flips and $k$ heads, the MLE is the empirical fraction $\hat p = k/n$ — first derivation in any intro stats course.
- **Bias-variance**: $\hat p$ is unbiased, with variance $p(1-p)/n$, vanishing as $n \to \infty$.
- **Cross-entropy = MLE**: PS1 Q1's general claim, instantiated for $k = 2$, reduces exactly to binary cross-entropy.
- **Jensen's inequality / concavity**: $H(p) = -p\log p - (1-p)\log(1-p)$ is concave in $p$ — the simplest 2D illustration of why entropy is concave (which underlies PS1 Q5's bias-of-$\log A$ argument).

### One-line takeaway

> A Bernoulli random variable is a single $\{0, 1\}$-valued trial with success probability $p$ — the smallest non-trivial probability distribution, the building block of nearly every other discrete distribution, and the explicit likelihood model underlying logistic regression and binary cross-entropy in ML.