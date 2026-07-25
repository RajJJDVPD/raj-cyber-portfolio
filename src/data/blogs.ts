export interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  isDraft: boolean;
}

export const blogs: Blog[] = [
  {
    slug: "understanding-sql-injection",
    title: "Understanding SQL Injection",
    description: "Deep dive into Boolean, Error-based, and UNION-based SQL injections. Mitigations using PDO statements.",
    date: "July 2026",
    tags: ["SQL Injection", "VAPT", "AppSec"],
    isDraft: false,
    content: `
# Deep Dive: Understanding SQL Injection (SQLi)

SQL Injection (SQLi) is one of the oldest, most common, and most dangerous web application vulnerabilities. It occurs when untrusted user input is directly concatenated into a database query string, allowing an attacker to manipulate the SQL statement executed by the database engine.

In this write-up, we will break down the mechanics of the three major types of SQL Injection, examine how they are exploited, and look at the proper defensive strategies to mitigate them.

---

## 1. Error-Based SQL Injection

Error-based SQLi is an in-band injection technique that relies on the database server displaying descriptive error messages to the browser. 

### How it works
If the application does not handle database errors properly, an attacker can input malformed SQL syntaxes to force the database to throw an error containing query metadata or actual data values.

**Vulnerable Code Example (PHP):**
\`\`\`php
$id = $_GET['id'];
$query = "SELECT * FROM news WHERE id = " . $id;
$result = db_query($query);
\`\`\`

**Exploitation:**
An attacker requests:
\`\`\`
/news.php?id=1' AND (SELECT 1 FROM (SELECT COUNT(*), CONCAT((SELECT version()), FLOOR(RAND(0)*2)) x FROM information_schema.tables GROUP BY x) y)--
\`\`\`
The database executes the malformed query and outputs an error:
\`\`\`
Duplicate entry '10.11.18-MariaDB1' for key 'group_key'
\`\`\`
This error message leaks the MariaDB database version string.

---

## 2. Boolean-Based Blind SQL Injection

Boolean-based SQLi is a blind injection technique used when the application is secure enough to hide raw database error outputs, but still behaves differently depending on whether the query returns \`TRUE\` or \`FALSE\`.

### How it works
The attacker sends SQL queries that force the database to evaluate a boolean expression (e.g., checking if the first character of the admin password hash is 'a'). By observing whether the page contents load normally (TRUE) or change/return empty (FALSE), the attacker can exfiltrate data character-by-character.

**Exploitation Scenario:**
If a query like \`/news.php?id=1 AND 1=1\` returns a normal article, but \`/news.php?id=1 AND 1=2\` returns "Article not found", the application is vulnerable.

The attacker can automate character extraction:
\`\`\`sql
AND SUBSTRING((SELECT password FROM users WHERE username='admin'), 1, 1) = 'a'
\`\`\`
If the page returns normally, the first character of the password is 'a'. If not, they try 'b', 'c', and so on.

---

## 3. UNION-Based SQL Injection

UNION-based SQLi is the most efficient in-band exploitation technique. It leverages the \`UNION\` SQL operator to append the results of an attacker-crafted SELECT query to the query originally written by the developer.

### How it works
To successfully execute a UNION attack, the attacker must satisfy two criteria:
1. The injected query must return the **same number of columns** as the original query.
2. The columns in the injected query must have the **compatible data types** as those in the original query.

**Exploitation Steps:**
1. **Determine the column count:**
   We input \`ORDER BY\` statements until the query fails:
   \`\`\`sql
   /news.php?id=1 ORDER BY 5-- -
   \`\`\`
   If 5 fails but 4 succeeds, the original query selects exactly 4 columns.

2. **Execute the UNION query to exfiltrate data:**
   By passing a negative/invalid ID, we force the original query to return no records, ensuring only our injected database records display:
   \`\`\`sql
   /news.php?id=-1 UNION SELECT 1, database(), user(), 4-- -
   \`\`\`
   This will print the active database name and the current user username directly onto the page's HTML rendering container.

---

## 4. Mitigation & Defense

The only robust mitigation against all forms of SQL Injection is the complete separation of SQL code (query structure) from user-provided data parameters.

### 1. Parameterized Queries (Prepared Statements)
By using prepared statements, the database driver compiles the query structure first. When the parameters are bound later, they are treated strictly as data literals, never as executable SQL code.

**Secure Code Example (PHP PDO):**
\`\`\`php
$stmt = $pdo->prepare('SELECT * FROM news WHERE id = :id');
$stmt->execute(['id' => $id]);
$newsItem = $stmt->fetch();
\`\`\`

### 2. Input Validation (Type Casting)
Enforce strict type validation. If a parameter must be a number, cast it to an integer immediately upon reception:
\`\`\`php
$id = (int)$_GET['id'];
\`\`\`

### 3. Disable Detailed Database Errors
Configure web servers and database drivers in production environments to log errors privately and present users with generic, user-friendly error templates instead of raw SQL alerts.
    `
  },
  {
    slug: "how-i-solved-portswigger-labs",
    title: "How I Solved 50+ PortSwigger Labs",
    description: "A comprehensive log of methodologies, lab breakdowns, and learning strategies to conquer PortSwigger Web Security Academy.",
    date: "July 2026",
    tags: ["PortSwigger", "Education", "Offensive Sec"],
    isDraft: false,
    content: `
# How I Solved 50+ PortSwigger Labs

PortSwigger's Web Security Academy is arguably the premier resource for learning web application security. Completing 50+ labs requires consistent dedication, methodology, and notes.

In this post, I will share the exact strategies I used to work through topics like SQL Injection, XSS, SSRF, JWT, and access control.

---

## 1. Setting Up a Dedicated Lab Workspace

To test vulnerabilities efficiently, you need a structured local workspace.

### Burp Suite Community/Professional Setup
- Set up a clean browser profile (or use Burp's built-in browser) to isolate traffic.
- Configure target scopes carefully to filter out background operating system telemetry and focus solely on the lab URL.
- Make extensive use of **Burp Repeater** and **Burp Collaborator** (for out-of-band exploits).

---

## 2. Methodology: Recon and Analysis

Never inject blindly. Follow a systematic process:
1. **Map the Application:** Browse all pages, submit all forms, and trigger typical workflows.
2. **Review Target Sitemap:** Inspect the proxy history for hidden endpoints, query parameters, or cookie states.
3. **Analyze Inputs:** Note where parameters are reflected, processed in DB queries, or stored in session cookies.

---

## 3. Key Learnings per Module

Here are key lessons I learned while solving the first 50 labs:

### SQL Injection (10+ Labs)
- Appending SQL operators is just the beginning. The real challenge is determining database schemas under strict, error-free boolean parameters.
- Scripting boolean blind scripts in Python makes exfiltration 10x faster.

### Cross-Site Scripting (XSS) (10+ Labs)
- Modern filters are smart, but context is key. Bypassing requires understanding if input is reflected inside standard HTML tags, attribute quotes, or Javascript variables.
- Using custom event handlers like \`onfocus\` or \`onerror\` helps bypass standard \`<script>\` tag blocks.

### Server-Side Request Forgery (SSRF) (5+ Labs)
- SSRF is often about finding administrative endpoints restricted to localhost (\`127.0.0.1\`).
- I learned to use alternative IP representations (like octal \`0177.0.0.1\` or decimal \`2130706433\`) to bypass simple input regex filters.

---

## 4. Key Takeaway

The secret to mastering PortSwigger is not copying payloads. It is understanding the underlying browser and server behaviors that allow the vulnerability to exist in the first place.
    `
  }
];
