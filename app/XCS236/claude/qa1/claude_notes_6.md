What is a nats?

## Nats

A **unit of information** (or equivalently, of entropy / KL / surprise / log-likelihood) — the natural-log counterpart to the more familiar "bit."

### The definition in one line

A nat is **the amount of information in a logarithm taken with base $e$**, just as a bit is the amount of information in a logarithm taken with base $2$.

The unit lives in any formula of the form

$$
\sum_i p_i \log(\cdots) \qquad \text{or} \qquad -\log p
$$

and what it measures depends on which $\log$ you use:

| If you use $\log_2$ | result is in **bits** |
| If you use $\log_e = \ln$ | result is in **nats** |
| If you use $\log_{10}$ | result is in **dits** / "hartleys" / "bans" (rare) |

Conversion: $1 \text{ nat} = 1 / \ln 2 \approx 1.443 \text{ bits}$, and $1 \text{ bit} = \ln 2 \approx 0.693 \text{ nats}$.

### Why both bits and nats exist

The two are interchangeable up to a constant rescaling. They differ in convention by community:

- **Information theory / coding / compression** uses bits — natural when the underlying objects are binary codes (Shannon's original 1948 paper, Huffman codes, file-compression metrics).
- **Machine learning / statistics / physics** uses nats — natural when you're differentiating $\log$ (because $\frac{d}{dx}\ln x = 1/x$ has no $\log 2$ floating around), and because the *softmax*, the *Gaussian density*, and the *cross-entropy loss* all use $\ln$ under the hood.

PyTorch, JAX, NumPy: every `torch.log`, `np.log`, etc. defaults to **natural log** → every loss/entropy/KL value your training script prints is in **nats**, not bits.

### Operational meaning of one nat

A nat is the surprise you experience when you observe an event whose probability was exactly $1/e \approx 0.368$:

$$-\ln(1/e) = 1 \text{ nat}.$$

Or equivalently: a uniform distribution over $e \approx 2.718$ outcomes has entropy 1 nat. (Since "$e$ outcomes" isn't an integer, this only matters as a mental scale, not a literal counting story.)

### Where you've already encountered nats in PS1

Without saying so, every numerical value with a `log` in it has been in nats — because `torch.log` and `np.log` are natural log:

| PS1 location | Quantity | Unit |
|--------------|----------|------|
| **Q1, Q5a, Q5b** | $\log p$, $D_{\mathrm{KL}}$, entropies | nats |
| **Q6d** `log_likelihood` ≈ −47 | total log-likelihood of a 12-token NeurIPS prefix | nats |
| **Q6e** threshold −300 | total log-likelihood threshold for random vs. non-random | nats |
| **Q5b** "downward bias is $O(1/k)$" | size of the bias on $\log A$ | nats |
| **Q6d** "≈ −4 nats/token, perplexity ≈ $e^4 \approx 55$" | per-token surprise | nats per token |

When I wrote things like "$D_{\mathrm{KL}}(p \,\Vert\, q) \approx 0.51 \text{ nats}$" earlier, I was using the unit explicitly. The same KL in bits would be $0.51 / \ln 2 \approx 0.74 \text{ bits}$.

### Why "per token" matters

Total log-likelihood depends on length, so it's often more informative to report **per-token** values — surprise *averaged* across positions in the sequence. From PS1 Q6d:

$$\frac{-47 \text{ nats}}{11 \text{ tokens}} \approx -4.3 \text{ nats/token}.$$

The corresponding **perplexity** is $e^{4.3} \approx 73$ — roughly, the model is as uncertain as if it were guessing uniformly among 73 equally-likely tokens at each step.

Perplexity is the standard ML metric for sequence models precisely because it converts a nat-valued cross-entropy back into the more intuitive scale of "effective vocabulary size at this confidence level":

$$\text{perplexity}(p) = e^{\text{cross-entropy}(p)} \qquad (\text{when cross-entropy is in nats}).$$

If your cross-entropy were in bits, perplexity would be $2^{\text{CE}}$. Same number, just different base.

### Sanity-check exercise

A fair coin has entropy:
- In **bits**: $-2 \cdot 0.5 \cdot \log_2 0.5 = 1$ bit. (Hence "one bit of information per coin flip" — the canonical example.)
- In **nats**: $-2 \cdot 0.5 \cdot \ln 0.5 = \ln 2 \approx 0.693$ nats.

A fair die has entropy:
- $\log_2 6 \approx 2.585$ bits.
- $\ln 6 \approx 1.792$ nats.

The information *content* is the same; the units just rescale.

### One-line takeaway

> A nat is the information unit you get when you measure log-quantities (entropy, KL, log-likelihood, surprise) with the natural log instead of $\log_2$. Every `.log()` in PyTorch/NumPy is in nats by default, so unless you explicitly converted, every log-likelihood and loss number you've ever printed from a Python ML script is in nats.