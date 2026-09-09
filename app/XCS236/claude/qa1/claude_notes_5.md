Can you explain what an "autoregressive generative model" is?

## Autoregressive generative model

A **generative model** of multi-variable data that factorizes the joint distribution as a **product of one-step conditionals**, predicting each variable from the variables that came "before" it in some fixed ordering.

### The defining equation

For data $(x_1, x_2, \ldots, x_n)$, an autoregressive model parameterizes:

$$
p_\theta(x_1, x_2, \ldots, x_n) \;=\; \prod_{i=1}^{n} p_\theta(x_i \mid x_{<i})
$$

where $x_{<i} = (x_1, \ldots, x_{i-1})$ is the **prefix** (or "context") and $p_\theta(x_i \mid x_{<i})$ is a learned conditional distribution.

That's it. It's just the **chain rule of probability** with each conditional replaced by a parametric model (typically a neural network).

### Three things to internalize

#### 1. It is the chain rule, made tractable

The chain rule is exact for *any* joint distribution. What makes a model "autoregressive" is that you:

- Fix an ordering of the variables (left-to-right for text, raster scan for images, time order for audio).
- Use a **neural network** to parameterize each conditional.
- Often **share parameters** across positions (e.g., the same transformer predicts $p(x_i \mid x_{<i})$ for every $i$, just with a different input).

The model is exact in expressivity (any joint can in principle be written this way — see PS1 Q3a's full-chain-rule counting), but compact in implementation because the *same* network is reused at every position.

#### 2. You can both score and generate, with the same model

This is the core appeal:

- **Score (log-likelihood)**: feed the full sequence in, sum $\log p_\theta(x_i \mid x_{<i})$ across positions. You did this in **PS1 Q6d** — `log_likelihood(model, text)`.
- **Generate (sample)**: draw $x_i \sim p_\theta(\cdot \mid x_{<i})$ one variable at a time, feeding each sample back as context. You did this in **PS1 Q6c** — `sample(model, ...)`.

Both the training objective (MLE) and the generation procedure flow directly from the chain rule factorization. No extra machinery (no latent variables, no adversarial games, no variational bounds).

#### 3. Generation is sequential, scoring is parallel

This is the practical asymmetry that drives modern transformer design:

- **At training/scoring time**: you have the whole sequence, so you can evaluate all conditionals $p_\theta(x_i \mid x_{<i})$ for $i = 1, \ldots, n$ **in parallel** via one forward pass with a causal (lower-triangular) mask. This is what makes transformers efficient to train.
- **At generation time**: each $x_i$ depends on having sampled $x_{<i}$, so you must run $n$ forward passes **sequentially**. This is why LLMs are slow at inference, and why tricks like KV-caching (which you saw in PS1 Q6c — passing `past` to avoid re-encoding the prefix) exist.

### Standard examples

| Model | What's $x_i$? | Network architecture |
|-------|---------------|----------------------|
| **GPT family** (PS1 Q6) | a token in a sentence | causal transformer |
| **PixelRNN / PixelCNN** | a pixel in an image (raster order) | RNN / masked convolutions |
| **WaveNet** | an audio sample | dilated causal convolutions |
| **MADE, NADE** | a feature in a tabular row | MLP with masked weights |
| **Char-RNN / LSTM language models** | a character | LSTM |

The defining factorization is the same; only the architecture and the variable type change.

### Contrast with other generative model families

| Family | Joint represented as… | Trade-off |
|--------|------------------------|-----------|
| **Autoregressive** | $\prod_i p(x_i \mid x_{<i})$ | Exact likelihood, parallel training, **sequential generation** |
| **Latent-variable (VAE, diffusion)** | $\int p(z) p(x \mid z)\, dz$ | Faster parallel sampling, but **intractable likelihood** — need ELBO (PS1 Q5!) |
| **Normalizing flow** | $p_Z(f^{-1}(x)) \lvert\det J_f^{-1}\rvert$ | Exact likelihood, parallel sampling, but constrained architecture |
| **GAN** | implicit (no density) | Sharp samples, but no likelihood at all |
| **Energy-based** | $\exp(-E(x))/Z$ | Flexible, but $Z$ intractable; sampling needs MCMC |

The thing autoregressive models give you that no other family gives all at once is: **tractable exact log-likelihood + simple training + universal expressivity** (every joint admits a chain-rule decomposition). The price is sequential generation.

### Key facts that connect to PS1

#### From PS1 Q4 — ordering matters

The chain rule allows *any* variable ordering. But once you fix a model class for the conditionals (say, Gaussians with neural-net mean/variance), the *set of joint distributions* you can represent depends on the order. PS1 Q4 showed that forward vs. reverse Gaussian autoregressive models cover **different** hypothesis spaces — a forward model can produce a mixture-of-Gaussians marginal (e.g. $p_f(x_2)$ bimodal) that the reverse model can't match, because $p_r(x_n)$ is forced to be a single Gaussian.

This is the architectural reason GPT chose left-to-right tokens (matches reading order, matches downstream applications) but it's not the *uniquely correct* choice.

#### From PS1 Q6c, Q6d — sampling and scoring are dual

The chain rule gives both procedures:

- **Sampling loop**: at each step, take the model's output logits for position $i+1$, softmax, sample.
- **Scoring loop**: at each step, take the model's output logits for position $i$, evaluate $\log p_\theta(x_i \mid x_{<i})$ at the actual observed $x_i$, sum.

You implemented both. Same network forward pass, same chain rule; just **sample** vs. **read off probability**.

#### From PS1 Q6f, Q6g — temperature ≠ joint temperature

Temperature scaling each per-token conditional separately is **not** the same as temperature-scaling the joint distribution. The product of locally-renormalized conditionals introduces a context-dependent normalizer that the joint scaling lacks. This is a subtle but real consequence of the chain rule's structure — once you fix the chain rule factorization, any transformation you apply per-conditional has to commute properly with the chain rule for it to correspond to a transformation of the joint.

### Modern significance

Autoregressive transformers are **the** dominant paradigm for generative modeling of discrete sequences in 2024–2025:

- Every frontier large language model (GPT-4, Claude, Gemini, Llama) is an autoregressive transformer.
- Text-to-image and text-to-audio systems are often hybrids that put an autoregressive layer somewhere in the pipeline (e.g. tokenized image patches predicted autoregressively).
- The recent rise of **autoregressive image and video models** (Parti, Chameleon) reflects the practical bet that the autoregressive recipe scales further than anyone expected a decade ago.

### One-line takeaway

> An autoregressive generative model factorizes the joint via the chain rule, parameterizes each conditional with a neural net (typically shared across positions), and inherits exact tractable likelihood and simple sampling — at the cost of strictly sequential generation. It's the foundation under every LLM you've used.