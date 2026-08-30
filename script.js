/**
 * EZHILARASI K - PORTFOLIO INTERACTION & DATA SCRIPT
 * Complete data store strictly sourced from official resume & real dashboard screenshots
 */

// Full project data store (100% resume fidelity + Real Dashboard Images)
const projectsData = [
  {
    id: "cricket-dashboard",
    title: "ICC Women's Cricket Dashboard",
    category: "powerbi",
    featured: true,
    badge: "Power BI & DAX",
    badgeClass: "chip-cyan",
    image: "assets/dashboards/icc-womens-cricket.png",
    scope: "Multi-Tournament Analytics × Ball-by-Ball Data",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "KPI Scorecards"],
    description: "Designed a comprehensive analytics dashboard delivering match outcome trends, player performance radar, strike-rate vs economy comparisons, and phase-wise drill-downs across international tournaments.",
    metricsHighlight: "⚡ Real-time ball-by-ball KPIs & tournament form benchmarks",
    problemStatement: "Translating granular multi-match ball-by-ball cricket datasets into actionable team and player performance metrics for tactical insights and tournament trend analysis.",
    methodology: [
      "Extracted, cleaned, and structured ball-by-ball match feeds and player performance metrics across multiple tournament editions.",
      "Developed complex DAX measures for strike rate dynamics, bowling economy rates, dot-ball percentages, and partnership run-rate contributions.",
      "Engineered dynamic phase filtering (Powerplay, Middle Overs, Death Overs) with team head-to-head comparison cards.",
      "Created interactive radar charts, batting wagon-wheel summaries, and automated executive KPI scorecards."
    ],
    results: [
      "Transformed multi-year cricket performance datasets into an intuitive visual intelligence suite.",
      "Surfaced high-impact phase performance metrics enabling strategic evaluation of player form and match tempo."
    ]
  },
  {
    id: "churn-risk-prediction",
    title: "Customer Churn Prediction & Risk Analytics",
    category: "python",
    featured: true,
    badge: "Python & Machine Learning",
    badgeClass: "chip-violet",
    image: "assets/dashboards/customer-churn.png",
    liveUrl: "https://customer-churn-risk-dashboard-mxrzikt58xwst3gukfktv7.streamlit.app/",
    scope: "7,043 customer records × 21 attributes",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Streamlit"],
    description: "Built an end-to-end machine learning system to predict customer churn probability using Logistic Regression, KNN, Random Forest, and Gradient Boosting, with a live interactive Streamlit application.",
    metricsHighlight: "🎯 Low / Medium / High Risk Tiers + Actionable Retention Strategies",
    problemStatement: "Subscription-based businesses suffer revenue loss from preventable churn due to lack of early warning signals and granular risk segmentation.",
    methodology: [
      "Conducted extensive Exploratory Data Analysis (EDA) on 7,043 customer records across 21 demographic, service, and billing attributes.",
      "Implemented robust preprocessing pipelines: missing value imputation, one-hot encoding, and feature standard scaling.",
      "Trained and evaluated Logistic Regression, KNN, Random Forest, and Gradient Boosting models with hyperparameter tuning.",
      "Engineered customer risk scoring algorithms and deployed an interactive Streamlit dashboard allowing users to input profile parameters and generate instant churn probabilities with retention playbooks."
    ],
    results: [
      "Engineered automated customer risk classification into Low, Medium, and High Churn Risk.",
      "Identified critical churn drivers (tenure length, contract type, payment method, monthly charges) to empower targeted retention actions."
    ]
  },
  {
    id: "clv-churn-analytics",
    title: "Customer Lifetime Value & Churn Risk Analytics",
    category: "sql",
    featured: false,
    badge: "SQL & Excel",
    badgeClass: "chip-cyan",
    image: "assets/dashboards/customer-lifetime-value.png",
    scope: "7,043 customer records × 21 attributes",
    tech: ["SQL", "MySQL", "Excel", "Pivot Tables", "KPI Dashboards"],
    description: "Built an end-to-end Excel dashboard analyzing customer lifetime value and churn behavior across 7,000+ customer records. Wrote SQL queries to identify high-risk customer segments through KPI analysis.",
    metricsHighlight: "📊 7,000+ Customer Records Segmented for Retention Decisions",
    problemStatement: "Analyzing customer behavioral patterns and monetary contribution across cohorts to uncover churn risks without relying on black-box systems.",
    methodology: [
      "Authored complex SQL queries (aggregations, window functions, conditional CASE expressions) to extract and segment 7,000+ customer records.",
      "Calculated customer lifetime value (CLV) cohorts based on tenure, service subscriptions, and billing regularity.",
      "Designed dynamic Excel pivot tables, slicers, and conditional KPI scorecards to translate SQL findings into executive retention recommendations."
    ],
    results: [
      "Delivered an executive-ready Excel BI dashboard highlighting vulnerable revenue cohorts.",
      "Enabled business decision-makers to prioritize high-value at-risk customers for targeted retention campaigns."
    ]
  },
  {
    id: "retail-sales-powerbi",
    title: "Retail Sales Performance Dashboard",
    category: "powerbi",
    featured: false,
    badge: "Power BI",
    badgeClass: "chip-amber",
    image: "assets/dashboards/retail-sales.png",
    scope: "125M+ sales transactions × 10 columns",
    tech: ["Power BI", "DAX", "Data Modeling", "Big Data Analytics", "KPI Cards"],
    description: "Designed an interactive Power BI dashboard with dynamic filters and KPI cards to analyze sales trends and product performance at enterprise scale.",
    metricsHighlight: "🚀 125M+ Transactions Analyzed with Drill-Down Performance",
    problemStatement: "Processing and summarizing massive retail transactional datasets (125M+ records) efficiently without query lag or report degradation.",
    methodology: [
      "Optimized data modeling and relationships to handle high-cardinality retail transactions seamlessly.",
      "Formulated DAX measures for Year-over-Year (YoY) growth, category sales contribution, margin analysis, and regional performance.",
      "Built multi-level interactive drill-downs allowing stakeholders to zoom from continent/country levels down to individual SKU metrics."
    ],
    results: [
      "Enabled fast, drill-down business reporting on a massive 125M+ record retail dataset.",
      "Significantly reduced turnaround time required to surface trend-level and anomaly sales insights."
    ]
  },
  {
    id: "hospital-patient-tableau",
    title: "Hospital Patient Records Analysis Dashboard",
    category: "tableau",
    featured: false,
    badge: "Tableau & Excel",
    badgeClass: "chip-violet",
    image: "assets/dashboards/hospital-analysis.png",
    scope: "1,000 records × 10 attributes",
    tech: ["Tableau", "Excel", "Data Storytelling", "Healthcare KPIs", "Filters"],
    description: "Built an interactive Tableau dashboard analyzing patient admissions, disease distribution, and department performance using healthcare KPI cards and dynamic filters.",
    metricsHighlight: "🏥 Healthcare KPI Visualization & Department Utilization",
    problemStatement: "Hospital administrators needed clear visual storytelling to monitor patient throughput, department workload, and disease prevalence across demographics.",
    methodology: [
      "Cleaned and categorized healthcare records in Excel before loading into Tableau.",
      "Created dynamic visual stories incorporating admission rate trends, average length of stay (ALOS), and department occupancy rates.",
      "Integrated parameter controls and filter actions for non-technical hospital directors and department heads."
    ],
    results: [
      "Applied data storytelling techniques to communicate complex clinical operations clearly to non-technical stakeholders.",
      "Identified peak department utilization patterns to support better staff and bed allocation."
    ]
  },
  {
    id: "ecommerce-sales-sql",
    title: "E-Commerce Sales Analysis Dashboard",
    category: "sql",
    featured: false,
    badge: "SQL & Excel",
    badgeClass: "chip-cyan",
    image: "assets/dashboards/ecommerce-sales.png",
    scope: "9,994 records × 21 attributes",
    tech: ["SQL", "MySQL", "Excel", "Pivot Tables", "Revenue Analytics"],
    description: "Built a Pivot Table and chart-based dashboard for sales trends, customer behavior, and revenue analysis with custom KPI cards and automated business reports.",
    metricsHighlight: "📦 9,994 E-Commerce Orders Analyzed for Profitability & Delivery Insights",
    problemStatement: "Detecting profit leaks, shipping delays, and unprofitable product lines across customer segments and geographic regions.",
    methodology: [
      "Performed relational data modeling and SQL aggregation across orders, customers, products, and shipping tables.",
      "Built interactive Pivot Tables and chart widgets in Excel displaying revenue, profit margins, discount impacts, and top-selling categories.",
      "Generated structured KPI summary cards to accelerate weekly management reporting."
    ],
    results: [
      "Created KPI cards and business reports that improved reporting turnaround time and data consistency.",
      "Uncovered discount structures that caused negative profit margins in specific product sub-categories."
    ]
  },
  {
    id: "student-performance-ml",
    title: "Student Performance Prediction",
    category: "python",
    featured: false,
    badge: "Python & ML Regression",
    badgeClass: "chip-emerald",
    scope: "395 student records × 33 attributes",
    tech: ["Python", "Pandas", "Scikit-learn", "Regression Models", "RMSE / R²"],
    description: "Built a machine learning regression model to predict students' final academic performance (G3) using demographic, academic, study-time, attendance, and previous-grade features.",
    metricsHighlight: "📈 Evaluated using RMSE and R² Metrics across Linear & Decision Tree Models",
    problemStatement: "Predicting academic struggle early in the semester so educational institutions can intervene with tailored tutoring and student support.",
    methodology: [
      "Preprocessed the Mathematics dataset (395 students × 33 attributes), handling categorical encoding and feature scaling.",
      "Executed correlation analysis to identify the strongest predictors of final academic grades (G3).",
      "Trained, validated, and compared Linear Regression and Decision Tree Regression models using RMSE and R² evaluation metrics."
    ],
    results: [
      "Demonstrated how study time, parental education, absences, and historical grades (G1, G2) strongly govern student graduation outcomes.",
      "Established a reliable predictive benchmark for student performance forecasting."
    ]
  },
  {
    id: "crowdsync-vision-bi",
    title: "CrowdSync: Multi-Entrance Intelligent Monitoring System",
    category: "ai-iot",
    featured: false,
    badge: "Python, OpenCV & Power BI",
    badgeClass: "chip-amber",
    scope: "Real-time Computer Vision + Live BI Stream",
    tech: ["Python", "OpenCV", "Power BI", "Computer Vision", "Real-time Analytics"],
    description: "Developed an AI-based computer-vision crowd monitoring system for real-time people counting across multiple entrances paired with a live Power BI dashboard.",
    metricsHighlight: "👥 Multi-Entrance Real-Time People Counting & Live BI Visualization",
    problemStatement: "Managing safety and foot-traffic density across large facilities with multiple entry gates in real-time.",
    methodology: [
      "Implemented OpenCV video processing pipelines for object detection, boundary tracking, and multi-entrance count synchronization.",
      "Streamed live crowd metrics into a synchronized Power BI dashboard for central security monitoring.",
      "Integrated automated threshold alerts for high-density occupancy detection."
    ],
    results: [
      "Successfully demonstrated real-time synchronized counting across simultaneous entry vectors.",
      "Delivered an intuitive operational dashboard for facilities and security personnel."
    ]
  },
  {
    id: "smart-plant-iot",
    title: "IoT-Based Smart Plant Monitoring System",
    category: "ai-iot",
    featured: false,
    badge: "IoT & Microcontrollers",
    badgeClass: "chip-emerald",
    scope: "Hardware Sensor Array & Telemetry Logging",
    tech: ["IoT", "Sensors", "Microcontroller", "Embedded C", "Telemetry"],
    description: "Designed a real-time environmental monitoring system tracking soil moisture, ambient temperature, and humidity using IoT sensors.",
    metricsHighlight: "🌱 Continuous Microclimate & Soil Moisture Telemetry",
    problemStatement: "Preventing crop and botanical loss through automated microclimate telemetry and moisture monitoring.",
    methodology: [
      "Configured soil moisture, temperature, and humidity sensor probes with microcontroller firmware.",
      "Implemented real-time telemetry logging to evaluate environmental thresholds and trigger automated irrigation triggers."
    ],
    results: [
      "Achieved high telemetry reliability across varied soil and temperature conditions.",
      "Demonstrated practical sensor-to-data integration for smart agriculture."
    ]
  },
  {
    id: "fraud-detection-vcodez",
    title: "Credit Card Fraud Detection System",
    category: "python",
    featured: false,
    badge: "Data Science (VCODEZ)",
    badgeClass: "chip-rose",
    scope: "Real Transaction-Level Dataset",
    tech: ["Python", "Data Preprocessing", "Feature Engineering", "Imbalanced Data", "Machine Learning"],
    description: "Built an end-to-end credit card fraud detection model in Python during internship at VCODEZ, covering data preprocessing, feature engineering, and transaction pattern modeling.",
    metricsHighlight: "💳 High Precision Detection on Heavily Imbalanced Transaction Data",
    problemStatement: "Detecting ultra-rare fraudulent transactions in high-frequency financial streams without flagging legitimate customer purchases.",
    methodology: [
      "Cleaned and preprocessed large transaction streams, handling skewness, feature scaling, and class imbalance.",
      "Engineered transaction velocity and amount discrepancy features to expose suspicious behavioral patterns.",
      "Evaluated model performance using precision, recall, and PR-AUC curves tailored for anomaly detection."
    ],
    results: [
      "Delivered one complete, real-world data science project end-to-end.",
      "Strengthened applied Python, anomaly detection, and machine-learning skills for high-stakes business environments."
    ]
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectsFilter();
  initModal();
  initCounters();
  initCopyActions();
  initThemeToggle();
});

