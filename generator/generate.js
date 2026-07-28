const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SITE = {
  name: 'プログラミングスクールナビ',
  url: 'https://prog-select.com',
};

const AFFILIATE_TOP = `
<div style="background:#1e1b4b;border:2px solid #4f46e5;border-radius:8px;padding:20px;margin:24px 0;">
  <p style="font-weight:bold;color:#a5b4fc;margin:0 0 4px;font-size:12px;">【PR】プログラミング学習後の転職先を探している方へ</p>
  <p style="font-weight:bold;color:#fff;margin:0 0 12px;font-size:18px;">ITエンジニア転職ならTechGO（テックゴー）</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+5KN3N6+5B0Y+HV7V6" rel="nofollow" style="display:inline-block;background:#4f46e5;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:16px;">▶ ITエンジニアの転職なら【TechGO】無料登録</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B648M+5KN3N6+5B0Y+HV7V6" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+F7QUV6+5SN4+5YJRM" rel="nofollow" style="display:inline-block;background:#1d4ed8;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 未経験OK・3か月研修でエンジニア転職【BREXA SOLVIA】</a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B648K+F7QUV6+5SN4+5YJRM" alt=""></li>
  </ul>
</div>
<div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:8px;padding:16px;margin:24px 0;">
  <p style="font-weight:bold;color:#15803d;margin:0 0 8px;">【PR】おすすめプログラミングスクール</p>
  <ul style="list-style:none;padding:0;margin:0 0 12px;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+DN6OEA+529E+5YJRM" rel="nofollow" style="display:inline-block;background:#16a34a;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 資格と仕事に強い！個人レッスン【Winスクール】</a><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B648K+DN6OEA+529E+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+4S2ALU+5N98+BWVTE" rel="nofollow" style="display:inline-block;background:#7c3aed;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ SAPコンサル・SAPエンジニア転職【SAPテンショク】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B648M+4S2ALU+5N98+BWVTE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+5OT4VM+5P1E+5YJRM" rel="nofollow" style="display:inline-block;background:#059669;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 自分らしく働けるエンジニア転職【strategy career】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B648M+5OT4VM+5P1E+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+4DRW36+3IZO+HZI6Q" rel="nofollow" style="display:inline-block;background:#0369a1;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 社内SEへ転職するなら【社内SE転職ナビ】</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B648M+4DRW36+3IZO+HZI6Q" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648M+4A7AGI+3SWM+5YJRM" rel="nofollow" style="display:inline-block;background:#6d28d9;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ ITエンジニア専門転職エージェント【TechClipsエージェント】</a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B648M+4A7AGI+3SWM+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648L+D3JDFM+4V0U+ZQFQA" rel="nofollow" style="display:inline-block;background:#d97706;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 動画教材エディター養成コース</a><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B648L+D3JDFM+4V0U+ZQFQA" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+FFHHQA+5VRC+5YJRM" rel="nofollow" style="display:inline-block;background:#0f766e;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 環境構築不要！AIエージェント開発を即実践【AI Agent Camp】</a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B648K+FFHHQA+5VRC+5YJRM" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+FLFTS2+4K3S+5YRHE" rel="nofollow" style="display:inline-block;background:#be185d;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 最短・最速で脱動画編集初心者【Movie Hacks】</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4B648K+FLFTS2+4K3S+5YRHE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+EHJQPE+5KF0+5YRHE" rel="nofollow" style="display:inline-block;background:#1e40af;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ インフラエンジニアを始めるなら【ネットビジョンアカデミー】</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4B648K+EHJQPE+5KF0+5YRHE" alt=""></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+7VZSC2+50+2HDT1U" rel="nofollow" style="display:inline-block;background:#374151;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 独自ドメイン取得は国内シェアNo.1【お名前.com】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B648K+7VZSC2+50+2HDT1U" alt=""></li>
    <li><a href="//af.moshimo.com/af/c/click?a_id=5664377&p_id=7494&pc_id=21647&pl_id=93970" rel="nofollow" referrerpolicy="no-referrer-when-downgrade" style="display:inline-block;background:#f97316;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ AI鬼管理｜Claude Code活用の業務自動化トレーニング【無料】</a><img src="//i.moshimo.com/af/i/impression?a_id=5664377&p_id=7494&pc_id=21647&pl_id=93970" width="1" height="1" style="border:none;" loading="lazy"></li>
    <li><a href="https://px.a8.net/svt/ejp?a8mat=4B648K+DNS402+529E+HV7V6" rel="nofollow" style="display:inline-block;background:#3b82f6;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ 未経験からのPython転職【Python Winner｜マンツーマンレッスン】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4B648K+DNS402+529E+HV7V6" alt=""></li>
    <li><a href="//af.moshimo.com/af/c/click?a_id=5718255&p_id=7382&pc_id=21253&pl_id=92850" rel="nofollow" referrerpolicy="no-referrer-when-downgrade" attributionsrc style="display:inline-block;background:#e11d48;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">▶ プログラミングスクール卒業後の就活に迷ったら！内定まで個別サポート【キャリセン就活エージェント】無料相談</a><img src="//i.moshimo.com/af/i/impression?a_id=5718255&p_id=7382&pc_id=21253&pl_id=92850" width="1" height="1" style="border:none;" loading="lazy"></li>
  </ul>
  <p style="font-weight:bold;color:#15803d;margin:0 0 12px;">📚 プログラミング学習におすすめの入門書【Amazon】</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://www.amazon.co.jp/dp/4297154463?linkCode=ll2&tag=mirainikibouw-22&linkId=6a00dc85fa14e8d4f3aac58e05b36db9&ref_=as_li_ss_tl" rel="nofollow" target="_blank" style="color:#1d4ed8;text-decoration:underline;">▶ これからはじめるプログラミング 改訂4版【Amazon】</a></li>
    <li><a href="https://www.amazon.co.jp/dp/4297105799?linkCode=ll2&tag=mirainikibouw-22&linkId=da0c88022665ba016f394be517da4768&ref_=as_li_ss_tl" rel="nofollow" target="_blank" style="color:#1d4ed8;text-decoration:underline;">▶ はじめてのプログラミング【Amazon】</a></li>
    <li><a href="https://www.amazon.co.jp/dp/4815615756?linkCode=ll2&tag=mirainikibouw-22&linkId=5824f86747c0b2e49012e2074a10cfde&ref_=as_li_ss_tl" rel="nofollow" target="_blank" style="color:#1d4ed8;text-decoration:underline;">▶ 1冊ですべて身につくJavaScript入門講座【Amazon】</a></li>
  </ul>
</div>`;

