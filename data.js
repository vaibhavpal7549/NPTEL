const quizData = {
    1: [
        {
            question: "What is an Information System?",
            options: ["a. Collection of unrelated hardware devices", "b. Set of components that collect, process, store, and distribute information", "c. Tool used only for storing data in files", "d. Type of social media platform"],
            correct: "b. Set of components that collect, process, store, and distribute information"
        },
        {
            question: "Which of the following best explains the strategic impact of information systems on modern businesses?",
            options: ["a. They replace human decision-making with automation in all areas", "b. They isolate departments to increase individual efficiency", "c. They support data-driven strategies, streamline operations, and enhance customer engagement", "d. They reduce the need for digital integration across supply chains"],
            correct: "c. They support data-driven strategies, streamline operations, and enhance customer engagement"
        },
        {
            question: "Which of the following are the three key dimensions of Information Systems?",
            options: ["a. Hardware, Software, and Data", "b. Organizations, Management, and Technology", "c. Input, Processing, and Output", "d. People, Network, and Databases"],
            correct: "b. Organizations, Management, and Technology"
        },
        {
            question: "Which of the following scenarios best illustrates a fully digital firm?",
            options: ["a. A company uses email for internal communication but relies on paper-based invoices for clients", "b. A retailer opens physical stores in multiple cities without integrating them into a centralized system", "c. A consulting firm coordinates global teams in real time, automates workflows, and manages client data on cloud platforms accessible 24/7", "d. A manufacturer stores its financial records digitally but continues to handle supply chain operations manually"],
            correct: "c. A consulting firm coordinates global teams in real time, automates workflows, and manages client data on cloud platforms accessible 24/7"
        },
        {
            question: "Which of the following is not considered a strategic business objective for investing in information systems?",
            options: ["a. Operational excellence", "b. Development of new products, services, and business models", "c. Enhanced social media visibility", "d. Gaining competitive advantage"],
            correct: "c. Enhanced social media visibility"
        },
        {
            question: "Which scenario best illustrates the force \"bargaining power of buyers\" in Porter's Five Forces model?",
            options: ["a. A new startup enters the industry with lower production costs", "b. A large retail chain pressures suppliers for lower prices and better quality", "c. A firm invests in R&D to differentiate its product from substitutes", "d. Government regulations limit the number of industry competitors"],
            correct: "b. A large retail chain pressures suppliers for lower prices and better quality"
        },
        {
            question: "Which of the following is an example of Platform as a Service (PaaS)?",
            options: ["a. Storing files in the cloud", "b. Using a cloud platform to develop and deploy web applications", "c. Managing payroll using a cloud-based service", "d. Watching videos on a streaming platform"],
            correct: "b. Using a cloud platform to develop and deploy web applications"
        },
        {
            question: "Which of the following best reflects the core integration that distinguishes Industry 4.0 from previous industrial revolutions?",
            options: ["a. Replacement of manual labour with mechanized tools", "b. Use of steam power and water in mass production", "c. Embedding cyber-physical systems and real-time data exchange into manufacturing processes", "d. Deployment of enterprise resource planning (ERP) software across departments"],
            correct: "c. Embedding cyber-physical systems and real-time data exchange into manufacturing processes"
        },
        {
            question: "Which of the following is a key impact of IoT on modern industry?",
            options: ["a. Automation", "b. Integration", "c. Servitization", "d. All of these"],
            correct: "d. All of these"
        },
        {
            question: "How can a business choose the right Management Information System (MIS)?",
            options: ["a. By copying what other businesses are using", "b. By selecting the system that looks the most modern", "c. By matching the system with the business goals and information needs", "d. By choosing the one with the most advertisements"],
            correct: "c. By matching the system with the business goals and information needs"
        }
    ],
    2: [
        {
            question: "What is a major problem associated with traditional file systems?",
            options: ["a. Real-time data analytics capability", "b. High data redundancy and inconsistency", "c. Seamless integration across departments", "d. Automated business intelligence reporting"],
            correct: "b. High data redundancy and inconsistency"
        },
        {
            question: "Which of the following best describes a Database Management System (DBMS)?",
            options: ["a. A collection of unrelated spreadsheets used for data storage", "b. A set of programs that manage the structure and access to a non-digital filing system", "c. Software that enables users and applications to define, create, maintain, and control access to a database", "d. A tool used primarily for designing graphical user interfaces (GUIs) for websites"],
            correct: "c. Software that enables users and applications to define, create, maintain, and control access to a database"
        },
        {
            question: "Which of the following is an example of a relational DBMS?",
            options: ["a. Microsoft Excel", "b. Oracle Database", "c. Adobe Photoshop", "d. Google Chrome"],
            correct: "b. Oracle Database"
        },
        {
            question: "What is the primary purpose of a foreign key in RDBMS?",
            options: ["a. To uniquely identify each record in a table", "b. To store encrypted data in a relational table", "c. To enforce referential integrity by creating a link between two related tables", "d. To speed up data retrieval through indexing"],
            correct: "c. To enforce referential integrity by creating a link between two related tables"
        },
        {
            question: "Which of the following operations in a relational database is used to combine data from two or more tables?",
            options: ["a. SELECT", "b. PROJECT", "c. JOIN", "d. SORT"],
            correct: "c. JOIN"
        },
        {
            question: "Which of the following best describes the purpose of an Entity-Relationship (E-R) Model in database design?",
            options: ["a. To generate executable code for managing the database", "b. To describe how data is physically stored on disk", "c. To visually represent data entities, their attributes, and relationships from the user's perspective", "d. To optimize SQL queries for faster performance"],
            correct: "c. To visually represent data entities, their attributes, and relationships from the user's perspective"
        },
        {
            question: "Which of the following is an example of how OLAP is used?",
            options: ["a. Processing a credit card payment at a store", "b. Analysing sales data across different regions and time periods to support business decisions", "c. Editing a document on Google Docs", "d. Sending a message through a chat application"],
            correct: "b. Analysing sales data across different regions and time periods to support business decisions"
        },
        {
            question: "A school wants to understand which subjects students perform best in. They collect exam data, remove errors and missing values, then apply a tool to find patterns like \"students who do well in Math also do well in Physics.\" Which step of the KDD process does finding patterns like \"Math and Physics performance are related\" represent?",
            options: ["a. Data cleaning", "b. Data Selection", "c. Data Mining", "d. Knowledge Presentation"],
            correct: "c. Data Mining"
        },
        {
            question: "Which of the following correctly matches the analytics category with its example?",
            options: ["a. Descriptive Analytics---Forecasting future sales based on trends", "b. Predictive Analytics---Generating real-time sales reports", "c. Prescriptive Analytics---Recommending optimal inventory levels based on predicted demand", "d. Descriptive Analytics---Suggesting best marketing strategies based on simulation"],
            correct: "c. Prescriptive Analytics---Recommending optimal inventory levels based on predicted demand"
        },
        {
            question: "Clustering, which is used to group similar data points without predefined labels, is best categorized under which type of analytics technique?",
            options: ["a. Descriptive Analytics", "b. Predictive Analytics", "c. Prescriptive Analytics", "d. Diagnostic Analytics"],
            correct: "a. Descriptive Analytics"
        }
    ],
    3: [
        {
            question: "Which of the following statements most accurately reflects the strategic role of an ERP system in modern enterprise?",
            options: ["a. ERP systems function independently within departments, allowing flexibility in isolated business units", "b. ERP systems are primarily used for data visualization and do not support core business transactions", "c. ERP systems integrate diverse business functions using a centralized database, enhancing real-time data access and cross-functional decision-making", "d. ERP systems are designed to replace customer-facing applications like CRM and e-commerce platforms entirely"],
            correct: "c. ERP systems integrate diverse business functions using a centralized database, enhancing real-time data access and cross-functional decision-making"
        },
        {
            question: "In which of the following business scenarios is implementing an ERP system least likely to be necessary or cost-effective?",
            options: ["a. A multinational manufacturing firm with complex supply chains across continents", "b. A medium-sized retail chain looking to integrate inventory, sales, and finance functions", "c. A freelance graphic designer managing client projects and personal finances", "d. A large hospital network seeking to centralize patient records, billing, and operations"],
            correct: "c. A freelance graphic designer managing client projects and personal finances"
        },
        {
            question: "What does MRP stand for in the context of enterprise systems and manufacturing?",
            options: ["a. Market Resource Planning", "b. Material Requirements Planning", "c. Manufacturing Resource Projection", "d. Managed Retail Pricing"],
            correct: "b. Material Requirements Planning"
        },
        {
            question: "What does SAP stand for in the context of enterprise software?",
            options: ["a. Systems, Applications, and Products in Data Processing", "b. Software for Accounting and Planning", "c. Systematic Application Program", "d. Strategic Analytics Platform"],
            correct: "a. Systems, Applications, and Products in Data Processing"
        },
        {
            question: "Which of the following best describes SAP in the context of enterprise systems?",
            options: ["a. A word processing software for business documentation", "b. A social media analytics tool used for marketing campaigns", "c. An enterprise resource planning software used to manage business operations and customer relations", "d. A standalone accounting software for small personal businesses"],
            correct: "c. An enterprise resource planning software used to manage business operations and customer relations"
        },
        {
            question: "A multinational enterprise faced challenges with duplicate data entries, fragmented reporting, and delays in procurement approvals due to siloed legacy systems. After deploying an ERP system, the organisation observed improved cross-departmental workflow visibility, consistent data definitions across units, and real-time access to key performance metrics across global offices. Which of the following strategic benefits of ERP is most accurately reflected in the scenario above?",
            options: ["a. Minimizing hardware costs by moving to cloud infrastructure", "b. Achieving process standardization and enhanced decision-making through integrated data", "c. Enhancing customer experience through personalized marketing", "d. Improving software flexibility by decentralizing operational systems"],
            correct: "b. Achieving process standardization and enhanced decision-making through integrated data"
        },
        {
            question: "After months of configuring and testing their new ERP system, a company begins using it for day-to-day operations. Some employees face minor technical issues, while others need assistance adjusting to the new workflows. A support team is assigned to resolve queries and monitor system performance. Which phase of ERP implementation is the company currently in?",
            options: ["a. Requirement Analysis", "b. Development and Customization", "c. Go-Live and Support", "d. Project Planning"],
            correct: "c. Go-Live and Support"
        },
        {
            question: "Which of the following is often considered one of the biggest challenges in implementing an ERP system?",
            options: ["a. Choosing a programming language for the backend", "b. Designing a company logo", "c. Managing organizational change and user resistance", "d. Upgrading internet browsers for compatibility"],
            correct: "c. Managing organizational change and user resistance"
        },
        {
            question: "Which of the following correctly lists the basic steps in project risk management?",
            options: ["a. Identify risks → Analyze impact and probability → Prioritize risks → Create mitigation plan → Monitor risks", "b. Identify risks → Prioritize risks → Analyze impact and probability → Create mitigation plan → Monitor risks", "c. Identify risks → Monitor risks → Analyze impact and probability → Create mitigation plan → Prioritize risks", "d. Identify risks → Create mitigation plan → Prioritize risks → Monitor risks → Analyze impact and probability"],
            correct: "a. Identify risks → Analyze impact and probability → Prioritize risks → Create mitigation plan → Monitor risks"
        },
        {
            question: "Which of the following is most important for ensuring the success of an ERP implementation?",
            options: ["a. Allowing frequent changes to requirements during development", "b. Avoiding commitment to a specific ERP product", "c. Ownership and support from top management", "d. Encouraging lengthy discussions on every minor issue"],
            correct: "c. Ownership and support from top management"
        }
    ],
    4: [
        {
            question: "What is a key strategic benefit of CRM systems?",
            options: ["a. Automate payroll tasks", "b. Real-time unified customer view", "c. Archives complaints only", "d. Stores contact info for ads"],
            correct: "b. Real-time unified customer view"
        },
        {
            question: "Which of the following represent the most comprehensive application areas of CRM in an enterprise?",
            options: ["a. Customer onboarding, data encryption, warehouse logistics", "b. Contact management, employee payroll, inventory tracking", "c. Sales automation, marketing campaign management, customer service support", "d. Procurement planning, vendor payments, CRM ticketing"],
            correct: "c. Sales automation, marketing campaign management, customer service support"
        },
        {
            question: "Which of the following is not a CRM software?",
            options: ["a. SAP CRM", "b. Salesforce.com", "c. Amdocs", "d. AutoCAD"],
            correct: "d. AutoCAD"
        },
        {
            question: "Which of the following is a primary objective of Supply Chain Management?",
            options: ["a. Reduce delivery time", "b. Reduce cost of delivery", "c. Increase collaboration among partners", "d. All of these"],
            correct: "d. All of these"
        },
        {
            question: "Which of the following scenarios best illustrates the Bullwhip Effect in supply chains?",
            options: ["a. A company launches a marketing campaign to boost seasonal sales", "b. A retailer overestimates demand, leading to exaggerated orders upstream, causing supply chain inefficiencies and inventory buildup", "c. A supplier improves production efficiency, lowering delivery lead time", "d. A logistics partner reduces transportation costs by optimizing delivery routes"],
            correct: "b. A retailer overestimates demand, leading to exaggerated orders upstream, causing supply chain inefficiencies and inventory buildup"
        },
        {
            question: "Which of the following best distinguishes a pull-based supply chain model from a push-based one?",
            options: ["a. Pull-based models rely on forecasted production schedules, while push-based models begin only after customer demand is confirmed", "b. Push-based models use customer orders to trigger supply chain events, while pull-based models operate independently of actual demand", "c. Pull-based models are driven by real-time customer demand and web-based integration, while push-based models rely on forecast-driven schedules and inventory build-up", "d. Pull-based systems store large inventories to reduce uncertainty, while push-based systems minimize stock using demand signals"],
            correct: "c. Pull-based models are driven by real-time customer demand and web-based integration, while push-based models rely on forecast-driven schedules and inventory build-up"
        },
        {
            question: "Which two core philosophies form the foundations of the Toyota Production System (TPS)?",
            options: ["a. Cost leadership and market expansion", "b. Total quality control and vertical integration", "c. Elimination of waste and respect for people", "d. Automation and mass production"],
            correct: "c. Elimination of waste and respect for people"
        },
        {
            question: "Which of the following best describes the role of a Kanban system in lean manufacturing?",
            options: ["a. A forecasting tool used to predict monthly inventory needs", "b. A central scheduling system that pushes production orders to each work centre", "c. A visual workflow tool that signals demand for parts based on actual consumption, enabling pull-based replenishment", "d. A budgeting method for allocating resources in large-scale project management"],
            correct: "c. A visual workflow tool that signals demand for parts based on actual consumption, enabling pull-based replenishment"
        },
        {
            question: "Why is Product Life Cycle Management (PLM) essential for modern businesses?",
            options: ["a. It ensures permanent customer loyalty by focusing only on post-sales services", "b. It helps manage a product's complete lifecycle from conception to disposal, enabling innovation, cost control, and faster time-to-market", "c. It is used only in financial forecasting and budgeting of marketing campaigns", "d. It replaces all ERP functionalities by focusing solely on logistics and procurement"],
            correct: "b. It helps manage a product's complete lifecycle from conception to disposal, enabling innovation, cost control, and faster time-to-market"
        },
        {
            question: "In the context of PLM, what does Change Management primarily involve?",
            options: ["a. Only testing the final product", "b. Automatically rejecting all change requests", "c. Creating, approving, implementing, testing, and transmitting a change to the final design or BOM", "d. Changing employees' roles in an organisation"],
            correct: "c. Creating, approving, implementing, testing, and transmitting a change to the final design or BOM"
        }
    ],
    5: [
        {
            question: "Which of the following activities best represents the integrated scope of the manufacturing/production function in an enterprise system?",
            options: ["a. Monitoring customer purchase trends for marketing forecasts", "b. Planning, scheduling, and coordinating resources to convert raw materials into finished goods", "c. Handling payroll and employee benefits for production staff", "d. Analyzing financial data to assess profit margins"],
            correct: "b. Planning, scheduling, and coordinating resources to convert raw materials into finished goods"
        },
        {
            question: "Which of the following best defines a Bill of Material (BOM) in the context of product development?",
            options: ["a. A financial breakdown of production costs and sales estimates", "b. A document listing customer orders and delivery schedules", "c. A hierarchical list of materials, components, and sub-assemblies required to manufacture a product", "d. A set of instructions for assembling the final product, including marketing details"],
            correct: "c. A hierarchical list of materials, components, and sub-assemblies required to manufacture a product"
        },
        {
            question: "What is the main purpose of Capacity Requirement Planning in manufacturing?",
            options: ["a. To plan raw material purchases", "b. To assign costs to employee work hours", "c. To compare available machine and labour time with the time needed for production orders", "d. To promote products based on forecasted sales"],
            correct: "c. To compare available machine and labour time with the time needed for production orders"
        },
        {
            question: "In the context of engineering and product development, what does CAD stand for?",
            options: ["a. Computer-Aided Drafting", "b. Computerized Architecture Design", "c. Computer-Aided Design", "d. Centralized Application Development"],
            correct: "c. Computer-Aided Design"
        },
        {
            question: "Which of the following best describes Additive Manufacturing in a production environment?",
            options: ["a. Material removal to form desired shape", "b. Mold-based production for high-volume output", "c. Digital fabrication by layering material", "d. Component assembly from standard parts"],
            correct: "c. Digital fabrication by layering material"
        },
        {
            question: "Which of the following most accurately distinguishes Virtual Reality (VR) systems from conventional CAD systems in engineering applications?",
            options: ["a. VR systems are used only for entertainment, while CAD systems are meant for professional design tasks", "b. CAD systems can simulate motion, while VR systems focus only on still object modelling", "c. VR systems offer immersive visualization, real-time rendering, and interactive simulation beyond static modelling of CAD", "d. CAD systems use digital layering techniques, whereas VR relies solely on manual rendering inputs"],
            correct: "c. VR systems offer immersive visualization, real-time rendering, and interactive simulation beyond static modelling of CAD"
        },
        {
            question: "Effective material management ensures:",
            options: ["a. Right material", "b. Right place", "c. Right time", "d. All of the above"],
            correct: "d. All of the above"
        },
        {
            question: "A manufacturing firm is experiencing frequent product rejections at the final inspection stage. Upon investigation, they discover that defects are originating from inconsistent raw material quality and lack of real-time process feedback. Which system would best address both issues by integrating manufacturing and quality intelligence?",
            options: ["a. Enterprise Resource Planning System", "b. Quality Management System", "c. Supply Chain Management System", "d. Product Lifecycle Management System"],
            correct: "b. Quality Management System"
        },
        {
            question: "In Statistical Process Control (SPC), if a data point on a control chart falls outside the upper or lower control limits, which of the following best describes the implication and required action?",
            options: ["a. The process is within acceptable limits and no action is required", "b. The product has failed final inspection and must be scrapped", "c. The process is statistically out of control, indicating a special cause variation requiring immediate corrective action", "d. Minor variations are normal and should be logged for reference but not acted upon"],
            correct: "c. The process is statistically out of control, indicating a special cause variation requiring immediate corrective action"
        },
        {
            question: "What is the main goal of a Marketing Information System?",
            options: ["a. To design new marketing strategies without data", "b. To collect and send marketing data to the sales team once a year", "c. To regularly gather, analyze, and share marketing data for better decisions", "d. To replace marketing managers with automated software"],
            correct: "c. To regularly gather, analyze, and share marketing data for better decisions"
        }
    ],
    6: [
        {
            question: "Which step comes first in the marketing research process?",
            options: ["a. Analyze data", "b. Collect information", "c. Define the problem", "d. Present findings"],
            correct: "c. Define the problem"
        },
        {
            question: "What is the main function of a pricing sub-system in a marketing information system?",
            options: ["a. To track customer complaints related to pricing", "b. To manage invoices and billing errors", "c. To support pricing decisions using analytics and industry data", "d. To promote discounts and loyalty programs automatically"],
            correct: "c. To support pricing decisions using analytics and industry data"
        },
        {
            question: "Which step typically comes just before invoicing in the order-to-cash cycle?",
            options: ["a. Order entry", "b. Payment receipt", "c. Shipping", "d. Credit approval"],
            correct: "c. Shipping"
        },
        {
            question: "Which of the following is not typically part of the Sales Order Processing cycle?",
            options: ["a. Order entry", "b. Credit check", "c. Invoice generation", "d. Product design"],
            correct: "d. Product design"
        },
        {
            question: "Which of the following best represents a tactical use of information in finance and accounting systems?",
            options: ["a. Long-term investment planning", "b. Real-time transaction recording", "c. Monitoring budgets vs. expenses", "d. Designing new financial software"],
            correct: "c. Monitoring budgets vs. expenses"
        },
        {
            question: "What does accounts payable represent?",
            options: ["a. Money owed to the business", "b. Business expenses already paid", "c. Money the business owes", "d. Revenue earned"],
            correct: "c. Money the business owes"
        },
        {
            question: "In order to retain high performers, it is necessary to know how people feel about their:",
            options: ["a. Work environments", "b. Their compensations", "c. Growth prospects", "d. All of these"],
            correct: "d. All of these"
        },
        {
            question: "A mid-sized tech company expands rapidly across states and faces penalties for not aligning hiring practices and employee data policies with local labor law. The HR department initiates a comprehensive compliance review and implements a centralized tracking system for labor regulations. What key aspect of HR management does this situation highlight?",
            options: ["a. Talent acquisition optimization", "b. Strategic workforce planning", "c. Legal risk mitigation through HR compliance", "d. Performance-based incentive restructuring"],
            correct: "c. Legal risk mitigation through HR compliance"
        },
        {
            question: "Which of the following best defines recruitment in the context of strategic human resource management?",
            options: ["a. A one-time process of selecting the most qualified candidates from a predefined pool", "b. A reactive administrative function focused on filling current job openings quickly", "c. A continuous process of attracting, shortlisting, and engaging potential talent aligned with organizational goals", "d. A compliance-driven activity that ensures equal employment opportunities during onboarding"],
            correct: "c. A continuous process of attracting, shortlisting, and engaging potential talent aligned with organizational goals"
        },
        {
            question: "An HR team uses data on employee performance, turnover trends, and hiring metrics to improve retention strategies. Which system is primarily being applied in this scenario?",
            options: ["a. Payroll management system", "b. HR analytics system", "c. Attendance tracking system", "d. Enterprise Resource Planning (ERP)"],
            correct: "b. HR analytics system"
        }
    ],
    7: [
        {
            question: "According to Michael Porter's Generic Strategies framework, which of the following most accurately distinguishes the three fundamental strategies for achieving long-term competitive advantage?",
            options: ["a. Operational excellence, product innovation, and market expansion", "b. Cost leadership, product enhancement, and segmentation dominance", "c. Lowest cost, product uniqueness, and niche market focus", "d. Economies of scale, brand loyalty, and customer service efficiency"],
            correct: "c. Lowest cost, product uniqueness, and niche market focus"
        },
        {
            question: "Which of the following is not one of Porter's Five Competitive Forces that shape industry competition?",
            options: ["a. Threat of new entrants", "b. Bargaining power of buyers", "c. Intensity of internal marketing efforts", "d. Threat of substitute products or services"],
            correct: "c. Intensity of internal marketing efforts"
        },
        {
            question: "Which of the following scenarios best represents a business using a focus strategy?",
            options: ["a. A mobile brand offering basic phones at the lowest price across global markets", "b. A fashion label selling custom-designed wedding attire only to high-income clients in one metro city", "c. A cloud storage company offering free plans to attract the largest user base worldwide", "d. A car manufacturer known for luxury features in all its models across multiple continents"],
            correct: "b. A fashion label selling custom-designed wedding attire only to high-income clients in one metro city"
        },
        {
            question: "Which of the following uses of information systems best support a cost focus strategy?",
            options: ["a. A CRM system used by a luxury interior design firm to offer personalized experiences to select clients", "b. A cloud-based ERP used by a local discount retailer to optimize inventory and reduce operating costs", "c. An AI-driven design tool used by a niche fashion brand to launch limited-edition products", "d. A business intelligence dashboard used by a gourmet coffee chain to track premium customer preferences"],
            correct: "b. A cloud-based ERP used by a local discount retailer to optimize inventory and reduce operating costs"
        },
        {
            question: "Which of the following best represents a complete and accurate grouping of information system infrastructure components?",
            options: ["a. User interface, applications, storage devices, and encryption software", "b. Hardware, software, data, and business process workflows", "c. Hardware, software, network, and data", "d. Servers, cloud storage, ERP systems, and IT personnel"],
            correct: "c. Hardware, software, network, and data"
        },
        {
            question: "Which of the following does not represent one of the core perspectives in a traditional Balanced Scorecard framework?",
            options: ["a. Financial", "b. Customer", "c. Operational risk", "d. Learning and growth"],
            correct: "c. Operational risk"
        },
        {
            question: "A company's Balanced Scorecard reveals the following: Customer Perspective: Low satisfaction and declining retention, Internal Processes: Inefficiencies in order fulfilment, Financial Perspective: Stable revenue but high operational costs, Learning and Growth: Limited employee training and outdated systems. Based on the Balanced Scorecard findings, which strategic focus should the company prioritize?",
            options: ["a. Invest in short-term marketing campaigns to boost immediate sales", "b. Reduce headcount to lower operational expenses", "c. Enhance employee training and upgrade internal systems to drive long-term improvement", "d. Expand into new geographic markets to grow the customer base quickly"],
            correct: "c. Enhance employee training and upgrade internal systems to drive long-term improvement"
        },
        {
            question: "Which of the following best captures the relationship between data centres, virtualization, and cloud computing?",
            options: ["a. Cloud computing replaces the need for data centres and virtualization entirely", "b. Virtualization enables multiple cloud providers to share physical hardware without a data centre", "c. Data centres provide the physical infrastructure, virtualization allows resource abstraction, and cloud computing delivers services built on both", "d. Virtualization is a type of cloud computing that runs without physical infrastructure in a data centre"],
            correct: "c. Data centres provide the physical infrastructure, virtualization allows resource abstraction, and cloud computing delivers services built on both"
        },
        {
            question: "Which of the following statements best distinguishes a private cloud from a public cloud?",
            options: ["a. Private cloud services are always free, while public cloud services are subscription-based", "b. Private cloud offers shared access across multiple organizations, while public clouds are for single internal use only", "c. Private clouds are dedicated to a single organization with greater control, while public clouds are shared environments hosted by third-party providers", "d. Public clouds can't scale resources dynamically, whereas private clouds always allow auto-scaling"],
            correct: "c. Private clouds are dedicated to a single organization with greater control, while public clouds are shared environments hosted by third-party providers"
        },
        {
            question: "A tech startup is building a custom mobile app. They want to focus on coding and app functionality without managing servers, operating systems, or underlying infrastructure. However, they still need flexibility to deploy and test different builds frequently. Which cloud service model best fits their requirements?",
            options: ["a. Infrastructure as a Service (IaaS)---to manage their own servers and storage in detail", "b. Software as a Service (SaaS)---to use a prebuilt application with no customization", "c. Platform as a Service (PaaS)---to develop and deploy apps without handling infrastructure", "d. Disaster Recovery as a Service (DRaaS)---to back up their source code during development"],
            correct: "c. Platform as a Service (PaaS)---to develop and deploy apps without handling infrastructure"
        }
    ],
    8: [
        {
            question: "Which of the following best differentiates e-commerce and e-business?",
            options: ["a. E-commerce includes both internal and external digital processes, while e-business is limited to buying and selling online", "b. E-business is a subset of e-commerce that focuses only on digital transactions", "c. E-commerce refers specifically to online buying and selling, while e-business includes all digital business processes", "d. E-business is primarily concerned with logistics, whereas e-commerce is only about financial transactions"],
            correct: "c. E-commerce refers specifically to online buying and selling, while e-business includes all digital business processes"
        },
        {
            question: "Indiamart.com is an example of which type of e-commerce?",
            options: ["a. B2C", "b. B2B", "c. C2C", "d. None"],
            correct: "b. B2B"
        },
        {
            question: "Which of the following best distinguishes personalization and customization in the context of e-commerce?",
            options: ["a. Personalization is done manually by users, while customization is automated by the system", "b. Personalization is system-driven based on user behavior, while customization is user-driven based on preferences or choices", "c. Customization uses algorithms to predict behavior, while personalization requires users to set their own preferences", "d. Customization involves system-driven product recommendations, while personalization involves feature changes chosen by users"],
            correct: "b. Personalization is system-driven based on user behavior, while customization is user-driven based on preferences or choices"
        },
        {
            question: "Which of the following is a genuine security issue in e-commerce?",
            options: ["a. Product listing errors and fake reviews", "b. Server downtime and slow website speed", "c. Unauthorized access to customer payment data", "d. Poor product packaging and damaged delivery"],
            correct: "c. Unauthorized access to customer payment data"
        },
        {
            question: "Which of the following best describes the content provider business model, as seen in examples like HBR, WSJ.com, and CNN.com?",
            options: ["a. They offer digital tools for business automation and charge transaction fees", "b. They sell physical products directly to consumers via digital marketplace", "c. They provide information and entertainment content, generating revenues through advertising, subscription, and affiliate fees", "d. They operate logistics platforms and earn mainly from fulfilment charges"],
            correct: "c. They provide information and entertainment content, generating revenues through advertising, subscription, and affiliate fees"
        },
        {
            question: "Which of the following correctly matches a type of net marketplace with its primary characteristics?",
            options: ["a. E-distributor --- used for long-term sourcing of direct inputs in vertical markets", "b. Industry Consortia --- used for spot purchasing in horizontal markets", "c. Independent Exchange --- focused on spot purchasing of direct inputs", "d. E-procurement --- designed for short-term procurement of indirect goods"],
            correct: "c. Independent Exchange --- focused on spot purchasing of direct inputs"
        },
        {
            question: "Match the type of net marketplaces with their examples: 1. E-distributor, 2. Independent exchange, 3. E-procurement, 4. Industry Consortia. Options: A) SupplyOn, TheSeam, B) Grainger, Amazon Business, C) Powersourceonline, G02Paper, D) Ariba Supplier Network. Choose the correct match:",
            options: ["a) 3--D, 1--C, 2--A", "b) 3--D, 1--A, 2--C", "c) 3--D, 1--B, 2--C, 4--A", "d) 3--D, 1--C, 2--C, 4--A"],
            correct: "a) 3--D, 1--C, 2--A"
        },
        {
            question: "Which of the following is a key disadvantage of using crowdsourcing or crowdfunding for a new product or business idea?",
            options: ["a) It guarantees large-scale funding without any marketing", "b) It ensures full ownership of the product remains with the creator", "c) It may lead to loss of control or idea theft due to early public exposure", "d) It allows only private investors to participate in funding rounds"],
            correct: "c) It may lead to loss of control or idea theft due to early public exposure"
        },
        {
            question: "What is the primary business model of coupon-based platforms like Groupon?",
            options: ["a) Selling digital products with subscription fees", "b) Offering full-price products through online retail", "c) Promoting discounted deals from local businesses and earning commission", "d) Running paid advertisements for e-commerce giants only"],
            correct: "c) Promoting discounted deals from local businesses and earning commission"
        },
        {
            question: "What is the main difference between social commerce and mobile commerce?",
            options: ["a) Social commerce happens on mobile apps only; mobile commerce is only on websites", "b) Social commerce uses social media to sell; mobile commerce uses mobile devices to sell", "c) Social commerce works offline; mobile commerce needs internet", "d) Social commerce uses QR codes; mobile commerce does not"],
            correct: "b) Social commerce uses social media to sell; mobile commerce uses mobile devices to sell"
        }
    ],
    9: [
        {
            question: "Match each cloud deployment model with the most appropriate example: 1. Private Cloud, 2. Public Cloud, 3. Community Cloud, 4. Hybrid Cloud. Options: A) A government department using a shared cloud with other public agencies, B) A bank using its own dedicated on-premise cloud infrastructure, C) A startup using services from AWS or Google Cloud, D) A company using both on-premise servers and AWS cloud storage. Choose the correct match:",
            options: ["a) 1--B, 2--C, 3--A, 4--D", "b) 1--C, 2--B, 3--D, 4--A", "c) 1--A, 2--C, 3--B, 4--D", "d) 1--D, 2--A, 3--C, 4--B"],
            correct: "a) 1--B, 2--C, 3--A, 4--D"
        },
        {
            question: "Which of the following correctly matches the cloud service models with what they provide?",
            options: ["a) IaaS --- Software apps | PaaS --- Servers | SaaS --- Development tools", "b) IaaS --- Data centre services | PaaS --- Software development platform | SaaS --- Internet-based applications", "c) IaaS --- Web browser | PaaS --- Cloud storage | SaaS --- Hardware", "d) IaaS --- Applications | PaaS --- Data centres | SaaS --- Source code access"],
            correct: "b) IaaS --- Data centre services | PaaS --- Software development platform | SaaS --- Internet-based applications"
        },
        {
            question: "Which of the following is a key advantage of using a public cloud?",
            options: ["a) Complete physical control over servers", "b) High upfront investment in infrastructure", "c) Easy scalability and reduced cost for users", "d) Limited access to applications over the internet"],
            correct: "c) Easy scalability and reduced cost for users"
        },
        {
            question: "In the context of outsourced private cloud, which of the following statements is most accurate?",
            options: ["a) Only the cloud provider manages the single perimeter of security for both infrastructure and subscriber data", "b) Data security solely depends on the cloud subscriber's internal firewall and not on external communication", "c) The system relies on two distinct security perimeters --- one by the provider and one by the subscriber --- connected through a secured link", "d) Security is ensured by isolating the subscriber's system from the provider's infrastructure entirely"],
            correct: "c) The system relies on two distinct security perimeters --- one by the provider and one by the subscriber --- connected through a secured link"
        },
        {
            question: "A fast-growing retail company handles highly sensitive customer payment data that must comply with strict data protection laws. However, it also runs frequent marketing campaigns and data analytics that require large-scale computing resources during peak seasons. The company wants to optimize cost while maintaining strict security for core operations. Which cloud deployment model best suits this scenario?",
            options: ["a) Public cloud", "b) Private cloud", "c) Community cloud", "d) Hybrid cloud"],
            correct: "d) Hybrid cloud"
        },
        {
            question: "Which of the following best defines the Internet of Things (IoT)?",
            options: ["a) A network of mobile apps and cloud software designed to automate digital marketing decisions", "b) A collection of computers and smartphones connected via the internet to enable human communications", "c) A system of interrelated physical devices connected via the internet, capable of collecting and exchanging data without human intervention", "d) A virtual platform where cloud services and artificial intelligence work independently of any physical device"],
            correct: "c) A system of interrelated physical devices connected via the internet, capable of collecting and exchanging data without human intervention"
        },
        {
            question: "A large logistics company is struggling with frequent delays, poor inventory tracking, and vehicle maintenance issues. Management wants a solution that can provide real-time tracking of shipments, monitor warehouse conditions, and predict vehicle servicing needs --- all without requiring manual checks. Which technology would be the most appropriate solution to address all these issues?",
            options: ["a) Cloud Computing", "b) Artificial Intelligence", "c) Internet of Things (IoT)", "d) Blockchain"],
            correct: "c) Internet of Things (IoT)"
        },
        {
            question: "A global e-commerce platform tracks millions of user clicks per second, stores product reviews in text, image, and video formats, processes real-time pricing updates, verifies inconsistent product tags, and uses this information to personalize recommendations instantly. Which of the following best explains why this is a Big Data application?",
            options: ["a) Because it uses cloud-based systems to store product listings and manage inventory", "b) Because it deals with structured customer data stored in relational databases", "c) Because it involves large-scale, fast-moving, diverse, and sometimes unreliable data generating business insights", "d) Because it only uses pre-cleared, verified data for business analytics and reporting"],
            correct: "c) Because it involves large-scale, fast-moving, diverse, and sometimes unreliable data generating business insights"
        },
        {
            question: "Which technology is best described as a distributed and immutable ledger system that enables secure, transparent, and tamper-evident recording of transactions across a decentralized network?",
            options: ["a) Cloud Computing", "b) Artificial Intelligence", "c) Blockchain", "d) Internet of Things"],
            correct: "c) Blockchain"
        },
        {
            question: "Which of the following best distinguishes Virtual Reality (VR) from Augmented Reality (AR)?",
            options: ["a) VR enhances the real world with overlays; AR replaces the real world entirely", "b) VR immerses users in a fully digital environment; AR adds digital elements to the real world", "c) VR uses physical objects; AR works only with simulations", "d) VR requires no headset, while AR always uses a headset to block reality"],
            correct: "b) VR immerses users in a fully digital environment; AR adds digital elements to the real world"
        }
    ],
    10: [
        {
            question: "Which option correctly represents the progression from data to wisdom in a knowledge management system?",
            options: ["a) Information → Data → Wisdom → Knowledge", "b) Knowledge → Data → Information → Wisdom", "c) Data → Information → Knowledge → Wisdom", "d) Wisdom → Knowledge → Data → Information"],
            correct: "c) Data → Information → Knowledge → Wisdom"
        },
        {
            question: "Which of the following best describes the primary purpose of a Knowledge Management System in an organization?",
            options: ["a) To store and back up enterprise databases and documents securely", "b) To automate business processes through machine learning algorithms", "c) To capture, store, share, and apply organizational knowledge for better decision-making", "d) To monitor employee productivity using key performance indicators (KPIs)"],
            correct: "c) To capture, store, share, and apply organizational knowledge for better decision-making"
        },
        {
            question: "Which of the following correctly identifies the three major types of Knowledge Management Systems used in organizations?",
            options: ["a) Document processing tools, analytics platforms, business intelligence engines", "b) Enterprise-wide systems, knowledge work systems, intelligent techniques", "c) Decision support systems, transaction systems, neural networks", "d) Cloud-based systems, workflow tools, performance dashboards"],
            correct: "b) Enterprise-wide systems, knowledge work systems, intelligent techniques"
        },
        {
            question: "Which of the following best differentiates Expert Systems from Fuzzy Logic in the context of intelligent knowledge techniques?",
            options: ["a) Expert systems solve unstructured problems using vague rules; fuzzy logic captures structured human expertise using precise data", "b) Expert systems use approximate values; fuzzy logic uses binary decision trees only", "c) Expert systems encode expert knowledge through IF-THEN rules; fuzzy logic handles imprecise input by applying approximate reasoning", "d) Both expert systems and fuzzy logic require exact numeric values and cannot work with subjective inputs"],
            correct: "c) Expert systems encode expert knowledge through IF-THEN rules; fuzzy logic handles imprecise input by applying approximate reasoning"
        },
        {
            question: "Which of the following statements correctly defines and distinguishes between a Neural Network and a Genetic Algorithm?",
            options: ["a) Neural networks mimic population genetics, while genetic algorithms simulate brain neurons to predict values", "b) Neural networks process data using layered nodes inspired by the human brain, whereas genetic algorithms optimize solutions by simulating natural selection", "c) Neural networks use IF-THEN rules for decision making, while genetic algorithms use fuzzy logic to evolve over time", "d) Neural networks and genetic algorithms both rely on expert knowledge bases to make structured decisions"],
            correct: "b) Neural networks process data using layered nodes inspired by the human brain, whereas genetic algorithms optimize solutions by simulating natural selection"
        },
        {
            question: "A company's finance team runs routine payroll every month based on predefined salary, tax, and deduction formulas. Meanwhile, the marketing head is planning a new product launch and must decide on pricing, promotion strategy, and expected customer response. The HR department is choosing the best candidates using both test scores and interviews. Which of the following correctly matches each department's decision type?",
            options: ["a) Finance --- Unstructured, Marketing --- Structured, HR --- Semi-structured", "b) Finance --- Structured, Marketing --- Unstructured, HR --- Semi-structured", "c) Finance --- Semi-structured, Marketing --- Structured, HR --- Unstructured", "d) Finance --- Structured, Marketing --- Semi-structured, HR --- Structured"],
            correct: "b) Finance --- Structured, Marketing --- Unstructured, HR --- Semi-structured"
        },
        {
            question: "Which of the following best illustrates backward chaining as used in an expert system?",
            options: ["a) A medical diagnostic system starts with symptoms and uses rules to infer a possible disease", "b) A system for legal advice starts with a legal conclusion and works backward to check supporting evidence or conditions", "c) An industrial automation system monitors sensor data and triggers alerts based on predefined thresholds", "d) An email filter scans every message and flags it if it matches any spam rules from a database"],
            correct: "b) A system for legal advice starts with a legal conclusion and works backward to check supporting evidence or conditions"
        },
        {
            question: "Match the following systems with their correct system type: 1. Moodle, 2. SAP, 3. Amazon Order System, 4. IBM Watson. Options: A) LMS, ERP, TPS, DSS, B) KMS, ERP, MIS, DSS, C) TPS, KMS, D) LMS, ERP, TPS, MIS. Choose the correct match:",
            options: ["a) 1--LMS, 2--ERP, 3--TPS, 4--DSS", "b) 1--KMS, 2--ERP, 3--MIS, 4--DSS", "c) 1--TPS, 2--KMS, 3--TPS, 4--MIS", "d) 1--LMS, 2--ERP, 3--TPS, 4--MIS"],
            correct: "c) 1--TPS, 2--KMS, 3--TPS, 4--MIS"
        },
        {
            question: "Which of the following is a potential disadvantage of using Moodle as a Learning Management System?",
            options: ["a) Lacks flexibility in content customization and user roles", "b) Requires consistent internet access and technical support for optimal use", "c) Cannot support multimedia or interactive content", "d) Does not allow integration with other learning tools or plugins"],
            correct: "b) Requires consistent internet access and technical support for optimal use"
        },
        {
            question: "The CEO of a global manufacturing firm needs a system that allows her to track international market trends, monitor company-wide KPIs, and get high-level summaries of both internal operations and external economic indicators. She wants data presented through dashboards and visualization to support strategic decisions. Which of the following systems would best suit the CEO's needs?",
            options: ["a) Transaction Processing Systems (TPS)", "b) Management Information System (MIS)", "c) Executive Support System (ESS)", "d) Decision Support System (DSS)"],
            correct: "c) Executive Support System (ESS)"
        }
    ],
    11: [
        {
            question: "Which of the following best reflects an ethical issue amplified by the use of information systems in modern organizations?",
            options: ["a) Automating employee payroll to improve efficiency", "b) Tracking employee web activity without their consent", "c) Developing open-source software for public use", "d) Using cloud storage to increase data availability"],
            correct: "b) Tracking employee web activity without their consent"
        },
        {
            question: "A retail company integrates various customer data sources, including social media activity, purchase history, online behavior, and public databases. While screening a new employee, their system identifies an unexpected link between the candidate and a past fraud suspect --- not from any criminal record, but through shared addresses, mutual contacts, and travel history. Which system capability has the company most likely employed to identify this hidden association?",
            options: ["a) Expert System", "b) NORA", "c) DSS", "d) MIS"],
            correct: "b) NORA"
        },
        {
            question: "Which of the following best describes a technology that can track user behavior invisibly across websites, often without the user's knowledge?",
            options: ["a) Cookies", "b) Web Beacons", "c) Website Registration", "d) CAPTCHA"],
            correct: "b) Web Beacons"
        },
        {
            question: "In Information Systems, what is the primary effect or purpose of the Panoptican model?",
            options: ["a) To improve system speed by centralizing processing", "b) To ensure transparency in financial data reporting", "c) To promote conformity and discipline through perceived constant surveillance", "d) To decentralize user access for enhanced flexibility"],
            correct: "c) To promote conformity and discipline through perceived constant surveillance"
        },
        {
            question: "Which of the following correctly represents the three fundamental pillars of Information Security?",
            options: ["a) Confidentiality, Authenticity, Auditability", "b) Confidentiality, Availability, Accountability", "c) Confidentiality, Integrity, Availability", "d) Accuracy, Integrity, Accessibility"],
            correct: "c) Confidentiality, Integrity, Availability"
        },
        {
            question: "Which of the following correctly distinguishes Worms from Viruses in the context of malware?",
            options: ["a) Worms spread through USB devices, while viruses only infect web browsers", "b) Viruses require human action to spread, while worms replicate automatically over networks", "c) Viruses use pop-up messages to demand payment, while worms disable operating systems", "d) Worms attach to email attachments, while viruses can only affect hardware"],
            correct: "b) Viruses require human action to spread, while worms replicate automatically over networks"
        },
        {
            question: "Match each type of attack with the correct descriptions: Attack Type: A) Phishing, B) Spear Phishing, C) Pharming. Description: 1. Redirects users from legitimate websites to fake ones to steal data, 2. General deceptive emails sent to trick users into revealing sensitive information, 3. Targeted attack on specific individuals or organizations using personalized messages. Choose the correct match:",
            options: ["a) A--2, B--3, C--1", "b) A--1, B--2, C--3", "c) A--3, B--1, C--2", "d) A--2, B--1, C--3"],
            correct: "a) A--2, B--3, C--1"
        },
        {
            question: "Which of the following is not typically a component of a standard digital certificate?",
            options: ["a) Certificate owner's identifying information", "b) Certificate owner's private key", "c) Certificate validity period", "d) Digital signature of the issuing authority"],
            correct: "b) Certificate owner's private key"
        },
        {
            question: "Which of the following correctly pairs the security software with its primary function?",
            options: ["a) Norton --- Antispyware", "b) Malwarebytes --- Antivirus only", "c) Windows Defender --- Both Antivirus and Antispyware", "d) Adobe Reader --- Antivirus tool"],
            correct: "c) Windows Defender --- Both Antivirus and Antispyware"
        },
        {
            question: "A company suspects an employee of leaking confidential files. The IT team must retrieve deleted data from the employee's computer in a way that preserves it as valid evidence for legal proceedings. What is the most appropriate first step according to standard computer forensics practice?",
            options: ["a) Install new software on the suspect's computer and search for evidence", "b) Open and browse the employee's files to look for suspicious activity", "c) Use forensic tools to clone the hard drive and work on the duplicate for analysis", "d) Delete unrelated files to save time and focus only on recent documents"],
            correct: "c) Use forensic tools to clone the hard drive and work on the duplicate for analysis"
        }
    ],
    12: [
        {
            question: "Which of the following scenarios best represents political globalization?",
            options: ["a) A multinational company outsourcing its IT support to another country", "b) Youth worldwide adopting the same social media trends and music styles", "c) Governments collaborating on infrastructure projects like the Belt and Road Initiative", "d) Online retailers offering cross-border shopping and delivery"],
            correct: "c) Governments collaborating on infrastructure projects like the Belt and Road Initiative"
        },
        {
            question: "A multinational tech firm is expanding its operations into Asia, Europe, and South America. While product development decisions are still made at headquarters in the U.S., marketing strategies and customer service operations are handled independently by regional offices. The company wants to retain some global control while allowing regional flexibility. Which organizational structure best describes this company's current approach?",
            options: ["a) Centralized", "b) Coordinated", "c) Decentralized", "d) Outsourced"],
            correct: "c) Decentralized"
        },
        {
            question: "A global manufacturing company develops all its enterprise software and IT systems at its U.S. headquarters. Once developed, these systems are then deployed and operated independently by regional offices in Europe, Asia, and South America without further coordination or central oversight. Each regional office manages its own data, user access, and maintenance. Which type of systems configuration does this company most likely follow?",
            options: ["a) Centralized", "b) Duplicated", "c) Decentralized", "d) Networked"],
            correct: "b) Duplicated"
        },
        {
            question: "A multinational firm is shifting its payroll and HR processes to a centralized Shared Services Center located in another country. Which of the following is least likely to be a challenge related to change management in this transition?",
            options: ["a) Employee fear of role dilution due to process migration", "b) Difficulty in adjusting to reporting lines across cultures and geographies", "c) Legal barriers to international capital transfer", "d) Need for employees to adapt to new technologies and time zones"],
            correct: "c) Legal barriers to international capital transfer"
        },
        {
            question: "Which of the following activities does not typically belong to the transition phase after ERP implementation?",
            options: ["a) Transferring system knowledge from implementation team to support team", "b) Archiving and handing over project documentation", "c) Finalizing product pricing strategy for new market entry", "d) Planning for human resource reallocation post-implementation"],
            correct: "c) Finalizing product pricing strategy for new market entry"
        },
        {
            question: "Which of the following is not a primary function or benefit of the eCC Remote Knowledge Transfer Tool?",
            options: ["a) Facilitating live training through audio, video, and data channels", "b) Allowing remote collaboration between global teams for production issue resolution", "c) Automatically assigning roles and responsibilities within the support team", "d) Enabling recording and reuse of training sessions for future team onboarding and retraining"],
            correct: "c) Automatically assigning roles and responsibilities within the support team"
        },
        {
            question: "Which of the following is not one of Thomas Friedman's ten forces that flattened the world?",
            options: ["a) The fall of the Berlin Wall", "b) The introduction of supply chaining and insourcing", "c) The adoption of blockchain in global logistics", "d) The rise of uploading and in-forming by individuals"],
            correct: "c) The adoption of blockchain in global logistics"
        },
        {
            question: "A global retail giant implements an advanced IT system that connects its warehouses, suppliers, and stores in real time. It uses RFID to track inventory, practices Just-in-Time (JIT) delivery to reduce holding cost, and treats suppliers as partners in planning and forecasting. This model has helped the company maintain a competitive edge. What flattening force described by Thomas Friedman is best represented in this scenario?",
            options: ["a) Offshoring", "b) Insourcing", "c) Supply-chaining", "d) Uploading"],
            correct: "c) Supply-chaining"
        },
        {
            question: "Match each flattening force (Column A) with the correct description/example (Column B): Column A: A) Fall of the Berlin Wall, B) Workflow Software, C) Uploading, D) Offshoring. Column B: 1. Companies moving entire operations to another country, e.g., factories to China, 2. Open-source platforms like Wikipedia, Linux where users contribute content, 3. Enabled standardized digital collaboration across departments and geographies, 4. Opened Eastern Europe to global trade and capitalist systems. Choose the correct match:",
            options: ["a) A--4, B--3, C--2, D--1", "b) A--2, B--1, C--3, D--4", "c) A--1, B--4, C--2, D--3", "d) A--3, B--2, C--1, D--4"],
            correct: "d) A--3, B--2, C--1, D--4"
        },
        {
            question: "A global design team collaborates in real-time using Zoom, shares large files over cloud platforms, and communicates instantly through WhatsApp and Slack. Team members work from different continents using high-speed internet, VR-enabled tools, and mobile devices. Which of Friedman's flattening forces best describes this scenario?",
            options: ["a) Offshoring", "b) In-forming", "c) The Steroids", "d) Uploading"],
            correct: "c) The Steroids"
        }
    ]
};