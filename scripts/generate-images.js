const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
const https = require('https');

// 環境変数を読み込み
require('dotenv').config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 画像ダウンロード関数
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ ${filename} をダウンロードしました`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // エラー時にファイルを削除
      reject(err);
    });
  });
}

// 画像生成とダウンロード関数
async function generateAndDownloadImage(prompt, filename, style = "vivid") {
  try {
    console.log(`🎨 "${prompt}" の画像を生成中...`);
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      style: style,
      quality: "standard"
    });

    const imageUrl = response.data[0].url;
    const filePath = path.join(__dirname, '..', 'public', 'images', filename);
    
    // imagesディレクトリが存在しない場合は作成
    const imagesDir = path.dirname(filePath);
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    await downloadImage(imageUrl, filePath);
    return `/images/${filename}`;
  } catch (error) {
    console.error(`❌ 画像生成エラー (${filename}):`, error.message);
    return null;
  }
}

// 生成する画像の設定
const imagesToGenerate = [
  {
    prompt: "Modern Japanese orthopedic clinic exterior, clean white building with glass windows, professional medical signage in Japanese, cherry blossoms trees nearby, bright daylight, professional medical photography",
    filename: "clinic-exterior.jpg",
    description: "整骨院外観"
  },
  {
    prompt: "Clean modern medical treatment room in Japanese clinic, white treatment bed, medical equipment, bright lighting, sterile environment, professional healthcare setting, Japanese style interior",
    filename: "treatment-room.jpg", 
    description: "施術室"
  },
  {
    prompt: "Japanese physical therapist treating patient's neck and shoulders, professional medical treatment, patient lying on treatment table, therapist wearing white medical uniform, soft lighting, healthcare scene",
    filename: "treatment-scene.jpg",
    description: "施術風景"
  },
  {
    prompt: "Japanese medical professional hands gently treating patient's neck area, close-up of therapeutic massage, professional medical care, soft lighting, healing hands, healthcare treatment",
    filename: "hands-treatment.jpg",
    description: "治療の様子"
  },
  {
    prompt: "Modern medical consultation room with Japanese doctor and patient, clean white interior, medical charts on wall, professional healthcare consultation, bright natural lighting",
    filename: "consultation.jpg",
    description: "診察室"
  },
  {
    prompt: "Japanese currency yen bills with zero cost concept, medical insurance papers, cost-free healthcare representation, clean white background, professional financial concept",
    filename: "zero-cost.jpg",
    description: "自己負担0円"
  },
  {
    prompt: "Evening view of Japanese medical clinic with warm lighting from windows, 'OPEN' sign visible, professional healthcare building at night, welcoming atmosphere",
    filename: "evening-clinic.jpg",
    description: "夜間営業"
  },
  {
    prompt: "Modern medical equipment and tools in Japanese clinic, professional healthcare technology, clean organized medical devices, bright clinical lighting",
    filename: "medical-equipment.jpg",
    description: "専門医療機器"
  },
  {
    prompt: "Soft abstract medical background with healing light rays, calming blue and white gradient colors, professional healthcare atmosphere, clean minimalist design",
    filename: "hero-background.jpg",
    style: "natural",
    description: "ヒーロー背景"
  },
  {
    prompt: "Happy recovered Japanese patient giving thumbs up after treatment, smiling person in casual clothes, bright natural lighting, success story, healthcare satisfaction",
    filename: "success-story.jpg",
    description: "回復した患者"
  }
];

async function generateAllImages() {
  console.log("🚀 OpenAI DALL-E 3で画像生成を開始します...");
  console.log(`📊 生成予定: ${imagesToGenerate.length}枚の画像`);
  
  const results = [];
  
  for (let i = 0; i < imagesToGenerate.length; i++) {
    const config = imagesToGenerate[i];
    console.log(`\n[${i + 1}/${imagesToGenerate.length}] ${config.description}を生成中...`);
    
    const result = await generateAndDownloadImage(
      config.prompt, 
      config.filename,
      config.style || "vivid"
    );
    
    results.push({
      ...config,
      path: result,
      success: result !== null
    });

    // API制限を考慮して少し待機
    if (i < imagesToGenerate.length - 1) {
      console.log("⏳ 次の画像生成まで3秒待機...");
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  // 結果レポート
  console.log("\n📋 生成結果レポート:");
  console.log("==================");
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✅ 成功: ${successful.length}枚`);
  console.log(`❌ 失敗: ${failed.length}枚`);
  
  if (successful.length > 0) {
    console.log("\n✅ 生成成功:");
    successful.forEach(r => console.log(`   - ${r.description}: ${r.path}`));
  }
  
  if (failed.length > 0) {
    console.log("\n❌ 生成失敗:");
    failed.forEach(r => console.log(`   - ${r.description}`));
  }

  console.log("\n🎉 画像生成完了！");
  return results;
}

// スクリプト実行
if (require.main === module) {
  generateAllImages().catch(console.error);
}

module.exports = { generateAllImages, generateAndDownloadImage };