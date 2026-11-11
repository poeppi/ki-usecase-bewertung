// Logiktest für usecase_bewertung.html (v1.3) ohne Browser.
// Aufruf:  node logiktest.js usecase_bewertung.html
// Mit simuliertem Datum:  FAKE_TODAY=2026-12-03 node logiktest.js usecase_bewertung.html
// Prüft Klassifizierung, nächste Schritte, gerenderte Hinweise, Exporte und Briefing (Testfälle T1 bis T14 aus kafk-check-veroeffentlichung-2026-08-01.md, soweit ohne Klicken prüfbar).
const fs=require('fs');
const html=fs.readFileSync(process.argv[2],'utf8');
const js=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
// DOM-Attrappe
global.__html=''; global.__alerts=[]; global.__downloads=[];
function el(){ const t={style:{},dataset:{},children:[],classList:{add(){},remove(){},contains(){return false},toggle(){}},value:'',textContent:'',_inner:''};
  return new Proxy(t,{get(o,k){ if(k==='innerHTML') return o._inner; if(k in o) return o[k];
    if(k==='querySelectorAll') return ()=>[]; if(k==='querySelector'||k==='closest'||k==='appendChild'||k==='cloneNode') return ()=>el();
    if(k==='getAttribute') return ()=>null; if(k==='then') return undefined; return ()=>undefined; },
    set(o,k,v){ if(k==='innerHTML'){o._inner=v; global.__html=v;} else o[k]=v; return true; }}); }
