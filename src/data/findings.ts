export interface FindingDetails {
  executiveSummary: string;
  vulnerabilityOverview: string;
  discoveryMethodology: string;
  securityImpact: string;
  responsibleDisclosureStatus: string;
  lessonsLearned: string;
  references: string[];
  simplifiedExplanation: string;
}

export interface Finding {
  id: string;
  category: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  date: string;
  vulnerabilityType: string;
  title: string;
  summary: string;
  tags: string[];
  slug: string;
  details: FindingDetails;
}

export const findings: Finding[] = [
  {
    id: "BL-001",
    category: "Business Logic Vulnerability",
    severity: "Medium",
    date: "2026",
    vulnerabilityType: "Insecure Design",
    title: "Negative Quantity Accepted During Checkout",
    summary: "The checkout processing engine accepts negative product quantities, calculating negative order total amounts instead of rejecting the invalid input.",
    tags: ["Business Logic", "Checkout Bypass", "Input Validation"],
    slug: "negative-quantity-checkout",
    details: {
      executiveSummary: "A business logic vulnerability was identified in the checkout functionality of the e-commerce platform. The application accepted negative quantity values, allowing order total calculations to result in a negative balance.",
      vulnerabilityOverview: "The system fails to perform sufficient server-side validation on quantity parameters before calculating the total order price. When a negative quantity is submitted (e.g., -4), the application calculates the total as (Price * -4), resulting in a negative line item and total order amount.",
      discoveryMethodology: "1. Visited the target website and added a product to the cart.\n2. Proceeded to the checkout page.\n3. Intercepted the checkout submission request using Burp Suite.\n4. Modified the quantity parameter from a positive value to -4.\n5. Forwarded the request and observed that the website accepted the negative quantity and generated a negative total amount.",
      securityImpact: "An attacker could potentially manipulate order calculations, generate invalid invoice amounts, cause financial calculation errors in accounting systems, or abuse payment workflows.",
      responsibleDisclosureStatus: "Reported to the vendor via their official contact channels. No response has been received to date.",
      lessonsLearned: "Strict server-side validation must be implemented to ensure that quantity parameters are strictly positive integers (>= 1). The application should reject negative and zero values, and recalculate all totals on the server side rather than trusting client-side values.",
      references: [
        "OWASP: Business Logic Vulnerabilities",
        "CWE-20: Improper Input Validation",
        "CWE-807: Reliance on Untrusted Inputs in a Security Decision"
      ],
      simplifiedExplanation: "The checkout page lets a user buy a negative number of items (like -4 sneakers). Instead of refusing this, the website subtracts that price from the total checkout cost, generating a negative overall bill."
    }
  },
  {
    id: "BL-002",
    category: "Business Logic Vulnerability",
    severity: "High",
    date: "2026",
    vulnerabilityType: "Parameter Tampering",
    title: "Price Manipulation via Client-Side Parameter Tampering",
    summary: "Product pricing information is accepted from client-side parameters during the Add-to-Cart request, allowing users to modify the price of items.",
    tags: ["Parameter Tampering", "Business Logic", "Pricing Bypass"],
    slug: "price-manipulation-tampering",
    details: {
      executiveSummary: "A parameter tampering vulnerability in the cart management API allows users to specify custom prices for products. The server trusts pricing parameters sent in the client request instead of querying them from the database.",
      vulnerabilityOverview: "During the Add-to-Cart request, the application accepts client-controlled parameters such as 'product_price' and 'discount_amount'. By modifying these parameters in transit, the cart displays and processes a manipulated lower price.",
      discoveryMethodology: "1. Visited the e-commerce platform and selected a product.\n2. Intercepted the Add-to-Cart request using an intercepting proxy (Burp Suite).\n3. Located the 'product_price' parameter and modified its value to a nominal amount (e.g., 15).\n4. Forwarded the request and observed that the item was successfully added to the cart at the manipulated price.",
      securityImpact: "Allows attackers to purchase products below their intended retail price, apply unauthorized discounts, manipulate order totals, and cause significant financial losses to the seller.",
      responsibleDisclosureStatus: "Reported to the website developers. No response has been received to date.",
      lessonsLearned: "Pricing information should never be accepted from client-side requests. The server must retrieve prices directly from a secure database based on product IDs and validate all discounts or promotions server-side.",
      references: [
        "OWASP: Parameter Tampering",
        "CWE-807: Reliance on Untrusted Inputs in a Security Decision",
        "CWE-20: Improper Input Validation"
      ],
      simplifiedExplanation: "When adding a product to the cart, the website trusts the shopper's browser to tell it how much the item costs. A user can intercept this message and change the price parameter (e.g., from ৳17,500 to ৳15), allowing them to add the product to their cart at the cheap price."
    }
  },
  {
    id: "BL-003",
    category: "Business Logic Vulnerability",
    severity: "High",
    date: "2026",
    vulnerabilityType: "Insecure Design",
    title: "Negative Quantity Manipulation Leading to Zero-Cost Orders",
    summary: "The cart update API accepts negative quantity values, generating negative line subtotals that offset other products' prices to reduce the overall cart total to zero.",
    tags: ["Business Logic", "Insecure Design", "Zero-Cost Order"],
    slug: "zero-cost-orders-manipulation",
    details: {
      executiveSummary: "A business logic flaw in the cart update endpoint enables zero-cost orders. By introducing negative quantities of one item, users can generate negative subtotals that reduce the cost of other items in the cart to zero.",
      vulnerabilityOverview: "The endpoint 'POST /cart-update' does not validate the quantity parameter. If a user inputs a negative quantity, the system computes a negative subtotal for that line item. This negative subtotal is added directly to the cart total, allowing users to zero out positive costs.",
      discoveryMethodology: "1. Added two or more items to the shopping cart.\n2. Intercepted the cart update request using Burp Suite.\n3. Modified the quantity parameter of one item to a high negative number (e.g., quantity=-15).\n4. Forwarded the request and returned to the cart page.\n5. Observed that the negative subtotal was accepted and reduced the overall cart total to 0.",
      securityImpact: "Attackers can bypass pricing controls to create invalid orders and potentially check out products for free, leading to financial loss and inventory tracking discrepancies.",
      responsibleDisclosureStatus: "Reported to the vendor's security contact. No response has been received to date.",
      lessonsLearned: "All quantity updates must be validated on the server. The application should only process positive integer values, reject zero or negative numbers, and recalculate all cart line-items strictly on the server.",
      references: [
        "OWASP Top 10: Insecure Design",
        "CWE-20: Improper Input Validation"
      ],
      simplifiedExplanation: "By entering a negative quantity (like -15 items) for a cheap product in their cart, the shopping system generates a negative subtotal. This negative subtotal acts like a huge discount that cancels out the cost of other expensive items in the cart, lowering the overall total bill to ৳0."
    }
  },
  {
    id: "BL-004",
    category: "Business Logic Vulnerability",
    severity: "Medium",
    date: "2026",
    vulnerabilityType: "Insecure Design",
    title: "Negative Quantity Manipulation Leads to Negative Order Total",
    summary: "Shopping cart updates accept negative quantity parameters, yielding a negative line-item subtotal and a negative overall order total.",
    tags: ["Business Logic", "Insecure Design", "Cart Manipulation"],
    slug: "negative-order-total-manipulation",
    details: {
      executiveSummary: "A business logic vulnerability was identified in the shopping cart system. The cart processing logic accepts negative quantities, resulting in negative subtotals and overall negative cart totals.",
      vulnerabilityOverview: "The application trusts client-submitted quantity updates and does not perform range checks. When a negative number is submitted, the line item subtotal and the overall cart subtotal are calculated using that negative value, leading to negative totals.",
      discoveryMethodology: "1. Added items to the shopping cart.\n2. Intercepted the quantity update request using Burp Suite.\n3. Modified the quantity parameter to -1.\n4. Forwarded the request and observed that the application generated a negative line item total and a negative overall cart total.",
      securityImpact: "Enables manipulation of cart calculations, bypass of pricing controls, and creation of invalid orders. Could lead to payment gateway abuse if checkout processes do not reject negative transactions.",
      responsibleDisclosureStatus: "Reported to the site administrators. No response has been received to date.",
      lessonsLearned: "Implement strict validation checks on all numeric inputs. Server-side code must ensure quantities are positive integers and reject any negative or non-numeric inputs prior to recalculating cart totals.",
      references: [
        "CWE-20: Improper Input Validation",
        "OWASP: Business Logic Vulnerabilities"
      ],
      simplifiedExplanation: "The shopping cart page accepts negative quantity values without validating them. By changing a product quantity to -1, the website calculates the subtotal and checkout price as negative amounts instead of raising an input error."
    }
  },
  {
    id: "XSS-001",
    category: "Cross-Site Scripting",
    severity: "Medium",
    date: "2026",
    vulnerabilityType: "Reflected XSS",
    title: "Reflected Cross-Site Scripting (XSS) in Search Functionality",
    summary: "The application's search feature reflects user inputs back to the browser without escaping or encoding, allowing arbitrary JavaScript execution.",
    tags: ["XSS", "Reflected XSS", "Output Encoding"],
    slug: "reflected-xss-search",
    details: {
      executiveSummary: "A reflected Cross-Site Scripting (XSS) vulnerability was identified in the search results page. The search query parameter is displayed directly in the DOM without output encoding, permitting arbitrary client-side script execution.",
      vulnerabilityOverview: "User inputs are rendered in the HTML page response context without HTML encoding or sanitization. This allows event handlers or script elements injected in the search query to be interpreted and executed by the victim's browser.",
      discoveryMethodology: "1. Visited the search page.\n2. Entered '<script>alert(document.domain)</script>' in the search box.\n3. Submitted the query.\n4. Observed that the browser executed the script and rendered an alert dialog containing the domain name.",
      securityImpact: "Allows execution of arbitrary JavaScript in the victim's browser session. Attackers could steal session tokens, hijack user sessions, perform unauthorized transactions, or display spoofed page contents.",
      responsibleDisclosureStatus: "Reported to the vendor via security email. No response has been received to date.",
      lessonsLearned: "All user-supplied inputs reflected in HTML must be properly encoded (HTML entity encoding) before rendering. Developers should use frameworks that perform context-aware escaping by default and implement a robust Content Security Policy (CSP).",
      references: [
        "OWASP Top 10: Cross-Site Scripting (XSS)",
        "CWE-79: Improper Neutralization of Input During Web Page Generation"
      ],
      simplifiedExplanation: "When a user searches for a term, the page displays that term directly on screen. Because the website does not sanitize what was typed, if a user inputs a line of script code, the browser reads and runs it as code. This can let attackers steal credentials or hijack account sessions."
    }
  },
  {
    id: "SQLI-001",
    category: "SQL Injection",
    severity: "High",
    date: "2026",
    vulnerabilityType: "Error-Based SQLi",
    title: "SQL Injection in File Content ID Parameter",
    summary: "The 'id' parameter in the '/file_content' URL allows users to inject database queries, causing syntax errors and unauthorized database record disclosures.",
    tags: ["SQLi", "Error-Based", "Information Disclosure"],
    slug: "sql-injection-file-content",
    details: {
      executiveSummary: "An error-based SQL Injection vulnerability was identified in the '/file_content' endpoint. Improper input sanitization of the 'id' parameter allows users to manipulate the backend SQL queries.",
      vulnerabilityOverview: "The application parses user-supplied inputs from the 'id' query parameter and concatenates them directly into database queries. Injecting SQL logic changes the query behavior, resulting in syntax error disclosures and multiple record retrieval.",
      discoveryMethodology: "1. Requested a normal URL: /file_content?id=10, which loaded one item.\n2. Injected a SQL command: /file_content?id=10 or 1=1/*, which returned a MariaDB SQL syntax error.\n3. Injected a SQL bypass: /file_content?id=10 or 1=1--, which caused the webpage to display multiple database records at once instead of one.",
      securityImpact: "Allows unauthorized access to database contents, leakage of internal database engines via error messages, and schema mapping.",
      responsibleDisclosureStatus: "Reported to the vendor's security team. No response has been received to date.",
      lessonsLearned: "Use parameterized queries (prepared statements) to bind parameters. Disable descriptive database error messages in production environments and apply input validation to ensure the ID parameter accepts only integer values.",
      references: [
        "OWASP Top 10: Injection",
        "CWE-89: Improper Neutralization of Special Elements used in an SQL Command"
      ],
      simplifiedExplanation: "By modifying the page number/ID in the web browser's address bar and adding commands like 'or 1=1', the backend database executes those commands directly. This forces the site to expose internal error messages and reveal information that should be private."
    }
  },
  {
    id: "SQLI-002",
    category: "SQL Injection",
    severity: "High",
    date: "2026",
    vulnerabilityType: "Error-Based / Boolean SQLi",
    title: "SQL Injection in awards.php ID Parameter",
    summary: "The awards endpoint accepts raw SQL inputs through the 'id' parameter, allowing attackers to manipulate database queries and retrieve unrequested content.",
    tags: ["SQLi", "Boolean-Based", "Error-Based"],
    slug: "sql-injection-awards",
    details: {
      executiveSummary: "An assessment of the 'awards.php' endpoint revealed a SQL Injection vulnerability in the 'id' parameter. The application does not sanitize the input, leading to query manipulation and database error leaks.",
      vulnerabilityOverview: "Concatenating the 'id' parameter into SQL execution queries allows SQL expressions to be parsed. Testing TRUE and FALSE conditions resulted in differing application behaviors, confirming backend SQL evaluation.",
      discoveryMethodology: "1. Sent GET /awards.php?id=3 (Normal page).\n2. Sent GET /awards.php?id=3 OR 1=1/* (Triggered an 'Error querying database' response, indicating input reaches database query execution).\n3. Sent GET /awards.php?id=3 OR 1=1-- (Returned multiple records, demonstrating query alteration).\n4. Sent GET /awards.php?id=3 AND 1=2-- (Returned empty content, confirming boolean execution flow).",
      securityImpact: "Enables database schema enumeration, access to restricted records, and information leakage through errors.",
      responsibleDisclosureStatus: "Reported to the site administration. No response has been received to date.",
      lessonsLearned: "Ensure all database queries use prepared statements. Cast inputs strictly as integers before query compilation.",
      references: [
        "CWE-89: SQL Injection",
        "OWASP: SQL Injection Prevention Cheat Sheet"
      ],
      simplifiedExplanation: "Typing SQL commands into the web link (like adding 'OR 1=1') changes the database's instructions. The site returns different results when a command is true versus false, confirming that a user can control database queries directly from the URL bar."
    }
  },
  {
    id: "SQLI-003",
    category: "SQL Injection",
    severity: "Medium",
    date: "2026",
    vulnerabilityType: "Information Disclosure / SQLi",
    title: "Database Error Disclosure in awards.php Endpoint",
    summary: "Improper validation of inputs in the awards page allows SQL commands to execute, disclosing descriptive database error messages directly in the web browser.",
    tags: ["SQLi", "Information Disclosure", "Input Validation"],
    slug: "sql-injection-error-disclosure",
    details: {
      executiveSummary: "A potential SQL Injection vulnerability and database error exposure was identified in the '/awards.php' endpoint. Inputs containing SQL syntax force backend execution errors, leaking implementation details to end users.",
      vulnerabilityOverview: "The parameter 'id' accepts SQL operators instead of being restricted to integers. Malformed query components generate raw database errors, revealing backend execution traces.",
      discoveryMethodology: "1. Loaded /awards.php?id=10 (Normal view).\n2. Modified to /awards.php?id=10 OR 1=1/* (Returned error: 'Error querying3 database').\n3. Modified to /awards.php?id=10 OR 1=2 (Returned content normally instead of failing validation).",
      securityImpact: "Verifies the presence of query execution bugs, reducing the effort required for attackers to formulate targeted SQL exfiltration payloads.",
      responsibleDisclosureStatus: "Reported to the vendor's development team. No response has been received to date.",
      lessonsLearned: "Deploy strict server-side validation to restrict input types. Turn off detailed error responses and show generic pages in production.",
      references: [
        "CWE-209: Generation of Vulnerability Information Disclosure in Error Message",
        "CWE-89: SQL Injection"
      ],
      simplifiedExplanation: "The page expects a numeric ID in the link. However, if a user types database symbols, the website prints internal database error messages on the screen. This helps an attacker understand the server's structure to launch further attacks."
    }
  },
  {
    id: "SQLI-004",
    category: "SQL Injection",
    severity: "Medium",
    date: "2026",
    vulnerabilityType: "Potential SQL Injection",
    title: "Input Handling Flaw & Information Disclosure in ID Parameter",
    summary: "The awards endpoint does not restrict inputs to integers, exposing SQL execution details and database warnings to website visitors.",
    tags: ["SQLi", "Information Disclosure", "Input Sanitization"],
    slug: "potential-sqli-properties",
    details: {
      executiveSummary: "Security testing of the properties database website identified poor input handling in the '/awards.php' endpoint. Specially crafted parameters cause query execution errors, exposing database system details.",
      vulnerabilityOverview: "Because SQL commands are processed directly without sanitization, database error logs are printed directly to unauthenticated visitors. This allows profiling of the backend query structure.",
      discoveryMethodology: "1. Requested /awards.php?id=3 (Normal display).\n2. Modified ID: /awards.php?id=3 OR 1=1/* (Returned database error: 'Error querying3 database').\n3. Checked boolean: /awards.php?id=3 OR 1=1-- (Webpage continued processing without validation warnings).",
      securityImpact: "Increases exposure to SQL injection attempts and leaks database engine properties.",
      responsibleDisclosureStatus: "Reported to the security team. No response has been received to date.",
      lessonsLearned: "Use prepared statements, log detailed warnings privately, and present users with simplified, generic error pages.",
      references: [
        "CWE-89: SQL Injection",
        "CWE-20: Improper Input Validation"
      ],
      simplifiedExplanation: "Typing unexpected code inside the web address page parameter allows SQL logic to reach the database, prompting it to print database system errors. The site should reject non-numeric inputs immediately."
    }
  },
  {
    id: "SQLI-005",
    category: "SQL Injection",
    severity: "Critical",
    date: "2026",
    vulnerabilityType: "UNION-Based SQLi",
    title: "UNION-Based SQL Injection in News Endpoint",
    summary: "The news listing endpoint fails to sanitize the 'id' parameter, allowing UNION-based SQL commands to extract database user credentials and structural metadata.",
    tags: ["SQLi", "UNION-Based", "Critical", "Data Leakage"],
    slug: "union-sqli-news",
    details: {
      executiveSummary: "A Critical UNION-based SQL Injection vulnerability was identified in the database interaction layer of the news application. Attackers can bypass access controls to query arbitrary schemas, tables, and credentials.",
      vulnerabilityOverview: "The application concatenates the user-supplied 'id' query parameter directly into SQL execution strings. A quote (') breaks the query structure, letting an attacker append SELECT statements to extract schema tables.",
      discoveryMethodology: "1. Enumerated columns: Determined that the database query holds exactly 8 columns using the payload: ' UNION SELECT 1,2,3,4,5,6,7,8-- -\n2. Located reflection: Column 4 renders directly in the browser template layout, serving as the exfiltration channel.\n3. Extracted metadata: Confirmed active DB user as fvgfl_admin@localhost and mapped target tables (content, news).\n4. Attempted file extraction: INTO OUTFILE and LOAD_FILE requests were denied by database permission controls.",
      securityImpact: "Allows complete confidentiality compromise of database content, exposing system configuration data and administrative schemas.",
      responsibleDisclosureStatus: "Reported to the application developers. No response has been received to date.",
      lessonsLearned: "Never use string concatenation to build database statements. Use PDO prepared statements with binding parameters.",
      references: [
        "CWE-89: Improper Neutralization of Special Elements used in an SQL Command",
        "OWASP Top 10: Injection"
      ],
      simplifiedExplanation: "By inserting a quote (') and a 'UNION SELECT' statement into the link, the database is forced to merge other table contents (like administrator tables) and print them directly onto the public webpage."
    }
  },
  {
    id: "SQLI-006",
    category: "SQL Injection",
    severity: "Critical",
    date: "2026",
    vulnerabilityType: "UNION-Based SQLi",
    title: "UNION-Based SQL Injection in News Distribution API",
    summary: "Unvalidated integer parameters on the news page enable UNION-based SQL Injection, exposing internal server directories, database engine schemas, and uploaded file categories.",
    tags: ["SQLi", "UNION-Based", "Information Leakage"],
    slug: "union-sqli-distribution",
    details: {
      executiveSummary: "A Critical SQL Injection vulnerability was found in the news distribution interface. Unquoted integer parameters are parsed directly as database commands, exposing file structures, registration configurations, and system users.",
      vulnerabilityOverview: "The application processes query values as raw integers without quotation marks. Injecting UNION statements exposes column reflection channels (columns 3, 4, 5, and 6) directly onto the web layout.",
      discoveryMethodology: "1. Triggered database warning to reveal web server directory: /home/csiindia65/public_html/admin/... \n2. Discovered query width: news.php?id=-1 UNION SELECT 1,2,3,4,5,6,7,8-- -\n3. Extracted server info: MariaDB version 10.11.18, schema: csiindia65_csiindia.\n4. Dumped upload category lists: Retrieved file paths and PDF document titles (e.g., Certificate of Registration of CSI.pdf).",
      securityImpact: "Enables unauthenticated users to scrape files, map server structures, and harvest document layouts.",
      responsibleDisclosureStatus: "Reported to the administrative team. No response has been received to date.",
      lessonsLearned: "Migrate database queries to MySQLi prepared statements. Explicitly bind parameters and enforce strict type-checking.",
      references: [
        "CWE-89: SQL Injection",
        "OWASP Top 10: Injection"
      ],
      simplifiedExplanation: "A flaw in the news link allows anyone to append database instructions to the page number. This tricks the database into displaying secret system directories, software versions, and uploaded PDF document names on the public screen."
    }
  },
  {
    id: "SQLI-007",
    category: "SQL Injection",
    severity: "Critical",
    date: "2026",
    vulnerabilityType: "UNION-Based SQLi",
    title: "UNION-Based SQL Injection in News Detail Page",
    summary: "The news detail endpoint is vulnerable to UNION-based SQL Injection, allowing attackers to identify table widths and dump database metadata via visual layout fields.",
    tags: ["SQLi", "UNION-Based", "Metadata Exposure"],
    slug: "union-sqli-detail",
    details: {
      executiveSummary: "A Critical SQL Injection vulnerability in the news detail query parser allows attackers to bypass validation controls, map column widths, and exfiltrate database contents via browser layout fields.",
      vulnerabilityOverview: "User inputs are interpolated directly into queries. A quote (') escapes the string structure, allowing UNION SELECT commands to execute and return details on the page layout.",
      discoveryMethodology: "1. Mapped query columns: Determined that the database query contains 11 columns using ' ORDER BY 11-- -\n2. Forced injection output: Appended news_detail.php?id=' UNION SELECT 1,2,3,4,5,6,7,8,9,10,11-- - using a negative ID to display the database output directly.",
      securityImpact: "Unrestricted database reading access, permitting data theft of user logs, configuration values, and administrative listings.",
      responsibleDisclosureStatus: "Reported to the security office. No response has been received to date.",
      lessonsLearned: "Use prepared statements to separate code execution from parameter data. Restrict database user privileges to minimize impact.",
      references: [
        "CWE-89: SQL Injection",
        "OWASP Cheat Sheet: Query Parameterization"
      ],
      simplifiedExplanation: "The page is vulnerable because it combines inputs from the web address directly into database lookups. By typing database instructions, a user can map out how many columns are in a table and retrieve database layout information."
    }
  },
  {
    id: "SQLI-008",
    category: "SQL Injection",
    severity: "Critical",
    date: "2026",
    vulnerabilityType: "UNION-Based SQLi",
    title: "UNION-Based SQL Injection Exposing Admin Credentials",
    summary: "Improper input handling in the photos endpoint enables SQL Injection, allowing unauthenticated attackers to dump administrative database login credentials directly on the page.",
    tags: ["SQLi", "UNION-Based", "Credential Leak", "Critical"],
    slug: "union-sqli-credential-leak",
    details: {
      executiveSummary: "A Critical UNION-based SQL Injection vulnerability was discovered in the photo gallery query engine. The vulnerability allows full access to database content, resulting in the compromise of administrative username and password credentials.",
      vulnerabilityOverview: "The 'id' query parameter is concatenated into the database lookup query. Attackers can inject a UNION SELECT command that queries user credentials from database tables, outputting them directly in place of photo details.",
      discoveryMethodology: "1. Checked parameter: Injected a quote into photos.php?id= parameter.\n2. Crafted UNION query: Injected the payload: ' UNION SELECT 1,2,GROUP_CONCAT(CONCAT(user_name,':',user_password) SEPARATOR '|'),4 FROM user_table-- -\n3. Extracted credentials: The application processed the request and displayed the administrator username and password string ('admin:Sushil@2024') directly on the web page screen.",
      securityImpact: "Full compromise of administrative accounts, allowing attackers to log in as admin, overwrite content, or compromise application servers.",
      responsibleDisclosureStatus: "Reported to the administrative staff. No response has been received to date.",
      lessonsLearned: "Secure the endpoint with prepared statements. Ensure password hashes are strongly encrypted and salt values are isolated.",
      references: [
        "CWE-89: Improper Neutralization of Special Elements used in an SQL Command",
        "OWASP Top 10: Identification and Authentication Failures"
      ],
      simplifiedExplanation: "A severe flaw in the gallery page allows users to inject database lookup commands in the link. This forces the database to output the actual administrator username and password ('admin:Sushil@2024') directly on the public screen."
    }
  }
];
