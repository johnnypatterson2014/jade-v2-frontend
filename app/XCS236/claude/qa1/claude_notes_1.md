
What is KL divergence?

## KL divergence (Kullback–Leibler divergence)

### Definition

For two probability distributions $p$ and $q$ over the same space, the KL divergence from $p$ to $q$ is:

$$D_{\mathrm{KL}}(p \,\Vert\, q) = \mathbb{E}_{x \sim p}\!\left[\log p(x) - \log q(x)\right] = \mathbb{E}_{x \sim p}\!\left[\log \frac{p(x)}{q(x)}\right]$$

It's a number that measures **how different $q$ is from $p$**, with $p$ treated as the "true" or "reference" distribution.

### Intuition: "extra surprise"

The cleanest reading is from information theory. Suppose data comes from $p$, but you wrongly model it as $q$ and design a code (or make predictions) based on $q$. The KL divergence is the **average number of extra nats per sample** you'd pay relative to using the optimal code for $p$:

$$D_{\mathrm{KL}}(p \,\Vert\, q) = \underbrace{\mathbb{E}_{p}[-\log q(x)]}_{\text{cross-entropy: avg cost using }q} - \underbrace{\mathbb{E}_{p}[-\log p(x)]}_{\text{entropy: optimal avg cost}}$$

If $q = p$, you pay nothing extra → KL = 0. The more $q$ misallocates probability mass relative to $p$, the higher the penalty.

### Three properties that matter most

1. **Non-negative.** $D_{\mathrm{KL}}(p \,\Vert\, q) \geq 0$, with equality iff $p = q$ almost everywhere. (This is Gibbs' inequality — proved via Jensen's inequality on $\log$.)
2. **Not a true distance.** It is *not* symmetric: $D_{\mathrm{KL}}(p \,\Vert\, q) \neq D_{\mathrm{KL}}(q \,\Vert\, p)$ in general. And it doesn't satisfy the triangle inequality. So it's a *divergence*, not a metric.
3. **Mass-coverage asymmetry.** Because the expectation is under $p$, regions where $p(x) > 0$ but $q(x) \approx 0$ blow up the integrand → $D_{\mathrm{KL}}(p \,\Vert\, q)$ punishes $q$ harshly for *missing* mass that $p$ has.

### Tiny example

Let $p = (0.5, 0.5)$ and $q = (0.9, 0.1)$ over two outcomes:

$$D_{\mathrm{KL}}(p \,\Vert\, q) = 0.5 \log\tfrac{0.5}{0.9} + 0.5 \log\tfrac{0.5}{0.1} \approx 0.5(-0.59) + 0.5(1.61) \approx 0.51 \text{ nats.}$$

$$D_{\mathrm{KL}}(q \,\Vert\, p) = 0.9 \log\tfrac{0.9}{0.5} + 0.1 \log\tfrac{0.1}{0.5} \approx 0.53 + (-0.16) \approx 0.37 \text{ nats.}$$

Same two distributions, different KL values → confirms asymmetry.

### Why it shows up everywhere in ML

| Where | Role |
|-------|------|
| **Cross-entropy loss** | Minimizing cross-entropy = minimizing $D_{\mathrm{KL}}(\hat p_{\text{data}} \,\Vert\, p_\theta)$ up to a constant (this is exactly what your Q1 proof established). |
| **MLE** | Equivalent to minimizing KL from the empirical to the model distribution. |
| **VAEs** | The ELBO contains a $D_{\mathrm{KL}}(q_\phi(z \mid x) \,\Vert\, p(z))$ term keeping the posterior close to the prior. |
| **Diffusion models** | Each denoising step's loss is a KL between Gaussians. |
| **RL (PPO, TRPO)** | KL constraints between old and new policy keep updates stable. |
| **Knowledge distillation** | Student matches teacher via $D_{\mathrm{KL}}(\text{teacher} \,\Vert\, \text{student})$. |

### Direction of $D_{\mathrm{KL}}(p \,\Vert\, q)$ vs $D_{\mathrm{KL}}(q \,\Vert\, p)$ — practical impact

Because KL is asymmetric, **which direction you minimize changes the result**:

