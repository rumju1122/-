const groups={
association:[['문예림','등록·행정','27세','빠릿하고 현실적인 협회의 첫 얼굴. 등록, 자격, 부품과 출격에 관한 일은 이 창구로.',''],['정해원','훈련교관 · 1급','33세','느긋하지만 판단은 냉철합니다. 조종보다 먼저, 언제 멈춰야 하는지를 가르칩니다.','A급 · 화력지원·정밀 / CORE 핀'],['박지안','승급심사관 · 1급','38세','엄격하고 공정한 평가자. 화려한 승리보다 생환과 책임을 확인합니다.','A급 · 중장·방어 / CORE 앵커'],['한도연','현장통제관 · 2급','34세','건조하고 실무적인 현장 통제. 초동 대응과 구조, 합동 작전의 흐름을 조정합니다.','B급 · 전자전·화력지원 / CORE 노드'],['고태희','야드 관리','37세','말보다 행동을 봅니다. 남들이 버린 폐품도 쉽게 무시하지 않습니다.',''],['윤세아','출장정비사','24세','직설적이고 기계에는 집요합니다. 점검과 수리, 개조가 필요하면 찾게 될 사람.',''],['오민서','중고부품상','39세','능글맞은 흥정 뒤에 빠른 계산이 있습니다. 이익만큼 신용도 챙깁니다.',''],['차미래','의뢰 중개','32세','간결하고 실무적인 협상가. 계약과 완료 조건은 정확하게 정리합니다.',''],['서유라','게이트 연구','29세','새로운 자료 앞에서 말이 빨라집니다. 호기심이 위험 감각보다 앞설 때도 있습니다.',''],['레나','격리연구원 · 3급','38세','쉽게 믿지 않고 차분히 검증합니다. 감정과 격리 검사에서는 안전이 우선입니다.','B급 · 전자전·정찰 / CORE 셋']],
vector:[['서문하','길드장 · 1급','39세','현실적이고 결단력 있는 원정 지휘관. 실적과 생존, 사람 사이의 신뢰를 봅니다.','A급 · 중장·화력지원 / CORE 아크'],['백하진','정찰·루트 · 3급','26세','조용하고 관찰력이 좋습니다. 정보와 준비에는 꽤 까다로운 편입니다.','C급 · 정찰·정밀 / CORE 베일'],['조태린','회수·해체 · 4급','29세','느긋하지만 손은 빠릅니다. 물건의 가치와 돌아갈 길을 함께 계산합니다.','C급 · 작업·회수 / CORE 볼트'],['강서윤','정찰·기동호위 · 6급','22세','성급하고 승부욕이 강한 신입. 실력을 인정받고 싶어 하며 뒤끝은 짧습니다.','E급 · 기동·근접 / CORE 제트']],
pathfinder:[['이세린','길드장 · 2급','31세','냉정하고 집요한 검증주의자. 게이트 진입부터 귀환까지 쉽게 낙관하지 않습니다.','B급 · 전자전·정찰 / CORE 시그'],['배주연','정찰·엄호 · 3급','28세','과묵하고 신중합니다. 적정한 거리에서 관측하고, 필요할 때 엄호합니다.','C급 · 정밀·정찰 / CORE 렌'],['최나경','샘플·교란 대응 · 4급','25세','겁이 많지만 호기심도 많습니다. 절차와 장비를 꼼꼼히 챙기는 이유가 있습니다.','C급 · 작업·전자전 / CORE 비트']],
aegis:[['나채린','길드장 · 2급','30세','말수는 적고 끈기는 강합니다. 위험을 나누고 후퇴를 지키는 방어·구조 담당.','B급 · 중장·근접 / CORE 록'],['윤가람','구조·기체회수 · 3급','23세','쾌활하고 책임감이 강합니다. 두렵지 않아서가 아니라 동료를 위해 버팁니다.','C급 · 작업·회수 / CORE 리프'],['권도희','제압·철수엄호 · 3급','32세','투덜거리면서도 맡은 자리를 지킵니다. 화력을 언제 아낄지 아는 사람입니다.','C급 · 화력지원 / CORE 브릭']],
outside:[['마야','독립 탐사헌터 · 2급','36세','경계심 많고 현실적인 동행자. 외부 루트에서는 약속과 생환을 중시합니다.','B급 · 정찰·회수 / CORE 트랙'],['강무연','잔해연합 · 거점 관리','38세','무겁고 현실적인 책임자. 외부 거점의 생존과 질서를 관리합니다.','B급 · 중장·회수 / CORE 러스트'],['유선하','잔해연합 · 비공식 활동','27세','대담하고 독립적인 헌터. 금지구역과 정보에 능하며 자유와 성과를 따집니다.','C급 · 기동·정밀 / CORE 폭스'],['키라','약탈단 두목','35세','공격적이고 교활합니다. 힘과 이익을 좇으며 공포를 거래 수단으로 씁니다.','B급 · 중장·근접 / CORE 팽'],['니아','밀수·비공식 중개','31세','사교적이고 기억력이 좋습니다. 부드러운 말 사이로 신용과 비밀을 살핍니다.','']]
};
const panel=document.querySelector('#personnel');
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectGroup(button){tabs.forEach(tab=>{const active=tab===button;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1});panel.setAttribute('aria-labelledby',button.id);panel.replaceChildren(...groups[button.dataset.group].map((p,i)=>{const article=document.createElement('article');article.className='person';article.innerHTML=`<div class="person-top"><span class="person-code">PERSONNEL / ${String(i+1).padStart(2,'0')}</span><span class="person-rank">${p[2]}</span></div><h3>${p[0]}</h3><p class="role">${p[1]}</p><p class="person-desc">${p[3]}</p>${p[4]?`<p class="machine">${p[4]}</p>`:''}`;return article}));}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectGroup(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();tabs[next].focus();selectGroup(tabs[next])}})});
selectGroup(tabs[0]);
const navLinks=[...document.querySelectorAll('.section-nav a')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id))})},{rootMargin:'-15% 0px -65% 0px',threshold:0});document.querySelectorAll('main>section[id]').forEach(section=>observer.observe(section));}

