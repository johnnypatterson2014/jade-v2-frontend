What is the "chain rule of probability"?

## The chain rule of probability

The fundamental factorization that lets you express any joint distribution as a product of conditionals.

### Statement

For any random variables $X_1, X_2, \ldots, X_n$:

$$
P(X_1, X_2, \ldots, X_n) \;=\; \prod_{i=1}^{n} P(X_i \mid X_1, \ldots, X_{i-1})
$$

Written out:

$$
P(X_1, X_2, \ldots, X_n) = P(X_1) \cdot P(X_2 \mid X_1) \cdot P(X_3 \mid X_1, X_2) \cdots P(X_n \mid X_1, \ldots, X_{n-1})
$$

(For $i = 1$, the conditional becomes $P(X_1 \mid \varnothing) = P(X_1)$ by convention.)

### Why it's true

It's just iterated application of the definition of conditional probability $P(A \mid B) = P(A, B) / P(B)$. For $n = 2$:

$$P(X_1, X_2) = P(X_1) \cdot P(X_2 \mid X_1)$$

just rearranges $P(X_2 \mid X_1) = P(X_1, X_2)/P(X_1)$. For $n = 3$:

$$P(X_1, X_2, X_3) = P(X_1, X_2) \cdot P(X_3 \mid X_1, X_2) = P(X_1) \cdot P(X_2 \mid X_1) \cdot P(X_3 \mid X_1, X_2)$$

and you can keep peeling off the last variable to get any $n$.

### Three crucial features

**1. It's exact.** No assumptions, no approximations — this holds for *any* joint distribution over *any* random variables (discrete, continuous, mixed).

**2. The ordering is arbitrary.** You can factorize in any permutation of the variables:

$$P(X_1, X_2, X_3) = P(X_3) \cdot P(X_1 \mid X_3) \cdot P(X_2 \mid X_1, X_3)$$

All orderings give numerically identical joints (though different *factorizations*). The right choice of order matters a lot when you go to encode the model, because the conditionals look very different depending on order — that's exactly the **forward vs. reverse** question PS1 Q4 raises.

**3. It turns "modeling a joint" into "modeling many conditionals."** This is the trick that makes high-dimensional generative modeling tractable. Modeling the full joint over $n$ binary variables takes $2^n - 1$ parameters; modeling each conditional separately is the route to compact, learnable models.

### How it's used

#### a) Autoregressive models (GPT-2, PixelRNN, WaveNet, etc.)

These are literally the chain rule with an arbitrary fixed order:

$$P(x_0, x_1, \ldots, x_T) = \prod_{i=0}^{T} P(x_i \mid x_{<i})$$

Each conditional $P(x_i \mid x_{<i})$ is parameterized by a neural network (a transformer in GPT-2's case). You used this exact factorization repeatedly in PS1:

- **6c sampling**: walk through the chain, drawing one variable from each conditional in sequence.
- **6d log-likelihood**: take logs and the product becomes a sum: $\log P = \sum_i \log P(x_i \mid x_{<i})$ — exactly the cross-entropy you computed.
- **PS1 Q4**: the forward vs. reverse argument is about whether the *same set of conditionals* (Gaussians) can represent the same joint when factored in two different orders. Answer: not in general.

#### b) Bayesian networks

A Bayes net is just a *truncated* chain rule — each variable only conditions on its **parents** (a subset of the prior variables), not the whole prefix:

$$P(X_1, \ldots, X_n) = \prod_{i} P(X_i \mid \text{Pa}(X_i))$$

This drops conditional-independence-implied terms from the full chain rule, drastically reducing the parameter count. That's exactly the engine behind PS1 Q3:

- **Q3a** (no independence): the full chain rule over all $n-1$ previous variables → $\prod k_i - 1$ params.
- **Q3b** (full independence): each conditional collapses to a marginal → $\sum (k_i - 1)$ params.
- **Q3c** ($m$-th-order Markov): each conditional uses only the previous $m$ → linear in $n$.

The Bayes-net parameter savings come from being able to *drop variables from the conditioning set* once independence allows it.

#### c) Hidden Markov models, Kalman filters, sequence models

All special cases of the chain rule with a Markov assumption (each $X_i$ depends only on $X_{i-1}$ or a hidden state $Z_{i-1}$).

#### d) ELBO derivation, variational inference

The chain rule on a joint $p(x, z)$ is what lets you write $p(x, z) = p(z) p(x \mid z)$ and then bound $\log p(x)$ by introducing a $q(z \mid x)$ — the foundational move for VAEs.

#### e) Bayes' theorem

Bayes' rule is the chain rule used two ways:

$$P(A, B) = P(A) P(B \mid A) = P(B) P(A \mid B) \;\Longrightarrow\; P(A \mid B) = \frac{P(A) P(B \mid A)}{P(B)}.$$

### The connection to PS1's 6g (which you just answered)

PS1 Q6g was *exactly* a chain-rule subtlety. The chain rule gives you the joint as a product of conditionals — that's fine. But when you **transform** each conditional independently (e.g. temperature-scale each one), you no longer get the corresponding transformation of the joint, because each per-step transformation re-normalizes locally with a context-dependent partition function. The chain rule itself doesn't break — but the equality

$$\prod_i p_T(x_i \mid x_{<i}) = p_T^{\text{joint}}(x_0, \ldots, x_M)$$

does not hold for arbitrary transformations, even though

$$\prod_i p(x_i \mid x_{<i}) = p(x_0, \ldots, x_M)$$

is always exact. The chain rule is the foundation; what 6g shows is that the foundation is **identity-preserving only when you don't tamper with the conditionals between products**.

### One-line takeaway

> The chain rule of probability lets you write any joint as a product of conditionals, which is what makes high-dimensional generative modeling tractable — and is the algebraic identity that underlies almost every sequence model, Bayes net, and variational bound in modern ML.