const AFFILIATE_BOTTOM = `
<div style="background:#fff0f0;border:2px solid #e00;border-radius:8px;padding:16px;margin:24px 0;">
  <p style="font-weight:bold;color:#c00;margin:0 0 12px;">🛒 楽天で人気のプログラミング入門書</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
    <li><a href="https://hb.afl.rakuten.co.jp/ichiba/5570f8cd.82e98484.5570f8ce.5b744630/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F14334479%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="color:#c00;text-decoration:underline;">▶ プログラミング入門講座【楽天ブックス】</a></li>
    <li><a href="https://hb.afl.rakuten.co.jp/ichiba/5570f8cd.82e98484.5570f8ce.5b744630/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F482ccc51ff143df88b25fd2dddfd0dde%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="color:#c00;text-decoration:underline;">▶ Cプログラミング入門以前 第3版（電子書籍）【楽天Kobo】</a></li>
    <li><a href="https://hb.afl.rakuten.co.jp/ichiba/5570f8cd.82e98484.5570f8ce.5b744630/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15652310%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" target="_blank" rel="nofollow sponsored noopener" style="color:#c00;text-decoration:underline;">▶ これからはじめるプログラミング 基礎の基礎 改訂3版【楽天ブックス】</a></li>
  </ul>
</div>`;

async function generateArticle() {
  const topicsPath = path.join(__dirname, '..', 'unused-topics.json');
  const contentDir = path.join(__dirname, '..', 'content');

  const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf-8'));
  const existingFiles = new Set(fs.readdirSync(contentDir));

  const topic = topics.find(t => !existingFiles.has(t.filename));
  if (!topic) {
    console.log('全トピック生成完了');
    process.exit(0);
  }

  console.log(`生成中: ${topic.title}`);

  const today = new Date().toISOString().split('T')[0];

  const prompt = `あなたはプログラミング・IT教育メディア「${SITE.name}」の専門ライターです。
SEOに最適化されたプログラミング・エンジニアキャリア記事を生成してください。

トピック: ${topic.title}
カテゴリ: ${topic.category}

以下のJSON形式のみで出力してください（前後に余分なテキスト不要）:
{
  "title": "タイトル（SEO最適化、40〜60文字、年や具体的な数字を含める）",
  "description": "メタディスクリプション（120文字以内）",
  "category": "${topic.category}",
  "date": "${today}",
  "content": "HTMLコンテンツ"
}

contentの要件:
- 1500文字程度のHTML本文（簡潔にまとめること）
- h2見出しを3〜5個
- ul/liリスト、tableを活用
- 学習時間の目安・年収・難易度など具体的な数字を含める
- JSON文字列として正しくエスケープ（"は\\"、改行は\\n）
- 必ずJSON全体を完結させること（途中で切れないこと）`;

  let article = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const message = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 6000,
        messages: [{ role: 'user', content: prompt }],
      });
      const text = message.content[0].text.trim();
      console.log(`試行${attempt} 先頭200文字:`, text.slice(0, 200));
      const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '');
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        article = JSON.parse(jsonMatch[0]);
        break;
      }
      console.log(`試行${attempt}: JSONが見つかりません`);
    } catch (err) {
      console.log(`試行${attempt}エラー: ${err.message}`);
    }
    if (attempt < 3) await new Promise(r => setTimeout(r, 3000));
  }

  if (!article) {
    console.log('3回失敗のためトピックをスキップします');
    const remaining = topics.filter(t => t.filename !== topic.filename);
    fs.writeFileSync(topicsPath, JSON.stringify(remaining, null, 2));
    process.exit(0);
  }

  if (article.content.includes('<h2')) {
    article.content = article.content.replace('<h2', AFFILIATE_TOP + '<h2');
  } else {
    article.content = AFFILIATE_TOP + article.content;
  }
  article.content = article.content + AFFILIATE_BOTTOM;

  fs.writeFileSync(
    path.join(contentDir, topic.filename),
    JSON.stringify(article, null, 2)
  );

  const remaining = topics.filter(t => t.filename !== topic.filename);
  fs.writeFileSync(topicsPath, JSON.stringify(remaining, null, 2));

  console.log(`完了: ${topic.filename}`);
}

generateArticle().catch(err => {
  console.error('エラー:', err.message);
  process.exit(1);
});