- $\min_q D_{\mathrm{KL}}(p \,\Vert\, q)$: $q$ has to **cover** every mode of $p$. If $p$ is multi-modal, $q$ ends up spread broadly → "mean-seeking" / "inclusive" fit.
- $\min_q D_{\mathrm{KL}}(q \,\Vert\, p)$: $q$ is penalized for placing mass where $p$ has none → $q$ collapses onto a *single* mode → "mode-seeking" / "exclusive" fit.

In Q1 the direction is $D_{\mathrm{KL}}(\hat p(y \mid x) \,\Vert\, p_\theta(y \mid x))$ — the *mean-seeking* direction — which is why fitting it via MLE forces $p_\theta$ to cover the support of the empirical distribution rather than collapse to its mode.

-------------------------------------------------------------------

Can you explain what "KL divergence" is?

## KL divergence (Kullback–Leibler divergence)

A way of measuring **how different two probability distributions are**, treating one of them as the "reference."

### Definition

For two distributions $p$ and $q$ over the same space:

$$
D_{\mathrm{KL}}(p \,\Vert\, q) \;=\; \mathbb{E}_{x \sim p}\!\left[\log p(x) - \log q(x)\right] \;=\; \mathbb{E}_{x \sim p}\!\left[\log \frac{p(x)}{q(x)}\right].
$$

For discrete $p, q$: a sum $\sum_x p(x) \log \frac{p(x)}{q(x)}$.
For continuous $p, q$: an integral $\int p(x) \log \frac{p(x)}{q(x)}\, dx$.

The expectation is taken under $p$ (the "true" or reference distribution). That's the **asymmetry** baked into the definition: $D_{\mathrm{KL}}(p \,\Vert\, q) \neq D_{\mathrm{KL}}(q \,\Vert\, p)$ in general.

### The "extra bits / nats" reading

The cleanest intuition comes from information theory. Suppose data is actually drawn from $p$, but you (incorrectly) model it as $q$. Build an optimal compression code for $q$. KL divergence is the **average number of extra nats per sample** you'll pay relative to the optimal code for $p$:

$$
D_{\mathrm{KL}}(p \,\Vert\, q) \;=\; \underbrace{\mathbb{E}_p[-\log q(x)]}_{\text{cross-entropy: avg cost using }q}
                                 \;-\; \underbrace{\mathbb{E}_p[-\log p(x)]}_{\text{entropy: optimal avg cost}}
$$

If $q = p$, you pay nothing extra → KL = 0. The more $q$ misallocates probability mass relative to $p$, the higher the penalty.

(Use $\log_2$ if you want bits; $\ln$ for nats. The choice just rescales by $\log 2$.)

### Three properties you must know

**1. Non-negative.** $D_{\mathrm{KL}}(p \,\Vert\, q) \geq 0$, with equality if and only if $p = q$ almost everywhere. This is **Gibbs' inequality** — proved via Jensen's inequality on the concave $\log$. (PS1 Q5b uses exactly this technique to show $\log A$ is downward-biased.)

**2. Not a metric.** KL is *not* a distance:
- Asymmetric: $D_{\mathrm{KL}}(p \,\Vert\, q) \neq D_{\mathrm{KL}}(q \,\Vert\, p)$.
- Doesn't satisfy the triangle inequality.
- It's called a *divergence*, not a metric.

