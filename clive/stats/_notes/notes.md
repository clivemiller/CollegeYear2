# Stats - easy A with renae

## Chapter One

### 1.1: Definitions of Statistics, Probability, and Key Terms

- **Statistics**: the science of collecting, analyzing, interpreting, and presenting data. Organizing and summarzing data is called **descriptive statistics**. Using formal methods ()
- **Probability**: the mathematical tool used to study randomness and the likelihood of events.

In statistics, the entire group under study is the **population**, and a subset of this group is a **sample**. The method of choosing a subset is called **sampling**, and the observed values are **data**.

- **Statistic**: a numeric value that describes a **sample** (used to estimate a **parameter**, which describes a **population**).
- **Variable**: a characteristic measured for each member of a population. A single measured value is a **datum**.

Lowercase letters like *x* and *y* are commonly used to represent data values.

### Types of data

- **Qualitative (categorical)**: non-numeric categories (e.g., hair color, blood type, ethnic group). Qualitative data are described by words or labels.
- **Quantitative (numeric)**: numeric measurements or counts. Quantitative data are either:
  - **Discrete**: countable values (e.g., number of phone calls: 0, 1, 2...).
  - **Continuous**: measurable values that can include decimals or fractions (e.g., lengths, weights, times).

Researchers often prefer quantitative data for mathematical analysis (for example, averages are meaningful for numeric data but not for hair color).

### Displaying data (tables and graphs)

Tables display **frequencies** (counts) and **relative frequencies** (percentages). Percentages make comparisons easier when totals differ.

Common graphs for qualitative data:

- **Bar graph**: bar length is proportional to count or percent; can be vertical or horizontal. Good when categories don't add to 100% or when categories overlap.
- **Pie chart**: wedges represent parts of a whole; only valid when category percentages sum to 100% and categories are mutually exclusive.
- **Pareto chart**: a bar graph with bars sorted from largest to smallest to highlight the most important categories.

Example (enrollments):

De Anza College vs Foothill College (most recent spring quarter)

| Category   | De Anza (Number, %) | Foothill (Number, %) |
|------------|---------------------:|---------------------:|
| Full-time  | 9,200 (40.9%)        | 4,059 (28.6%)        |
| Part-time  | 13,296 (59.1%)       | 10,124 (71.4%)       |
| Total      | 22,496 (100%)        | 14,183 (100%)        |

When percentages add to more than 100% (e.g., students in multiple categories), use a **bar graph** rather than a pie chart.

Omitted categories or missing data (for example an "Other/Unknown" ethnicity) make pie charts inappropriate; a bar graph is better. Example ethnicity breakdown (De Anza College):

| Ethnicity        | Frequency | Percent |
|------------------|----------:|--------:|
| Asian            | 8,794     | 36.1%   |
| White            | 5,978     | 24.5%   |
| Hispanic/Latino  | 4,180     | 17.1%   |
| Other/Unknown    | (included)| 9.6%    |
| Black            | 1,412     | 5.8%    |
| Filipino         | 1,298     | 5.3%    |
| Pacific Islander | 236       | 1.0%    |
| Native American  | 146       | 0.6%    |

The Pareto chart sorts these categories from largest to smallest to make the most important categories obvious.

### Sampling methods

Sampling is often used because studying an entire population is expensive or impractical. Each method below is initially random so that each member has an equal chance of selection (unless noted otherwise):

- **Simple random sample**: every group of n individuals has an equal chance of selection (e.g., drawing names from a hat or using random numbers).
  - Example: assign two-digit IDs to 31 classmates (00–30), generate random two-digit numbers (or use randInt on a calculator), and choose the matching IDs.

- **Stratified sample**: divide the population into **strata** (groups) and take a proportionate simple random sample from each stratum.

- **Cluster sample**: divide the population into **clusters**, randomly select whole clusters, and include all members of chosen clusters.

- **Systematic sample**: choose a random starting point and select every nth item from an ordered list (e.g., every 50th phone book entry).

- **Convenience sample** (non-random): uses readily available subjects (e.g., people in a store); often biased and not representative.

Calculator tip (TI-83/84): use randInt(0,30,3) to generate 3 random integers between 0 and 30.

### Sampling details and best practices

- **With replacement**: selected members are returned to the population and can be chosen again — truly random.
- **Without replacement**: selected members are not returned — commonly used in surveys. For large populations and relatively small samples, the difference is negligible.

Sampling without replacement matters mathematically only for small populations.