// 1. Navbar Scroll & Mobile Menu
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveNav();
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      const icon = mobileBtn.querySelector('span');
      if (icon) {
        icon.textContent = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
      }
    });

    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
        const icon = mobileBtn.querySelector('span');
        if (icon) icon.textContent = '☰';
      });
    });
  }
}

// Active navigation highlight on scroll
function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset + 120;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add('active');
    } else {
      if (navLink) navLink.classList.remove('active');
    }
  });
}

// 2. All Projects Filter & Search
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearch');
  const gridContainer = document.getElementById('projectsGrid');

  if (!gridContainer) return;

  // Render initial all projects
  renderProjects(projectsData);

  // Filter tab click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

      applyFilters(filterValue, searchTerm);
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeBtn = document.querySelector('.filter-btn.active');
      const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
      const searchTerm = e.target.value.toLowerCase().trim();

      applyFilters(filterValue, searchTerm);
    });
  }
}

function applyFilters(category, searchTerm) {
  const filtered = projectsData.filter(proj => {
    const matchesCategory = (category === 'all') || (proj.category === category) || 
      (category === 'powerbi' && (proj.category === 'powerbi' || proj.tech.includes('Power BI'))) ||
      (category === 'sql' && (proj.category === 'sql' || proj.tech.includes('SQL') || proj.tech.includes('MySQL'))) ||
      (category === 'python' && (proj.category === 'python' || proj.tech.includes('Python'))) ||
      (category === 'excel' && (proj.tech.includes('Excel') || proj.tech.includes('Pivot Tables'))) ||
      (category === 'tableau' && (proj.category === 'tableau' || proj.tech.includes('Tableau'))) ||
      (category === 'ai-iot' && (proj.category === 'ai-iot' || proj.tech.includes('IoT') || proj.tech.includes('OpenCV')));

    const matchesSearch = !searchTerm || 
      proj.title.toLowerCase().includes(searchTerm) ||
      proj.description.toLowerCase().includes(searchTerm) ||
      proj.tech.some(t => t.toLowerCase().includes(searchTerm)) ||
      proj.scope.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  renderProjects(filtered);
}

function renderProjects(projectsList) {
  const gridContainer = document.getElementById('projectsGrid');
  if (!gridContainer) return;

  if (projectsList.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 0.75rem;">No projects found matching your query.</p>
        <button class="btn btn-sm btn-outline-cyan" onclick="resetFilters()">Reset Filter</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = projectsList.map(proj => `
    <article class="project-card" data-project-id="${proj.id}">
      
      <!-- Real Dashboard Image Header (or Sleek Banner) -->
      ${proj.image ? `
        <div class="card-image-wrap" onclick="openProjectModal('${proj.id}')" title="Click to view full dashboard details">
          <img src="${proj.image}" alt="${proj.title} Dashboard Preview" loading="lazy">
        </div>
      ` : `
        <div class="card-no-img-header">
          <span class="project-type-chip ${proj.badgeClass || 'chip-cyan'}">${proj.badge}</span>
          <span class="project-scope-tag">${proj.scope.split('×')[0] || proj.scope}</span>
        </div>
      `}

      <div class="card-content-body">
        <div>
          ${proj.image ? `
            <div class="project-top-row" style="margin-bottom: 0.6rem;">
              <span class="project-type-chip ${proj.badgeClass || 'chip-cyan'}">${proj.badge}</span>
              <span class="project-scope-tag">${proj.scope.split('×')[0] || proj.scope}</span>
            </div>
          ` : ''}
          <h3 class="project-title" style="margin-bottom: 0.6rem;">${proj.title}</h3>
          <p class="project-description">${proj.description}</p>
        </div>

        <div>
          <div class="project-key-metrics" style="margin-bottom: 1rem;">
            ${proj.metricsHighlight}
          </div>
          <div class="project-tags" style="margin-bottom: 1.2rem;">
            ${proj.tech.slice(0, 4).map(t => `<span class="chip">${t}</span>`).join('')}
            ${proj.tech.length > 4 ? `<span class="chip">+${proj.tech.length - 4} more</span>` : ''}
          </div>
          <div class="project-footer">
            ${proj.liveUrl ? `
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-live-app" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
                <span>⚡ Live App ↗</span>
              </a>
            ` : `
              <span style="font-size: 0.76rem; color: var(--text-muted); font-family: var(--font-mono);">${proj.scope}</span>
            `}
            <button class="btn-detail-link" onclick="openProjectModal('${proj.id}')">
              Deep Dive <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

window.resetFilters = function() {
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) searchInput.value = '';
  const firstBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (firstBtn) firstBtn.click();
};

// 3. Project Detail Modal with Dashboard Screenshot Preview
function initModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

window.openProjectModal = function(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  const modalBackdrop = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalScope = document.getElementById('modalScope');
  const modalImageContainer = document.getElementById('modalImageContainer');
  const modalProblem = document.getElementById('modalProblem');
  const modalMethodology = document.getElementById('modalMethodology');
  const modalResults = document.getElementById('modalResults');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalLiveActions = document.getElementById('modalLiveActions');

  if (modalTitle) modalTitle.textContent = proj.title;
  if (modalBadge) {
    modalBadge.textContent = proj.badge;
    modalBadge.className = `project-type-chip ${proj.badgeClass || 'chip-cyan'}`;
  }
  if (modalScope) modalScope.textContent = `Scope: ${proj.scope}`;
  
  // High-Resolution Dashboard Preview in Modal
  if (modalImageContainer) {
    if (proj.image) {
      modalImageContainer.style.display = 'block';
      modalImageContainer.innerHTML = `
        <div class="modal-dashboard-preview-box">
          <img src="${proj.image}" alt="${proj.title} Full Dashboard Screenshot">
        </div>
      `;
    } else {
      modalImageContainer.style.display = 'none';
      modalImageContainer.innerHTML = '';
    }
  }

  if (modalProblem) modalProblem.textContent = proj.problemStatement || proj.description;
  
  if (modalMethodology) {
    modalMethodology.innerHTML = proj.methodology.map(m => `<li>${m}</li>`).join('');
  }

  if (modalResults) {
    modalResults.innerHTML = proj.results.map(r => `<li>${r}</li>`).join('');
  }

  if (modalTechStack) {
    modalTechStack.innerHTML = proj.tech.map(t => `<span class="chip chip-cyan">${t}</span>`).join('');
  }

  if (modalLiveActions) {
    if (proj.liveUrl) {
      modalLiveActions.style.display = 'block';
      modalLiveActions.innerHTML = `
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-live-app" style="width: 100%;">
          <span>🚀 Open Interactive Live Streamlit App ↗</span>
        </a>
      `;
    } else {
      modalLiveActions.style.display = 'none';
      modalLiveActions.innerHTML = '';
    }
  }

  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

function closeModal() {
  const modalBackdrop = document.getElementById('projectModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 4. Animated Metric Stat Counters
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          const isDecimal = counter.getAttribute('data-decimal') === 'true';
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeProgress;

            if (isDecimal) {
              counter.textContent = currentVal.toFixed(2) + suffix;
            } else {
              counter.textContent = Math.floor(currentVal) + suffix;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (isDecimal) {
                counter.textContent = target.toFixed(2) + suffix;
              } else {
                counter.textContent = target + suffix;
              }
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-strip');
  if (metricsSection) observer.observe(metricsSection);
}

// 5. Copy Actions with Interactive Feedback
function initCopyActions() {
  window.copyText = function(text, btnElement, label) {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btnElement.innerHTML;
      btnElement.innerHTML = `✓ Copied!`;
      btnElement.style.borderColor = 'var(--emerald-primary)';
      btnElement.style.color = 'var(--emerald-glow)';

      setTimeout(() => {
        btnElement.innerHTML = originalText;
        btnElement.style.borderColor = '';
        btnElement.style.color = '';
      }, 2200);
    }).catch(() => {
      alert(`Copied: ${text}`);
    });
  };

  // Contact Form Submission Mock
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>⏳ Sending Message...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<span>✓ Message Sent Successfully!</span>`;
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3500);
      }, 1000);
    });
  }
}

// 6. Theme Toggle
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('ezhilarasi_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ezhilarasi_theme', nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  toggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`);
}
