---
type: posts
title: Dhiren Vazirani's Portfolio

---

# Dhiren Vazirani - Portfolio

## Skills

Cloud Platforms: Microsoft Fabric, Azure (Data Factory, Synapse, Functions), AWS (EC2, S3, Lambda, RDS, API Gateway)
Data & Streaming: Apache Kafka, Apache Spark, dbt, ETL/ELT pipelines, dimensional modeling, star schema design
Programming & APIs: Python, FastAPI, Node.js, JavaScript, React, RESTful API development, OpenAPI standards
Databases: SQL Server, PostgreSQL, relational schema design, query optimization
DevOps & Automation: Git, GitLab CI/CD, Docker, automated testing frameworks
Monitoring & Performance: CloudWatch, performance tuning, database indexing

## Projects

### Github Data Tracker
*November 2025 – January 2026*

- Engineered a fully automated ETL pipeline using AWS Lambda, S3, and EventBridge to track and analyze global repository trends via the GitHub API
- Implemented a multi-stage data lake pattern, moving data from raw daily snapshots (Bronze) to processed weekly/monthly summaries (Silver/Gold) for efficient querying
- Architected the entire system to run at $0/month by leveraging AWS Free Tier limits, CloudFront edge caching, and a "scale-to-zero" compute model
- Optimized data retrieval and reprocessing by storing raw JSON snapshots in S3 partitioned by date (/YYYY/MM/DD/), ensuring data immutability and 100% fidelity
- Built a lean FastAPI/Mangum backend served through API Gateway, utilizing pre-aggregated data to deliver sub-second response times with zero read-time compute
- Developed a custom Lambda Layer (dts_utils) to share utility code across functions, promoting DRY principles and simplifying the deployment of extraction and aggregation logic
- Integrated production best practices including automated cron scheduling, API rate-limit handling, and comprehensive unit testing using pytest and moto

### Employee Management & Skills Tracking API
*September 2025 – October 2025*

- Architected and developed a microservice-based RESTful API using Spring Boot 3.2, Spring Data JPA, and PostgreSQL for comprehensive employee lifecycle management
- Implemented OAuth 2.0 authentication with JWT tokens, role-based authorization (RBAC), and rate limiting to secure API endpoints serving employee and skills data
- Optimized database queries with strategic indexing and Redis caching (Jedis client), reducing P95 latency from 200ms to 80ms for search operations
- Built CI/CD pipeline with GitHub Actions, Docker containerization, and automated testing (JUnit 5, Mockito) achieving 85% code coverage before deployment

### Sentiment Analysis for Cryptocurrencies using Neural Networks
*April 2024 – May 2024*

- Developed a cryptocurrency sentiment analysis tool for real-time insights from Twitter
- Applied Tweepy, NLTK, and TensorFlow to collect data, preprocess, and implement a neural network for accurate sentiment analysis
- Deployed a Flask API for practical use, showcasing proficiency in Python, machine learning, and deployment

### Movie Recommendation System
*December 2022 - January 2023*

- Engineered a Movie Recommendation System in Python using collaborative filtering and matrix factorization (SVD) techniques
- Applied User-Based and Item-Based collaborative filtering algorithms for personalized movie suggestions
- Efficiently managed and processed large datasets with NumPy and pandas

### Online Travel Reservation System
*October 2021 – December 2021*

- Designed and implemented a relational database system for an online reservation system
- Used HTML for the user interface and MySQL for the database server
- Worked in Java and JDBC for connectivity between the user interface and database server


## Experience

**Metrostar** **Software Engineer** **– Data/Backend**
Jan 2025 - Oct 2025  Reston, VA

- Led the integration of AI/ML algorithms into existing workflows
- Architected distributed ELT pipelines using Apache Spark (PySpar
- Built and optimized distributed ELT pipelines in Databricks and Apache Spark, processing 5M+ daily records with partition tuning and broadcast joins to improve throughput and reduce compute costs.k) on AWS EMR and Azure Synapse, processing 5M+ records daily with optimized partition strategies and broadcast joins.
- Developed data ingestion and transformation frameworks orchestrated with Apache Airflow, enabling reliable and observable data movement across Bronze, Silver, and Gold layers in Microsoft Fabric.
- Containerized and deployed Spark workloads on Kubernetes clusters, improving scalability and runtime consistency
- Engineered hybrid data storage solutions leveraging AWS S3 and on-prem MinIO, integrating structured and unstructured data for analytics pipelines.
- Created MIRA, an AI-driven talent-matching platform powered by GPT-4 and Azure Cognitive Search, using a RAG architecture to enable semantic querying of 1K+ employee profiles.
- Designed SQL-based data models and dimensional schemas to build analytics dashboards and improve query response times by 3x.
- Automated infrastructure provisioning and CI/CD workflows with Terraform and GitLab, reducing deployment time by 75% while ensuring reproducibility and compliance.

**PNC Bank - Data Analyst**
March 2024-July 2024 |  Pittsburgh, PA
- Designed and implemented ETL processes using Informatica for enterprise data warehouse loading, ensuring data quality and lineage across complex financial dataset
- Built dimensional data models supporting compliance and financial performance analytics, optimizing database performance through strategic indexing and query tuning
- Developed automated data ingestion solutions for JSON datasets, reducing manual processing time by 4+ hours daily
- Created interactive dashboards with dbt transformations and optimized SQL, enabling self-service analytics for stakeholders

### BNY Mellon - Data Scientist
*May 2023 - January 2024 | Pittsburgh, PA*

- Led the integration of AI/ML algorithms into existing workflows
- Optimized data storage, retrieval, and processing workflows using cloud platforms (AWS, Azure, GCP)
- Implemented a comprehensive data preprocessing pipeline
- Collaborated with cross-functional teams for cloud-based data solutions

### Comcast - Data Analyst Intern
*May 2022 - August 2022 | Mount Laurel, NJ*

- Developed Python scripts to search through datasets and locate missing records
- Maintained interactive dashboards and reports using data visualization tools (Tableau, Power BI)
- Wrote Python scripts to identify instances of data loss
- Implemented various queries in SQL Workbench to find and locate consistency errors in data

### Guardian Life - Middleware Engineering Intern
*June 2021 - August 2021 | Remote*

- Designed and tested an API proxy in Apigee
- Developed and maintained middleware solutions for efficient and secure communication and data exchange
- Assisted with support tickets in Apigee and Kafka Cloud environments
- Learned to scale middleware for millisecond response and manage multi-node run items

## Education

**Rutgers University, New Brunswick**
*September 2019-May 2023*
*New Brunswick, New Jersey*

- Bachelor of Science in Computer Science
- Minor in Quantitative Economics
- Minor in Data Science

Relevant Coursework:
- Data Structures
- Intro to Data Science
- Computer Architecture
- Intro to Computer Science Using Java
- DSGN&ANAL COMP ALGOR
- Software Methodology
- Internet Technology
- Data Management for Data Science





