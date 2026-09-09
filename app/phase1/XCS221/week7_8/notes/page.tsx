'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import Card from '@/components/client/Card';
import CardDrawer from '@/components/client/CardDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import TileRowCell0 from '@/components/client/TileRowCell0';
import { MathJaxContext } from "better-react-mathjax";
import React, { useEffect } from 'react';


export default function Home() {

        useEffect(() => {
                // Check if MathJax is loaded and available in the window object
                if (typeof window?.MathJax !== "undefined") {
                        window.MathJax.typeset(); // Triggers typesetting
                }
        }, []); // Run once on component mount

        function createMarkup(content: any) {
                return { __html: content };
        }

        const html7 = `
<pre>
Last week:
- <strong>search problem</strong>
   - start state, successors (action, cost, next state), is_end
   - An action from a state <strong>deterministically</strong> leads to a new state

This week:
 - <strong>Markov Decision Processes (MDPs)</strong>
    - MDPs generalize search problems
    - <strong>Key difference</strong>: actions may have stochastic outcomes (random or a probability)


<strong>Comparison between search problems and MDPs:</strong>
 - Both have a start_state and is_end function
 - Both have a successors function that return a list of possible actions and their consequences
 - Superficial difference: search problem uses costs, MDPs use rewards
 - Deep difference: in search problems, each action has one next state; in MDPs, each action has a distribution over next states

<strong>Policy</strong>:
 - a function that maps state to action

<strong>rollout</strong>:
 - a simulation of the policy in an MDP
 - Each rollout generates a <strong>utility:</strong> which is a discounted sum of rewards.

<strong>Note:</strong>
 - you need to run a rollout many times because some paths depend on a probability
 - the <strong>expected utility (value) of a policy</strong> is defined as the <strong>average utility</strong>, V_π(s)

<strong>V_π(s)</strong>
 - V_π(s) = expected utility of starting in state s and following policy π

<strong>monte_carlo_policy_evaluation</strong>
 - run several rollouts, save the utility (result value from a rollout)
 - take the average of the utilities
 - return the average_utility (ie. the expected utility (value) of a policy)

<strong>policy evaluation</strong>
 - So far: can perform many rollouts and average to estimate the value of a policy V_π(s)
 - Is there a way to compute the value V_π(s) more efficiently? Yes!
 - Key: compute the recurrences (recall dynamic programming for search problems).

First, we introduce <strong>Q-values</strong>
 - Q(s, a, V) = measures value of taking action a in state s, and obtaining some value V
 - Here, V(s) is the value of some policy from state s
 - iterate over the states, computing new Q-values

<strong>Convergence</strong>
 - when the change of Q-values between iterations is less than some tolerance (epsilon)

The resulting algorithm is called <strong>policy evaluation</strong>. 

<strong>Summary:</strong>
 - Policy evaluation: computes value of a given policy
 - Key quantity: Q-value Q(s, a, V) = value of taking action a in state s, and obtaining some value V
 - Bootstrapping: use values to compute new values using recurrence

<strong>Value Iteration</strong>
 - Policy evaluation: computes value of a given policy
 - Value iteration: computes the optimal policy and it's value
 - <strong>Value iteration recurrence:</strong> V*(s) = max_a Σ_s' T(s, a, s') (R(s, a, s') + γ V*(s'))

<strong>Summary:</strong>
 - Value iteration: computes value of the optimal policy
 - Takes max over actions compared to policy evaluation, which takes policy action
 - Bootstrapping: use values to compute new values using recurrence (same)


<strong>Summary</strong>
 - MDPs: generalize search problems (action result in distribution over next states)
 - Policy (solution): maps state to action
 - MDP + policy → rollout → utility
 - Value of policy = expected utility of policy
 - Policy evaluation: computes value of a given policy
 - Value iteration: computes value of the optimal policy


<strong>Review MDP</strong>

# MDP
 - mdp = FlakyTramMDP(num_locs=10, failure_prob=0.4)  
 - state = mdp.start_state()  
 - successors = mdp.successors(state)  
 - is_end = mdp.is_end(successors[0].state) 

# Policy
 - Policy: maps state to action
 - policy = partial(tram_if_possible_policy, mdp)
 - action = policy(state)  

# Value of policy
 - rollout = generate_rollout(mdp, policy)  
 - Value of policy: expected utility of policy
 - Policy evaluation: computes value of a given policy
 - result = policy_evaluation(mdp, policy)  

# Optimizing the policy
 - Value iteration: computes value of the optimal policy
 - result = value_iteration(mdp)


</pre>
        `

        const html8 = `
        
<pre>

<strong>reinforcement learning</strong>

1. introduce_rl()
2. introduce_model_based()
3. introduce_model_free_monte_carlo()
4. introduce_sarsa()
5. introduce_q_learning()


<strong>1. introduce_rl()</strong>

Agent -> action -> environment -> reward, observation -> Agent

Intuitively:
 - A good agent should try various actions to find ones that lead to good rewards.
 - Then it should learn to keep doing those actions (those actions are reinforced).    

In MDPs, we don't know what outcomes will be, but at least know their probabilities
In RL, we don't even know what the probabilities will be!

Assume:
 - assume the environment is backed by an MDP and the observation is the next state
 - The Agent is an RL algorithm (trying to learn the hidden MDP)

Difference between policy and agent:
 - Policy: maps state to action, doesn't change over time (static)
 - Agent (RL algorithm): maps state to action, can change over time (dynamic)
    
Intuition: RL algorithm uses the feedback to improve its internal policy. 
But how should we perform this update?


<strong>2. introduce_model_based()</strong>

What makes RL hard:
 - We don't know the MDP.
 - Otherwise, we can use value iteration to compute the optimal policy.

Idea: estimate (learn) the MDP from feedback!

Model-based value iteration:
 - Exploration: estimate the MDP using an exploration policy (random).
 - Compute the optimal policy of the estimated MDP.
 - Exploitation: follow this policy.

Stage 1: explore using the exploration policy to estimate the MDP.
 - value = simulate(mdp, rl, num_trials=10)  
 - leaderboard = update_leaderboard("model_based_value_iteration.explore", value)  
 - compare_mdps(mdp, rl.mdp)
 - The more the agent explores, estimated MDP → true MDP
 - ...assuming the exploration policy tries all valid actions.

Stage 2: compute the optimal policy of the estimated MDP and follow that.
 - rl.run_value_iteration()  
 - compare_policies(value_iteration(mdp), rl.exploitation_policy)
 - The more the agent explores, estimated policy → optimal policy

Stage 3: run using this estimated policy.
 - value = simulate(mdp, rl, num_trials=10)  

Notes:
 - The utility of the exploration phase is suboptimal, but we're learning!
 - In practice, we don't need to restrict to two phases
 - Always continue refining the estimated MDP
 - Gradually move the policy from full exploration to full exploitation
   
Summary:
 - Model-based RL: estimate the MDP from feedback (explore)
 - Once have estimated MDP, use value iteration to compute the optimal policy (of estimated MDP)
 - Once have estimated policy, exploit!
    
Can we estimate the optimal policy more directly?


<strong>3. introduce_model_free_monte_carlo()</strong>

Previously: model-based value iteration:
 1. Estimate the MDP first.
 2. Use value iteration to compute the optimal policy of the estimated MDP.

  Optimal policy: π*(s) = argmax_a Q*(s, a)
  where Q*(s, a) = Σ_s' T(s, a, s') (R(s, a, s') + γ V*(s'))

  Can we estimate Q*(s, a) directly? Yes! Just rollout the policy and average the utilities!

There is a nice recurrence relation between the utilities:
    utilities[0] == rollout[0].reward + (discount * utilities[1])
    utilities[1] == rollout[1].reward + (discount * utilities[2])

Which policy should we use to rollout?
 - For model-based value iteration, we had a purely random exploration policy (for phase 1).
 - Let's do something a bit more sophisticated: epsilon-greedy.
 - With probability epsilon, choose a random action according to the exploration policy.
 - With probability 1 - epsilon, choose the best action according to the current estimated Q-values.

Now let's define Model-free Monte Carlo:
    mdp = FlakyTramMDP(num_locs=10, failure_prob=0.4)  
    np.random.seed(1)
    exploration_policy = partial(walk_tram_policy, mdp.num_locs)
    rl = ModelFreeMonteCarlo(exploration_policy=exploration_policy, epsilon=0.4, discount=1)
       
    
    class ModelFreeMonteCarlo(RLAlgorithm):
        def __init__(self, exploration_policy: Policy, epsilon: float, discount: float):
            self.exploration_policy = exploration_policy
            self.epsilon = epsilon
            self.discount = discount
    
            # Statistics that define the Q-values: Q(s, a) = sum_utilities[s][a] / counts[s][a]

            # state -> action -> sum of utility from (state, action)
            self.sum_utilities = defaultdict(lambda : defaultdict(float))  

            # state -> action -> visitation count
            self.counts = defaultdict(lambda : defaultdict(int)) 
    
            # Keep track of the current rollout
            self.start_state = None
            self.rollout: list[Step] = []
            
    
        def get_action(self, state: Any) -> Any:
            if len(self.counts[state]) == 0:
                # If no actions have been tried yet, choose a random action
                return self.exploration_policy(state)  
    
            # Do epsilon-greedy
            if np.random.random() < self.epsilon:
                # With probability epsilon, choose a random action according to the exploration policy
                return self.exploration_policy(state)  
            else:
                # Otherwise, choose the best action according to the Q-values
                return self.pi(state)
            return action
    
    
        def pi(self, state: Any) -> Any:
            """Return the policy corresponding to the current Q-values."""
            actions = list(self.counts[state].keys())  
            q_values = [self.Q(state, action) for action in actions]  
            action = actions[np.argmax(q_values).item()]  
            return action
    
    
        def Q(self, state: Any, action: Any) -> float:
            """Compute the estimated Q-values Q(state, action) using the running sums and counts."""
            sum_utility = self.sum_utilities[state][action]  
            count = self.counts[state][action]  
            value = sum_utility / count  
            return value
    
    
        def incorporate_feedback(self, state: Any, action: Any, reward: Any, next_state: Any, is_end: bool) -> None:  
            # Add this piece of feedback (state, action, reward, next_state) to the history
            if self.start_state is None:
                self.start_state = state
            self.rollout.append(Step(action=action, prob=1, reward=reward, state=next_state))  
    
            # At the end of the episode, update the statistics needed for computing Q-values
            if is_end:
                utilities = [0] * (len(self.rollout) + 1)  
                # Walk backwards and compute the utilities for each step
                for i, step in reversed(list(enumerate(self.rollout))):  
                    # Compute utility of step i
                    # state [0] action reward state [1] action reward state [2] action reward state
                    state = self.start_state if i == 0 else self.rollout[i - 1].state  
                    utilities[i] = step.reward + self.discount * utilities[i + 1]  
    
                    # Update the running sums
                    self.sum_utilities[state][step.action] += utilities[i]  
                    self.counts[state][step.action] += 1  
                    
                # Reset history
                self.start_state = None
                self.rollout = []

Summary:
- Model-free Monte Carlo: estimate Q-values of the current policy
- Directly uses rollouts, bypassing estimating the MDP
- Use epsilon-greedy policy to balance exploration and exploitation
   
Problem: in life, you only get one rollout.
Can we update the Q-values before the rollout is over?


<strong>4. introduce_sarsa()</strong>

Previously: model-free Monte Carlo: estimate Q-values directly from rollouts
SARSA: update Q-values as you rollout!

If we don't rollout completely, how do we get the utility (which requires going towards the end)?

Key insight: bootstrapping!
Combine the immediate reward with a model estimate of the future

Monte Carlo: u = r_0 + γr_1 + γ^2r_2 + ... + γ^n*r_n
Bootstrapping (SARSA): u = r_0 + γ*Q_π(s_1, a_1)

Perform a gradient update to move Q_π(s, a) towards u


class SARSA(RLAlgorithm):
    def __init__(self, exploration_policy: Policy, epsilon: float, discount: float, learning_rate: float):
        self.exploration_policy = exploration_policy
        self.epsilon = epsilon
        self.discount = discount
        self.learning_rate = learning_rate
        self.Q = defaultdict(lambda : defaultdict(float))  # state -> action -> Q-value

    def get_action(self, state: Any) -> Any:
        if len(self.Q[state]) == 0:
            return self.exploration_policy(state) 
        
        if np.random.random() < self.epsilon:
            return self.exploration_policy(state) 
        else:
            return self.pi(state) 

    def pi(self, state: Any) -> Any:
        """Return the policy corresponding to the current Q-values."""
        actions = list(self.Q[state].keys())  
        if len(actions) == 0:
            return None
        q_values = [self.Q[state][action] for action in actions]  
        action = actions[np.argmax(q_values).item()]  
        return action

    def incorporate_feedback(self, state: Any, action: Any, reward: Any, next_state: Any, is_end: bool) -> None:  
        # state → action reward next_state → next_action ...
        # Important: use 'self.get_action' (not 'self.pi') to get on-policy
        next_action = self.get_action(next_state)  
        utility = reward + self.discount * self.Q[next_state].get(next_action, 0)  
        self.Q[state][action] += self.learning_rate * (utility - self.Q[state][action]) 


Summary:
 - SARSA: estimates Q-values of the current policy Q_π(s, a) as you rollout
 - Bootstrapping: estimate utility using model estimate of the future
 - Gradient update: move Q-values towards the estimated utility
   
But we are only computing Q-values of the current policy Q_π(s, a) (on-policy).

Can we directly estimate Q-values of the optimal policy Q*(s, a)?


<strong>5. introduce_q_learning()</strong>

 - SARSA: estimate Q-values of the current policy Q_π(s, a)
 - Q-learning: estimate Q-values of the optimal policy Q*(s, a)
   But we don't know the optimal policy...


class QLearning(SARSA):
    """Q-learning is SARSA, but with an off-policy exploration policy."""

    def incorporate_feedback(self, state: Any, action: Any, reward: Any, next_state: Any, is_end: bool) -> None:  
        # state → action reward next_state → next_action ...
        # Important: use 'self.pi' (not 'self.get_action') to get off-policy
        next_action = self.pi(next_state)  
        utility = reward + self.discount * self.Q[next_state].get(next_action, 0)  
        self.Q[state][action] += self.learning_rate * (utility - self.Q[state][action])  


Summary:
 - Q-learning: estimates Q-values of the optimal policy Q*(s, a) (off-policy)
 - Like SARSA, uses bootstrapping and gradient updates


<strong>Summary:</strong>
 - Reinforcement learning: learn the optimal policy from interacting with the environment
 - Agent (RL algorithm): get_action and incorporate_feedback
 - Model-based value iteration: estimate the MDP then compute the optimal policy
 - Model-free Monte Carlo: estimate Q-values directly from rollouts (on-policy)
 - SARSA: estimate Q-values of the current policy as you rollout (on-policy, bootstrapping)
 - Q-learning: estimate Q-values of the optimal policy (off-policy, bootstrapping)

</pre>
        `

        const html9 = `
        
        <h2 id="master-inventory">Master inventory</h2>
        <table class="markdown">
        <thead>
        <tr>
        <th>Q</th>
        <th>Name</th>
        <th>Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Q1</td>
        <td>Manual value iteration on a number-line MDP</td>
        <td>Algorithm (worked by hand)</td>
        </tr>
        <tr>
        <td>Q2</td>
        <td>Discount-factor → absorbing-state reduction</td>
        <td>MDP transformation (theory)</td>
        </tr>
        <tr>
        <td>Q3a</td>
        <td><code>valueIteration</code></td>
        <td>Algorithm</td>
        </tr>
        <tr>
        <td>Q3b</td>
        <td><code>ModelBasedMonteCarlo</code></td>
        <td>Algorithm</td>
        </tr>
        <tr>
        <td>Q4a</td>
        <td><code>TabularQLearning</code></td>
        <td>Algorithm</td>
        </tr>
        <tr>
        <td>Q4b</td>
        <td><code>fourierFeatureExtractor</code></td>
        <td>Representation</td>
        </tr>
        <tr>
        <td>Q4c</td>
        <td><code>FunctionApproxQLearning</code></td>
        <td>Algorithm</td>
        </tr>
        <tr>
        <td>Q5c</td>
        <td><code>ConstrainedQLearning</code></td>
        <td>Algorithm (FA + safety filter)</td>
        </tr>
        </tbody>
        </table>

<br />

        <p>Plus implicitly used / referenced concepts:</p>
        <ul>
                <li><strong>ε-greedy exploration</strong> — used by every RL algorithm</li>
                <li><strong>Discretization</strong> (<code>DiscreteGymMDP</code>) — converts continuous state to discrete bins</li>
                <li><strong>Continuous representation</strong> (<code>ContinuousGymMDP</code>) — pass continuous state straight through</li>
                <li><strong><code>polynomialFeatureExtractor</code></strong> (provided in <code>util.py</code>) — sibling of Fourier</li>
                <li><strong>NumberLineMDP</strong> (used in Q1, Q3a, Q3b)</li>
                <li><strong>MountainCar</strong> (continuous and discretized variants)</li>
                <li><strong>Bellman equation</strong> — underlies all the algorithms</li>
                <li><strong>Reward shaping &amp; action-set restriction</strong> (Q5 conceptual)</li>
        </ul>

        <h2 id="the-five-axes-that-matter">The five axes that matter</h2>
        <p>Here are the dimensions along which to compare:</p>

        <table class="markdown">
        <thead>
        <tr>
        <th>Axis</th>
        <th>Possible values</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1. <strong>Knowledge of <span
        class="math inline"><em>T</em>,<em>R</em></span></strong></td>
        <td>Known → Estimated from samples → Never explicitly modeled</td>
        </tr>
        <tr>
        <td>2. <strong>Update style</strong></td>
        <td>Full DP sweep → MC return → One-step TD bootstrap</td>
        </tr>
        <tr>
        <td>3. <strong>What's learned</strong></td>
        <td>Model only → V → Q → Policy</td>
        </tr>
        <tr>
        <td>4. <strong>Representation</strong></td>
        <td>Tabular → Linear FA (Fourier / polynomial / etc.) → Non-linear
        FA</td>
        </tr>
        <tr>
        <td>5. <strong>Exploration</strong></td>
        <td>Greedy → <span class="math inline"><em>ε</em></span>-greedy →
        Constrained <span class="math inline"><em>ε</em></span>-greedy</td>
        </tr>
        </tbody>
        </table>

<br />

        <p>Let me cross-tabulate everything against these axes.</p>
        <h2 id="the-big-comparison-table">The big comparison table</h2>

        <table class="markdown">
        <thead>
        <tr>
        <th></th>
        <th>Q1 manual VI</th>
        <th>Q3a <code>valueIteration</code></th>
        <th>Q3b MBMC</th>
        <th>Q4a Tabular Q</th>
        <th>Q4c FA Q</th>
        <th>Q5c Constrained Q</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><strong>Knows T, R?</strong></td>
        <td>Known (assumed)</td>
        <td>Known (input)</td>
        <td>Estimated empirically</td>
        <td>Doesn't need them</td>
        <td>Doesn't need them</td>
        <td>Needs T-formula for safety filter; not for learning</td>
        </tr>
        <tr>
        <td><strong>Model-based / model-free?</strong></td>
        <td>Model-based (DP)</td>
        <td>Model-based (DP)</td>
        <td>Model-based (estimates model)</td>
        <td>Model-free</td>
        <td>Model-free</td>
        <td>Model-free for learning; uses model only for action filtering</td>
        </tr>
        <tr>
        <td><strong>Update style</strong></td>
        <td>One-step Bellman max</td>
        <td>One-step Bellman max (in a loop)</td>
        <td>DP on estimated MDP every <span
        class="math inline"><em>K</em></span> steps</td>
        <td>TD(0): <span
        class="math inline"><em>r</em> + <em>γ</em>max<em>Q</em><sup>'</sup></span></td>
        <td>Same TD(0)</td>
        <td>Same TD(0)</td>
        </tr>
        <tr>
        <td><strong>MC / TD / DP?</strong></td>
        <td>DP</td>
        <td>DP</td>
        <td>MC for model + DP on it</td>
        <td>TD</td>
        <td>TD</td>
        <td>TD</td>
        </tr>
        <tr>
        <td><strong>Bootstrapping?</strong></td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes (DP)</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td><strong>What it learns</strong></td>
        <td><span class="math inline"><em>V</em></span>, then policy</td>
        <td><span class="math inline"><em>V</em></span> → policy</td>
        <td><span class="math inline"><em>T̂</em>,<em>R̂</em></span> → <span
        class="math inline"><em>V</em></span> → policy</td>
        <td><span class="math inline"><em>Q</em></span> directly</td>
        <td><span class="math inline"><em>Q</em></span> via weights <span
        class="math inline"><em>W</em></span></td>
        <td><span class="math inline"><em>Q</em></span> via weights <span
        class="math inline"><em>W</em></span></td>
        </tr>
        <tr>
        <td><strong>Representation of Q</strong></td>
        <td>(none, just scalar V)</td>
        <td>Dictionary</td>
        <td>Dictionary (after VI)</td>
        <td>Dictionary</td>
        <td><span
        class="math inline"><em>ϕ</em>(<em>s</em>) - <em>W</em>[:,<em>a</em>]</span></td>
        <td><span
        class="math inline"><em>ϕ</em>(<em>s</em>) - <em>W</em>[:,<em>a</em>]</span></td>
        </tr>
        <tr>
        <td><strong>State space</strong></td>
        <td>Tiny, finite (5 states)</td>
        <td>Discrete, finite</td>
        <td>Discrete, finite</td>
        <td>Discrete (hashable)</td>
        <td>Continuous (np.ndarray)</td>
        <td>Continuous</td>
        </tr>
        <tr>
        <td><strong>Exploration</strong></td>
        <td>None (planning only)</td>
        <td>None</td>
        <td><span class="math inline"><em>ε</em></span>-greedy</td>
        <td><span class="math inline"><em>ε</em></span>-greedy</td>
        <td><span class="math inline"><em>ε</em></span>-greedy</td>
        <td><span class="math inline"><em>ε</em></span>-greedy over
        <strong>constrained</strong> action set</td>
        </tr>
        <tr>
        <td><strong>Convergence guarantees</strong></td>
        <td>Trivial</td>
        <td>Strong (contraction)</td>
        <td>Strong</td>
        <td>Strong (under standard conditions)</td>
        <td>None — semi-gradient + bootstrapping + off-policy = deadly
        triad</td>
        <td>Same as Q4c</td>
        </tr>
        <tr>
        <td><strong>Memory</strong></td>
        <td><span class="math inline"><em>O</em>(|<em>S</em>|)</span></td>
        <td><span
        class="math inline"><em>O</em>(|<em>S</em>||<em>A</em>|)</span></td>
        <td><span
        class="math inline"><em>O</em>(|<em>S</em>|<sup>2</sup>|<em>A</em>|)</span>
        for counts</td>
        <td><span
        class="math inline"><em>O</em>(|<em>S</em>||<em>A</em>|)</span></td>
        <td><span
        class="math inline"><em>O</em>(<em>d</em>|<em>A</em>|)</span></td>
        <td><span
        class="math inline"><em>O</em>(<em>d</em>|<em>A</em>|)</span></td>
        </tr>
        <tr>
        <td><strong>Per-step cost</strong></td>
        <td><span
        class="math inline"><em>O</em>(|<em>S</em>||<em>A</em>|)</span></td>
        <td>Same</td>
        <td>DP every <span class="math inline"><em>K</em></span> steps</td>
        <td><span class="math inline"><em>O</em>(|<em>A</em>|)</span></td>
        <td><span
        class="math inline"><em>O</em>(<em>d</em>|<em>A</em>|)</span></td>
        <td><span
        class="math inline"><em>O</em>(<em>d</em>|<em>A</em>|)</span></td>
        </tr>
        </tbody>
        </table>


        <h2
        id="a-different-cut-what-does-each-algorithm-need-to-know-about-the-world">A
        different cut: “what does each algorithm need to know about the
        world?”</h2>

        <p>This is the most pedagogical organization — each step in the
        assignment <strong>relaxes an assumption</strong>:</p>

        <pre><code>
        Q1, Q3a:  Need full T and R                   ← &quot;DP world&quot;
                    │
                    ▼ relax: estimate T and R from samples
        Q3b:      Need the ability to sample          ← &quot;Model-based RL&quot;
                    │
                    ▼ relax: don&#39;t bother with T or R; learn Q directly
        Q4a:      Need discrete states                ← &quot;Tabular model-free RL&quot;
                    │
                    ▼ relax: handle continuous states via features
        Q4c:      Need a feature extractor            ← &quot;Linear FA RL&quot;
                    │
                    ▼ add: safety constraints
        Q5c:      Need physics for the safety filter  ← &quot;Safe RL&quot;</code></pre>
        <p>This is the assignment's <strong>narrative arc</strong>: each
        algorithm makes one fewer assumption than the previous one (with Q5
        adding a constraint orthogonal to that progression).</p>

        <h2 id="another-cut-how-is-q-or-v-represented">Another cut: “how is Q
        (or V) represented?”</h2>

        <pre><code>
        Tabular
          │
          ├── Q1 manual VI:        V[s] in your head
          ├── Q3a valueIteration:  defaultdict(float) keyed on s
          ├── Q3b MBMC:            Same — VI runs on a tabular estimated MDP
          └── Q4a Tabular Q:       defaultdict keyed on (s, a)
                    │
                    ▼ states stop being hashable
        Linear function approximation
          │
          ├── Q4c FunctionApproxQ:  Q(s, a) = phi(s) · W[:, a]
          └── Q5c Constrained Q:    same, plus action-set filter
        
        (Beyond the assignment: deep RL = non-linear FA = neural-net Q.)</code></pre>
        <p>Note that the FEATURE EXTRACTOR (Q4b's Fourier basis) is one slot in
        this — the polynomial feature extractor in <code>util.py</code> would
        slot in identically, and a deep neural net would be the next step
        up.</p>

        <h2 id="yet-another-cut-how-does-the-algorithm-explore">Yet another cut:
        “how does the algorithm explore?”</h2>

        <pre><code>
        None at all (planning only):       Q1 manual VI, Q3a valueIteration
        Plain ε-greedy:                    Q3b MBMC, Q4a Tabular Q, Q4c FA Q
        Constrained ε-greedy:              Q5c (filters action set first, then ε-greedy)
        
        (Mentioned but not implemented: count-based exploration, intrinsic motivation,
        optimism under uncertainty, RND, NoisyNets, etc. — a whole literature.)</code></pre>
        <p>The trick used throughout is the schedule:</p>

        <div class="sourceCode" id="cb4">
        <pre class="sourceCode python"><code class="sourceCode python">
        <span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> numIters <span class="op">&lt;</span> <span class="fl">2e4</span>:    explorationProb <span class="op">=</span> <span class="fl">1.0</span>          <span class="co"># warm-up</span></span>
        <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="cf">elif</span> numIters <span class="op">&gt;</span> <span class="fl">1e6</span>:  explorationProb <span class="op">/=</span> log(...)    <span class="co"># decay log-rate</span></span>
        <span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="co"># (otherwise constant 0.2)</span></span></code></pre></div>
        
        <p>This is the same in MBMC, TabularQ, and FunctionApproxQ — only the
        magic numbers shift slightly.</p>
        <h2 id="what-kind-of-computation-per-step">“What kind of computation per
        step?”</h2>

        <table class="markdown">
        
        <thead>
        <tr>
        <th>Algorithm</th>
        <th>Per-step compute</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><code>valueIteration</code></td>
        <td><span
        class="math inline"><em>O</em>(|<em>S</em>||<em>A</em>|)</span> per
        Bellman update; full sweeps until convergence</td>
        </tr>
        <tr>
        <td><code>ModelBasedMonteCarlo</code></td>
        <td><span class="math inline"><em>O</em>(1)</span> to update counts;
        <span
        class="math inline"><em>O</em>(|<em>S</em>|<sup>2</sup>|<em>A</em>|)</span>
        DP every <span class="math inline"><em>K</em></span> steps</td>
        </tr>
        <tr>
        <td><code>TabularQLearning</code></td>
        <td><span class="math inline"><em>O</em>(|<em>A</em>|)</span> for one TD
        update</td>
        </tr>
        <tr>
        <td><code>FunctionApproxQLearning</code></td>
        <td><span
        class="math inline"><em>O</em>(<em>d</em> - |<em>A</em>|)</span> for one
        TD update + getQ</td>
        </tr>
        <tr>
        <td><code>ConstrainedQLearning</code></td>
        <td>Same as FA Q, plus <span
        class="math inline"><em>O</em>(|<em>A</em>|)</span> for the safety
        filter</td>
        </tr>
        </tbody>
        </table>

        <h2 id="the-convergence-guarantee-hierarchy">The “convergence-guarantee
        hierarchy”</h2>

        <p>Strongest to weakest guarantees:</p>

        <ol type="1">
        <li><strong>Q1 / Q3a (DP)</strong>: Trivial convergence, finite-time
        exact answer in finite-state MDPs.</li>
        <li><strong>Q3b (MBMC)</strong>: Converges to the optimal policy of the
        empirical MDP; converges to the <em>true</em> optimal policy as visit
        counts grow.</li>
        <li><strong>Q4a (Tabular Q)</strong>: Converges to optimal Q under
        standard conditions (Robbins-Monro step-sizes, all (s, a) visited
        infinitely often).</li>
        <li><strong>Q4c, Q5c (FA Q)</strong>: <strong>No general convergence
        guarantee.</strong> The deadly triad (FA + bootstrapping + off-policy)
        means the weights can diverge in adversarial cases. In practice it
        usually converges-ish but with the “noise floor” we observed in
        Q4d.</li>
        </ol>

        <h2 id="where-q2-fits-in">Where Q2 fits in</h2>
        <p>Q2 is a <strong>theoretical bridge</strong>, not an algorithm. It
        says: any MDP with <span class="math inline"><em>γ</em> &lt; 1</span>
        can be reduced to one with <span
        class="math inline"><em>γ</em> = 1</span> by adding an absorbing state
        and modifying <span class="math inline"><em>T</em></span> and <span
        class="math inline"><em>R</em></span>. This is a
        <strong>structural</strong> result that:</p>

        <ul>
        <li>Justifies using <span class="math inline"><em>γ</em> = 1</span>
        algorithms on <span class="math inline"><em>γ</em> &lt; 1</span>
        problems</li>
        <li>Re-frames the discount as “probability of episode termination per
        step”</li>
        <li>Makes the per-step termination interpretation explicit</li>
        </ul>
        <p>It doesn't change anything operational — every algorithm in the
        assignment uses the discount directly — but it's a useful concept for
        understanding why the discount is mathematically equivalent to a
        particular kind of stochastic episode termination.</p>

        <h2 id="cheat-sheet">Cheat sheet</h2>
        <p>If you had to remember one thing per item:</p>

        <table class="markdown">
        <thead>
        <tr>
        <th></th>
        <th>One-line summary</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Q1</td>
        <td>Bellman update by hand on a 5-state MDP — to build intuition</td>
        </tr>
        <tr>
        <td>Q2</td>
        <td><span class="math inline"><em>γ</em> &lt; 1</span> ↔︎ adding (1-γ)
        chance of absorbing each step</td>
        </tr>
        <tr>
        <td>Q3a</td>
        <td>DP value iteration on a known model</td>
        </tr>
        <tr>
        <td>Q3b</td>
        <td>Estimate the model from samples, then run Q3a on it</td>
        </tr>
        <tr>
        <td>Q4a</td>
        <td>Skip the model — learn Q directly with TD(0)</td>
        </tr>
        <tr>
        <td>Q4b</td>
        <td>Fourier features = <span
        class="math inline">cos(<em>π</em> - <em>c</em> - <em>s</em>)</span>
        for all <span class="math inline"><em>c</em></span></td>
        </tr>
        <tr>
        <td>Q4c</td>
        <td>Q4a but with linear function approximation over Q4b's features</td>
        </tr>
        <tr>
        <td>Q5c</td>
        <td>Q4c with the action set pre-filtered to safe choices</td>
        </tr>
        </tbody>
        </table>

        <h2 id="the-moral-of-the-assignment">The moral of the assignment</h2>
        
        <p>Each algorithm is a different point in the <strong>bias-variance /
        sample-efficiency / computational-cost tradeoff space</strong>:</p>
        <ul>
        <li><strong>DP (Q3a)</strong>: Zero variance, zero bias, but requires
        full knowledge of <span
        class="math inline"><em>T</em>,<em>R</em></span>.</li>
        <li><strong>MBMC (Q3b)</strong>: Adds variance from sampling, but
        inherits DP's computational properties on the empirical MDP.</li>
        <li><strong>Tabular Q (Q4a)</strong>: Skips model estimation entirely;
        bias from bootstrapping but unbiased per-step estimate of optimal <span
        class="math inline"><em>Q</em></span> in the limit.</li>
        <li><strong>FA Q (Q4c)</strong>: Adds approximation bias to enable
        continuous states; loses tabular's convergence guarantees but gains
        generalization.</li>
        <li><strong>Constrained Q (Q5c)</strong>: Adds prior knowledge (safety
        physics) to shrink the action space; can both help (no obviously bad
        actions) and hurt (over-restriction) policy learning.</li>
        </ul>
        <p>Each step <strong>trades one resource for another</strong>: knowledge
        of the model, samples, computation, memory, generalization, safety. The
        assignment's progression shows how different choices on this tradeoff
        produce different algorithms — none strictly dominant, all useful in
        different regimes.</p>
        <p>If you want a single mental picture: <strong>all of these algorithms
        are answering “what is <span
        class="math inline"><em>Q</em><sup>*</sup>(<em>s</em>,<em>a</em>)</span>?”
        — they just differ in (a) what you're allowed to assume about the world,
        (b) how you store <span class="math inline"><em>Q</em></span>, and (c)
        how you choose actions while learning.</strong></p>
        `


        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[12px]'>

                                        <div className='jade-h1'>
                                                XCS221 - AI Principles & Techniques
                                        </div>

                                        <div className='jade-h2 mt-[5px] mb-[20px]'>
                                                Assignment 4 Notes
                                        </div>


                                        <Tabs>
                                                <Tab2 title="Summary Notes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Summary Notes
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html9)} />
                                                                        </div>
                                                                </div>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="MDP Notes" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        MDP
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html7)} />
                                                                        </div>
                                                                </div>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Foundational RL Notes" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Foundational RL
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                <div dangerouslySetInnerHTML={createMarkup(html8)} />
                                                                        </div>
                                                                </div>


                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Policy Gradients Notes" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className="jade-h11 mt-[15px]">
                                                                        Policy Gradients
                                                                </div>

                                                                <div className="mt-[0px] mb-[15px] ml-[15px] mr-[15px]">
                                                                        <div className="assignment-answer mt-[10px] p-[15px]">
                                                                                asdfa
                                                                                {/* <div dangerouslySetInnerHTML={createMarkup(html7)} /> */}
                                                                        </div>
                                                                </div>


                                                        </TileRowCell0>
                                                </Tab2>

                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
