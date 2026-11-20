document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('languageToggle');
  if (!button) return;

  const original = new Map();
  const remember = (selector) => [...document.querySelectorAll(selector)].forEach((el, i) => {
    if (!original.has(el)) original.set(el, el.innerHTML);
  });
  const set = (selector, values) => {
    const nodes = [...document.querySelectorAll(selector)];
    nodes.forEach((el, i) => { if (values[i] !== undefined) el.innerHTML = values[i]; });
  };

  const vi = {
    nav: ['Giới thiệu', 'Kinh nghiệm', 'Kỹ năng', 'Dự án', 'Chứng chỉ', 'Liên hệ'],
    headings: ['Về tôi', 'Kinh nghiệm làm việc', 'Kỹ năng chuyên môn', 'Dự án tiêu biểu', 'Chứng chỉ & Thành tựu', 'Kết nối với tôi'],
    intro: 'Xin chào, tôi là',
    role: 'Lập trình viên Full-Stack',
    hero: 'Tôi là <strong>kỹ sư Công nghệ thông tin, chuyên ngành Kỹ thuật phần mềm tại HUTECH</strong>, định hướng phát triển <strong>Full-Stack</strong> với kinh nghiệm thực tế trong xây dựng ứng dụng web và di động. Đam mê phát triển các giải pháp phần mềm có khả năng mở rộng, hiệu quả và thân thiện với người dùng; đồng thời không ngừng tìm hiểu công nghệ mới và nâng cao kỹ năng chuyên môn.',
    contactButton: 'Liên hệ với tôi',
    resume: 'Tải CV',
    about: 'Tôi là <strong>kỹ sư Công nghệ thông tin, chuyên ngành Kỹ thuật phần mềm</strong> tại <strong>Trường Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)</strong>, có kinh nghiệm thực tế phát triển <strong>ứng dụng web và di động full-stack</strong>. Nền tảng kỹ thuật của tôi bao gồm <strong>Java Spring Boot, ASP.NET Core, Node.js, React, PHP MVC, Flutter và Python (Flask/FastAPI)</strong>, cùng kinh nghiệm thiết kế, tích hợp <strong>RESTful API</strong> và làm việc với các hệ quản trị cơ sở dữ liệu quan hệ như <strong>SQL Server, MySQL và PostgreSQL</strong>.<br><br>Tôi đã hoàn thành <strong>hơn 4 dự án từ đầu đến cuối</strong> thuộc các lĩnh vực đặt tour, quản lý bất động sản, ứng dụng du lịch di động và website du lịch 3D. Qua đó, tôi tích lũy kinh nghiệm về <strong>quản lý cơ sở dữ liệu, tích hợp API, học máy, chức năng thời gian thực và trực quan hóa 3D</strong>.<br><br>Tôi yêu thích xây dựng các giải pháp phần mềm đáng tin cậy, có khả năng mở rộng và lấy người dùng làm trọng tâm. Với khả năng giải quyết vấn đề, thích nghi và tinh thần học hỏi liên tục, tôi mong muốn phát triển trở thành <strong>Full-Stack Developer</strong> và đóng góp vào những sản phẩm có giá trị trong môi trường kỹ thuật hợp tác.',
    experienceTitles: ['Lập trình viên Full-stack', 'Thực tập sinh Phân tích nghiệp vụ'],
    experienceBullets: [
      'Phát triển và bảo trì các chức năng của ứng dụng web nội bộ bằng ASP.NET Core và Node.js, tuân theo kiến trúc hệ thống và quy ước hiện có của dự án.',
      'Triển khai chức năng backend, nghiệp vụ và các RESTful API endpoint để hỗ trợ quy trình ứng dụng và tích hợp frontend.',
      'Phát triển các thành phần giao diện bằng React và tích hợp với API backend.',
      'Làm việc với cơ sở dữ liệu SQL, bao gồm PostgreSQL, thực hiện thao tác CRUD, quản lý dữ liệu ứng dụng và hỗ trợ tích hợp dữ liệu giữa các phân hệ.',
      'Tích hợp, kiểm tra API, điều tra hành vi bất thường và xử lý sự cố ở các lớp của ứng dụng.',
      'Sử dụng Git và GitHub cho quy trình phát triển theo nhánh, cộng tác mã nguồn và pull request.',
      'Tham gia quy trình CI/CD với GitHub Actions; kiểm tra kết quả build, test tự động, phân tích lỗi pipeline và bảo đảm thay đổi đáp ứng các bước kiểm tra chất lượng của repository.',
      'Chạy các bài kiểm thử liên quan, xem xét phản hồi triển khai và hoàn thiện thay đổi để cải thiện độ tin cậy, khả năng bảo trì.',
      'Rà soát yêu cầu nghiệp vụ và đối chiếu chức năng ứng dụng với quy trình, tiêu chí nghiệm thu đã xác định.',
      'Kiểm thử chức năng, luồng người dùng và quy tắc nghiệp vụ để xác minh ứng dụng hoạt động đúng kỳ vọng.',
      'Phát hiện, ghi nhận lỗi, vấn đề logic, trường hợp biên và điểm không nhất quán giữa hệ thống với tài liệu yêu cầu.',
      'Trao đổi phát hiện với nhóm phát triển, hỗ trợ làm rõ vấn đề và kiểm thử lại sau khi sửa lỗi.',
      'Góp phần cải thiện chất lượng sản phẩm bằng cách kiểm tra hành vi chức năng và tính nhất quán của tài liệu.'
    ],
    skillGroups: ['Ngôn ngữ lập trình', 'Phát triển Backend', 'Phát triển Frontend', 'Phát triển ứng dụng di động', 'Cơ sở dữ liệu', 'Công cụ phát triển', 'Thiết kế & Kiểm thử', 'Kỹ năng chuyên môn'],
    skillDescriptions: {
      'Spring Boot development':'Phát triển ứng dụng Spring Boot', '.NET development':'Phát triển .NET', 'MVC web development':'Phát triển web theo mô hình MVC', 'Flask / FastAPI APIs':'Xây dựng API với Flask / FastAPI',
      'Java web framework':'Framework web Java', 'Web API & MVC':'Web API và MVC', 'Express.js backend':'Backend với Express.js', 'API architecture':'Kiến trúc API',
      'Web structure':'Cấu trúc website', 'Responsive design':'Thiết kế tương thích đa thiết bị', 'Frontend logic':'Xử lý logic giao diện', 'Component-based UI development':'Phát triển giao diện theo component', '3D web rendering':'Hiển thị 3D trên web',
      'Cross-platform mobile':'Ứng dụng di động đa nền tảng', 'Flutter programming':'Lập trình Flutter', 'State management':'Quản lý trạng thái', 'Mobile API integration':'Tích hợp API cho ứng dụng di động',
      'Microsoft database':'Cơ sở dữ liệu Microsoft', 'Relational database':'Cơ sở dữ liệu quan hệ', 'Advanced database':'Cơ sở dữ liệu nâng cao',
      'Code editor':'Trình soạn thảo mã nguồn', 'Java & Spring Boot IDE':'IDE cho Java và Spring Boot', '.NET IDE':'IDE cho .NET', 'Mobile development':'Phát triển ứng dụng di động', 'Version control':'Quản lý phiên bản',
      'UI/UX design':'Thiết kế UI/UX', 'Design tool':'Công cụ thiết kế', 'API testing':'Kiểm thử API', 'API documentation':'Tài liệu API',
      'Collaboration':'Hợp tác nhóm', 'Interpersonal':'Giao tiếp cá nhân', 'Organization':'Tổ chức công việc', 'Adaptability':'Khả năng thích nghi', 'Analysis':'Phân tích', 'Productivity':'Năng suất làm việc'
    },
    projectLabels: ['Thời gian thực hiện:', 'Backend:', 'Frontend:', 'Mô tả:', 'Kết quả:'],
    certButton: 'Xem chứng chỉ',
    contactLead: 'Hãy liên hệ với tôi nếu bạn muốn hợp tác hoặc đơn giản là gửi một lời chào.',
    contactLabels: ['Email', 'Điện thoại', 'Địa chỉ'],
    footer: ['© 2026 TRAN BAO DUY. Bảo lưu mọi quyền.', 'Thiết kế & phát triển bởi Tran Bao Duy']
  };

  const nav = [...document.querySelectorAll('.navbar-nav .nav-link')];
  const headings = ['#about h2', '#experience h2', '#skills h2', '#projects h2', '#certificates h2', '#contact h2'];
  const originalState = {
    nav: nav.map(x => x.textContent),
    headings: headings.map(s => document.querySelector(s)?.innerHTML || ''),
    intro: document.querySelector('.intro')?.innerHTML || '',
    hero: document.querySelector('#hero .hero-content > p.fs-5')?.innerHTML || '',
    about: document.querySelector('#about .col-lg-9 p')?.innerHTML || '',
    role: document.querySelector('.role.typing')?.textContent || ''
  };
  const experienceCards = [...document.querySelectorAll('.experience-card')];
  const originalExpTitles = experienceCards.map(c => c.querySelector('h3')?.textContent || '');
  const originalExpBullets = [...document.querySelectorAll('.experience-card li')].map(x => x.textContent);
  const skillHeadings = [...document.querySelectorAll('#skills h4')];
  const originalSkillHeadings = skillHeadings.map(x => x.textContent);
  const skillDescriptions = [...document.querySelectorAll('.skill-card p')];
  const originalSkillDescriptions = skillDescriptions.map(x => x.textContent);
  const projectLabelNodes = [...document.querySelectorAll('#projects .card p strong')];
  const originalProjectLabels = projectLabelNodes.map(x => x.textContent);
  const contactHeadings = [...document.querySelectorAll('#contact .rounded h5')];
  const originalContactHeadings = contactHeadings.map(x => x.innerHTML);
  const footerPs = [...document.querySelectorAll('footer p')];
  const originalFooter = footerPs.map(x => x.innerHTML);
  let language = localStorage.getItem('portfolio-language') || 'en';

  function applyLanguage(lang) {
    const isVi = lang === 'vi';
    nav.forEach((x, i) => x.textContent = isVi ? vi.nav[i] : originalState.nav[i]);
    headings.forEach((s, i) => { const el = document.querySelector(s); if (el) el.innerHTML = isVi ? vi.headings[i] : originalState.headings[i]; });
    document.querySelector('.intro').textContent = isVi ? vi.intro : originalState.intro;
    document.querySelector('#hero .hero-content > p.fs-5').innerHTML = isVi ? vi.hero : originalState.hero;
    document.querySelector('#about .col-lg-9 p').innerHTML = isVi ? vi.about : originalState.about;
    document.querySelector('.btn-contact').textContent = isVi ? vi.contactButton : 'Contact Me';
    document.querySelector('.btn-download').textContent = isVi ? vi.resume : 'Download Resume';
    document.querySelectorAll('.experience-card h3').forEach((x,i) => x.textContent = isVi ? vi.experienceTitles[i] : originalExpTitles[i]);
    document.querySelectorAll('.experience-card li').forEach((x,i) => x.textContent = isVi ? (vi.experienceBullets[i] || originalExpBullets[i]) : originalExpBullets[i]);
    skillHeadings.forEach((x,i) => x.textContent = isVi ? vi.skillGroups[i] : originalSkillHeadings[i]);
    // Keep technical skill-card descriptions in English in both language modes.
    skillDescriptions.forEach((x,i) => x.textContent = originalSkillDescriptions[i]);
    // Keep all project-card content, including metadata labels and descriptions, in English.
    projectLabelNodes.forEach((x, i) => x.textContent = originalProjectLabels[i]);
    document.querySelectorAll('#certificates .btn').forEach(x => x.textContent = isVi ? vi.certButton : 'View Credential');
    document.querySelector('#contact .container > p').textContent = isVi ? vi.contactLead : 'Feel free to reach out for collaborations or just a friendly hello';
    contactHeadings.forEach((x,i) => { const key = originalContactHeadings[i].replace(/^[^A-Za-z]+/,'').trim(); const map = {Email:'Email',Phone:'Điện thoại',Address:'Địa chỉ'}; x.innerHTML = isVi ? originalContactHeadings[i].replace(key, map[key] || key) : originalContactHeadings[i]; });
    footerPs.forEach((x,i) => x.innerHTML = isVi ? vi.footer[i] : originalFooter[i]);
    document.querySelector('.role.typing').textContent = isVi ? vi.role : 'Full-Stack Developer';
    button.textContent = isVi ? '🇬🇧 English' : '🇻🇳 Tiếng Việt';
    button.setAttribute('aria-label', isVi ? 'Switch to English' : 'Chuyển sang tiếng Việt');
    document.documentElement.lang = isVi ? 'vi' : 'en';
    language = lang;
    localStorage.setItem('portfolio-language', lang);
  }

  button.addEventListener('click', () => applyLanguage(language === 'en' ? 'vi' : 'en'));
  applyLanguage(language);
});