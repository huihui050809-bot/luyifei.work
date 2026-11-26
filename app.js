const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const EMAIL='2997158189@qq.com';
let lang=localStorage.getItem('ly-language')==='zh'?'zh':'en', category='all', currentProject=null;
const copy={
  "en": {
    "skip": "Skip to works",
    "home": "HOME",
    "works": "WORKS",
    "about": "ABOUT",
    "contact": "CONTACT",
    "portfolio": "MARKETING · BRAND COMMUNICATION",
    "edition": "SELECTED WORKS / 01—06",
    "statement": "UNDERSTAND THE MARKET.<br>BRING IDEAS TO LIFE.",
    "intro": "With a background in Advertising, I focus on market trends, audience needs, and brand communication. By combining research, content planning, and visual communication, I aim to connect creative ideas with effective execution.",
    "explore": "EXPLORE SELECTED WORKS",
    "selected": "Selected works<span class=\"small-count\">(06)</span>",
    "worknote": "A FEW THINGS, MADE WITH INTENT.",
    "sample": "SIX SELECTED PROJECTS · ORIGINAL ARTWORK",
    "abouttitle": "ABOUT ME &amp; MARKETING.",
    "perspective": "PLANNING &amp; MARKETING PERSPECTIVE",
    "aboutlead": "UNDERSTANDING<br>MARKET NEEDS.<br>DELIVERING IDEAS.",
    "bio": "I’m Yifei Lu, with an academic background in Advertising. I’m interested in the connection between market insights, audience needs, and brand communication. My strengths include content planning, information organization, visual communication, and coordination, with the ability to contribute to research, creative development, promotional content, and project execution.",
    "disciplines": "AREAS OF EXPERTISE",
    "fields": "<li>Market Research &amp; Information Organization</li><li>Content Planning &amp; Copywriting</li><li>Brand Promotion &amp; Communication</li><li>Campaign Execution &amp; Coordination</li>",
    "tools": "SOFTWARE SKILLS",
    "next": "HAVE AN IDEA?",
    "conversation": "GREAT WORK STARTS WITH A CONVERSATION.",
    "together": "LET'S CREATE<br><span class=\"cta-second\">NEW POSSIBILITIES.</span>",
    "invitation": "One idea, one collaboration, or simply say hello.",
    "copyright": "© 2026 · THOUGHTFUL IDEAS, CONSIDERED DESIGN.",
    "backtop": "BACK TO TOP",
    "sayhello": "A NEW CONVERSATION",
    "hellotitle": "Let’s make<br><span>something matter.</span>",
    "mailnote": "This form opens your email app with a draft. Nothing is sent automatically.",
    "name": "YOUR NAME",
    "email": "YOUR EMAIL",
    "type": "PROJECT TYPE",
    "message": "TELL ME ABOUT YOUR IDEA",
    "draft": "OPEN EMAIL DRAFT",
    "direct": "Or email directly: 2997158189@qq.com",
    "lightboxhelp": "SCROLL / PINCH TO ZOOM · DRAG TO EXPLORE · ESC TO CLOSE",
    "all": "All",
    "brand": "Branding",
    "exhibition": "Exhibition",
    "space": "Spaces",
    "back": "BACK TO WORKS",
    "year": "YEAR",
    "scope": "DISCIPLINE",
    "concept": "SELECTED PROJECT",
    "original": "ORIGINAL ARTWORK",
    "actual": "ACTUAL SIZE",
    "view": "VIEW FULL IMAGE +",
    "previous": "PREVIOUS PROJECT",
    "nextproject": "NEXT PROJECT",
    "choose": "Select a project type",
    "other": "Other / Let’s discuss",
    "required": "Please complete all fields and enter a valid email address.",
    "draftstatus": "Email draft requested. Please send it from your email app. If no app opens, use the direct email link below.",
    "close": "Close",
    "openmenu": "Open menu",
    "closemenu": "Close menu",
    "zoomin": "Zoom in",
    "zoomout": "Zoom out",
    "reset": "Fit image",
    "previmage": "Previous image",
    "nextimage": "Next image",
    "navlabel": "Main navigation",
    "filterlabel": "Project categories",
    "viewproject": "View project",
    "board": "Project board",
    "cover": "Cover image",
    "experience": "I have participated in brand promotion projects, including KOC/KOL selection and communication coordination. I also independently completed an AIGC commercial visual design project, earning Second Prize. I aim to apply my experience in advertising and visual communication to market research, brand promotion, campaign planning, and project coordination, turning creative ideas into effective results.",
    "toolnames": "<li>Adobe Photoshop</li><li>Adobe Illustrator</li><li>Adobe Lightroom</li><li>Microsoft PowerPoint</li><li>Microsoft Excel<span class=\"skill-note\"> (Basic)</span></li>",
    "posterheadline": "FROM INSIGHT,<br>TO IMPACT.",
    "posterrole": "MARKETING / BRAND COMMUNICATION",
    "aboutmotto": "INSIGHT AS A STARTING POINT.<br>CREATIVITY AS A METHOD.<br>EXECUTION AS THE DRIVE.",
    "heroname": "LU YIFEI",
    "footername": "LU YIFEI",
    "homelabel": "LU YIFEI Home"
  },
  "zh": {
    "skip": "跳至作品",
    "home": "首页",
    "works": "作品",
    "about": "关于",
    "contact": "联系",
    "portfolio": "市场策划 · 品牌传播",
    "edition": "精选项目 / 01—06",
    "statement": "洞察市场需求，<br>让创意落地。",
    "intro": "以广告学为基础，关注市场动态、用户需求与品牌传播。结合信息整理、内容策划与视觉表达，参与品牌推广与活动执行，让创意从想法走向落地。",
    "explore": "浏览精选项目",
    "selected": "精选作品<span class=\"small-count\">(06)</span>",
    "worknote": "用心构想，细致呈现。",
    "sample": "六个精选案例 · 原始作品完整呈现",
    "abouttitle": "关于我，和市场。",
    "perspective": "策划与市场视角",
    "aboutlead": "理解市场需求，<br>让创意有效传达。",
    "bio": "我是卢奕霏，广告学专业背景，关注市场信息、用户需求与品牌传播之间的联系。具备内容策划、信息整理、视觉表达与沟通协调能力，能够围绕项目目标参与前期调研、创意构思、宣传内容制作及执行跟进。",
    "disciplines": "能力方向",
    "fields": "<li>市场调研与信息整理</li><li>内容策划与文案表达</li><li>品牌推广与传播</li><li>活动执行与项目协调</li>",
    "tools": "软件技能",
    "next": "有一个想法？",
    "conversation": "好的合作，从一次对话开始。",
    "together": "一起创造<br><span class=\"cta-second\">新的可能。</span>",
    "invitation": "一个想法，一次合作，或简单地打个招呼。",
    "copyright": "© 2026 · 用心思考，细致设计。",
    "backtop": "返回顶部",
    "sayhello": "开始一段新的对话",
    "hellotitle": "一起创造<br><span>有意义的设计。</span>",
    "mailnote": "填写后将打开邮件客户端并生成草稿，网站不会自动发送邮件。",
    "name": "你的姓名",
    "email": "你的邮箱",
    "type": "项目类型",
    "message": "聊聊你的想法",
    "draft": "打开邮件草稿",
    "direct": "或直接发邮件：2997158189@qq.com",
    "lightboxhelp": "滚轮 / 双指缩放 · 拖动查看 · ESC 关闭",
    "all": "全部",
    "brand": "品牌设计",
    "exhibition": "展陈设计",
    "space": "空间设计",
    "back": "返回作品",
    "year": "年份",
    "scope": "设计领域",
    "concept": "精选作品",
    "original": "原始作品",
    "actual": "原始像素",
    "view": "查看高清大图 +",
    "previous": "上一个项目",
    "nextproject": "下一个项目",
    "choose": "请选择项目类型",
    "other": "其他 / 一起讨论",
    "required": "请填写所有字段，并输入有效的邮箱地址。",
    "draftstatus": "已请求打开邮件草稿，请在邮件客户端中确认发送。如未打开，请使用下方邮箱链接。",
    "close": "关闭",
    "openmenu": "打开菜单",
    "closemenu": "关闭菜单",
    "zoomin": "放大",
    "zoomout": "缩小",
    "reset": "适应屏幕",
    "previmage": "上一张图片",
    "nextimage": "下一张图片",
    "navlabel": "主导航",
    "filterlabel": "作品分类",
    "viewproject": "查看项目",
    "board": "项目长展板",
    "cover": "项目封面",
    "experience": "曾参与品牌推广项目，负责 KOC/KOL 筛选与沟通对接；独立完成 AIGC 商业化视觉设计项目，并获得二等奖。希望将广告传播与视觉设计经验运用于市场调研、品牌推广、活动策划与项目协作，让创意不仅被看见，也能有效落地。",
    "toolnames": "<li>Adobe Photoshop</li><li>Adobe Illustrator</li><li>Adobe Lightroom</li><li>Microsoft PowerPoint</li><li>Microsoft Excel<span class=\"skill-note\">（基础应用）</span></li>",
    "posterheadline": "从洞察出发，<br>让创意落地。",
    "posterrole": "市场策划 / 品牌传播",
    "aboutmotto": "以市场为起点，以创意为方法，以执行推动结果。",
    "heroname": "卢奕霏",
    "footername": "卢奕霏",
    "homelabel": "卢奕霏 首页"
  }
};
const projects=[
  {
    "id": "technology-exhibition",
    "width": 9600,
    "height": 2460,
    "cat": "exhibition",
    "name": {
      "zh": "科技企业展陈设计",
      "en": "TECHNOLOGY EXHIBITION"
    },
    "desc": {
      "zh": "以科技企业的业务、产品与技术信息为内容，组织展墙中的信息层级与视觉动线。完整设计稿按原始比例呈现。",
      "en": "An exhibition graphic presenting a technology company’s business, products and technical information through a clear visual hierarchy. The complete artwork is presented in its original proportions."
    },
    "color": "#f6f6f4",
    "images": [
      {
        "src": "assets/technology-exhibition-p1.jpg",
        "width": 9600,
        "height": 2460
      }
    ]
  },
  {
    "id": "community-space",
    "width": 1080,
    "height": 1425,
    "cat": "space",
    "name": {
      "zh": "社区文化空间设计",
      "en": "COMMUNITY SPACE"
    },
    "desc": {
      "zh": "围绕邻里交流与社区生活，通过照片、文字与温暖色彩构建文化空间中的视觉表达。完整案例图片按原始比例呈现。",
      "en": "A community space bringing neighbourhood stories to life through photographs, typography and warm colours. The complete project image is presented in its original proportions."
    },
    "color": "#f6f6f4",
    "images": [
      {
        "src": "assets/community-space.jpg",
        "width": 1080,
        "height": 1425
      }
    ]
  },
  {
    "id": "party-branding",
    "width": 19996,
    "height": 2162,
    "cat": "brand",
    "name": {
      "zh": "党建品牌视觉设计",
      "en": "PARTY BRANDING"
    },
    "desc": {
      "zh": "将党建品牌、企业文化与业务信息融入连续展墙，建立统一的视觉识别与内容层级。完整设计稿按原始比例呈现。",
      "en": "A continuous display integrating party branding, corporate culture and business information into a unified visual system. The complete artwork is presented in its original proportions."
    },
    "color": "#f6f6f4",
    "images": [
      {
        "src": "assets/party-branding.png",
        "width": 19996,
        "height": 2162
      }
    ]
  },
  {
    "id": "smart-manufacturing",
    "width": 11635,
    "height": 1667,
    "cat": "exhibition",
    "name": {
      "zh": "智能制造展陈设计",
      "en": "SMART MANUFACTURING"
    },
    "desc": {
      "zh": "围绕制造工艺、装备、业绩与品牌内容，规划展陈版面的视觉节奏与信息结构。完整设计稿按原始比例呈现。",
      "en": "An exhibition graphic organising manufacturing processes, equipment, achievements and brand information into a coherent visual sequence. The complete artwork is presented in its original proportions."
    },
    "color": "#f6f6f4",
    "images": [
      {
        "src": "assets/smart-manufacturing.png",
        "width": 11635,
        "height": 1667
      }
    ]
  },
  {
    "id": "corporate-culture",
    "width": 15640,
    "height": 3178,
    "cat": "exhibition",
    "name": {
      "zh": "企业文化展厅设计",
      "en": "CORPORATE CULTURE"
    },
    "desc": {
      "zh": "围绕企业文化、产业布局与发展历程构建展厅视觉叙事，以连贯的图文系统串联内容。完整设计稿按原始比例呈现。",
      "en": "A corporate exhibition graphic connecting company culture, operations and growth history through a continuous visual narrative. The complete artwork is presented in its original proportions."
    },
    "color": "#f6f6f4",
    "images": [
      {
        "src": "assets/corporate-culture.jpg",
        "width": 15640,
        "height": 3178
      }
    ]
  },
  {
    "id": "elderly-care-space",
    "width": 1780,
    "height": 1280,
    "cat": "space",
    "name": {
      "zh": "养老服务空间设计",
      "en": "ELDERLY CARE SPACE"
    },
    "desc": {
      "zh": "以清晰的信息层级、柔和色彩与亲切图形呈现养老服务体系，让空间中的服务信息更易阅读。完整案例图片按原始比例呈现。",
      "en": "A care service display using clear information hierarchy, gentle colours and approachable graphics to make services easier to understand. The complete project image is presented in its original proportions."
    },
    "color": "#f6f6f4",
    "images": [
      {
        "src": "assets/elderly-care-space.jpg",
        "width": 1780,
        "height": 1280
      }
    ]
  }
];
const t=k=>copy[lang][k]||k, title=p=>p.name[lang], asset=(p,index=0)=>p.images[index].src;
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
function observe(){ $$('.reveal:not(.visible)').forEach(e=>observer.observe(e)); $$('img:not([data-wired])').forEach(img=>{img.dataset.wired='true';img.addEventListener('load',()=>img.classList.add('loaded'));if(img.complete)img.classList.add('loaded')})}
function renderCards(){
 $('#filters').innerHTML=['all','exhibition','space','brand'].map(c=>`<button data-filter="${c}" aria-pressed="${category===c}">${t(c)}</button>`).join('');
 $('#projects').innerHTML=projects.filter(p=>category==='all'||p.cat===category).map((p,i)=>{const image=p.images[0],shape=image.width/image.height>2?'panorama':image.width<image.height?'portrait':'landscape';return `<a class="project-card filter-enter" data-shape="${shape}" href="#project/${p.id}" aria-label="${t('viewproject')} — ${title(p)}" style="animation-delay:${i*55}ms"><div class="project-image" style="background:${p.color}"><img src="${asset(p)}" width="${image.width}" height="${image.height}" alt="${title(p)} — ${t('original')}" ${i<2?'fetchpriority="high"':'loading="lazy"'} decoding="async"></div><div class="project-meta"><div><h3 class="project-name"><span class="project-number">${String(projects.indexOf(p)+1).padStart(2,'0')}</span>${title(p)}</h3><p class="project-tags">${lang==='zh'?p.name.en:t(p.cat)}</p></div><span class="project-year">${image.width} × ${image.height} px <span aria-hidden="true">↗</span></span></div></a>`}).join('');observe()
}
function renderDetail(){if(!currentProject)return;const p=currentProject,i=projects.indexOf(p),prev=projects[(i+projects.length-1)%projects.length],next=projects[(i+1)%projects.length];$('#project-view').innerHTML=`<article class="project-page"><a href="#works" class="project-back">← ${t('back')}</a><h1>${title(p)}</h1>${lang==='zh'?'<p class="project-subtitle">'+p.name.en+'</p>':''}<div class="project-summary"><div class="project-facts"><div><h3>${t('scope')}</h3><p>${t(p.cat)}</p></div></div><p>${p.desc[lang]}</p></div><div class="detail-images">${p.images.map((image,n)=>`<button class="board-button" data-image="${n}" aria-label="${t('view')} — ${title(p)}"><img src="${image.src}" width="${image.width}" height="${image.height}" alt="${title(p)} — ${t('original')}" decoding="async"></button>`).join('')}</div><div class="detail-caption"><button class="detail-open" data-image="0">${t('view')}</button></div><div class="project-pagination"><a href="#project/${prev.id}"><span>${t('previous')}</span><h2>${title(prev)}</h2></a><a href="#project/${next.id}"><span>${t('nextproject')}</span><h2>${title(next)}</h2></a></div></article>`;observe()}

