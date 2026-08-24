/* Baut die Bühnen-HTML für ein Modulvideo. Heller Campus-Stil, dieselbe
   Bildsprache wie die Seite. Die Szenenfolge kommt aus
   src/lib/erklaervideo-szenen.js, damit Video und eingebauter Abspieler
   denselben Stoff in derselben Reihenfolge zeigen. */

const FARBE = {
  papier: "#fff", grund: "#eef1f6", feld: "#f6f8fb", linie: "#d3dae6", linieFein: "#e4e9f1",
  ink: "#101a2b", weich: "#5a6679", tinte: "#1c4fd8", tinteFeld: "#e9eefc",
  dunkel: "#12233f", gruen: "#12704a", rot: "#bf2a1d", orange: "#b2610a", orangeFeld: "#fdf2e3",
};

/* Erkennt Rechenzeilen in den Lösungsschritten: Zeilen mit Beträgen werden
   als Rechnung gesetzt, alles andere als Fließtext. */
export function istRechenzeile(text) {
  return /\d{1,3}(?:\.\d{3})+\s?€|\d+\s?€/.test(text) && /[=+]|\.\/\.|abzgl|zzgl/i.test(text);
}

export function buehneHtml({ campus, kopfzeile, szenen }) {
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
:root{--papier:${FARBE.papier};--grund:${FARBE.grund};--feld:${FARBE.feld};--linie:${FARBE.linie};
 --linie-fein:${FARBE.linieFein};--ink:${FARBE.ink};--weich:${FARBE.weich};--tinte:${FARBE.tinte};
 --tinte-feld:${FARBE.tinteFeld};--dunkel:${FARBE.dunkel};--gruen:${FARBE.gruen};--rot:${FARBE.rot};
 --orange:${FARBE.orange};--orange-feld:${FARBE.orangeFeld};
 --serif:"IBM Plex Serif",Georgia,serif;--sans:"IBM Plex Sans",system-ui,sans-serif;
 --mono:"IBM Plex Mono",ui-monospace,monospace}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1280px;height:720px;background:var(--grund);font-family:var(--sans);color:var(--ink);overflow:hidden}