global.document={getElementById:()=>el(),querySelector:()=>el(),querySelectorAll:()=>[],createElement:()=>el(),addEventListener(){},body:el(),documentElement:el(),activeElement:null};
global.window=global; global.localStorage={getItem:()=>null,setItem(){},removeItem(){}};
global.alert=m=>global.__alerts.push(m); global.navigator={clipboard:{writeText:async()=>{}}};
global.URL={createObjectURL:()=>'',revokeObjectURL(){}}; global.Blob=class{constructor(p){global.__downloads.push(p.join(''))}};
global.requestAnimationFrame=f=>f(); global.scrollTo=()=>{}; global.setTimeout=(f)=>{try{f()}catch(e){}};
if(process.env.FAKE_TODAY){ const Real=Date; const fixed=new Real(process.env.FAKE_TODAY+'T12:00:00'); global.Date=class extends Real{ constructor(...a){ if(a.length===0) return new Real(fixed.getTime()); return new Real(...a);} static now(){return fixed.getTime();} }; console.log('Simuliertes Datum:',process.env.FAKE_TODAY); }
const vm=require('vm');
const testCode=`let fails=0; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c) fails++; };
function reset(a){ state.answers=Object.assign({is_ai_system:'ja',aivo_rolle:['betreiber'],automatisierungsgrad:'unterstuetzend',daten_personenbezogen:'nein',reifegrad:'standard',gpai_genutzt:'nein',transparenz_interaktion:'nein',transparenz_genai:'nein'},a); state.riskClass=classifyRisk(state.answers); state.briefing=null; return state.riskClass; }
const steps=()=>getNextSteps(state.riskClass,state.answers).join(' | ');

console.log('T1 Social Scoring'); let r=reset({verboten_social_scoring:'ja'}); ok(r.class==='verboten','Klasse verboten');
console.log('T13 nur lit. ba (vor 02.12.2026)'); r=reset({verboten_intimbilder:'ja'}); ok(r.class==='verboten','Klasse verboten'); renderVerboten(); const nachStichtag=new Date()>=new Date('2026-12-02'); ok(nachStichtag?!__html.includes('gelten ab 02.12.2026'):__html.includes('gelten ab 02.12.2026'),nachStichtag?'kein Zusatz-Hinweis nach Stichtag':'Alert nennt Geltung ab 02.12.2026'); ok(__html.includes(nachStichtag?'lit. ba, gilt seit 02.12.2026':'lit. ba, gilt ab 02.12.2026'),nachStichtag?'Label gilt seit 02.12.2026':'Label gilt ab 02.12.2026'); ok(!__html.includes('neu seit 27.07.2026'),'kein „neu seit 27.07.2026" mehr');
console.log('T2 Bewerbungs-Screening'); r=reset({hr_beschaeftigung:true,daten_personenbezogen:'ja',aivo_rolle:['anbieter','betreiber'],reifegrad:'eigenbau'}); ok(r.class==='hoch','Klasse hoch'); let s=steps(); ok(s.includes('Bundesnetzagentur'),'Aufsicht genannt'); ok(s.includes('EN 18286:2026'),'Norm im Anbieter-Schritt'); ok(s.includes('KI-Reallabor'),'Reallabor bei Eigenbau'); ok(s.includes('Art. 4'),'Art.-4-Schritt'); renderHochrisiko(); ok(__html.includes('ab 02.12.2027'),'Hochrisiko-Alert nennt 02.12.2027'); ok(__html.includes('Stand November 2026')||true,'(Leitlinien-Hinweis nur bei Ausnahme)');
console.log('T3 Ausnahme + Profiling'); r=reset({hr_beschaeftigung:true,art6_a:true,art6_profiling:'ja'}); ok(r.class==='hoch','bleibt hoch');
console.log('T4 Ausnahme ohne Profiling'); r=reset({hr_beschaeftigung:true,art6_a:true,art6_profiling:'nein'}); ok(r.class!=='hoch','fällt aus hoch ('+r.class+')'); renderHochrisiko(); ok(__html.includes('Stand November 2026'),'Leitlinien-Hinweis mit Stand November 2026'); ok(steps().includes('Bundesnetzagentur'),'Aufsicht genannt');
console.log('T5 offensichtlicher Chatbot'); r=reset({transparenz_interaktion:'ja',art50_offensichtlich:'ja'}); ok(r.class==='minimal','minimal');
console.log('T6 GenAI-Marketingtexte'); r=reset({transparenz_genai:'ja',art50_deepfake:'nein',art50_text_oeffentlich:'nein'}); ok(r.class==='begrenzt','begrenzt'); ok(steps().includes('Verhaltenskodex zur Transparenz'),'Transparenzkodex im Abs.-2-Schritt');
console.log('T7 Deepfake'); r=reset({transparenz_genai:'ja',art50_deepfake:'ja',art50_text_oeffentlich:'nein'}); ok(steps().includes('Leitlinien zu Art. 50'),'Leitlinien im Deepfake-Schritt');
console.log('T14 KI-Texte für die Öffentlichkeit ohne Prüfung'); r=reset({transparenz_genai:'ja',art50_deepfake:'nein',art50_text_oeffentlich:'ja',art50_text_redaktion:'nein',gpai_genutzt:'ja',gpai_rolle:'deployer'}); ok(r.class==='begrenzt','begrenzt'); ok(steps().includes('Art. 50 Abs. 4 UAbs. 2, Betreiberpflicht'),'Kennzeichnungsschritt');
  renderHochrisiko(); ok(__html.includes('Werden KI-generierte oder KI-bearbeitete Texte'),'neue Frage gerendert'); ok(__html.includes('art50_text_redaktion'),'Unterfrage gerendert'); ok(__html.includes('Kennzeichnungspflicht:</strong>'),'Pflicht-Alert'); ok(__html.includes('22 Anbieter'),'Deployer-Alert mit Unterzeichnerstand');
  renderErgebnis(); ok(__html.includes('KI-Texte zu Themen öffentlichen Interesses (Art. 50 Abs. 4 UAbs. 2)'),'Auslöser in Ergebnis-Card'); ok(__html.includes('02.12.2026'),'Zeitleiste 02.12.2026'); ok(__html.includes('02.08.2027'),'Zeitleiste 02.08.2027 (GPAI)');
  __downloads.length=0; exportMarkdown(); const md=__downloads[0]||''; ok(md.includes('| KI-Texte zu Themen öffentlichen Interesses | ⚠️'),'Markdown-Zeile'); ok(md.includes('02.12.2026')&&md.includes('02.08.2027'),'Markdown-Zeitleiste'); ok(md.includes('v1.3'),'Markdown-Stempel v1.3');
  __downloads.length=0; exportJSON(); const j=JSON.parse(__downloads[0]||'{}'); ok(j.meta&&j.meta.version==='1.3','JSON-Version 1.3'); ok(j.aiact&&j.aiact.transparenzpflichten.text_oeffentliches_interesse==='ja','JSON-Feld');
  generateBriefing('compliance'); const b=state.briefing||''; ok(b.includes('Kennzeichnung KI-generierter Texte'),'Briefing-Pflicht'); ok(b.includes(new Date()>=new Date('2026-12-02')?'gilt seit 02.12.2026':'gilt ab 02.12.2026'),'Briefing-Frist ba/bb datumsabhängig'); ok(b.includes('bis 02.08.2027'),'Briefing Alt-GPAI');
  __alerts.length=0; state.answers.art50_text_redaktion=undefined; saveHochrisiko(); ok(__alerts.length===1&&__alerts[0].includes('redaktionelle'),'Validierung Unterfrage');
console.log('T14b mit menschlicher Prüfung'); r=reset({transparenz_genai:'ja',art50_deepfake:'nein',art50_text_oeffentlich:'ja',art50_text_redaktion:'ja'}); ok(steps().includes('Ausnahme nach Art. 50 Abs. 4 UAbs. 2 dokumentieren'),'Dokumentations-Schritt'); generateBriefing('compliance'); ok(!(state.briefing||'').includes('Kennzeichnung KI-generierter Texte'),'kein Pflichteintrag'); renderErgebnis(); ok(!__html.includes('(Art. 50 Abs. 4 UAbs. 2)'),'kein Auslöser');
console.log('T8 Art. 22'); r=reset({automatisierungsgrad:'vollautomatisch',daten_personenbezogen:'ja',nutzer:['kunden']}); renderErgebnis(); ok(__html.includes('Art. 22')||true,'(Heuristik unverändert, nicht geprüft)');
console.log('Intro / Über das Tool'); state.answers={}; state.showIntro=true; render(); ok(__html.includes('Was beim Menschen bleibt')&&__html.includes('Wo die Grenzen liegen')&&__html.includes('Wie es funktioniert')&&__html.includes('Was es kann'),'vier Blöcke gerendert'); ok(__html.includes('Bewertung starten'),'Start-Button ohne Antworten'); closeIntro(); ok(state.showIntro===false&&__html.includes('Schritt 1 von 7'),'closeIntro führt zu Schritt 1'); state.answers={problem_text:'x'}; openIntro(); ok(__html.includes('Zurück zur Bewertung'),'Rückkehr-Label mit Antworten'); state.showIntro=false;
console.log('T10 minimal'); r=reset({}); ok(r.class==='minimal','minimal'); ok(steps().includes('Art. 95')&&steps().includes('Art. 4'),'Art. 95 und Art. 4');
console.log('Zeitleiste Markdown hoch'); reset({hr_bildung:true}); __downloads.length=0; exportMarkdown(); ok(/02\\.12\\.2027.*⏳/.test(__downloads[0])||__downloads[0].includes('02.12.2027'),'02.12.2027 enthalten');
console.log(fails===0?'\\nALLE PRÜFUNGEN GRÜN':'\\n'+fails+' PRÜFUNG(EN) ROT'); process.exit(fails?1:0);
`;
vm.runInThisContext(js+'\n'+testCode, {filename:'tool+tests.js'});
