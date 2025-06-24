const OpenAI = require('openai');
require('dotenv').config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function testOpenAI() {
  try {
    console.log('🔍 OpenAI API接続テスト中...');
    console.log('API Key length:', process.env.OPENAI_API_KEY?.length);
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "A simple red apple on white background",
      n: 1,
      size: "1024x1024",
      style: "vivid",
      quality: "standard"
    });

    console.log('✅ API接続成功！');
    console.log('画像URL:', response.data[0].url);
    
  } catch (error) {
    console.error('❌ API接続エラー:');
    console.error('Status:', error.status);
    console.error('Message:', error.message);
    console.error('Error details:', error);
  }
}

testOpenAI();