.kopf{height:58px;background:var(--dunkel);color:#fff;display:flex;align-items:center;gap:13px;padding:0 34px}
.marke{width:27px;height:27px;border:1px solid #ffd66b;color:#ffd66b;display:grid;place-items:center;font:700 12px var(--mono)}
.kopf b{font:600 16px var(--serif)}
.kopf span{font:500 10px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:#9fb4dd}
.buehne{height:510px;position:relative;padding:26px 52px}
.ut{height:152px;background:var(--papier);border-top:1px solid var(--linie);padding:16px 52px;display:flex;align-items:center}
.ut p{font-family:var(--serif);line-height:1.45}
.balken{position:absolute;left:0;bottom:0;height:4px;background:var(--tinte)}
.kicker{font:600 12px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--tinte)}
h1{font-family:var(--serif);font-size:42px;line-height:1.14}
.norm{font:500 15px var(--mono);color:var(--weich);margin-top:12px}
.satz{font-family:var(--serif);font-size:26px;line-height:1.5}
.liste{list-style:none;margin-top:20px}
.liste li{display:grid;grid-template-columns:36px 1fr;gap:16px;padding:11px 0;font-size:22px;align-items:baseline;color:var(--weich)}
.liste li.an{color:var(--ink);font-weight:600}
.liste b{font:700 14px var(--mono);color:var(--tinte)}
.liste li.ok b{color:var(--gruen)}
.chips{display:flex;flex-wrap:wrap;gap:9px;margin-top:22px}
.chip{font:600 14px var(--mono);padding:8px 12px;background:var(--tinte-feld);color:var(--tinte)}
.block{margin-top:18px;background:var(--papier);border-left:5px solid var(--tinte);padding:22px 26px}
.block.gruen{border-left-color:var(--gruen)}
.block.orange{border-left-color:var(--orange);background:var(--orange-feld)}
.rw{margin-top:16px;width:100%;border-collapse:collapse;font-size:21px}
.rw td{padding:11px 4px;border-bottom:1px solid var(--linie)}
.rw .b{text-align:right;font:700 23px var(--mono);white-space:nowrap;padding-left:22px}
.rw tr.letzte td{border-top:3px double var(--ink);border-bottom:0;font-weight:700}
.rw tr.letzte .b{color:var(--gruen);font-size:26px}
</style></head><body>
<div class="kopf"><span class="marke">${campus.marke}</span><div><b>${campus.name}</b><br><span>${kopfzeile}</span></div></div>
<div class="buehne" id="b"></div>
<div class="ut"><p id="ut"></p></div>
<div class="balken" id="balken"></div>
<script>
const SZENEN = ${JSON.stringify(szenen)};
let TL=null, DAUER=0;
const E=x=>{x=x<0?0:x>1?1:x;return 1-Math.pow(1-x,3)};
function setzeTimeline(d){TL=d.timeline;DAUER=d.dauer}
function aktiv(t){let a=TL[0];for(const s of TL)if(t>=s.start-0.45)a=s;return a}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function render(t){
 const b=document.getElementById('b'), ut=document.getElementById('ut');
 document.getElementById('balken').style.width=Math.min(100,t/DAUER*100)+'%';
 const a=aktiv(t), i=TL.indexOf(a), sz=SZENEN[i]||{};
 const txt=t>=a.start-0.3?a.ut:"";
 ut.innerHTML='<p style="font-size:'+(txt.length>150?18:txt.length>95?20:22)+'px">'+esc(txt)+'</p>';
 const f=E((t-a.start-0.1)/0.75), v=sz.visual||{};
 let h='';
 if(v.typ==='titel'){
  const f1=E((t-a.start-0.15)/0.7), f2=E((t-a.start-0.6)/0.7), f3=E((t-a.start-1.1)/0.7);
  h='<div style="padding-top:66px"><div class="kicker" style="opacity:'+f1+'">'+esc(v.kicker)+'</div>'+
    '<h1 style="margin-top:14px;opacity:'+f2+';transform:translateY('+((1-f2)*14)+'px)">'+esc(v.titel)+'</h1>'+
    (v.law?'<div class="norm" style="opacity:'+f3+'">'+esc(v.law)+'</div>':'')+'</div>';
 } else if(v.typ==='liste'){
  h='<div class="kicker">'+esc(v.titel)+'</div><ol class="liste">';
  v.punkte.forEach((p,j)=>{const k=j===v.aktiv?' an':(j<v.aktiv?' ok':'');
   h+='<li class="'+k.trim()+'"><b>'+(v.stil==='haken'?(j<=v.aktiv?'✓':'·'):(j+1))+'</b><span>'+esc(p)+'</span></li>';});
  h+='</ol>';
 } else if(v.typ==='normen'){
  h='<div class="kicker">Normenkette</div><div class="chips">'+
    v.punkte.map((n,j)=>'<span class="chip" style="opacity:'+E((t-a.start-j*0.18)/0.6)+'">'+esc(n)+'</span>').join('')+'</div>';
 } else if(v.typ==='rechenweg'){
  h='<div class="kicker">'+esc(v.titel||'Rechenweg')+'</div><table class="rw">';
  v.zeilen.forEach((z,j)=>{const fz=E((t-a.start-j*0.05)/0.6);
   h+='<tr class="'+(j===v.zeilen.length-1?'letzte':'')+'" style="opacity:'+(j<=v.bis?fz:0)+'">'+
      '<td>'+esc(z.text)+'</td><td class="b">'+esc(z.betrag||'')+'</td></tr>';});
  h+='</table>';
 } else if(v.typ==='block'){
  h='<div class="kicker">'+esc(v.titel)+'</div><div class="block '+(v.ton||'')+'" style="opacity:'+f+
    ';transform:translateY('+((1-f)*12)+'px)"><p class="satz">'+esc(v.text)+'</p></div>';
 } else {
  h='<div style="padding-top:40px;opacity:'+f+';transform:translateY('+((1-f)*14)+'px)"><p class="satz">'+esc(v.text||'')+'</p></div>';
 }
 b.innerHTML=h;
}
window.render=render; window.setzeTimeline=setzeTimeline;
</script></body></html>`;
}