### Errors, bias, and critical evaluation

- **Sampling error**: variability caused by taking a sample instead of a full population (reduced by larger samples).
- **Nonsampling error**: errors not related to sampling (e.g., measurement defects).
- **Sampling bias**: occurs when some members are less likely to be chosen; leads to invalid conclusions.

Critical evaluation checklist for studies:

- Is the **sample representative** of the population?
- Was the sample **self-selected** (voluntary response)?
- Is the **sample size** adequate?
- Are there signs of **undue influence** in data collection or question wording?
- Are **non-responses** or refusals likely to bias results?
- Are causal claims supported, or could **confounding** variables explain the relationship?
- Who funded the study — is there potential **self-interest** bias?
- Are graphs or summaries **misleading** or incomplete?

### Quick takeaway

- Choose sampling and graph types appropriate to the data and the question.
- Always check for **bias**, sample **representativeness**, and **confounding** before trusting conclusions.

### Experimental design (short)

Experiments test whether one variable causes change in another. Proper design produces reliable data and supports cause-and-effect conclusions.

- **Explanatory variable** (factor): the variable the researcher manipulates (also called the independent variable).
- **Response variable**: the measured outcome (dependent variable).
- **Treatments**: the specific values or conditions of the explanatory variable.
- **Experimental unit**: a single subject or object measured.

Key design ideas:

- **Random assignment** of units to treatments spreads **lurking variables** (unmeasured confounders) evenly across groups.
- Use a **control group** (often a **placebo**) to balance the psychological effects of participation.
- **Blinding**: subjects don't know which treatment they receive; **double-blind**: neither subjects nor researchers interacting with them know.

Short example — aspirin study (concise):

- Population: adults aged 50–84 (target group).
- Sample: the 400 recruited participants.
- Experimental units: each recruited person.
- Explanatory variable: daily pill type (aspirin vs placebo).
- Response variable: occurrence of heart attack over 3 years.
- Treatments: aspirin pill, placebo pill.

Brief Try-It guidance (design tips):

- When designing studies like texting vs. driving, prioritize **participant safety** — do not randomize into dangerous conditions without strong safeguards or simulations.
- If randomization is impossible (e.g., birth order), you cannot infer causation confidently; be cautious about lurking variables.
- Consider blinding where possible; when impossible, document potential biases and control for them analytically.

Ethics (very short):

- Researchers must avoid data falsification, selective stopping, and misreporting. **IRB** approval and **informed consent** are required for human-subject research.
- Protect participant privacy and minimize risk. Be transparent about methods and funding to reduce conflicts of interest.

### Organizing data & rounding

- Once you have data, organize it to show how often each **datum** occurs (frequency).
- **Rounding rule (short)**: round only the final answer. Carry one extra decimal place than the original data; if you must round intermediates, keep at least twice as many decimals as the final answer.

### Levels of measurement (short)

From lowest to highest: **Nominal**, **Ordinal**, **Interval**, **Ratio**.

- **Nominal**: categorical labels (names, colors). No order; no calculations.
- **Ordinal**: ordered categories (rankings), but differences are not measurable.
- **Interval**: ordered with measurable differences but no true zero (e.g., Celsius, Fahrenheit). Ratios are meaningless.
- **Ratio**: ordered with measurable differences and a true zero (e.g., weights, exam scores). Ratios valid.

### Frequency (concise example)

Twenty students reported hours worked per day:

| Data value | Frequency |
|-----------:|----------:|
| 2          | 3         |
| 3          | 5         |
| 4          | 3         |
| 5          | 6         |
| 6          | 2         |
| 7          | 1         |

- Total frequency = 20 (sample size).

Relative frequency = frequency / total (can be shown as fraction, decimal, or percent).

| Data value | Frequency | Relative frequency |
|-----------:|----------:|-------------------:|
| 2          | 3         | 3/20 = 0.15        |
| 3          | 5         | 5/20 = 0.25        |
| 4          | 3         | 0.15               |
| 5          | 6         | 0.30               |
| 6          | 2         | 0.10               |
| 7          | 1         | 0.05               |

Cumulative relative frequency is the running total of relative frequencies; the last entry ≈ 1.0.

### Grouped data example (heights, very short)

Heights of 100 soccer players were grouped into intervals (e.g., 59.95–61.95, 61.95–63.95, ...). Each interval has a frequency; dividing by 100 gives relative frequencies and their cumulative totals. The final cumulative relative frequency = 1.00.