function setLanguage(){document.documentElement.lang=lang==='zh'?'zh-CN':'en';$('.wordmark').setAttribute('aria-label',t('homelabel'));$$('[data-i]').forEach(e=>e.innerHTML=t(e.dataset.i));$('#language').innerHTML=lang==='en'?'EN <span>/</span> 中':'中 <span>/</span> EN';$('#language').setAttribute('aria-label',lang==='en'?'切换至中文':'Switch to English');$('#navigation').setAttribute('aria-label',t('navlabel'));$('#filters').setAttribute('aria-label',t('filterlabel'));$('#menu').setAttribute('aria-label',t($('#menu').getAttribute('aria-expanded')==='true'?'closemenu':'openmenu'));$$('[data-close]').forEach(b=>b.setAttribute('aria-label',t('close')));[['zoomin','zoomin'],['zoomout','zoomout'],['zoomreset','reset'],['zoomactual','actual'],['image-prev','previmage'],['image-next','nextimage']].forEach(([id,k])=>$('#'+id).setAttribute('aria-label',t(k)));$('#contact-form [name=name]').placeholder=lang==='zh'?'你的姓名':'Your name';$('#contact-form [name=email]').placeholder='you@example.com';$('#contact-form textarea').placeholder=lang==='zh'?'项目的想法、需求与时间计划……':'Your idea, scope and timeline…';const selected=$('#project-type').value;$('#project-type').innerHTML=`<option value="">${t('choose')}</option>`+['exhibition','space','brand','other'].map(c=>`<option value="${c}">${t(c)}</option>`).join('');$('#project-type').value=selected;$('#form-error').textContent='';$('#form-status').textContent='';renderCards();renderDetail();document.title=`LU YIFEI — ${currentProject?title(currentProject):lang==='zh'?'精选作品':'Selected Works'}`;if($('#lightbox').open)loadLightbox()}
$('#language').onclick=()=>{lang=lang==='en'?'zh':'en';localStorage.setItem('ly-language',lang);setLanguage()};
$('#filters').onclick=e=>{const b=e.target.closest('[data-filter]');if(!b)return;category=b.dataset.filter;renderCards()};
function closeMenu(){$('#navigation').classList.remove('open');$('#menu').setAttribute('aria-expanded','false');$('#menu').setAttribute('aria-label',t('openmenu'))}
$('#menu').onclick=()=>{const open=$('#menu').getAttribute('aria-expanded')!=='true';$('#navigation').classList.toggle('open',open);$('#menu').setAttribute('aria-expanded',String(open));$('#menu').setAttribute('aria-label',t(open?'closemenu':'openmenu'))};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const reduce=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function scrollToSection(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:reduce()?'instant':'smooth',block:'start'})}
function route(){const hash=location.hash||'#home',match=hash.match(/^#project\/([\w-]+)$/);closeMenu();if(match){const p=projects.find(p=>p.id===match[1]);if(!p){location.hash='works';return}currentProject=p;$('#main-view').hidden=true;$('#project-view').hidden=false;renderDetail();window.scrollTo({top:0,behavior:'instant'});$$('#navigation a').forEach(a=>{a.classList.toggle('active',a.hash==='#works');a.toggleAttribute('aria-current',a.hash==='#works')})}else{currentProject=null;$('#main-view').hidden=false;$('#project-view').hidden=true;requestAnimationFrame(()=>scrollToSection(hash.slice(1)))}document.title=`LU YIFEI — ${currentProject?title(currentProject):lang==='zh'?'精选作品':'Selected Works'}`}
window.addEventListener('hashchange',route);document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a&&a.hash===location.hash){closeMenu();if(!a.hash.startsWith('#project')){e.preventDefault();scrollToSection(a.hash.slice(1))}else window.scrollTo({top:0,behavior:reduce()?'instant':'smooth'})}});
let scrollPending=false;window.addEventListener('scroll',()=>{if(scrollPending||currentProject)return;scrollPending=true;requestAnimationFrame(()=>{scrollPending=false;let active='home';['home','works','about','contact'].forEach(id=>{if($('#'+id).getBoundingClientRect().top<innerHeight*.4)active=id});$$('#navigation a').forEach(a=>{const yes=a.hash==='#'+active;a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})})},{passive:true});
let returnFocus=null;function showDialog(id){returnFocus=document.activeElement;$('#'+id).showModal();document.body.classList.add('locked')}function closeDialog(id){$('#'+id).close()}
$$('dialog').forEach(d=>{d.addEventListener('close',()=>{document.body.classList.remove('locked');returnFocus?.focus({preventScroll:true})});d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()})});
document.addEventListener('click',e=>{if(e.target.closest('[data-open-contact]'))showDialog('contact-dialog');const closer=e.target.closest('[data-close]');if(closer)closeDialog(closer.dataset.close);const image=e.target.closest('[data-image]');if(image){imageIndex=Number(image.dataset.image);showDialog('lightbox');loadLightbox()}});
$('#contact-form').addEventListener('input',e=>e.target.removeAttribute('aria-invalid'));
$('#contact-form').onsubmit=e=>{e.preventDefault();const f=e.currentTarget;let invalid=null;[...f.elements].filter(el=>el.required).forEach(el=>{const valid=el.checkValidity()&&el.value.trim().length>0;el.setAttribute('aria-invalid',String(!valid));if(!valid&&!invalid)invalid=el});if(invalid){$('#form-error').textContent=t('required');invalid.focus();return}$('#form-error').textContent='';const data=new FormData(f),subject=`${lang==='zh'?'项目咨询':'Project enquiry'} — ${t(data.get('type'))} — ${data.get('name')}`,body=`${t('name')}: ${data.get('name')}\n${t('email')}: ${data.get('email')}\n${t('type')}: ${t(data.get('type'))}\n\n${data.get('message')}`;location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;$('#form-status').textContent=t('draftstatus')};
let imageIndex=0,zoom=1,panX=0,panY=0,fitW=0,fitH=0;const pointers=new Map();let oldPinch=null;
function fitImage(){const img=$('#lightbox-image'),stage=$('#image-stage');if(!img.naturalWidth)return;const ratio=Math.min((stage.clientWidth-30)/img.naturalWidth,(stage.clientHeight-30)/img.naturalHeight);fitW=img.naturalWidth*ratio;fitH=img.naturalHeight*ratio;zoom=1;panX=panY=0;paintImage()}
function paintImage(){const stage=$('#image-stage'),img=$('#lightbox-image'),maxX=Math.max(0,(fitW*zoom-stage.clientWidth)/2)+Math.min(60,fitW*zoom*.1),maxY=Math.max(0,(fitH*zoom-stage.clientHeight)/2)+Math.min(60,fitH*zoom*.1);panX=Math.max(-maxX,Math.min(maxX,panX));panY=Math.max(-maxY,Math.min(maxY,panY));img.style.width=fitW+'px';img.style.height=fitH+'px';img.style.left=(stage.clientWidth-fitW)/2+'px';img.style.top=(stage.clientHeight-fitH)/2+'px';img.style.transform=`translate(${panX}px,${panY}px) scale(${zoom})`;$('#zoomreset').textContent=Math.round(fitW*zoom/($('#lightbox-image').naturalWidth||1)*100)+'%';$('#zoomout').disabled=zoom<=1;$('#zoomin').disabled=zoom>=maxZoom()}
function maxZoom(){return Math.max(20,Math.ceil(($('#lightbox-image').naturalWidth||1)/(fitW||1)))}
function changeZoom(value,clientX,clientY){const stage=$('#image-stage'),r=stage.getBoundingClientRect(),next=Math.min(maxZoom(),Math.max(1,value)),ratio=next/zoom,x=(clientX??r.left+r.width/2)-r.left-r.width/2,y=(clientY??r.top+r.height/2)-r.top-r.height/2;panX=x-(x-panX)*ratio;panY=y-(y-panY)*ratio;zoom=next;if(zoom===1)panX=panY=0;paintImage()}
function loadLightbox(){if(!currentProject)return;const img=$('#lightbox-image'),count=currentProject.images.length;$('#lightbox-title').textContent=title(currentProject);img.alt=`${title(currentProject)} — ${t('original')}`;img.onload=fitImage;img.src=asset(currentProject,imageIndex);$('#image-counter').textContent=`${imageIndex+1} / ${count}`;$('#image-prev').hidden=$('#image-next').hidden=count<2;pointers.clear();oldPinch=null;if(img.complete)fitImage()}
$('#zoomin').onclick=()=>changeZoom(zoom*1.5);$('#zoomout').onclick=()=>changeZoom(zoom/1.5);$('#zoomreset').onclick=fitImage;$('#zoomactual').onclick=()=>changeZoom($('#lightbox-image').naturalWidth/fitW);$('#image-prev').onclick=()=>{imageIndex=(imageIndex+currentProject.images.length-1)%currentProject.images.length;loadLightbox()};$('#image-next').onclick=()=>{imageIndex=(imageIndex+1)%currentProject.images.length;loadLightbox()};
const stage=$('#image-stage');stage.addEventListener('wheel',e=>{e.preventDefault();changeZoom(zoom*Math.exp(-e.deltaY*.002),e.clientX,e.clientY)},{passive:false});stage.addEventListener('dblclick',e=>changeZoom(zoom>1?1:3,e.clientX,e.clientY));stage.onpointerdown=e=>{stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.classList.add('dragging');oldPinch=null};stage.onpointermove=e=>{if(!pointers.has(e.pointerId))return;const prev=pointers.get(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){const [a,b]=[...pointers.values()],dist=Math.hypot(a.x-b.x,a.y-b.y),cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;if(oldPinch){panX+=cx-oldPinch.x;panY+=cy-oldPinch.y;changeZoom(zoom*dist/oldPinch.dist,cx,cy)}oldPinch={dist,x:cx,y:cy}}else{panX+=e.clientX-prev.x;panY+=e.clientY-prev.y;paintImage()}};const endPointer=e=>{pointers.delete(e.pointerId);oldPinch=null;if(!pointers.size)stage.classList.remove('dragging')};stage.onpointerup=endPointer;stage.onpointercancel=endPointer;stage.onlostpointercapture=endPointer;
$('#lightbox').addEventListener('keydown',e=>{if(e.key==='ArrowRight'){$('#image-next').click();e.preventDefault()}if(e.key==='ArrowLeft'){$('#image-prev').click();e.preventDefault()}if(e.key==='+'||e.key==='='){changeZoom(zoom*1.5);e.preventDefault()}if(e.key==='-'){changeZoom(zoom/1.5);e.preventDefault()}if(e.key==='0'){fitImage();e.preventDefault()}if(['ArrowUp','ArrowDown'].includes(e.key)){panY+=e.key==='ArrowUp'?70:-70;paintImage();e.preventDefault()}});window.addEventListener('resize',()=>{if($('#lightbox').open)fitImage();if(innerWidth>600)closeMenu()});
setLanguage();route();observe();
