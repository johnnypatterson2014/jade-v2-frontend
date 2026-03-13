

# NumPy `einsum` Cheat Sheet

```python
import numpy as np
```

---

# Core Rule

Einstein summation follows two rules:

1. **Repeated indices are summed over**
2. **Indices appearing in the output are preserved**

Example:

```python
np.einsum('ik,kj->ij', A, B)
```

Formula:

[
C_{ij} = \sum_k A_{ik} B_{kj}
]

---

# 1. Vector Dot Product

```python
# x: (d,)
# y: (d,)
out = np.einsum('d,d->', x, y)
```

Equivalent:

```python
out = x @ y
```

Formula:

[
x \cdot y = \sum_d x_d y_d
]

---

# 2. Matrix–Vector Multiply

```python
# A: (m, n)
# x: (n,)
out = np.einsum('mn,n->m', A, x)
```

Equivalent:

```python
out = A @ x
```

Formula:

[
y_m = \sum_n A_{mn} x_n
]

---

# 3. Matrix Multiplication

```python
# A: (m, n)
# B: (n, p)
out = np.einsum('mn,np->mp', A, B)
```

Equivalent:

```python
out = A @ B
```

Formula:

[
C_{mp} = \sum_n A_{mn} B_{np}
]

---

# 4. Transpose

```python
# X: (m, n)
out = np.einsum('mn->nm', X)
```

Equivalent:

```python
out = X.T
```

---

# 5. Sum Over an Axis

```python
# X: (m, n)

col_sums = np.einsum('mn->n', X)
row_sums = np.einsum('mn->m', X)
total    = np.einsum('mn->', X)
```

Equivalent:

```python
col_sums = X.sum(axis=0)
row_sums = X.sum(axis=1)
total    = X.sum()
```

---

# 6. Column-wise Squared Norms

```python
# X: (m, n)

out = np.einsum('mn,mn->n', X, X)
```

Equivalent:

```python
np.sum(X**2, axis=0)
```

Formula:

[
|X_{\cdot n}|^2 = \sum_m X_{mn}^2
]

Also equal to:

[
\text{diag}(X^T X)
]

---

# 7. Row-wise Squared Norms

```python
# X: (m, n)

out = np.einsum('mn,mn->m', X, X)
```

Equivalent:

```python
np.sum(X**2, axis=1)
```

Formula:

[
|X_{m\cdot}|^2 = \sum_n X_{mn}^2
]

Also equal to:

[
\text{diag}(X X^T)
]

---

# 8. Pairwise Row Dot Products (Gram Matrix)

```python
# X: (m, d)

out = np.einsum('md,nd->mn', X, X)
```

Equivalent:

```python
X @ X.T
```

Formula:

[
G_{mn} = \sum_d X_{md} X_{nd}
]

---

# 9. Outer Product

```python
# x: (m,)
# y: (n,)

out = np.einsum('m,n->mn', x, y)
```

Equivalent:

```python
np.outer(x, y)
```

Formula:

[
M_{mn} = x_m y_n
]

---

# 10. Batch Matrix Multiplication

```python
# A: (b, m, n)
# B: (b, n, p)

out = np.einsum('bmn,bnp->bmp', A, B)
```

Equivalent:

```python
A @ B
```

Formula:

[
C_{bmp} = \sum_n A_{bmn} B_{bnp}
]

---

# 11. Batched Linear Layer

```python
# X: (b, t, d_in)
# W: (d_in, d_out)

out = np.einsum('btd,df->btf', X, W)
```

Equivalent:

```python
out = X @ W
```

Formula:

[
Y_{btf} = \sum_d X_{btd} W_{df}
]

---

# 12. Attention Scores

```python
# Q: (b, t, d)
# K: (b, s, d)

scores = np.einsum('btd,bsd->bts', Q, K)
```

Equivalent:

```python
scores = Q @ K.transpose(0,2,1)
```

Formula:

[
S_{bts} = \sum_d Q_{btd} K_{bsd}
]

---

# 13. Attention Output

```python
# A: (b, t, s)
# V: (b, s, d)

out = np.einsum('bts,bsd->btd', A, V)
```

Formula:

[
O_{btd} = \sum_s A_{bts} V_{bsd}
]

---

# 14. Multi-Head Attention Scores

```python
# Q: (b, h, t, k)
# K: (b, h, s, k)

scores = np.einsum('bhtk,bhsk->bhts', Q, K)
```

Formula:

[
S_{bhts} = \sum_k Q_{bhtk} K_{bhsk}
]

---

# 15. Multi-Head Attention Output

```python
# A: (b, h, t, s)
# V: (b, h, s, k)

out = np.einsum('bhts,bhsk->bhtk', A, V)
```

Formula:

[
O_{bhtk} = \sum_s A_{bhts} V_{bhsk}
]

---

# Quick Pattern Reference

| Operation            | einsum pattern      |
| -------------------- | ------------------- |
| dot product          | `'d,d->'`           |
| matrix multiply      | `'mn,np->mp'`       |
| outer product        | `'m,n->mn'`         |
| Gram matrix          | `'md,nd->mn'`       |
| column norms         | `'mn,mn->n'`        |
| row norms            | `'mn,mn->m'`        |
| batched linear layer | `'btd,df->btf'`     |
| attention scores     | `'btd,bsd->bts'`    |
| attention output     | `'bts,bsd->btd'`    |
| multi-head scores    | `'bhtk,bhsk->bhts'` |
| multi-head output    | `'bhts,bhsk->bhtk'` |

---

# Debugging Trick

When reading an einsum expression:

1. Write the shapes under each index.
2. Identify repeated indices not in the output.
3. Those indices are **summed over**.

Example:

```python
'btd,bsd->bts'
```

* `d` appears twice → summed
* remaining indices → output shape `(b, t, s)`