const mapInfo={
  central:{kicker:'CENTRAL ADMIN',title:'중앙행정',body:'헌터협회·행정·병원이 모인 도시의 중심입니다. 등록, 치료, 의뢰와 공식적인 지원을 가장 먼저 확인할 수 있습니다.',facts:[['위치','도시 중앙'],['접근','방벽 내부 · 안전']]},
  commercial:{kicker:'LIVING ZONE',title:'상업생활',body:'주거·상점·식당과 중고 PART, 의뢰 중개가 모인 생활권입니다. 정비 전후에 필요한 물자와 사람을 만납니다.',facts:[['위치','북서 생활권'],['접근','방벽 내부']]},
  guild:{kicker:'GUILD QUARTER',title:'길드',body:'벡터·패스파인더·아이기스의 거점입니다. 지원을 받는 대신 수익 배분과 팀의 책임을 나눕니다.',facts:[['위치','북동 생활권'],['접근','방벽 내부']]},
  industry:{kicker:'INDUSTRIAL YARD',title:'산업정비',body:'신규 야드와 정비소, PART 창고와 물류·폐기 시설이 밀집한 구역입니다. 기체와 부품의 시작점입니다.',facts:[['위치','서남 산업권'],['접근','방벽 내부']]},
  research:{kicker:'RESEARCH QUARTER',title:'연구격리',body:'게이트 연구와 감정, 위험물 보관이 이뤄지는 통제구역입니다. 허가와 절차 없이 접근하지 마세요.',facts:[['위치','동남 통제구역'],['접근','허가 필요']]},
  wall:{kicker:'OUTER WALL',title:'외곽방벽',body:'출입문·검문과 원정 집결, 수송·구조가 이뤄지는 방벽 구역입니다. 출격 전 퇴로와 귀환 시간을 확인합니다.',facts:[['위치','도시 외곽'],['접근','검문 · 허가 필요']]},
  north:{kicker:'UNCONTROLLED OUTER ZONE',title:'원거리 무관리외곽',body:'도시의 통제와 보급이 닿기 어려운 미탐사 외곽입니다. 관측 정보가 적어 실제 위협과 귀환 경로를 현장에서 다시 확인해야 합니다.',facts:[['위치','북쪽 원거리'],['외부 위험도','불명–Ⅴ']]},
  west:{kicker:'FLOODED RUINS',title:'침수폐도시',body:'침수된 도로와 건물 잔해가 남은 폐도시입니다. 지형과 수위가 이동·시야·회수를 제약하므로 접근 경로와 운송 수단을 확인해야 합니다.',facts:[['위치','서쪽·남서쪽'],['외부 위험도','Ⅱ–Ⅳ']]},
  east:{kicker:'GATE FRONTIER',title:'게이트 밀집 전선',body:'게이트 활동과 유출 개체의 흔적이 집중된 외부 전선입니다. 구조와 개체, 교란 상황은 관측으로 확인하며 철수 조건을 먼저 정해야 합니다.',facts:[['위치','동쪽·북동쪽'],['외부 위험도','Ⅲ–Ⅴ']]},
  southeast:{kicker:'INDUSTRIAL WASTES',title:'산업폐허',body:'버려진 산업 시설과 물류 흔적이 남은 외곽입니다. 회수 가능한 물건이 있을 수 있지만 구조물 손상, 접근과 운송 제약을 함께 따져야 합니다.',facts:[['위치','남동쪽'],['외부 위험도','Ⅱ–Ⅲ']]}
};
const mapFacilities={
  central:'주요시설 · 헌터협회, 행정청, 병원',
  commercial:'주요시설 · 주거지, 상점, 식당, 중고 부품상',
  guild:'주요시설 · 벡터, 패스파인더, 아이기스 거점',
  industry:'주요시설 · 신규 야드, 정비소, 부품 창고',
  research:'주요시설 · 게이트 연구소, 감정실, 위험물 보관소',
  wall:'주요시설 · 출입문, 검문소, 원정 집결지',
  north:'주요지형 · 미탐사 외곽, 단절된 접근로',
  west:'주요지형 · 침수 도로, 폐건물, 잔해',
  east:'주요지형 · 게이트 활동 지대, 외부 전선',
  southeast:'주요지형 · 폐산업 시설, 물류 잔해'
};
const mapPanel=document.querySelector('#map-detail');
const mapButtons=[...document.querySelectorAll('.map-zone-hit')];
let selectedMapKey=null;
let lastMapButton=null;
function closeMapPanel(restoreFocus=false){
  if(!mapPanel)return;
  mapPanel.hidden=true;
  selectedMapKey=null;
  mapButtons.forEach(button=>{
    button.classList.remove('is-selected');
    button.setAttribute('aria-expanded','false');
  });
  if(restoreFocus)lastMapButton?.focus();
}
function openMapPanel(button){
  const key=button.dataset.map;
  const info=mapInfo[key];
  if(!info||!mapPanel)return;
  if(selectedMapKey===key&&!mapPanel.hidden){closeMapPanel();return;}
  selectedMapKey=key;
  lastMapButton=button;
  mapPanel.querySelector('.map-detail-kicker').textContent=info.kicker;
  mapPanel.querySelector('#map-detail-title').textContent=info.title;
  mapPanel.querySelector('.map-facilities').textContent=mapFacilities[key];
  mapPanel.querySelector('.map-description').textContent=info.body;
  const facts=mapPanel.querySelector('.map-facts');
  facts.replaceChildren(...info.facts.flatMap(([label,value])=>{
    const term=document.createElement('dt');
    const description=document.createElement('dd');
    term.textContent=label;
    description.textContent=value;
    return [term,description];
  }));
  mapButtons.forEach(item=>{
    const active=item===button;
    item.classList.toggle('is-selected',active);
    item.setAttribute('aria-expanded',String(active));
  });
  mapPanel.hidden=false;
}
mapButtons.forEach(button=>{
  button.setAttribute('aria-controls','map-detail');
  button.setAttribute('aria-expanded','false');
  button.addEventListener('click',()=>openMapPanel(button));
  button.addEventListener('keydown',event=>{
    if(event.key==='Enter'||event.key===' '){event.preventDefault();openMapPanel(button);}
  });
});
mapPanel?.querySelector('.map-panel-close')?.addEventListener('click',()=>closeMapPanel(true));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&mapPanel&&!mapPanel.hidden)closeMapPanel(true);
});
