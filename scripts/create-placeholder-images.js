const fs = require('fs');
const path = require('path');

// SVGプレースホルダー画像を生成する関数
function createPlaceholderSVG(width, height, text, bgColor = '#f3f4f6', textColor = '#374151') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
          fill="${textColor}" font-family="Arial, sans-serif" font-size="24" font-weight="bold">
      ${text}
    </text>
  </svg>`;
}

// 画像リスト
const placeholderImages = [
  {
    filename: 'clinic-exterior.svg',
    text: '整骨院外観',
    width: 800,
    height: 600,
    bgColor: '#e0f2fe',
    textColor: '#0369a1'
  },
  {
    filename: 'treatment-room.svg', 
    text: '施術室',
    width: 800,
    height: 600,
    bgColor: '#f0fdf4',
    textColor: '#15803d'
  },
  {
    filename: 'treatment-scene.svg',
    text: '施術風景', 
    width: 800,
    height: 600,
    bgColor: '#fef3c7',
    textColor: '#d97706'
  },
  {
    filename: 'hands-treatment.svg',
    text: '治療の様子',
    width: 800,
    height: 600,
    bgColor: '#fce7f3',
    textColor: '#be185d'
  },
  {
    filename: 'consultation.svg',
    text: '診察室',
    width: 800,
    height: 600,
    bgColor: '#ede9fe',
    textColor: '#7c3aed'
  },
  {
    filename: 'zero-cost.svg',
    text: '自己負担0円',
    width: 400,
    height: 400,
    bgColor: '#fee2e2',
    textColor: '#dc2626'
  },
  {
    filename: 'evening-clinic.svg',
    text: '夜間営業',
    width: 400,
    height: 400,
    bgColor: '#1e293b',
    textColor: '#f1f5f9'
  },
  {
    filename: 'medical-equipment.svg',
    text: '専門医療機器',
    width: 400,
    height: 400,
    bgColor: '#ecfdf5',
    textColor: '#059669'
  },
  {
    filename: 'hero-background.svg',
    text: 'ヒーロー背景',
    width: 1920,
    height: 1080,
    bgColor: '#dbeafe',
    textColor: '#1d4ed8'
  },
  {
    filename: 'success-story.svg',
    text: '回復した患者',
    width: 800,
    height: 600,
    bgColor: '#ecfdf5',
    textColor: '#065f46'
  }
];

function createAllPlaceholders() {
  console.log('🎨 プレースホルダー画像を作成中...');
  
  // imagesディレクトリを作成
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  let successCount = 0;
  
  placeholderImages.forEach((config) => {
    try {
      const svg = createPlaceholderSVG(
        config.width,
        config.height,
        config.text,
        config.bgColor,
        config.textColor
      );
      
      const filePath = path.join(imagesDir, config.filename);
      fs.writeFileSync(filePath, svg);
      
      console.log(`✅ ${config.filename} を作成しました`);
      successCount++;
    } catch (error) {
      console.error(`❌ ${config.filename} の作成に失敗:`, error.message);
    }
  });

  console.log(`\n🎉 プレースホルダー画像作成完了！`);
  console.log(`✅ 成功: ${successCount}/${placeholderImages.length}枚`);
  
  return successCount === placeholderImages.length;
}

// スクリプト実行
if (require.main === module) {
  createAllPlaceholders();
}

module.exports = { createAllPlaceholders };