**3. Mass-coverage asymmetry.** Because the expectation is under $p$, anywhere $p(x) > 0$ but $q(x) \approx 0$ makes $\log \frac{p}{q}$ blow up. So $D_{\mathrm{KL}}(p \,\Vert\, q)$ **harshly penalizes $q$ for missing mass that $p$ has** (but is indifferent to $q$ having extra mass where $p$ doesn't).

### Tiny worked example

$p = (0.5, 0.5)$, $q = (0.9, 0.1)$ over two outcomes:

$$D_{\mathrm{KL}}(p \,\Vert\, q) = 0.5 \log\tfrac{0.5}{0.9} + 0.5 \log\tfrac{0.5}{0.1} \approx 0.51 \text{ nats}.$$

$$D_{\mathrm{KL}}(q \,\Vert\, p) = 0.9 \log\tfrac{0.9}{0.5} + 0.1 \log\tfrac{0.1}{0.5} \approx 0.37 \text{ nats}.$$

Same two distributions, different KL values. Confirms asymmetry.

### Why directionality matters in practice

Choosing which KL to minimize **changes the answer**, sometimes drastically. With $q$ a tractable approximator (e.g. Gaussian) fit to a target $p$:

- **$\min_q D_{\mathrm{KL}}(p \,\Vert\, q)$** ("inclusive" / "mean-seeking" / "forward KL"):
  $q$ must put mass *wherever $p$ has mass*, including all modes — even if it has to spread out broadly. If $p$ is bimodal, $q$ ends up centered on neither peak, smearing across both. This is what MLE does.

- **$\min_q D_{\mathrm{KL}}(q \,\Vert\, p)$** ("exclusive" / "mode-seeking" / "reverse KL"):
  $q$ is penalized for putting mass where $p$ doesn't, so it collapses onto a *single* mode and ignores the others. This is the direction used in variational inference / VAEs / typical RLHF objectives.

The "right" direction depends on what you want — coverage of all data modes vs. confident concentration on one. Many of the well-known training pathologies (VAE blurry samples, RL policy collapse, GAN mode collapse) trace back to which KL you're implicitly minimizing.

### Where it shows up in ML (recurring greatest hits)

| Setting | Role of KL |
|---------|-----------|
| **Cross-entropy / MLE training** | Minimizing cross-entropy = minimizing $D_{\mathrm{KL}}(\hat p_{\text{data}} \,\Vert\, p_\theta)$ up to a $\theta$-independent constant. **This is the PS1 Q1 result.** |
| **VAEs / ELBO** | $\log p(x) \geq \mathbb{E}_q[\log p(x, z)] - \mathbb{E}_q[\log q(z\mid x)] = \mathbb{E}_q[\log p(x \mid z)] - D_{\mathrm{KL}}(q(z\mid x) \,\Vert\, p(z))$. The KL term regularizes the encoder toward the prior. |
| **Diffusion models** | Each denoising step's training objective is a KL between two Gaussians (the forward step's posterior vs. the model's predicted reverse step). |
| **Policy gradients / PPO / TRPO** | A KL constraint between old and new policy keeps updates "trust-region"-small, stabilizing RL. |
| **Knowledge distillation** | Student matches teacher via $D_{\mathrm{KL}}(\text{teacher} \,\Vert\, \text{student})$ — the student is fit to the teacher's full output distribution, not just the hard label. |
| **RLHF / DPO** | The "reward model + KL-to-reference-policy" objective uses $D_{\mathrm{KL}}$ as a regularizer to stop the policy from drifting too far from the base LM. |
| **Information bottleneck / mutual information bounds** | Mutual information $I(X; Y) = D_{\mathrm{KL}}(p(x, y) \,\Vert\, p(x) p(y))$ — KL between the joint and the product of marginals. |
| **Bayesian inference** | Posterior $\propto$ prior × likelihood corresponds to $D_{\mathrm{KL}}(q \,\Vert\, \text{posterior}) = 0$ being the gold standard for any approximator $q$. |

### Connection back to PS1

The questions you've already done in PS1 are all KL-divergence-flavored:

- **Q1**: proved that MLE on $p_\theta(y \mid x)$ ⟺ minimizing $\mathbb{E}_{\hat p(x)}[D_{\mathrm{KL}}(\hat p(y \mid x) \,\Vert\, p_\theta(y \mid x))]$. The "drop the constant" step was that the entropy of $\hat p$ doesn't depend on $\theta$.

- **Q5b**: $\log A$ is a downward-biased estimator of $\log p(x)$ because $\log$ is concave and Jensen's inequality applies. **The same Jensen step** is what proves $D_{\mathrm{KL}} \geq 0$.

- **Q4** / **Q6g**: showed that *which factorization* you pick of a joint matters. The KL framework gives you a precise way to say *how much* one factorization approximates another by computing the KL between them.

### One-line takeaway

> KL divergence measures how many extra nats per sample you waste by modeling data from $p$ as if it came from $q$. It's non-negative, asymmetric, and shows up everywhere in ML — wherever you're trying to make one distribution close to another, somebody is minimizing a KL divergence in disguise.